package io.github.utopick.clockscapes

import android.service.dreams.DreamService
import android.webkit.WebView

/**
 * The screensaver (Android's "Daydream"): the clocks while a TV sits idle, or while a phone charges.
 * It isn't interactive, so any key or touch ends it, and it stays silent like the live wallpaper (the page
 * never gets the tap it needs for sound). Pick it in the system's screensaver settings.
 */
class ClockDream : DreamService() {
    private var web: WebView? = null

    override fun onAttachedToWindow() {
        super.onAttachedToWindow()
        isInteractive = false
        isFullscreen = true
        web = Web.make(this).also { setContentView(it) }
    }

    override fun onDreamingStarted() {
        super.onDreamingStarted()
        web?.onResume()
        // settings may have been saved in the app since the page loaded
        web?.evaluateJavascript("window.reloadConfig && reloadConfig()", null)
    }

    override fun onDreamingStopped() {
        web?.onPause()
        super.onDreamingStopped()
    }

    override fun onDetachedFromWindow() {
        web?.destroy()
        web = null
        super.onDetachedFromWindow()
    }
}
