          case "victoriaMemorial": {
            // Victoria Memorial, Kolkata: the long white marble front on its terrace, the arched central porch,
            // the great dome on a windowed drum with small domes at its corners and the bronze Angel of Victory
            // on top, and the two corner towers with their domed kiosks.
            const sh = chShade(6, 0.22),
              lit = chLit(6, 0.5),
              bronze = css(e.sh([70, 66, 64]));
            box(-18, 2, 37, 2, 13); // the terrace
            box(-17, 10, 35, 8, 6);
            box(-18, 11, 37, 1, lit);
            box(-17, 6, 35, 1, lit);
            for (let p = 8; p <= 12; p += 2)
              for (const k of [-1, 1]) {
                box(k * p, 9, 1, 2, 2);
                box(k * p, 5, 1, 2, 2);
              }
            box(17, 10, 1, 8, sh);
            for (const k of [-1, 1]) {
              const tx = k * 15;
              // corner tower: two stages and a domed kiosk
              box(tx - 2, 15, 5, 13, 6);
              box(tx - 1, 9, 3, 3, 2);
              box(tx - 1, 14, 3, 2, 2);
              box(tx - 3, 15, 7, 1, lit);
              box(tx - 2, 18, 5, 3, 6);
              for (const d of [-1, 1]) box(tx + d, 17, 1, 2, 2);
              box(tx - 2, 19, 5, 1, lit);
              dome(tx, 19, 2, 6);
              box(tx, 22, 1, 1, 3);
              if (k > 0) box(tx + 2, 14, 1, 12, sh);
              // the small domes on the central block's corners
              box(k * 6 - 1, 18, 3, 2, 6);
              dome(k * 6, 18, 1.5, 6);
              box(k * 6, 21, 1, 1, 3);
            }
            // the central block and its arched porch
            box(-6, 16, 13, 14, 6);
            box(6, 15, 1, 13, sh);
            box(-7, 16, 15, 1, lit);
            box(-3, 11, 7, 9, lit);
            dome(0, 11, 3, lit);
            box(-2, 10, 5, 8, 2);
            dome(0, 10, 2, 2);
            for (const p of [-5, 5]) box(p, 14, 1, 2, 2);
            // the drum, the dome and the angel
            box(-5, 19, 11, 3, 6);
            for (let p = -4; p <= 4; p += 2) box(p, 18, 1, 2, 2);
            box(-6, 20, 13, 1, lit);
            dome(0, 20, 6, 6);
            box(-3, 25, 2, 1, lit);
            box(-1, 28, 3, 2, lit);
            box(-1, 30, 3, 1, bronze);
            box(0, 32, 1, 3, bronze);
            break;
          }
          case "rumiDarwaza": {
            // Rumi Darwaza, Lucknow (1784): the gate that flares outward to a crown of merlons, its great
            // cusped arch in a shaded recess, slim corner turrets with little kiosks and the octagonal lantern
            // on top, between long arcaded wings that end in domed pavilions. c the buff stucco.
            const lit = chLit(c, 0.35),
              sh = chShade(c, 0.3),
              deep = chShade(c, 0.5);
            box(-16, 7, 33, 7, c);
            box(-16, 8, 33, 1, lit);
            for (let p = 10; p <= 13; p += 2)
              for (const k of [-1, 1]) {
                box(k * p, 5, 1, 3, 2);
                box(k * p, 6, 1, 1, sh);
              }
            for (const k of [-1, 1]) {
              box(k * 15 - 1, 11, 3, 11, c);
              box(k * 15, 9, 1, 2, 2);
              box(k * 15 - 1, 11, 3, 1, lit);
              dome(k * 15, 11, 1.5, c);
              box(k * 15, 14, 1, 1, 3);
            }
            // the gate, widening as it rises
            for (let j = 1; j <= 22; j++) {
              const k = j > 16 ? 8 + Math.floor((j - 15) / 2) : 8;
              box(-k, j, 2 * k + 1, 1, c);
              box(k, j, 1, 1, sh);
            }
            box(-11, 22, 23, 1, lit);
            for (let p = -11; p <= 11; p += 2) box(p, 23, 1, 1, lit);
            // the great arch: a lit frame, the shaded recess, the dark doorway
            box(-6, 14, 13, 13, lit);
            cone(0, 14, 6, 6, lit);
            box(-5, 14, 11, 13, sh);
            cone(0, 14, 5, 5, sh);
            for (const p of [-4, 4]) box(p, 12, 1, 5, deep);
            box(-2, 8, 5, 8, 2);
            dome(0, 8, 2, 2);
            box(0, 20, 1, 1, lit);
            // corner turrets with kiosks, and the lantern
            for (const k of [-1, 1]) {
              box(k * 10, 28, 1, 5, lit);
              dome(k * 10, 28, 1, c);
              box(k * 10, 30, 1, 1, 3);
            }
            box(-2, 27, 5, 4, c);
            for (const p of [-1, 1]) box(p, 26, 1, 2, 2);
            box(-3, 27, 7, 1, lit);
            dome(0, 27, 2, c);
            box(0, 31, 1, 2, 3);
            break;
          }
          case "husainabadClock": {
            // Husainabad Clock Tower, Lucknow (1887): a tall square tower of red brick on a stepped plinth, a
            // corbelled balcony a third of the way up, arched windows, the big clock face near the top and an
            // open kiosk with a little cupola.
            const brick = css(e.sh([190, 108, 76])),
              sh = css(e.sh([150, 82, 62])),
              lit = css(e.sh([228, 164, 122]));
            box(-5, 1, 11, 1, sh);
            box(-4, 3, 9, 2, brick);
            box(-4, 3, 9, 1, lit);
            box(-3, 17, 7, 14, brick);
            box(3, 17, 1, 14, sh);
            box(-1, 14, 3, 4, 2);
            dome(0, 14, 1, 2);
            box(-5, 19, 11, 2, lit);
            for (const p of [-4, -2, 2, 4]) box(p, 17, 1, 1, sh);
            box(-3, 39, 7, 19, brick);
            box(3, 39, 1, 19, sh);
            box(-1, 26, 3, 3, 2);
            dome(0, 26, 1, 2);
            box(-3, 30, 7, 1, lit);
            orb(0, 35, 2, 6);
            box(0, 36, 1, 2, 2);
            box(0, 35, 2, 1, 2);
            box(-4, 40, 9, 1, lit);
            box(-2, 43, 5, 3, brick);
            box(-1, 42, 3, 2, 2);
            box(-3, 44, 7, 1, lit);
            dome(0, 44, 2, brick);
            box(0, 48, 1, 2, 3);
            break;
          }
          case "indiaGate": {
            // India Gate, New Delhi (1931): the war memorial arch of buff-red sandstone, one tall round-headed
            // opening between broad piers with sunken panels and medallions, a deep cornice, and two stepped
            // attic storeys with the shallow bowl on top.
            const s = css(e.sh([206, 152, 108])),
              lit = css(e.sh([230, 190, 144])),
              sh = css(e.sh([170, 118, 84]));
            box(-11, 2, 23, 2, sh);
            box(-10, 24, 21, 22, s);
            box(10, 24, 1, 22, sh);
            dome(0, 18, 4, lit);
            box(-4, 18, 9, 16, lit);
            box(-3, 18, 7, 16, 2);
            dome(0, 18, 3, 2);
            box(-10, 13, 21, 1, lit);
            for (const k of [-1, 1]) {
              box(k * 7 - 1, 10, 3, 5, sh);
              orb(k * 7, 17, 1, sh);
              box(k * 7 - 1, 22, 3, 2, sh);
            }
            box(-11, 25, 23, 1, lit);
            box(-10, 24, 21, 1, sh);
            box(-9, 30, 19, 5, s);
            box(-9, 30, 19, 1, lit);
            box(-4, 28, 9, 1, sh);
            box(9, 29, 1, 4, sh);
            box(-7, 34, 15, 4, s);
            box(-7, 34, 15, 1, lit);
            box(-2, 35, 5, 1, sh);
            break;
          }
          case "qutubMinar": {
            // Qutub Minar, Delhi (1199-1368): five tapering storeys of fluted red sandstone, each ending in a
            // corbelled balcony, the top two banded with white marble, and a small cupola.
            const s = css(e.sh([178, 100, 76])),
              sh = css(e.sh([140, 76, 60])),
              lit = css(e.sh([222, 160, 120])),
              tops = [16, 27, 35, 41, 45];
            for (let j = 1; j <= 45; j++) {
              const k = Math.round(4.6 - (j * 2.4) / 45),
                marble = j > 35 && j % 3 !== 0;
              box(-k, j, 2 * k + 1, 1, marble ? 6 : s);
              if (!marble) for (let p = -k + 1; p < k; p += 2) box(p, j, 1, 1, sh);
              box(k, j, 1, 1, marble ? 13 : sh);
            }
            for (const b of tops.slice(0, 4)) {
              const k = Math.round(4.6 - (b * 2.4) / 45);
              box(-k, b, 2 * k + 1, 1, 2);
              box(-k - 1, b + 1, 2 * k + 3, 1, lit);
              box(-k - 1, b + 2, 1, 1, lit);
              box(k + 1, b + 2, 1, 1, lit);
            }
            box(-2, 46, 5, 1, lit);
            box(-1, 48, 3, 2, s);
            dome(0, 48, 1, lit);
            box(0, 51, 1, 1, 3);
            break;
          }
          case "deekshabhoomi": {
            // Deekshabhoomi, Nagpur (2001): the great white stupa where Ambedkar became a Buddhist, a hollow
            // hemisphere on a ringed drum of railings, a carved band near its crown, a small railed top, and a
            // Sanchi-style gateway (torana) in front.
            const sh = chShade(6, 0.2),
              lit = chLit(6, 0.5);
            box(-16, 5, 33, 5, 6);
            box(-16, 1, 33, 1, sh);
            box(-17, 6, 35, 1, lit);
            for (let p = -15; p <= 15; p += 2) box(p, 4, 1, 2, 13);
            dome(0, 6, 13, sh);
            dome(-1, 6, 12, 6);
            box(-6, 17, 13, 1, 13);
            box(-5, 18, 11, 1, 12);
            box(-4, 22, 9, 3, 6);
            box(-4, 22, 9, 1, lit);
            for (const p of [-3, -1, 1, 3]) box(p, 21, 1, 1, 13);
            box(-1, 24, 3, 2, 6);
            box(0, 26, 1, 2, 3);
            // the torana
            for (const p of [-3, 3]) box(p, 11, 1, 10, 13);
            box(-4, 11, 9, 1, 13);
            box(-4, 9, 9, 1, 13);
            box(-1, 4, 3, 3, 2);
            break;
          }
          case "hazratbal": {
            // Hazratbal Shrine, Srinagar (1968): the white marble shrine on Dal Lake, a long hall with two rows
            // of arched windows, the dome on an arcaded drum with a tall gilt spike, one slim minaret beside it
            // and a little kiosk at the end of the roof.
            const sh = chShade(6, 0.2),
              lit = chLit(6, 0.5);
            box(-16, 9, 33, 9, 6);
            box(-16, 1, 33, 1, sh);
            box(-17, 10, 35, 1, lit);
            box(-16, 5, 33, 1, lit);
            for (let p = -15; p <= 14; p += 3) {
              box(p, 3, 2, 2, 2);
              if (Math.abs(p) > 6) {
                box(p, 8, 2, 2, 2);
                box(p, 9, 2, 1, sh);
              }
            }
            box(16, 9, 1, 8, sh);
            box(-5, 14, 11, 4, 6);
            for (let p = -4; p <= 4; p += 2) box(p, 13, 1, 2, 2);
            box(-6, 15, 13, 1, lit);
            orb(0, 19, 6, sh);
            orb(-1, 19, 5, 6);
            box(-6, 16, 13, 1, lit);
            box(0, 26, 1, 1, 12);
            box(-1, 27, 3, 1, 12);
            box(0, 31, 1, 4, 12);
            // the minaret
            box(-10, 26, 2, 16, 6);
            box(-9, 26, 1, 16, sh);
            box(-11, 20, 4, 1, lit);
            box(-11, 27, 4, 1, lit);
            orb(-10, 29, 1.2, 6);
            box(-10, 32, 1, 2, 12);
            // the kiosk
            box(13, 13, 3, 3, 6);
            box(14, 12, 1, 1, 2);
            dome(14, 13, 1.5, 6);
            break;
          }
          case "cellularJail": {
            // Cellular Jail, Port Blair (1906): the front of the colonial prison, now a memorial: a long
            // yellow two-storey block with green shuttered windows and a crenellated parapet, the arched gate
            // under a flagpole, and two tall round watchtowers with crenellated crowns.
            const y = css(e.sh([228, 198, 124])),
              sh = css(e.sh([190, 160, 96])),
              lit = css(e.sh([246, 226, 170])),
              green = css(e.sh([70, 138, 110]));
            box(-16, 11, 33, 11, y);
            box(-16, 1, 33, 1, sh);
            box(-16, 6, 33, 1, lit);
            for (let p = -15; p <= 14; p += 3) {
              if (Math.abs(p) < 3) continue;
              box(p, 4, 2, 2, green);
              box(p, 9, 2, 2, green);
            }
            for (let p = -16; p <= 16; p += 2) box(p, 12, 1, 1, y);
            box(16, 11, 1, 10, sh);
            // the gate block
            box(-3, 13, 7, 13, y);
            box(-3, 13, 7, 1, lit);
            box(-2, 7, 5, 4, lit);
            dome(0, 7, 2, lit);
            box(-1, 6, 3, 5, 2);
            dome(0, 6, 1, 2);
            box(0, 19, 1, 6, 8);
            // the watchtowers
            for (const k of [-1, 1]) {
              const tx = k * 9;
              box(tx - 2, 20, 5, 20, y);
              box(tx + 2, 20, 1, 20, sh);
              box(tx - 1, 20, 1, 20, lit);
              box(tx - 3, 21, 7, 2, y);
              box(tx - 3, 21, 7, 1, lit);
              for (let p = -3; p <= 3; p += 2) box(tx + p, 22, 1, 1, y);
              box(tx, 16, 1, 2, 2);
            }
            break;
          }
          case "shaniwarWada": {
            // Shaniwar Wada, Pune (1732): the Peshwas' fortified palace seen from the front, its Delhi Gate
            // (a tall pointed arch with a studded wooden door under the drummers' gallery) between two great
            // round bastions, and the long stone walls with scalloped merlons.
            const stone = css(e.sh([150, 130, 112])),
              sh = css(e.sh([118, 100, 88])),
              lit = css(e.sh([186, 168, 148])),
              wood = css(e.sh([96, 62, 44])),
              stud = css(e.sh([200, 170, 110]));
            box(-16, 10, 33, 10, stone);
            for (let j = 3; j < 10; j += 3) box(-16, j, 33, 1, sh);
            for (let p = -16; p <= 16; p += 2) box(p, 11, 1, 1, stone);
            for (const k of [-1, 1]) {
              const bx = k * 8;
              box(bx - 3, 14, 7, 14, stone);
              box(bx - 2, 15, 5, 1, stone);
              box(bx - 3, 14, 1, 13, lit);
              box(bx + 2, 14, 2, 13, sh);
              for (let j = 4; j < 14; j += 3) box(bx - 2, j, 4, 1, sh);
            }
            // the gate block, the arch and the gallery
            box(-4, 17, 9, 17, lit);
            box(-3, 10, 7, 10, stone);
            cone(0, 10, 3, 3, stone);
            box(-2, 9, 5, 9, wood);
            cone(0, 9, 2, 2, wood);
            for (const p of [-1, 1]) for (let j = 2; j <= 8; j += 2) box(p, j, 1, 1, stud);
            box(-5, 18, 11, 1, sh);
            box(-5, 21, 11, 3, wood);
            for (let p = -4; p <= 4; p += 2) box(p, 20, 1, 2, 2);
            box(-6, 22, 13, 1, lit);
            break;
          }
          case "agaKhanPalace": {
            // Aga Khan Palace, Pune (1892): the cream two-storey palace with its ground-floor arcade of round
            // arches, a balustraded terrace, red-tiled hip roofs and the tall square tower with its red
            // pyramid roof and little domed pinnacles.
            const cream = css(e.sh([234, 224, 192])),
              sh = css(e.sh([200, 188, 156])),
              lit = css(e.sh([250, 244, 226])),
              red = css(e.sh([190, 72, 52]));
            box(-16, 11, 33, 11, cream);
            box(-16, 1, 33, 1, sh);
            for (let p = -15; p <= 13; p += 3) {
              box(p, 4, 2, 3, 2);
              dome(p + 0.5, 4, 1, 2);
            }
            box(-16, 6, 33, 1, lit);
            for (let p = -15; p <= 15; p += 2) box(p, 9, 1, 2, sh);
            box(-17, 12, 35, 1, lit);
            for (let p = -16; p <= 16; p += 2) box(p, 13, 1, 1, lit);
            // the red hip roofs
            box(-11, 15, 9, 2, red);
            box(-10, 16, 7, 1, red);
            box(-15, 15, 2, 2, cream);
            dome(-14, 15, 1, cream);
            box(-14, 18, 1, 1, 3);
            // the tower
            box(4, 20, 7, 8, cream);
            box(10, 20, 1, 8, sh);
            for (const p of [6, 8]) box(p, 18, 1, 3, 2);
            box(3, 21, 9, 1, lit);
            cone(7, 21, 4, 3, red);
            for (const p of [3, 11]) {
              box(p, 23, 1, 2, cream);
              box(p, 24, 1, 1, 3);
            }
            break;
          }
          case "laxmiVilas": {
            // Laxmi Vilas Palace, Vadodara (1890): the long Indo-Saracenic palace of buff-pink sandstone, rows of
            // cusped arches, the tall clock tower stepping up in open stages to a small dome, a ribbed central
            // dome and smaller domes and kiosks along the roof.
            const s = css(e.sh([210, 168, 132])),
              sh = css(e.sh([170, 130, 104])),
              lit = css(e.sh([236, 204, 170])),
              dk = css(e.sh([110, 78, 70]));
            box(-18, 11, 37, 11, s);
            box(-18, 1, 37, 1, sh);
            box(-18, 6, 37, 1, lit);
            for (let p = -17; p <= 17; p += 2) {
              box(p, 4, 1, 2, dk);
              box(p, 9, 1, 2, dk);
            }
            box(-19, 12, 39, 1, lit);
            box(18, 11, 1, 10, sh);
            // the domes along the roof
            for (const [px, r] of [
              [-16, 2],
              [-12, 1.5],
              [9, 1.5],
              [13, 2],
              [17, 1.5],
            ]) {
              const k = Math.round(r);
              box(px - k, 14, 2 * k + 1, 2, s);
              dome(px, 14, r, s);
              box(px, 15 + k, 1, 2, 3);
            }
            // the central dome
            box(-1, 16, 7, 4, s);
            for (const p of [0, 2, 4]) box(p, 15, 1, 2, dk);
            box(-2, 17, 9, 1, lit);
            orb(2, 19, 3, s);
            box(3, 21, 1, 2, sh);
            box(2, 24, 1, 2, 3);
            // the clock tower
            box(-9, 24, 5, 12, s);
            box(-5, 24, 1, 12, sh);
            orb(-7, 21, 1, 6);
            for (const j of [16, 26, 29]) box(-8, j, 1, 2, dk);
            box(-10, 25, 7, 1, lit);
            box(-9, 28, 5, 3, s);
            box(-8, 27, 3, 2, dk);
            box(-10, 29, 7, 1, lit);
            box(-8, 31, 3, 2, s);
            dome(-7, 31, 2, s);
            box(-7, 35, 1, 2, 3);
            break;
          }
          case "shikhara":
          case "kashiVishwanath": {
            // A North Indian (Nagara) temple: the curved shikhara tower over the sanctum, ribbed by mouldings in
            // t, little turret copies on its shoulders, the ribbed amalaka and the kalasha pot on top, and a
            // lower hall (mandapa) beside it under a smaller shikhara, or a dome with o.porch "dome".
            // o.top "chakra": Jagannath's wheel and a flag on top (Odisha temples); o.flag a flag of that colour.
            // Used by Nashik (Kalaram, black stone), Nabarangpur and Ranchi (Jagannath), Meerut (Augharnath).
            // kashiVishwanath (Varanasi): the gilt shikhara and gilt dome between two stone shikharas.
            const shik = (cx, base, hw, tall, col, band, top) => {
              const shade = chShade(col, 0.3),
                light = chLit(col, 0.35);
              box(cx - hw - 1, base, 2 * hw + 3, base, col);
              box(cx - hw - 1, base, 2 * hw + 3, 1, light);
              if (base > 2) box(cx + hw, base - 1, 2, base - 1, shade);
              for (const q of [-1, 1]) {
                const sx = cx + q * Math.round(hw * 0.75),
                  sk = Math.max(1, Math.round(hw * 0.4)),
                  st = Math.round(tall * 0.5);
                for (let j = 0; j < st; j++) {
                  const k = Math.round(sk * Math.sqrt(1 - (j / st) ** 2));
                  box(sx - k, base + 1 + j, 2 * k + 1, 1, j % 3 === 2 ? band : col);
                }
                box(sx, base + st + 1, 1, 1, light);
              }
              for (let j = 0; j < tall; j++) {
                const k = Math.round(hw * Math.sqrt(1 - (j / tall) ** 2));
                box(cx - k, base + 1 + j, 2 * k + 1, 1, j % 3 === 2 ? band : col);
                if (k >= 2)
                  box(cx + k - Math.floor(k / 3), base + 1 + j, Math.max(1, Math.floor(k / 3)), 1, shade);
                if (hw >= 4 && k >= 2 && j % 3 !== 2) box(cx, base + 1 + j, 1, 1, light);
              }
              const t0 = base + tall;
              box(cx - 2, t0 + 1, 5, 1, band);
              box(cx - 1, t0 + 2, 3, 1, col);
              box(cx, t0 + 3, 1, 1, 12);
              if (top === "chakra") {
                box(cx, t0 + 7, 1, 4, 8);
                box(cx - 1, t0 + 5, 3, 1, 12);
                box(cx + 1, t0 + 7, 2, 1, o.flag ?? 5);
              } else {
                box(cx, t0 + 5, 1, 2, 12);
                if (o.flag != null) {
                  box(cx, t0 + 8, 1, 3, 8);
                  box(cx + 1, t0 + 8, 2, 1, o.flag);
                }
              }
            };
            if (kind === "kashiVishwanath") {
              shik(8, 7, 2, 12, 13, 8);
              box(-2, 9, 9, 8, 12);
              box(-2, 9, 9, 1, 3);
              box(1, 6, 3, 5, 2);
              box(1, 13, 7, 2, 12);
              dome(4, 13, 3, 12);
              box(5, 15, 1, 1, 3);
              box(4, 18, 1, 2, 3);
              shik(-5, 9, 4, 19, 12, 3);
              break;
            }
            const w = o.w ?? 15,
              h = o.h ?? 26,
              hw = Math.max(2, Math.round(w * 0.3)),
              base = Math.max(3, Math.round(h * 0.2)),
              tall = h - base - 4,
              tx = Math.round(w / 2) - hw - 1;
            // the mandapa in front, on the left
            const mx = tx - hw - 2,
              mh = base + 1;
            box(mx - 3, mh, 6, mh, c);
            box(mx - 3, Math.ceil(mh / 2), 6, 1, t);
            box(mx - 1, Math.max(2, mh - 2), 2, Math.max(2, mh - 2), 2);
            if (o.porch === "dome") {
              box(mx - 3, mh + 1, 6, 1, chLit(c, 0.3));
              dome(mx, mh + 1, 3, c);
              box(mx, mh + 5, 1, 2, 12);
            } else shik(mx, mh, 2, Math.round(tall * 0.4), c, t);
            shik(tx, base, hw, tall, c, t, o.top);
            break;
          }
          case "panjimChurch": {
            // Our Lady of the Immaculate Conception, Panaji (1619): the white Portuguese baroque front above its
            // criss-crossing stairway, two towers with small cupolas and crosses, and the tall central gable
            // holding the great bell. Drawn from memory (no photo yet).
            const sh = chShade(6, 0.2),
              lit = chLit(6, 0.5);
            box(-12, 6, 25, 6, 6);
            box(-12, 6, 25, 1, lit);
            for (let i = 0; i < 5; i++) {
              box(-10 + i * 2, 5 - i, 2, 1, 8);
              box(9 - i * 2, 5 - i, 2, 1, 8);
            }
            for (let p = -11; p <= 11; p += 2) box(p, 7, 1, 1, lit);
            box(-8, 22, 17, 15, 6);
            box(8, 22, 1, 15, sh);
            box(-8, 14, 17, 1, lit);
            box(-9, 22, 19, 1, lit);
            box(-1, 12, 3, 5, 2);
            dome(0, 12, 1, 2);
            for (const k of [-1, 1]) {
              box(k * 4, 12, 1, 3, 2);
              box(k * 4, 19, 1, 3, 2);
              box(k * 7 - 2, 25, 5, 3, 6);
              box(k * 7 - 1, 24, 3, 2, 2);
              box(k * 7 - 2, 26, 5, 1, lit);
              dome(k * 7, 26, 2, 6);
              box(k * 7, 30, 1, 2, 2);
              box(k * 7 - 1, 30, 3, 1, 2);
            }
            box(0, 19, 1, 3, 2);
            box(-3, 27, 7, 5, 6);
            box(-2, 26, 5, 3, 2);
            box(-1, 25, 3, 2, 12);
            box(-4, 27, 9, 1, lit);
            cone(0, 27, 3, 2, 6);
            box(0, 32, 1, 3, 2);
            box(-1, 31, 3, 1, 2);
            break;
          }
          case "takhtPatna": {
            // Takht Sri Patna Sahib (rebuilt 1954): the white marble gurdwara at Guru Gobind Singh's birthplace,
            // two storeys of arched openings, a big fluted dome with a gilt finial, smaller domed kiosks at the
            // corners and the tall Nishan Sahib flagpole beside it.
            const sh = chShade(6, 0.2),
              lit = chLit(6, 0.5),
              saffron = css(e.sh([238, 140, 48]));
            box(-11, 12, 23, 12, 6);
            box(-11, 1, 23, 1, sh);
            box(-12, 7, 25, 1, lit);
            box(-12, 13, 25, 1, lit);
            for (let p = -10; p <= 9; p += 3) {
              box(p, 5, 2, 3, 2);
              box(p, 11, 2, 2, 2);
            }
            box(11, 12, 1, 11, sh);
            box(-5, 16, 11, 3, 6);
            for (let p = -4; p <= 4; p += 2) box(p, 15, 1, 2, 2);
            box(-6, 17, 13, 1, lit);
            orb(0, 20, 5, 6);
            for (const p of [-2, 2]) box(p, 23, 1, 2, sh);
            box(3, 21, 2, 3, sh);
            box(0, 26, 1, 3, 12);
            for (const k of [-1, 1]) {
              box(k * 9 - 1, 16, 3, 3, 6);
              box(k * 9, 15, 1, 1, 2);
              dome(k * 9, 16, 1.5, 6);
              box(k * 9, 19, 1, 1, 12);
            }
            box(-14, 28, 1, 28, 12);
            box(-17, 27, 3, 3, saffron);
            break;
          }
          case "golghar": {
            // Golghar, Patna (1786): the giant beehive granary of plastered brick, its bulging dome rising from
            // a ring of doors, the two open stairways winding up its flank and the small flat top.
            const s = css(e.sh([206, 150, 128])),
              sh = css(e.sh([168, 118, 102])),
              lit = css(e.sh([230, 186, 166]));
            for (let j = 1; j <= 24; j++) {
              const k = Math.round(10 * Math.sqrt(1 - ((j - 3) / 23) ** 2) + (j < 4 ? 0 : 0));
              box(-k, j, 2 * k + 1, 1, s);
              box(k - Math.floor(k / 3), j, Math.max(1, Math.floor(k / 3)), 1, sh);
              box(-k, j, 1, 1, lit);
            }
            for (let j = 2; j < 22; j++) {
              const k = Math.round(10 * Math.sqrt(1 - ((j - 3) / 23) ** 2));
              box(-k + Math.round(((j - 2) * k) / 12), j, 1, 1, lit);
            }
            box(-4, 25, 9, 1, sh);
            box(-1, 4, 3, 3, 2);
            box(-10, 1, 21, 1, sh);
            break;
          }
          case "shillongCathedral": {
            // Mary Help of Christians Cathedral, Shillong (1980): pale blue-grey concrete, a low front with a
            // great fan window over the porch, and behind it a stepped crown of rounded towers with tall slit
            // windows, the middle one carrying the cross.
            const s = css(e.sh([200, 210, 220])),
              sh = css(e.sh([160, 172, 186])),
              lit = css(e.sh([236, 242, 246])),
              dk = css(e.sh([84, 90, 110]));
            for (const [tx, th, tw] of [
              [-6, 34, 5],
              [6, 34, 5],
              [-11, 22, 3],
              [11, 22, 3],
              [0, 30, 5],
            ]) {
              const k = Math.floor(tw / 2);
              box(tx - k, th, tw, th, s);
              box(tx + k, th - 1, 1, th - 1, sh);
              box(tx - k, th, tw, 1, lit);
              if (tw > 3) for (const q of [-1, 1]) box(tx + q, th - 3, 1, th - 16, dk);
            }
            box(0, 34, 1, 4, dk);
            box(-1, 33, 3, 1, dk);
            box(-12, 12, 25, 12, s);
            box(-12, 12, 25, 1, lit);
            box(12, 11, 1, 11, sh);
            dome(0, 7, 5, dk);
            for (const p of [-3, 0, 3]) box(p, 11, 1, 4, s);
            box(-8, 7, 17, 1, lit);
            box(-2, 6, 5, 5, dk);
            for (const p of [-9, 9]) box(p, 10, 1, 3, dk);
            break;
          }
          case "christChurchShimla": {
            // Christ Church, Shimla (1857): the mustard-yellow neo-Gothic church on the Ridge, white-trimmed
            // lancet windows along the nave under a grey roof, and the square front tower with its clock,
            // crenellated parapet and corner pinnacles.
            const y = css(e.sh([220, 182, 96])),
              sh = css(e.sh([182, 146, 72])),
              trim = 6,
              roof = css(e.sh([110, 112, 120]));
            box(-10, 11, 21, 11, y);
            box(-10, 1, 21, 1, sh);
            for (let i = 0; i < 4; i++) box(-10 + i, 12 + i, 21 - 2 * i, 1, roof);
            for (const p of [-8, -5, 5, 8]) {
              box(p - 1, 9, 3, 5, trim);
              box(p, 8, 1, 4, 2);
            }
            box(10, 11, 1, 10, sh);
            box(-3, 26, 7, 26, y);
            box(3, 26, 1, 25, sh);
            box(-1, 8, 3, 7, trim);
            box(0, 7, 1, 6, 2);
            box(-1, 15, 3, 4, trim);
            box(0, 14, 1, 3, 2);
            orb(0, 20, 1.5, trim);
            box(0, 20, 1, 1, 2);
            box(-1, 25, 3, 3, trim);
            box(0, 24, 1, 2, 2);
            box(-4, 27, 9, 1, trim);
            for (const p of [-4, -2, 2, 4]) box(p, 28, 1, 1, trim);
            for (const p of [-4, 4]) box(p, 31, 1, 4, y);
            break;
          }
          case "kohimaCathedral": {
            // Mary Help of Christians Cathedral, Kohima (1999): its front is shaped like a traditional Naga
            // house, a huge steep gable reaching almost to the ground with crossed horns at the peak, timber
            // framing round a tall glass front and a large cross. Drawn from memory (no photo yet).
            const roof = css(e.sh([150, 96, 70])),
              rsh = css(e.sh([118, 74, 56])),
              wall = 6,
              glass = css(e.sh([120, 156, 186]));
            for (let j = 0; j < 22; j++) {
              const k = Math.round(13 * (1 - j / 22));
              box(-k, 2 + j, 2 * k + 1, 1, roof);
              box(k - 1, 2 + j, 1, 1, rsh);
            }
            box(-13, 2, 27, 2, 13);
            for (let j = 0; j < 15; j++) {
              const k = Math.round(8 * (1 - j / 18));
              box(-k, 3 + j, 2 * k + 1, 1, wall);
            }
            for (let j = 0; j < 12; j++) {
              const k = Math.round(5 * (1 - j / 16));
              box(-k, 3 + j, 2 * k + 1, 1, glass);
            }
            box(0, 17, 1, 13, roof);
            box(-3, 13, 7, 1, roof);
            for (const q of [-1, 1]) {
              box(q * 2, 25, 1, 1, roof);
              box(q * 3, 26, 1, 1, roof);
            }
            box(-1, 5, 3, 4, 2);
            break;
          }
