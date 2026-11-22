"""Build new CITY_ATLAS rows from GeoNames cities15000 + Natural Earth coastline.
Run: python3 -I build.py <index.html> <scratchpad dir>   (writes into the folder of this script)
Inputs expected under <scratchpad>: geonames/{cities15000,admin1CodesASCII,countryInfo}.txt,
altnames/alt.zip (alternateNamesV2.zip), ne/ne_10m_coastline.shp.
"""
import sys, os, re, json, math, struct, zipfile, unicodedata, collections
from zoneinfo import ZoneInfo

HTML, SCR = sys.argv[1], sys.argv[2]
OUT = os.path.dirname(os.path.abspath(__file__))
G = os.path.join(SCR, "geonames")

# ---------- existing atlas ----------
src = open(HTML, encoding="utf-8").read()
start = src.index("const CITY_ATLAS = Object.fromEntries([")
end = src.index("].map(([id,label", start)
old = [json.loads(l.strip().rstrip(",")) for l in src[start:end].splitlines()[1:] if l.strip().startswith("[")]
assert len(old) >= 390, len(old)

# ---------- GeoNames ----------
cities = []
for line in open(os.path.join(G, "cities15000.txt"), encoding="utf-8"):
    f = line.rstrip("\n").split("\t")
    if len(f) < 19:
        continue
    dem = f[16].strip()
    cities.append(dict(gid=int(f[0]), name=f[1], ascii=f[2], alts=f[3], lat=float(f[4]), lon=float(f[5]),
                       fcode=f[7], cc=f[8], a1=f[10], pop=int(f[14] or 0),
                       dem=int(dem) if re.fullmatch(r"-?\d+", dem) else 0, tz=f[17]))
admin1 = {}
for line in open(os.path.join(G, "admin1CodesASCII.txt"), encoding="utf-8"):
    f = line.rstrip("\n").split("\t")
    if len(f) >= 3:
        admin1[f[0]] = f[2]
capital_of = {}
for line in open(os.path.join(G, "countryInfo.txt"), encoding="utf-8"):
    if line.startswith("#"):
        continue
    f = line.rstrip("\n").split("\t")
    if len(f) > 5:
        capital_of[f[0]] = f[5]

