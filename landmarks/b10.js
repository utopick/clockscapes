          case "albiCathedral": {
            // Sainte-Cécile, Albi: the brick fortress-cathedral. A sheer nave wall of rounded buttress towers
            // (lit and shaded halves) with tall slit windows high up, the west belfry stepping in by three
            // stages between round corner turrets, and the pale flamboyant stone porch (the baldaquin).
            const br = [182, 102, 76],
              B = css(e.sh(br)),
              S = css(e.sh(mixc(br, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(br, [255, 248, 225], 0.22))),
              P = css(e.sh([234, 224, 202])),
              PS = css(e.sh([190, 178, 156]));
            box(-6, 22, 22, 22, B); // the nave
            box(-6, 23, 22, 1, Lt);
            for (let p = -6; p <= 15; p += 2) box(p, 24, 1, 1, B); // its parapet
            box(15, 22, 1, 22, S);
            for (let p = -4; p <= 12; p += 4) {
              box(p, 22, 1, 22, Lt); // the rounded buttresses
              box(p + 1, 22, 1, 22, S);
              box(p + 2, 20, 1, 10, 2); // tall windows between them
            }
            box(2, 10, 7, 10, P); // the baldaquin porch
            box(8, 10, 1, 10, PS);
            box(3, 8, 5, 1, PS);
            box(4, 6, 3, 6, 2);
            cone(5, 6, 1, 1, 2);
            cone(5, 10, 3, 4, P); // its lace gable and pinnacles
            for (const p of [4, 6]) box(p, 12, 1, 2, PS);
            for (const p of [2, 8]) {
              box(p, 14, 1, 4, P);
              box(p, 15, 1, 1, 3);
            }
            // the belfry: three stages between round corner turrets
            for (const [l, w, top, from] of [
              [-15, 10, 28, 0],
              [-14, 8, 35, 28],
              [-13, 6, 41, 35],
            ]) {
              box(l, top, w, top - from, B);
              box(l, top + 1, 1, top + 1 - from, Lt);
              box(l + w - 1, top + 1, 1, top + 1 - from, S);
              box(l + 1, top, w - 2, 1, Lt);
            }
            for (const p of [-12, -9]) box(p, 33, 1, 4, 2);
            box(-11, 40, 2, 4, 2);
            for (const y of [12, 20]) box(-11, y, 1, 3, 2);
            break;
          }
          case "amiensCathedral": {
            // Notre-Dame d'Amiens: the west front between two square towers of unequal height, three deep
            // portals under gables, the gallery of kings, the rose and the bell-ringers' gallery, with the
            // steep slate roof of the nave and the slender lead flèche over the crossing behind.
            const st = [214, 200, 168],
              P = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              slate = css(e.sh([92, 98, 114])),
              lead = css(e.sh([140, 146, 158]));
            cone(0, 22, 7, 8, slate); // the nave roof
            box(-1, 33, 3, 4, lead); // the flèche
            box(0, 44, 1, 11, lead);
            box(0, 46, 1, 2, 3);
            box(-6, 24, 13, 24, P);
            box(-12, 31, 6, 31, P); // the north tower (left), taller
            box(7, 29, 6, 29, P);
            box(-7, 30, 1, 30, S);
            box(12, 28, 1, 28, S);
            box(-12, 31, 6, 1, Lt);
            box(7, 29, 6, 1, Lt);
            for (const p of [-11, -8]) box(p, 29, 1, 6, 2); // belfry openings
            for (const p of [8, 11]) box(p, 27, 1, 6, 2);
            box(-10, 21, 2, 4, 2);
            box(9, 21, 2, 4, 2);
            box(-6, 26, 13, 2, P); // the bell-ringers' gallery
            for (let p = -5; p <= 5; p += 2) box(p, 26, 1, 1, S);
            orb(0, 19, 3, Lt); // the rose
            orb(0, 19, 2, 2);
            box(0, 21, 1, 5, Lt);
            box(-2, 19, 5, 1, Lt);
            box(-12, 14, 25, 2, Lt); // the gallery of kings
            for (let p = -11; p <= 11; p += 2) box(p, 13, 1, 1, S);
            for (const [cx, w, h] of [
              [-9, 3, 7],
              [0, 5, 9],
              [9, 3, 7],
            ]) {
              chDoor(cx, w, h, 13);
              cone(cx, h + 1, Math.floor(w / 2) + 1, 3, Lt); // the portal gables
            }
            break;
          }
          case "angersChateau": {
            // Château d'Angers: a curtain of round towers cut down flat, built in dark schist banded with pale
            // tufa, each flaring at its foot; a gate between two of them and a slate pepper-pot on the
            // Mill Tower at the end.
            const sc = [100, 94, 102],
              tf = [200, 190, 166],
              D = css(e.sh(sc)),
              DS = css(e.sh(mixc(sc, [41, 40, 54], 0.35))),
              DL = css(e.sh(mixc(sc, [255, 248, 225], 0.2))),
              T = css(e.sh(tf)),
              TS = css(e.sh(mixc(tf, [41, 40, 54], 0.3)));
            box(-16, 13, 33, 13, D); // the curtain wall
            for (let y = 4; y < 13; y += 4) box(-16, y, 33, 1, T);
            box(-4, 6, 2, 5, 2); // the gate
            for (const cx of [-14, -7, 0, 7, 14]) {
              box(cx - 2, 18, 5, 18, D);
              box(cx - 3, 3, 7, 3, D); // the flared foot
              box(cx - 2, 17, 1, 14, DL);
              box(cx + 2, 17, 1, 17, DS);
              for (let y = 5; y < 18; y += 4) {
                box(cx - 2, y, 4, 1, T); // the tufa bands
                box(cx + 2, y, 1, 1, TS);
              }
              box(cx - 2, 18, 5, 1, T);
              box(cx, 14, 1, 2, 2);
            }
            cone(14, 18, 2, 4, css(e.sh([86, 92, 108]))); // the Mill Tower's pepper-pot
            box(14, 24, 1, 1, 3);
            break;
          }
          case "angoulemeCathedral": {
            // Saint-Pierre, Angoulême: the Romanesque screen front, its tiers of blind arcades round the door,
            // two little scale-roofed lanterns on its corners and a stone dome behind, and the tall north
            // tower with its arcaded storeys under a low pyramid roof.
            const st = [222, 206, 172],
              P = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35)));
            dome(-4, 20, 4, S); // the dome over the nave
            box(-4, 26, 1, 2, P);
            box(-11, 20, 15, 20, P); // the screen front
            box(3, 19, 1, 19, S);
            for (const y of [8, 14, 20]) box(-11, y, 15, 1, Lt);
            chDoor(-4, 3, 6, 13);
            for (const p of [-9, -7, -1, 1]) box(p, 6, 1, 4, S);
            for (let p = -10; p <= 2; p += 2) box(p, 12, 1, 3, S);
            for (const p of [-8, 0]) box(p, 18, 1, 3, S);
            box(-5, 18, 3, 3, Lt); // Christ in the mandorla
            box(-4, 17, 1, 1, 2);
            cone(-4, 20, 5, 3, P);
            for (const p of [-11, 3]) {
              box(p - 1, 23, 3, 3, P); // the corner lanterns
              box(p, 22, 1, 1, 2);
              cone(p, 23, 1, 3, S);
            }
            // the north tower
            box(5, 31, 7, 31, P);
            box(11, 30, 1, 30, S);
            for (let y = 6; y <= 31; y += 5) {
              box(5, y, 7, 1, Lt);
              for (const p of [6, 8, 10]) box(p, y - 1, 1, 3, y > 21 ? 2 : S);
            }
            cone(8, 31, 4, 3, P);
            break;
          }
          case "arrasBelfry": {
            // The Belfry of Arras: a pale flamboyant shaft with tall paired windows, corner pinnacles where it
            // turns octagonal, a balconied belfry stage and the stone crown with the gilt lion on top.
            const st = [226, 214, 186],
              P = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35)));
            box(-4, 2, 9, 2, S);
            box(-3, 20, 7, 20, P);
            box(3, 19, 1, 19, S);
            for (const y of [7, 14, 20]) box(-3, y, 7, 1, Lt);
            for (const y of [12, 18]) for (const p of [-1, 1]) box(p, y, 1, 4, 2);
            box(0, 5, 1, 3, 2);
            for (const p of [-4, 4]) box(p, 23, 1, 4, P); // the corner pinnacles
            box(-2, 29, 5, 9, P); // the octagon
            box(2, 28, 1, 8, S);
            for (const p of [-1, 1]) box(p, 27, 1, 5, 2);
            box(-3, 30, 7, 1, Lt); // the balcony
            for (const p of [-3, 3]) box(p, 32, 1, 2, P);
            box(-2, 34, 5, 4, P);
            box(0, 33, 1, 3, 2);
            dome(0, 34, 2, P); // the crown
            for (const p of [-2, 2]) box(p, 36, 1, 2, P);
            box(0, 38, 1, 2, P);
            box(0, 41, 1, 3, 12); // the lion and its banner
            box(1, 41, 1, 1, 12);
            break;
          }
          case "palaisDesPapes": {
            // The Palais des Papes, Avignon: the sheer pale front of the Palais Neuf, its buttresses linked
            // at the top by huge pointed arches, the gate between two slim turrets with stone spires, the
            // square Tour de la Gâche on the right and the Tour de la Campane on the left.
            const st = [228, 214, 182],
              P = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.26))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3)));
            box(-12, 21, 24, 21, P); // the front
            for (const p of [-12, -7, 5, 10]) {
              box(p, 21, 2, 21, Lt); // buttresses
              box(p + 2, 17, 3, 12, S); // the great pointed arches between them
              cone(p + 3, 17, 1, 2, S);
              box(p + 3, 9, 1, 2, 2);
            }
            box(-12, 22, 24, 1, Lt);
            for (let p = -12; p <= 11; p += 2) box(p, 23, 1, 1, P);
            box(-2, 7, 5, 7, 2); // the gate
            cone(0, 7, 2, 2, 2);
            for (const p of [-4, 3]) {
              box(p, 24, 2, 24, P); // the gate turrets
              box(p + 1, 23, 1, 22, S);
              cone(p, 24, 1, 4, P);
              box(p, 18, 1, 2, 2);
            }
            box(-1, 15, 3, 4, 2); // the window over the gate
            box(-17, 24, 6, 24, P); // the Tour de la Campane
            box(-12, 23, 1, 23, S);
            box(11, 28, 7, 28, P); // the Tour de la Gâche
            box(17, 27, 1, 27, S);
            for (const [l, w, top] of [
              [-17, 6, 24],
              [11, 7, 28],
            ]) {
              box(l - 1, top + 1, w + 2, 1, Lt); // machicolations and merlons
              for (let p = l - 1; p <= l + w; p += 2) box(p, top + 2, 1, 1, P);
              for (let p = l; p < l + w; p += 2) box(p, top, 1, 1, S);
              box(l + 2, top - 5, 1, 2, 2);
              box(l + 2, top - 12, 1, 2, 2);
            }
            break;
          }
          case "beauvaisCathedral": {
            // Saint-Pierre de Beauvais, the tallest Gothic choir ever built and never given a nave: the choir's
            // tall windows between flying-buttress piers and pinnacles, its steep slate roof, and the
            // flamboyant south transept front between two stair turrets, with its rose and tall portal.
            const st = [216, 204, 176],
              P = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              slate = css(e.sh([92, 98, 114]));
            box(-10, 28, 9, 4, slate); // the choir's roof
            box(-10, 24, 9, 24, P);
            for (const p of [-8, -6, -4]) {
              box(p, 21, 1, 12, 2); // the clerestory
              box(p, 7, 1, 3, 2);
            }
            for (const p of [-12, -7, -2]) {
              box(p, 20, 1, 20, S); // flying-buttress piers and their pinnacles
              box(p, 24, 1, 4, P);
              box(p, 25, 1, 1, 3);
            }
            for (let j = 0; j < 3; j++) {
              box(-11 + j, 17 + j, 1, 1, S); // the flyers
              box(-6 + j, 17 + j, 1, 1, S);
            }
            box(0, 28, 9, 28, P); // the transept front
            box(8, 27, 1, 27, S);
            cone(4, 28, 4, 5, P);
            box(4, 31, 1, 2, S);
            for (const p of [-2, 9]) {
              box(p, 33, 2, 33, P); // the stair turrets
              box(p + 1, 32, 1, 32, S);
              cone(p, 33, 1, 4, P);
            }
            orb(4, 22, 3, Lt); // the rose
            orb(4, 22, 2, 2);
            box(4, 24, 1, 5, S);
            box(1, 14, 7, 14, Lt); // the portal and its gable
            box(2, 12, 5, 11, 2);
            cone(4, 12, 2, 2, 2);
            cone(4, 14, 3, 3, Lt);
            break;
          }
          case "lionBelfort": {
            // Bartholdi's Lion of Belfort: the great red sandstone lion lying in its niche in the grey cliff
            // under the citadel, mane to the left, roaring, a forepaw on the broken arrow, tail down at the end.
            const rk = [150, 144, 140],
              ln = [190, 96, 74];
            sprite(
              [
                "rrrrrrrrrrrrrrrrrrrrrrrrrR",
                "rrrHHHHrrrrrrrrrrrrrrrrrRR",
                "rrHLLLLHrrrrrrrrrrrrrrrrRR",
                "rHLLLLLLHrrrrrrrrrrrrrrrRR",
                "rHLDLLDLLrrrrrrrrrrrrrrrRR",
                "rLLLLLLLLHHHHHHHHHHHHrrrRR",
                "rLDDDLLLLLLLLLLLLLLLLHrrRR",
                "rLLDLLLLLLLLLLLLLLLLLLHrRR",
                "rrLLLLLDLLLLLLLLLLLLLLLDRR",
                "rrrLLLDLLLLLLLLLLLLLDLLDDR",
                "HHHHLLDLLLLLLLLLLLLLDLLDDR",
                "LLLLLLDDDDDDDDDDDDDDLLLDDD",
                "SSSSSSSSSSSSSSSSSSSSSSSSSS",
              ],
              0,
              13,
              26,
              {
                r: css(e.sh(rk)),
                R: css(e.sh(mixc(rk, [41, 40, 54], 0.3))),
                S: css(e.sh(mixc(rk, [41, 40, 54], 0.45))),
                L: css(e.sh(ln)),
                D: css(e.sh(mixc(ln, [41, 40, 54], 0.4))),
                H: css(e.sh(mixc(ln, [255, 248, 225], 0.3))),
              },
            );
            break;
          }
          case "citadelleBesancon": {
            // Vauban's citadel of Besançon on its rock above the Doubs: the long bastioned fronts with their
            // pointed salients on the wooded rock, and the barracks with slate roofs inside the walls.
            const st = [216, 202, 170],
              P = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              rock = css(e.sh([128, 120, 104])),
              wood = css(e.sh([84, 122, 74])),
              slate = css(e.sh([88, 94, 110]));
            box(-17, 4, 35, 4, wood); // the wooded rock
            box(-15, 6, 31, 2, rock);
            for (const p of [-17, -13, -6, 3, 11]) box(p, 5, 3, 1, rock);
            box(-14, 10, 29, 4, P); // the ramparts
            box(-14, 10, 29, 1, Lt);
            for (const [p, k] of [
              [-12, 1],
              [0, 1],
              [12, -1],
            ]) {
              box(p - 2, 11, 5, 5, P); // the bastions' salients
              box(p - 2, 11, 5, 1, Lt);
              box(k > 0 ? p + 2 : p - 2, 10, 1, 4, S);
            }
            box(-9, 13, 8, 2, P); // the barracks
            box(-9, 14, 8, 1, slate);
            box(-8, 15, 6, 1, slate);
            box(3, 13, 7, 2, P);
            box(3, 14, 7, 1, slate);
            box(4, 15, 5, 1, slate);
            for (const p of [-8, -6, -4, 4, 6, 8]) box(p, 12, 1, 1, 2);
            box(-1, 15, 2, 4, P); // the chapel
            cone(-1, 15, 1, 2, slate);
            break;
          }
          case "chateauBlois": {
            // Château de Blois: the Louis XII wing in red brick with pale stone windows, dormers on a steep
            // slate roof and King Louis on horseback in the niche over the gate, beside the pale François I
            // wing with its famous open spiral staircase and tall chimneys.
            const brick = [172, 86, 68],
              st = [232, 222, 198],
              Br = css(e.sh(brick)),
              BrS = css(e.sh(mixc(brick, [41, 40, 54], 0.3))),
              P = css(e.sh(st)),
              PS = css(e.sh(mixc(st, [41, 40, 54], 0.22))),
              SL = css(e.sh([86, 92, 108]));
            // the Louis XII wing
            box(-15, 18, 20, 4, SL);
            box(-15, 13, 20, 13, Br);
            for (let y = 2; y < 13; y += 2) for (let p = -15 + (y % 4); p < 5; p += 4) box(p, y, 1, 1, BrS);
            for (const y of [7, 13]) box(-15, y, 20, 1, P);
            for (const p of [-13, -10, 0, 3]) {
              box(p, 5, 2, 3, P);
              box(p, 4, 1, 2, 2);
              box(p, 11, 2, 3, P);
              box(p, 10, 1, 2, 2);
            }
            box(-6, 6, 5, 6, P); // the gate
            box(-5, 5, 3, 5, 2);
            box(-6, 12, 5, 5, P); // Louis XII in his niche
            box(-5, 11, 3, 3, 2);
            box(-5, 9, 3, 1, 12);
            box(-4, 11, 1, 2, 12);
            for (const p of [-12, -7, -2, 2]) {
              box(p, 17, 3, 3, P); // the dormers
              cone(p + 1, 17, 1, 2, P);
              box(p + 1, 16, 1, 2, 2);
            }
            // the François I wing and its staircase
            box(5, 20, 11, 5, SL);
            box(5, 15, 11, 15, P);
            box(15, 14, 1, 14, PS);
            for (const y of [5, 10, 14]) for (const p of [6, 13]) box(p, y, 1, 2, 2);
            for (const p of [6, 14]) box(p, 24, 1, 4, P);
            box(7, 17, 5, 17, P);
            box(11, 16, 1, 16, PS);
            for (const by of [6, 11, 16]) {
              box(8, by, 3, 3, 2);
              for (let k = 0; k < 3; k++) box(8 + k, by - 2 + k, 1, 1, P); // the rising balustrade
            }
            box(7, 18, 5, 1, P);
            cone(9, 18, 2, 2, SL);
            break;
          }
          case "placeBourse": {
            // Place de la Bourse, Bordeaux: Gabriel's long pale front on the quay, an arcaded ground floor,
            // tall windows and a balustrade, the centre pavilion with its sculpted pediment under a tall
            // curved slate roof, and the end pavilions under their own slate roofs.
            const st = [232, 218, 186],
              P = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.4))),
              SL = css(e.sh([82, 90, 106]));
            box(-16, 12, 33, 2, SL); // the roofs
            box(-17, 10, 35, 10, P);
            box(-17, 5, 35, 1, Lt);
            box(-18, 10, 37, 1, Lt); // the cornice and balustrade
            for (let p = -17; p <= 17; p += 2) {
              box(p, 3, 1, 3, 2); // the arcade
              box(p, 8, 1, 2, 2);
              box(p, 11, 1, 1, P);
            }
            for (const l of [-17, 12]) {
              box(l, 12, 6, 12, P); // the end pavilions
              box(l + 5, 11, 1, 11, S);
              box(l, 14, 6, 2, SL);
              box(l + 1, 15, 4, 1, SL);
              box(l, 12, 6, 1, Lt);
            }
            box(-4, 17, 9, 4, SL); // the centre pavilion's tall curved roof
            box(-3, 18, 7, 1, SL);
            box(0, 19, 1, 1, 3);
            box(-5, 13, 11, 13, P); // the centre pavilion
            box(5, 12, 1, 12, S);
            box(-5, 13, 11, 1, Lt);
            cone(0, 13, 6, 3, Lt); // its sculpted pediment
            cone(0, 13, 4, 2, S);
            for (const p of [-1, 1]) box(p, 18, 1, 1, Lt);
            break;
          }
          case "grosseCloche": {
            // The Grosse Cloche, Bordeaux: the old town gate's two round towers under pointed slate cones, the
            // great blue-and-gold clock face over the archway, and the bell in its open belfry on top, under a
            // little roof and the gilded leopard weathervane.
            const st = [226, 210, 176],
              P = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              SL = css(e.sh([82, 90, 106]));
            box(-3, 17, 7, 17, P); // the gate building
            box(-3, 6, 7, 6, Lt);
            box(-2, 5, 5, 5, 2); // the archway
            dome(0, 5, 2.5, 2);
            orb(0, 11, 2.5, 12); // the clock face
            orb(0, 11, 1.6, css(e.sh([52, 66, 120])));
            box(0, 12, 1, 2, 3);
            for (const cx of [-6, 6]) {
              box(cx - 2, 15, 5, 15, P); // the round towers
              box(cx - 2, 14, 1, 13, Lt);
              box(cx + 2, 14, 1, 14, S);
              box(cx - 2, 15, 5, 1, Lt);
              for (const y of [6, 11]) box(cx, y, 1, 2, 2);
              cone(cx, 15, 3, 7, SL);
              box(cx, 24, 1, 2, 12);
            }
            box(-3, 21, 7, 4, P); // the open belfry and its bell
            box(-2, 21, 5, 3, 2);
            box(-1, 20, 3, 2, css(e.sh([118, 96, 62])));
            cone(0, 21, 4, 2, SL);
            box(0, 25, 1, 2, 12);
            break;
          }
          case "brouMonastery": {
            // The Royal Monastery of Brou (Bourg-en-Bresse): the flamboyant church front with its curving
            // central gable, pinnacles and lace portal, before the famous roof of glazed Burgundy tiles in
            // yellow, green, red and black diamonds, and the square bell tower at the side.
            const st = [232, 220, 192],
              P = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.26))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              tiles = [
                [220, 176, 52],
                [70, 128, 76],
                [168, 72, 50],
                [52, 48, 52],
              ].map((v) => css(e.sh(v)));
            for (let j = 0; j < 14; j++) {
              const k = Math.round(11 * (1 - j / 14));
              for (let p = -k; p <= k; p++) {
                const a = (((p - 2 + j) % 4) + 4) % 4,
                  b = (((p - 2 - j) % 4) + 4) % 4;
                box(
                  p - 2,
                  10 + j,
                  1,
                  1,
                  tiles[a === 0 || b === 0 ? (j % 4 < 2 ? 0 : 1) : (j + p) % 3 ? 2 : 3],
                );
              }
            }
            box(-7, 11, 11, 11, P); // the church front
            box(3, 10, 1, 10, S);
            cone(-2, 11, 4, 4, P); // the curving central gable
            box(-3, 16, 3, 1, P);
            box(-2, 18, 1, 2, P);
            for (const p of [-7, -5, 1, 3]) {
              box(p, 14, 1, 14, Lt); // buttresses and pinnacles
              box(p, 15, 1, 1, 3);
            }
            chDoor(-2, 3, 7, 13);
            box(-2, 4, 1, 3, P); // the trumeau
            box(-3, 12, 3, 3, 2); // the window over the portal
            box(7, 26, 5, 26, P); // the bell tower
            box(11, 25, 1, 25, S);
            for (const y of [8, 15, 21]) box(7, y, 5, 1, Lt);
            box(8, 24, 3, 3, 2);
            box(9, 23, 1, 1, 12);
            box(6, 27, 7, 1, Lt);
            for (const p of [6, 8, 10, 12]) box(p, 28, 1, 1, P);
            break;
          }
          case "bourgesCathedral": {
            // Saint-Étienne de Bourges: the broad west front with its five portals under gables, the great
            // window, the flamboyant Butter Tower on the left and the plainer south tower on the right,
            // propped by its massive buttress pier.
            const st = [218, 204, 172],
              P = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35)));
            box(-7, 24, 15, 24, P);
            cone(0, 24, 6, 4, P);
            box(0, 27, 1, 2, S);
            box(-12, 30, 6, 30, P); // the Butter Tower
            box(-7, 29, 1, 29, S);
            for (const p of [-12, -10, -8]) box(p, 33, 1, 3, P);
            box(-12, 31, 6, 1, Lt);
            box(-11, 28, 2, 7, 2);
            box(-8, 28, 1, 7, 2);
            box(7, 27, 6, 27, P); // the south tower
            box(12, 26, 1, 26, S);
            box(7, 27, 6, 1, Lt);
            box(9, 25, 2, 6, 2);
            box(13, 20, 1, 20, S); // its buttress pier
            box(13, 21, 1, 1, P);
            orb(0, 19, 4, Lt); // the great window
            orb(0, 19, 3, 2);
            box(0, 22, 1, 7, Lt);
            box(-3, 19, 7, 1, Lt);
            box(-12, 14, 25, 1, Lt);
            for (const [cx, w, h] of [
              [-10, 3, 7],
              [-5, 3, 8],
              [0, 5, 9],
              [5, 3, 8],
              [10, 3, 7],
            ]) {
              chDoor(cx, w, h, 13);
              cone(cx, h + 1, Math.floor(w / 2) + 1, 3, Lt);
            }
            break;
          }
          case "abbayeAuxHommes": {
            // Saint-Étienne, Caen (the Abbaye aux Hommes): William the Conqueror's sober Romanesque front,
            // cut in three by tall buttresses with three tiers of round-headed openings, between two square
            // towers with arcaded storeys and tall Gothic octagonal spires ringed by pinnacles.
            const st = [222, 210, 178],
              P = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35)));
            box(-5, 18, 11, 18, P);
            for (const p of [-2, 2]) box(p, 18, 1, 18, Lt); // the buttresses
            chDoor(0, 3, 5, 13);
            for (const p of [-4, 4]) box(p, 4, 1, 3, 2);
            for (const y of [10, 15]) for (const p of [-4, 0, 4]) box(p, y, 1, 3, 2);
            for (const cx of [-8, 8]) {
              box(cx - 2, 23, 5, 23, P);
              box(cx + 2, 22, 1, 22, S);
              for (const y of [8, 13, 18, 23]) box(cx - 2, y, 5, 1, Lt);
              for (const y of [12, 17, 22]) for (const p of [-1, 1]) box(cx + p, y, 1, 3, 2);
              cone(cx, 23, 2, 20, P); // the spire
              box(cx, 45, 1, 2, 3);
              for (const p of [-2, 2]) {
                box(cx + p, 28, 1, 5, P); // its pinnacles
                box(cx + p, 29, 1, 1, Lt);
              }
              box(cx + 1, 34, 1, 10, S);
            }
            break;
          }
          case "pontValentre": {
            // Pont Valentré, Cahors: the fortified Gothic bridge over the Lot, six pointed arches on piers with
            // sharp cutwaters, a crenellated parapet, and three tall square towers with arrow slits, gates,
            // machicolations on corbels and low tiled pyramid roofs. Draws the old valentre kind with more
            // relief and the river under it.
            const st = colors[c],
              P = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              water = css(e.sh([78, 120, 132]));
            box(-31, 2, 63, 2, water);
            for (let p = -30; p <= 30; p += 10) {
              box(p - 1, 9, 3, 9, P); // the piers
              box(p + 1, 9, 1, 9, S);
              if (Math.abs(p) < 30) cone(p, 1, 2, 5, P); // their cutwaters
              if (Math.abs(p) < 30) box(p + 1, 5, 1, 3, S);
              for (let j = 1; j <= 3; j++) {
                if (p < 30) box(p + 2, 5 + j, j, 1, P); // the pointed arches' shoulders
                if (p > -30) box(p - 1 - j, 5 + j, j, 1, P);
              }
            }
            box(-31, 12, 63, 4, P); // the deck and parapet
            box(-31, 9, 63, 1, Lt);
            for (let p = -31; p <= 31; p += 2) box(p, 13, 1, 1, P);
            for (const p of [-20, 0, 20]) {
              box(p - 3, 34, 7, 22, P);
              box(p - 3, 33, 1, 21, Lt);
              box(p + 3, 33, 1, 21, S);
              box(p - 1, 17, 3, 5, 2); // the gate through the tower
              dome(p, 17, 1.5, 2);
              for (const sy of [22, 28]) box(p, sy, 1, 3, 2); // arrow slits
              box(p - 4, 36, 9, 2, P); // machicolations
              for (let q = -3; q <= 3; q += 2) box(p + q, 34, 1, 1, S);
              for (let q = -4; q <= 4; q += 2) box(p + q, 37, 1, 1, P);
              cone(p, 37, 2, 3, t);
            }
            break;
          }
          case "carcassonneCite": {
            // La Cité de Carcassonne: the double ring of walls, the low outer lists with squat round towers
            // and the taller inner wall behind, its towers under Viollet-le-Duc's pointed slate cones (a few
            // under red tiles), and the Narbonne Gate's twin towers in the middle.
            const st = colors[c],
              P = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              SL = css(e.sh([78, 84, 100])),
              TL = css(e.sh([176, 92, 66]));
            const tower = (cx, top, hw, roof, tall) => {
              box(cx - hw, top, 2 * hw + 1, top, P);
              box(cx - hw, top - 1, 1, top - 1, Lt);
              box(cx + hw, top - 1, 1, top - 1, S);
              box(cx, top - 3, 1, 2, 2);
              cone(cx, top, hw + 1, tall, roof);
            };
            box(-28, 11, 57, 11, P); // the inner wall
            for (let p = -28; p <= 28; p += 2) box(p, 12, 1, 1, P);
            for (const [cx, roof] of [
              [-26, SL],
              [-18, TL],
              [-11, SL],
              [11, SL],
              [18, SL],
              [26, TL],
            ])
              tower(cx, 15, 2, roof, 5);
            for (const cx of [-4, 4]) tower(cx, 17, 3, SL, 7); // the Narbonne Gate
            box(-1, 9, 3, 7, 2);
            dome(0, 9, 1.5, 2);
            box(-30, 6, 61, 6, P); // the outer lists
            box(-30, 6, 61, 1, Lt);
            for (let p = -30; p <= 30; p += 2) box(p, 7, 1, 1, P);
            for (const cx of [-29, -22, -14, 14, 22, 29]) tower(cx, 8, 1, SL, 3);
            box(-1, 4, 3, 4, 2);
            break;
          }
          case "chateauComtal": {
            // Château Comtal, Carcassonne: the counts' castle inside the Cité, its walls and round towers
            // crowned with timber hoardings under slate, the gate between two towers, and the slim square
            // Tour Pinte watchtower rising behind.
            const st = colors[c],
              P = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              wood = css(e.sh([120, 84, 58])),
              SL = css(e.sh([78, 84, 100]));
            box(-10, 28, 4, 28, P); // the Tour Pinte
            box(-7, 27, 1, 27, S);
            for (let p = -10; p <= -7; p += 2) box(p, 29, 1, 1, P);
            box(-9, 24, 1, 3, 2);
            box(-15, 13, 31, 13, P); // the walls
            box(-15, 15, 31, 2, wood); // their hoardings
            for (let p = -14; p <= 15; p += 3) box(p, 14, 1, 1, 2);
            box(-15, 16, 31, 1, SL);
            box(-1, 6, 3, 6, 2); // the gate
            dome(0, 6, 1.5, 2);
            for (const cx of [-13, -4, 4, 13]) {
              box(cx - 2, 16, 5, 16, P);
              box(cx - 2, 15, 1, 14, Lt);
              box(cx + 2, 15, 1, 15, S);
              box(cx, 10, 1, 2, 2);
              box(cx - 3, 19, 7, 3, wood); // the tower hoardings
              box(cx - 2, 18, 1, 1, 2);
              box(cx + 2, 18, 1, 1, 2);
              cone(cx, 19, 3, 6, SL);
            }
            break;
          }
          case "fontaineElephants": {
            // The Fontaine des Éléphants, Chambéry: four dark elephants springing from the base of a tall
            // column (one facing out at each side and one towards us), the column's capital and General de
            // Boigne on top.
            const st = [222, 214, 196],
              P = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              E = css(e.sh([70, 72, 76])),
              ES = css(e.sh([50, 50, 56])),
              tusk = css(e.sh([236, 230, 214]));
            box(-10, 2, 21, 2, S); // the basin
            box(-10, 2, 21, 1, P);
            box(-4, 10, 9, 8, P); // the base block
            box(4, 10, 1, 8, S);
            for (const s of [-1, 1]) {
              const m = (l, w) => (s < 0 ? l : -l - w + 1); // mirror the left elephant for the right one
              box(m(-8, 4), 9, 4, 4, E); // the side elephants' shoulders, ears, heads and trunks
              box(m(-6, 2), 10, 2, 4, ES);
              box(m(-9, 2), 9, 2, 3, E);
              box(m(-10, 1), 7, 1, 4, E);
              box(m(-9, 1), 6, 1, 1, tusk);
              box(m(-7, 2), 5, 2, 3, E);
            }
            box(-2, 10, 5, 4, E); // the front elephant
            box(-4, 10, 2, 4, ES);
            box(3, 10, 2, 4, ES); // its ears
            box(0, 6, 1, 4, E);
            for (const p of [-1, 1]) box(p, 6, 1, 2, tusk);
            for (const p of [-2, 2]) box(p, 5, 1, 3, E);
            box(-2, 11, 5, 1, P);
            box(-1, 23, 3, 12, P); // the column
            box(1, 22, 1, 11, S);
            box(-2, 24, 5, 1, P);
            box(-1, 25, 3, 1, P);
            box(-1, 29, 3, 4, E); // de Boigne
            box(0, 31, 1, 2, E);
            box(1, 29, 1, 3, ES);
            break;
          }
          case "palaisIsle": {
            // The Palais de l'Isle, Annecy: the old island prison splitting the Thiou canal like a ship's
            // prow, its lit and shaded walls meeting at the point, small windows, brown tiled roofs, and the
            // little square tower with its pyramid roof at the back.
            const st = [224, 210, 182],
              P = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.25))),
              tile = css(e.sh([150, 92, 66])),
              water = css(e.sh([86, 140, 132]));
            box(-6, 18, 4, 18, P); // the tower
            box(-3, 17, 1, 17, S);
            cone(-4, 18, 3, 4, tile);
            box(-5, 16, 1, 2, 2);
            box(-7, 11, 7, 9, Lt); // the prow's two faces
            box(0, 11, 8, 9, S);
            box(-7, 3, 15, 1, css(e.sh(mixc(st, [41, 40, 54], 0.45))));
            for (let j = 0; j < 4; j++) {
              box(-7 + j, 12 + j, 7 - j, 1, tile); // the roofs sloping to the point
              box(0, 12 + j, 8 - 2 * j, 1, tile);
            }
            for (const p of [-5, -2, 2, 5]) {
              box(p, 9, 1, 2, 2);
              box(p, 6, 1, 1, 2);
            }
            box(-9, 2, 19, 2, water);
            box(-9, 1, 19, 1, css(e.sh([70, 116, 112])));
            break;
          }
