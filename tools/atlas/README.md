# New CITY_ATLAS rows from GeoNames

These scripts made the 2,611 cities added to the Clockscapes city picker in November 2026, and the population of the 390 cities it had before. Their output is already merged into `CITY_ATLAS` in `index.html`, so only the scripts and this README are kept here. The files listed below are what a run writes next to the scripts. A new run reads the atlas as it is now, so it only adds places that are still missing.

To make everything again, run `python3 -I build.py <index.html> <scratchpad>` and then `python3 -I verify.py <index.html>`. The scratchpad folder must hold `geonames/cities15000.txt`, `geonames/admin1CodesASCII.txt`, `geonames/countryInfo.txt`, `altnames/alt.zip` (GeoNames alternateNamesV2.zip, read straight from the zip) and `ne/ne_10m_coastline.shp`. A run takes about 15 seconds.

## Files

- `new_rows.txt` has the new rows in the table's format, sorted by id, with a tenth field for the population.
- `population.json` maps 386 of the 390 existing ids to a GeoNames population.
- `stats.json` has every count below, the style comparison with the hand-picked rows, and the lists of skipped and odd places.
- `new_rows_debug.json` has the same rows with the GeoNames id and name, the distance to the coast in km, the elevation and the reason each one was picked, so a style or label can be traced.
- `build.py` makes all of the above and `verify.py` checks it.

## Counts

GeoNames gave 3,141 places that pass at least one rule. 527 were already in the atlas (same country and closer than 25 km, or the same name in the same country within 100 km, or a national capital of a country whose capital is already there). Three more were dropped as districts of a bigger city, which leaves 2,611 new rows in 173 countries, for 3,001 rows in all.

By rule (a row can pass more than one), 2,213 new rows are first-level regional capitals (PPLA), 313 are cities of a million or more, 196 are province capitals (PPLA2: 87 in Italy, 76 in France, 33 in Spain) and 6 are national capitals. Counted once each, that is 2,096 regional capitals only, 117 regional capitals that also pass a million, 196 cities that are only on the list for their size, 196 province capitals and 6 capitals.

The six new capitals are the French overseas regions and Bonaire, which GeoNames treats as countries of their own: Basse-Terre (GP), Cayenne (GF), Fort-de-France (MQ), Kralendijk (BQ), Mamoudzou (YT) and Saint-Denis (RE). Every other GeoNames national capital was already in the atlas.

Spain comes out right. All 50 province capitals are there (old and new together), along with Ceuta and Melilla and the two regional capitals that are not province capitals, Mérida and Santiago de Compostela. GeoNames codes Badajoz and A Coruña as PPLA3, so the script adds those two by hand.

The top 20 countries by new rows are China 161, Italy 102, France 86, Turkey 78, Russia 76, Thailand 68, India 54, Spain 49, Algeria 49, Vietnam 49, United States 44, Azerbaijan 41, Japan 39, Kenya 39, Romania 38, Nigeria 36, Indonesia 35, Mexico 30, Iran 30 and Colombia 28.

By style, the new rows are 812 old, 579 lush, 454 harbor, 250 desert, 218 metro, 208 ridge and 90 island.

