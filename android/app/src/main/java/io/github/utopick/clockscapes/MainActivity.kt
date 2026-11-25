package io.github.utopick.clockscapes

import android.app.Activity
import android.app.UiModeManager
import android.content.res.Configuration
import android.content.pm.PackageManager
import android.media.AudioAttributes
import android.media.AudioFocusRequest
import android.media.AudioManager
import android.os.Build
import android.os.Bundle
import android.view.View
import android.view.WindowInsets
import android.view.WindowManager
import android.webkit.WebView
import android.window.OnBackInvokedDispatcher

/** The app itself: the web app full screen, like the installed web version. */
class MainActivity : Activity() {
    private lateinit var web: WebView

    companion object {
        /** The open app, so the music notification's buttons can reach its page. */
        private var current: MainActivity? = null

        fun js(code: String) {
            current?.let { it.runOnUiThread { it.web.evaluateJavascript(code, null) } }
        }

        /** True while the app is on screen (its page then sounds the alarms itself). */
        @Volatile
        var inFront = false
    }

    /** Android 13 and newer ask the person once before an app may show notifications. */
    fun askForNotifications() = runOnUiThread {
        if (Build.VERSION.SDK_INT >= 33 &&
            checkSelfPermission(android.Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED
        ) requestPermissions(arrayOf(android.Manifest.permission.POST_NOTIFICATIONS), 1)
    }

    // Holding audio focus makes the music count as the phone's media: other players pause, and a call or
    // another app taking over stops it.
    private val audio by lazy { getSystemService(AudioManager::class.java) }
    private val focus by lazy {
        AudioFocusRequest.Builder(AudioManager.AUDIOFOCUS_GAIN)
            .setAudioAttributes(
                AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_MEDIA)
                    .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
                    .build()
            )
            .setOnAudioFocusChangeListener { change ->
                when (change) {
                    AudioManager.AUDIOFOCUS_LOSS -> js(MusicNotice.JS_STOP)
                    // a call, a voice message or a navigation prompt: stop, keep the focus, and play again
                    // once it is over
                    AudioManager.AUDIOFOCUS_LOSS_TRANSIENT -> if (focused) {
                        resumeOnGain = true
                        stoppedForFocus = true
                        js(MusicNotice.JS_STOP)
                    }
                    AudioManager.AUDIOFOCUS_GAIN -> if (resumeOnGain) {
                        resumeOnGain = false
                        js(MusicNotice.JS_PLAY)
                    }
                }
            }
            .build()
    }
    private var focused = false
    private var resumeOnGain = false
    private var stoppedForFocus = false

    /** Shows the music notification (from the page, through ClockscapesAndroid.musicState). */
    fun musicState(playing: Boolean, title: String) = runOnUiThread {
        if (playing) {
            askForNotifications()
            // asked once when the music starts, not on every song, which would take the sound back from
            // another app playing meanwhile
            if (!focused) {
                if (audio.requestAudioFocus(focus) != AudioManager.AUDIOFOCUS_REQUEST_GRANTED) {
                    js(MusicNotice.JS_STOP) // a call is on: no music
                    return@runOnUiThread
                }
                focused = true
            }
        } else if (stoppedForFocus) {
            stoppedForFocus = false // stopped for a call: keep the focus to hear when it ends
        } else {
            resumeOnGain = false
            focused = false
            audio.abandonAudioFocusRequest(focus)
        }
        MusicNotice.show(this, playing, title)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        current = this
        web = Web.make(this)
        // Android 13 and newer send Back here instead of onBackPressed (the manifest opts in, and from
        // Android 16 it is the only way)
        if (Build.VERSION.SDK_INT >= 33)
            onBackInvokedDispatcher.registerOnBackInvokedCallback(OnBackInvokedDispatcher.PRIORITY_DEFAULT) { back() }
        // the page writes the songs, so with the screen off its process keeps the app's priority (which
        // MusicService raises while the music plays) instead of being frozen as hidden pages are
        web.setRendererPriorityPolicy(android.webkit.WebView.RENDERER_PRIORITY_IMPORTANT, false)
        setContentView(web)
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON) // until the page says (keepScreenOn in Web.kt)
        @Suppress("DEPRECATION")
        window.decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY or
            View.SYSTEM_UI_FLAG_FULLSCREEN or View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
        // The navigation bar comes back over the page when swiped up, so the page keeps its buttons above
        // it (and above the gesture strip at the bottom of the screen), even while the bar is hidden.
        window.decorView.setOnApplyWindowInsetsListener { view, insets ->
            val density = resources.displayMetrics.density
            val (right, bottom) = if (Build.VERSION.SDK_INT >= 30) {
                val bar = insets.getInsetsIgnoringVisibility(WindowInsets.Type.navigationBars())
                val gestures = insets.getInsets(WindowInsets.Type.mandatorySystemGestures())
                maxOf(bar.right, gestures.right) to maxOf(bar.bottom, gestures.bottom)
            } else {
                @Suppress("DEPRECATION")
                insets.stableInsetRight to insets.stableInsetBottom
            }
            Web.safeInsets = "[${(right / density).toInt()},${(bottom / density).toInt()}]"
            web.evaluateJavascript("window.setSafeInsets && setSafeInsets(...${Web.safeInsets})", null)
            view.onApplyWindowInsets(insets)
        }
    }

    // Back on a TV remote (or the phone's back gesture) first closes settings or hides the buttons in the
    // page (tvBack), and only leaves the app when the page had nothing to close. Leaving moves the app to
    // the background, as Back does on a launcher's own app since Android 12, rather than closing it.
    private fun back() = web.evaluateJavascript("window.tvBack ? tvBack() : false") { used ->
        if (used != "true") moveTaskToBack(true)
    }

    @Deprecated("Android 12 and older only; newer versions use the callback registered in onCreate")
    override fun onBackPressed() = back()

    override fun onResume() {
        super.onResume()
        inFront = true
        web.onResume()
    }

    // A TV has no notification to stop the music from, so leaving the app (Home, another app, the screensaver)
    // stops it there. A phone keeps playing in the background, with its notification.
    override fun onStop() {
        if (getSystemService(UiModeManager::class.java).currentModeType == Configuration.UI_MODE_TYPE_TELEVISION)
            web.evaluateJavascript(MusicNotice.JS_STOP, null)
        super.onStop()
    }

    override fun onPause() {
        inFront = false
        web.onPause()
        super.onPause()
    }

    override fun onDestroy() {
        if (current === this) current = null
        MusicNotice.hide(this)
        NativeMusic.release(web) // the native engine plays apart from the page, so it must be stopped
        web.destroy()
        super.onDestroy()
    }
}
