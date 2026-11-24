// The lo-fi song writer (script#lofi in index.html). Run: node --test tests/music.test.js
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const code = html.match(/<script id="lofi">([\s\S]*?)<\/script>/)[1];
const LOFI = vm.runInNewContext(code + "\nLOFI");
const SEEDS = Array.from({ length: 300 }, (_, i) => (i * 2654435761) >>> 0);

test("the same seed and mood write the same song", () => {
  assert.deepStrictEqual(LOFI.song(1234, { night: 0.3 }), LOFI.song(1234, { night: 0.3 }));
  assert.notDeepStrictEqual(LOFI.song(1234), LOFI.song(1235));
});

test("every song lasts two to three minutes, in whole four-bar sections", () => {
  for (const seed of SEEDS)
    for (const night of [0, 1]) {
      const s = LOFI.song(seed, { night });
      assert.ok(s.seconds >= 120 && s.seconds <= 180, `seed ${seed}: ${s.seconds} s`);
      assert.strictEqual(s.bars, s.form.length * 4);
      assert.strictEqual(s.form[0], "intro");
      assert.strictEqual(s.form.at(-1), "outro");
    }
});

test("notes stay in range and the melody stays in the key", () => {
  for (const seed of SEEDS) {
    const s = LOFI.song(seed, { night: (seed % 10) / 10 });
    const pent = s.minor ? [0, 3, 5, 7, 10] : [0, 2, 4, 7, 9];
    const scale = s.minor ? [0, 2, 3, 5, 7, 8, 10] : [0, 2, 4, 5, 7, 9, 11];
    const inScale = (n) => scale.includes((n - s.key + 120) % 12);
    assert.strictEqual(s.chords.length, 4);
    assert.strictEqual(s.chordsB.length, 4);
    for (const c of s.chords.concat(s.chordsB)) {
      assert.ok(c.root >= 24 && c.root < 48 && inScale(c.root), `seed ${seed}: bass ${c.root}`);
      for (const n of c.keys) assert.ok(n >= 52 && n < 88 && inScale(n), `seed ${seed}: chord note ${n}`);
    }
    for (const [name, mel] of Object.entries({
      melA: s.melA,
      melB: s.melB,
      melA2: s.melA2,
      melB2: s.melB2,
      solo: s.solo,
    })) {
      const ch = name.startsWith("melB") ? s.chordsB : s.chords;
      assert.strictEqual(mel.length, 4);
      for (const [bar, notes] of mel.entries())
        for (const [step, n, len] of notes) {
          assert.ok(n >= 67 && n <= 86 && inScale(n), `seed ${seed}: melody note ${n}`);
          assert.ok(step >= 0 && step + len <= 16, `seed ${seed}: bar ${bar} runs past its end`);
        }
      // each bar starts on a note of its chord
      for (const [bar, notes] of mel.entries()) {
        const pcs = ch[bar].keys.concat(ch[bar].root).map((n) => n % 12);
        assert.ok(pcs.includes(notes[0][1] % 12), `seed ${seed}: bar ${bar} does not land on its chord`);
      }
    }
  }
});

test("the night is slower and more often minor than the day", () => {
  const avg = (night, f) => SEEDS.reduce((a, seed) => a + f(LOFI.song(seed, { night })), 0) / SEEDS.length;
  assert.ok(avg(1, (s) => s.bpm) < avg(0, (s) => s.bpm) - 4);
  assert.ok(avg(1, (s) => s.minor) > avg(0, (s) => s.minor) + 0.3);
  assert.ok(avg(1, (s) => s.cutoff) < avg(0, (s) => s.cutoff));
});

test("rain is passed through and clamped", () => {
  assert.strictEqual(LOFI.song(7, { rain: 0.6 }).rain, 0.6);
  assert.strictEqual(LOFI.song(7, { rain: 5 }).rain, 1);
  assert.strictEqual(LOFI.song(7).rain, 0);
});

