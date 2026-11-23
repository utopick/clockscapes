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
  assert.ok(avg(1, (s) => s.bpm) < avg(0, (s) => s.bpm) - 8);
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

test("the songs vary: many progressions, a wide tempo and every chord colour", () => {
  const songs = SEEDS.map((seed) => LOFI.song(seed, { night: 0.5 })),
    progs = new Set(songs.map((s) => s.minor + s.chords.map((c) => (c.root - s.key + 120) % 12).join(" "))),
    bpms = songs.map((s) => s.bpm);
  assert.ok(progs.size > 60, `only ${progs.size} progressions`);
  assert.ok(Math.max(...bpms) - Math.min(...bpms) >= 24, `tempos ${Math.min(...bpms)}..${Math.max(...bpms)}`);
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

// The Android app's native engine (android/native/lofi.c) plays LOFI.score's list, so it must know every voice.
test("the native engine knows every voice a song calls, and when each one plays", () => {
  const c = fs.readFileSync(path.join(__dirname, "..", "android", "native", "lofi.c"), "utf8");
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
