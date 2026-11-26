# clockscapes

<img src="img/banner.png" alt="Clockscapes: London near dusk, New York at dusk and Sydney at night, under the app's name" width="100%">

Clockscapes shows up to four clocks in different time zones, each over a pixel-art city lit by the real sun and weather there. It's meant as a cozy screensaver or an extra screen on your desk, and it plays lo-fi music made from your cities.

<img src="img/demo.gif" alt="An alarm message crossing Tokyo in the morning, Mexico City at sunset and Rio de Janeiro at night" width="100%">

## Use it

Open **https://utopick.github.io/clockscapes/** in any browser, or install it from there as an app. It's one file, it collects nothing about you ([privacy policy](https://utopick.github.io/clockscapes/privacy.html)), and it only talks to [Open-Meteo](https://open-meteo.com/) for the weather.

There is also an Android app, attached to each [release](https://github.com/utopick/clockscapes/releases). On a phone it can be your live wallpaper, and on Android TV and Google TV it can be your screensaver. With Android Auto it fills the car's screen with your cities:

<img src="img/android-auto.png" alt="Android Auto: Barcelona and New York at night side by side, with music buttons and the song playing in the card beside them" width="100%">

## What it does

Each of about 3,000 cities has its own landmarks, traffic and people, and the sky follows the live weather, from rain and snow to a rainbow or an aurora.

<table>
<tr>
<td width="50%"><img src="img/wx-london-rain.png" alt="Rain over London on a November afternoon" width="100%"></td>
<td width="50%"><img src="img/wx-reykjavik-aurora.png" alt="An aurora over Reykjavík at 23:00 in January" width="100%"></td>
</tr>
</table>

Cities also have their own events at their real times, such as Austin's bats at dusk, carnival in Rio or the Three Kings in Madrid.

<table>
<tr>
<td width="33%"><img src="img/ev-austin-bats.png" alt="Bats leaving the Congress Avenue Bridge over Austin at dusk" width="100%"></td>
<td width="33%"><img src="img/ev-rio-carnival.png" alt="The carnival parade in Rio de Janeiro" width="100%"></td>
<td width="33%"><img src="img/ev-madrid-cabalgata.png" alt="The Cabalgata de Reyes in Madrid on 5 January" width="100%"></td>
</tr>
</table>

The music is made live from your clocks, so each city and hour gives a different song, often in the style of the place. Listen to [Seville](https://utopick.github.io/clockscapes/audio/seville.mp3), [Lisbon](https://utopick.github.io/clockscapes/audio/lisbon.mp3), [Rio](https://utopick.github.io/clockscapes/audio/rio-de-janeiro.mp3), [Tokyo](https://utopick.github.io/clockscapes/audio/tokyo.mp3), [New Orleans](https://utopick.github.io/clockscapes/audio/new-orleans.mp3) or [Edinburgh](https://utopick.github.io/clockscapes/audio/edinburgh.mp3).

Alarms carry your message across the clocks instead of ringing, and twelve screen filters make it look like an old TV, a Game Boy or a terminal. Here is Mexico City at noon through each of them, and three of them at night:

<table>
<tr>
<td width="33%"><img src="img/screen-off.png" alt="Mexico City by day with no filter" width="100%"><br>Clean</td>
<td width="33%"><img src="img/screen-crt.png" alt="The CRT filter, with scanlines and rounded tube corners" width="100%"><br>CRT television</td>
<td width="33%"><img src="img/screen-lcd.png" alt="The LCD filter, with a fine grid between the pixels" width="100%"><br>LCD screen</td>
</tr>
<tr>
<td><img src="img/screen-dmg.png" alt="The Game Boy filter, in four greens" width="100%"><br>Game Boy</td>
<td><img src="img/screen-cga.png" alt="The CGA filter, in black, magenta, cyan and white" width="100%"><br>CGA</td>
<td><img src="img/screen-ega.png" alt="The EGA filter, in its 64 colours" width="100%"><br>EGA</td>
</tr>
<tr>
<td><img src="img/screen-mono.png" alt="The monochrome filter" width="100%"><br>Monochrome</td>
<td><img src="img/screen-sepia.png" alt="The sepia filter" width="100%"><br>Sepia</td>
<td><img src="img/screen-vhs.png" alt="The VHS filter, with split colours" width="100%"><br>VHS</td>
</tr>
<tr>
<td><img src="img/screen-amber.png" alt="The amber terminal filter" width="100%"><br>Amber terminal</td>
<td><img src="img/screen-green.png" alt="The green terminal filter" width="100%"><br>Green terminal</td>
<td><img src="img/screen-night.png" alt="The night red filter" width="100%"><br>Night red</td>
</tr>
</table>

<table>
<tr>
<td width="33%"><img src="img/screen-dmg-night.png" alt="Mexico City at night through the Game Boy filter" width="100%"><br>Game Boy at night</td>
<td width="33%"><img src="img/screen-cga-night.png" alt="Mexico City at night through the CGA filter" width="100%"><br>CGA at night</td>
<td width="33%"><img src="img/screen-green-night.png" alt="Mexico City at night through the green terminal filter" width="100%"><br>Green terminal at night</td>
</tr>
</table>

## Settings and keys

Press **S** (or tap the screen, then **⚙ SETTINGS**) to pick your cities, set alarms, change the music and choose a filter. **M** plays the music, **N** skips a song and **F** goes full screen.

Everything else, from every event and music style to the keys, the TV remote and the battery settings, is in the [full guide](docs/GUIDE.md). How it works inside is in the [manual](docs/MANUAL.md).

There are a few easter eggs too, so keep po**K**ing.

## Credits

- Font: [Nunito](https://github.com/googlefonts/nunito), SIL Open Font License 1.1.
- Recorded bagpipe and Spanish guitar from [FreePats](https://freepats.zenvoid.org/) and the grand piano from Versilian Studios' [VCSL](https://github.com/sgossner/VCSL), all CC0 1.0.
- Cities and populations from [GeoNames](https://www.geonames.org/) (CC BY 4.0) and [countries_cities_data](https://github.com/katerinaSo/countries_cities_data), and the coastline from [Natural Earth](https://www.naturalearthdata.com/).
- Weather data by [Open-Meteo.com](https://open-meteo.com/) (CC BY 4.0).