test("every band is used, and every voice it names exists", () => {
  const used = new Set(SEEDS.map((seed) => LOFI.song(seed).band));
  assert.deepStrictEqual([...used].sort(), Object.keys(LOFI.BANDS).sort());
  const has = (v) => typeof LOFI.Player.prototype[v] === "function";
  for (const [name, b] of Object.entries(LOFI.BANDS)) {
    for (const v of [b.chords, b.bass, ...b.leads]) assert.ok(has(v), `${name}: no voice ${v}`);
    assert.ok(LOFI.KITS[b.drums], `${name}: no kit ${b.drums}`);
    assert.ok(b.leads.length >= 2, `${name}: needs two leads (one for the solo)`);
  }
  for (const kit of Object.values(LOFI.KITS)) for (const v of Object.values(kit)) assert.ok(has(v), v);
  for (const v of ["tick", "tock"]) assert.ok(has(v));
});

test("a section that comes back is changed, and the form has a solo", () => {
  let same = 0;
  for (const seed of SEEDS) {
    const s = LOFI.song(seed);
    if (JSON.stringify(s.melA) === JSON.stringify(s.melA2)) same++;
    assert.deepStrictEqual(s.melA2[0], s.melA[0], `seed ${seed}: the hook is kept`);
    assert.ok(s.form.includes("solo") && s.form.includes("A2"), `seed ${seed}: ${s.form}`);
  }
  assert.ok(same < SEEDS.length / 10, `${same} songs repeat A unchanged`);
});

test("thunder only comes with rain in a storm", () => {
  assert.strictEqual(LOFI.song(7, { rain: 0.8, thunder: true }).thunder, true);
  assert.strictEqual(LOFI.song(7, { rain: 0.8 }).thunder, false);
  assert.strictEqual(LOFI.song(7, { rain: 0, thunder: true }).thunder, false);
});

test("birds sing by day, crickets on warm nights, and both stop in the rain", () => {
  const day = LOFI.song(9, { night: 0 }),
    warmNight = LOFI.song(9, { night: 1, warm: true }),
    coldNight = LOFI.song(9, { night: 1 }),
    rainyDay = LOFI.song(9, { night: 0, rain: 0.6 });
  assert.ok(day.birds > 0 && day.crickets === 0);
  assert.ok(warmNight.crickets > 0 && warmNight.birds === 0);
  assert.strictEqual(coldNight.crickets, 0);
  assert.ok(rainyDay.birds === 0 && rainyDay.crickets === 0);
});

test("the songs vary: many progressions, a tranquil tempo (62 to 80) and every chord colour", () => {
  const songs = SEEDS.map((seed) => LOFI.song(seed, { night: 0.5 })),
    progs = new Set(songs.map((s) => s.minor + s.chords.map((c) => (c.root - s.key + 120) % 12).join(" "))),
    bpms = songs.map((s) => s.bpm);
  assert.ok(progs.size > 60, `only ${progs.size} progressions`);
  assert.ok(Math.max(...bpms) - Math.min(...bpms) >= 10 && Math.max(...bpms) <= 80, `tempos ${Math.min(...bpms)}..${Math.max(...bpms)}`);
  assert.strictEqual(new Set(songs.map((s) => s.colour)).size, 5);
});

test("B is A's shape again, starting from A's second chord", () => {
  for (const seed of SEEDS.slice(0, 50)) {
    const s = LOFI.song(seed);
    assert.strictEqual(s.motif.length, 3);
    // without the vii -> V swap the roots move the same way; check B's first chord is A's second
    if (s.minor) assert.strictEqual(s.chordsB[0].root % 12, s.chords[1].root % 12, `seed ${seed}`);
  }
});

