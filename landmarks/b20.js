          case "usCapitolB20": {
            // A US state capitol, shared by most of b20's capitols (Jefferson City, Lansing, Little Rock, Madison,
            // Montgomery, Olympia, Phoenix, Providence, Raleigh, Richmond, Sacramento, Salt Lake City, Springfield,
            // Tallahassee's old capitol, Topeka, Trenton): a long classical front on a rusticated basement, end
            // pavilions, a central portico under a pediment, and a dome on a colonnaded drum with a lantern.
            // o.w width, o.nh wall height, o.cols portico columns (0: none), o.dome "tall" | "hemi" | "low" |
            // "none", o.r dome radius, o.dd drum height, o.dd2 a second, windowed drum stage above it, o.dc dome
            // colour, o.lan lantern height, o.colon columns along the wings, o.tur small domed turrets beside the
            // drum, o.awn red-striped awnings, o.statue a gilt figure on the lantern, o.cw centre block width,
            // o.wing lower wings (cells lower than the centre), o.pav end pavilions (default on).
            const hw = Math.floor((o.w ?? 29) / 2),
              nh = o.nh ?? 10,
              cols = o.cols ?? 4,
              r = o.r ?? 5,
              dd = o.dd ?? 6,
              dd2 = o.dd2 ?? 0,
              dc = o.dc ?? 6,
              kindDome = o.dome ?? "tall",
              lan = o.lan ?? 3,
              wl = o.wing ?? 0;
            const sh = chShade(c, 0.25),
              lit = chLit(c, 0.4),
              dark = chShade(c, 0.6),
              dsh = chShade(dc, 0.3),
              drib = chShade(dc, 0.14),
              dlit = chLit(dc, 0.3);
            const ph = Math.max(1, cols - 1),
              cw = Math.max(o.cw ?? 2 * ph + 5, 2 * ph + 3),
              ch = Math.floor(cw / 2),
              wh = nh - wl; // the wings' wall height
            // the wings, their basement, string course, cornice and balustrade
            box(-hw, wh, 2 * hw + 1, wh, c);
            box(-hw, 2, 2 * hw + 1, 2, sh);
            box(-hw, 3, 2 * hw + 1, 1, lit);
            box(-hw, wh, 2 * hw + 1, 1, lit);
            box(-hw, wh + 1, 2 * hw + 1, 1, lit);
            for (let p = -hw + 1; p <= hw; p += 2) box(p, wh + 1, 1, 1, c);
            box(hw, wh - 1, 1, wh - 1, sh);
            const m1 = Math.round(4 + (wh - 4) * 0.5);
            for (let p = -hw + 2; p <= hw - 2; p += 2) {
              if (Math.abs(p) <= ch + 1) continue;
              box(p, 2, 1, 1, dark);
              if (o.colon && Math.abs(p) < hw - 4) continue;
              box(p, m1, 1, Math.min(2, wh - 5), 2);
              if (wh >= 9) box(p, wh - 2, 1, wh >= 12 ? 2 : 1, 2);
              if (o.awn) box(p, m1 + 1, 1, 1, 10);
            }
            if (o.colon) {
              // a giant order of columns along the wings, in front of a shaded loggia
              for (const s of [-1, 1]) {
                const a = s < 0 ? -hw + 5 : ch + 2,
                  b = s < 0 ? -ch - 2 : hw - 5;
                box(a, wh - 1, b - a + 1, wh - 5, dark);
                for (let p = a; p <= b; p += 2) box(p, wh - 1, 1, wh - 5, lit);
              }
            }
            if (o.pav ?? hw >= 11) {
              // end pavilions, a little taller, each with a small pediment
              for (const s of [-1, 1]) {
                const l = s < 0 ? -hw : hw - 4;
                box(l, wh + 1, 5, wh + 1, c);
                box(l, wh + 1, 5, 1, lit);
                box(l, 3, 5, 1, lit);
                box(l, 2, 5, 2, sh);
                for (const d of [1, 3]) {
                  box(l + d, m1, 1, Math.min(2, wh - 5), 2);
                  if (wh >= 9) box(l + d, wh - 2, 1, 1, 2);
                }
                cone(l + 2, wh + 1, 2, 2, c);
                if (s > 0) box(hw, wh, 1, wh, sh);
              }
            }
            // the centre block and its portico
            const top = nh + 2;
            box(-ch, top, cw, top, c);
            box(-ch, 2, cw, 2, sh);
            box(-ch, top, cw, 1, lit);
            box(ch, top - 1, 1, top - 1, sh);
            if (cols) {
              box(-ph - 1, nh - 1, 2 * ph + 3, nh - 4, dark);
              for (let p = -ph; p <= ph; p += 2) {
                box(p, nh - 1, 1, nh - 4, lit);
                box(p, 4, 1, 1, c);
              }
              box(-ph - 1, nh + 1, 2 * ph + 3, 2, lit);
              box(-ph - 1, nh, 2 * ph + 3, 1, c);
              box(0, 6, 1, 2, 2);
              for (let i = 0; i < 3; i++) box(-ph - 1 - i, 3 - i, 2 * ph + 3 + 2 * i, 1, lit); // the steps
            } else {
              box(-1, 6, 3, 4, 2);
              for (const d of [-ch + 2, ch - 2]) box(d, nh - 2, 1, 2, 2);
            }
            for (const d of [-ch + 1, ch - 1]) if (ch - ph >= 3) box(d, m1, 1, 2, 2);
            // the drum and dome
            let T = top + (cols && (o.ped ?? 1) ? Math.max(0, Math.ceil((ph + 2) / 2) - 2) : 0);
            if (kindDome !== "none") {
              const rd = r + 1;
              let D = top + 2;
              box(-rd - 1, D, 2 * rd + 3, 2, c);
              box(-rd - 1, D, 2 * rd + 3, 1, lit);
              box(rd + 1, D - 1, 1, 1, sh);
              if (o.tur)
                for (const s of [-1, 1]) {
                  const tx = s * (rd + 3);
                  box(tx - 1, top + 4, 3, 4, c);
                  box(tx, top + 3, 1, 2, dark);
                  dome(tx, top + 4, 1.5, dc);
                  box(tx, top + 7, 1, 1, 3);
                }
              box(-rd, D + dd, 2 * rd + 1, dd, c);
              for (let p = -rd + 1; p < rd; p += 2) box(p, D + dd - 1, 1, dd - 2, dark);
              box(rd, D + dd, 1, dd, sh);
              D += dd + 1;
              box(-rd - 1, D, 2 * rd + 3, 1, lit);
              if (dd2) {
                box(-r, D + dd2, 2 * r + 1, dd2, c);
                for (let p = -r + 1; p < r; p += 2) box(p, D + dd2 - 1, 1, Math.max(1, dd2 - 2), 2);
                box(r, D + dd2, 1, dd2, sh);
                D += dd2;
                box(-r, D, 2 * r + 1, 1, lit);
              }
              if (kindDome === "low") {
                const lh = Math.max(2, Math.ceil(r / 2));
                cone(0, D, r, lh, dc);
                for (let j = 1; j <= lh; j++) {
                  const k = Math.round(r * (1 - j / lh));
                  if (k > 1) box(k - 1, D + j, 2, 1, dsh);
                }
                T = D + lh;
              } else {
                const k = kindDome === "tall" ? Math.round(r * 0.5) : 0;
                if (k) box(-r, D + k, 2 * r + 1, k, dc);
                dome(0, D + k, r, dc);
                for (let p = -r + 1; p < r; p += 2) {
                  const hh = Math.floor(Math.sqrt(r * r - p * p)) + k - 1;
                  if (hh > 0) box(p, D + hh, 1, hh, p > r / 3 ? dsh : drib);
                }
                for (let p = Math.ceil(r / 3) + 1; p <= r; p += 2) {
                  const hh = Math.floor(Math.sqrt(r * r - p * p)) + k;
                  if (hh > 0) box(p, D + hh, 1, hh, dsh);
                }
                box(-Math.round(r / 2), D + k + r - 1, 1, 1, dlit);
                T = D + k + r;
              }
            }
            if (cols && (o.ped ?? 1)) {
              // the pediment, in front of the drum
              const pt = Math.max(2, Math.ceil((ph + 2) / 2));
              cone(0, nh + 1, ph + 2, pt, lit);
              cone(0, nh + 1, ph, pt - 2, sh);
            }
            if (lan) {
              box(-1, T + lan, 3, lan, c);
              box(0, T + lan - 1, 1, Math.max(1, lan - 2), dark);
              box(1, T + lan, 1, lan, sh);
              dome(0, T + lan, 1.5, dc);
              T += lan + 1;
              if (o.statue) {
                box(0, T + 3, 1, 3, 12);
                box(1, T + 4, 1, 2, 12);
                box(0, T + 4, 1, 1, chShade(12, 0.3));
                T += 4;
              } else box(0, T + 2, 1, 2, 3);
            }
            break;
          }
          case "usCapitolDC": {
            // The United States Capitol, Washington, from the Mall side: the long white front with the Senate and
            // House wings and their porticoes, the central portico under its pediment, and the cast-iron dome on
            // its peristyle drum and windowed attic, with the tholos and the Statue of Freedom on top.
            const sh = chShade(c, 0.22),
              lit = chLit(c, 0.45),
              dark = chShade(c, 0.6),
              rib = chShade(c, 0.12),
              dsh = chShade(c, 0.3);
            box(-23, 9, 47, 9, c);
            box(-23, 2, 47, 2, sh);
            box(-23, 3, 47, 1, lit);
            box(-23, 9, 47, 2, lit);
            for (let p = -22; p <= 22; p += 2) box(p, 10, 1, 1, c);
            box(23, 8, 1, 8, sh);
            for (let p = -21; p <= 21; p += 2) {
              if (Math.abs(p) < 10) continue;
              box(p, 2, 1, 1, dark);
              box(p, 6, 1, 2, 2);
              box(p, 8, 1, 1, 2);
            }
            for (const s of [-1, 1]) {
              // the Senate (left) and House (right) wing porticoes
              const cx = s * 16;
              box(cx - 4, 8, 9, 5, dark);
              for (let p = -4; p <= 4; p += 2) box(cx + p, 8, 1, 5, lit);
              box(cx - 5, 10, 11, 2, lit);
              cone(cx, 10, 5, 3, lit);
              cone(cx, 10, 3, 1, sh);
            }
            // the central block, the drum's base, peristyle and balustrade
            box(-9, 12, 19, 12, c);
            box(-9, 2, 19, 2, sh);
            box(9, 11, 1, 11, sh);
            box(-9, 16, 19, 4, c);
            box(-9, 16, 19, 1, lit);
            box(-8, 22, 17, 6, c);
            for (let p = -7; p <= 7; p += 2) box(p, 21, 1, 4, dark);
            box(8, 22, 1, 6, sh);
            box(-9, 23, 19, 1, lit);
            for (let p = -9; p <= 9; p += 2) box(p, 24, 1, 1, lit);
            // the attic with its windows, then the ribbed dome with its rings of windows
            box(-7, 27, 15, 3, c);
            box(-7, 27, 15, 1, lit);
            for (let p = -6; p <= 6; p += 2) box(p, 26, 1, 1, 2);
            box(7, 27, 1, 3, sh);
            box(-6, 30, 13, 3, c);
            dome(0, 30, 6, c);
            for (let p = -5; p <= 5; p += 2) {
              const hh = Math.floor(Math.sqrt(36 - p * p)) + 2;
              box(p, 29 + hh, 1, hh, p > 2 ? dsh : rib);
            }
            box(6, 30, 1, 3, dsh);
            for (let p = -4; p <= 4; p += 2) box(p, 31, 1, 1, 2);
            for (let p = -3; p <= 3; p += 2) box(p, 33, 1, 1, 2);
            box(-3, 35, 1, 1, lit);
            // the tholos, its little dome and the Statue of Freedom
            box(-2, 40, 5, 4, c);
            box(-2, 40, 5, 1, lit);
            for (const d of [-1, 1]) box(d, 39, 1, 2, dark);
            box(2, 40, 1, 4, sh);
            dome(0, 40, 2, c);
            box(0, 44, 1, 2, c);
            box(-1, 45, 3, 1, c);
            box(0, 48, 1, 3, chShade(8, 0.4));
            box(1, 47, 1, 1, chShade(8, 0.4));
            // the central portico and its steps, in front of everything
            box(-6, 9, 13, 6, dark);
            for (let p = -6; p <= 6; p += 2) box(p, 9, 1, 6, lit);
            box(-7, 11, 15, 2, lit);
            cone(0, 11, 7, 4, lit);
            cone(0, 11, 5, 2, sh);
            for (let i = 0; i < 3; i++) box(-7 - 2 * i, 3 - i, 15 + 4 * i, 1, lit);
            break;
          }
          case "washMonument": {
            // The Washington Monument: a marble obelisk that tapers from 5 cells to 3, its lower third a warmer
            // stone (building stopped for 25 years), the pyramidion with its small windows, flags round the foot.
            const h = o.h ?? 48,
              top = h - 5,
              warm = css(e.sh(mixc(colors[c], [204, 184, 158], 0.45))),
              warmSh = css(e.sh(mixc(colors[c], [150, 132, 116], 0.55))),
              sh = chShade(c, 0.25);
            for (let i = 0, n = 12; i < n; i++) {
              const a = Math.round((i * top) / n),
                b = Math.round(((i + 1) * top) / n),
                hw = 2.5 - (1 * i) / n,
                lower = b <= Math.round(top * 0.3);
              box(0.5 - hw, b, 2 * hw, b - a, lower ? warm : c);
              box(0.5 + hw * 0.25, b, hw * 0.75, b - a, lower ? warmSh : sh);
            }
            cone(0, top, 1, 5, c);
            box(1, top + 3, 1, 3, sh);
            box(0, top - 1, 1, 1, 2);
            box(-4, 1, 9, 1, chShade(13, 0.1));
            for (const p of [-4, -3, 3, 4]) {
              box(p, 4, 1, 3, 8);
              box(p, 4, 1, 1, p % 2 ? 10 : 7);
            }
            break;
          }
          case "nebraskaCapitol": {
            // Nebraska State Capitol, Lincoln: a low square base with corner pavilions and a tall arched entrance,
            // the 400-foot shaft with its recessed window strips, the octagonal drum with buttresses, the gold
            // tiled dome and the bronze Sower on top.
            const sh = chShade(c, 0.25),
              lit = chLit(c, 0.4),
              dark = chShade(c, 0.55),
              strip = chShade(c, 0.4),
              gold = css(e.sh([214, 168, 64])),
              goldSh = css(e.sh([170, 124, 44]));
            box(-15, 8, 31, 8, c);
            box(-15, 2, 31, 2, sh);
            box(-15, 8, 31, 1, lit);
            box(15, 7, 1, 7, sh);
            for (let p = -13; p <= 13; p += 2) if (Math.abs(p) > 6) box(p, 6, 1, 3, 2);
            for (const l of [-15, 11]) {
              box(l, 10, 5, 10, c);
              box(l, 10, 5, 1, lit);
              box(l + 2, 7, 1, 4, 2);
            }
            box(-6, 11, 13, 11, c);
            box(-6, 11, 13, 1, lit);
            for (const p of [-3, 0, 3]) {
              box(p, 8, 1, 6, 2);
              box(p, 9, 1, 1, dark);
            }
            box(6, 10, 1, 10, sh);
            // the tower shaft
            box(-5, 33, 11, 22, c);
            box(-5, 33, 1, 22, lit);
            box(4, 33, 2, 22, sh);
            for (let p = -3; p <= 3; p += 2) box(p, 31, 1, 19, strip);
            for (let i = 15; i < 31; i += 4) box(-3, i, 7, 1, c);
            box(-5, 34, 11, 1, lit);
            for (const p of [-5, 4]) box(p, 36, 2, 2, c);
            // the octagonal drum, gold dome and the Sower
            box(-3, 41, 7, 7, c);
            for (const p of [-2, 0, 2]) box(p, 40, 1, 3, 2);
            box(2, 41, 1, 7, sh);
            box(-4, 36, 1, 2, c);
            box(4, 36, 1, 2, sh);
            box(-3, 42, 7, 1, gold);
            dome(0, 42, 3, gold);
            box(2, 44, 1, 2, goldSh);
            box(0, 46, 1, 1, gold);
            box(0, 50, 1, 4, dark);
            box(1, 49, 1, 1, dark);
            break;
          }
          case "oregonCapitol": {
            // Oregon State Capitol, Salem: white marble Art Deco, long low wings slit with tall windows, a
            // stark centre block with its deep entrance between relief panels, and the fluted drum carrying the
            // gilt Oregon Pioneer.
            const sh = chShade(c, 0.2),
              lit = chLit(c, 0.4),
              slit = chShade(c, 0.5),
              flute = chShade(c, 0.16),
              gold = css(e.sh([220, 172, 70]));
            box(-16, 9, 33, 9, c);
            box(-16, 9, 33, 1, lit);
            box(-16, 1, 33, 1, sh);
            box(16, 8, 1, 8, sh);
            for (let p = -15; p <= 15; p += 2) if (Math.abs(p) > 6) box(p, 7, 1, 5, slit);
            box(-6, 14, 13, 14, c);
            box(-6, 14, 13, 1, lit);
            box(6, 13, 1, 13, sh);
            box(-2, 10, 5, 10, 2);
            for (const p of [-1, 1]) box(p, 9, 1, 8, slit);
            for (const p of [-5, 3]) box(p, 11, 3, 7, flute);
            box(-5, 16, 11, 2, c);
            box(-5, 16, 11, 1, lit);
            box(-4, 28, 9, 12, c);
            for (let p = -3; p <= 3; p += 2) box(p, 27, 1, 10, flute);
            box(3, 28, 2, 12, sh);
            box(-4, 28, 9, 1, lit);
            box(-3, 29, 7, 1, c);
            box(-2, 30, 5, 1, c);
            box(-1, 31, 3, 1, gold);
            box(0, 35, 1, 4, gold);
            box(-1, 33, 1, 2, chShade(12, 0.2));
            box(1, 35, 1, 2, gold);
            break;
          }
          case "alaskaCapitol": {
            // Alaska State Capitol, Juneau: a plain six-storey brick office block on a marble ground floor, with a
            // portico of four marble columns carrying a balcony.
            const brick = css(e.sh([150, 86, 68])),
              brickSh = css(e.sh([116, 66, 54])),
              lit = chLit(c, 0.4),
              sh = chShade(c, 0.3);
            box(-13, 19, 27, 19, brick);
            box(12, 19, 2, 19, brickSh);
            box(-13, 5, 27, 5, c);
            box(-13, 5, 27, 1, lit);
            box(-13, 19, 27, 1, c);
            box(-13, 20, 27, 1, lit);
            for (let p = -11; p <= 11; p += 2) {
              box(p, 3, 1, 2, 2);
              for (const r of [8, 11, 14, 17]) box(p, r, 1, 2, 2);
            }
            box(-4, 9, 9, 7, sh);
            for (const p of [-4, -1, 2, 4]) box(p, 9, 1, 8, lit);
            box(-5, 10, 11, 1, lit);
            box(-5, 11, 11, 1, c);
            for (let p = -5; p <= 5; p += 2) box(p, 11, 1, 1, lit);
            box(-1, 5, 3, 4, 2);
            break;
          }
          case "strat": {
            // The Strat (Stratosphere), Las Vegas: a concrete shaft flaring into three legs at the foot, the
            // stacked pod (window bands, the observation decks), and the mast with the red thrill rides.
            const h = o.h ?? 56,
              P = o.pod ?? 38,
              sh = chShade(c, 0.28),
              lit = chLit(c, 0.3);
            box(-1, P, 3, P, c);
            box(1, P, 1, P, sh);
            for (let i = 1; i <= 24; i++) {
              const k = Math.round(1 + 5 * Math.pow(1 - i / 24, 1.6));
              if (k < 2) continue;
              box(-k, i, 3, 1, c);
              box(k - 2, i, 3, 1, sh);
            }
            box(0, 34, 1, 30, chShade(c, 0.15));
            box(-3, P + 1, 7, 1, sh);
            box(-4, P + 2, 9, 1, c);
            box(-5, P + 4, 11, 2, c);
            box(-5, P + 3, 11, 1, 2);
            box(-6, P + 6, 13, 2, lit);
            box(-6, P + 5, 13, 1, 2);
            box(-5, P + 8, 11, 2, c);
            box(-5, P + 7, 11, 1, 2);
            box(-4, P + 9, 9, 1, lit);
            box(-2, P + 11, 5, 2, c);
            box(-1, P + 14, 3, 3, 10);
            box(0, h, 1, h - P - 14, 8);
            box(0, h, 1, 1, 10);
            break;
          }
          case "luxor": {
            // Luxor, Las Vegas: the black glass pyramid with lit edges and the beam from its apex, the sphinx
            // and the lit entrance in front.
            const hw = o.w ?? 14,
              h = o.h ?? 20,
              glass = css(e.sh([44, 46, 60])),
              band = css(e.sh([64, 68, 86])),
              edge = css(e.sh([150, 150, 170])),
              sand = css(e.sh([214, 180, 120])),
              sandSh = css(e.sh([170, 136, 90]));
            cone(0, 0, hw, h, glass);
            for (let j = 0; j < h; j++) {
              const k = Math.round(hw * (1 - j / h));
              if (j % 3 === 2 && k > 1) box(-k + 1, j + 1, 2 * k - 1, 1, band);
              box(-k, j + 1, 1, 1, edge);
              box(k, j + 1, 1, 1, edge);
            }
            box(0, h + 3, 1, 3, 3);
            box(-2, 3, 5, 3, 3);
            box(-11, 4, 6, 3, sand);
            box(-7, 6, 2, 3, sand);
            box(-6, 6, 1, 3, sandSh);
            box(-11, 1, 6, 1, sandSh);
            break;
          }
          case "griffith": {
            // Griffith Observatory, Los Angeles: the white Art Deco front with its long colonnade, the central
            // planetarium dome in dark copper and the two smaller telescope domes on the end towers.
            const sh = chShade(c, 0.2),
              lit = chLit(c, 0.4),
              cu = css(e.sh([104, 92, 78])),
              cuSh = css(e.sh([76, 68, 60])),
              cuLit = css(e.sh([150, 132, 104]));
            box(-15, 7, 31, 7, c);
            box(-15, 7, 31, 1, lit);
            box(-15, 1, 31, 1, sh);
            box(15, 6, 1, 6, sh);
            for (let p = -11; p <= 11; p += 2) if (Math.abs(p) > 4) box(p, 5, 1, 3, 2);
            for (const s of [-1, 1]) {
              const tx = s * 12;
              box(tx - 2, 12, 5, 12, c);
              box(tx - 2, 12, 5, 1, lit);
              box(tx, 9, 1, 2, 2);
              box(tx + 2, 11, 1, 11, sh);
              dome(tx, 12, 2.5, cu);
              box(tx + 1, 13, 1, 2, cuSh);
            }
            box(-4, 10, 9, 10, c);
            box(-4, 10, 9, 1, lit);
            box(-1, 6, 3, 5, 2);
            box(4, 9, 1, 9, sh);
            box(-6, 13, 13, 3, c);
            box(-6, 13, 13, 1, lit);
            dome(0, 13, 6, cu);
            for (const p of [3, 4, 5])
              box(p, 13 + Math.floor(Math.sqrt(36 - p * p)), 1, Math.floor(Math.sqrt(36 - p * p)), cuSh);
            box(-3, 17, 1, 2, cuLit);
            box(0, 20, 1, 1, cu);
            box(0, 4, 1, 3, lit);
            break;
          }
          case "usBankTower": {
            // U.S. Bank Tower, Los Angeles: a pale granite cylinder with vertical window strips, stepped notches
            // where it meets the square core, and the glass crown that glows at the top.
            const h = o.h ?? 50,
              sh = chShade(c, 0.3),
              lit = chLit(c, 0.35),
              strip = chShade(c, 0.45),
              glow = css(e.sh([246, 222, 150]));
            box(-5, 22, 11, 22, c);
            box(4, 22, 2, 22, sh);
            box(-5, 22, 1, 22, lit);
            box(-4, h, 9, h, c);
            box(-4, h, 1, h, lit);
            box(3, h, 2, h, sh);
            for (let p = -3; p <= 2; p += 2) box(p, h - 1, 1, h - 3, strip);
            for (let i = 12; i < h; i += 12) box(-4, i, 9, 1, c);
            box(-3, h + 1, 7, 1, c);
            box(-3, h + 4, 7, 3, glow);
            box(-3, h + 3, 7, 1, 11);
            box(2, h + 4, 1, 3, 12);
            box(-2, h + 5, 5, 1, c);
            box(-4, 3, 9, 2, 2);
            break;
          }
          case "freedomTower": {
            // Freedom Tower, Miami: a Mediterranean Revival tower modelled on Seville's Giralda, on a wide
            // base under red tile roofs, with balconies, an arcaded belvedere and a domed cupola.
            const sh = chShade(c, 0.22),
              lit = chLit(c, 0.4),
              tile = css(e.sh([196, 96, 66])),
              tileSh = css(e.sh([150, 70, 52]));
            box(-6, 12, 13, 12, c);
            box(-6, 13, 13, 1, tile);
            box(6, 12, 1, 12, sh);
            for (const p of [-4, -2, 2, 4]) {
              box(p, 4, 1, 2, 2);
              box(p, 9, 1, 2, 2);
            }
            box(-1, 5, 3, 5, 2);
            dome(0, 5, 1.5, 2);
            box(-3, 30, 7, 17, c);
            box(2, 30, 1, 17, sh);
            for (let i = 16; i < 29; i += 4) {
              box(-2, i, 1, 2, 2);
              box(0, i, 1, 2, 2);
              box(-3, i - 2, 7, 1, lit);
            }
            box(-4, 31, 9, 1, lit);
            box(-3, 35, 7, 4, c);
            for (const p of [-2, 0]) box(p, 34, 1, 2, 2);
            box(2, 35, 1, 4, sh);
            box(-4, 36, 9, 1, tile);
            box(-2, 37, 5, 1, c);
            dome(0, 37, 2, tile);
            box(1, 38, 1, 1, tileSh);
            box(0, 41, 1, 2, c);
            box(0, 42, 1, 1, 3);
            break;
          }
          case "miamiTower": {
            // Miami Tower (Bank of America Tower): a parking podium, then a tower that ends in three stepped
            // quarter-round tiers, banded with the coloured lights it is known for.
            const sh = chShade(c, 0.25),
              lit = chLit(c, 0.3),
              glass = chShade(11, 0.15);
            box(-4, 14, 9, 14, c);
            for (let i = 3; i < 14; i += 2) box(-4, i, 9, 1, sh);
            box(-4, 30, 9, 16, c);
            for (let i = 16; i < 30; i += 2) box(-3, i, 7, 1, glass);
            box(4, 30, 1, 30, sh);
            for (let i = 0; i < 3; i++) {
              const k = 4 - i,
                b = 30 + i * 4;
              box(-k, b + 3, 2 * k + 1, 3, c);
              dome(0, b + 3, k, c);
              box(-k, b + 2, 2 * k + 1, 1, i === 1 ? 10 : 11);
              box(k, b + 3, 1, 3, sh);
            }
            box(-1, 46, 1, 2, lit);
            box(0, 48, 1, 2, 8);
            break;
          }
          case "idsCenter": {
            // IDS Center, Minneapolis: a blue glass slab whose corners step back in a zigzag of reflective
            // notches, over the low glass Crystal Court.
            const h = o.h ?? 50,
              gl = 11,
              band = chShade(gl, 0.2),
              notch = chShade(gl, 0.45),
              shine = chLit(gl, 0.3);
            box(-6, 5, 13, 5, shine);
            box(-5, 7, 11, 2, shine);
            for (let p = -5; p <= 5; p += 2) box(p, 6, 1, 6, band);
            box(-4, h, 9, h, gl);
            for (let i = 9; i < h; i += 2) box(-2, i, 5, 1, band);
            for (let i = 6; i < h; i += 2) {
              box(-4, i, 1, 1, notch);
              box(-3, i + 1, 1, 1, shine);
              box(4, i, 1, 1, notch);
              box(3, i + 1, 1, 1, notch);
            }
            box(3, h, 2, h, chShade(gl, 0.3));
            box(-4, h, 9, 1, shine);
            box(-2, h + 2, 5, 2, gl);
            break;
          }
          case "foshay": {
            // Foshay Tower, Minneapolis: an Art Deco obelisk modelled on the Washington Monument, rising from a
            // low base, with FOSHAY spelled in lights under the pyramidion and a short mast.
            const h = o.h ?? 34,
              sh = chShade(c, 0.25),
              lit = chLit(c, 0.3);
            box(-5, 6, 11, 6, c);
            box(-5, 6, 11, 1, lit);
            box(5, 5, 1, 5, sh);
            for (const p of [-3, -1, 1, 3]) box(p, 4, 1, 2, 2);
            for (let i = 0, n = 8; i < n; i++) {
              const a = 6 + Math.round((i * (h - 6)) / n),
                b = 6 + Math.round(((i + 1) * (h - 6)) / n),
                hw = 3.5 - (1.3 * i) / n;
              box(0.5 - hw, b, 2 * hw, b - a, c);
              box(0.5 + hw * 0.35, b, hw * 0.65, b - a, sh);
            }
            for (let i = 9; i < h - 4; i += 3) box(0, i, 1, 2, 2);
            box(-1, h - 1, 3, 2, 2);
            for (const p of [-1, 1]) box(p, h - 1, 1, 1, 3);
            cone(0, h, 2, 4, c);
            box(1, h + 2, 1, 2, sh);
            box(0, h + 7, 1, 3, 8);
            break;
          }
          case "parthenonNash": {
            // The Parthenon, Nashville: the full-size concrete replica, seen from the front: eight Doric columns
            // on the stepped stylobate, the triglyph frieze and the low pediment.
            const sh = chShade(c, 0.25),
              lit = chLit(c, 0.35),
              dark = chShade(c, 0.6);
            box(-17, 1, 35, 1, sh);
            box(-16, 2, 33, 1, lit);
            box(-15, 11, 31, 9, dark);
            for (let i = 0; i < 8; i++) {
              const p = -15 + i * 4;
              box(p, 11, 1, 9, lit);
              box(p + 1, 11, 1, 9, c);
              box(p, 11, 2, 1, lit);
            }
            box(-16, 13, 33, 2, c);
            for (let p = -15; p <= 15; p += 2) box(p, 13, 1, 1, sh);
            box(-16, 14, 33, 1, lit);
            cone(0, 14, 17, 5, lit);
            cone(0, 14, 14, 3, sh);
            break;
          }
          case "stLouisCathedral": {
            // St. Louis Cathedral, New Orleans: the white front on Jackson Square with three arched doors, the
            // tall central clock tower and two hexagonal side towers, all under slender slate spires.
            const sh = chShade(c, 0.2),
              lit = chLit(c, 0.4),
              slate = css(e.sh([62, 64, 76])),
              slateSh = css(e.sh([44, 46, 56]));
            box(-10, 16, 21, 16, c);
            box(-10, 8, 21, 1, lit);
            box(-10, 16, 21, 1, lit);
            box(10, 15, 1, 15, sh);
            for (const p of [-6, 0, 6]) {
              box(p - 1, 5, 3, 5, 2);
              dome(p, 5, 1.5, 2);
              box(p, 13, 1, 3, 2);
            }
            for (const p of [-3, 3]) box(p, 12, 1, 2, 2);
            for (const s of [-1, 1]) {
              const l = s < 0 ? -10 : 6;
              box(l, 24, 5, 8, c);
              box(l, 24, 5, 1, lit);
              box(l + 2, 22, 1, 3, 2);
              if (s > 0) box(l + 4, 23, 1, 7, sh);
              cone(l + 2, 24, 2, 9, slate);
              box(l + 3, 28, 1, 3, slateSh);
              box(l + 2, 35, 1, 2, 3);
            }
            box(-2, 30, 5, 14, c);
            box(-2, 30, 5, 1, lit);
            orb(0, 21, 1.5, 6);
            orb(0, 21, 0.6, 2);
            box(0, 27, 1, 3, 2);
            box(2, 29, 1, 13, sh);
            cone(0, 30, 2, 13, slate);
            box(1, 36, 1, 4, slateSh);
            box(0, 46, 1, 3, 3);
            box(-1, 45, 3, 1, 3);
            break;
          }
          case "devonTower": {
            // Devon Energy Center, Oklahoma City: a glass tower whose crown leans back in a slanting fin, over
            // the low glass rotunda at its foot.
            const h = o.h ?? 42,
              gl = c,
              band = chShade(gl, 0.18),
              sh = chShade(gl, 0.35),
              shine = chLit(gl, 0.35);
            box(-7, 6, 4, 6, shine);
            dome(-5, 6, 2, shine);
            box(-4, h, 9, h, gl);
            for (let i = 4; i < h; i += 2) box(-4, i, 9, 1, band);
            box(-4, h, 1, h, shine);
            box(3, h, 2, h, sh);
            for (let j = 0; j < 8; j++) box(-4, h + 1 + j, Math.max(1, 9 - j), 1, j % 2 ? band : gl);
            box(-4, h + 8, 1, 8, shine);
            box(-4, 3, 9, 2, 2);
            break;
          }
          case "phillyCityHall": {
            // Philadelphia City Hall: the Second Empire mass with mansard pavilions, and its great tower: the
            // stone shaft, the clock faces, the cream cast-iron drum and dome, and William Penn on top.
            const sh = chShade(c, 0.25),
              lit = chLit(c, 0.4),
              slate = css(e.sh([84, 92, 104])),
              cream = css(e.sh([236, 226, 200])),
              creamSh = css(e.sh([196, 184, 160])),
              bronze = css(e.sh([90, 78, 62]));
            box(-7, 11, 15, 11, c);
            box(-7, 2, 15, 2, sh);
            box(7, 10, 1, 10, sh);
            for (let p = -6; p <= 6; p += 2) {
              box(p, 5, 1, 2, 2);
              box(p, 9, 1, 2, 2);
            }
            for (const l of [-7, 5]) {
              box(l, 14, 3, 3, slate);
              box(l + 1, 15, 1, 1, slate);
              box(l + 1, 13, 1, 1, 2);
            }
            box(-3, 27, 7, 16, c);
            box(-3, 27, 1, 16, lit);
            box(2, 27, 2, 16, sh);
            for (const r of [16, 21]) box(0, r, 1, 3, 2);
            box(-1, 5, 3, 5, 2);
            box(-4, 28, 9, 1, lit);
            box(-3, 30, 7, 2, c);
            box(-2, 35, 5, 5, cream);
            box(1, 35, 1, 5, creamSh);
            orb(0, 32, 1.5, 6);
            box(0, 33, 1, 1, 2);
            for (const p of [-1, 1]) box(p, 37, 1, 2, 2);
            box(-2, 36, 5, 1, creamSh);
            dome(0, 36, 2.5, cream);
            box(1, 38, 1, 1, creamSh);
            box(0, 40, 1, 1, cream);
            box(-1, 41, 3, 1, cream);
            box(0, 45, 1, 4, bronze);
            box(1, 43, 1, 1, bronze);
            break;
          }
          case "comcastCenter": {
            // Comcast Technology Center, Philadelphia: a tall grey-glass tower whose top is an open lantern of
            // fins, with a shallow notch running up its side.
            const h = o.h ?? 40,
              gl = css(e.sh([124, 146, 160])),
              band = css(e.sh([104, 124, 140])),
              sh = css(e.sh([84, 100, 116])),
              shine = css(e.sh([176, 196, 206]));
            box(-4, h, 9, h, gl);
            for (let i = 4; i < h; i += 2) box(-4, i, 9, 1, band);
            box(1, h, 1, h - 4, shine);
            box(3, h, 2, h, sh);
            box(-4, h + 1, 9, 1, shine);
            for (const p of [-4, 4]) box(p, h + 7, 1, 7, p > 0 ? sh : gl);
            for (let i = h + 2; i <= h + 6; i += 2) box(-3, i, 7, 1, band);
            box(-4, h + 7, 9, 1, shine);
            box(-4, 3, 9, 2, 2);
            break;
          }
          case "slcTemple": {
            // Salt Lake Temple: the grey granite temple seen from its east end, three spired towers with corner
            // pinnacles (the centre one tallest, with the gilt angel Moroni), rows of round-headed windows.
            const sh = chShade(c, 0.25),
              lit = chLit(c, 0.4),
              gold = css(e.sh([224, 180, 76]));
            box(-12, 18, 25, 18, c);
            box(-12, 18, 25, 1, lit);
            box(12, 17, 1, 17, sh);
            for (let p = -11; p <= 11; p += 2) {
              box(p, 8, 1, 3, 2);
              box(p, 14, 1, 2, 2);
            }
            box(-12, 2, 25, 1, sh);
            for (const s of [-1, 1]) {
              const cx = s * 9;
              box(cx - 2, 28, 5, 28, c);
              box(cx - 2, 28, 5, 1, lit);
              for (const r of [20, 24]) box(cx, r, 1, 2, 2);
              box(cx - 2, 30, 1, 2, c);
              box(cx + 2, 30, 1, 2, c);
              if (s > 0) box(cx + 2, 27, 1, 26, sh);
              cone(cx, 28, 1, 6, c);
              box(cx, 35, 1, 1, 3);
            }
            box(-3, 34, 7, 34, c);
            box(-3, 34, 7, 1, lit);
            box(3, 33, 1, 32, sh);
            for (const r of [22, 27, 31]) box(0, r, 1, 3, 2);
            for (const p of [-3, 3]) box(p, 37, 1, 3, c);
            cone(0, 34, 2, 8, c);
            box(1, 39, 1, 3, sh);
            box(0, 45, 1, 3, gold);
            box(1, 46, 2, 1, gold);
            break;
          }
          case "towerAmericas": {
            // Tower of the Americas, San Antonio: a plain concrete shaft with its lift strip, crowned by the
            // four-level top house (glass bands of the restaurant and the deck) and the antenna.
            const h = o.h ?? 36,
              sh = chShade(c, 0.28),
              lit = chLit(c, 0.3),
              glass = chShade(11, 0.25);
            box(-3, 3, 7, 3, c);
            box(-2, h, 5, h, c);
            box(-2, h, 1, h, lit);
            box(1, h, 2, h, sh);
            box(0, h - 2, 1, h - 6, glass);
            box(-3, h + 1, 7, 1, sh);
            box(-4, h + 2, 9, 1, c);
            box(-5, h + 4, 11, 2, glass);
            box(-6, h + 5, 13, 1, lit);
            box(-6, h + 7, 13, 2, glass);
            box(-6, h + 8, 13, 1, c);
            box(-5, h + 9, 11, 1, lit);
            box(4, h + 7, 2, 6, chShade(11, 0.45));
            box(-3, h + 10, 7, 1, c);
            box(0, h + 15, 1, 5, 8);
            break;
          }
          case "californiaTower": {
            // California Tower, Balboa Park, San Diego: the Spanish Colonial tower of the California Building,
            // with its carved front, stages of arched openings, and the blue-and-gold tiled dome; the building's
            // big tiled dome beside it.
            const sh = chShade(c, 0.22),
              lit = chLit(c, 0.4),
              tile = css(e.sh([58, 104, 168])),
              tileLit = css(e.sh([224, 186, 80]));
            box(-6, 10, 13, 10, c);
            box(6, 9, 1, 9, sh);
            box(-2, 9, 5, 8, lit);
            box(-1, 5, 3, 4, 2);
            dome(0, 5, 1.5, 2);
            box(0, 8, 1, 1, sh);
            box(-6, 13, 5, 3, c);
            dome(-4, 13, 2.5, tile);
            box(-4, 15, 1, 1, tileLit);
            box(-3, 22, 7, 12, c);
            box(3, 22, 1, 12, sh);
            box(0, 17, 1, 3, 2);
            box(-3, 22, 7, 1, lit);
            box(-2, 28, 5, 6, c);
            for (const p of [-1, 1]) box(p, 27, 1, 3, 2);
            box(2, 28, 1, 6, sh);
            box(-3, 29, 7, 1, lit);
            box(-2, 32, 5, 3, c);
            box(0, 31, 1, 2, 2);
            dome(0, 32, 2.5, tile);
            box(-1, 33, 3, 1, tileLit);
            box(0, 36, 1, 1, c);
            box(0, 38, 1, 2, 3);
            break;
          }
          case "pointLoma": {
            // Old Point Loma Lighthouse, San Diego: a small white Cape Cod house with the lantern rising
            // through its roof, and a lower wing beside it.
            const sh = chShade(c, 0.2),
              roof = css(e.sh([86, 82, 84])),
              lantern = css(e.sh([40, 70, 64]));
            box(-6, 5, 5, 5, c);
            cone(-4, 5, 3, 2, roof);
            box(-4, 3, 1, 2, 2);
            box(-2, 8, 7, 8, c);
            box(4, 7, 1, 7, sh);
            for (const p of [-1, 3]) {
              box(p, 3, 1, 2, 2);
              box(p, 7, 1, 2, 2);
            }
            box(1, 3, 1, 3, 2);
            cone(1, 8, 4, 3, roof);
            box(0, 13, 3, 3, c);
            box(2, 13, 1, 3, sh);
            box(-1, 14, 5, 1, lantern);
            box(0, 16, 3, 2, 3);
            box(0, 16, 1, 2, lantern);
            dome(1, 16, 1.5, lantern);
            box(1, 19, 1, 1, lantern);
            break;
          }
          case "transamerica": {
            // Transamerica Pyramid, San Francisco: the slender white pyramid with window rows, the two
            // "wings" for lifts and stairs near the top, and the aluminium spire.
            const h = o.h ?? 44,
              sh = chShade(c, 0.22),
              win = chShade(c, 0.42),
              lit = chLit(c, 0.3);
            for (let i = 0; i < h; i += 2) {
              const k = 5.5 * (1 - i / (h + 3));
              box(0.5 - k, i + 2, 2 * k, 2, c);
              box(0.5 + k * 0.45, i + 2, k * 0.55, 2, sh);
              if (k > 1.2) box(1.5 - k, i + 1, 2 * k - 2, 1, win);
            }
            for (const s of [-1, 1]) {
              const at = Math.round(h * 0.6),
                k = 5.5 * (1 - at / (h + 3));
              box(
                s < 0 ? 0.5 - k - 1 : 0.5 + k,
                Math.round(h * 0.86),
                1,
                Math.round(h * 0.86) - at,
                s < 0 ? lit : sh,
              );
            }
            box(0, h + 10, 1, 10, lit);
            box(-5, 3, 11, 2, 2);
            for (let p = -4; p <= 4; p += 2) box(p, 3, 1, 2, c);
            break;
          }
          case "stFrancisSF": {
            // Cathedral Basilica of St. Francis of Assisi, Santa Fe: brown sandstone Romanesque Revival, two
            // square towers left without their spires, arched belfry openings, a rose window over the arched
            // portal, and a cross on the gable.
            const s = css(e.sh([188, 138, 92])),
              sSh = css(e.sh([150, 106, 72])),
              sLit = css(e.sh([216, 172, 120]));
            box(-10, 13, 21, 13, s);
            box(-10, 13, 21, 1, sLit);
            box(-10, 1, 21, 1, sSh);
            for (const l of [-10, 5]) {
              box(l, 20, 6, 20, s);
              box(l, 20, 6, 1, sLit);
              box(l, 14, 6, 1, sLit);
              box(l + 1, 18, 1, 3, 2);
              box(l + 3, 18, 1, 3, 2);
              box(l + 2, 10, 1, 2, 2);
              if (l > 0) box(l + 5, 19, 1, 19, sSh);
            }
            cone(0, 13, 4, 4, s);
            box(0, 19, 1, 3, 3);
            box(-1, 18, 3, 1, 3);
            orb(0, 10, 2, sSh);
            orb(0, 10, 1, 2);
            box(-2, 6, 5, 5, sSh);
            box(-1, 5, 3, 4, 2);
            dome(0, 5, 1.5, 2);
            for (const p of [-7, 7]) box(p, 4, 1, 3, 2);
            break;
          }
          case "spaceNeedle": {
            // Space Needle, Seattle: white legs pinched at the waist and flaring up to the saucer (the halo,
            // the window band, the observation deck), its roof and the spire.
            const sh = chShade(c, 0.28),
              lit = chLit(c, 0.3),
              core = chShade(8, 0.1);
            const S = 34;
            box(0, S, 1, S, core);
            for (let i = 1; i <= S; i++) {
              const k = i < 13 ? 1.6 + 5.4 * Math.pow(1 - i / 13, 1.3) : 1.6 + 3 * ((i - 13) / (S - 13));
              box(-Math.round(k) - (i < 6 || i > 26 ? 1 : 0), i, i < 6 || i > 26 ? 2 : 1, 1, c);
              box(Math.round(k), i, i < 6 || i > 26 ? 2 : 1, 1, sh);
            }
            box(-2, 12, 5, 1, lit);
            box(-5, S + 1, 11, 1, sh);
            box(-6, S + 2, 13, 1, c);
            box(-8, S + 4, 17, 2, lit);
            box(-7, S + 3, 15, 1, 2);
            box(-7, S + 5, 15, 1, c);
            box(-6, S + 6, 13, 1, 2);
            box(-5, S + 7, 11, 1, c);
            cone(0, S + 7, 3, 2, c);
            box(0, S + 15, 1, 6, 8);
            break;
          }
          case "columbiaCenter": {
            // Columbia Center, Seattle: the black glass tower in three curved, stepped tiers.
            const dg = css(e.sh([50, 56, 70])),
              band = css(e.sh([64, 72, 90])),
              shine = css(e.sh([104, 118, 140])),
              sh = css(e.sh([36, 40, 50]));
            const tiers = [
              [5, 30],
              [4, 40],
              [3, 47],
            ];
            for (const [k, top] of tiers) {
              box(-k, top, 2 * k + 1, top, dg);
              for (let i = 4; i < top; i += 3) box(-k, i, 2 * k + 1, 1, band);
              box(-k + 1, top, 1, top, shine);
              box(k, top, 1, top, sh);
              box(-k, top, 2 * k + 1, 1, shine);
            }
            box(-5, 3, 11, 2, 2);
            break;
          }
          case "flCapitol": {
            // Florida State Capitol, Tallahassee: the 22-storey white tower with its vertical window strips and
            // the flat crown, the two legislative chambers' domes at its feet.
            const h = o.h ?? 38,
              sh = chShade(c, 0.22),
              lit = chLit(c, 0.4),
              strip = chShade(c, 0.5);
            box(-7, 6, 15, 6, c);
            box(-7, 6, 15, 1, lit);
            for (const s of [-1, 1]) {
              dome(s * 5, 6, 2, c);
              box(s * 5 + 1, 7, 1, 1, sh);
            }
            box(-4, h, 9, h - 6, c);
            box(-4, h, 1, h - 6, lit);
            box(3, h, 2, h - 6, sh);
            for (let p = -3; p <= 2; p += 2) box(p, h - 3, 1, h - 10, strip);
            box(-4, h - 1, 9, 1, strip);
            box(-5, h + 1, 11, 2, c);
            box(-5, h + 1, 11, 1, lit);
            box(-3, h + 2, 7, 1, c);
            box(-1, 4, 3, 3, 2);
            break;
          }
