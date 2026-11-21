package io.github.utopick.clockscapes

import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import android.service.wallpaper.WallpaperService
import android.view.SurfaceHolder
import android.view.ContextThemeWrapper

/**
 * The live wallpaper: the web app drawn on the home screen. It stays silent (no tap ever reaches it,
 * so the page never gets the gesture it needs for sound) and pauses while the home screen is hidden.
 * While it shows, the motion sensor passes strong shakes to the page (nativeShake), so shaking the phone
 * 4 times calls a monster even on the lock screen, where nothing can be tapped.
 */
class ClockWallpaper : WallpaperService() {
    override fun onCreateEngine(): Engine = ClockEngine()

    inner class ClockEngine : Engine() {
        private val page = SurfacePage(ContextThemeWrapper(this@ClockWallpaper, android.R.style.Theme_Black_NoTitleBar), autoplay = false)
        private var attached = false
        private val sensors = getSystemService(SensorManager::class.java)
        private val shake = object : SensorEventListener {
            override fun onSensorChanged(ev: SensorEvent) {
                val (x, y, z) = ev.values
                val force = Math.abs(Math.sqrt((x * x + y * y + z * z).toDouble()) - SensorManager.GRAVITY_EARTH)
                // the same threshold as SHAKE_FORCE in the page, which counts the shakes
                if (force > 14) page.js("window.nativeShake && nativeShake()")
            }

            override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {}
        }

        override fun onSurfaceChanged(holder: SurfaceHolder, format: Int, width: Int, height: Int) {
            super.onSurfaceChanged(holder, format, width, height)
            val dpi = resources.displayMetrics.densityDpi
            if (attached) page.resize(width, height, dpi)
            else page.attach(holder.surface, width, height, dpi)
            attached = true
        }

        override fun onVisibilityChanged(visible: Boolean) {
            if (visible) {
                page.resume()
                // settings may have been saved in the app while the wallpaper was hidden
                page.js("window.reloadConfig && reloadConfig()")
                sensors.getDefaultSensor(Sensor.TYPE_ACCELEROMETER)?.let {
                    sensors.registerListener(shake, it, SensorManager.SENSOR_DELAY_GAME)
                }
            } else {
                page.pause()
                sensors.unregisterListener(shake)
            }
        }

        override fun onSurfaceDestroyed(holder: SurfaceHolder) {
            page.detach()
            attached = false
            super.onSurfaceDestroyed(holder)
        }

        override fun onDestroy() {
            sensors.unregisterListener(shake)
            page.detach()
            super.onDestroy()
        }
    }
}
