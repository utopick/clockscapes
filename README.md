# clockscapes

<img src="img/banner.png" alt="Clockscapes: London near dusk, New York at dusk and Sydney at night, under the app's name" width="100%">

Clockscapes shows up to four clocks in different time zones, each over a pixel-art city lit by the real sun and weather there. It's meant as a cozy screensaver or an extra screen on your desk, and it plays lo-fi music made from your cities.

<img src="img/demo.gif" alt="An alarm message crossing Tokyo in the morning, Mexico City at sunset and Rio de Janeiro at night" width="100%">

## Use it

Open **https://utopick.github.io/clockscapes/** in any browser, or install it from there as an app. It's one file, it collects nothing about you ([privacy policy](https://utopick.github.io/clockscapes/privacy.html)), and it only talks to [Open-Meteo](https://open-meteo.com/) for the weather.

There is also an Android app for phones, tablets, TVs and Android Auto, attached to each [release](https://github.com/utopick/clockscapes/releases). On a phone it can be your live wallpaper, on a TV your screensaver, and in the car it fills the screen with your cities.

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

Alarms carry your message across the clocks instead of ringing, and screen filters make it look like an old TV, a Game Boy or a terminal.

<table>
<tr>
<td width="33%"><img src="img/screen-crt.png" alt="Mexico City through the CRT filter" width="100%"></td>
<td width="33%"><img src="img/screen-dmg.png" alt="Mexico City through the Game Boy filter" width="100%"></td>
<td width="33%"><img src="img/screen-green-night.png" alt="Mexico City at night through the green terminal filter" width="100%"></td>
</tr>
</table>

## Settings and keys

Press **S** (or tap the screen, then **⚙ SETTINGS**) to pick your cities, set alarms, change the music and choose a filter. **M** plays the music, **N** skips a song and **F** goes full screen.

Everything else, from every event and music style to the keys, the TV remote and the battery settings, is in the [full guide](docs/GUIDE.md). How it works inside is in the [manual](docs/MANUAL.md).

## Credits

- Font: [Nunito](https://github.com/googlefonts/nunito), SIL Open Font License 1.1.
- Recorded bagpipe and Spanish guitar from [FreePats](https://freepats.zenvoid.org/) and the grand piano from Versilian Studios' [VCSL](https://github.com/sgossner/VCSL), all CC0 1.0.
- Cities and populations from [GeoNames](https://www.geonames.org/) (CC BY 4.0) and [countries_cities_data](https://github.com/katerinaSo/countries_cities_data), and the coastline from [Natural Earth](https://www.naturalearthdata.com/).
- Weather data by [Open-Meteo.com](https://open-meteo.com/) (CC BY 4.0).
