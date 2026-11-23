package io.github.utopick.clockscapes

import android.annotation.SuppressLint
import android.app.Activity
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.graphics.Color
import android.webkit.JavascriptInterface
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import androidx.webkit.ServiceWorkerClientCompat
import androidx.webkit.ServiceWorkerControllerCompat
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewClientCompat
import androidx.webkit.WebViewFeature
import android.app.WallpaperManager

/**
 * Makes the WebView that shows the web app. The page is served from the APK's assets at a fixed https
 * address (WebViewAssetLoader), so the app, the wallpaper and the car screen share one origin and so one
 * set of saved settings (IndexedDB), and the page works offline like the installed web app.
 */
object Web {
    const val HOST = "appassets.androidplatform.net"
    const val URL = "https://$HOST/assets/www/index.html"

    /** The navigation bar's size as "[right, bottom]" in CSS pixels, kept up to date by MainActivity. */
    @Volatile
    var safeInsets = "[0,0]"

    private fun loader(context: Context) = WebViewAssetLoader.Builder()
        .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(context))
        .build()

    /** [autoplay] lets the page start sound without a tap (the car); [query] adds URL parameters. */
    @SuppressLint("SetJavaScriptEnabled")
    fun make(context: Context, autoplay: Boolean = false, query: String = ""): WebView {
        val loader = loader(context)
        // the page registers sw.js; its requests must come from the assets too
        if (WebViewFeature.isFeatureSupported(WebViewFeature.SERVICE_WORKER_BASIC_USAGE)) {
            ServiceWorkerControllerCompat.getInstance().setServiceWorkerClient(object : ServiceWorkerClientCompat() {
                override fun shouldInterceptRequest(request: WebResourceRequest): WebResourceResponse? =
                    loader.shouldInterceptRequest(request.url)
            })
        }
        return WebView(context).apply {
            settings.javaScriptEnabled = true
            settings.domStorageEnabled = true
            settings.mediaPlaybackRequiresUserGesture = !autoplay
            setBackgroundColor(Color.BLACK)
            addJavascriptInterface(Bridge(context), "ClockscapesAndroid")
            webViewClient = object : WebViewClientCompat() {
                override fun shouldInterceptRequest(view: WebView, request: WebResourceRequest): WebResourceResponse? =
                    loader.shouldInterceptRequest(request.url)

                // links out of the app (GitHub, Open-Meteo) open in the browser
                override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean {
                    if (request.url.host == HOST) return false
                    view.context.startActivity(
                        Intent(Intent.ACTION_VIEW, request.url).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                    )
                    return true
                }
            }
            loadUrl(URL + query)
        }
    }

    /** What the page can ask of Android: window.ClockscapesAndroid in JavaScript. */
    class Bridge(private val context: Context) {
        /** Opens the system screen that sets Clockscapes as the live wallpaper. */
        @JavascriptInterface
        fun setWallpaper() {
            val intent = Intent(WallpaperManager.ACTION_CHANGE_LIVE_WALLPAPER)
                .putExtra(
                    WallpaperManager.EXTRA_LIVE_WALLPAPER_COMPONENT,
                    ComponentName(context, ClockWallpaper::class.java)
                )
                .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            context.startActivity(intent)
        }

        /** Sends the app to the background, like the phone's home button (EXIT in the page). */
        @JavascriptInterface
        fun exit() {
            (context as? Activity)?.runOnUiThread { context.moveTaskToBack(true) }
        }

        /** The page's alarm list, as JSON, for the phone alarms (Alarms). */
        @JavascriptInterface
        fun setAlarms(json: String) {
            Alarms.save(context.applicationContext, json)
            (context as? MainActivity)?.askForNotifications()
        }

        /** The page's music started, stopped or moved to a new song: updates the music notification. */
        @JavascriptInterface
        fun musicState(playing: Boolean, title: String) {
            if (context is MainActivity) context.musicState(playing, title)
            // the car's off-screen page (CarMusic); the wallpaper and screensaver pages play no music
            else CarMusic.current?.let { car -> android.os.Handler(android.os.Looper.getMainLooper()).post { car.state(playing, title) } }
        }

        // The native music engine (NativeMusic), used by NativeSong in the page.
        @JavascriptInterface
        fun nativeMusic(): Boolean = NativeMusic.available

        @JavascriptInterface
        fun songStart(id: Int, text: String, delay: Double, fade: Double) =
            NativeMusic.play(id, text, delay.toFloat(), fade.toFloat())

        @JavascriptInterface
        fun songFade(id: Int, delay: Double, secs: Double) = NativeMusic.fade(id, delay.toFloat(), secs.toFloat())

        @JavascriptInterface
        fun songStop(id: Int) = NativeMusic.stop(id)

        @JavascriptInterface
        fun musicVolume(v: Double) = NativeMusic.volume(v.toFloat())

        @JavascriptInterface
        fun musicIdle() = NativeMusic.stopIfIdle()

        /** How much room the page leaves for the phone's navigation bar (see setSafeInsets in the page). */
        @JavascriptInterface
        fun insets(): String = safeInsets
    }
}
