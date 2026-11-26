          case "thaiUbosot": {
            // A Thai temple hall (ubosot, viharn) seen from its gable end, for most of b24's Thai wats and
            // shrines: white walls on a stepped plinth with a gilt-framed door and windows, under the tiered
            // roof: o.n tiers stepping down and out on each side, tiles in o.rc edged in o.bc green, gilt naga
            // bargeboards with a chofa horn at the apex and hang hong hooks at the eaves, and the gable panel
            // (o.pc) with its gilt carving. o.lanna: the low, wide sweeping roofs of the north. o.spire: a
            // spire that tall on the ridge (o.sc). o.dots: a colour dotted over the walls (bottles). o.water:
            // the hall stands on piers in a pond. Colours may be palette indices or [r, g, b].
            const rgb = (v) => (typeof v === "number" ? colors[v] : v),
              tone = (v, k = 0) =>
                css(e.sh(mixc(rgb(v), k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              w = o.w ?? 21,
              hw = Math.floor(w / 2),
              n = o.n ?? 2,
              lanna = !!o.lanna,
              ext = lanna ? 3 : 2,
              drop = lanna ? 2 : 3,
              gw = hw - (n - 1) * ext,
              ww = gw - 1,
              base = o.base ?? 2,
              wh = o.wh ?? (lanna ? 6 : 8),
              wall = o.c ?? 6,
              rc = o.rc ?? 10,
              bc = o.bc ?? 9,
              gold = o.t ?? 12,
              pc = o.pc ?? [150, 40, 38],
              rb = base + wh,
              A = rb + (o.rh ?? Math.round(gw * (lanna ? 1.1 : 1.5))),
              s = (A - rb) / gw;
            if (o.water) {
              box(-hw - 1, 1, w + 2, 1, tone(11, -0.15)); // the pond
              for (let p = -ww - 1; p <= ww + 1; p += 3) box(p, base - 1, 1, base - 2, tone(13, -0.3));
              box(-ww - 2, base, 2 * ww + 5, 1, tone(13, 0.2)); // the deck on its piers
            } else
              for (let i = 1; i <= base; i++) {
                const k = ww + 2 + (base - i);
                box(-k, i, 2 * k + 1, 1, tone(13, i === base ? 0.3 : 0));
              }
            box(-ww, rb, 2 * ww + 1, wh, tone(wall));
            box(-ww, rb, 1, wh, tone(wall, 0.25));
            box(ww - 1, rb, 2, wh, tone(wall, -0.25));
            if (o.dots)
              for (let r = base + 2; r < rb; r += 2)
                for (let p = -ww + 1 + ((r >> 1) & 1); p < ww - 1; p += 2) box(p, r, 1, 1, tone(o.dots));
            const dh = Math.max(2, Math.round(wh * 0.6));
            box(-1, base + dh, 3, dh, 2); // the door in its gilt frame
            box(-2, base + dh + 1, 5, 1, tone(gold));
            box(0, base + dh + 2, 1, 1, tone(gold));
            for (let p = 3; p <= ww - 2; p += 3)
              for (const sg of [-1, 1]) {
                box(sg * p, rb - 2, 1, Math.max(1, wh - 4), 2);
                box(sg * p, rb - 1, 1, 1, tone(gold));
              }
            for (let j = n - 1; j >= 0; j--) {
              // the roof tiers, outermost first so the main gable lies over them
              const aj = A - j * drop,
                E = gw + j * ext,
                eave = Math.round(aj - s * E);
              for (let dx = 0; dx <= E; dx++) {
                const top = Math.round(aj - s * dx),
                  bot = dx < gw ? rb + 1 : eave;
                for (const sg of dx ? [-1, 1] : [1]) {
                  const xx = sg * dx,
                    dim = sg > 0 && dx ? -0.22 : 0;
                  if (j === 0 && dx < gw) {
                    if (top - 2 > rb) box(xx, top - 2, 1, top - 2 - rb, tone(pc, dim));
                  } else if (top - 1 > bot) box(xx, top - 2, 1, top - 1 - bot, tone(rc, dim));
                  if (j > 0 || dx >= gw) box(xx, bot, 1, 1, tone(rc, -0.45)); // the eave's dark lip
                  box(xx, top - 1, 1, 1, tone(bc, dim));
                  box(xx, top, 1, 1, tone(gold, dim)); // the gilt naga bargeboard
                }
              }
              for (const sg of [-1, 1]) box(sg * (E + 1), eave + 2, 1, 2, tone(gold)); // the hang hong hooks
            }
            for (let dx = 0; dx < gw - 3; dx++) {
              // the gilt carving inside the gable: a frame and a central flame
              const yy = Math.round(A - s * dx) - 4;
              if (yy > rb + 1) for (const sg of dx ? [-1, 1] : [1]) box(sg * dx, yy, 1, 1, tone(gold, -0.1));
            }
            if (A - rb > 8) orb(0, rb + Math.round((A - rb) * 0.35), 1, tone(gold, 0.2));
            if (o.spire) {
              const sc = o.sc ?? gold;
              let y2 = A;
              for (const [k, hh] of [
                [2, 3],
                [1, 3],
              ]) {
                box(-k, y2 + hh, 2 * k + 1, hh, tone(sc));
                box(k, y2 + hh, 1, hh, tone(sc, -0.3));
                y2 += hh;
              }
              box(0, A + o.spire, 1, A + o.spire - y2, tone(sc));
              box(0, A + o.spire + 1, 1, 1, tone(gold));
            } else {
              box(0, A + 3, 1, 3, tone(gold)); // the chofa
              box(1, A + 3, 1, 1, tone(gold));
            }
            break;
          }
          case "khmerPrangs": {
            // Khmer-style prangs (laterite, sandstone or brick, some plastered white): each a cella with its
            // door, lintel and little pediment, then five corbelled tiers narrowing like a corn cob, with corner
            // antefixes and niches, and a lotus top with a gilt trident. o.n flanking prangs on each side, lower
            // and narrower, o.gap apart, on one platform; o.gold: the height fraction above which it is gilt;
            // o.ruin: weathered blocks and a broken top; o.wall: a low gallery wall that tall, o.wl cells each side.
            // Used by Phetchaburi, Phitsanulok, Ratchaburi, Sa Kaeo, Sakon Nakhon and Surin.
            const rgb = (v) => (typeof v === "number" ? colors[v] : v),
              tone = (v, k = 0) =>
                css(e.sh(mixc(rgb(v), k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              H = o.h ?? 30,
              W = o.w ?? 13,
              n = o.n ?? 0,
              gap = o.gap ?? Math.round(W * 0.6),
              body = o.c ?? 13,
              trim = o.t ?? 12,
              base = o.base ?? 2,
              goldY = o.gold ? Math.round(H * o.gold) : 1e9;
            const prang = (cx, W, H) => {
              const hw = Math.floor(W / 2),
                bt = base + Math.round(H * 0.36),
                col = (y, k = 0) => tone(y >= goldY ? trim : body, k),
                dh = Math.max(2, Math.round((bt - base) * 0.6));
              box(cx - hw, bt, W, bt - base, col(bt));
              box(cx - hw, bt, 1, bt - base, col(bt, 0.25));
              box(cx + hw - 1, bt, 2, bt - base, col(bt, -0.28));
              box(cx - hw - 1, bt + 1, W + 2, 1, col(bt, 0.3)); // the cornice
              box(cx - 1, base + dh, 3, dh, 2);
              cone(cx, base + dh, 2, 3, col(bt, 0.15)); // the pediment over the door
              box(cx, base + dh + 1, 1, 1, col(bt, -0.2));
              const zone = Math.round(H * 0.88) - bt - 1,
                th = Math.max(2, Math.round(zone / 5));
              let y = bt + 1;
              for (let i = 0; i < 5; i++) {
                const k = Math.max(1, Math.round((hw - 1) * (1 - Math.pow(i / 5, 1.5)))),
                  top = Math.min(y + th, base + H - 3);
                if (top <= y) break;
                box(cx - k, top, 2 * k + 1, top - y, col(top));
                box(cx - k, top, 1, top - y, col(top, 0.25));
                box(cx + k, top, 1, top - y, col(top, -0.28));
                box(cx - k - 1, y + 1, 2 * k + 3, 1, col(y + 1, 0.3)); // the ledge
                if (k >= 2) {
                  box(cx - k - 1, top + 1, 1, 1, col(top, 0.1)); // corner antefixes
                  box(cx + k + 1, top + 1, 1, 1, col(top, -0.28));
                }
                if (k >= 2 && top - y >= 3) box(cx, top - 1, 1, top - y - 2, 2); // a niche
                if (o.ruin && k >= 2)
                  for (let r = y + 1; r <= top; r++)
                    box(cx - k + ((r * 5 + i) % (2 * k)), r, 1, 1, col(r, -0.38));
                y = top;
              }
              if (o.ruin) {
                for (let r = base + 1; r < bt; r += 2) box(cx - hw + ((r * 7) % W), r, 2, 1, col(r, -0.38));
                box(cx - 1, y + 2, 2, 2, col(y)); // the broken crown
              } else {
                dome(cx, y, 1.5, col(y + 1));
                box(cx, base + H, 1, base + H - y - 2, tone(trim, 0.2));
                box(cx - 1, base + H - 2, 3, 1, tone(trim, 0.2)); // the trident's crossbar
              }
            };
            const reach = n * gap + Math.floor(W / 2) + 1;
            box(-reach, base, 2 * reach + 1, base, tone(body, -0.12)); // the platform
            box(-reach, base, 2 * reach + 1, 1, tone(body, 0.2));
            if (o.wall) {
              const wl = o.wl ?? reach + 3;
              box(-wl, base + o.wall, 2 * wl + 1, o.wall, tone(body, -0.05));
              box(-wl, base + o.wall + 1, 2 * wl + 1, 1, tone(body, 0.2));
              for (let p = -wl + 2; p <= wl - 2; p += 3) box(p, base + o.wall - 1, 1, o.wall - 2, 2);
            }
            for (let j = n; j >= 1; j--)
              for (const sg of [-1, 1])
                prang(sg * j * gap, Math.max(7, W - 2 * j - 1), Math.round(H * Math.pow(o.fall ?? 0.7, j)));
            prang(0, W, H);
            break;
          }
          case "thatLao": {
            // A Lao / Isan "that" (Wat Phra That Choeng Chum, Phra That Anon...): a square tower on three stepped
            // bases, a tall body with a gilt-framed door, mouldings stepping in, then the long four-sided lotus
            // bud tapering into a ringed spire, gilt from o.g (fraction of h) up. o.corners: four little thats
            // on the corners of the base (two show). Used by Roi Et, Sakon Nakhon, Ubon Ratchathani and Yasothon.
            const rgb = (v) => (typeof v === "number" ? colors[v] : v),
              tone = (v, k = 0) =>
                css(e.sh(mixc(rgb(v), k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              w = o.w ?? 17,
              h = o.h ?? 32,
              hw = Math.floor(w / 2),
              wall = o.c ?? 6,
              gold = o.t ?? 12,
              gf = o.g ?? 0.6;
            if (o.corners)
              for (const sg of [-1, 1])
                cityLandmark(g, e, "thatLao", x + sg * (hw - 2) * unit, unit, {
                  w: 5,
                  h: Math.round(h * 0.32),
                  c: wall,
                  t: gold,
                  g: 0.55,
                });
            const step = Math.max(1, Math.round(h * 0.05));
            let bodyTop = 0;
            for (let j = 1; j <= h; j++) {
              const f = j / h;
              let k,
                col = f >= gf ? gold : wall,
                lit = 0;
              if (j <= 3 * step) {
                const st = Math.floor((j - 1) / step);
                k = hw - (o.corners ? 1 : 0) - st * Math.max(1, Math.round(hw * 0.12));
                if ((j - 1) % step === step - 1) lit = 0.3;
              } else if (f < 0.42) {
                k = Math.round(hw * 0.58);
                bodyTop = j;
              } else if (f < 0.5) {
                k = Math.round(hw * (0.62 - (f - 0.42) * 2.2));
                lit = j % 2 ? 0.3 : -0.1;
              } else if (f < 0.86) {
                const q = (f - 0.5) / 0.36;
                k = Math.round(hw * 0.46 * (1 + 0.18 * Math.sin(q * Math.PI)) * (1 - q * q));
              } else k = 0;
              k = Math.max(0, k);
              box(-k, j, 2 * k + 1, 1, tone(col, lit));
              if (k >= 2) {
                box(-k, j, 1, 1, tone(col, 0.3));
                box(k, j, 1, 1, tone(col, -0.3));
              }
              if (k === 0 && j % 3 === 0 && j < h - 1) box(-1, j, 3, 1, tone(gold, 0.15)); // spire rings
            }
            const db = 3 * step,
              dh2 = Math.max(3, Math.round((bodyTop - db) * 0.6));
            box(-1, db + dh2, 3, dh2, tone([150, 40, 38])); // the door, red in a gilt arch
            box(-2, db + dh2 + 1, 5, 1, tone(gold));
            box(0, db + dh2 + 2, 1, 1, tone(gold));
            box(-1, Math.round(h * 0.93), 3, 1, tone(gold, 0.3)); // the umbrella
            box(0, h + 2, 1, 2, tone(gold, 0.3));
            break;
          }
          case "thaiBuddha": {
            // A great seated Thai Buddha (Phuket's Big Buddha, Wat Phikun Thong, Sukhothai's Wat Mahathat):
            // touching the earth with the right hand, the sash over the left shoulder, long earlobes, the curled
            // hair and the flame (rasmi) on the crown, on a lotus throne; o.h tall in colour c on a plinth
            // o.ph tall (o.pw its half width, o.pc its colour). o.set "ruin": broken laterite pillars of the old
            // hall on both sides; "hall": the plinth is a white building with windows.
            const art = [
              "..........HS..........",
              "..........HS..........",
              "..........HS..........",
              ".........HBS..........",
              ".........HBBS.........",
              "........HSBSBS........",
              ".......HBSBSBSS.......",
              ".......HBBBBBBS.......",
              "......HHBBBBBBSS......",
              "......HHBSBBSBSS......",
              "......HHBBBBBBSS......",
              "......HH.BBBBS.S......",
              "......H...BBS...S.....",
              "....HHHHBBBBBBSSSS....",
              "...HHBBBBBBBBBBTSSS...",
              "...HBB.HBBBBBBTTS.SS..",
              "...HBB.HBBBBBBTBS.BS..",
              "...HBB.HBBBBBBTBS.BS..",
              "..HHBB.HBBBBBBTBS.BS..",
              "..HBBB.HBBBBBBBBSSBS..",
              "..HBBS.HBBBBBBBBBSBS..",
              "..HBBS.HBBBBBBBBBBBSS.",
              ".HBBBSHBBBBBBBBBBBBSS.",
              "HHBBBBBBBBBBBBBBBBBBSS",
              "HBBBBBBBBBBBBBBBBBBBSS",
              ".SSSSSSSSSSSSSSSSSSSS.",
              "TTTTTTTTTTTTTTTTTTTTTT",
              ".TSTSTSTSTSTSTSTSTSTS.",
            ];
            const fh = o.h ?? 20,
              ph = o.ph ?? 6,
              fw = Math.round((fh * art[0].length) / art.length),
              pw = o.pw ?? Math.ceil(fw / 2),
              pc = o.pc ?? 13;
            if (o.set === "ruin") {
              const lat = (k = 0) =>
                css(e.sh(mixc([150, 88, 66], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k))));
              for (const [sg, ch] of [
                [-1, Math.round(fh * 0.95)],
                [1, Math.round(fh * 0.75)],
              ]) {
                const px = sg * (Math.ceil(fw / 2) + 3) - 1;
                box(px, ch, 3, ch, lat());
                box(px + 2, ch, 1, ch, lat(-0.3));
                for (let r = 3; r < ch; r += 3) box(px, r, 3, 1, lat(-0.2)); // the laterite drums
                box(px + 1, ch + 1, 1, 1, lat(0.1)); // a broken top
              }
            }
            if (o.set === "hall") {
              const wl = (k = 0) =>
                css(e.sh(mixc(colors[6], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k))));
              box(-pw - 1, ph, 2 * pw + 3, ph, wl());
              box(pw - 1, ph, 3, ph, wl(-0.25));
              box(-pw - 2, ph, 2 * pw + 5, 1, css(e.sh(colors[12])));
              for (let r = ph - 3; r > 2; r -= 4) for (let p = -pw + 1; p < pw; p += 3) box(p, r, 1, 2, 2);
              box(-1, 3, 3, 3, 2);
            } else if (ph > 0) statuePlinth(pw, ph, pc);
            sprite(art, ph, fh, fw, sculpture(c, o.t ?? 12));
            break;
          }
          case "holedHill": {
            // A steep karst hill with a hole right through it near the top: Khao Ok Thalu (Phatthalung, the
            // "pierced chest" mountain: a bare rock head on a wooded hill) and Khao Chong Krachok (Prachuap,
            // the "mirror" mountain, with a gilt chedi on its summit). o.w by o.h; o.head: half width of the bare
            // rock head (0: wooded to the top); o.hx, o.hy, o.hr: the hole's centre and radius; o.top "chedi".
            const w = o.w ?? 30,
              h = o.h ?? 34,
              hw = Math.floor(w / 2),
              head = o.head ?? 0,
              hx = o.hx ?? 0,
              hy = o.hy ?? Math.round(h * 0.75),
              hr = o.hr ?? 1.5,
              hill = (i) =>
                Math.max(1, Math.round((head ? h * 0.5 : h) * (1 - Math.pow(Math.abs(i) / (hw + 1), 2.2)))),
              rockTop = (i) =>
                i < -head || i > head + 2
                  ? 0
                  : Math.round(h - (i > head - 3 ? (i - head + 3) * 2.2 : 0) - (i === -head ? 2 : 0)),
              green = (k = 0) =>
                css(e.sh(mixc([70, 128, 72], k > 0 ? [255, 248, 225] : [30, 40, 40], Math.abs(k)))),
              rock = (k = 0) =>
                css(e.sh(mixc([176, 160, 140], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k))));
            let top = 0;
            for (let i = -hw; i <= hw; i++) {
              const gu = hill(i),
                ru = rockTop(i),
                up = Math.max(gu, ru),
                right = i > (head ? Math.round(head / 2) : 0),
                dd = Math.abs(i - hx) <= hr ? Math.sqrt(hr * hr - (i - hx) * (i - hx)) : -1,
                h0 = dd >= 0 ? Math.round(hy - dd) : 0,
                h1 = dd >= 0 ? Math.round(hy + dd) : 0;
              const col = (r) => (r > gu - 1 && ru ? rock(right ? -0.3 : 0) : green(right ? -0.3 : 0));
              // the column in two parts when the hole cuts it
              if (dd >= 0 && h1 < up) {
                if (up > gu && ru) {
                  box(i, up, 1, up - h1, col(up));
                  box(i, h0 - 1, 1, Math.max(0, h0 - 1 - gu), col(h0 - 1));
                } else box(i, up, 1, up - h1, col(up));
                box(i, Math.min(h0 - 1, gu), 1, Math.min(h0 - 1, gu), col(1));
                box(i, h1 + 1, 1, 1, rock(-0.5)); // the hole's shaded roof
              } else {
                if (ru && up > gu) box(i, up, 1, up - gu, col(up));
                box(i, gu, 1, gu, col(1));
              }
              for (let r = gu - 2; r > 1; r -= 3)
                if ((i + Math.floor(r / 3)) % 2 === 0) box(i, r, 1, 1, green(-0.25)); // trees
              if (ru && up > gu) for (let r = gu + 3; r < up - 1; r += 4) box(i, r, 1, 1, rock(-0.35)); // strata
              box(i, up, 1, 1, ru && up > gu ? rock(right ? -0.1 : 0.3) : green(right ? -0.1 : 0.25));
              if (i === hx) top = up;
              if (i === 0 && !head) top = up;
            }
            if (o.top === "chedi") {
              const gd = (k = 0) =>
                css(e.sh(mixc(colors[12], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k))));
              const t0 = hill(0);
              box(-2, t0 + 1, 5, 1, gd(-0.2));
              dome(0, t0 + 1, 2, gd());
              box(1, t0 + 3, 1, 2, gd(-0.3));
              box(0, t0 + 7, 1, 4, gd(0.2));
              box(-1, t0 + 5, 3, 1, gd(0.1));
            }
            break;
          }
          case "phraNakhonKhiri": {
            // Phra Nakhon Khiri (Khao Wang, Phetchaburi): King Mongkut's hilltop palace on three wooded peaks.
            // West, the red Ho Chatchawan Wiangchai observatory tower beside the white palace halls; on the
            // middle peak the hall of Wat Phra Kaeo; east, the white Phra That Chom Phet chedi with its grey spire.
            const peaks = [
                [-12, 11],
                [0, 13],
                [12, 12],
              ],
              hill = (i) =>
                Math.max(
                  1,
                  Math.max(...peaks.map(([px, ph]) => ph - Math.abs(i - px) * 0.55)) -
                    Math.max(0, Math.abs(i) - 15) * 1.2,
                ),
              green = (k = 0) =>
                css(e.sh(mixc([70, 128, 72], k > 0 ? [255, 248, 225] : [30, 40, 40], Math.abs(k)))),
              wt = (k = 0) => css(e.sh(mixc(colors[6], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              grey = css(e.sh([110, 112, 120])),
              red = (k = 0) =>
                css(e.sh(mixc([168, 62, 48], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              gold = css(e.sh(colors[12]));
            for (let i = -20; i <= 20; i++) {
              const up = Math.round(hill(i)),
                near = peaks.reduce((a, p) => (Math.abs(i - p[0]) < Math.abs(i - a[0]) ? p : a));
              box(i, up, 1, up, green(i > near[0] ? -0.28 : 0));
              for (let r = up - 2; r > 1; r -= 3)
                if ((i + Math.floor(r / 3)) % 2 === 0) box(i, r, 1, 1, green(-0.4));
              box(i, up, 1, 1, green(i > near[0] ? -0.1 : 0.25));
            }
            // the west peak: palace hall and observatory tower
            box(-15, 15, 7, 4, wt());
            box(-10, 15, 2, 4, wt(-0.25));
            for (const p of [-14, -12]) box(p, 14, 1, 2, 2);
            box(-16, 16, 9, 1, grey);
            box(-15, 17, 7, 1, grey);
            box(-14, 18, 5, 1, grey);
            box(-8, 22, 3, 11, red());
            box(-6, 22, 1, 11, red(-0.3));
            for (const r of [14, 18]) box(-8, r, 3, 1, red(0.3));
            box(-7, 20, 1, 2, 2);
            dome(-7, 22, 2, red(-0.1));
            box(-7, 25, 1, 1, wt());
            // the middle peak: Wat Phra Kaeo's hall
            box(-3, 17, 7, 4, wt());
            box(2, 17, 2, 4, wt(-0.25));
            box(0, 15, 1, 2, 2);
            for (let dx = 0; dx <= 5; dx++)
              for (const sg of dx ? [-1, 1] : [1]) {
                const tt = 23 - Math.round(dx * 1.2);
                box(sg * dx, tt, 1, 1, gold);
                if (tt - 1 > 17) box(sg * dx, tt - 1, 1, tt - 18, red(sg > 0 ? -0.25 : 0));
              }
            box(0, 26, 1, 3, gold);
            // the east peak: Phra That Chom Phet
            box(9, 15, 7, 2, wt(-0.1));
            box(10, 16, 5, 1, wt(0.2));
            dome(12, 16, 3, wt());
            box(13, 19, 2, 3, wt(-0.25));
            box(11, 21, 3, 2, wt());
            cone(12, 21, 1, 9, grey);
            box(12, 32, 1, 2, wt());
            break;
          }
          case "mondop": {
            // Wat Phra Phutthabat (Saraburi): the gilt mondop over the Buddha's footprint, a square hall of gilt
            // columns under seven tiers of green-tiled, gold-edged roofs and a tall gilt spire, on a white
            // terrace climbed by a stair between golden naga balustrades. Also drawn small on Uthai Thani's hill.
            const gd = (k = 0) =>
                css(e.sh(mixc(colors[12], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              wt = (k = 0) => css(e.sh(mixc(colors[6], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              tile = (k = 0) =>
                css(e.sh(mixc([64, 120, 84], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k))));
            box(-9, 5, 19, 5, wt());
            box(-9, 5, 19, 1, wt(0.3));
            box(7, 4, 3, 4, wt(-0.25));
            for (let r = 1; r <= 5; r++) box(-2, r, 5, 1, r % 2 ? wt(-0.2) : wt(-0.4)); // the stair
            for (const sg of [-1, 1]) {
              box(sg * 3, 5, 1, 5, gd());
              box(sg * 3 - (sg < 0 ? 1 : 0), 2, 2, 2, gd(0.2)); // the naga heads
            }
            box(-6, 13, 13, 8, gd());
            for (let p = -6; p <= 6; p += 2) box(p, 13, 1, 8, gd(p > 3 ? -0.35 : 0.25)); // the gilt columns
            box(-1, 11, 3, 5, 2);
            for (const sg of [-1, 1]) box(sg * 4, 11, 1, 4, 2);
            let y = 13;
            [8, 7, 6, 5, 4, 3, 2].forEach((k, i) => {
              box(-k, y + 2, 2 * k + 1, 2, tile(i % 2 ? -0.1 : 0.05));
              box(k - 1, y + 2, 2, 2, tile(-0.35));
              box(-k, y + 1, 2 * k + 1, 1, gd());
              for (const sg of [-1, 1]) box(sg * (k + 1), y + 2, 1, 1, gd(0.2)); // the chofa tips
              y += 2;
            });
            box(-1, y + 3, 3, 3, gd());
            box(1, y + 3, 1, 3, gd(-0.3));
            box(0, 34, 1, 34 - y - 3, gd(0.2));
            for (let r = y + 5; r < 32; r += 3) box(-1, r, 3, 1, gd(-0.1));
            break;
          }
          case "uthaiHill": {
            // Khao Sakae Krang (Uthai Thani): a wooded hill over the town with the gilt mondop on its summit.
            cityLandmark(g, e, "rock", x, unit, { w: o.w ?? 32, h: o.h ?? 16, c: 9 });
            cityLandmark(g, { ...e, G: e.G - (o.h ?? 16) * unit }, "mondop", x, unit * 0.42, {});
            break;
          }
          case "lotusBudChedi": {
            // The principal chedi of Wat Mahathat, Sukhothai: three square laterite terraces, a tall body with
            // a niche, lotus mouldings and the fat pointed lotus bud of the Sukhothai style, under a short spire;
            // two small corner towers stand on the lowest terrace.
            const st = (k = 0) =>
                css(e.sh(mixc(colors[c], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              lat = (k = 0) =>
                css(e.sh(mixc([150, 96, 74], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k))));
            let y = 0;
            const lay = (k, rows, ink2) => {
              for (let r = 0; r < rows; r++) {
                y++;
                box(-k, y, 2 * k + 1, 1, ink2());
                if (k >= 2) {
                  box(-k, y, 1, 1, ink2(0.25));
                  box(k, y, 1, 1, ink2(-0.3));
                }
              }
              if (k >= 2) box(-k, y, 2 * k + 1, 1, ink2(0.2));
            };
            for (const sg of [-1, 1]) {
              box(sg * 6 - 1, 12, 3, 7, lat(-0.05));
              box(sg * 6, 14, 1, 2, lat(-0.05));
              box(sg * 6 + 1, 12, 1, 7, lat(-0.3));
            }
            lay(7, 3, lat);
            lay(5, 2, lat);
            lay(4, 2, st);
            lay(3, 7, st);
            box(0, y - 1, 1, 3, 2); // the niche
            box(-1, y - 4, 3, 1, st(0.25));
            lay(2, 1, st);
            lay(3, 1, st);
            lay(2, 1, st);
            lay(3, 1, st);
            lay(4, 2, st);
            lay(3, 2, st);
            lay(2, 2, st);
            lay(1, 2, st);
            box(0, y + 4, 1, 4, st(0.1));
            break;
          }
          case "chaiyaChedi": {
            // Phra Borommathat Chaiya (Surat Thani): the dark Srivijaya-era brick chedi, square with a porch on
            // each face, three receding roof tiers set with miniature stupas at the corners, a bell, and a
            // gilt spire; it stands in a white-walled courtyard.
            const dk = (k = 0) =>
                css(e.sh(mixc([92, 90, 92], k > 0 ? [255, 248, 225] : [30, 30, 40], Math.abs(k)))),
              gd = (k = 0) =>
                css(e.sh(mixc(colors[12], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k))));
            box(-9, 2, 19, 2, css(e.sh(colors[6])));
            box(-9, 2, 19, 1, css(e.sh(mixc(colors[6], [255, 248, 225], 0.3))));
            box(-6, 12, 13, 10, dk());
            box(-6, 12, 1, 10, dk(0.25));
            box(5, 12, 2, 10, dk(-0.3));
            for (let r = 5; r < 12; r += 3) box(-6, r, 13, 1, dk(-0.2)); // the brick courses
            box(-3, 10, 7, 8, dk(0.08)); // the porch with its arched gable
            dome(0, 10, 3, dk(0.15));
            box(-1, 8, 3, 6, 2);
            dome(0, 8, 1.5, 2);
            let y = 12;
            for (const [k, hh] of [
              [5, 4],
              [4, 3],
              [3, 3],
            ]) {
              box(-k - 1, y + 1, 2 * k + 3, 1, dk(0.2));
              box(-k, y + hh, 2 * k + 1, hh, dk());
              box(k, y + hh, 1, hh, dk(-0.3));
              for (const sg of [-1, 1]) {
                // the miniature stupas on each tier's corners
                box(sg * (k + 1), y + 3, 1, 2, dk(0.1));
                box(sg * (k + 1), y + 4, 1, 1, gd());
              }
              y += hh;
            }
            dome(0, y, 3, dk());
            box(-1, y + 5, 3, 2, dk(0.1));
            box(0, 32, 1, 32 - y - 5, gd(0.2));
            for (let r = y + 7; r < 30; r += 2) box(-1, r, 3, 1, gd());
            break;
          }
          case "lannaChedi": {
            // Phra That Cho Hae (Phrae): a gilt Lanna chedi sheathed in gold-coloured copper plate. Three tall
            // stepped octagonal bases, the bell on its rings, a square harmika, the long ringed spire under a
            // gilt umbrella, and little umbrellas on the corners of the first base.
            const gd = (k = 0) =>
              css(e.sh(mixc(colors[c], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k))));
            let y = 0;
            const lay = (k, rows, lit = 0) => {
              for (let r = 0; r < rows; r++) {
                y++;
                box(-k, y, 2 * k + 1, 1, gd(lit));
                if (k >= 3) {
                  box(-k, y, Math.ceil(k / 3), 1, gd(lit + 0.25)); // the octagon's lit and shaded facets
                  box(k - Math.ceil(k / 3) + 1, y, Math.ceil(k / 3), 1, gd(lit - 0.3));
                }
              }
            };
            for (const [k, rows] of [
              [11, 3],
              [9, 3],
              [7, 3],
            ]) {
              lay(k, rows);
              lay(k - 1, 1, 0.3);
            }
            for (const sg of [-1, 1]) {
              box(sg * 10, 9, 1, 5, gd(0.1));
              box(sg * 10 - 1, 9, 3, 1, gd(0.3));
              box(sg * 10 - 1, 7, 3, 1, gd(0.2));
            }
            lay(6, 1, -0.1);
            lay(5, 1, 0.2);
            lay(5, 1);
            for (const k of [5, 5, 5, 4, 4, 3]) lay(k, 1);
            lay(2, 1, 0.3);
            lay(3, 2);
            lay(2, 1, 0.3);
            for (let i = 0; i < 4; i++) lay(i % 2 ? 1 : 2, 1, i % 2 ? 0 : 0.2); // the rings
            lay(1, 3);
            const ut = y + 3;
            box(0, 38, 1, 38 - y, gd(0.2));
            box(-2, ut, 5, 1, gd(0.3)); // the gilt umbrella
            box(-1, ut + 2, 3, 1, gd(0.3));
            break;
          }
          case "phaSonKaeo": {
            // Wat Phra That Pha Son Kaeo (Khao Kho, Phetchabun): the tall white chedi covered in mosaic of
            // coloured tiles and china, with five white seated Buddhas stacked one above another before it.
            cityLandmark(g, e, "stupa", x, unit, { w: o.w ?? 25, h: o.h ?? 40, shape: "bell", c: 6, t: 7 });
            const tiles = [7, 10, 9, 12, 11, 5];
            for (let j = 8; j < 30; j += 2) {
              const k = Math.round(8 * (1 - (j - 6) / 30));
              for (let p = -k + ((j >> 1) % 3); p <= k; p += 3) box(p, j, 1, 1, tiles[(p + j + 30) % 6]);
            }
            [6, 6, 5, 5, 4].reduce((b, fh) => {
              cityLandmark(g, { ...e, G: e.G - b * unit }, "thaiBuddha", x, unit, {
                h: fh,
                ph: 0,
                c: 6,
                t: 6,
              });
              return b + fh;
            }, 4);
            break;
          }
          case "chediKlangNam": {
            // Phra Chedi Klang Nam (Rayong): a white bell chedi on its own little island in the river mouth,
            // with the water round its rocky foot.
            const water = (k = 0) =>
              css(e.sh(mixc([82, 140, 176], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k))));
            cityLandmark(g, { ...e, G: e.G - 3 * unit }, "stupa", x, unit, {
              w: o.w ?? 19,
              h: o.h ?? 28,
              c: 6,
              t: 12,
            });
            box(-11, 2, 23, 2, water());
            for (let p = -10; p <= 10; p += 4) box(p, 2, 2, 1, water(0.35));
            box(-9, 3, 19, 2, css(e.sh([128, 122, 116]))); // the island's rocks
            box(5, 3, 4, 2, css(e.sh([100, 96, 94])));
            break;
          }
          case "goldenMermaid": {
            // The Golden Mermaid of Samila Beach (Songkhla): a gilt mermaid sitting on the rocks by the sea,
            // wringing out her long hair, her tail curled round beside her.
            const art = [
              "...HS.......",
              "..HBS.HBS...",
              "..HB.HBBBS..",
              "..HB.HBBBSS.",
              "...HHBBBBSS.",
              "....HBBBBSBS",
              "....HBBBBSBS",
              "....HBBBBSBS",
              "....HBBBBS.S",
              "...HBBBBBS..",
              "..HBBBBBBS..",
              ".HBBBBBBS...",
              "HBBS.HBBS...",
              "HBS...HBBS..",
              "HS.....HBS..",
            ];
            const fh = o.h ?? 12,
              rk = (k = 0) =>
                css(e.sh(mixc([120, 116, 112], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k))));
            orb(-4, 2, 3, rk());
            orb(3, 2, 4, rk(-0.2));
            orb(-1, 4, 3, rk(0.15));
            box(-7, 1, 15, 1, rk(-0.35));
            sprite(art, 5, fh, Math.round((fh * 12) / 15), sculpture(c, 12));
            break;
          }
          case "rattanarangsan": {
            // Rattanarangsan Palace (Ranong): the rebuilt teak residence of 1890 on its hill, a raised wooden
            // house on a masonry ground floor with a veranda, under steep Thai gable roofs of red tile.
            const wd = (k = 0) =>
                css(e.sh(mixc([138, 88, 58], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              tl = (k = 0) =>
                css(e.sh(mixc([170, 70, 50], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              wt = (k = 0) => css(e.sh(mixc(colors[6], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k))));
            box(-12, 5, 25, 5, wt());
            box(10, 5, 3, 5, wt(-0.25));
            for (let p = -11; p <= 11; p += 3) box(p, 4, 1, 3, 2);
            box(-13, 6, 27, 1, wd(0.2)); // the veranda floor
            box(-11, 11, 23, 5, wd());
            box(9, 11, 2, 5, wd(-0.3));
            for (let p = -12; p <= 12; p += 3) box(p, 11, 1, 5, wd(-0.2)); // the veranda posts
            for (let p = -9; p <= 9; p += 3) box(p, 10, 1, 2, 2);
            for (let dx = 0; dx <= 13; dx++)
              for (const sg of dx ? [-1, 1] : [1]) {
                const tt = 15 - Math.round(dx * 0.4); // the veranda roof
                box(sg * dx, tt, 1, 2, tl(sg > 0 ? -0.25 : 0));
              }
            for (let dx = 0; dx <= 7; dx++)
              for (const sg of dx ? [-1, 1] : [1]) {
                const tt = 23 - Math.round(dx * 1.2); // the steep main gable
                box(sg * dx, tt, 1, tt - 13, dx < 6 ? wd(sg > 0 ? -0.15 : 0.1) : tl(sg > 0 ? -0.25 : 0));
                box(sg * dx, tt, 1, 1, tl(sg > 0 ? -0.25 : 0.1));
              }
            box(0, 25, 1, 2, wd(0.2));
            break;
          }
