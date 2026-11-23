/*
 * The native music engine: plays the page's lo-fi songs in C instead of Web Audio (the MUSIC tab's
 * "Native sound engine", Android app only).
 *
 * The page still writes each song (LOFI.song) and turns it into a list of voice calls (LOFI.score), such as
 * "keys 62 1.25 0.9 0.08" (a note at 1.25 s) or "kick 3.4 1". This file plays that list: each voice below is
 * the same recipe as the Player method of the same name in index.html's script#lofi (oscillators, filters and
 * gain envelopes with Web Audio's timing rules), and each song has the Player's echo, tape saturation, dark
 * low-pass, vinyl crackle and city sound beds. When a voice changes in index.html, change it here too.
 *
 * NativeMusic.kt runs it: an AudioTrack thread calls lofi_render, and the page's calls (song start, fade,
 * stop, volume) arrive from other threads through the mutex. It is built by the Android app's Gradle build
 * (android/app/build.gradle.kts) and, as WebAssembly for the page, by tools/lofi-wasm.sh. On a computer:
 *   cc -O2 -DLOFI_CLI lofi.c -o lofi -lm   then   ./lofi song.txt out.wav 30   (renders 30 s on a computer)
 */
#include <math.h>
#include <pthread.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define BLK 8      // parameters (envelopes, sweeps) are worked out every 8 samples
#define MAXV 256   // voices sounding at once, over all songs
#define MAXS 4     // songs at once (two while crossfading)
#define MAXCMD 32
#define TAB 2048
#define PI 3.14159265358979

static float SR = 48000;

// ---- parameters: Web Audio's setValueAtTime, linearRamp, exponentialRamp and setTargetAtTime ----
enum { SET, LIN, EXP, TGT };
typedef struct { double t; float v, tc; uint8_t k; } PEv;
typedef struct { PEv e[8]; uint8_t n; float v0; } Param;

static void pev(Param *p, int k, double t, float v, float tc) {
  if (p->n < 8) p->e[p->n++] = (PEv){t, v, tc, (uint8_t)k};
}
static float pat(const Param *p, double t) {
  float cur = p->v0, tv = 0, tc = 1, sv = 0;
  double curT = -1e9, st = 0;
  int tgt = 0;
  for (int i = 0; i < p->n; i++) {
    const PEv *e = &p->e[i];
    if (t < e->t) {
      if (e->k == LIN || e->k == EXP) {
        if (tgt) cur = sv;
        double f = (t - curT) / (e->t - curT);
        if (f <= 0) return cur;
        if (e->k == LIN) return cur + (e->v - cur) * (float)f;
        if (cur * e->v <= 0) return cur;
        return cur * powf(e->v / cur, (float)f);
      }
      break;
    }
    if (e->k == TGT) {
      sv = tgt ? tv + (sv - tv) * expf(-(float)(e->t - st) / tc) : cur;
      st = curT = e->t;
      tv = e->v;
      tc = e->tc;
      tgt = 1;
    } else {
      cur = e->v;
      curT = e->t;
      tgt = 0;
    }
  }
  return tgt ? tv + (sv - tv) * expf(-(float)(t - st) / tc) : cur;
}
static double plast(const Param *p) { return p->n ? p->e[p->n - 1].t : -1e9; }
// Player.env: rise to peak in attack, then die away (a time constant of decay / 4)
static void env(Param *p, double t, float peak, float attack, float decay) {
  pev(p, SET, t, 0, 0);
  pev(p, LIN, t + attack, peak, 0);
  pev(p, TGT, t + attack, 0, decay / 4);
}

// ---- biquad filters, as Web Audio defines them (low- and high-pass Q in dB, band-pass Q plain) ----
enum { LP, HP, BP };
typedef struct { float b0, b1, b2, a1, a2, x1, x2, y1, y2; } Bq;
static void bqset(Bq *f, int type, float freq, float q) {
  if (freq < 10) freq = 10;
  if (freq > SR * 0.49f) freq = SR * 0.49f;
  float w = 2 * (float)PI * freq / SR, cw = cosf(w), sw = sinf(w);
  float alpha = type == BP ? sw / (2 * q) : sw / (2 * powf(10, q / 20)), a0 = 1 + alpha;
  if (type == LP) f->b0 = f->b2 = (1 - cw) / 2 / a0, f->b1 = (1 - cw) / a0;
  else if (type == HP) f->b0 = f->b2 = (1 + cw) / 2 / a0, f->b1 = -(1 + cw) / a0;
  else f->b0 = alpha / a0, f->b1 = 0, f->b2 = -alpha / a0;
  f->a1 = -2 * cw / a0;
  f->a2 = (1 - alpha) / a0;
}
static inline float bq(Bq *f, float x) {
  float y = f->b0 * x + f->b1 * f->x1 + f->b2 * f->x2 - f->a1 * f->y1 - f->a2 * f->y2;
  f->x2 = f->x1, f->x1 = x, f->y2 = f->y1, f->y1 = y;
  return y;
}

