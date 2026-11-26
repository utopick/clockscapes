          case "novgorodSophia":
          case "dormitionVladimir":
          case "churchOnBlood":
          case "elijahYaroslavl":
          case "vologdaSophia":
          case "ruSobor15": {
            // A Russian church drawn from its parts (b15): walls in o.bays bays with pilasters and narrow
            // windows, a roofline of zakomary arches (zak "kok", or "flat" with a roof in o.rc), o.tiers rows of
            // kokoshniks round the drum's foot, a central drum and dome (ms "onion" or "helmet"), n 2 or 4 side
            // domes, and a bell tower (bt tall, bw wide, at bx, top bs "tent", "spire", "onion" or "helmet").
            // Colours (c, mc entries, rc, bc) are palette indices or [r, g, b]. The named kinds are the same
            // drawing with their own defaults: Saint Sophia (Veliky Novgorod), the Dormition (Vladimir), the
            // Church on Blood (Yekaterinburg), Elijah the Prophet (Yaroslavl), Saint Sophia (Vologda).
            o = {
              ...{
                // white walls, five helmet domes (gold over lead grey) and the stair turret's little dome
                novgorodSophia: {
                  w: 21,
                  nh: 14,
                  bays: 5,
                  r: 4,
                  dd: 6,
                  ms: "helmet",
                  mc: [12, 8],
                  n: 4,
                  sr: 2,
                  bt: 18,
                  bw: 5,
                  bx: -12,
                  bs: "helmet",
                  btop: 0,
                },
                // white limestone, the arcade frieze, five gold domes and the pseudo-Gothic bell tower's spire
                dormitionVladimir: {
                  w: 19,
                  nh: 14,
                  bays: 5,
                  r: 4,
                  dd: 6,
                  mc: [12],
                  n: 4,
                  sr: 2,
                  frieze: 1,
                  bt: 26,
                  bw: 7,
                  bx: -13,
                  bs: "spire",
                  btiers: 2,
                  bc: 6,
                  btop: 7,
                },
                // white and gold, tiers of kokoshniks, five gold onions; the bell tower on the left
                churchOnBlood: {
                  w: 19,
                  nh: 12,
                  bays: 3,
                  r: 4,
                  dd: 7,
                  mc: [12],
                  n: 4,
                  sr: 2,
                  tiers: 2,
                  bt: 26,
                  bw: 5,
                  bx: -12,
                  bs: "onion",
                  btiers: 2,
                },
                // salmon walls under green roofs, five green onions, the tented bell tower on the left
                elijahYaroslavl: {
                  w: 19,
                  nh: 12,
                  bays: 4,
                  zak: "flat",
                  rc: 9,
                  r: 4,
                  dd: 8,
                  mc: [9],
                  n: 4,
                  sr: 2,
                  c: [208, 118, 98],
                  bt: 22,
                  bw: 7,
                  bx: -14,
                  bs: "tent",
                  bc: [208, 118, 98],
                },
                // white walls, the gold central onion and four dark ones
                vologdaSophia: { w: 21, nh: 15, bays: 4, r: 4, dd: 6, mc: [12, [64, 66, 82]], n: 4, sr: 2 },
              }[kind],
              ...o,
            };
            const tone = (v) => (typeof v === "number" ? colors[v] : v),
              ik = (v) => css(e.sh(tone(v))),
              dk = (v, k = 0.3) => css(e.sh(mixc(tone(v), [41, 40, 54], k))),
              lt = (v, k = 0.3) => css(e.sh(mixc(tone(v), [255, 248, 225], k)));
            const W = o.w ?? 19,
              hw = Math.floor(W / 2),
              nh = o.nh ?? 12,
              C = o.c ?? 6,
              wall = ik(C),
              wsh = dk(C, 0.22),
              wlt = lt(C, 0.4),
              win = ink[2],
              gold = ink[3],
              bays = o.bays ?? 3,
              mc = o.mc ?? [12],
              r = o.r ?? 4,
              dd = o.dd ?? 6,
              n = o.n ?? 4,
              sr = o.sr ?? Math.max(2, r - 1),
              bayW = W / bays,
              kz = o.zak === "flat" ? (o.rc != null ? 2 : 0) : Math.max(1, Math.floor(bayW / 2)),
              tiers = o.tiers ?? 0;
            // A dome of radius k on cx whose foot is `base`, with light down its left and shade down its right.
            const cupola = (cx, base, k, cv, shape = o.ms ?? "onion") => {
              const f = ik(cv);
              let tip;
              if (shape === "helmet") {
                dome(cx, base, k, f);
                const kk = Math.max(1, Math.round(k * 0.45)),
                  th = Math.round(k * 0.7) + 1;
                cone(cx, base + k - 1, kk, th, f);
                if (k >= 2) box(cx - k + 1, base + Math.round(k * 0.7), 1, Math.round(k * 0.5), lt(cv, 0.45));
                if (k >= 2) box(cx + k - 1, base + Math.round(k * 0.6), 1, Math.round(k * 0.5), dk(cv, 0.3));
                tip = base + k + th;
              } else {
                const tall = Math.round(k * 1.6) + 1;
                orb(cx, base + k, k, f);
                cone(cx, base + k, k, tall, f);
                if (k >= 2) {
                  const g2 = Math.ceil(k / 2);
                  box(cx - g2, base + k + Math.round(k * 0.6), 1, Math.round(k * 0.9), lt(cv, 0.5));
                  box(cx + g2, base + k + Math.round(k * 0.4), 1, Math.round(k * 0.9), dk(cv, 0.3));
                }
                tip = base + k + tall;
              }
              box(cx, tip + 4, 1, 4, gold);
              box(cx - 1, tip + 3, 3, 1, gold);
            };
            // A drum h tall on cx for a dome of radius k, with its slit windows and lit cornice.
            const drum = (cx, base, k, h) => {
              const dw = Math.max(1, k - 1);
              box(cx - dw, base + h, 2 * dw + 1, h, wall);
              box(cx + dw, base + h - 1, 1, h - 1, wsh);
              if (h >= 4 && dw >= 2)
                for (let p = -dw + 1; p < dw; p += 2) box(cx + p, base + h - 1, 1, h - 3, win);
              box(cx - dw, base + h, 2 * dw + 1, 1, wlt);
            };
            // the bell tower: o.btiers stages, each a cell narrower each side, the open belfry at the top
            const bt = o.bt ?? 0;
            if (bt) {
              const bw = o.bw ?? 5,
                bx = o.bx ?? -hw - 3,
                st = o.btiers ?? 1,
                bcol = o.bc ?? C,
                bwall = ik(bcol),
                bsh = dk(bcol, 0.22);
              let bk = Math.floor(bw / 2),
                y0 = 0;
              for (let i = 0; i < st; i++) {
                const y1 = i === st - 1 ? bt : Math.round(((i + 1) * bt) / (st + 0.6));
                box(bx - bk, y1, 2 * bk + 1, y1 - y0, bwall);
                box(bx + bk, y1 - 1, 1, y1 - y0 - 1, bsh);
                if (i < st - 1 || st === 1)
                  for (let y = y0 + 4; y < y1 - 5; y += 5) box(bx, y + 2, 1, 2, win);
                box(bx - bk - (bk >= 2 ? 1 : 0), y1, 2 * bk + 1 + (bk >= 2 ? 2 : 0), 1, lt(bcol, 0.4));
                y0 = y1;
                if (i < st - 1 && bk > 2) bk--;
              }
              // the belfry openings in the top stage, with a bell
              box(bx - bk + 1, bt - 2, Math.max(1, 2 * bk - 1), 4, win);
              if (bk >= 2) box(bx, bt - 3, 1, 2, ink[12]);
              const bs = o.bs ?? "tent",
                bm = o.bmc ?? mc[mc.length - 1];
              if (bs === "tent") {
                const tt = o.btop ?? bk * 3 + 5;
                box(bx - bk - 1, bt + 1, 2 * bk + 3, 1, ik(bm));
                cone(bx, bt + 1, bk, tt, ik(bm));
                box(bx + 1, bt + 1 + Math.round(tt * 0.55), 1, Math.round(tt * 0.55), dk(bm, 0.25));
                for (let j = 2; j < tt - 2; j += 3) box(bx - 1, bt + j, 1, 1, lt(bm, 0.4));
                cupola(bx, bt + tt, 1, mc[0], "onion");
              } else if (bs === "spire") {
                const k = Math.max(1, bk - 1);
                drum(bx, bt, k + 1, 3);
                dome(bx, bt + 3, k, ik(mc[0]));
                const sp = o.btop ?? bk * 4 + 4;
                cone(bx, bt + 3 + k, 1, sp, ik(mc[0]));
                box(bx, bt + 3 + k + sp + 3, 1, 3, gold);
                box(bx - 1, bt + 3 + k + sp + 2, 3, 1, gold);
              } else {
                const k = Math.max(1, bk);
                drum(bx, bt, k, o.btop ?? 2);
                cupola(bx, bt + (o.btop ?? 2), k, mc[0], bs);
              }
            }
            // the domes: the back pair of five, the central drum, then the front pair
            const sx = o.sx ?? hw - sr,
              bxs = o.bxs ?? Math.min(sx - 2, r + sr - 1),
              top = nh + kz + tiers * 3,
              side = n >= 2 ? [-sx, sx] : [],
              back = n >= 4 ? [-bxs, bxs] : [];
            const sdd = o.sdd ?? Math.max(3, dd - 2);
            for (const p of back) {
              drum(p, nh, sr, kz + sdd + 3);
              cupola(p, nh + kz + sdd + 3, sr, mc[1 % mc.length]);
            }
            drum(0, nh, r, top - nh + dd);
            if (tiers)
              for (let i = 0; i < tiers; i++)
                box(-r - tiers + i, nh + kz + i * 3 + 3, 2 * (r + tiers - i) + 1, 3, wall);
            cupola(0, top + dd, r, mc[0]);
            for (const p of side) {
              drum(p, nh, sr, kz + sdd);
              cupola(p, nh + kz + sdd, sr, mc[1 % mc.length]);
            }
            // the walls, pilasters and windows
            box(-hw, nh, W, nh, wall);
            box(hw, nh - 1, 1, nh - 1, wsh);
            box(-hw, 1, W, 1, wsh);
            const edge = (i) => -hw + Math.round(i * bayW);
            for (let i = 0; i < bays; i++) {
              const a = edge(i),
                b = edge(i + 1) - 1,
                bc = Math.round((a + b) / 2),
                k = Math.max(1, Math.floor((b - a + 1) / 2));
              if (i) box(a, nh - 1, 1, nh - 2, wlt);
              const door = bc >= -1 && bc <= 1;
              box(bc, nh - 3, 1, 3, win);
              if (!door) box(bc, Math.round(nh * 0.45), 1, 3, win);
              if (o.zak !== "flat") {
                dome(bc, nh, k, wlt);
                dome(bc, nh, Math.max(0.6, k - 0.5), wall);
                if (k >= 2) box(bc, nh + Math.ceil(k / 2), 1, 1, win);
              }
            }
            if (o.frieze) for (let p = -hw + 1; p < hw; p += 2) box(p, Math.round(nh * 0.62), 1, 1, wsh);
            box(-hw, nh, W, 1, wlt);
            if (o.zak === "flat" && o.rc != null) {
              box(-hw + 1, nh + 1, W - 2, 1, ik(o.rc));
              box(-hw + 3, nh + 2, W - 6, 1, ik(o.rc));
              box(hw - 1, nh + 1, 1, 1, dk(o.rc, 0.3));
            }
            // kokoshnik tiers round the central drum's foot
            for (let i = 0; i < tiers; i++) {
              const ww = r + tiers - i,
                yb = nh + kz + i * 3 + 3;
              for (let p = -ww + 1; p <= ww - 1; p += 2) {
                dome(p, yb, 1.4, wlt);
                dome(p, yb, 0.8, wall);
              }
            }
            // the west door
            box(-2, 7, 5, 7, wlt);
            box(-1, 5, 3, 5, win);
            box(0, 6, 1, 1, win);
            break;
          }
          case "motherlandCalls": {
            // The Motherland Calls, Volgograd: the striding woman on Mamayev Kurgan, the sword raised high in her
            // right hand, the left arm flung out calling, the cloak billowing behind; on a low granite slab.
            const h = o.h ?? 40,
              ph = o.ph ?? 6,
              art = [
                "............................HB",
                "...........................HB.",
                "..........................HB..",
                "..........................HB..",
                ".........................HB...",
                "........................HB....",
                ".......................HB.....",
                "......................HB......",
                ".....................HB.......",
                ".....................HB.......",
                "....................HB........",
                ".................BBBBB........",
                "..........BBB....BBB..........",
                ".........HBBBB..BBB...........",
                ".........HBBBB..BBB...........",
                "HB.......HBBBBSBBB............",
                "HBBB.....BBBBSBBBB............",
                "HBBBBBB...BBBBBBB.............",
                "..BBBBBBB.BBB.SSS.............",
                "....BBBBHBBBBBBBBBBS..........",
                "........HBBBBBBBSBBBBS........",
                "........HBBBBBBBSSBBBBBS......",
                ".........HBBBBBBSSSBBBBBBS....",
                ".........HBBBBBBSSSBBBBBBBS...",
                ".........HBBBBBSSSSBBBBBBBBS..",
                ".........HBBBBBSSSSSBBBBBBSS..",
                ".........HBBBBBBSSSSBBBBBSS...",
                "........HBBBBBBBSSSBBBBSS.....",
                ".......BHBBBBBBBSSBBBSS.......",
                ".......HBBBBBBBBSSSSS.........",
                "......BHBBBBBBBB..............",
                "......HBBBBBBBBB..............",
                ".....BHBBBBBBBBB..............",
                ".....HBBBBBBBBB...............",
                "....HBBBB..SSSSS..............",
                "....HBBB...SSSSS..............",
                "...BHBBB....SSSS..............",
                "...HBBB.....SSSS..............",
                "..BHBBB.....SSSSS.............",
                "..BHBBB......SSSS.............",
                "..HBBB.......SSSS.............",
                ".BHBBBB......SSSSS............",
              ],
              sw = Math.round((h * art[0].length) / art.length),
              fx = Math.round((sw * 9) / art[0].length) - Math.floor(sw / 2), // the feet's centre
              pc = o.pc ?? 13,
              pw = o.pw ?? 7;
            box(fx - pw - 2, 2, 2 * pw + 5, 2, chShade(pc, 0.3));
            box(fx - pw - 2, 2, 2 * pw + 5, 1, chShade(pc, 0.1));
            box(fx - pw, ph + 1, 2 * pw + 1, ph - 1, pc);
            box(fx + pw - 1, ph, 2, ph - 2, chShade(pc, 0.35));
            box(fx - pw, ph + 1, 2 * pw + 1, 1, chLit(pc, 0.3));
            sprite(art, ph + 1, h, sw, sculpture(c));
            break;
          }
          case "lalaTulpan": {
            // Lala Tulpan Mosque, Ufa: a white hall whose roof opens like a tulip (petals of turquoise glass) and
            // two slender white minarets, each with a balcony and a closed tulip bud for its top.
            const mh = o.mh ?? 40,
              mx = o.mx ?? 9,
              wall = ink[6],
              wsh = chShade(6, 0.2),
              glass = o.dc ?? 4,
              gsh = chShade(glass, 0.35),
              glt = chLit(glass, 0.35);
            const bud = (cx, base) => {
              [1, 2, 2, 2, 2, 1, 1, 0, 0].forEach((k, j) => {
                box(cx - k, base + j + 1, 2 * k + 1, 1, glass);
                if (k) box(cx + k, base + j + 1, 1, 1, gsh);
                if (k > 1) box(cx - k, base + j + 1, 1, 1, glt);
              });
              box(cx, base + 7, 1, 5, gsh); // the seam between two petals
              box(cx, base + 12, 1, 3, 3);
            };
            for (const s of [-1, 1]) {
              const cx = s * mx;
              box(cx - 2, 3, 5, 3, wall);
              box(cx - 1, mh - 9, 3, mh - 9, wall);
              box(cx + 1, mh - 10, 1, mh - 12, wsh);
              const b = Math.round(mh * 0.66);
              box(cx - 2, b, 5, 1, chLit(6, 0.3));
              box(cx - 2, b - 1, 5, 1, wsh);
              box(cx - 2, b + 1, 1, 1, wall);
              box(cx + 2, b + 1, 1, 1, wall);
              box(cx, b - 4, 1, 2, 2);
              box(cx - 1, mh - 9, 3, 1, chLit(6, 0.3));
              bud(cx, mh - 9);
            }
            // the hall and its tulip roof
            const nh = o.nh ?? 11;
            box(-6, nh, 13, nh, wall);
            box(6, nh - 1, 1, nh - 1, wsh);
            box(-6, 1, 13, 1, wsh);
            for (const p of [-4, 0, 4]) {
              box(p - 1, nh - 3, 3, nh - 6, glass); // tall pointed windows of the same glass
              box(p, nh - 2, 1, 1, glass);
              box(p + 1, nh - 4, 1, nh - 8, gsh);
            }
            box(-1, 4, 3, 3, 2);
            box(-6, nh, 13, 1, chLit(6, 0.35));
            [5, 6, 6, 7, 7, 7, 6, 6, 5].forEach((k, j) => {
              box(-k, nh + j + 1, 2 * k + 1, 1, glass);
              box(-k, nh + j + 1, 1, 1, glt);
              box(k, nh + j + 1, 1, 1, gsh);
            });
            for (const p of [-3, 3]) box(p, nh + 8, 1, 6, gsh); // the petals' edges
            for (const [p, tip] of [
              [-4, 2],
              [4, 2],
              [0, 4],
            ])
              for (let j = 0; j < tip; j++) {
                const k = Math.max(0, Math.round(1.5 * (1 - j / tip)));
                box(p - k, nh + 10 + j, 2 * k + 1, 1, glass);
              }
            box(0, nh + 17, 1, 3, 3);
            break;
          }
          case "goldenGateVladimir": {
            // The Golden Gate, Vladimir: a white stone tower pierced by a tall arched passage, the round
            // buttress turrets of 1795 at its corners, a low silver roof and the gate church on top, with
            // its zakomary and a gilded helmet dome.
            const wall = ink[6],
              wsh = chShade(6, 0.22),
              wlt = chLit(6, 0.4),
              roof = o.rc ?? 8,
              gold = o.dc ?? 12;
            for (const x of [-8, 8]) {
              box(x - 1, 11, 3, 11, wall);
              box(x + 1, 10, 1, 10, wsh);
              box(x - 1, 11, 3, 1, wlt);
              cone(x, 11, 1, 2, wall);
            }
            box(-6, 15, 13, 15, wall);
            box(6, 14, 1, 14, wsh);
            box(-6, 1, 13, 1, wsh);
            dome(0, 10, 4.4, wlt);
            box(-4, 10, 9, 10, wlt);
            box(-3, 10, 7, 10, 2);
            dome(0, 10, 3.4, 2);
            box(-1, 13, 3, 1, wsh); // the carved band over the arch
            for (const p of [-5, 5]) box(p, 13, 1, 2, wsh);
            box(-7, 15, 15, 1, wlt);
            box(-6, 16, 13, 1, roof);
            box(-5, 17, 11, 1, roof);
            box(5, 17, 1, 2, chShade(roof, 0.3));
            // the gate church
            box(-3, 22, 7, 5, wall);
            box(3, 21, 1, 4, wsh);
            for (const p of [-2, 0, 2]) box(p, 21, 1, 2, 2);
            dome(0, 22, 3.4, wlt);
            dome(0, 22, 2.6, wall);
            box(-3, 22, 7, 1, wlt);
            box(-1, 26, 3, 4, wall);
            box(1, 25, 1, 3, wsh);
            box(0, 25, 1, 2, 2);
            dome(0, 26, 2, gold);
            cone(0, 27, 1, 2, gold);
            box(-1, 28, 1, 1, chLit(gold, 0.45));
            box(0, 33, 1, 4, 3);
            box(-1, 32, 3, 1, 3);
            break;
          }
          case "vologdaBelfry": {
            // The bell tower of Saint Sophia, Vologda: white stages stepping in (the arched gate, the clock, the
            // open belfry, an octagon of arches), crowned by a gilded dome, its lantern and the cross.
            const h = o.h ?? 40,
              wall = ink[6],
              wsh = chShade(6, 0.22),
              wlt = chLit(6, 0.4),
              gold = o.t ?? 12,
              s = h / 40,
              y1 = Math.round(14 * s),
              y2 = Math.round(24 * s),
              y3 = Math.round(32 * s),
              y4 = Math.round(37 * s);
            const stage = (k, b, t) => {
              box(-k, t, 2 * k + 1, t - b, wall);
              box(k, t - 1, 1, t - b - 1, wsh);
              box(-k - 1, t, 2 * k + 3, 1, wlt);
              for (const p of [-k + 1, k - 1]) box(p, t - 1, 1, t - b - 2, wlt);
            };
            stage(4, 0, y1);
            box(-2, 7, 5, 7, 2);
            box(-1, 8, 3, 1, 2);
            stage(3, y1, y2);
            orb(0, y1 + 5, 1.5, 2);
            orb(0, y1 + 5, 0.8, 6);
            box(0, y2 - 2, 1, 2, 2);
            stage(3, y2, y3);
            for (const p of [-1, 1]) box(p, y3 - 2, 1, 4, 2);
            box(0, y3 - 3, 1, 2, ink[12]);
            stage(2, y3, y4);
            box(0, y4 - 1, 1, 3, 2);
            dome(0, y4, 3, gold);
            box(-1, y4 + 2, 1, 1, chLit(gold, 0.45));
            box(-1, y4 + 5, 3, 2, wall);
            box(1, y4 + 5, 1, 2, wsh);
            orb(0, y4 + 7, 1, gold);
            box(0, y4 + 9, 1, 3, gold);
            box(0, y4 + 14, 1, 4, 3);
            box(-1, y4 + 13, 3, 1, 3);
            break;
          }
          case "zolotoyBridge":
          case "russkyBridge": {
            // Vladivostok's two cable-stayed bridges, from the bay. Zolotoy: two V-shaped pylons, their legs
            // splaying out from one foot, white fans of stays and the road on its concrete piers. Russky: two
            // very tall A-shaped pylons whose legs meet in a single mast high above the deck, long fans of
            // stays over the record main span and the approach viaduct on slender piers.
            const russky = kind === "russkyBridge",
              w = o.w ?? (russky ? 24 : 20),
              h = o.h ?? (russky ? 30 : 26),
              dh = o.dh ?? (russky ? 8 : 9),
              a = o.apy ?? (russky ? 4 : 3),
              p = Math.round(w * (russky ? 0.5 : 0.48)),
              pc = o.pc ?? 8,
              sh = chShade(c, 0.3),
              lit = chLit(c, 0.3);
            // the approach piers, then the deck
            for (let i = -w; i <= w; i += russky ? 4 : 5)
              if (Math.abs(Math.abs(i) - p) > 2 && Math.abs(i) > p) {
                box(i, dh - 2, 1, dh - 2, pc);
                box(i + 1, dh - 2, 1, dh - 2, chShade(pc, 0.3));
              }
            const top = russky ? h - Math.round(h * 0.3) : h;
            for (const s of [-p, p]) {
              for (let j = 1; j <= top; j++) {
                const k = russky
                  ? Math.round(a * (1 - j / top))
                  : Math.round((a * Math.max(0, j - dh)) / (h - dh));
                box(s - k - 1, j, 1, 1, lit);
                box(s - k, j, 1, 1, c);
                box(s + k, j, 1, 1, c);
                box(s + k + 1, j, 1, 1, sh);
              }
              if (russky) {
                box(s - 1, h, 3, h - top, c);
                box(s + 1, h, 1, h - top, sh);
                box(s - 1, h, 1, h - top, lit);
                box(s - a - 1, dh - 1, 2 * a + 3, 1, sh); // the cross beam under the deck
              } else box(s - 1, dh - 1, 3, dh - 1, sh);
              for (const q of russky ? [0] : [-a, a]) box(s + q, h + 1, 1, 1, 10); // the aircraft lights
              // the fans of stays, anchored down the top of the pylon
              const span = russky ? p + 2 : p - 1,
                n = russky ? 8 : 6;
              for (let i = 1; i <= n; i++) {
                const d = Math.round((span * i) / n),
                  ay = h - 1 - Math.round(((russky ? h - top : 6) * (i - 1)) / n);
                stroke(s, ay, s - d, dh + 1, o.t ?? 6);
                stroke(s, ay, s + (s > 0 ? Math.min(d, w - p) : d), dh + 1, o.t ?? 6);
              }
            }
            box(-w, dh, 2 * w + 1, 2, c);
            box(-w, dh - 1, 2 * w + 1, 1, sh);
            box(-w, dh, 2 * w + 1, 1, lit);
            break;
          }
          case "tulaKremlin":
          case "novgorodKremlin": {
            // A red-brick kremlin: the wall with its swallowtail merlons, square towers under tall tent roofs, the
            // gate in the middle one. Tula: the white bell tower of the Dormition Cathedral rises behind, with
            // its gilded dome. Novgorod (the Detinets): the tall Kokui tower in the middle with its silver
            // helmet, and the bare-brick round-headed openings.
            const tula = kind === "tulaKremlin",
              w = o.w ?? 33,
              hw = Math.floor(w / 2),
              wh = o.wh ?? 10,
              th = o.th ?? 15,
              n = o.n ?? 3,
              brick = o.c ?? 1,
              bsh = chShade(brick, 0.3),
              blit = chLit(brick, 0.25),
              course = chLit(brick, 0.1),
              roof = o.rc ?? [92, 84, 82],
              rf = css(e.sh(roof)),
              rsh = css(e.sh(mixc(roof, [41, 40, 54], 0.35)));
            const tent = (cx, base, k, tall) => {
              box(cx - k - 1, base + 1, 2 * k + 3, 1, rf);
              cone(cx, base + 1, k, tall, rf);
              box(cx + 1, base + 1 + Math.round(tall * 0.5), 1, Math.round(tall * 0.5), rsh);
              box(cx, base + tall + 3, 1, 2, 3);
            };
            if (tula) {
              // the bell tower behind the wall: three white stages and a gilded dome with its spire
              const bx = Math.round(hw / 2),
                wall = ink[6],
                wsh = chShade(6, 0.22);
              const b1 = th + 3;
              box(bx - 3, b1, 7, b1, wall);
              box(bx + 3, b1 - 1, 1, b1 - 1, wsh);
              box(bx - 2, b1 + 5, 5, 5, wall);
              box(bx + 2, b1 + 4, 1, 4, wsh);
              box(bx - 1, b1 + 4, 3, 3, 2);
              box(bx - 1, b1 - 3, 3, 3, 2);
              box(bx - 4, b1, 9, 1, chLit(6, 0.4));
              box(bx - 3, b1 + 5, 7, 1, chLit(6, 0.4));
              dome(bx, b1 + 5, 2.4, 12);
              box(bx, b1 + 9, 1, 3, 12);
              box(bx, b1 + 11, 1, 2, 3);
            }
            // the wall
            box(-hw, wh, w, wh, brick);
            box(-hw, 1, w, 1, bsh);
            for (let r = 4; r < wh - 1; r += 4) box(-hw, r, w, 1, course);
            for (let p = -hw; p <= hw - 2; p += 4) {
              box(p, wh + 1, 3, 1, brick); // a swallowtail merlon
              box(p, wh + 2, 1, 1, brick);
              box(p + 2, wh + 2, 1, 1, brick);
            }
            for (let p = -hw + 2; p < hw; p += 4) box(p, wh - 3, 1, 2, 2); // the loopholes
            // the towers
            const xs =
              n === 1
                ? [0]
                : Array.from({ length: n }, (_, i) => Math.round(-hw + 2 + (i * (w - 5)) / (n - 1)));
            xs.forEach((tx, i) => {
              const mid = i === Math.floor(n / 2),
                tth = mid && !tula ? th + 6 : th,
                k = mid && !tula ? 3 : 2;
              box(tx - k, tth, 2 * k + 1, tth, brick);
              box(tx + k, tth - 1, 1, tth - 1, bsh);
              box(tx - k, tth, 1, tth - 1, blit);
              box(tx - k - 1, tth - 2, 2 * k + 3, 1, blit); // the machicolation course
              for (let r = 4; r < tth - 4; r += 5) box(tx, r + 2, 1, 2, 2);
              if (mid) {
                box(tx - 1, 5, 3, 5, 2);
                box(tx, 6, 1, 1, 2);
              }
              if (mid && !tula) {
                // the Kokui tower's lookout and silver helmet
                box(tx - 2, tth + 3, 5, 3, brick);
                box(tx + 2, tth + 2, 1, 2, bsh);
                box(tx - 1, tth + 2, 1, 1, 2);
                box(tx + 1, tth + 2, 1, 1, 2);
                dome(tx, tth + 3, 2.5, 8);
                box(tx, tth + 7, 1, 3, 3);
              } else tent(tx, tth, k, k * 3 + 2);
            });
            break;
          }
          case "vysotsky": {
            // Vysotsky, Yekaterinburg: a slim tower of blue-grey glass ribbed with white mullions, its corners
            // cut back in steps near the top, a crown of stacked setbacks and the mast; the podium at its foot.
            const h = o.h ?? 46,
              w = o.w ?? 9,
              hw = Math.floor(w / 2),
              glass = o.c ?? 11,
              gsh = chShade(glass, 0.3),
              glt = chLit(glass, 0.25),
              rib = chLit(6, 0.1),
              body = h - 8;
            box(-hw, body, w, body, glass);
            box(hw - 1, body - 1, 2, body - 1, gsh);
            box(-hw, body, 1, body, glt);
            for (let p = -hw + 2; p < hw - 1; p += 2) box(p, body - 1, 1, body - 4, rib);
            for (let r = 6; r < body - 1; r += 4) box(-hw + 1, r, w - 2, 1, gsh);
            // the stepped crown
            box(-hw + 1, body + 3, w - 2, 3, glass);
            box(hw - 2, body + 2, 1, 2, gsh);
            box(-hw + 2, body + 5, w - 4, 2, glass);
            box(-hw + 3, body + 7, w - 6, 2, rib);
            for (const q of [body, body + 3, body + 5])
              box(-hw + (q - body > 2 ? 2 : 1), q + 1, w - (q - body > 2 ? 4 : 2), 1, rib);
            box(0, h + 4, 1, 5, 8);
            box(0, h + 5, 1, 1, 10);
            // the podium
            box(-hw - 2, 4, w + 4, 4, chShade(glass, 0.15));
            box(-hw - 2, 4, w + 4, 1, rib);
            box(-hw - 2, 2, w + 4, 1, gsh);
            break;
          }
          case "ostrogTower": {
            // A surviving tower of the Yakutsk ostrog (1685): grey-brown logs, the upper storey jutting out over
            // the lower one with its loopholes, and a steep plank tent roof with a little watch turret.
            const h = o.h ?? 16,
              log = o.c ?? [124, 98, 78],
              lg = css(e.sh(log)),
              lsh = css(e.sh(mixc(log, [41, 40, 54], 0.35))),
              llt = css(e.sh(mixc(log, [255, 248, 225], 0.2))),
              roof = css(e.sh(mixc(log, [41, 40, 54], 0.15))),
              lo = Math.round(h * 0.55);
            box(-3, lo, 7, lo, lg);
            box(3, lo - 1, 1, lo - 1, lsh);
            for (let r = 2; r < lo; r += 2) box(-3, r, 6, 1, llt);
            box(-4, h, 9, h - lo, lg);
            box(4, h - 1, 1, h - lo - 1, lsh);
            for (let r = lo + 2; r < h; r += 2) box(-4, r, 8, 1, llt);
            box(-4, lo + 1, 9, 1, lsh); // the overhang's shadow
            for (const p of [-2, 0, 2]) box(p, h - 2, 1, 1, 2);
            box(0, lo - 3, 1, 2, 2);
            box(-5, h + 1, 11, 1, roof);
            cone(0, h + 1, 4, 8, roof);
            box(1, h + 6, 1, 4, lsh);
            box(-1, h + 10, 3, 2, lg);
            box(0, h + 11, 1, 1, 2);
            cone(0, h + 10, 1, 3, roof);
            break;
          }
          case "leninMemorial": {
            // The Lenin Memorial, Ulyanovsk (1970): a long white Soviet-modernist block, its glass walls behind
            // a full-height colonnade of thin square pillars, a plain marble attic and a broad podium of steps.
            const w = o.w ?? 33,
              hw = Math.floor(w / 2),
              nh = o.nh ?? 12,
              wall = ink[6],
              wsh = chShade(6, 0.22),
              wlt = chLit(6, 0.4),
              glass = chShade(11, 0.35);
            box(-hw, 2, w, 2, wsh);
            box(-hw + 1, 2, w - 2, 1, wlt);
            box(-hw + 1, nh - 3, w - 2, nh - 5, glass);
            for (let r = 5; r < nh - 3; r += 3) box(-hw + 1, r, w - 2, 1, chShade(11, 0.5));
            for (let p = -hw + 1; p <= hw - 1; p += 3) {
              box(p, nh - 3, 1, nh - 5, wall);
              box(p + 1, nh - 3, 1, nh - 5, wsh);
            }
            box(-hw, nh, w, 3, wall);
            box(-hw, nh, w, 1, wlt);
            box(hw, nh - 1, 1, 2, wsh);
            box(-hw - 1, nh - 3, w + 2, 1, wsh);
            box(-hw + 4, nh + 1, w - 8, 1, wall); // the roof storey set back
            break;
          }
