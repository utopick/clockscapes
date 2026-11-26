          case "anitkabir": {
            // Anıtkabir, Ankara: Atatürk's mausoleum, the Hall of Honour: a flat-roofed temple of square
            // limestone pillars, ten across the front, on a high podium; the deep shaded colonnade with gilt
            // relief panels and the tall bronze window grid in the middle bay, the broad stair up the front
            // and the low terrace walls running out to the sides.
            const st = [222, 204, 166],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              D = css(e.sh(mixc(st, [41, 40, 54], 0.62))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.4))),
              G = css(e.sh([200, 160, 80]));
            box(-16, 3, 33, 3, S); // the terrace walls
            box(-16, 3, 33, 1, B);
            box(-12, 6, 25, 6, B); // the podium
            box(-12, 6, 25, 1, Lt);
            box(12, 5, 1, 5, S);
            for (let r = 1; r <= 5; r++)
              box(-6 + Math.floor(r / 2), r, 13 - 2 * Math.floor(r / 2), 1, r % 2 ? Lt : S); // the stair
            box(-14, 16, 29, 10, D); // the colonnade
            for (const b of [-8, 6]) box(b, 13, 2, 5, G); // the gilt reliefs
            for (let r = 8; r <= 15; r++)
              for (let p = -1; p <= 1; p++) if ((r + p) % 2 === 0) box(p, r, 1, 1, S); // the window grid
            for (let i = 0; i < 10; i++) {
              const p = -14 + i * 3 + (i > 4 ? 1 : 0);
              box(p, 16, 1, 10, i ? B : Lt);
              box(p, 7, 1, 1, S);
            }
            box(14, 16, 1, 10, S);
            box(-15, 19, 31, 3, B); // the entablature
            box(-15, 19, 31, 1, Lt);
            box(-15, 17, 31, 1, S);
            box(15, 18, 1, 2, S);
            break;
          }
          case "kocatepeMosque": {
            // A Neo-Ottoman mosque on the Kocatepe model (Ankara; also used by Adana's Sabancı Mosque and other
            // big modern Turkish mosques): a white hall with rows of arched windows and small corner domes, a
            // tier of half domes cascading to the drum's window ring, a lead-grey main dome with its crescent,
            // and o.m (2, 4 or 6) needle minarets with three balconies and tall lead caps. o.w hall width,
            // o.r main dome radius, o.mh minaret height, c the stone and dc the domes.
            const w = o.w ?? 27,
              hw = Math.floor(w / 2),
              r = o.r ?? 7,
              mh = o.mh ?? 36,
              nh = o.nh ?? 8,
              dc = o.dc ?? 8,
              tone = (i, k) =>
                css(e.sh(mixc(colors[i], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              S = tone(c, -0.22),
              lead = tone(dc, 0.1),
              leadL = tone(dc, 0.4),
              leadS = tone(dc, -0.3);
            const leadDome = (cx, b, rr) => {
              dome(cx, b, rr, lead);
              if (rr >= 2)
                dome(cx - Math.round(rr / 3), b + Math.round(rr / 3), Math.max(1, Math.round(rr / 2)), leadL);
              if (rr >= 3) box(cx + rr - 1, b + Math.round(rr / 2), 1, Math.round(rr / 2), leadS);
              box(cx, b + rr + 1, 1, 1, 3);
            };
            // [x, height, in front]: the pair of 4 nearer the dome stands further back, so a little shorter
            const mins =
              {
                2: [[hw + 2, mh, 1]],
                4: [
                  [hw + 3, mh, 1],
                  [r + 3, Math.round(mh * 0.84), 0],
                ],
                6: [
                  [r + 3, mh, 1],
                  [hw + 3, mh, 1],
                  [hw + 9, Math.round(mh * 0.86), 0],
                ],
              }[o.m ?? 4] ?? [];
            const minaret = (p, h) => {
              box(p - 1, h, 3, h, c);
              box(p + 1, h, 1, h, S);
              box(p - 2, 3, 5, 3, c);
              for (const k of [0.56, 0.72, 0.88]) {
                const at = Math.round(h * k);
                box(p - 2, at, 5, 1, tone(c, 0.3));
                box(p - 1, at - 1, 3, 1, tone(c, -0.35));
              }
              cone(p, h, 1, 7, leadS);
              box(p, h + 9, 1, 2, 3);
            };
            for (const [p, h, f] of mins) if (!f) for (const s of [-1, 1]) minaret(s * p, h); // behind: the outer ones
            box(-hw, nh, w, nh, c); // the hall
            box(hw, nh, 1, nh, S);
            box(-hw, 1, w, 1, S);
            box(-hw, nh, w, 1, tone(c, 0.3));
            for (let p = -hw + 1; p < hw; p += 2) {
              box(p, nh - 2, 1, 2, 2);
              box(p, 4, 1, 2, 2);
            }
            for (const s of [-1, 1]) {
              for (let p = r + 4; p <= hw - 1; p += 4) leadDome(s * p, nh, 1.5); // the small domes
              box(s > 0 ? r - 1 : -r - 3, nh + 4, 5, 4, c); // the half-dome tier and its buttress turrets
              leadDome(s * (r + 1), nh + 4, 3);
              box(s * (r + 3), nh + 6, 1, 2, c);
              box(s * (r + 3), nh + 7, 1, 1, leadS);
            }
            box(-r - 1, nh + 3, 2 * r + 3, 3, c);
            for (let p = -r; p <= r; p += 2) box(p, nh + 2, 1, 1, 2);
            box(-r + 1, nh + 6, 2 * r - 1, 3, c); // the drum and its window ring
            for (let p = -r + 2; p < r - 1; p += 2) box(p, nh + 5, 1, 2, 2);
            box(r - 1, nh + 6, 1, 3, S);
            leadDome(0, nh + 6, r);
            box(0, nh + 6 + r + 2, 1, 1, 3); // the crescent
            box(-1, nh + 6 + r + 3, 3, 1, 3);
            for (const [p, h, f] of mins) if (f) for (const s of [-1, 1]) minaret(s * p, h); // in front
            break;
          }
          case "ishakPasha": {
            // Ishak Pasha Palace, Doğubayazıt: the honey-stone Ottoman palace on its terrace: long walls with
            // small windows, the domed tomb beside the slender minaret banded in red stone, a little turret
            // with a pointed cap on the left, and the great carved portal of the harem court on the right.
            const st = [214, 162, 104],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              Rd = css(e.sh([176, 92, 64])),
              RdL = css(e.sh([206, 128, 90]));
            box(-15, 2, 31, 2, S); // the terrace
            box(-14, 7, 13, 5, B); // the west wing
            box(-14, 7, 13, 1, Lt);
            for (let p = -13; p <= -3; p += 3) box(p, 5, 1, 2, 2);
            box(-11, 11, 5, 4, B); // the turret
            box(-11, 11, 5, 1, Lt);
            box(-10, 9, 1, 2, 2);
            cone(-9, 11, 2, 4, RdL);
            box(-1, 12, 9, 10, B); // the main block
            box(7, 11, 1, 9, S);
            box(-1, 12, 9, 1, Lt);
            for (const p of [0, 3]) box(p, 9, 2, 3, 2);
            box(-3, 15, 7, 3, B); // the tomb, its drum and ribbed dome
            box(-3, 15, 7, 1, Lt);
            box(-2, 14, 1, 2, 2);
            box(2, 14, 1, 2, 2);
            dome(0, 15, 3.5, RdL);
            for (const p of [-1, 1]) box(p, 17, 1, 2, Rd);
            box(0, 19, 1, 1, Rd);
            box(0, 21, 1, 2, 3);
            box(5, 22, 3, 10, B); // the minaret: a banded shaft, its balcony and its cap
            for (let r = 14; r <= 22; r += 2) box(5, r, 3, 1, Rd);
            box(4, 23, 5, 1, Lt);
            box(5, 26, 3, 3, B);
            box(7, 26, 1, 3, S);
            cone(6, 26, 1, 4, Rd);
            box(6, 32, 1, 2, 3);
            box(8, 13, 7, 13, B); // the harem portal
            box(14, 13, 1, 13, S);
            box(8, 13, 7, 1, Lt);
            box(9, 11, 5, 9, RdL);
            box(10, 10, 3, 8, 2);
            box(11, 11, 1, 1, 2);
            for (let p = 8; p <= 14; p += 2) box(p, 14, 1, 1, B);
            break;
          }
          case "nemrut": {
            // Mount Nemrut, Adıyaman: the gravel tumulus of Antiochus I, its terrace of weathered seated
            // colossi, and in front the fallen stone heads in their pointed Persian tiaras.
            const st = [206, 186, 150],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.32))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              gr = [170, 150, 122];
            cone(1, 0, 14, 25, css(e.sh(gr))); // the tumulus
            for (let j = 2; j < 25; j += 3)
              box(1 + Math.round(14 * (1 - j / 25)) - 1, j, 2, 1, css(e.sh(mixc(gr, [41, 40, 54], 0.25))));
            box(-12, 6, 25, 3, S); // the terrace
            box(-12, 6, 25, 1, B);
            for (const [p, h] of [
              [-11, 13],
              [-6, 15],
              [-1, 16],
              [4, 14],
              [8, 12],
            ]) {
              box(p, h, 4, h - 6, B); // a seated colossus, its blocks shifted
              box(p + 3, h, 1, h - 6, S);
              box(p, h - 3, 4, 1, S);
              box(p + 1, h, 2, 1, Lt);
            }
            const head = (cx, cap) => {
              box(cx - 2, 7, 5, 5, B); // the face, its eyes, nose, beard
              box(cx + 2, 7, 1, 5, S);
              box(cx - 1, 5, 1, 1, S);
              box(cx + 1, 5, 1, 1, S);
              box(cx, 4, 1, 1, S);
              box(cx - 1, 2, 3, 1, S);
              if (cap) {
                box(cx - 2, 9, 5, 2, Lt); // the tiara's band and its tall point
                cone(cx, 9, 2, 5, B);
                box(cx + 1, 12, 1, 2, S);
              } else dome(cx, 7, 2.5, B);
            };
            box(-13, 1, 27, 1, S); // fallen blocks
            head(-8, 1);
            head(1, 0);
            head(9, 1);
            break;
          }
          case "severanBridge": {
            // The Severan (Cendere) Bridge, Adıyaman: one great Roman arch humped over the river, its parapet
            // stepping up to the crown, and three of the original four Corinthian columns at its ends.
            const st = [214, 190, 148],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35)));
            for (let p = -13; p <= 13; p++) {
              const a = Math.abs(p),
                top = 13 - Math.round((a * a) / 40);
              box(p, top, 1, top, B);
              box(p, top + 1, 1, 1, a % 3 === 0 ? Lt : B); // the parapet
            }
            dome(0, 0, 7, S); // the arch and its ring of voussoirs
            for (let j = 0; j <= 7; j++) {
              const k = Math.round(Math.sqrt(64 - j * j));
              for (const s of [-1, 1]) box(s * k - (s > 0 ? 0 : 0), j + 1, 1, 1, Lt);
            }
            dome(0, 0, 6, 2);
            box(-6, 1, 13, 1, css(e.sh([110, 150, 170]))); // the river
            for (const p of [-12, -9, 11]) {
              box(p, 22, 2, 11, B); // a column with its base and capital
              box(p + 1, 22, 1, 11, S);
              box(p - 1, 11, 4, 2, B);
              box(p - 1, 23, 4, 1, Lt);
            }
            break;
          }
          case "yivliMinaret": {
            // The Yivli (Fluted) Minaret, Antalya: the Seljuk brick shaft of eight half-round flutes on a
            // squat stone base, a balcony under a short drum and a pointed lead cap.
            const br = [178, 102, 82],
              B = css(e.sh(br)),
              S = css(e.sh(mixc(br, [41, 40, 54], 0.35))),
              Lt = css(e.sh(mixc(br, [255, 248, 225], 0.25))),
              st = [210, 190, 150];
            box(-4, 6, 9, 6, css(e.sh(st))); // the stone base
            box(3, 6, 2, 6, css(e.sh(mixc(st, [41, 40, 54], 0.3))));
            box(-4, 6, 9, 1, css(e.sh(mixc(st, [255, 248, 225], 0.3))));
            box(-3, 30, 7, 24, B); // the fluted shaft
            for (const p of [-2, 0, 2]) box(p, 30, 1, 24, Lt);
            box(3, 30, 1, 24, S);
            box(-3, 31, 7, 1, Lt);
            box(-4, 33, 9, 2, css(e.sh(st))); // the balcony and its drum
            box(-2, 37, 5, 4, css(e.sh(mixc(st, [255, 248, 225], 0.15))));
            box(2, 37, 1, 4, css(e.sh(mixc(st, [41, 40, 54], 0.3))));
            box(-3, 38, 7, 1, css(e.sh(st)));
            cone(0, 38, 2, 5, css(e.sh(mixc(colors[8], [41, 40, 54], 0.3)))); // the cap
            box(0, 44, 1, 2, 3);
            break;
          }
          case "hadrianGate": {
            // Hadrian's Gate, Antalya: three marble arches on piers faced with Corinthian columns on tall
            // pedestals, a richly carved entablature over them, and the plain stone towers of the old city
            // walls at both ends.
            const st = [226, 214, 190],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.4))),
              tw = [190, 150, 104],
              T = css(e.sh(tw)),
              TS = css(e.sh(mixc(tw, [41, 40, 54], 0.3)));
            for (const s of [-1, 1]) {
              box(s > 0 ? 10 : -14, 17, 5, 17, T); // the towers
              box(s > 0 ? 14 : -14, 17, 1, 17, TS);
              box(s > 0 ? 11 : -13, 12, 1, 2, 2);
            }
            box(-10, 12, 21, 12, B); // the arches and their piers
            box(-10, 12, 21, 1, Lt);
            for (const ax of [-6, 0, 6]) {
              dome(ax, 7, 3, Lt);
              box(ax - 2, 7, 5, 7, 2);
              dome(ax, 7, 2, 2);
            }
            for (const p of [-9, -3, 3, 9]) {
              box(p - 1, 4, 3, 4, B); // the column pedestals, shafts and capitals
              box(p + 1, 4, 1, 4, S);
              box(p, 11, 1, 7, Lt);
              box(p - 1, 12, 3, 1, B);
              box(p - 1, 13, 3, 1, S);
            }
            box(-10, 15, 21, 3, B); // the entablature
            box(-10, 15, 21, 1, Lt);
            for (let p = -9; p <= 9; p += 2) box(p, 14, 1, 1, S);
            for (const p of [-9, -3, 3, 9]) box(p - 1, 16, 3, 1, Lt); // the projecting blocks
            break;
          }
          case "saatKulesi": {
            // An Ottoman clock tower (saat kulesi), shared by several Turkish towns: a wide stone foot, a tall
            // shaft (o.round: a round, shaded column like Çorum's; else square with string courses), a balcony
            // on corbels, the narrower clock storey with its face, and o.top "dome" (lead), "cone" or "pyr".
            // o.w shaft width, o.h height of the balcony, o.band a darker stone banding the shaft.
            const w = o.w ?? 7,
              hw = Math.floor(w / 2),
              h = o.h ?? 22,
              st = colors[c],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              lead = css(e.sh(mixc(colors[8], [41, 40, 54], 0.25)));
            box(-hw - 1, 4, w + 2, 4, B); // the foot
            box(hw, 4, 2, 4, S);
            box(-hw - 1, 4, w + 2, 1, Lt);
            box(-hw, h, w, h - 4, B); // the shaft
            box(hw, h, 1, h - 4, S);
            if (o.round) {
              box(-hw, h, 1, h - 4, Lt);
              box(hw - 1, h, 1, h - 4, css(e.sh(mixc(st, [41, 40, 54], 0.15))));
            }
            for (let r = 8; r < h - 2; r += o.band ? 3 : 6)
              box(-hw, r, w, 1, o.band ? css(e.sh(colors[o.band])) : o.round ? S : Lt);
            if (!o.round) for (let r = 7; r < h - 4; r += 6) box(0, r + 2, 1, 2, 2);
            box(-hw, h - 1, w, 1, S); // the corbels and the balcony with its railing
            box(-hw - 1, h, w + 2, 1, Lt);
            for (let p = -hw - 1; p <= hw + 1; p += 2) box(p, h + 1, 1, 1, 2);
            const k = Math.max(2, hw - 1);
            box(-k, h + 6, 2 * k + 1, 6, B); // the clock storey
            box(k, h + 6, 1, 6, S);
            orb(0, h + 3, Math.max(1, k - 1), 6);
            box(0, h + 4, 1, 1, 2);
            box(0, h + 3, 1, 1, 2);
            box(-k - 1, h + 7, 2 * k + 3, 1, Lt);
            if (o.top === "cone") cone(0, h + 7, k + 1, 2 * k + 3, lead);
            else if (o.top === "pyr") cone(0, h + 7, k + 1, k + 3, lead);
            else {
              dome(0, h + 7, k, lead);
              box(-Math.round(k / 2), h + 7 + k - 1, 1, 1, css(e.sh(mixc(colors[8], [255, 248, 225], 0.3))));
            }
            box(0, h + 9 + (o.top === "cone" ? 2 * k + 3 : o.top === "pyr" ? k + 3 : k) + 1, 1, 2, 3);
            break;
          }
          case "bursaUluCami": {
            // The Grand Mosque (Ulu Cami), Bursa: a broad stone hall under twenty lead domes in rows (the front
            // row on ochre drums, the back row peeping over, one glazed lantern over the fountain), two rows of
            // arched windows, and two stout minarets at its ends, banded, with a balcony and a pointed cap.
            const st = [204, 186, 148],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              Y = css(e.sh([226, 194, 112])),
              YS = css(e.sh(mixc([226, 194, 112], [41, 40, 54], 0.3))),
              lead = css(e.sh(colors[8])),
              leadL = css(e.sh(mixc(colors[8], [255, 248, 225], 0.35))),
              leadS = css(e.sh(mixc(colors[8], [41, 40, 54], 0.3))),
              br = css(e.sh([170, 108, 80]));
            const ld = (cx, b, rr) => {
              dome(cx, b, rr, lead);
              box(cx - 1, b + rr - 1, 1, 1, leadL);
              box(cx + Math.round(rr) - 1, b + 1, 1, Math.round(rr) - 1, leadS);
            };
            for (const p of [-12, -6, 6, 12]) ld(p, 15, 2.5); // the back row
            box(-1, 17, 3, 3, css(e.sh(colors[11]))); // the glazed lantern
            dome(0, 17, 1.5, leadL);
            box(-15, 11, 31, 11, B); // the hall
            box(15, 11, 1, 11, S);
            box(-15, 11, 31, 1, Lt);
            box(-15, 1, 31, 1, S);
            for (let p = -13; p <= 13; p += 3) {
              box(p, 8, 1, 2, 2);
              box(p, 4, 1, 2, 2);
            }
            box(-1, 6, 3, 6, Lt); // the portal
            box(0, 5, 1, 5, 2);
            for (const p of [-12, -6, 0, 6, 12]) {
              box(p - 2, 13, 5, 2, Y); // a front dome on its drum
              box(p + 2, 13, 1, 2, YS);
              ld(p, 13, 2.5);
            }
            for (const [p, mh] of [
              [-17, 29],
              [17, 31],
            ]) {
              box(p - 1, mh, 3, mh, B); // a minaret: banded shaft, balcony, upper drum and cap
              for (let r = 4; r < mh - 6; r += 3) box(p - 1, r, 3, 1, br);
              box(p + 1, mh, 1, mh, S);
              box(p - 2, mh - 5, 5, 1, Lt);
              box(p - 2, mh - 6, 5, 1, S);
              box(p - 1, mh + 3, 3, 3, Lt);
              cone(p, mh + 3, 1, 3, leadS);
              box(p, mh + 6, 1, 2, 3);
            }
            break;
          }
          case "greenTomb": {
            // The Green Tomb (Yeşil Türbe), Bursa: an octagon clad in turquoise tiles, its corners and arched
            // panels framed in white marble, a lattice window over a tiled lunette and a framed lower window,
            // a smaller tiled drum, and the green dome.
            const tq = [52, 168, 176],
              T = css(e.sh(tq)),
              TS = css(e.sh(mixc(tq, [41, 40, 54], 0.25))),
              TD = css(e.sh(mixc(tq, [41, 40, 54], 0.45))),
              M = css(e.sh([232, 228, 214])),
              MS = css(e.sh([190, 186, 176])),
              G = css(e.sh([74, 156, 120])),
              GL = css(e.sh([120, 194, 150]));
            box(-7, 1, 15, 1, MS);
            box(-6, 14, 2, 13, TS); // the side faces
            box(5, 14, 2, 13, TD);
            box(-3, 14, 7, 13, T); // the front face
            for (const p of [-4, 4]) box(p, 14, 1, 14, M); // the marble corners
            box(-3, 12, 7, 1, M); // its pointed arch
            box(-2, 13, 5, 1, M);
            box(0, 14, 1, 1, M);
            box(-1, 10, 3, 3, M); // the lattice window
            box(0, 9, 1, 1, TD);
            box(-2, 6, 5, 4, M); // the lower window in its frame
            box(-1, 5, 3, 2, 2);
            for (const p of [-6, 5]) box(p, 10, 2, 3, MS);
            box(-7, 15, 15, 1, MS); // the cornice
            box(-4, 19, 9, 4, T); // the drum
            box(2, 19, 3, 4, TS);
            box(0, 17, 1, 1, M);
            box(-5, 20, 11, 1, MS);
            dome(0, 20, 4.5, G);
            box(-2, 23, 1, 1, GL);
            box(-3, 22, 1, 1, GL);
            box(0, 25, 1, 2, 3);
            break;
          }
          case "canakkale1915": {
            // The 1915 Çanakkale Bridge over the Dardanelles: two red steel towers, each two legs tied by
            // three white crossbeams and capped in white, the main cable sagging to the deck between them
            // and falling to the shores, the thin hangers, and the deck on its grey underside.
            const R = css(e.sh([206, 44, 46])),
              RS = css(e.sh([150, 30, 36])),
              W = css(e.sh([236, 236, 230])),
              cab = css(e.sh([120, 124, 132])),
              hang = css(e.sh([196, 200, 206])),
              deck = css(e.sh([170, 172, 176])),
              dk = css(e.sh([92, 94, 102]));
            const tx = 14,
              top = 30,
              dh = 7;
            for (let p = -28; p <= 28; p++) {
              const a = Math.abs(p),
                cy =
                  a <= tx
                    ? Math.round(dh + 2 + ((top - 2 - dh - 2) * (a * a)) / (tx * tx))
                    : Math.round(top - 2 - ((top - 2 - dh - 1) * (a - tx)) / (28 - tx));
              if (a !== tx && p % 2 === 0 && cy > dh + 1) box(p, cy - 1, 1, cy - dh - 1, hang);
              box(p, cy, 1, 1, cab);
            }
            box(-28, dh, 57, 1, deck); // the deck
            box(-28, dh - 1, 57, 1, dk);
            for (const s of [-1, 1]) {
              const x0 = s * tx;
              box(x0 - 2, 2, 5, 2, deck); // the caisson
              for (const l of [x0 - 2, x0 + 1]) {
                box(l, top, 2, top - 2, R);
                box(l + 1, top, 1, top - 2, RS);
              }
              for (const b of [12, 20, top - 3]) box(x0 - 1, b, 3, 1, W);
              box(x0 - 2, top + 1, 2, 1, W);
              box(x0 + 1, top + 1, 2, 1, W);
            }
            break;
          }
          case "lionGate": {
            // The Lion Gate of Hattusa (Boğazkale, near Çorum): a cyclopean wall of fitted blocks, two
            // tall jamb stones leaning in to a parabolic opening, and the two lions carved on their faces.
            const st = [196, 176, 142],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.32))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3)));
            box(-9, 8, 19, 8, B); // the wall and its blocks
            for (const [p, r, w] of [
              [-9, 6, 4],
              [-6, 3, 3],
              [5, 6, 4],
              [7, 3, 3],
              [-8, 2, 2],
              [6, 2, 1],
            ])
              box(p, r, w, 1, S);
            box(9, 8, 1, 8, S);
            for (let r = 1; r <= 12; r++) {
              const k = Math.round(4 * Math.sqrt(1 - (r - 1) / 12)) + 1;
              box(-k - 1, r, 2 * k + 3, 1, B); // the jamb stones
              if (r < 12) box(-k + 1, r, 2 * k - 1, 1, 2); // the opening
            }
            box(-6, 13, 13, 1, Lt);
            for (const s of [-1, 1]) {
              const p = s * 4;
              box(p - 1, 9, 3, 3, Lt); // a lion's head, its mane, eye and jaw
              box(s > 0 ? p + 1 : p - 1, 9, 1, 3, S);
              box(p, 8, 1, 1, 2);
              box(p - 1, 6, 3, 2, Lt);
              box(p, 4, 1, 3, S);
            }
            break;
          }
          case "diyarbakirWalls": {
            // The Walls of Diyarbakır: the black basalt ramparts with their great round bastions, rows of
            // arrow slits, a pale inscription band, rounded merlons, and the arched Dağ Kapı gate between two towers.
            const ba = [74, 72, 78],
              B = css(e.sh(ba)),
              S = css(e.sh(mixc(ba, [20, 20, 28], 0.4))),
              Lt = css(e.sh(mixc(ba, [255, 248, 225], 0.22))),
              P = css(e.sh([200, 192, 172]));
            box(-17, 10, 35, 10, B); // the curtain wall
            for (let r = 3; r < 10; r += 3) box(-17, r, 35, 1, S);
            for (let p = -17; p <= 17; p += 2) box(p, 11, 1, 1, B);
            for (const [p, w, h] of [
              [-15, 7, 14],
              [-5, 5, 15],
              [5, 5, 15],
              [15, 7, 14],
            ]) {
              const k = Math.floor(w / 2);
              box(p - k, h, w, h, B); // a round bastion: lit and shaded flanks, slits, band, merlons
              box(p - k, h, 1, h, Lt);
              box(p + k, h, 1, h, S);
              box(p + k - 1, h, 1, h, S);
              box(p - k, h - 3, w, 1, P);
              for (const r of [5, 9]) box(p, r, 1, 2, 2);
              for (let q = -k; q <= k; q += 2) box(p + q, h + 1, 1, 1, B);
            }
            box(-3, 13, 7, 13, B); // the gate
            box(-3, 13, 7, 1, Lt);
            box(-2, 9, 5, 1, P);
            dome(0, 7, 2, Lt);
            box(-1, 7, 3, 7, 2);
            box(0, 8, 1, 1, 2);
            break;
          }
          case "diyarbakirUluCami": {
            // The Great Mosque of Diyarbakır: a black basalt hall, its arcaded front with pale lattice arches,
            // the gabled transept with three white lattice windows, and the square minaret with pale bands
            // under a little white pencil top.
            const ba = [80, 78, 84],
              B = css(e.sh(ba)),
              S = css(e.sh(mixc(ba, [20, 20, 28], 0.4))),
              Lt = css(e.sh(mixc(ba, [255, 248, 225], 0.25))),
              W = css(e.sh([226, 224, 216])),
              WS = css(e.sh([176, 174, 170])),
              roof = css(e.sh([140, 142, 150]));
            box(-2, 27, 5, 7, B); // the square minaret
            box(2, 27, 1, 7, S);
            for (const r of [23, 25]) box(-2, r, 5, 1, W);
            box(-1, 30, 3, 3, W);
            box(1, 30, 1, 3, WS);
            cone(0, 30, 1, 4, WS);
            box(0, 35, 1, 1, 3);
            box(-12, 10, 25, 3, roof); // the side roofs
            box(-12, 8, 25, 8, B); // the arcaded front
            box(12, 8, 1, 8, S);
            box(-12, 8, 25, 1, Lt);
            for (const p of [-10, -5, 4, 9]) {
              dome(p + 1, 4, 2, W);
              box(p, 4, 3, 3, W);
              box(p + 1, 3, 1, 2, S);
            }
            box(-6, 19, 13, 11, B); // the transept and its gable
            box(6, 19, 1, 11, S);
            cone(0, 19, 6, 3, B);
            box(-7, 20, 15, 1, roof);
            for (const p of [-4, 0, 4]) {
              box(p - 1, 16, 3, 4, W);
              box(p, 15, 1, 1, WS);
              box(p, 13, 1, 1, WS);
            }
            box(-1, 7, 3, 7, Lt); // the portal
            box(0, 6, 1, 6, 2);
            break;
          }
          case "egriMinare": {
            // The Eğri (Crooked) Minaret, Aksaray: a Seljuk brick minaret on a square stone base, its shaft
            // banded with zigzags of turquoise glazed tile, a balcony and a stub of a top; the row leans it.
            const br = [170, 96, 74],
              B = css(e.sh(br)),
              S = css(e.sh(mixc(br, [41, 40, 54], 0.32))),
              Lt = css(e.sh(mixc(br, [255, 248, 225], 0.22))),
              tq = css(e.sh([64, 164, 170])),
              st = [204, 186, 150];
            box(-4, 7, 9, 7, css(e.sh(st))); // the base
            box(3, 7, 2, 7, css(e.sh(mixc(st, [41, 40, 54], 0.3))));
            box(-3, 26, 7, 19, B); // the shaft
            box(-3, 26, 1, 19, Lt);
            box(2, 26, 2, 19, S);
            for (const r of [11, 18]) for (let p = -3; p <= 3; p++) box(p, r + ((p + 4) % 2), 1, 1, tq);
            box(-3, 23, 7, 1, tq);
            box(-4, 27, 9, 1, Lt); // the balcony
            box(-2, 30, 5, 3, B);
            box(2, 30, 1, 3, S);
            break;
          }
          case "pamukkale": {
            // Pamukkale (Denizli): the white travertine terraces stepping down the brown hill, each shelf a
            // row of rounded basins holding turquoise water, their lips hung with white curtains.
            const W = css(e.sh([242, 242, 236])),
              WS = css(e.sh([200, 204, 208])),
              Q = css(e.sh([104, 196, 216])),
              hill = [170, 140, 102];
            for (let p = -21; p <= 21; p++) {
              const h = 15 - Math.round((Math.abs(p - 4) * Math.abs(p - 4)) / 60);
              box(p, h, 1, 3, css(e.sh(p > 12 ? mixc(hill, [41, 40, 54], 0.25) : hill))); // the hill
            }
            for (const p of [-16, -9, 9, 16])
              box(p, 14 - (Math.abs(p) > 12 ? 1 : 0), 2, 1, css(e.sh([110, 136, 84])));
            for (let i = 0; i < 6; i++) {
              const top = 13 - 2 * i,
                l = -15 - i + ((i * 5) % 3),
                r = 13 + i - ((i * 3) % 2);
              box(l, top, r - l + 1, 2, W); // a shelf of basins
              for (let p = l + 1 + (i % 2) * 3; p < r - 1; p += 7) box(p, top, Math.min(5, r - 1 - p), 1, Q);
              for (let p = l + (i % 3); p <= r; p += 3) box(p, top - 2, 1, 1, WS); // the curtains under the lip
            }
            box(-20, 2, 40, 2, W);
            for (let p = -19; p < 19; p += 5) box(p, 2, 3, 1, Q);
            break;
          }
          case "denizliRooster": {
            // The Denizli Rooster, the city's emblem: a big red-combed cock crowing on a stone pedestal, its
            // body red-brown and black with a green sickle tail.
            const st = [200, 190, 170],
              P = css(e.sh(st)),
              PS = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              red = css(e.sh([200, 40, 40])),
              body = css(e.sh([150, 70, 40])),
              blk = css(e.sh([50, 46, 52])),
              grn = css(e.sh([40, 110, 80])),
              yel = css(e.sh([230, 180, 60]));
            box(-4, 6, 9, 6, P); // the pedestal
            box(3, 6, 2, 6, PS);
            box(-5, 7, 11, 1, P);
            box(-1, 9, 1, 2, yel); // the legs
            box(1, 9, 1, 2, yel);
            box(-3, 13, 6, 4, body); // the body and its dark breast
            box(-3, 11, 5, 1, blk);
            box(-4, 15, 2, 4, blk);
            box(2, 16, 2, 4, body); // the neck and head
            box(3, 18, 2, 2, body);
            box(5, 18, 1, 1, yel); // the open beak
            box(5, 17, 1, 1, yel);
            box(3, 20, 2, 2, red); // the comb and wattle
            box(4, 16, 1, 1, red);
            box(-5, 18, 2, 4, grn); // the sickle tail
            box(-6, 20, 2, 3, blk);
            box(-6, 21, 1, 1, grn);
            break;
          }
          case "pontusTombs": {
            // The Tombs of the Kings of Pontus, Amasya: a grey limestone cliff with the rock-cut tombs, each
            // a plain temple front with a dark door standing free inside a tall arched recess, on a terrace
            // ledge above the town.
            const rk = [176, 170, 160],
              B = css(e.sh(rk)),
              S = css(e.sh(mixc(rk, [41, 40, 54], 0.35))),
              Lt = css(e.sh(mixc(rk, [255, 248, 225], 0.3))),
              D = css(e.sh(mixc(rk, [41, 40, 54], 0.6)));
            for (let p = -18; p <= 18; p++) {
              const a = Math.abs(p + 2),
                h = 28 - Math.round((a * a) / 22) + ((p * 7) % 3);
              box(p, h, 1, h, p > 9 ? S : B);
              if ((p * 5) % 7 === 0) box(p, h - 3, 1, h - 8, Lt);
            }
            for (const [cx, b, k, t] of [
              [-8, 9, 3, 11],
              [3, 5, 3, 10],
              [12, 4, 2, 7],
            ]) {
              box(cx - k - 1, b + t - 2, 2 * k + 3, t - 2, D); // the recess and its arched top
              dome(cx, b + t - 2, k + 1, D);
              box(cx - k, b + t - 4, 2 * k + 1, t - 4, Lt); // the tomb front, its pediment and door
              box(cx + k, b + t - 4, 1, t - 4, B);
              cone(cx, b + t - 4, k, Math.min(2, k - 1), Lt);
              box(cx - 1, b + 4, 2, 3, D);
              box(cx - k - 2, b, 2 * k + 5, 1, S); // the ledge
            }
            break;
          }
          case "stPeterChurch": {
            // The Church of St Peter, Antakya: the pale stone front built across a cave mouth in the rock,
            // three dark doors, three arched panels with the star rosettes, and the steps up to it.
            const st = [214, 204, 180],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              rk = [140, 120, 96];
            for (let p = -14; p <= 14; p++) {
              const a = Math.abs(p),
                h = 21 - Math.round((a * a) / 24) + ((p * 5) % 2);
              box(p, h, 1, h, css(e.sh(a > 9 ? mixc(rk, [41, 40, 54], 0.2) : rk)));
            }
            box(-10, 15, 21, 13, B); // the front
            box(10, 15, 1, 13, S);
            box(-10, 15, 21, 1, Lt);
            for (const p of [-6, 0, 6]) {
              dome(p, 10, 2.5, S); // an arched panel with its star rosette
              dome(p, 10, 1.5, B);
              box(p, 12, 1, 1, 2);
              box(p - 1, 11, 3, 1, 2);
              box(p, 10, 1, 1, 2);
              box(p - 1, 7, p ? 2 : 3, 5, 2); // a door
            }
            box(-12, 2, 25, 2, S); // the steps
            box(-3, 3, 7, 1, Lt);
            break;
          }
          case "hasanDagi": {
            // Hasan Dağı (Mount Hasan), near Aksaray: the twin-peaked volcano, its higher western summit and
            // lower eastern one both capped in snow, dark lava ridges running down the grey-brown flanks.
            const rk = [150, 136, 128],
              B = css(e.sh(rk)),
              S = css(e.sh(mixc(rk, [41, 40, 54], 0.32))),
              Lt = css(e.sh(mixc(rk, [255, 248, 225], 0.2))),
              Sn = css(e.sh([240, 242, 246])),
              SnS = css(e.sh([196, 206, 220]));
            for (let p = -20; p <= 20; p++) {
              const h = Math.max(
                1,
                Math.round(
                  Math.max(26 - Math.abs(p + 5) * 1.25, 21 - Math.abs(p - 8) * 1.3, 8 - Math.abs(p) * 0.15),
                ),
              );
              box(p, h, 1, h, p < -5 ? Lt : p > 8 ? S : B);
              if (h > 18) box(p, h, 1, h - 18 + ((p * 3) % 2), p > -5 && p < 2 ? SnS : Sn); // the snow
              if (p % 5 === 0 && h > 6) box(p, h - 3, 1, h - 6, S); // a lava ridge
            }
            break;
          }
          case "sangariusBridge": {
            // The Sangarius (Justinian's) Bridge, Adapazarı: a long, level limestone bridge on round arches
            // of different spans, its piers with pointed cutwaters, a plain parapet, and the great apse-like
            // arch that stood at its eastern end.
            const st = [214, 202, 176],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              D = css(e.sh(mixc(st, [41, 40, 54], 0.55))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35)));
            box(-19, 9, 33, 9, B); // the deck and spandrels
            box(-19, 10, 33, 1, Lt); // the parapet
            box(-19, 8, 33, 1, S);
            for (const [cx, k] of [
              [-16, 2],
              [-11, 2],
              [-5, 3],
              [2, 3],
              [9, 3],
            ]) {
              dome(cx, 4, k + 0.5, Lt); // an arch, its voussoirs and the cutwater on its pier
              box(cx - k, 4, 2 * k + 1, 4, D);
              dome(cx, 4, k - 0.5, D);
            }
            for (const p of [-14, -8, -1, 6, 12]) {
              box(p, 5, 1, 4, S);
              box(p, 6, 1, 1, Lt);
            }
            box(14, 14, 6, 14, B); // the apse at the east end
            box(19, 14, 1, 14, S);
            box(14, 14, 6, 1, Lt);
            dome(17, 6, 2, Lt);
            box(15, 6, 4, 6, D);
            dome(17, 6, 1.5, D);
            break;
          }
          case "afyonKale": {
            // Afyonkarahisar Castle: the castle walls and towers crowning the sheer black volcanic rock that
            // rises over the town, a flag on the summit.
            const rk = [118, 104, 96],
              B = css(e.sh(rk)),
              S = css(e.sh(mixc(rk, [41, 40, 54], 0.35))),
              Lt = css(e.sh(mixc(rk, [255, 248, 225], 0.22))),
              wl = [196, 180, 150],
              W = css(e.sh(wl)),
              WS = css(e.sh(mixc(wl, [41, 40, 54], 0.3)));
            for (let p = -14; p <= 14; p++) {
              const a = p + 2,
                h = Math.round(15 - (a * a) / (a < 0 ? 12 : 18) + ((p * 7) % 3) * 0.5);
              if (h < 1) continue;
              box(p, h, 1, h, p < -4 ? Lt : p > 5 ? S : B); // the rock
              if ((p * 3) % 4 === 0 && h > 6) box(p, h - 2, 1, h - 6, S); // its fissures
            }
            box(-7, 17, 12, 3, W); // the walls on the summit
            box(4, 17, 1, 3, WS);
            for (let p = -7; p <= 4; p += 2) box(p, 18, 1, 1, W);
            for (const p of [-8, 3]) {
              box(p, 20, 3, 6, W);
              box(p + 2, 20, 1, 6, WS);
              box(p, 21, 1, 1, W);
              box(p + 2, 21, 1, 1, W);
            }
            box(-2, 23, 1, 5, 2); // the flag
            box(-1, 23, 3, 2, 10);
            break;
          }
          case "derinerDam": {
            // Deriner Dam, Artvin: the thin double-curved concrete arch wedged in the Çoruh gorge, wide at the
            // crest and narrow at its foot, lit on its near curve and shaded where it bends away, between
            // wooded mountain flanks with bare cut rock beside the abutments.
            const con = [214, 212, 204],
              C = css(e.sh(con)),
              CL = css(e.sh(mixc(con, [255, 248, 225], 0.35))),
              CS = css(e.sh(mixc(con, [41, 40, 54], 0.22))),
              CD = css(e.sh(mixc(con, [41, 40, 54], 0.4))),
              grn = [74, 120, 70],
              rk = [176, 170, 156];
            for (let p = -19; p <= 19; p++) {
              const a = Math.abs(p),
                h = Math.min(25, 6 + Math.round(a * 1.1) + (p > 0 ? 1 : 0));
              box(p, h, 1, h, css(e.sh(p > 0 ? mixc(grn, [41, 40, 54], 0.2) : grn))); // the mountains
              if (a >= 5 && a <= 12) box(p, Math.min(h, 4 + a), 1, Math.min(h, 4 + a) - 1, css(e.sh(rk))); // cut rock
            }
            for (let r = 2; r <= 18; r++) {
              const k = 3 + Math.round((r - 2) * 0.6);
              box(-k, r, 2 * k + 1, 1, C); // the arch wall, its curve shaded
              box(-k, r, Math.max(1, Math.round(k * 0.5)), 1, CL);
              box(Math.round(k * 0.4), r, k - Math.round(k * 0.4) + 1, 1, CS);
              box(k - 1, r, 2, 1, CD);
            }
            box(-13, 19, 27, 1, CL); // the crest road
            box(-2, 3, 5, 3, CS); // the power house at the foot
            box(-1, 2, 1, 1, 2);
            box(1, 2, 1, 1, 2);
            break;
          }
          case "habibNeccar": {
            // Habib-i Neccar Mosque, Antakya: a pale stone hall fronted by a portico of three tall pointed
            // arches on slim columns, the lead dome behind, and the slender minaret with its balcony and cone.
            const st = [216, 206, 184],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              D = css(e.sh(mixc(st, [41, 40, 54], 0.5))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              lead = css(e.sh(colors[8])),
              leadS = css(e.sh(mixc(colors[8], [41, 40, 54], 0.3)));
            box(-4, 13, 9, 2, B); // the drum and dome
            dome(0, 13, 4.5, lead);
            box(2, 16, 2, 2, leadS);
            box(0, 19, 1, 2, 3);
            box(7, 26, 3, 26, B); // the minaret
            box(9, 26, 1, 26, S);
            box(6, 20, 5, 1, Lt);
            box(7, 19, 3, 1, S);
            cone(8, 26, 1, 4, leadS);
            box(8, 32, 1, 2, 3);
            box(-9, 11, 17, 11, B); // the portico
            box(-9, 11, 17, 1, Lt);
            box(7, 11, 1, 11, S);
            for (const cx of [-6, -1, 4]) {
              for (let j = 0; j < 3; j++)
                box(cx - 1 + j - (j > 1 ? 2 * (j - 1) : 0), 9 - Math.abs(j - 1) + 0, 1, 1, D);
              box(cx - 2, 8, 5, 7, D); // a pointed arch and the wall inside it
              box(cx - 1, 9, 3, 1, D);
              box(cx, 10, 1, 1, D);
              box(cx - 1, 5, 3, 4, S);
            }
            for (const p of [-9, -4, 1, 6]) box(p + (p > 0 ? 1 : 0), 8, 1, 7, Lt); // the columns
            break;
          }
          case "ucGozler": {
            // The Tralleis gymnasium ruin, Aydın, known as Üç Gözler ("three eyes"): a tall fragment of
            // Roman masonry pierced by three great round arches, rough broken top, on the hillside.
            const st = [200, 180, 146],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.32))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              br = css(e.sh([170, 110, 84]));
            for (let p = -9; p <= 9; p++) {
              const h = 16 + (((p + 10) * 7) % 3) - (Math.abs(p) > 7 ? 2 : 0);
              box(p, h, 1, h, p > 7 ? S : B); // the wall with its broken top
            }
            for (let r = 4; r < 15; r += 4) box(-9, r, 19, 1, br); // brick lacing courses
            for (const cx of [-5, 0, 5]) {
              dome(cx, 9, 2.5, Lt); // an arch, its voussoirs and the sky through it
              box(cx - 2, 9, 5, 7, css(e.sh([150, 190, 220])));
              dome(cx, 9, 1.5, css(e.sh([150, 190, 220])));
            }
            box(-10, 2, 21, 2, S); // the rubble
            break;
          }
          case "ridgeCastle": {
            // A castle on a rocky ridge, shared by several Turkish towns (Bayburt, Bitlis, Artvin): the bare rock
            // (o.h tall, o.w wide; lit on the left, shaded on the right, fissured), the curtain wall riding its
            // top with crenels, and o.n towers (o.round: round ones) with arrow slits. c is the wall's stone,
            // o.rk the rock's colour (both palette indices).
            const w = o.w ?? 33,
              hw = Math.floor(w / 2),
              rh = o.h ?? 10,
              wh = o.wh ?? 5,
              n = o.n ?? 4,
              rock = colors[o.rk ?? 8],
              st = colors[c],
              RB = css(e.sh(rock)),
              RS = css(e.sh(mixc(rock, [41, 40, 54], 0.35))),
              RL = css(e.sh(mixc(rock, [255, 248, 225], 0.2))),
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3)));
            const top = (p) =>
              Math.max(2, Math.round(rh * (1 - 0.55 * (p / hw) ** 2) + (((p + 20) * 7) % 3) - 1));
            for (let p = -hw; p <= hw; p++) {
              const h = top(p);
              box(p, h, 1, h, p < -hw / 3 ? RL : p > hw / 3 ? RS : RB); // the rock
              if (((p + 20) * 5) % 7 === 0 && h > 4) box(p, h - 2, 1, h - 3, RS);
            }
            const lw = hw - 2;
            for (let p = -lw; p <= lw; p++) {
              const b = top(p);
              box(p, b + wh, 1, wh, p > lw - 2 ? S : B); // the wall on the rock
              if (p % 2 === 0) box(p, b + wh + 1, 1, 1, B);
            }
            for (let i = 0; i < n; i++) {
              const p = Math.round(-lw + 1 + (i * (2 * lw - 2)) / Math.max(1, n - 1)),
                b = top(p),
                th = wh + 4;
              box(p - 2, b + th, 5, th, B); // a tower
              box(p + 2, b + th, 1, th, S);
              if (o.round) box(p - 2, b + th, 1, th, Lt);
              box(p, b + th - 2, 1, 2, 2);
              for (const q of [-2, 0, 2]) box(p + q, b + th + 1, 1, 1, q > 0 ? S : B);
              box(p - 2, b + th, 5, 1, Lt);
            }
            break;
          }
          case "klasikCami": {
            // A classical Ottoman town mosque, shared by many Turkish towns: a square stone prayer hall with two
            // rows of windows under a lead dome on an octagonal drum, a lower porch (son cemaat yeri) of o.por
            // pointed arches with small domes in front, and o.m minarets (1 or 2) with o.ser balconies and lead
            // caps. o.r dome radius, o.mh minaret height, c the stone; o.band laces the walls with brick courses
            // (early Ottoman, colour index); o.cap "cone" puts a Seljuk conical roof over the dome instead.
            const r = o.r ?? 6,
              hw = r + 2,
              nh = o.nh ?? 10,
              mh = o.mh ?? 26,
              por = o.por ?? 5,
              st = colors[c],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              D = css(e.sh(mixc(st, [41, 40, 54], 0.55))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              band = o.band != null ? css(e.sh(colors[o.band])) : null,
              lead = css(e.sh(colors[8])),
              leadL = css(e.sh(mixc(colors[8], [255, 248, 225], 0.35))),
              leadS = css(e.sh(mixc(colors[8], [41, 40, 54], 0.3)));
            const mins = (o.m ?? 1) === 2 ? [-hw - 3, hw + 3] : (o.m ?? 1) ? [hw + 3] : [];
            const minaret = (p) => {
              box(p - 2, 4, 5, 4, B); // the base, the shaft, its balconies and cap
              box(p - 1, mh, 3, mh, B);
              box(p + 1, mh, 1, mh, S);
              if (band) for (let y = 6; y < mh - 4; y += 4) box(p - 1, y, 3, 1, band);
              for (let i = 0; i < (o.ser ?? 1); i++) {
                const at = mh - 3 - i * 5;
                box(p - 2, at, 5, 1, Lt);
                box(p - 1, at - 1, 3, 1, D);
              }
              cone(p, mh, 1, 6, leadS);
              box(p, mh + 8, 1, 2, 3);
            };
            box(-hw, nh, 2 * hw + 1, nh, B); // the hall
            box(hw, nh, 1, nh, S);
            if (band) for (let y = 3; y < nh; y += 3) box(-hw, y, 2 * hw + 1, 1, band);
            box(-hw, nh, 2 * hw + 1, 1, Lt);
            for (let p = -hw + 2; p <= hw - 2; p += 3) box(p, nh - 2, 1, 2, D);
            box(-r + 1, nh + 2, 2 * r - 1, 2, B); // the drum
            box(r - 1, nh + 2, 1, 2, S);
            for (let p = -r + 2; p < r - 1; p += 2) box(p, nh + 1, 1, 1, D);
            if (o.cap === "cone") {
              cone(0, nh + 2, r, r + 2, leadS);
              box(-1, nh + r + 2, 1, 1, leadL);
            } else {
              dome(0, nh + 2, r, lead);
              box(-Math.round(r / 2), nh + 2 + r - 2, 2, 1, leadL);
              box(r - 2, nh + 4, 1, Math.max(1, r - 4), leadS);
              box(0, nh + r + 4, 1, 2, 3);
            }
            for (const p of [-hw, hw]) {
              box(p, nh + 3, 1, 3, B); // the corner weights
              box(p, nh + 4, 1, 1, lead);
            }
            for (const p of mins) if (p < 0) minaret(p);
            if (por) {
              const pw = hw + 1,
                step = (2 * pw) / por;
              box(-pw, 7, 2 * pw + 1, 7, B); // the porch
              box(pw, 7, 1, 7, S);
              box(-pw, 7, 2 * pw + 1, 1, Lt);
              for (let i = 0; i < por; i++) {
                const cx = Math.round(-pw + step * (i + 0.5));
                box(cx - 1, 5, 3, 5, D); // a pointed arch
                box(cx, 6, 1, 1, D);
                dome(cx, 7, Math.max(1, step / 2 - 0.5), lead); // and its little dome
              }
            }
            for (const p of mins) if (p > 0) minaret(p);
            break;
          }
          case "elRizkMinaret": {
            // The El Rızk minaret, Hasankeyf (Batman): the Ayyubid minaret, its tall square stone base with
            // carved arched panels and inscription bands, an octagonal cylinder above with a muqarnas balcony,
            // a short top storey, and the storks' nest crowning it.
            const st = [204, 176, 132],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              D = css(e.sh(mixc(st, [41, 40, 54], 0.5))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3)));
            box(-3, 14, 7, 14, B); // the square base
            box(2, 14, 2, 14, S);
            for (const y of [5, 11]) {
              box(-2, y + 2, 3, 3, D); // a carved arched panel
              box(-1, y + 3, 1, 1, D);
            }
            box(-3, 14, 7, 1, Lt);
            box(-3, 9, 7, 1, Lt);
            box(-2, 30, 5, 16, B); // the round shaft
            box(-2, 30, 1, 16, Lt);
            box(1, 30, 2, 16, S);
            for (const y of [19, 24]) box(-2, y, 5, 1, D);
            box(-3, 32, 7, 2, Lt); // the muqarnas balcony
            box(-2, 30, 5, 1, D);
            box(-1, 36, 3, 4, B); // the top storey and the nest
            box(1, 36, 1, 4, S);
            box(-2, 37, 5, 1, css(e.sh([110, 90, 70])));
            box(-1, 38, 1, 1, 6);
            box(0, 39, 1, 1, 10);
            break;
          }
          case "hasankeyf": {
            // Hasankeyf (Batman): the honey-coloured cliff over the Tigris riddled with cave dwellings, the
            // ruined citadel walls along its top, and in front the broken pier of the old bridge.
            const rk = [206, 176, 128],
              B = css(e.sh(rk)),
              S = css(e.sh(mixc(rk, [41, 40, 54], 0.3))),
              D = css(e.sh(mixc(rk, [41, 40, 54], 0.6))),
              Lt = css(e.sh(mixc(rk, [255, 248, 225], 0.25)));
            for (let p = -13; p <= 13; p++) {
              const h = Math.round(
                13 - (p > 8 ? (p - 8) * 2 : 0) - (p < -10 ? (-10 - p) * 3 : 0) + ((p * 7) % 2),
              );
              box(p, h, 1, h, p > 8 ? S : B); // the cliff
              if (p % 4 === 0) box(p, h - 2, 1, h - 3, Lt);
              box(p, h + 3, 1, 3, p > 5 ? S : Lt); // the citadel wall
              if (p % 2 === 0) box(p, h + 4, 1, 1, Lt);
            }
            for (const [p, y] of [
              [-9, 6],
              [-6, 10],
              [-3, 4],
              [0, 8],
              [3, 11],
              [5, 5],
              [8, 9],
              [-11, 3],
            ])
              box(p, y, 2, 2, D); // the caves
            box(-1, 11, 3, 11, B); // the bridge pier
            box(1, 11, 1, 11, S);
            box(-2, 12, 5, 1, Lt);
            box(-2, 1, 5, 1, css(e.sh([100, 150, 160])));
            break;
          }