// ---- sources ----
enum { SINE, TRI, SAW, SQR, NOISE };
static float sintab[TAB + 1], *noise, *vinyl;
static int NN, NV; // lengths of the noise (2 s) and vinyl (4 s) buffers
static uint32_t seed = 2463534242u;
static float rnd(void) { // 0..1
  seed ^= seed << 13, seed ^= seed >> 17, seed ^= seed << 5;
  return (seed >> 8) / 16777216.0f;
}
static inline float sinp(float ph) {
  float x = ph * TAB;
  int i = (int)x;
  return sintab[i] + (sintab[i + 1] - sintab[i]) * (x - i);
}
static inline float blep(float t, float dt) { // smooths a jump, so saws and squares don't alias
  if (t < dt) return t /= dt, t + t - t * t - 1;
  if (t > 1 - dt) return t = (t - 1) / dt, t * t + t + t + 1;
  return 0;
}

typedef struct { uint8_t wave; float ratio, cents, ph; int pos; Param gain; } Src;
typedef struct { uint8_t type; float q; Param f; Bq b; } Flt;
typedef struct {
  uint8_t on, song, dest, nsrc, nflt, par, nowob, fm;
  double t0, t1;
  Param freq, det, vib, idx, out;
  float vibHz, fmRatio, fmPh, tremHz, tremD;
  Src src[2];
  Flt flt[2];
} Voice;
enum { TONE, BUS, AMB };

typedef struct { double t; char name[12]; float a[4]; } Ev; // t: when it plays, from the song's start
typedef struct { uint8_t buf, fader; int pos; Bq f; float gain, swell, hz; } Bed;
typedef struct {
  int id, used, nev, next, nbed;
  double start, stopAt, end;
  float cutoff, level, send, fb, wobble, lfoHz, crackle, places, crowd, rain, sea, wind;
  Param fader;
  Ev *ev;
  Bq tape, muffle, dark;
  float *dl;
  int dlen, dpos;
  Bed bed[6];
  float tone[BLK], bus[BLK], amb[BLK], direct[BLK];
} Song;

static Voice V[MAXV];
static Song *S[MAXS];
static double now; // seconds rendered so far
static float vol = 0.36f, volTarget = 0.36f;

static Voice *nv(int song, int dest, double t0, double t1) {
  for (int i = 0; i < MAXV; i++)
    if (!V[i].on) {
      Voice *v = &V[i];
      memset(v, 0, sizeof *v);
      v->on = 1, v->song = song, v->dest = dest, v->t0 = t0, v->t1 = t1, v->nsrc = 1;
      v->out.v0 = v->src[0].gain.v0 = v->src[1].gain.v0 = 1;
      v->src[0].ratio = v->src[1].ratio = 1;
      return v;
    }
  return NULL; // full: the note is left out
}
static float hz(float n) { return 440 * powf(2, (n - 69) / 12); }
static Src *src(Voice *v, int i, int wave, float ratio) {
  Src *s = &v->src[i];
  s->wave = wave, s->ratio = ratio;
  if (wave == NOISE) s->pos = (int)(rnd() * 1.5f * SR) % NN;
  if (i + 1 > v->nsrc) v->nsrc = i + 1;
  return s;
}
static Flt *flt(Voice *v, int type, float freq, float q) {
  Flt *f = &v->flt[v->nflt++];
  f->type = type, f->q = q, f->f.v0 = freq;
  bqset(&f->b, type, freq, q);
  return f;
}
// Player.lowpass: a low-pass that slides from one frequency to another
static void sweep(Voice *v, double t, float from, float to, float time, float q) {
  Flt *f = flt(v, LP, from, q);
  pev(&f->f, SET, t, from, 0);
  pev(&f->f, TGT, t, to, time);
}

// ---- the voices (Player methods in index.html) ----
typedef struct { int k; double at; } Ctx; // the song and when it started
static void fmv(Ctx c, float n, double t, float dur, float vel, float ratio, float bright, float mellow) {
  float f = hz(n);
  Voice *v = nv(c.k, TONE, t, t + dur + 1.5);
  if (!v) return;
  v->freq.v0 = f, v->fm = 1, v->fmRatio = ratio;
  src(v, 0, SINE, 1);
  pev(&v->idx, SET, t, f * bright, 0);
  pev(&v->idx, TGT, t, f * 0.2f, mellow);
  env(&v->out, t, vel, 0.006f, dur + 0.8f);
}
static void hit(Ctx c, double t, float dur, int type, float freq, float vel, float attack) {
  Voice *v = nv(c.k, BUS, t, t + dur + attack + 0.1);
  if (!v) return;
  src(v, 0, NOISE, 1);
  flt(v, type, freq, 1);
  env(&v->out, t, vel, attack, dur);
}
static void ping(Ctx c, float f, double t, float dur, float vel, int wave) {
  Voice *v = nv(c.k, BUS, t, t + dur + 0.05);
  if (!v) return;
  v->freq.v0 = f;
  src(v, 0, wave, 1);
  env(&v->out, t, vel, 0.001f, dur);
}
static void kick(Ctx c, double t, float vel) {
  Voice *v = nv(c.k, BUS, t, t + 0.5);
  if (!v) return;
  v->nowob = 1;
  src(v, 0, SINE, 1);
  pev(&v->freq, SET, t, 110, 0);
  pev(&v->freq, EXP, t + 0.12, 42, 0);
  env(&v->out, t, 0.85f * vel, 0.003f, 0.35f);
}
static void plk(Ctx c, float n, double t, float vel, int wave, float bright, float ring) {
  Voice *v = nv(c.k, TONE, t, t + ring * 5 + 0.1);
  if (!v) return;
  v->freq.v0 = hz(n);
  src(v, 0, wave, 1);
  sweep(v, t, bright, hz(n) * 1.5f, 0.06f, 1);
  env(&v->out, t, vel, 0.002f, ring * 4);
}
static void noisev(Ctx c, double t, int type, float freq, float q, float peak, float attack, float len, float endFreq) {
  Voice *v = nv(c.k, AMB, t, t + len + 0.05);
  if (!v) return;
  src(v, 0, NOISE, 1);
  Flt *f = flt(v, type, freq, q);
  pev(&f->f, SET, t, freq, 0);
  if (endFreq) pev(&f->f, EXP, t + len, endFreq, 0);
  pev(&v->out, SET, t, 0, 0);
  pev(&v->out, LIN, t + attack, peak, 0);
  pev(&v->out, EXP, t + len, 0.0001f, 0);
}

