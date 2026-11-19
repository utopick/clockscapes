# clockscapes
Simple clock view with different timezones, useful as a screensaver or for an extra screen.

![Barcelona at dusk, New York in the rain with a UFO fly-by, Sydney at night](img/demo.gif)

This is something I asked an LLM to code because I had a simple need: I wanted to have a cozy screen with clocks in multiple timezones.

Simple, monolithic and useful. Enjoy.

## Use it
**Live: https://utopick.github.io/clockscapes/**

Or download `index.html` and open it in a browser. That's all: one file, no install, no build.

- Up to 4 cities, each with a pixel-art scene lit by the real sun position (day, dusk, night, moon phase) and the live weather there (rain, snow, fog, storms).
- **S** settings (pick cities from about 390 capitals and big cities, or type coordinates), **F** fullscreen, **Esc** close.
- Settings stay in this browser only (IndexedDB). The only network requests go to [Open-Meteo](https://open-meteo.com/), for the weather and for the FIND button; switch the weather off in settings and nothing leaves the page.

![Screenshot](img/screenshot.png)

## Credits
Font: [Nunito](https://github.com/googlefonts/nunito), SIL Open Font License 1.1, embedded in the page.
City coordinates adapted from [countries_cities_data](https://github.com/katerinaSo/countries_cities_data). Weather by Open-Meteo.
