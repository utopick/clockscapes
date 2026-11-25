package io.github.utopick.clockscapes

import android.app.Presentation
import android.content.Context
import android.hardware.display.DisplayManager
import android.hardware.display.VirtualDisplay
import android.view.Surface
import android.view.ViewGroup
import android.webkit.WebView
import android.widget.FrameLayout

/**
 * Shows the web app on a Surface that is not a window: the live wallpaper's surface or the car screen.
 * A WebView can only draw inside a window, so this makes a private virtual display that renders straight
 * into the surface, and opens a Presentation (a window on that display) holding the WebView.
 */
class SurfacePage(private val context: Context, private val autoplay: Boolean, private val query: String = "") {
    private var display: VirtualDisplay? = null
    private var presentation: Presentation? = null
    private var web: WebView? = null

    fun attach(surface: Surface, width: Int, height: Int, dpi: Int) {
        detach()
        val manager = context.getSystemService(DisplayManager::class.java)
        val virtual = manager.createVirtualDisplay("clockscapes", width, height, dpi, surface, 0)
        display = virtual
        // on a private display a Presentation needs no window token, so it can open from a service
        val window = Presentation(context, virtual.display)
        val page = Web.make(window.context, autoplay, query)
        val frame = FrameLayout(window.context)
        frame.addView(page, FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT))
        window.setContentView(frame)
        window.show()
        presentation = window
        web = page
    }

    /** The surface changed size (the wallpaper on rotation): resize without reloading the page. */
    fun resize(width: Int, height: Int, dpi: Int) {
        display?.resize(width, height, dpi)
    }

    fun pause() = web?.onPause()
    fun resume() = web?.onResume()

    /** Runs JavaScript in the page (the car's music buttons), and hands its result, as JSON, to [done]. */
    fun js(code: String, done: ((String) -> Unit)? = null) = web?.evaluateJavascript(code) { done?.invoke(it) }

    fun detach() {
        presentation?.dismiss()
        web?.destroy()
        display?.release()
        presentation = null
        web = null
        display = null
    }
}
