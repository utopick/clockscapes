          case "stMarksCampanile": {
            // St Mark's Campanile, Venice: the brick shaft ribbed by its pilaster strips, the white Istrian-stone
            // belfry of arches with its bells, the attic with the lions, the green pyramid spire and the gilt
            // angel; Sansovino's little marble Loggetta with its three arches at the foot.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const brick = [178, 96, 72],
              ist = [238, 232, 216],
              verd = [104, 166, 132],
              B = P(brick),
              BS = P(brick, 0.32),
              BG = P(brick, 0.16),
              BL = P(brick, -0.22),
              W = P(ist),
              WS = P(ist, 0.25),
              V = P(verd),
              VS = P(verd, 0.3),
              s = 35;
            box(-4, s, 9, s, B);
            for (const p of [-3, -1, 1, 3]) box(p, s - 2, 1, s - 5, BG); // the recessed panels
            box(-4, s, 1, s, BL);
            box(4, s, 1, s, BS);
            for (const p of [-3, -1, 1, 3]) box(p, s - 1, 1, 1, B); // their arched heads
            box(-5, s + 1, 11, 1, W);
            box(-4, s + 7, 9, 6, W); // the belfry
            for (const p of [-3, -1, 1, 3]) {
              box(p, s + 6, 1, 4, 2);
              box(p, s + 4, 1, 1, 12); // a bell
            }
            box(4, s + 7, 1, 6, WS);
            box(-5, s + 8, 11, 1, W);
            box(-4, s + 13, 9, 5, W); // the attic
            box(4, s + 13, 1, 5, WS);
            for (const p of [-3, 2]) box(p, s + 11, 2, 2, P([196, 176, 128])); // the lions
            box(-1, s + 11, 3, 2, P(ist, 0.12));
            box(-5, s + 14, 11, 1, W);
            cone(0, s + 14, 4, 10, V); // the spire
            for (let j = 0; j < 10; j++) {
              const k = Math.round(4 * (1 - j / 10));
              if (k > 0) box(1, s + 15 + j, k, 1, VS);
            }
            box(0, s + 27, 1, 3, 12); // the angel
            box(-1, s + 26, 3, 1, 12);
            // the Loggetta
            const rose = [226, 196, 182];
            box(-8, 8, 17, 8, P(rose));
            box(-8, 1, 17, 1, P(rose, 0.2));
            for (const p of [-5, 0, 5]) {
              box(p - 1, 5, 3, 4, 2);
              box(p, 6, 1, 1, 2);
            }
            for (const p of [-7, -3, 3, 7]) box(p, 7, 1, 6, W); // the paired columns
            box(-8, 9, 17, 1, W);
            box(-8, 10, 17, 1, P(rose, 0.1));
            for (let p = -7; p <= 7; p += 2) box(p, 11, 1, 1, W); // the balustrade
            box(8, 8, 1, 7, P(rose, 0.3));
            break;
          }
          case "salute": {
            // Santa Maria della Salute, Venice: the white octagon on its steps with the triumphal-arch portal,
            // the great scroll volutes (orecchioni) round the drum, the ribbed main dome with its lantern and
            // statue, and behind it the smaller dome between two slim bell towers.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const ist = [240, 236, 224],
              lead = [176, 182, 188],
              W = P(ist),
              WS = P(ist, 0.22),
              WD = P(ist, 0.4),
              D = P(lead),
              DS = P(lead, 0.3);
            // the back: small dome and the two bell towers
            for (const p of [7, 12]) {
              box(p - 1, 23, 3, 23, W);
              box(p, 21, 1, 2, 2);
              box(p + 1, 23, 1, 23, WS);
              dome(p, 23, 1.5, D);
              box(p, 26, 1, 1, W);
            }
            box(8, 17, 3, 5, W);
            dome(9.5, 17, 3, D);
            box(9, 21, 1, 2, W);
            // the octagon
            box(-12, 14, 23, 13, W);
            box(-12, 1, 24, 1, WS); // the steps
            box(5, 14, 6, 13, WS); // the shaded faces
            box(-12, 14, 23, 1, P(ist, -0.3));
            for (const p of [-10, -7, 7, 9]) box(p, 12, 1, 10, p > 0 ? WD : WS); // pilasters
            for (const p of [-9, 8]) {
              box(p - 1, 9, 2, 4, 2);
              box(p - 1, 4, 2, 2, 2);
            }
            box(-4, 13, 9, 12, W); // the portal front
            box(-4, 13, 1, 12, P(ist, -0.3));
            for (const p of [-4, -2, 2, 4]) box(p, 12, 1, 10, p > 0 ? WS : W);
            box(-1, 9, 3, 7, 2); // the great door
            box(0, 10, 1, 1, 2);
            cone(0, 13, 5, 3, W); // the pediment
            for (const p of [-5, 0, 5]) box(p, 18, 1, 2, WS); // statues
            for (const p of [-11, -6, 6, 11]) box(p, 16, 1, 2, WS);
            // the drum and volutes
            box(-11, 15, 22, 1, W);
            box(-7, 21, 15, 6, W);
            for (let p = -6; p <= 6; p += 2) box(p, 20, 1, 3, 2);
            box(4, 21, 3, 6, WS);
            for (const s of [-1, 1]) {
              orb(s * 9, 17, 2, W);
              orb(s * 9, 17, 1, s > 0 ? WD : WS);
              box(s * 9 - (s > 0 ? 0 : 1), 20, 2, 2, W);
            }
            // the main dome
            dome(0, 21, 8, D);
            for (const p of [-5, -2, 2, 5]) {
              const h = Math.floor(Math.sqrt(64 - p * p)) - 1;
              box(p, 21 + h, 1, h, p > 0 ? DS : P(lead, -0.25));
            }
            for (let p = 1; p < 8; p++) {
              const h = Math.floor(Math.sqrt(64 - p * p));
              if (p > 5) box(p, 21 + h, 1, h, DS);
            }
            box(-2, 33, 5, 4, W); // the lantern
            box(-1, 32, 1, 2, 2);
            box(1, 32, 1, 2, 2);
            dome(0, 33, 2, D);
            box(0, 36, 1, 1, 12); // the Virgin
            break;
          }
          case "torreMangia": {
            // Torre del Mangia, Siena: the slender brick shaft, the projecting white crown on its corbels with
            // merlons, the open stone belfry with its bell under a pointed cap; the marble Cappella di Piazza
            // at the foot.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const brick = [168, 88, 66],
              trav = [236, 226, 204],
              B = P(brick),
              W = P(trav),
              WS = P(trav, 0.25);
            box(-2, 45, 5, 45, B);
            box(-2, 45, 1, 45, P(brick, -0.2));
            box(2, 45, 1, 45, P(brick, 0.3));
            for (const y of [16, 24, 32, 40]) box(0, y, 1, 2, 2);
            for (let p = -3; p <= 3; p += 2) box(p, 46, 1, 1, W); // corbels
            box(-3, 49, 7, 3, W); // the crown
            box(-3, 47, 7, 1, WS);
            box(3, 49, 1, 3, WS);
            for (let p = -3; p <= 3; p += 2) box(p, 50, 1, 1, W); // merlons
            box(-2, 55, 5, 5, W); // the belfry
            box(-1, 54, 3, 3, 2);
            box(0, 52, 1, 1, 12);
            box(2, 55, 1, 5, WS);
            box(-2, 56, 5, 1, W);
            cone(0, 56, 2, 3, W);
            box(0, 61, 1, 2, 8);
            // the Cappella di Piazza
            box(-4, 8, 9, 7, W);
            box(-4, 1, 9, 1, WS);
            for (const p of [-3, 0, 3]) box(p, 6, 1, 5, 2);
            box(-4, 9, 9, 1, P(trav, -0.3));
            box(-4, 10, 9, 1, WS);
            break;
          }
          case "duomoSiena": {
            // Siena Cathedral: Giovanni Pisano's white, pink and dark marble front with three portals under
            // gables, the corner pinnacle towers, the rose window under the gilt-mosaic gables, the dome with its
            // lantern behind, and the black-and-white striped campanile.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const mar = [240, 234, 222],
              pink = [218, 168, 156],
              blk = [62, 60, 70],
              W = P(mar),
              WS = P(mar, 0.22),
              K = P(pink),
              N = P(blk),
              G = P([214, 164, 60]);
            // the campanile
            box(12, 38, 5, 38, W);
            for (let y = 2; y < 38; y += 2) box(12, y, 5, 1, N);
            box(16, 38, 1, 38, "rgba(24, 20, 48, 0.2)");
            for (const y of [14, 20, 26, 32]) {
              const n = Math.min(3, Math.floor((y - 8) / 6));
              for (let i = 0; i < n; i++) box(13 + i + (n < 3 ? 1 : 0), y, 1, 2, 2);
            }
            box(11, 39, 7, 1, W);
            cone(14, 39, 2, 6, N);
            for (const p of [11, 17]) box(p, 41, 1, 2, W);
            // the dome
            const lead = [122, 126, 138];
            box(1, 27, 7, 3, W);
            dome(4, 27, 4, P(lead));
            box(6, 30, 2, 3, P(lead, 0.3));
            box(3, 34, 3, 3, W);
            box(4, 35, 1, 1, G);
            // the facade
            box(-9, 15, 19, 15, W);
            box(-9, 1, 19, 1, WS);
            box(-9, 15, 19, 1, K);
            for (const p of [-5, 0, 5]) {
              const k = p ? 1 : 2;
              box(p - k - 1, 11, 2 * k + 3, 10, K);
              box(p - k, 9, 2 * k + 1, 8, 2);
              cone(p, 11, k + 2, k + 2, K); // the portal gables
              cone(p, 11, k, k, W);
              box(p, 12 + k, 1, 1, G);
            }
            box(-6, 24, 13, 9, W); // the upper front
            box(-9, 16, 19, 1, WS);
            orb(0, 19, 3, K); // the rose window
            orb(0, 19, 2, 2);
            box(0, 19, 1, 1, G);
            cone(0, 24, 6, 9, W); // the central gable with its gilt mosaic
            cone(0, 24, 3, 5, G);
            box(-6, 24, 13, 1, K);
            for (const p of [-9, 8]) {
              box(p, 28, 2, 28, p < 0 ? P(mar, -0.25) : WS); // the corner towers
              box(p, 29, 2, 1, K);
              box(p + (p < 0 ? 1 : 0), 31, 1, 2, W);
            }
            for (const p of [-7, 7]) {
              box(p, 27, 1, 12, p < 0 ? W : WS); // the pinnacles
              box(p, 29, 1, 2, W);
            }
            break;
          }
          case "moleAntonelliana": {
            // Mole Antonelliana, Turin: the square hall with its two orders of windows and the colonnade, the
            // tall square dome with concave slate sides, ribbed corners and rows of little windows, the two-tier
            // columned "temple", and the very long spire with its balconies and the star.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const st = [214, 204, 184],
              sl = [140, 146, 154],
              S = P(st),
              SS = P(st, 0.25),
              SL = P(st, -0.3),
              G = P(sl),
              GS = P(sl, 0.3),
              dh = 21,
              lt = 13 + dh;
            box(-9, 13, 19, 13, S);
            box(-9, 1, 19, 1, SS);
            for (let p = -8; p <= 8; p += 2) {
              box(p, 4, 1, 2, 2);
              box(p, 11, 1, 5, 2); // the colonnade
            }
            box(-9, 6, 19, 1, SL);
            box(-10, 13, 21, 1, SL);
            box(7, 12, 3, 12, "rgba(24, 20, 48, 0.18)");
            for (let j = 1; j <= dh; j++) {
              const k = Math.round(2 + 7 * (1 - j / dh) ** 1.5);
              box(-k, 13 + j, 2 * k + 1, 1, G);
              box(-k, 13 + j, 1, 1, SL); // the ribbed corners
              box(k, 13 + j, 1, 1, S);
              if (k > 2) box(1, 13 + j, k - 1, 1, GS);
              if (j % 5 === 2 && k > 3) for (let p = -k + 2; p < k - 1; p += 2) box(p, 13 + j, 1, 1, 2); // windows
            }
            box(-4, lt + 1, 9, 1, SL);
            box(-3, lt + 5, 7, 4, S); // the temple
            for (const p of [-2, 0, 2]) box(p, lt + 4, 1, 3, 2);
            box(-3, lt + 6, 7, 1, SL);
            box(-2, lt + 9, 5, 3, S);
            for (const p of [-1, 1]) box(p, lt + 8, 1, 2, 2);
            box(-1, lt + 11, 3, 2, S);
            box(0, lt + 23, 1, 12, S); // the spire
            for (const y of [lt + 14, lt + 18]) box(-1, y, 3, 1, S);
            box(0, lt + 25, 1, 2, 12);
            box(-1, lt + 24, 3, 1, 12); // the star
            break;
          }
          case "superga": {
            // Basilica of Superga, Turin: Juvarra's temple portico of eight columns under a pediment, the ochre
            // church behind, the tall drum of paired columns and windows, the ribbed dome and its lantern, and the
            // two bell towers with their onion caps at the back.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const och = [226, 172, 112],
              st = [238, 230, 212],
              cu = [152, 112, 100],
              O = P(och),
              OS = P(och, 0.25),
              W = P(st),
              WS = P(st, 0.22),
              C = P(cu),
              CS = P(cu, 0.3);
            for (const s of [-1, 1]) {
              const px = s * 11;
              box(px - 2, 21, 5, 9, O);
              box(px - 2, 21, 1, 9, W);
              box(px + 2, 21, 1, 9, s > 0 ? OS : W);
              box(px - 1, 19, 3, 4, 2);
              box(px, 18, 1, 1, 12);
              box(px - 2, 22, 5, 1, W);
              orb(px, 24, 2, C); // the onion caps
              cone(px, 25, 1, 3, C);
              box(px, 30, 1, 2, 12);
            }
            box(-13, 12, 27, 12, O);
            box(-13, 12, 27, 1, W);
            for (const p of [-12, -9, 9, 12]) box(p, 11, 1, 10, W);
            for (const p of [-11, 10]) box(p, 8, 1, 3, 2);
            box(12, 12, 2, 12, OS);
            // the drum and dome
            box(-6, 22, 13, 9, O);
            for (let p = -5; p <= 5; p += 2) box(p, 21, 1, 7, W);
            for (const p of [-4, 0, 4]) box(p, 19, 1, 3, 2);
            box(4, 22, 3, 9, OS);
            box(-7, 23, 15, 1, W);
            dome(0, 23, 7, C);
            for (const p of [-4, -1, 2, 5]) {
              const h = Math.floor(Math.sqrt(49 - p * p)) - 1;
              box(p, 23 + h, 1, h, p > 2 ? CS : W);
            }
            box(-1, 33, 3, 3, W); // the lantern
            box(0, 32, 1, 1, 2);
            dome(0, 33, 1.5, C);
            box(0, 37, 1, 2, 12);
            // the portico
            box(-7, 12, 15, 1, W);
            for (let p = -6; p <= 6; p += 2) box(p, 11, 1, 10, p > 3 ? WS : W);
            for (let p = -5; p <= 5; p += 2) box(p, 11, 1, 10, "rgba(40, 34, 52, 0.55)");
            box(-7, 1, 15, 1, WS);
            box(-7, 14, 15, 2, W);
            cone(0, 14, 7, 4, W); // the pediment
            cone(0, 14, 4, 2, OS);
            break;
          }
          case "arenaVerona": {
            // Verona Arena: the low oval of pink Veronese stone with two tiers of round arches, the cornices,
            // and on the left the "ala", the last four-arch fragment of the outer ring, standing a storey taller.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const st = [218, 176, 152],
              S = P(st),
              SS = P(st, 0.28),
              SL = P(st, -0.3),
              D = P(st, 0.66);
            for (let xx = -17; xx <= 17; xx++) {
              const tp = Math.abs(xx) > 15 ? 11 : 13;
              box(xx, tp, 1, tp, xx > 11 ? SS : S);
            }
            for (const y of [1, 6, 12]) box(-17, y, 35, 1, y === 1 ? SS : SL);
            for (let p = -16; p <= 13; p += 4)
              for (const top of [5, 11]) {
                const d = p > 9 ? P(st, 0.55) : D;
                box(p, top - 1, 3, 4, d); // the arches
                box(p + 1, top, 1, 1, d);
              }
            // the ala: three storeys of piers with the sky through its arches
            for (const p of [-16, -12, -8]) box(p, p === -12 ? 19 : 18, 1, 6, P(st, -0.12));
            for (const y of [16, 19]) box(-16, y, 9, 1, y === 19 ? S : SL);
            box(-16, 13, 9, 1, SL);
            box(-15, 17, 3, 1, S);
            box(-11, 17, 3, 1, S);
            break;
          }
          case "torreLamberti": {
            // Torre dei Lamberti, Verona: the shaft banded in tufa and brick below and plain brick above, the
            // clock, the marble belfry with its triple windows, and the octagonal top storey under a little dome.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const brick = [176, 98, 74],
              tufa = [222, 206, 172],
              mar = [240, 234, 222],
              B = P(brick),
              T = P(tufa),
              W = P(mar),
              WS = P(mar, 0.22);
            box(-3, 38, 7, 38, B);
            for (let y = 2; y < 22; y += 3) box(-3, y, 7, 1, T); // the tufa bands
            box(3, 38, 1, 38, P(brick, 0.3));
            box(-3, 38, 1, 38, P(brick, -0.18));
            for (const y of [14, 24]) box(0, y, 1, 2, 2);
            orb(0, 31, 2, W); // the clock
            orb(0, 31, 1, 2);
            box(-4, 39, 9, 1, W);
            box(-3, 44, 7, 5, W); // the belfry
            for (const p of [-2, 0, 2]) box(p, 43, 1, 3, 2);
            box(0, 41, 1, 1, 12);
            box(3, 44, 1, 5, WS);
            box(-4, 45, 9, 1, W);
            box(-2, 51, 5, 6, W); // the octagon
            box(1, 51, 2, 6, WS);
            for (const p of [-1, 1]) box(p, 49, 1, 3, 2);
            box(-3, 52, 7, 1, W);
            dome(0, 52, 2.5, P([150, 120, 104]));
            box(0, 56, 1, 2, 8);
            break;
          }
          case "basilicaPalladiana": {
            // Basilica Palladiana, Vicenza: Palladio's two white loggias of serliana bays (an arch between two
            // square openings) on Doric and Ionic columns, the balustrade with its statues, and the great green
            // copper roof shaped like an upturned hull.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const st = [238, 232, 216],
              cu = [112, 178, 150],
              W = P(st),
              WS = P(st, 0.22),
              V = P(cu),
              VS = P(cu, 0.28),
              VL = P(cu, -0.25);
            for (let j = 0; j < 9; j++) {
              const k = Math.round(15 * Math.sqrt(1 - ((j + 0.5) / 9) ** 2.2));
              box(-k, 24 + j, 2 * k + 1, 1, V); // the hull roof
              box(Math.round(k * 0.4), 24 + j, k - Math.round(k * 0.4) + 1, 1, VS);
              if (j % 3 === 1) box(-k, 24 + j, Math.round(k * 0.6), 1, VL);
            }
            box(-16, 22, 33, 22, W);
            box(-16, 1, 33, 1, WS);
            for (const y of [11, 21]) box(-17, y, 35, 1, P(st, -0.3));
            box(-16, 10, 33, 1, WS);
            for (const [b0, b1] of [
              [2, 9],
              [12, 19],
            ]) {
              for (const cx of [-12, -4, 4, 12]) {
                box(cx - 1, b1 - 1, 3, b1 - b0 - 1, 2); // the serliana: an arch between two square openings
                box(cx, b1, 1, 1, 2);
                for (const s of [-3, 3]) {
                  box(cx + s, b1 - 3, 1, b1 - b0 - 3, 2);
                  orb(cx + s, b1 - 1, 0.6, WS); // the oculi
                }
              }
              for (const p of [-16, -8, 0, 8, 16]) box(p, b1 + 1, 1, b1 - b0 + 2, p > 4 ? WS : P(st, -0.3)); // half columns
            }
            box(-16, 23, 33, 1, W); // the balustrade and statues
            for (let p = -15; p <= 15; p += 3) box(p, 25, 1, 2, W);
            box(13, 22, 4, 22, "rgba(24, 20, 48, 0.15)");
            break;
          }
          case "torreBissara": {
            // Torre Bissara, Vicenza: the slim brick shaft beside the Basilica, the clock, the belfry of arched
            // openings with its bells, and the green copper octagonal cupola with its lantern and spike.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const brick = [172, 96, 76],
              st = [236, 228, 210],
              cu = [104, 172, 146],
              B = P(brick),
              W = P(st),
              V = P(cu);
            box(-3, 3, 7, 3, W);
            box(-2, 42, 5, 42, B);
            box(-2, 42, 1, 42, P(brick, -0.2));
            box(2, 42, 1, 42, P(brick, 0.3));
            for (const y of [12, 20, 28]) box(0, y, 1, 2, 2);
            box(-2, 31, 5, 1, W);
            orb(0, 35, 2, W); // the clock
            orb(0, 35, 1, P([80, 112, 170]));
            box(0, 36, 1, 1, W);
            box(-3, 43, 7, 1, W);
            box(-2, 48, 5, 5, W); // the belfry
            for (const p of [-1, 1]) box(p, 47, 1, 3, 2);
            box(2, 48, 1, 5, P(st, 0.22));
            box(-3, 49, 7, 1, W);
            dome(0, 49, 2.5, V); // the cupola
            box(1, 51, 1, 2, P(cu, 0.3));
            box(-1, 54, 3, 2, V);
            box(0, 57, 1, 3, 8);
            break;
          }
          case "duomoTrani": {
            // Trani Cathedral: the pale limestone Romanesque front on the sea with its steep gable, rose window
            // and the stair up to the portal, and the tall campanile standing on an open arch, its windows
            // growing from one to four light as it rises, under an octagonal top and a little pyramid spire.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const st = [234, 222, 196],
              S = P(st),
              SS = P(st, 0.22),
              SL = P(st, -0.3);
            // the front
            box(-12, 9, 4, 9, S); // the aisle
            box(-12, 9, 4, 1, SL);
            box(-11, 6, 1, 2, 2);
            box(-8, 21, 15, 21, S);
            box(-8, 21, 1, 21, SL);
            for (let j = 0; j < 8; j++) {
              const k = Math.round(7.5 * (1 - j / 8));
              box(-1 - k, 22 + j, 2 * k + 1, 1, S); // the steep gable
              box(-1 + k, 22 + j, 1, 1, SS);
            }
            orb(-1, 22, 2, SS); // the rose window
            orb(-1, 22, 1, 2);
            for (const p of [-5, 3]) box(p, 17, 1, 3, 2);
            for (let p = -7; p <= 5; p += 2) box(p, 13, 1, 1, SS); // the blind arcade
            box(-3, 9, 5, 6, SL); // the portal and its stair
            box(-2, 8, 3, 5, 2);
            box(-1, 9, 1, 1, 2);
            for (let s = 0; s < 3; s++) box(-6 + s, 3 - s, 11 - 2 * s, 1, s % 2 ? S : SS);
            box(6, 20, 1, 19, SS);
            // the campanile
            for (const p of [7, 12]) box(p, 10, 2, 10, S); // the piers of its open arch
            box(9, 10, 3, 1, S);
            box(10, 11, 1, 1, S);
            box(7, 38, 7, 27, S);
            box(13, 38, 1, 27, SS);
            box(7, 38, 1, 27, SL);
            for (const [y, n] of [
              [16, 1],
              [22, 2],
              [28, 2],
              [35, 3],
            ]) {
              for (let i = 0; i < n; i++) box(10 - (n - 1) + 2 * i, y, 1, 3, 2);
              box(7, y + 2, 7, 1, SL);
            }
            box(8, 42, 5, 4, S); // the octagon
            box(12, 42, 1, 4, SS);
            box(10, 41, 1, 2, 2);
            cone(10, 42, 2, 5, S);
            box(10, 49, 1, 2, 8);
            break;
          }
          case "madonnaLacrime": {
            // Sanctuary of the Madonna delle Lacrime, Syracuse: the huge cone of white concrete ribs rising
            // from the round crypt, crowned with the bronze diadem and the Madonna.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const cr = [232, 230, 224],
              C = P(cr),
              CS = P(cr, 0.25),
              CD = P(cr, 0.45),
              H = 28;
            box(-17, 4, 35, 4, CS); // the crypt drum
            box(-17, 4, 35, 1, C);
            for (let p = -15; p <= 15; p += 3) box(p, 3, 1, 2, CD);
            for (let j = 0; j < H; j++) {
              const f = 1 - j / H,
                k = Math.round(17 * f ** 1.7);
              box(-k, 5 + j, 2 * k + 1, 1, C);
              box(Math.round(k * 0.35), 5 + j, k - Math.round(k * 0.35) + 1, 1, CS);
              for (const r of [-13, -9, -5, -1, 3, 7, 11, 15]) {
                const xx = Math.round(r * f ** 1.7);
                if (Math.abs(xx) < k) box(xx, 5 + j, 1, 1, r > 3 ? CD : CS); // the ribs
              }
            }
            const br = P([168, 132, 82]);
            box(-2, 34, 5, 2, br); // the crown
            for (const p of [-2, 0, 2]) box(p, 35, 1, 1, br);
            box(0, 38, 1, 3, br);
            box(-1, 37, 3, 1, br);
            break;
          }
          case "duomoSiracusa": {
            // Syracuse Cathedral: the Sicilian Baroque front of two orders of Corinthian columns, the portal with
            // its broken pediment, the upper storey between scroll buttresses and the statues of the saints; the
            // Doric columns of the Temple of Athena still show along its side.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const st = [232, 214, 180],
              S = P(st),
              SS = P(st, 0.24),
              SL = P(st, -0.35),
              SD = P(st, 0.45);
            box(-14, 10, 5, 10, SS); // the temple side
            for (const p of [-14, -12, -10]) box(p, 9, 1, 8, SL);
            box(-14, 10, 5, 1, S);
            box(-9, 15, 19, 15, S);
            box(-9, 1, 19, 1, SS);
            for (const p of [-8, -6, -3, 3, 6, 8]) box(p, 14, 1, 12, p > 0 ? SD : SL); // the columns
            for (const p of [-7, 7]) box(p, 9, 1, 3, 2);
            box(-2, 10, 5, 8, SD); // the portal
            box(-1, 9, 3, 7, 2);
            box(0, 10, 1, 1, 2);
            box(-3, 12, 2, 1, S);
            box(2, 12, 2, 1, S); // its broken pediment
            box(-10, 16, 21, 2, SL); // the entablature
            box(-6, 25, 13, 8, S); // the upper order
            for (const p of [-5, -3, 3, 5]) box(p, 25, 1, 8, p > 0 ? SD : SL);
            box(-1, 23, 3, 4, 2);
            box(0, 24, 1, 1, 2);
            for (const s of [-1, 1]) {
              box(s * 7 - (s < 0 ? 1 : 0), 20, 2, 3, S); // the scroll buttresses
              box(s * 8, 18, 1, 1, S);
              box(s * 9, 19, 1, 1, SL); // statues
              box(s * 9, 21, 1, 2, SL);
            }
            box(-7, 26, 15, 1, SL);
            cone(0, 26, 6, 3, S); // the pediment
            box(0, 31, 1, 2, SL); // the statue on top
            for (const p of [-5, 5]) box(p, 29, 1, 2, SL);
            break;
          }
          case "miramare": {
            // Miramare Castle, Trieste: Archduke Maximilian's white Istrian-stone castle on the sea, the long
            // battlemented body with rows of Gothic windows, and the square tower at the seaward end with its
            // corner turrets, little round lookout and the flag.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const st = [240, 236, 226],
              W = P(st),
              WS = P(st, 0.22),
              WL = P(st, -0.3);
            box(-13, 2, 27, 2, P([170, 164, 150])); // the terrace on the rocks
            box(-12, 13, 18, 11, W);
            box(-12, 13, 18, 1, WL);
            for (let p = -12; p <= 5; p += 2) box(p, 15, 1, 2, W); // merlons
            box(-6, 17, 6, 4, W); // the raised centre
            for (let p = -6; p <= -1; p += 2) box(p, 18, 1, 1, W);
            for (let p = -11; p <= 4; p += 2) for (const y of [6, 11]) box(p, y, 1, 2, 2);
            for (const p of [-5, -3]) box(p, 15, 1, 2, 2);
            box(-12, 8, 18, 1, WL);
            // the tower
            box(6, 22, 7, 22, W);
            box(12, 22, 1, 22, WS);
            for (const y of [7, 12, 17]) box(8, y, 2, 2, 2);
            box(5, 23, 9, 1, WL);
            for (let p = 5; p <= 13; p += 2) box(p, 24, 1, 1, W);
            for (const p of [5, 13]) {
              box(p, 26, 1, 4, p > 9 ? WS : W); // the corner turrets
              box(p, 27, 1, 1, W);
            }
            box(8, 27, 3, 3, W); // the lookout
            box(10, 27, 1, 3, WS);
            box(8, 28, 3, 1, WL);
            box(9, 31, 1, 4, 8);
            box(10, 31, 2, 2, 10); // the flag
            break;
          }
          case "portaSanTomaso": {
            // Porta San Tomaso, Treviso: the white Istrian-stone Renaissance gate, its round arch between paired
            // pilasters and carved panels, the cornice, and the big rounded hood on top with the statue.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const st = [238, 234, 222],
              W = P(st),
              WS = P(st, 0.22),
              WL = P(st, -0.35),
              WD = P(st, 0.38);
            box(-9, 13, 19, 13, W);
            box(-9, 1, 19, 1, WS);
            box(8, 13, 2, 13, WS);
            for (const p of [-8, -6, -4, 4, 6, 8]) box(p, 12, 1, 11, p > 0 ? WD : WL); // the pilasters
            for (const p of [-7, -5, 5, 7]) {
              box(p, 10, 1, 3, WS); // the carved panels
              box(p, 5, 1, 2, WS);
            }
            box(-3, 10, 7, 10, WL);
            box(-2, 8, 5, 8, 2); // the arch
            box(-1, 9, 3, 1, 2);
            box(-3, 1, 7, 1, WS);
            box(-10, 14, 21, 1, WL); // the cornice
            box(-9, 16, 19, 2, W);
            for (let p = -6; p <= 6; p += 3) box(p, 16, 1, 1, WS);
            for (let j = 0; j < 4; j++) {
              const k = Math.round(8 * Math.sqrt(1 - (j / 4.5) ** 2));
              box(-k, 17 + j, 2 * k + 1, 1, j % 2 ? W : WL); // the low rounded hood
              box(Math.round(k / 2), 17 + j, k - Math.round(k / 2) + 1, 1, WS);
            }
            box(-1, 22, 3, 1, W);
            box(0, 25, 1, 3, WS); // the statue
            break;
          }
          case "palazzoTrecento": {
            // Palazzo dei Trecento, Treviso: the brick town hall on its open ground-floor arcade of round arches,
            // the white-framed three-light windows of the council hall and the Ghibelline swallowtail merlons.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const brick = [190, 120, 88],
              st = [236, 228, 210],
              B = P(brick),
              BS = P(brick, 0.28),
              W = P(st);
            box(-12, 14, 25, 14, B);
            box(10, 14, 3, 14, BS);
            for (const p of [-10, -4, 2, 8]) {
              box(p, 5, 4, 5, 2); // the arcade
              box(p + 1, 6, 2, 1, 2);
              box(p - 1, 6, 1, 6, W); // its piers' white stone
            }
            box(-12, 7, 25, 1, W);
            for (const p of [-8, -1, 6]) {
              box(p - 1, 13, 5, 5, W); // the three-light windows
              for (const q of [0, 1.5, 3]) box(p + Math.round(q), 12, 1, 3, 2);
              box(p - 1, 8, 5, 1, W);
            }
            box(-12, 15, 25, 1, BS);
            for (let p = -12; p <= 10; p += 4) {
              box(p, 16, 3, 2, p > 6 ? BS : B); // the swallowtail merlons
              for (const q of [p, p + 2]) box(q, 17, 1, 1, p > 6 ? BS : B);
            }
            break;
          }
          case "loggiaLionello": {
            // Loggia del Lionello, Udine: the Venetian Gothic town hall in bands of pink and white stone, its
            // ground-floor arcade of pointed arches, the traceried windows above, the corner balcony and the roof.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const pink = [224, 170, 160],
              st = [240, 232, 222],
              K = P(pink),
              W = P(st),
              R = P([150, 100, 90]);
            box(-12, 15, 25, 15, W);
            for (let y = 9; y <= 15; y += 2) box(-12, y, 25, 1, K); // the banded stone
            box(-12, 1, 25, 1, P(st, 0.2));
            for (let p = -11; p <= 9; p += 4) {
              box(p, 6, 3, 5, 2); // the pointed arches
              box(p + 1, 7, 1, 1, 2);
              box(p + 3, 8, 1, 8, W);
            }
            box(-12, 8, 25, 1, P(st, -0.3));
            for (const p of [-7, 0, 7]) {
              box(p - 1, 13, 3, 4, P(st, -0.3)); // the Gothic windows
              box(p - 1, 12, 1, 3, 2);
              box(p + 1, 12, 1, 3, 2);
              box(p, 13, 1, 1, 2);
            }
            box(10, 15, 3, 15, "rgba(24, 20, 48, 0.18)");
            box(-13, 16, 27, 1, W);
            for (let j = 0; j < 3; j++)
              box(-12 + j, 17 + j, 25 - 2 * j, 1, j % 2 ? R : P([150, 100, 90], 0.2)); // the roof
            break;
          }
          case "santAndreaVercelli": {
            // Basilica of Sant'Andrea, Vercelli: the front of green-grey serpentine and pale stone between two
            // slender square towers with their little loggias and spires, the gallery of small arches, the rose
            // window and the three portals, and the octagonal crossing tower with its spire behind.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const gs = [150, 160, 150],
              st = [228, 214, 190],
              brick = [188, 110, 86],
              G = P(gs),
              GS = P(gs, 0.25),
              S = P(st),
              B = P(brick),
              BS = P(brick, 0.28);
            box(-4, 30, 9, 8, B); // the crossing tower
            box(3, 30, 2, 8, BS);
            for (const p of [-2, 0, 2]) box(p, 28, 1, 3, 2);
            box(-5, 31, 11, 1, S);
            cone(0, 31, 3, 7, B);
            box(0, 40, 1, 2, 8);
            box(-6, 19, 13, 19, G); // the front
            for (let y = 3; y < 19; y += 4) box(-6, y, 13, 1, S);
            for (let j = 0; j < 5; j++) {
              const k = Math.round(6 * (1 - j / 5));
              box(-k, 20 + j, 2 * k + 1, 1, G);
            }
            for (let p = -5; p <= 5; p += 2) box(p, 17, 1, 2, 2); // the gallery
            box(-6, 15, 13, 1, S);
            orb(0, 12, 2, S); // the rose window
            orb(0, 12, 1, 2);
            for (const p of [-4, 0, 4]) {
              const k = p ? 0 : 1;
              box(p - k - 1, 7, 2 * k + 3, 6, S);
              box(p - k, 6, 2 * k + 1, 5, 2);
            }
            box(4, 18, 3, 18, "rgba(24, 20, 48, 0.15)");
            for (const s of [-1, 1]) {
              const px = s * 8;
              box(px - 1, 30, 3, 30, s > 0 ? GS : G); // the towers
              for (let y = 4; y < 30; y += 5) box(px - 1, y, 3, 1, S);
              box(px, 28, 1, 3, 2); // their loggias
              box(px, 22, 1, 2, 2);
              box(px - 2, 31, 5, 1, S);
              cone(px, 31, 1, 6, B);
              box(px, 39, 1, 2, 8);
            }
            break;
          }
          case "campanileBernascone": {
            // San Vittore's bell tower, Varese, by Giuseppe Bernasconi: the tall square stone shaft with its
            // rusticated base, pilasters and clock, the open belfry, then the baroque octagonal storey with its
            // columns and the cupola and lantern on top.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const st = [212, 198, 172],
              S = P(st),
              SS = P(st, 0.28),
              SL = P(st, -0.3);
            box(-4, 8, 9, 8, S); // the rusticated base
            for (let y = 2; y < 8; y += 2) box(-4, y, 9, 1, SS);
            box(-3, 44, 7, 36, S);
            box(3, 44, 1, 36, SS);
            for (const p of [-3, 2]) box(p, 43, 1, 34, p > 0 ? SS : SL); // the pilasters
            for (const y of [16, 24, 32]) box(0, y, 1, 3, 2);
            for (const y of [20, 28, 36]) box(-3, y, 7, 1, SL);
            orb(0, 40, 2, P([240, 234, 220])); // the clock
            box(0, 41, 1, 2, 2);
            box(-4, 45, 9, 1, SL);
            box(-3, 51, 7, 6, S); // the belfry
            for (const p of [-1, 1]) box(p, 50, 1, 4, 2);
            box(0, 48, 1, 1, 12);
            box(3, 51, 1, 6, SS);
            box(-4, 52, 9, 1, SL);
            box(-2, 57, 5, 5, S); // the octagonal storey
            for (const p of [-2, 2]) box(p, 57, 1, 5, p > 0 ? SS : SL);
            box(0, 56, 1, 3, 2);
            box(-3, 58, 7, 1, SL);
            dome(0, 58, 2.5, S); // the cupola and lantern
            box(1, 60, 1, 2, SS);
            box(-1, 62, 3, 1, SL);
            box(0, 63, 1, 1, S);
            box(0, 66, 1, 3, 8);
            break;
          }
          case "duomoTeramo": {
            // Teramo Cathedral: the stone front crowned with Guelph merlons, the Gothic portal of Deodato di
            // Cosma with its gable and little columns, the rose window, and the campanile on the right whose
            // brick octagonal belfry carries a pointed spire.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const st = [204, 192, 170],
              brick = [176, 110, 84],
              S = P(st),
              SS = P(st, 0.25),
              SL = P(st, -0.35),
              B = P(brick);
            box(-10, 18, 16, 18, S);
            box(-10, 1, 16, 1, SS);
            for (let p = -10; p <= 5; p += 2) box(p, 20, 1, 2, S); // the Guelph merlons
            box(-10, 19, 16, 1, SS);
            for (const p of [-10, 5]) box(p, 18, 1, 18, p > 0 ? SS : SL);
            orb(-2, 14, 2, SL); // the rose window
            orb(-2, 14, 1, 2);
            box(-5, 10, 7, 10, SL); // the portal
            cone(-2, 10, 3, 4, SL);
            box(-4, 9, 5, 8, P(st, 0.35));
            box(-3, 8, 3, 7, 2);
            box(-2, 9, 1, 1, 2);
            for (const p of [-8, 4]) box(p, 7, 1, 3, 2);
            // the campanile
            box(6, 28, 5, 28, S);
            box(10, 28, 1, 28, SS);
            for (const y of [9, 16, 23]) box(8, y, 1, 2, 2);
            for (const y of [12, 20]) box(6, y, 5, 1, SL);
            orb(8, 25, 1, P([238, 232, 218]));
            box(5, 29, 7, 1, SL);
            box(7, 35, 3, 6, B); // the brick octagon
            box(9, 35, 1, 6, P(brick, 0.3));
            box(8, 34, 1, 3, 2);
            cone(8, 35, 2, 6, B);
            box(8, 43, 1, 2, 8);
            break;
          }
          case "lanciaLuce": {
            // Lancia di Luce, Terni: Arnaldo Pomodoro's steel obelisk for the city of steel, a tall slender
            // blade tapering to a point, split by a carved, glowing seam, on its low stepped base.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const steel = [160, 150, 138],
              S = P(steel),
              SL = P(steel, -0.35),
              SS = P(steel, 0.35),
              gl = P([236, 190, 110]);
            box(-6, 1, 13, 1, P([170, 166, 160], 0.2));
            box(-5, 2, 11, 1, P([200, 196, 190]));
            for (let j = 0; j < 38; j++) {
              const k = Math.max(0, Math.round(3 * (1 - j / 38) ** 0.8));
              box(-k, 3 + j, 2 * k + 1, 1, S);
              if (k > 0) {
                box(-k, 3 + j, 1, 1, SL);
                box(k, 3 + j, 1, 1, SS);
              }
              if (j % 3 !== 2 && k > 1) box(j % 6 < 3 ? 0 : -1 + (k > 2 ? 0 : 1), 3 + j, 1, 1, gl); // the seam
            }
            box(0, 43, 1, 2, SL);
            break;
          }
          case "duomoTerni": {
            // Terni Cathedral: the long portico of round arches on pillars in front, the Baroque upper front with
            // its windows and pediment and statues, and the bell tower with its clock on the right.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const st = [222, 210, 186],
              S = P(st),
              SS = P(st, 0.25),
              SL = P(st, -0.35);
            // the bell tower
            box(7, 27, 5, 27, S);
            box(11, 27, 1, 27, SS);
            orb(9, 19, 1, P([240, 234, 220])); // the clock
            box(7, 15, 5, 1, SL);
            box(8, 25, 3, 4, 2);
            box(6, 28, 7, 1, SL);
            box(8, 30, 3, 2, S);
            dome(9, 30, 1.5, SS);
            box(9, 33, 1, 2, 8);
            // the upper front
            box(-7, 15, 15, 7, S);
            for (const p of [-5, 5]) box(p, 14, 1, 3, 2);
            for (const p of [-2, 2]) box(p, 14, 1, 3, 2);
            box(-1, 13, 3, 1, SL);
            box(-8, 16, 17, 1, SL);
            cone(0, 16, 5, 3, S);
            box(0, 18, 1, 1, SL);
            for (const p of [-7, 0, 7]) box(p, 21, 1, 2, SS); // statues
            // the portico
            box(-11, 8, 23, 8, S);
            box(-11, 8, 23, 1, SL);
            box(-11, 1, 23, 1, SS);
            for (let p = -10; p <= 9; p += 3) {
              box(p, 6, 2, 5, 2);
              box(p, 6, 2, 1, P(st, 0.5));
            }
            box(10, 8, 2, 8, SS);
            break;
          }
          case "buonconsiglio": {
            // Castello del Buonconsiglio, Trento: the great round Torre d'Augusto on the left with its crenels,
            // the long battlemented walls of the Castelvecchio with rows of windows and the Venetian Gothic loggia
            // high up, and the lower Magno Palazzo stretching to the right.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const st = [204, 194, 172],
              S = P(st),
              SS = P(st, 0.26),
              SL = P(st, -0.3),
              R = P([150, 100, 86]);
            box(5, 11, 10, 11, S); // the Magno Palazzo
            box(5, 12, 10, 1, SL);
            for (let j = 0; j < 2; j++) box(5 + j, 13 + j, 10 - 2 * j, 1, R);
            for (let p = 6; p <= 13; p += 2) for (const y of [5, 9]) box(p, y, 1, 2, 2);
            box(14, 11, 1, 11, SS);
            box(-8, 15, 14, 15, S); // the Castelvecchio
            box(-8, 15, 14, 1, SL);
            for (let p = -8; p <= 5; p += 2) box(p, 17, 1, 2, S); // swallowtail merlons
            for (let p = -6; p <= 4; p += 3) {
              box(p, 6, 1, 2, 2);
              box(p, 10, 1, 2, 2);
            }
            box(-2, 13, 6, 2, SL); // the loggia
            for (const p of [-2, 0, 2]) box(p, 13, 1, 1, 2);
            box(-8, 2, 14, 2, SS); // the scarp
            // the Torre d'Augusto
            box(-14, 22, 7, 22, S);
            box(-13, 23, 5, 1, S);
            box(-14, 22, 1, 22, SL);
            box(-9, 22, 2, 22, SS);
            for (const y of [8, 14]) box(-11, y, 1, 2, 2);
            box(-15, 22, 9, 1, SL);
            for (let p = -15; p <= -7; p += 2) box(p, 24, 1, 2, p > -10 ? SS : S);
            box(-11, 28, 1, 4, 8); // the flag
            box(-10, 28, 2, 2, 10);
            break;
          }
          case "torreLigny": {
            // Torre di Ligny, Trapani: the squat square watchtower of golden tufa on the tip of the town, its
            // battered base, the corner bartizans curling out at the top, a few small windows and the door.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const st = [214, 184, 132],
              S = P(st),
              SS = P(st, 0.26),
              SL = P(st, -0.3),
              SW = P([224, 214, 196]);
            box(-6, 3, 13, 3, SS); // the battered base
            box(-5, 16, 11, 13, SW); // the rubble wall
            for (const p of [-5, 5]) box(p, 16, 1, 16, p > 0 ? SS : S); // the dressed quoins
            box(3, 16, 2, 13, "rgba(24, 20, 48, 0.12)");
            box(0, 13, 1, 2, 2);
            box(-1, 6, 2, 4, 2); // the door
            box(-6, 17, 13, 1, SL);
            for (const s of [-1, 1]) {
              box(s * 6 - (s < 0 ? 1 : 0), 19, 2, 2, s > 0 ? SS : S); // the bartizans
              box(s * 6, 17, 1, 1, S);
            }
            box(-5, 18, 11, 1, S);
            break;
          }
          case "duomoTrapani": {
            // San Lorenzo Cathedral, Trapani: the Baroque front with its deep porch of three arches between
            // pilasters, the balustrade and the upper storey, the bell tower with its little cupola, and the
            // green-tiled dome behind.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const st = [210, 168, 116],
              S = P(st),
              SS = P(st, 0.26),
              SL = P(st, -0.3),
              V = P([96, 150, 120]);
            box(2, 22, 7, 3, S); // the dome's drum
            dome(5, 22, 4, V);
            box(7, 25, 1, 2, P([96, 150, 120], 0.3));
            box(4, 28, 3, 2, S);
            box(5, 30, 1, 2, 8);
            // the bell tower
            box(-9, 25, 5, 25, S);
            box(-9, 25, 1, 25, SL);
            box(-8, 23, 3, 4, 2);
            box(-7, 21, 1, 1, 12);
            box(-10, 26, 7, 1, SL);
            dome(-7, 26, 2, S);
            box(-7, 30, 1, 2, 8);
            // the front
            box(-6, 12, 15, 12, S);
            box(-6, 1, 15, 1, SS);
            for (const p of [-4, 1, 6]) {
              box(p - 1, 9, 3, 8, 2); // the porch arches
              box(p, 10, 1, 1, 2);
            }
            for (const p of [-6, -2, 3, 8]) box(p, 11, 1, 10, p > 4 ? SS : SL);
            box(-7, 13, 17, 1, SL);
            for (let p = -6; p <= 8; p += 2) box(p, 14, 1, 1, S); // the balustrade
            box(-3, 20, 9, 6, S); // the upper storey
            box(0, 18, 3, 3, 2);
            box(-3, 20, 9, 1, SL);
            cone(1, 20, 4, 2, S);
            box(5, 20, 1, 6, SS);
            box(8, 12, 1, 12, SS);
            break;
          }
          case "priamar": {
            // Priamar Fortress, Savona: the low Genoese citadel on its rock above the sea, the sloping brick
            // and stone bastion walls with their sharp corners and sentry box, the arched gate, and the palace
            // blocks (Palazzo della Sibilla) on top.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const st = [182, 158, 132],
              S = P(st),
              SS = P(st, 0.26),
              SL = P(st, -0.25),
              pal = [226, 196, 150];
            box(-10, 16, 12, 6, P(pal)); // the palace blocks on top
            for (let p = -9; p <= 0; p += 2) box(p, 14, 1, 2, 2);
            box(-10, 17, 12, 1, P([150, 100, 86]));
            box(3, 13, 7, 3, P(pal, 0.15));
            for (let j = 0; j < 10; j++) {
              const l = -16 + Math.round(j * 0.35),
                r = 16 - Math.round(j * 0.35);
              box(l, 1 + j, r - l + 1, 1, S); // the battered bastion walls
              box(r - 3, 1 + j, 4, 1, SS);
              box(l, 1 + j, 1, 1, SL);
            }
            box(-13, 11, 27, 1, SL); // the cordon
            box(-4, 11, 1, 10, SS); // a bastion's salient corner
            box(-2, 6, 3, 5, P(st, -0.15)); // the gate
            box(-1, 5, 1, 4, 2);
            box(12, 13, 2, 2, S); // the sentry box
            box(12, 14, 2, 1, SS);
            break;
          }
          case "torrePancaldo": {
            // The Torretta (Torre Leon Pancaldo), Savona: the square stone tower on the harbour, its Madonna
            // niche and plaque, the clock under the projecting crown of corbels and merlons, and the little
            // top storey with the flagpole.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const st = [218, 210, 192],
              S = P(st),
              SS = P(st, 0.25),
              SL = P(st, -0.3);
            box(-3, 19, 7, 19, S);
            box(2, 19, 2, 19, SS);
            box(-3, 19, 1, 19, SL);
            box(-1, 9, 2, 4, P([196, 186, 170])); // the Madonna's niche
            box(0, 8, 1, 2, P([120, 150, 190]));
            orb(0, 16, 1.5, P([240, 236, 226])); // the clock
            box(0, 16, 1, 1, 2);
            for (let p = -4; p <= 4; p += 2) box(p, 20, 1, 1, SL); // corbels
            box(-4, 22, 9, 2, S);
            box(3, 22, 2, 2, SS);
            for (let p = -4; p <= 4; p += 2) box(p, 23, 1, 1, S);
            box(-1, 25, 3, 3, S); // the top storey
            box(0, 24, 1, 1, 2);
            box(0, 29, 1, 3, 8);
            box(1, 29, 2, 1, 10);
            break;
          }
          case "palazzoPapi": {
            // Palazzo dei Papi, Viterbo: the grey peperino palace on its rock with Guelph merlons, the great
            // outside stair, and the Gothic loggia of slender twin columns and interlaced pointed arches beside it.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const st = [168, 160, 148],
              S = P(st),
              SS = P(st, 0.26),
              SL = P(st, -0.3);
            box(-14, 4, 29, 4, SS); // the rock base
            box(-14, 4, 29, 1, S);
            box(-13, 16, 14, 12, S); // the palace
            box(-13, 16, 14, 1, SL);
            for (let p = -13; p <= 0; p += 2) box(p, 18, 1, 2, S); // merlons
            for (const p of [-10, -6, -2]) {
              box(p, 13, 2, 3, 2); // twin-light windows
              box(p, 12, 2, 1, SL);
              box(p, 7, 1, 2, 2);
            }
            for (let s = 0; s < 6; s++) box(-14 + s, 5 + s, 2, 1, SL); // the outside stair
            // the loggia
            box(2, 13, 13, 9, S);
            box(2, 13, 13, 1, SL);
            for (let p = 3; p <= 13; p += 2) {
              box(p, 11, 1, 6, 2); // the arches between the slim columns
              box(p, 12, 1, 1, SS);
            }
            for (let p = 4; p <= 12; p += 2) box(p, 11, 1, 1, SL); // the interlaced tracery
            box(2, 5, 13, 1, SL);
            for (let p = 2; p <= 14; p += 2) box(p, 15, 1, 2, S);
            box(14, 13, 1, 9, SS);
            break;
          }
          case "aragoneseTaranto": {
            // Aragonese Castle, Taranto: the long low sea fortress, its curtain walls sloping into the water,
            // the squat round drum towers with their cordons and the flat battlemented tops.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const st = [206, 186, 150],
              S = P(st),
              SS = P(st, 0.26),
              SL = P(st, -0.28);
            box(-17, 8, 35, 8, S); // the curtain walls
            box(-18, 2, 37, 2, SS); // the scarp in the water
            box(-17, 5, 35, 1, SL);
            for (let p = -14; p <= 14; p += 2) box(p, 9, 1, 1, S);
            box(5, 5, 2, 3, P(st, 0.4)); // the gate
            for (const cx of [-13, 0, 13]) {
              const hw = cx ? 5 : 4;
              box(cx - hw - 1, 3, 2 * hw + 3, 3, SS); // the flared foot of the drum towers
              box(cx - hw, 10, 2 * hw + 1, 7, S);
              box(cx - hw + 1, 11, 2 * hw - 1, 1, S); // rounded shoulders
              box(cx - hw, 10, 1, 7, SL);
              box(cx + hw - 1, 10, 2, 7, SS);
              box(cx - hw, 6, 2 * hw + 1, 1, SL); // the cordon
              for (const p of [-2, 2]) box(cx + p, 9, 1, 1, 2); // gun ports
            }
            box(-1, 15, 1, 4, 8);
            box(0, 15, 2, 1, 10);
            break;
          }
          case "collegiataSondrio": {
            // Collegiata dei Santi Gervasio e Protasio, Sondrio: the pale yellow neoclassical front with giant
            // pilasters on a grey base, the thermal (half-moon) window under the pediment, the arched door, and
            // the tall campanile beside it with its belfry and little cupola.
            const P = (rgb, k = 0) =>
              css(e.sh(k < 0 ? mixc(rgb, [255, 248, 225], -k) : mixc(rgb, [41, 40, 54], k)));
            const ye = [226, 210, 160],
              gr = [176, 172, 164],
              Y = P(ye),
              YS = P(ye, 0.24),
              YL = P(ye, -0.35);
            // the campanile
            box(8, 30, 5, 30, Y);
            box(12, 30, 1, 30, YS);
            for (const y of [12, 18, 24]) box(10, y, 1, 2, 2);
            box(7, 31, 7, 1, YL);
            box(8, 36, 5, 5, Y);
            box(9, 35, 3, 3, 2);
            box(10, 33, 1, 1, 12);
            box(12, 36, 1, 5, YS);
            box(7, 37, 7, 1, YL);
            dome(10, 37, 2, P(gr));
            box(10, 41, 1, 2, 8);
            // the front
            box(-8, 18, 15, 18, Y);
            box(-8, 4, 15, 4, P(gr)); // the grey base
            for (const p of [-8, -6, 4, 6]) box(p, 17, 1, 13, p > 0 ? YS : YL); // the giant pilasters
            box(-9, 19, 17, 2, YL); // the entablature
            cone(-1, 19, 8, 5, Y); // the pediment
            cone(-1, 19, 5, 3, YS);
            dome(-1, 13, 3, YL); // the thermal window
            dome(-1, 13, 2, 2);
            for (const p of [-2, 0]) box(p, 15, 1, 2, YL);
            box(-2, 9, 3, 6, YL);
            box(-1, 8, 1, 5, 2); // the door
            box(7, 18, 1, 18, YS);
            break;
          }
