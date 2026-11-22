package io.github.utopick.clockscapes

import android.app.AlarmManager
import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.media.AudioAttributes
import android.media.RingtoneManager
import android.os.Build
import org.json.JSONArray
import java.util.Calendar

/**
 * The page's daily alarms as real phone alarms. The page sends its alarm list (setAlarms in the
 * bridge), which is kept in the app's preferences. Only the next alarm is booked with the system
 * (AlarmManager.setAlarmClock, which also shows the alarm icon in the status bar); when it rings,
 * AlarmRing shows a notification with the message and books the one after. BootReceiver books it again
 * after a restart or a change of time zone.
 */
object Alarms {
    private const val PREFS = "alarms"
    private const val LOUD = "alarms"
    private const val QUIET = "alarms-quiet"
    const val NOTICE = 2

    fun save(context: Context, json: String) {
        context.getSharedPreferences(PREFS, Context.MODE_PRIVATE).edit().putString("list", json).apply()
        schedule(context)
    }

    /** Books the soonest alarm from the saved list, or cancels the booking when there is none. */
    fun schedule(context: Context) {
        val manager = context.getSystemService(AlarmManager::class.java)
        val ring = PendingIntent.getBroadcast(
            context, 0, Intent(context, AlarmRing::class.java),
            PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT
        )
        manager.cancel(ring)
        val list = runCatching { JSONArray(load(context)) }.getOrNull() ?: return
        var soonest: Long? = null
        for (i in 0 until list.length()) {
            val time = list.optJSONObject(i)?.optString("time") ?: continue
            val (h, m) = time.split(":").mapNotNull { it.toIntOrNull() }.takeIf { it.size == 2 } ?: continue
            val at = Calendar.getInstance().apply {
                set(Calendar.HOUR_OF_DAY, h)
                set(Calendar.MINUTE, m)
                set(Calendar.SECOND, 0)
                set(Calendar.MILLISECOND, 0)
                if (timeInMillis <= System.currentTimeMillis()) add(Calendar.DAY_OF_YEAR, 1)
            }.timeInMillis
            if (soonest == null || at < soonest) soonest = at
        }
        val at = soonest ?: return
        val open = PendingIntent.getActivity(
            context, 0, Intent(context, MainActivity::class.java), PendingIntent.FLAG_IMMUTABLE
        )
        if (Build.VERSION.SDK_INT < 31 || manager.canScheduleExactAlarms())
            manager.setAlarmClock(AlarmManager.AlarmClockInfo(at, open), ring)
        else manager.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, at, ring) // a few minutes late at worst
    }

    fun load(context: Context): String =
        context.getSharedPreferences(PREFS, Context.MODE_PRIVATE).getString("list", "[]") ?: "[]"

    /** The notification for every alarm set to this minute; with the alarm sound unless all are silent. */
    fun ring(context: Context) {
        val now = Calendar.getInstance()
        val hm = "%02d:%02d".format(now.get(Calendar.HOUR_OF_DAY), now.get(Calendar.MINUTE))
        val list = runCatching { JSONArray(load(context)) }.getOrNull() ?: JSONArray()
        val due = (0 until list.length()).mapNotNull { list.optJSONObject(it) }.filter { it.optString("time") == hm }
        if (due.isNotEmpty()) {
            val text = due.joinToString(" · ") { it.optString("text").ifBlank { "Alarm" } }
            // the open app plays the page's own alarm sound, so its notification stays quiet
            val loud = due.any { it.optBoolean("sound", true) } && !MainActivity.inFront
            val manager = context.getSystemService(NotificationManager::class.java)
            manager.createNotificationChannel(
                NotificationChannel(LOUD, "Alarms", NotificationManager.IMPORTANCE_HIGH).apply {
                    setSound(
                        RingtoneManager.getDefaultUri(RingtoneManager.TYPE_ALARM),
                        AudioAttributes.Builder().setUsage(AudioAttributes.USAGE_ALARM).build()
                    )
                }
            )
            manager.createNotificationChannel(
                NotificationChannel(QUIET, "Silent alarms", NotificationManager.IMPORTANCE_HIGH).apply {
                    setSound(null, null)
                }
            )
            val open = PendingIntent.getActivity(
                context, 0,
                Intent(context, MainActivity::class.java).addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP),
                PendingIntent.FLAG_IMMUTABLE
            )
            val notice = Notification.Builder(context, if (loud) LOUD else QUIET)
                .setSmallIcon(android.R.drawable.ic_lock_idle_alarm)
                .setContentTitle(text)
                .setContentText("Clockscapes alarm, %s".format(hm))
                .setCategory(Notification.CATEGORY_ALARM)
                .setContentIntent(open)
                .setAutoCancel(true)
                .setVisibility(Notification.VISIBILITY_PUBLIC)
                .setTimeoutAfter(60_000) // rings for the alarm's minute, like the message on the clocks
                .build()
            // insistent: the alarm sound repeats until the notification is opened, dismissed or times out
            if (loud) notice.flags = notice.flags or Notification.FLAG_INSISTENT
            manager.notify(NOTICE, notice)
        }
        schedule(context)
    }
}

/** Rings when the booked alarm is due, then books the next one. */
class AlarmRing : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) = Alarms.ring(context)
}

/** Books the next alarm again after a restart, an app update or a change of time or time zone. */
class BootReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) = Alarms.schedule(context)
}