Be aware that "every PPLA" brings in many small towns, because some countries have a lot of small first-level divisions (Azerbaijan's rayons, North Macedonia's municipalities, Thailand's provinces). 657 of the new rows have fewer than 50,000 people.

## How the style is chosen

The rules run in order, and the first one that fits wins.

1. **Coast.** The distance to the nearest Natural Earth 1:10m coastline segment is measured with a flat projection around the city, using a 0.25 degree grid of segments. A city within 8 km is on the coast. It is an island when its country is a small island state or territory (a fixed list, which also counts Cuba, Hispaniola and Jamaica), or when it is in the tropics (|lat| < 25) and the nearest coastline is a closed ring less than 1,500 km across. Otherwise it is a harbor. The limit is 8 km rather than 6 because estuary ports such as Osaka, Douala and Antwerp sit 7 to 8 km from the line, and 8 km matched the hand-picked rows slightly better (206 against 205; 4 km gave 202, 12 km 207). The Natural Earth coastline has the Caspian but not the Great Lakes, so Chicago and Toronto count as inland, and rivers never count.
2. **Ridge.** GeoNames elevation (the `dem` column) is 1,500 m or more, or 700 m or more in a mountain country (CH, AT, AD, LI, NP, BT, KG, TJ, AM, GE, LS, AF).
3. **Desert.** The city is in an arid region. These are whole countries (Egypt but not the Nile delta, Libya, Western Sahara, Mauritania, Niger, Chad, Sudan north of 12°, the Arabian peninsula and Gulf states, Jordan, Iraq, Israel south of Beersheba, Palestine, Turkmenistan, Uzbekistan, Afghanistan, Djibouti, Somalia, Eritrea, Namibia and western Botswana) and boxes: the Sahara and Sahel from 13° to 31° N, the Maghreb south of 32.5°, Iran except the Caspian shore, Syria east of 37.5° E, Pakistan south of 33°, Kazakhstan south of 47°, Mongolia south of 45°, western China (Xinjiang, Gansu, Ningxia), the Thar desert in India, the Australian interior north of 31° S and west of 145° E, the US southwest, northern Mexico, the Peruvian and Atacama coast, western Argentina, eastern Ethiopia, northern Kenya and the Northern Cape.
4. **Lush.** The city is in the humid tropics (|lat| < 23).
5. **Old.** The city is in Europe, the Middle East or North Africa (a fixed country list). These come before "metro" because the hand-picked rows keep big European cities old (Paris, Berlin, Rome, Moscow).
6. **Metro.** The population is a million or more.
7. **Old** again for the Spanish and Portuguese colonial towns of Latin America and the Philippines.
8. For what is left, a city of 500,000 or more is metro, one at 800 m or higher is ridge, one under 150,000 is old, and anything else is metro.

### How well it matches the hand-picked styles

Run over the existing 390 rows, the rules give the same style as the hand-picked one for 206 rows, which is 52.8%. Existing rows keep their own style; this number is only a sanity check. Most of the differences are choices the rules cannot see. The hand-picked styles call many coastal capitals in West Africa "lush" (Conakry, Freetown, Lomé), many old coastal towns in Europe "old" (Barcelona, Athens, Oslo, Tallinn), and big coastal cities "metro" (Tokyo, Shenzhen, Philadelphia). They also use "harbor" for river and lake cities (London, Budapest, Wuhan, Chicago), "ridge" for cities next to mountains that are not high themselves (Cape Town, Rio, Monterrey, Los Angeles), and "lush" for some high tropical capitals (Bogotá, Nairobi, Sanaa) while Abuja at 476 m is "ridge". The full pair counts are in `stats.json` under `confusion`.

## Labels and ids

The label starts from the GeoNames name. When GeoNames has a preferred English name that is a different word (Hanover for Hannover, Syracuse for Siracusa), that is used. When the only difference is accents, the native spelling stays, so it is Cáceres, Jaén and Gdańsk. In names written as "Donostia / San Sebastián", the part that matches an English name is kept. Names from countries that do not write in Latin script (the Arab countries, Iran, Afghanistan, Pakistan, India, Nepal, Bhutan, Tajikistan, Ethiopia, North Korea and Japan) lose their transliteration marks, so it is Herat and not Herāt. Curly apostrophes become straight ones, and the Japanese "-shi" and Vietnamese "Thành Phố" are dropped. The scene draws names with the GLYPHS font after taking accents off, so every label is checked to draw without a "?"; letters that have no glyph even then (ł, ø, đ, ı, ß) are spelled out, so Łódź becomes Lodz and Tromsø becomes Tromso. Labels are at most 24 characters and have no double quotes or backslashes, though a straight apostrophe can appear (Xi'an already has one).

The id is the ASCII slug of the label plus the country code. When that is taken, the region's name goes in the middle, so the second Suzhou is `suzhou-anhui-cn`. Bigger cities are given their ids first. No existing id changed.

The time zone is the GeoNames one and every zone was loaded with Python's zoneinfo. Latitude and longitude have 3 decimals, art is empty, and capital is true only for the six new national capitals.

## Fixed by hand

These labels were set by hand after reading the list: San Sebastián, Las Palmas, Castellón, Cádiz and Vitoria-Gasteiz in Spain; Heraklion, Thessaloniki, Patras, Larissa, Ioannina, Tripoli, Kozani, Lamia and Komotini in Greece; Syracuse; Klagenfurt and St. Pölten; Santiago, Monte Cristi, Barahona, El Seibo and Sabaneta in the Dominican Republic; Francisco de Orellana and Santo Domingo in Ecuador; Zhucheng, and Puyang (its English entry in GeoNames says Pujiang, which is another place); Ayutthaya; Bandundu; Umm Al Quwain; Al Daayen; Veliko Tarnovo; Phonsavan; Mazar-i-Sharif; and in Sudan, El Fasher, El Obeid, Ad-Damir and Kadugli, whose GeoNames English names are less common spellings.

Badajoz and A Coruña are added as province capitals, as said above.

Three places were dropped as parts of a bigger city: New Mosul (GeoNames gives this section of Mosul its own 2 million people), Pikine (a suburb of Dakar) and Teni in India (a district town that GeoNames lists with a million people). The rule drops GeoNames "sections of a place" (PPLX), and any city that is only on the list for its size and lies within 15 km of a capital on the list. Onitsha is kept on purpose, since it is a city of its own across the Niger from Asaba.

## Existing rows

386 of the 390 existing ids got a population. The match is the most populous GeoNames place of the same name in the same country within 40 km, and otherwise the most populous place within 25 km. Buenos Aires needed the 40 km, because its atlas point is 27 km west of the centre.

Four ids have no population. `atafu-tk` and `diego-garcia-io` have no town of 15,000 nearby in GeoNames. `tarawa-ki` and `mata-utu-wf` have their coordinates about 460 km away from the real place: the atlas has Tarawa at -0.883, 169.533 (that is Banaba) while GeoNames has 1.328, 172.977, and it has Mata-Utu at -13.95, -171.933 (near Apia in Samoa) while GeoNames has -13.282, -176.175. Those two rows probably need their coordinates fixed.

Three ids matched a place with another name, and the matches are right: `grand-turk-tc` is Cockburn Town, `king-edward-point-gs` is Grytviken (2 people), and `north-nicosia-cy` has the population of all of Nicosia (200,452), because GeoNames does not split the city. The atlas writes Kosovo as KO where GeoNames uses XK, and the scripts map one to the other.

GeoNames lists Ngerulmud as the capital of Palau while its country table says Melekeok. Ngerulmud is right, and Palau's capital was already in the atlas.

## Credits

The cities, populations, elevations, time zones and English names come from GeoNames (https://www.geonames.org/), under the Creative Commons Attribution 4.0 licence. The coastline is Natural Earth's 1:10m coastline (https://www.naturalearthdata.com/), which is in the public domain.