// The Android app's native engine (native/lofi.c) plays LOFI.score's list, so it must know every voice.
test("the native engine knows every voice a song calls, and when each one plays", () => {
  const c = fs.readFileSync(path.join(__dirname, "..", "native", "lofi.c"), "utf8");
  const known = new Set([...c.matchAll(/IS\("(\w+)"\)/g)].map((m) => m[1]));
  const notes = new Set(c.match(/NOTES\[\] = \{([^}]*)\}/)[1].match(/\w+/g));
  // voices that take (note, time, ...) are the bands' chord, lead and bass voices, and no others
  const melodic = new Set(Object.values(LOFI.BANDS).flatMap((b) => [b.chords, b.bass, ...b.leads]));
  assert.deepStrictEqual([...melodic].filter((v) => !notes.has(v)), []);
  const moods = [{ crowd: 1, trains: true, rain: 0.8, thunder: true }, { night: 1, warm: true }, { night: 0 }];
  for (const seed of SEEDS.slice(0, 60))
    for (const mood of moods) {
      const sheet = LOFI.song(seed, mood);
      for (const [name, ...args] of LOFI.score(sheet)) {
        assert.ok(known.has(name), `lofi.c has no voice "${name}"`);
        const t = notes.has(name) ? args[1] : args[0];
        assert.ok(t >= 0 && t <= sheet.seconds + 1, `${name} at ${t} s in a ${sheet.seconds} s song`);
        assert.ok(args.every(Number.isFinite), `${name} ${args}`);
      }
    }
});

// Browsers play the same engine compiled to WebAssembly (script#lofi-wasm), rebuilt by tools/lofi-wasm.sh.
test("the page's WebAssembly engine was built from the current lofi.c", () => {
  const c = fs.readFileSync(path.join(__dirname, "..", "native", "lofi.c"));
  const stamp = require("crypto").createHash("sha256").update(c).digest("hex").slice(0, 16);
  const built = html.match(/<script id="lofi-wasm"[^>]*data-c="(\w+)"/)?.[1];
  assert.strictEqual(built, stamp, "lofi.c changed: run sh tools/lofi-wasm.sh");
  const wasm = Buffer.from(html.match(/<script id="lofi-wasm"[^>]*>([\s\S]*?)<\/script>/)[1], "base64");
  const exports = WebAssembly.Module.exports(new WebAssembly.Module(wasm)).map((e) => e.name);
  for (const name of ["lofi_init", "lofi_render", "lofi_start", "lofi_fade", "lofi_stop", "malloc"])
    assert.ok(exports.includes(name), `the WebAssembly engine has no ${name}`);
});

// Regional music (STYLES and REGIONS) and the kaiju song.
test("without a regional style a song is the plain lo-fi one, with no new fields", () => {
  for (const seed of SEEDS.slice(0, 100))
    for (const region of [undefined, "", "atlantis"]) {
      const plain = LOFI.song(seed, { night: 0.4 }),
        s = LOFI.song(seed, { night: 0.4, region });
      assert.deepStrictEqual(s, plain);
      assert.ok(!("region" in s) && !("ostinato" in s));
    }
});

