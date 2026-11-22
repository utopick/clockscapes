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
                if (change == AudioManager.AUDIOFOCUS_LOSS) js(MusicNotice.JS_STOP)
            }
            .build()
    }

    /** Shows the music notification (from the page, through ClockscapesAndroid.musicState). */
    fun musicState(playing: Boolean, title: String) = runOnUiThread {
        if (playing) {
            askForNotifications()
            audio.requestAudioFocus(focus)
        } else audio.abandonAudioFocusRequest(focus)
        MusicNotice.show(this, playing, title)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        current = this
        web = Web.make(this)
        setContentView(web)
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
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
    // page (tvBack), and only leaves the app when the page had nothing to close.
    @Deprecated("The page decides asynchronously, which the predictive back callback cannot wait for")
    override fun onBackPressed() {
        web.evaluateJavascript("window.tvBack ? tvBack() : false") { used ->
            @Suppress("DEPRECATION")
            if (used != "true") super.onBackPressed()
        }
    }

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
        web.destroy()
        super.onDestroy()
    }
}