static void play(Ctx c, const Ev *e) {
  const char *m = e->name;
  const float *a = e->a;
  double T = c.at + a[0]; // drums and sounds of the place: (time, ...)
  double t = c.at + a[1]; // notes: (note, time, length, velocity)
  float n = a[0], dur = a[2], vel = a[3];
  Voice *v;
#define IS(s) !strcmp(m, s)
  if (IS("keys")) fmv(c, n, t, dur, vel, 1, 1.8f, 0.12f);
  else if (IS("bell")) fmv(c, n, t, fminf(dur, 0.6f), vel * 0.8f, 3.5f, 2.5f, 0.05f);
  else if (IS("kalimba")) fmv(c, n, t, fminf(dur, 0.5f), vel * 1.1f, 5.4f, 1.2f, 0.02f);
  else if (IS("flute")) {
    if (!(v = nv(c.k, TONE, t, t + dur + 0.6))) return;
    v->freq.v0 = hz(n);
    src(v, 0, SINE, 1);
    pev(&v->out, SET, t, 0, 0);
    pev(&v->out, LIN, t + 0.08, vel * 0.8f, 0);
    pev(&v->out, TGT, t + dur, 0, 0.08f);
  } else if (IS("felt")) {
    if (!(v = nv(c.k, TONE, t, t + dur + 2.5))) return;
    v->freq.v0 = hz(n);
    src(v, 0, TRI, 1);
    src(v, 1, SINE, 2)->gain.v0 = 0.3f;
    sweep(v, t, 2400, 450, 0.3f, 0.7f);
    env(&v->out, t, vel * 1.3f, 0.01f, dur + 1.5f);
  } else if (IS("vibes")) {
    if (!(v = nv(c.k, TONE, t, t + dur + 2.5))) return;
    v->freq.v0 = hz(n);
    src(v, 0, SINE, 1);
    env(&src(v, 1, SINE, 4)->gain, t, 0.3f, 0.002f, 0.25f);
    v->tremHz = 4.5f, v->tremD = 0.25f;
    env(&v->out, t, vel * 1.1f, 0.003f, dur + 1.8f);
  } else if (IS("horn")) {
    if (!(v = nv(c.k, TONE, t, t + dur + 0.5))) return;
    v->freq.v0 = hz(n);
    src(v, 0, SAW, 1);
    pev(&v->det, SET, t, -40, 0);
    pev(&v->det, LIN, t + 0.06, 0, 0);
    flt(v, BP, 1300, 2.5f);
    pev(&v->out, SET, t, 0, 0);
    pev(&v->out, LIN, t + 0.05, vel, 0);
    pev(&v->out, TGT, t + 0.05, vel * 0.6f, 0.2f);
    pev(&v->out, TGT, t + dur, 0, 0.06f);
  } else if (IS("pad")) {
    if (!(v = nv(c.k, TONE, t, t + dur + 2.5))) return;
    v->freq.v0 = hz(n);
    src(v, 0, SAW, 1)->cents = -8;
    src(v, 1, SAW, 1)->cents = 8;
    flt(v, LP, 900, 0.5f);
    pev(&v->out, SET, t, 0, 0);
    pev(&v->out, LIN, t + 0.6, vel * 0.4f, 0);
    pev(&v->out, TGT, t + dur, 0, 0.4f);
  } else if (IS("rhodes")) {
    float f = hz(n);
    if (!(v = nv(c.k, TONE, t, t + dur + 2))) return;
    v->freq.v0 = f, v->fm = 1, v->fmRatio = 1;
    src(v, 0, SINE, 1);
    pev(&v->idx, SET, t, f * 0.9f, 0);
    pev(&v->idx, TGT, t, f * 0.1f, 0.25f);
    v->tremHz = 3.2f, v->tremD = 0.3f;
    env(&v->out, t, vel * 1.1f, 0.008f, dur + 1);
  } else if (IS("wurli")) {
    if (!(v = nv(c.k, TONE, t, t + dur + 1.5))) return;
    v->freq.v0 = hz(n);
    src(v, 0, SQR, 1);
    sweep(v, t, 1800, 700, 0.2f, 0.7f);
    v->tremHz = 5.5f, v->tremD = 0.25f;
    env(&v->out, t, vel * 0.55f, 0.005f, dur + 0.6f);
  } else if (IS("musicbox")) {
    if (!(v = nv(c.k, TONE, t, t + 2))) return;
    v->freq.v0 = hz(n + 12);
    env(&src(v, 0, SINE, 1)->gain, t, vel * 0.8f, 0.002f, 1.2f);
    env(&src(v, 1, SINE, 3)->gain, t, vel * 0.15f, 0.001f, 0.15f);
  } else if (IS("marimba")) {
    if (!(v = nv(c.k, TONE, t, t + 1))) return;
    v->freq.v0 = hz(n);
    env(&src(v, 0, SINE, 1)->gain, t, vel * 1.2f, 0.002f, 0.5f);
    env(&src(v, 1, SINE, 4)->gain, t, vel * 0.3f, 0.001f, 0.06f);
  } else if (IS("guitar")) {
    if (!(v = nv(c.k, TONE, t, t + dur + 1))) return;
    v->freq.v0 = hz(n);
    src(v, 0, TRI, 1);
    env(&src(v, 1, SAW, 1)->gain, t, 0.25f, 0.002f, 0.3f);
    sweep(v, t, 1600, hz(n) * 2, 0.15f, 0.8f);
    env(&v->out, t, vel * 1.2f, 0.003f, fminf(dur, 0.8f) + 0.4f);
  } else if (IS("whistle")) {
    float f = hz(n + 12);
    if (!(v = nv(c.k, TONE, t, t + dur + 0.5))) return;
    v->freq.v0 = f;
    src(v, 0, SINE, 1);
    pev(&v->det, SET, t, -30, 0);
    pev(&v->det, LIN, t + 0.05, 0, 0);
    v->vibHz = 5.5f;
    pev(&v->vib, SET, t, 0, 0);
    pev(&v->vib, LIN, t + fminf(dur, 0.6f), 18, 0);
    pev(&v->out, SET, t, 0, 0);
    pev(&v->out, LIN, t + 0.05, vel * 0.45f, 0);
    pev(&v->out, TGT, t + dur, 0, 0.06f);
    hit(c, t, fminf(dur, 0.4f), BP, f * 2, 0.012f, 0.002f);
  } else if (IS("pluck")) plk(c, n, t, vel * 0.9f, SQR, 3000, 0.3f);
  else if (IS("nylon")) plk(c, n, t, vel * 1.4f, SAW, 2200, 0.6f);
  else if (IS("upright") || IS("bass") || IS("sub")) { // (note, time, length)
    int up = IS("upright"), sub = IS("sub");
    if (!(v = nv(c.k, BUS, t, t + dur + (up ? 0.8 : 0.3)))) return;
    v->freq.v0 = hz(n);
    src(v, 0, up ? SAW : sub ? SINE : TRI, 1);
    if (up) sweep(v, t, 1100, 220, 0.08f, 0.7f);
    else if (!sub) flt(v, LP, 380, 1);
    if (up) env(&v->out, t, 0.6f, 0.004f, fminf(dur, 0.5f) + 0.4f);
    else env(&v->out, t, sub ? 0.6f : 0.5f, sub ? 0.015f : 0.01f, dur);
  }
  // drums: (time, velocity)
  else if (IS("kick")) kick(c, T, a[1]);
  else if (IS("softKick")) kick(c, T, 0.6f * a[1]);
  else if (IS("snare")) hit(c, T, 0.18f, BP, 1700, 0.32f * a[1], 0.002f);
  else if (IS("hat")) hit(c, T, 0.04f, HP, 7000, 0.09f * a[1], 0.002f);
  else if (IS("open")) hit(c, T, 0.22f, HP, 6000, 0.06f * a[1], 0.002f);
  else if (IS("brush")) hit(c, T, 0.3f, BP, 2800, 0.2f * a[1], 0.03f);
  else if (IS("ride")) hit(c, T, 0.5f, BP, 7500, 0.08f * a[1], 0.002f), ping(c, 3700, T, 0.3f, 0.012f * a[1], SQR);
  else if (IS("tick")) ping(c, 2400, T, 0.02f, 0.2f * a[1], SINE);
  else if (IS("tock")) ping(c, 1500, T, 0.03f, 0.25f * a[1], SINE);
  else if (IS("rim")) hit(c, T, 0.03f, BP, 2200, 0.35f * a[1], 0.002f), ping(c, 1800, T, 0.015f, 0.06f * a[1], SQR);
  else if (IS("clap")) {
    for (int i = 0; i < 3; i++) hit(c, T + i * 0.011, 0.02f, BP, 1200, 0.18f * a[1], 0.002f);
    hit(c, T + 0.03, 0.15f, BP, 1100, 0.14f * a[1], 0.002f);
  } else if (IS("shaker")) hit(c, T, 0.07f, HP, 5500, 0.08f * a[1], 0.015f);
  // the place: (time, ...)
  else if (IS("chirp")) {
    int k = 2 + (int)(rnd() * 3), up = rnd() < 0.5f;
    float f = 2600 + rnd() * 2400;
    for (int i = 0; i < k; i++) {
      double at = T + i * (0.07 + rnd() * 0.03);
      if (!(v = nv(c.k, AMB, at, at + 0.07))) return;
      v->nowob = 1;
      src(v, 0, SINE, 1);
      pev(&v->freq, SET, at, f * (up ? 0.85f : 1.15f), 0);
      pev(&v->freq, EXP, at + 0.05, f, 0);
      pev(&v->out, SET, at, 0, 0);
      pev(&v->out, LIN, at + 0.01, 0.018f, 0);
      pev(&v->out, EXP, at + 0.06, 0.0001f, 0);
    }
  } else if (IS("trill")) {
    if (!(v = nv(c.k, AMB, T, T + 0.15))) return;
    v->nowob = 1, v->freq.v0 = 4300 + rnd() * 600;
    src(v, 0, SINE, 1);
    pev(&v->out, SET, T, 0, 0);
    for (int i = 0; i < 3; i++) {
      pev(&v->out, SET, T + i * 0.045, 0.008f, 0);
      pev(&v->out, SET, T + i * 0.045 + 0.018, 0, 0);
    }
  } else if (IS("drop")) {
    float f = 1800 + rnd() * 2600;
    if (!(v = nv(c.k, AMB, T, T + 0.08))) return;
    v->nowob = 1;
    src(v, 0, SINE, 1);
    pev(&v->freq, SET, T, f, 0);
    pev(&v->freq, EXP, T + 0.05, f * 0.7f, 0);
    pev(&v->out, SET, T, 0, 0);
    pev(&v->out, LIN, T + 0.003, a[1], 0);
    pev(&v->out, EXP, T + 0.07, 0.0001f, 0);
  } else if (IS("thunder")) {
    int near = a[1] > 0;
    float len = 4 + rnd() * 3;
    if (!(v = nv(c.k, AMB, T, T + len + 0.1))) return;
    src(v, 0, NOISE, 1);
    Flt *f = flt(v, LP, near ? 900 : 260, 1);
    pev(&f->f, SET, T, near ? 900 : 260, 0);
    pev(&f->f, EXP, T + len, 90, 0);
    pev(&v->out, SET, T, 0, 0);
    pev(&v->out, LIN, T + (near ? 0.05 : 0.6), near ? 2.2f : 1.6f, 0);
    pev(&v->out, EXP, T + len, 0.0001f, 0);
  } else if (IS("train")) {
    int cars = 5 + (int)(rnd() * 5);
    float gap = 0.5f + rnd() * 0.25f, len = cars * gap + 2;
    noisev(c, T, LP, 220, 0.7f, 0.9f, len * 0.45f, len, 120);
    for (int k = 0; k < cars; k++)
      for (int b = 0; b < 2; b++) {
        double at = T + 1 + k * gap + b * 0.13;
        float near = 1 - fabsf((k + 0.5f) / cars - 0.5f) * 1.4f;
        noisev(c, at, BP, 1500 + rnd() * 400, 1.2f, 0.35f * near, 0.003f, 0.05f, 0);
        noisev(c, at, LP, 300, 1, 0.5f * near, 0.003f, 0.08f, 0);
      }
  } else if (IS("voice")) { // someone talking: syllables of a low hum through two vowel bands
    float pitch = 100 + rnd() * 120, out = 0.5f + rnd() * 0.3f;
    double at = T;
    for (int k = 3 + (int)(rnd() * 5); k > 0; k--) {
      float len = 0.09f + rnd() * 0.16f;
      if (!(v = nv(c.k, AMB, at, at + len + 0.02))) return;
      v->nowob = 1, v->par = 1;
      src(v, 0, SAW, 1);
      pev(&v->freq, SET, at, pitch * (0.9f + rnd() * 0.25f), 0);
      pev(&v->freq, LIN, at + len, pitch * (0.85f + rnd() * 0.2f), 0);
      flt(v, BP, 300 + rnd() * 500, 6);
      flt(v, BP, 900 + rnd() * 1100, 6);
      pev(&v->out, SET, at, 0, 0);
      pev(&v->out, LIN, at + 0.03, 0.25f * out, 0);
      pev(&v->out, LIN, at + len, 0, 0);
      at += len + 0.03 + rnd() * 0.12;
    }
  }
#undef IS
}