test("each place finds its style: a region's cities first, then the country", () => {
  assert.strictEqual(LOFI.regionOf("ES", "seville-es"), "flamenco");
  assert.strictEqual(LOFI.regionOf("ES", "a-coruna-es"), "galicia");
  assert.strictEqual(LOFI.regionOf("ES", "logrono-es"), "rioja");
  assert.strictEqual(LOFI.regionOf("ES", "zaragoza-es"), ""); // Aragon has no style built yet
  assert.strictEqual(LOFI.regionOf("GB", "glasgow-gb"), "celtic");
  assert.strictEqual(LOFI.regionOf("GB", "london-gb"), "");
  assert.strictEqual(LOFI.regionOf("US", "new-orleans-us"), "soul");
  assert.strictEqual(LOFI.regionOf("DE", "berlin-de"), "techno");
  assert.strictEqual(LOFI.regionOf("JP", "kyoto-jp"), "japan");
  assert.strictEqual(LOFI.regionOf("ZZ", "nowhere-zz"), "");
  // the owner's choices over the research table
  for (const id of ["samsun-tr", "rize-tr", "izmir-tr", "denizli-tr", "istanbul-tr"])
    assert.strictEqual(LOFI.regionOf("TR", id), "hijaz", id);
  assert.strictEqual(LOFI.regionOf("ES", "murcia-es"), "flamenco");
  for (const id of ["valencia-es", "alicante-es", "castellon-es"]) assert.strictEqual(LOFI.regionOf("ES", id), "", id);
  assert.strictEqual(LOFI.regionOf("IR", "tehran-ir"), "persian");
  assert.strictEqual(LOFI.regionOf("AZ", "baku-az"), "persian");
  assert.strictEqual(LOFI.regionOf("KZ", "almaty-kz"), "steppe");
  assert.strictEqual(LOFI.regionOf("MN", "ulaanbaatar-mn"), "steppe");
  assert.strictEqual(LOFI.regionOf("PT", "lisbon-pt"), "fado");
  assert.strictEqual(LOFI.regionOf("PT", "porto-pt"), "fado");
  assert.strictEqual(LOFI.regionOf("BR", "rio-de-janeiro-br"), "bossa");
  assert.strictEqual(LOFI.regionOf("BR", "sao-paulo-br"), "bossa");
  assert.strictEqual(LOFI.regionOf("BR", "recife-br"), "forro");
  for (const id of ["houston-us", "dallas-us", "fort-worth-us", "austin-us", "san-antonio-us", "nashville-us"])
    assert.strictEqual(LOFI.regionOf("US", id), "country", id);
  assert.strictEqual(LOFI.regionOf("US", "new-york-us"), "");
  assert.strictEqual(LOFI.regionOf("AR", "buenos-aires-ar"), "tango");
  assert.strictEqual(LOFI.regionOf("PE", "cusco-pe"), "andean");
  assert.strictEqual(LOFI.regionOf("JM", "kingston-jm"), "reggae");
  for (const [where, [style]] of Object.entries({ ...LOFI.OWN_REGIONS, ...LOFI.REGIONS }))
    assert.ok(style === "" || LOFI.STYLES[style], `${where}: ${style}`);
});

test("every style names voices, kits, loops and modes that exist", () => {
  const has = (v) => typeof LOFI.Player.prototype[v] === "function";
  for (const [name, st] of Object.entries(LOFI.STYLES)) {
    const voices = [...(st.leads || []), st.drone, st.strum?.[0], st.ostinato?.voice, st.ostinato?.double, st.gong];
    voices.push(...Object.keys(st.perc || {}));
    if (st.band) voices.push(st.band.chords, st.band.bass, ...(st.band.leads || []));
    for (const v of voices.filter(Boolean)) assert.ok(has(v), `${name}: no voice ${v}`);
    if (st.band?.drums) assert.ok(LOFI.KITS[st.band.drums], `${name}: no kit ${st.band.drums}`);
    for (const steps of [st.strum?.[1], ...Object.values(st.perc || {})].filter(Boolean))
      assert.strictEqual(steps.length, 16, `${name}: ${steps}`);
    for (const seed of SEEDS.slice(0, 20)) {
      const s = LOFI.song(seed, { region: name });
      assert.strictEqual(s.region, name);
      assert.ok(s.seconds > 0 && s.form.length > 0);
    }
  }
});

test("a Celtic song is modal, with a drone, cuts, a lilt and pipes or a whistle", () => {
  const scales = {
    dorian: [0, 2, 3, 5, 7, 9, 10],
    mixolydian: [0, 2, 4, 5, 7, 9, 10],
    aeolian: [0, 2, 3, 5, 7, 8, 10],
  };
  const modes = new Set();
  for (const seed of SEEDS.slice(0, 60)) {
    const s = LOFI.song(seed, { region: "celtic" });
    modes.add(s.mode);
    assert.ok(["gaita", "fife"].includes(s.voices.lead), s.voices.lead);
    assert.ok(s.grace && s.drone === "drone" && s.swing === 0.33 && s.perc.frame);
    const inMode = (n) => scales[s.mode].includes((n - s.key + 120) % 12);
    for (const n of [s.melA, s.melB, s.melA2, s.melB2].flat(2).map((note) => note[1]))
      assert.ok(inMode(n), `seed ${seed}: ${n} is not ${s.mode}`);
    for (const c of s.chords.concat(s.chordsB))
      for (const n of c.keys) assert.ok(inMode(n), `seed ${seed}: chord note ${n}`);
  }
  assert.ok(modes.has("dorian") && modes.has("mixolydian"), [...modes]);
});

