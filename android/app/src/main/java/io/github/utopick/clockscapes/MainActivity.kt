package io.github.utopick.clockscapes

import android.app.Activity
import android.os.Build
import android.os.Bundle
import android.view.View
import android.view.WindowInsets
import android.view.WindowManager
import android.webkit.WebView

/** The app itself: the web app full screen, like the installed web version. */
class MainActivity : Activity() {
    private lateinit var web: WebView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
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

    override fun onResume() {
        super.onResume()
        web.onResume()
    }

    override fun onPause() {
        web.onPause()
        super.onPause()
    }

    override fun onDestroy() {
        web.destroy()
        super.onDestroy()
    }
}