// ---- rendering ----
static void voiceBlock(Voice *v, Song *s, double T) {
  double Te = T + BLK / SR;
  float *dst = v->dest == TONE ? s->tone : v->dest == BUS ? s->bus : s->amb;
  int i0 = v->t0 > T ? (int)ceil((v->t0 - T) * SR) : 0;
  if (i0 < BLK) {
    if (T < v->t0) T = v->t0; // a voice starting inside this block: its settings from its start, not before
    float cents = pat(&v->det, T);
    if (!v->nowob) cents += s->wobble * sinf(2 * (float)PI * s->lfoHz * (float)(T - s->start));
    if (v->vibHz) cents += pat(&v->vib, T) * sinf(2 * (float)PI * v->vibHz * (float)(T - v->t0));
    float f = pat(&v->freq, T) * exp2f(cents / 1200), inc[2], g0[2], g1[2];
    for (int k = 0; k < v->nsrc; k++) {
      Src *sr = &v->src[k];
      inc[k] = f * sr->ratio * (sr->cents ? exp2f(sr->cents / 1200) : 1) / SR;
      g0[k] = pat(&sr->gain, T), g1[k] = pat(&sr->gain, Te);
    }
    for (int k = 0; k < v->nflt; k++)
      if (v->flt[k].f.n) bqset(&v->flt[k].b, v->flt[k].type, pat(&v->flt[k].f, T), v->flt[k].q);
    float idx = v->fm ? pat(&v->idx, T) * exp2f(cents / 1200) / SR : 0, mInc = v->fmRatio * f / SR;
    float trem = v->tremHz ? 1 - v->tremD + v->tremD * sinf(2 * (float)PI * v->tremHz * (float)(T - v->t0)) : 1;
    float o0 = pat(&v->out, T) * trem, o1 = pat(&v->out, Te) * trem;
    for (int i = i0; i < BLK; i++) {
      float fr = (float)i / BLK, x = 0;
      for (int k = 0; k < v->nsrc; k++) {
        Src *sr = &v->src[k];
        float y, dt = inc[k];
        if (v->fm) dt += idx * sinp(v->fmPh), v->fmPh += mInc, v->fmPh -= (int)v->fmPh;
        if (dt < 0) dt = 0;
        switch (sr->wave) {
          case SINE: y = sinp(sr->ph); break;
          case TRI: y = sr->ph < 0.25f ? 4 * sr->ph : sr->ph < 0.75f ? 2 - 4 * sr->ph : 4 * sr->ph - 4; break;
          case SAW: {
            float p = sr->ph + 0.5f;
            p -= (int)p;
            y = 2 * p - 1 - blep(p, dt);
            break;
          }
          case SQR: {
            float p = sr->ph + 0.5f;
            p -= (int)p;
            y = (sr->ph < 0.5f ? 1 : -1) + blep(sr->ph, dt) - blep(p, dt);
            break;
          }
          default: y = noise[sr->pos], sr->pos = (sr->pos + 1) % NN;
        }
        sr->ph += dt;
        sr->ph -= (int)sr->ph;
        x += y * (g0[k] + (g1[k] - g0[k]) * fr);
      }
      if (v->par) x = bq(&v->flt[0].b, x) + bq(&v->flt[1].b, x);
      else
        for (int k = 0; k < v->nflt; k++) x = bq(&v->flt[k].b, x);
      dst[i] += x * (o0 + (o1 - o0) * fr);
    }
    // silent for good: past its envelope's last change and too quiet to hear
    if (Te > plast(&v->out) + 0.05 && fabsf(o1) < 1e-5f && v->out.n) v->on = 0;
  }
  if (Te >= v->t1) v->on = 0;
}