test("Galicia is a gaita band playing a muiñeira in a real 6/8, with bombo and tamboril", () => {
  for (const seed of SEEDS.slice(0, 30)) {
    const s = LOFI.song(seed, { region: "galicia" });
    assert.ok(["mixolydian", "major"].includes(s.mode) && s.voices.lead === "gaita", s.mode);
    assert.ok(s.meter === "6/8" && s.swing === 0 && s.drone === "drone" && s.grace);
    const score = LOFI.score(s),
      at = (name) => score.filter(([n]) => n === name).map(([, t]) => t);
    assert.ok(at("bombo").length > 0 && at("tamboril").length > 0, "bombo and tamboril");
    // every bombo hit falls on a dotted beat, many tamboril strokes on its eighths (thirds of the beat),
    // and none where a 4/4 bar's sixteenths would be (a quarter of the beat, three quarters); the
    // tamboril sits 12 ms behind the beat
    const beat = 60 / s.bpm,
      frac = (t) => (t / beat) % 1,
      near = (t, ps) => ps.some((p) => Math.abs(frac(t) - p) < 1e-6),
      tamboril = at("tamboril").map((t) => t - 0.012);
    for (const t of at("bombo")) assert.ok(near(t, [0, 1]), `bombo at ${t}`);
    const eighths = tamboril.filter((t) => near(t, [0, 1 / 3, 2 / 3, 1]));
    assert.ok(eighths.length > tamboril.length / 3, "the tamboril is on the eighths");
    assert.ok(!tamboril.some((t) => near(t, [1 / 4, 3 / 4])), "no straight sixteenths");
  }
});

test("regional songs stay lo-fi: relaxed tempos, high leads an octave down, a darker tape", () => {
  for (const [name, st] of Object.entries(LOFI.STYLES))
    if (st.bpm) assert.ok(st.bpm[1] <= (name === "techno" ? 90 : 82), `${name}: ${st.bpm}`);
  const high = ["pipes", "fife", "bowed", "steel", "guitarra", "reed", "accordion", "vox", "shaku"];
  for (const region of Object.keys(LOFI.STYLES))
    for (const seed of SEEDS.slice(0, 20)) {
      const s = LOFI.song(seed, { region }),
        plain = LOFI.song(seed, {});
      assert.ok(s.cutoff < plain.cutoff, `${region}: cutoff ${s.cutoff}`);
      if (!high.includes(s.voices.lead)) continue;
      for (const n of [s.melA, s.melB, s.melA2, s.melB2].flat(2).map((note) => note[1]))
        assert.ok(n <= 74, `${region} seed ${seed}: ${s.voices.lead} plays ${n}`);
    }
});

test("a flamenco song walks down the Andalusian cadence and strums it with rasgueados", () => {
  for (const seed of SEEDS.slice(0, 30)) {
    const s = LOFI.song(seed, { region: "flamenco" });
    assert.deepStrictEqual(
      s.chords.map((c) => (c.root - s.key + 120) % 12).join(" "),
      "5 3 1 0",
    );
    assert.ok(s.strum[1].includes("r") && s.perc.palmas && s.perc.castanets);
  }
});

test("fado is slow, its A minor and its B major on the same root, with arpeggios", () => {
  for (const seed of SEEDS.slice(0, 30)) {
    const s = LOFI.song(seed, { region: "fado" }),
      third = (c) => (c.keys.map((n) => (n - s.key + 120) % 12).includes(3) ? "minor" : "major");
    assert.ok(s.bpm >= 56 && s.bpm <= 62, `${s.bpm}`);
    assert.strictEqual(third(s.chords[0]), "minor");
    assert.strictEqual(third(s.chordsB[0]), "major");
    assert.strictEqual(s.chords[0].root % 12, s.chordsB[0].root % 12);
    assert.ok(["guitarra", "vox"].includes(s.voices.lead) && s.strum[1].includes("a"));
  }
});

