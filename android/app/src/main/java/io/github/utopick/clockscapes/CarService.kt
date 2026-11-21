package io.github.utopick.clockscapes

import android.content.Intent
import android.graphics.Rect
import android.media.AudioAttributes
import android.media.AudioFocusRequest
import android.media.AudioManager
import android.view.ContextThemeWrapper
import androidx.car.app.AppManager
import androidx.car.app.CarAppService
import androidx.car.app.CarContext
import androidx.car.app.Screen
import androidx.car.app.Session
import androidx.car.app.SurfaceCallback
import androidx.car.app.SurfaceContainer
import androidx.car.app.model.ItemList
import androidx.car.app.model.ListTemplate
import androidx.car.app.model.Row
import androidx.car.app.model.Template
import androidx.car.app.navigation.model.MapWithContentTemplate
import androidx.car.app.validation.HostValidator
import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.LifecycleOwner

/**
 * Android Auto. Clockscapes registers as a weather app (it shows the live weather of every clock), and
 * weather apps may draw their own picture with MapWithContentTemplate: the scene fills the car screen
 * and a small card holds the music buttons.
 */
class CarService : CarAppService() {
    // shortcut: any host may connect, which is fine for a test build; a Play release must use the
    // allow-list from R.array.hosts_allowlist_sample instead
    override fun createHostValidator(): HostValidator = HostValidator.ALLOW_ALL_HOSTS_VALIDATOR

    override fun onCreateSession(): Session = object : Session() {
        override fun onCreateScreen(intent: Intent): Screen = ClockScreen(carContext)
    }
}

class ClockScreen(car: CarContext) : Screen(car) {
    private val page = SurfacePage(ContextThemeWrapper(car, android.R.style.Theme_Black_NoTitleBar), autoplay = true)
    private var playing = false
    private val audio = car.getSystemService(AudioManager::class.java)
    private val focus = AudioFocusRequest.Builder(AudioManager.AUDIOFOCUS_GAIN)
        .setAudioAttributes(
            AudioAttributes.Builder()
                .setUsage(AudioAttributes.USAGE_MEDIA)
                .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
                .build()
        )
        .build()

    init {
        car.getCarService(AppManager::class.java).setSurfaceCallback(object : SurfaceCallback {
            override fun onSurfaceAvailable(container: SurfaceContainer) {
                val surface = container.surface ?: return
                page.attach(surface, container.width, container.height, container.dpi)
            }

            // the part of the screen not covered by the card: the scene is laid out there
            override fun onVisibleAreaChanged(visibleArea: Rect) = page.setArea(visibleArea)

            override fun onSurfaceDestroyed(container: SurfaceContainer) = page.detach()
        })
        lifecycle.addObserver(object : DefaultLifecycleObserver {
            override fun onDestroy(owner: LifecycleOwner) {
                audio.abandonAudioFocusRequest(focus)
                page.detach()
            }
        })
    }

    override fun onGetTemplate(): Template {
        val music = Row.Builder()
            .setTitle(if (playing) "Stop music" else "Play music")
            .setOnClickListener {
                playing = !playing
                // the car plays the phone's media sound once the app holds audio focus
                if (playing) audio.requestAudioFocus(focus) else audio.abandonAudioFocusRequest(focus)
                page.js("musicPlay($playing)")
                invalidate()
            }
            .build()
        val next = Row.Builder()
            .setTitle("Next song")
            .setOnClickListener { page.js("if (musicOn()) nextSong(3)") }
            .build()
        @Suppress("DEPRECATION")
        val card = ListTemplate.Builder()
            .setTitle("Clockscapes")
            .setSingleList(ItemList.Builder().addItem(music).addItem(next).build())
            .build()
        // older car screens (below API level 7, navtest build only) can't show the scene, only the card
        if (carContext.carAppApiLevel < 7) return card
        return MapWithContentTemplate.Builder().setContentTemplate(card).build()
    }
}