static float shape(float x) { // the tape: the Player's WaveShaper curve, tanh(1.6 x) / tanh(1.6)
  if (x > 1) x = 1;
  if (x < -1) x = -1;
  return tanhf(1.6f * x) / 0.92166855f;
}

// one block of song k, added into out
static void songBlock(int k, Song *s, double T, float *out) {
  double Te = T + BLK / SR;
  Ctx c = {k, s->start};
  // start the voices that begin in this block (the Player plans nothing past stopAt)
  while (s->next < s->nev && s->start + s->ev[s->next].t < Te) {
    if (s->start + s->ev[s->next].t < s->stopAt) play(c, &s->ev[s->next]);
    s->next++;
  }
  memset(s->tone, 0, sizeof s->tone), memset(s->bus, 0, sizeof s->bus);
  memset(s->amb, 0, sizeof s->amb), memset(s->direct, 0, sizeof s->direct);
  for (int i = 0; i < MAXV; i++)
    if (V[i].on && V[i].song == k) voiceBlock(&V[i], s, T);
  // the beds: vinyl straight to the fader, the others into the muffled sounds of the place
  for (int b = 0; b < s->nbed; b++) {
    Bed *d = &s->bed[b];
    float g = d->gain * (1 + d->swell * sinf(2 * (float)PI * d->hz * (float)(T - s->start)));
    float *buf = d->buf ? vinyl : noise, *to = d->fader ? s->direct : s->amb;
    int len = d->buf ? NV : NN;
    for (int i = 0; i < BLK; i++) to[i] += bq(&d->f, buf[d->pos]) * g, d->pos = (d->pos + 1) % len;
  }
  float f0 = pat(&s->fader, T), f1 = pat(&s->fader, Te);
  for (int i = 0; i < BLK; i++) {
    // the echo: a delay fed back through a dark low-pass, its output into the bus
    float back = bq(&s->dark, s->dl[(s->dpos + 2 * (int)SR - s->dlen) % (2 * (int)SR)]);
    s->dl[s->dpos] = s->send * s->tone[i] + s->fb * back;
    s->dpos = (s->dpos + 1) % (2 * (int)SR);
    float bus = (s->bus[i] + s->tone[i] + back) * 0.8f * s->level;
    float y = bq(&s->tape, shape(bus)) * 0.8f + bq(&s->muffle, s->amb[i]) + s->direct[i];
    out[i] += y * (f0 + (f1 - f0) * (float)i / BLK);
  }
}

