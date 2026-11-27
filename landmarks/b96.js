          case "palauCapitol": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Palau National Capitol: broad low cream wings, green rooflines, and a dominant domed central portico.
            const wall = css(e.sh([232, 222, 190])),
              roof = css(e.sh([84, 126, 112]));
            bx(-17, 1, 34, 8, wall);
            bx(-17, 8, 8, 2, roof);
            bx(9, 8, 8, 2, roof);
            bx(-5, 2, 10, 12, wall);
            bx(-6, 13, 12, 1, roof);
            bx(-7, 3, 14, 1, 3);
            for (let q = -5; q <= 5; q += 2) {
              bx(q, 3, 1, 9, 6);
              bx(q, 2, 1, 1, 13);
            }
            bx(-7, 12, 14, 1, 6);
            bx(-6, 14, 12, 1, 13);
            dome(0, 21, 7, wall);
            // Short drum bridges the central pediment to the dome so the Capitol reads as one mass.
            bx(-4, 19, 8, 2, wall);
            // Broad triangular portico pediment in front of the dome, matching the photographed capitol.
            for (let r = 0; r <= 6; r++) bx(-7 + r, 13 + r, 14 - 2 * r, 1, wall);
            bx(-7, 13, 14, 1, roof);
            orb(0, 15, 1, 6);
            bx(-1, 27, 2, 1, roof);
            bx(0, 28, 1, 2, 3);
            for (const q of [-14, -10, 10, 14]) {
              bx(q, 3, 2, 3, 2);
              bx(q, 3, 1, 4, 13);
            }
            break;
          }
          case "baiMelekeok": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Bai ra Melekeok: a Palauan meeting house, low timber platform beneath a steep, broad thatched gable.
            const timber = css(e.sh([116, 72, 48])),
              thatch = css(e.sh([190, 142, 74]));
            bx(-11, 1, 22, 2, 1);
            bx(-10, 3, 20, 1, 12);
            for (let q = -8; q <= 8; q += 4) bx(q, 3, 1, 5, timber);
            bx(-11, 8, 22, 1, timber);
            for (let r = 0; r <= 8; r++) bx(-9 + r, 9 + r, 18 - 2 * r, 1, thatch);
            bx(-3, 4, 6, 1, 3);
            bx(-2, 5, 4, 1, 3);
            bx(-1, 6, 2, 1, 3);
            for (let q = -8; q <= 8; q += 4) bx(q, 7, 1, 1, 12);
            break;
          }
          case "saintDenisCathedral": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Saint-Denis Cathedral: pale neoclassical facade, three-arch portico, pediment clock and a single cupola tower.
            const wall = css(e.sh([239, 231, 210])),
              trim = css(e.sh([190, 175, 145]));
            bx(-10, 1, 20, 17, wall);
            bx(-12, 1, 24, 2, trim);
            for (let q = -9; q <= 9; q += 3) {
              bx(q, 3, 1, 10, 13);
              bx(q - 1, 13, 3, 1, trim);
            }
            for (let q of [-6, 0, 6]) {
              bx(q - 2, 2, 4, 7, 2);
              bx(q - 1, 2, 2, 5, 1);
            }
            bx(-12, 14, 24, 1, trim);
            for (let r = 0; r <= 5; r++) bx(-6 + r, 15 + r, 12 - 2 * r, 1, wall);
            bx(-6, 15, 12, 1, trim);
            bx(-2, 17, 4, 1, 3);
            bx(-1, 17, 2, 1, 2);
            bx(-3, 18, 6, 7, wall);
            bx(-3, 25, 6, 1, trim);
            bx(-2, 26, 4, 1, wall);
            bx(-1, 27, 2, 1, 13);
            dome(0, 28, 2, wall);
            bx(0, 31, 1, 2, 13);
            bx(0, 33, 1, 2, 3);
            break;
          }
          case "noorIslamMosque": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Noor-e-Islam Mosque: light, slender minaret with two projecting balcony rings, open lantern and onion finial.
            const stone = css(e.sh([235, 232, 220]));
            bx(-7, 1, 14, 4, stone);
            bx(-8, 5, 16, 1, 13);
            bx(-4, 6, 8, 15, stone);
            bx(-6, 10, 12, 1, 13);
            bx(-6, 20, 12, 1, 13);
            bx(-3, 21, 6, 6, stone);
            bx(-4, 25, 8, 1, 13);
            bx(-2, 27, 4, 2, 13);
            bx(-3, 29, 6, 1, stone);
            dome(0, 30, 3, stone);
            bx(0, 33, 1, 1, 3);
            for (let q of [-2, 1]) bx(q, 22, 1, 3, 2);
            for (let r of [8, 13, 18, 23]) bx(-1, r, 2, 1, 13);
            break;
          }
          case "honiaraParliament": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Solomon Islands Parliament: a low circular hall beneath a broad pale conical roof and ribbed green crown.
            const wall = css(e.sh([185, 185, 172])),
              roof = css(e.sh([215, 204, 178]));
            bx(-14, 1, 28, 5, wall);
            bx(-15, 5, 30, 1, 13);
            for (let r = 0; r <= 10; r++) bx(-14 + r, 6 + r, 28 - 2 * r, 1, roof);
            bx(-4, 17, 8, 3, 8);
            bx(-4, 18, 8, 1, 13);
            bx(-3, 20, 6, 1, 8);
            for (let r = 0; r < 4; r++) bx(-4, 20 + r, 8, 1, r % 2 ? 8 : 13);
            bx(0, 24, 1, 4, 8);
            for (let q = -11; q <= 11; q += 4) {
              bx(q, 2, 1, 3, 2);
              bx(q + 1, 4, 1, 1, 13);
            }
            break;
          }
          case "holyCrossHoniara": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Holy Cross Cathedral: a broad A-frame roof, dark timber trusses, colored upper glazing, and rough stone walls.
            const stone = css(e.sh([132, 119, 101])),
              roof = css(e.sh([235, 231, 213]));
            bx(-15, 1, 30, 5, stone);
            bx(-14, 6, 28, 1, 2);
            // Fill the A-frame as a solid roof face, then inset colored glazing inside its white border.
            for (let r = 0; r <= 14; r++) bx(-14 + r, 7 + r, 29 - 2 * r, 1, roof);
            const glass = [css(e.sh([91, 129, 139])), css(e.sh([153, 132, 155])), css(e.sh([138, 166, 146]))];
            for (let r = 1; r <= 10; r++) {
              const half = 12 - r;
              bx(-half, 7 + r, half * 2 + 1, 1, glass[r % glass.length]);
            }
            for (let r = 0; r <= 12; r++) {
              bx(-14 + r, 7 + r, 1, 1, roof);
              bx(14 - r, 7 + r, 1, 1, roof);
            }
            for (let q = -10; q <= 10; q += 5) bx(q, 1, 1, 5, 2);
            bx(-12, 6, 24, 1, 2);
            bx(-3, 8, 6, 9, 11);
            bx(-2, 8, 1, 9, 3);
            bx(1, 8, 1, 9, 4);
            bx(-14, 1, 2, 5, 6);
            bx(12, 1, 2, 5, 6);
            bx(-1, 1, 2, 5, 2);
            break;
          }
          case "littleBenSeychelles": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Victoria's Little Ben: a small cast-iron clock replica, with a narrow shaft, four-sided dial housing, and pointed cap.
            const iron = css(e.sh([83, 83, 78])),
              pale = css(e.sh([224, 220, 203]));
            bx(-3, 1, 6, 2, iron);
            bx(-2, 3, 4, 9, iron);
            bx(-3, 12, 6, 6, iron);
            bx(-2, 13, 4, 4, pale);
            bx(-1, 14, 2, 2, 2);
            bx(-4, 18, 8, 1, 3);
            bx(-3, 19, 6, 1, iron);
            bx(-2, 20, 4, 1, pale);
            bx(-1, 21, 2, 1, iron);
            bx(0, 22, 1, 3, 3);
            for (let q of [-3, 2]) bx(q, 1, 1, 2, 8);
            break;
          }
          case "sriNavasakthiGopuram": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Sri Navasakthi Vinayagar Temple: a vivid South Indian-style stepped gopuram with sculpted tiers and finials.
            const coral = css(e.sh([209, 105, 81])),
              gold = css(e.sh([238, 190, 68])),
              teal = css(e.sh([83, 154, 143]));
            bx(-8, 1, 16, 5, css(e.sh([221, 207, 179])));
            bx(-3, 1, 6, 4, 2);
            const tiers = [
              [16, 7],
              [13, 5],
              [10, 4],
              [7, 3],
              [4, 3],
            ];
            let y = 6;
            for (let i = 0; i < tiers.length; i++) {
              const [w, h] = tiers[i],
                col = i % 2 ? coral : gold;
              bx(-w / 2, y, w, h, col);
              bx(-w / 2, y + h - 1, w, 1, 13);
              for (let q = -Math.floor(w / 2) + 1; q < w / 2; q += 3) {
                bx(q, y + 1, 1, Math.max(1, h - 2), teal);
                bx(q, y + h - 2, 1, 1, 3);
              }
              y += h;
            }
            bx(-6, 28, 12, 1, coral);
            for (let q of [-5, -2, 1, 4]) {
              bx(q, 29, 1, 2, 3);
              bx(q, 31, 1, 1, coral);
            }
            bx(0, 28, 1, 4, 3);
            break;
          }
          case "singaporeMarinaSands": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Marina Bay Sands: three blue-glass towers support the long, boat-shaped rooftop SkyPark.
            const glass = css(e.sh([91, 143, 166])),
              shade = css(e.sh([51, 91, 112])),
              deck = css(e.sh([190, 194, 183]));
            for (const cx of [-11, 0, 11]) {
              bx(cx - 4, 2, 8, 19, glass);
              bx(cx - 4, 2, 1, 19, shade);
              bx(cx + 3, 2, 1, 19, shade);
              for (let q = 4; q < 20; q += 3) bx(cx - 3, q, 6, 1, 11);
              bx(cx - 4, 1, 8, 1, 8);
            }
            bx(-18, 21, 36, 1, shade);
            bx(-20, 22, 40, 2, deck);
            bx(-18, 24, 36, 1, 8);
            bx(-17, 25, 34, 1, deck);
            for (let q = -15; q <= 15; q += 3) bx(q, 26, 1, 2, 9);
            bx(-13, 28, 26, 1, 9);
            bx(-10, 29, 20, 1, 9);
            bx(-16, 30, 32, 1, deck);
            bx(-18, 31, 36, 1, shade);
            // Slightly raised tapered bow and stern make the roof park read as a ship across the towers.
            stroke(-20, 26, -17, 23, deck);
            stroke(20, 26, 17, 23, deck);
            bx(-20, 26, 1, 1, deck);
            bx(19, 26, 1, 1, deck);
            break;
          }
          case "singaporeFlyer": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Singapore Flyer: huge thin rim, fine radial spokes, enclosed pods around the wheel, and twin supports.
            const pod = css(e.sh([60, 113, 137]));
            const r = 14,
              cy = 18;
            for (let i = 0; i < 64; i++) {
              const a = (2 * Math.PI * i) / 64,
                b = (2 * Math.PI * (i + 1)) / 64;
              stroke(r * Math.cos(a), cy + r * Math.sin(a), r * Math.cos(b), cy + r * Math.sin(b), 8);
            }
            for (let i = 0; i < 20; i++) {
              const a = (2 * Math.PI * i) / 20,
                px = r * Math.cos(a),
                py = cy + r * Math.sin(a);
              stroke(0, cy, px, py, 8);
              bx(Math.round(px) - 1, Math.round(py), 2, 1, pod);
            }
            orb(0, cy, 2, 8);
            bx(-1, cy + 1, 2, 2, 13);
            stroke(-2, 1, -1, cy - 1, 8);
            stroke(2, 1, 1, cy - 1, 8);
            stroke(-8, 1, 0, cy - 1, 8);
            stroke(8, 1, 0, cy - 1, 8);
            bx(-10, 1, 20, 1, 13);
            bx(-4, 0, 8, 1, 8);
            break;
          }
          case "stJamesJamestown": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // St James' Church: a long pale Gothic nave with pointed windows and a tall square, clocked tower with corner pinnacles.
            const stone = css(e.sh([226, 226, 211])),
              shade = css(e.sh([141, 154, 160]));
            bx(-15, 1, 28, 11, stone);
            bx(-15, 11, 28, 1, shade);
            for (let q = -12; q <= 9; q += 5) {
              bx(q, 3, 2, 5, 11);
              bx(q - 1, 3, 1, 4, shade);
              bx(q, 7, 2, 1, 13);
            }
            for (let r = 0; r <= 13; r++) {
              bx(-14 + r, 12 + r, 28 - 2 * r, 1, stone);
              bx(-14 + r, 12 + r, 1, 1, shade);
              bx(13 - r, 12 + r, 1, 1, shade);
            }
            bx(4, 2, 10, 21, stone);
            bx(3, 2, 1, 21, shade);
            bx(13, 2, 1, 21, shade);
            bx(5, 10, 8, 1, 13);
            bx(6, 11, 6, 7, 2);
            bx(7, 12, 4, 1, 3);
            bx(8, 13, 2, 1, 3);
            bx(3, 23, 12, 1, shade);
            bx(4, 24, 10, 1, stone);
            for (let q of [4, 8, 12]) {
              bx(q, 25, 1, 4, stone);
              bx(q - 1, 28, 3, 1, shade);
            }
            bx(6, 25, 6, 1, 13);
            bx(8, 26, 2, 1, 13);
            bx(9, 27, 1, 3, 13);
            break;
          }
          case "jamestownCastle": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Jamestown's Castle: low white fort walls, attached flat-roofed ranges, crenellations and an open arched gate.
            const wall = css(e.sh([226, 223, 207])),
              shade = css(e.sh([145, 141, 126]));
            bx(-14, 1, 28, 9, wall);
            bx(-14, 1, 28, 1, shade);
            bx(-12, 10, 10, 4, wall);
            bx(2, 10, 11, 4, wall);
            bx(-4, 1, 8, 11, wall);
            bx(-3, 1, 6, 8, 2);
            bx(-5, 9, 10, 1, shade);
            bx(-3, 9, 6, 1, 13);
            for (let q = -13; q <= 12; q += 3) bx(q, 10, 1, 2, wall);
            for (let q = -10; q <= 9; q += 6) {
              bx(q, 5, 4, 3, 2);
              bx(q, 8, 4, 1, 13);
            }
            bx(-13, 14, 3, 1, shade);
            bx(10, 14, 3, 1, shade);
            break;
          }
          case "svalbardChurch": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Svalbard Church: a red timber church with a steep charcoal gable, broad white window band, and a red belfry.
            const red = css(e.sh([174, 50, 43])),
              roof = css(e.sh([68, 67, 69])),
              trim = css(e.sh([234, 231, 218]));
            bx(-13, 1, 26, 10, red);
            bx(-14, 11, 28, 1, trim);
            for (let r = 0; r <= 11; r++) {
              bx(-13 + r, 11 + r, 26 - 2 * r, 1, roof);
              bx(-13 + r, 11 + r, 1, 1, trim);
              bx(12 - r, 11 + r, 1, 1, trim);
            }
            bx(-10, 4, 20, 4, trim);
            for (let q = -9; q <= 8; q += 3) {
              bx(q, 4, 2, 4, 11);
              bx(q, 4, 1, 4, 8);
            }
            bx(3, 11, 7, 12, red);
            bx(2, 11, 1, 12, trim);
            bx(10, 11, 1, 12, trim);
            bx(3, 18, 7, 1, trim);
            for (let r = 0; r <= 3; r++) bx(3 + r, 23 + r, 7 - 2 * r, 1, roof);
            bx(3, 23, 1, 1, trim);
            bx(9, 23, 1, 1, trim);
            bx(6, 27, 1, 3, 3);
            break;
          }
          case "seedVaultEntrance": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Svalbard Global Seed Vault: a restrained angular entrance portal set into the permafrost slope.
            const concrete = css(e.sh([151, 166, 171])),
              ice = css(e.sh([105, 171, 190]));
            bx(-5, 1, 10, 2, 8);
            bx(-4, 3, 8, 2, concrete);
            for (let r = 0; r <= 5; r++) {
              bx(-5 + r, 5 + r, 1, 1, concrete);
              bx(4 - r, 5 + r, 1, 1, concrete);
            }
            bx(-3, 2, 6, 8, 8);
            bx(-2, 3, 4, 7, concrete);
            bx(-1, 4, 2, 5, 2);
            bx(-1, 5, 2, 3, 11);
            bx(-3, 10, 6, 1, ice);
            bx(-2, 11, 4, 1, 3);
            bx(-1, 12, 2, 1, ice);
            break;
          }
          case "guaitaTower": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Guaita, San Marino's First Tower: crenellated curtain walls, a lower watchtower, and a tall square keep on the ridge.
            const stone = css(e.sh([178, 166, 142])),
              shade = css(e.sh([126, 116, 101]));
            bx(-16, 1, 32, 10, stone);
            bx(-16, 10, 32, 1, shade);
            bx(-13, 11, 10, 12, stone);
            bx(-14, 23, 12, 1, shade);
            bx(-12, 24, 8, 1, stone);
            bx(-10, 25, 4, 5, shade);
            bx(-9, 26, 2, 4, 2);
            bx(0, 1, 13, 18, stone);
            bx(0, 18, 13, 1, shade);
            bx(1, 19, 11, 12, stone);
            bx(0, 31, 13, 1, shade);
            bx(1, 32, 11, 1, stone);
            bx(2, 33, 9, 1, shade);
            for (let q of [2, 5, 8, 11]) {
              bx(q, 2, 1, 3, 2);
              bx(q, 15, 1, 2, 2);
              bx(q, 31, 1, 2, stone);
            }
            bx(5, 7, 3, 5, 2);
            bx(6, 8, 1, 2, 13);
            bx(4, 18, 5, 1, shade);
            for (let q = -15; q <= -3; q += 3) bx(q, 11, 1, 2, stone);
            break;
          }
          case "sanMarinoBasilica": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Basilica di San Marino: six-column neoclassical portico, triangular pediment, and a separate square bell tower.
            const stone = css(e.sh([212, 195, 164])),
              shade = css(e.sh([141, 127, 104]));
            bx(-12, 1, 21, 14, stone);
            bx(-12, 14, 21, 1, shade);
            bx(-10, 15, 17, 1, 3);
            for (let r = 0; r <= 8; r++) bx(-10 + r, 16 + r, 20 - 2 * r, 1, stone);
            bx(-10, 16, 20, 1, shade);
            bx(-8, 23, 16, 1, shade);
            bx(-11, 2, 20, 12, shade);
            bx(-11, 13, 20, 1, shade);
            for (let q of [-11, -7, -3, 1, 5, 9]) {
              bx(q, 2, 2, 10, stone);
              bx(q + 1, 2, 1, 10, 13);
              bx(q - 1, 2, 4, 1, shade);
            }
            bx(-4, 2, 8, 8, 2);
            bx(-2, 2, 4, 6, 1);
            bx(-1, 2, 2, 5, 13);
            bx(8, 1, 8, 22, stone);
            bx(7, 1, 1, 22, shade);
            bx(8, 23, 8, 1, shade);
            bx(10, 10, 4, 8, 2);
            bx(11, 11, 2, 5, 13);
            bx(8, 24, 8, 1, stone);
            for (let q of [8, 12, 16]) bx(q, 25, 1, 1, shade);
            bx(11, 26, 2, 1, stone);
            bx(11, 27, 2, 2, 13);
            break;
          }
          case "paramariboCathedral": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Paramaribo's wooden cathedral: ochre vertical boards, a huge rose window, and twin towers with steep slate spires.
            const wood = css(e.sh([193, 162, 102])),
              trim = css(e.sh([115, 112, 101])),
              light = css(e.sh([222, 213, 187]));
            bx(-15, 1, 30, 18, wood);
            bx(-15, 18, 30, 1, trim);
            for (let q = -13; q <= 13; q += 3) bx(q, 2, 1, 15, trim);
            for (let q of [-11, -6, 6, 11]) {
              bx(q, 3, 3, 8, 2);
              bx(q + 1, 4, 1, 5, light);
              bx(q, 11, 3, 1, trim);
            }
            orb(-1, 12, 4, trim);
            orb(-1, 12, 3, light);
            orb(-1, 12, 1, 2);
            bx(-1, 2, 1, 7, 2);
            bx(0, 2, 1, 7, 2);
            for (let q of [-13, 7]) {
              const top = q < 0 ? 24 : 28;
              bx(q, 2, 6, top - 2, wood);
              bx(q, top, 6, 1, trim);
              bx(q + 1, 15, 4, 5, 2);
              bx(q + 2, 16, 2, 3, 8);
              bx(q, top + 1, 6, 1, light);
              bx(q + 1, top + 2, 4, 1, wood);
              for (let r = 0; r <= 7; r++)
                bx(q + 1 + Math.floor(r / 2), top + 3 + r, 4 - Math.floor(r / 2), 1, trim);
              bx(q + 2, top + 10, 2, 1, light);
              bx(q + 3, top + 11, 1, 3, trim);
              bx(q + 3, top + 14, 1, 2, 3);
              for (let k = 0; k < 3; k++) bx(q + 1 + k * 2, top - 1, 1, 1, trim);
            }
            bx(-4, 19, 14, 1, trim);
            break;
          }
          case "paramariboPalace": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Paramaribo Presidential Palace: broad white two-storey wooden colonial facade, green shutters and a raised central portico.
            const wall = css(e.sh([235, 231, 211])),
              roof = css(e.sh([93, 118, 100]));
            bx(-15, 1, 30, 17, wall);
            bx(-15, 9, 30, 1, 13);
            bx(-15, 18, 30, 1, roof);
            for (let q = -12; q <= 12; q += 4) {
              bx(q, 4, 2, 4, 2);
              bx(q, 11, 2, 4, 2);
              bx(q - 1, 4, 1, 4, 9);
              bx(q - 1, 11, 1, 4, 9);
              bx(q + 2, 4, 1, 4, 13);
              bx(q + 2, 11, 1, 4, 13);
            }
            bx(-5, 2, 10, 7, wall);
            bx(-6, 9, 12, 1, roof);
            for (let q of [-4, -1, 2]) bx(q, 2, 1, 7, 13);
            bx(-5, 16, 10, 1, roof);
            bx(-4, 17, 8, 1, wall);
            bx(0, 19, 1, 2, 3);
            for (let q = -14; q <= 14; q += 2) bx(q, 19, 1, 1, 13);
            break;
          }
          case "saoTomeCathedral": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Our Lady of Grace, São Tomé: pale yellow Romanesque church, rose window, and two matching square towers with dark spires.
            const wall = css(e.sh([226, 216, 173])),
              shade = css(e.sh([143, 129, 105])),
              roof = css(e.sh([71, 61, 68]));
            bx(-14, 1, 28, 14, wall);
            bx(-14, 14, 28, 1, shade);
            bx(-8, 15, 16, 1, shade);
            for (let r = 0; r <= 7; r++) {
              bx(-8 + r, 16 + r, 1, 1, wall);
              bx(7 - r, 16 + r, 1, 1, wall);
            }
            bx(-8, 16, 16, 1, shade);
            orb(0, 20, 3, shade);
            orb(0, 20, 2, 13);
            orb(0, 20, 1, 3);
            for (let q = -11; q <= 11; q += 4) {
              bx(q, 3, 2, 7, shade);
              bx(q, 4, 1, 5, 13);
            }
            bx(-3, 1, 6, 8, 2);
            bx(-2, 1, 4, 6, 1);
            for (let q of [-13, 7]) {
              bx(q, 2, 6, 20, wall);
              bx(q + 1, 7, 4, 10, shade);
              bx(q + 2, 8, 2, 8, 2);
              bx(q, 22, 6, 1, shade);
              bx(q + 1, 23, 4, 1, wall);
              for (let r = 0; r <= 8; r++)
                bx(q + 1 + Math.floor(r / 2), 24 + r, 4 - Math.floor(r / 2), 1, roof);
              bx(q + 2, 32, 2, 1, shade);
              bx(q + 3, 33, 1, 3, roof);
              bx(q + 3, 36, 1, 2, 3);
            }
            bx(-12, 2, 1, 8, shade);
            bx(11, 2, 1, 8, shade);
            break;
          }
          case "saoTomePalace": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // São Tomé Presidential Palace: a restrained Portuguese-colonial two-storey block in warm pink with a tiled roof.
            const wall = css(e.sh([218, 161, 143])),
              roof = css(e.sh([131, 67, 55])),
              trim = css(e.sh([233, 207, 183]));
            bx(-14, 1, 28, 16, wall);
            bx(-14, 8, 28, 1, trim);
            bx(-14, 17, 28, 1, roof);
            for (let q = -11; q <= 10; q += 4) {
              bx(q, 3, 2, 3, 2);
              bx(q, 10, 2, 3, 2);
              bx(q - 1, 3, 1, 3, trim);
              bx(q - 1, 10, 1, 3, trim);
              bx(q + 2, 3, 1, 3, trim);
              bx(q + 2, 10, 1, 3, trim);
            }
            bx(-5, 2, 10, 6, wall);
            bx(-6, 8, 12, 1, roof);
            for (let q of [-4, -1, 2]) bx(q, 2, 1, 6, trim);
            bx(-15, 18, 30, 1, roof);
            bx(0, 19, 1, 2, 3);
            for (let q = -14; q <= 14; q += 2) bx(q, 19, 1, 1, 12);
            break;
          }
          case "philipsburgCourthouse": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Philipsburg's historic Courthouse: a compact pale Dutch-Caribbean civic building with a clock cupola and verandah.
            const wall = css(e.sh([235, 228, 199])),
              roof = css(e.sh([142, 74, 56]));
            bx(-13, 1, 26, 13, wall);
            bx(-14, 13, 28, 1, roof);
            bx(-11, 14, 22, 1, wall);
            bx(-12, 15, 24, 1, roof);
            for (let q = -10; q <= 8; q += 4) {
              bx(q, 3, 2, 4, 2);
              bx(q, 8, 2, 4, 2);
              bx(q - 1, 3, 1, 4, 13);
              bx(q - 1, 8, 1, 4, 13);
            }
            bx(-4, 2, 8, 6, wall);
            bx(-4, 8, 8, 1, roof);
            for (let q of [-3, 0, 3]) bx(q, 2, 1, 6, 13);
            bx(-3, 16, 6, 8, wall);
            bx(-4, 24, 8, 1, roof);
            bx(-2, 17, 4, 4, 2);
            bx(-1, 18, 2, 2, 3);
            bx(-4, 21, 8, 1, roof);
            dome(0, 25, 4, wall);
            bx(-1, 29, 2, 1, roof);
            bx(0, 30, 1, 3, 3);
            for (let q of [-9, -5, -1, 3, 7, 11]) bx(q, 1, 1, 4, 13);
            bx(-14, 1, 28, 1, roof);
            break;
          }
          case "fortAmsterdamSintMaarten": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Fort Amsterdam on the peninsula: low pale ramparts, projecting bastions, a gate, and a small flag mast.
            const stone = css(e.sh([174, 162, 137])),
              edge = css(e.sh([125, 118, 102]));
            bx(-14, 1, 28, 7, stone);
            bx(-15, 8, 30, 1, edge);
            bx(-16, 1, 7, 10, stone);
            bx(9, 1, 7, 10, stone);
            bx(-15, 10, 5, 1, edge);
            bx(10, 10, 5, 1, edge);
            bx(-4, 1, 8, 8, stone);
            bx(-3, 1, 6, 6, 2);
            bx(-4, 8, 8, 1, edge);
            bx(-2, 9, 4, 1, stone);
            bx(0, 10, 1, 3, edge);
            bx(1, 12, 3, 2, 10);
            bx(0, 13, 1, 2, edge);
            for (let q = -14; q <= 13; q += 3) bx(q, 8, 1, 2, stone);
            for (let q of [-13, -8, 7, 12]) {
              bx(q, 3, 2, 1, 2);
              bx(q, 4, 1, 2, 13);
            }
            break;
          }
          case "grandTurkLighthouse": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Historic Grand Turk Lighthouse: tapered pale shaft, circular gallery, glazed lantern and small white dome.
            const stone = css(e.sh([226, 217, 189])),
              iron = css(e.sh([104, 99, 85]));
            bx(-3, 1, 6, 17, stone);
            bx(-4, 18, 8, 1, iron);
            bx(-5, 19, 10, 1, stone);
            bx(-6, 20, 12, 1, iron);
            bx(-5, 21, 10, 1, stone);
            bx(-4, 22, 8, 5, 8);
            for (let q of [-4, -2, 0, 2]) bx(q, 22, 1, 5, 3);
            bx(-5, 27, 10, 1, iron);
            bx(-4, 28, 8, 2, stone);
            dome(0, 30, 4, stone);
            bx(-1, 33, 2, 1, iron);
            bx(0, 34, 1, 3, 3);
            for (let q of [-5, 4]) bx(q, 20, 1, 2, iron);
            break;
          }
          case "stThomasGrandTurk": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // St Thomas Anglican Church: modest island church, white nave, red gable roof, arched windows and a bell gable.
            const wall = css(e.sh([228, 222, 204])),
              roof = css(e.sh([140, 72, 60]));
            bx(-10, 1, 20, 11, wall);
            bx(-11, 12, 22, 1, roof);
            for (let r = 0; r <= 10; r++) bx(-11 + r, 12 + r, 22 - 2 * r, 1, roof);
            for (let q of [-7, -2, 4, 8]) {
              bx(q, 3, 2, 4, 2);
              bx(q, 4, 1, 2, 13);
            }
            bx(-3, 1, 6, 7, wall);
            bx(-2, 1, 4, 5, 2);
            bx(-1, 1, 2, 5, 1);
            bx(-4, 8, 8, 1, roof);
            bx(-2, 9, 4, 1, wall);
            bx(-1, 10, 2, 1, 3);
            bx(-10, 1, 1, 4, 13);
            bx(9, 1, 1, 4, 13);
            break;
          }
          case "notreDameKerguelen": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // A modest station chapel silhouette: pale weatherproof walls, a steep dark roof, tiny bell gable and cross.
            const wall = css(e.sh([215, 215, 202])),
              roof = css(e.sh([106, 78, 70]));
            bx(-9, 1, 18, 10, wall);
            bx(-10, 11, 20, 1, roof);
            for (let r = 0; r <= 9; r++) bx(-10 + r, 11 + r, 20 - 2 * r, 1, roof);
            for (let q of [-6, -2, 4, 7]) {
              bx(q, 3, 2, 4, 2);
              bx(q, 4, 1, 2, 13);
            }
            bx(-3, 1, 6, 6, wall);
            bx(-2, 1, 4, 4, 2);
            bx(-1, 1, 2, 4, 1);
            bx(-4, 7, 8, 1, roof);
            bx(-1, 7, 2, 1, 3);
            bx(0, 8, 1, 3, 3);
            bx(-9, 1, 1, 3, 13);
            bx(8, 1, 1, 3, 13);
            break;
          }
          case "atafuChurch": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // A modest Tokelau village church silhouette from regional knowledge, not a claimed photo likeness.
            const wall = css(e.sh([228, 224, 208])),
              roof = css(e.sh([153, 68, 58]));
            bx(-9, 1, 18, 11, wall);
            for (let r = 0; r <= 9; r++) bx(-10 + r, 12 + r, 20 - 2 * r, 1, roof);
            for (let q of [-6, -2, 4, 7]) {
              bx(q, 3, 2, 4, 2);
              bx(q, 4, 1, 2, 13);
            }
            bx(-3, 1, 6, 7, wall);
            bx(-2, 1, 4, 5, 2);
            bx(-1, 1, 2, 5, 1);
            bx(-4, 8, 8, 1, roof);
            bx(-1, 8, 2, 1, 3);
            bx(0, 9, 1, 3, 3);
            break;
          }
          case "atafuFaleFono": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // A traditional open-sided Tokelau fale fono, with raised timber floor, visible posts and a broad thatched roof.
            const timber = css(e.sh([125, 86, 54])),
              thatch = css(e.sh([193, 153, 87]));
            bx(-12, 1, 24, 2, timber);
            bx(-13, 3, 26, 1, 13);
            for (let q of [-10, -6, -2, 2, 6, 10]) bx(q, 3, 1, 7, timber);
            for (let r = 0; r <= 10; r++) {
              const half = 11 - r;
              bx(-half, 10 + r, 2 * half + 1, 1, thatch);
            }
            bx(-12, 11, 24, 1, timber);
            for (let q of [-9, -5, -1, 3, 7]) bx(q, 4, 1, 1, 3);
            break;
          }
          case "tongaRoyalPalace": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Tonga's Royal Palace: long white Victorian timber facade, deep red roof, verandah galleries and central cupola.
            const wall = css(e.sh([231, 226, 207])),
              roof = css(e.sh([137, 62, 53]));
            bx(-17, 1, 34, 10, wall);
            bx(-17, 6, 34, 1, 13);
            bx(-17, 11, 34, 1, roof);
            bx(-18, 12, 36, 1, wall);
            for (let q = -15; q <= 15; q += 3) {
              bx(q, 2, 1, 9, 13);
              bx(q, 7, 1, 1, roof);
              bx(q + 1, 3, 1, 3, 2);
              bx(q + 1, 8, 1, 2, 2);
            }
            for (let q of [-14, -7, 7, 14]) {
              for (let r = 0; r <= 3; r++) bx(q - 3 + r, 12 + r, Math.max(1, 6 - 2 * r), 1, roof);
            }
            bx(-4, 1, 8, 20, wall);
            bx(-5, 20, 10, 1, roof);
            bx(-4, 21, 8, 1, wall);
            bx(-3, 9, 6, 8, 2);
            bx(-2, 10, 4, 6, 13);
            bx(-4, 17, 8, 1, roof);
            bx(-4, 22, 8, 1, roof);
            bx(-3, 23, 6, 3, wall);
            bx(-4, 26, 8, 1, roof);
            bx(-3, 27, 6, 1, roof);
            bx(-2, 28, 4, 1, roof);
            bx(-1, 29, 2, 1, roof);
            bx(0, 30, 1, 4, 3);
            for (let q = -16; q <= 16; q += 2) bx(q, 13, 1, 1, roof);
            break;
          }
          case "centenaryChurchTonga": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // A modest Tongan Methodist church silhouette from memory, not a claimed match to the wrong brick-church photo.
            const wall = css(e.sh([230, 226, 209])),
              roof = css(e.sh([152, 68, 58]));
            bx(-10, 1, 20, 12, wall);
            for (let r = 0; r <= 10; r++) bx(-11 + r, 13 + r, 22 - 2 * r, 1, roof);
            for (let q of [-7, -3, 3, 7]) {
              bx(q, 3, 2, 5, 2);
              bx(q, 4, 1, 3, 13);
            }
            bx(-3, 1, 6, 8, wall);
            bx(-2, 1, 4, 6, 2);
            bx(-1, 1, 2, 5, 1);
            bx(-4, 9, 8, 1, roof);
            bx(-1, 9, 2, 1, 3);
            bx(0, 10, 1, 4, 3);
            bx(-10, 1, 1, 4, 13);
            bx(9, 1, 1, 4, 13);
            break;
          }
          case "fetuAoLima": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Modest Funafuti church silhouette from regional context only; no photo is available for a precise likeness.
            const wall = css(e.sh([228, 225, 210])),
              roof = css(e.sh([155, 66, 57]));
            bx(-9, 1, 18, 11, wall);
            for (let r = 0; r <= 9; r++) bx(-10 + r, 12 + r, 20 - 2 * r, 1, roof);
            for (let q of [-6, -2, 4, 7]) {
              bx(q, 3, 2, 4, 2);
              bx(q, 4, 1, 2, 13);
            }
            bx(-3, 1, 6, 7, wall);
            bx(-2, 1, 4, 5, 2);
            bx(-1, 1, 2, 5, 1);
            bx(-4, 8, 8, 1, roof);
            bx(-1, 8, 2, 1, 3);
            bx(-2, 19, 4, 5, wall);
            bx(-3, 24, 6, 1, roof);
            bx(-1, 24, 2, 1, 2);
            bx(0, 25, 1, 4, 3);
            break;
          }
          case "tuvaluGovBuilding": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // A restrained low-rise government office, drawn from civic-building convention rather than a verified photo.
            const wall = css(e.sh([218, 222, 214])),
              trim = css(e.sh([92, 137, 152]));
            bx(-13, 1, 26, 10, wall);
            bx(-14, 11, 28, 1, trim);
            bx(-13, 12, 26, 1, wall);
            for (let q = -11; q <= 9; q += 4) {
              bx(q, 3, 2, 3, 2);
              bx(q, 7, 2, 3, 2);
              bx(q - 1, 3, 1, 3, trim);
              bx(q - 1, 7, 1, 3, trim);
              bx(q + 2, 3, 1, 3, trim);
              bx(q + 2, 7, 1, 3, trim);
            }
            bx(-3, 1, 6, 8, wall);
            bx(-2, 1, 4, 6, 2);
            bx(-1, 1, 2, 5, 3);
            bx(-14, 13, 28, 1, trim);
            bx(0, 14, 1, 8, 8);
            bx(1, 20, 4, 2, 3);
            break;
          }
          case "vaticanStPeters": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // St Peter's Basilica: huge classical facade with a deep colonnaded portico and the ribbed dome rising behind it.
            const marble = css(e.sh([225, 215, 190])),
              shade = css(e.sh([145, 132, 110]));
            bx(-17, 1, 34, 13, marble);
            bx(-18, 14, 36, 1, shade);
            bx(-16, 14, 32, 1, marble);
            bx(-14, 15, 28, 1, shade);
            for (let q = -13; q <= 12; q += 4) {
              bx(q, 2, 2, 12, marble);
              bx(q + 1, 2, 1, 12, shade);
            }
            bx(-6, 4, 12, 8, 2);
            bx(-4, 4, 8, 6, 1);
            bx(-2, 4, 4, 5, shade);
            bx(-10, 16, 20, 1, shade);
            for (let r = 0; r <= 8; r++) bx(-10 + r, 16 + r, 20 - 2 * r, 1, marble);
            bx(-10, 16, 20, 1, shade);
            bx(-8, 23, 16, 1, marble);
            bx(-7, 24, 14, 8, marble);
            bx(-8, 24, 16, 1, shade);
            for (let q = -6; q <= 5; q += 3) {
              bx(q, 26, 1, 5, shade);
              bx(q + 1, 26, 1, 5, 11);
            }
            const domeStone = css(e.sh([153, 163, 168]));
            dome(0, 29, 8, domeStone);
            for (let q of [-5, -2, 1, 4]) stroke(q, 29, q / 2, 35, shade);
            bx(-2, 36, 4, 1, shade);
            bx(0, 37, 1, 3, 3);
            for (let q of [-16, -11, 10, 15]) {
              bx(q, 15, 2, 3, marble);
              bx(q, 18, 2, 1, shade);
            }
            break;
          }
          case "vaticanObelisk": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Vatican obelisk: slender plain granite shaft on a stepped pedestal, capped by its tiny cross.
            const stone = css(e.sh([181, 165, 139])),
              bronze = css(e.sh([118, 104, 77]));
            bx(-3, 1, 6, 4, bronze);
            bx(-2, 5, 4, 2, stone);
            bx(-3, 7, 6, 1, stone);
            for (let r = 0; r < 24; r++) {
              const w = Math.max(1, 6 - Math.floor(r / 4));
              bx(-Math.floor(w / 2), 8 + r, w, 1, stone);
              bx(-Math.floor(w / 2), 8 + r, 1, 1, bronze);
            }
            bx(-3, 31, 6, 1, bronze);
            bx(-2, 32, 4, 1, stone);
            bx(-1, 33, 2, 1, bronze);
            bx(0, 34, 1, 1, 3);
            bx(-3, 2, 1, 3, bronze);
            bx(2, 2, 1, 3, bronze);
            break;
          }
          case "stMarysKingstown": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // St Mary's Cathedral: dark volcanic-stone Gothic complex, broad nave, a plain square bell tower and a taller ornate spire tower.
            const stone = css(e.sh([90, 87, 82])),
              edge = css(e.sh([150, 143, 128]));
            bx(-15, 1, 30, 12, stone);
            bx(-15, 12, 30, 1, edge);
            for (let q = -13; q <= 11; q += 4) {
              bx(q, 3, 2, 6, 2);
              bx(q, 4, 1, 4, edge);
            }
            for (let r = 0; r <= 8; r++) {
              bx(-15 + r, 13 + r, 1, 1, stone);
              bx(14 - r, 13 + r, 1, 1, stone);
            }
            bx(-10, 13, 9, 17, stone);
            bx(-11, 30, 11, 1, edge);
            bx(-8, 17, 5, 8, 2);
            bx(-7, 18, 3, 6, edge);
            bx(-6, 18, 1, 5, 11);
            for (let q of [3, 8]) {
              const tall = q === 10,
                ht = tall ? 28 : 20;
              bx(q, 2, 7, ht, stone);
              bx(q, ht + 2, 7, 1, edge);
              bx(q + 1, 12, 5, 6, 2);
              bx(q + 2, 13, 3, 4, edge);
              if (tall) {
                bx(q - 1, ht + 3, 9, 1, edge);
                bx(q + 1, ht + 4, 5, 1, stone);
                for (let r = 0; r <= 8; r++) {
                  bx(q + 1 + r / 2, ht + 5 + r, 1, 1, edge);
                  bx(q + 5 - r / 2, ht + 5 + r, 1, 1, edge);
                }
                bx(q + 3, ht + 13, 2, 1, edge);
                bx(q + 4, ht + 14, 1, 3, edge);
              } else {
                for (let j = 0; j < 3; j++) bx(q + j * 2, ht + 2, 1, 2, edge);
              }
            }
            break;
          }
          case "oldGovernmentHouseTortola": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // A modest British-Caribbean colonial house silhouette, not a photo-verified likeness: raised verandah and low hipped roof.
            const wall = css(e.sh([226, 222, 202])),
              roof = css(e.sh([100, 118, 92]));
            bx(-12, 1, 24, 9, wall);
            bx(-13, 10, 26, 1, roof);
            bx(-12, 11, 24, 1, wall);
            for (let q = -10; q <= 8; q += 4) {
              bx(q, 3, 2, 4, 2);
              bx(q - 1, 3, 1, 4, roof);
              bx(q + 2, 3, 1, 4, roof);
            }
            for (let q = -11; q <= 9; q += 4) bx(q, 1, 1, 8, 13);
            bx(-10, 11, 20, 1, roof);
            bx(-7, 12, 14, 1, wall);
            bx(-3, 12, 6, 4, wall);
            bx(-2, 16, 4, 1, roof);
            for (let r = 0; r <= 4; r++) {
              bx(-2 + r, 16 + r, 1, 1, roof);
              bx(1 - r, 16 + r, 1, 1, roof);
            }
            bx(-12, 1, 24, 1, roof);
            break;
          }
          case "stGeorgesRoadTown": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // A restrained pale island church with a small square belfry, distinct from the larger cathedrals in this batch.
            const wall = css(e.sh([226, 223, 207])),
              roof = css(e.sh([80, 98, 122]));
            bx(-9, 1, 18, 10, wall);
            bx(-10, 11, 20, 1, roof);
            for (let r = 0; r <= 8; r++) bx(-10 + r, 11 + r, 20 - 2 * r, 1, roof);
            for (let q of [-6, -2, 3, 7]) {
              bx(q, 3, 2, 4, 2);
              bx(q, 4, 1, 2, 13);
            }
            bx(4, 1, 5, 15, wall);
            bx(3, 16, 7, 1, roof);
            bx(5, 9, 3, 4, 2);
            bx(5, 10, 1, 2, 13);
            bx(6, 16, 1, 2, 3);
            bx(-2, 1, 4, 6, 2);
            bx(-1, 1, 2, 5, 1);
            break;
          }
          case "chiefsNakamalVanuatu": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // A modest Vanuatu nakamal: long raised timber floor, widely spaced open posts and a broad high thatched roof.
            const timber = css(e.sh([117, 76, 48])),
              thatch = css(e.sh([191, 146, 74]));
            bx(-13, 1, 26, 2, timber);
            bx(-14, 3, 28, 1, 13);
            for (let q of [-11, -7, -3, 1, 5, 9, 12]) bx(q, 3, 1, 8, timber);
            for (let r = 0; r <= 11; r++) {
              const half = 13 - r;
              bx(-half, 11 + r, 2 * half + 1, 1, thatch);
            }
            bx(-14, 12, 28, 1, timber);
            for (let q of [-10, -5, 0, 5, 10]) bx(q, 4, 1, 1, 3);
            break;
          }
          case "vanuatuParliament": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // A restrained modern civic hall, drawn without a verified photograph: broad low wings and a central shaded entrance.
            const wall = css(e.sh([213, 218, 207])),
              glass = css(e.sh([75, 126, 145]));
            bx(-14, 1, 28, 10, wall);
            bx(-15, 11, 30, 1, 8);
            bx(-13, 12, 26, 1, wall);
            for (let q = -12; q <= 10; q += 4) {
              bx(q, 3, 3, 5, glass);
              bx(q + 3, 3, 1, 5, 13);
            }
            bx(-5, 1, 10, 8, 2);
            bx(-4, 2, 8, 6, glass);
            bx(-1, 1, 2, 5, 13);
            bx(-16, 1, 32, 1, 8);
            bx(0, 13, 1, 8, 8);
            bx(1, 19, 4, 2, 10);
            break;
          }
          case "mataUtuCathedral": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Mata-Utu cathedral: dark volcanic-stone walls with pale joints, red roof, central emblem and twin crenellated towers.
            const stone = css(e.sh([62, 66, 68])),
              joint = css(e.sh([168, 166, 153])),
              roof = css(e.sh([148, 59, 50]));
            bx(-15, 1, 30, 13, stone);
            bx(-15, 13, 30, 1, joint);
            for (let y = 3; y < 13; y += 3) bx(-15, y, 30, 1, joint);
            for (let q = -13; q <= 12; q += 4) {
              bx(q, 3, 2, 7, 2);
              bx(q, 4, 1, 5, joint);
            }
            bx(-3, 1, 6, 8, 2);
            bx(-2, 1, 4, 6, joint);
            bx(-1, 1, 2, 5, 10);
            bx(-14, 14, 28, 1, roof);
            bx(-12, 15, 24, 1, roof);
            for (let q of [-13, 7]) {
              bx(q, 2, 6, 20, stone);
              bx(q, 21, 6, 1, joint);
              for (let y = 5; y <= 19; y += 4) bx(q, y, 6, 1, joint);
              bx(q + 1, 11, 4, 6, 2);
              bx(q + 2, 12, 2, 4, joint);
              bx(q, 22, 6, 1, roof);
              bx(q + 1, 23, 4, 1, stone);
              for (let j = 0; j < 3; j++) bx(q + 1 + j * 2, 23, 1, 2, joint);
            }
            bx(-1, 10, 2, 2, 3);
            bx(0, 12, 1, 2, 3);
            break;
          }
          case "laveluaRoyalPalace": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Lavelua's palace: low two-level open verandahs under a broad shallow red hipped roof.
            const roof = css(e.sh([202, 87, 66])),
              post = css(e.sh([171, 135, 104])),
              wall = css(e.sh([191, 183, 159]));
            bx(-15, 1, 30, 2, wall);
            for (let q = -13; q <= 12; q += 3) {
              bx(q, 3, 1, 3, post);
              bx(q, 7, 1, 3, post);
            }
            bx(-15, 6, 30, 1, post);
            bx(-15, 10, 30, 1, roof);
            for (let r = 0; r <= 2; r++) {
              const half = 15 - r * 3;
              bx(-half, 10 + r, 2 * half + 1, 1, roof);
            }
            bx(-7, 3, 14, 1, roof);
            bx(-7, 7, 14, 1, roof);
            break;
          }
          case "apiaCathedral": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Apia Cathedral: long pale nave, steep dark roof, one smaller nave dome and a pair of domed front towers.
            const wall = css(e.sh([224, 222, 208])),
              roof = css(e.sh([62, 66, 78])),
              trim = css(e.sh([142, 138, 126]));
            bx(-15, 1, 30, 13, wall);
            bx(-15, 13, 30, 1, trim);
            for (let r = 0; r <= 10; r++) bx(-15 + r, 14 + r, 30 - 2 * r, 1, roof);
            for (let q = -12; q <= 11; q += 4) {
              bx(q, 2, 2, 8, 2);
              bx(q + 1, 3, 1, 6, trim);
            }
            bx(-11, 4, 2, 6, 2);
            bx(-10, 5, 1, 4, 13);
            bx(-2, 4, 2, 6, 2);
            bx(-1, 5, 1, 4, 13);
            bx(-8, 14, 4, 1, trim);
            dome(-6, 15, 4, wall);
            bx(-6, 19, 1, 3, 3);
            for (let q of [2, 8]) {
              bx(q, 2, 6, 20, wall);
              bx(q + 1, 8, 4, 10, trim);
              bx(q + 2, 9, 2, 8, roof);
              bx(q, 22, 6, 1, trim);
              bx(q + 1, 23, 4, 1, wall);
              dome(q + 3, 24, 4, wall);
              bx(q + 2, 28, 2, 1, roof);
              bx(q + 3, 29, 1, 3, 3);
            }
            bx(0, 8, 1, 4, 3);
            bx(1, 10, 1, 2, 3);
            break;
          }
          case "apiaFaleFono": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Samoan fale fono silhouette from regional context only: open assembly hall, raised timber floor and generous roof.
            const timber = css(e.sh([118, 77, 50])),
              thatch = css(e.sh([190, 150, 85]));
            bx(-13, 1, 26, 2, timber);
            bx(-14, 3, 28, 1, 13);
            for (let q of [-11, -8, -5, -2, 1, 4, 7, 10, 13]) bx(q, 3, 1, 8, timber);
            for (let r = 0; r <= 5; r++) {
              const half = r < 3 ? 6 : 6 + (r - 2) * 2;
              bx(-half, 16 - r, 2 * half + 1, 1, thatch);
            }
            bx(-14, 11, 28, 1, timber);
            bx(-13, 12, 26, 1, thatch);
            for (let q of [-12, -6, 0, 6, 12]) bx(q, 4, 1, 1, 3);
            break;
          }
          case "fortOranjeBonaire": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Fort Oranje: low ochre ramparts, narrow square watchtower with a lantern, cannon slots and red-tile buildings inside.
            const ochre = css(e.sh([190, 147, 56])),
              shade = css(e.sh([135, 100, 42])),
              tile = css(e.sh([151, 70, 49]));
            bx(-17, 1, 34, 7, ochre);
            bx(-17, 7, 34, 1, shade);
            for (let q = -15; q <= 14; q += 5) bx(q, 3, 1, 1, 2);
            bx(-11, 8, 10, 4, ochre);
            bx(1, 8, 12, 5, ochre);
            bx(3, 13, 10, 1, tile);
            bx(5, 14, 6, 1, tile);
            bx(4, 9, 1, 3, 2);
            bx(9, 9, 1, 3, 2);
            bx(-13, 1, 8, 24, ochre);
            bx(-14, 1, 1, 24, shade);
            bx(-13, 8, 8, 1, shade);
            bx(-12, 11, 6, 1, shade);
            bx(-11, 12, 4, 10, ochre);
            bx(-10, 14, 2, 2, 2);
            bx(-10, 18, 2, 2, 2);
            bx(-10, 22, 2, 1, 2);
            bx(-13, 25, 8, 1, shade);
            bx(-12, 26, 6, 1, tile);
            bx(-11, 27, 4, 3, 8);
            bx(-10, 30, 2, 1, 3);
            bx(-16, 1, 1, 3, 8);
            bx(14, 1, 1, 3, 8);
            bx(-5, 2, 4, 2, 8);
            bx(-4, 3, 2, 1, shade);
            break;
          }
