          // ++case kicc
          case "kicc": {
            // KICC, Nairobi: a round brown concrete shaft of many thin floors (dark window strips between
            // pale slabs) that ends in a wide flat saucer roof with a small mast, a low podium at its foot
            // and, beside it, the squat brown cone of the plenary hall with its ribs.
            const dark = chShade(c, 0.5),
              slab = chLit(c, 0.3),
              roof = css(e.sh([112, 84, 72]));
            box(-6, 5, 13, 5, chShade(c, 0.15));
            box(-6, 5, 13, 1, slab);
            for (const d of [-3, 0, 3]) box(d, 3, 1, 3, 2);
            box(-4, 30, 9, 30, c);
            box(4, 30, 1, 30, chShade(c, 0.35));
            for (let i = 6; i < 30; i += 2) box(-4, i, 9, 1, i % 4 ? dark : slab);
            box(-6, 34, 13, 1, slab);
            box(-6, 33, 13, 2, dark);
            box(-5, 32, 11, 1, roof);
            box(-4, 30, 9, 1, dark);
            box(0, 39, 1, 5, 8);
            box(-1, 37, 3, 1, 8);
            cone(11, 0, 4, 11, roof);
            for (let j = 1; j < 11; j++) {
              const k = Math.round(4 * (1 - j / 11));
              if (k > 1) for (const s of [-1, 1]) box(11 + Math.round((s * k) / 2), j, 1, 1, dark);
              if (k > 0) box(11 + k, j, 1, 1, css(e.sh([86, 64, 56])));
            }
            box(10, 4, 3, 4, 2);
            box(11, 13, 1, 2, 8);
            break;
          }
          // --case kicc
          // ++case kenyaParliament
          case "kenyaParliament": {
            // Parliament Buildings, Nairobi: a slim pale-stone clock tower with a clock face high on each
            // side, a belfry band under a pointed copper-green cap and a flagstaff, standing at the end of
            // the long low chamber block (flat roof, rows of windows, a columned entrance).
            const shade = chShade(13, 0.3),
              lit = chLit(13, 0.45),
              cu = css(e.sh([96, 150, 130]));
            box(3, 11, 7, 11, 13);
            box(3, 11, 7, 1, lit);
            box(3, 5, 7, 1, shade);
            for (const d of [4, 6, 8]) {
              box(d, 9, 1, 3, 2);
              box(d, 4, 1, 3, 2);
            }
            box(5, 11, 1, 1, lit);
            box(-3, 34, 7, 34, 13);
            box(3, 33, 1, 33, shade);
            for (const i of [10, 14, 20]) box(-3, i, 7, 1, lit);
            for (const i of [5, 12, 17]) box(0, i + 2, 1, 2, 2);
            orb(0, 28, 3, 2);
            orb(0, 28, 2, 6);
            box(0, 29, 1, 2, 2);
            box(-1, 28, 2, 1, 2);
            box(-3, 22, 7, 1, shade);
            box(-3, 36, 7, 2, lit);
            box(-2, 38, 5, 1, 2);
            cone(0, 36, 3, 6, cu);
            box(0, 46, 1, 6, 8);
            box(1, 51, 2, 1, 10);
            box(0, 5, 1, 4, 2);
            box(-1, 4, 3, 1, lit);
            break;
          }
          // --case kenyaParliament
          // ++case fortJesus
          case "fortJesus": {
            // Fort Jesus, Mombasa, from the sea side as in its photo: ochre coral-stone walls on a rocky
            // cliff, a tall square bastion with a crenellated top on the left, a fat round corner tower
            // with a little domed lookout on the right, and the lower curtain wall with the gate in front.
            const sh = chShade(c, 0.28),
              lit = chLit(c, 0.3),
              rock = css(e.sh([112, 106, 100])),
              leaf = css(e.sh([70, 120, 74]));
            box(-14, 4, 29, 4, rock);
            for (const d of [-11, -3, 6, 11]) box(d, 5, 3, 2, chShade(8, 0.2));
            box(-13, 11, 26, 7, c);
            box(-13, 11, 26, 1, lit);
            for (let p = -13; p < 13; p += 2) box(p, 12, 1, 1, c);
            box(-12, 6, 3, 1, 2);
            box(-8, 6, 1, 1, 2);
            box(-4, 5, 3, 1, sh);
            box(-5, 10, 11, 1, sh);
            // the tall square bastion
            box(-9, 14, 12, 7, c);
            box(2, 14, 1, 7, sh);
            for (let p = -9; p < 3; p += 2) box(p, 15, 1, 1, c);
            box(-9, 14, 12, 1, lit);
            for (const d of [-6, -2]) box(d, 12, 1, 2, 2);
            box(-8, 10, 1, 2, 2);
            // the round tower
            box(4, 16, 8, 16, c);
            box(9, 16, 3, 16, sh);
            box(3, 12, 10, 1, lit);
            box(3, 16, 10, 2, lit);
            for (let p = 4; p < 12; p += 2) box(p, 18, 1, 1, c);
            box(6, 14, 1, 2, 2);
            dome(7, 18, 2, chLit(c, 0.2));
            box(7, 22, 1, 2, 3);
            // trees on the rock
            orb(-13, 8, 3, leaf);
            orb(12, 7, 2, leaf);
            break;
          }
          // --case fortJesus
          // ++case mombasaTusks
          case "mombasaTusks": {
            // The Mombasa Tusks on Moi Avenue (1956): two pairs of huge aluminium elephant tusks, each pair
            // rising from both kerbs, crossing high over the road and its tips flaring outward, one pair behind
            // the other, so the road passes through a pair of tapering silver X-shaped arches.
            const pair = (dx, up, col, hi) => {
              const pts = [
                [-5, 0],
                [-5, 5],
                [-4, 9],
                [-2, 12],
                [0, 14],
                [2, 16],
                [4, 19],
                [5, 21],
              ];
              for (const s of [-1, 1])
                for (let i = 0; i < pts.length - 1; i++) {
                  const [a, b] = pts[i],
                    [d, f] = pts[i + 1];
                  stroke(dx + s * a, b + up, dx + s * d, f + up, col);
                  stroke(dx + s * a + 1, b + up, dx + s * d + 1, f + up, col);
                  if (i < 4) stroke(dx + s * a, b + up + 1, dx + s * d, f + up + 1, hi);
                }
            };
            pair(1, 1, 8, 8);
            pair(-1, 0, 6, 3);
            box(-6, 1, 3, 1, 13);
            box(4, 1, 3, 1, 13);
            break;
          }
          // --case mombasaTusks
          // ++case kitMikayi
          case "kitMikayi": {
            // Kit Mikayi near Kisumu: grey granite boulders balanced in a tower. A huge rounded boulder at
            // the foot carries a thick block, which carries a flat slab that overhangs on the left; a tall
            // rounded boulder stands up behind on the right, with a heap of smaller rocks and a tree.
            const g1 = css(e.sh([150, 140, 136])),
              g2 = css(e.sh([120, 112, 112])),
              g3 = css(e.sh([176, 166, 160])),
              leaf = css(e.sh([78, 128, 70]));
            // tall rounded boulder behind, on the right
            box(5, 23, 5, 16, g1);
            dome(7, 23, 3, g1);
            box(9, 22, 1, 16, g2);
            box(5, 22, 1, 12, g3);
            // the stack: foot boulder, thick block, overhanging slab
            box(-7, 8, 11, 8, g1);
            box(-7, 8, 2, 8, g3);
            box(2, 8, 2, 8, g2);
            box(-8, 16, 13, 8, g1);
            box(-8, 16, 2, 8, g3);
            box(3, 16, 2, 8, g2);
            box(-3, 15, 1, 6, g2);
            box(-8, 16, 13, 1, g2);
            box(-10, 20, 15, 4, g1);
            box(-10, 20, 15, 1, g3);
            box(2, 19, 3, 3, g2);
            // heap of rocks and a tree on the right
            for (const [x, y, r] of [
              [8, 5, 4],
              [13, 4, 3],
              [17, 3, 2],
            ]) {
              orb(x, y, r, g1);
              box(x + 1, y - 1, r, 1, g2);
            }
            orb(11, 11, 2, leaf);
            box(11, 9, 1, 3, 1);
            break;
          }
          // --case kitMikayi
          // ++case cryingStone
          case "cryingStone": {
            // The Crying Stone of Ilesi (Kakamega): a tall smooth grey rock shaft with a rounded head,
            // dark wet streaks running down its face like tears, a second smaller rock leaning at its side,
            // and bushes at the foot.
            const g1 = css(e.sh([140, 134, 132])),
              g2 = css(e.sh([102, 98, 100])),
              g3 = css(e.sh([172, 166, 160])),
              leaf = css(e.sh([70, 118, 70]));
            box(-3, 28, 8, 28, g1);
            dome(1, 28, 4, g1);
            box(-3, 28, 2, 28, g3);
            box(3, 28, 2, 28, g2);
            for (const [d, a, b] of [
              [-1, 24, 12],
              [1, 20, 9],
              [2, 26, 5],
            ])
              box(d, a, 1, b, g2);
            box(-3, 14, 2, 2, g2);
            box(-7, 6, 4, 6, g2);
            dome(-5, 6, 3, g1);
            box(-7, 6, 1, 5, g3);
            orb(-8, 2, 2, leaf);
            orb(7, 2, 2, leaf);
            box(-3, 1, 8, 1, g2);
            break;
          }
          // --case cryingStone
          // ++case lamuFort
          case "lamuFort": {
            // Lamu Fort (1813): a plain square coral-rag fort in grey-ochre plaster. Its big feature is the
            // tall round corner tower that tapers upward and ends in a ring of little crenels with arched
            // lookout slits, joined to a long, bare, battered wall with a low parapet and a small gateway.
            const sh = chShade(c, 0.3),
              lit = chLit(c, 0.3),
              wall = css(e.sh([196, 176, 140]));
            box(-14, 8, 16, 8, wall);
            box(-14, 8, 16, 1, lit);
            for (let p = -14; p < 2; p += 2) box(p, 9, 1, 1, wall);
            box(-10, 4, 3, 4, 2);
            box(-9, 5, 1, 1, 3);
            box(-14, 4, 16, 1, sh);
            for (const d of [-5, -1]) box(d, 7, 1, 2, 2);
            // the tower, a little wider at the foot
            for (let j = 0; j < 21; j++) {
              const half = 5 - Math.floor(j / 9);
              box(2 + 5 - half, j + 1, 2 * half + 1, 1, wall);
              box(7 + half - 1, j + 1, 2, 1, sh);
            }
            box(2, 3, 11, 1, sh);
            box(1, 22, 13, 2, lit);
            for (let p = 1; p < 14; p += 2) box(p, 24, 1, 1, wall);
            box(4, 20, 1, 2, 2);
            box(10, 20, 1, 2, 2);
            box(7, 13, 1, 2, 2);
            box(5, 9, 2, 2, sh);
            break;
          }
          // --case lamuFort
          // ++case kilifiBridge
          case "kilifiBridge": {
            // Kilifi Bridge over the creek: a long, low concrete box-girder deck that is thin at midspan and
            // deep over the piers, so its underside arches up between them; each pier is a pair of slanted
            // legs that meet the deck in a V, standing in the water, with a railing along the top.
            const conc = css(e.sh([226, 224, 216])),
              under = css(e.sh([160, 158, 152])),
              water = css(e.sh([86, 150, 156]));
            box(-16, 2, 33, 2, water);
            // the central pier: two slanted legs in the water that meet the deck in a V
            for (let j = 0; j < 8; j++) {
              box(-3 - Math.floor(j / 3), 3 + j, 2, 1, under);
              box(1 + Math.floor(j / 3), 3 + j, 2, 1, under);
            }
            box(-1, 4, 3, 3, under);
            // the deck: deep box girder at the pier, thinning toward both ends, with a railing
            for (let x = -16; x < 17; x++) {
              const dep = 1 + Math.round(3 * Math.max(0, 1 - Math.abs(x) / 12));
              box(x, 11, 1, dep, conc);
              if (dep > 1) box(x, 11 - dep + 1, 1, 1, under);
            }
            for (let x = -16; x < 17; x += 2) box(x, 12, 1, 1, 8);
            box(-16, 5, 3, 3, css(e.sh([118, 140, 92])));
            break;
          }
          // --case kilifiBridge
          // ++case kitaleMuseum
          case "kitaleMuseum": {
            // Kitale Museum (National Museum of Western Kenya), as in its photo: a low single-storey block
            // of cream-yellow plaster on an orange plinth, with a wide corrugated-iron roof with deep eaves,
            // a ribbon of small windows under the eaves, the museum name in dark letters on the front, and
            // a stair and balcony at the right-hand end.
            const cream = css(e.sh([236, 208, 130])),
              plinth = css(e.sh([220, 150, 60])),
              iron = css(e.sh([120, 124, 132])),
              letters = css(e.sh([58, 54, 70]));
            box(-13, 3, 21, 3, plinth);
            box(-12, 8, 20, 5, cream);
            for (let p = -11; p < 7; p += 3) box(p, 8, 2, 1, 2);
            for (let p = -11; p < 7; p += 2) box(p, 7, 1, 1, letters);
            box(-9, 6, 14, 1, letters);
            box(8, 8, 6, 8, cream);
            box(9, 6, 4, 5, 2);
            box(9, 3, 5, 1, 8);
            for (let p = 9; p < 14; p += 2) box(p, 3, 1, 3, 8);
            box(-14, 10, 29, 2, iron);
            box(-13, 12, 27, 1, chLit(8, 0.25));
            box(-14, 9, 29, 1, chShade(8, 0.35));
            break;
          }
          // --case kitaleMuseum
          // ++case menengai
          case "menengai": {
            // Menengai Crater (Nakuru), as in its photo: standing on the grassy rim, a steep green slope
            // falls away from the near rim to the huge flat caldera floor covered in dark bush, with the far
            // rim as a low hazy ridge and a few trees at the rim.
            const slope = css(e.sh([112, 160, 74])),
              slopeSh = css(e.sh([82, 128, 62])),
              floor = css(e.sh([60, 100, 68])),
              far = css(e.sh([94, 130, 130])),
              path = css(e.sh([160, 110, 80]));
            box(-20, 6, 41, 3, far);
            box(-20, 4, 41, 4, floor);
            for (let j = 0; j < 9; j++) {
              const k = 20 - Math.round(j * 1.9);
              box(-20, j + 1 + 3, k, 1, j % 3 ? slope : slopeSh);
            }
            box(-20, 12, 5, 3, slope);
            for (let j = 0; j < 9; j++) box(-17 + Math.round(j * 1.5), 9 - j, 1, 1, path);
            orb(-16, 14, 2, css(e.sh([58, 104, 62])));
            orb(-12, 12, 2, css(e.sh([70, 120, 70])));
            for (const d of [-2, 4, 9, 14]) box(d, 7, 2, 1, slopeSh);
            break;
          }
          // --case menengai
          // ++case tugenHills
          case "tugenHills": {
            // Tugen Hills (Kabarnet), as in its photo: the grassy hilltop at the edge of the Rift Valley
            // escarpment, with a dirt path, a rock outcrop and a few shrubs on the near slope, dropping to
            // the blue haze of the valley far below.
            const grass = css(e.sh([104, 156, 72])),
              grassSh = css(e.sh([78, 122, 64])),
              haze = css(e.sh([84, 112, 150])),
              dirt = css(e.sh([150, 104, 78])),
              rock = css(e.sh([130, 112, 100]));
            box(-18, 5, 37, 5, haze);
            box(-18, 7, 37, 1, css(e.sh([110, 134, 170])));
            for (let j = 0; j < 13; j++) {
              const k = Math.max(4, 18 - j);
              box(-18, j + 1 + 1, k + 1 + Math.round(j / 2), 1, j % 2 ? grass : grassSh);
            }
            box(-18, 14, 9, 2, grass);
            box(8, 9, 12, 3, grassSh);
            for (let j = 0; j < 7; j++) box(-6 + j, 4 + j, 2, 1, dirt);
            box(-14, 7, 4, 3, rock);
            orb(-4, 13, 2, css(e.sh([60, 106, 64])));
            orb(1, 10, 1, css(e.sh([60, 106, 64])));
            break;
          }
          // --case tugenHills
          // ++case homaHill
          case "homaHill": {
            // Homa Hill (Homa Bay), an old volcano standing alone on the plain beside Lake Victoria: a
            // steep, rounded cone with grass and scrub on its flanks and bare grey rock breaking out near
            // the top and on one cliff, a lower shoulder on the right, and a strip of lake in front.
            const grass = css(e.sh([128, 150, 80])),
              dry = css(e.sh([160, 150, 90])),
              rock = css(e.sh([130, 120, 114])),
              rockSh = css(e.sh([96, 90, 92])),
              water = css(e.sh([92, 150, 176]));
            for (let j = 0; j < 20; j++) {
              const k = Math.round(15 * Math.pow(1 - j / 20, 0.75));
              box(-k - 3, j + 4, k + k + 7 - Math.round(j / 5), 1, j % 4 === 3 ? dry : grass);
              box(k - 3 + 4 - Math.round(j / 5) - 1, j + 4, 3, 1, j % 3 ? dry : grass);
            }
            for (let j = 0; j < 7; j++) box(-4 + j, 23 - j * 2 + 1, 5, 2, j % 2 ? rock : rockSh);
            box(-6, 17, 3, 5, rock);
            box(-2, 20, 4, 3, rock);
            box(-2, 23, 5, 1, rockSh);
            box(-18, 4, 38, 4, water);
            box(-18, 4, 38, 1, css(e.sh([140, 196, 214])));
            orb(5, 10, 2, css(e.sh([62, 108, 64])));
            orb(-8, 7, 1, css(e.sh([62, 108, 64])));
            break;
          }
          // --case homaHill
          // ++case marsabitMountain
          case "marsabitMountain": {
            // Marsabit Mountain: a broad forested volcanic massif standing up out of the desert, so it is
            // drawn as a wide dark-green dome with mist-forest bands, a ridge line on top and two small
            // crater lakes (Lake Paradise and Gof Choba) as blue ovals, with pale sand plain around the foot.
            const wood = css(e.sh([48, 110, 72])),
              wood2 = css(e.sh([70, 132, 84])),
              mist = css(e.sh([154, 188, 168])),
              sand = css(e.sh([214, 186, 130])),
              lake = css(e.sh([80, 150, 190]));
            for (let j = 0; j < 20; j++) {
              const k = Math.round(22 * Math.pow(1 - j / 21, 0.6));
              box(-k, j + 3, 2 * k + 1, 1, j % 5 === 4 ? wood2 : wood);
              if (j > 8 && j % 5 === 2) box(-k + 3, j + 3, 2 * k - 5, 1, mist);
            }
            box(-23, 3, 47, 3, sand);
            for (let p = -22; p < 22; p += 4) box(p, 6, 2, 1, chShade(0, 0.2));
            orb(-5, 13, 2, lake);
            box(-7, 13, 5, 1, lake);
            orb(7, 10, 2, lake);
            box(5, 10, 5, 1, lake);
            box(-3, 22, 7, 1, wood2);
            break;
          }
          // --case marsabitMountain
          // ++case kerichoGurdwara
          case "kerichoGurdwara": {
            // Kericho Gurdwara (Sikh temple): a white two-storey hall with a row of arched windows and an
            // arched entrance porch, a big white central dome with a gold kalash on top, four little
            // chhatri domes at the roof corners, and the tall saffron Nishan Sahib flagpole beside it.
            const gold = css(e.sh([232, 190, 70])),
              saffron = css(e.sh([240, 140, 40]));
            box(-9, 12, 19, 12, c);
            box(10, 11, 1, 11, chShade(c, 0.25));
            box(-9, 1, 19, 1, chShade(c, 0.2));
            box(-9, 12, 19, 1, chLit(c, 0.3));
            box(-9, 6, 19, 1, chShade(c, 0.15));
            for (const p of [-7, -4, 3, 6]) {
              box(p, 10, 1, 3, 2);
              box(p, 4, 1, 3, 2);
            }
            box(-2, 9, 5, 9, chLit(c, 0.3));
            box(-1, 7, 3, 7, 2);
            box(0, 8, 1, 1, 2);
            box(-3, 10, 7, 1, gold);
            for (const p of [-8, 8]) {
              box(p - 1, 15, 3, 3, c);
              dome(p, 15, 1, chLit(c, 0.2));
              box(p, 19, 1, 2, gold);
            }
            box(-3, 17, 7, 4, c);
            for (const p of [-2, 0, 2]) box(p, 16, 1, 2, 2);
            dome(0, 17, 5, c);
            box(-1, 17, 2, 2, chLit(c, 0.4));
            box(0, 24, 1, 3, gold);
            orb(0, 27, 1, gold);
            box(13, 28, 1, 28, 8);
            box(14, 28, 3, 3, saffron);
            box(14, 27, 2, 1, saffron);
            break;
          }
          // --case kerichoGurdwara
          // ++case itenGate
          case "itenGate": {
            // The Home of Champions gate at Iten: two thick stone-faced pillars that carry a wide arched
            // sign over the road, painted in the green, red and white of Kenya with a running figure on
            // top, a low wall wing to each side and a dusty road underneath.
            const stone = css(e.sh([170, 150, 120])),
              stoneSh = css(e.sh([128, 112, 94])),
              green = css(e.sh([60, 130, 70])),
              road = css(e.sh([150, 120, 90]));
            for (const s of [-1, 1]) {
              const p = s * 8 - 2;
              box(p, 12, 5, 12, stone);
              box(p + (s > 0 ? 4 : 0), 12, 1, 12, stoneSh);
              for (let j = 3; j < 12; j += 3) box(p, j, 5, 1, stoneSh);
              box(p - 1, 13, 7, 1, chLit(13, 0.1));
              box(s * 13 - 2, 5, 5, 5, stone);
              box(s * 13 - 2, 5, 5, 1, stoneSh);
            }
            for (let x = -6; x <= 6; x++) {
              const up = Math.round(3 * Math.cos((x / 6) * (Math.PI / 2)));
              box(x, 14 + up, 1, 4, x % 5 === 0 ? 6 : 6);
              box(x, 13 + up, 1, 1, green);
              box(x, 10 + up, 1, 1, 10);
            }
            box(-3, 17, 7, 2, 2);
            box(-2, 17, 5, 1, 3);
            box(-1, 22, 3, 2, 10);
            orb(0, 24, 1, 2);
            box(-1, 21, 3, 1, 2);
            box(-6, 1, 13, 1, road);
            break;
          }
          // --case itenGate
          // ++case busiaBorder
          case "busiaBorder": {
            // Busia One Stop Border Post: a long, flat-roofed modern office block painted white with a deep
            // blue band and rows of glazed windows, a wide flat canopy over the lorry lanes held on slim
            // columns (the road passes under it), a tall flagpole at each end and a striped barrier arm.
            const blue = css(e.sh([60, 100, 160]));
            box(-14, 9, 12, 9, c);
            box(-14, 9, 12, 1, blue);
            for (let p = -13; p < -3; p += 2) {
              box(p, 8, 1, 2, 11);
              box(p, 4, 1, 2, 11);
            }
            box(-2, 11, 17, 2, chLit(c, 0.2));
            box(-2, 10, 17, 1, blue);
            for (const p of [-1, 5, 11, 14]) box(p, 9, 1, 9, 8);
            box(7, 12, 2, 1, 6);
            box(1, 5, 9, 1, 10);
            box(1, 4, 1, 4, 8);
            box(9, 4, 1, 4, 8);
            box(-16, 13, 1, 13, 8);
            box(-15, 13, 3, 1, 2);
            box(-15, 12, 3, 1, 10);
            box(-15, 11, 3, 1, 9);
            break;
          }
          // --case busiaBorder
          // ++case kapenguriaMuseum
          case "kapenguriaMuseum": {
            // Kapenguria Six Museum: the small colonial courthouse where six nationalists were tried in
            // 1952-53: a low stone-and-plaster building with a steep red-brown corrugated-iron hipped roof, a
            // central gabled porch with two posts, shuttered windows each side and a brick chimney.
            const wall = css(e.sh([226, 214, 186])),
              roof = css(e.sh([148, 70, 56])),
              roofSh = css(e.sh([112, 52, 46])),
              stone = css(e.sh([150, 138, 120]));
            box(-9, 7, 19, 7, wall);
            box(-9, 2, 19, 2, stone);
            for (const p of [-7, -5, 3, 5]) {
              box(p, 6, 1, 3, 2);
              box(p - 1, 6, 3, 1, chLit(13, 0.2));
            }
            for (let j = 0; j < 3; j++) box(-10 + j, 7 + j + 1, 21 - 2 * j, 1, j % 2 ? roofSh : roof);
            box(-3, 8, 7, 8, wall);
            for (let j = 0; j < 3; j++) box(-4 + j, 8 + j + 1, 9 - 2 * j, 1, roof);
            box(-1, 5, 3, 5, 2);
            box(-3, 4, 1, 4, 12);
            box(3, 4, 1, 4, 12);
            box(-4, 1, 9, 1, stone);
            box(5, 12, 2, 4, 1);
            box(5, 12, 2, 1, 2);
            box(-12, 1, 25, 1, css(e.sh([108, 140, 78])));
            break;
          }
          // --case kapenguriaMuseum
          // ++case referralHospital
          case "referralHospital": {
            // Kerugoya County Referral Hospital: a tall plain white ward block of several storeys with a
            // grid of windows and a red cross on a panel by the entrance, a lower wing with a flat roof
            // beside it, a covered ambulance bay and a water tank on the roof.
            const red = css(e.sh([205, 40, 44])),
              glass = css(e.sh([112, 160, 196]));
            box(-13, 8, 11, 8, c);
            box(-13, 8, 11, 1, chShade(c, 0.2));
            for (let p = -12; p < -3; p += 3) {
              box(p, 6, 2, 2, glass);
              box(p, 2 + 2, 2, 1, glass);
            }
            box(-2, 16, 12, 16, c);
            box(10, 16, 1, 16, chShade(c, 0.3));
            for (let r = 4; r < 16; r += 4) for (let p = -1; p < 9; p += 3) box(p, r + 2, 2, 2, glass);
            box(-2, 17, 12, 1, chShade(c, 0.2));
            box(1, 20, 4, 3, 8);
            box(2, 23, 2, 1, 8);
            box(-2, 7, 4, 7, red);
            box(-1, 6, 2, 5, 6);
            box(-2, 4, 4, 2, 6);
            box(-1, 4, 2, 1, 6);
            box(-2, 3, 5, 1, 8);
            box(-3, 4, 1, 4, 8);
            box(3, 4, 1, 4, 8);
            break;
          }
          // --case referralHospital