// ---- commands from the page (any thread) ----
enum { C_START, C_FADE, C_STOP };
typedef struct { int kind, id; float delay, secs; Song *song; } Cmd;
static pthread_mutex_t lock = PTHREAD_MUTEX_INITIALIZER;
static Cmd cmds[MAXCMD];
static int ncmd;
static Song *dead[MAXS * 4];
static int ndead;

static void push(Cmd c) {
  pthread_mutex_lock(&lock);
  for (int i = 0; i < ndead; i++) free(dead[i]->ev), free(dead[i]->dl), free(dead[i]);
  ndead = 0;
  if (ncmd < MAXCMD) cmds[ncmd++] = c;
  else if (c.song) free(c.song->ev), free(c.song->dl), free(c.song);
  pthread_mutex_unlock(&lock);
}

static const char *NOTES[] = {"keys", "bell", "kalimba", "flute", "felt", "vibes", "horn", "pad", "rhodes", "wurli",
                              "musicbox", "marimba", "guitar", "whistle", "pluck", "nylon", "upright", "bass", "sub"};
static int byTime(const void *a, const void *b) {
  double d = ((const Ev *)a)->t - ((const Ev *)b)->t;
  return d < 0 ? -1 : d > 0;
}
static void addBed(Song *s, int buf, int fader, int type, float freq, float gain, float swell, float period) {
  Bed *b = &s->bed[s->nbed++];
  b->buf = buf, b->fader = fader, b->gain = gain, b->swell = swell;
  b->hz = swell ? 1 / (period * (0.8f + rnd() * 0.4f)) : 0;
  b->pos = (int)(rnd() * 2 * SR) % (buf ? NV : NN);
  bqset(&b->f, type, freq, 1);
}

