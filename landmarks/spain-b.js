          case "giralda": {
            // The Giralda (Seville): the Almohad minaret's square brick shaft, a column of twin windows up the
            // middle between framed sebka lattice panels and a frieze of blind arches, under Hernán Ruiz's pale
            // Renaissance belfry: bells in its arches and urns at its corners, then the clock, stars and lily
            // storeys narrowing to a little cupola and the Giraldillo weathervane.
            const brick = [214, 164, 112],
              stone = [236, 212, 166],
              B = css(e.sh(brick)),
              S = css(e.sh(mixc(brick, [41, 40, 54], 0.3))),
              D = css(e.sh(mixc(brick, [41, 40, 54], 0.17))),
              Lt = css(e.sh(mixc(brick, [255, 248, 225], 0.35))),
              P = css(e.sh(stone)),
              PS = css(e.sh(mixc(stone, [41, 40, 54], 0.25)));
            box(-5, 2, 11, 2, D); // the plinth
            box(-4, 32, 9, 30, B);
            box(4, 31, 1, 29, S);
            for (let y = 15; y < 28; y++)
              if (y !== 21)
                for (const s of [-1, 1])
                  for (let p = 2; p <= 3; p++) if ((p + y) % 2 === 0) box(s * p, y, 1, 1, D);
            for (const s of [-1, 1]) for (const y of [14, 21, 28]) box(s > 0 ? 2 : -3, y, 2, 1, Lt); // the panel frames
            for (let y = 7; y < 28; y += 5) {
              box(-1, y + 2, 3, 3, Lt); // twin windows (ajimez) in a pale frame
              box(-1, y + 1, 1, 2, 2);
              box(1, y + 1, 1, 2, 2);
            }
            for (let p = -3; p <= 3; p += 2) box(p, 30, 1, 1, 2); // the frieze of blind arches
            box(-4, 32, 9, 1, Lt);
            box(-4, 40, 9, 8, P); // the belfry
            box(4, 40, 1, 8, PS);
            for (const p of [-2, 0, 2]) {
              box(p, 39, 1, 5, 2);
              box(p, 38, 1, 1, 12); // a bell
            }
            box(-5, 41, 11, 1, P);
            for (const s of [-4, 4]) box(s, 43, 1, 2, P); // the corner urns
            box(-3, 46, 7, 5, P); // the clock storey
            box(3, 46, 1, 5, PS);
            orb(0, 44, 1, 6);
            box(0, 44, 1, 1, 2);
            box(-4, 47, 9, 1, P);
            for (const s of [-3, 3]) box(s, 49, 1, 2, P);
            box(-2, 50, 5, 3, P); // the stars storey
            box(0, 49, 1, 2, 2);
            box(-1, 53, 3, 3, P); // the lily storey
            dome(0, 53, 1.5, 12); // the cupola
            box(0, 56, 1, 2, 12);
            box(0, 59, 1, 3, 2); // the Giraldillo with her shield
            box(1, 59, 1, 2, 12);
            break;
          }
          case "torreOro": {
            // Torre del Oro (Seville): a twelve-sided Almohad tower on the Guadalquivir, three of its faces in
            // view (lit and shaded at the sides), with little windows and a crown of merlons; a narrower
            // twelve-sided storey with blind horseshoe arches and merlons; then a round turret under a gilt dome.
            const st = [224, 186, 120],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3)));
            const tier = (hw, b, h) => {
              const f = Math.max(1, Math.round(hw / 2));
              box(-hw, b + h, 2 * hw + 1, h, B);
              box(-hw, b + h, f, h, Lt);
              box(hw - f + 1, b + h, f, h, S);
              box(-hw - 1, b + h + 1, 2 * hw + 3, 1, B); // the wall walk
              for (let p = -hw - 1; p <= hw + 1; p += 2) box(p, b + h + 2, 1, 1, p > hw - f ? S : B); // merlons
            };
            box(-7, 2, 15, 2, S); // the quay
            tier(6, 2, 15);
            for (const [p, y] of [
              [0, 8],
              [-3, 12],
              [2, 15],
            ])
              box(p, y, 1, 2, 2);
            box(-1, 6, 3, 4, 2); // the door
            box(0, 7, 1, 1, 2);
            tier(4, 19, 8);
            for (const p of [-2, 0, 2]) {
              box(p, 25, 1, 3, 2); // blind horseshoe arches
              box(p, 26, 1, 1, Lt);
            }
            box(-2, 33, 5, 4, B); // the turret
            box(2, 33, 1, 4, S);
            box(0, 32, 1, 2, 2);
            dome(0, 33, 2, 12);
            box(0, 36, 1, 1, 3);
            box(0, 38, 1, 2, 12);
            break;
          }
          case "obradoiro": {
            // Santiago de Compostela Cathedral, the Obradoiro facade: grey granite Baroque between two tall
            // towers, each a plain square shaft under two belfry storeys bristling with pinnacles and an
            // octagonal lantern; the centre a frontispiece of great glazed windows rising to a pinnacled gable
            // with Saint James, over the double staircase.
            const gr = [196, 189, 171],
              G = css(e.sh(gr)),
              S = css(e.sh(mixc(gr, [41, 40, 54], 0.3))),
              D = css(e.sh(mixc(gr, [41, 40, 54], 0.15))),
              Lt = css(e.sh(mixc(gr, [255, 248, 225], 0.4)));
            box(-8, 34, 17, 34, G); // the frontispiece
            for (const p of [-5, 5]) box(p, 33, 1, 27, Lt); // its pilasters
            box(-1, 14, 3, 7, 2); // the portal
            dome(0, 14, 1.5, 2);
            for (const b of [24, 32]) {
              box(-2, b - 1, 5, 6, 2); // the great windows
              dome(0, b - 1, 2, 2);
              box(0, b - 1, 1, 6, D);
            }
            for (const s of [-1, 1]) for (const b of [12, 21, 29]) box(s > 0 ? 6 : -7, b, 2, 3, 2);
            box(-9, 35, 19, 1, Lt);
            box(-5, 41, 11, 6, G);
            box(5, 41, 1, 6, S);
            box(-1, 39, 3, 3, 2);
            dome(0, 39, 1.5, 2);
            box(-6, 42, 13, 1, Lt);
            cone(0, 42, 4, 4, G); // the gable
            for (const s of [-1, 1]) {
              box(s * 7, 38, 1, 3, G);
              box(s * 5, 45, 1, 3, G);
            }
            box(-1, 47, 3, 1, D); // Saint James
            box(0, 49, 1, 3, D);
            box(0, 52, 1, 3, G);
            for (const cx of [-12, 12]) {
              box(cx - 3, 36, 7, 36, G); // the tower's shaft
              box(cx + 3, 35, 1, 35, S);
              box(cx - 3, 35, 1, 29, Lt);
              for (let y = 14; y < 34; y += 7) box(cx, y + 1, 1, 2, 2);
              box(cx - 4, 37, 9, 1, Lt);
              box(cx - 3, 44, 7, 7, G); // the first belfry
              box(cx + 3, 44, 1, 7, S);
              for (const s of [-1, 1]) {
                box(cx + s * 2, 42, 1, 4, 2);
                box(cx + s * 4, 40, 1, 3, G); // pinnacles
                box(cx + s * 3, 48, 1, 3, G);
              }
              box(cx - 4, 45, 9, 1, Lt);
              box(cx - 2, 50, 5, 5, G); // the second belfry
              box(cx + 2, 50, 1, 5, S);
              box(cx, 49, 1, 3, 2);
              box(cx - 2, 51, 5, 1, Lt);
              box(cx - 1, 54, 3, 3, G); // the lantern
              box(cx, 53, 1, 1, 2);
              dome(cx, 54, 1.5, G);
              box(cx, 58, 1, 3, G);
              box(cx - 1, 60, 3, 1, D); // the cross
              box(cx, 61, 1, 3, D);
            }
            box(-11, 3, 23, 3, D); // the double staircase
            box(-7, 6, 15, 3, G);
            box(-7, 6, 15, 1, Lt);
            box(-2, 5, 5, 4, 2);
            break;
          }
          case "pilar": {
            // Basílica del Pilar (Zaragoza), from the Ebro: a long brick church with four corner towers (the
            // far pair smaller), crowned in tiers with blue-tiled cupolas and lanterns, and between them a row of
            // cupolas glazed in blue, green, yellow and white around the big central dome on its windowed drum.
            const br = [214, 168, 132],
              B = css(e.sh(br)),
              S = css(e.sh(mixc(br, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(br, [255, 248, 225], 0.45))),
              tiles = [9, 12, 6];
            const tileDome = (cx, b, r) => {
              dome(cx, b, r, 7);
              for (let i = -r + 1, j = 0; i < r; i += 2, j++) {
                const rh = Math.floor(Math.sqrt(r * r - i * i));
                if (rh > 0) box(cx + i, b + rh, 1, rh, tiles[j % 3]);
              }
            };
            const tower = (cx, h, k) => {
              box(cx - k, h, 2 * k + 1, h, B);
              box(cx + k, h - 1, 1, h - 1, S);
              for (const s of [-k, k]) box(cx + s, h, 1, h, Lt); // stone corners
              for (let y = 16; y < h - 2; y += 5) box(cx, y + 1, 1, 2, 2);
              box(cx - k - 1, h + 1, 2 * k + 3, 1, Lt);
              box(cx - k, h + 5, 2 * k + 1, 4, B); // the belfry
              box(cx - k + 1, h + 4, 2 * k - 1, 3, 2);
              box(cx - k, h + 6, 2 * k + 1, 1, Lt);
              box(cx - k + 1, h + 9, 2 * k - 1, 3, B);
              box(cx, h + 8, 1, 1, 2);
              tileDome(cx, h + 9, k);
              box(cx, h + 9 + k + 3, 1, 3, Lt); // the lantern and its spike
              box(cx, h + 9 + k + 5, 1, 2, 3);
            };
            box(-21, 12, 43, 12, B); // the church
            box(-21, 1, 43, 1, S);
            for (let p = -19; p <= 19; p += 4) {
              box(p, 12, 1, 11, Lt); // pilasters
              if (Math.abs(p) > 2) box(p + 2, 9, 1, 3, 2);
            }
            box(-1, 7, 3, 6, 2);
            dome(0, 7, 1.5, 2);
            box(-21, 13, 43, 1, Lt);
            for (let p = -21; p <= 21; p += 2) box(p, 14, 1, 1, B); // the balustrade
            for (const p of [-15, -6, 6, 15]) {
              box(p - 1, 15, 3, 3, B);
              tileDome(p, 15, 2);
              box(p, 19, 1, 2, Lt);
              box(p, 21, 1, 1, 3);
            }
            box(-4, 18, 9, 6, B); // the drum of the central dome
            box(4, 18, 1, 6, S);
            for (const p of [-2, 0, 2]) box(p, 17, 1, 2, 2);
            box(-5, 18, 11, 1, Lt);
            tileDome(0, 18, 5);
            box(-1, 26, 3, 3, Lt); // its lantern
            box(0, 25, 1, 1, 2);
            dome(0, 26, 1, 7);
            box(0, 29, 1, 2, 3);
            for (const s of [-1, 1]) {
              tower(s * 11, 20, 1);
              tower(s * 19, 26, 2);
            }
            break;
          }
          case "alcazarToledo": {
            // Alcázar of Toledo: a square stone fortress-palace on its hill, a long facade with three floors of
            // windows under a tiled roof, and square corner towers capped by black slate spires.
            const st0 = [214, 200, 168],
              st = css(e.sh(st0)),
              Sd = css(e.sh(mixc(st0, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(st0, [255, 248, 225], 0.4))),
              slate = css(e.sh([70, 72, 86])),
              rock = css(e.sh([176, 150, 112]));
            box(-16, 3, 33, 3, rock); // the hilltop terrace
            box(-13, 16, 27, 13, st);
            box(-13, 17, 27, 1, 1); // the tiled roof
            box(-12, 18, 25, 1, chShade(1, 0.2));
            for (const y of [7, 10, 13]) for (let p = -10; p <= 10; p += 2) box(p, y, 1, 2, 2);
            box(-1, 7, 3, 4, 2); // the gate
            box(-2, 8, 5, 1, Lt);
            for (const cx of [-13, 13]) {
              box(cx - 2, 20, 5, 17, st);
              box(cx + 2, 20, 1, 17, Sd);
              for (const y of [8, 12, 16]) box(cx, y + 1, 1, 2, 2);
              box(cx - 3, 21, 7, 1, slate); // the flared foot of the slate spire
              cone(cx, 21, 2, 3, slate);
              cone(cx, 24, 1, 4, slate);
              box(cx, 30, 1, 2, slate);
              orb(cx, 31, 0.6, 3);
              box(cx, 33, 1, 1, 3);
            }
            break;
          }
          case "toledoCathedral": {
            // Toledo Cathedral, the west front: the tall Gothic tower at the left, a square shaft under an
            // octagonal storey ringed with pinnacles and a spire girt by three crowns of spikes; the portal of
            // the Pardon under a rose window and a little gable; at the right the Mozarabic Chapel's octagonal
            // drum and slate dome with its lantern.
            const st0 = [208, 198, 178],
              st = css(e.sh(st0)),
              S = css(e.sh(mixc(st0, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st0, [255, 248, 225], 0.4))),
              slate = css(e.sh([92, 96, 110]));
            box(-4, 21, 9, 21, st); // the facade
            box(-2, 9, 5, 9, 2); // the portal of the Pardon
            cone(0, 9, 2, 2, 2);
            box(-3, 11, 1, 10, Lt);
            box(3, 11, 1, 10, Lt);
            orb(0, 16, 2, 2); // the rose window
            orb(0, 16, 1, 11);
            box(-4, 21, 9, 1, Lt);
            cone(0, 21, 3, 3, st);
            for (const p of [-4, 4]) box(p, 24, 1, 3, st);
            box(5, 15, 8, 15, st); // the Mozarabic Chapel
            box(12, 14, 1, 14, S);
            box(5, 15, 8, 1, Lt);
            box(6, 22, 7, 7, st); // its octagonal drum
            box(11, 22, 2, 7, S);
            for (const p of [7, 9, 11]) box(p, 20, 1, 3, 2);
            box(5, 23, 9, 1, Lt);
            dome(9, 23, 3.5, slate);
            box(8, 30, 3, 3, st); // the lantern
            box(9, 29, 1, 1, 2);
            box(9, 32, 1, 3, 3);
            box(-11, 32, 7, 32, st); // the tower: square shaft
            box(-5, 31, 1, 31, S);
            for (const y of [20, 26]) box(-12, y, 9, 1, Lt);
            for (let y = 8; y < 30; y += 6) box(-8, y + 2, 1, 3, 2);
            box(-12, 33, 9, 1, Lt);
            for (const p of [-12, -4]) box(p, 36, 1, 3, st); // pinnacles
            box(-10, 41, 5, 8, st); // the octagonal storey
            box(-6, 41, 1, 8, S);
            box(-9, 39, 3, 5, 2);
            box(-8, 39, 1, 5, Lt);
            for (const p of [-11, -5]) box(p, 44, 1, 4, st);
            cone(-8, 41, 2, 14, st); // the spire with its three crowns of spikes
            for (const y of [44, 48, 52]) {
              const k = y < 46 ? 3 : y < 50 ? 2 : 1;
              box(-8 - k, y, 2 * k + 1, 1, st);
              for (const s of [-k, k]) box(-8 + s, y + 1, 1, 1, st);
            }
            box(-9, 57, 3, 1, 2); // the cross
            box(-8, 58, 1, 3, 2);
            break;
          }
          case "segoviaAqueduct": {
            // Aqueduct of Segovia: unmortared granite blocks in two tiers of round arches on slender piers,
            // the lower arches very tall, with a ledge where the piers step in, the upper ones short; on top
            // in the middle the little attic with the niche of the Virgin.
            const gr = [176, 166, 148],
              G = css(e.sh(gr)),
              S = css(e.sh(mixc(gr, [41, 40, 54], 0.3))),
              J = css(e.sh(mixc(gr, [41, 40, 54], 0.15))),
              Lt = css(e.sh(mixc(gr, [255, 248, 225], 0.35)));
            const tier = (n, b, h) => {
              const x0 = -n * 3 - 1;
              box(x0, b + h, n * 6 + 2, 2, G); // the band over the arches
              box(x0, b + h - 1, n * 6 + 2, 1, J);
              for (let i = 0; i <= n; i++) {
                const px = x0 + i * 6;
                box(px, b + h, 2, h, G);
                box(px + 1, b + h - 2, 1, h - 2, S);
                for (let j = b + 2 + (i % 2); j < b + h - 2; j += 3) box(px, j, 1, 1, J);
                if (h > 12) box(px - 1, b + Math.round(h * 0.55), 4, 1, Lt); // the ledge
              }
              for (let i = 0; i < n; i++) {
                const l = x0 + i * 6 + 2;
                box(l, b + h - 2, 1, 1, G); // round the opening's top corners
                box(l + 3, b + h - 2, 1, 1, G);
                box(l + 1, b + h - 1, 2, 1, Lt);
              }
            };
            tier(7, 0, 22);
            tier(7, 22, 9);
            box(-23, 34, 46, 1, Lt);
            box(-3, 37, 7, 3, G); // the attic
            box(-1, 36, 3, 2, 2);
            box(0, 36, 1, 1, 3);
            break;
          }
          case "alcazarSegovia": {
            // Alcázar of Segovia: cream walls on the rock, the Homage Tower at the left with turrets and a tall
            // slate cone, the long palace under slate roofs, the crenellated block of John II's tower with its
            // corner bartizans, and slender round turrets with needle-sharp slate cones along the prow.
            const w0 = [228, 212, 176],
              wl = css(e.sh(w0)),
              S = css(e.sh(mixc(w0, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(w0, [255, 248, 225], 0.4))),
              slate = css(e.sh([80, 86, 102])),
              rock = css(e.sh([150, 132, 104]));
            const turret = (cx, h, k, spire) => {
              box(cx - k, h, 2 * k + 1, h, wl);
              box(cx + k, h - 1, 1, h - 1, S);
              cone(cx, h, k + 1, spire, slate);
              box(cx, h + spire + 2, 1, 2, 3);
            };
            box(-19, 4, 38, 4, rock); // the rock and the outer wall
            box(-17, 7, 34, 3, wl);
            box(-6, 17, 22, 13, wl); // the palace
            box(15, 16, 1, 12, S);
            cone(5, 17, 11, 3, slate);
            for (let p = -4; p <= 14; p += 3) box(p, 13, 1, 2, 2);
            box(-1, 26, 9, 26, wl); // John II's tower
            box(7, 25, 1, 25, S);
            for (let p = -1; p <= 7; p += 2) box(p, 27, 1, 1, wl);
            for (const p of [-2, 8]) box(p, 25, 1, 3, wl); // bartizans
            for (const [p, y] of [
              [1, 20],
              [5, 20],
              [3, 16],
            ])
              box(p, y, 1, 2, 2);
            box(-13, 26, 7, 26, wl); // the Homage Tower
            box(-7, 25, 1, 25, S);
            box(-12, 20, 1, 2, 2);
            box(-9, 22, 1, 2, 2);
            cone(-10, 26, 3, 7, slate);
            box(-10, 35, 1, 2, 3);
            turret(-13, 28, 1, 4);
            turret(-7, 28, 1, 4);
            turret(-16, 16, 1, 5);
            turret(12, 21, 1, 5);
            turret(15, 21, 1, 5);
            break;
          }
          case "serranos": {
            // Torres de Serranos (Valencia): the Gothic city gate, two many-sided towers (lit and shaded faces)
            // with a corbelled, crenellated gallery jutting out at two thirds of their height and a narrower
            // crenellated storey above; between them the gate arch under a band of blind tracery and corbels.
            const st = [208, 198, 178],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              D = css(e.sh(mixc(st, [41, 40, 54], 0.5))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.4)));
            const merlons = (l, r, y) => {
              for (let p = l; p <= r; p += 2) box(p, y, 1, 1, B);
            };
            box(-6, 16, 13, 16, B); // the gate
            box(-6, 6, 13, 1, S);
            box(-1, 5, 3, 5, 2);
            dome(0, 5, 1.5, 2);
            box(-2, 6, 5, 1, Lt);
            for (let p = -5; p <= 5; p++) box(p, 11, 1, 2, p % 2 ? Lt : S); // the blind tracery
            for (let p = -5; p <= 5; p += 2) box(p, 14, 1, 1, D); // corbels
            merlons(-6, 6, 17);
            for (const cx of [-10, 10]) {
              box(cx - 4, 17, 9, 17, B);
              box(cx - 4, 17, 2, 17, Lt);
              box(cx + 3, 17, 2, 17, S);
              box(cx - 4, 7, 9, 1, S); // the string course
              box(cx - 5, 20, 11, 3, B); // the corbelled gallery
              box(cx + 3, 20, 3, 3, S);
              for (let p = cx - 5; p <= cx + 5; p += 2) box(p, 17, 1, 1, D);
              merlons(cx - 5, cx + 5, 21);
              box(cx - 3, 25, 7, 4, B); // the upper storey
              box(cx + 2, 25, 2, 4, S);
              merlons(cx - 3, cx + 3, 26);
            }
            break;
          }
          case "micalet": {
            // El Micalet (Valencia Cathedral's bell tower): a plain octagonal stone shaft (three faces in view,
            // lit and shaded) split by thin string courses, the belfry's tall pointed openings at the top, a
            // terrace with an openwork parapet and corner pinnacles, and the little open bell turret on top.
            const st = [214, 202, 178],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35)));
            box(-4, 33, 9, 33, B);
            box(-4, 33, 2, 33, Lt);
            box(3, 33, 2, 33, S);
            for (const y of [9, 16, 23]) box(-4, y, 9, 1, S);
            box(0, 13, 1, 2, 2);
            box(0, 20, 1, 2, 2);
            for (const p of [-3, 0, 3]) {
              box(p, 31, 1, 6, 2); // the belfry's pointed openings, one on each face
              box(p, 32, 1, 1, p ? (p < 0 ? Lt : S) : B);
            }
            for (let p = -4; p <= 4; p += 2) box(p, 33, 1, 1, S); // the tracery gablets
            box(-5, 34, 11, 1, Lt);
            for (let p = -5; p <= 5; p += 2) box(p, 35, 1, 1, B); // the openwork parapet
            for (const p of [-5, 5]) box(p, 37, 1, 3, B);
            box(-2, 40, 5, 5, B); // the bell turret, two storeys, a cupola and the cross
            box(2, 40, 1, 5, S);
            box(0, 39, 1, 3, 2);
            box(0, 37, 1, 1, 12);
            box(-2, 41, 5, 1, Lt);
            box(-1, 45, 3, 4, B);
            box(0, 44, 1, 2, 2);
            dome(0, 45, 1.5, B);
            box(0, 48, 1, 2, 2);
            box(-1, 49, 3, 1, 2);
            box(0, 50, 1, 1, 2);
            break;
          }
          case "manquita": {
            // Málaga Cathedral, "La Manquita" (the one-armed lady): a Baroque front of brownish sandstone with
            // three portals between columns, its north tower finished in tiers (belfry, clock storey, little
            // dome and lantern) and the south tower left a bare stump.
            const st = [196, 160, 118],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35)));
            box(-12, 22, 25, 22, B); // the front
            box(12, 21, 1, 21, S);
            for (const p of [-8, -4, 4, 8]) box(p, 20, 1, 18, Lt); // columns
            box(-1, 9, 3, 8, 2); // the portals
            dome(0, 9, 1.5, 2);
            for (const p of [-6, 6]) {
              box(p, 7, 1, 5, 2);
              box(p, 16, 1, 3, 2);
            }
            orb(0, 15, 1, 2);
            box(-13, 22, 27, 1, Lt);
            box(-5, 26, 11, 4, B); // the gable over the nave
            cone(0, 26, 4, 3, B);
            box(-5, 27, 11, 1, Lt);
            box(6, 28, 7, 6, B); // the unfinished south tower
            box(12, 27, 1, 5, S);
            box(8, 26, 1, 2, 2);
            box(10, 26, 1, 2, 2);
            box(-12, 31, 7, 9, B); // the north tower
            box(-6, 30, 1, 8, S);
            box(-13, 31, 9, 1, Lt);
            box(-11, 38, 5, 7, B); // its belfry
            box(-7, 37, 1, 6, S);
            box(-10, 36, 1, 4, 2);
            box(-8, 36, 1, 4, 2);
            for (const p of [-12, -6]) box(p, 34, 1, 2, B);
            box(-12, 39, 7, 1, Lt);
            box(-11, 43, 5, 4, B); // the clock storey
            orb(-9, 41, 1, 6);
            box(-9, 41, 1, 1, 2);
            box(-10, 46, 3, 3, B);
            dome(-9, 46, 2, B); // the little dome and its lantern
            box(-9, 49, 1, 2, Lt);
            box(-9, 51, 1, 2, 3);
            break;
          }
          case "murciaTower": {
            // The bell tower of Murcia Cathedral: stacked square storeys of warm stone, each narrower than the
            // one below (Renaissance at the foot, then the belfry with its bells), an octagonal storey with
            // little domed corner turrets (the conjuratorios), a dome and a tall lantern.
            const st = [222, 194, 148],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.4)));
            const storey = (k, b, h) => {
              box(-k, b + h, 2 * k + 1, h, B);
              box(k, b + h - 1, 1, h - 1, S);
              box(-k - 1, b + h, 2 * k + 3, 1, Lt);
            };
            box(-6, 2, 13, 2, S);
            storey(5, 0, 22);
            for (const p of [-3, 3]) box(p, 20, 1, 17, Lt); // pilasters
            for (const y of [8, 15]) box(0, y + 2, 1, 3, 2);
            storey(4, 22, 9);
            orb(0, 26, 1.2, 6); // the clock
            box(0, 26, 1, 1, 2);
            storey(4, 31, 8); // the belfry
            for (const p of [-2, 2]) {
              box(p, 37, 1, 5, 2);
              box(p, 33, 1, 1, 12);
            }
            storey(3, 39, 6);
            box(0, 43, 1, 3, 2);
            for (const p of [-4, 4]) {
              box(p, 42, 1, 3, B); // the conjuratorios
              dome(p, 42, 1, B);
            }
            dome(0, 45, 3, B);
            box(-1, 51, 3, 3, B); // the lantern
            box(0, 50, 1, 1, 2);
            dome(0, 51, 1.5, B);
            box(0, 54, 1, 3, 3);
            break;
          }
          case "meridaTheatre": {
            // Roman Theatre of Mérida: the scaenae frons, two storeys of white marble columns before the stone
            // stage wall, with the higher middle bay of the royal door, over the stage's podium.
            const st = [206, 180, 134],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              mb = 6,
              M = css(e.sh(mixc(colors[6], [41, 40, 54], 0.2)));
            box(-21, 4, 43, 4, S); // the podium
            box(-21, 4, 43, 1, B);
            box(-19, 13, 39, 9, B); // the stage wall, lower storey
            box(-17, 20, 35, 7, B); // upper storey
            for (const p of [-14, 14]) box(p - 2, 9, 5, 5, 2); // the side doors
            box(-2, 10, 5, 6, 2); // the royal door
            dome(0, 10, 2, 2);
            box(-19, 14, 39, 1, mb); // the entablatures
            box(-17, 21, 35, 1, mb);
            for (let p = -18; p <= 18; p += 3) {
              box(p, 13, 1, 9, mb); // columns, shaded on their right
              if (p < 18) box(p + 1, 12, 1, 7, M);
            }
            for (let p = -16; p <= 16; p += 4) box(p, 20, 1, 6, mb);
            box(-4, 22, 9, 1, mb); // the pediment over the middle bay
            cone(0, 22, 4, 2, mb);
            break;
          }
          case "milagros": {
            // Los Milagros Aqueduct (Mérida): tall granite piers banded with red brick, buttressed at the foot,
            // joined by thin brick arches at three levels; the channel along the top is long gone, so the
            // piers end raggedly at different heights.
            const gr = [170, 162, 148],
              G = css(e.sh(gr)),
              S = css(e.sh(mixc(gr, [41, 40, 54], 0.3))),
              Br = css(e.sh([186, 92, 64])),
              tops = [30, 32, 31, 29, 31, 26];
            tops.forEach((h, i) => {
              const px = -19 + i * 7;
              box(px - 1, 6, 5, 6, G); // the buttress at the foot
              box(px, h, 3, h, G);
              box(px + 2, h - 1, 1, h - 1, S);
              for (let y = 4; y < h; y += 5) box(px, y, 3, 1, Br); // brick bands
              box(px + 1, h + 1, 1, 1, G);
            });
            for (let i = 0; i < 5; i++) {
              const l = -16 + i * 7;
              for (const y of [12, 21, i % 3 === 2 ? 0 : 28]) {
                if (!y) continue;
                box(l, y, 4, 1, Br);
                box(l, y - 1, 1, 1, Br);
                box(l + 3, y - 1, 1, 1, Br);
              }
            }
            break;
          }
          case "ponteVella": {
            // Ponte Vella (Ourense): a Roman-and-medieval granite bridge whose roadway climbs steeply to one great
            // pointed arch over the Miño, with smaller round arches stepping down on either side.
            const gr = [178, 166, 146],
              G = css(e.sh(gr)),
              S = css(e.sh(mixc(gr, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(gr, [255, 248, 225], 0.35))),
              arches = [
                [2, 5.5, 3, 14, 1],
                [-9, 2.5, 2, 6, 0],
                [12, 2, 1, 4, 0],
              ];
            for (let x = -15; x <= 15; x++) {
              const d = 18 - Math.round(Math.abs(x - 2) * 0.6);
              let a = 0;
              for (const [cx, hw, sp, top, pointed] of arches) {
                const dx = Math.abs(x - cx) / hw;
                if (dx < 1) {
                  const f = pointed ? 1 - dx ** 1.5 : Math.sqrt(1 - dx * dx);
                  a = Math.round(sp + (top - sp) * f);
                }
              }
              box(x, d, 1, d - a, G);
              if (a) box(x, a + 1, 1, 1, Lt); // the voussoirs
              box(x, d + 1, 1, 1, Lt); // the parapet
            }
            for (const p of [-5, 9]) box(p, 4, 1, 4, S); // the cutwaters
            break;
          }
          case "teruelTower": {
            // Tower of El Salvador (Teruel): a slender Mudéjar brick tower over a pointed archway, faced in green
            // and white glazed tiles and discs, interlaced brick arches and twin windows, under a belfry and a
            // low tiled pyramid roof.
            const br = [192, 124, 88],
              B = css(e.sh(br)),
              S = css(e.sh(mixc(br, [41, 40, 54], 0.3))),
              D = css(e.sh(mixc(br, [41, 40, 54], 0.17)));
            box(-3, 40, 7, 40, B);
            box(3, 39, 1, 39, S);
            box(-1, 6, 3, 6, 2); // the archway the street runs through
            cone(0, 6, 1, 1, 2);
            for (const y of [10, 17, 24, 32]) for (let p = -3; p <= 3; p++) box(p, y, 1, 1, p % 2 ? 9 : 6); // tile bands
            for (const y of [14, 21])
              for (const p of [-2, 2]) {
                box(p, y, 1, 1, 9); // glazed discs
                box(0, y + 1, 1, 3, 2); // a window
              }
            for (let y = 25; y < 32; y++) for (let p = -2; p <= 2; p++) if ((p + y) % 2) box(p, y, 1, 1, D); // interlaced arches
            for (const p of [-3, 3]) box(p, 31, 1, 6, 9); // the green columns
            for (const p of [-1, 1]) {
              box(p, 38, 1, 4, 2); // the belfry's twin openings
              box(p, 35, 1, 1, 12);
            }
            box(-4, 41, 9, 1, D);
            cone(0, 41, 4, 3, css(e.sh([168, 92, 66])));
            box(0, 46, 1, 2, 3);
            break;
          }
          case "pamplonaCathedral": {
            // Pamplona Cathedral, Ventura Rodríguez's Neoclassical front: a portico of four columns under a
            // pediment between two broad square towers with clocks, each topped by a belfry and a bell-shaped
            // cupola with a cross.
            const st = [222, 202, 164],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.45)));
            box(-14, 17, 29, 17, B);
            box(-5, 15, 11, 13, S); // the portico's shade
            for (const p of [-5, -2, 2, 5]) box(p, 15, 1, 13, Lt); // its columns
            box(-1, 7, 3, 5, 2);
            box(-6, 17, 13, 2, Lt);
            cone(0, 17, 6, 4, B); // the pediment
            box(0, 23, 1, 2, 3);
            for (const cx of [-10, 10]) {
              box(cx - 4, 27, 9, 10, B);
              box(cx + 4, 26, 1, 25, S);
              box(cx, 9, 1, 3, 2);
              orb(cx, 22, 1.5, 6); // the clock
              box(cx, 22, 1, 1, 2);
              box(cx - 5, 27, 11, 1, Lt);
              box(cx - 3, 34, 7, 7, B); // the belfry
              box(cx + 3, 33, 1, 6, S);
              box(cx - 1, 32, 3, 5, 2);
              box(cx, 30, 1, 2, 12);
              box(cx - 4, 35, 9, 1, Lt);
              dome(cx, 35, 3, B); // the cupola
              box(cx, 39, 1, 2, Lt);
              box(cx - 1, 41, 3, 1, 2);
              box(cx, 42, 1, 2, 2);
            }
            break;
          }
          case "vitoriaCathedral": {
            // New Cathedral of Vitoria (Mary Immaculate): a broad, towerless neo-Gothic front, three deep pointed
            // portals (the middle one tallest) between buttresses that rise to pinnacles, a pierced parapet, and
            // a central gable with a rose window and a cross.
            const st = [204, 194, 172],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.4)));
            const portal = (cx, k, h) => {
              box(cx - k - 1, h - k, 2 * k + 3, h - k, Lt);
              cone(cx, h - k, k + 1, k + 1, Lt);
              box(cx - k, h - k - 1, 2 * k + 1, h - k - 1, 2);
              cone(cx, h - k - 1, k, k, 2);
            };
            box(-14, 20, 29, 20, B);
            box(-14, 1, 29, 1, S);
            portal(0, 3, 15);
            for (const p of [-9, 9]) portal(p, 2, 11);
            for (let p = -12; p <= 12; p += 2) if (Math.abs(p) > 4) box(p, 17, 1, 2, 2); // windows
            box(-14, 21, 29, 1, Lt);
            for (let p = -13; p <= 13; p += 2) box(p, 22, 1, 1, B); // the pierced parapet
            for (const p of [-14, -5, 5, 14]) {
              box(p, 24, 1, 23, Lt); // buttresses and their pinnacles
              cone(p, 24, 1, 3, B);
            }
            box(-4, 27, 9, 6, B); // the central gable
            box(4, 27, 1, 6, S);
            cone(0, 27, 4, 4, B);
            orb(0, 24, 2, 2); // the rose window
            orb(0, 24, 1, 11);
            box(0, 33, 1, 3, 2);
            box(-1, 34, 3, 1, 2);
            break;
          }
          case "salamancaCathedrals": {
            // Salamanca's two cathedrals in golden Villamayor stone, as seen from the river: the New Cathedral's
            // Gothic nave with pinnacled buttresses, its Baroque crossing dome on a windowed drum and its tall
            // bell tower (belfry, octagonal storey, dome and lantern), and the Old Cathedral's Torre del Gallo,
            // a scaly stone cone between little corner turrets.
            const st = [224, 180, 112],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.4)));
            box(-15, 18, 23, 18, B); // the nave
            box(-15, 1, 23, 1, S);
            for (let p = -13; p <= 6; p += 4) {
              box(p, 21, 1, 20, Lt); // buttresses and pinnacles
              box(p + 2, 14, 1, 6, 2);
            }
            box(-16, 18, 25, 1, Lt);
            box(-6, 27, 9, 9, B); // the crossing dome's drum
            box(2, 26, 1, 8, S);
            for (const p of [-4, -2, 0]) box(p, 25, 1, 3, 2);
            box(-7, 27, 11, 1, Lt);
            dome(-2, 27, 4.5, B);
            box(-2, 30, 1, 2, Lt);
            box(-3, 35, 3, 3, B); // its lantern
            box(-2, 34, 1, 1, 2);
            box(-2, 37, 1, 2, 3);
            box(-14, 23, 7, 5, B); // the Torre del Gallo
            for (const p of [-13, -11, -9]) box(p, 22, 1, 2, 2);
            for (let j = 0; j < 7; j++) {
              const k = Math.round(3 * (1 - j / 7));
              box(-11 - k, 24 + j, 2 * k + 1, 1, j % 2 ? S : B); // the scales
            }
            box(-11, 32, 1, 2, 3);
            for (const p of [-14, -8]) cone(p, 23, 1, 3, B);
            box(8, 42, 7, 42, B); // the bell tower
            box(14, 41, 1, 41, S);
            for (let y = 22; y < 40; y += 6) box(11, y + 2, 1, 3, 2);
            box(7, 43, 9, 1, Lt);
            box(8, 50, 7, 7, B); // the belfry
            box(14, 49, 1, 6, S);
            for (const p of [10, 12]) box(p, 49, 1, 5, 2);
            box(7, 51, 9, 1, Lt);
            for (const p of [7, 15]) box(p, 54, 1, 3, B);
            box(9, 56, 5, 5, B); // the octagonal storey
            box(13, 56, 1, 5, S);
            box(11, 55, 1, 3, 2);
            dome(11, 56, 2.5, B);
            box(10, 62, 3, 3, B); // the lantern
            box(11, 61, 1, 1, 2);
            box(11, 64, 1, 3, 3);
            break;
          }
          case "zamoraCathedral": {
            // Zamora Cathedral: a low Romanesque church with its famous Byzantine-style dome, a scaly stone
            // dome on a drum of windows between little domed corner turrets, and the massive square bell tower
            // whose windows grow in number from one storey to the next.
            const st = [218, 184, 130],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.4)));
            box(-13, 12, 21, 12, B); // the church
            box(-13, 1, 21, 1, S);
            for (let p = -11; p <= 5; p += 4) box(p, 9, 1, 3, 2);
            box(-3, 7, 3, 6, 2); // the portal
            dome(-2, 7, 1.5, 2);
            box(-14, 13, 23, 1, Lt);
            box(-8, 18, 9, 5, B); // the drum
            box(0, 17, 1, 4, S);
            for (const p of [-6, -4, -2]) box(p, 17, 1, 3, 2);
            dome(-4, 18, 4, B);
            for (let y = 19; y < 22; y += 2) box(-7, y, 7, 1, S); // the stone scales
            box(-4, 23, 1, 2, 3);
            for (const p of [-9, 1]) {
              box(p - 1, 19, 3, 5, B); // the corner turrets
              dome(p, 19, 1.5, B);
            }
            box(5, 28, 9, 28, B); // the bell tower
            box(13, 27, 1, 27, S);
            box(4, 29, 11, 1, Lt);
            box(9, 11, 1, 3, 2);
            for (const p of [7, 11]) box(p, 18, 1, 3, 2);
            for (const p of [7, 9, 11]) box(p, 25, 1, 4, 2);
            break;
          }
          case "tarragonaCathedral": {
            // Tarragona Cathedral, the west front: a tall pale Gothic portal between buttresses crowned with
            // pinnacles, a great rose window above it, the unfinished top with its two little openings, the
            // lower Romanesque side fronts with their small round windows, and the octagonal bell tower behind.
            const st = [222, 210, 184],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.45))),
              old = css(e.sh([206, 170, 120]));
            box(8, 30, 5, 30, old); // the bell tower
            box(12, 29, 1, 28, S);
            box(10, 27, 1, 3, 2);
            cone(10, 30, 2, 4, old);
            for (const s of [-1, 1]) {
              box(s > 0 ? 7 : -12, 11, 6, 11, old); // the side fronts
              orb(s * 9, 7, 1, 2);
            }
            box(-7, 27, 15, 27, B);
            box(-5, 13, 11, 13, Lt); // the portal
            cone(0, 13, 5, 5, Lt);
            box(-3, 11, 7, 11, S); // the archivolts
            cone(0, 11, 3, 3, S);
            box(-2, 8, 5, 8, 2); // the doors
            cone(0, 8, 2, 2, 2);
            box(0, 8, 1, 8, Lt); // the trumeau
            orb(0, 21, 3.5, 2); // the rose window
            orb(0, 21, 2.5, 6);
            orb(0, 21, 1, 2);
            for (const p of [-7, 7]) {
              box(p, 30, 1, 29, B); // the buttresses
              cone(p, 30, 1, 3, B);
            }
            for (const p of [-4, 4]) {
              box(p - 1, 30, 3, 3, B); // the two openings at the top
              box(p, 29, 1, 2, 2);
            }
            break;
          }
          case "santoDomingoSoria": {
            // Santo Domingo (Soria): a broad Romanesque front of warm golden stone under a low gable, the deep
            // portal of stepped archivolts, two rows of blind arcading, a rose window, and the squat bell tower
            // behind.
            const st = [216, 164, 104],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35)));
            box(-9, 21, 7, 21, B); // the bell tower
            box(-3, 20, 1, 20, S);
            box(-7, 19, 3, 3, 2);
            box(-6, 17, 1, 1, 12);
            box(-11, 13, 23, 13, B);
            box(11, 12, 1, 12, S);
            cone(0, 13, 11, 5, B); // the gable
            for (let j = 0; j < 5; j++) {
              const k = Math.round(11 * (1 - j / 5));
              box(-k, 14 + j, 1, 1, Lt);
              box(k, 14 + j, 1, 1, S);
            }
            orb(0, 15, 2.5, 3); // the rose window
            orb(0, 15, 1.5, 2);
            box(0, 15, 1, 1, Lt);
            for (let p = -10; p <= 10; p += 2) {
              if (Math.abs(p) > 4) box(p, 5, 1, 3, S); // the blind arcades
              box(p, 11, 1, 2, S);
            }
            box(-11, 9, 23, 1, Lt);
            for (const [k, col] of [
              [4, Lt],
              [3, S],
              [2, Lt],
            ]) {
              box(-k, 9 - (4 - k), 2 * k + 1, 9 - (4 - k), col); // the archivolts
              dome(0, 9 - (4 - k), k, col);
            }
            box(-1, 5, 3, 5, 2);
            dome(0, 5, 1, 2);
            break;
          }
          case "sanJuanDuero": {
            // San Juan de Duero (Soria): the ruined cloister's arcade of interlaced pointed arches, Islamic in
            // feel, on slender paired columns, open to the sky.
            const st = [214, 174, 118],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3)));
            box(-15, 1, 31, 1, S);
            for (let p = -15; p <= 15; p += 3) {
              box(p, 6, 1, 5, B); // the columns and their capitals
              box(p - 1, 6, 3, 1, B);
            }
            for (let p = -15; p <= 9; p += 3)
              for (let j = 0; j <= 3; j++) {
                box(p + j, 6 + j, 1, 1, j === 3 ? B : S); // each arch leaps over the next column
                box(p + 6 - j, 6 + j, 1, 1, B);
              }
            box(-16, 10, 33, 1, B);
            break;
          }
          case "peregrina": {
            // Sanctuary of the Pilgrim Virgin (Pontevedra): a granite Baroque church shaped like a scallop shell,
            // its rounded front (lit on the left, shaded on the right) in two storeys with niches and a pediment,
            // crowned by two belfry towers with domed lanterns, a clock on the left one, over a fountain and
            // the steps.
            const gr = [196, 188, 170],
              G = css(e.sh(gr)),
              S = css(e.sh(mixc(gr, [41, 40, 54], 0.3))),
              D = css(e.sh(mixc(gr, [41, 40, 54], 0.15))),
              Lt = css(e.sh(mixc(gr, [255, 248, 225], 0.35)));
            box(-9, 2, 19, 2, D); // the steps
            box(-7, 23, 15, 21, G); // the round body
            box(-7, 23, 2, 21, Lt);
            box(5, 23, 1, 21, D);
            box(6, 23, 2, 21, S);
            box(-8, 13, 17, 1, Lt);
            box(-8, 23, 17, 1, Lt);
            box(-2, 7, 5, 5, 2); // the fountain's arch
            dome(0, 7, 2, 2);
            box(-1, 11, 3, 2, 2); // the window over it
            for (const p of [-4, 0, 4]) box(p, 20, 1, 3, 2); // niches
            cone(0, 23, 4, 3, G); // the pediment
            for (const cx of [-4, 4]) {
              box(cx - 2, 31, 5, 8, G); // the towers
              box(cx + 2, 31, 1, 8, S);
              box(cx, 30, 1, 3, 2);
              box(cx - 3, 32, 7, 1, Lt);
              box(cx - 1, 35, 3, 3, G);
              box(cx, 34, 1, 1, 2);
              dome(cx, 35, 1.5, G);
              box(cx, 38, 1, 2, D);
            }
            orb(-4, 26, 1, 6); // the clock
            box(-1, 41, 3, 1, D); // the cross
            box(0, 42, 1, 3, D);
            break;
          }
          case "cristoOtero": {
            // Cristo del Otero (Palencia): Victorio Macho's huge Art Deco Christ in white concrete on its bare
            // hill, a stiff, column-like robe falling in straight folds, the hands raised to the chest in
            // blessing, over the little hermitage at its feet.
            const W = css(e.sh([232, 230, 220])),
              S = css(e.sh([182, 180, 172])),
              hill = css(e.sh([176, 150, 104]));
            for (let i = -8; i <= 8; i++) {
              const up = Math.max(1, Math.round(5 * Math.cos((i / 9) * (Math.PI / 2))));
              box(i, up, 1, up, hill);
            }
            box(-3, 9, 7, 4, W); // the hermitage under the statue
            box(-1, 8, 3, 3, 2);
            for (let y = 10; y <= 27; y++) {
              const k = y < 13 ? 3 : 2;
              box(-k, y, 2 * k + 1, 1, W);
              box(k, y, 1, 1, S);
            }
            for (const p of [-1, 1]) box(p, 21, 1, 9, S); // the folds of the robe
            box(-2, 24, 2, 2, S); // the hands in blessing
            box(1, 25, 1, 2, S);
            box(-1, 30, 3, 3, W); // the head
            box(1, 30, 1, 3, S);
            break;
          }
          case "bellver": {
            // Bellver Castle (Palma): the round Gothic castle on its pine-covered hill, a drum of golden stone
            // ringed by crenels, three round towers set into its wall, and the free-standing Homage Tower
            // joined to it by a flying arch.
            const st = [216, 186, 132],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              pine = css(e.sh([88, 122, 76]));
            box(-13, 3, 33, 3, pine); // the hill
            box(-9, 13, 19, 10, B); // the round castle
            box(-9, 13, 3, 10, Lt);
            box(7, 13, 3, 10, S);
            for (let p = -9; p <= 9; p += 2) box(p, 14, 1, 1, B);
            for (const [cx, h] of [
              [-9, 16],
              [0, 15],
              [9, 16],
            ]) {
              box(cx - 2, h, 5, h - 3, B); // the round towers
              box(cx + 2, h - 1, 1, h - 4, S);
              box(cx - 1, h + 1, 3, 1, B);
              box(cx, h - 3, 1, 2, 2);
            }
            box(-1, 7, 3, 4, 2); // the gate
            box(15, 22, 5, 19, B); // the Homage Tower
            box(15, 22, 1, 19, Lt);
            box(19, 21, 1, 18, S);
            box(16, 23, 3, 1, B);
            box(17, 18, 1, 2, 2);
            box(11, 14, 4, 1, B); // the flying arch
            box(12, 13, 2, 1, B);
            break;
          }
          case "auditorioTenerife": {
            // Auditorio de Tenerife (Calatrava): the white concrete concert hall, a rounded shell over a dark
            // glazed foot on a broad podium, and the great curling wing that springs from its back, rises
            // and sweeps forward over the top to a sharp point.
            const Wt = css(e.sh(colors[6])),
              S = css(e.sh(mixc(colors[6], [41, 40, 54], 0.25)));
            box(-15, 3, 31, 3, S); // the podium
            box(-11, 6, 21, 3, 2); // the glazed foot
            for (let i = -10; i <= 8; i++) {
              const up = 6 + Math.round(10 * Math.sqrt(1 - ((i + 1) / 10) ** 2)); // the shell
              box(i, up, 1, up - 6, i > 4 ? S : Wt);
            }
            for (let s = 0; s <= 28; s++) {
              const f = s / 28, // the wing: up from the back, then forward to the tip
                x = Math.round(9 - 22 * f ** 1.4),
                y = Math.round(6 + 20 * Math.sin(Math.PI * 0.62 * f) + 4 * f),
                th = Math.max(1, Math.round(6 * (1 - f)));
              box(x, y, 2, th, f > 0.5 ? Wt : S);
              box(x, y, 1, 1, Wt);
            }
            break;
          }