def km(a, b, c, d):
    p1, p2 = math.radians(a), math.radians(c)
    h = math.sin((p2 - p1) / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(math.radians(d - b) / 2) ** 2
    return 6371 * 2 * math.asin(min(1, math.sqrt(h)))

def norm(s):
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode().lower()
    return re.sub(r"[^a-z0-9]+", " ", s).strip()

def slug(s):
    return norm(s).replace(" ", "-")

GN_CC = {"KO": "XK"}  # the atlas uses KO for Kosovo, GeoNames XK
by_cc = collections.defaultdict(list)
for c in cities:
    by_cc[c["cc"]].append(c)

# ---------- population for existing rows ----------
population, unmatched, name_mismatch, far_off = {}, [], [], []
for r in old:
    rid, label, cc, lat, lon = r[:5]
    wide = [(km(lat, lon, c["lat"], c["lon"]), c) for c in by_cc.get(GN_CC.get(cc, cc), [])]
    near = [(d, c) for d, c in wide if d < 25]
    key = norm(label)
    # a same-name city may sit a bit further off when the atlas point is rough (Buenos Aires is 27 km off)
    named = [(d, c) for d, c in wide if d < 40 and key in {norm(c["name"]), norm(c["ascii"])} | {norm(a) for a in c["alts"].split(",")}]
    far = [(d, c) for d, c in wide if d >= 25 and key in {norm(c["name"]), norm(c["ascii"])}]
    if far and not named:
        d, c = min(far, key=lambda x: x[0])
        far_off.append((rid, round(d), c["name"], round(c["lat"], 3), round(c["lon"], 3)))
    if not near and not named:
        unmatched.append(rid); continue
    if named:
        best = max(named, key=lambda x: x[1]["pop"])[1]
    else:
        best = max(near, key=lambda x: x[1]["pop"])[1]
        name_mismatch.append((rid, best["name"], best["pop"]))
    population[rid] = best["pop"]

# ---------- candidates ----------
MANUAL_ADD = {2521420: "PPLA2", 3119841: "PPLA2"}  # Badajoz, A Coruna: province capitals GeoNames codes as PPLA3
reasons = {}
for c in cities:
    rs = []
    fc = MANUAL_ADD.get(c["gid"], c["fcode"])
    if fc == "PPLC": rs.append("PPLC")
    if fc == "PPLA": rs.append("PPLA")
    if c["pop"] >= 1_000_000: rs.append("pop1M")
    if fc == "PPLA2" and c["cc"] in ("ES", "IT", "FR"): rs.append("PPLA2")
    if rs:
        reasons[c["gid"]] = rs
cand = [c for c in cities if c["gid"] in reasons]

# PPLC sanity: compare with countryInfo capital name
pplc_odd = []
for c in cand:
    if "PPLC" in reasons[c["gid"]]:
        cap = capital_of.get(c["cc"], "")
        names = {norm(c["name"]), norm(c["ascii"])} | {norm(a) for a in c["alts"].split(",")}
        if norm(cap) not in names:
            pplc_odd.append((c["cc"], c["name"], cap))

old_names = {(r[2], norm(r[1])) for r in old}
old_capital_cc = {GN_CC.get(r[2], r[2]) for r in old if r[8]}
def is_old(c):
    # a country's capital is already there even when the atlas point is far off (Tarawa, Mata-Utu)
    if "PPLC" in reasons[c["gid"]] and c["cc"] in old_capital_cc:
        return True
    if (c["cc"], norm(c["name"])) in old_names or (c["cc"], norm(c["ascii"])) in old_names:
        # same name: the same place unless it is far away (Suzhou, Anhui is not Suzhou, Jiangsu)
        if any(GN_CC.get(r[2], r[2]) == c["cc"] and norm(r[1]) in (norm(c["name"]), norm(c["ascii"]))
               and km(r[3], r[4], c["lat"], c["lon"]) < 100 for r in old):
            return True
    return any(GN_CC.get(r[2], r[2]) == c["cc"] and km(r[3], r[4], c["lat"], c["lon"]) < 25 for r in old)
skipped = [c for c in cand if is_old(c)]
name_only = [(c["cc"], c["name"], c["pop"]) for c in skipped
             if not any(GN_CC.get(r[2], r[2]) == c["cc"] and km(r[3], r[4], c["lat"], c["lon"]) < 25 for r in old)]
new = [c for c in cand if not is_old(c)]
# Districts of a bigger city: GeoNames PPLX (a section of a place, e.g. New Mosul) and million-plus
# entries that are only on the list for their size and sit within 15 km of a capital on the list.
KEEP_NEAR = {c["gid"] for c in cand if (c["cc"], c["name"]) == ("NG", "Onitsha")}  # a city of its own across the Niger from Asaba
caps = [c for c in cand if {"PPLC", "PPLA"} & set(reasons[c["gid"]])]
def is_district(c):
    if c["fcode"] == "PPLX" and c["gid"] not in MANUAL_ADD:
        return True
    if c["gid"] in KEEP_NEAR:
        return False
    return reasons[c["gid"]] == ["pop1M"] and any(
        o["cc"] == c["cc"] and o["gid"] != c["gid"] and km(o["lat"], o["lon"], c["lat"], c["lon"]) < 15 for o in caps)
districts = [c for c in new if is_district(c)]
new = [c for c in new if not is_district(c)]

# ---------- English names ----------
want = {c["gid"] for c in new}
en = collections.defaultdict(list)  # gid -> [(preferred, short, name)]
with zipfile.ZipFile(os.path.join(SCR, "altnames", "alt.zip")) as z:
    with z.open("alternateNamesV2.txt") as fh:
        for raw in fh:
            f = raw.decode("utf-8", "replace").rstrip("\n").split("\t")
            if len(f) < 8 or f[2] != "en":
                continue
            g = int(f[1])
            if g in want and f[6] != "1" and f[7] != "1":
                en[g].append((f[4] == "1", f[5] == "1", f[3]))

# Labels fixed by hand after reading the list, keyed by (country, GeoNames name).
LABEL_FIX = {
    ("ES", "Donostia / San Sebastián"): "San Sebastián", ("ES", "Las Palmas de Gran Canaria"): "Las Palmas",
    ("ES", "Castelló de la Plana"): "Castellón", ("ES", "Cadiz"): "Cádiz", ("ES", "Gasteiz / Vitoria"): "Vitoria-Gasteiz",
    ("GR", "Irákleion"): "Heraklion", ("GR", "Thessaloníki"): "Thessaloniki", ("GR", "Pátra"): "Patras",
    ("GR", "Lárisa"): "Larissa", ("GR", "Ioánnina"): "Ioannina", ("GR", "Trípoli"): "Tripoli",
    ("GR", "Kozáni"): "Kozani", ("GR", "Lamía"): "Lamia", ("GR", "Komotiní"): "Komotini",
    ("IT", "Siracusa"): "Syracuse", ("AT", "Klagenfurt am Wörthersee"): "Klagenfurt", ("AT", "Sankt Pölten"): "St. Pölten",
    ("DO", "Santiago de los Caballeros"): "Santiago", ("DO", "San Fernando de Monte Cristi"): "Monte Cristi",
    ("DO", "Santa Cruz de Barahona"): "Barahona", ("DO", "Santa Cruz de El Seibo"): "El Seibo",
    ("DO", "San Ignacio de Sabaneta"): "Sabaneta", ("EC", "Puerto Francisco de Orellana"): "Francisco de Orellana",
    ("EC", "Santo Domingo de los Colorados"): "Santo Domingo", ("CN", "Zhu Cheng City"): "Zhucheng",
    ("CN", "Puyang"): "Puyang", ("TH", "Phra Nakhon Si Ayutthaya"): "Ayutthaya", ("CD", "Bandundu Province"): "Bandundu",
    ("AE", "Umm Al Quwain City"): "Umm Al Quwain", ("BO", "Trinidad"): "Trinidad",
    ("QA", "Az̧ Z̧a‘āyin"): "Al Daayen", ("BG", "Veliko Tŭrnovo"): "Veliko Tarnovo", ("LA", "Muang Phônsavan"): "Phonsavan",
    ("AF", "Mazār-e Sharīf"): "Mazar-i-Sharif", ("SD", "El Fasher"): "El Fasher", ("SD", "El Obeid"): "El Obeid", ("SD", "Ad-Damir"): "Ad-Damir", ("SD", "Kadugli"): "Kadugli",
}
FONT_OK = set("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?¡¿.,'-:/&+# ")
def drawable(s):  # the scene writes names with the GLYPHS font after dropping accents (NFD)
    return all(ch in FONT_OK for ch in re.sub(r"[̀-ͯ]", "", unicodedata.normalize("NFD", s)).upper())

# transliterated, not native Latin script: drop the scholarly marks (Herāt, Al Ḩudaydah, Wŏnsan, Ōita)
FOLD = set("AE BH DZ EG IQ JO KW LB LY MA MR OM PS QA SA SD SY TN YE EH SO DJ KM AF IR PK IN NP BT TJ ET KP JP".split())
def ascii_fold(s):
    s = s.translate(str.maketrans({"Đ": "D", "đ": "d", "Ð": "D", "ø": "o", "Ø": "O", "ł": "l", "Ł": "L", "ı": "i", "ß": "ss", "æ": "ae", "Æ": "Ae"}))
    return re.sub(r"[\u0300-\u036f]", "", unicodedata.normalize("NFD", s))

def clean(s):
    s = s.replace("’", "'").replace("ʼ", "'").replace("‘", "").replace("ʻ", "").replace("ʿ", "")
    s = re.sub(r"^Thành Phố |-s[hi]+$", "", s).rstrip("'")  # Japanese "Fukui-shi", Russian "Ryazan'"
    return s.strip()

def ok_label(s):
    return bool(s) and len(s) <= 24 and " / " not in s and not re.search(r'["\\]|^Changwat ', s) and drawable(s)

def pick_label(c):
    fix = LABEL_FIX.get((c["cc"], c["name"]))
    if fix:
        return fix
    names = en.get(c["gid"], [])
    name = c["name"]
    if " / " in name:
        parts = [p.strip() for p in name.split(" / ")]
        enn = {norm(n) for _, _, n in names}
        hit = [p for p in parts if norm(p) in enn]
        name = hit[0] if hit else parts[-1]
    name = clean(name)
    # an English name only when it is a different word, not the same name without its accents
    pref = [clean(n) for p, s, n in names if p and ok_label(clean(n)) and norm(n) != norm(name)]
    if pref:
        name = pref[0]
    if c["cc"] in FOLD:
        name = ascii_fold(name)
    if not ok_label(name):
        name = clean(ascii_fold(name))
    assert ok_label(name), (c["gid"], c["name"], name)
    return name

# ---------- coastline ----------
def read_lines(path):
    data = open(path, "rb").read()
    pos, lines = 100, []
    while pos < len(data):
        _, clen = struct.unpack(">ii", data[pos:pos + 8]); pos += 8
        rec = data[pos:pos + clen * 2]; pos += clen * 2
        if struct.unpack("<i", rec[:4])[0] != 3:
            continue
        nparts, npts = struct.unpack("<ii", rec[36:44])
        parts = list(struct.unpack("<%di" % nparts, rec[44:44 + 4 * nparts])) + [npts]
        pts = struct.unpack("<%dd" % (2 * npts), rec[44 + 4 * nparts:44 + 4 * nparts + 16 * npts])
        for i in range(nparts):
            lines.append([(pts[2 * k], pts[2 * k + 1]) for k in range(parts[i], parts[i + 1])])
    return lines

coast = read_lines(os.path.join(SCR, "ne", "ne_10m_coastline.shp"))
line_info = []  # (closed, bbox diagonal km)
CELL = 0.25
grid = collections.defaultdict(list)
for li, pts in enumerate(coast):
    xs, ys = [p[0] for p in pts], [p[1] for p in pts]
    closed = pts[0] == pts[-1]
    line_info.append((closed, km(min(ys), min(xs), max(ys), max(xs))))
    for k in range(len(pts) - 1):
        (x1, y1), (x2, y2) = pts[k], pts[k + 1]
        for gx in range(math.floor(min(x1, x2) / CELL), math.floor(max(x1, x2) / CELL) + 1):
            for gy in range(math.floor(min(y1, y2) / CELL), math.floor(max(y1, y2) / CELL) + 1):
                grid[(gx, gy)].append((li, k))

def coast_dist(lat, lon):
    """km to nearest coastline segment, searched within ~0.75 deg; returns (km, line index) or (999, None)."""
    gx0, gy0 = math.floor(lon / CELL), math.floor(lat / CELL)
    kx = 111.32 * math.cos(math.radians(lat)); ky = 110.57
    best, bl = 999.0, None
    for gx in range(gx0 - 3, gx0 + 4):
        for gy in range(gy0 - 3, gy0 + 4):
            for li, k in grid.get((gx, gy), ()):
                (x1, y1), (x2, y2) = coast[li][k], coast[li][k + 1]
                ax, ay = (x1 - lon) * kx, (y1 - lat) * ky
                bx, by = (x2 - lon) * kx, (y2 - lat) * ky
                dx, dy = bx - ax, by - ay
                L = dx * dx + dy * dy
                t = 0 if L == 0 else max(0, min(1, -(ax * dx + ay * dy) / L))
                d = math.hypot(ax + t * dx, ay + t * dy)
                if d < best:
                    best, bl = d, li
    return best, bl

# ---------- style rules ----------
SMALL_ISLANDS = set("""CU DO HT JM AG AI AS AW BB BH BL BM BQ BS CK CV CW CX CC DM FJ FM FO GD GP GU KI KM KN KY LC MF MH MP MQ MS MT MU MV
NC NF NR NU PF PM PN PR PW RE SB SC SH ST SX TC TK TO TT TV VC VG VI VU WF WS YT""".split())
ALPINE = set("CH AT AD LI NP BT KG TJ AM GE LS AF".split())  # hilly countries: ridge from 700 m
ARID_CC = set("EG LY EH MR NE TD SD SA AE QA KW OM YE BH JO IQ TM UZ AF DJ SO ER NA BW IL PS".split())

def arid(cc, lat, lon):
    if cc in ARID_CC:
        if cc == "IL" and lat > 31.4: return False
        if cc == "BW" and lon > 26: return False
        if cc == "SD" and lat < 12: return False
        return True
    if -18 <= lon <= 40 and 13 <= lat <= 31 and cc not in ("ET", "SS", "MA", "TN"): return True   # Sahara + Sahel
    if cc in ("DZ", "TN", "MA") and lat < 32.5: return True
    if cc == "EG" and lat > 30 and 29.8 < lon < 32.4: return False  # the green Nile delta
    if cc == "IR": return not (lat > 36 and 48 < lon < 56)              # all Iran but the Caspian shore
    if cc == "SY": return lon > 37.5
    if cc == "PK": return lat < 33
    if cc == "KZ": return lat < 47 and lon < 75
    if cc == "MN": return lat < 45
    if cc == "CN": return lon < 107 and lat > 36 or lon < 90                        # Xinjiang, Gansu, Ningxia, west Inner Mongolia
    if cc == "IN": return lon < 75.5 and 24 <= lat <= 30.5                           # Thar
    if cc == "AU": return lat > -31 and lon < 145
    if cc == "US": return -117 <= lon <= -103 and 31 <= lat <= 37.5
    if cc == "MX": return lat > 24 and lon < -99.5
    if cc == "PE": return lon < -76 and lat < -5 or lat < -15
    if cc == "CL": return lat > -30
    if cc == "AR": return lon < -64.5 and -40 < lat < -27
    if cc == "ET": return lon > 41
    if cc == "KE": return lat > 1.5 or lon > 39 and lat > -1
    if cc == "ZA": return lon < 24.5 and lat > -32
    return False

EUROPE_MENA = set("""AD AL AT BA BE BG BY CH CY CZ DE DK EE ES FI FR GB GI GR HR HU IE IM IS IT JE GG LI LT LU LV MC MD ME MK MT NL NO PL PT
RO RS RU SE SI SK SM UA VA XK AX FO TR GE AM AZ LB SY IQ IR JO IL PS SA YE OM AE QA KW BH EG LY TN DZ MA EH""".split())
OLD_COLONIAL = set("MX GT HN SV NI CR PA CU DO PR CO VE EC PE BO PY UY AR CL BR PH".split())  # Spanish/Portuguese towns

COAST_KM = 8  # estuary ports (Osaka, Douala, Antwerp) sit 7-8 km from the Natural Earth line
def style_of(c, cd, line):
    lat, lon, cc, pop = c["lat"], c["lon"], c["cc"], c["pop"]
    if cd <= COAST_KM:
        closed, diag = line_info[line]
        if cc in SMALL_ISLANDS or (abs(lat) < 25 and closed and diag < 1500):
            return "island"
        return "harbor"
    if c["dem"] >= 1500 or (cc in ALPINE and c["dem"] >= 700):
        return "ridge"
    if arid(cc, lat, lon):
        return "desert"
    if abs(lat) < 23:
        return "lush"
    if cc in EUROPE_MENA:
        return "old"
    if pop >= 1_000_000:
        return "metro"
    if cc in OLD_COLONIAL:
        return "old"
    if pop >= 500_000:
        return "metro"
    if c["dem"] >= 800:
        return "ridge"
    return "old" if pop < 150_000 else "metro"

# ---------- build new rows ----------
used = {r[0] for r in old}
rows, counts = [], collections.Counter()
new.sort(key=lambda c: -c["pop"])  # bigger city keeps the plain id on a collision
for c in new:
    label = pick_label(c)
    base = slug(label) + "-" + c["cc"].lower()
    rid = base
    if rid in used:
        rid = slug(label) + "-" + slug(admin1.get(c["cc"] + "." + c["a1"], c["a1"] or "x")) + "-" + c["cc"].lower()
    n = 2
    while rid in used:
        rid = base + "-" + str(n); n += 1
    used.add(rid)
    ZoneInfo(c["tz"])  # raises on an invalid zone
    cd, li = coast_dist(c["lat"], c["lon"])
    st = style_of(c, cd, li)
    for r in reasons[c["gid"]]:
        counts[r] += 1
    rows.append(dict(id=rid, label=label, cc=c["cc"], lat=round(c["lat"], 3), lon=round(c["lon"], 3), tz=c["tz"], style=st,
                     cap="PPLC" in reasons[c["gid"]], pop=c["pop"], gid=c["gid"], gname=c["name"], coast=round(cd, 1),
                     dem=c["dem"], reasons=reasons[c["gid"]]))
rows.sort(key=lambda r: r["id"])

def fmt(r):
    return "  " + json.dumps([r["id"], r["label"], r["cc"], r["lat"], r["lon"], r["tz"], r["style"], "", r["cap"], r["pop"]],
                             ensure_ascii=False, separators=(",", ":")) + ","
open(os.path.join(OUT, "new_rows.txt"), "w", encoding="utf-8").write("\n".join(fmt(r) for r in rows) + "\n")
json.dump(population, open(os.path.join(OUT, "population.json"), "w"), indent=0, sort_keys=True)
json.dump(rows, open(os.path.join(OUT, "new_rows_debug.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=0)

# ---------- agreement on old rows ----------
agree, confusion = 0, collections.Counter()
for r in old:
    fake = dict(lat=r[3], lon=r[4], cc=r[2], pop=population.get(r[0], 0), dem=0)
    near = [c for c in by_cc.get(r[2], []) if km(r[3], r[4], c["lat"], c["lon"]) < 25]
    if near:
        fake["dem"] = max(near, key=lambda c: c["pop"])["dem"]
    cd, li = coast_dist(r[3], r[4])
    s = style_of(fake, cd, li)
    agree += s == r[6]
    if s != r[6] and "--why" in sys.argv:
        print("MIS", r[0], r[6], "->", s, round(cd, 1), fake["dem"], fake["pop"])
    confusion[(r[6], s)] += 1

stats = dict(old=len(old), candidates=len(cand), skipped=len(skipped), districts=[(c['cc'], c['name'], c['pop']) for c in districts], name_only=name_only, far_off=far_off, new=len(rows), reasons=dict(counts),
             styles=dict(collections.Counter(r["style"] for r in rows)),
             countries=collections.Counter(r["cc"] for r in rows).most_common(20),
             pplc=sum(r["cap"] for r in rows), pplc_odd=pplc_odd, unmatched=unmatched, name_mismatch=name_mismatch,
             agree=agree, agree_pct=round(100 * agree / len(old), 1),
             confusion=sorted(((a, b, n) for (a, b), n in confusion.items()), key=lambda x: -x[2]),
             matched=len(population))
json.dump(stats, open(os.path.join(OUT, "stats.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps({k: v for k, v in stats.items() if k not in ("confusion",)}, ensure_ascii=False)[:3000])
