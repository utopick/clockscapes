#!/usr/bin/env python3
"""Writes the music's REGIONS table (index.html, script#lofi) from the research table of regional music.

Each row of the TSV names a country, maybe a region with its city ids, and in its last column a lo-fi style.
STYLE_OF below says which of the page's STYLES plays each of those; a style that isn't built yet maps to ""
(the plain lo-fi). The more specific city rows ("Seville (city)") come before the wider regions, and both
come before the countries. Hand-picked places stay in OWN_REGIONS in the page, which this script never
touches. Run it after adding a style or a mapping, then the music test:
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
    "bossa": "brazil",
    "mariachi": "mexico",
    "desert-blues": "westAfrica",
    "highlife": "westAfrica",
}

rows = list(csv.reader(open(sys.argv[1], encoding="utf-8"), delimiter="\t"))[1:]
country = {}
regions = {}  # key -> [style, [city ids]], in the order they are checked
for r in rows:
    cc, region, cities, style = r[0].strip(), r[1].strip(), r[2].split(), STYLE_OF.get(r[-1].strip(), "")
    if not region:
        country.setdefault(cc, style)
        continue
    key = f"{cc}/{region}"
    if key not in regions:
        regions[key] = [style, []]
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
html, n = re.subn(r"const REGIONS = \{.*?\n        \};", lambda m: block, html, flags=re.S)
if n != 1:
    sys.exit("index.html has no REGIONS table")
open("index.html", "w", encoding="utf-8").write(html)
print(f"REGIONS: {len(lines)} rows")
