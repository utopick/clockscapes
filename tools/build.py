"""Builds index.html from src/app.html and the landmark drawings in landmarks/.

src/app.html is the page with each batch of one-off landmark drawings left empty between its two
marker lines; landmarks/<group>.js holds what goes between the markers of that group. index.html
is the result, committed so the website and the Android build use it as they are.

usage: python3 tools/build.py           write index.html
       python3 tools/build.py --check   exit 1 if index.html is not what the sources build
       python3 tools/build.py --split   (re)make src/app.html and landmarks/ from index.html
"""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAGE, SRC, LM = (os.path.join(ROOT, p) for p in ("index.html", "src/app.html", "landmarks"))
START = re.compile(r"^          // ---- one-off landmarks: (\S+) ----\n", re.M)


def regions(text):
    """(group, start, end) of each region's body: the text between its two marker lines."""
    out = []
    for m in START.finditer(text):
        end = f"          // ---- end {m.group(1)} ----\n"
        j = text.index(end, m.end())
        out.append((m.group(1), m.end(), j))
    return out


def build():
    app = open(SRC, encoding="utf-8").read()
    parts, last = [], 0
    for group, i, j in regions(app):
        assert i == j, f"src/app.html has drawing code inside the {group} markers: put it in landmarks/{group}.js"
        parts += [app[last:i], open(os.path.join(LM, group + ".js"), encoding="utf-8").read()]
        last = j
    return "".join(parts) + app[last:]


def split():
    page = open(PAGE, encoding="utf-8").read()
    os.makedirs(LM, exist_ok=True)
    parts, last = [], 0
    for group, i, j in regions(page):
        open(os.path.join(LM, group + ".js"), "w", encoding="utf-8").write(page[i:j])
        parts.append(page[last:i])
        last = j
    os.makedirs(os.path.dirname(SRC), exist_ok=True)
    open(SRC, "w", encoding="utf-8").write("".join(parts) + page[last:])


if __name__ == "__main__":
    if "--split" in sys.argv:
        split()
    out = build()
    if "--check" in sys.argv:
        if open(PAGE, encoding="utf-8").read() != out:
            sys.exit("index.html is out of date: run python3 tools/build.py")
        print("index.html is up to date")
    else:
        open(PAGE, "w", encoding="utf-8").write(out)
