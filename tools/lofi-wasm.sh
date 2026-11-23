#!/bin/sh
# Builds the music engine (native/lofi.c) as WebAssembly into index.html's script#lofi-wasm, which
# browsers play the music with. Run it after any change to lofi.c; tests/music.test.js fails until you do.
# Needs Emscripten (on a Mac: brew install emscripten). Run: sh tools/lofi-wasm.sh
set -e
cd "$(dirname "$0")/.."
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
emcc -O2 native/lofi.c -o "$tmp/lofi.wasm" --no-entry -sSTANDALONE_WASM -sALLOW_MEMORY_GROWTH \
  -sINITIAL_MEMORY=16MB \
  -sEXPORTED_FUNCTIONS=_lofi_init,_lofi_render,_lofi_start,_lofi_fade,_lofi_stop,_lofi_volume,_malloc,_free
python3 - "$tmp/lofi.wasm" <<'PY'
import base64, hashlib, re, sys
wasm = open(sys.argv[1], "rb").read()
stamp = hashlib.sha256(open("native/lofi.c", "rb").read()).hexdigest()[:16]
b64 = base64.b64encode(wasm).decode()
body = "\n".join(b64[i : i + 100] for i in range(0, len(b64), 100))
html = open("index.html").read()
block = f'<script id="lofi-wasm" type="application/octet-stream" data-c="{stamp}">\n{body}\n    </script>'
html, n = re.subn(r'<script id="lofi-wasm"[^>]*>.*?</script>', lambda m: block, html, flags=re.S)
if n != 1:
    sys.exit("index.html has no script#lofi-wasm")
open("index.html", "w").write(html)
print(f"script#lofi-wasm: {len(wasm)} bytes of WebAssembly from lofi.c {stamp}")
PY
