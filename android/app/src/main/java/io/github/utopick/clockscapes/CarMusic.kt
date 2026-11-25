package io.github.utopick.clockscapes

import android.graphics.Bitmap
import android.graphics.PixelFormat
import android.media.AudioAttributes
import android.media.AudioFocusRequest
import android.media.AudioManager
import android.media.ImageReader
import android.media.MediaDescription
import android.media.MediaMetadata
import android.media.browse.MediaBrowser
import android.media.session.MediaSession
import android.media.session.PlaybackState
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.service.media.MediaBrowserService
import android.view.ContextThemeWrapper

/**
 * Android Auto as a music app. Android Auto only lists the car screen (CarService) when the app comes from
 * Google Play, but it lists sideloaded music apps once its "Unknown sources" developer setting is on. This
 * runs the page off screen (SurfacePage on an ImageReader), plays its music when the car asks, and sends a
 * frame of the scene every half minute as the cover picture, so the car still shows the city.
 */
class CarMusic : MediaBrowserService() {
    companion object {
        private const val ROOT = "root"
        private const val SONG = "lofi"
        private const val ART_EVERY_MS = 30_000L
        private const val W = 800
        private const val H = 450

        /** The running service, so the page's ClockscapesAndroid.musicState reaches it (see Web.Bridge). */
        var current: CarMusic? = null
    }

    private lateinit var session: MediaSession
    private val page by lazy { SurfacePage(ContextThemeWrapper(this, android.R.style.Theme_Black_NoTitleBar), autoplay = true) }
    private var frames: ImageReader? = null
    private var art: Bitmap? = null
    private var lastArt = 0L
    private var title = "Lo-fi from your clocks"
    private var playing = false
    private var resumeOnGain = false

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
                    AudioManager.AUDIOFOCUS_LOSS -> stop()
                    // a call or a navigation prompt: stop, and play again when it is over
                    AudioManager.AUDIOFOCUS_LOSS_TRANSIENT -> if (playing) {
                        page.js("musicPlay(false)")
                        resumeOnGain = true
                    }
                    AudioManager.AUDIOFOCUS_GAIN -> if (resumeOnGain) {
                        resumeOnGain = false
                        page.js("musicPlay(true)")
                    }
                }
            }
            .build()
    }

    override fun onCreate() {
        super.onCreate()
        current = this
        session = MediaSession(this, "Clockscapes car")
        session.setCallback(object : MediaSession.Callback() {
            // while the car screen (ClockScreen) is open its page is the one that plays: Android Auto shows
            // this session in its media card, so the buttons there go to that page
            override fun onPlay() = ClockScreen.current?.setMusic(true) ?: play()
            override fun onPlayFromMediaId(mediaId: String?, extras: Bundle?) = onPlay()
            override fun onPause() = ClockScreen.current?.setMusic(false) ?: stop()
            override fun onStop() = onPause()
            override fun onSkipToNext() {
                ClockScreen.current?.next() ?: page.js("if (musicOn()) nextSong(3)")
            }
        })
        sessionToken = session.sessionToken
        publish()
        session.isActive = true
    }

    override fun onGetRoot(clientPackageName: String, clientUid: Int, rootHints: Bundle?) = BrowserRoot(ROOT, null)

    override fun onLoadChildren(parentId: String, result: Result<MutableList<MediaBrowser.MediaItem>>) {
        val song = MediaDescription.Builder()
            .setMediaId(SONG)
            .setTitle("Lo-fi from your clocks")
            .setSubtitle("Clockscapes")
            .build()
        result.sendResult(
            if (parentId == ROOT) mutableListOf(MediaBrowser.MediaItem(song, MediaBrowser.MediaItem.FLAG_PLAYABLE))
            else mutableListOf()
        )
    }

    private fun play() {
        if (audio.requestAudioFocus(focus) != AudioManager.AUDIOFOCUS_REQUEST_GRANTED) return
        if (frames == null) {
            // the page needs a window to run, so it draws into an image reader; most frames are dropped
            val reader = ImageReader.newInstance(W, H, PixelFormat.RGBA_8888, 2)
            reader.setOnImageAvailableListener({ r ->
                val image = r.acquireLatestImage() ?: return@setOnImageAvailableListener
                val now = System.currentTimeMillis()
                if (now - lastArt > ART_EVERY_MS) {
                    lastArt = now
                    val plane = image.planes[0]
                    val padded = Bitmap.createBitmap(plane.rowStride / plane.pixelStride, H, Bitmap.Config.ARGB_8888)
                    padded.copyPixelsFromBuffer(plane.buffer)
                    art = Bitmap.createBitmap(padded, 0, 0, W, H)
                    publish()
                }
                image.close()
            }, Handler(Looper.getMainLooper()))
            frames = reader
            page.attach(reader.surface, W, H, 160)
            // the page may still be loading: musicPlay is retried until it exists
            page.js("(function go(){ window.musicPlay ? musicPlay(true) : setTimeout(go, 300) })()")
        } else page.js("musicPlay(true)")
        playing = true
        publish()
    }

    private fun stop() {
        resumeOnGain = false
        page.js("window.musicPlay && musicPlay(false)")
        audio.abandonAudioFocusRequest(focus)
        playing = false
        publish()
    }

    /** The page's music changed song or stopped (from ClockscapesAndroid.musicState). */
    fun state(on: Boolean, song: String) {
        title = song
        if (!on && !resumeOnGain) {
            playing = false
            audio.abandonAudioFocusRequest(focus)
        }
        publish()
    }

    /** Shows this player's song, or the car screen's while that is open. */
    fun publish() {
        val car = ClockScreen.current
        val playing = car?.playing ?: playing
        session.setMetadata(
            MediaMetadata.Builder()
                .putString(MediaMetadata.METADATA_KEY_MEDIA_ID, SONG)
                .putString(MediaMetadata.METADATA_KEY_TITLE, car?.title ?: title)
                .putString(MediaMetadata.METADATA_KEY_ARTIST, car?.artist ?: "Clockscapes")
                .apply { (car?.art ?: art)?.let { putBitmap(MediaMetadata.METADATA_KEY_ALBUM_ART, it) } }
                .build()
        )
        session.setPlaybackState(
            PlaybackState.Builder()
                .setActions(
                    PlaybackState.ACTION_PLAY or PlaybackState.ACTION_PAUSE or PlaybackState.ACTION_PLAY_PAUSE or
                        PlaybackState.ACTION_STOP or PlaybackState.ACTION_SKIP_TO_NEXT or
                        PlaybackState.ACTION_PLAY_FROM_MEDIA_ID
                )
                .setState(if (playing) PlaybackState.STATE_PLAYING else PlaybackState.STATE_PAUSED, 0, 1f)
                .build()
        )
    }

    override fun onDestroy() {
        stop()
        page.detach()
        frames?.close()
        session.release()
        if (current === this) current = null
        super.onDestroy()
    }
}

