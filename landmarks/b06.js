          case "templeConcordia": {
            // Temple of Concordia (Agrigento): a Doric temple of golden limestone seen from a corner, the
            // six-column front under its pediment on the left and the thirteen-column flank receding to the
            // right, on a three-step base, with the dark cella wall showing between the columns.
            const st = [218, 172, 108],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            box(-21, 1, 43, 1, K(0.3));
            box(-21, 2, 42, 1, K(0));
            box(-20, 3, 41, 1, K(-0.25));
            box(-19, 15, 15, 12, K(0.45)); // the front's shadowed pronaos
            box(-4, 15, 24, 12, K(0.55)); // the cella wall behind the flank
            for (let i = 0; i < 6; i++) {
              const p = -19 + 3 * i;
              box(p, 15, 2, 12, K(0));
              box(p, 15, 1, 12, K(-0.25));
              box(p - 1, 16, 4, 1, K(-0.1)); // the echinus
            }
            for (let i = 0; i < 12; i++) {
              const p = -3 + 2 * i;
              box(p, 15, 1, 12, K(0.12));
              box(p, 16, 2, 1, K(0.05));
            }
            box(-20, 18, 41, 2, K(0)); // the architrave
            box(-20, 18, 41, 1, K(-0.2));
            for (let p = -19; p <= 19; p += 2) box(p, 19, 1, 1, K(0.4)); // triglyphs
            box(-21, 20, 43, 1, K(-0.3)); // the cornice
            box(-4, 20, 25, 1, K(0.05));
            for (let j = 0; j < 4; j++) {
              const k = Math.round(9 * (1 - j / 4)); // the pediment: lit raking cornice round a shaded tympanum
              box(-12 - k, 21 + j, 2 * k + 1, 1, K(-0.2));
              if (k > 2 && j < 3) box(-10 - k, 21 + j, 2 * k - 3, 1, K(0.2));
            }
            box(-4, 21, 25, 1, K(0.25)); // the flank's roof edge
            break;
          }
          case "alessandriaCathedral": {
            // Alessandria Cathedral: the neoclassical front of two storeys of columns under a pediment with
            // statues on its top, and behind it on the right the tall bell tower, its belfry stages narrowing
            // to an octagonal drum and a dark stone spire.
            const st = [228, 210, 180],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k))),
              tw = [214, 196, 168],
              T = (k) => css(e.sh(k > 0 ? mixc(tw, [41, 40, 54], k) : mixc(tw, [255, 248, 225], -k))),
              slate = css(e.sh([96, 98, 108]));
            // the bell tower
            box(4, 36, 5, 36, T(0));
            box(8, 36, 1, 36, T(0.3));
            for (const r of [12, 20, 28]) box(4, r, 5, 1, T(-0.3));
            box(5, 33, 3, 3, 2);
            box(6, 34, 1, 1, T(0));
            box(3, 37, 7, 1, T(-0.3));
            box(4, 41, 5, 4, T(0.1));
            box(5, 40, 1, 3, 2);
            box(7, 40, 1, 3, 2);
            box(5, 43, 3, 2, T(0));
            box(6, 42, 1, 1, 2);
            box(4, 44, 5, 1, T(-0.3));
            for (const s of [4, 8]) box(s, 45, 1, 1, T(0));
            cone(6, 44, 2, 11, slate);
            box(6, 57, 1, 2, 3);
            // the church roof behind the front
            box(-8, 23, 12, 2, css(e.sh([174, 98, 74])));
            // the front: lower order of six columns
            box(-9, 12, 14, 12, K(0.05));
            box(-9, 2, 14, 2, K(0.3));
            for (const p of [-8, -6, -2, 0, 2, 4]) {
              box(p, 11, 1, 9, K(-0.25));
              box(p, 12, 1, 1, K(-0.4));
            }
            box(-4, 7, 2, 5, css(e.sh([150, 96, 70]))); // the door
            box(-5, 10, 4, 1, K(0.4)); // a round window above
            box(-4, 10, 2, 1, 2);
            box(-10, 14, 16, 2, K(-0.2));
            box(-10, 14, 16, 1, K(-0.4));
            // upper order and pediment
            box(-8, 21, 12, 7, K(0));
            for (const p of [-7, -5, 1, 3]) box(p, 20, 1, 6, K(-0.25));
            box(-3, 19, 3, 4, K(0.25));
            box(-9, 22, 14, 1, K(-0.3));
            cone(-2, 22, 7, 3, K(-0.1));
            cone(-2, 22, 5, 1, K(0.15));
            for (const [p, r] of [
              [-9, 25],
              [-2, 28],
              [5, 25],
              [-5, 27],
              [1, 27],
            ]) {
              box(p, r, 1, 2, K(-0.2));
              box(p, r + 1, 1, 1, K(0.15));
            }
            break;
          }
          case "alessandriaCitadel": {
            // The Citadel of Alessandria: one of the long brick barracks inside the star fort, two storeys of
            // small windows between shallow buttresses, tall arched doorways and a low hipped tile roof.
            const br = [178, 104, 80],
              K = (k) => css(e.sh(k > 0 ? mixc(br, [41, 40, 54], k) : mixc(br, [255, 248, 225], -k))),
              roof = css(e.sh([150, 86, 70]));
            box(-15, 8, 31, 8, K(0));
            box(-15, 1, 31, 1, K(0.3));
            box(-14, 9, 29, 1, roof);
            box(-12, 10, 25, 1, css(e.sh(mixc([150, 86, 70], [41, 40, 54], 0.25))));
            for (let p = -15; p <= 15; p += 3) box(p, 8, 1, 7, K(-0.2)); // buttresses
            for (let p = -13; p <= 14; p += 3) {
              box(p, 7, 1, 2, 2);
              if (p < 6) box(p, 4, 1, 2, 2);
            }
            for (const p of [7, 10, 13]) {
              box(p, 5, 2, 4, K(0.4));
              dome(p + 1, 5, 1, K(0.4));
              box(p, 4, 2, 3, 2);
            }
            box(-15, 8, 31, 1, K(-0.25));
            box(15, 8, 1, 8, K(0.3));
            break;
          }
          case "sanCiriaco": {
            // Ancona Cathedral (San Ciriaco), on its hill over the port: the pale stone Greek-cross church
            // with its gabled front and the porch of the Gothic portal, red tiled roofs, the twelve-sided drum
            // and lead dome in the middle, and the bell tower with its red cupola on the right.
            const st = [216, 206, 184],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k))),
              tile = css(e.sh([190, 96, 70])),
              tileD = css(e.sh([150, 74, 58])),
              lead = [98, 102, 108];
            // the drum and dome
            box(-3, 21, 7, 4, K(0.1));
            for (const p of [-2, 0, 2]) box(p, 20, 1, 2, 2);
            box(-3, 21, 7, 1, K(-0.3));
            dome(0.5, 21, 4, css(e.sh(lead)));
            box(1, 25, 1, 3, css(e.sh(mixc(lead, [41, 40, 54], 0.3))));
            box(0, 26, 1, 2, css(e.sh(mixc(lead, [255, 248, 225], 0.3))));
            box(0, 27, 1, 2, 3);
            // the transept arms and roofs
            box(-11, 13, 22, 13, K(0));
            box(-11, 15, 22, 2, tile);
            box(-9, 16, 18, 1, tileD);
            box(7, 13, 4, 13, K(0.3));
            for (const p of [-9, 8]) box(p, 9, 1, 3, 2);
            // the gabled front with the rose window and the porch
            box(-5, 16, 11, 16, K(-0.15));
            cone(0, 16, 6, 4, tile);
            cone(0, 15, 5, 4, K(-0.15));
            orb(0.5, 13, 1, 2);
            box(-3, 8, 7, 8, K(0.05)); // the porch
            cone(0, 8, 3, 2, K(-0.3));
            box(-2, 6, 5, 6, css(e.sh([200, 120, 110])));
            box(-1, 5, 3, 5, 2);
            dome(0.5, 5, 1.5, 2);
            box(-6, 1, 13, 1, K(0.35)); // the steps
            // the bell tower
            box(12, 13, 4, 13, K(0.05));
            box(15, 13, 1, 13, K(0.3));
            box(13, 10, 1, 2, 2);
            box(13, 6, 1, 2, 2);
            box(11, 14, 6, 1, K(-0.3));
            dome(14, 14, 2.5, tile);
            box(14, 17, 1, 1, 3);
            break;
          }
          case "trajanAncona": {
            // Arch of Trajan, Ancona: a tall slender marble arch on a high podium and steps, two fluted
            // Corinthian columns on plinths at each side, an entablature and the attic with its inscription.
            const st = [232, 224, 208],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            box(-7, 2, 15, 2, K(0.25)); // the steps
            box(-6, 4, 13, 2, K(0.1));
            box(-6, 20, 13, 16, K(0.05));
            box(-2, 16, 5, 12, 2); // the passage
            dome(0.5, 16, 2.5, 2);
            box(-3, 18, 1, 13, K(0.3));
            for (const p of [-6, -4, 4, 6]) {
              box(p, 7, 1, 3, K(-0.2)); // plinth
              box(p, 19, 1, 12, K(-0.3)); // column
              box(p, 20, 1, 1, K(-0.45)); // capital
            }
            box(6, 19, 1, 15, K(0.25));
            box(-7, 22, 15, 2, K(-0.2)); // the entablature
            box(-7, 21, 15, 1, K(0.15));
            box(-6, 26, 13, 4, K(0)); // the attic
            box(-3, 25, 7, 2, K(0.2));
            for (const p of [-6, 6]) box(p, 26, 1, 4, K(-0.25));
            box(-7, 27, 15, 1, K(-0.3));
            break;
          }
          case "castelDelMonte": {
            // Castel del Monte (Andria): Frederick II's octagon of pale limestone, its front wall between two
            // big octagonal corner towers (lit and shaded faces), two more towers peeping out at the sides,
            // the pink breccia portal with its pediment, the mullioned window above and the double stair.
            const st = [222, 210, 184],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k))),
              pink = [200, 152, 140];
            const tower = (l, h, w) => {
              const f = Math.max(1, Math.round(w / 4));
              box(l, h, w, h, K(0));
              box(l, h, f, h, K(-0.25));
              box(l + w - f, h, f, h, K(0.3));
              box(l, Math.round(h * 0.55), w, 1, K(0.15)); // the string course
              box(l, h, w, 1, K(-0.3));
            };
            tower(-14, 14, 4);
            tower(11, 14, 4);
            box(-5, 15, 11, 15, K(0.05));
            box(-5, 8, 11, 1, K(0.15));
            for (const p of [-4, 4]) {
              box(p, 13, 1, 3, K(0.25)); // blind arches
              box(p, 6, 1, 4, K(0.25));
            }
            tower(-11, 18, 6);
            tower(6, 18, 6);
            // the portal
            box(-2, 9, 5, 8, css(e.sh(pink)));
            cone(0, 9, 3, 2, css(e.sh(mixc(pink, [255, 248, 225], 0.2))));
            box(-2, 9, 5, 1, css(e.sh(mixc(pink, [41, 40, 54], 0.2))));
            box(-1, 6, 3, 5, 2);
            dome(0.5, 6, 1.5, 2);
            box(-1, 14, 3, 2, K(-0.2)); // the mullioned window
            box(-1, 13, 1, 1, 2);
            box(1, 13, 1, 1, 2);
            box(-4, 2, 9, 2, K(-0.1)); // the stair
            box(-3, 1, 7, 1, K(0.25));
            break;
          }
          case "augustusAosta": {
            // Arch of Augustus, Aosta: a squat grey stone arch with one wide round-headed passage, engaged
            // Corinthian half-columns at the corners and beside the arch, a heavy cornice and the low slate
            // roof added in the 18th century.
            const st = [156, 146, 132],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            box(-10, 17, 21, 17, K(0));
            box(-10, 4, 21, 4, K(0.15)); // the plinth
            box(-10, 4, 21, 1, K(-0.2));
            dome(0.5, 11, 5.5, K(-0.15)); // the voussoirs round the passage
            dome(0.5, 10, 4.5, 2);
            box(-4, 10, 9, 10, 2);
            for (const p of [-10, -7, 7, 10]) {
              box(p, 15, 1, 11, K(-0.2));
              box(p, 15, 1, 1, K(-0.35));
            }
            box(10, 17, 1, 17, K(0.3));
            box(-11, 18, 23, 2, K(-0.25)); // the cornice
            box(-11, 17, 23, 1, K(0.1));
            box(-10, 19, 21, 1, css(e.sh([96, 98, 106]))); // the slate roof
            box(-8, 20, 17, 1, css(e.sh([84, 86, 96])));
            box(0, 22, 1, 2, 2); // the flag
            box(1, 22, 2, 1, 10);
            break;
          }
          case "arezzoCathedral": {
            // Arezzo Cathedral: the Gothic church of golden sandstone seen from the corner, its gabled front with
            // the rose window and the long flank with tall lancet windows under a corbel frieze, and the 19th
            // century bell tower behind it with its clock and slender brick spire.
            const st = [206, 182, 138],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k))),
              brick = [196, 116, 84];
            // the tower
            box(5, 34, 5, 16, K(0.1));
            box(9, 34, 1, 16, K(0.35));
            box(6, 31, 3, 3, 2);
            box(7, 31, 1, 1, 12);
            orb(7.5, 26, 1, 6);
            box(4, 35, 7, 1, K(-0.25));
            cone(7, 35, 2, 13, css(e.sh(brick)));
            box(7, 50, 1, 2, 3);
            // the flank
            box(-3, 19, 13, 19, K(0.25));
            for (let p = -2; p <= 9; p += 2) box(p, 20, 1, 1, K(0.1)); // corbel frieze
            box(-3, 20, 13, 1, K(0.1));
            for (const p of [0, 4, 8]) {
              box(p, 14, 1, 6, 2);
              box(p, 15, 1, 1, K(0.1));
            }
            box(1, 8, 2, 4, K(0)); // the side portal
            box(1, 7, 2, 4, 2);
            // the front
            box(-10, 22, 8, 22, K(0));
            box(-10, 22, 1, 22, K(-0.2));
            cone(-6, 22, 4, 5, K(0));
            cone(-6, 22, 2, 3, K(-0.15));
            box(-6, 29, 1, 2, 2); // the cross
            orb(-5.5, 19, 1.5, 2);
            orb(-5.5, 19, 0.6, K(-0.2));
            box(-7, 8, 3, 7, 2); // the portal under its gable
            dome(-5.5, 8, 1.5, 2);
            cone(-6, 9, 2, 2, K(-0.25));
            for (const p of [-9, -3]) {
              box(p, 6, 1, 4, 2);
              box(p, 7, 1, 1, K(0.15));
            }
            box(-11, 2, 21, 2, K(0.35)); // the stairs
            break;
          }
          case "vasariLoggia": {
            // Logge Vasari (Arezzo), along the top of Piazza Grande: a long ground-floor portico of round arches
            // on stone piers, the shops behind, two storeys of windows above and the deep eaves of the roof.
            const st = [214, 202, 176],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            box(-14, 10, 28, 10, K(0));
            for (let i = 0; i < 9; i++) {
              const p = -13 + 3 * i;
              box(p, 4, 2, 4, 2);
              dome(p + 1, 4, 1, 2);
            }
            box(-14, 5, 28, 1, K(-0.25));
            for (let i = 0; i < 9; i++) {
              const p = -12 + 3 * i;
              box(p, 8, 1, 2, 2);
              box(p - 1, 6, 3, 1, K(-0.2));
            }
            box(-15, 11, 30, 1, css(e.sh([150, 86, 70]))); // the eaves
            box(-13, 12, 26, 1, css(e.sh([174, 100, 78])));
            box(13, 10, 1, 10, K(0.3));
            break;
          }
          case "capitaniAscoli": {
            // Palazzo dei Capitani del Popolo (Ascoli Piceno): the travertine palace on Piazza del Popolo with
            // its tower rising behind (clock, belfry openings and a battlemented top), the Renaissance portal,
            // a big clock on the front, rows of pedimented windows and the arcade at the right corner.
            const st = [214, 204, 180],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            // the tower
            box(-6, 28, 6, 28, K(0.05));
            box(-1, 28, 1, 28, K(0.3));
            for (const p of [-5, -3]) box(p, 26, 1, 3, 2);
            orb(-3.5, 21, 1.5, 6);
            box(-4, 21, 1, 1, 2);
            box(-7, 29, 8, 1, K(-0.25));
            for (const p of [-7, -5, -3, -1]) box(p, 30, 1, 1, K(-0.1));
            // the palace
            box(-12, 17, 25, 17, K(0));
            box(-12, 17, 25, 1, K(-0.3));
            box(12, 17, 1, 17, K(0.3));
            for (const r of [15, 11])
              for (let p = -10; p <= 10; p += 3)
                if (p !== -1 || r === 15) {
                  box(p, r, 1, 2, 2);
                  box(p - 1, r + 1, 3, 1, K(-0.2));
                }
            orb(-8.5, 9, 2, 6); // the big clock
            orb(-8.5, 9, 0.6, 2);
            box(-2, 8, 3, 8, K(-0.2)); // the portal
            box(-1, 6, 1, 6, 2);
            dome(-0.5, 6, 1, 2);
            for (const p of [6, 9]) {
              box(p, 5, 2, 5, 2); // the arcade
              dome(p + 1, 5, 1, 2);
            }
            box(-13, 1, 27, 1, K(0.3));
            break;
          }
          case "ascoliCathedral": {
            // Ascoli Piceno Cathedral (Sant'Emidio): the travertine Renaissance front with paired pilasters, a
            // pedimented portal between round-headed niches and a balustrade on top; the bell tower on the right
            // with its belfry and red pyramid; the little octagonal baptistery to the left.
            const st = [218, 210, 190],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            // the baptistery
            box(-10, 7, 4, 7, K(0.1));
            box(-10, 8, 4, 1, css(e.sh([178, 104, 80])));
            box(-9, 9, 2, 1, css(e.sh([178, 104, 80])));
            box(-9, 4, 1, 3, 2);
            // the tower
            box(4, 27, 5, 27, K(0.05));
            box(8, 27, 1, 27, K(0.3));
            box(5, 24, 3, 3, 2);
            box(6, 24, 1, 1, 12);
            box(5, 19, 3, 1, 2);
            box(3, 28, 7, 1, K(-0.25));
            for (const p of [3, 5, 7, 9]) box(p, 29, 1, 1, K(-0.1));
            cone(6, 28, 1, 4, css(e.sh([198, 112, 74])));
            box(6, 33, 1, 1, 3);
            // the front
            box(-6, 18, 11, 18, K(0));
            for (const p of [-6, -4, 2, 4]) box(p, 17, 1, 16, K(-0.2));
            box(-7, 18, 13, 1, K(-0.3));
            box(-7, 19, 13, 1, K(0.1));
            for (let p = -6; p <= 4; p += 2) box(p, 20, 1, 1, K(-0.1)); // the balustrade
            box(-3, 15, 5, 3, K(0.15)); // a window
            box(-2, 14, 3, 2, 2);
            box(-2, 7, 3, 7, 2); // the portal
            cone(-1, 8, 2, 2, K(-0.25));
            for (const p of [-5, 3]) {
              box(p, 5, 1, 4, 2);
              dome(p + 0.5, 5, 0.6, 2);
            }
            box(-7, 1, 13, 1, K(0.3));
            break;
          }
          case "torreTroyana": {
            // Torre Troyana (Asti): a tall red-brick civic tower, three-light windows in white-trimmed arches
            // up its shaft, a wider top on a corbel table with arched openings, a low roof and a copper lantern.
            const br = [184, 102, 76],
              K = (k) => css(e.sh(k > 0 ? mixc(br, [41, 40, 54], k) : mixc(br, [255, 248, 225], -k))),
              white = css(e.sh([236, 230, 218]));
            box(-2, 35, 5, 35, K(0));
            box(2, 35, 1, 35, K(0.3));
            for (const r of [26, 31]) {
              box(-1, r + 1, 3, 1, white);
              box(-1, r, 1, 2, 2);
              box(1, r, 1, 2, 2);
            }
            for (const r of [9, 17]) box(0, r, 1, 3, 2);
            for (const r of [22, 28, 33]) box(-2, r - 2, 5, 1, K(-0.2));
            box(-3, 36, 7, 1, white); // the corbel table
            box(-3, 40, 7, 4, K(0));
            box(3, 40, 1, 4, K(0.3));
            for (const p of [-2, 0, 2]) box(p, 39, 1, 2, 2);
            box(-3, 41, 7, 1, css(e.sh([70, 64, 70])));
            box(-1, 42, 3, 1, css(e.sh([120, 170, 140])));
            box(0, 44, 1, 2, 2);
            break;
          }
          case "astiCathedral": {
            // Asti Cathedral: the Gothic brick front with three gabled portals, two big rose windows and little
            // pinnacled turrets, white stone trim and banded brick flank, and the bell tower behind at the right.
            const br = [186, 100, 72],
              K = (k) => css(e.sh(k > 0 ? mixc(br, [41, 40, 54], k) : mixc(br, [255, 248, 225], -k))),
              white = css(e.sh([232, 226, 212]));
            // the tower
            box(6, 30, 4, 30, K(0.05));
            box(9, 30, 1, 30, K(0.35));
            box(7, 27, 1, 2, 2);
            box(7, 22, 1, 2, 2);
            box(5, 31, 6, 1, K(-0.2));
            // the flank
            box(-2, 18, 9, 18, K(0.3));
            for (let r = 3; r < 17; r += 3) box(-2, r, 9, 1, K(0.15));
            box(1, 15, 1, 7, 2);
            box(5, 15, 1, 7, 2);
            // the front
            box(-10, 20, 10, 20, K(0));
            cone(-5, 20, 5, 5, K(0));
            box(-10, 20, 1, 20, K(-0.2));
            for (const p of [-10, -1]) {
              box(p, 24, 1, 4, K(0.05)); // turrets
              box(p, 25, 1, 1, white);
            }
            box(-5, 27, 1, 2, K(-0.2));
            box(-5, 28, 1, 1, white);
            orb(-4.5, 16, 2, white); // the rose window
            orb(-4.5, 16, 1.2, 2);
            orb(-8, 13, 1, white);
            orb(-1, 13, 1, white);
            for (const [p, w] of [
              [-9, 2],
              [-6, 3],
              [-2, 2],
            ]) {
              cone(p + (w >> 1), 7, w >> 1, 2, white);
              box(p, 7, w, 6, 2);
            }
            box(-11, 1, 18, 1, K(0.35));
            break;
          }
          case "avellinoClock": {
            // Torre dell'Orologio (Avellino): a dark grey stone baroque tower, a wide base with pilasters and a
            // heavy cornice, a plain square shaft, corner urns, then the clock storey with its white face and
            // railing under a little pyramid roof.
            const st = [120, 114, 108],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            box(-4, 17, 9, 17, K(0));
            for (const p of [-4, -1, 2]) box(p, 16, 1, 15, K(-0.2));
            box(4, 17, 1, 17, K(0.3));
            box(-5, 18, 11, 1, K(-0.3));
            box(-3, 30, 7, 12, K(0.05));
            box(3, 30, 1, 12, K(0.3));
            box(-1, 28, 2, 5, K(0.15));
            box(-4, 31, 9, 1, K(-0.3));
            for (const p of [-4, 4]) box(p, 33, 1, 2, K(-0.1)); // urns
            box(-2, 38, 5, 7, K(0));
            box(2, 38, 1, 7, K(0.3));
            orb(0.5, 35, 1.6, css(e.sh([236, 232, 220])));
            box(0, 35, 1, 1, 2);
            box(-3, 33, 7, 1, K(-0.35)); // the railing
            box(-3, 39, 7, 1, K(-0.3));
            cone(0, 39, 2, 2, K(0.1));
            box(0, 43, 1, 2, K(0.2));
            break;
          }
          case "avellinoCathedral": {
            // Avellino Cathedral: a white neoclassical front of two orders, the lower with four pilasters, a
            // portal under a lunette and statues in niches, the upper narrower between grey scroll wings with
            // an arched window, a pediment and the cross.
            const st = [238, 232, 220],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k))),
              grey = css(e.sh([164, 156, 146]));
            box(-9, 15, 19, 15, K(0));
            box(-9, 15, 1, 15, css(e.sh([222, 196, 120]))); // the yellow side wall
            for (const p of [-7, -4, 4, 7]) box(p, 14, 1, 13, K(0.15));
            box(-9, 16, 19, 1, grey);
            box(-1, 7, 3, 7, css(e.sh([110, 92, 82])));
            dome(0.5, 9, 2, K(0.2));
            dome(0.5, 9, 1, 2);
            for (const p of [-3, 3]) {
              box(p, 7, 1, 3, K(0.25));
              box(p, 6, 1, 2, grey);
            }
            for (const p of [-7, 7]) box(p, 6, 1, 3, 2);
            box(-10, 1, 21, 1, grey);
            // the upper order
            for (const s of [-1, 1]) {
              box(s < 0 ? -7 : 6, 18, 2, 2, grey);
              box(s < 0 ? -6 : 6, 20, 1, 2, grey);
            }
            box(-5, 24, 11, 8, K(0));
            for (const p of [-4, -2, 3, 5]) box(p, 23, 1, 7, K(0.15));
            box(0, 22, 1, 4, 2);
            dome(0.5, 22, 1, 2);
            box(-6, 25, 13, 1, grey);
            cone(0, 25, 6, 3, K(0.05));
            box(0, 30, 1, 3, grey);
            box(-1, 29, 3, 1, grey);
            break;
          }
          case "sanNicolaBari": {
            // Basilica of San Nicola (Bari): the white limestone Romanesque front between two square towers left
            // unfinished at different heights, its gable divided by pilaster strips into three bays, blind
            // arcades under the eaves, a rose window and mullioned windows, and the portal on its columns.
            const st = [234, 224, 202],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            const tower = (l, h) => {
              box(l, h, 5, h, K(0.05));
              box(l + 4, h, 1, h, K(0.3));
              box(l, h, 5, 1, K(-0.3));
              box(l + 2, h - 3, 1, 2, 2);
              box(l + 2, h - 9, 1, 2, 2);
            };
            tower(-12, 24);
            tower(8, 21);
            box(-7, 16, 15, 16, K(0));
            cone(0, 16, 7, 5, K(0));
            for (let j = 0; j < 5; j++) {
              const k = Math.round(7 * (1 - j / 5));
              box(-k, 17 + j, 1, 1, K(0.25)); // the blind arcade climbing the gable
              box(k, 17 + j, 1, 1, K(0.25));
            }
            for (const p of [-3, 3]) box(p, 15, 1, 14, K(0.2)); // pilaster strips
            orb(0.5, 17, 1, 2);
            for (const p of [-6, 5]) {
              box(p, 13, 1, 3, 2);
              box(p, 7, 1, 3, 2);
            }
            box(-1, 9, 3, 2, 2); // the mullioned window
            box(-2, 6, 5, 6, K(-0.2)); // the portal
            box(-1, 5, 3, 5, 2);
            dome(0.5, 5, 1.5, 2);
            box(-13, 1, 27, 1, K(0.3));
            break;
          }
          case "bariCastle": {
            // Castello Normanno-Svevo (Bari): long low walls of pale limestone over a grassy moat, a frieze of
            // little arches under the parapet, the square Norman keep rising behind and a squat angle bastion.
            const st = [216, 198, 160],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            box(-14, 15, 7, 15, K(0.1)); // the keep
            box(-8, 15, 1, 15, K(0.35));
            box(-14, 15, 7, 1, K(-0.2));
            box(-11, 12, 1, 2, 2);
            box(-6, 12, 13, 2, K(0.15)); // the inner range
            box(-14, 10, 22, 10, K(0)); // the curtain wall
            box(-14, 3, 22, 3, K(0.25)); // its battered foot
            for (let p = -13; p < 8; p += 2) box(p, 9, 1, 1, K(0.35)); // the frieze of little arches
            box(-14, 10, 22, 1, K(-0.25));
            box(-9, 6, 1, 1, 2);
            box(2, 6, 1, 1, 2);
            box(8, 12, 7, 12, K(0.05)); // the angle bastion
            box(8, 4, 7, 4, K(0.25));
            box(14, 12, 1, 12, K(0.35));
            box(8, 12, 7, 1, K(-0.3));
            box(10, 9, 1, 1, 2);
            box(12, 6, 1, 2, 2);
            box(-15, 1, 30, 1, css(e.sh([118, 156, 92]))); // the grassy moat
            break;
          }
          case "barlettaCastle": {
            // Castle of Barletta: a pale Swabian castle rebuilt by Charles V, low walls between four big
            // spear-head bastions; seen from the corner, two bastions show their lit and shaded faces sloping
            // out to a sharp prow, with gun ports and the arcaded courtyard gate between.
            const st = [222, 214, 196],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            box(-6, 11, 13, 11, K(0.1)); // the curtain
            box(-6, 11, 13, 1, K(-0.2));
            for (const p of [-4, -1, 2, 5]) {
              box(p, 5, 2, 3, 2); // the courtyard arcade
              dome(p + 1, 5, 1, 2);
            }
            box(-5, 9, 1, 1, 2);
            box(4, 9, 1, 1, 2);
            const bastion = (cx, h) => {
              // the prow: a lit face and a shaded face meeting at the sharp edge, battered out to the foot
              for (let r = 1; r <= h; r++) {
                const hw = 4 + Math.floor((h - r) / 4);
                box(cx - hw, r, hw, 1, K(-0.12));
                box(cx, r, hw + 1, 1, K(0.28));
              }
              box(cx, h, 1, h, K(-0.3));
              box(cx - 4, h - 3, 9, 1, K(-0.3)); // the cordon
              box(cx - 4, h, 9, 1, K(-0.2));
              box(cx - 2, h - 6, 1, 1, 2);
              box(cx + 2, h - 6, 1, 1, 2);
            };
            bastion(-10, 13);
            bastion(10, 14);
            break;
          }
          case "bellunoTower": {
            // The bell tower of Belluno Cathedral (Juvarra, 18th century): a tall white shaft with corner
            // pilasters and a round window, a balustraded belfry with arched openings, an upper drum and the
            // green onion dome with its gilt angel.
            const st = [236, 230, 216],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k))),
              green = [74, 120, 104];
            box(-4, 5, 9, 5, K(0.15)); // the base
            box(-4, 5, 9, 1, K(-0.2));
            box(-3, 37, 7, 32, K(0));
            for (const p of [-3, 3]) box(p, 36, 1, 31, p > 0 ? K(0.3) : K(-0.2));
            for (const r of [14, 26]) box(-3, r, 7, 1, K(0.15));
            orb(0.5, 30, 1, 2);
            box(0, 20, 1, 3, 2);
            box(-4, 38, 9, 1, K(-0.3));
            box(-3, 45, 7, 7, K(0.05)); // the belfry
            box(3, 45, 1, 7, K(0.3));
            for (const p of [-2, 1]) {
              box(p, 43, 2, 4, 2);
              dome(p + 1, 43, 1, 2);
            }
            box(-4, 40, 9, 1, K(-0.2)); // the balustrade
            for (const p of [-4, -2, 0, 2, 4]) box(p, 41, 1, 1, K(-0.2));
            box(-4, 46, 9, 1, K(-0.3));
            box(-2, 50, 5, 4, K(0)); // the drum
            box(2, 50, 1, 4, K(0.3));
            box(-1, 49, 1, 2, 2);
            box(1, 49, 1, 2, 2);
            box(-3, 51, 7, 1, K(-0.3));
            bulb(0, 51, 2, css(e.sh(green))); // the onion
            box(-1, 57, 3, 1, 12); // the angel
            box(0, 59, 1, 3, 12);
            break;
          }
          case "bellunoRettori": {
            // Palazzo dei Rettori (Belluno): a Venetian Renaissance palace of pale stone, a ground-floor arcade
            // of round arches, two storeys of paired arched windows with little balconies, the hipped dark roof
            // and the clock tower at the right corner.
            const st = [232, 224, 200],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            // the clock tower
            box(8, 23, 5, 23, K(0.05));
            box(12, 23, 1, 23, K(0.3));
            orb(10.5, 19, 1.6, css(e.sh([236, 232, 220])));
            box(10, 19, 1, 1, 2);
            box(7, 24, 7, 1, K(-0.3));
            cone(10, 24, 2, 2, css(e.sh([96, 92, 98])));
            box(10, 27, 1, 2, 3);
            // the palace
            box(-13, 15, 21, 2, css(e.sh([96, 92, 98]))); // the roof
            box(-11, 16, 17, 1, css(e.sh([84, 80, 88])));
            box(-13, 13, 21, 13, K(0));
            box(-13, 5, 21, 1, K(-0.25));
            for (let i = 0; i < 7; i++) {
              const p = -12 + 3 * i;
              box(p, 3, 2, 3, 2); // the arcade
              dome(p + 1, 3, 1, 2);
              if (i % 2 === 0 || i === 3) {
                for (const r of [8, 12]) {
                  box(p, r, 1, 2, 2);
                  box(p + 1, r, 1, 2, 2);
                }
                box(p, 6, 2, 1, K(-0.2));
              }
            }
            box(-13, 13, 21, 1, K(-0.3));
            box(-14, 1, 28, 1, K(0.3));
            break;
          }
          case "trajanBenevento": {
            // Arch of Trajan, Benevento: the best preserved of the Roman arches, of white marble, one passage
            // between piers carved all over with relief panels framed by engaged columns, an entablature and the
            // tall attic with the inscription in the middle and two more reliefs.
            const st = [232, 226, 210],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            box(-8, 17, 17, 17, K(0));
            box(-8, 4, 17, 4, K(0.12)); // the plinth
            box(-8, 4, 17, 1, K(-0.2));
            dome(0.5, 12, 4.5, K(0.2));
            dome(0.5, 12, 3.5, 2);
            box(-3, 12, 7, 12, 2);
            for (const p of [-8, -4, 4, 8]) box(p, 16, 1, 12, K(-0.25)); // engaged columns
            box(8, 16, 1, 13, K(0.35));
            for (const s of [-6, 6]) for (const r of [8, 13]) box(s - 1, r, 3, 3, K(0.25)); // relief panels
            box(-9, 19, 19, 2, K(-0.25)); // the entablature
            box(-9, 18, 19, 1, K(0.15));
            box(-8, 25, 17, 6, K(0)); // the attic
            box(-3, 24, 7, 4, K(0.2)); // the inscription
            for (const r of [23, 21]) box(-2, r, 5, 1, K(0.4));
            for (const p of [-7, 5]) box(p, 24, 3, 4, K(0.25));
            box(8, 25, 1, 6, K(0.35));
            box(-9, 26, 19, 1, K(-0.3));
            break;
          }
          case "campanone": {
            // Il Campanone, Bergamo's civic tower: a square shaft of grey-brown rubble stone, the big sundial-clock
            // face, two tall arched belfry openings and a little crown of corner merlons.
            const st = [170, 156, 136],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            box(-4, 42, 9, 42, K(0));
            box(3, 42, 2, 42, K(0.3));
            for (let r = 4; r < 30; r += 5) box(-4, r, 7, 1, K(0.12)); // courses
            box(-3, 31, 5, 7, css(e.sh([214, 176, 150]))); // the clock face
            orb(-0.5, 27.5, 1.5, css(e.sh([236, 220, 196])));
            box(-1, 28, 1, 2, 2);
            for (const p of [-3, 0]) {
              box(p, 39, 2, 5, 2); // the belfry
              dome(p + 1, 39, 1, 2);
            }
            box(1, 34, 1, 1, 12);
            box(-5, 43, 10, 1, K(-0.25));
            for (const p of [-5, -2, 1, 4]) box(p, 45, 1, 2, K(0));
            break;
          }
          case "bergamoCathedral": {
            // Bergamo Cathedral: the white neoclassical front under its pediment among red tile roofs, the
            // windowed drum and the green copper dome with its gilt statue of St Alexander on top.
            const st = [238, 232, 220],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k))),
              green = [112, 172, 146],
              tile = css(e.sh([184, 100, 74]));
            box(-10, 12, 21, 12, css(e.sh([196, 176, 150]))); // the church body
            box(-11, 13, 23, 2, tile);
            box(-3, 20, 7, 6, K(0.1)); // the drum
            for (const p of [-2, 0, 2]) box(p, 18, 1, 2, 2);
            box(-4, 21, 9, 1, K(-0.3));
            dome(0.5, 21, 4.5, css(e.sh(green)));
            box(-2, 24, 1, 2, css(e.sh(mixc(green, [255, 248, 225], 0.3))));
            box(0, 26, 1, 2, css(e.sh(green)));
            box(0, 29, 1, 3, 12); // St Alexander
            // the white front
            box(-6, 13, 13, 13, K(0));
            for (const p of [-5, -2, 2, 5]) box(p, 12, 1, 11, K(0.15));
            box(-7, 14, 15, 1, K(-0.25));
            cone(0, 14, 7, 3, K(0.05));
            box(-1, 6, 3, 6, 2);
            for (const p of [-4, 4]) box(p, 8, 1, 3, K(0.3));
            box(-10, 4, 3, 4, 2);
            box(-11, 1, 23, 1, K(0.3));
            break;
          }
          case "biellaBelfry": {
            // The bell tower of Santo Stefano (Biella), beside the cathedral: a Romanesque brick tower with
            // tiers of arched windows growing wider towards the top, and a tall red brick spire with four
            // corner pinnacles.
            const br = [180, 98, 72],
              K = (k) => css(e.sh(k > 0 ? mixc(br, [41, 40, 54], k) : mixc(br, [255, 248, 225], -k)));
            box(-3, 25, 7, 25, K(0));
            box(3, 25, 1, 25, K(0.3));
            for (let r = 7; r <= 25; r += 4) box(-3, r, 7, 1, K(-0.2)); // corbel bands
            box(0, 11, 1, 2, 2);
            box(0, 15, 1, 2, 2);
            box(-1, 19, 1, 2, 2);
            box(1, 19, 1, 2, 2);
            for (const p of [-2, 0, 2]) box(p, 23, 1, 2, 2);
            box(-4, 26, 9, 1, K(-0.25));
            cone(0, 26, 3, 12, css(e.sh([190, 88, 66])));
            for (const p of [-3, 3]) box(p, 29, 1, 3, K(0.1));
            box(0, 40, 1, 2, 3);
            break;
          }
          case "biellaCathedral": {
            // Biella Cathedral: the white neo-Gothic portico across its front, seven pointed arches on clustered
            // piers under a balustrade bristling with pinnacles, and the plain gable of the church behind.
            const st = [232, 226, 212],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            box(-5, 17, 11, 4, css(e.sh([214, 200, 176]))); // the gable behind
            cone(0, 17, 5, 5, css(e.sh([214, 200, 176])));
            box(0, 24, 1, 2, 2);
            box(-10, 13, 21, 13, K(0));
            for (let i = 0; i < 7; i++) {
              const p = -9 + 3 * i;
              box(p, 9, 2, 9, 2);
              box(p, 10, 2, 1, K(0.1));
              box(p, 11, 1, 1, 2); // the pointed head
            }
            box(-10, 14, 21, 1, K(-0.3));
            for (let p = -9; p <= 9; p += 2) box(p, 15, 1, 1, K(0.1)); // the balustrade
            for (const p of [-10, -7, -4, 4, 7, 10]) {
              box(p, 17, 1, 3, K(-0.1)); // pinnacles
              box(p, 18, 1, 1, K(0.15));
            }
            box(10, 13, 1, 13, K(0.3));
            box(-11, 1, 23, 1, K(0.3));
            break;
          }
          case "asinelli": {
            // Asinelli Tower (Bologna): the tallest of the city's medieval towers, a slender brick shaft
            // dotted with putlog holes on the stone-clad "rocchetta" with its arcade, and a small battlemented
            // top with the little lookout. Keeps the row's lean.
            const br = [168, 92, 70],
              K = (k) => css(e.sh(k > 0 ? mixc(br, [41, 40, 54], k) : mixc(br, [255, 248, 225], -k))),
              stone = [218, 206, 182];
            box(-2, 51, 5, 44, K(0));
            box(2, 51, 1, 44, K(0.3));
            for (let r = 12; r < 50; r += 4) box(r % 8 ? -1 : 1, r, 1, 1, K(0.45)); // putlog holes
            for (const r of [18, 30, 42]) box(-2, r, 5, 1, K(-0.2));
            box(-3, 52, 7, 1, K(-0.15));
            box(-3, 53, 1, 1, K(0));
            box(3, 53, 1, 1, K(0));
            box(-1, 54, 3, 2, K(0.1)); // the lookout
            box(-3, 8, 7, 8, css(e.sh(stone))); // the rocchetta
            box(-2, 5, 2, 4, 2);
            box(1, 5, 2, 4, 2);
            box(-3, 8, 7, 1, css(e.sh(mixc(stone, [41, 40, 54], 0.2))));
            break;
          }
          case "garisenda": {
            // Garisenda Tower (Bologna): the shorter twin, leaning hard (the row's lean), cut down in the 14th
            // century to a ragged flat top, its foot clad in pale selenite blocks.
            const br = [176, 98, 74],
              K = (k) => css(e.sh(k > 0 ? mixc(br, [41, 40, 54], k) : mixc(br, [255, 248, 225], -k)));
            box(-3, 25, 7, 25, K(0));
            box(3, 25, 1, 25, K(0.3));
            box(-3, 7, 7, 7, css(e.sh([210, 204, 190])));
            box(3, 7, 1, 7, css(e.sh([170, 164, 154])));
            for (const r of [12, 17, 22]) box(-1 + (r % 2), r, 1, 1, K(0.45));
            box(-3, 26, 2, 1, K(-0.1));
            box(0, 26, 1, 1, K(0));
            box(2, 26, 2, 1, K(0.1));
            break;
          }
          case "bolzanoCathedral": {
            // Bolzano Cathedral: a Gothic church of pink-grey sandstone under a steep roof of green and yellow
            // glazed tiles in a diamond pattern, the gable end with its rose window on the right, and the tall
            // tower at the left with the openwork sandstone spire.
            const st = [178, 150, 136],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k))),
              G = css(e.sh([86, 128, 92])),
              Yl = css(e.sh([210, 190, 110]));
            // the nave and its roof
            box(-5, 13, 16, 13, K(0.1));
            for (const p of [-2, 2, 6]) box(p, 10, 1, 5, 2);
            box(-5, 24, 9, 11, G); // the long roof slope
            for (let j = 0; j < 11; j++)
              for (let p = -4 + (j % 2) * 2; p < 4; p += 4) box(p, 14 + j, 1, 1, Yl);
            box(-5, 24, 9, 1, css(e.sh([120, 104, 96])));
            box(3, 13, 8, 13, K(0)); // the gable end
            cone(7, 13, 4, 12, K(0));
            cone(7, 13, 4, 12, K(-0.05));
            orb(7.5, 11, 1.5, 2);
            orb(7.5, 11, 0.6, K(-0.2));
            box(6, 5, 3, 5, 2);
            box(10, 13, 1, 13, K(0.3));
            // the tower
            box(-10, 30, 5, 30, K(0));
            box(-6, 30, 1, 30, K(0.3));
            box(-9, 26, 3, 4, 2);
            box(-8, 20, 1, 3, 2);
            box(-11, 31, 7, 1, K(-0.25));
            box(-9, 36, 3, 5, K(-0.05)); // the openwork lantern
            box(-8, 35, 1, 3, 2);
            for (const p of [-11, -5]) box(p, 34, 1, 3, K(-0.1)); // pinnacles
            box(-9, 38, 3, 2, K(0.1));
            cone(-8, 38, 1, 8, K(0));
            box(-8, 48, 1, 2, 3);
            break;
          }
          case "bresciaDuomoNuovo": {
            // The New Cathedral (Brescia): a white marble baroque front of two orders with paired columns and a
            // portal under a broken pediment, statues on the top, and behind it the drum and the big green dome
            // under its lantern.
            const st = [238, 234, 224],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k))),
              green = [120, 176, 150];
            box(-4, 22, 9, 5, K(0.1)); // the drum
            for (const p of [-3, -1, 1, 3]) box(p, 21, 1, 2, 2);
            box(-5, 23, 11, 1, K(-0.3));
            dome(0.5, 23, 5, css(e.sh(green)));
            box(-2, 26, 2, 2, css(e.sh(mixc(green, [255, 248, 225], 0.3))));
            box(-1, 30, 3, 2, K(0)); // the lantern
            dome(0.5, 30, 1, css(e.sh(green)));
            box(0, 32, 1, 1, 3);
            // the lower order
            box(-10, 12, 21, 12, K(0));
            for (const p of [-10, -8, -4, 4, 8, 10]) box(p, 11, 1, 10, K(0.18));
            box(10, 12, 1, 12, K(0.3));
            box(-11, 13, 23, 1, K(-0.3));
            box(-1, 7, 3, 7, 2);
            cone(0, 8, 3, 1, K(0.2));
            for (const p of [-7, 6]) box(p, 8, 2, 3, 2);
            // the upper order
            box(-6, 19, 13, 6, K(0));
            for (const s of [-8, 8]) box(s - (s > 0 ? 0 : 1), 15, 2, 2, K(0.1)); // scrolls
            for (const p of [-5, -3, 3, 5]) box(p, 18, 1, 5, K(0.18));
            box(-1, 17, 3, 3, 2);
            box(-7, 20, 15, 1, K(-0.3));
            cone(0, 20, 5, 2, K(0.05));
            for (const p of [-6, -3, 3, 6]) box(p, 22, 1, 2, K(-0.15)); // statues
            box(-11, 1, 23, 1, K(0.3));
            break;
          }
          case "pallata": {
            // Torre della Pallata (Brescia): a square tower of rough pale stone with the big clock, a corbel table
            // of little brick arches carrying a brick parapet of swallow-tail merlons, the small brick belfry
            // over the middle, and the fountain at its foot.
            const st = [196, 186, 164],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k))),
              br = [176, 102, 76],
              B = css(e.sh(br)),
              BS = css(e.sh(mixc(br, [41, 40, 54], 0.3)));
            box(-4, 24, 9, 24, K(0));
            for (const p of [-4, 3]) box(p, 23, 2, 22, K(p > 0 ? 0.3 : 0.15)); // the dark quoins
            for (let r = 6; r < 22; r += 3) box(-2, r, 5, 1, K(0.08));
            orb(0.5, 17, 2.4, css(e.sh([236, 230, 214])));
            orb(0.5, 17, 1.8, css(e.sh([216, 184, 110])));
            box(0, 18, 1, 2, 2);
            box(0, 11, 1, 1, 2);
            box(-1, 5, 3, 4, css(e.sh([232, 226, 212]))); // the fountain
            box(0, 3, 1, 2, 2);
            box(-5, 25, 11, 1, B); // the corbel table
            for (let p = -4; p <= 4; p += 2) box(p, 24, 1, 1, BS);
            box(-5, 28, 11, 3, B);
            for (const p of [-5, -2, 2, 5]) {
              box(p, 30, 1, 2, B); // swallow-tail merlons
              box(p, 29, 1, 1, BS);
            }
            box(-2, 31, 5, 6, B); // the belfry
            box(-1, 30, 3, 2, 2);
            box(-2, 32, 5, 1, BS);
            box(0, 34, 1, 2, 3);
            break;
          }
          case "sailorMonument": {
            // Monument to the Sailor of Italy (Brindisi): a 1930s tower of pale stone shaped like a ship's
            // rudder, its back straight and its front swelling out in a long curve to the foot, with the little
            // lookout block standing out at the top.
            const st = [222, 196, 150],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            for (let r = 1; r <= 36; r++) {
              const w = 3 + Math.round(3 * Math.pow((36 - r) / 36, 1.6)); // the rudder's curved front edge
              box(3 - w, r, w, 1, K(0));
              box(3 - w, r, 1, 1, K(-0.2));
            }
            box(2, 36, 1, 36, K(0.3));
            box(-1, 39, 4, 3, K(0.05)); // the lookout
            box(-1, 39, 1, 3, K(-0.2));
            box(1, 37, 1, 1, 2);
            box(1, 41, 1, 2, 2);
            box(-4, 2, 8, 2, K(0.2)); // the base
            break;
          }
          case "brindisiColumn": {
            // The Roman Column at the end of the Appian Way (Brindisi): a tall marble column with its capital of
            // gods and tritons, on a square base at the top of the wide flight of steps, and the stump of its
            // fallen twin beside it.
            const st = [234, 228, 214],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            for (let i = 0; i < 4; i++) box(-6 + i, 1 + i, 13 - 2 * i, 1, K(i % 2 ? 0.08 : 0.2)); // the steps
            box(-2, 7, 4, 3, K(0)); // the base
            box(1, 7, 1, 3, K(0.3));
            box(-2, 7, 4, 1, K(-0.2));
            box(-1, 25, 2, 18, K(0)); // the shaft
            box(0, 25, 1, 18, K(0.25));
            for (const r of [11, 15, 19, 23]) box(-1, r, 2, 1, K(0.12)); // the drums
            box(-2, 27, 4, 2, K(-0.05)); // the capital
            box(-2, 26, 1, 1, K(0.3));
            box(1, 26, 1, 1, K(0.3));
            box(-2, 28, 4, 1, K(-0.25));
            box(-1, 29, 2, 1, K(0.1));
            box(3, 7, 3, 3, K(0.05)); // the twin's stump
            box(5, 7, 1, 3, K(0.3));
            box(3, 9, 3, 2, K(0.1));
            break;
          }
          case "saintRemy": {
            // Bastion of Saint Remy (Cagliari): the limestone terrace on the old walls, a lower arch between the
            // two flights of the stair, an upper storey with tall arched windows and lattice panels, and the
            // triumphal arch at its centre framing the sky.
            const st = [226, 206, 168],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            box(-14, 12, 29, 12, K(0.12)); // the bastion wall
            for (let r = 3; r < 12; r += 3) box(-14, r, 29, 1, K(0.22));
            for (const s of [-1, 1]) {
              for (let i = 0; i < 6; i++) box(s < 0 ? -9 + i : 8 - i, 3 + i, 2, 1, K(-0.2)); // the stairs
              box(s * 12 - 1, 10, 3, 10, K(0.2)); // the round bastion ends
            }
            box(-3, 7, 7, 7, K(-0.1));
            box(-2, 6, 5, 6, 2); // the lower arch
            dome(0.5, 6, 2.5, 2);
            box(-14, 19, 29, 7, K(0)); // the terrace storey
            box(-15, 19, 31, 1, K(-0.25));
            for (const s of [-1, 1]) {
              box(s * 12 - (s < 0 ? 0 : 1), 16, 2, 3, 2);
              dome(s * 12 + (s < 0 ? 1 : 0), 16, 1, 2);
              for (const p of [7, 9]) box(s * p - (s < 0 ? 0 : 0), 16, 1, 1, K(0.35)); // lattice panels
            }
            box(-4, 24, 9, 12, K(-0.08)); // the triumphal arch
            box(-2, 21, 5, 8, css(e.sh([156, 196, 232])));
            dome(0.5, 21, 2.5, css(e.sh([156, 196, 232])));
            box(-5, 25, 11, 1, K(-0.3));
            box(4, 24, 1, 12, K(0.3));
            break;
          }
          case "elephantTower": {
            // Torre dell'Elefante (Cagliari): a Pisan tower of pale limestone, tall and plain, open on its town
            // side (the floors show in the gap), the gate at its foot, the little elephant on its corbel and the
            // battlemented crown.
            const st = [222, 212, 188],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            box(-4, 21, 9, 21, K(0));
            box(1, 21, 4, 21, K(0.25));
            box(2, 20, 2, 17, css(e.sh([98, 80, 70]))); // the open side
            for (let r = 6; r < 20; r += 4) box(2, r, 2, 1, css(e.sh([150, 116, 86])));
            box(-2, 6, 2, 5, 2); // the gate
            dome(-1, 6, 1, 2);
            box(-3, 10, 2, 1, K(0.4)); // the elephant
            box(-3, 11, 1, 1, K(0.4));
            box(-4, 22, 9, 1, K(-0.2));
            for (const p of [-4, -2, 0, 2, 4]) box(p, 24, 1, 2, K(p > 0 ? 0.25 : 0));
            break;
          }
          case "caltanissettaCathedral": {
            // Caltanissetta Cathedral (Santa Maria la Nova): a pale stone baroque front between two bell towers,
            // the left one with a clock and both with open belfries and small domes, the pedimented middle with
            // its window and the portal under a balustrade.
            const st = [222, 210, 184],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            box(-11, 16, 23, 16, K(0));
            for (const p of [-6, 6]) box(p, 15, 1, 14, K(0.15));
            box(11, 16, 1, 16, K(0.3));
            box(-12, 17, 25, 1, K(-0.3));
            box(-1, 7, 3, 7, 2);
            box(-2, 8, 5, 1, K(-0.2));
            for (const p of [-9, 9]) {
              box(p, 12, 1, 3, 2);
              box(p, 6, 1, 3, 2);
            }
            box(-3, 13, 7, 3, K(0.1));
            box(-1, 12, 3, 2, css(e.sh([64, 92, 150]))); // the blue window
            // the middle
            box(-5, 23, 11, 6, K(0.05));
            box(-1, 22, 2, 3, css(e.sh([64, 92, 150])));
            box(-6, 24, 13, 1, K(-0.3));
            cone(0, 24, 6, 3, K(0.05));
            box(0, 28, 1, 2, 2);
            // the towers
            for (const l of [-11, 7]) {
              box(l, 24, 5, 7, K(0.05));
              box(l + 4, 24, 1, 7, K(0.3));
              box(l + 1, 22, 3, 4, 2);
              box(l + 2, 21, 1, 1, 12);
              box(l - 1, 25, 7, 1, K(-0.3));
              box(l, 28, 5, 3, K(0));
              if (l < 0) orb(l + 2.5, 26.5, 1, css(e.sh([236, 232, 220])));
              dome(l + 2.5, 28, 2, K(-0.1));
              box(l + 2, 31, 1, 1, 2);
            }
            break;
          }
          case "monforte": {
            // Castello Monforte (Campobasso): a grey stone castle on its hill, high battlemented walls, the
            // squarer gate tower with the arched gate, and the round corner tower on the right.
            const st = [178, 172, 160],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            box(-13, 11, 20, 11, K(0));
            box(-13, 3, 20, 3, K(0.15));
            for (let p = -13; p < 7; p += 2) box(p, 12, 1, 1, K(0)); // merlons
            box(-1, 7, 1, 2, 2);
            box(4, 9, 1, 1, 2);
            box(-11, 8, 1, 1, 2);
            box(-8, 14, 5, 14, K(-0.08)); // the gate tower
            box(-4, 14, 1, 14, K(0.25));
            for (let p = -8; p <= -4; p += 2) box(p, 15, 1, 1, K(-0.08));
            box(-7, 5, 3, 5, 2);
            dome(-5.5, 5, 1.5, 2);
            box(-7, 11, 3, 3, css(e.sh([186, 130, 100]))); // the brick panel
            for (let r = 1; r <= 13; r++) {
              const f = r < 4 ? 1 : 0; // the round tower, battered at its foot
              box(7 - f, r, 7 + 2 * f, 1, K(0.05));
              box(7 - f, r, 2, 1, K(-0.2));
              box(12 + f, r, 2, 1, K(0.32));
            }
            box(6, 14, 9, 1, K(-0.15));
            for (const p of [6, 8, 10, 12, 14]) box(p, 15, 1, 1, K(p > 10 ? 0.3 : 0));
            break;
          }
          case "carboniaTower": {
            // The civic tower of Carbonia (1938), on Piazza Roma: a plain square shaft of red trachyte with a
            // clock near its top, an open loggia of tall arches and a flat crowning cornice. Drawn from memory:
            // no photo was found.
            const st = [150, 86, 70],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            box(-3, 27, 7, 27, K(0));
            box(3, 27, 1, 27, K(0.3));
            for (let r = 4; r < 22; r += 3) box(-3, r, 6, 1, K(0.1));
            orb(0.5, 20, 1.6, css(e.sh([232, 224, 206])));
            box(0, 20, 1, 1, 2);
            box(-4, 28, 9, 1, K(-0.25));
            box(-3, 32, 7, 4, K(0));
            for (const p of [-2, 1]) box(p, 31, 2, 3, 2);
            box(-4, 33, 9, 1, K(-0.25));
            break;
          }
          case "sanPonziano": {
            // San Ponziano (Carbonia): the 1930s church of red trachyte with its gable, round window and white
            // portico, and beside it the tall campanile (modelled on Aquileia's) with arched belfry windows, the
            // clock and the steep red tiled spire.
            const st = [150, 88, 72],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k))),
              tile = css(e.sh([196, 104, 74]));
            // the campanile
            box(-8, 20, 6, 20, K(0));
            box(-3, 20, 1, 20, K(0.3));
            for (const r of [7, 13]) box(-8, r, 6, 1, K(0.15));
            orb(-5, 15, 1, css(e.sh([232, 224, 206])));
            for (const p of [-7, -5]) box(p, 19, 1, 2, 2);
            box(-9, 21, 8, 1, K(-0.25));
            box(-7, 23, 4, 2, K(0.05));
            box(-6, 23, 1, 1, 2);
            cone(-5, 23, 2, 6, tile);
            box(-5, 30, 1, 1, 2);
            // the church
            box(-1, 12, 11, 12, K(0.05));
            box(9, 12, 1, 12, K(0.3));
            cone(4, 12, 6, 2, tile);
            orb(4.5, 9, 1.5, css(e.sh([110, 130, 150])));
            for (let p = 6; p <= 8; p += 1) box(p, 10, 1, 3, p % 2 ? K(0.3) : K(0.1)); // the side ribs
            box(-2, 5, 13, 5, css(e.sh([232, 226, 212]))); // the white portico
            for (let p = -1; p <= 9; p += 2) box(p, 4, 1, 4, 2);
            box(-2, 6, 13, 1, tile);
            break;
          }
          case "reggiaCaserta": {
            // Royal Palace of Caserta: Vanvitelli's immense front, a rusticated travertine ground floor, four
            // storeys of windows in the pale brick upper floors, the central pavilion with its giant columns and
            // pediment-less attic, and projecting corner pavilions, under a balustraded roof line.
            const st = [226, 200, 166],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k))),
              trav = css(e.sh([214, 206, 186]));
            box(-18, 16, 37, 16, K(0));
            box(-18, 4, 37, 4, trav); // the rusticated ground floor
            for (let p = -17; p <= 17; p += 2) box(p, 3, 1, 1, K(0.3));
            box(-18, 17, 37, 1, K(-0.25));
            for (let p = -17; p <= 17; p += 2) box(p, 18, 1, 1, K(-0.15)); // the balustrade
            for (let p = -16; p <= 16; p += 2)
              if (Math.abs(p) > 3) for (const r of [7, 10, 13, 15]) box(p, r, 1, r === 15 ? 1 : 2, 2);
            for (const s of [-1, 1]) {
              const l = s < 0 ? -18 : 15; // the corner pavilions
              box(l, 17, 4, 17, K(-0.1));
              box(l, 4, 4, 4, trav);
              for (const p of [l, l + 3]) box(p, 16, 1, 11, K(0.15));
              box(l + 1, 10, 2, 2, 2);
              box(l - 1, 18, 6, 1, K(-0.3));
            }
            box(18, 16, 1, 16, K(0.3));
            box(-4, 19, 9, 19, K(-0.08)); // the central pavilion
            box(-4, 4, 9, 4, trav);
            for (const p of [-3, -1, 1, 3]) box(p, 15, 1, 11, K(-0.25));
            box(-1, 3, 3, 3, 2);
            box(-5, 16, 11, 1, K(-0.3));
            box(-3, 18, 7, 2, K(0.05)); // the attic
            box(-5, 19, 11, 1, K(-0.25));
            break;
          }
          case "etna": {
            // Mount Etna over Catania: the broad dark volcano, its long slopes, snow on the summit cone, a
            // lava flow down one flank and the plume of smoke from the craters.
            const rock = [92, 82, 82],
              K = (k) => css(e.sh(k > 0 ? mixc(rock, [41, 40, 54], k) : mixc(rock, [255, 248, 225], -k))),
              snow = css(e.sh([236, 238, 242])),
              snowS = css(e.sh([196, 204, 220]));
            const H = 26;
            for (let r = 1; r <= H; r++) {
              const t = (r - 1) / (H - 1),
                hw = Math.round(3 + 20 * Math.pow(1 - t, 1.5)); // concave slopes, a flat-topped summit
              box(-hw, r, 2 * hw + 1, 1, K(-0.05));
              box(Math.round(hw / 3), r, hw - Math.round(hw / 3) + 1, 1, K(0.22)); // the shaded flank
              if (r > 17) {
                const sw = hw - (r % 3 === 0 ? 1 : 0); // ragged snow line
                box(-sw, r, sw + Math.round(hw / 3), 1, snow);
                box(Math.round(hw / 3), r, sw - Math.round(hw / 3) + 1, 1, snowS);
              }
            }
            for (let r = 2; r < 12; r++) box(-6 - Math.round(r / 2), r, 1, 1, css(e.sh([150, 70, 52]))); // a lava flow
            for (const [cx, cy, rr] of [
              [1, 28, 2],
              [3, 30, 2.5],
              [6, 31, 2],
            ])
              orb(cx, cy, rr, css(e.sh([208, 206, 210])));
            break;
          }
          case "liotru": {
            // The Elephant Fountain (u Liotru, Catania): the black lava elephant on a white marble base over the
            // basin and the dark steps, carrying the Egyptian granite obelisk with its orb, lily and cross.
            const lava = css(e.sh([64, 60, 62])),
              lavaL = css(e.sh([96, 92, 94])),
              st = [236, 232, 220],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            box(-5, 1, 11, 1, lava); // the steps
            box(-4, 2, 9, 1, lavaL);
            box(-4, 4, 9, 2, K(0.1)); // the basin
            box(-4, 4, 9, 1, K(-0.2));
            box(-2, 9, 5, 5, K(0)); // the pedestal
            box(2, 9, 1, 5, K(0.3));
            box(-1, 7, 2, 2, K(0.25));
            box(-3, 10, 7, 1, K(-0.2));
            box(-3, 15, 6, 3, lava); // the elephant: body, legs, head with its ear, tusk and raised trunk
            for (const p of [-3, -1, 1]) box(p, 12, 1, 2, lava);
            box(3, 16, 2, 4, lava);
            box(3, 16, 1, 3, lavaL);
            box(5, 14, 1, 2, lava);
            box(6, 16, 1, 3, lava);
            box(5, 13, 1, 1, K(0));
            box(-3, 15, 6, 1, lavaL);
            box(-1, 15, 2, 2, K(0.1)); // the saddle cloth
            box(-1, 22, 2, 7, css(e.sh([150, 140, 130]))); // the obelisk
            box(0, 21, 1, 6, css(e.sh([120, 112, 106])));
            box(0, 22, 1, 1, css(e.sh([150, 140, 130])));
            orb(0.5, 23.5, 1, css(e.sh([150, 140, 130])));
            box(0, 26, 1, 2, 2);
            break;
          }
          case "cataniaCathedral": {
            // Catania Cathedral (Sant'Agata): Vaccarini's white marble baroque front of three stacked orders with
            // columns and statues, the dome rising behind it, and the slim bell tower with its cupola further
            // back on the left.
            const st = [236, 232, 220],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k))),
              grey = [178, 172, 164];
            // the bell tower
            box(-10, 22, 4, 22, css(e.sh(grey)));
            box(-9, 19, 2, 3, 2);
            box(-11, 23, 6, 1, K(-0.3));
            box(-10, 26, 4, 3, K(0));
            dome(-7.5, 26, 2, css(e.sh(grey)));
            box(-8, 29, 1, 2, 2);
            // the dome
            box(-5, 19, 7, 4, css(e.sh(grey)));
            dome(-1.5, 19, 3.5, css(e.sh(grey)));
            box(-2, 24, 1, 2, K(0));
            // the nave
            box(-6, 12, 7, 12, css(e.sh(mixc(grey, [41, 40, 54], 0.1))));
            // the front: three orders
            box(1, 13, 10, 13, K(0));
            for (const p of [1, 3, 8, 10]) box(p, 12, 1, 11, K(0.18));
            box(5, 7, 2, 7, 2);
            box(4, 9, 4, 1, K(-0.2));
            box(0, 14, 12, 1, K(-0.3));
            box(2, 20, 8, 6, K(0));
            for (const p of [2, 4, 7, 9]) box(p, 19, 1, 5, K(0.18));
            box(5, 18, 2, 3, K(0.35));
            box(1, 21, 10, 1, K(-0.3));
            box(4, 25, 4, 4, K(0));
            cone(5.5, 25, 2, 2, K(0.05));
            box(5, 28, 2, 1, 2);
            for (const p of [1, 3, 9, 10]) box(p, 23, 1, 2, K(-0.15)); // statues
            box(-11, 1, 23, 1, K(0.3));
            break;
          }
          case "bisantis": {
            // Ponte Bisantis (Catanzaro): Morandi's concrete bridge over the Fiumarella gorge, the long deck
            // carried on one huge parabolic arch with slender posts, and the approach on the left on tall
            // inclined V-shaped legs.
            const st = [214, 210, 200],
              K = (k) => css(e.sh(k > 0 ? mixc(st, [41, 40, 54], k) : mixc(st, [255, 248, 225], -k)));
            const aL = -9,
              aR = 22,
              top = 21;
            for (let p = aL; p <= aR; p++) {
              const t = (2 * (p - aL)) / (aR - aL) - 1,
                a = Math.round(top * (1 - t * t)); // the arch's height at this column
              box(p, a + 1, 1, 2, K(Math.abs(t) > 0.8 ? 0.1 : 0));
              box(p, a - 1, 1, 1, K(0.3));
              if ((p - aL) % 3 === 0 && a < top - 1) box(p, 23, 1, 23 - a - 1, K(0.12)); // posts on the arch
            }
            for (const p of [-20, -14])
              for (let r = 1; r <= 22; r++) {
                const d = Math.round((3 * r) / 22); // the V legs of the approach, splaying up to the deck
                box(p - d, r, 1, 1, K(0.05));
                box(p + 1 + d, r, 1, 1, K(0.25));
              }
            box(-22, 25, 45, 2, K(-0.1)); // the deck
            box(-22, 23, 45, 1, K(0.35));
            for (let p = -22; p <= 22; p += 3) box(p, 26, 1, 1, K(0.2)); // lamp posts
            break;
          }
          case "chietiTower": {
            // The bell tower of Chieti Cathedral: a tall tower with a stone-clad lower part, then brick with
            // two-light windows and the clock, a belfry storey and the octagonal top with little corner turrets
            // under a pointed spire.
            const br = [196, 150, 106],
              K = (k) => css(e.sh(k > 0 ? mixc(br, [41, 40, 54], k) : mixc(br, [255, 248, 225], -k))),
              stone = css(e.sh([206, 196, 176]));
            box(-4, 40, 9, 40, K(0));
            box(3, 40, 2, 40, K(0.3));
            box(-4, 16, 9, 16, stone);
            box(3, 16, 2, 16, css(e.sh([168, 160, 146])));
            box(-1, 5, 2, 4, 2);
            for (const r of [22, 28]) {
              box(-1, r, 1, 2, 2);
              box(1, r, 1, 2, 2);
            }
            orb(0.5, 33, 1.5, css(e.sh([232, 226, 212])));
            box(0, 33, 1, 1, 2);
            box(-1, 39, 3, 3, 2);
            for (const r of [17, 25, 36]) box(-4, r, 9, 1, K(-0.2));
            box(-5, 41, 11, 1, K(-0.25));
            box(-3, 46, 7, 5, K(0.05)); // the octagon
            box(2, 46, 1, 5, K(0.3));
            box(-1, 45, 2, 3, 2);
            for (const p of [-4, 4]) {
              box(p, 46, 1, 4, K(0)); // the corner turrets
              box(p, 48, 1, 2, K(-0.1));
            }
            cone(0, 46, 3, 8, K(0.1));
            box(0, 56, 1, 2, 3);
            break;
          }