test("bossa nova is a nylon guitar on the bossa rhythm with ninth chords, 64 to 74 bpm", () => {
  for (const seed of SEEDS.slice(0, 30)) {
    const s = LOFI.song(seed, { region: "bossa" });
    assert.ok(s.bpm >= 64 && s.bpm <= 74, `${s.bpm}`);
    assert.strictEqual(s.colour, "ninth");
    assert.strictEqual(s.voices.chords, "spanish");
    assert.strictEqual(s.drums, "bossa");
    assert.strictEqual(s.hits.join(" "), "0 3 6 10 13");
  }
});

test("lo-fi country goes I IV V I and IV I ii V, with a steel or a fiddle and a twangy backbeat", () => {
  for (const seed of SEEDS.slice(0, 30)) {
    const s = LOFI.song(seed, { region: "country" }),
      roots = (ch) => ch.map((c) => (c.root - s.key + 120) % 12).join(" ");
    assert.strictEqual(roots(s.chords), "0 5 7 0");
    assert.strictEqual(roots(s.chordsB), "5 0 2 7");
    assert.ok(["steel", "bowed"].includes(s.voices.lead) && s.strum[0] === "twang" && s.loop === "train");
  }
});

test("the kaiju song is a slow tread in D minor, with its fixed motto at every section", () => {
  // the motto: D, A and A flat in the brass, in fifths and octaves, the same in every song
  const motto = JSON.stringify([
    [0, 0, [50, 57, 62], 6],
    [0, 6, [57, 64, 69], 2],
    [0, 8, [56, 63, 68], 8],
  ]);
  for (const seed of SEEDS.slice(0, 30)) {
    const s = LOFI.song(seed, { kaiju: true, places: false });
    assert.ok(s.minor && s.bpm >= 60 && s.bpm <= 68 && s.swing === 0, `${s.bpm}`);
    assert.strictEqual(s.key, 2);
    assert.strictEqual(JSON.stringify(s.fanfare.filter(([bar]) => bar === 0)), motto);
    assert.strictEqual(s.gong, "gong");
    assert.strictEqual(s.ostinatoDouble, "piano");
    for (const name of ["melA", "melB", "melA2", "melB2"]) assert.strictEqual(s[name][0].length, 0, name);
    // the motto opens each of the four sections, on the brass
    const calls = LOFI.score(s).filter(([v, n, t]) => v === "brass" && n === 50 && t < 0.02 + (s.seconds / 4) * 4);
    const starts = new Set(calls.map(([, , t]) => Math.round((t / s.seconds) * 4 * 100) / 100));
    for (const at of [0, 1, 2, 3]) assert.ok(starts.has(at), `section ${at}: ${[...starts]}`);
    assert.strictEqual(s.loop, "tread");
    assert.strictEqual(s.form.join(" "), "A B A2 B2");
    assert.strictEqual(s.voices.lead, "brass");
    assert.strictEqual(s.drums, "march");
    assert.strictEqual(s.ostinato.length, 4);
    for (const n of s.ostinato.flat().map((note) => note[1])) assert.ok(n >= 30 && n < 60, `ostinato ${n}`);
    assert.strictEqual(s.places, false);
  }
  assert.deepStrictEqual(LOFI.song(5, { kaiju: true }), LOFI.song(5, { kaiju: true }));
});

test("the native engine plays every voice of the regional styles and the kaiju song", () => {
  const c = fs.readFileSync(path.join(__dirname, "..", "native", "lofi.c"), "utf8");
  const known = new Set([...c.matchAll(/IS\("(\w+)"\)/g)].map((m) => m[1]));
  const notes = new Set(c.match(/NOTES\[\] = \{([^}]*)\}/)[1].match(/\w+/g));
  const moods = [...Object.keys(LOFI.STYLES).map((region) => ({ region })), { kaiju: true }];
  for (const seed of SEEDS.slice(0, 10))
    for (const mood of moods) {
      const sheet = LOFI.song(seed, mood),
        melodic = new Set([
          ...Object.values(sheet.voices),
          sheet.drone,
          sheet.strum?.[0],
          sheet.ostinatoVoice,
          sheet.ostinatoDouble,
        ]);
      for (const [name, ...args] of LOFI.score(sheet)) {
        assert.ok(known.has(name), `lofi.c has no voice "${name}"`);
        assert.strictEqual(notes.has(name), melodic.has(name), `${name}: is it a note voice?`);
        const t = notes.has(name) ? args[1] : args[0];
        assert.ok(t >= 0 && t <= sheet.seconds + 1, `${name} at ${t} s`);
        assert.ok(args.every(Number.isFinite), `${name} ${args}`);
      }
    }
});

