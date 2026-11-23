package io.github.utopick.clockscapes

import android.media.AudioAttributes
import android.media.AudioFormat
import android.media.AudioTrack
import android.os.Handler
import android.os.Looper
import android.os.Process
import android.webkit.WebView

/**
 * The native music engine (native/lofi.c), the MUSIC tab's "Sound engine: Native". The page still
 * writes each song and sends it here as text (NativeSong in index.html); a thread of its own renders it in C
 * and plays it through an AudioTrack with a quarter second of buffer, so the page's work can't make it crackle.
 */
object NativeMusic {
    /** False when the library isn't in this APK (an unusual processor): the page then hides the option. */
    val available = try {
        System.loadLibrary("lofi")
        true
    } catch (e: Throwable) {
        false
    }
    private const val RATE = 48000
    private const val FRAMES = 1024
    private var thread: Thread? = null
    @Volatile private var running = false

    private external fun setup(rate: Int)
    private external fun render(buf: FloatArray, frames: Int)
    private external fun start(id: Int, text: String, delay: Float, fade: Float)
    external fun fade(id: Int, delay: Float, secs: Float)
    external fun stop(id: Int)
    external fun volume(v: Float)
    private external fun idle(): Boolean

    init {
        if (available) setup(RATE)
    }

    /** The page playing, nudged by beat() (only one page plays at a time). */
    private var page: WebView? = null
    private val main = Handler(Looper.getMainLooper())

    @Synchronized
    fun play(id: Int, text: String, delay: Float, fade: Float, from: WebView) {
        start(id, text, delay, fade)
        page = from
        if (thread == null) {
            thread = Thread(::loop, "lofi").apply { start() }
            main.post(::beat)
        }
    }

    /**
     * The page writes each next song, but with the screen off Chromium all but stops a silent page's timers,
     * so the page would never start it. Every 2 s while the engine runs, the app runs the page's musicTick
     * itself, which a throttled page still does at once.
     */
    private fun beat() {
        if (thread == null) return
        page?.evaluateJavascript("typeof musicOn == \"function\" && musicOn() && musicTick()", null)
        main.postDelayed(::beat, 2000)
    }

    /**
     * The page stopped its music: the thread and the AudioTrack go once no song is left (another page may
     * still play). The page's last stops reach the engine with its next block, so this looks again a few times.
     */
    fun stopIfIdle(tries: Int = 10) {
        synchronized(this) {
            if (thread == null) return
            if (idle()) {
                running = false
                thread?.join()
                thread = null
                page = null
                return
            }
        }
        if (tries > 0) Handler(Looper.getMainLooper()).postDelayed({ stopIfIdle(tries - 1) }, 200)
    }

    private fun loop() {
        Process.setThreadPriority(Process.THREAD_PRIORITY_URGENT_AUDIO)
        val track = AudioTrack.Builder()
            .setAudioAttributes(
                AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_MEDIA)
                    .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
                    .build()
            )
            .setAudioFormat(
                AudioFormat.Builder()
                    .setSampleRate(RATE)
                    .setEncoding(AudioFormat.ENCODING_PCM_FLOAT)
                    .setChannelMask(AudioFormat.CHANNEL_OUT_MONO)
                    .build()
            )
            .setBufferSizeInBytes(RATE / 4 * 4)
            .setPerformanceMode(AudioTrack.PERFORMANCE_MODE_POWER_SAVING)
            .setTransferMode(AudioTrack.MODE_STREAM)
            .build()
        val buf = FloatArray(FRAMES)
        running = true
        track.play()
        while (running) {
            render(buf, FRAMES)
            track.write(buf, 0, FRAMES, AudioTrack.WRITE_BLOCKING)
        }
        track.stop()
        track.release()
    }
}
