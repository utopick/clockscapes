          case "palaceParliament": {
            // Palace of the Parliament (Bucharest): the white wedding cake seen from its avenue, long wings of
            // close-set windows on a terrace, then storeys stepping back in tiers, each ringed by columns, up to
            // the central block with its colonnaded loggia, a crowning attic and the flag.
            const m = [238, 232, 216],
              W = css(e.sh(m)),
              S = css(e.sh(mixc(m, [41, 40, 54], 0.25))),
              D = css(e.sh(mixc(m, [41, 40, 54], 0.5))),
              Lt = css(e.sh(mixc(m, [255, 248, 225], 0.5)));
            box(-19, 2, 39, 2, S); // the terrace
            box(-19, 10, 39, 8, W);
            box(19, 10, 1, 8, S);
            for (let p = -18; p <= 18; p += 2) {
              box(p, 4, 1, 2, D); // ground-floor arches
              box(p, 8, 1, 2, S);
            }
            box(-19, 6, 39, 1, Lt);
            box(-19, 10, 39, 1, Lt);
            box(-20, 11, 41, 1, W); // the balustrade
            for (let p = -19; p <= 19; p += 2) box(p, 12, 1, 1, W);
            const tier = (hw, base, h) => {
              box(-hw, base + h, 2 * hw + 1, h, W);
              box(hw, base + h, 1, h, S);
              for (let p = -hw + 1; p < hw; p += 2) box(p, base + h - 1, 1, h - 2, S); // the colonnade
              box(-hw, base + h, 2 * hw + 1, 1, Lt);
              box(-hw - 1, base + h + 1, 2 * hw + 3, 1, W);
            };
            tier(14, 12, 4);
            tier(10, 17, 3);
            tier(6, 21, 3);
            // the central loggia: tall columns, then the attic and the flag
            box(-3, 28, 7, 3, D);
            for (const p of [-3, -1, 1, 3]) box(p, 28, 1, 3, Lt);
            box(-4, 29, 9, 1, Lt);
            box(-2, 31, 5, 2, W);
            box(2, 31, 1, 2, S);
            box(0, 34, 1, 3, 8);
            box(1, 34, 2, 1, 7);
            box(1, 33, 2, 1, 12);
            box(1, 32, 2, 1, 10);
            break;
          }
          case "arculTriumf": {
            // Arcul de Triumf (Bucharest): one tall round arch in grey-white stone, a round relief medallion high
            // on each pier above a relief panel, corner pilasters, a deep cornice and an attic with the
            // inscription, statues at its corners and the flag in the middle.
            const m = [214, 208, 194],
              W = css(e.sh(m)),
              S = css(e.sh(mixc(m, [41, 40, 54], 0.25))),
              D = css(e.sh(mixc(m, [41, 40, 54], 0.45))),
              Lt = css(e.sh(mixc(m, [255, 248, 225], 0.45)));
            box(-10, 2, 21, 2, S); // the plinth
            box(-10, 19, 21, 17, W);
            box(10, 19, 1, 17, S);
            for (const p of [-10, -9, 8, 9]) box(p, 18, 1, 16, p === -10 ? Lt : p > 0 ? S : W); // corner pilasters
            dome(0, 12, 5, Lt); // the archivolt
            box(-4, 12, 9, 10, 2);
            dome(0, 12, 4, 2);
            box(0, 17, 1, 1, S); // keystone
            for (const p of [-2, 0, 2]) box(p, 14, 1, 1, D); // coffers
            for (const s of [-1, 1]) {
              orb(s * 7, 15, 1.5, Lt); // the medallion
              box(s * 7, 15, 1, 1, S);
              box(s * 7 - 1, 10, 3, 5, S); // the relief panel
              box(s * 7, 8, 1, 2, Lt);
            }
            box(-10, 20, 21, 1, D); // the frieze
            box(-11, 21, 23, 1, Lt);
            box(-10, 25, 21, 4, W); // the attic
            box(10, 25, 1, 4, S);
            box(-6, 24, 13, 2, S); // the inscription
            for (let p = -5; p <= 5; p += 2) box(p, 23, 1, 1, D);
            box(-11, 26, 23, 1, Lt);
            for (const s of [-1, 1]) {
              box(s * 9 - 1, 28, 3, 2, W); // corner sculptures
              box(s * 9, 30, 1, 2, S);
            }
            box(0, 31, 1, 5, 8);
            box(1, 31, 2, 1, 7);
            box(1, 30, 2, 1, 12);
            box(1, 29, 2, 1, 10);
            break;
          }
          case "constantaCasino": {
            // Constanța Casino: the white Art Nouveau casino on the seafront, an arcade of round arches along
            // the ground floor, rounded corner pavilions, and the tall central bay with its great fan window
            // under a curled, crested gable.
            const m = [240, 236, 226],
              W = css(e.sh(m)),
              S = css(e.sh(mixc(m, [41, 40, 54], 0.25))),
              D = css(e.sh(mixc(m, [41, 40, 54], 0.55))),
              Lt = css(e.sh(mixc(m, [255, 248, 225], 0.5))),
              G = css(e.sh([92, 118, 128]));
            box(-14, 2, 29, 2, S); // the terrace
            box(-14, 10, 29, 8, W);
            box(14, 10, 1, 8, S);
            for (let p = -12; p <= 12; p += 3) {
              box(p, 6, 2, 3, D); // the arcade
              dome(p + 0.5, 6, 1, D);
            }
            box(-14, 10, 29, 1, Lt);
            box(-15, 11, 31, 1, W);
            for (const s of [-1, 1]) {
              // rounded corner pavilions with little domes
              box(s * 12 - 2, 14, 5, 3, W);
              box(s * 12 - 1, 13, 3, 1, D);
              dome(s * 12, 14, 2, Lt);
              box(s * 12, 17, 1, 1, 12);
            }
            // the central bay: fan window, flanking pilasters and the crested gable
            box(-6, 19, 13, 8, W);
            box(6, 19, 1, 8, S);
            for (const p of [-6, 6]) box(p, 20, 1, 9, Lt);
            box(-4, 15, 9, 3, G);
            dome(0, 15, 4, G);
            for (const p of [-2, 0, 2]) stroke(0, 15, p * 2, 18, 6); // the fan's glazing bars
            dome(0, 19, 6, W);
            box(-1, 25, 3, 1, Lt); // the crest
            box(0, 26, 1, 1, 12);
            for (const s of [-1, 1]) {
              box(s * 7, 22, 1, 2, Lt); // curled finials
              box(s * 4, 23, 1, 1, Lt);
            }
            break;
          }
          case "carolMosque": {
            // Carol I Mosque (Constanța): a square hall of pale stone and brick under a grey Byzantine dome on a
            // drum, a pointed portal, and the tall slim minaret beside it with one wide balcony, a lantern and
            // a pointed lead cap with a crescent.
            const m = [214, 204, 184],
              W = css(e.sh(m)),
              S = css(e.sh(mixc(m, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(m, [255, 248, 225], 0.4))),
              Br = css(e.sh([170, 108, 86])),
              Dm = css(e.sh([150, 158, 168])),
              DmL = css(e.sh([196, 202, 210]));
            // the hall
            box(-10, 12, 15, 11, W);
            box(4, 12, 1, 11, S);
            for (const r of [4, 8]) box(-10, r, 15, 1, Br); // brick bands
            box(-5, 9, 5, 7, Lt); // the portal
            box(-4, 7, 3, 5, 2);
            cone(-3, 7, 1, 2, 2);
            for (const p of [-9, 2]) box(p, 10, 1, 3, 2);
            box(-11, 13, 17, 1, Lt);
            // drum and dome
            box(-7, 16, 9, 3, W);
            for (const p of [-6, -4, -2, 0]) box(p, 15, 1, 1, 2);
            dome(-3, 16, 5, Dm);
            dome(-4, 17, 3, DmL);
            box(-3, 22, 1, 2, 3);
            // the minaret
            box(6, 34, 3, 32, W);
            box(8, 34, 1, 32, S);
            for (let r = 6; r < 30; r += 6) box(7, r, 1, 1, 2);
            box(5, 36, 5, 2, Lt); // the balcony
            box(5, 37, 5, 1, S);
            box(6, 40, 3, 3, W); // the lantern
            box(7, 39, 1, 2, 2);
            cone(7, 40, 1, 6, Dm);
            box(7, 48, 1, 2, 3);
            break;
          }
          case "blackChurch": {
            // The Black Church (Brașov): the soot-darkened Gothic hall church seen from the side, tall
            // buttresses between pointed windows, a huge steep tiled roof, the lower choir roof at the east end,
            // and the heavy west tower with its clock, a little steep spire and corner pinnacles.
            const st = [104, 100, 102],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.35))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.25))),
              rf = [146, 88, 70],
              R = css(e.sh(rf)),
              RS = css(e.sh(mixc(rf, [41, 40, 54], 0.3)));
            box(-13, 2, 27, 2, S); // the plinth
            box(-7, 14, 18, 12, B); // the nave
            for (let p = -6; p <= 9; p += 3) {
              box(p, 14, 1, 12, Lt); // buttresses
              box(p + 1, 11, 1, 6, 2); // pointed windows
              box(p + 1, 12, 1, 1, S);
            }
            box(11, 11, 3, 9, B); // the choir
            box(13, 11, 1, 9, S);
            box(12, 9, 1, 4, 2);
            // the steep roofs, with tile rows
            for (let j = 1; j <= 14; j++) {
              const k = Math.round(j * 0.36);
              box(-7 + k, 14 + j, 18 - 2 * k, 1, j % 3 ? R : RS);
            }
            for (let j = 1; j <= 6; j++) box(11, 11 + j, Math.max(1, 3 - Math.floor(j / 2)), 1, RS);
            // the west tower
            box(-13, 30, 7, 28, B);
            box(-7, 30, 1, 28, S);
            for (const r of [10, 19]) box(-13, r, 7, 1, Lt);
            box(-11, 7, 3, 4, 2); // the west portal
            box(-10, 16, 1, 3, 2);
            box(-12, 28, 1, 3, 2); // belfry openings
            box(-9, 28, 1, 3, 2);
            orb(-10, 23, 1.5, 3); // the clock
            box(-10, 23, 1, 1, 2);
            box(-14, 31, 9, 1, Lt);
            cone(-10, 31, 2, 8, RS);
            box(-10, 41, 1, 2, 3);
            for (const p of [-13, -7]) box(p, 33, 1, 2, B); // corner pinnacles
            break;
          }
          case "iasiPalaceCulture": {
            // Palace of Culture (Iași): the grey neo-Gothic palace, a long front of pointed windows under a
            // pinnacled parapet and steep slate roofs, square corner pavilions with pointed roofs, a gabled
            // porch, and the tall central clock tower with its corner turrets and slender spire.
            const st = [200, 194, 178],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              D = css(e.sh(mixc(st, [41, 40, 54], 0.55))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.4))),
              sl = [92, 100, 112],
              R = css(e.sh(sl)),
              RL = css(e.sh(mixc(sl, [255, 248, 225], 0.2)));
            box(-18, 2, 37, 2, S);
            box(-18, 15, 37, 13, B);
            box(18, 15, 1, 13, S);
            for (let p = -15; p <= 15; p += 2)
              if (Math.abs(p) > 4) {
                box(p, 7, 1, 3, D);
                box(p, 12, 1, 3, D);
              }
            box(-18, 9, 37, 1, Lt);
            box(-18, 15, 37, 1, Lt);
            for (let p = -17; p <= 17; p += 2) box(p, 16, 1, 1, Lt); // the pinnacled parapet
            for (let j = 1; j <= 4; j++) box(-15 + j, 16 + j, 30 - 2 * j + 1, 1, j % 2 ? R : RL); // slate roof
            for (const s of [-1, 1]) {
              // corner pavilions
              const px = s * 16;
              box(px - 2, 19, 5, 17, B);
              box(px + 2, 19, 1, 17, S);
              for (const r of [7, 12, 17]) box(px, r, 1, 2, D);
              cone(px, 19, 2, 6, R);
              box(px, 26, 1, 1, 3);
              box(px - 2, 21, 1, 2, B);
              box(px + 2, 21, 1, 2, B);
            }
            // the central tower
            box(-4, 33, 9, 31, B);
            box(4, 33, 1, 31, S);
            box(-3, 10, 7, 8, Lt); // the gabled porch
            box(-2, 8, 5, 6, 2);
            cone(0, 10, 3, 3, Lt);
            for (const r of [16, 21]) box(-1, r, 3, 3, D);
            orb(0, 27, 2, 6); // the clock
            box(0, 27, 1, 2, 2);
            box(-5, 33, 11, 1, Lt);
            for (const s of [-1, 1]) {
              box(s * 4, 37, 1, 4, B); // corner turrets
              box(s * 4, 39, 1, 2, R);
            }
            cone(0, 33, 3, 15, R);
            box(0, 50, 1, 2, 3);
            break;
          }
          case "iasiMetropolitan": {
            // Metropolitan Cathedral (Iași): the pale neo-Renaissance cathedral with two square bell towers
            // under green domes framing a pedimented front with a portico, and the big ribbed dome on its
            // windowed drum behind, each crowned with a cross.
            const m = [236, 222, 190],
              W = css(e.sh(m)),
              S = css(e.sh(mixc(m, [41, 40, 54], 0.25))),
              D = css(e.sh(mixc(m, [41, 40, 54], 0.5))),
              Lt = css(e.sh(mixc(m, [255, 248, 225], 0.5))),
              gr = [92, 140, 120],
              G = css(e.sh(gr)),
              GL = css(e.sh(mixc(gr, [255, 248, 225], 0.3)));
            // the big dome behind
            box(-4, 22, 9, 5, W);
            for (const p of [-3, -1, 1, 3]) box(p, 21, 1, 2, D);
            dome(0, 22, 5, G);
            dome(-1, 23, 3, GL);
            box(0, 28, 1, 3, 3);
            box(-1, 29, 3, 1, 3);
            // the front
            box(-11, 15, 23, 13, W);
            box(11, 15, 1, 13, S);
            box(-5, 14, 11, 12, Lt); // the portico
            for (const p of [-4, -2, 2, 4]) box(p, 12, 1, 9, W);
            box(-1, 8, 3, 6, 2);
            cone(0, 14, 6, 3, Lt); // the pediment
            box(0, 16, 1, 1, D);
            for (const s of [-1, 1]) {
              const tx = s * 9;
              box(tx - 2, 24, 5, 22, W);
              box(tx + 2, 24, 1, 22, S);
              for (const r of [9, 15, 21]) box(tx, r, 1, 3, D);
              box(tx - 3, 25, 7, 1, Lt);
              dome(tx, 25, 2, G);
              box(tx, 28, 1, 3, 3);
              box(tx - 1, 29, 3, 1, 3);
            }
            break;
          }
          case "timisoaraCathedral": {
            // Timișoara Orthodox Cathedral: the Moldavian-revival cathedral in cream stone and red brick, its
            // roofs in glazed tiles (green, with a lattice of yellow and red lozenges), two front towers and the
            // tall central tower: a drum of arched windows under a bell-shaped tiled cap, then a slim lantern.
            const m = [232, 220, 196],
              W = css(e.sh(m)),
              S = css(e.sh(mixc(m, [41, 40, 54], 0.28))),
              Br = css(e.sh([176, 96, 74])),
              gr = [70, 128, 104],
              G = css(e.sh(gr)),
              GS = css(e.sh(mixc(gr, [41, 40, 54], 0.3))),
              Y = css(e.sh([226, 188, 80])),
              Rd = css(e.sh([190, 70, 56]));
            const tiles = (cx, base, hw, tall) => {
              // a bell-shaped tiled cap: wide eaves, then rows narrowing to the lantern, with lozenges
              for (let j = 0; j < tall; j++) {
                const k = Math.max(1, Math.round(hw * (1 - (j / tall) ** 1.3)));
                box(cx - k, base + j + 1, 2 * k + 1, 1, G);
                box(cx + k, base + j + 1, 1, 1, GS);
                for (let p = -k + 1; p < k; p++)
                  if ((p + j) % 4 === 0) box(cx + p, base + j + 1, 1, 1, j % 8 < 4 ? Y : Rd);
              }
            };
            box(-11, 14, 23, 12, W); // the body
            box(11, 14, 1, 12, S);
            for (const r of [5, 9, 13]) box(-11, r, 23, 1, Br);
            box(-1, 8, 3, 6, 2); // the portal
            for (const p of [-8, -5, 5, 8]) box(p, 11, 1, 3, 2);
            tiles(0, 14, 12, 4); // the low roof over the nave
            for (const s of [-1, 1]) {
              const tx = s * 8;
              box(tx - 2, 24, 5, 6, W);
              box(tx + 2, 24, 1, 6, S);
              box(tx - 2, 20, 5, 1, Br);
              box(tx, 23, 1, 2, 2);
              tiles(tx, 24, 3, 7);
              box(tx, 33, 1, 2, 3);
            }
            // the central tower
            box(-3, 30, 7, 12, W);
            box(3, 30, 1, 12, S);
            for (const p of [-2, 0, 2]) box(p, 28, 1, 4, 2);
            box(-3, 23, 7, 1, Br);
            tiles(0, 30, 5, 10);
            box(-1, 43, 3, 3, W); // the lantern
            box(0, 42, 1, 1, 2);
            tiles(0, 43, 2, 4);
            box(0, 49, 1, 3, 3);
            box(-1, 48, 3, 1, 3);
            break;
          }
          case "sibiuCouncilTower": {
            // Council Tower (Sibiu): a pale ochre square tower with an arched passage through its foot, small
            // windows up the shaft and a wider top storey, under a steep red pyramid roof with four little
            // corner turrets.
            const m = [226, 206, 160],
              B = css(e.sh(m)),
              S = css(e.sh(mixc(m, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(m, [255, 248, 225], 0.4))),
              R = css(e.sh([160, 80, 62])),
              RS = css(e.sh([122, 60, 52]));
            box(-3, 30, 7, 30, B);
            box(3, 30, 1, 30, S);
            box(-1, 6, 3, 6, 2); // the passage
            dome(0, 6, 1.5, 2);
            for (const r of [12, 17, 22]) box(0, r, 1, 2, 2);
            for (const r of [9, 25]) box(-3, r, 7, 1, Lt);
            box(-4, 33, 9, 3, B); // the top storey
            box(4, 33, 1, 3, S);
            for (const p of [-2, 0, 2]) box(p, 32, 1, 1, 2);
            box(-4, 34, 9, 1, Lt);
            cone(0, 34, 3, 9, R);
            for (const s of [-4, 4]) {
              box(s, 36, 1, 2, B);
              cone(s, 36, 0, 2, RS);
            }
            box(0, 44, 1, 2, 3);
            break;
          }
          case "sibiuCathedral": {
            // Lutheran Cathedral of St. Mary (Sibiu): a grey-stone Gothic hall church under a steep roof of
            // glazed tiles laid in lozenges, buttresses and pointed windows, and the tall west tower with a
            // gallery, four corner turrets and a steep tiled spire.
            const st = [176, 172, 160],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              R = css(e.sh([150, 82, 64])),
              Y = css(e.sh([206, 170, 90])),
              Gt = css(e.sh([86, 120, 96]));
            box(-12, 2, 25, 2, S);
            box(-6, 14, 18, 12, B); // the nave
            for (let p = -5; p <= 10; p += 3) {
              box(p, 14, 1, 12, Lt);
              box(p + 1, 11, 1, 6, 2);
            }
            for (let j = 1; j <= 10; j++) {
              const k = Math.round(j * 0.5);
              box(-6 + k, 14 + j, 18 - 2 * k, 1, R);
              for (let p = -6 + k + ((j * 2) % 4); p < 12 - k; p += 4) box(p, 14 + j, 1, 1, j % 2 ? Y : Gt);
            }
            // the west tower
            box(-12, 34, 7, 32, B);
            box(-6, 34, 1, 32, S);
            for (const r of [12, 22]) box(-12, r, 7, 1, Lt);
            box(-10, 7, 3, 4, 2);
            for (const r of [18, 27]) box(-9, r, 1, 3, 2);
            orb(-9, 31, 1, 6);
            box(-13, 35, 9, 1, Lt); // the gallery
            cone(-9, 35, 2, 14, R);
            for (const p of [-12, -6]) {
              box(p, 38, 1, 3, B); // corner turrets
              cone(p, 38, 0, 3, R);
            }
            box(-9, 51, 1, 2, 3);
            break;
          }
          case "clujStMichael": {
            // St. Michael's Church (Cluj-Napoca): the grey Gothic hall church from Unirii Square, tall pointed
            // windows between stepped buttresses with pinnacles, a steep dark roof, and the slender neo-Gothic
            // tower at its west end: tiers of tall openings, a pinnacled gallery and an openwork-looking spire.
            const st = [184, 178, 164],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              R = css(e.sh([96, 88, 92])),
              RL = css(e.sh([128, 116, 116]));
            box(-11, 2, 23, 2, S);
            box(-4, 16, 16, 14, B); // the nave
            for (let p = -3; p <= 10; p += 3) {
              box(p, 17, 1, 15, Lt); // buttresses with pinnacles
              box(p + 1, 13, 1, 8, 2);
            }
            for (let j = 1; j <= 9; j++) {
              const k = Math.round(j * 0.55);
              box(-4 + k, 16 + j, 16 - 2 * k, 1, j % 3 ? R : RL);
            }
            // the tower
            box(-11, 40, 7, 38, B);
            box(-5, 40, 1, 38, S);
            for (const r of [12, 22, 32]) box(-11, r, 7, 1, Lt);
            box(-9, 8, 3, 6, 2);
            dome(-8, 8, 1.5, 2);
            for (const r of [19, 29, 38]) {
              box(-10, r, 1, 5, 2);
              box(-7, r, 1, 5, 2);
            }
            box(-12, 41, 9, 1, Lt); // the pinnacled gallery
            for (const p of [-12, -10, -6, -4]) box(p, 43, 1, 2, B);
            cone(-8, 41, 2, 18, B);
            for (let r = 45; r < 57; r += 3) box(-8, r, 1, 1, S); // the openwork
            box(-8, 61, 1, 2, 3);
            break;
          }
          case "targuMuresPalace": {
            // Palace of Culture (Târgu Mureș): the Hungarian Secession palace in ochre stone, a front of tall
            // windows with the great arched mosaic window in the middle, a steep roof of Zsolnay glazed tiles
            // in green, yellow and red zigzags, and the slim tower at its side with a green tiled cap.
            const m = [222, 196, 140],
              B = css(e.sh(m)),
              S = css(e.sh(mixc(m, [41, 40, 54], 0.28))),
              D = css(e.sh(mixc(m, [41, 40, 54], 0.55))),
              Lt = css(e.sh(mixc(m, [255, 248, 225], 0.4))),
              G = css(e.sh([72, 132, 96])),
              Y = css(e.sh([226, 188, 80])),
              Rd = css(e.sh([190, 70, 56])),
              Bl = css(e.sh([86, 130, 170]));
            box(-14, 2, 29, 2, S);
            box(-14, 14, 25, 12, B);
            for (let p = -13; p <= 9; p += 2)
              if (Math.abs(p + 2) > 4) {
                box(p, 7, 1, 3, D);
                box(p, 12, 1, 3, D);
              }
            box(-14, 9, 25, 1, Lt);
            box(-5, 13, 7, 9, Lt); // the mosaic window
            dome(-2, 13, 3, Lt);
            box(-4, 12, 5, 6, Bl);
            dome(-2, 12, 2, Y);
            box(-3, 6, 3, 4, 2);
            for (let j = 1; j <= 8; j++) {
              const k = Math.round(j * 0.9);
              box(-14 + k, 14 + j, 25 - 2 * k, 1, G);
              for (let p = -14 + k + (j % 2); p < 11 - k; p += 2)
                box(p, 14 + j, 1, 1, j % 3 === 0 ? Rd : j % 3 === 1 ? Y : G);
            }
            // the side tower
            box(11, 34, 5, 32, B);
            box(15, 34, 1, 32, S);
            for (const r of [10, 18, 26]) box(13, r, 1, 3, D);
            orb(13, 30, 1, 6);
            box(10, 35, 7, 1, Lt);
            cone(13, 35, 2, 7, G);
            box(13, 37, 1, 1, Y);
            box(13, 44, 1, 2, 3);
            break;
          }
          case "chindiaTower": {
            // Chindia Tower (Târgoviște): the round red-brick tower of the princely court, small windows up its
            // shaft, a pale band of machicolations, and the open gallery of the top storey under a steep
            // conical roof.
            const br = [178, 104, 74],
              B = css(e.sh(br)),
              S = css(e.sh(mixc(br, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(br, [255, 248, 225], 0.25))),
              P = css(e.sh([222, 210, 186])),
              R = css(e.sh([110, 74, 66]));
            box(-5, 2, 11, 2, S);
            box(-4, 28, 9, 26, B);
            box(-4, 28, 2, 26, Lt);
            box(3, 28, 2, 26, S);
            box(-1, 6, 3, 4, 2);
            for (const r of [12, 18, 24]) box(0, r, 1, 2, 2);
            box(-5, 30, 11, 2, P); // the machicolations
            for (let p = -5; p <= 5; p += 2) box(p, 28, 1, 1, P);
            box(-4, 34, 9, 4, B); // the gallery
            for (const p of [-3, -1, 1, 3]) box(p, 33, 1, 3, 2);
            box(-5, 35, 11, 1, P);
            cone(0, 35, 5, 7, R);
            box(0, 43, 1, 2, 3);
            break;
          }
          case "albaCarolinaGate": {
            // The Third Gate of the Alba Carolina citadel (Alba Iulia): a baroque gate in pale pink stone, a
            // rusticated front with a round-arched passage, statues in niches beside it, a heavy cornice and the
            // tall attic with trophies, crowned by the equestrian statue of Charles VI.
            const m = [226, 204, 190],
              B = css(e.sh(m)),
              S = css(e.sh(mixc(m, [41, 40, 54], 0.28))),
              D = css(e.sh(mixc(m, [41, 40, 54], 0.5))),
              Lt = css(e.sh(mixc(m, [255, 248, 225], 0.45))),
              Gy = css(e.sh([150, 148, 140]));
            box(-11, 2, 23, 2, S);
            box(-11, 15, 23, 13, B);
            box(11, 15, 1, 13, S);
            for (let r = 4; r < 14; r += 2) box(-11, r, 23, 1, Lt); // rustication
            dome(0, 9, 4, Lt);
            box(-3, 9, 7, 7, 2);
            dome(0, 9, 3, 2);
            box(0, 13, 1, 1, Gy);
            for (const s of [-1, 1]) {
              box(s * 7 - 1, 12, 3, 7, D); // the niche
              dome(s * 7, 12, 1, D);
              box(s * 7, 11, 1, 5, Gy); // its statue
              box(s * 10, 15, 1, 13, Lt); // pilasters
            }
            box(-12, 16, 25, 1, Lt);
            box(-7, 21, 15, 5, B); // the attic
            box(7, 21, 1, 5, S);
            box(-4, 20, 9, 2, D); // the inscription
            for (const s of [-1, 1]) {
              box(s * 9 - 1, 19, 3, 3, Gy); // trophies
              box(s * 9, 21, 1, 2, Gy);
              stroke(s * 7, 17, s * 8, 21, 13); // volutes
            }
            box(-8, 22, 17, 1, Lt);
            // Charles VI on horseback
            box(-3, 25, 6, 2, Gy);
            box(-3, 23, 1, 2, Gy);
            box(2, 23, 1, 2, Gy);
            box(3, 26, 1, 2, Gy);
            box(0, 28, 1, 3, Gy);
            break;
          }
          case "resitaLocomotive": {
            // Reșița Steam Locomotive Museum: one of its locomotives standing on a length of track, the black
            // boiler with a tall chimney, steam dome and sand dome, the cab at the back, red frame and wheels
            // with their rods, and the buffer beam in front.
            const K = css(e.sh([52, 52, 58])),
              KL = css(e.sh([92, 94, 104])),
              Rd = css(e.sh([186, 54, 46])),
              RdS = css(e.sh([132, 40, 38]));
            box(-12, 1, 25, 1, 8); // the rails
            for (let p = -11; p <= 11; p += 3) box(p, 1, 2, 1, 1);
            box(-9, 5, 18, 2, Rd); // the frame
            for (const p of [-6, -1, 4]) {
              orb(p, 4, 2, RdS); // the wheels
              orb(p, 4, 1, Rd);
              box(p, 4, 1, 1, K);
            }
            box(-6, 4, 11, 1, 8); // the coupling rod
            box(-8, 10, 13, 5, K); // the boiler
            box(-8, 10, 13, 1, KL);
            for (const p of [-5, -1, 3]) box(p, 9, 1, 4, KL); // boiler bands
            box(-8, 14, 3, 4, K); // the chimney
            box(-9, 14, 5, 1, K);
            box(-3, 12, 3, 2, K); // steam dome
            dome(-2, 12, 1, KL);
            box(1, 12, 2, 2, K); // sand dome
            box(5, 13, 6, 8, K); // the cab
            box(6, 11, 4, 2, 11);
            box(4, 14, 8, 1, KL);
            box(11, 8, 2, 3, K); // the tender stub
            box(-12, 7, 3, 2, Rd); // the buffer beam
            box(-12, 5, 1, 1, 8);
            break;
          }
          case "blackEagle": {
            // Black Eagle Palace (Oradea): the Art Nouveau block on Union Square, a white front of bay windows
            // with two curved, crested gables, the tall glazed arch of the passage between them, and the stained
            // glass black eagle above it.
            const m = [238, 232, 220],
              W = css(e.sh(m)),
              S = css(e.sh(mixc(m, [41, 40, 54], 0.25))),
              D = css(e.sh(mixc(m, [41, 40, 54], 0.55))),
              Lt = css(e.sh(mixc(m, [255, 248, 225], 0.5))),
              Gl = css(e.sh([150, 186, 196])),
              Go = css(e.sh([214, 170, 80]));
            box(-15, 2, 31, 2, S);
            box(-15, 16, 31, 14, W);
            box(15, 16, 1, 14, S);
            for (let p = -14; p <= 14; p += 2)
              if (Math.abs(p) > 4) for (const r of [6, 10, 14]) box(p, r, 1, 2, D);
            box(-15, 7, 31, 1, Lt);
            for (const s of [-1, 1]) {
              const gx = s * 10;
              box(gx - 4, 21, 9, 5, W); // the curved gable
              dome(gx, 21, 4, W);
              for (const p of [-2, 0, 2]) box(gx + p, 20, 1, 3, D);
              box(gx, 25, 1, 2, Go);
              box(gx - 3, 13, 7, 1, Go); // the gilt frieze
            }
            // the passage arch with its glazing and the eagle
            box(-4, 16, 9, 14, Lt);
            dome(0, 16, 4, Lt);
            box(-3, 15, 7, 13, Gl);
            dome(0, 15, 3, Gl);
            for (const p of [-2, 0, 2]) box(p, 14, 1, 7, S);
            box(-2, 6, 5, 5, 2);
            box(-1, 18, 3, 2, 2); // the eagle
            box(-2, 19, 1, 1, 2);
            box(2, 19, 1, 1, 2);
            box(0, 17, 1, 1, Go);
            break;
          }
          case "moonChurch": {
            // The Moon Church (Oradea): a baroque Orthodox church in pale ochre, its front of pilasters and
            // a pediment under the tall tower, which holds the moon sphere (half gilt, half dark, turning with
            // the phases) below the clock, and a baroque copper cap with lantern and cross.
            const m = [234, 214, 170],
              B = css(e.sh(m)),
              S = css(e.sh(mixc(m, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(m, [255, 248, 225], 0.45))),
              Cu = css(e.sh([72, 80, 88])),
              Go = css(e.sh([226, 182, 74]));
            box(-8, 2, 17, 2, S);
            box(-8, 13, 17, 11, B); // the front
            box(8, 13, 1, 11, S);
            for (const p of [-8, -4, 4, 7]) box(p, 12, 1, 10, Lt); // pilasters
            box(-1, 8, 3, 5, 2);
            dome(0, 8, 1.5, 2);
            for (const p of [-6, 5]) box(p, 10, 1, 3, 2);
            box(-9, 14, 19, 1, Lt);
            for (const s of [-1, 1]) stroke(s * 8, 15, s * 3, 18, 13); // the volutes
            // the tower
            box(-3, 32, 7, 18, B);
            box(3, 32, 1, 18, S);
            orb(0, 21, 2, Cu); // the moon sphere
            box(-2, 23, 2, 5, Go);
            box(-1, 23, 1, 5, Go);
            orb(0, 27, 1.5, 6); // the clock
            box(0, 27, 1, 1, 2);
            box(-1, 31, 3, 2, 2);
            box(-4, 33, 9, 1, Lt);
            dome(0, 33, 3, Cu); // the baroque cap
            box(-1, 38, 3, 2, B); // the lantern
            orb(0, 40, 1, Cu);
            box(0, 44, 1, 3, 3);
            box(-1, 43, 3, 1, 3);
            break;
          }
          case "moldavianChurch": {
            // A church of Stephen the Great's Moldavia (Bacău's Precista, Popăuți in Botoșani, St. John in Vaslui
            // and Piatra Neamț): walls of rough stone with brick arches and a row of green glazed discs, the
            // rounded apse, a very steep dark shingle roof, and the tower over the nave on its stepped star base,
            // ringed with blind niches, under its own pointed roof and cross. o.h: tower top (25), o.w (17).
            const w = o.w ?? 17,
              h = o.h ?? 25,
              hw = Math.floor(w / 2),
              st = [196, 186, 166],
              B = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Br = css(e.sh([166, 92, 70])),
              Gn = css(e.sh([70, 140, 104])),
              R = css(e.sh([82, 70, 72])),
              RL = css(e.sh([112, 96, 94]));
            box(-hw, 9, w - 2, 8, B); // the nave
            box(hw - 3, 8, 3, 7, B); // the apse
            box(hw - 1, 8, 1, 7, S);
            for (let p = -hw + 1; p < hw - 3; p += 2) {
              box(p, 8, 1, 1, Br); // brick arches under the eaves
              if (p % 4 === 0) box(p, 6, 1, 1, Gn); // glazed discs
            }
            box(-hw + 2, 5, 2, 4, 2); // the door
            box(1, 6, 1, 2, 2);
            for (let j = 1; j <= 6; j++) box(-hw - 1 + j, 9 + j, w - 2 * j, 1, j % 2 ? R : RL); // the steep roof
            // the tower on its star base
            box(-3, 16, 7, 2, B);
            box(-2, h - 6, 5, h - 21, B);
            box(2, h - 6, 1, h - 21, S);
            for (const p of [-2, 0, 2]) box(p, h - 8, 1, 3, Br);
            box(0, h - 12, 1, 1, Gn);
            cone(0, h - 6, 3, 5, R);
            box(0, h + 1, 1, 2, 3);
            box(-1, h, 3, 1, 3);
            break;
          }
          case "kissGate": {
            // Brâncuși's Gate of the Kiss (Târgu Jiu): a travertine gate, two square pillars carved with the
            // kiss (a circle split down the middle) under a broad lintel with a band of paired eyes.
            const m = [226, 216, 196],
              B = css(e.sh(m)),
              S = css(e.sh(mixc(m, [41, 40, 54], 0.3))),
              D = css(e.sh(mixc(m, [41, 40, 54], 0.5)));
            for (const s of [-1, 1]) {
              box(s * 6 - 2, 11, 5, 11, B);
              box(s * 6 + 2, 11, 1, 11, S);
              orb(s * 6, 7, 1.5, D);
              box(s * 6, 8, 1, 3, B);
            }
            box(-9, 15, 19, 4, B);
            box(9, 15, 1, 4, S);
            for (let p = -7; p <= 7; p += 2) box(p, 13, 1, 1, D);
            break;
          }
