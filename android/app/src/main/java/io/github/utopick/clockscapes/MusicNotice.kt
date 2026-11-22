package io.github.utopick.clockscapes

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.graphics.drawable.Icon
import android.media.MediaMetadata
import android.media.session.MediaSession
import android.media.session.PlaybackState

/**
 * The music notification: while the app's music plays (or was stopped from here), the notification
 * shade and the lock screen show the song with Stop/Play and Next buttons, so nobody has to go back to
 * the app to quiet it. The page reports the music through ClockscapesAndroid.musicState, and the
 * buttons call back into the page (toggleMusic, nextSong) through MainActivity.
 */
object MusicNotice {
    private const val CHANNEL = "music"
    private const val ID = 1
    const val TOGGLE = "io.github.utopick.clockscapes.TOGGLE"
    const val NEXT = "io.github.utopick.clockscapes.NEXT"

    // what each button runs in the page
    const val JS_PLAY = "musicOn() || toggleMusic()"
    const val JS_STOP = "musicOn() && toggleMusic()"
    const val JS_TOGGLE = "toggleMusic()"
    const val JS_NEXT = "musicOn() && nextSong(3)"

    private var session: MediaSession? = null

    fun show(activity: MainActivity, playing: Boolean, title: String) {
        val manager = activity.getSystemService(NotificationManager::class.java)
        manager.createNotificationChannel(
            NotificationChannel(CHANNEL, "Music", NotificationManager.IMPORTANCE_LOW)
                .apply { description = "Stop or skip the lo-fi music" }
        )
        // The media session gives the lock screen and headphone buttons the same controls; on Android
        // 13 and newer the notification's buttons come from it too.
        val media = session ?: MediaSession(activity, "Clockscapes").also { session = it }
        media.setCallback(object : MediaSession.Callback() {
            override fun onPlay() = MainActivity.js(JS_PLAY)
            override fun onPause() = MainActivity.js(JS_STOP)
            override fun onStop() = MainActivity.js(JS_STOP)
            override fun onSkipToNext() = MainActivity.js(JS_NEXT)
        })
        media.setMetadata(
            MediaMetadata.Builder()
                .putString(MediaMetadata.METADATA_KEY_TITLE, title)
                .putString(MediaMetadata.METADATA_KEY_ARTIST, "Clockscapes")
                .build()
        )
        media.setPlaybackState(
            PlaybackState.Builder()
                .setActions(
                    PlaybackState.ACTION_PLAY or PlaybackState.ACTION_PAUSE or
                        PlaybackState.ACTION_PLAY_PAUSE or PlaybackState.ACTION_STOP or
                        PlaybackState.ACTION_SKIP_TO_NEXT
                )
                .setState(if (playing) PlaybackState.STATE_PLAYING else PlaybackState.STATE_PAUSED, 0, 1f)
                .build()
        )
        media.isActive = true

        fun button(action: String, icon: Int, label: String) = Notification.Action.Builder(
            Icon.createWithResource(activity, icon), label,
            PendingIntent.getBroadcast(
                activity, action.hashCode(),
                Intent(action).setClass(activity, MusicButtons::class.java),
                PendingIntent.FLAG_IMMUTABLE
            )
        ).build()

        val open = PendingIntent.getActivity(
            activity, 0,
            Intent(activity, MainActivity::class.java).addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP),
            PendingIntent.FLAG_IMMUTABLE
        )
        val notice = Notification.Builder(activity, CHANNEL)
            .setSmallIcon(android.R.drawable.ic_media_play)
            .setContentTitle(title)
            .setContentText(if (playing) "Lo-fi music" else "Music stopped")
            .setContentIntent(open)
            .setVisibility(Notification.VISIBILITY_PUBLIC)
            .setOngoing(playing)
            .addAction(
                if (playing) button(TOGGLE, android.R.drawable.ic_media_pause, "Stop")
                else button(TOGGLE, android.R.drawable.ic_media_play, "Play")
            )
            .addAction(button(NEXT, android.R.drawable.ic_media_next, "Next"))
            .setStyle(Notification.MediaStyle().setMediaSession(media.sessionToken).setShowActionsInCompactView(0, 1))
            .build()
        manager.notify(ID, notice)
    }

    fun hide(context: Context) {
        context.getSystemService(NotificationManager::class.java).cancel(ID)
        session?.release()
        session = null
    }
}

/** The notification's Stop/Play and Next buttons on Android 12 and older. */
class MusicButtons : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        when (intent.action) {
            MusicNotice.TOGGLE -> MainActivity.js(MusicNotice.JS_TOGGLE)
            MusicNotice.NEXT -> MainActivity.js(MusicNotice.JS_NEXT)
        }
    }
}
