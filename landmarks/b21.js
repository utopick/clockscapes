          // Indian landmarks (Agartala to Kanpur). Most cases shade with tn(rgb, k): k > 0 lightens towards
          // the lit side, k < 0 darkens towards the shaded side, through the scene's light.
          case "ujjayanta": {
            // Ujjayanta Palace (Agartala): the white Indo-Saracenic palace, two storeys of arcades along the
            // wings under a balustrade, a domed tower at each end, the arched entrance block in the middle
            // and the four-storey central tower under the great dome.
            const sh = chShade(c, 0.22),
              lit = chLit(c, 0.45);
            box(-18, 2, 37, 2, sh); // the terrace
            box(-17, 11, 35, 9, c);
            box(16, 11, 1, 9, sh);
            box(-17, 7, 35, 1, lit);
            box(-17, 12, 35, 1, lit);
            for (let p = -17; p <= 17; p += 2) box(p, 13, 1, 1, lit);
            for (const s of [-1, 1])
              for (let i = 0; i < 3; i++) {
                const wx = s * (7 + 2 * i);
                box(wx, 6, 1, 3, 2); // ground-floor arcade
                box(wx, 10, 1, 2, 2); // upper arcade
              }
            for (const s of [-1, 1]) {
              // the end towers with their little domes
              const px = s * 14;
              box(px - 2, 17, 5, 15, c);
              box(px + 2, 17, 1, 15, sh);
              for (const r of [6, 10, 15]) box(px, r, 1, 2, 2);
              box(px - 3, 18, 7, 1, lit);
              dome(px, 18, 2, lit);
              box(px, 22, 1, 2, 3);
            }
            box(-5, 15, 11, 13, c); // the entrance block
            box(5, 15, 1, 13, sh);
            box(-2, 10, 5, 7, lit);
            box(-1, 9, 3, 6, 2);
            dome(0, 9, 1.5, 2);
            box(-6, 16, 13, 1, lit);
            box(-4, 22, 9, 6, c); // the central tower
            box(4, 22, 1, 6, sh);
            for (const p of [-2, 0, 2]) box(p, 21, 1, 3, 2);
            box(-5, 23, 11, 1, lit);
            for (const s of [-5, 5]) box(s, 24, 1, 1, lit);
            box(-3, 25, 7, 2, c);
            dome(0, 25, 4, lit);
            box(0, 30, 1, 3, 3);
            break;
          }
          case "agraFort": {
            // Agra Fort: the red sandstone ramparts, a low outer wall in front, the high wall with its merlons
            // and loopholes between two great round bastions, and the Amar Singh Gate with its pointed arch,
            // white inlay and two little domed kiosks on top.
            const red = [176, 86, 60],
              tn = (k) => css(e.sh(mixc(red, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              R = tn(0),
              S = tn(-0.3),
              D = tn(-0.14),
              Lt = tn(0.25);
            box(-15, 5, 31, 5, D);
            for (let p = -15; p <= 15; p += 2) box(p, 6, 1, 1, D);
            box(-14, 13, 29, 7, R);
            box(-14, 11, 29, 1, S);
            for (let p = -14; p <= 14; p += 2) box(p, 14, 1, 1, R);
            for (const s of [-1, 1]) {
              const cx = s * 10;
              box(cx - 4, 16, 9, 11, R);
              box(cx - 4, 16, 2, 11, Lt);
              box(cx + 3, 16, 2, 11, S);
              box(cx - 4, 12, 9, 1, S);
              for (let p = cx - 4; p <= cx + 4; p += 2) box(p, 17, 1, 1, p > cx + 2 ? S : R);
              for (const y of [9, 14]) box(cx, y, 1, 1, 2);
            }
            box(-4, 17, 9, 12, R); // the gate
            box(4, 17, 1, 12, S);
            box(-3, 14, 7, 8, Lt);
            box(-2, 13, 5, 7, chLit(6, 0));
            box(-1, 12, 3, 1, R);
            box(-2, 11, 5, 6, 2);
            cone(0, 11, 2, 2, 2);
            box(-4, 16, 9, 1, Lt);
            for (const s of [-1, 1]) {
              const x = s * 3;
              box(x - 1, 18, 3, 1, Lt);
              box(x - 1, 20, 1, 2, R);
              box(x + 1, 20, 1, 2, R);
              box(x - 2, 21, 5, 1, Lt);
              dome(x, 21, 1.5, chLit(6, 0));
              box(x, 24, 1, 1, 3);
            }
            break;
          }
          case "jhultaMinar": {
            // Jhulta Minar (Sidi Bashir Mosque, Ahmedabad): the two carved sandstone minarets, every few rows a
            // jutting balcony on dark brackets, broken off above the top balconies, with the arched gate
            // between them.
            const st = [200, 160, 116],
              tn = (k) => css(e.sh(mixc(st, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              B = tn(0),
              S = tn(-0.3),
              D = tn(-0.5),
              Lt = tn(0.3);
            box(-5, 18, 11, 17, B); // the gate between the minarets
            box(-6, 19, 13, 1, Lt);
            for (let p = -5; p <= 5; p += 2) box(p, 20, 1, 1, B);
            box(-3, 13, 7, 12, Lt);
            box(-2, 12, 5, 11, 2);
            dome(0, 12, 2, 2);
            for (const s of [-1, 1]) {
              const cx = s * 8;
              box(cx - 2, 30, 5, 30, B);
              box(cx + 1, 30, 2, 30, S);
              box(cx - 2, 30, 1, 30, Lt);
              for (let y = 3; y < 30; y += 2) box(cx - 2, y, 5, 1, y % 4 === 1 ? S : B); // carved courses
              for (const y of [10, 18, 24, 29]) {
                box(cx - 3, y - 1, 7, 1, D); // brackets
                box(cx - 3, y + 1, 7, 2, B); // balcony
                box(cx + 2, y + 1, 1, 2, S);
                box(cx - 3, y + 1, 7, 1, Lt);
              }
              box(cx - 2, 33, 5, 3, B);
              box(cx + 1, 33, 2, 3, S);
              box(cx - 3, 34, 7, 1, Lt);
              box(cx - 2, 35, 5, 1, D);
            }
            break;
          }
          case "solomonTemple": {
            // Solomon's Temple (Aizawl): the white marble church, a long colonnaded portico across the front,
            // gabled halls rising to the tall central tower with its cross and spired crown of pinnacles, and
            // a three-storey tower with a tall pointed spire at each end.
            const sh = chShade(c, 0.2),
              lit = chLit(c, 0.45),
              dk = chShade(c, 0.45);
            box(-16, 9, 33, 9, c);
            box(-16, 7, 33, 6, dk); // shade behind the portico
            box(-16, 9, 33, 1, lit);
            for (let p = -15; p <= 15; p += 3) box(p, 8, 1, 7, lit); // the portico columns
            box(-3, 10, 7, 2, lit); // the porch pediment
            cone(0, 10, 3, 2, lit);
            for (const s of [-1, 1]) {
              // gabled hall roofs sloping down from the tower
              for (let j = 0; j < 5; j++) box(s > 0 ? 4 : -9 + j, 10 + j, 5, 1, j % 2 ? c : lit);
              const px = s * 13;
              box(px - 3, 19, 7, 10, c);
              box(px + 3, 19, 1, 10, sh);
              for (const r of [12, 16]) for (const d of [-1, 1]) box(px + d, r, 1, 2, 2);
              box(px - 3, 20, 7, 1, lit);
              cone(px, 20, 2, 11, c);
              box(px + 1, 30, 1, 9, sh);
              chPinnacles(px, 3, 20, "spire", c);
              box(px, 33, 1, 1, 3);
            }
            box(-4, 30, 9, 21, c); // the central tower
            box(4, 30, 1, 21, sh);
            for (const y of [14, 20, 26]) box(-4, y, 9, 1, lit);
            box(-2, 18, 5, 3, 2); // the round window
            box(0, 25, 1, 4, 2); // the cross
            box(-1, 24, 3, 1, 2);
            cone(0, 30, 4, 9, c);
            box(1, 38, 3, 8, sh);
            for (const [p, y] of [
              [-4, 32],
              [4, 32],
              [-3, 35],
              [3, 35],
              [-2, 38],
              [2, 38],
            ])
              box(p, y, 1, 2, lit); // the pinnacles on the crown
            box(0, 42, 1, 3, 3);
            break;
          }
          case "harmandirSahib": {
            // Harmandir Sahib, the Golden Temple (Amritsar): the two-storey gilt shrine on its sacred pool,
            // white marble below and gold above with dark windows, a parapet of little domes, a domed kiosk at
            // each corner and the fluted lotus dome in the middle; the marble causeway with its lamps on the left.
            const gold = [222, 170, 58],
              tn = (k) => css(e.sh(mixc(gold, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              G = tn(0),
              GS = tn(-0.3),
              GL = tn(0.35),
              W = chLit(6, 0),
              water = css(e.sh([70, 118, 148]));
            box(-21, 3, 43, 3, water); // the pool
            box(-21, 3, 43, 1, css(e.sh([110, 156, 176])));
            box(-9, 2, 19, 1, tn(-0.4)); // the reflection
            box(-21, 4, 12, 1, W); // the causeway
            for (let p = -20; p < -10; p += 3) {
              box(p, 7, 1, 3, G);
              box(p, 8, 1, 1, GL);
            }
            box(-12, 4, 25, 1, W); // the platform
            box(-11, 9, 23, 5, W); // the marble storey
            for (let p = -9; p <= 9; p += 3) box(p, 8, 1, 3, 2);
            box(-11, 17, 23, 8, G); // the gilt storey
            box(9, 17, 3, 8, GS);
            box(-11, 17, 2, 8, GL);
            for (let p = -7; p <= 7; p += 4) {
              box(p - 1, 15, 2, 4, 2);
              box(p - 1, 16, 2, 1, GL);
            }
            box(-12, 18, 25, 1, GL);
            for (let p = -9; p <= 9; p += 2) box(p, 19, 1, 1, G); // the parapet domes
            box(-6, 22, 13, 4, G); // the upper storey
            box(4, 22, 3, 4, GS);
            for (let p = -4; p <= 4; p += 2) box(p, 21, 1, 2, 2);
            for (const s of [-1, 1]) {
              const x = s * 10;
              box(x - 1, 21, 1, 3, G);
              box(x + 1, 21, 1, 3, G);
              box(x - 2, 22, 5, 1, GL);
              dome(x, 22, 1.5, G);
              box(x, 25, 1, 1, GL);
            }
            box(-7, 23, 15, 1, GL);
            box(-3, 25, 7, 2, G);
            dome(0, 25, 5, G);
            for (const p of [-3, 0, 3]) box(p, 29, 1, 4, GL); // the fluting
            box(2, 29, 2, 4, GS);
            box(-1, 31, 3, 1, G);
            box(0, 34, 1, 3, GL);
            break;
          }
          case "bibiKaMaqbara": {
            // Bibi Ka Maqbara (Aurangabad), "the Taj of the Deccan": the white tomb on its plinth, the tall
            // iwan arch, little minarets at the corners of the tomb, the onion dome on a drum, and four tall
            // minarets with balconies and domed kiosks at the plinth's corners.
            const sh = chShade(c, 0.22),
              lit = chLit(c, 0.45);
            box(-16, 3, 33, 3, chShade(c, 0.12)); // the plinth
            box(-16, 3, 33, 1, lit);
            for (let p = -14; p <= 14; p += 2) box(p, 2, 1, 1, 2);
            box(-7, 18, 15, 15, c); // the tomb
            box(6, 18, 2, 15, sh);
            box(-3, 16, 7, 12, lit);
            box(-2, 15, 5, 10, 2);
            dome(0, 15, 2, 2);
            for (const s of [-1, 1]) {
              box(s * 5, 9, 1, 3, 2);
              box(s * 5, 15, 1, 3, 2);
              box(s * 7, 21, 1, 21, c); // the corner minarets
              dome(s * 7, 21, 1.2, c);
            }
            box(-8, 19, 17, 1, lit);
            box(-4, 22, 9, 3, c); // the drum
            box(3, 22, 2, 3, sh);
            orb(0, 27, 5, c);
            cone(0, 30, 3, 4, c);
            box(2, 30, 2, 4, sh);
            box(0, 35, 1, 2, 3);
            for (const s of [-1, 1]) {
              const x = s * 14;
              box(x - 1, 30, 3, 27, c);
              box(x + 1, 30, 1, 27, sh);
              for (const y of [13, 22]) box(x - 2, y, 5, 1, lit);
              box(x - 2, 31, 5, 1, lit);
              box(x - 1, 33, 1, 2, c);
              box(x + 1, 33, 1, 2, c);
              box(x - 2, 34, 5, 1, lit);
              dome(x, 34, 1.5, c);
              box(x, 37, 1, 1, 3);
            }
            break;
          }
          case "vidhanaSoudha": {
            // Vidhana Soudha (Bengaluru): the long granite seat of the legislature in Neo-Dravidian style, four
            // storeys of windows, the deep portico of twelve columns at the top of its great steps, the tiered
            // base of the central dome with the Ashoka lions on top, and little domes over the corner pavilions.
            const st = [196, 186, 170],
              tn = (k) => css(e.sh(mixc(st, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              B = tn(0),
              S = tn(-0.3),
              Lt = tn(0.35);
            box(-17, 14, 35, 14, B);
            box(15, 14, 3, 14, S);
            for (const y of [4, 8, 12])
              for (let p = -16; p <= 16; p += 2) if (Math.abs(p) > 8) box(p, y, 1, 2, 2);
            box(-17, 15, 35, 1, Lt);
            for (let p = -17; p <= 17; p += 2) box(p, 16, 1, 1, Lt);
            box(-8, 4, 17, 3, Lt); // the steps
            box(-8, 15, 17, 11, S); // the portico
            for (let p = -7; p <= 7; p += 2) box(p, 14, 1, 10, Lt);
            box(-9, 17, 19, 3, B);
            box(-9, 17, 19, 1, Lt);
            for (const s of [-1, 1]) {
              const x = s * 14;
              box(x - 2, 18, 5, 2, B);
              dome(x, 18, 2, B);
              box(x, 21, 1, 1, 3);
            }
            box(-6, 20, 13, 3, B); // the tiers under the dome
            box(-5, 22, 11, 2, Lt);
            box(-4, 24, 9, 2, B);
            for (const p of [-3, -1, 1, 3]) box(p, 24, 1, 1, 2);
            dome(0, 24, 5, B);
            box(-1, 28, 2, 4, Lt);
            box(2, 28, 2, 3, S);
            box(-1, 30, 3, 1, 3); // the lion capital
            box(0, 32, 1, 2, 3);
            break;
          }
          case "bangalorePalace": {
            // Bangalore Palace: the Tudor-style granite palace, battlements and dark-framed windows along the
            // front, two square crenellated towers and the tall round tower with its machicolated crown.
            const st = [204, 190, 156],
              tn = (k) => css(e.sh(mixc(st, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              B = tn(0),
              S = tn(-0.28),
              Lt = tn(0.3),
              wood = css(e.sh([92, 70, 60]));
            const tower = (x, w, h) => {
              box(x, h, w, h, B);
              box(x + w - 1, h, 1, h, S);
              box(x, h + 1, w, 1, Lt);
              for (let p = x; p < x + w; p += 2) box(p, h + 2, 1, 1, B);
              for (let y = h - 3; y > 12; y -= 4) box(x + Math.floor(w / 2), y, 1, 2, wood);
            };
            box(-13, 12, 27, 12, B);
            box(12, 12, 2, 12, S);
            box(-13, 13, 27, 1, Lt);
            for (let p = -13; p <= 13; p += 2) box(p, 14, 1, 1, B);
            for (const y of [5, 10]) for (let p = -11; p <= 11; p += 3) box(p, y, 2, 2, wood);
            box(-2, 6, 5, 5, wood); // the porch
            box(-3, 7, 7, 1, Lt);
            tower(-12, 5, 18);
            tower(6, 5, 17);
            box(-3, 15, 5, 3, B); // the round tower
            box(-2, 25, 3, 10, B);
            box(0, 25, 1, 10, S);
            box(-3, 26, 5, 2, B);
            box(1, 26, 1, 2, S);
            box(-3, 27, 5, 1, Lt);
            for (const p of [-3, -1, 1]) box(p, 28, 1, 1, B);
            for (const y of [18, 22]) box(-1, y, 1, 2, wood);
            box(-14, 13, 1, 3, B); // the corner pinnacle
            cone(-14, 13, 1, 3, B);
            break;
          }
          case "tajulMasajid": {
            // Taj-ul-Masajid (Bhopal): the pink sandstone prayer hall with its row of arches, three white
            // marble domes on drums, and the two tall eight-sided minarets with balconies and white domes.
            const st = [196, 120, 108],
              tn = (k) => css(e.sh(mixc(st, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              B = tn(0),
              S = tn(-0.3),
              Lt = tn(0.25),
              W = chLit(6, 0),
              WS = chShade(6, 0.2);
            box(-12, 11, 25, 11, B);
            box(11, 11, 2, 11, S);
            for (let p = -10; p <= 10; p += 4) {
              box(p - 1, 7, 3, 5, 2);
              box(p, 8, 1, 1, 2);
            }
            box(-3, 13, 7, 13, B); // the central gate
            box(-2, 10, 5, 8, 2);
            box(-1, 11, 3, 1, 2);
            box(-12, 12, 25, 1, W);
            for (let p = -12; p <= 12; p += 2) box(p, 13, 1, 1, W);
            for (const [x, r] of [
              [-7, 3],
              [7, 3],
              [0, 4],
            ]) {
              box(x - r + 1, 15, 2 * r - 1, 2, W);
              dome(x, 15, r, W);
              box(x + 1, 15 + r, Math.max(1, r - 1), r - 1, WS);
              box(x, 16 + r, 1, 2, 3);
            }
            for (const s of [-1, 1]) {
              const x = s * 15;
              box(x - 2, 33, 5, 33, B);
              box(x + 1, 33, 2, 33, S);
              box(x - 2, 33, 1, 33, Lt);
              for (const y of [12, 22, 30]) {
                box(x - 3, y, 7, 2, Lt);
                box(x + 2, y, 1, 2, S);
              }
              for (const y of [7, 17, 26]) box(x, y, 1, 2, 2);
              dome(x, 33, 2.5, W);
              box(x, 37, 1, 2, 3);
            }
            break;
          }
          case "nagaraTemple": {
            // A North Indian (Nagara) temple, shared by Lingaraj (Bhubaneswar), Raghunath (Jammu) and the JK
            // Temple (Kanpur): o.n curved shikhara towers in colour c (or o.rgb) (the middle one o.h tall, o.mw wide), ribbed and banded,
            // each under its ribbed amalaka disc and pot finial; o.base a hall with doors under them, o.porch a
            // stepped pyramid roof (the jagamohana) in front of a lone tower, o.flag a saffron flag on top.
            const n = o.n ?? 1,
              h = o.h ?? 36,
              mw = o.mw ?? 13,
              base = o.base ?? 0,
              w = o.w ?? mw + 4,
              rgb = o.rgb ?? colors[c],
              tn = (k) => css(e.sh(mixc(rgb, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              C = tn(0),
              S = tn(-0.3),
              D = tn(-0.5),
              Lt = tn(0.3);
            const shikhara = (cx, b, hw, tall) => {
              for (let j = 0; j < tall; j++) {
                const k = Math.max(1, Math.round(hw * (1 - 0.68 * (j / tall) ** 2))),
                  y = b + j + 1,
                  band = j % 3 === 2;
                box(cx - k, y, 2 * k + 1, 1, band ? Lt : C);
                box(cx + Math.ceil(k / 3), y, k - Math.ceil(k / 3) + 1, 1, band ? C : S);
                if (k >= 3) for (const d of [-1, 1]) box(cx + d * Math.round(k / 2), y, 1, 1, band ? S : D);
              }
              const kt = Math.max(1, Math.round(hw * 0.32)),
                top = b + tall;
              box(cx - kt, top + 1, 2 * kt + 1, 1, S); // the neck
              box(cx - kt - 1, top + 3, 2 * kt + 3, 2, C); // the amalaka
              for (let p = cx - kt; p <= cx + kt + 1; p += 2) box(p, top + 3, 1, 1, S);
              box(cx + kt, top + 3, 2, 2, S);
              box(cx - 1, top + 4, 3, 1, Lt);
              box(cx, top + 6, 1, 2, 3); // the pot finial
              return top + 6;
            };
            const tall = h - base - Math.round(mw / 4) - 6;
            if (base) {
              box(-Math.floor(w / 2), base, w, base, C);
              box(Math.floor(w / 2) - 1, base, 2, base, S);
              box(-Math.floor(w / 2), base, w, 1, Lt);
              for (let p = -Math.floor(w / 2) + 2; p < w / 2 - 1; p += 3) box(p, base - 2, 1, base - 3, 2);
            }
            // the side towers stand apart, each smaller and lower than the one inside it
            const towers = [];
            for (let i = 1, pos = Math.floor(mw / 2) + 1; i <= (n - 1) / 2; i++) {
              const hw = Math.max(2, Math.round(mw * 0.3) - i + 1),
                x = pos + hw;
              towers.push([x, hw, Math.round(tall * (0.6 - 0.1 * (i - 1)))]);
              pos = x + hw + 1;
            }
            for (const [x, hw, t] of towers.reverse()) for (const s of [-1, 1]) shikhara(s * x, base, hw, t);
            const fin = shikhara(0, base, Math.floor(mw / 2), tall);
            if (o.flag) {
              box(0, fin + 3, 1, 3, 2);
              box(1, fin + 3, 2, 1, 5);
              box(1, fin + 2, 3, 1, 5);
            }
            if (o.porch) {
              // the jagamohana's stepped pyramid roof in front of the tower
              const pw = Math.floor(mw / 2) - 1,
                pt = Math.round(tall * 0.3);
              box(-pw, 4, 2 * pw + 1, 4, C);
              box(-1, 3, 3, 3, 2);
              for (let j = 0; j < pt; j++) {
                const k = Math.max(1, Math.round(pw + 1 - (j * (pw - 1)) / pt));
                box(-k, 5 + j, 2 * k + 1, 1, j % 2 ? S : C);
                box(-k, 5 + j, 1, 1, Lt);
              }
              box(-2, 6 + pt, 5, 2, C);
              box(-1, 7 + pt, 3, 1, Lt);
              box(0, 9 + pt, 1, 2, 3);
            }
            break;
          }
          case "chandigarhAssembly": {
            // Palace of Assembly (Chandigarh, Le Corbusier): the raw concrete block with its grid of sun-breakers,
            // the great portico of thin piers under the upswept gutter roof, and the hyperboloid tower of the
            // assembly chamber with its slanted top behind, beside the little pyramid.
            const S = chShade(c, 0.3),
              D = chShade(c, 0.55),
              Lt = chLit(c, 0.3);
            box(-17, 12, 35, 12, c);
            box(-17, 1, 35, 1, S);
            for (let y = 3; y <= 11; y += 2) for (let p = -16; p <= -6; p += 2) box(p, y, 1, 1, D);
            box(-17, 13, 35, 1, Lt);
            box(-5, 13, 23, 11, D); // the shade of the portico
            for (let p = -4; p <= 16; p += 4) {
              box(p, 13, 2, 12, c);
              box(p + 1, 13, 1, 12, S);
            }
            box(-6, 15, 25, 2, Lt); // the gutter roof, its ends swept up
            box(-6, 17, 2, 2, Lt);
            box(17, 17, 2, 2, Lt);
            box(-4, 16, 21, 1, c);
            for (let j = 0; j < 10; j++) {
              // the hyperboloid: pinched in the middle, cut on a slant
              const k = Math.round(2.6 + ((j - 4.5) * (j - 4.5)) / 9);
              const right = j > 7 ? k - (j - 7) : k;
              box(-12 - k, 14 + j, k + right + 1, 1, j % 3 ? c : Lt);
              box(-12 + Math.ceil(right / 2), 14 + j, right - Math.ceil(right / 2) + 1, 1, S);
            }
            cone(8, 16, 3, 4, c); // the pyramid
            box(9, 19, 2, 3, S);
            break;
          }
          case "openHand": {
            // The Open Hand Monument (Chandigarh): the dark metal hand, fingers up and the thumb stretched out
            // like a bird's wing, turning on its mast above the open concrete cube.
            const M = css(e.sh([84, 74, 78])),
              ML = css(e.sh([122, 110, 112])),
              S = chShade(c, 0.3),
              D = chShade(c, 0.6);
            box(-4, 9, 9, 9, c); // the open cube
            box(-3, 7, 6, 6, D);
            box(3, 9, 2, 9, S);
            box(-4, 9, 9, 1, chLit(c, 0.3));
            box(0, 18, 1, 9, M); // the mast
            box(-3, 22, 6, 4, M); // the palm
            box(-4, 21, 2, 2, M);
            box(-2, 19, 3, 2, M);
            box(-3, 22, 6, 1, ML);
            for (const [p, t] of [
              [-3, 26],
              [-2, 27],
              [-1, 27],
              [1, 26],
            ])
              box(p, t, 1, t - 22, M); // the fingers
            box(3, 21, 3, 2, M); // the thumb
            box(5, 22, 2, 1, M);
            box(3, 20, 2, 1, ML);
            break;
          }
          case "chennaiCentral": {
            // Chennai Central station: the red Gothic Revival front with white string courses and arched
            // windows, the central clock tower with its white pyramid roof and flagpole, and the white-roofed
            // corner towers.
            const red = [184, 48, 44],
              tn = (k) => css(e.sh(mixc(red, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              R = tn(0),
              S = tn(-0.3),
              W = chLit(6, 0),
              WS = chShade(6, 0.25),
              roof = chShade(8, 0.1);
            box(-15, 12, 31, 12, R);
            box(14, 12, 2, 12, S);
            for (const y of [6, 12]) box(-15, y, 31, 1, W);
            for (let p = -13; p <= 13; p += 3) {
              box(p, 4, 1, 3, 2);
              box(p, 10, 1, 3, 2);
            }
            box(-14, 14, 29, 2, roof); // the long roof
            box(-15, 2, 31, 1, WS); // the canopy
            for (const s of [-1, 1]) {
              const x = s * 13;
              box(x - 2, 17, 5, 17, R);
              box(x + 2, 17, 1, 17, S);
              box(x - 2, 17, 5, 1, W);
              box(x, 15, 1, 2, 2);
              cone(x, 17, 2, 3, W);
              box(x + 1, 19, 1, 2, WS);
            }
            box(-3, 26, 7, 26, R); // the clock tower
            box(3, 26, 1, 26, S);
            for (const y of [8, 14, 20]) box(-3, y, 7, 1, W);
            box(-1, 18, 1, 3, 2);
            box(1, 18, 1, 3, 2);
            orb(0, 23, 1.6, W);
            box(0, 23, 1, 2, 2);
            box(-4, 26, 9, 1, W);
            cone(0, 26, 3, 6, W);
            box(1, 30, 2, 2, WS);
            box(0, 35, 1, 3, 2);
            break;
          }
          case "fri": {
            // Forest Research Institute (Dehradun): the long red-brick Greco-Roman front on a white base, rows
            // of arched windows, two white porticos of columns under pediments, and the tower with its white
            // dome; a smaller domed tower at the right end.
            const brick = [172, 86, 66],
              tn = (k) => css(e.sh(mixc(brick, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              B = tn(0),
              S = tn(-0.3),
              W = chLit(6, 0),
              WS = chShade(6, 0.25),
              roof = css(e.sh([92, 84, 88]));
            box(-18, 11, 37, 11, B);
            box(-18, 2, 37, 2, W);
            box(-18, 11, 37, 1, W);
            box(-17, 13, 35, 2, roof);
            for (let p = -17; p <= 17; p += 2) {
              box(p, 6, 1, 2, 2);
              box(p, 9, 1, 2, 2);
            }
            for (const x of [-10, 4]) {
              box(x - 3, 13, 7, 13, chShade(6, 0.45)); // the portico
              for (let p = x - 3; p <= x + 3; p += 2) box(p, 12, 1, 10, W);
              box(x - 4, 13, 9, 1, W);
              cone(x, 13, 4, 3, W);
              box(x - 2, 15, 5, 1, WS);
            }
            box(9, 17, 5, 17, B); // the tower
            box(13, 17, 1, 17, S);
            box(11, 15, 1, 2, 2);
            box(8, 18, 7, 1, W);
            dome(11, 18, 2.5, W);
            box(11, 22, 1, 2, 2);
            box(16, 14, 3, 14, B);
            dome(17, 14, 1.5, W);
            break;
          }
          case "doDrulChorten": {
            // Do Drul Chorten (Gangtok): the white Tibetan stupa, a square base with a gold-railed terrace, four
            // steps, the bell-shaped dome widening upwards, the square harmika, and the gilt spire of thirteen
            // rings under its umbrella and jewel.
            const S = chShade(c, 0.2),
              Lt = chLit(c, 0.4),
              G = 12,
              GL = chLit(12, 0.35);
            box(-11, 2, 23, 2, 10); // the railing
            box(-11, 3, 23, 1, G);
            box(-9, 10, 19, 7, c);
            box(7, 10, 3, 7, S);
            box(-10, 11, 21, 1, Lt);
            for (let i = 0; i < 4; i++) {
              const k = 8 - i * 1.5;
              box(-Math.round(k), 12 + i, 2 * Math.round(k) + 1, 1, i % 2 ? c : Lt);
            }
            for (let j = 0; j < 7; j++) {
              const k = 3 + Math.round(j * 0.7) - (j === 6 ? 1 : 0);
              box(-k, 16 + j, 2 * k + 1, 1, c);
              box(Math.ceil(k / 2), 16 + j, k - Math.ceil(k / 2) + 1, 1, S);
            }
            box(-3, 24, 7, 2, G); // the harmika
            box(1, 24, 2, 2, chShade(12, 0.3));
            for (let j = 0; j < 6; j++)
              box(-2 + Math.floor(j / 3), 25 + j + 1, 5 - 2 * Math.floor(j / 3), 1, j % 2 ? GL : G);
            box(-3, 32, 7, 1, G); // the umbrella
            box(-2, 31, 1, 1, css(e.sh([70, 60, 50])));
            box(2, 31, 1, 1, css(e.sh([70, 60, 50])));
            box(-1, 33, 3, 1, G);
            box(0, 35, 1, 2, GL);
            break;
          }
          case "manSinghPalace": {
            // Man Singh Palace on Gwalior Fort: the sandstone wall high on its cliff, round towers capped by
            // domed kiosks, and the bands of turquoise and yellow tiles running along the wall.
            const st = [206, 162, 112],
              tn = (k) => css(e.sh(mixc(st, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              B = tn(0),
              S = tn(-0.3),
              Lt = tn(0.3),
              rock = css(e.sh([132, 112, 92])),
              rockS = css(e.sh([104, 88, 74])),
              teal = css(e.sh([68, 160, 160])),
              yel = css(e.sh([226, 190, 70]));
            box(-17, 6, 35, 6, rock); // the cliff
            box(8, 6, 10, 6, rockS);
            for (const [p, y] of [
              [-14, 3],
              [-6, 5],
              [3, 2],
            ])
              box(p, y, 4, 1, rockS);
            box(-16, 17, 33, 11, B);
            box(14, 17, 3, 11, S);
            box(-16, 14, 33, 1, teal);
            box(-16, 13, 33, 1, yel);
            for (let p = -15; p <= 15; p += 3) box(p, 10, 1, 2, 2);
            box(-16, 18, 33, 1, Lt);
            for (const x of [-13, -4, 5, 13]) {
              box(x - 2, 20, 5, 14, B);
              box(x - 2, 20, 1, 14, Lt);
              box(x + 1, 20, 2, 14, S);
              box(x - 2, 15, 5, 1, teal);
              box(x - 1, 22, 1, 2, B); // the kiosk
              box(x + 1, 22, 1, 2, B);
              box(x, 22, 1, 2, 2);
              box(x - 2, 23, 5, 1, Lt);
              dome(x, 23, 2, B);
              box(x + 1, 25, 1, 1, S);
              box(x, 26, 1, 1, 3);
            }
            break;
          }
          case "charminar": {
            // Charminar (Hyderabad): the square gateway with its great pointed arches, a row of little arches and
            // the balustrade above, the double gallery of arcades, and the four minarets rising from its corners,
            // ringed by two balconies and crowned by bulbous domes on lotus leaves.
            const st = [216, 202, 172],
              tn = (k) => css(e.sh(mixc(st, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              B = tn(0),
              S = tn(-0.28),
              Lt = tn(0.35);
            box(-7, 18, 15, 18, B);
            box(5, 18, 3, 18, S);
            box(-4, 14, 9, 13, Lt); // the great arch
            box(-3, 13, 7, 12, 2);
            cone(0, 13, 3, 3, 2);
            box(-7, 15, 15, 1, Lt);
            for (let p = -5; p <= 5; p += 2) box(p, 17, 1, 1, 2);
            box(-7, 19, 15, 1, Lt);
            box(-6, 23, 13, 4, B); // the arcaded galleries
            box(4, 23, 3, 4, S);
            for (let p = -5; p <= 5; p += 2) {
              box(p, 22, 1, 1, 2);
              box(p, 24, 1, 1, 2);
            }
            box(-6, 24, 13, 1, Lt);
            for (const s of [-1, 1]) {
              const x = s * 8;
              box(x - 1, 33, 3, 33, B);
              box(x + 1, 33, 1, 33, S);
              box(x - 1, 33, 1, 33, Lt);
              for (const y of [20, 28]) {
                box(x - 2, y, 5, 1, Lt);
                box(x - 2, y - 1, 5, 1, S);
              }
              box(x - 2, 34, 5, 1, Lt); // the lotus leaves
              orb(x, 35.5, 1.5, B);
              box(x, 37, 1, 2, 3);
            }
            break;
          }
          case "govindajee": {
            // Shree Govindajee Temple (Imphal): the white temple with its three-bayed porch, a balustrade with
            // little kiosks along the roof, and the twin gilt domes with their tall finials.
            const S = chShade(c, 0.2),
              Lt = chLit(c, 0.45),
              G = 12,
              GL = chLit(12, 0.35);
            box(-11, 2, 23, 2, S);
            box(-10, 12, 21, 10, c);
            box(9, 12, 2, 10, S);
            for (const p of [-6, 0, 6]) {
              box(p - 2, 9, 5, 6, 2);
              box(p - 1, 10, 3, 1, 2);
            }
            for (const p of [-9, -3, 3, 9]) box(p, 10, 1, 8, Lt);
            box(-11, 13, 23, 1, Lt);
            for (let p = -10; p <= 10; p += 2) box(p, 14, 1, 1, Lt);
            for (const p of [-9, 0, 9]) {
              box(p - 1, 16, 3, 2, c);
              box(p, 17, 1, 1, Lt);
            }
            for (const x of [-4, 4]) {
              box(x - 3, 16, 7, 2, c);
              dome(x, 16, 3.5, G);
              box(x - 2, 19, 2, 2, GL);
              box(x, 21, 1, 3, G);
              box(x - 1, 22, 3, 1, G);
            }
            break;
          }
          case "rajwada": {
            // Rajwada (Indore): the seven-storey Holkar palace, stone below with its great wooden gate, then
            // storeys of arched windows with white frames; the jutting central bay rises to the domed pavilion,
            // with little kiosks at the corners.
            const st = [196, 176, 146],
              upper = [176, 104, 82],
              tn = (rgb, k) => css(e.sh(mixc(rgb, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              B = tn(st, 0),
              BS = tn(st, -0.3),
              U = tn(upper, 0),
              US = tn(upper, -0.3),
              W = chLit(6, 0);
            box(-12, 9, 25, 9, B);
            box(10, 9, 3, 9, BS);
            box(-3, 8, 7, 8, css(e.sh([110, 72, 52]))); // the gate
            box(-3, 8, 7, 1, W);
            for (let p = -10; p <= 10; p += 4) if (Math.abs(p) > 4) box(p, 6, 1, 2, 2);
            box(-12, 23, 25, 14, U);
            box(10, 23, 3, 14, US);
            for (const y of [12, 16, 20, 24]) box(-12, y, 25, 1, W);
            for (const y of [11, 15, 19, 23]) for (let p = -10; p <= 10; p += 3) box(p, y, 1, 2, 2);
            box(-4, 25, 9, 16, U); // the central bay
            box(-4, 25, 1, 16, tn(upper, 0.2));
            box(3, 25, 2, 16, US);
            for (const y of [13, 17, 21]) box(-2, y, 5, 1, W);
            box(-5, 26, 11, 1, W);
            box(-2, 27, 5, 1, U);
            dome(0, 27, 2, W);
            box(0, 30, 1, 1, 3);
            for (const s of [-1, 1]) {
              const x = s * 10;
              box(x - 1, 26, 3, 2, U);
              dome(x, 26, 1.5, W);
            }
            break;
          }
          case "itaFort": {
            // Ita Fort (Itanagar): what is left of the brick fort, two broken walls with rounded tops and the
            // way in between them.
            const brick = [128, 84, 66],
              tn = (k) => css(e.sh(mixc(brick, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              B = tn(0),
              S = tn(-0.3),
              D = tn(-0.15);
            for (const [l, w, h] of [
              [-13, 11, 9],
              [2, 11, 8],
            ]) {
              box(l, h, w, h, B);
              box(l + w - 3, h, 3, h, S);
              box(l + 1, h + 1, w - 2, 1, B);
              box(l + 3, h + 2, w - 6, 1, B);
              for (let y = 2; y < h; y += 2) box(l + ((y * 3) % 5), y, 2, 1, D);
            }
            box(-15, 5, 2, 5, S); // the wall behind
            box(13, 5, 2, 5, D);
            break;
          }
          case "madanMahal": {
            // Madan Mahal (Jabalpur): the little Gond fort perched on a pile of great granite boulders, its
            // arched rooms and parapet on top.
            const g1 = css(e.sh([150, 146, 140])),
              g2 = css(e.sh([118, 114, 112])),
              g3 = css(e.sh([182, 178, 170])),
              st = [176, 160, 132],
              tn = (k) => css(e.sh(mixc(st, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              green = css(e.sh([92, 128, 80]));
            orb(-8, 5, 5, g1);
            orb(7, 5, 6, g2);
            box(-14, 4, 28, 4, g1);
            orb(-1, 10, 5, g1);
            orb(5, 10, 4, g2);
            orb(-3, 12, 3, g3);
            box(-14, 2, 6, 2, green);
            box(10, 3, 5, 3, green);
            box(-6, 22, 12, 7, tn(0)); // the fort
            box(3, 22, 3, 7, tn(-0.3));
            for (const p of [-4, -1, 2]) box(p, 20, 2, 3, 2);
            box(-7, 23, 14, 1, tn(0.3));
            for (const p of [-6, -3, 3, 6]) box(p, 24, 1, 1, tn(0));
            box(-2, 26, 4, 3, tn(0)); // the upper room
            box(1, 26, 1, 3, tn(-0.3));
            box(-3, 27, 6, 1, tn(0.3));
            break;
          }
          case "albertHall": {
            // Albert Hall Museum (Jaipur): the Indo-Saracenic museum in pale and pink sandstone, verandas of
            // cusped arches on two floors, the central tower crowned by a big white chhatri dome, and smaller
            // domed towers at each end.
            const st = [222, 180, 150],
              pink = [196, 112, 96],
              tn = (rgb, k) => css(e.sh(mixc(rgb, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              B = tn(st, 0),
              S = tn(st, -0.3),
              P = tn(pink, 0),
              W = chLit(6, 0),
              WS = chShade(6, 0.22);
            box(-15, 5, 31, 5, P);
            for (let p = -14; p <= 14; p += 2) box(p, 4, 1, 2, 2);
            box(-14, 12, 29, 7, B);
            box(12, 12, 3, 7, S);
            for (let p = -13; p <= 13; p += 2) box(p, 10, 1, 3, 2);
            box(-15, 13, 31, 1, W);
            for (let p = -15; p <= 15; p += 2) box(p, 14, 1, 1, W);
            for (const s of [-1, 1]) {
              const x = s * 13;
              box(x - 2, 18, 5, 4, B);
              box(x - 1, 17, 1, 2, 2);
              box(x + 1, 17, 1, 2, 2);
              box(x - 2, 19, 5, 1, W);
              dome(x, 19, 2, W);
              box(x, 22, 1, 1, 3);
            }
            box(-5, 17, 11, 17, B); // the central tower
            box(4, 17, 2, 17, S);
            for (const y of [9, 15]) for (const p of [-3, 0, 3]) box(p, y, 2, 3, 2);
            box(-6, 18, 13, 1, W);
            box(-4, 21, 1, 3, W); // the chhatri
            box(3, 21, 1, 3, W);
            box(-3, 21, 6, 3, 2);
            box(-5, 22, 11, 1, W);
            dome(0, 22, 4, W);
            box(2, 25, 2, 1, WS);
            box(0, 27, 1, 2, 3);
            break;
          }
          case "mehrangarh": {
            // Mehrangarh (Jodhpur): the fort rising sheer from its sandstone crag, round bastions, walls pierced
            // high up by rows of latticed palace windows, and the parapet along the top.
            const st = [178, 116, 82],
              tn = (rgb, k) => css(e.sh(mixc(rgb, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              B = tn(st, 0),
              S = tn(st, -0.3),
              Lt = tn(st, 0.25),
              rock = [140, 100, 80],
              R = tn(rock, 0),
              RS = tn(rock, -0.3);
            box(-18, 4, 37, 4, R); // the crag
            box(-16, 7, 33, 3, R);
            box(-14, 9, 29, 2, R);
            for (const [p, y, w] of [
              [-17, 2, 5],
              [8, 3, 10],
              [-8, 6, 6],
              [10, 8, 6],
            ])
              box(p, y, w, 1, RS);
            box(-13, 22, 27, 13, B);
            box(-13, 22, 2, 13, Lt);
            box(11, 22, 3, 13, S);
            for (const x of [-9, -1]) {
              box(x - 2, 20, 5, 11, B); // round bastions
              box(x - 2, 20, 1, 11, Lt);
              box(x + 2, 20, 1, 11, S);
            }
            for (let p = 3; p <= 11; p += 2) {
              box(p, 19, 1, 2, 2); // the palace windows
              box(p, 16, 1, 1, 2);
            }
            box(2, 21, 10, 1, Lt);
            box(-14, 23, 29, 1, Lt);
            for (let p = -13; p <= 13; p += 2) box(p, 24, 1, 1, B);
            box(4, 26, 7, 3, B); // the topmost palace
            box(9, 26, 2, 3, S);
            for (const p of [5, 7]) box(p, 25, 1, 1, 2);
            box(4, 27, 7, 1, Lt);
            break;
          }
          case "umaidBhawan": {
            // Umaid Bhawan Palace (Jodhpur): the golden sandstone Art Deco palace, its long colonnaded wings, the
            // great central dome on a drum with its lantern, and the two towers with cupolas at its sides.
            const st = [220, 176, 116],
              tn = (k) => css(e.sh(mixc(st, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              B = tn(0),
              S = tn(-0.3),
              Lt = tn(0.3);
            box(-16, 9, 33, 9, B);
            box(14, 9, 3, 9, S);
            for (let p = -15; p <= 15; p += 2) if (Math.abs(p) > 7) box(p, 7, 1, 4, 2);
            box(-16, 10, 33, 1, Lt);
            box(-8, 15, 17, 15, B); // the central block
            box(6, 15, 3, 15, S);
            for (const p of [-6, -3, 0, 3, 6]) box(p, 12, 1, 6, 2);
            box(-9, 16, 19, 1, Lt);
            for (const s of [-1, 1]) {
              const x = s * 11;
              box(x - 2, 20, 5, 10, B);
              box(x + 2, 20, 1, 10, S);
              box(x, 17, 1, 3, 2);
              box(x - 2, 21, 5, 1, Lt);
              dome(x, 21, 2, B);
              box(x, 24, 1, 1, 3);
            }
            box(-5, 19, 11, 3, B); // the drum
            for (const p of [-3, 0, 3]) box(p, 18, 1, 2, 2);
            dome(0, 19, 6, B);
            box(3, 24, 2, 5, S);
            box(-1, 26, 3, 2, Lt); // the lantern
            box(-1, 28, 3, 1, B);
            dome(0, 28, 1, B);
            box(0, 31, 1, 2, 3);
            break;
          }
