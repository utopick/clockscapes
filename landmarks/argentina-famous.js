          case "obelisco": {
            // Obelisco de Buenos Aires: a slender white shaft on a low step, tapering, with the little
            // window under the pyramidion; lit on the left, shaded on the right.
            const sh = chShade(c, 0.25),
              lit = chLit(c, 0.3);
            box(-4, 2, 9, 2, chShade(c, 0.12));
            box(-4, 2, 9, 1, lit);
            box(-3, 19, 7, 17, c);
            box(-2, 37, 5, 18, c);
            box(-3, 19, 1, 17, lit);
            box(3, 19, 1, 17, sh);
            box(-2, 37, 1, 18, lit);
            box(2, 37, 1, 18, sh);
            box(-1, 39, 3, 2, c);
            box(1, 39, 1, 2, sh);
            box(0, 41, 1, 2, lit);
            box(0, 34, 1, 1, 2);
            break;
          }
          case "empireState": {
            // Empire State Building: the five-storey podium, setbacks, the tall shaft striped by vertical
            // window ribbons, the stepped Art Deco crown, the mooring mast and the antenna.
            const sh = chShade(c, 0.3),
              lit = chLit(c, 0.4),
              rib = css(e.sh(mixc(colors[11], [41, 40, 54], 0.35)));
            const tier = (hw, top, h, ribs = true) => {
              box(-hw, top, 2 * hw + 1, h, c);
              if (ribs) for (let p = -hw + 1; p < hw; p += 2) box(p, top - 1, 1, h - 1, rib);
              box(hw, top, 1, h, sh);
              box(-hw, top, 2 * hw + 1, 1, lit);
            };
            tier(6, 5, 5);
            box(-1, 2, 3, 2, 2);
            tier(5, 8, 3);
            tier(4, 37, 29);
            for (let r = 12; r < 36; r += 6) box(-4, r, 8, 1, c);
            tier(3, 41, 4);
            tier(2, 44, 3);
            tier(1, 46, 2, false);
            box(0, 50, 1, 4, lit);
            box(-1, 48, 3, 1, lit);
            box(0, 56, 1, 6, 8);
            break;
          }
          case "colosseo": {
            // The Colosseum, Rome: the curved travertine wall, three tiers of arches and the attic on the left,
            // broken off on the right where only the lower tiers stand; the arches narrow toward the ends.
            const stone = css(e.sh(mixc(colors[13], colors[0], 0.45))),
              ruin = css(e.sh(mixc(colors[14], colors[0], 0.35))),
              lit = css(e.sh(mixc(colors[13], [255, 248, 225], 0.35)));
            const top = (xx) =>
              xx <= -2 ? 28 : xx <= 3 ? 28 - Math.round((xx + 2) * 1.4) : 21 - Math.round((xx - 3) / 6);
            for (let xx = -24; xx <= 24; xx++) {
              const tp = top(xx);
              box(xx, tp, 1, tp, stone);
              if (xx > -2 && tp > 15) box(xx, tp, 1, tp - 15, ruin);
              for (const r of [7, 14, 21, 28]) if (r <= tp) box(xx, r, 1, 1, lit);
              if (xx >= 20) box(xx, tp, 1, tp, "rgba(24, 20, 48, 0.18)");
            }
            for (let i = 0; i < 11; i++) {
              const ax = Math.round(23 * Math.sin(((i - 5) * 14 * Math.PI) / 180)),
                k = Math.abs(i - 5) < 4 ? 1 : 0;
              for (const base of [0, 7, 14]) {
                if (top(ax) < base + 6) continue;
                box(ax - k, base + 4, 2 * k + 1, 3, 2);
                if (k) box(ax, base + 5, 1, 1, 2);
              }
              if (top(ax) >= 28) box(ax, 25, 1, 2, 2); // the attic windows
            }
            break;
          }
          case "vittoriano": {
            // Altare della Patria (Vittoriano), Rome: white marble terraces and stairs, the long colonnade on
            // top between two temple-fronted propylaea crowned by bronze quadrigas, the equestrian statue.
            const sh = chShade(c, 0.22),
              lit = chLit(c, 0.3),
              bronze = css(e.sh(mixc(colors[4], [41, 40, 54], 0.45)));
            box(-20, 8, 41, 8, c);
            for (let s = 0; s < 4; s++) box(-11 + s, 4 - s, 23 - 2 * s, 1, s % 2 ? sh : lit); // the front stairs
            box(-20, 8, 41, 1, lit);
            box(-20, 5, 41, 1, sh);
            box(-2, 7, 5, 2, sh); // the altar niche
            box(-1, 7, 3, 1, 12);
            box(-15, 17, 31, 9, sh);
            for (let p = -14; p <= 14; p += 2) box(p, 16, 1, 8, lit); // the colonnade
            box(-16, 18, 33, 2, c);
            box(-16, 19, 33, 1, lit);
            for (let p = -14; p <= 14; p += 4) box(p, 20, 1, 1, c); // the statues on the cornice
            for (const k of [-1, 1]) {
              const px = k * 18;
              box(px - 3, 21, 7, 13, c);
              box(px - 2, 16, 1, 7, lit);
              box(px + 2, 16, 1, 7, lit);
              box(px - 1, 16, 3, 7, sh);
              box(px - 3, 21, 7, 1, lit);
              cone(px, 21, 3, 1, c);
              box(px - 2, 25, 5, 2, bronze); // the quadriga
              box(px - 1, 26, 1, 1, bronze);
              box(px + k, 27, 1, 2, bronze);
            }
            box(-3, 10, 7, 2, lit); // Victor Emmanuel on horseback
            box(-2, 14, 5, 2, bronze);
            box(-2, 12, 1, 2, bronze);
            box(2, 12, 1, 2, bronze);
            box(3, 16, 1, 3, bronze);
            box(0, 17, 1, 3, bronze);
            break;
          }
          case "cairoTower": {
            // Cairo Tower: a slim concrete shaft wrapped in a diamond lattice, opening at the top into the lotus
            // crown under the round observation deck, with a short mast.
            const sh = chShade(c, 0.3),
              lit = chLit(c, 0.3),
              net = chShade(c, 0.45);
            box(-4, 3, 9, 3, c);
            box(-4, 3, 9, 1, lit);
            box(-1, 2, 3, 2, 2);
            box(-2, 33, 5, 30, c);
            for (let h = 5; h <= 33; h++)
              for (const xx of [-1, 1]) if ((h + xx * (h % 4 < 2 ? 1 : -1)) % 2 === 0) box(xx, h, 1, 1, net);
            box(-2, 33, 1, 30, lit);
            box(2, 33, 1, 30, sh);
            for (let j = 0; j < 4; j++)
              box(-2 - Math.floor(j / 2), 34 + j, 5 + 2 * Math.floor(j / 2), 1, j % 2 ? 9 : c); // the lotus
            box(-1, 35, 1, 2, 9);
            box(1, 35, 1, 2, 9);
            box(-4, 40, 9, 2, c);
            box(-4, 39, 9, 1, 2);
            box(-4, 40, 9, 1, lit);
            box(-2, 42, 5, 2, c);
            box(0, 46, 1, 4, lit);
            break;
          }
          case "stBasil": {
            // Saint Basil's Cathedral, Moscow: the red-brick gallery, the tall central tent with its chevrons
            // and small gold onion, and four drums crowned by striped and patterned onion domes.
            const wall = css(e.sh(mixc(colors[10], colors[1], 0.45))),
              wsh = css(e.sh(mixc(colors[1], [41, 40, 54], 0.3))),
              trim = css(e.sh(colors[6]));
            const onion = (cx, base, r, a, b) => {
              const cy = base + r;
              for (let dy = -r; dy <= r; dy++) {
                const w = Math.round(Math.sqrt(r * r - dy * dy) + 0.3);
                for (let dx = -w; dx <= w; dx++) box(cx + dx, cy + dy, 1, 1, (dx + dy + 99) % 4 < 2 ? b : a);
              }
              for (let j = 1; j < r; j++) {
                const k = Math.round((r - 1 - j) * 0.5);
                box(cx - k, cy + r + j, 2 * k + 1, 1, a);
              }
              box(cx, cy + 2 * r + 1, 1, 2, 12);
            };
            const drum = (cx, hw, top, h) => {
              box(cx - hw, top, 2 * hw + 1, h, wall);
              box(cx + hw, top, 1, h, wsh);
              box(cx - hw, top - 2, 2 * hw + 1, 1, trim);
              for (let p = -hw + 1; p < hw; p += 2) box(cx + p, top - 4, 1, 2, 2);
            };
            // the central tent
            drum(0, 2, 22, 14);
            for (let p = -2; p <= 2; p += 2) box(p, 20, 1, 1, trim);
            for (let j = 0; j < 10; j++) {
              const k = Math.round(3 * (1 - j / 10));
              box(-k, 23 + j, 2 * k + 1, 1, wall);
              box(k, 23 + j, 1, 1, wsh);
              if (j % 3 === 1) for (let p = -k + 1; p < k; p += 2) box(p, 23 + j, 1, 1, trim);
            }
            onion(0, 32, 1, 12, 12);
            // the side drums with their onions
            drum(-9, 1, 18, 10);
            onion(-9, 18, 3, 9, 12);
            drum(-4, 1, 16, 8);
            onion(-4, 16, 2, 7, 6);
            drum(9, 1, 19, 11);
            onion(9, 19, 3, 10, 9);
            drum(5, 1, 14, 6);
            onion(5, 14, 2, 9, 12);
            // the gallery round the foot
            box(-12, 8, 25, 8, wall);
            box(12, 8, 1, 8, wsh);
            box(-12, 8, 25, 1, trim);
            box(-12, 4, 25, 1, trim);
            for (let p = -10; p <= 10; p += 4) box(p, 7, 1, 2, 2);
            box(-1, 3, 3, 3, 2); // the porch
            break;
          }
          case "spasskaya": {
            // Spasskaya Tower, Moscow Kremlin: the red gate tower with its archway and white stone trim, the clock
            // tier, the arched belfry ringed by white pinnacles, the green tent and the ruby star.
            const sh = chShade(c, 0.3),
              lit = chLit(c, 0.3),
              wt = css(e.sh(colors[6]));
            box(-5, 22, 11, 22, c);
            box(5, 22, 1, 21, sh);
            box(-1, 7, 3, 6, 2);
            box(0, 8, 1, 1, 2);
            for (const r of [10, 16, 22]) box(-5, r, 11, 1, wt);
            for (const d of [-3, 3]) box(d, 19, 1, 2, 2);
            for (const d of [-5, -3, 3, 5]) box(d, 24, 1, 2, wt); // the pinnacles
            box(-4, 29, 9, 7, c);
            box(4, 29, 1, 7, sh);
            orb(0, 26, 2.5, 2); // the clock
            orb(0, 26, 1.6, 7);
            box(0, 27, 1, 2, 12);
            box(-4, 29, 9, 1, wt);
            box(-3, 35, 7, 6, c);
            box(3, 35, 1, 6, sh);
            for (const d of [-2, 0, 2]) box(d, 33, 1, 3, 2);
            box(-3, 35, 7, 1, wt);
            for (const d of [-4, 4]) box(d, 32, 1, 3, wt);
            box(-2, 37, 5, 2, c);
            box(-2, 37, 5, 1, lit);
            cone(0, 37, 2, 8, 9);
            box(1, 44, 1, 7, chShade(9, 0.3));
            box(-1, 48, 3, 1, 10); // the star
            box(0, 49, 1, 3, 10);
            break;
          }
          case "tiananmen": {
            // Tiananmen, Beijing: the long red wall with five arched gates and the portrait over the middle one,
            // the white balustrade, the red-columned hall and its double-eaved roof of yellow tiles.
            const red = css(e.sh(mixc(colors[10], colors[1], 0.25))),
              rsh = css(e.sh(mixc(colors[10], [41, 40, 54], 0.4))),
              yel = css(e.sh(colors[12])),
              ysh = css(e.sh(mixc(colors[12], [41, 40, 54], 0.45))),
              marble = css(e.sh(colors[6]));
            for (let j = 1; j <= 11; j++) box(-17 + Math.floor(j / 6), j, 35 - 2 * Math.floor(j / 6), 1, red);
            box(-17, 1, 35, 1, rsh);
            for (const [gx, gh] of [
              [0, 6],
              [-6, 5],
              [6, 5],
              [-12, 4],
              [12, 4],
            ]) {
              box(gx - 1, gh - 1, 3, gh - 1, 2);
              box(gx, gh, 1, 1, 2);
            }
            box(-1, 10, 3, 3, 2); // the portrait
            box(0, 9, 1, 1, 13);
            for (const d of [-7, 7]) box(d - 1, 9, 3, 2, marble);
            box(-16, 12, 33, 1, marble);
            for (let p = -16; p <= 16; p += 2) box(p, 13, 1, 1, marble);
            box(-12, 17, 25, 4, red);
            for (let p = -11; p <= 11; p += 2) box(p, 16, 1, 3, rsh);
            const roof = (hw, bottom, rows) => {
              box(-hw - 1, bottom + 1, 1, 1, yel);
              box(hw + 1, bottom + 1, 1, 1, yel);
              for (let j = 0; j < rows; j++) box(-hw + j * 2, bottom + j, 2 * (hw - 2 * j) + 1, 1, yel);
              box(-hw, bottom, 2 * hw + 1, 1, ysh);
            };
            roof(15, 18, 2);
            box(-10, 21, 21, 2, red);
            for (let p = -10; p <= 10; p++) box(p, 21, 1, 1, p % 3 === 0 ? 12 : p % 2 ? 9 : 7);
            roof(14, 22, 4);
            box(-7, 26, 15, 1, yel); // the ridge
            box(-7, 27, 1, 1, yel);
            box(7, 27, 1, 1, yel);
            break;
          }
          case "angelIndependencia": {
            // Angel of Independence, Mexico City: stepped base with white corner pedestals, the stone pedestal
            // with bronze figures at its corners, the column with its ring, and the gilded winged Victory.
            const sh = chShade(c, 0.25),
              lit = chLit(c, 0.35),
              bronze = css(e.sh(mixc(colors[4], [41, 40, 54], 0.5)));
            box(-8, 2, 17, 2, c);
            box(-8, 2, 17, 1, lit);
            box(-6, 3, 13, 1, sh);
            for (const d of [-7, 7]) {
              box(d, 6, 1, 4, lit);
              box(d, 7, 1, 1, 6);
            }
            box(-4, 10, 9, 7, c);
            box(-4, 10, 9, 1, lit);
            box(4, 9, 1, 6, sh);
            box(-1, 7, 3, 3, sh);
            for (const d of [-4, 4]) box(d - (d < 0 ? 0 : 1), 13, 2, 3, bronze);
            box(-1, 12, 3, 2, bronze);
            box(-1, 34, 3, 22, c);
            box(1, 34, 1, 22, sh);
            box(0, 34, 1, 22, lit);
            box(-2, 29, 5, 2, lit); // the ring of garlands
            box(-2, 36, 5, 2, lit);
            box(-1, 37, 3, 1, c);
            box(0, 41, 1, 4, 12); // the Victory and her wings
            box(-1, 39, 1, 2, 12);
            for (const [dx, dy] of [
              [-1, 41],
              [-2, 42],
              [-3, 43],
              [1, 41],
              [2, 42],
              [3, 43],
              [1, 43],
            ])
              box(dx, dy, 1, 1, 3);
            break;
          }
          case "metroCathedral": {
            // Metropolitan Cathedral, Mexico City: grey stone front between two tall belfries with bell-shaped
            // caps, the clock tier over the middle portal, and the red tezontle Sagrario with its dome beside it.
            const sh = chShade(c, 0.3),
              lit = chLit(c, 0.35),
              tez = css(e.sh(mixc(colors[1], colors[14], 0.3))),
              tsh = css(e.sh(mixc(colors[1], [41, 40, 54], 0.35)));
            // the Sagrario on the right, with its dome behind
            box(15, 19, 5, 4, c);
            dome(17, 19, 3, sh);
            box(17, 23, 1, 2, lit);
            box(13, 15, 8, 15, tez);
            box(20, 15, 1, 15, tsh);
            box(15, 15, 4, 13, lit); // the carved retablo front
            for (let r = 5; r < 15; r += 2)
              for (let d = 15 + (r % 4 === 1 ? 0 : 1); d < 19; d += 2) box(d, r, 1, 1, sh);
            box(16, 3, 2, 3, 2);
            box(16, 17, 2, 2, lit);
            // the main front
            box(-6, 20, 13, 20, c);
            box(-6, 20, 13, 1, lit);
            box(-6, 10, 13, 1, lit);
            chDoor(0, 3, 6, c);
            for (const d of [-4, 4]) box(d, 6, 1, 4, 2);
            box(-1, 15, 3, 3, 2);
            box(-3, 24, 7, 4, c); // the clock tier
            orb(0, 22, 1.3, 2);
            box(0, 23, 1, 1, 6);
            cone(0, 24, 2, 2, c);
            for (const k of [-1, 1]) {
              const tx = k * 10;
              box(tx - 3, 19, 7, 19, c);
              box(tx + 3, 19, 1, 19, sh);
              for (const r of [6, 13]) box(tx, r, 1, 3, 2);
              for (const r of [19, 10]) box(tx - 3, r, 7, 1, lit);
              box(tx - 3, 27, 7, 8, c); // the belfry tiers
              box(tx + 3, 27, 1, 8, sh);
              for (const d of [-2, 2]) box(tx + d, 25, 1, 4, 2);
              box(tx - 3, 27, 7, 1, lit);
              box(tx - 2, 32, 5, 5, c);
              box(tx + 2, 32, 1, 5, sh);
              box(tx, 31, 1, 3, 2);
              box(tx - 3, 32, 7, 1, lit);
              dome(tx, 32, 2, sh); // the bell-shaped cap and its lantern
              box(tx, 36, 1, 2, c);
              box(tx, 38, 1, 1, 3);
              for (const d of [-3, 3]) box(tx + d, 29, 1, 2, lit);
            }
            break;
          }
          case "hagiaSophia": {
            // Hagia Sophia, Istanbul: the ochre-pink mass with its buttresses, the great arch with its window
            // grid, the shallow grey dome on a ring of windows, side half domes and four pencil minarets.
            const body = css(e.sh(mixc(colors[14], colors[0], 0.45))),
              bsh = css(e.sh(mixc(colors[14], [41, 40, 54], 0.35))),
              lit = css(e.sh(mixc(colors[0], [255, 248, 225], 0.4))),
              lead = css(e.sh(colors[8])),
              ldk = css(e.sh(mixc(colors[8], [41, 40, 54], 0.4))),
              brick = css(e.sh(mixc(colors[10], colors[1], 0.5)));
            for (const [mx, mh, col] of [
              [-18, 31, lit],
              [-12, 27, lit],
              [12, 33, brick],
              [18, 30, lit],
            ]) {
              box(mx - 1, 7, 3, 7, col);
              box(mx, mh, 1, mh - 7, col);
              for (const b of [mh - 4, Math.round(mh * 0.6)]) box(mx - 1, b, 3, 1, col);
              box(mx, mh + 3, 1, 3, ldk);
            }
            box(-14, 14, 29, 14, body);
            box(14, 14, 1, 14, bsh);
            for (const p of [-14, -10, 10, 14]) box(p, 16, 1, 16, lit); // the buttresses
            box(-8, 20, 17, 6, body);
            box(8, 20, 1, 6, bsh);
            dome(0, 13, 7, lit); // the great arch
            dome(0, 13, 6, bsh);
            box(-6, 13, 13, 4, bsh);
            for (let r = 10; r <= 17; r += 2)
              for (let p = -4; p <= 4; p += 2) if (r < 16 || Math.abs(p) < 4) box(p, r, 1, 1, 2);
            for (const d of [-11, 11]) dome(d, 15, 2, lead); // the half domes
            box(-8, 22, 17, 2, lead); // the drum and its window ring
            for (let p = -7; p <= 7; p += 2) box(p, 22, 1, 1, 2);
            for (const [w, r] of [
              [9, 23],
              [8, 24],
              [7, 25],
              [5, 26],
              [3, 27],
            ]) {
              box(-w, r, 2 * w + 1, 1, lead);
              box(Math.ceil(w / 2), r, w - Math.ceil(w / 2) + 1, 1, ldk);
            }
            box(0, 29, 1, 2, 12);
            for (let p = -12; p <= 12; p += 4) box(p, 4, 1, 2, 2);
            break;
          }
          case "gatewayIndia": {
            // Gateway of India, Mumbai: the basalt central arch between two pylons with octagonal turrets, the
            // arcaded attic over the arch, and the lower side halls with their jali arches and small doors.
            const sh = chShade(c, 0.3),
              lit = chLit(c, 0.35),
              jali = chShade(c, 0.18);
            for (const k of [-1, 1]) {
              const wx = k * 10;
              box(wx - 2, 15, 5, 15, c);
              box(wx - 3, 16, 7, 1, lit);
              box(wx - 3, 15, 7, 1, sh);
              box(wx - 1, 11, 3, 5, jali);
              box(wx, 12, 1, 1, jali);
              box(wx - 1, 5, 3, 4, 2);
              box(wx, 6, 1, 1, 2);
            }
            box(12, 15, 1, 15, sh);
            box(-7, 21, 15, 21, c);
            box(-4, 23, 9, 2, c);
            box(-4, 23, 9, 1, lit);
            for (let p = -3; p <= 3; p += 2) box(p, 21, 1, 2, 2); // the arcade of the attic
            box(-7, 18, 15, 1, lit);
            dome(0, 13, 4, lit); // the great arch
            box(-3, 13, 7, 13, 2);
            dome(0, 13, 3, 2);
            for (const k of [-1, 1]) {
              const px = k * 6;
              box(px - 1, 26, 3, 26, c);
              box(px + 1, 26, 1, 25, sh);
              for (const r of [8, 18, 26]) box(px - 2, r, 5, 1, lit);
              box(px - 1, 2, 3, 2, lit);
              dome(px, 26, 1.5, c); // the turret cupola
              box(px, 29, 1, 1, lit);
            }
            box(7, 21, 1, 20, sh);
            break;
          }
          case "cst": {
            // Chhatrapati Shivaji Terminus, Mumbai: the Victorian Gothic front in yellow stone with rows of
            // arched windows, red-tiled wings, spired corner towers, the gabled centre with its clock and the
            // ribbed dome crowned by a statue.
            const stone = css(e.sh(mixc(colors[0], colors[13], 0.35))),
              sh = css(e.sh(mixc(colors[0], [41, 40, 54], 0.3))),
              lit = css(e.sh(mixc(colors[13], [255, 248, 225], 0.4))),
              tile = css(e.sh(mixc(colors[5], colors[1], 0.4))),
              slate = css(e.sh(mixc(colors[8], [41, 40, 54], 0.3)));
            box(-16, 13, 33, 13, stone);
            box(-16, 13, 33, 1, lit);
            box(-16, 7, 33, 1, lit);
            for (let p = -15; p <= 15; p += 2) {
              box(p, 11, 1, 2, 2);
              box(p, 5, 1, 2, 2);
            }
            box(-11, 15, 23, 2, tile);
            for (const k of [-1, 1]) {
              const tx = k * 13;
              box(tx - 3, 20, 7, 20, stone);
              box(tx + 3, 20, 1, 20, sh);
              for (const r of [5, 11, 17]) for (const d of [-1, 1]) box(tx + d, r, 1, 2, 2);
              box(tx - 3, 20, 7, 1, lit);
              cone(tx, 20, 3, 6, slate);
              box(tx, 28, 1, 2, lit);
              for (const d of [-3, 3]) box(tx + d, 22, 1, 2, lit);
            }
            box(-4, 21, 9, 21, stone);
            box(4, 21, 1, 21, sh);
            box(-1, 4, 3, 4, 2);
            box(-2, 10, 5, 3, 2);
            orb(0, 15, 1.5, 6); // the clock
            box(0, 16, 1, 1, 2);
            box(-4, 21, 9, 1, lit);
            box(-3, 24, 7, 3, stone); // the drum
            for (let p = -2; p <= 2; p += 2) box(p, 23, 1, 2, 2);
            dome(0, 24, 4, slate);
            for (const d of [-2, 2]) box(d, 27, 1, 2, lit); // the ribs
            box(0, 31, 1, 3, lit);
            box(-1, 30, 3, 1, lit);
            break;
          }
          case "harbourBridge": {
            // Sydney Harbour Bridge: the steel through-arch springing from below the road, its two chords joined
            // by a lattice truss, the road hung from it, and the granite pylons at both ends.
            const steel = css(e.sh(mixc(colors[8], [41, 40, 54], 0.3))),
              stl = css(e.sh(colors[8])),
              sh = chShade(c, 0.3),
              lit = chLit(c, 0.3);
            box(-23, 1, 47, 1, css(e.sh([86, 132, 178])));
            const lo = (xx) => Math.round(3 + 15 * (1 - (xx / 18) ** 2)),
              hi = (xx) => Math.round(8 + 13 * (1 - (xx / 18.5) ** 2));
            for (let xx = -18; xx <= 18; xx++) {
              const a = lo(xx),
                b = hi(xx);
              if (a > 9 && xx % 2 === 0) box(xx, a - 1, 1, a - 9, stl); // the hangers
              const n = xx + (xx < 0 ? 1 : -1),
                an = lo(n),
                bn = hi(n);
              box(xx, Math.max(b, bn - 1), 1, Math.max(1, bn - b), steel); // the chords, without gaps
              box(xx, Math.max(a, an - 1), 1, Math.max(1, an - a), steel);
              for (let j = a + 1; j < b; j++) if (xx % 3 === 0 || (xx + j) % 3 === 0) box(xx, j, 1, 1, steel);
            }
            box(-23, 9, 47, 2, stl); // the road
            box(-23, 8, 47, 1, steel);
            for (const k of [-1, 1]) {
              const px = k * 20;
              box(px - 2, 15, 5, 15, c);
              box(px + 2, 15, 1, 15, sh);
              box(px - 2, 15, 5, 1, lit);
              box(px - 1, 19, 3, 4, c);
              box(px - 1, 19, 3, 1, lit);
              box(px, 13, 1, 2, 2);
              box(px, 18, 1, 1, 2);
            }
            break;
          }
          case "argCathedral": {
            // Argentine twin-tower cathedral (Catamarca, Córdoba, Paraná, Salta, San Luis, Santiago del Estero,
            // La Rioja): the shared "cathedral" front with the same parameters, plus a columned portico across the
            // middle (o.cols columns in colour o.cc, an entablature over them, the middle opening as a tall arch with
            // o.arch), tiled tower caps (t) and o.statue, a figure on the pediment's apex.
            cityLandmark(g, e, "cathedral", x, unit, o);
            const w = o.w ?? 25,
              nh = o.nh ?? 15,
              tw = o.tw ?? 5,
              gk = Math.floor(w / 2) - tw,
              cl = chLit(o.cc ?? c, 0.45),
              csh = chShade(c, 0.25);
            if (o.cols) {
              const top = nh - 3,
                step = (2 * gk - 2) / (o.cols - 1);
              box(-gk, top, 2 * gk + 1, top - 1, csh); // the portico's shade
              if (o.arch) {
                dome(0, nh - 8, 2, cl);
                box(-1, nh - 8, 3, nh - 8, 2);
                dome(0, nh - 8, 1, 2);
              } else chDoor(0, 3, 6, c);
              for (let i = 0; i < o.cols; i++) box(Math.round(-gk + 1 + i * step), top, 1, top - 1, cl);
              box(-gk, top + 1, 2 * gk + 1, 2, c); // the entablature
              box(-gk, top + 1, 2 * gk + 1, 1, cl);
              box(-gk - 1, 1, 2 * gk + 3, 1, cl); // the steps
            }
            if (o.statue) {
              const apex = nh + Math.round(gk * 0.5);
              box(0, apex + 4, 1, 4, o.statue === true ? 6 : o.statue);
              box(-1, apex + 1, 3, 1, chLit(c, 0.35));
            }
            break;
          }
          case "sanFranciscoSalta": {
            // The belfry of San Francisco, Salta: four crimson tiers trimmed in gold, each narrower, framed by
            // pairs of white columns, with balustrades, arched bell openings and a small red cupola on top.
            const red = css(e.sh(mixc(colors[10], colors[1], 0.3))),
              rsh = css(e.sh(mixc(colors[10], [41, 40, 54], 0.4))),
              wt = css(e.sh(colors[6])),
              gold = css(e.sh(colors[12]));
            let base = 0;
            for (const [hw, th, op] of [
              [5, 18, 0],
              [4, 13, 5],
              [3, 11, 4],
              [2, 7, 3],
            ]) {
              const top = base + th;
              box(-hw, top, 2 * hw + 1, th, red);
              box(hw, top, 1, th, rsh);
              for (const d of [-hw, -hw + 1, hw - 1, hw])
                box(d, top - 2, 1, th - 3, d === hw ? css(e.sh(mixc(colors[6], [41, 40, 54], 0.2))) : wt);
              if (op) {
                box(-1, top - 3, 3, op, 2);
                box(0, top - 2, 1, 1, 2);
              } else {
                box(-1, 12, 3, 4, gold); // the plaque
                box(-1, 5, 3, 3, gold);
              }
              box(-hw - 1, top, 2 * hw + 3, 1, gold); // the cornice
              for (let p = -hw - 1; p <= hw + 1; p += 2) box(p, top + 1, 1, 1, wt); // the balustrade
              base = top + 1;
            }
            box(-1, base + 3, 3, 3, red);
            dome(0, base + 3, 1.5, red);
            box(0, base + 6, 1, 1, gold);
            box(-5, 1, 11, 1, css(e.sh(mixc(colors[0], [41, 40, 54], 0.2))));
            break;
          }
          case "faroBicentenario": {
            // Faro del Bicentenario, Córdoba: a cigar-shaped concrete shaft, slim at the foot and swelling
            // towards the top, a little lantern cage and a thin mast.
            const sh = chShade(c, 0.3),
              lit = chLit(c, 0.3);
            for (let h = 1; h <= 38; h++) {
              const hw = h > 36 ? 1 : Math.round(0.6 + 2.6 * Math.sin((Math.PI * h) / 46));
              box(-hw, h, 2 * hw + 1, 1, c);
              box(-hw, h, 1, 1, lit);
              box(hw, h, 1, 1, sh);
            }
            box(-1, 41, 3, 3, 2); // the lantern cage
            box(0, 41, 1, 3, sh);
            box(0, 47, 1, 6, 8);
            break;
          }
          case "estadioUnico": {
            // Estadio Único (Ciudad de La Plata): a low concrete ring under a white membrane roof shaped like a
            // shallow shell of petals, with radial seams, a scalloped rim and the two masts of its cable crown.
            const conc = css(e.sh(colors[8])),
              seam = css(e.sh(mixc(colors[8], [41, 40, 54], 0.1))),
              rim = chShade(6, 0.2);
            box(-14, 4, 29, 4, conc);
            for (let p = -12; p <= 12; p += 3) box(p, 3, 1, 2, 2);
            for (let j = 0; j < 8; j++) {
              const hw = Math.round(16 * Math.sqrt(1 - (j / 8.5) ** 2));
              box(-hw, 5 + j, 2 * hw + 1, 1, c);
              for (let k = -3; k <= 3; k++) box(Math.round((k * hw) / 3.5), 5 + j, 1, 1, seam);
              box(hw - 1, 5 + j, 2, 1, rim);
            }
            for (let p = -15; p <= 15; p += 2) box(p, 5, 1, 1, rim); // the scalloped rim
            box(-7, 13, 15, 1, rim); // the opening over the pitch
            for (const d of [-5, 5]) {
              box(d, 16, 1, 3, conc);
              stroke(d, 16, d < 0 ? -10 : 10, 12, 8);
            }
            break;
          }
          case "cerroGloria": {
            // Monument to the Army of the Andes, Cerro de la Gloria (Mendoza): a broad flight of steps, a craggy
            // pile of granite with bronze battle groups on its ledges, the horses at the top and the winged
            // Liberty over them.
            const rock = css(e.sh(mixc(colors[0], colors[8], 0.5))),
              rsh = css(e.sh(mixc(colors[8], [41, 40, 54], 0.4))),
              rlit = css(e.sh(mixc(colors[13], [255, 248, 225], 0.2))),
              bronze = css(e.sh(mixc(colors[4], [41, 40, 54], 0.6))),
              step = chLit(0, 0.1),
              stsh = chShade(0, 0.25);
            for (let s = 0; s < 4; s++) box(-12 + s, s + 1, 25 - 2 * s, 1, s % 2 ? stsh : step);
            const crag = [9, 9, 8, 8, 7, 7, 6, 5, 5, 4, 4, 4, 3, 3, 3, 2];
            crag.forEach((hw, j) => {
              const l = -hw + (j % 3 === 1 ? 1 : 0),
                r = hw - (j % 4 === 2 ? 1 : 0);
              box(l, 5 + j, r - l + 1, 1, rock);
              box(l, 5 + j, 1, 1, rlit);
              box(r - 1, 5 + j, 2, 1, rsh);
            });
            box(-1, 8, 3, 2, 12); // the plaque
            for (const d of [-6, 6]) {
              box(d - 1, 11, 3, 2, bronze); // the battle groups
              box(d, 12, 1, 1, bronze);
            }
            box(1, 16, 2, 2, bronze);
            box(-3, 22, 7, 2, bronze); // the horses
            box(-3, 20, 1, 1, bronze);
            box(3, 20, 1, 1, bronze);
            box(-2, 23, 1, 1, bronze);
            box(0, 28, 1, 5, bronze); // Liberty with her wings and the broken chains
            for (const [dx, dy] of [
              [-1, 27],
              [-2, 28],
              [-3, 29],
              [-2, 29],
              [1, 27],
              [2, 28],
              [1, 29],
            ])
              box(dx, dy, 1, 1, bronze);
            break;
          }
          case "monumentoBandera": {
            // National Flag Memorial, Rosario: the slim stone tower with its stepped top and sun emblem, on a
            // stepped base with the ship's-prow block and bronze figures, beside the tall flagpole and its flag.
            const sh = chShade(c, 0.28),
              lit = chLit(c, 0.3),
              bronze = css(e.sh(mixc(colors[4], [41, 40, 54], 0.5)));
            box(-6, 2, 13, 2, c);
            box(-6, 2, 13, 1, lit);
            box(-4, 10, 9, 8, c);
            box(4, 10, 1, 8, sh);
            box(-4, 10, 9, 1, lit);
            box(-3, 6, 3, 4, lit); // the prow
            box(-2, 7, 1, 1, sh);
            box(-4, 13, 1, 3, bronze);
            box(3, 12, 1, 2, bronze);
            box(-2, 36, 5, 26, c);
            box(2, 36, 1, 26, sh);
            box(0, 34, 1, 22, sh); // the groove down its face
            box(-1, 39, 3, 3, c);
            box(1, 39, 1, 3, sh);
            box(-2, 36, 5, 1, lit);
            orb(0, 32, 1, 12); // the sun
            box(-6, 30, 1, 28, 8); // the flagpole
            box(-5, 30, 3, 1, 11);
            box(-5, 29, 3, 1, 6);
            box(-5, 28, 3, 1, 11);
            box(-4, 29, 1, 1, 12);
            break;
          }
          case "casaHistorica": {
            // Casa Histórica de la Independencia, Tucumán: the whitewashed colonial front, the raised portal with
            // its two twisted columns, arch and coat of arms over the green door, grilled windows each side and
            // the tiled roofs behind.
            const sh = chShade(c, 0.18),
              tile = css(e.sh(mixc(colors[5], colors[1], 0.4))),
              door = css(e.sh(mixc(colors[4], [41, 40, 54], 0.55)));
            for (const d of [-1, 1]) box(d < 0 ? -10 : 6, 8, 5, 2, tile);
            box(-10, 7, 21, 7, c);
            box(-10, 7, 21, 1, sh);
            box(-10, 1, 21, 1, sh);
            for (const d of [-7, 7]) {
              box(d - 1, 5, 3, 4, 2); // the grilled windows
              box(d, 5, 1, 4, sh);
              box(d - 1, 6, 3, 1, sh);
            }
            box(-4, 10, 9, 10, c);
            box(-5, 10, 11, 1, sh);
            box(4, 9, 1, 8, sh);
            box(-2, 6, 5, 6, door);
            box(0, 6, 1, 6, 2);
            box(-2, 7, 5, 1, sh); // the arch over the door
            box(-1, 8, 3, 1, sh);
            box(0, 9, 1, 1, 2); // the coat of arms
            for (const d of [-3, 3]) for (let j = 1; j <= 7; j++) box(d, j, 1, 1, j % 2 ? c : sh); // the twisted columns
            break;
          }
          case "sieteColores": {
            // Cerro de los Siete Colores, Purmamarca (Jujuy): a jagged ridge of tilted strata in bands of red,
            // rose, ochre, cream, purple-grey and green-grey, the far side of each peak in shade.
            const bands = [
              [176, 74, 60],
              [214, 141, 128],
              [206, 150, 76],
              [226, 208, 176],
              [140, 110, 128],
              [132, 146, 118],
              [190, 96, 70],
            ].map((rgb) => [css(e.sh(rgb)), css(e.sh(mixc(rgb, [41, 40, 54], 0.3)))]);
            const peaks = [
              [-16, 12],
              [-9, 18],
              [-3, 15],
              [3, 21],
              [9, 16],
              [15, 11],
              [19, 7],
            ];
            for (let xx = -20; xx <= 20; xx++) {
              let top = 1,
                shade = false;
              for (const [px, ph] of peaks) {
                const v = Math.round(ph - Math.abs(xx - px) * 1.2);
                if (v > top) [top, shade] = [v, xx > px];
              }
              if (xx % 3 === 0 && top > 3) top--;
              const band = (j) => Math.floor((j + Math.floor(xx / 2) + 60) / 3) % bands.length; // tilted strata
              for (let j = 1; j <= top;) {
                let end = j;
                while (end < top && band(end + 1) === band(j)) end++;
                box(xx, end, 1, end - j + 1, bands[band(j)][shade ? 1 : 0]);
                j = end + 1;
              }
            }
            break;
          }
          case "eclaireurs": {
            // Les Eclaireurs Lighthouse, Ushuaia: a stout cylinder in red, white and red bands on its low rocky
            // islet in the Beagle Channel, with a black gallery, lantern and cap.
            const rock = css(e.sh([112, 104, 88])),
              lichen = css(e.sh([176, 150, 82])),
              red = css(e.sh(mixc(colors[10], colors[1], 0.35))),
              wt = css(e.sh(colors[6])),
              shd = "rgba(24, 20, 48, 0.25)",
              black = css(e.sh([48, 44, 52]));
            for (const [l, r, j] of [
              [-6, 6, 1],
              [-6, 5, 2],
              [-5, 4, 3],
              [-3, 3, 4],
            ])
              box(l, j, r - l + 1, 1, rock);
            for (const d of [-5, -2, 2, 4]) box(d, d < 0 ? 2 : 3, 1, 1, lichen);
            for (let j = 5; j <= 18; j++) box(-2, j, 5, 1, j >= 11 && j <= 14 ? wt : red);
            box(2, 18, 1, 14, shd);
            box(0, 8, 1, 2, 2);
            box(-3, 19, 7, 1, black); // the gallery
            box(-1, 21, 3, 2, black);
            box(0, 21, 1, 1, 3); // the lamp
            cone(0, 21, 1, 2, black);
            box(0, 24, 1, 1, black);
            break;
          }
          case "maracana": {
            // Maracanã, Rio de Janeiro: the round concrete bowl on its ring of slanted pillars, the upper tier
            // and the broad white roof slab overhanging it, a ramp tower at one end.
            const conc = css(e.sh(colors[13])),
              csh = chShade(13, 0.3),
              roof = css(e.sh(colors[6])),
              rsh = chShade(6, 0.25);
            box(-13, 7, 27, 7, conc);
            for (let p = -12; p <= 11; p += 3) {
              box(p + 1, 6, 2, 5, 2);
              box(p + 1 + (p < 0 ? 0 : 1), 6, 1, 1, conc); // the pillars lean outwards
            }
            box(9, 7, 5, 7, "rgba(24, 20, 48, 0.2)");
            box(-14, 9, 29, 2, conc);
            box(-14, 8, 29, 1, csh);
            for (let p = -13; p <= 13; p += 2) box(p, 9, 1, 1, csh);
            box(-15, 11, 31, 2, roof);
            box(-15, 10, 31, 1, rsh);
            box(-15, 11, 31, 1, chLit(6, 0.3));
            box(14, 6, 3, 6, conc); // the ramp tower
            box(16, 6, 1, 6, csh);
            for (let j = 2; j <= 6; j += 2) box(14, j, 2, 1, csh);
            break;
          }
          case "casaRosada": {
            // Casa Rosada, Buenos Aires, as seen from Plaza de Mayo: the pink Italianate front with the tall
            // central arch and balcony, domed mansard pavilions at the corners and arcaded loggias between.
            const sh = chShade(c, 0.3),
              lit = chLit(c, 0.5),
              roof = chShade(4, 0.4);
            box(-18, 12, 37, 12, c);
            box(-18, 1, 37, 1, sh);
            for (const s of [4, 8]) box(-18, s, 37, 1, lit);
            box(-18, 13, 37, 1, lit);
            for (let p = -13; p <= 13; p += 2) box(p, 14, 1, 1, lit);
            for (const k of [-1, 1]) {
              // wing: ground-floor arcade, first-floor windows, top-floor loggia
              for (let i = 0; i < 4; i++) {
                const wx = k * (7 + 2 * i);
                box(wx, 3, 1, 2, 2);
                box(wx, 7, 1, 2, 2);
                box(wx, 6, 1, 1, lit);
                box(wx, 11, 1, 3, 2);
              }
              // corner pavilion with its mansard dome
              const px = k * 16;
              box(px - 2, 15, 5, 15, c);
              box(px - 2, 15, 5, 1, lit);
              for (const r of [3, 7, 11]) for (const d of [-1, 1]) box(px + d, r, 1, 2, 2);
              box(px, 14, 1, 1, 2);
              box(px - 2, 16, 5, 1, roof);
              dome(px, 16, 2, roof);
              box(px, 19, 1, 1, lit);
              if (k > 0) box(px + 2, 14, 1, 13, sh);
            }
            // central block: the great arch, the balcony above it, an attic with the flag
            box(-5, 16, 11, 16, c);
            box(5, 15, 1, 14, sh);
            box(-5, 4, 11, 1, lit);
            box(-6, 13, 13, 1, lit);
            box(-6, 16, 13, 1, lit);
            box(-3, 8, 7, 8, lit);
            dome(0, 8, 3, lit);
            box(-2, 7, 5, 7, 2);
            dome(0, 7, 2, 2);
            for (const d of [-4, 4]) {
              box(d, 3, 1, 2, 2);
              box(d, 7, 1, 2, 2);
            }
            box(-4, 10, 9, 1, lit);
            for (const d of [-3, 0, 3]) box(d, 12, 1, 2, 2);
            for (const d of [-4, -2, 2, 4]) box(d, 15, 1, 1, 2);
            cone(0, 16, 2, 1, c);
            box(0, 20, 1, 3, lit);
            box(1, 20, 2, 1, 11);
            box(1, 19, 2, 1, 6);
            box(1, 18, 2, 1, 11);
            break;
          }
          case "santaRosaCathedral": {
            // Santa Rosa de Lima, La Pampa (1950s): a brown concrete block behind a lattice of diamond frames,
            // a yellow open belfry with its bells on top, and a tall diamond carrying the cross
            const wall = css(e.sh([150, 118, 104])),
              wallDark = css(e.sh([118, 92, 84])),
              yellow = css(e.sh([232, 188, 62]));
            box(-9, 18, 18, 18, wall);
            box(5, 18, 4, 18, wallDark);
            box(-9, 3, 18, 3, 2); // the dark entrance band
            box(-6, 23, 12, 5, yellow);
            for (let p = -5; p <= 4; p += 2) {
              box(p, 22, 1, 3, 2);
              box(p, 20, 1, 1, 12);
            }
            box(-7, 24, 14, 1, yellow);
            box(-4, 25, 8, 1, yellow);
            box(-2, 26, 4, 1, yellow);
            const diamond = (cx, cy, hw, hh) => {
              // cell by cell, so the frames keep their thickness at every size
              for (let dy = -hh; dy <= hh; dy++) {
                const off = Math.round(hw * (1 - Math.abs(dy) / hh));
                box(cx - off, cy + dy, 1, 1, 13);
                box(cx + off, cy + dy, 1, 1, 13);
              }
            };
            for (const [cx, cy] of [
              [-6, 5],
              [0, 5],
              [6, 5],
              [-3, 11],
              [3, 11],
              [-6, 17],
              [0, 17],
              [6, 17],
            ])
              diamond(cx, cy, 3, 4);
            diamond(-4, 25, 2, 4);
            box(-4, 31, 1, 2, 12); // the little crown on the left diamond
            diamond(3, 28, 3, 6);
            box(3, 38, 1, 9, 13);
            box(1, 35, 5, 1, 13);
            break;
          }
