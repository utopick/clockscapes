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
    for (const c of s.chords) {
      assert.ok(c.root >= 24 && c.root < 48 && inScale(c.root), `seed ${seed}: bass ${c.root}`);
      for (const n of c.keys) assert.ok(n >= 52 && n < 88 && inScale(n), `seed ${seed}: chord note ${n}`);
    }
    for (const mel of [s.melA, s.melB]) {
      assert.strictEqual(mel.length, 4);
      for (const [bar, notes] of mel.entries())
        for (const [step, n, len] of notes) {
          assert.ok(n >= 67 && n <= 86 && inScale(n), `seed ${seed}: melody note ${n}`);
          assert.ok(step >= 0 && step + len <= 16, `seed ${seed}: bar ${bar} runs past its end`);
        }
      // each bar starts on a note of its chord
      for (const [bar, notes] of mel.entries()) {
        const pcs = s.chords[bar].keys.concat(s.chords[bar].root).map((n) => n % 12);
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
