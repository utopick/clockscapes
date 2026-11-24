#!/usr/bin/env python3
"""Writes index.html's <script id="lofi-samples">, the sampled instruments of the music engines.

All three sets are CC0 1.0 (public domain). Two come from FreePats (https://freepats.zenvoid.org/):
  gaita    the Bagpipe, small SFZ+FLAC 2026-08-06, recorded by Gilles Sadowski
           https://freepats.zenvoid.org/Ethnic/bagpipe.html
  spanish  the Spanish classical guitar, SFZ+FLAC 2019-06-18, by roberto@zenvoid.org
           https://freepats.zenvoid.org/Guitar/acoustic-guitar.html
and the piano from Versilian Studios' Virtual Community Sample Library (VCSL, https://github.com/sgossner/VCSL):
  grand    the Kawai grand, its softest layer (v1) of F#2, C3, F#3 and C4 (VCSL calls middle C "C3"), from
           Chordophones/Zithers/Grand Piano, Kawai/Sustains/GPiano_sus_<note>_v1_rr1_Player.wav

Download the two .7z files from the FreePats pages and unpack them anywhere outside the repo (bsdtar -xf
file.7z), put the four piano .wav files in a folder of their own, then
    python3 tools/samples.py <the bagpipe's folder> <the guitar's folder> <the piano's folder>
It needs ffmpeg. Each note is cut short, made mono at 11025 Hz (the tape's low-pass never opens past about
4 kHz, so nothing audible is lost), peak-normalised and stored as 8-bit mu-law in base64. A sustained note
(the bagpipe) keeps its attack and then a stretch the engines loop, its end crossfaded into the bars before the
loop so the seam can't click; a plucked or struck note keeps its start (the guitar 1.2 s, the piano 2 s, so it
can ring) and fades out at the end.
The tag is JSON: {voice: [[root, loop start, loop end, base64], ...]}, roots as MIDI notes (fractional when
the sample is out of tune), the loop in samples (0 0 for no loop).
"""
import base64, json, os, re, subprocess, sys

RATE = 11025
HERE = os.path.dirname(os.path.abspath(__file__))
HTML = os.path.join(HERE, "..", "index.html")


def pcm(path):
    raw = subprocess.run(
        ["ffmpeg", "-v", "error", "-i", path, "-ac", "1", "-ar", str(RATE), "-f", "f32le", "-"],
        check=True, capture_output=True,
    ).stdout
    import array
    a = array.array("f")
    a.frombytes(raw)
    return list(a)


def mulaw(x):
    # G.711 mu-law, the same table the engines decode with
    s = max(-32635, min(32635, int(x * 32767)))
    sign = 0x80 if s < 0 else 0
    s = abs(s) + 0x84
    exp = max(0, (s >> 7).bit_length() - 1)
    return ~(sign | exp << 4 | (s >> (exp + 3)) & 0x0F) & 0xFF


def regions(sfz):
    text = re.sub(r"//[^\n]*", "", open(sfz).read())
    for block in text.split("<region>")[1:]:
        yield dict(re.findall(r"(\w+)=(\S+)", block))


def onset(x):
    peak = max(abs(v) for v in x)
    return next(i for i, v in enumerate(x) if abs(v) > peak * 0.1)


def note(x, root, loop, secs=1.2, tail=0.3):
    start = max(0, onset(x) - int(0.01 * RATE))
    if loop:
        a = start + int(0.25 * RATE)  # the attack, then the looped part
        b = a + int(0.6 * RATE)
        fade = int(0.08 * RATE)
        x = x[start:b]
        a -= start
        b -= start
        # the loop's last samples blend into the ones just before its start, so the jump back is seamless
        for i in range(fade):
            w = (i + 1) / fade
            x[b - fade + i] = x[b - fade + i] * (1 - w) + x[a - fade + i] * w
    else:
        x = x[start:start + int(secs * RATE)]
        n = int(tail * RATE)
        for i in range(n):
            x[-n + i] *= 1 - (i + 1) / n
        a = b = 0
    peak = max(abs(v) for v in x)
    data = bytes(mulaw(v / peak * 0.9) for v in x)
    return [round(root, 2), a, b, base64.b64encode(data).decode()]


def main(bag, gtr, pno):
    out = {"gaita": [], "spanish": [], "grand": []}
    sfz = next(os.path.join(bag, f) for f in os.listdir(bag) if f.endswith(".sfz"))
    for r in regions(sfz):
        name = os.path.basename(r["sample"])
        if name in ("G4_31.flac", "C5_32.flac", "E5_32.flac"):
            key = int(r.get("pitch_keycenter", r.get("key")))
            out["gaita"].append(note(pcm(os.path.join(bag, r["sample"])), key - int(r.get("tune", 0)) / 100, True))
    for name, key in [("G3", 55), ("D4", 62), ("A4", 69), ("E5", 76)]:
        out["spanish"].append(note(pcm(os.path.join(gtr, "samples", name + ".flac")), key, False))
    for name, key in [("F#2", 54), ("C3", 60), ("F#3", 66), ("C4", 72)]:
        wav = next(f for f in os.listdir(pno) if f.replace("%23", "#").startswith(f"GPiano_sus_{name}_v1"))
        out["grand"].append(note(pcm(os.path.join(pno, wav)), key, False, 2.0, 0.5))
    for v in out.values():
        v.sort()
    tag = (
        '<script id="lofi-samples" type="application/json">\n'
        "      " + json.dumps(out, separators=(",", ":")) + "\n    </script>"
    )
    html = open(HTML).read()
    html, n = re.subn(r'<script id="lofi-samples" type="application/json">[^<]*</script>', lambda m: tag, html)
    if not n:
        sys.exit("index.html has no script#lofi-samples to fill")
    open(HTML, "w").write(html)
    print("script#lofi-samples:", len(tag), "bytes;", {k: len(v) for k, v in out.items()}, "notes")


if __name__ == "__main__":
    if len(sys.argv) != 4:
        sys.exit(__doc__)
    main(*sys.argv[1:])
