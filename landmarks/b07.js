          case "santaMariaFiore": {
            // Florence: Santa Maria del Fiore seen from the south, Giotto's campanile in front on the left (white
            // marble banded in green and pink, windows growing from slits to the tall triforas, a flat cornice),
            // the nave's green-framed panels and Gothic windows, the tribunes' little half domes, the drum with
            // its oculi and Brunelleschi's terracotta dome with white ribs under the marble lantern.
            const sh3 = (rgb) => [
              css(e.sh(rgb)),
              css(e.sh(mixc(rgb, [41, 40, 54], 0.3))),
              css(e.sh(mixc(rgb, [255, 248, 225], 0.3))),
            ];
            const [W, WS, WL] = sh3([236, 230, 214]),
              G = css(e.sh([76, 116, 92])),
              P = css(e.sh([214, 150, 140])),
              [Rd, RdS] = sh3([200, 96, 60]);
            // the nave and the tribunes
            box(-12, 13, 30, 13, W);
            box(-12, 14, 30, 1, RdS);
            box(-12, 13, 30, 1, G);
            box(-12, 2, 30, 1, G);
            for (let p = -12; p <= 17; p += 5) {
              box(p, 12, 1, 10, G);
              if (p + 3 > 17) continue;
              box(p + 1, 7, 3, 1, G);
              box(p + 2, 6, 1, 3, P);
              box(p + 2, 11, 1, 3, 2); // a Gothic window
            }
            box(-2, 18, 17, 4, W);
            box(-2, 18, 17, 1, G);
            for (const p of [-1, 13]) dome(p, 18, 2, Rd);
            // the drum with its oculi
            box(-2, 25, 17, 7, W);
            box(14, 25, 1, 7, WS);
            box(-2, 25, 17, 1, G);
            box(-2, 19, 17, 1, G);
            for (const p of [0, 6, 12]) {
              box(p - 1, 23, 3, 3, G);
              box(p, 22, 1, 1, 2);
            }
            // the dome: lit on the left, white ribs
            dome(6, 26, 9, RdS);
            dome(5, 26, 8, Rd);
            box(-3, 26, 19, 1, WL);
            box(6, 35, 1, 9, W);
            for (let j = 0; j < 9; j++) {
              const k = Math.round(0.55 * Math.sqrt(81 - j * j));
              box(6 - k, 27 + j, 1, 1, W);
              box(6 + k, 27 + j, 1, 1, WS);
            }
            // the lantern
            box(4, 38, 5, 3, W);
            box(8, 38, 1, 3, WS);
            box(5, 37, 1, 2, 2);
            box(7, 37, 1, 2, 2);
            box(3, 39, 7, 1, WL);
            cone(6, 39, 2, 3, W);
            orb(6, 43, 0.7, 12);
            box(6, 45, 1, 1, 12);
            // Giotto's campanile
            box(-19, 40, 6, 40, W);
            box(-14, 40, 1, 40, WS);
            for (const r of [2, 9, 17, 25, 33]) {
              box(-19, r, 6, 1, G);
              box(-18, r + 3, 4, 1, P);
            }
            for (const r of [-19, -14]) box(r, 40, 1, 38, G);
            box(-17, 14, 2, 3, 2);
            for (const y of [22, 30]) {
              box(-18, y, 1, 3, 2);
              box(-16, y, 1, 3, 2);
            }
            box(-18, 38, 4, 4, 2); // the tall trifora under the cornice
            for (const p of [-17, -16]) box(p, 38, 1, 4, W);
            box(-20, 41, 8, 1, WL);
            box(-20, 42, 8, 1, G);
            break;
          }
          case "palazzoVecchio": {
            // Palazzo Vecchio (Florence): a rusticated block of brown pietraforte with two rows of arched
            // twin windows, a machicolated gallery with square merlons, and Arnolfo's tower set off-centre: the
            // blue clock, its own jutting gallery with swallowtail merlons, the open belfry and the lion vane.
            const st = [184, 158, 120],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              D = css(e.sh(mixc(st, [41, 40, 54], 0.15)));
            box(-8, 22, 17, 22, B);
            box(8, 22, 1, 22, S);
            for (let r = 3; r < 20; r += 3) box(-8, r, 16, 1, D); // rustication
            for (const r of [7, 13, 19]) box(-8, r, 17, 1, Lt);
            for (const p of [-6, -3, 3, 6]) {
              box(p, 11, 1, 3, 2);
              box(p, 17, 1, 3, 2);
            }
            box(-1, 5, 3, 4, 2); // the door
            box(-9, 24, 19, 2, B); // the gallery on its corbels
            for (let p = -9; p <= 9; p += 2) box(p, 23, 1, 1, 2);
            box(-9, 26, 19, 2, B);
            box(9, 26, 1, 4, S);
            for (let p = -7; p <= 7; p += 3) box(p, 25, 1, 1, 2);
            for (let p = -9; p <= 9; p += 2) box(p, 27, 1, 1, B);
            // Arnolfo's tower
            box(2, 37, 3, 10, B);
            box(4, 37, 1, 10, S);
            orb(3, 31, 1.2, css(e.sh([60, 90, 160])));
            box(3, 31, 1, 1, 12);
            box(1, 40, 5, 3, B); // its gallery
            for (const p of [1, 3, 5]) box(p, 38, 1, 1, 2);
            box(5, 40, 1, 2, S);
            for (const p of [1, 5]) {
              box(p, 42, 1, 2, B);
              box(p, 43, 1, 1, Lt);
            }
            box(1, 46, 5, 4, 2); // the open belfry
            for (const p of [1, 3, 5]) box(p, 46, 1, 4, B);
            box(3, 45, 1, 1, 12);
            box(1, 47, 5, 1, Lt);
            cone(3, 47, 1, 2, B);
            box(3, 51, 1, 2, 8);
            box(4, 52, 1, 1, 12);
            break;
          }
          case "lanternaGenova": {
            // The Lanterna of Genoa: on its dark rock, two square stone stages, each crowned by a jutting gallery
            // on corbels and a row of merlons; the city's arms (St George's red cross) high on the lower stage,
            // little windows up the shafts, then the glazed lamp under a grey cupola, whose beam sweeps at night.
            const st = [216, 202, 172],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              rk = css(e.sh([112, 104, 96])),
              rkS = css(e.sh([86, 80, 78]));
            for (let j = 1; j <= 5; j++) box(-10 + j, j, 21 - 2 * j, 1, j % 2 ? rk : rkS);
            box(4, 5, 5, 3, rkS);
            const stage = (hw, b, t) => {
              box(-hw, t, 2 * hw + 1, t - b, B);
              box(hw, t, 1, t - b, S);
              box(-hw, t, 1, t - b, Lt);
              box(-hw - 1, t + 1, 2 * hw + 3, 1, B); // corbels
              for (let p = -hw; p <= hw; p += 2) box(p, t + 1, 1, 1, 2);
              box(-hw - 1, t + 3, 2 * hw + 3, 2, B);
              box(hw + 1, t + 3, 1, 2, S);
              box(-hw - 1, t + 3, 2 * hw + 3, 1, Lt);
              for (let p = -hw - 1; p <= hw + 1; p += 2) box(p, t + 4, 1, 1, B);
            };
            stage(4, 5, 24);
            for (const r of [10, 15]) box(0, r, 1, 2, 2);
            box(-2, 22, 5, 4, 6); // the arms
            box(-2, 21, 5, 1, 10);
            box(0, 22, 1, 4, 10);
            stage(3, 28, 41);
            for (const r of [33, 38]) box(0, r, 1, 2, 2);
            box(-2, 48, 5, 4, 3); // the lamp
            for (const p of [-1, 1]) box(p, 48, 1, 4, 2);
            box(-3, 49, 7, 1, S);
            dome(0, 49, 2.5, 8);
            box(0, 53, 1, 2, 2);
            e.beams?.push({ x: X(0), y: Y(46), len: R(64) });
            break;
          }
          case "castelloEstense": {
            // Castello Estense (Ferrara): a red-brick square castle in its moat, four corner towers with
            // machicolations, white stone balustrades and little turrets under tiled roofs, the curtain wall's
            // own tiled roof and balustrade, rows of windows and the drawbridge gate.
            const br = [176, 92, 70],
              B = css(e.sh(br)),
              S = css(e.sh(mixc(br, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(br, [255, 248, 225], 0.2))),
              W = css(e.sh([232, 222, 200])),
              roof = css(e.sh([150, 72, 56])),
              water = css(e.sh([74, 112, 140]));
            box(-17, 2, 35, 2, water);
            box(-11, 16, 23, 14, B);
            for (let p = -9; p <= 9; p += 3) {
              box(p, 7, 1, 2, 2);
              box(p, 12, 1, 2, 2);
            }
            box(-2, 7, 5, 5, W); // the gate
            box(-1, 6, 3, 4, 2);
            box(-11, 9, 23, 1, Lt);
            box(-11, 17, 23, 1, B); // corbels and the balustrade
            for (let p = -11; p <= 11; p += 2) box(p, 17, 1, 1, 2);
            box(-11, 18, 23, 1, W);
            box(-10, 20, 21, 2, roof);
            for (const tx of [-17, 11]) {
              box(tx, 22, 7, 20, B);
              box(tx + 6, 22, 1, 20, S);
              for (const r of [8, 13, 18]) box(tx + 3, r, 1, 2, 2);
              box(tx - 1, 23, 9, 1, B);
              for (let p = tx - 1; p <= tx + 7; p += 2) box(p, 23, 1, 1, 2);
              box(tx - 1, 25, 9, 2, B);
              box(tx - 1, 25, 9, 1, W);
              box(tx + 1, 28, 5, 3, W); // the turret
              box(tx + 2, 27, 1, 1, 2);
              box(tx + 4, 27, 1, 1, 2);
              cone(tx + 3, 28, 3, 2, roof);
            }
            break;
          }
          case "castelloSanGiorgio": {
            // Castle of Saint George (Mantua): a square brick castle with four projecting corner towers, all
            // crowned by corbelled machicolations and swallowtail merlons, small arched windows and the gate.
            const br = [190, 108, 80],
              B = css(e.sh(br)),
              S = css(e.sh(mixc(br, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(br, [255, 248, 225], 0.25))),
              St = css(e.sh([226, 214, 190]));
            const top = (l, w, t) => {
              box(l - 1, t + 1, w + 2, 1, B);
              for (let p = l - 1; p < l + w + 1; p += 2) box(p, t + 1, 1, 1, 2);
              box(l - 1, t + 3, w + 2, 2, B);
              box(l - 1, t + 2, w + 2, 1, Lt);
              for (let p = l - 1; p + 2 < l + w + 2; p += 4) {
                box(p, t + 4, 3, 1, B);
                box(p, t + 5, 1, 1, B);
                box(p + 2, t + 5, 1, 1, B);
              }
            };
            box(-11, 14, 23, 14, B);
            top(-11, 23, 14);
            for (let p = -8; p <= 8; p += 4) {
              box(p, 6, 1, 2, 2);
              box(p, 11, 1, 2, 2);
            }
            box(-2, 7, 5, 7, St); // the gate
            box(-1, 6, 3, 5, 2);
            for (const tx of [-16, 11]) {
              box(tx, 18, 6, 18, B);
              box(tx + 5, 18, 1, 18, S);
              box(tx, 1, 6, 1, S);
              for (const r of [7, 14]) box(tx + 2, r, 2, 2, 2);
              top(tx, 6, 18);
            }
            break;
          }
          case "santAndreaMantua": {
            // Sant'Andrea (Mantua): Alberti's front as a triumphal arch (giant pilasters, the deep central arch,
            // a pediment and the arched hood above it), Juvarra's dome behind, the Gothic brick campanile at left.
            const st = [228, 218, 194],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              br = [172, 92, 70],
              Br = css(e.sh(br)),
              BrS = css(e.sh(mixc(br, [41, 40, 54], 0.3))),
              lead = css(e.sh([150, 156, 164])),
              leadS = css(e.sh([118, 124, 134]));
            // the dome
            box(2, 30, 9, 6, B);
            box(10, 30, 1, 6, S);
            for (const p of [4, 6, 8]) box(p, 28, 1, 2, 2);
            dome(6, 30, 5, leadS);
            dome(5, 30, 4, lead);
            box(5, 37, 3, 2, B);
            cone(6, 37, 1, 2, lead);
            box(6, 41, 1, 1, 12);
            // the campanile
            box(-14, 30, 5, 30, Br);
            box(-10, 30, 1, 30, BrS);
            for (const r of [12, 19, 25]) box(-13, r, 3, 2, 2);
            box(-15, 31, 7, 1, Br);
            cone(-12, 31, 2, 7, Br);
            box(-12, 40, 1, 2, 2);
            // the front
            box(-8, 18, 17, 18, B);
            for (const p of [-8, -4, 4, 8]) {
              box(p, 18, 1, 17, Lt);
              box(p, 18, 1, 1, B);
            }
            box(8, 18, 1, 17, S);
            box(-3, 15, 7, 14, S); // the great arch
            dome(0, 15, 3.5, S);
            box(-2, 7, 5, 6, 2);
            for (const p of [-6, 6]) {
              box(p, 5, 1, 4, 2);
              box(p, 11, 1, 2, 2);
            }
            box(-9, 19, 19, 1, Lt);
            cone(0, 19, 9, 4, B);
            cone(0, 19, 6, 2, S);
            box(-4, 28, 9, 4, B); // the hood over the pediment
            dome(0, 28, 4.5, B);
            dome(0, 27, 3, 2);
            break;
          }
          case "torrazzo": {
            // The Torrazzo of Cremona: a tall brick tower in storeys of mullioned windows, the astronomical
            // clock low on its face, the belfry, then a marble terrace and Renaissance "boccia" of two
            // octagonal lanterns with corner pinnacles under a stone spire with ball and cross.
            const br = [168, 86, 66],
              B = css(e.sh(br)),
              S = css(e.sh(mixc(br, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(br, [255, 248, 225], 0.2))),
              m = [232, 224, 206],
              M = css(e.sh(m)),
              MS = css(e.sh(mixc(m, [41, 40, 54], 0.28))),
              ML = css(e.sh(mixc(m, [255, 248, 225], 0.3)));
            box(-4, 46, 9, 46, B);
            box(4, 46, 1, 46, S);
            box(-5, 3, 11, 3, S);
            for (const r of [9, 15, 23, 30, 37]) box(-4, r, 9, 1, Lt);
            for (const y of [13, 28, 35]) {
              box(-2, y, 1, 3, 2);
              box(2, y, 1, 3, 2);
            }
            box(0, 7, 1, 2, 2);
            orb(0, 19, 2.6, 12); // the astronomical clock
            orb(0, 19, 2, css(e.sh([48, 64, 120])));
            box(0, 20, 1, 2, 12);
            box(-3, 45, 2, 5, 2); // the belfry
            box(2, 45, 2, 5, 2);
            box(-4, 39, 9, 1, Lt);
            box(-5, 47, 11, 1, ML);
            for (let p = -5; p <= 5; p += 2) box(p, 48, 1, 1, M);
            box(-3, 56, 7, 8, M); // the lower lantern
            box(-3, 56, 1, 8, ML);
            box(3, 56, 1, 8, MS);
            for (const p of [-1, 1]) box(p, 54, 1, 4, 2);
            for (const p of [-4, 4]) {
              box(p, 53, 1, 4, M);
              box(p, 54, 1, 1, 3);
            }
            box(-4, 57, 9, 1, ML);
            box(-2, 62, 5, 5, M); // the upper lantern
            box(2, 62, 1, 5, MS);
            box(0, 61, 1, 3, 2);
            box(-3, 63, 7, 1, ML);
            cone(0, 63, 2, 8, M);
            orb(0, 72, 0.8, 12);
            box(0, 75, 1, 2, 12);
            break;
          }
          case "comoDuomo": {
            // Como Cathedral: the Gothic-Renaissance marble front between pilaster strips that rise into
            // pinnacles, a rose window, tall Gothic windows, three portals and statue niches under a low gable,
            // and Juvarra's green dome on its drum behind.
            const m = [224, 216, 198],
              M = css(e.sh(m)),
              MS = css(e.sh(mixc(m, [41, 40, 54], 0.3))),
              ML = css(e.sh(mixc(m, [255, 248, 225], 0.35))),
              T = css(e.sh([108, 166, 140])),
              TS = css(e.sh([84, 132, 116]));
            box(-5, 27, 11, 6, M);
            box(5, 27, 1, 6, MS);
            for (const p of [-3, 0, 3]) box(p, 25, 1, 2, 2);
            dome(0, 27, 5.5, TS);
            dome(-1, 27, 4.5, T);
            box(-1, 35, 3, 3, M);
            cone(0, 35, 1, 2, T);
            box(0, 39, 1, 2, 12);
            box(-10, 21, 21, 21, M);
            box(10, 21, 1, 21, MS);
            cone(0, 21, 9, 3, M);
            for (const p of [-10, -6, 6, 10]) {
              box(p, 26, 1, 25, ML);
              box(p, 27, 1, 1, 3);
            }
            box(10, 26, 1, 25, MS);
            box(-10, 14, 21, 1, ML);
            orb(0, 17, 2.4, MS); // the rose
            orb(0, 17, 1.6, 2);
            box(0, 17, 1, 1, M);
            for (const p of [-8, 8]) box(p, 20, 1, 5, 2);
            for (const p of [-3, 3]) for (const r of [11, 19]) box(p, r, 1, 2, MS);
            chDoor(0, 3, 6, 6);
            chDoor(-8, 1, 4, 6);
            chDoor(8, 1, 4, 6);
            break;
          }
          case "capoColonna": {
            // Capo Colonna (Crotone): the one Doric column left of the temple of Hera Lacinia, its drums and
            // flutes, a wide capital, on the broken steps of the stylobate.
            const st = [214, 194, 154],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3)));
            box(-6, 1, 13, 1, S);
            box(-5, 2, 10, 1, B);
            box(5, 2, 1, 1, S);
            box(-4, 3, 7, 1, Lt);
            box(4, 3, 2, 1, B);
            box(-1, 21, 3, 18, B);
            box(-1, 21, 1, 18, Lt);
            box(1, 21, 1, 18, S);
            for (const r of [8, 13, 17]) box(-1, r, 3, 1, S);
            box(-2, 22, 5, 1, B);
            box(2, 22, 1, 1, S);
            box(-3, 24, 7, 2, Lt);
            box(3, 24, 1, 2, S);
            break;
          }
          case "soleriViaduct": {
            // The Soleri Viaduct (Cuneo): a long stone bridge on tall arches, with a gallery of small arches
            // under the deck (the railway runs below the road).
            const st = [204, 194, 172],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3)));
            for (let i = 0; i < 7; i++) {
              const px = -19 + i * 6;
              box(px, 14, 2, 14, B);
              box(px + 1, 13, 1, 13, S);
              if (i < 6) {
                box(px + 2, 14, 4, 1, B);
                for (const r of [13, 12]) {
                  box(px + 2, r, 1, 1, B);
                  box(px + 5, r, 1, 1, B);
                }
                box(px + 3, 14, 2, 1, Lt);
              }
            }
            box(-19, 15, 38, 1, Lt);
            for (let p = -19; p <= 18; p += 2) box(p, 18, 1, 3, B);
            box(-19, 19, 38, 1, B);
            box(-19, 20, 38, 1, Lt);
            box(-19, 21, 38, 1, S);
            break;
          }
          case "cuneoDuomo": {
            // Cuneo Cathedral: a white neoclassical pronaos of four Corinthian columns under a pediment with
            // its cross, squeezed between the ochre houses of the arcaded street.
            const m = [236, 228, 210],
              M = css(e.sh(m)),
              MS = css(e.sh(mixc(m, [41, 40, 54], 0.3))),
              ML = css(e.sh(mixc(m, [255, 248, 225], 0.35))),
              wall = css(e.sh([196, 186, 166])),
              oc = [214, 176, 100],
              O = css(e.sh(oc)),
              OS = css(e.sh(mixc(oc, [41, 40, 54], 0.3)));
            for (const hx of [-12, 8]) {
              box(hx, 15, 5, 15, hx > 0 ? OS : O);
              box(hx, 16, 5, 1, MS);
              for (const r of [8, 13]) for (const d of [1, 3]) box(hx + d, r, 1, 2, 2);
              box(hx + 1, 3, 3, 3, 2);
            }
            box(-7, 2, 15, 2, MS);
            box(-7, 2, 15, 1, M);
            box(-6, 12, 13, 10, wall);
            box(-1, 9, 3, 6, 2);
            for (const cx of [-7, -3, 2, 6]) {
              box(cx, 12, 2, 9, M);
              box(cx + 1, 12, 1, 9, MS);
              box(cx, 13, 2, 1, ML);
            }
            box(-8, 15, 17, 2, M);
            box(-8, 15, 17, 1, ML);
            cone(0, 15, 8, 4, M);
            cone(0, 15, 5, 2, MS);
            box(0, 22, 1, 3, 2);
            box(-1, 21, 3, 1, 2);
            break;
          }
          case "foggiaDuomo": {
            // Foggia Cathedral: the Romanesque lower storey with its blind arcade and carved corbel cornice,
            // the Baroque upper storey (an oval window between scrolls under a curved pediment) and the
            // Baroque bell tower on the right.
            const m = [228, 220, 202],
              M = css(e.sh(m)),
              MS = css(e.sh(mixc(m, [41, 40, 54], 0.3))),
              ML = css(e.sh(mixc(m, [255, 248, 225], 0.35)));
            box(10, 22, 6, 22, M); // the bell tower
            box(15, 22, 1, 22, MS);
            box(12, 19, 2, 4, 2);
            box(12, 11, 2, 3, 2);
            box(9, 23, 8, 1, ML);
            box(11, 30, 4, 7, M);
            box(14, 30, 1, 7, MS);
            box(12, 28, 2, 4, 2);
            box(12, 26, 1, 1, 12);
            box(10, 31, 6, 1, ML);
            dome(13, 31, 2, M);
            box(13, 35, 1, 2, 2);
            box(-8, 14, 17, 14, M);
            box(8, 14, 1, 14, MS);
            for (let p = -7; p <= 7; p += 3) {
              box(p, 12, 1, 9, ML);
              if (p < 7) box(p + 1, 13, 2, 1, MS);
            }
            box(-9, 15, 19, 1, ML);
            for (let p = -9; p <= 9; p += 2) box(p, 14, 1, 1, MS);
            chDoor(0, 3, 7, 6);
            box(-6, 25, 13, 10, M);
            box(6, 25, 1, 10, MS);
            for (const p of [-6, -3, 3]) box(p, 24, 1, 8, ML);
            box(-8, 17, 2, 2, M);
            box(7, 17, 2, 2, MS);
            orb(0, 21, 2, MS);
            orb(0, 21, 1.3, 2);
            box(-7, 26, 15, 1, ML);
            dome(0, 26, 4, M);
            box(0, 31, 1, 3, 2);
            box(-1, 30, 3, 1, 2);
            break;
          }
          case "grossetoDuomo": {
            // Grosseto Cathedral: a front banded in white and pink marble with a rose window, a little arcaded
            // gallery, three portals and corner pinnacles, beside the red-brick campanile whose windows widen
            // from single lights to four-light openings towards the top.
            const W = css(e.sh([238, 232, 220])),
              WS = css(e.sh([200, 194, 184])),
              P = css(e.sh([214, 156, 146])),
              br = [170, 88, 66],
              Br = css(e.sh(br)),
              BrS = css(e.sh(mixc(br, [41, 40, 54], 0.3))),
              BrL = css(e.sh(mixc(br, [255, 248, 225], 0.25)));
            box(-13, 32, 5, 32, Br);
            box(-9, 32, 1, 32, BrS);
            box(-12, 13, 1, 3, 2);
            box(-12, 20, 1, 3, 2);
            box(-11, 20, 1, 3, 2);
            box(-12, 26, 3, 3, 2);
            box(-12, 26, 1, 3, Br);
            box(-12, 31, 3, 3, 2);
            for (const r of [16, 22, 28]) box(-13, r, 5, 1, BrL);
            box(-14, 33, 7, 1, BrL);
            box(-7, 24, 15, 24, W);
            for (let r = 2; r <= 24; r += 2) box(-7, r, 15, 1, P);
            cone(0, 24, 7, 4, W);
            cone(0, 24, 5, 2, P);
            for (const p of [-7, 7]) {
              box(p, 29, 1, 5, W);
              box(p, 30, 1, 1, 3);
            }
            box(-7, 15, 15, 3, W);
            for (let p = -6; p <= 6; p += 2) box(p, 14, 1, 2, WS);
            orb(0, 20, 2.6, W);
            orb(0, 20, 1.8, 2);
            box(0, 20, 1, 1, W);
            chDoor(0, 3, 7, 6);
            chDoor(-5, 1, 5, 6);
            chDoor(5, 1, 5, 6);
            break;
          }
          case "sanMaurizio": {
            // Basilica of San Maurizio (Imperia): a neoclassical portico of columns under the entablature, the
            // front and pediment above, two bell towers with little lead domes and the great dome behind.
            const st = [224, 208, 172],
              M = css(e.sh(st)),
              MS = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              ML = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              wall = css(e.sh(mixc(st, [41, 40, 54], 0.45))),
              lead = css(e.sh([148, 156, 168])),
              leadS = css(e.sh([118, 126, 140]));
            box(-4, 26, 9, 5, M); // the dome
            box(4, 26, 1, 5, MS);
            for (const p of [-2, 0, 2]) box(p, 25, 1, 2, 2);
            dome(0, 26, 5, leadS);
            dome(-1, 26, 4, lead);
            box(-1, 34, 3, 3, M);
            cone(0, 34, 1, 2, lead);
            box(0, 38, 1, 2, 12);
            for (const tx of [-12, 8]) {
              box(tx, 25, 5, 13, M);
              box(tx + 4, 25, 1, 13, MS);
              box(tx + 1, 23, 3, 4, 2);
              box(tx + 2, 21, 1, 1, 12);
              box(tx - 1, 26, 7, 1, ML);
              dome(tx + 2, 26, 2, lead);
              box(tx + 2, 30, 1, 2, 2);
            }
            box(-7, 18, 15, 7, M);
            box(-1, 16, 3, 3, 2);
            box(-8, 19, 17, 1, ML);
            cone(0, 19, 7, 3, M);
            cone(0, 19, 4, 1, MS);
            box(-12, 1, 25, 1, MS);
            box(-11, 10, 23, 8, wall);
            box(-1, 7, 3, 5, 2);
            for (let p = -11; p <= 11; p += 3) {
              box(p, 10, 1, 8, M);
              box(p, 10, 1, 1, ML);
            }
            box(-12, 12, 25, 2, M);
            box(-12, 12, 25, 1, ML);
            break;
          }
          case "iserniaDuomo": {
            // Isernia Cathedral: a neoclassical pronaos of four columns under a pediment, and on its left the
            // old stone bell tower standing over an arched passage (the Fraterna arch), with a clock.
            const st = [222, 210, 182],
              M = css(e.sh(st)),
              MS = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              ML = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              wall = css(e.sh(mixc(st, [41, 40, 54], 0.4))),
              tw = [178, 160, 128],
              T = css(e.sh(tw)),
              TS = css(e.sh(mixc(tw, [41, 40, 54], 0.3))),
              TL = css(e.sh(mixc(tw, [255, 248, 225], 0.25)));
            box(-9, 28, 5, 28, T);
            box(-5, 28, 1, 28, TS);
            box(-8, 7, 3, 6, 2);
            dome(-7, 7, 1.5, 2);
            box(-9, 10, 5, 1, TL);
            box(-8, 15, 1, 2, 2);
            orb(-7, 19, 1.2, 6);
            box(-7, 20, 1, 1, 2);
            box(-8, 25, 3, 3, 2);
            box(-7, 24, 1, 1, 12);
            box(-10, 29, 7, 1, TL);
            cone(-7, 29, 2, 3, T);
            box(-4, 2, 15, 2, MS);
            box(-4, 2, 15, 1, M);
            box(-2, 12, 11, 10, wall);
            box(2, 8, 3, 5, 2);
            for (const cx of [-3, 0, 5, 8]) {
              box(cx, 12, 2, 10, M);
              box(cx + 1, 12, 1, 10, MS);
              box(cx, 13, 2, 1, ML);
            }
            box(-4, 15, 15, 2, M);
            box(-4, 15, 15, 1, ML);
            cone(3, 15, 7, 3, M);
            cone(3, 15, 4, 1, MS);
            box(3, 21, 1, 2, 2);
            break;
          }
          case "collemaggio": {
            // Santa Maria di Collemaggio (L'Aquila): the flat-topped front in a pattern of pink and white stone,
            // three rose windows (the middle one large), the great round-arched portal and two smaller ones,
            // and the stubby polygonal tower at the right corner.
            const W = css(e.sh([238, 230, 216])),
              WS = css(e.sh([206, 198, 186])),
              P = css(e.sh([216, 148, 138])),
              tw = [200, 186, 160],
              T = css(e.sh(tw)),
              TS = css(e.sh(mixc(tw, [41, 40, 54], 0.3)));
            box(14, 17, 3, 17, T);
            box(16, 17, 1, 17, TS);
            box(14, 18, 3, 1, WS);
            box(15, 12, 1, 2, 2);
            box(-13, 18, 27, 18, W);
            for (let r = 3; r <= 16; r++) for (let p = -12 + (r % 2); p <= 12; p += 2) box(p, r, 1, 1, P);
            box(-13, 2, 27, 2, WS);
            box(-13, 18, 27, 1, WS);
            box(-14, 19, 29, 1, W);
            orb(0, 13, 3.2, W);
            orb(0, 13, 2.5, 2);
            orb(0, 13, 1, W);
            for (const p of [-8, 8]) {
              orb(p, 13, 2, W);
              orb(p, 13, 1.3, 2);
              box(p - 2, 7, 5, 5, W);
              box(p - 1, 6, 3, 4, 2);
            }
            box(-4, 10, 9, 10, W);
            dome(0, 9, 4, W);
            box(-3, 7, 7, 7, 2);
            dome(0, 7, 3, 2);
            break;
          }
          case "lecceCampanile": {
            // The bell tower of Lecce Cathedral (Zimbalo, 1660s): five storeys of golden Lecce stone, each a
            // little narrower, each with its arched opening and a balustraded cornice with corner urns, under
            // an octagonal cupola and the statue of Sant'Oronzo.
            const st = [228, 198, 140],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3)));
            let b = 0;
            for (const [hw, h] of [
              [4, 14],
              [4, 10],
              [3, 10],
              [3, 8],
              [2, 6],
            ]) {
              const t = b + h;
              box(-hw, t, 2 * hw + 1, h, B);
              box(hw, t, 1, h, S);
              box(-hw, t, 1, h, Lt);
              if (hw >= 3) {
                box(-1, t - 2, 3, h - 5, 2);
                if (hw > 3) for (const p of [-3, 3]) box(p, t - 3, 1, h - 7, Lt);
              } else box(0, t - 1, 1, h - 3, 2);
              box(-hw - 1, t + 1, 2 * hw + 3, 1, Lt);
              for (const p of [-hw - 1, hw + 1]) box(p, t + 2, 1, 1, B);
              b = t + 1;
            }
            box(1, 3, 1, 1, 12);
            dome(0, b, 2, css(e.sh([196, 176, 120])));
            box(0, b + 3, 1, 1, B);
            box(0, b + 6, 1, 3, css(e.sh([128, 116, 96])));
            box(-1, b + 5, 3, 1, css(e.sh([128, 116, 96])));
            break;
          }
          case "portaNapoli": {
            // Porta Napoli (Lecce): a triumphal arch of golden stone (1548), the single arch between pairs of
            // columns on tall pedestals, a deep entablature and a triangular pediment with Charles V's arms.
            const st = [226, 200, 150],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3)));
            box(-8, 15, 17, 15, B);
            box(8, 15, 1, 15, S);
            box(-3, 12, 7, 12, Lt);
            dome(0, 12, 3, Lt);
            box(-2, 10, 5, 10, 2);
            dome(0, 10, 2.5, 2);
            for (const s of [-1, 1]) {
              box(s > 0 ? 4 : -7, 4, 4, 4, S);
              for (const p of [4, 6]) {
                const x = s * p;
                box(x, 14, 1, 10, Lt);
                box(x, 15, 1, 1, B);
              }
            }
            box(-9, 17, 19, 2, B);
            box(-9, 17, 19, 1, Lt);
            box(9, 17, 1, 2, S);
            cone(0, 17, 9, 5, B);
            cone(0, 17, 6, 3, S);
            box(-1, 20, 3, 2, Lt);
            box(0, 20, 1, 1, 12);
            break;
          }
          case "guinigi": {
            // Guinigi Tower (Lucca): a brick tower on a white stone base, Gothic four-light windows with white
            // columns up the shaft, crenellations, and the holm oaks growing on its top.
            const br = [176, 94, 70],
              B = css(e.sh(br)),
              S = css(e.sh(mixc(br, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(br, [255, 248, 225], 0.2))),
              Stn = css(e.sh([216, 204, 180])),
              oak = css(e.sh([64, 112, 64])),
              oakL = css(e.sh([96, 146, 82]));
            box(-3, 30, 7, 30, B);
            box(3, 30, 1, 30, S);
            box(-3, 6, 7, 6, Stn);
            box(-1, 4, 3, 3, 2);
            for (const y of [11, 17, 23]) {
              box(-2, y, 5, 3, 2);
              for (const p of [-1, 1]) box(p, y, 1, 3, Stn);
              box(-2, y + 1, 5, 1, Lt);
            }
            box(0, 28, 1, 2, 2);
            box(-4, 31, 9, 1, Lt);
            for (let p = -4; p <= 4; p += 2) box(p, 32, 1, 1, B);
            orb(-1, 35, 2.5, oak);
            orb(2, 34, 2.2, oak);
            orb(0, 37, 2.2, oakL);
            orb(-2, 35, 1.2, oakL);
            box(0, 33, 1, 2, css(e.sh([100, 76, 60])));
            break;
          }
          case "sferisterio": {
            // The Sferisterio of Macerata (1829), from the square: a long cream front with five arched doors
            // painted red, windows between pilasters, a cornice and the attic with its inscription and sculpture.
            const st = [224, 208, 174],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              red = css(e.sh([168, 58, 48]));
            box(-15, 11, 31, 11, B);
            box(15, 11, 1, 11, S);
            box(-15, 5, 31, 1, Lt);
            for (const p of [-12, -6, 0, 6, 12]) {
              box(p - 1, 4, 3, 3, red);
              dome(p, 4, 1.5, red);
              box(p - 1, 10, 3, 3, 2);
              box(p + 3, 11, 1, 10, Lt);
              box(p - 3, 11, 1, 10, Lt);
            }
            box(-16, 12, 33, 1, Lt);
            box(-12, 15, 25, 3, B);
            box(12, 15, 1, 3, S);
            for (let p = -10; p <= 10; p += 2) box(p, 14, 1, 1, S);
            box(-13, 16, 27, 1, Lt);
            box(-1, 18, 3, 2, B);
            box(0, 19, 1, 1, Lt);
            break;
          }
          case "sassi": {
            // The Sassi of Matera: houses and cave dwellings of pale tufa stacked up a ravine, terrace on
            // terrace, doors and cave mouths dark, a little church tower at the top.
            const tones = [
                [222, 204, 166],
                [206, 186, 148],
                [232, 218, 186],
              ].map((rgb) => css(e.sh(rgb))),
              rk = css(e.sh([190, 168, 128])),
              rkS = css(e.sh([150, 130, 100])),
              S = css(e.sh([150, 134, 108]));
            for (let y = 1; y <= 20; y++) {
              const hw = Math.round(20 - y * 0.85 + ((y * 5) % 3) - 1);
              box(-hw, y, 2 * hw + 1, 1, rk);
              box(hw - 2, y, 3, 1, rkS);
            }
            for (let k = 0; k < 6; k++) {
              const yb = 3 * k + 1,
                hw = Math.round(19 - (yb + 2) * 0.85 + (k % 2));
              for (let x = -hw + (k % 2) * 2; x + 3 <= hw; x += 4) {
                const i = (x + 40) * 7 + k * 3;
                if (i % 5 === 0) {
                  box(x + 1, yb + 1, 2, 2, 2); // a cave mouth
                  continue;
                }
                box(x, yb + 2, 3, 3, tones[i % 3]);
                box(x + 2, yb + 2, 1, 3, S);
                box(x + (i % 2), yb + 1, 1, 2, 2);
              }
            }
            box(-1, 26, 2, 6, tones[2]);
            box(0, 26, 1, 6, S);
            box(-1, 24, 1, 1, 2);
            cone(0, 26, 1, 2, tones[1]);
            break;
          }
          case "materaDuomo": {
            // Matera Cathedral: the Apulian Romanesque front with its rose window, blind arcade and portal, and
            // beside it the tall campanile with paired windows under a little pyramid.
            const st = [218, 200, 162],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3)));
            box(2, 38, 5, 38, B);
            box(6, 38, 1, 38, S);
            for (const r of [12, 20, 28, 33]) box(2, r, 5, 1, Lt);
            for (const y of [17, 25]) {
              box(3, y, 1, 3, 2);
              box(5, y, 1, 3, 2);
            }
            box(3, 32, 3, 3, 2);
            box(4, 31, 1, 1, 12);
            box(3, 37, 3, 3, 2);
            box(1, 39, 7, 1, Lt);
            cone(4, 39, 2, 3, B);
            box(4, 44, 1, 2, 2);
            box(-6, 15, 7, 15, B);
            box(0, 15, 1, 15, S);
            cone(-3, 15, 3, 3, B);
            for (let p = -6; p <= 0; p += 2) box(p, 14, 1, 1, S);
            orb(-3, 11, 1.8, S);
            orb(-3, 11, 1.1, 2);
            chDoor(-3, 3, 5, 13);
            break;
          }
          case "messinaCampanile": {
            // The bell tower of Messina Cathedral: a tall square stone tower holding the world's largest
            // astronomical clock: the planetary dial, niches of gilt moving figures, the great clock face,
            // twin Gothic belfry openings, corner pinnacles and a stone spire.
            const st = [216, 198, 158],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              blue = css(e.sh([48, 72, 132]));
            box(-4, 49, 9, 49, B);
            box(4, 49, 1, 49, S);
            box(-4, 49, 1, 49, Lt);
            for (const r of [10, 20, 30, 41, 49]) box(-5, r, 11, 1, Lt);
            box(0, 6, 1, 3, 2);
            orb(0, 15, 3, 12); // the planetary dial
            orb(0, 15, 2.3, blue);
            box(0, 16, 1, 2, 12);
            box(-2, 28, 5, 6, 2); // the niches of moving figures
            for (const p of [-1, 1]) box(p, 25, 1, 2, 12);
            box(0, 28, 1, 2, 12);
            orb(0, 35, 3, 12); // the clock
            orb(0, 35, 2.3, 6);
            box(0, 36, 1, 2, 2);
            box(1, 35, 1, 1, 2);
            for (const p of [-2, 1]) box(p, 47, 2, 5, 2);
            for (const p of [-4, 4]) {
              box(p, 54, 1, 5, B);
              box(p, 55, 1, 1, 3);
            }
            cone(0, 49, 3, 9, B);
            box(0, 60, 1, 2, 2);
            box(-1, 60, 3, 1, 2);
            break;
          }
          case "calatravaCosenza": {
            // Ponte di Calatrava (Cosenza): a white deck held by a single fan of stays from one tall pylon,
            // leaning back on the right bank.
            const W = css(e.sh([238, 234, 226])),
              WS = css(e.sh([188, 186, 182]));
            box(-22, 6, 45, 2, W);
            box(-22, 4, 45, 1, WS);
            for (const p of [-22, -8, 6, 20]) box(p, 3, 3, 3, WS);
            for (let j = 0; j < 22; j++)
              box(12 + Math.round(j * 0.35), 6 + j, j < 12 ? 2 : 1, 1, j < 11 ? W : WS);
            for (let i = 0; i < 10; i++) {
              const ph = 27 - i * 1.6;
              stroke(12 + (ph - 6) * 0.35, ph, -20 + i * 3.4, 6, 6);
            }
            orb(19, 27, 0.6, 10);
            break;
          }
          case "cosenzaDuomo": {
            // Cosenza Cathedral: a pale Romanesque-Gothic front, a raised gable over the nave with the large
            // rose window, two small roses over the aisles, three Gothic portals and broad steps.
            const st = [220, 202, 184],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3)));
            box(-9, 1, 19, 1, S);
            box(-8, 15, 17, 14, B);
            box(8, 15, 1, 14, S);
            box(-8, 16, 17, 1, Lt);
            box(-4, 20, 9, 5, B);
            cone(0, 20, 5, 3, B);
            box(-5, 21, 11, 1, Lt);
            cone(0, 21, 5, 3, Lt);
            cone(0, 21, 4, 2, B);
            for (const p of [-4, 4]) box(p, 19, 1, 18, Lt);
            orb(0, 15, 2.4, S);
            orb(0, 15, 1.6, 2);
            box(0, 15, 1, 1, B);
            for (const p of [-6, 6]) {
              orb(p, 11, 1.2, S);
              box(p, 11, 1, 1, 2);
              chDoor(p, 1, 4, 13);
            }
            chDoor(0, 3, 7, 13);
            box(0, 26, 1, 2, 2);
            break;
          }
          case "incoronata": {
            // Tempio dell'Incoronata (Lodi): a Renaissance brick octagon, three faces in view with stone
            // pilasters, round windows and an arched frieze, the narrower octagonal drum above, the low roof and
            // the lantern.
            const br = [178, 98, 72],
              B = css(e.sh(br)),
              S = css(e.sh(mixc(br, [41, 40, 54], 0.32))),
              Lt = css(e.sh(mixc(br, [255, 248, 225], 0.2))),
              Stn = css(e.sh([226, 214, 190])),
              roof = css(e.sh([150, 80, 62]));
            const oct = (hw, b, t) => {
              const f = Math.max(1, Math.round(hw / 3));
              box(-hw, t, 2 * hw + 1, t - b, B);
              box(-hw, t, f, t - b, Lt);
              box(hw - f + 1, t, f, t - b, S);
              for (const p of [-hw + f, hw - f, -hw, hw]) box(p, t, 1, t - b, Stn);
              box(-hw - 1, t + 1, 2 * hw + 3, 1, Stn);
              for (let p = -hw + f + 1; p < hw - f; p += 2) box(p, t, 1, 1, S);
            };
            oct(7, 0, 16);
            orb(0, 10, 1.4, 2);
            box(-1, 5, 3, 4, 2);
            for (const p of [-6, 6]) box(p, 11, 1, 2, 2);
            oct(4, 17, 22);
            box(0, 20, 1, 2, 2);
            cone(0, 23, 4, 2, roof);
            box(-1, 28, 3, 2, Stn);
            cone(0, 28, 1, 2, roof);
            orb(0, 31, 0.6, 12);
            box(0, 33, 1, 1, 12);
            break;
          }
