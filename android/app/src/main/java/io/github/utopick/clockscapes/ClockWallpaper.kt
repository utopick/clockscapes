package io.github.utopick.clockscapes

import android.service.wallpaper.WallpaperService
import android.view.SurfaceHolder
import android.view.ContextThemeWrapper

/**
 * The live wallpaper: the web app drawn on the home screen. It stays silent (no tap ever reaches it,
 * so the page never gets the gesture it needs for sound) and pauses while the home screen is hidden.
 */
class ClockWallpaper : WallpaperService() {
    override fun onCreateEngine(): Engine = ClockEngine()

    inner class ClockEngine : Engine() {
        private val page = SurfacePage(ContextThemeWrapper(this@ClockWallpaper, android.R.style.Theme_Black_NoTitleBar), autoplay = false)
        private var attached = false

        override fun onSurfaceChanged(holder: SurfaceHolder, format: Int, width: Int, height: Int) {
            super.onSurfaceChanged(holder, format, width, height)
            val dpi = resources.displayMetrics.densityDpi
            if (attached) page.resize(width, height, dpi)
            else page.attach(holder.surface, width, height, dpi)
            attached = true
        }

        override fun onVisibilityChanged(visible: Boolean) {
            if (visible) page.resume() else page.pause()
        }

        override fun onSurfaceDestroyed(holder: SurfaceHolder) {
            page.detach()
            attached = false
            super.onSurfaceDestroyed(holder)
        }

        override fun onDestroy() {
            page.detach()
            super.onDestroy()
        }
    }
}