/*
 * Starts a song: text is the page's NativeSong text, a first line of numbers (bpm, cutoff, level, echo send,
 * echo steps, echo feedback, wobble, wobble rate, crackle, places, crowd, rain, sea, wind, seconds), then one
 * voice call a line. It starts delay seconds from now and fades in over fade seconds.
 */
void lofi_start(int id, const char *text, float delay, float fade) {
  Song *s = calloc(1, sizeof *s);
  float h[15] = {0};
  const char *p = text;
  char *end;
  for (int i = 0; i < 15; i++) h[i] = strtof(p, &end), p = end;
  float sd = 60 / (h[0] > 0 ? h[0] : 80) / 4;
  s->id = id, s->cutoff = h[1], s->level = h[2] ? h[2] : 1, s->send = h[3], s->fb = h[5];
  s->wobble = h[6], s->lfoHz = h[7], s->crackle = h[8], s->places = h[9], s->crowd = h[10];
  s->rain = h[11], s->sea = h[12], s->wind = h[13], s->end = h[14];
  s->dlen = (int)(fminf(2, h[4] * sd) * SR);
  if (s->dlen < 1) s->dlen = 1;
  s->dl = calloc(2 * (int)SR, sizeof(float));
  int cap = 1024;
  s->ev = malloc(cap * sizeof(Ev));
  while ((p = strchr(p, '\n'))) {
    p++;
    Ev e = {0};
    int n = 0;
    if (sscanf(p, "%11s%n", e.name, &n) != 1) break;
    p += n;
    for (int i = 0; i < 4; i++) {
      while (*p == ' ') p++;
      if (*p == '\n' || !*p) break;
      e.a[i] = strtof(p, &end), p = end;
    }
    int note = 0;
    for (unsigned i = 0; i < sizeof NOTES / sizeof *NOTES; i++) note |= !strcmp(e.name, NOTES[i]);
    e.t = note ? e.a[1] : e.a[0];
    if (s->nev == cap) s->ev = realloc(s->ev, (cap *= 2) * sizeof(Ev));
    s->ev[s->nev++] = e;
  }
  qsort(s->ev, s->nev, sizeof(Ev), byTime);
  bqset(&s->tape, LP, s->cutoff, 0.4f);
  bqset(&s->muffle, LP, 3200, 1);
  bqset(&s->dark, LP, 1500, 1);
  addBed(s, 1, 1, HP, 900, 0.25f * s->crackle, 0, 9);
  if (s->places) {
    if (s->crowd > 0) addBed(s, 0, 0, LP, 160, 0.13f * s->crowd, 0.3f, 17);
    if (s->rain > 0) addBed(s, 0, 0, BP, 2400, 0.12f * s->rain, 0, 9), addBed(s, 0, 0, LP, 420, 0.16f * s->rain * s->rain, 0, 9);
    if (s->sea) addBed(s, 0, 0, LP, 650, 0.07f, 0.9f, 8);
    if (s->wind > 0.15f) addBed(s, 0, 0, BP, 420, 0.05f * s->wind, 0.8f, 13);
  }
  push((Cmd){C_START, id, delay, fade, s});
}
// fades song id out over secs, starting delay seconds from now (Player.fadeOut)
void lofi_fade(int id, float delay, float secs) { push((Cmd){C_FADE, id, delay, secs, NULL}); }
void lofi_stop(int id) { push((Cmd){C_STOP, id, 0, 0, NULL}); }
void lofi_volume(float v) { volTarget = v; }
int lofi_idle(void) {
  pthread_mutex_lock(&lock);
  int busy = ncmd;
  for (int i = 0; i < MAXS; i++) busy |= S[i] != NULL;
  pthread_mutex_unlock(&lock);
  return !busy;
}

static void drop(int k) {
  for (int i = 0; i < MAXV; i++)
    if (V[i].song == k) V[i].on = 0;
  if (ndead < MAXS * 4) dead[ndead++] = S[k];
  S[k] = NULL;
}
static void apply(Cmd *c) {
  if (c->kind == C_START) {
    Song *s = c->song;
    int k = 0;
    while (k < MAXS && S[k]) k++;
    if (k == MAXS) { // too many: the oldest goes
      k = 0;
      drop(0);
    }
    s->start = now + c->delay;
    s->stopAt = s->start + s->end;
    pev(&s->fader, SET, s->start, 0, 0);
    pev(&s->fader, LIN, s->start + c->secs, 1, 0);
    S[k] = s;
    return;
  }
  for (int k = 0; k < MAXS; k++)
    if (S[k] && S[k]->id == c->id) {
      if (c->kind == C_STOP) return drop(k);
      Song *s = S[k];
      double at = now + c->delay;
      float v = pat(&s->fader, at);
      while (s->fader.n && s->fader.e[s->fader.n - 1].t >= at) s->fader.n--;
      pev(&s->fader, SET, at, v, 0);
      pev(&s->fader, LIN, at + c->secs, 0, 0);
      if (at + c->secs < s->stopAt) s->stopAt = at + c->secs;
    }
}

