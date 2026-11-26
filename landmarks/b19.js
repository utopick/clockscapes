          case "usCapitol": {
            // A US state capitol (reused by most US state capitals in group b19): a long neoclassical front on a
            // rusticated basement, a raised centre with a pedimented portico on steps, and a dome on a
            // colonnaded drum with a lantern. o.w width, o.nh the wings' height, o.ch how far the centre rises
            // above them, o.cw the centre's width, o.cols portico columns (0: none), o.r the dome's radius, o.dh
            // the drum's colonnade, o.dt how far the dome is stretched above a hemisphere, o.dcol its [r,g,b]
            // (else o.dc a colour index), o.wall the walls' [r,g,b] (else c), o.lan the lantern's height, o.top
            // "finial", "statue", "eagle" or "none", o.pav pedimented end pavilions, o.minis little corner
            // domes (Des Moines), o.ribs 0 for a smooth dome, o.arc an arcaded ground floor under the portico.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              lt = [255, 248, 225],
              w = o.w ?? 29,
              hw = Math.floor(w / 2),
              nh = o.nh ?? 10,
              ch = nh + (o.ch ?? 2),
              r = o.r ?? 5,
              dh = o.dh ?? 3,
              dt = o.dt ?? Math.round(r * 0.4),
              cols = o.cols ?? 4,
              ph = Math.max(0, cols - 1),
              chw = Math.floor((o.cw ?? 2 * r + 7) / 2),
              lan = o.lan ?? 3,
              wall = o.wall ?? colors[o.c ?? 13],
              dcol = o.dcol ?? colors[o.dc ?? 13],
              W = tn(wall),
              Wsh = tn(wall, 0.3),
              Wbase = tn(wall, 0.14),
              Wdk = tn(wall, 0.6),
              Wlit = tn(wall, 0.4, lt),
              D = tn(dcol),
              Dsh = tn(dcol, 0.35),
              Dlit = tn(dcol, 0.35, lt),
              win = 2;
            // wings on a rusticated basement, with a cornice and a balustrade
            box(-hw, nh, w, nh, W);
            box(-hw, 3, w, 3, Wbase);
            box(-hw, 4, w, 1, Wlit);
            box(-hw, nh, w, 1, Wlit);
            box(-hw, nh + 1, w, 1, W);
            for (let p = -hw + 1; p < hw; p += 2) box(p, nh + 1, 1, 1, Wsh);
            box(hw, nh - 1, 1, nh - 1, Wsh);
            if (o.pav) {
              // end pavilions standing forward with pilasters and a pediment
              for (const s of [-1, 1]) {
                const px = s * (hw - 2);
                box(px - 2, nh + 1, 5, nh + 1, W);
                box(px - 2, 4, 5, 1, Wlit);
                for (const d of [-2, 2]) box(px + d, nh - 1, 1, nh - 5, Wlit);
                box(px - 2, nh + 1, 5, 1, Wlit);
                cone(px, nh + 1, 3, 2, Wlit);
                cone(px, nh + 1, 1, 1, W);
                if (s > 0) box(px + 2, nh, 1, nh - 1, Wsh);
              }
            }
            // the raised centre
            if (ch > nh) {
              box(-chw, ch, 2 * chw + 1, ch - nh + 1, W);
              box(-chw, ch, 2 * chw + 1, 1, Wlit);
              box(-chw, ch + 1, 2 * chw + 1, 1, W);
              for (let p = -chw + 1; p < chw; p += 2) box(p, ch + 1, 1, 1, Wsh);
              box(chw, ch - 1, 1, ch - nh, Wsh);
            }
            // windows: tall ones on the main floors, little ones in the basement
            for (let p = -hw + 1; p < hw; p += 2) {
              if (Math.abs(p) <= ph + 1) continue;
              if (o.pav && Math.abs(Math.abs(p) - (hw - 2)) === 2) continue;
              const top = (Math.abs(p) <= chw ? ch : nh) - 2;
              box(p, 2, 1, 1, win);
              for (let row = 6; row + 1 <= top; row += 3) box(p, row + 1, 1, 2, win);
            }
            // the drum: a podium, a colonnade and its entablature
            const base = ch + 1,
              dw = r + 1;
            box(-dw - 1, base + 1, 2 * dw + 3, 1, Wlit);
            box(-dw, base + 1 + dh, 2 * dw + 1, dh, Wdk);
            for (let p = -dw; p <= dw; p += 2) box(p, base + dh, 1, dh - 1 || 1, p > dw / 2 ? Wsh : Wlit);
            box(-dw, base + 2 + dh, 2 * dw + 1, 1, Wlit);
            const db = base + 2 + dh;
            // the dome, stretched, with ribs and its right side in shade
            if (dt > 0) {
              box(-r, db + dt, 2 * r + 1, dt, D);
              box(Math.ceil(r / 2), db + dt, r - Math.ceil(r / 2) + 1, dt, Dsh);
            }
            dome(0, db + dt, r, D);
            for (let p = Math.ceil(r / 2); p <= r; p++) {
              const rh = Math.floor(Math.sqrt(r * r - p * p));
              if (rh > 0) box(p, db + dt + rh, 1, rh, Dsh);
            }
            if (o.ribs ?? 1)
              for (const p of [-Math.ceil(r / 2), 0, Math.ceil(r / 2)]) {
                const rh = Math.floor(Math.sqrt(r * r - p * p)) - 1;
                if (rh + dt > 1) box(p, db + dt + rh, 1, rh + dt, p > 0 ? Dsh : tn(dcol, 0.2));
              }
            box(-Math.ceil(r / 2) - 1, db + dt + Math.round(r / 2), 1, Math.max(1, Math.round(r / 2)), Dlit);
            const dtop = db + dt + r;
            // the lantern, its little cap, and what stands on it
            if (lan > 0) {
              box(-1, dtop + lan, 3, lan, W);
              box(0, dtop + lan - 1, 1, Math.max(1, lan - 2), win);
              box(-2, dtop + 1, 5, 1, Wlit);
              dome(0, dtop + lan, 1, D);
            }
            const tp = dtop + lan + 1;
            if (o.top === "statue") {
              const sc = tn(o.scol ?? [96, 104, 96]);
              box(0, tp + 4, 1, 4, sc);
              box(1, tp + 5, 1, 2, sc); // the raised arm
              box(-1, tp + 2, 1, 1, sc);
            } else if (o.top === "eagle") {
              box(-1, tp + 1, 3, 1, 12); // spread wings
              for (const p of [-2, 2]) box(p, tp + 2, 1, 1, 12);
              box(0, tp + 2, 1, 1, 12);
            } else if (o.top !== "none") box(0, tp + 2, 1, 2, 3);
            // little corner domes (Des Moines)
            if (o.minis)
              for (const s of [-1, 1]) {
                const mx = s * (hw - 2);
                box(mx - 1, nh + 3, 3, 2, W);
                dome(mx, nh + 3, 2, Dsh);
                dome(mx - 0.5, nh + 3, 1.5, D);
                box(mx, nh + 6, 1, 1, 3);
                box(mx, nh + 2, 1, 1, win);
              }
            // the portico on its steps: columns before a dark loggia, an entablature and a pediment
            if (cols) {
              const pt = o.ptop ?? ch - 1;
              for (let k = 0; k < 3; k++) box(-ph - 3 + k, k + 1, 2 * (ph + 3 - k) + 1, 1, k % 2 ? W : Wlit);
              box(-ph, pt - 1, 2 * ph + 1, pt - 4, Wdk);
              if (o.arc) {
                box(-ph, 7, 2 * ph + 1, 4, W);
                for (let p = -ph + 1; p < ph; p += 2) box(p, 6, 1, 3, Wdk);
              }
              for (let p = -ph; p <= ph; p += 2) {
                box(p, pt - 1, 1, pt - (o.arc ? 8 : 4), Wlit);
                if (p > 0) box(p, pt - 1, 1, 1, W);
              }
              box(0, 6, 1, 2, win);
              box(-ph - 1, pt + 1, 2 * ph + 3, 2, Wlit);
              box(-ph - 1, pt, 2 * ph + 3, 1, W);
              const pedH = Math.max(2, Math.ceil((ph + 2) * 0.45));
              cone(0, pt + 1, ph + 2, pedH, Wlit);
              cone(0, pt + 1, ph, pedH - 1, Wsh);
              box(ph + 1, pt + 1, 1, 2, Wsh);
            }
            break;
          }
          case "nyCapitol": {
            // New York State Capitol, Albany: a long grey granite château of five storeys between string
            // courses, with tall red-tiled hip roofs on the corner pavilions and on the two inner towers, a
            // slate mansard with dormers between them, and the arched entrance on its great stair.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              st = [204, 200, 188],
              S = tn(st),
              Ssh = tn(st, 0.3),
              Slit = tn(st, 0.35, [255, 248, 225]),
              rf = [178, 76, 58],
              Rf = tn(rf),
              Rsh = tn(rf, 0.3),
              slate = tn([96, 98, 112]),
              hipRoof = (cx, b, k, tall) => {
                for (let j = 0; j < tall; j++) {
                  const q = Math.round(k * (1 - j / (tall + 1)));
                  box(cx - q, b + j + 1, 2 * q + 1, 1, Rf);
                  if (q > 0) box(cx + Math.ceil(q / 2), b + j + 1, q - Math.ceil(q / 2) + 1, 1, Rsh);
                }
                box(cx, b + tall + 2, 1, 2, 3);
                box(cx - 1, b + Math.round(tall / 3) + 1, 1, 2, Slit); // a dormer
                box(cx - 1, b + Math.round(tall / 3), 1, 1, 2);
              };
            box(-16, 12, 33, 12, S);
            box(-16, 3, 33, 3, Ssh);
            for (const s of [4, 8, 12]) box(-16, s, 33, 1, Slit);
            box(-15, 14, 31, 2, slate); // the mansard between the towers
            for (let p = -9; p <= 9; p += 3) {
              box(p, 14, 1, 1, Slit);
              box(p, 13, 1, 1, 2);
            }
            for (let p = -15; p <= 15; p += 2) {
              box(p, 2, 1, 1, 2);
              box(p, 7, 1, 2, 2);
              box(p, 11, 1, 2, 2);
            }
            for (const s of [-1, 1]) {
              // corner pavilion and inner tower, each with its steep hip roof
              const px = s * 14,
                ix = s * 6;
              box(px - 2, 15, 5, 15, S);
              box(px - 2, 15, 5, 1, Slit);
              for (const r of [7, 11, 14]) for (const d of [-1, 1]) box(px + d, r, 1, 2, 2);
              hipRoof(px, 15, 3, 8);
              box(ix - 2, 14, 5, 14, S);
              box(ix - 2, 14, 5, 1, Slit);
              for (const r of [7, 11]) box(ix, r, 1, 2, 2);
              hipRoof(ix, 14, 3, 6);
              if (s > 0) {
                box(px + 2, 14, 1, 13, Ssh);
                box(ix + 2, 13, 1, 12, Ssh);
              }
            }
            // centre: the arcade of the entrance on the stair
            box(-3, 13, 7, 13, S);
            box(-3, 13, 7, 1, Slit);
            for (const p of [-2, 0, 2]) {
              box(p, 6, 1, 3, 2);
              orb(p + 0.5, 6, 0.5, 2);
              box(p, 11, 1, 2, 2);
            }
            for (let k = 0; k < 3; k++) box(-5 + k, k + 1, 11 - 2 * k, 1, k % 2 ? S : Slit);
            cone(0, 13, 3, 3, slate);
            box(0, 17, 1, 1, 3);
            break;
          }
          case "louisianaCapitol": {
            // Louisiana State Capitol, Baton Rouge: the tallest US capitol, an Art Deco limestone tower with
            // corner piers and vertical window strips on low wings and a grand stair, set back near the top
            // into an arched observation stage, an octagonal lantern and a little cupola.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              st = [222, 214, 192],
              S = tn(st),
              Ssh = tn(st, 0.3),
              Slit = tn(st, 0.35, [255, 248, 225]),
              Sdk = tn(st, 0.55);
            // the wings and the stair
            box(-7, 6, 15, 6, S);
            box(-7, 6, 15, 1, Slit);
            for (const p of [-6, -5, 5, 6]) box(p, 4, 1, 2, 2);
            box(7, 5, 1, 5, Ssh);
            for (let k = 0; k < 3; k++) box(-3 + k, k + 1, 7 - 2 * k, 1, k % 2 ? S : Slit);
            // the shaft
            box(-4, 38, 9, 32, S);
            for (let p = -2; p <= 2; p += 2) for (let y = 9; y < 36; y += 3) box(p, y + 1, 1, 2, Sdk);
            for (const p of [-4, 4]) box(p, 38, 1, 32, p > 0 ? Ssh : Slit);
            box(3, 37, 1, 31, tn(st, 0.15));
            box(-4, 9, 9, 1, Slit);
            box(-1, 8, 3, 3, Sdk); // the entrance
            box(-5, 38, 11, 1, Slit);
            // the set-back stage with tall arched openings, the octagon, the cupola
            box(-3, 43, 7, 5, S);
            for (const p of [-2, 0, 2]) box(p, 42, 1, 3, Sdk);
            box(3, 43, 1, 5, Ssh);
            box(-3, 44, 7, 1, Slit);
            box(-2, 47, 5, 3, S);
            box(-1, 46, 1, 2, Sdk);
            box(1, 46, 1, 2, Sdk);
            box(2, 47, 1, 3, Ssh);
            box(-2, 48, 5, 1, Slit);
            dome(0, 48, 1.5, S);
            box(0, 51, 1, 2, 3);
            break;
          }
          case "oldLouisianaCapitol": {
            // Old Louisiana State Capitol, Baton Rouge: a white Gothic Revival castle, two tall crenellated
            // octagonal towers flanking a pointed window over the door, crenellated wings with corner turrets.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              st = [236, 232, 224],
              S = tn(st),
              Ssh = tn(st, 0.28),
              Slit = tn(st, 0.3, [255, 248, 225]),
              merlons = (l, r, top) => {
                for (let p = l; p <= r; p += 2) box(p, top + 1, 1, 1, S);
              };
            box(-12, 11, 25, 11, S);
            box(-12, 2, 25, 2, Ssh);
            merlons(-12, 12, 11);
            box(-2, 15, 5, 15, S);
            merlons(-2, 2, 15);
            for (const s of [-1, 1]) {
              const cx = s * 11,
                tx = s * 5;
              box(cx - 1, 14, 3, 14, S);
              box(cx - 2, 14, 5, 1, Slit);
              merlons(cx - 2, cx + 2, 14);
              box(tx - 2, 19, 5, 19, S);
              box(tx - 3, 19, 7, 1, Slit);
              merlons(tx - 3, tx + 3, 19);
              for (const r of [8, 13, 17]) box(tx, r, 1, 2, 2);
              for (const r of [7, 11]) box(s * 8, r, 1, 3, 2);
              box(cx, 9, 1, 2, 2);
              if (s > 0) {
                box(tx + 2, 18, 1, 17, Ssh);
                box(cx + 1, 13, 1, 12, Ssh);
              }
            }
            // the great pointed window, the door and the stair
            box(-1, 13, 3, 7, 2);
            box(0, 14, 1, 1, 2);
            box(0, 13, 1, 7, Slit);
            box(-1, 4, 3, 3, 2);
            for (let k = 0; k < 2; k++) box(-3 + k, k + 1, 7 - 2 * k, 1, Slit);
            break;
          }
          case "ndCapitol": {
            // North Dakota State Capitol, Bismarck: a plain Art Deco limestone office tower, its front a
            // grid of vertical window strips between piers, on the low judicial and legislative wings.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              st = [214, 204, 180],
              S = tn(st),
              Ssh = tn(st, 0.3),
              Slit = tn(st, 0.35, [255, 248, 225]),
              Sdk = tn([70, 74, 86]);
            box(-7, 6, 3, 6, S);
            box(-7, 6, 3, 1, Slit);
            box(-6, 4, 1, 2, Sdk);
            box(5, 5, 3, 5, S);
            box(5, 5, 3, 1, Slit);
            box(6, 3, 1, 1, Sdk);
            box(7, 4, 1, 3, Ssh);
            box(-4, 34, 9, 34, S);
            for (let p = -3; p <= 3; p += 2) box(p, 32, 1, 26, Sdk);
            for (let y = 9; y < 33; y += 3) box(-3, y, 7, 1, S);
            box(4, 34, 1, 34, Ssh);
            box(-4, 34, 9, 1, Slit);
            box(-3, 35, 7, 1, S);
            box(-1, 6, 3, 2, Sdk);
            box(-2, 7, 5, 1, Slit);
            break;
          }
          case "brickStateHouse": {
            // A red-brick Georgian state house with white trim (Maryland State House, Annapolis; Delaware
            // Legislative Hall, Dover): a hipped roof, a white pedimented portico, and a white wooden cupola.
            // o.w width, o.nh wall height, o.cols portico columns, o.cup "big" (Annapolis' great dome of
            // stacked octagons) or "slim" (a belfry, a little dome and a vane), o.ch the cupola's height.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              w = o.w ?? 23,
              hw = Math.floor(w / 2),
              nh = o.nh ?? 10,
              cols = o.cols ?? 4,
              ph = cols - 1,
              brick = [150, 74, 58],
              B = tn(brick),
              Bsh = tn(brick, 0.3),
              wt = [242, 238, 228],
              Wt = tn(wt),
              Wsh = tn(wt, 0.25),
              Wdk = tn(wt, 0.55),
              roof = tn([84, 78, 92]);
            box(-hw, nh, w, nh, B);
            box(hw, nh - 1, 1, nh - 1, Bsh);
            box(-hw, 1, w, 1, Bsh);
            box(-hw, nh, w, 1, Wt);
            for (let j = 0; j < 3; j++) box(-hw + 1 + j, nh + 1 + j, w - 2 - 2 * j, 1, roof);
            for (let p = -hw + 1; p < hw; p += 2) {
              if (Math.abs(p) <= ph + 1) continue;
              box(p, 4, 1, 2, 2);
              box(p, 4, 1, 1, Wsh);
              if (nh >= 9) box(p, 8, 1, 2, 2);
              if (nh >= 9) box(p, 9, 1, 1, Wsh);
            }
            // the cupola, behind the portico
            const cb = nh + 3;
            if (o.cup === "big") {
              const k = o.ch ?? 1;
              box(-4, cb + 3, 9, 3, Wt);
              box(-4, cb + 3, 9, 1, Wsh);
              box(4, cb + 2, 1, 2, Wsh);
              const s1 = cb + 3 + Math.round(8 * k);
              box(-3, s1, 7, s1 - cb - 3, Wt);
              for (const p of [-2, 0, 2]) box(p, s1 - 2, 1, s1 - cb - 6, Wdk);
              box(3, s1 - 1, 1, s1 - cb - 4, Wsh);
              box(-4, s1 + 1, 9, 1, Wt);
              for (let p = -4; p <= 4; p += 2) box(p, s1 + 2, 1, 1, Wt);
              const s2 = s1 + 2 + Math.round(5 * k);
              box(-2, s2, 5, s2 - s1 - 2, Wt);
              box(0, s2 - 1, 1, s2 - s1 - 4, Wdk);
              box(2, s2 - 1, 1, s2 - s1 - 3, Wsh);
              cone(0, s2, 3, 2, Wt);
              const s3 = s2 + 2 + Math.round(3 * k);
              box(-1, s3, 3, s3 - s2 - 2, Wt);
              box(0, s3 - 1, 1, 1, Wdk);
              dome(0, s3, 1.5, Wt);
              box(0, s3 + 4, 1, 2, 12);
            } else {
              const k = o.ch ?? 1,
                s1 = cb + Math.round(4 * k);
              box(-2, s1, 5, s1 - cb + 2, Wt);
              box(2, s1, 1, s1 - cb + 2, Wsh);
              const s2 = s1 + Math.round(4 * k);
              box(-2, s1 + 1, 5, 1, Wt);
              box(-1, s2, 3, s2 - s1, Wt);
              box(0, s2 - 1, 1, s2 - s1 - 2, Wdk);
              dome(0, s2, 1.5, Wt);
              box(0, s2 + 2 + Math.round(3 * k), 1, Math.round(3 * k), Wt);
              box(0, s2 + 3 + Math.round(3 * k), 1, 1, 12);
            }
            // the portico
            const pt = nh;
            box(-ph, pt - 1, 2 * ph + 1, pt - 2, Wdk);
            for (let p = -ph; p <= ph; p += 2) box(p, pt - 1, 1, pt - 2, Wt);
            box(-ph - 1, pt + 1, 2 * ph + 3, 2, Wt);
            cone(0, pt + 1, ph + 1, Math.max(2, Math.ceil(ph * 0.6)), Wt);
            cone(0, pt + 1, ph - 1, Math.max(1, Math.ceil(ph * 0.6) - 1), Wsh);
            box(0, 3, 1, 2, 2);
            box(-ph - 1, 1, 2 * ph + 3, 1, Wt);
            break;
          }
          case "ctCapitol": {
            // Connecticut State Capitol, Hartford: High Victorian Gothic in white marble, pointed gables and
            // corner towers with pyramid roofs, and a gilded dome on a tall twelve-sided drum ringed with
            // pinnacles, under a lantern.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              st = [232, 228, 218],
              S = tn(st),
              Ssh = tn(st, 0.3),
              Slit = tn(st, 0.3, [255, 248, 225]),
              Sdk = tn(st, 0.55),
              gold = [226, 178, 62],
              G = tn(gold),
              Gsh = tn(gold, 0.3),
              roof = tn([108, 112, 126]),
              Cr0 = S;
            box(-15, 11, 31, 11, S);
            box(-15, 2, 31, 2, Ssh);
            box(-15, 11, 31, 1, Slit);
            box(-14, 13, 29, 2, roof);
            for (let p = -14; p <= 14; p += 2) {
              box(p, 6, 1, 3, 2);
              box(p, 10, 1, 2, 2);
            }
            for (const s of [-1, 1]) {
              // corner towers and the gables between
              const cx = s * 13,
                gx = s * 7;
              box(cx - 2, 15, 5, 15, S);
              box(cx - 2, 15, 5, 1, Slit);
              for (const r of [7, 11, 14]) box(cx, r, 1, 2, 2);
              cone(cx, 15, 2, 5, roof);
              box(cx, 21, 1, 1, 3);
              cone(gx, 11, 4, 5, roof);
              cone(gx, 11, 3, 4, S);
              box(gx, 13, 1, 2, 2);
              for (const p of [gx - 3, gx + 3]) box(p, 13, 1, 2, S);
              if (s > 0) box(cx + 2, 14, 1, 13, Ssh);
            }
            // the centre: a gabled front with an arcade, the drum, the gilt dome and its lantern
            box(-3, 13, 7, 13, S);
            cone(0, 13, 3, 4, S);
            for (const p of [-2, 0, 2]) box(p, 5, 1, 3, Sdk);
            box(0, 15, 1, 2, 2);
            box(-4, 20, 9, 4, S);
            box(-4, 20, 9, 1, Slit);
            box(-3, 26, 7, 6, S);
            for (const p of [-2, 0, 2]) box(p, 25, 1, 4, Sdk);
            box(3, 26, 1, 6, Ssh);
            for (const p of [-4, 4]) {
              box(p, 24, 1, 4, S);
              box(p, 25, 1, 1, 3);
            }
            box(-4, 27, 9, 1, Slit);
            box(-4, 30, 9, 3, G);
            box(2, 30, 3, 3, Gsh);
            dome(0, 30, 4, Gsh);
            dome(-0.5, 30, 3.5, G);
            for (const p of [-2, 2]) box(p, 32, 1, 4, tn(gold, 0.2));
            box(-2, 33, 1, 2, tn(gold, 0.35, [255, 248, 225]));
            box(-1, 36, 3, 2, Cr0);
            dome(0, 36, 1, G);
            box(0, 39, 1, 2, 3);
            break;
          }
          case "tarrantCourthouse": {
            // Tarrant County Courthouse, Fort Worth: Renaissance Revival in pink granite, rusticated, with a
            // clock tower over the centre crowned by a little dome and lantern, and domed corner pavilions.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              st = [200, 132, 110],
              S = tn(st),
              Ssh = tn(st, 0.3),
              Slit = tn(st, 0.35, [255, 248, 225]),
              cu = [112, 160, 140],
              Cu = tn(cu),
              Cush = tn(cu, 0.3);
            box(-14, 12, 29, 12, S);
            box(-14, 3, 29, 3, Ssh);
            for (const s of [4, 8, 12]) box(-14, s, 29, 1, Slit);
            for (let p = -13; p <= 13; p += 2) {
              box(p, 2, 1, 1, 2);
              box(p, 7, 1, 2, 2);
              box(p, 11, 1, 2, 2);
            }
            box(14, 11, 1, 11, Ssh);
            for (const s of [-1, 1]) {
              const cx = s * 12;
              box(cx - 2, 15, 5, 15, S);
              box(cx - 2, 15, 5, 1, Slit);
              box(cx, 14, 1, 1, 2);
              dome(cx, 15, 2, Cush);
              dome(cx - 0.5, 15, 1.5, Cu);
              box(cx, 18, 1, 2, 3);
              if (s > 0) box(cx + 2, 14, 1, 13, Ssh);
            }
            // the central pavilion with its arched portal, then the clock tower
            box(-4, 15, 9, 15, S);
            box(-4, 15, 9, 1, Slit);
            cone(0, 15, 4, 2, S);
            box(-1, 6, 3, 4, 2);
            orb(0, 6, 1, 2);
            box(-3, 26, 7, 11, S);
            box(3, 26, 1, 11, Ssh);
            box(-3, 21, 7, 1, Slit);
            orb(0, 23, 2, 2);
            orb(0, 23, 1.2, 6);
            box(0, 24, 1, 1, 2);
            box(-4, 26, 9, 1, Slit);
            box(-2, 29, 5, 3, S);
            for (const p of [-1, 1]) box(p, 28, 1, 2, 2);
            box(2, 29, 1, 3, Ssh);
            dome(0, 29, 2.5, Cush);
            dome(-0.5, 29, 2, Cu);
            box(0, 34, 1, 3, 3);
            break;
          }
          case "iolaniPalace": {
            // ʻIolani Palace, Honolulu: "American Florentine", two storeys of deep verandas whose cream
            // columns run all round, a taller central tower and four corner towers with low slate roofs.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              st = [150, 130, 108],
              S = tn(st),
              Ssh = tn(st, 0.3),
              Cr = tn([236, 226, 204]),
              Sdk = tn(st, 0.62),
              roof = tn([86, 88, 100]);
            box(-12, 12, 25, 12, Sdk);
            box(-12, 1, 25, 1, S);
            box(-12, 7, 25, 1, Cr);
            box(-12, 12, 25, 1, Cr);
            box(-12, 13, 25, 1, S);
            for (let p = -12; p <= 12; p += 2) {
              box(p, 6, 1, 5, Cr);
              box(p, 11, 1, 4, Cr);
            }
            box(-1, 6, 3, 1, Cr); // the central stair's porch
            for (const s of [-1, 1]) {
              const cx = s * 10;
              box(cx - 2, 17, 5, 4, S);
              box(cx, 16, 1, 2, Sdk);
              box(cx - 2, 17, 5, 1, Cr);
              cone(cx, 17, 2, 2, roof);
              box(cx, 21, 1, 2, Cr);
              if (s > 0) box(cx + 2, 16, 1, 3, Ssh);
            }
            box(-3, 21, 7, 8, S);
            for (const p of [-2, 0, 2]) box(p, 19, 1, 3, Sdk);
            box(-3, 21, 7, 1, Cr);
            box(3, 20, 1, 7, Ssh);
            cone(0, 21, 3, 2, roof);
            box(0, 27, 1, 4, 13);
            box(1, 27, 2, 1, 10);
            box(1, 26, 2, 1, 6);
            box(1, 25, 2, 1, 7);
            break;
          }
          case "alohaTower": {
            // Aloha Tower, Honolulu harbour: a slim white lighthouse-like office tower with "ALOHA" and a
            // clock on each face under a balcony, and a low copper pyramid roof with a flagpole.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              st = [240, 236, 226],
              S = tn(st),
              Ssh = tn(st, 0.25),
              cu = tn([110, 150, 132]);
            box(-4, 4, 9, 4, S);
            box(-4, 4, 9, 1, Ssh);
            box(-3, 26, 7, 22, S);
            box(3, 26, 1, 22, Ssh);
            for (let y = 7; y < 21; y += 3) box(0, y, 1, 2, 2);
            box(-3, 22, 7, 1, 2); // the ALOHA letters, a dark band at this size
            orb(0, 24.5, 1.5, 2);
            orb(0, 24.5, 1, 6);
            box(-4, 27, 9, 1, S);
            for (let p = -4; p <= 4; p += 2) box(p, 28, 1, 1, S);
            box(-2, 30, 5, 3, S);
            box(-1, 29, 3, 1, 2);
            cone(0, 30, 3, 2, cu);
            box(0, 35, 1, 3, 13);
            break;
          }
          case "soldiersSailors": {
            // Soldiers' and Sailors' Monument, Indianapolis: an Indiana limestone shaft on a broad terraced
            // base with sculpture groups, bronze bands, a balcony near the top, and the bronze Victory.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              st = [220, 210, 186],
              S = tn(st),
              Ssh = tn(st, 0.3),
              Slit = tn(st, 0.35, [255, 248, 225]),
              br = tn([126, 112, 70]),
              brSh = tn([96, 86, 58]);
            box(-7, 2, 15, 2, S);
            box(-7, 2, 15, 1, Slit);
            box(-5, 6, 11, 4, S);
            box(-5, 6, 11, 1, Slit);
            box(4, 5, 2, 3, Ssh);
            for (const p of [-6, 6]) box(p, 5, 1, 3, br); // the sculpture groups
            box(-1, 5, 3, 3, br);
            box(-3, 11, 7, 5, S);
            box(2, 10, 1, 4, Ssh);
            box(-3, 11, 7, 1, Slit);
            for (let y = 12; y < 36; y++) {
              const k = y < 24 ? 2 : 1.5,
                l = y < 24 ? -2 : -1;
              box(l, y, Math.round(2 * k + 1), 1, S);
              box(-l, y, 1, 1, Ssh);
            }
            for (const y of [16, 24, 32]) box(-2, y, 5, 1, br);
            box(-3, 37, 7, 2, S);
            box(-3, 37, 7, 1, Slit);
            box(-2, 40, 5, 3, S);
            box(-1, 39, 1, 2, 2);
            box(1, 39, 1, 2, 2);
            box(-1, 41, 3, 1, Slit);
            box(0, 45, 1, 4, br);
            box(-1, 44, 3, 1, brSh);
            box(1, 46, 1, 1, br);
            break;
          }
          case "willisTower": {
            // Willis (Sears) Tower, Chicago: nine bundled black tubes of dark glass and aluminium that end at
            // different heights, so the profile steps down to the sides; dark mechanical bands, two antennas.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              blk = [52, 52, 60],
              K = tn(blk),
              Ksh = tn(blk, 0.35),
              Kl = tn(blk, 0.22, [255, 248, 225]),
              band = tn([28, 28, 34]),
              tubes = [
                [-9, 6, 40],
                [-3, 6, 50],
                [3, 6, 30],
              ];
            for (const [l, tw, h] of tubes) {
              box(l, h, tw, h, K);
              for (let p = l + 1; p < l + tw; p += 2) box(p, h - 1, 1, h - 2, Kl);
              box(l + tw - 1, h, 1, h, Ksh);
              for (const b of [14, 28, 42]) if (b < h - 1) box(l, b, tw, 1, band);
              box(l, h, tw, 1, band);
            }
            box(-9, 22, 18, 1, band);
            box(-3, 44, 6, 6, K); // the two tallest tubes stand on the centre
            for (const p of [-2, 0, 2]) box(p, 49, 1, 7, Kl);
            box(-2, 58, 1, 8, 6);
            box(1, 57, 1, 7, 6);
            box(-2, 52, 1, 1, 8);
            break;
          }
          case "johnHancock": {
            // John Hancock Center (875 North Michigan), Chicago: a tapering black tower with the giant X-braces
            // up its faces, the lit observatory band near the top, and two antennas on the roof.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              blk = [50, 50, 58],
              K = tn(blk),
              Ksh = tn(blk, 0.35),
              Kl = tn(blk, 0.25, [255, 248, 225]),
              h = 44,
              hw = (y) => Math.round(5 - (2 * y) / h);
            for (let y = 1; y <= h; y++) {
              const k = hw(y);
              box(-k, y, 2 * k + 1, 1, K);
              box(k, y, 1, 1, Ksh);
              if (y % 2 === 0) for (let p = -k + 2; p < k; p += 2) box(p, y, 1, 1, Kl);
            }
            for (let b = 2; b + 10 <= h; b += 10) {
              stroke(-hw(b), b, hw(b + 10), b + 10, 8);
              stroke(hw(b), b, -hw(b + 10), b + 10, 8);
              box(-hw(b), b, 2 * hw(b) + 1, 1, tn([158, 165, 176], 0.2));
            }
            box(-3, h - 2, 7, 2, tn([236, 210, 140]));
            box(-3, h, 7, 1, tn([158, 165, 176], 0.2));
            box(-2, h + 10, 1, 10, 8);
            box(2, h + 9, 1, 9, 8);
            break;
          }
          case "levequeTower": {
            // LeVeque Tower, Columbus: an Art Deco tower of cream terracotta, its piers running up between
            // the window strips, setting back into a crown with corner pinnacles, under a slim lantern.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              st = [232, 222, 196],
              S = tn(st),
              Ssh = tn(st, 0.3),
              Slit = tn(st, 0.3, [255, 248, 225]),
              Sdk = tn(st, 0.5);
            box(-5, 10, 11, 10, S);
            box(-5, 10, 11, 1, Slit);
            box(5, 9, 1, 9, Ssh);
            for (const p of [-4, -2, 2, 4]) for (const y of [4, 7]) box(p, y, 1, 2, Sdk);
            box(-1, 4, 3, 3, Sdk);
            box(-3, 34, 7, 24, S);
            for (const p of [-2, 0, 2]) box(p, 33, 1, 22, Sdk);
            for (let y = 13; y < 33; y += 3) box(-2, y, 5, 1, S);
            box(3, 34, 1, 24, Ssh);
            box(-4, 34, 9, 1, Slit);
            box(-2, 40, 5, 6, S);
            for (const p of [-1, 1]) box(p, 39, 1, 4, Sdk);
            box(2, 40, 1, 6, Ssh);
            for (const p of [-3, 3]) {
              box(p, 37, 1, 3, S);
              box(p, 38, 1, 1, Slit);
            }
            box(-1, 43, 3, 3, S);
            box(0, 42, 1, 1, Sdk);
            box(1, 43, 1, 3, Ssh);
            for (const p of [-2, 2]) box(p, 42, 1, 2, S);
            cone(0, 43, 1, 3, S);
            box(0, 48, 1, 2, 3);
            break;
          }
          case "reunionTower": {
            // Reunion Tower, Dallas: a concrete shaft of three joined cylinders (shaded) carrying a geodesic
            // ball of aluminium struts studded with lights, and a short mast.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              st = [214, 210, 200],
              S = tn(st),
              Ssh = tn(st, 0.3),
              Slit = tn(st, 0.3, [255, 248, 225]),
              ball = [178, 184, 192];
            box(-4, 2, 9, 2, tn(st, 0.12));
            box(-2, 29, 5, 27, S);
            box(-2, 29, 1, 27, Slit);
            box(1, 29, 2, 27, Ssh);
            box(0, 29, 1, 27, tn(st, 0.15));
            box(-3, 30, 7, 2, S);
            orb(0, 34, 5, tn(ball, 0.25));
            orb(-0.5, 34.5, 4.3, tn(ball));
            for (let y = 30; y <= 38; y += 2)
              for (let p = -4 + (y % 4 ? 1 : 0); p <= 4; p += 2) {
                if (p * p + (y - 34) * (y - 34) > 18) continue;
                box(p, y, 1, 1, (p + y) % 3 ? tn([120, 128, 140]) : 3);
              }
            box(0, 42, 1, 3, 8);
            break;
          }
          case "renCen": {
            // Renaissance Center, Detroit: the tall glass cylinder of the hotel ringed by four shorter
            // octagonal office towers (the front two show), dark glass banded by floors, on a concrete podium.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              gl = [84, 92, 106],
              G = tn(gl),
              Gsh = tn(gl, 0.35),
              Gl = tn(gl, 0.3, [220, 230, 240]),
              tower = (cx, hw, h) => {
                box(cx - hw, h, 2 * hw + 1, h, G);
                for (let y = 5; y < h; y += 2) box(cx - hw, y, 2 * hw + 1, 1, Gl);
                box(cx - hw, h, 1, h - 4, Gl);
                box(cx + hw - 1, h, 2, h - 4, Gsh);
                box(cx - hw, h, 2 * hw + 1, 1, Gsh);
              };
            tower(0, 4, 40);
            box(-3, 42, 7, 2, Gsh);
            box(-2, 43, 5, 1, G);
            box(1, 46, 1, 3, 13);
            tower(-8, 3, 29);
            tower(8, 3, 29);
            box(-12, 4, 25, 4, tn([200, 196, 186]));
            box(-12, 4, 25, 1, tn([230, 226, 214]));
            for (let p = -10; p <= 10; p += 4) box(p, 2, 2, 1, 2);
            break;
          }
          case "bunkerHill": {
            // Bunker Hill Monument, Charlestown: a plain granite obelisk with its pyramidion, the little
            // domed exhibit lodge at its foot.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              st = [212, 208, 198],
              S = tn(st),
              Ssh = tn(st, 0.28),
              Slit = tn(st, 0.3, [255, 248, 225]);
            box(-4, 2, 9, 2, S);
            box(-4, 2, 9, 1, Slit);
            for (let y = 3; y <= 34; y++) {
              const k = Math.round(3 - (1.6 * (y - 3)) / 31);
              box(-k, y, 2 * k + 1, 1, S);
              box(k, y, 1, 1, Ssh);
              if (k > 1) box(-k, y, 1, 1, Slit);
            }
            cone(0, 34, 1, 3, S);
            box(1, 36, 1, 2, Ssh);
            box(0, 5, 1, 2, 2);
            box(5, 4, 5, 4, S);
            box(9, 4, 1, 4, Ssh);
            dome(7, 4, 1.5, Slit);
            box(7, 3, 1, 2, 2);
            break;
          }
          case "oldNorthChurch": {
            // Old North Church, Boston: a red-brick Georgian church whose square brick tower rises into a white
            // wooden steeple of stacked stages (an arched belfry, an urn-cornered lantern, an octagon) and
            // a tall spire with its weathervane.
            const tn = (rgb, k = 0, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              brick = [146, 72, 56],
              B = tn(brick),
              Bsh = tn(brick, 0.3),
              wt = [242, 238, 228],
              Wt = tn(wt),
              Wsh = tn(wt, 0.25),
              Wdk = tn(wt, 0.55);
            box(-6, 9, 13, 9, B);
            box(6, 8, 1, 8, Bsh);
            box(-6, 9, 13, 1, Wt);
            for (let j = 0; j < 3; j++) box(-5 + j, 10 + j, 11 - 2 * j, 1, tn([78, 72, 86]));
            for (const p of [-5, -3, 3, 5]) {
              box(p, 7, 1, 3, 2);
              box(p, 7, 1, 1, Wsh);
            }
            // the brick tower
            box(-2, 24, 5, 24, B);
            box(2, 24, 1, 24, Bsh);
            for (const y of [10, 16, 21]) {
              box(0, y, 1, 2, 2);
              box(0, y, 1, 1, Wsh);
            }
            box(-1, 4, 3, 3, 2);
            box(-1, 5, 3, 1, Wt);
            box(-3, 24, 7, 1, Wt);
            // the white steeple
            box(-2, 29, 5, 5, Wt);
            box(-1, 28, 3, 3, Wdk);
            box(0, 27, 1, 1, 12);
            box(2, 29, 1, 5, Wsh);
            box(-3, 30, 7, 1, Wt);
            for (const p of [-3, 3]) box(p, 31, 1, 1, Wt);
            box(-1, 34, 3, 4, Wt);
            box(0, 33, 1, 2, Wdk);
            box(1, 34, 1, 4, Wsh);
            box(-2, 35, 5, 1, Wt);
            cone(0, 35, 1, 12, Wt);
            box(0, 49, 1, 2, 12);
            break;
          }
