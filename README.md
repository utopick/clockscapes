# clockscapes
Simple clock view with different timezones, useful as a screensaver or for an extra screen.

![Barcelona at dusk, New York in the rain with a UFO fly-by, Sydney at night](img/demo.gif)

This is something I asked an LLM to code because I had a simple need: I wanted to have a cozy screen with clocks in multiple timezones.

Simple, monolithic and useful. Enjoy.

## Use it
**Live: https://utopick.github.io/clockscapes/**

Or download `index.html` and open it in a browser. That's all: one file, no install, no build.

From the live page you can also install it as an app (Add to Home screen on a phone, or the install button in the address bar on a computer), and then it opens full screen and works offline, apart from the weather.

- Up to 4 cities, each with a pixel-art scene lit by the real sun position (day, dusk, night, moon phase) and the live weather there (rain, snow, fog, storms).
- Lo-fi music, made live in the page with no audio files. Each song comes from one of your clocks, so its city and hour choose the song and its sun sets the mood, and when it rains there you hear the rain. Songs last two to three minutes and fade into the next one. The MUSIC tab in settings has the volume, a variation number for a new set of songs, and NEXT SONG.
- **S** settings (pick cities from about 390 capitals and big cities, or type coordinates), **F** fullscreen, **M** music, **N** next song, **Esc** close.
- Settings stay in this browser only (IndexedDB). The only network requests go to [Open-Meteo](https://open-meteo.com/), for the weather and for the FIND button; switch the weather off in settings and nothing leaves the page.

![Screenshot](img/screenshot.png)

## Credits
Font: [Nunito](https://github.com/googlefonts/nunito), SIL Open Font License 1.1, embedded in the page.
City coordinates adapted from [countries_cities_data](https://github.com/katerinaSo/countries_cities_data). Weather by Open-Meteo.
