#!/usr/bin/env python3
"""Writes the music's REGIONS table (index.html, script#lofi) from the research table of regional music.

Each row of the TSV names a country, maybe a region with its city ids, and in its last column a lo-fi style.
STYLE_OF below says which of the page's STYLES plays each of those; a style that isn't built yet maps to ""
(the plain lo-fi). The owner's choices then change some places: WHOLE gives a country one style everywhere,
COUNTRY_ONLY changes only the country's own row (its regions keep theirs), RETARGET swaps the style of every
row of a country that plays the country's TSV style, and REGION_STYLE sets single regions. The more specific
city rows ("Seville (city)") come before the wider regions, and both come before the countries. Hand-picked
places stay in OWN_REGIONS in the page, which this script never touches. Run it after adding a style or a
mapping, then the music test:
  python3 tools/lofi-regions.py path/to/regional-instruments.tsv && node --test tests/music.test.js
"""
import csv
import json
import re
import sys

STYLE_OF = {
    "celtic": "celtic",
    "flamenco": "flamenco",
    "jazzy-soul": "soul",
    "lofi-techno": "techno",
    "japanese": "japan",
    "indian-classical": "india",
    "bollywood": "india",
    "chinese": "china",
    "arabic": "hijaz",
    "bossa": "bossa",
    "forro": "forro",
    "fado": "fado",
    "country": "country",
    "tango": "tango",
    "cumbia": "cumbia",
    "reggae": "reggae",
    "afrobeat": "afrobeat",
    "balkan": "balkan",
    "mariachi": "mexico",
    "desert-blues": "westAfrica",
    "highlife": "westAfrica",
}
# Turkey plays one style everywhere; Persian and steppe countries no longer play Arabic
WHOLE = {
    "TR": "hijaz",
    "IR": "persian",
    "AZ": "persian",
    "TJ": "persian",
    "UZ": "persian",
    "KZ": "steppe",
    "KG": "steppe",
    "TM": "steppe",
    "MN": "steppe",
}
# the table gives these whole countries country music; only their country cities (Texas, Nashville) keep it
COUNTRY_ONLY = {"US": "", "CA": "", "AU": ""}
# the table's polka for the East Slavic countries becomes Slavic folk, and Bolivia is Andean
RETARGET = {"RU": "slavic", "UA": "slavic", "BY": "slavic", "BO": "andean"}
REGION_STYLE = {
    "PE/Andes": "andean",
    "EC/Andes": "andean",
    "CL/North (Andean)": "andean",
    "AR/Northwest Andes": "andean",
}

rows = list(csv.reader(open(sys.argv[1], encoding="utf-8"), delimiter="\t"))[1:]
home = {r[0].strip(): r[-1].strip() for r in rows if not r[1].strip()}  # each country's own TSV style


def style_of(cc, key, tsv):
    if cc in WHOLE:
        return WHOLE[cc]
    if key in REGION_STYLE:
        return REGION_STYLE[key]
    if cc in RETARGET and tsv == home.get(cc):
        return RETARGET[cc]
    if cc in COUNTRY_ONLY and key == cc:
        return COUNTRY_ONLY[cc]
    return STYLE_OF.get(tsv, "")


country = {}
regions = {}  # key -> [style, [city ids]], in the order they are checked
for r in rows:
    cc, region, cities, tsv = r[0].strip(), r[1].strip(), r[2].split(), r[-1].strip()
    if not region:
        country.setdefault(cc, style_of(cc, cc, tsv))
        continue
    if cc in WHOLE:
        continue  # the country's style plays everywhere in it
    key = f"{cc}/{region}"
    if key not in regions:
        regions[key] = [style_of(cc, key, tsv), []]
    regions[key][1] += [c for c in cities if c not in regions[key][1]]
# city rows first, then wider regions (a region that plays what its country plays is kept, since its
# cities may also be in another region)
ordered = sorted(regions.items(), key=lambda kv: "(city)" not in kv[0])
lines = []
for key, (style, cities) in ordered:
    lines.append(f'  {json.dumps(key, ensure_ascii=False)}: ["{style}", "{" ".join(cities)}"],')
for cc, style in sorted(country.items()):
    if style:
        lines.append(f'  {cc}: ["{style}"],')

html = open("index.html", encoding="utf-8").read()
block = "const REGIONS = {\n" + "\n".join("        " + l for l in lines) + "\n        };"
# the table's own lines only: an entry per line, so the match can't run on past the table's end
old = re.search(r"const REGIONS = \{\n(?:          [^\n]*\n)*        \};", html)
if not old:
    sys.exit("index.html has no REGIONS table")
html = html[: old.start()] + block + html[old.end() :]
open("index.html", "w", encoding="utf-8").write(html)
print(f"REGIONS: {len(lines)} rows")
