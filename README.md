# clockscapes

Clockscapes shows up to four clocks in different time zones, each one over a pixel-art city lit by the real sun and the real weather there. It's meant as a cozy screensaver or an extra screen on your desk.

![An alarm message crossing Tokyo in the morning, Mexico City at sunset and Rio de Janeiro at night](img/demo.gif)

I asked an LLM to code this because I had a simple need: a cozy screen with clocks in several time zones. It is simple, it is one file, and I find it useful, so enjoy it.

## Use it

Open **https://utopick.github.io/clockscapes/** in any browser. You can also download `index.html` and open it, since the whole app is that one file.

From the live page you can install it as an app (Add to Home screen on a phone, or the install button in the address bar on a computer). It then opens full screen and works offline, apart from the weather.

On a phone held upright the clocks stack in rows, with each clock beside its city name.

<img src="img/phone.png" alt="Phone view: Tokyo, Mexico City and Rio de Janeiro stacked in rows" width="245">

## What it does

- Each city has its own scene, with its landmarks, local trees, the mountains you can see from it, traffic, people with the odd dog, boats, planes and birds. The light follows the real sun and moon, and the sky follows the live weather (rain, snow, fog, storms).
- Lo-fi music is made live in the page from your clocks, so each city and hour gives a different song, and rain in a city adds rain to the song.
- Daily alarms show a message of up to 36 characters crossing your clocks for a minute, carried by neon trucks at night or a march by day, with an optional soft arpeggio. A tap stops it.
- Settings stay in this browser only. The only thing the page talks to is [Open-Meteo](https://open-meteo.com/), for the weather and the place search, and you can switch the weather off.

## Keys

| Key | What it does |
|---|---|
| **S** | Opens settings (cities, alarms, music) |
| **F** | Full screen |
| **M** | Music on or off |
| **N** | Next song |
| **A** three times | Plays the test alarm from the ALARMS tab (on a touch screen, swipe down, up and down again) |
| **Esc** | Closes settings |

On a touch screen, tap to show the buttons. There are a few easter eggs too. **K**eep poking and you'll maybe find some.

![Tokyo in the morning, Mexico City at sunset and Rio de Janeiro at night](img/screenshot.png)

## For developers

Everything about how it works, how to run it, change it and fix it is in the [manual](docs/MANUAL.md).

## Credits

- Font: [Nunito](https://github.com/googlefonts/nunito), SIL Open Font License 1.1, embedded in the page.
- City coordinates adapted from [countries_cities_data](https://github.com/katerinaSo/countries_cities_data).
- Weather by [Open-Meteo](https://open-meteo.com/).