// The sampled instruments (script#lofi-samples): the page hands them to the native engine with each song
// ("@smp" lines), and the engine plays the recorded note nearest each one at the right pitch.
test("the native engine plays the page's recorded bagpipe and guitar in tune, with the synth as a fallback", () => {
  const json = html.match(/<script id="lofi-samples"[^>]*>([\s\S]*?)<\/script>/)[1],
    S = vm.runInNewContext(code + "\nLOFI", { document: { getElementById: () => ({ textContent: json }) } }),
    bank = JSON.parse(json);
  assert.deepStrictEqual(Object.keys(bank).sort(), ["gaita", "spanish"]);
  for (const notes of Object.values(bank))
    for (const [root, a, b, data] of notes)
      assert.ok(root > 40 && root < 90 && a <= b && b <= (data.length / 4) * 3, `${root} ${a} ${b}`);
  assert.strictEqual(S.sampleLines(new Set(["gaita", "keys"])).length, bank.gaita.length);
  assert.strictEqual(LOFI.sampleLines(new Set(["gaita"])).length, 0, "no samples without the page");

  const wasm = Buffer.from(html.match(/<script id="lofi-wasm"[^>]*>([\s\S]*?)<\/script>/)[1], "base64");
  function render(text, secs) {
    const c = new WebAssembly.Instance(new WebAssembly.Module(wasm), {
      env: { emscripten_notify_memory_growth() {} },
    }).exports;
    c._initialize();
    c.lofi_init(48000);
    c.lofi_volume(1);
    const bytes = Buffer.from(text + "\0", "latin1"),
      p = c.malloc(bytes.length);
    new Uint8Array(c.memory.buffer, p, bytes.length).set(bytes);
    c.lofi_start(1, p, 0, 0.01);
    const out = c.malloc(128 * 4),
      pcm = new Float32Array(secs * 48000);
    for (let i = 0; i < pcm.length; i += 128) {
      c.lofi_render(out, 128);
      pcm.set(new Float32Array(c.memory.buffer, out, 128), i);
    }
    return pcm;
  }
  // the strongest period between 150 and 1000 Hz, by autocorrelation
  function pitch(x) {
    let best = 0,
      lag = 0;
    for (let l = 48; l <= 320; l++) {
      let s = 0;
      for (let i = 0; i < 9600; i++) s += x[i] * x[i + l];
      if (s > best) (best = s), (lag = l);
    }
    return 48000 / lag;
  }
  const head = "80 20000 1 0 3 0 0 0.5 0 0 0 0 0 0 3";
  for (const [voice, n, hz] of [
    ["gaita", 69, 440],
    ["spanish", 57, 220],
  ]) {
    const call = `${voice} ${n} 0.1 2 0.1`,
      sampled = render([head, ...S.sampleLines(new Set([voice])), call].join("\n"), 1.2),
      synth = render([head, call].join("\n"), 1.2),
      f = pitch(sampled.subarray(0.4 * 48000));
    assert.ok(Math.abs(f / hz - 1) < 0.03, `${voice} ${n}: ${f} Hz`);
    let diff = 0;
    for (let i = 0; i < sampled.length; i++) diff += Math.abs(sampled[i] - synth[i]);
    assert.ok(diff > 100, `${voice}: the recorded note was not used (${diff})`);
    assert.ok(sampled.every((x) => Number.isFinite(x) && Math.abs(x) < 1));
  }
});
