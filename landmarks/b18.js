          case "ottomanClock": {
            // A late-Ottoman stone clock tower (Tokat, Yozgat, Niğde): a plinth, a tall square shaft banded by
            // string courses with little slit windows, a balcony on corbels, the clock storey with a white face
            // on each side, a cornice and o.top "lantern" (an open lantern under a little dome and spike, Tokat
            // and Niğde) or "dome" (a lead dome, Yozgat). o.h is the height to the cornice, o.c the stone, o.wall
            // stands it on a stretch of castle wall that many cells tall (Niğde). Reused by three cities.
            const h = o.h ?? 22,
              wall = o.wall ?? 0,
              st = colors[o.c ?? 13],
              tn = (k) => css(e.sh(mixc(st, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              B = tn(0),
              S = tn(-0.3),
              D = tn(-0.15),
              Lt = tn(0.3),
              lead = css(e.sh([128, 136, 150]));
            if (wall) {
              box(-4, wall, 9, wall, D); // the castle wall under the tower
              box(3, wall, 2, wall, S);
              for (let p = -4; p <= 4; p += 2) box(p, wall + 1, 1, 1, D);
              for (let y = 2; y < wall; y += 2) box(-4 + (y % 4), y, 2, 1, S); // stone courses
            }
            const b = wall;
            box(-3, b + 3, 7, 3, D); // the plinth
            box(3, b + 3, 1, 3, S);
            box(-1, b + 2, 1, 2, 2); // its door
            box(-2, b + h - 7, 5, h - 10, B); // the shaft
            box(-2, b + h - 7, 1, h - 10, Lt);
            box(2, b + h - 7, 1, h - 10, S);
            for (let y = b + 8; y < b + h - 8; y += 5) {
              box(-2, y, 5, 1, D); // string courses
              box(0, y - 2, 1, 2, 2); // slit windows
            }
            box(-3, b + h - 6, 7, 1, Lt); // the balcony and the shadow of its corbels
            box(-2, b + h - 7, 5, 1, S);
            for (const p of [-3, -1, 1, 3]) box(p, b + h - 5, 1, 1, D); // its railing
            box(-2, b + h - 1, 5, 5, B); // the clock storey
            box(2, b + h - 1, 1, 5, S);
            orb(0, b + h - 3, 1.3, 6);
            box(0, b + h - 2, 1, 1, 2); // the hands
            box(-3, b + h, 7, 1, Lt); // the cornice
            if ((o.top ?? "lantern") === "dome") {
              box(-1, b + h + 1, 3, 1, D);
              dome(0, b + h + 1, 2, lead);
              box(0, b + h + 5, 1, 2, 3);
            } else {
              box(-1, b + h + 3, 3, 3, B); // the lantern and its open arch
              box(0, b + h + 2, 1, 2, 2);
              dome(0, b + h + 3, 1.5, B);
              box(0, b + h + 6, 1, 3, 3); // the spike
            }
            break;
          }
          case "rockCastle": {
            // A citadel on a crag (Tokat, Van, Urfa): a rock ridge whose summit line is o.prof (heights at
            // evenly spaced points across o.w), lit on the slopes that rise from the left and shaded where they
            // fall, with strata and scrub; along the top, from o.from to o.to (fractions of the width), stepped
            // curtain walls with merlons, and o.towers [[fraction, height], ...] square towers with slits.
            // o.c the rock, o.wc the walls (palette), o.flag a Turkish flag on the highest tower. Reused by three cities.
            const w = o.w ?? 33,
              hw = Math.floor(w / 2),
              prof = o.prof ?? [3, 9, 14, 15, 12, 10, 11, 7, 3],
              rock = colors[o.c ?? 0],
              wl = colors[o.wc ?? o.c ?? 0],
              tn = (rgb, k) => css(e.sh(mixc(rgb, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              R = tn(rock, 0),
              RS = tn(rock, -0.32),
              RD = tn(rock, -0.18),
              RL = tn(rock, 0.25),
              W = tn(wl, 0.08),
              WS = tn(wl, -0.25),
              scrub = css(e.sh([104, 128, 72]));
            const top = (x) => {
              const f = ((x + hw) / (w - 1)) * (prof.length - 1),
                i = Math.min(prof.length - 2, Math.floor(f));
              return Math.round(prof[i] + (prof[i + 1] - prof[i]) * (f - i));
            };
            for (let x = -hw; x <= hw; x++) {
              const tp = top(x),
                d = top(x + 1) - tp,
                u = tp - top(x - 1);
              box(x, tp, 1, tp, R);
              if (d < 0 && u <= 0)
                box(x, tp, 1, tp, RS); // the falling, shaded flank
              else if (u > 0) box(x, tp, 1, Math.min(tp, 3), RL); // the lit lip of a rising slope
              for (let y = 2 + ((((x * 3) % 4) + 4) % 4); y < tp - 1; y += 4)
                if ((x + y) % 3) box(x, y, 1, 1, RD); // strata
              if ((x * 7) % 5 === 0 && tp > 4) box(x, Math.round(tp * 0.45), 1, 1, scrub);
            }
            const x0 = Math.round(-hw + (o.from ?? 0.15) * (w - 1)),
              x1 = Math.round(-hw + (o.to ?? 0.85) * (w - 1));
            for (let x = x0; x <= x1; x++) {
              const tp = top(x);
              box(x, tp + 3, 1, 3, W); // the wall stepping along the ridge
              if (x % 2 === 0) box(x, tp + 4, 1, 1, W); // merlons
              if (x === x1 || top(x + 1) < tp - 1) box(x, tp + 3, 1, 3, WS);
            }
            let hi = null;
            for (const [f, th] of o.towers ?? [
              [0.3, 7],
              [0.55, 6],
            ]) {
              const tx = Math.round(-hw + f * (w - 1)),
                b = Math.min(top(tx - 1), top(tx), top(tx + 1), top(tx + 2));
              box(tx - 1, b + th, 4, th, W);
              box(tx + 2, b + th, 1, th, WS);
              for (const p of [-1, 1]) box(tx + p, b + th + 1, 1, 1, W);
              box(tx + 2, b + th + 1, 1, 1, WS);
              box(tx, b + th - 2, 1, 2, 2); // an arrow slit
              if (!hi || b + th > hi[1]) hi = [tx, b + th];
            }
            if (o.flag && hi) {
              box(hi[0], hi[1] + 5, 1, 4, 8); // the flagpole and the red flag with its white crescent
              box(hi[0] + 1, hi[1] + 5, 3, 2, 10);
              box(hi[0] + 2, hi[1] + 4, 1, 1, 6);
            }
            break;
          }
          case "fairyChimneys": {
            // Cappadocia's fairy chimneys (Göreme): cones of pale tuff on a rolling bed of rock, each under a
            // dark basalt cap, the bigger ones with cave doors and windows cut into them, and a hot-air balloon
            // rising over the valley. o.w wide, o.h tall (the tallest chimney), o.chimneys of them.
            const w = o.w ?? 34,
              h = o.h ?? 24,
              hw = Math.floor(w / 2),
              n = o.chimneys ?? 6,
              tuff = [226, 196, 160],
              tn = (rgb, k) => css(e.sh(mixc(rgb, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              T = tn(tuff, 0),
              TS = tn(tuff, -0.25),
              TL = tn(tuff, 0.35),
              cap = tn([122, 96, 84], 0),
              capS = tn([122, 96, 84], -0.3);
            box(-hw, 3, w, 3, T); // the rolling bed of tuff
            box(-hw, 3, w, 1, TL);
            box(hw - 3, 3, 4, 3, TS);
            const hts = [0.62, 0.85, 1, 0.7, 0.9, 0.55, 0.78, 0.66];
            for (let i = 0; i < n; i++) {
              const cx = Math.round(-hw + 3 + (i * (w - 7)) / Math.max(1, n - 1)),
                th = Math.round(h * hts[i % hts.length]) - 3,
                r = th > h * 0.7 ? 2 : 1;
              if (i === n - 2 && n > 3) continue; // a gap where the balloon floats
              cone(cx, 2, r + 1, th - 2, T); // the tuff cone narrowing to a neck
              for (let y = 4; y < th - 1; y++)
                box(cx + Math.round((r + 1) * (1 - (y - 2) / (th - 2))), y, 1, 1, TS);
              box(cx - r + 1, Math.round(th * 0.4), 1, Math.round(th * 0.25), TL);
              box(cx - 2, th + 2, 5, 2, cap); // the basalt cap
              box(cx - 1, th + 3, 3, 1, cap);
              box(cx + 2, th + 1, 1, 1, capS);
              if (th > 12) {
                box(cx, 6, 1, 3, 2); // a cave door and windows
                box(cx - 1, Math.round(th * 0.6), 1, 1, 2);
                box(cx + 1, Math.round(th * 0.45), 1, 1, 2);
              }
            }
            if (n > 3) {
              // The balloon over the gap: striped envelope, ropes and a wicker basket.
              const bx = Math.round(-hw + 3 + ((n - 2) * (w - 7)) / (n - 1)),
                by = h - 3;
              orb(bx, by, 3, 10);
              box(bx - 1, by + 3, 3, 6, 12);
              box(bx - 3, by, 1, 1, tn([204, 52, 50], -0.3));
              cone(bx, by - 5, 2, 2, 10);
              box(bx - 1, by - 4, 1, 2, 2);
              box(bx + 1, by - 4, 1, 2, 2);
              box(bx - 1, by - 6, 3, 2, tn([150, 100, 60], 0));
            }
            break;
          }
          case "boztepe": {
            // Boztepe (Ordu): the wooded hill over the town, dark trees on its flanks, the cable car's line
            // climbing from the shore to a terrace with a pavilion on the summit, two cabins on the cable.
            const w = o.w ?? 40,
              h = o.h ?? 22,
              hw = Math.floor(w / 2),
              G = css(e.sh([92, 150, 84])),
              GS = css(e.sh([62, 108, 66])),
              GL = css(e.sh([132, 180, 104])),
              tree = css(e.sh([48, 88, 56]));
            const top = (x) =>
              Math.max(2, Math.round(h - 2 - (Math.abs(x - 3) ** 1.6 * (h - 3)) / (hw + 3) ** 1.6));
            for (let x = -hw; x <= hw; x++) {
              const tp = top(x);
              box(x, tp, 1, tp, x > 3 ? GS : G);
              if (x <= 3) box(x, tp, 1, 1, GL);
            }
            for (const [p, f] of [
              [-14, 0.4],
              [-9, 0.55],
              [-4, 0.5],
              [8, 0.6],
              [12, 0.45],
              [15, 0.3],
              [-11, 0.25],
              [5, 0.3],
            ])
              orb(p, Math.round(top(p) * f), 1.5, tree);
            box(0, h + 1, 7, 3, 6); // the summit pavilion with its windows and flat roof
            box(5, h + 1, 2, 3, 13);
            for (const p of [1, 3]) box(p, h, 1, 1, 11);
            box(-1, h + 2, 9, 1, 10);
            const sx = -hw + 1;
            stroke(sx, 3, 1, h - 1, 2); // the cable from the shore station to the top
            box(sx - 1, 4, 3, 3, 13);
            for (const f of [0.35, 0.7]) {
              const gx = Math.round(sx + (1 - sx) * f),
                gy = Math.round(3 + (h - 4) * f);
              box(gx, gy, 1, 1, 2);
              box(gx - 1, gy - 1, 3, 2, 10); // a red cabin hanging from it
            }
            break;
          }
          case "hallMosque": {
            // A late-Ottoman hall mosque without a dome (Samsun's Büyük Cami): a cut-stone hall on steps under
            // a hipped lead roof, corner pilasters, a row of tall round-arched windows with white glazing bars,
            // and a stone minaret with one balcony and a pencil cap. o.w wide, o.nh the hall, o.mh the minaret.
            const w = o.w ?? 19,
              nh = o.nh ?? 10,
              mh = o.mh ?? 26,
              hw = Math.floor(w / 2),
              st = colors[o.c ?? 13],
              tn = (k) => css(e.sh(mixc(st, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              B = tn(0),
              S = tn(-0.28),
              Lt = tn(0.3),
              lead = css(e.sh([128, 136, 150])),
              leadS = css(e.sh([100, 106, 120]));
            box(-hw - 1, 2, w + 2, 2, S); // the steps
            box(-hw, nh, w, nh - 2, B);
            for (const p of [-hw, hw]) box(p, nh, 1, nh - 2, Lt); // corner pilasters
            box(hw, nh, 1, nh - 2, S);
            for (let p = -hw + 2; p + 2 < hw; p += 4) {
              box(p, nh - 3, 3, nh - 6, 2); // a tall arched window
              box(p, nh - 2, 3, 1, B);
              box(p + 1, nh - 2, 1, 1, 2);
              box(p + 1, nh - 3, 1, nh - 6, 6); // its glazing bar
            }
            box(-hw - 1, nh + 1, w + 2, 1, Lt); // the cornice
            for (let j = 0; j < 3; j++) box(-hw + j * 2, nh + 2 + j, w - j * 4, 1, j ? lead : leadS); // the hipped roof
            const p = hw + 2; // the minaret
            box(p - 2, 4, 5, 4, B);
            box(p - 1, mh, 3, mh - 4, B);
            box(p + 1, mh, 1, mh - 4, S);
            box(p - 2, Math.round(mh * 0.78), 5, 1, Lt);
            box(p - 1, Math.round(mh * 0.78) - 1, 3, 1, S);
            for (let i = 9; i < mh * 0.6; i += 6) box(p, i, 1, 2, 2);
            cone(p, mh, 1, 5, lead);
            box(p, mh + 7, 1, 2, 3);
            break;
          }
          case "siirtMosque": {
            // Siirt's Great Mosque: a whitewashed hall with a big lead dome and a smaller one, and its famous
            // Seljuk minaret, a stout brick cylinder patterned with diamond brickwork and bands of turquoise
            // tile on a tiled square base, ending in a flared rim. o.w the hall, o.mh the minaret.
            const w = o.w ?? 17,
              nh = o.nh ?? 8,
              mh = o.mh ?? 30,
              hw = Math.floor(w / 2),
              white = css(e.sh([236, 232, 222])),
              whiteS = css(e.sh([196, 190, 182])),
              lead = css(e.sh([150, 156, 168])),
              leadL = css(e.sh([190, 196, 206])),
              brick = [176, 110, 78],
              Br = css(e.sh(brick)),
              BrS = css(e.sh(mixc(brick, [41, 40, 54], 0.3))),
              BrD = css(e.sh(mixc(brick, [41, 40, 54], 0.16))),
              tile = css(e.sh([70, 150, 170])),
              tileD = css(e.sh([40, 92, 128]));
            const hx = -3; // the hall stands left of the minaret
            box(hx - hw, nh, w, nh, white);
            box(hx + hw, nh, 1, nh, whiteS);
            box(hx - hw, 1, w, 1, whiteS);
            for (let p = hx - hw + 2; p < hx + hw - 1; p += 4) box(p, 5, 1, 3, 2); // small windows
            box(hx - 1, 4, 3, 4, 2); // the door
            box(hx - 4, nh + 2, 9, 2, white); // the drum
            dome(hx, nh + 2, 5, lead);
            for (let dy = 2; dy < 5; dy++)
              box(hx - Math.round(Math.sqrt(25 - dy * dy)) + 1, nh + 2 + dy, 1, 1, leadL);
            box(hx, nh + 9, 1, 2, 3);
            dome(hx - 7, nh, 3, lead);
            box(hx - 7, nh + 5, 1, 1, 3);
            const p = hx + hw + 5; // the minaret on its tiled base
            box(p - 3, 9, 7, 9, Br);
            for (let y = 2; y < 9; y += 2)
              for (let q = -3; q <= 3; q += 2) box(p + q + ((y / 2) % 2), y, 1, 1, tile);
            box(p - 3, 10, 7, 1, BrD);
            box(p - 2, mh - 2, 5, mh - 12, Br);
            box(p + 2, mh - 2, 1, mh - 12, BrS);
            for (let y = 12; y < mh - 3; y++)
              for (let q = -2; q <= 1; q++) if ((q + y) % 3 === 0) box(p + q, y, 1, 1, BrD); // the diamond brickwork
            for (const y of [Math.round(mh * 0.55), Math.round(mh * 0.7)]) {
              box(p - 2, y, 5, 2, tile); // bands of turquoise tile
              box(p + 2, y, 1, 2, tileD);
            }
            box(p - 3, mh, 7, 2, Br); // the flared rim
            box(p + 3, mh, 1, 2, BrS);
            for (const q of [-3, -1, 1, 3]) box(p + q, mh - 2, 1, 1, 2); // its openings
            break;
          }
          case "gokMedrese": {
            // The Gök Medrese (Sivas, 1271): a long cut-stone front with a tall carved portal, its pointed
            // muqarnas niche framed by bands of relief, and on the portal's corners two fluted brick minarets
            // glazed with turquoise lozenges, each with a flared balcony, a short upper shaft and a pointed cap.
            const w = o.w ?? 23,
              hw = Math.floor(w / 2),
              st = [214, 196, 168],
              tn = (rgb, k) => css(e.sh(mixc(rgb, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              B = tn(st, 0),
              S = tn(st, -0.28),
              D = tn(st, -0.14),
              Lt = tn(st, 0.3),
              brick = [168, 98, 70],
              Br = tn(brick, 0),
              BrS = tn(brick, -0.3),
              tile = css(e.sh([56, 150, 176])),
              tileD = css(e.sh([36, 98, 140]));
            const nh = 10,
              ph = o.ph ?? 16,
              pw = 6,
              mh = o.mh ?? 36;
            box(-hw, nh, w, nh, B); // the front, with a plinth and its few small windows
            box(-hw, 2, w, 2, D);
            box(hw - 1, nh, 1, nh, S);
            for (const s of [-1, 1]) {
              box(s * (hw - 3) - 1, 7, 2, 3, 2);
              box(s * (hw - 3) - 1, 8, 2, 1, D);
            }
            box(-pw, ph, 2 * pw + 1, ph, B); // the portal block
            box(pw, ph, 1, ph, S);
            box(-pw + 1, ph - 1, 2 * pw - 1, 1, Lt); // frames of carved relief
            for (const s of [-1, 1]) box(s * (pw - 1), ph - 1, 1, ph - 3, D);
            box(-3, ph - 3, 7, ph - 4, Lt);
            for (let j = 0; j < 3; j++) box(-2 + j, ph - 4 - j, 5 - 2 * j, 1, D); // the muqarnas hood
            box(-2, ph - 7, 5, ph - 8, D);
            for (let y = 6; y < ph - 7; y += 2) box(-2, y, 5, 1, S); // stalactite tiers
            box(-1, 5, 3, 5, 2); // the door
            for (let q = -pw + 2; q <= pw - 2; q += 2) box(q, ph + 1, 1, 1, Lt); // the portal's crest of merlons
            const lead = css(e.sh([130, 136, 146]));
            for (const s of [-1, 1]) {
              const p = s * pw; // a minaret on each front corner of the portal
              box(p - 1, ph + 4, 3, 4, B); // a tiled panel at its foot
              box(p, ph + 2, 1, 2, tile);
              box(p - 1, mh - 6, 3, mh - 6 - ph - 4, Br); // the lower shaft, its lozenges glazed in turquoise
              box(p + 1, mh - 6, 1, mh - 6 - ph - 4, BrS);
              for (let y = ph + 5; y < mh - 7; y++) if ((y + p) % 3 === 0) box(p, y, 1, 1, tile);
              box(p - 1, mh - 6, 3, 1, tile);
              box(p - 2, mh - 3, 5, 3, Br); // the flared balcony on its corbels
              box(p - 2, mh - 3, 5, 1, tn(brick, 0.25));
              box(p + 2, mh - 3, 1, 3, BrS);
              box(p - 1, mh, 3, 3, tn(brick, 0.15)); // the short upper shaft
              box(p + 1, mh, 1, 3, BrS);
              cone(p, mh, 1, 4, lead); // the pointed cap
              box(p, mh + 6, 1, 1, 2);
              box(p, mh - 9, 1, 1, tileD);
            }
            break;
          }
          case "trabzonSophia": {
            // Hagia Sophia of Trabzon (13th c.): a Byzantine cross-in-square church of honey sandstone, its
            // twelve-sided drum (an arched window in each face) under a tiled dome, gabled arms with red tile
            // roofs, the triple porch with its big arch in front, the three apses at the east end, and the
            // square bell tower standing apart on the left under a pyramid roof.
            const st = [214, 184, 140],
              tn = (rgb, k) => css(e.sh(mixc(rgb, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              B = tn(st, 0),
              S = tn(st, -0.28),
              D = tn(st, -0.14),
              Lt = tn(st, 0.3),
              tile = tn([186, 96, 70], 0),
              tileS = tn([186, 96, 70], -0.3);
            // The bell tower, on the left
            box(-11, 26, 5, 24, B);
            box(-7, 26, 1, 24, S);
            for (const y of [9, 15, 20, 25]) {
              box(-10, y, 3, 2, 2);
              box(-11, y + 2, 5, 1, Lt);
            }
            cone(-9, 26, 3, 4, tile);
            box(-9, 31, 1, 2, 3);
            // The church: west arm (left), porch in front, east apses (right)
            box(-5, 10, 17, 9, B);
            box(-5, 1, 17, 1, D);
            box(11, 10, 1, 9, S);
            for (let j = 0; j < 3; j++) box(-5 + j, 11 + j, 17 - 2 * j, 1, j ? tile : tileS); // the nave's tiled roof
            cone(1, 11, 5, 3, tile); // the gable over the porch
            box(-1, 8, 5, 7, D); // the porch: a big arch, two smaller ones
            box(0, 6, 3, 5, 2);
            box(0, 7, 3, 1, D);
            box(1, 7, 1, 1, 2);
            for (const p of [-4, 5]) {
              box(p, 5, 2, 3, 2);
            }
            for (const p of [8, 10]) box(p, 7, 1, 3, 2); // apse windows
            dome(12, 7, 2, B); // the curved apse at the east end
            box(-2, 22, 7, 8, B); // the twelve-sided drum, lit and shaded faces, an arched window in each
            box(-2, 22, 1, 8, Lt);
            box(4, 22, 1, 8, S);
            for (const p of [-1, 1, 3]) {
              box(p, 20, 1, 4, 2);
              box(p, 21, 1, 1, D);
            }
            box(-3, 15, 9, 1, D);
            box(-3, 23, 9, 1, Lt); // the cornice
            dome(1, 23, 4, tile); // the tiled dome
            box(-1, 26, 1, 1, tn([186, 96, 70], 0.3));
            box(3, 25, 1, 2, tileS);
            box(1, 29, 1, 3, 3); // the cross
            box(0, 28, 3, 1, 3);
            break;
          }
          case "yuruyenKosk": {
            // Atatürk's "Walking Mansion" (Yalova): a small two-storey house of dark brown timber with a red
            // hipped roof and a chimney, beside the great plane tree it was moved on rails to spare.
            const wood = css(e.sh([118, 82, 60])),
              woodS = css(e.sh([86, 60, 46])),
              woodL = css(e.sh([150, 108, 80])),
              roof = css(e.sh([182, 78, 58])),
              roofS = css(e.sh([140, 58, 46])),
              leaf = css(e.sh([118, 150, 84])),
              leafS = css(e.sh([86, 118, 70])),
              bark = css(e.sh([150, 140, 120])),
              barkS = css(e.sh([112, 104, 92]));
            box(-1, 1, 13, 1, 13); // the rails under the house
            box(-1, 7, 12, 6, wood);
            box(-1, 7, 1, 6, woodL);
            box(10, 7, 1, 6, woodS);
            box(-1, 4, 12, 1, woodS); // the floor line
            box(3, 7, 1, 6, woodS); // the framed bays
            box(7, 7, 1, 6, woodS);
            for (const p of [1, 5, 8]) {
              box(p, 6, 2, 1, 13); // upper windows
              box(p, 3, 1, 1, 13);
            }
            box(5, 3, 2, 2, 2); // the door
            for (let j = 0; j < 3; j++) box(-2 + j * 2, 8 + j, 14 - j * 4, 1, j ? roof : roofS); // the hipped roof
            box(4, 11, 2, 3, roofS); // the chimney
            box(-6, 7, 2, 6, bark); // the plane tree: a stout trunk, spreading boughs, a wide crown
            box(-5, 7, 1, 6, barkS);
            stroke(-6, 8, -9, 10, 8);
            stroke(-4, 8, -1, 10, 8);
            orb(-6, 10, 3, leaf);
            orb(-9, 9, 2, leaf);
            orb(-2, 9, 2, leafS);
            orb(-4, 11, 2, leafS);
            break;
          }
