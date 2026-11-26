          // One block for the group's Turkish one-offs, so they share a few small parts (an Ottoman pencil
          // minaret, a ribbed dome, a carved Seljuk portal). hillFort and hamidClock are reused by several cities.
          case "selimiyeEdirne":
          case "mevlanaTomb":
          case "ciftMinare":
          case "izmirClock":
          case "yaliMosque":
          case "mardinUlu":
          case "zinciriye":
          case "holyApostles":
          case "igdirMemorial":
          case "seljukPortal":
          case "kumbet":
          case "hillFort":
          case "hamidClock":
          case "harputMinaret":
          case "sinanMosque": {
            const T = (rgb, k = 0) =>
                css(e.sh(k ? mixc(rgb, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)) : rgb)),
              LEAD = [158, 165, 176],
              lead = T(LEAD),
              leadLt = T(LEAD, 0.35),
              leadDk = T(LEAD, -0.3);
            // A dome lit on its upper left and shaded down its right side.
            const litDome = (cx, b, r, rgb) => {
              dome(cx, b, r, T(rgb));
              for (let dy = 1; dy < r; dy++) {
                const k = Math.round(Math.sqrt(r * r - dy * dy));
                if (dy >= r * 0.3) box(cx - k + 1, b + dy, 1, 1, T(rgb, 0.38));
                if (dy <= r * 0.6) box(cx + k, b + dy, 1, 1, T(rgb, -0.28));
              }
            };
            // A ribbed (melon) dome: dark ribs every other column, a little pointed crown and a finial.
            const ribDome = (cx, b, r, rgb) => {
              dome(cx, b, r, T(rgb));
              for (let p = -r + 1; p < r; p += 2) {
                const k = Math.round(Math.sqrt(r * r - p * p));
                box(cx + p, b + k - 1, 1, k - 1, T(rgb, -0.25));
              }
              box(cx + r - 1, b + 2, 1, 2, T(rgb, -0.35));
              box(cx, b + r + 1, 1, 1, T(rgb));
              box(cx, b + r + 3, 1, 2, 3);
            };
            // An Ottoman pencil minaret: base, shaft with a shaded side, balconies (şerefe), lead cone.
            const pencil = (p, h, rgb, balconies = [0.62, 0.86], capRgb = LEAD) => {
              box(p - 1, h, 3, h, T(rgb));
              box(p + 1, h, 1, h, T(rgb, -0.22));
              box(p - 2, 4, 5, 4, T(rgb));
              box(p - 2, 4, 5, 1, T(rgb, 0.3));
              for (const f of balconies) {
                const at = Math.round(h * f);
                box(p - 2, at, 5, 1, T(rgb, 0.35));
                box(p - 1, at - 1, 3, 1, T(rgb, -0.35));
              }
              for (let i = 9; i < h * 0.55; i += 6) box(p, i, 1, 2, 2);
              cone(p, h, 1, 6, T(capRgb));
              box(p + 1, h + 2, 1, 1, T(capRgb, -0.3));
              box(p, h + 8, 1, 2, 3);
            };
            // A carved Seljuk portal (taç kapı): a lit frame rising above the wall, a band of carving and the
            // deep pointed niche with its muqarnas hood over a small door.
            const portal = (cx, pw, ph, rgb) => {
              box(cx - pw, ph, 2 * pw + 1, ph, T(rgb, 0.3));
              box(cx + pw, ph, 1, ph, T(rgb, -0.2));
              for (let y = 3; y < ph - 1; y += 2)
                for (const s of [-1, 1]) box(cx + s * (pw - 1), y, 1, 1, T(rgb, -0.2));
              box(cx - pw + 2, ph - 2, 2 * pw - 3, ph - 3, T(rgb, -0.08));
              const a = pw - 3,
                top = ph - 3;
              box(cx - a, top - a, 2 * a + 1, top - a, 2);
              for (let j = 1; j <= a; j++) box(cx - a + j, top - a + j, 2 * (a - j) + 1, 1, 2);
              for (let y = top - a - 1; y > top - a - 5 && y > 6; y -= 2)
                for (let p = -a + ((y + a) % 2); p <= a; p += 2) box(cx + p, y, 1, 1, T(rgb, -0.15)); // the muqarnas
              box(cx - 1, 6, 3, 6, T(rgb, -0.25)); // the door
              box(cx, 5, 1, 5, 2);
            };
            if (kind === "selimiyeEdirne") {
              // Selimiye Mosque, Edirne (Sinan): the great lead dome on its window drum, ringed by eight
              // buttress turrets, exedra half domes over the pale stone hall and the four needle minarets
              // with three balconies each, the tallest of the Ottoman world.
              const st = [205, 197, 178];
              for (const [p, h] of [
                [-14, 39],
                [14, 39],
                [-18, 44],
                [18, 44],
              ])
                pencil(p, h, st, [0.55, 0.72, 0.88]);
              box(-12, 11, 25, 11, T(st));
              box(12, 11, 1, 11, T(st, -0.25));
              box(-12, 1, 25, 1, T(st, -0.25));
              box(-12, 11, 25, 1, T(st, 0.3));
              for (let p = -10; p <= 10; p += 3) {
                box(p, 5, 1, 3, 2);
                box(p, 9, 1, 2, 2);
              }
              for (const s of [-1, 1]) {
                litDome(s * 10, 11, 2, LEAD);
                litDome(s * 7, 13, 3, LEAD); // the exedra half domes
                box(s * 10, 19, 1, 6, T(st)); // the outer buttress turrets
                cone(s * 10, 19, 1, 2, lead);
              }
              box(-9, 15, 19, 4, T(st));
              box(9, 15, 1, 4, T(st, -0.25));
              for (let p = -7; p <= 7; p += 2) box(p, 14, 1, 2, 2); // the drum's ring of windows
              litDome(0, 15, 10, LEAD);
              for (const s of [-1, 1]) {
                box(s * 5, 20, 1, 6, T(st)); // turrets standing against the dome
                box(s * 5, 21, 1, 1, lead);
              }
              box(0, 27, 1, 1, 3);
              box(-1, 28, 3, 1, 3);
              box(-1, 29, 1, 1, 3);
              box(1, 29, 1, 1, 3);
            } else if (kind === "mevlanaTomb") {
              // Mevlana Museum, Konya: the Green Dome, a fluted turquoise drum under a fluted conical roof,
              // rising from the stone tekke with its little lead domes.
              const st = [212, 196, 160],
                green = [64, 168, 140];
              for (const p of [-4, 4]) litDome(p, 9, 2, LEAD);
              box(-6, 9, 13, 9, T(st));
              box(6, 9, 1, 9, T(st, -0.25));
              box(-6, 9, 13, 1, T(st, 0.3));
              for (const p of [-4, -2, 2, 4]) box(p, 6, 1, 3, 2);
              box(-1, 6, 3, 6, T(st, -0.3));
              box(0, 5, 1, 5, 2);
              box(-4, 15, 9, 6, T(green, -0.1)); // the square tiled base of the drum
              box(4, 15, 1, 6, T(green, -0.35));
              box(-4, 15, 9, 1, T(green, 0.3));
              box(-3, 25, 7, 10, T(green)); // the fluted drum
              for (const p of [-2, 0, 2]) box(p, 24, 1, 8, T(green, -0.28));
              box(-3, 25, 1, 10, T(green, 0.3));
              box(-3, 24, 7, 1, T([40, 60, 120])); // the tiled inscription band
              cone(0, 25, 4, 10, T(green));
              for (let j = 0; j < 9; j++) {
                const k = Math.round(4 * (1 - j / 10));
                if (k >= 2) box(Math.round(k / 2), 26 + j, 1, 1, T(green, -0.3));
                if (k >= 3) box(-k, 26 + j, 1, 1, T(green, 0.35));
                if (k >= 1) box(k, 26 + j, 1, 1, T(green, -0.4));
              }
              box(0, 38, 1, 3, 12);
            } else if (kind === "ciftMinare") {
              // Twin Minaret Madrasa, Erzurum: the long grey stone front with a turret at each corner, the tall
              // carved portal and on its two flanks the fluted brick minarets on square bases with tile
              // medallions, each ending in a crown of mouldings.
              const st = [172, 162, 146],
                brick = [168, 104, 82],
                tile = [64, 150, 168];
              box(-12, 12, 25, 12, T(st));
              box(12, 12, 1, 12, T(st, -0.25));
              box(-12, 12, 25, 1, T(st, 0.25));
              box(-12, 1, 25, 1, T(st, -0.25));
              for (const p of [-11, 11]) {
                box(p - 1, 11, 2, 10, T(st, -0.08)); // the corner turrets
                cone(p - 0.5, 11, 1, 2, T(st, -0.1));
              }
              for (const p of [-8, 8]) box(p, 8, 1, 2, 2);
              for (const p of [-7, 7]) {
                box(p - 1, 6, 2, 3, T(st, -0.15));
                box(p - 1, 6, 2, 1, T(st, -0.3));
              }
              for (const s of [-1, 1]) {
                const p = s * 4;
                box(p - 2, 16, 5, 16, T(st, 0.05)); // the square base
                box(p + 2, 16, 1, 16, T(st, -0.2));
                orb(p, 14, 1, T(tile));
                box(p - 1, 37, 3, 21, T(brick)); // fluted shaft
                box(p + 1, 37, 1, 21, T(brick, -0.3));
                box(p, 37, 1, 21, T(brick, -0.12));
                for (const y of [19, 24]) box(p - 1, y, 3, 1, T(tile));
                box(p - 2, 39, 5, 2, T(brick, 0.2)); // the crown
                box(p - 2, 39, 5, 1, T([96, 86, 82]));
                box(p - 1, 36, 3, 1, T(brick, 0.3));
              }
              portal(0, 4, 15, st);
            } else if (kind === "izmirClock") {
              // İzmir Clock Tower, Konak: the pale carved Ottoman tower on its round step, the fountain storey
              // with its horseshoe arch and corner cupolas, an open colonnade behind a balustrade, the tall
              // carved octagonal shaft, the clock storey and the arcaded lantern under a little dome.
              const st = [232, 220, 196],
                lit = T(st, 0.35),
                sh = T(st, -0.25),
                dim = T(st, -0.4);
              box(-4, 1, 9, 1, T(st, -0.1));
              box(-3, 12, 7, 11, T(st)); // the fountain storey
              box(3, 12, 1, 11, sh);
              box(-1, 9, 3, 7, 2);
              box(0, 10, 1, 1, 2);
              box(-1, 4, 3, 2, dim); // the grille
              for (const s of [-1, 1]) {
                box(s * 2, 8, 1, 4, dim);
                dome(s * 3, 12, 1, T(st));
              }
              box(-4, 13, 9, 1, lit);
              for (let p = -3; p <= 3; p += 2) box(p, 14, 1, 1, lit); // the balustrade
              box(-2, 19, 5, 5, T(st)); // the colonnade
              for (const p of [-1, 1]) box(p, 18, 1, 3, 2);
              box(2, 19, 1, 5, sh);
              box(-3, 20, 7, 1, lit);
              for (const p of [-3, 3]) box(p, 21, 1, 1, lit);
              box(-2, 33, 5, 13, T(st)); // the carved shaft
              box(2, 33, 1, 13, sh);
              for (let y = 22; y < 33; y++) if (y % 2) box(-1 + (y % 4 === 1 ? 0 : 2), y, 1, 1, T(st, -0.15));
              box(0, 28, 1, 2, 2);
              box(-3, 34, 7, 1, lit); // the clock storey
              box(-2, 38, 5, 4, T(st));
              box(2, 38, 1, 4, sh);
              orb(0, 36, 1.2, 6);
              box(0, 36, 1, 1, 2);
              box(-3, 39, 7, 1, lit);
              box(-1, 42, 3, 3, T(st)); // the lantern
              box(0, 41, 1, 2, 2);
              dome(0, 42, 1.5, T(st, 0.1));
              box(0, 45, 1, 2, 12);
            } else if (kind === "yaliMosque") {
              // Konak Yalı Mosque, İzmir: the little octagonal mosque by the sea, faced all over in blue and
              // turquoise Kütahya tiles, with a lead dome and one slim tiled minaret.
              const tile = [62, 118, 176],
                tq = [96, 182, 196];
              pencil(8, 24, tile, [0.7], LEAD);
              for (let y = 12; y < 20; y += 3) box(8, y, 1, 1, T(tq));
              box(-5, 9, 11, 9, T(tile));
              box(-6, 8, 1, 7, T(tile, 0.25)); // the canted faces of the octagon
              box(6, 8, 1, 7, T(tile, -0.3));
              box(5, 9, 1, 9, T(tile, -0.18));
              box(-5, 9, 11, 1, T(tq, 0.2));
              for (let y = 3; y < 9; y += 2)
                for (let p = -4 + (y % 4 === 1 ? 1 : 0); p <= 4; p += 2) box(p, y, 1, 1, T(tq));
              for (const p of [-3, 0, 3]) box(p, 7, 1, 3, 2);
              box(-3, 11, 7, 2, T(tile, -0.1));
              litDome(0, 11, 4, LEAD);
              box(0, 16, 1, 2, 3);
            } else if (kind === "mardinUlu") {
              // Great Mosque of Mardin: the honey-stone hall with its arcade, the ribbed dome on a drum and
              // the square Artuqid minaret topped by a carved round storey and a little dome.
              const st = [214, 182, 132];
              box(-11, 9, 23, 9, T(st));
              box(11, 9, 1, 9, T(st, -0.25));
              box(-11, 9, 23, 1, T(st, 0.3));
              for (let p = -9; p <= 3; p += 3) {
                box(p, 6, 2, 4, 2);
                box(p, 7, 2, 1, T(st, -0.15));
              }
              box(-8, 12, 13, 3, T(st, -0.05));
              for (let p = -7; p <= 3; p += 2) box(p, 11, 1, 2, T(st, -0.4)); // the drum's arcade
              ribDome(-2, 12, 7, st);
              cone(-2, 18, 1, 2, T(st));
              box(6, 24, 5, 24, T(st)); // the minaret
              box(10, 24, 1, 24, T(st, -0.25));
              for (const y of [10, 16]) box(7, y + 2, 3, 3, T(st, -0.15)); // carved panels
              for (const y of [10, 16]) box(8, y + 1, 1, 2, 2);
              box(5, 25, 7, 1, T(st, 0.35)); // the balcony
              box(6, 24, 5, 1, T(st, -0.35));
              box(7, 31, 3, 6, T(st));
              box(9, 31, 1, 6, T(st, -0.25));
              for (const y of [27, 29]) box(7, y, 3, 1, T(st, -0.18));
              box(6, 32, 5, 1, T(st, 0.3));
              ribDome(8, 32, 2, st);
            } else if (kind === "zinciriye") {
              // Zinciriye (Sultan İsa) Madrasa, Mardin: the long honey-stone front, its tall carved portal
              // and the two ribbed domes behind.
              const st = [214, 182, 132];
              for (const s of [-1, 1]) {
                box(s * 7 - 3, 12, 7, 2, T(st));
                ribDome(s * 7, 12, 3, st);
              }
              box(-11, 10, 23, 10, T(st));
              box(11, 10, 1, 10, T(st, -0.25));
              box(-11, 10, 23, 1, T(st, 0.3));
              for (const p of [-9, -6, 6, 9]) box(p, 7, 1, 2, 2);
              portal(0, 4, 16, st);
            } else if (kind === "holyApostles") {
              // Church of the Holy Apostles, Kars (now the Kümbet Mosque): a squat cross of dark basalt with
              // gabled arms and rounded apses, the round drum with its blind arcade and the twelve apostles in
              // relief, under a conical stone roof.
              const st = [104, 92, 88],
                lit = T(st, 0.3),
                sh = T(st, -0.25);
              for (const s of [-1, 1]) {
                box(s > 0 ? 7 : -9, 7, 3, 7, T(st, -0.08)); // the apses
                dome(s * 8, 7, 1.5, T(st, -0.08));
              }
              box(-6, 11, 13, 11, T(st));
              box(6, 11, 1, 11, sh);
              cone(0, 11, 7, 4, T(st, 0.05)); // the gable
              box(-7, 12, 3, 1, lit);
              box(-1, 6, 3, 6, 2);
              box(0, 7, 1, 1, 2);
              for (const p of [-4, 4]) box(p, 9, 1, 2, 2);
              box(-3, 23, 7, 9, T(st));
              box(3, 23, 1, 9, sh);
              box(-3, 23, 1, 9, lit);
              for (let p = -2; p <= 2; p += 2) box(p, 21, 1, 3, sh); // the blind arcade
              for (let p = -2; p <= 2; p += 2) box(p, 17, 1, 2, lit); // the apostles
              box(-4, 24, 9, 1, lit);
              cone(0, 24, 4, 6, T(st, -0.05));
              for (let j = 0; j < 5; j++) box(Math.round(4 * (1 - j / 6)), 25 + j, 1, 1, sh);
            } else if (kind === "igdirMemorial") {
              // Iğdır Genocide Memorial: five stylised sword blades in brushed steel standing as one tall shaft,
              // the outer blades closing in a pointed arch over the bright middle one, their dark hilts at the
              // foot, on a grassy mound.
              const steel = [200, 206, 214],
                dk = [92, 94, 102];
              for (let j = 0; j < 4; j++)
                box(-9 + j, j + 1, 19 - 2 * j, 1, T([118, 140, 84], j === 3 ? 0.15 : 0));
              box(-4, 8, 9, 4, T(dk)); // the hilts
              box(-5, 6, 11, 1, T(dk, 0.2));
              box(4, 8, 1, 4, T(dk, -0.3));
              for (const s of [-1, 1]) {
                const p = s < 0 ? -4 : 3;
                box(p, 37, 2, 29, T(steel, s < 0 ? 0.15 : -0.25));
                for (let j = 0; j < 6; j++)
                  box(
                    s < 0 ? p + Math.round(j / 2) : p - Math.round(j / 2) + 1,
                    38 + j,
                    1,
                    1,
                    T(steel, s < 0 ? 0.15 : -0.25),
                  );
              }
              box(-1, 40, 2, 32, T(steel, 0.4)); // the bright middle blade
              box(-2, 37, 1, 29, T(steel, -0.45)); // the gaps between the blades
              box(1, 37, 2, 29, T(steel, -0.1));
              box(0, 45, 1, 2, T(steel, 0.3));
            } else if (kind === "seljukPortal") {
              // A Seljuk madrasa front (Hatuniye in Karaman, Cacabey in Kırşehir): a long stone wall, the tall
              // carved portal; o.dm a dome behind, o.min a minaret beside the portal (o.mx its place), o.tile
              // turquoise tile bands on it. c is the stone (0 sand, 6 marble, 13 pale stone).
              const st = colors[c],
                w = o.w ?? 21,
                hw = Math.floor(w / 2),
                wh = o.wh ?? 10,
                ph = o.h ?? 18,
                pw = o.pw ?? 5;
              if (o.dm) {
                box(-o.dm, wh + 2, 2 * o.dm + 1, 2, T(st, -0.05));
                litDome(0, wh + 2, o.dm, o.dc === 8 ? LEAD : st);
              }
              if (o.min) {
                const p = o.mx ?? -pw - 2,
                  brick = [168, 98, 72];
                box(p - 1, o.min, 3, o.min, T(brick));
                box(p + 1, o.min, 1, o.min, T(brick, -0.3));
                if (o.tile)
                  for (let y = wh + 3; y < o.min - 2; y += 4) box(p - 1, y, 3, 1, T([64, 168, 176]));
                box(p - 2, o.min - 2, 5, 1, T(st, 0.3));
                box(p - 1, o.min + 2, 3, 2, T(brick));
                cone(p, o.min + 2, 1, 3, lead);
              }
              box(-hw, wh, w, wh, T(st));
              box(hw, wh, 1, wh, T(st, -0.25));
              box(-hw, wh, w, 1, T(st, 0.3));
              box(-hw, 1, w, 1, T(st, -0.25));
              for (let p = -hw + 2; p < -pw - 1; p += 3) box(p, 7, 1, 2, 2);
              for (let p = hw - 2; p > pw + 1; p -= 3) box(p, 7, 1, 2, 2);
              portal(0, pw, ph, st);
            } else if (kind === "kumbet") {
              // A Seljuk kümbet (tomb tower), for Aşık Paşa's tomb in Kırşehir: a polygonal stone body on a
              // plinth with a carved door frame and blind arches, under a conical stone roof.
              const st = colors[c],
                h = o.h ?? 12;
              box(-5, 2, 11, 2, T(st, -0.2));
              box(-4, h, 9, h - 2, T(st));
              box(-4, h, 1, h - 2, T(st, 0.3)); // the facets of the polygon
              box(3, h, 2, h - 2, T(st, -0.3));
              box(-2, h - 1, 1, h - 4, T(st, 0.1));
              box(-1, 9, 3, 6, T(st, 0.3)); // the carved door frame
              box(0, 8, 1, 4, 2);
              box(-5, h + 1, 11, 1, T(st, 0.3));
              cone(0, h + 1, 5, o.rt ?? 8, T(st, -0.1));
              for (let j = 0; j < (o.rt ?? 8) - 1; j++)
                box(Math.round(5 * (1 - j / (o.rt ?? 8))), h + 2 + j, 1, 1, T(st, -0.35));
            } else if (kind === "hillFort") {
              // A castle on its hill (Gaziantep, Kayseri, Giresun...): o.hill rows of earth and rock under
              // the curtain wall, o.n towers (square, or round with o.round) and a gate. o.rgb the stone's
              // own colour as [r, g, b] (black basalt in Kayseri); o.green grass on the hill.
              const st = o.rgb ?? colors[c],
                w = o.w ?? 31,
                hw = Math.floor(w / 2),
                m = o.hill ?? 5,
                wh = o.wh ?? 8,
                n = o.n ?? 3,
                th = o.th ?? 12,
                tw = o.tw ?? 5,
                k = Math.floor(tw / 2);
              const earth = o.green ? [118, 140, 84] : [168, 138, 98];
              for (let j = 0; j < m; j++) {
                const s = hw + 4 - Math.round((j * 3) / Math.max(1, m - 1));
                box(-s, j + 1, 2 * s + 1, 1, T(earth, j === m - 1 ? 0.15 : 0));
                box(s - 2, j + 1, 3, 1, T(earth, -0.25));
              }
              if (m > 1) box(-hw + 2, m - 1, 3, 1, T([120, 112, 104])); // a rock outcrop
              box(-hw, m + wh, w, wh, T(st));
              for (let y = m + 2; y < m + wh; y += 3)
                for (let p = -hw + (y % 2); p < hw; p += 4) box(p, y, 2, 1, T(st, -0.12)); // the courses
              box(-hw, m + wh, w, 1, T(st, 0.25));
              for (let p = -hw; p <= hw; p += 2) box(p, m + wh + 1, 1, 1, T(st));
              box(-1, m + 4, 3, 4, 2); // the gate
              box(0, m + 5, 1, 1, 2);
              for (let i = 0; i < n; i++) {
                const p = n === 1 ? 0 : Math.round(-hw + k + (i * (w - tw)) / (n - 1));
                if (Math.abs(p) <= k + 1 && n > 1 && n % 2) continue; // the gate takes the middle place
                box(p - k, m + th, tw, th, T(st));
                box(p + k, m + th, 1, th, T(st, -0.28));
                box(p - k, m + th, 1, th, T(st, 0.2));
                box(p, m + th - 3, 1, 2, 2); // an arrow slit
                if (o.round) {
                  box(p - k, m + th, 1, 1, T(st, -0.5));
                  box(p + k, m + th, 1, 1, T(st, -0.5));
                  for (let q = -k + 1; q < k; q += 2) box(p + q, m + th + 1, 1, 1, T(st));
                } else {
                  box(p - k - 1, m + th, tw + 2, 1, T(st, 0.25));
                  for (let q = -k - 1; q <= k + 1; q += 2) box(p + q, m + th + 1, 1, 1, T(st));
                  box(p - k, m + th - 1, tw, 1, T(st, -0.3)); // machicolations
                }
              }
            } else if (kind === "harputMinaret") {
              // Harput Great Mosque, Elazığ: the low rubble-stone hall and its round brick minaret with zigzag
              // brick bands, leaning (the "crooked minaret"), a pale balcony and a little lead cone.
              const st = [176, 156, 128],
                brick = [170, 108, 78];
              box(-5, 8, 9, 8, T(st));
              box(-5, 8, 9, 1, T(LEAD, -0.1));
              box(3, 7, 1, 7, T(st, -0.25));
              box(-2, 6, 3, 5, T(st, 0.25));
              box(-1, 5, 1, 4, 2);
              box(-4, 5, 1, 2, 2);
              const lx = (y) => Math.round(5 + (y - 6) * 0.08);
              for (let y = 6; y <= 26; y++) {
                const xx = lx(y);
                box(xx - 1, y, 4, 1, T(brick, y % 4 === 0 ? -0.2 : y % 4 === 2 ? 0.12 : 0));
                box(xx + 2, y, 1, 1, T(brick, -0.32));
                box(xx - 1, y, 1, 1, T(brick, 0.25));
              }
              box(lx(14), 15, 1, 2, 2);
              box(lx(27) - 2, 27, 6, 1, T([230, 224, 210]));
              box(lx(29) - 1, 30, 4, 3, T(brick, 0.05));
              cone(lx(30) + 0.5, 30, 1.5, 4, T(LEAD));
              box(lx(34), 35, 1, 1, 3);
            } else if (kind === "sinanMosque") {
              // A classical Ottoman single-dome mosque (Kırklareli, Muş, Manisa's Muradiye, İzmit's Yeni Cuma...):
              // the square hall, the lead dome on its octagonal drum with weight turrets, the porch (son cemaat
              // yeri) in front with its arches and row of small domes, and o.m pencil minarets (1 or 2).
              // o.band: courses of brick between the stone (early Ottoman); o.por: the porch's small domes.
              const st = colors[c],
                w = o.w ?? 19,
                hw = Math.floor(w / 2),
                nh = o.nh ?? 11,
                r = o.r ?? 6,
                mh = o.mh ?? 26,
                np = o.por ?? 3,
                brick = [170, 100, 74];
              for (const p of (o.m ?? 1) === 2 ? [-hw - 2, hw + 2] : [hw + 2]) pencil(p, mh, st);
              box(-hw, nh, w, nh, T(st));
              box(hw, nh, 1, nh, T(st, -0.25));
              if (o.band)
                for (let y = 3; y <= nh; y += 2) box(-hw, y, w, 1, T(brick, y % 4 === 1 ? -0.1 : 0.05));
              box(-hw, nh, w, 1, T(st, 0.3));
              for (let p = -hw + 2; p <= hw - 2; p += 3) box(p, nh - 2, 1, 2, 2); // the upper windows
              box(-r + 1, nh + 3, 2 * r - 1, 3, T(st)); // the drum and its weight turrets
              for (let p = -r + 3; p < r - 2; p += 2) box(p, nh + 2, 1, 1, 2);
              for (const s of [-1, 1]) {
                box(s * r, nh + 4, 1, 4, T(st));
                box(s * r, nh + 5, 1, 1, lead);
              }
              litDome(0, nh + 3, r, LEAD);
              box(0, nh + r + 4, 1, 1, 3);
              box(-1, nh + r + 5, 3, 1, 3);
              box(-1, nh + r + 6, 1, 1, 3);
              box(1, nh + r + 6, 1, 1, 3);
              const ph = nh - 4,
                bay = Math.floor((w - 2) / np),
                left = -Math.floor((bay * np) / 2);
              box(left, ph, bay * np + 1, ph, T(st, 0.12)); // the porch
              box(left + bay * np, ph, 1, ph, T(st, -0.2));
              for (let i = 0; i < np; i++) {
                const px = left + Math.floor(bay * (i + 0.5));
                dome(px, ph, Math.max(1, Math.floor(bay / 2) - 0.5), lead);
                box(px - Math.floor((bay - 2) / 2), ph - 2, bay - 1, ph - 3, T(st, -0.45)); // an arch
                box(px, ph - 1, 1, 1, T(st, -0.45));
              }
              box(left, ph, bay * np + 1, 1, T(st, 0.35));
              box(-1, 5, 3, 4, 2); // the door
            } else if (kind === "hamidClock") {
              // An Ottoman clock tower of the Hamidian years (İzmit, Eskişehir, Mersin, Muğla, Kastamonu,
              // Safranbolu): a stone shaft in o.n storeys, each with a cornice and an arched window, the clock
              // storey on top and a roof o.top ("pyr", "dome" or "cone") in t. o.wood: the clock storey is
              // timber (Safranbolu); o.oct: chamfered corners.
              const st = colors[c],
                w = o.w ?? 7,
                hw = Math.floor(w / 2),
                h = o.h ?? 24,
                n = o.n ?? 3,
                top = o.top ?? "pyr",
                roof = colors[t];
              box(-hw - 1, 3, w + 2, 3, T(st, -0.1));
              box(-hw - 1, 3, w + 2, 1, T(st, 0.3));
              const cs = h - 6,
                step = Math.max(4, Math.floor((cs - 3) / n));
              box(-hw, cs, w, cs - 3, T(st));
              box(hw, cs, 1, cs - 3, T(st, -0.28));
              if (o.oct) box(-hw, cs, 1, cs - 3, T(st, 0.3));
              for (let i = 0; i < n; i++) {
                const b = 3 + i * step,
                  tp = i === n - 1 ? cs : b + step;
                box(-hw - (i === n - 1 ? 1 : 0), tp, w + (i === n - 1 ? 2 : 0), 1, T(st, 0.3));
                box(0, b + Math.round(step * 0.7), 1, Math.max(2, Math.round(step * 0.4)), 2);
                if (w >= 7) for (const s of [-2, 2]) box(s, b + Math.round(step * 0.6), 1, 1, 2);
              }
              const cw = w >= 7 ? w - 2 : w,
                ck = Math.floor(cw / 2),
                cc = o.wood ? [150, 104, 70] : st;
              box(-ck, h, cw, 6, T(cc));
              box(ck, h, 1, 6, T(cc, -0.3));
              if (o.wood) for (const s of [-ck, ck]) box(s, h, 1, 6, T(cc, -0.4));
              orb(0, h - 3, Math.max(1, ck - 1), 6);
              box(0, h - 2, 1, 2, 2);
              box(-ck - 1, h + 1, cw + 2, 1, T(o.wood ? cc : st, 0.3));
              if (top === "dome") {
                dome(0, h + 1, ck, T(roof));
                box(0, h + ck + 3, 1, 2, 3);
              } else if (top === "cone") {
                cone(0, h + 1, ck + 1, 2 * ck + 4, T(roof));
                box(0, h + 2 * ck + 7, 1, 2, 3);
              } else {
                cone(0, h + 1, ck + 1, ck + 3, T(roof));
                for (let j = 0; j < ck + 2; j++)
                  box(Math.round((ck + 1) * (1 - j / (ck + 3))), h + 2 + j, 1, 1, T(roof, -0.3));
                box(0, h + ck + 6, 1, 2, 3);
              }
            }
            break;
          }
