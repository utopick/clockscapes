"""Checks new_rows.txt against the atlas in index.html. Run: python3 -I verify.py <index.html>"""
import sys, os, re, json, random, unicodedata
from zoneinfo import ZoneInfo

HERE = os.path.dirname(os.path.abspath(__file__))
src = open(sys.argv[1], encoding="utf-8").read()
a = src.index("const CITY_ATLAS = Object.fromEntries([")
old = [json.loads(l.strip().rstrip(",")) for l in src[a:src.index("].map(([id,label", a)].splitlines()[1:] if l.strip().startswith("[")]
lines = open(os.path.join(HERE, "new_rows.txt"), encoding="utf-8").read().splitlines()
new = []
for l in lines:
    assert l.startswith('  ["') and l.endswith("],"), l
    new.append(json.loads(l[2:-1]))
STYLES = {"harbor", "island", "ridge", "desert", "lush", "old", "metro"}
for r in new:
    rid, label, cc, lat, lon, tz, style, art, cap, pop = r
    assert re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*-" + cc.lower(), rid), rid
    assert 0 < len(label) <= 24 and not re.search(r'["\\]', label), label
    assert re.fullmatch(r"[A-Z]{2}", cc) and -90 <= lat <= 90 and -180 <= lon <= 180
    assert round(lat, 3) == lat and round(lon, 3) == lon
    ZoneInfo(tz)
    assert style in STYLES and art == "" and isinstance(cap, bool) and isinstance(pop, int) and pop >= 0, r
for r in old:
    ZoneInfo(r[5])
ids = [r[0] for r in old] + [r[0] for r in new]
assert len(ids) == len(set(ids)), [i for i in ids if ids.count(i) > 1]
assert [r[0] for r in new] == sorted(r[0] for r in new)
pop = json.load(open(os.path.join(HERE, "population.json")))
assert set(pop) <= {r[0] for r in old}

def norm(s):
    return re.sub(r"[^a-z]+", " ", unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode().lower()).strip()
SPAIN = """A Coruña,Albacete,Alicante,Almería,Ávila,Badajoz,Barcelona,Bilbao,Burgos,Cáceres,Cádiz,Castellón,Ciudad Real,Córdoba,
Cuenca,Girona,Granada,Guadalajara,Huelva,Huesca,Jaén,Las Palmas,León,Lleida,Logroño,Lugo,Madrid,Málaga,Murcia,Ourense,Oviedo,
Palencia,Palma,Pamplona,Pontevedra,Salamanca,San Sebastián,Santa Cruz de Tenerife,Santander,Segovia,Seville,Soria,Tarragona,
Teruel,Toledo,Valencia,Valladolid,Vitoria-Gasteiz,Zamora,Zaragoza""".replace("\n", "").split(",")
assert len(SPAIN) == 50
es = {norm(r[1]) for r in old + new if r[2] == "ES"}
missing = [c for c in SPAIN if norm(c) not in es]
print("Spain province capitals missing:", missing or "none", "| ES rows:", sum(r[2] == "ES" for r in old + new))
print("old", len(old), "new", len(new), "total", len(ids), "| population for", len(pop), "existing ids")
random.seed(int(sys.argv[2]) if len(sys.argv) > 2 else 7)
for r in random.sample(new, 20):
    print("  ", r[0], "|", r[1], "|", r[6], "|", r[3], r[4], "| pop", r[9])
