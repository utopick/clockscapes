          case "kulSharif": {
            // Kul Sharif Mosque, Kazan: a white hall with tall arched windows and pointed gables round the
            // turquoise tented dome, four tall white minarets with balconies and turquoise needle tents.
            const wt = css(e.sh(colors[6])),
              wsh = css(e.sh(mixc(colors[6], [41, 40, 54], 0.22))),
              bl = css(e.sh([64, 160, 214])),
              bsh = css(e.sh([38, 104, 168])),
              blit = css(e.sh([150, 214, 240])),
              gold = 3;
            const minaret = (cx, h) => {
              box(cx - 1, h - 9, 3, h - 9, wt);
              box(cx + 1, h - 9, 1, h - 9, wsh);
              for (const b of [Math.round(h * 0.45), h - 9]) {
                box(cx - 2, b + 1, 5, 1, wt); // a balcony
                box(cx - 2, b, 5, 1, bsh);
              }
              for (let i = 4; i < h - 10; i += 5) box(cx, i, 1, 2, bsh);
              box(cx - 1, h - 6, 3, 3, wt); // the lantern
              box(cx, h - 7, 1, 1, bsh);
              cone(cx, h - 6, 1, 4, bl);
              box(cx, h - 2, 1, 4, gold);
            };
            minaret(-17, 38);
            minaret(17, 38);
            minaret(-8, 44);
            minaret(8, 44);
            // the hall, its corner turrets and windows
            box(-13, 12, 27, 12, wt);
            box(13, 11, 1, 11, wsh);
            box(-13, 12, 27, 1, bsh);
            for (const p of [-10, -6, 6, 10]) {
              box(p - 1, 8, 3, 6, bl);
              box(p, 9, 1, 1, bl);
            }
            box(-2, 10, 5, 9, 2); // the portal
            box(-1, 11, 3, 1, 2);
            box(-3, 11, 1, 10, blit);
            box(3, 11, 1, 10, blit);
            // the upper block with its pointed gables
            box(-7, 20, 15, 8, wt);
            box(7, 19, 1, 7, wsh);
            for (const p of [-5, 0, 5]) {
              box(p - 1, 22, 3, 2, wt);
              box(p, 23, 1, 1, wt);
              box(p, 19, 1, 4, bl);
            }
            // the tented dome on its drum
            box(-4, 23, 9, 3, wt);
            for (let j = 0; j < 10; j++) {
              const k = Math.round(6 * Math.cos((j / 10) * 1.48));
              box(-k, 24 + j, 2 * k + 1, 1, bl);
              if (k) box(Math.ceil(k / 2), 24 + j, Math.max(1, k - Math.ceil(k / 2)), 1, bsh);
              if (k > 1) box(-k + 1, 24 + j, 1, 1, blit);
            }
            box(0, 38, 1, 5, gold);
            box(-1, 39, 3, 1, gold);
            break;
          }
          case "soyembika": {
            // Söyembikä Tower, Kazan: red brick tiers narrowing upwards, white trim, an open arched tier,
            // the octagonal lantern and the tall green tent with its gold crescent (leans with o.lean).
            const br = css(e.sh([170, 72, 52])),
              bsh = css(e.sh([118, 48, 40])),
              wt = css(e.sh(colors[6])),
              gr = css(e.sh([60, 120, 88])),
              gsh = css(e.sh([38, 82, 60]));
            let up = 0;
            [
              [11, 11],
              [9, 8],
              [9, 7],
              [7, 6],
              [5, 5],
              [5, 4],
            ].forEach(([w, h], i) => {
              const k = Math.floor(w / 2);
              up += h;
              box(-k, up, w, h, br);
              box(k, up - 1, 1, h - 1, bsh);
              box(-k - (i < 4 ? 1 : 0), up, w + (i < 4 ? 2 : 0), 1, wt);
              if (i === 0) {
                box(-2, 6, 5, 6, 2); // the gate arch through the base
                box(-1, 7, 3, 1, 2);
              } else for (let p = -k + 1; p < k; p += 2) box(p, up - 2, 1, h - 3, i >= 3 ? 2 : bsh);
            });
            cone(0, up, 2, 11, gr);
            box(1, up + 9, 1, 8, gsh);
            box(0, up + 14, 1, 2, 3);
            box(-1, up + 15, 1, 1, 3);
            box(1, up + 15, 1, 1, 3);
            break;
          }
          case "heartOfChechnya": {
            // Akhmad Kadyrov Mosque (Heart of Chechnya), Grozny: an Ottoman cascade of lead-grey domes over a
            // pale arcaded hall, and four needle-thin minarets with three balconies each.
            const st = css(e.sh([232, 222, 200])),
              ssh = css(e.sh([196, 182, 158])),
              gy = css(e.sh([150, 158, 172])),
              gsh = css(e.sh([112, 118, 134])),
              glit = css(e.sh([196, 204, 216]));
            const minaret = (cx, h) => {
              box(cx, h - 4, 2, h - 4, st);
              box(cx + 1, h - 4, 1, h - 4, ssh);
              for (const b of [Math.round(h * 0.55), Math.round(h * 0.72), h - 6]) box(cx - 1, b, 4, 1, gsh);
              box(cx, h - 1, 2, 3, gy);
              box(cx, h + 2, 1, 3, gy);
              box(cx, h + 4, 1, 2, 3);
            };
            minaret(-19, 39);
            minaret(18, 39);
            minaret(-13, 43);
            minaret(12, 43);
            // the arcaded hall
            box(-16, 8, 33, 8, st);
            box(-16, 1, 33, 1, ssh);
            box(-16, 8, 33, 1, ssh);
            for (let p = -14; p <= 14; p += 2) box(p, 5, 1, 4, p % 4 ? ssh : 2);
            // small domes on the corners, semi-domes and the main dome on its windowed drum
            for (const s of [-1, 1]) {
              dome(s * 13, 8, 2, gy);
              box(s * 13, 11, 1, 1, 3);
              dome(s * 8, 8, 3, gy);
              box(s * 8, 12, 1, 1, 3);
            }
            box(-8, 11, 17, 3, st);
            for (let p = -7; p <= 7; p += 2) box(p, 10, 1, 1, 2);
            dome(0, 11, 9, gy);
            for (let dy = 1; dy < 9; dy++) {
              const k = Math.round(Math.sqrt(81 - dy * dy));
              if (dy >= 2) box(-k + 1, 11 + dy, 1, 1, glit);
              if (dy <= 5) box(k, 11 + dy, 1, 1, gsh);
            }
            for (const p of [-4, 0, 4]) box(p, 12, 1, 1, 2); // windows round the dome's foot
            box(0, 22, 1, 2, 3);
            box(-1, 23, 1, 1, 3);
            box(1, 23, 1, 1, 3);
            break;
          }
          case "konigsberg": {
            // Königsberg Cathedral, Kaliningrad: a red-brick Gothic hall with its stepped, pinnacled gable and
            // tall lancet windows, and the square west tower with the clock under a slim octagonal green spire.
            const br = css(e.sh([176, 86, 58])),
              bsh = css(e.sh([128, 58, 44])),
              blit = css(e.sh([214, 140, 102])),
              gr = css(e.sh([96, 130, 118])),
              gsh = css(e.sh([64, 92, 84]));
            // the hall, its steep roof and the stepped gable on the left
            box(-13, 20, 17, 20, br);
            box(-13, 1, 17, 1, bsh);
            for (const p of [-11, -8, -5, -2]) box(p, 16, 2, 11, bsh);
            for (const p of [-11, -8, -5, -2]) box(p, 16, 2, 1, blit);
            box(-13, 20, 17, 1, blit);
            for (let st = 0; st < 5; st++) {
              const k = 8 - 2 * st;
              box(-5 - k, 22 + 2 * st, 2 * k + 1, 2, br);
              if (k) for (const s of [-1, 1]) box(-5 + s * k, 23 + 2 * st, 1, 1, blit); // a pinnacle per step
            }
            for (const p of [-9, -7, -5, -3, -1]) box(p, 27 - Math.abs(p + 5), 1, 5 - Math.abs(p + 5), bsh);
            box(-5, 31, 1, 2, blit);
            box(-1, 6, 3, 5, 2); // the door
            // the tower with its clock and belfry
            box(4, 34, 9, 34, br);
            box(12, 33, 1, 33, bsh);
            for (const r of [12, 22, 34]) box(4, r, 9, 1, blit);
            for (const p of [6, 9]) box(p, 19, 2, 5, bsh);
            orb(8, 27, 2, 6);
            box(8, 28, 1, 2, 2);
            for (const p of [5, 8, 11]) box(p, 33, 1, 4, 2);
            // the octagonal stage and the spire
            box(5, 38, 7, 4, br);
            box(11, 38, 1, 4, bsh);
            box(6, 37, 1, 2, 2);
            box(9, 37, 1, 2, 2);
            cone(8, 38, 3, 15, gr);
            box(9, 46, 1, 6, gsh);
            box(8, 55, 1, 3, 3);
            box(7, 55, 3, 1, 3);
            break;
          }
          case "ruSobor": {
            // A Russian Orthodox church, shared by most of this batch's cities: a body of w x nh with arched
            // windows under kokoshnik arches (or a classical pediment with pc), the main drum and dome (ms:
            // "onion", "helmet" or "dome" with a lantern) of radius r on a drum dd tall, n side drums with small
            // onions, and with bt a bell tower bt tall beside it (bs -1 left, 1 right) of width bw, tiers
            // storeys and a top btop ("onion", "spire", "tent" or "dome"). c walls, t trim, mc the domes'
            // colour, bc the bell tower's top, ss and sc the side domes' style and colour, oc the little onions on tents; colours are an
            // index or an [r, g, b] array.
            const rgb = (v) => (Array.isArray(v) ? v : colors[v]),
              tn = (v, k = 0) =>
                css(e.sh(k ? mixc(rgb(v), k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)) : rgb(v)));
            const w = o.w ?? 19,
              hw = Math.floor(w / 2),
              nh = o.nh ?? 12,
              r = o.r ?? 4,
              dd = o.dd ?? 5,
              ms = o.ms ?? "onion",
              wall = tn(o.c ?? 6),
              wsh = tn(o.c ?? 6, -0.22),
              trim = tn(o.t ?? 6, o.t == null ? 0.4 : 0),
              mcol = o.mc ?? 12,
              dk = 2;
            const bulb = (cx, base, k, col) => {
              const tall = Math.round(k * 1.5) + 1,
                tip = base + k + tall;
              if (k <= 1) {
                box(cx - 1, base + 2, 3, 2, tn(col));
                box(cx, base + 3, 1, 1, tn(col));
              } else {
                orb(cx, base + k, k, tn(col));
                cone(cx, base + k, k, tall, tn(col));
                box(
                  cx - Math.ceil(k / 2),
                  base + k + Math.round(k * 0.7),
                  1,
                  Math.max(1, k - 1),
                  tn(col, 0.45),
                );
                box(
                  cx + Math.ceil(k / 2),
                  base + k + Math.round(k * 0.4),
                  1,
                  Math.max(1, k - 1),
                  tn(col, -0.3),
                );
              }
              const top = k <= 1 ? base + 4 : tip;
              box(cx, top + 3, 1, 3, 3); // the cross
              box(cx - 1, top + 2, 3, 1, 3);
            };
            const crown = (cx, base, k, style, col) => {
              if (style === "dome" || style === "helmet") {
                dome(cx, base, k, tn(col));
                if (k >= 3) {
                  box(
                    cx - Math.ceil(k / 2),
                    base + Math.round(k * 0.7),
                    1,
                    Math.max(1, k - 2),
                    tn(col, 0.45),
                  );
                  box(cx + k - 1, base + 1, 1, Math.max(1, k - 2), tn(col, -0.3));
                }
                if (style === "helmet") {
                  cone(cx, base + k, Math.max(1, Math.round(k / 3)), Math.round(k * 0.6) + 1, tn(col));
                  const tip = base + k + Math.round(k * 0.6) + 1;
                  box(cx, tip + 4, 1, 3, 3);
                  box(cx - 1, tip + 3, 3, 1, 3);
                } else {
                  const lk = Math.max(1, Math.round(k / 3));
                  box(cx - lk, base + k + 2, 2 * lk + 1, 2, wall); // the lantern
                  bulb(cx, base + k + 1, Math.max(1, lk), col);
                }
              } else if (style === "spire" || style === "tent") {
                const s = style === "tent" ? k * 2 + 2 : k * 4 + 3;
                cone(cx, base, k, s, tn(col));
                box(cx + 1, base + s - 1, Math.max(1, Math.round(k / 2)), s - 2, tn(col, -0.25));
                if (style === "tent") bulb(cx, base + s - 1, 1, o.oc ?? col);
                else {
                  box(cx, base + s + 3, 1, 3, 3);
                  box(cx - 1, base + s + 2, 3, 1, 3);
                }
              } else bulb(cx, base, k, col);
            };
            const drum = (cx, k, bottom, h) => {
              box(cx - k, bottom + h, 2 * k + 1, h, wall);
              box(cx + k, bottom + h - 1, 1, h - 1, wsh);
              box(cx - k, bottom + h, 2 * k + 1, 1, trim);
              if (h >= 3)
                for (let p = cx - k + 1 + (k % 2); p < cx + k; p += 2) box(p, bottom + h - 1, 1, h - 2, dk);
            };
            // the bell tower
            const bt = o.bt ?? 0,
              bw = o.bw ?? 7,
              bs = o.bs ?? -1;
            if (bt) {
              const bx = bs * (hw + Math.floor(bw / 2) + 1),
                tiers = o.tiers ?? 2,
                th = Math.max(4, Math.round((bt - nh) / tiers));
              let up = nh,
                k = Math.floor(bw / 2);
              box(bx - k, nh, 2 * k + 1, nh, wall);
              box(bx + k, nh - 1, 1, nh - 1, wsh);
              box(bx - 1, nh - 3, 3, 4, dk);
              for (let i = 0; i < tiers; i++) {
                box(bx - k - 1, up + 1, 2 * k + 3, 1, trim);
                if (i) k = Math.max(2, k - 1);
                box(bx - k, up + th, 2 * k + 1, th, wall);
                box(bx + k, up + th - 1, 1, th - 1, wsh);
                const ow = k >= 3 ? 3 : 1;
                box(bx - Math.floor(ow / 2), up + th - 1, ow, th - 3, dk);
                up += th;
              }
              box(bx - k - 1, up + 1, 2 * k + 3, 1, trim);
              crown(bx, up + 1, Math.max(2, k), o.btop ?? "onion", o.bc ?? mcol);
            }
            // the body
            box(-hw, nh, w, nh, wall);
            box(hw, nh - 1, 1, nh - 1, wsh);
            box(-hw, 1, w, 1, wsh);
            box(-hw - 1, nh, w + 2, 1, trim);
            for (let p = -hw + 2; p <= hw - 2; p += 3) {
              if (Math.abs(p) <= 1) continue;
              box(p, nh - 3, 1, Math.min(4, nh - 6), dk);
              if (nh >= 14) box(p, nh - 9, 1, 2, dk);
            }
            if (o.pc) {
              const ph = Math.round(hw / 2.5);
              for (let j = 1; j <= ph; j++)
                box(
                  -hw + Math.round((j * hw) / ph) - 1,
                  nh + j,
                  2 * (hw - Math.round((j * hw) / ph)) + 3,
                  1,
                  j === 1 ? trim : wall,
                );
              box(0, nh + ph - 1, 1, 1, trim);
            } else
              for (let p = -hw + 2; p <= hw - 2; p += 4) {
                dome(p, nh, 2, trim);
                dome(p, nh, 1, wall);
              }
            // the porch
            box(-2, 7, 5, 1, trim);
            box(-1, 6, 3, 6, dk);
            box(-2, 6, 1, 6, trim);
            box(2, 6, 1, 6, trim);
            // side drums and the main drum
            const n = o.n ?? 4,
              sk = o.sr ?? Math.max(1, Math.round(r * 0.55)),
              sd = Math.max(3, dd - 1),
              sx =
                n === 2
                  ? [-hw + 2, hw - 2]
                  : n === 4
                    ? [-hw + 2, -Math.round(hw / 2), Math.round(hw / 2), hw - 2]
                    : [];
            sx.forEach((p) => {
              drum(p, Math.max(1, sk - 1), nh, sd);
              crown(p, nh + sd, sk, o.ss ?? (ms === "helmet" ? ms : "onion"), o.sc ?? mcol);
            });
            drum(0, r - 1, nh, dd);
            crown(0, nh + dd, r, ms, mcol);
            break;
          }
          case "astrakhanKremlin": {
            // Astrakhan Kremlin: the white wall with its merlons and a corner tower under a green tent, the
            // Assumption Cathedral raised on its arcaded gallery with five green onions, and the tall white
            // Prechistenskaya bell tower with its green and gold spire.
            const wt = css(e.sh(colors[6])),
              wsh = css(e.sh(mixc(colors[6], [41, 40, 54], 0.2))),
              gr = css(e.sh([70, 140, 96])),
              gsh = css(e.sh([44, 96, 66])),
              glit = css(e.sh([130, 190, 140]));
            const onion = (cx, base, k) => {
              orb(cx, base + k, k, gr);
              cone(cx, base + k, k, k + 1, gr);
              if (k >= 2) box(cx - 1, base + k + 1, 1, k, glit);
              box(cx, base + 2 * k + 4, 1, 3, 3);
              box(cx - 1, base + 2 * k + 3, 3, 1, 3);
            };
            // the wall
            box(-17, 7, 35, 7, wt);
            box(-17, 1, 35, 1, wsh);
            for (let p = -17; p <= 17; p += 2) box(p, 8, 1, 1, wt);
            // the corner tower on the right
            box(13, 12, 5, 12, wt);
            box(17, 11, 1, 11, wsh);
            box(15, 9, 1, 2, 2);
            box(12, 13, 7, 1, wt);
            cone(15, 13, 3, 6, gr);
            box(16, 18, 1, 4, gsh);
            // the cathedral on its gallery
            box(-6, 11, 13, 4, wt);
            for (let p = -5; p <= 5; p += 2) box(p, 10, 1, 2, 2);
            box(-5, 19, 11, 8, wt);
            box(5, 18, 1, 7, wsh);
            for (const p of [-3, 0, 3]) box(p, 17, 1, 4, 2);
            for (const p of [-3, 0, 3]) {
              dome(p, 19, 1, wt);
              box(p, 20, 1, 1, wt);
            }
            box(-2, 23, 5, 4, wt);
            box(-1, 22, 1, 2, 2);
            box(1, 22, 1, 2, 2);
            onion(0, 23, 2);
            for (const p of [-4, 4]) {
              box(p - 1, 21, 3, 2, wt);
              onion(p, 21, 2);
            }
            // the bell tower on the left
            box(-15, 11, 7, 11, wt);
            box(-9, 10, 1, 10, wsh);
            box(-13, 7, 3, 4, 2);
            box(-16, 12, 9, 1, wt);
            box(-14, 18, 5, 6, wt);
            box(-12, 17, 1, 4, 2);
            box(-15, 19, 7, 1, wt);
            box(-13, 23, 3, 5, wt);
            box(-12, 22, 1, 3, 2);
            dome(-12, 23, 2, gr);
            cone(-12, 25, 1, 5, gr);
            box(-12, 32, 1, 2, 3);
            break;
          }
          case "goldenAbode": {
            // Golden Abode of Buddha Shakyamuni, Elista: a white temple on a high plinth with a broad stair,
            // three storeys stepping in under golden roofs with upturned corners and a red frieze, the golden
            // ganjira finial on top, and white stupas round the terrace.
            const wt = css(e.sh(colors[6])),
              wsh = css(e.sh(mixc(colors[6], [41, 40, 54], 0.2))),
              au = css(e.sh([222, 172, 60])),
              ash = css(e.sh([166, 118, 36])),
              red = css(e.sh([178, 52, 44]));
            box(-14, 4, 29, 4, css(e.sh([206, 200, 188])));
            box(-14, 1, 29, 1, wsh);
            for (let j = 0; j < 4; j++) box(-3 - j, 4 - j, 7 + 2 * j, 1, wsh); // the stair
            for (const p of [-12, 12]) {
              box(p - 1, 7, 3, 3, wt); // stupas
              box(p, 9, 1, 2, wt);
              box(p, 10, 1, 1, au);
            }
            const roof = (hw, eave) => {
              box(-hw + 1, eave + 2, 2 * hw - 1, 1, css(e.sh([70, 120, 84])));
              box(-hw, eave + 1, 2 * hw + 1, 1, au);
              box(-hw, eave, 2 * hw + 1, 1, ash);
              for (const s of [-1, 1]) box(s * (hw + 1), eave + 2, 1, 1, au); // upturned tips
            };
            const storey = (hw, bottom, h) => {
              box(-hw, bottom + h, 2 * hw + 1, h, wt);
              box(hw, bottom + h - 1, 1, h - 1, wsh);
              box(-hw, bottom + h, 2 * hw + 1, 1, red);
              for (let p = -hw + 2; p <= hw - 2; p += 3) box(p, bottom + h - 2, 1, h - 3, 2);
            };
            storey(10, 4, 9);
            box(-2, 10, 5, 6, red); // the red doors
            box(0, 10, 1, 6, 2);
            box(-3, 11, 7, 1, au);
            roof(12, 13);
            storey(7, 15, 5);
            roof(9, 20);
            storey(4, 22, 4);
            roof(6, 26);
            cone(0, 28, 2, 3, au);
            box(-1, 32, 3, 1, au);
            box(0, 35, 1, 3, au);
            box(0, 31, 1, 1, ash);
            break;
          }
          case "kostromaKalancha": {
            // Kostroma Fire Tower: an ochre neoclassical guardhouse with a white six-column portico under its
            // pediment, and the tall watch tower behind it with a white balcony and the little lantern on top.
            const och = css(e.sh([226, 190, 104])),
              osh = css(e.sh([182, 146, 72])),
              wt = css(e.sh(colors[6])),
              ws = css(e.sh(mixc(colors[6], [41, 40, 54], 0.2)));
            // the watch tower
            box(-3, 24, 7, 10, och);
            box(3, 23, 1, 9, osh);
            for (const p of [-2, 1]) box(p, 21, 1, 3, 2);
            box(-4, 25, 9, 1, wt);
            for (let p = -4; p <= 4; p += 2) box(p, 26, 1, 1, wt);
            box(-2, 30, 5, 5, och);
            box(2, 30, 1, 5, osh);
            box(-1, 29, 1, 2, 2);
            box(1, 29, 1, 2, 2);
            box(-3, 31, 7, 1, wt);
            box(-1, 33, 3, 2, och);
            box(-1, 34, 3, 1, wt);
            box(0, 37, 1, 3, wt);
            // the guardhouse and the portico
            box(-5, 14, 11, 14, och);
            box(5, 13, 1, 13, osh);
            box(-5, 1, 11, 1, osh);
            box(-5, 14, 11, 1, wt);
            for (const p of [-5, -3, -1, 1, 3, 5]) {
              box(p, 11, 1, 10, wt);
              box(p, 11, 1, 1, ws);
            }
            for (const p of [-4, -2, 2, 4]) box(p, 8, 1, 4, 2);
            box(-6, 12, 13, 1, wt);
            for (let j = 0; j < 3; j++) box(-5 + 2 * j, 15 + j, 11 - 4 * j, 1, j ? och : wt);
            box(-6, 15, 13, 1, wt);
            box(0, 17, 1, 1, wt);
            break;
          }
          case "tsarevichArch": {
            // Tsarevich Triumphal Arch, Blagoveshchensk: a pale stone arch in Russian Revival style, the
            // round archway framed in gold, stepped gables with red-tipped pinnacles and the tall central
            // gable crowned by a red tent and the double-headed eagle.
            const st = css(e.sh([220, 206, 176])),
              ssh = css(e.sh([176, 160, 128])),
              wt = css(e.sh(colors[6])),
              red = css(e.sh([200, 60, 48])),
              au = css(e.sh(colors[12]));
            box(-8, 14, 17, 14, st);
            box(8, 13, 1, 13, ssh);
            box(-8, 1, 17, 1, ssh);
            box(-4, 9, 9, 9, au); // the gilt frame and the archway
            orb(0, 9, 4, au);
            box(-3, 9, 7, 9, 2);
            orb(0, 9, 3, 2);
            for (const p of [-7, 6]) {
              box(p, 11, 2, 3, ssh); // the niches
              box(p, 7, 2, 1, wt);
            }
            // gables and pinnacles
            for (const s of [-1, 1]) {
              cone(s * 6, 14, 2, 4, st);
              box(s * 8, 18, 1, 4, wt);
              cone(s * 8, 18, 1, 3, red);
              box(s * 4, 17, 1, 3, wt);
              box(s * 4, 19, 1, 2, red);
            }
            cone(0, 14, 4, 7, st);
            box(-1, 19, 3, 3, ssh);
            orb(0, 18, 1, au);
            cone(0, 21, 1, 4, red);
            box(-1, 27, 3, 1, 12);
            box(0, 28, 1, 2, 12);
            break;
          }
          case "birobidzhanStation": {
            // Birobidzhan railway station: a long white two-storey station with a taller centre block and
            // clock, and the town's name in Russian and Hebrew letters along the roof.
            const wt = css(e.sh(colors[6])),
              wsh = css(e.sh(mixc(colors[6], [41, 40, 54], 0.2))),
              tr = css(e.sh([120, 150, 186]));
            box(-13, 9, 27, 9, wt);
            box(13, 8, 1, 8, wsh);
            box(-13, 1, 27, 1, wsh);
            box(-13, 9, 27, 1, tr);
            for (let p = -12; p <= 12; p += 2)
              if (Math.abs(p) > 4) {
                box(p, 7, 1, 2, 2);
                box(p, 4, 1, 2, 2);
              }
            box(-5, 15, 11, 15, wt);
            box(5, 14, 1, 14, wsh);
            box(-5, 15, 11, 1, tr);
            for (const p of [-3, 0, 3]) box(p, 11, 1, 4, 2);
            box(-1, 5, 3, 5, 2);
            orb(0, 13, 1, 2);
            // the name on the roof: Russian over the wings, Hebrew over the centre
            for (let p = -12; p <= 12; p++) if (Math.abs(p) > 5 && p % 2 === 0) box(p, 11, 1, 2, 2);
            for (let p = -4; p <= 4; p += 2) box(p, 18, 1, 2, 7);
            box(-4, 16, 9, 1, wsh);
            break;
          }
          case "kurganBessmertiya": {
            // Kurgan of Immortality, Bryansk: a grassy burial mound with a stair, crowned by three white blades
            // leaning together into a spire, a five-pointed star round them and the red relief in the middle.
            const gr = css(e.sh([92, 150, 72])),
              gsh = css(e.sh([64, 112, 52])),
              wt = css(e.sh(colors[6])),
              wsh = css(e.sh(mixc(colors[6], [41, 40, 54], 0.25)));
            for (let j = 0; j < 8; j++) box(-10 + j, j + 1, 21 - 2 * j, 1, gr);
            for (let j = 0; j < 8; j++) box(2 + Math.floor(j / 2), j + 1, 8 - j, 1, gsh);
            box(0, 8, 1, 8, wsh); // the stair
            for (const [dx, sh] of [
              [-3, wt],
              [3, wsh],
              [0, wt],
            ])
              stroke(dx, 9, Math.sign(dx) * 0, 30, sh === wt ? 6 : 13);
            for (let j = 9; j < 29; j++) {
              const k = Math.round(3 * (1 - (j - 9) / 20));
              box(-k, j, 1, 1, wt);
              box(k, j, 1, 1, wsh);
              box(0, j, 1, 1, wt);
            }
            // the star
            box(-6, 18, 13, 1, wt);
            box(-4, 17, 9, 1, wt);
            box(-3, 16, 7, 1, wt);
            box(-4, 14, 3, 3, wt);
            box(2, 14, 3, 3, wsh);
            box(-5, 12, 2, 2, wt);
            box(4, 12, 2, 2, wsh);
            box(-1, 17, 3, 3, css(e.sh([196, 70, 56])));
            break;
          }
          case "kalugaVostok": {
            // State Museum of the History of Cosmonautics, Kaluga: the full-size Vostok rocket standing on its
            // stand beside the museum's low grey concrete block with its dark window bands and pointed cupola.
            const cg = css(e.sh([182, 184, 190])),
              cgs = css(e.sh([140, 142, 150])),
              wt = css(e.sh(colors[6])),
              wsh = css(e.sh(mixc(colors[6], [41, 40, 54], 0.25))),
              gy = css(e.sh(colors[8]));
            box(-8, 9, 7, 9, cg);
            box(-8, 1, 7, 1, cgs);
            for (const r of [3, 7]) box(-7, r, 5, 2, 2);
            box(-8, 9, 7, 1, cgs);
            dome(-5, 9, 2, cgs); // the cupola
            box(-5, 13, 1, 2, cgs);
            // the rocket
            const x = 3;
            box(x - 4, 3, 9, 3, gy);
            box(x - 1, 40, 3, 37, wt);
            box(x + 1, 40, 1, 37, wsh);
            box(x - 1, 41, 3, 4, gy); // the third stage and the shroud
            box(x - 1, 46, 3, 5, wt);
            cone(x, 46, 1, 4, wt);
            box(x, 51, 1, 2, gy);
            for (const s of [-1, 1]) {
              const l = s < 0 ? x - 3 : x + 2,
                col = s < 0 ? wt : wsh;
              box(l, 20, 2, 15, col); // a strap-on booster flaring to its foot
              box(s < 0 ? l - 1 : l + 2, 9, 1, 5, col);
              box(s < 0 ? x - 2 : x + 2, 22, 1, 2, col);
              box(s < 0 ? l - 1 : l + 2, 5, 1, 2, gy);
            }
            for (let i = 10; i < 38; i += 6) box(x, i, 1, 1, gy);
            box(x - 1, 31, 3, 1, 10);
            break;
          }
          case "krasnodarStadium": {
            // Krasnodar Stadium: a round bowl wrapped in a colonnade of pale travertine fins with rounded
            // ends, over a dark glazed ground floor and under a thin white cornice.
            const tv = css(e.sh([222, 214, 196])),
              tsh = css(e.sh([176, 166, 148])),
              gl = css(e.sh([64, 72, 84])),
              wt = css(e.sh(colors[6]));
            box(-17, 3, 35, 3, gl);
            for (let p = -16; p <= 16; p += 3) box(p, 3, 1, 3, tsh);
            for (let j = 0; j < 10; j++) {
              const k = j < 7 ? 17 : 17 - (j - 6);
              box(-k, 4 + j, 2 * k + 1, 1, tv);
            }
            for (let p = -15; p <= 15; p += 2) {
              const k = Math.abs(p) > 12 ? 13 - (Math.abs(p) - 12) * 2 : 13;
              box(p, k - 1, 1, k - 5, tsh);
            }
            box(-13, 14, 27, 1, wt);
            box(-16, 10, 1, 7, tsh);
            box(16, 10, 1, 7, tsh);
            break;
          }
          case "paraskevaChapel": {
            // Chapel of Paraskeva Pyatnitsa, Krasnoyarsk (on the 10-rouble note): a white octagon on a low
            // plinth with tall arched windows and little gables, the tall maroon tent, a small drum, the gold
            // onion and the cross.
            const wt = css(e.sh(colors[6])),
              wsh = css(e.sh(mixc(colors[6], [41, 40, 54], 0.22))),
              mr = css(e.sh([138, 44, 44])),
              msh = css(e.sh([92, 28, 32]));
            box(-5, 2, 11, 2, css(e.sh([150, 150, 156])));
            box(-4, 15, 9, 13, wt);
            box(2, 15, 3, 13, wsh);
            for (const p of [-2, 2]) {
              box(p, 10, 1, 5, 2);
              box(p, 11, 1, 1, wt);
            }
            box(0, 8, 1, 4, css(e.sh([196, 150, 70]))); // the icon over the door
            for (const p of [-3, 0, 3]) dome(p, 15, 1, p > 0 ? wsh : wt); // the gables
            box(-5, 15, 11, 1, wt);
            for (let j = 0; j < 15; j++) {
              const k = Math.round(5 * (1 - j / 15));
              box(-k, 17 + j, 2 * k + 1, 1, mr);
              if (k) box(1, 17 + j, k, 1, msh);
            }
            box(0, 32, 1, 2, wt);
            orb(0, 34, 1.5, 12);
            box(0, 36, 1, 1, 12);
            box(0, 39, 1, 3, 3);
            box(-1, 38, 3, 1, 3);
            break;
          }
          case "belgorodDiorama": {
            // Belgorod Diorama museum (the Battle of Kursk): a white hall whose roof sweeps up in a quarter curve
            // to a tall end, ribbed with white piers over dark glazing, and a red band along its foot.
            const wt = css(e.sh(colors[6])),
              wsh = css(e.sh(mixc(colors[6], [41, 40, 54], 0.22))),
              gl = css(e.sh([70, 82, 98])),
              red = css(e.sh([196, 52, 44]));
            for (let p = -13; p <= 13; p++) {
              const t = (p + 13) / 26,
                h = Math.round(7 + 13 * (1 - Math.sqrt(1 - t * t))); // the quarter-curve roof
              box(p, h, 1, h, p % 2 ? wt : wsh);
              if (p % 2 === 0 && h > 6) box(p, h - 3, 1, h - 6, gl);
            }
            box(-13, 4, 27, 1, red);
            box(-13, 3, 27, 3, wt);
            box(-3, 3, 7, 3, gl); // the entrance
            break;
          }
          case "kalashnikovMuseum": {
            // Kalashnikov Museum, Izhevsk: a low pale pavilion behind a colonnade of slim piers, with the tall
            // green glass entrance canopy and its rounded roof in the middle.
            const wt = css(e.sh(colors[13])),
              wsh = css(e.sh(mixc(colors[13], [41, 40, 54], 0.25))),
              gr = css(e.sh([60, 120, 96])),
              gl = css(e.sh([70, 90, 104]));
            box(-13, 8, 27, 8, wt);
            box(-13, 1, 27, 1, wsh);
            box(-12, 6, 25, 4, gl);
            for (let p = -12; p <= 12; p += 2) box(p, 7, 1, 6, wt);
            box(-14, 9, 29, 1, wt);
            box(-4, 14, 9, 13, gl); // the glass canopy
            for (const p of [-4, 4]) box(p, 14, 1, 13, gr);
            box(-4, 15, 9, 1, gr);
            dome(0, 14, 4, gr);
            box(-1, 6, 3, 5, 2);
            break;
          }