void lofi_init(int rate) {
  SR = (float)rate;
  for (int i = 0; i <= TAB; i++) sintab[i] = sinf(2 * (float)PI * i / TAB);
  NN = 2 * rate, NV = 4 * rate;
  noise = malloc(NN * sizeof(float)), vinyl = malloc(NV * sizeof(float));
  for (int i = 0; i < NN; i++) noise[i] = rnd() * 2 - 1;
  for (int i = 0; i < NV; i++) vinyl[i] = (rnd() * 2 - 1) * 0.012f + (rnd() < 0.0004f ? (rnd() - 0.5f) * 0.7f : 0);
}

// Renders frames of mono sound into out (frames a multiple of BLK). Called by the audio thread only.
void lofi_render(float *out, int frames) {
  pthread_mutex_lock(&lock);
  for (int i = 0; i < ncmd; i++) apply(&cmds[i]);
  ncmd = 0;
  for (int k = 0; k < MAXS; k++) // a song nobody stopped (the page went away) is dropped once it's over
    if (S[k] && now > S[k]->stopAt + 3) drop(k);
  pthread_mutex_unlock(&lock);
  float smooth = 1 - expf(-BLK / (SR * 0.05f));
  for (int j = 0; j < frames; j += BLK) {
    float *o = out + j;
    memset(o, 0, BLK * sizeof(float));
    for (int k = 0; k < MAXS; k++)
      if (S[k] && now >= S[k]->start - BLK / SR) songBlock(k, S[k], now, o);
    vol += (volTarget - vol) * smooth;
    for (int i = 0; i < BLK; i++) {
      float y = o[i] * vol;
      o[i] = y > 1 ? 1 : y < -1 ? -1 : y;
    }
    now += BLK / SR;
  }
}

#ifdef __ANDROID__
#include <jni.h>
#define J(name) Java_io_github_utopick_clockscapes_NativeMusic_##name
JNIEXPORT void JNICALL J(setup)(JNIEnv *env, jobject o, jint rate) { lofi_init(rate); }
JNIEXPORT void JNICALL J(render)(JNIEnv *env, jobject o, jfloatArray buf, jint frames) {
  float *p = (*env)->GetPrimitiveArrayCritical(env, buf, NULL);
  lofi_render(p, frames);
  (*env)->ReleasePrimitiveArrayCritical(env, buf, p, 0);
}
JNIEXPORT void JNICALL J(start)(JNIEnv *env, jobject o, jint id, jstring text, jfloat delay, jfloat fade) {
  const char *t = (*env)->GetStringUTFChars(env, text, NULL);
  lofi_start(id, t, delay, fade);
  (*env)->ReleaseStringUTFChars(env, text, t);
}
JNIEXPORT void JNICALL J(fade)(JNIEnv *env, jobject o, jint id, jfloat delay, jfloat secs) { lofi_fade(id, delay, secs); }
JNIEXPORT void JNICALL J(stop)(JNIEnv *env, jobject o, jint id) { lofi_stop(id); }
JNIEXPORT void JNICALL J(volume)(JNIEnv *env, jobject o, jfloat v) { lofi_volume(v); }
JNIEXPORT jboolean JNICALL J(idle)(JNIEnv *env, jobject o) { return lofi_idle(); }
#endif

#ifdef LOFI_CLI
// lofi song.txt out.wav seconds [volume] [fade-in]: renders a song file to a 48 kHz mono WAV, for tests on a computer
int main(int argc, char **argv) {
  if (argc < 4) return fprintf(stderr, "usage: lofi song.txt out.wav seconds [volume]\n"), 1;
  FILE *f = fopen(argv[1], "rb");
  if (!f) return perror(argv[1]), 1;
  fseek(f, 0, SEEK_END);
  long n = ftell(f);
  rewind(f);
  char *text = calloc(n + 1, 1);
  fread(text, 1, n, f);
  fclose(f);
  lofi_init(48000);
  lofi_volume(argc > 4 ? (float)atof(argv[4]) : 1);
  vol = volTarget;
  lofi_start(1, text, 0, argc > 5 ? (float)atof(argv[5]) : 3);
  int frames = (int)(atof(argv[3]) * 48000) / BLK * BLK;
  float *pcm = malloc(frames * sizeof(float));
  for (int i = 0; i < frames; i += 1024) lofi_render(pcm + i, frames - i < 1024 ? frames - i : 1024);
  FILE *w = fopen(argv[2], "wb");
  uint32_t bytes = frames * 4, hdr[] = {0x46464952, 36 + bytes, 0x45564157, 0x20746d66, 16, 0x00010003, 48000, 192000, 0x00200004, 0x61746164, bytes};
  fwrite(hdr, sizeof hdr, 1, w);
  fwrite(pcm, 4, frames, w);
  fclose(w);
  return 0;
}
#endif
