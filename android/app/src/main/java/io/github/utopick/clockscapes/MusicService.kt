package io.github.utopick.clockscapes

import android.app.Service
import android.content.Intent
import android.content.pm.ServiceInfo
import android.os.Build

/**
 * Keeps the app running while its music plays with the screen off, as music apps do: a foreground service
 * that shows the music notification (MusicNotice). Without it Android freezes the page about a minute after
 * the screen goes off, and the page is what writes each next song, so the native engine ran out of songs.
 */
class MusicService : Service() {
    override fun onBind(intent: Intent?) = null

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        val notice = MusicNotice.last ?: return START_NOT_STICKY.also { stopSelf() }
        if (Build.VERSION.SDK_INT >= 29) startForeground(MusicNotice.ID, notice, ServiceInfo.FOREGROUND_SERVICE_TYPE_MEDIA_PLAYBACK)
        else startForeground(MusicNotice.ID, notice)
        return START_NOT_STICKY
    }
}
