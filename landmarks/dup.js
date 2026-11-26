          case "malatyaYeniCami": {
            // Malatya's Yeni Cami (1912, after the classical Ottoman mosques): a grey ashlar hall whose bays
            // rise in round-topped gables, a lead central dome on a windowed drum with a half dome and corner
            // domelets, and two minarets on the right: a slender one with two balconies and a lead cone, and a
            // thick round shaft ending in a carved ring.
            const st = [200, 198, 190],
              ld = [146, 154, 166],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              D = css(e.sh(mixc(st, [41, 40, 54], 0.1))),
              L = css(e.sh(ld)),
              LS = css(e.sh(mixc(ld, [41, 40, 54], 0.3))),
              LL = css(e.sh(mixc(ld, [255, 248, 225], 0.3))),
              leadDome = (cx, cy, r) => {
                dome(cx, cy, r, LS);
                dome(cx - 1, cy, r - 1, L);
                box(cx - Math.ceil(r / 2), cy + Math.round(r * 0.6), 1, 1, LL);
              };
            // the slender minaret, behind the hall's right end
            box(15, 13, 5, 13, B);
            box(19, 13, 1, 13, S);
            box(16, 34, 3, 21, B);
            box(16, 34, 1, 21, Lt);
            box(18, 34, 1, 21, S);
            for (const y of [26, 32]) {
              box(15, y, 5, 1, Lt);
              box(15, y - 1, 5, 1, S);
              box(17, y - 2, 1, 2, 2);
            }
            cone(17, 34, 1, 5, L);
            box(17, 41, 1, 2, 12);
            // the thick round minaret
            box(20, 28, 5, 28, B);
            box(20, 28, 1, 28, Lt);
            box(23, 28, 2, 28, S);
            box(19, 29, 7, 2, Lt);
            for (let p = 19; p <= 25; p += 2) box(p, 28, 1, 1, S);
            for (const y of [10, 18]) box(22, y, 1, 2, 2);
            // domes: corner domelets, the half dome and the main dome on its drum
            for (const [cx, base] of [
              [-10, 16],
              [7, 16],
            ]) {
              box(cx - 2, base, 5, 2, B);
              box(cx - 2, base, 5, 1, Lt);
              leadDome(cx, base, 3);
              box(cx, base + 5, 1, 2, 12);
            }
            box(-6, 22, 13, 5, B);
            box(-6, 22, 13, 1, Lt);
            box(6, 21, 1, 4, S);
            for (let p = -5; p <= 5; p += 2) box(p, 20, 1, 2, 2);
            box(-9, 18, 6, 2, B);
            leadDome(-6, 18, 3);
            leadDome(0, 22, 6);
            box(0, 30, 1, 3, 12);
            box(-1, 29, 3, 1, 12);
            // the hall: round-topped gables over the bays, two rows of arched windows
            box(-13, 14, 26, 14, B);
            box(12, 14, 1, 14, S);
            for (const [cx, r] of [
              [-8, 4],
              [5, 5],
            ]) {
              dome(cx, 14, r, Lt);
              dome(cx, 14, r - 1, B);
              box(cx, 17, 1, 2, 2);
            }
            box(-14, 14, 28, 1, Lt);
            box(-13, 13, 26, 1, D);
            for (let p = -3; p <= 10; p += 3) {
              box(p, 11, 2, 4, 2);
              box(p, 11, 2, 1, D);
              box(p, 5, 2, 2, 2);
            }
            box(-13, 8, 9, 8, D); // the porch arcade
            box(-14, 8, 11, 1, Lt);
            for (const p of [-12, -9, -6]) {
              box(p, 6, 2, 5, 2);
              box(p, 6, 2, 1, S);
            }
            box(-13, 1, 26, 1, S);
            break;
          }
          case "musAlaeddinBey": {
            // Muş's Alaeddin Bey Camii (18th century): a flat-roofed hall of dark basalt ashlar under a dentilled
            // cornice, a lower portal block on the left with its pointed arch, and a tall round stone minaret on
            // a square base, banded with zigzag courses, a balcony near the top and a short conical cap.
            const st = [124, 112, 102],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.32))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.28))),
              D = css(e.sh(mixc(st, [41, 40, 54], 0.15)));
            // the minaret
            box(3, 15, 7, 15, B);
            box(3, 15, 1, 15, Lt);
            box(8, 15, 2, 15, S);
            box(3, 15, 7, 1, Lt);
            box(4, 16, 5, 1, D);
            box(4, 33, 5, 17, B);
            box(4, 33, 1, 17, Lt);
            box(7, 33, 2, 17, S);
            for (let y = 19; y < 30; y += 2) box(5 + (y % 4 === 1 ? 0 : 1), y, 1, 1, D);
            box(4, 23, 5, 1, Lt);
            box(3, 31, 7, 2, Lt); // the balcony
            for (let p = 3; p <= 9; p += 2) box(p, 30, 1, 1, S);
            box(4, 35, 5, 2, D);
            box(5, 35, 1, 1, 2);
            box(3, 33, 7, 1, Lt);
            cone(6, 35, 3, 4, S);
            box(5, 38, 1, 2, Lt);
            box(6, 42, 1, 3, 8);
            // the hall
            box(-9, 12, 14, 12, B);
            box(-9, 12, 1, 12, Lt);
            box(-10, 12, 16, 1, Lt);
            for (let p = -10; p <= 5; p += 2) box(p, 11, 1, 1, S);
            box(-9, 10, 14, 1, D);
            box(-5, 7, 2, 3, 2);
            box(-5, 7, 2, 1, S);
            box(-5, 12, 3, 2, D); // the small window high on the wall
            // the portal block
            box(-14, 8, 7, 8, B);
            box(-14, 8, 1, 8, Lt);
            box(-15, 8, 9, 1, Lt);
            box(-13, 7, 5, 6, D);
            box(-12, 5, 3, 5, 2);
            box(-12, 7, 3, 2, S);
            box(-11, 7, 1, 1, Lt);
            box(-15, 1, 25, 1, S);
            break;
          }
          case "rostovNativity": {
            // Rostov-on-Don's Cathedral of the Nativity of the Virgin (Konstantin Thon, 1850s): a white
            // Russo-Byzantine cube with round-arched gables (zakomaras) and paired arched windows, five gilded
            // onions (the big one on a tall windowed drum, four on slim corner drums), and on the right its
            // detached white bell tower in three stepped tiers under its own gilded onion.
            const wt = [238, 234, 224],
              gd = [222, 172, 64],
              W = css(e.sh(wt)),
              S = css(e.sh(mixc(wt, [41, 40, 54], 0.22))),
              Lt = css(e.sh(mixc(wt, [255, 248, 225], 0.6))),
              G = css(e.sh(gd)),
              GS = css(e.sh(mixc(gd, [41, 40, 54], 0.3))),
              GL = css(e.sh(mixc(gd, [255, 248, 225], 0.45))),
              onion = (cx, base, k) => {
                const tall = Math.round(k * 1.7) + 1,
                  tip = base + k + tall + 2;
                orb(cx, base + k, k, G);
                cone(cx, base + k, k, tall, G);
                if (k >= 2) {
                  box(cx + Math.ceil(k / 2), base + k + 1, 1, k, GS);
                  box(cx - Math.ceil(k / 2), base + k + Math.round(k * 0.6), 1, k, GL);
                }
                box(cx, tip + 2, 1, 4, 12);
                box(cx - 1, tip, 3, 1, 12);
              },
              drum = (cx, base, hw, h) => {
                box(cx - hw, base + h, 2 * hw + 1, h, W);
                box(cx + hw, base + h, 1, h, S);
                box(cx - hw - 1, base + h, 2 * hw + 3, 1, Lt);
                if (h >= 4)
                  for (let p = cx - hw + 1; p < cx + hw; p += 2)
                    box(p, base + h - 1, 1, Math.min(h - 3, 5), 2);
              };
            // the bell tower
            drum(16, 0, 3, 18);
            box(15, 7, 3, 4, 2);
            box(13, 11, 7, 1, Lt);
            box(13, 20, 7, 1, 9);
            drum(16, 18, 2, 8);
            box(16, 24, 1, 3, 2);
            drum(16, 26, 1, 5);
            onion(16, 31, 2);
            // the cathedral
            box(-11, 16, 22, 16, W);
            box(9, 15, 2, 15, S);
            box(-12, 18, 24, 2, 9); // the green roofs behind the gables
            for (const cx of [-7, 0, 7]) {
              dome(cx, 16, 3, Lt);
              dome(cx, 16, 2, W);
              box(cx, 17, 1, 1, 2);
              box(cx - 1, 12, 1, 4, 2); // paired arched windows
              box(cx + 1, 12, 1, 4, 2);
              box(cx - 1, 6, 3, 3, 2);
            }
            box(-11, 16, 22, 1, Lt);
            for (const p of [-11, -4, 3, 10]) box(p, 15, 1, 14, Lt); // pilasters
            box(-1, 6, 3, 6, 2);
            box(-1, 6, 3, 1, S);
            box(-12, 1, 24, 1, S);
            for (const cx of [-7, 7]) {
              drum(cx, 18, 1, 4);
              onion(cx, 22, 2);
            }
            drum(0, 18, 3, 10);
            onion(0, 28, 4);
            break;
          }
          case "kalingaDeula": {
            // An Odisha (Kalinga) temple, as built for Jagannath (Ranchi, Nabarangpur): the rekha deula over the
            // sanctum, a ribbed tower with straight sides that curve in near the top, crowned by the wide
            // fluted amalaka, the kalasha pot, the Nila chakra and a flag; in front, the jagamohana hall under a
            // stepped pyramid roof (o.tiers pidhas) with its bell top. o.h height, o.w tower width, o.c walls,
            // o.t the bands (rib shadows and tier edges), o.plinth a stepped platform (Ranchi's hilltop),
            // o.hall a lower second pyramid hall (the bhoga mandapa) further left, o.flag its colour.
            const h = o.h ?? 30,
              w = o.w ?? 9,
              hw = Math.floor(w / 2),
              ph = o.plinth ?? 0,
              tiers = o.tiers ?? 4,
              dx = Math.ceil(hw / 2) + 2,
              W = chLit(c, 0.15),
              Sh = chShade(c, 0.3),
              band = chShade(t, 0.1);
            const jx = dx - hw - 5,
              left = jx - (o.hall ? 15 : 6) - ph;
            for (let k = 0; k < ph; k++)
              box(left + k, k + 1, dx + hw + 2 + ph - left - 2 * k, 1, k % 2 ? 13 : Sh);
            // the deula
            const b0 = ph,
              bada = Math.round(h * 0.32),
              G = h - bada - 7,
              gTop = b0 + bada + G;
            box(dx - hw, b0 + bada, w, bada, c);
            box(dx + hw, b0 + bada, 1, bada, Sh);
            box(dx - hw, b0 + bada, w, 1, band);
            box(dx - hw, b0 + Math.round(bada / 2), w, 1, band);
            box(dx - 1, b0 + bada - 2, 3, bada - 4, Sh); // the niche of the side deity
            for (let j = 0; j < G; j++) {
              const k = Math.round(hw * (1 - 0.42 * (j / G) ** 2.2)),
                y = b0 + bada + 1 + j;
              box(dx - k, y, 2 * k + 1, 1, j % 4 === 3 ? band : c);
              if (k >= 2) box(dx + k - 1, y, 2, 1, Sh);
              if (k >= 3) box(dx - Math.round(k / 2), y, 1, 1, W);
              box(dx, y, 1, 1, j % 4 === 3 ? c : band); // the central rib
            }
            const ak = Math.max(2, hw - 1);
            box(dx - 1, gTop + 1, 3, 1, Sh); // the neck
            box(dx - ak, gTop + 3, 2 * ak + 1, 2, c); // the amalaka
            for (let p = -ak; p <= ak; p += 2) box(dx + p, gTop + 2, 1, 1, Sh);
            box(dx - ak, gTop + 3, 2 * ak + 1, 1, W);
            box(dx - 1, gTop + 5, 3, 2, 12); // the kalasha
            box(dx, gTop + 6, 1, 1, 3);
            box(dx, gTop + 9, 1, 3, 8); // the chakra and the flag
            box(dx - 1, gTop + 9, 3, 1, 8);
            box(dx, gTop + 13, 1, 4, 8);
            box(dx + 1, gTop + 13, 3, 2, o.flag ?? 5);
            // the jagamohana and the bhoga mandapa
            const hall = (cx, hhw, wallH, n) => {
              box(cx - hhw, b0 + wallH, 2 * hhw + 1, wallH, c);
              box(cx + hhw, b0 + wallH, 1, wallH, Sh);
              box(cx - 1, b0 + Math.min(wallH - 1, 5), 3, Math.min(wallH - 1, 5), 2);
              let y = b0 + wallH;
              for (let i = 0; i < n; i++) {
                const k = hhw + 1 - i;
                box(cx - k, y + 1, 2 * k + 1, 1, band);
                box(cx - k + 1, y + 2, 2 * k - 1, 1, c);
                box(cx + k - 1, y + 2, 1, 1, Sh);
                y += 2;
              }
              dome(cx, y, Math.max(1, hhw - n), c);
              box(cx, y + Math.max(1, hhw - n) + 2, 1, 2, 12);
            };
            if (o.hall) hall(jx - 10, 4, Math.round(bada * 0.7), Math.max(2, tiers - 1));
            hall(jx, 5, bada, tiers);
            break;
          }
          case "azDistrictMosque": {
            // The Juma mosques of Azerbaijan's district towns, each set to its own building (agdas-az, gazakh-az,
            // ujar-az and the other azerbaijani district rows of the dup pass use it). A hall of o.w x o.nh cells
            // in o.c with o.win windows ("arch", "tall" or "grid"), an optional front arcade of o.arc arches, and
            // o.roof: "dome" (a drum and a dome of radius o.r), "domes" (a big dome between two small ones),
            // "hipped" (the tin hip roof of the 19th-century village mosques, with a lantern if o.lantern) or
            // "flat" (a parapet). o.dc the roof colour (a palette index or css). Minarets: o.m 0, 1 (right) or 2,
            // o.mh tall, o.ms "pencil" (slim, two balconies, a cone), "azeri" (a thick brick shaft, a stalactite
            // balcony and a small domed lantern, as in Shamakhi) or "square" (a square tower with an open
            // belfry-like top and a pyramid cap); o.apart puts a single minaret on its own, right of the hall.
            const w = o.w ?? 17,
              nh = o.nh ?? 8,
              hw = Math.floor(w / 2),
              roof = o.roof ?? "dome",
              r = o.r ?? 5,
              dc = o.dc ?? 9,
              m = o.m ?? 1,
              mh = o.mh ?? 22,
              ms = o.ms ?? "pencil",
              tr = o.t ?? 3,
              mw = o.mw ?? 3,
              rgb = (col) => (typeof col === "number" ? colors[col] : col),
              tone = (col, k, to = [41, 40, 54]) => css(e.sh(mixc(rgb(col), to, k))),
              C = typeof c === "number" ? c : css(e.sh(c)),
              cc = typeof c === "number" ? colors[c] : c,
              D = tone(cc, 0.2),
              S = tone(cc, 0.32),
              Lt = tone(cc, 0.3, [255, 248, 225]),
              mcc = o.mc ?? cc,
              MC = css(e.sh(mcc)),
              MD = tone(mcc, 0.2),
              MS = tone(mcc, 0.32),
              MLt = tone(mcc, 0.3, [255, 248, 225]),
              R = typeof dc === "number" ? dc : css(e.sh(dc)),
              RS = tone(rgb(dc), 0.3),
              RL = tone(rgb(dc), 0.35, [255, 248, 225]),
              mdc = o.mdc ?? dc,
              MR = typeof mdc === "number" ? mdc : css(e.sh(mdc)),
              MRS = tone(rgb(mdc), 0.3);
            const minaret = (x0, top) => {
              if (ms === "azeri") {
                const a = Math.floor(mw / 2);
                box(x0 - a, top - 6, mw, top - 6, MC);
                box(x0 - a, top - 6, 1, top - 6, MLt);
                box(x0 + a, top - 6, 1, top - 6, MS);
                for (let y = 5; y < top - 8; y += 3) box(x0 - a, y, mw, 1, MD); // brick courses
                box(x0 - a - 1, top - 5, mw + 2, 2, MLt); // the stalactite balcony
                for (let p = -a - 1; p <= a + 1; p += 2) box(x0 + p, top - 7, 1, 1, MS);
                box(x0 - a, top - 1, mw, 4, MC); // the open lantern
                if (mw >= 3) box(x0 - a + 1, top - 1, mw - 2, 3, 2);
                box(x0 - a - 1, top - 4, mw + 2, 1, tr);
                dome(x0, top - 1, a + 1, MRS);
                dome(x0, top - 1, a, MR);
                box(x0, top + a + 2, 1, 2, 3);
              } else if (ms === "square") {
                box(x0 - 2, top - 4, 5, top - 4, MC);
                box(x0 - 2, top - 4, 1, top - 4, MLt);
                box(x0 + 2, top - 4, 1, top - 4, MS);
                for (let y = 7; y < top - 6; y += 5) box(x0, y, 1, 2, 2);
                box(x0 - 3, top - 4, 7, 1, tr);
                box(x0 - 2, top, 5, 4, MC);
                box(x0 - 1, top - 1, 3, 2, 2); // the open top
                box(x0 - 3, top, 7, 1, MLt);
                cone(x0, top, 3, 4, MR);
                box(x0, top + 6, 1, 2, 3);
              } else {
                box(x0 - 2, 6, 5, 6, MC);
                box(x0 - 1, top, 3, top - 3, MC);
                box(x0 - 1, top, 1, top - 3, MLt);
                box(x0 + 1, top, 1, top - 3, MS);
                box(x0 - 2, Math.round(top * 0.62), 5, 1, tr);
                box(x0 - 2, top - 1, 5, 1, tr);
                box(x0, Math.round(top * 0.62) + 4, 1, 2, 2);
                cone(x0, top, 1, 5, MR);
                box(x0, top + 8, 1, 2, 3);
              }
            };
            const mx = o.apart ? hw + 5 : hw + (ms === "pencil" ? 1 : 2);
            if (m >= 1) minaret((o.side ?? 1) * mx, mh);
            if (m >= 2) minaret(-mx, o.mh2 ?? mh);
            box(-hw - 1, 2, w + 2, 2, D); // the steps
            box(-hw, nh + 2, w, nh, C);
            box(-hw, nh + 2, 1, nh, Lt);
            box(hw, nh + 2, 1, nh, S);
            const win = o.win ?? "arch";
            if (win === "grid")
              for (let p = -hw + 2; p <= hw - 2; p += 2) {
                box(p, nh, 1, 2, 2);
                box(p, nh - 4, 1, 2, 2);
              }
            else
              for (let p = -hw + 2; p <= hw - 3; p += win === "tall" ? 2 : 3) {
                if (win === "tall") box(p, nh, 1, nh - 3, 2);
                else {
                  box(p, nh - 1, 2, nh - 4, 2);
                  box(p, nh - 1, 2, 1, Lt);
                }
              }
            box(-hw - 1, nh + 2, w + 2, 1, tr); // the cornice
            if (roof === "dome" || roof === "domes") {
              if (roof === "domes")
                for (const s of [-1, 1]) {
                  const k = Math.max(2, r - 2),
                    sx = s * (hw - k);
                  box(sx - k, nh + 4, 2 * k + 1, 2, C);
                  dome(sx, nh + 4, k, RS);
                  dome(sx - 1, nh + 4, k - 1, R);
                  box(sx, nh + 4 + k + 2, 1, 2, 3);
                }
              box(-r, nh + 6, 2 * r + 1, 4, C); // the drum
              box(-r, nh + 6, 1, 4, Lt);
              box(r, nh + 6, 1, 4, S);
              for (let p = -r + 1; p < r; p += 2) box(p, nh + 5, 1, 2, 2);
              dome(0, nh + 6, r, RS);
              dome(-1, nh + 6, r - 1, R);
              box(-Math.ceil(r / 2), nh + 6 + Math.round(r * 0.6), 1, 1, RL);
              box(0, nh + 6 + r + 3, 1, 3, 3);
              box(1, nh + 6 + r + 5, 1, 1, 3); // the crescent
            } else if (roof === "row") {
              const n = o.n ?? 3,
                step = Math.floor((w - 2) / n);
              for (let i = 0; i < n; i++) {
                const cx = -hw + 1 + Math.floor(step / 2) + i * step;
                dome(cx, nh + 2, r, RS);
                dome(cx - 1, nh + 2, r - 1, R);
              }
              box(-hw - 1, nh + 3, w + 2, 1, Lt);
            } else if (roof === "hipped") {
              const rh = Math.ceil(hw / 2);
              for (let j = 0; j < rh; j++) {
                const k = hw + 1 - 2 * j;
                box(-k, nh + 3 + j, 2 * k + 1, 1, j % 2 ? RS : R);
                box(k - 1, nh + 3 + j, 2, 1, RS);
              }
              if (o.lantern) {
                box(-2, nh + rh + 5, 5, 3, C);
                box(-1, nh + rh + 4, 3, 1, 2);
                for (let j = 0; j < 3; j++) box(-3 + j, nh + rh + 6 + j, 7 - 2 * j, 1, R);
                box(0, nh + rh + 9, 1, 2, 3);
              }
            } else {
              box(-hw - 1, nh + 4, w + 2, 2, C);
              for (let p = -hw - 1; p <= hw + 1; p += 2) box(p, nh + 5, 1, 1, Lt);
            }
            const arc = o.arc ?? 0;
            if (arc > 0) {
              const aw = arc * 3 + 1,
                ah = Math.max(4, nh - 2),
                al = -Math.floor(aw / 2);
              box(al - 1, ah + 2, aw + 2, ah, Lt);
              box(al - 1, ah + 2, aw + 2, 1, tr);
              for (let i = 0; i < arc; i++) {
                box(al + 1 + i * 3, ah - 1, 2, ah - 3, 2);
                box(al + 1 + i * 3, ah - 1, 2, 1, S);
              }
            } else if (o.gallery) {
              // a wooden gallery along the front, its eave board cut in waves (Barda)
              const G = css(e.sh(o.gallery)),
                GS = tone(o.gallery, 0.35);
              box(-hw - 1, nh + 1, w + 2, 2, G);
              for (let p = -hw - 1; p <= hw + 1; p += 2) box(p, nh + 2, 1, 1, Lt);
              box(-hw - 1, nh - 1, w + 2, 1, GS);
              for (let p = -hw; p <= hw; p += 4) box(p, nh - 1, 1, nh - 3, G);
              box(-1, 6, 2, 4, 2);
            } else {
              box(-2, nh + 3, 5, nh + 1, Lt); // the portal
              box(-1, nh, 3, nh - 2, D);
              box(-1, Math.round(nh * 0.6), 3, Math.round(nh * 0.6) - 2, 2);
            }
            break;
          }
          case "kursunluMugla": {
            // Muğla's Kurşunlu Camii (15th century, "the leaded one"): a low cream hall under a broad lead dome
            // on a short drum, a glazed later porch along the front with tall arched windows between pilasters
            // under a lead roof, and a slim stone minaret behind on the right with one balcony and a lead cone.
            const wl = [226, 214, 172],
              ld = [168, 176, 184],
              B = css(e.sh(wl)),
              S = css(e.sh(mixc(wl, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(wl, [255, 248, 225], 0.45))),
              st = [176, 160, 128],
              M = css(e.sh(st)),
              MS = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              L = css(e.sh(ld)),
              LS = css(e.sh(mixc(ld, [41, 40, 54], 0.3))),
              LL = css(e.sh(mixc(ld, [255, 248, 225], 0.4)));
            // the minaret
            box(5, 22, 3, 14, M);
            box(7, 22, 1, 14, MS);
            box(4, 22, 5, 1, LL); // the balcony
            box(4, 21, 5, 1, MS);
            box(5, 26, 3, 4, Lt);
            box(7, 26, 1, 4, S);
            box(6, 24, 1, 1, 2);
            cone(6, 26, 1, 6, L);
            box(6, 34, 1, 2, 8);
            // the dome on its drum
            box(-8, 13, 15, 2, Lt);
            box(-7, 15, 13, 2, B);
            box(5, 15, 1, 2, S);
            dome(-1, 15, 7, LS);
            dome(-2, 15, 6, L);
            box(-5, 19, 1, 1, LL);
            box(-1, 23, 1, 2, 12);
            box(-1, 25, 1, 2, 8);
            // the hall behind and the glazed porch
            box(-10, 12, 22, 8, B);
            box(11, 12, 1, 8, S);
            box(-11, 13, 24, 1, LL);
            box(-11, 12, 24, 1, LS); // the porch's lead roof
            box(-11, 11, 24, 10, B);
            box(-11, 11, 24, 1, Lt);
            for (const p of [-11, -6, -1, 4, 9, 12]) box(p, 10, 1, 9, Lt); // pilasters
            for (const p of [-9, -4, 1, 6]) {
              box(p, 9, 3, 6, 2);
              box(p + 1, 9, 1, 6, LS); // the glazing bars
              box(p, 9, 3, 1, Lt);
            }
            box(-12, 2, 26, 2, S);
            break;
          }
          case "erzincanUlu": {
            // Erzincan's Ulu Camii, rebuilt after the 1939 earthquake in the classical Ottoman manner: a cream
            // stone cube whose lead domes cascade (corner domelets and half domes up to the central dome on its
            // buttressed, windowed drum), a five-domed portico across the front, and two slim pencil minarets
            // at the front corners, each with two balconies and a lead cone.
            const st = [232, 222, 196],
              ld = [150, 160, 172],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.26))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.45))),
              L = css(e.sh(ld)),
              LS = css(e.sh(mixc(ld, [41, 40, 54], 0.3))),
              LL = css(e.sh(mixc(ld, [255, 248, 225], 0.35))),
              leadDome = (cx, cy, r) => {
                dome(cx, cy, r, LS);
                dome(cx - 1, cy, r - 1, L);
                if (r >= 3) box(cx - Math.ceil(r / 2), cy + Math.round(r * 0.55), 1, 1, LL);
              };
            for (const x0 of [-14, 14]) {
              box(x0 - 1, 33, 3, 31, B);
              box(x0 - 1, 33, 1, 31, Lt);
              box(x0 + 1, 33, 1, 31, S);
              for (const y of [22, 30]) {
                box(x0 - 2, y, 5, 1, Lt);
                box(x0 - 2, y - 1, 5, 1, S);
              }
              cone(x0, 33, 1, 7, L);
              box(x0, 42, 1, 2, 12);
            }
            box(-11, 16, 23, 14, B);
            box(10, 16, 2, 14, S);
            for (const s of [-1, 1]) {
              box(s * 8 - 2, 18, 5, 2, B);
              leadDome(s * 8, 18, 3);
              leadDome(s * 4, 20, 4);
            }
            box(-6, 25, 13, 5, B);
            box(-6, 25, 13, 1, Lt);
            box(6, 24, 1, 4, S);
            for (let p = -5; p <= 5; p += 2) box(p, 23, 1, 2, 2);
            for (const p of [-7, 7]) box(p, 24, 1, 4, Lt); // buttress turrets
            leadDome(0, 25, 6);
            box(0, 33, 1, 2, 12);
            box(-1, 32, 3, 1, 12);
            for (let p = -9; p <= 8; p += 3) box(p, 14, 2, 3, 2); // upper windows
            // the portico
            box(-12, 9, 25, 9, Lt);
            box(-12, 10, 25, 1, LS);
            for (let i = 0; i < 5; i++) {
              const cx = -10 + i * 5;
              dome(cx, 10, 2, LS);
              dome(cx, 10, 1, L);
              box(cx - 1, 7, 3, 6, 2);
              box(cx - 1, 7, 3, 1, S);
            }
            box(-13, 1, 27, 1, S);
            break;
          }
          case "baiaMareTrinity": {
            // Baia Mare's Holy Trinity Cathedral (being built since the 2000s, Romania's second largest): a
            // neo-Byzantine cross of cream stone banded in brick, round-arched gables and windows, a columned
            // porch, two front towers and the big central tower, each a windowed drum under a gilded dome with a
            // lantern and a cross. Drawn without a photo.
            const st = [230, 220, 198],
              gd = [220, 170, 70],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.26))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.45))),
              Br = css(e.sh([176, 98, 72])),
              G = css(e.sh(gd)),
              GS = css(e.sh(mixc(gd, [41, 40, 54], 0.3))),
              GL = css(e.sh(mixc(gd, [255, 248, 225], 0.45))),
              tower = (cx, base, hw, h, r) => {
                box(cx - hw, base + h, 2 * hw + 1, h, B);
                box(cx + hw, base + h, 1, h, S);
                box(cx - hw, base + 2, 2 * hw + 1, 1, Br);
                box(cx - hw - 1, base + h, 2 * hw + 3, 1, Lt);
                for (let p = cx - hw + 1; p < cx + hw; p += 2) box(p, base + h - 2, 1, Math.min(4, h - 4), 2);
                dome(cx, base + h, r, GS);
                dome(cx - 1, base + h, r - 1, G);
                box(cx - Math.ceil(r / 2), base + h + Math.round(r * 0.6), 1, 1, GL);
                const top = base + h + r;
                box(cx - 1, top + 2, 3, 2, B);
                dome(cx, top + 2, 1, G);
                box(cx, top + 7, 1, 4, 12);
                box(cx - 1, top + 6, 3, 1, 12);
              };
            box(-13, 15, 27, 15, B);
            box(12, 15, 2, 15, S);
            for (const y of [5, 10]) box(-13, y, 27, 1, Br); // the brick bands
            for (const cx of [-9, 9]) {
              dome(cx, 15, 3, Lt);
              dome(cx, 15, 2, B);
              box(cx, 16, 1, 1, 2);
            }
            dome(0, 15, 6, Lt);
            dome(0, 15, 5, B);
            orb(0, 17, 1, 2); // the rose window
            for (const p of [-11, -7, 6, 10]) {
              box(p, 13, 2, 4, 2);
              box(p, 13, 2, 1, Lt);
            }
            // the porch
            box(-5, 10, 11, 10, Lt);
            dome(0, 10, 5, Lt);
            for (const p of [-4, -1, 2]) box(p, 8, 2, 7, 2);
            box(-1, 8, 3, 1, Br);
            box(-14, 1, 29, 1, S);
            tower(-10, 15, 2, 7, 3);
            tower(10, 15, 2, 7, 3);
            tower(0, 21, 4, 9, 5);
            break;
          }
