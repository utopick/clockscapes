          case "spilledBlood": {
            // Church of the Savior on Spilled Blood, St Petersburg, from the canal: the red-brick body with white
            // trim and mosaic kokoshniks, the tall tiled central tent, the bell tower with its gilt onion at the
            // front, and the enamelled onions in blue-white, green-gold and gold-green stripes.
            const wall = css(e.sh(mixc(colors[10], colors[1], 0.55))),
              wsh = css(e.sh(mixc(colors[1], [41, 40, 54], 0.35))),
              trim = css(e.sh(colors[6]));
            // pat 0 spiral stripes, 1 horizontal bands, 2 vertical ribs
            const onion = (cx, base, r, a, b, pat = 0) => {
              const cy = base + r;
              for (let dy = -r; dy <= r; dy++) {
                const w = Math.round(Math.sqrt(r * r - dy * dy) + 0.3);
                for (let dx = -w; dx <= w; dx++) {
                  const s = pat === 1 ? (dy + 99) % 2 : pat === 2 ? (dx + 99) % 2 : (dx + dy + 99) % 4 < 2;
                  box(cx + dx, cy + dy, 1, 1, s ? b : a);
                }
              }
              for (let j = 1; j < r; j++) {
                const k = Math.round((r - 1 - j) * 0.5);
                box(cx - k, cy + r + j, 2 * k + 1, 1, a);
              }
              box(cx, cy + 2 * r + 2, 1, 3, 12);
              box(cx - 1, cy + 2 * r + 1, 3, 1, 12);
            };
            const drum = (cx, hw, top, h) => {
              box(cx - hw, top, 2 * hw + 1, h, wall);
              box(cx + hw, top, 1, h, wsh);
              box(cx - hw, top, 2 * hw + 1, 1, trim);
              for (let p = -hw + 1; p < hw; p += 2) box(cx + p, top - 2, 1, 2, 2);
            };
            // the central tent, tiled in green and gold bands
            drum(2, 3, 21, 8);
            for (let j = 0; j < 10; j++) {
              const k = Math.round(3 * (1 - j / 10));
              box(2 - k, 22 + j, 2 * k + 1, 1, j % 3 === 2 ? trim : j % 2 ? 9 : 12);
              if (k) box(2 + k, 22 + j, 1, 1, wsh);
            }
            onion(2, 31, 1, 12, 3);
            // the side drums and their enamelled onions
            drum(-10, 1, 17, 4);
            onion(-10, 17, 2, 7, 6, 1);
            drum(10, 1, 17, 4);
            onion(10, 17, 2, 9, 12);
            drum(7, 1, 15, 2);
            onion(7, 15, 1, 12, 9, 2);
            // the main body
            box(-11, 13, 23, 13, wall);
            box(11, 13, 1, 13, wsh);
            box(-11, 13, 23, 1, trim);
            box(-11, 6, 23, 1, trim);
            box(-11, 1, 23, 1, wsh);
            for (let p = -9; p <= 9; p += 3) {
              box(p, 11, 1, 3, 2);
              box(p, 4, 1, 2, 2);
            }
            for (let p = -9; p <= 9; p += 3) {
              dome(p, 13, 1.5, trim);
              dome(p, 13, 0.6, p % 2 ? 9 : 7);
            }
            // the bell tower at the front, with its gilt onion
            box(-7, 26, 5, 26, wall);
            box(-3, 26, 1, 26, wsh);
            for (const r of [6, 13, 19, 26]) box(-7, r, 5, 1, trim);
            box(-6, 23, 3, 3, 2);
            box(-5, 22, 1, 1, 12);
            box(-6, 17, 3, 3, 7); // the mosaic panel
            box(-5, 4, 1, 4, 2);
            box(-6, 28, 3, 2, wall);
            onion(-5, 28, 2, 12, 3, 2);
            break;
          }
          case "peterPaulCathedral": {
            // Peter and Paul Cathedral, St Petersburg: the long ochre nave with white window frames and a green
            // roof, the small baroque dome at the east end, and the three-tier west tower with its gilt needle
            // spire and the angel holding the cross on top.
            const wall = css(e.sh([228, 196, 150])),
              wsh = css(e.sh([182, 150, 112])),
              trim = css(e.sh(colors[6])),
              roof = chShade(9, 0.35),
              gold = ink[12],
              glit = ink[3];
            // the nave
            box(-9, 11, 19, 11, wall);
            box(9, 11, 1, 11, wsh);
            box(-9, 11, 19, 1, trim);
            box(-9, 1, 19, 1, wsh);
            for (let p = -1; p <= 7; p += 2) {
              box(p, 9, 1, 4, trim);
              box(p, 8, 1, 3, 2);
            }
            box(-9, 13, 19, 2, roof);
            box(-7, 14, 15, 1, roof);
            // the east dome
            box(2, 17, 5, 3, wall);
            box(6, 17, 1, 3, wsh);
            for (const d of [3, 5]) box(d, 16, 1, 2, 2);
            dome(4, 17, 3, roof);
            box(4, 22, 1, 2, gold);
            box(3, 23, 3, 1, gold);
            box(4, 26, 1, 3, gold);
            // the west tower: three tiers stepping in
            box(-8, 17, 7, 17, wall);
            box(-2, 17, 1, 17, wsh);
            for (const r of [6, 12, 17]) box(-8, r, 7, 1, trim);
            box(-6, 4, 3, 4, 2); // the west door
            box(-5, 5, 1, 1, 2);
            for (const d of [-7, -3]) box(d, 10, 1, 3, 2);
            box(-5, 15, 1, 2, 2);
            box(-7, 23, 5, 6, wall);
            box(-3, 23, 1, 6, wsh);
            box(-7, 23, 5, 1, trim);
            box(-6, 21, 3, 3, 2);
            for (const d of [-8, -2]) box(d, 18, 1, 1, trim); // the volutes
            box(-6, 28, 3, 5, wall);
            box(-6, 28, 3, 1, trim);
            box(-5, 26, 1, 2, 2);
            // the gilt crown and the needle spire
            box(-6, 31, 3, 3, gold);
            box(-6, 31, 1, 3, glit);
            for (let j = 0; j < 21; j++) {
              const k = j < 7 ? 1 : 0;
              box(-5 - k, 32 + j, 2 * k + 1, 1, gold);
              box(-5 - k, 32 + j, 1, 1, glit);
            }
            // the angel with the cross
            box(-7, 54, 5, 1, glit);
            box(-5, 55, 1, 3, glit);
            box(-6, 57, 3, 1, glit);
            break;
          }
          case "znamenskyKursk": {
            // Znamensky Cathedral, Kursk: the cream classical cathedral with a white portico under a pediment,
            // two bell turrets at the front corners and the great silver dome on its windowed drum.
            const wall = css(e.sh([236, 214, 160])),
              wsh = css(e.sh([186, 164, 118])),
              trim = css(e.sh(colors[6])),
              sil = ink[8],
              slit = chLit(8, 0.4);
            box(-9, 14, 19, 14, wall);
            box(9, 14, 1, 14, wsh);
            box(-9, 14, 19, 1, trim);
            box(-9, 7, 19, 1, trim);
            for (const d of [-7, 7]) {
              box(d, 12, 1, 3, 2);
              box(d, 5, 1, 3, 2);
            }
            // portico
            box(-5, 11, 11, 1, trim);
            for (let p = -4; p <= 4; p += 2) box(p, 10, 1, 9, trim);
            box(-1, 5, 3, 5, 2);
            cone(0, 11, 5, 3, trim);
            box(0, 13, 1, 1, wall);
            // the bell turrets
            for (const d of [-8, 8]) {
              box(d - 2, 22, 5, 8, wall);
              box(d + 2, 22, 1, 8, wsh);
              box(d - 2, 22, 5, 1, trim);
              box(d - 1, 20, 3, 4, 2);
              box(d, 19, 1, 1, 12);
              dome(d, 22, 2, sil);
              box(d - 1, 23, 1, 1, slit);
              box(d, 27, 1, 3, 12);
              box(d - 1, 26, 3, 1, 12);
            }
            // the drum and the great dome
            box(-5, 21, 11, 7, wall);
            box(5, 21, 1, 7, wsh);
            box(-5, 21, 11, 1, trim);
            for (let p = -4; p <= 4; p += 2) box(p, 19, 1, 3, 2);
            dome(0, 21, 6, sil);
            for (let j = 1; j <= 4; j++) box(-3, 21 + j, 1, 1, slit);
            box(-1, 30, 3, 2, wall);
            orb(0, 31, 1, sil);
            box(0, 36, 1, 4, 12);
            box(-1, 35, 3, 1, 12);
            break;
          }
          case "centreOfAsia": {
            // Centre of Asia monument, Kyzyl: a round stepped granite base with three bronze lions, a pedestal
            // carrying the bronze globe, and a gilt spire rising from it.
            const st = css(e.sh([196, 188, 176])),
              ssh = css(e.sh([150, 142, 132])),
              bronze = css(e.sh([166, 120, 62])),
              blit = css(e.sh([214, 170, 96]));
            box(-10, 2, 21, 2, ssh);
            box(-8, 4, 17, 2, st);
            box(-8, 3, 17, 1, ssh);
            box(-3, 11, 7, 7, st);
            box(3, 11, 1, 7, ssh);
            box(-4, 11, 9, 1, st);
            // the lions on the steps
            for (const d of [-7, 6]) {
              box(d, 7, 2, 2, bronze);
              box(d + (d < 0 ? 2 : -1), 6, 2, 1, bronze);
              box(d, 8, 1, 1, blit);
            }
            // the globe with its meridians
            orb(0, 16, 4, bronze);
            box(-3, 17, 2, 2, blit);
            box(-4, 16, 9, 1, blit);
            box(0, 20, 1, 9, blit);
            // the spire
            for (let j = 0; j < 15; j++) {
              const k = j < 6 ? 1 : 0;
              box(-k, 21 + j, 2 * k + 1, 1, 12);
              box(-k, 21 + j, 1, 1, 3);
            }
            break;
          }
          case "elbrus": {
            // Mount Elbrus seen from Nalchik: the twin snow summits (the west one a little higher) over a saddle,
            // the snow giving way to dark rock ribs and grey scree on the lower slopes.
            const hw = Math.floor((o.w ?? 46) / 2),
              H = o.h ?? 24,
              rock = css(e.sh([112, 104, 110])),
              rsh = css(e.sh([84, 78, 88])),
              snow = css(e.sh([244, 246, 250])),
              ssh = css(e.sh([196, 206, 224]));
            const peak = (i, px, ph) => ph - Math.abs(i - px) * (i < px ? 1.05 : 1.2);
            for (let i = -hw; i <= hw; i++) {
              const pw = peak(i, -6, H),
                pe = peak(i, 7, H - 1),
                h = Math.max(1, Math.round(Math.max(pw, pe, H * 0.25 - Math.abs(i) * 0.1))),
                shade = pw > pe ? i > -6 : i > 7,
                sl = Math.round(H * 0.42 + ((i * 7 + 99) % 3));
              box(i, h, 1, h, shade ? rsh : rock);
              if (h > sl) box(i, h, 1, h - sl, shade ? ssh : snow);
              if (h > sl + 3 && (i + 99) % 5 === 0) box(i, sl + 3, 1, 3, shade ? rsh : rock);
            }
            break;
          }
          case "nizhnyKremlin": {
            // Nizhny Novgorod Kremlin: the red-brick wall with swallowtail merlons stepping down the slope,
            // square towers with brown tent roofs, and the gate tower (Dmitrievskaya) with its tall green tent.
            const brick = ink[1],
              bsh = chShade(1, 0.3),
              blit = chLit(1, 0.2),
              tent = css(e.sh([110, 84, 70])),
              tsh = css(e.sh([82, 62, 56]));
            const wall = (l, w, h) => {
              box(l, h, w, h, brick);
              box(l, h - 3, w, 1, blit);
              for (let p = l; p + 2 < l + w; p += 4) {
                box(p, h + 1, 3, 1, brick);
                box(p, h + 2, 1, 1, brick);
                box(p + 2, h + 2, 1, 1, brick);
              }
            };
            wall(-17, 10, 11);
            wall(-7, 14, 10);
            wall(7, 10, 8);
            const tower = (cx, hw, h, roof, rsh, tall) => {
              box(cx - hw, h, 2 * hw + 1, h, brick);
              box(cx + hw, h, 1, h, bsh);
              box(cx - hw - 1, h, 2 * hw + 3, 1, blit);
              for (let r = 4; r < h - 2; r += 4) box(cx, r, 1, 2, 2);
              for (let j = 0; j < tall; j++) {
                const k = Math.round((hw + 1) * (1 - j / tall));
                box(cx - k, h + 1 + j, 2 * k + 1, 1, roof);
                if (k) box(cx + 1, h + 1 + j, k, 1, rsh);
              }
            };
            tower(-15, 2, 15, tent, tsh, 6);
            tower(14, 2, 13, tent, tsh, 6);
            // Dmitrievskaya: the gate, a lookout box and the tall green tent with its flag
            tower(0, 3, 18, ink[9], chShade(9, 0.35), 8);
            box(-2, 5, 5, 5, 2);
            box(-1, 6, 3, 1, 2);
            box(0, 13, 1, 2, 2);
            box(0, 29, 1, 4, 2);
            box(1, 29, 2, 1, 10);
            break;
          }
          case "novosibirskOpera": {
            // Novosibirsk Opera and Ballet Theatre: the long grey front with its colonnade of tall square
            // piers before a deep shaded loggia, the attic balustrade, the tall stage block and the great
            // ribbed silver dome in front of it.
            const st = css(e.sh([206, 198, 182])),
              ssh = css(e.sh([166, 158, 144])),
              pier = css(e.sh([222, 216, 202])),
              sil = ink[8],
              slit = chLit(8, 0.45),
              sdk = chShade(8, 0.3);
            // the stage block behind
            box(-11, 22, 23, 8, st);
            box(11, 22, 1, 8, ssh);
            box(-11, 22, 23, 1, pier);
            // the dome on its drum
            box(-9, 17, 19, 2, st);
            dome(0, 17, 9, sil);
            for (let p = -6; p <= 6; p += 3) {
              const k = Math.round(Math.sqrt(81 - p * p));
              box(p, 17 + k, 1, k, p < 0 ? slit : sdk);
            }
            box(-1, 27, 3, 1, pier);
            // the front: plinth, loggia, piers, entablature and balustrade
            box(-16, 13, 33, 13, ssh);
            box(-16, 13, 33, 2, pier);
            box(-16, 1, 33, 1, ssh);
            box(-15, 11, 31, 9, 2);
            for (let p = -15; p <= 15; p += 3) {
              box(p, 11, 2, 10, pier);
              box(p + 1, 11, 1, 10, st);
            }
            box(-16, 15, 33, 2, st);
            for (let p = -16; p <= 16; p += 2) box(p, 16, 1, 1, pier);
            break;
          }
          case "orenburgCaravanserai": {
            // Orenburg Caravanserai: the long cream two-storey building with white trim and its hipped
            // pavilions roofed in grey-green with spikes, and the white octagonal minaret with its balcony and
            // green tent beside it.
            const wall = css(e.sh([238, 220, 160])),
              wsh = css(e.sh([190, 172, 120])),
              trim = css(e.sh(colors[6])),
              roof = css(e.sh([96, 116, 110])),
              rsh = css(e.sh([70, 86, 84]));
            const hip = (cx, hw, base, tall) => {
              for (let j = 0; j < tall; j++) {
                const k = Math.round(hw * (1 - j / tall));
                box(cx - k, base + 1 + j, 2 * k + 1, 1, roof);
                if (k) box(cx + 1, base + 1 + j, k, 1, rsh);
              }
              box(cx, base + tall + 3, 1, 3, 2);
            };
            box(-8, 10, 21, 10, wall);
            box(12, 10, 1, 10, wsh);
            box(-8, 10, 21, 1, trim);
            box(-8, 5, 21, 1, trim);
            for (let p = -6; p <= 11; p += 2) {
              box(p, 8, 1, 2, 2);
              box(p, 3, 1, 2, 2);
            }
            box(-8, 11, 21, 1, roof);
            // the central pavilion
            box(1, 13, 7, 3, wall);
            box(1, 13, 7, 1, trim);
            box(4, 12, 1, 1, 2);
            hip(4, 4, 13, 4);
            hip(11, 2, 11, 3);
            hip(-6, 2, 11, 3);
            // the minaret
            box(-12, 24, 5, 24, trim);
            box(-8, 24, 1, 24, chShade(6, 0.2));
            for (const r of [8, 14, 20]) box(-11, r, 1, 2, 2);
            box(-13, 25, 7, 1, trim);
            box(-13, 26, 1, 1, trim);
            box(-7, 26, 1, 1, trim);
            box(-11, 29, 3, 4, trim);
            box(-9, 29, 1, 4, chShade(6, 0.2));
            cone(-10, 29, 2, 7, 9);
            box(-9, 34, 1, 5, chShade(9, 0.3));
            box(-10, 39, 1, 3, 12);
            break;
          }
          case "ushakovCathedral": {
            // Cathedral of St Theodore Ushakov, Saransk: the pale blue and white cathedral with its portico of
            // white columns under a pediment, two belfries with gilt onions at the corners, and the great gilt
            // dome on a drum ringed with columns.
            const wall = css(e.sh([200, 222, 236])),
              wsh = css(e.sh([150, 172, 192])),
              trim = css(e.sh(colors[6])),
              gold = ink[12],
              glit = ink[3];
            const gonion = (cx, base, r) => {
              orb(cx, base + r, r, gold);
              cone(cx, base + r, r, Math.round(r * 1.2) + 1, gold);
              box(cx - Math.ceil(r / 2), base + r + 1, 1, r, glit);
              const tip = base + 2 * r + Math.round(r * 1.2) + 3;
              box(cx, tip, 1, 3, 12);
              box(cx - 1, tip - 1, 3, 1, 12);
            };
            box(-12, 14, 25, 14, wall);
            box(12, 14, 1, 14, wsh);
            box(-12, 14, 25, 1, trim);
            box(-12, 1, 25, 1, wsh);
            for (const d of [-8, 8]) {
              box(d, 11, 1, 4, 2);
              box(d, 5, 1, 3, 2);
            }
            // the portico
            for (let p = -5; p <= 5; p += 2) box(p, 12, 1, 11, trim);
            box(-6, 13, 13, 1, trim);
            box(-1, 7, 3, 6, css(e.sh([150, 104, 66])));
            cone(0, 13, 6, 4, wall);
            box(-6, 14, 13, 1, trim);
            gonion(0, 17, 1);
            // the corner belfries
            for (const d of [-10, 10]) {
              box(d - 2, 24, 5, 10, wall);
              box(d + 2, 24, 1, 10, wsh);
              box(d - 2, 24, 5, 1, trim);
              box(d - 2, 18, 5, 1, trim);
              box(d - 1, 22, 3, 3, 2);
              gonion(d, 24, 2);
            }
            // the drum and the great dome
            box(-5, 24, 11, 8, trim);
            for (let p = -4; p <= 4; p += 2) box(p, 22, 1, 5, wsh);
            box(-6, 24, 13, 1, trim);
            dome(0, 24, 6, gold);
            for (let j = 1; j <= 4; j++) box(-3, 24 + j, 1, 1, glit);
            box(-1, 32, 3, 2, trim);
            gonion(0, 32, 1);
            break;
          }
          case "saratovConservatory": {
            // Saratov Conservatory: the beige stone Gothic-revival front with the tall square tower, its round
            // rose window and steep red tent roof with a dormer, the red pointed roof of the left wing and the
            // red spires on the right.
            const st = css(e.sh([206, 186, 156])),
              ssh = css(e.sh([162, 142, 116])),
              red = css(e.sh([174, 70, 52])),
              rsh = css(e.sh([128, 50, 42]));
            const tent = (cx, hw, base, tall) => {
              for (let j = 0; j < tall; j++) {
                const k = Math.round(hw * (1 - j / tall));
                box(cx - k, base + 1 + j, 2 * k + 1, 1, red);
                if (k) box(cx + 1, base + 1 + j, k, 1, rsh);
              }
              box(cx, base + tall + 3, 1, 3, 8);
            };
            box(-10, 14, 21, 14, st);
            box(10, 14, 1, 14, ssh);
            box(-10, 1, 21, 1, ssh);
            for (const d of [-8, -6, 6, 8]) {
              box(d, 4, 1, 3, 2);
              box(d, 10, 1, 3, 2);
            }
            // the left wing roof and the right spires
            box(-10, 15, 7, 1, ssh);
            tent(-7, 4, 15, 10);
            box(-7, 20, 1, 2, 2);
            for (const d of [5, 9]) {
              box(d - 1, 17, 3, 3, st);
              tent(d, 1, 17, 7);
            }
            // the tower
            box(-3, 24, 7, 24, st);
            box(3, 24, 1, 24, ssh);
            box(-1, 5, 3, 5, 2);
            box(0, 6, 1, 1, 2);
            box(-1, 11, 3, 3, 2);
            orb(0, 19, 2, rsh);
            orb(0, 19, 1, 3);
            box(-4, 25, 9, 1, rsh);
            tent(0, 4, 25, 13);
            box(-1, 30, 3, 2, st);
            box(0, 30, 1, 1, 2);
            break;
          }
          case "pskovTrinity": {
            // Trinity Cathedral, Pskov Krom: the tall white cube with its rounded gables (zakomaras), the gilt
            // central onion and four dark blue-grey onions on slim windowed drums.
            const wall = ink[6],
              wsh = chShade(6, 0.25),
              dark = css(e.sh([60, 66, 92])),
              dlit = css(e.sh([104, 112, 140]));
            const onion = (cx, base, r, col, lit) => {
              orb(cx, base + r, r, col);
              cone(cx, base + r, r, Math.round(r * 1.5) + 1, col);
              box(cx - Math.ceil(r / 2), base + r + 1, 1, Math.max(1, r - 1), lit);
              const tip = base + 2 * r + Math.round(r * 1.5) + 3;
              box(cx, tip, 1, 3, 12);
              box(cx - 1, tip - 1, 3, 1, 12);
            };
            box(-9, 15, 19, 15, wall);
            box(9, 15, 1, 15, wsh);
            box(-9, 1, 19, 1, wsh);
            for (const d of [-5, 0, 5]) {
              dome(d, 15, 2.5, wall);
              box(d, 12, 1, 4, 2);
            }
            for (const d of [-3, 3]) box(d, 6, 1, 4, 2);
            for (const d of [-7, 7]) box(d, 13, 1, 12, wsh);
            chDoor(0, 3, 5, 6);
            for (const [d, top] of [
              [-6, 23],
              [6, 23],
            ]) {
              box(d - 1, top, 3, top - 14, wall);
              box(d, top - 2, 1, 3, 2);
              onion(d, top, 2, dark, dlit);
            }
            box(-2, 26, 5, 9, wall);
            box(2, 26, 1, 9, wsh);
            for (const d of [-1, 1]) box(d, 24, 1, 4, 2);
            onion(0, 26, 3, ink[12], ink[3]);
            break;
          }
          case "omskDormition": {
            // Dormition Cathedral, Omsk: the white cathedral with turquoise roofs, onions and tile bands, the
            // big gilt central dome on its arcaded drum, and the tall tiered bell tower with a turquoise tent.
            const wall = ink[6],
              wsh = chShade(6, 0.25),
              teal = css(e.sh([40, 160, 160])),
              tsh = css(e.sh([24, 112, 116])),
              gold = ink[12],
              glit = ink[3];
            const onion = (cx, base, r, col, lit) => {
              orb(cx, base + r, r, col);
              cone(cx, base + r, r, Math.round(r * 1.5) + 1, col);
              box(cx - Math.ceil(r / 2), base + r + 1, 1, Math.max(1, r - 1), lit);
              const tip = base + 2 * r + Math.round(r * 1.5) + 3;
              box(cx, tip, 1, 3, 12);
              box(cx - 1, tip - 1, 3, 1, 12);
            };
            // the church
            box(-14, 12, 19, 12, wall);
            box(-14, 1, 19, 1, wsh);
            for (const r of [5, 12]) box(-14, r, 19, 1, teal);
            for (let p = -12; p <= 3; p += 3) {
              box(p, 10, 1, 3, 2);
              box(p, 3, 1, 2, 2);
            }
            for (const d of [-10, -4, 2]) {
              dome(d, 12, 2, teal);
              dome(d, 12, 1, wall);
            }
            chDoor(-5, 3, 4, 6);
            box(-9, 20, 9, 8, wall);
            box(-9, 20, 9, 1, teal);
            box(-1, 20, 1, 8, wsh);
            for (let p = -8; p <= -2; p += 2) box(p, 18, 1, 4, 2);
            dome(-5, 20, 5, gold);
            for (let j = 1; j <= 3; j++) box(-7, 20 + j, 1, 1, glit);
            box(-5, 28, 1, 3, 12);
            box(-6, 27, 3, 1, 12);
            for (const d of [-13, 3]) {
              box(d - 1, 18, 3, 6, wall);
              box(d - 1, 18, 3, 1, teal);
              box(d, 16, 1, 2, 2);
              onion(d, 18, 2, teal, chLit(6, 0.1));
            }
            // the bell tower
            box(5, 22, 9, 22, wall);
            box(13, 22, 1, 22, wsh);
            for (const r of [6, 14, 22]) box(5, r, 9, 1, teal);
            for (const r of [11, 19]) box(8, r, 3, 3, 2);
            box(6, 29, 7, 7, wall);
            box(12, 29, 1, 7, wsh);
            box(6, 29, 7, 1, teal);
            box(8, 27, 3, 4, 2);
            box(7, 33, 5, 4, wall);
            box(7, 33, 5, 1, teal);
            box(9, 32, 1, 2, 2);
            cone(9, 33, 2, 9, teal);
            box(10, 40, 1, 6, tsh);
            orb(9, 44, 1, gold);
            box(9, 48, 1, 3, 12);
            box(8, 47, 3, 1, 12);
            break;
          }
          case "arcticCircle": {
            // Arctic Circle monument, Salekhard: a tall dark-blue glass obelisk with a thinner steel blade
            // beside it, on a low granite platform, framed by a great half-ring standing for the polar circle.
            const ring = css(e.sh([92, 72, 86])),
              glass = css(e.sh([50, 64, 120])),
              glit = css(e.sh([88, 110, 168])),
              steel = ink[8];
            for (let a = 0; a <= 32; a++) {
              const ang = (a / 32) * Math.PI,
                px = Math.round(-Math.cos(ang) * 8),
                py = Math.round(Math.sin(ang) * 18) + 2;
              box(px - (px > 0 ? 1 : 0), py + 1, 2, 2, ring);
            }
            box(-6, 2, 13, 2, ink[13]);
            for (let j = 0; j < 22; j++) {
              const k = j < 10 ? 1 : 0;
              box(-3 - k, 3 + j, 1, 1, steel);
            }
            for (let j = 0; j < 30; j++) {
              const k = Math.round(3 * (1 - j / 30));
              box(-k, 3 + j, 2 * k + 1, 1, glass);
              box(-k, 3 + j, 1, 1, glit);
            }
            box(0, 35, 1, 2, glit);
            break;
          }
          case "stavropolKazan": {
            // Kazan Cathedral, Stavropol: the white five-domed church with gilt onions, and beside it the very
            // tall white bell tower of stacked tiers, each with arched openings, under a gilt dome and spire.
            const wall = ink[6],
              wsh = chShade(6, 0.25),
              lit = chLit(6, 0.4),
              gold = ink[12],
              glit = ink[3];
            const onion = (cx, base, r) => {
              orb(cx, base + r, r, gold);
              cone(cx, base + r, r, Math.round(r * 1.5) + 1, gold);
              box(cx - Math.ceil(r / 2), base + r + 1, 1, Math.max(1, r - 1), glit);
              const tip = base + 2 * r + Math.round(r * 1.5) + 3;
              box(cx, tip, 1, 3, 12);
              box(cx - 1, tip - 1, 3, 1, 12);
            };
            // the church
            box(-12, 13, 15, 13, wall);
            box(-12, 1, 15, 1, wsh);
            box(-12, 13, 15, 1, lit);
            for (const d of [-10, -7, -1]) box(d, 10, 1, 4, 2);
            for (const d of [-9, -5, -1]) dome(d, 13, 1.5, lit);
            chDoor(-5, 3, 5, 6);
            for (const d of [-10, -1]) {
              box(d - 1, 17, 3, 4, wall);
              box(d, 16, 1, 2, 2);
              onion(d, 17, 1);
            }
            box(-7, 20, 5, 7, wall);
            box(-3, 20, 1, 7, wsh);
            for (const d of [-6, -4]) box(d, 18, 1, 3, 2);
            onion(-5, 20, 2);
            // the bell tower
            const tiers = [
              [9, 14],
              [7, 23],
              [7, 31],
              [5, 38],
            ];
            let prev = 0;
            for (const [w, top] of tiers) {
              const l = 6 - Math.floor(w / 2);
              box(l, top, w, top - prev, wall);
              box(l + w - 1, top, 1, top - prev, wsh);
              box(l - 1, top, w + 2, 1, lit);
              box(5, top - 2, 3, Math.min(4, top - prev - 3), 2);
              box(6, top - 2, 1, 1, 12);
              prev = top;
            }
            box(5, 7, 3, 4, 2);
            dome(6, 38, 2, gold);
            box(5, 39, 1, 1, glit);
            box(6, 42, 1, 2, gold);
            onion(6, 43, 1);
            break;
          }
