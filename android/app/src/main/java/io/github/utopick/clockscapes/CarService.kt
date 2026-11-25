package io.github.utopick.clockscapes

import android.content.Intent
import android.content.pm.ApplicationInfo
import android.os.Handler
import android.os.Looper
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
import androidx.car.app.model.Action
import androidx.car.app.model.MessageTemplate
import androidx.car.app.navigation.model.MapWithContentTemplate
import androidx.car.app.validation.HostValidator
import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.LifecycleOwner
import org.json.JSONArray

/**
 * Android Auto. Clockscapes registers as a weather app, and weather apps may draw their own picture with
 * MapWithContentTemplate: the scene fills the car screen, and a small card lists each clock's city, time
 * and weather, with the music buttons under them.
 */
class CarService : CarAppService() {
    // a debug build lets any host connect (the Desktop Head Unit, sideloaded tests); a release only
    // Android Auto and the car hosts on the library's own allow-list
    override fun createHostValidator(): HostValidator =
        if (applicationInfo.flags and ApplicationInfo.FLAG_DEBUGGABLE != 0) HostValidator.ALLOW_ALL_HOSTS_VALIDATOR
        else HostValidator.Builder(applicationContext)
            .addAllowedHosts(androidx.car.app.R.array.hosts_allowlist_sample)
            .build()

    override fun onCreateSession(): Session = object : Session() {
        override fun onCreateScreen(intent: Intent): Screen = ClockScreen(carContext)
    }
}

class ClockScreen(car: CarContext) : Screen(car) {
    private val page = SurfacePage(ContextThemeWrapper(car, android.R.style.Theme_Black_NoTitleBar), autoplay = true)
    private var playing = false
    // the car screen's dpi, and the right edge of the host's card in CSS pixels (sent to the page)
    private var dpi = 160
    private var cardRight = 0f
    private val audio = car.getSystemService(AudioManager::class.java)
    // each clock as [city, time, weather], read from the page every half minute
    private var clocks = listOf<List<String>>()
    private val tick = Handler(Looper.getMainLooper())
    private val read: Runnable = object : Runnable {
        override fun run() {
            page.js("window.setCarCard && setCarCard($cardRight)") // the page may have loaded since
            page.js(CLOCKS_JS) { json ->
                val rows = runCatching {
                    val a = JSONArray(JSONArray("[$json]").getString(0))
                    List(a.length()) { i -> a.getJSONArray(i).let { r -> List(3) { r.optString(it) } } }
                }.getOrNull()
                if (rows != null && rows != clocks) {
                    clocks = rows
                    invalidate()
                }
            }
            tick.postDelayed(this, 30_000)
        }
    }
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
                dpi = container.dpi
                page.attach(surface, container.width, container.height, container.dpi)
            }

            // the scene fills the whole car screen, behind the card too; the page keeps its clocks right of it
            override fun onVisibleAreaChanged(visibleArea: Rect) {
                cardRight = visibleArea.left / (dpi / 160f)
                page.js("window.setCarCard && setCarCard($cardRight)")
            }

            override fun onSurfaceDestroyed(container: SurfaceContainer) = page.detach()
        })
        lifecycle.addObserver(object : DefaultLifecycleObserver {
            override fun onStart(owner: LifecycleOwner) {
                tick.postDelayed(read, 3_000) // once the page has drawn its clocks
            }

            override fun onStop(owner: LifecycleOwner) = tick.removeCallbacks(read)

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
        val list = ItemList.Builder()
        for ((city, time, weather) in clocks) {
            val row = Row.Builder().setTitle(listOf(city, time).filter { it.isNotEmpty() }.joinToString("  ·  "))
            if (weather.isNotEmpty()) row.addText(weather)
            list.addItem(row.build())
        }
        @Suppress("DEPRECATION")
        val card = ListTemplate.Builder()
            .setTitle("Clockscapes")
            .setSingleList(list.addItem(music).addItem(next).build())
            .build()
        // older car screens (below API level 7, navtest build only) can't show the scene, only the card
        if (carContext.carAppApiLevel < 7) return card
        // on the scene screen a short message card (the clocks in two lines and the music buttons) instead of
        // the list, so the card covers as little of the scene as Android Auto allows
        val toggle = Action.Builder()
            .setTitle(if (playing) "Stop music" else "Play music")
            .setOnClickListener {
                playing = !playing
                if (playing) audio.requestAudioFocus(focus) else audio.abandonAudioFocusRequest(focus)
                page.js("musicPlay($playing)")
                invalidate()
            }
            .build()
        val skip = Action.Builder().setTitle("Next song").setOnClickListener { page.js("if (musicOn()) nextSong(3)") }.build()
        // the scene shows every clock, so the card holds only the music buttons
        val small = MessageTemplate.Builder("Clockscapes").addAction(toggle).addAction(skip).build()
        return MapWithContentTemplate.Builder().setContentTemplate(small).build()
    }
}

// the page's clocks as JSON text: city, time and the weather line ("12°C clear sky")
private const val CLOCKS_JS =
    "JSON.stringify(COLS.map((c) => [c.zone.label, c.clockEl.textContent.replace(/(AM|PM)$/, ' $1'), " +
        "c.weatherText.textContent.trim()]))"
