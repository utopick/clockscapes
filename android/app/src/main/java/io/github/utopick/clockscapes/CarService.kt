package io.github.utopick.clockscapes

import android.content.Intent
import android.content.pm.ApplicationInfo
import android.os.Handler
import android.os.Looper
import android.graphics.Bitmap
import android.graphics.Canvas
import android.graphics.Rect
import android.media.MediaMetadata
import android.media.session.MediaSession
import android.media.session.PlaybackState
import android.webkit.WebView
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
import androidx.car.app.model.MessageTemplate
import androidx.car.app.navigation.model.MapWithContentTemplate
import androidx.car.app.validation.HostValidator
import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.LifecycleOwner
import org.json.JSONArray

/**
 * Android Auto. Clockscapes registers as a weather app, and weather apps may draw their own picture with
 * MapWithContentTemplate only. That template always has a content card, so the card is one short line (the
 * first clock's temperature) and the music buttons are the page's own, at the lower left, shown for
 * ten seconds after a tap. The scene fills the car screen behind both.
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
    companion object {
        /** The open car screen, so its page's ClockscapesAndroid.musicState and CarMusic reach it. */
        var current: ClockScreen? = null
    }

    private val page = SurfacePage(ContextThemeWrapper(car, android.R.style.Theme_Black_NoTitleBar), autoplay = true, query = "?layout=columns&car") // ?layout=rows&car stacks the clocks instead
    var playing = false
        private set
    var title = "Lo-fi from your clocks"
        private set
    var artist = "Clockscapes"
        private set
    /** The song's picture: the app's icon until the page sends a picture of the city (picture). */
    var art: Bitmap = Bitmap.createBitmap(256, 256, Bitmap.Config.ARGB_8888).also {
        car.packageManager.getApplicationIcon(car.packageName).apply { setBounds(0, 0, 256, 256) }.draw(Canvas(it))
    }
    private var resumeOnGain = false
    // The media session makes the music the phone's current media: Android Auto's media card shows the song
    // with working Play, Pause and Next, and headset buttons work too.
    private val session = MediaSession(car, "Clockscapes car screen")
    // the car screen's dpi, and where the area the host leaves free starts, in CSS pixels (sent to the page).
    // The host reports the same area however small the card is, and on which side depends on the car.
    private var dpi = 160
    private var cardRight = 0f
    private var width = 0
    private var freeRight = 0f
    private val audio = car.getSystemService(AudioManager::class.java)
    // each clock as [city, time, weather], read from the page every half minute
    private var clocks = listOf<List<String>>()
    private val tick = Handler(Looper.getMainLooper())
    private val read: Runnable = object : Runnable {
        override fun run() {
            page.js("window.setCarCard && setCarCard($cardRight, $freeRight)") // the page may have loaded since
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
        .setOnAudioFocusChangeListener { change ->
            when (change) {
                AudioManager.AUDIOFOCUS_LOSS -> setMusic(false) // another player took over
                // a call or a navigation prompt: stop, and play again when it is over
                AudioManager.AUDIOFOCUS_LOSS_TRANSIENT -> if (playing) {
                    resumeOnGain = true
                    page.js("musicPlay(false)")
                }
                AudioManager.AUDIOFOCUS_GAIN -> if (resumeOnGain) {
                    resumeOnGain = false
                    page.js("musicPlay(true)")
                }
            }
        }
        .build()

    init {
        current = this
        session.setCallback(object : MediaSession.Callback() {
            override fun onPlay() = setMusic(true)
            override fun onPause() = setMusic(false)
            override fun onStop() = setMusic(false)
            override fun onSkipToNext() = next()
        })
        publish()
        session.isActive = true
        car.getCarService(AppManager::class.java).setSurfaceCallback(object : SurfaceCallback {
            override fun onSurfaceAvailable(container: SurfaceContainer) {
                val surface = container.surface ?: return
                dpi = container.dpi
                width = container.width
                page.attach(surface, container.width, container.height, container.dpi)
            }

            // the scene fills the whole car screen, behind the card too; the page starts its clocks where the
            // free area starts. Its top is ignored: it only moves down while the action strip is showing.
            override fun onVisibleAreaChanged(visibleArea: Rect) {
                cardRight = visibleArea.left / (dpi / 160f)
                freeRight = maxOf(0, width - visibleArea.right) / (dpi / 160f)
                page.js("window.setCarCard && setCarCard($cardRight, $freeRight)")
            }

            // Android Auto puts its own buttons where it likes (top right), so the lower left ones are the
            // page's: a tap on the scene shows them, and a tap on one comes back here as its name.
            // They can't be reached without a touch screen.
            override fun onClick(x: Float, y: Float) {
                val k = dpi / 160f
                page.js("carTap(${x / k}, ${y / k}, $playing)") { key ->
                    when (key) {
                        "\"music\"" -> setMusic(!playing)
                        "\"next\"" -> next()
                    }
                }
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
                session.release()
                if (current === this@ClockScreen) current = null
                CarMusic.current?.publish()
            }
        })
    }

    fun owns(view: WebView) = page.has(view)

    fun picture(scene: Bitmap) {
        art = scene
        publish()
    }

    fun next() {
        page.js("if (musicOn()) nextSong(3)")
    }

    fun setMusic(on: Boolean) {
        // the car plays the phone's media sound once the app holds audio focus
        if (on && audio.requestAudioFocus(focus) != AudioManager.AUDIOFOCUS_REQUEST_GRANTED) return
        if (!on) {
            resumeOnGain = false
            audio.abandonAudioFocusRequest(focus)
        }
        playing = on
        page.js("musicPlay($playing)")
        publish()
        invalidate()
    }

    /** The page's music changed song, started or stopped (from ClockscapesAndroid.musicState). */
    fun state(on: Boolean, song: String) {
        // the page's line is "Çanakkale at night (hijaz style), 01:31, variation 2139"
        title = song.substringBefore(", ")
        artist = listOf("Clockscapes", song.substringAfterLast(", ", "")).filter { it.isNotEmpty() }.joinToString(" · ")
        if (!on && !resumeOnGain && playing) {
            playing = false
            audio.abandonAudioFocusRequest(focus)
        }
        publish()
    }

    private fun publish() {
        session.setMetadata(
            MediaMetadata.Builder()
                .putString(MediaMetadata.METADATA_KEY_TITLE, title)
                .putString(MediaMetadata.METADATA_KEY_ARTIST, artist)
                .putBitmap(MediaMetadata.METADATA_KEY_ALBUM_ART, art)
                .build()
        )
        session.setPlaybackState(
            PlaybackState.Builder()
                .setActions(
                    PlaybackState.ACTION_PLAY or PlaybackState.ACTION_PAUSE or PlaybackState.ACTION_PLAY_PAUSE or
                        PlaybackState.ACTION_STOP or PlaybackState.ACTION_SKIP_TO_NEXT
                )
                .setState(if (playing) PlaybackState.STATE_PLAYING else PlaybackState.STATE_PAUSED, 0, 1f)
                .build()
        )
        CarMusic.current?.publish() // Android Auto's media card shows that session
    }

    override fun onGetTemplate(): Template {
        val music = Row.Builder()
            .setTitle(if (playing) "Stop music" else "Play music")
            .setOnClickListener { setMusic(!playing) }
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
        // the scene shows every clock, so the card is as small as Android Auto allows: one short line
        val temperature = clocks.firstOrNull()?.get(2)?.substringBefore(' ').orEmpty()
        return MapWithContentTemplate.Builder()
            .setContentTemplate(MessageTemplate.Builder(temperature.ifEmpty { "Clockscapes" }).build())
            .build()
    }
}

// the page's clocks as JSON text: city, time and the weather line ("12°C clear sky")
private const val CLOCKS_JS =
    "JSON.stringify(COLS.map((c) => [c.zone.label, c.clockEl.textContent.replace(/(AM|PM)$/, ' $1'), " +
        "c.weatherText.textContent.trim()]))"
