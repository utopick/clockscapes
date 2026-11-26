          case "elizabethCastleJersey": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Elizabeth Castle: low island fortifications, an inner keep, and a taller lookout on the rocky islet.
            const stone = css(e.sh([162, 150, 128])),
              shade = css(e.sh([111, 107, 96]));
            bx(-16, 1, 32, 7, stone);
            bx(-16, 8, 32, 1, shade);
            bx(-12, 8, 24, 5, stone);
            bx(-13, 13, 26, 1, shade);
            bx(-5, 13, 10, 10, stone);
            bx(-6, 23, 12, 1, shade);
            bx(4, 14, 8, 12, stone);
            bx(3, 26, 10, 1, shade);
            for (let q = -14; q <= 13; q += 4) bx(q, 8, 1, 2, stone);
            for (let q of [-3, 1, 7, 10]) bx(q, 17, 1, 3, 2);
            bx(6, 27, 4, 1, stone);
            bx(7, 28, 2, 3, 2);
            break;
          }
          case "stHelierChurch": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              stone = css(e.sh([147, 135, 116])),
              roof = css(e.sh([145, 74, 51])),
              trim = css(e.sh([198, 180, 153]));
            b(-15, 1, 30, 11, stone);
            b(-16, 12, 32, 1, trim);
            b(-14, 13, 28, 1, roof);
            for (let q = 0; q < 7; q++) b(-13 + q, 14 + q, 26 - 2 * q, 1, roof);
            for (let x of [-12, -6, 0, 6, 12]) b(x, 3, 2, 6, 2);
            b(-3, 1, 6, 20, stone);
            b(-4, 21, 8, 1, trim);
            b(-3, 22, 6, 1, stone);
            b(-2, 23, 4, 7, stone);
            b(-2, 25, 4, 1, trim);
            b(-1, 29, 2, 1, 2);
            b(-4, 30, 8, 1, trim);
            b(-2, 31, 4, 4, roof);
            b(-1, 35, 2, 3, roof);
            b(0, 38, 1, 3, 8);
            break;
          }
          case "tarawaManeaba": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Maneaba ni Maungatabu: open Kiribati assembly house with a raised floor, sturdy posts, and a tall thatch roof.
            const timber = css(e.sh([121, 81, 49])),
              thatch = css(e.sh([193, 145, 76]));
            bx(-13, 1, 26, 2, timber);
            bx(-14, 3, 28, 1, 13);
            for (let q of [-11, -7, -3, 1, 5, 9, 13]) bx(q, 3, 1, 8, timber);
            for (let r = 0; r <= 11; r++) {
              const half = 13 - r;
              bx(-half, 11 + r, 2 * half + 1, 1, thatch);
            }
            bx(-14, 12, 28, 1, timber);
            bx(-12, 4, 1, 1, 3);
            bx(11, 4, 1, 1, 3);
            break;
          }
          case "sacredHeartTarawa": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              wall = css(e.sh([231, 229, 211])),
              blue = css(e.sh([69, 123, 171])),
              red = css(e.sh([179, 57, 49]));
            b(-14, 1, 28, 12, wall);
            b(-15, 13, 30, 1, blue);
            b(-13, 14, 26, 1, wall);
            for (let q = 0; q < 7; q++) b(-7 + q, 15 + q, 14 - 2 * q, 1, blue);
            b(-5, 1, 10, 9, red);
            b(-4, 1, 8, 8, wall);
            b(-3, 2, 6, 6, blue);
            b(-2, 2, 4, 5, red);
            b(-1, 2, 2, 4, blue);
            b(-13, 2, 4, 7, blue);
            b(9, 2, 4, 7, blue);
            b(-12, 3, 2, 5, wall);
            b(10, 3, 2, 5, wall);
            break;
          }
          case "berkeleyMemorial": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // Berkeley Memorial: ornate green cast-iron clock fountain on a broad plinth, with gold trim and a white dial.
            const green = css(e.sh([52, 130, 88])),
              gold = css(e.sh([225, 187, 72]));
            bx(-6, 1, 12, 3, 8);
            bx(-5, 4, 10, 1, gold);
            bx(-4, 5, 8, 5, green);
            bx(-6, 10, 12, 1, gold);
            for (let q of [-4, 3]) bx(q, 5, 1, 5, gold);
            bx(-5, 11, 10, 1, green);
            bx(-4, 12, 8, 6, green);
            bx(-5, 18, 10, 1, gold);
            bx(-4, 19, 8, 1, green);
            bx(-3, 20, 6, 1, gold);
            orb(0, 14, 3, gold);
            orb(0, 14, 2, 6);
            bx(-1, 13, 2, 1, 2);
            bx(0, 14, 1, 2, 2);
            bx(0, 21, 1, 3, gold);
            bx(-2, 23, 5, 1, green);
            break;
          }
          case "stGeorgeBasseterre": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              stone = css(e.sh([116, 82, 63])),
              trim = css(e.sh([201, 174, 129])),
              roof = css(e.sh([146, 68, 49]));
            b(-13, 1, 26, 11, stone);
            b(-14, 12, 28, 1, trim);
            b(-12, 13, 24, 1, roof);
            for (let q = 0; q < 6; q++) b(-11 + q, 14 + q, 22 - 2 * q, 1, roof);
            b(3, 1, 8, 24, stone);
            b(2, 25, 10, 1, trim);
            b(4, 13, 6, 7, 2);
            b(5, 14, 4, 1, trim);
            b(6, 15, 2, 3, 13);
            b(2, 26, 10, 1, roof);
            for (let x of [3, 6, 9]) b(x, 27, 1, 2, stone);
            b(2, 29, 10, 1, trim);
            break;
          }
          case "kosovoNationalLibrary": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // National Library of Kosovo: squat white concrete grid wrapped around a cluster of small domed roof units.
            const concrete = css(e.sh([202, 204, 196])),
              grid = css(e.sh([136, 143, 141]));
            bx(-14, 1, 28, 10, concrete);
            bx(-14, 11, 28, 1, grid);
            for (let q = -12; q <= 11; q += 3) bx(q, 1, 1, 10, grid);
            for (let y = 3; y <= 9; y += 3) bx(-14, y, 28, 1, grid);
            for (let q of [-10, -4, 2, 8]) {
              bx(q, 12, 4, 1, grid);
              dome(q + 2, 13, 2, concrete);
              bx(q + 1, 15, 2, 1, grid);
            }
            for (let q of [-13, -7, -1, 5, 11]) bx(q, 12, 1, 1, 8);
            break;
          }
          case "motherTeresaPristina": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              wall = css(e.sh([215, 211, 192])),
              roof = css(e.sh([126, 74, 56])),
              cap = css(e.sh([63, 62, 60]));
            // Mother Teresa Cathedral: narrow red roof strip, unequal tiered towers, aligned openings, clock faces and shallow caps.
            b(-12, 1, 24, 13, wall);
            b(-12, 14, 24, 1, roof);
            b(-10, 15, 20, 1, wall);
            b(-9, 4, 18, 7, wall);
            b(-10, 11, 20, 1, roof);
            b(-8, 12, 16, 1, wall);
            b(-11, 14, 7, 22, wall);
            b(4, 14, 7, 31, wall);
            for (let x of [-9, 6]) {
              b(x, 18, 2, 6, cap);
              b(x, 27, 2, 5, cap);
              b(x, 38, 2, 4, cap);
            }
            b(-12, 25, 9, 1, cap);
            b(3, 33, 9, 1, cap);
            b(-12, 36, 9, 1, cap);
            b(3, 45, 9, 1, cap);
            b(-10, 37, 5, 5, wall);
            b(5, 46, 5, 5, wall);
            b(-9, 39, 3, 2, 2);
            b(6, 48, 3, 2, 2);
            b(-11, 42, 7, 1, cap);
            b(4, 51, 7, 1, cap);
            b(-9, 43, 5, 1, cap);
            b(6, 52, 5, 1, cap);
            b(-11, 29, 7, 1, roof);
            b(4, 37, 7, 1, roof);
            b(-9, 30, 3, 3, wall);
            b(6, 38, 3, 3, wall);
            b(-2, 3, 4, 6, roof);
            b(-1, 4, 2, 4, wall);
            b(-2, 10, 4, 4, wall);
            for (let x of [-9, -5, 0, 5, 9]) b(x, 3, 2, 6, 2);
            break;
          }
          case "elmslieChurchCayman": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              wall = css(e.sh([223, 216, 193])),
              roof = css(e.sh([137, 70, 53]));
            // Elmslie Memorial Church: modest pale island church with a filled pitched roof, square bell tower and arched windows.
            b(-14, 1, 28, 12, wall);
            b(-15, 13, 30, 1, roof);
            for (let q = 0; q < 8; q++) b(-8 + q, 14 + q, 16 - 2 * q, 1, roof);
            b(7, 13, 7, 9, wall);
            b(6, 22, 9, 1, roof);
            b(8, 23, 5, 1, wall);
            b(9, 24, 3, 5, wall);
            b(10, 25, 1, 2, 2);
            b(9, 29, 4, 1, roof);
            b(10, 30, 2, 3, roof);
            for (let x of [-11, -6, 0, 5]) {
              b(x, 3, 2, 7, roof);
              b(x, 4, 1, 5, 2);
            }
            break;
          }
          case "caymanAssembly": {
            const bx = (left, bottom, w, h, color = 0) => box(left, bottom + h, w, h, color);
            // A modest Cayman Islands assembly hall silhouette from memory: low colonial civic block with verandah and a flagstaff.
            const wall = css(e.sh([226, 218, 194])),
              roof = css(e.sh([126, 77, 55]));
            bx(-13, 1, 26, 10, wall);
            bx(-14, 11, 28, 1, roof);
            for (let q = -11; q <= 10; q += 4) {
              bx(q, 3, 2, 4, 2);
              bx(q, 7, 2, 3, 2);
            }
            for (let q = -12; q <= 11; q += 4) bx(q, 1, 1, 9, 13);
            bx(-4, 1, 8, 7, wall);
            bx(-3, 1, 6, 5, 2);
            bx(-2, 1, 4, 4, 13);
            bx(0, 12, 1, 8, 8);
            bx(1, 18, 4, 2, 10);
            break;
          }
          case "castriesCathedral": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              wall = css(e.sh([218, 200, 163])),
              trim = css(e.sh([130, 79, 55]));
            // Castries Cathedral: broad basilica with steep tiled nave roof and a substantial centered clock tower.
            b(-17, 1, 34, 14, wall);
            b(-18, 15, 36, 1, trim);
            b(-15, 16, 30, 1, wall);
            for (let q = 0; q < 8; q++) b(-8 + q, 17 + q, 16 - 2 * q, 1, trim);
            b(-5, 1, 10, 22, wall);
            b(-6, 23, 12, 1, trim);
            b(-4, 24, 8, 1, wall);
            b(-3, 25, 6, 1, trim);
            b(-3, 26, 6, 8, wall);
            b(-2, 28, 4, 1, trim);
            b(-1, 29, 2, 1, 2);
            b(-4, 34, 8, 1, trim);
            b(-2, 35, 4, 4, trim);
            b(-1, 39, 2, 2, 8);
            for (let x of [-13, -8, 8, 13]) b(x, 3, 2, 8, trim);
            break;
          }
          case "castriesMarket": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              iron = css(e.sh([115, 91, 73])),
              red = css(e.sh([145, 56, 43])),
              roof = css(e.sh([177, 91, 62]));
            // Castries Market: long red-brown shed, compact ventilated gable, centered entrance and small clock.
            b(-15, 1, 30, 6, red);
            b(-16, 7, 32, 1, iron);
            b(-13, 8, 26, 1, roof);
            for (let q = 0; q < 3; q++) b(-3 + q, 9 + q, 6 - 2 * q, 1, red);
            for (let x of [-13, -8, -3, 3, 8, 13]) b(x, 2, 2, 3, iron);
            b(-3, 1, 6, 3, red);
            b(-2, 1, 4, 2, iron);
            b(-1, 4, 2, 1, roof);
            b(0, 5, 1, 2, 8);
            break;
          }
          case "vaduzCastle": {
            const b = (x, y, w, h, c = 0) => box(x, y + h, w, h, c),
              stone = css(e.sh([162, 151, 128]));
            // Vaduz Castle: hillside fortress combines a broad pale lower residence with a tall square stone keep and round tower.
            b(-16, 1, 32, 8, stone);
            b(-16, 9, 32, 1, 2);
            b(-11, 9, 22, 7, stone);
            b(-12, 16, 24, 1, 2);
            b(-3, 16, 9, 13, stone);
            b(-4, 29, 11, 1, 2);
            b(-1, 30, 7, 1, stone);
            b(0, 31, 5, 4, 2);
            b(7, 12, 8, 8, stone);
            b(6, 20, 10, 1, 2);
            b(8, 21, 6, 1, stone);
            for (let x = -13; x <= 12; x += 4) b(x, 3, 2, 3, 2);
            for (let x = -8; x <= 7; x += 5) b(x, 11, 2, 3, 2);
            for (let y = 20; y < 28; y += 4) b(0, y, 2, 2, 2);
            break;
          }
          case "vaduzCathedral": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              wall = css(e.sh([211, 207, 190])),
              roof = css(e.sh([72, 73, 72]));
            // Vaduz Cathedral: pale nave, tall open tower and one continuous spire tapering across its full rise.
            b(-14, 1, 28, 13, wall);
            b(-15, 14, 30, 1, roof);
            b(-12, 15, 24, 1, wall);
            b(-4, 14, 8, 18, wall);
            b(-5, 32, 10, 1, roof);
            b(-3, 24, 6, 1, roof);
            b(-3, 25, 6, 4, wall);
            b(-2, 27, 4, 1, roof);
            b(-4, 29, 8, 1, roof);
            b(-3, 30, 6, 1, wall);
            const widths = [
              7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1,
            ];
            widths.forEach((w, i) => b(-Math.floor(w / 2), 32 + i, w, 1, roof));
            for (let x of [-12, -7, 7, 12]) b(x, 3, 2, 7, roof);
            break;
          }
          case "adolpheBridge": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              stone = css(e.sh([199, 193, 177])),
              shade = css(e.sh([130, 126, 118]));
            // Adolphe Bridge: wide center opening stays open to the sky beneath a stepped semicircle of masonry.
            b(-20, 16, 40, 4, stone);
            b(-21, 20, 42, 1, shade);
            b(-20, 14, 40, 2, stone);
            b(-20, 1, 5, 13, stone);
            b(15, 1, 5, 13, stone);
            for (let y = 1; y <= 6; y++) {
              b(-13, y, 5, 1, stone);
              b(8, y, 5, 1, stone);
            }
            b(-13, 7, 4, 1, stone);
            b(9, 7, 4, 1, stone);
            b(-13, 8, 5, 1, stone);
            b(8, 8, 5, 1, stone);
            b(-13, 9, 6, 1, stone);
            b(7, 9, 6, 1, stone);
            b(-13, 10, 8, 1, stone);
            b(5, 10, 8, 1, stone);
            b(-13, 11, 10, 1, stone);
            b(3, 11, 10, 1, stone);
            b(-13, 12, 12, 1, stone);
            b(1, 12, 12, 1, stone);
            b(-13, 13, 26, 1, stone);
            b(-18, 1, 3, 6, shade);
            b(15, 1, 3, 6, shade);
            b(-20, 21, 42, 1, stone);
            break;
          }
          case "luxNotreDame": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              stone = css(e.sh([199, 191, 169])),
              roof = css(e.sh([65, 67, 67]));
            // Notre-Dame: broad Gothic nave beneath a dark roof and two unequal masonry spires with open louvred stages.
            b(-16, 1, 32, 15, stone);
            b(-17, 16, 34, 1, roof);
            b(-13, 17, 26, 1, stone);
            b(-14, 16, 9, 20, stone);
            b(5, 16, 9, 26, stone);
            b(-15, 36, 11, 1, roof);
            b(4, 42, 11, 1, roof);
            b(-12, 37, 7, 5, stone);
            b(7, 43, 7, 5, stone);
            b(-11, 39, 5, 2, 2);
            b(8, 45, 5, 2, 2);
            b(-13, 42, 9, 1, roof);
            b(6, 48, 9, 1, roof);
            for (let q = 0; q < 5; q++) b(-10 + q, 43 + q, 6 - 2 * q, 1, roof);
            for (let q = 0; q < 7; q++) b(8 + q, 49 + q, 8 - 2 * q, 1, roof);
            b(-1, 4, 2, 7, roof);
            b(-2, 11, 4, 1, roof);
            b(0, 12, 1, 4, 8);
            for (let x of [-11, -5, 5, 11]) b(x, 3, 2, 7, roof);
            break;
          }
          case "monteCarloCasino": {
            const b = (x, y, w, h, c = 0) => box(x, y + h, w, h, c),
              cream = css(e.sh([212, 184, 139])),
              gold = css(e.sh([219, 167, 72]));
            // Monte Carlo Casino: ornate Beaux-Arts facade, central clock pavilion, paired domed towers and rooftop balustrade.
            b(-16, 1, 32, 15, cream);
            b(-17, 16, 34, 1, gold);
            b(-15, 17, 30, 1, cream);
            for (let x = -13; x <= 12; x += 4) {
              b(x, 4, 2, 7, 2);
              b(x, 5, 1, 5, 8);
              b(x - 1, 12, 4, 1, gold);
            }
            b(-4, 4, 8, 11, 2);
            b(-3, 6, 6, 7, cream);
            b(-2, 9, 4, 4, gold);
            b(-1, 10, 2, 2, 8);
            for (let x of [-12, 8]) {
              b(x, 16, 4, 5, cream);
              b(x - 1, 21, 6, 1, gold);
              dome(x + 2, 22, 3, cream);
              b(x + 1, 25, 2, 1, gold);
            }
            for (let x = -14; x <= 14; x += 4) b(x, 18, 1, 3, gold);
            break;
          }
          case "monacoPalace": {
            const b = (x, y, w, h, c = 0) => box(x, y + h, w, h, c),
              cream = css(e.sh([213, 196, 160]));
            // Prince's Palace, Monaco: creamy palace frontage with a tall square keep, crenellations and narrow courtyard wing.
            b(-16, 1, 32, 12, cream);
            b(-17, 13, 34, 1, 2);
            b(-13, 14, 26, 8, cream);
            b(-14, 22, 28, 1, 2);
            b(5, 13, 9, 16, cream);
            b(4, 29, 11, 1, 2);
            b(6, 30, 7, 1, cream);
            for (let x = -12; x <= 12; x += 4) b(x, 4, 2, 4, 2);
            for (let x = -11; x <= 11; x += 5) b(x, 17, 2, 3, 2);
            for (let x of [5, 8, 11]) b(x, 30, 1, 2, cream);
            b(8, 31, 1, 4, 8);
            b(9, 33, 4, 2, 9);
            break;
          }
          case "fortLouisMarigot": {
            const b = (x, y, w, h, c = 0) => box(x, y + h, w, h, c),
              stone = css(e.sh([151, 131, 101]));
            // Fort Louis: small irregular stone hilltop battery with broken low walls and a prominent flag mast, not a castle keep.
            b(-15, 1, 30, 4, stone);
            b(-16, 5, 8, 2, stone);
            b(-6, 5, 5, 4, stone);
            b(0, 5, 8, 3, stone);
            b(9, 5, 7, 2, stone);
            b(-14, 3, 4, 2, 2);
            b(-4, 4, 3, 3, 2);
            b(2, 4, 4, 2, 2);
            b(11, 3, 3, 3, 2);
            b(5, 8, 1, 14, 8);
            b(6, 19, 5, 2, 9);
            for (let x = -12; x <= 12; x += 5) b(x, 1, 2, 2, stone);
            break;
          }
          case "marigotChurch": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              wall = css(e.sh([215, 204, 167])),
              trim = css(e.sh([123, 103, 85]));
            // Marigot church: modest-width pale facade, filled triangular pediment, centered clock, and deep arched entry.
            b(-10, 1, 20, 17, wall);
            b(-11, 18, 22, 1, trim);
            for (let q = 0; q < 9; q++) b(-9 + q, 19 + q, 18 - 2 * q, 1, wall);
            b(-3, 1, 6, 11, trim);
            b(-2, 2, 4, 8, wall);
            b(-1, 3, 2, 6, 8);
            b(-2, 13, 4, 1, trim);
            b(-1, 14, 2, 2, 8);
            b(-2, 16, 4, 1, trim);
            for (let x of [-8, -5, 5, 8]) {
              b(x, 4, 2, 8, trim);
              b(x, 5, 1, 6, 8);
            }
            break;
          }
          case "majuroCapitol": {
            const b = (x, y, w, h, c = 0) => box(x, y + h, w, h, c),
              wall = css(e.sh([216, 204, 171]));
            // Nitijeļā: modest island legislature building on a low plinth, with a shaded front veranda and flag staff.
            b(-13, 1, 26, 10, wall);
            b(-14, 11, 28, 1, 2);
            b(-12, 12, 24, 1, wall);
            for (let x = -11; x <= 10; x += 4) {
              b(x, 3, 2, 6, 2);
              b(x, 8, 2, 2, wall);
            }
            b(-4, 1, 8, 7, wall);
            b(-3, 1, 6, 5, 2);
            b(-2, 1, 4, 4, 13);
            for (let x = -12; x <= 11; x += 4) b(x, 1, 1, 10, 13);
            b(1, 12, 1, 9, 8);
            b(2, 18, 4, 2, 9);
            break;
          }
          case "majuroBridge": {
            const b = (x, y, w, h, c = 0) => box(x, y + h, w, h, c),
              concrete = css(e.sh([190, 180, 153]));
            // Majuro Bridge: long low road deck over lagoon water with repeating concrete supports, a flat causeway profile.
            b(-18, 10, 36, 3, concrete);
            b(-18, 13, 36, 1, 2);
            b(-17, 9, 34, 1, concrete);
            for (let x = -15; x <= 14; x += 6) {
              b(x, 2, 2, 7, concrete);
              b(x - 1, 1, 4, 1, 2);
            }
            b(-18, 6, 5, 3, concrete);
            b(13, 6, 5, 3, concrete);
            for (let x = -16; x <= 16; x += 4) b(x, 14, 1, 2, 2);
            break;
          }
          case "macauTower": {
            const b = (x, y, w, h, c = 0) => box(x, y + h, w, h, c),
              steel = css(e.sh([86, 96, 100]));
            // Macau Tower: extremely tall tapered concrete shaft, broad circular observation pod and fine antenna mast above it.
            b(-2, 1, 4, 31, steel);
            b(-3, 25, 6, 2, 2);
            b(-4, 28, 8, 1, steel);
            b(-6, 29, 12, 5, steel);
            b(-7, 30, 14, 1, 2);
            b(-5, 34, 10, 1, 2);
            b(-4, 35, 8, 1, steel);
            for (let y = 5; y < 26; y += 5) {
              b(-3, y, 1, 2, 2);
              b(2, y, 1, 2, 2);
            }
            b(0, 36, 1, 11, 8);
            b(0, 47, 1, 2, 2);
            b(-1, 34, 2, 1, 2);
            b(-14, 1, 9, 5, 13);
            b(-14, 6, 9, 1, 2);
            b(6, 1, 8, 4, 13);
            b(6, 5, 8, 1, 2);
            break;
          }
          case "macauStPauls": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              stone = css(e.sh([168, 160, 143])),
              shade = css(e.sh([104, 98, 88]));
            // Ruins of St Paul's: broad surviving stone facade, stacked sculpted tiers, triangular pediment and central cross.
            b(-15, 1, 30, 5, stone);
            b(-16, 6, 32, 1, shade);
            b(-13, 7, 26, 5, stone);
            b(-14, 12, 28, 1, shade);
            b(-11, 13, 22, 5, stone);
            b(-12, 18, 24, 1, shade);
            b(-8, 19, 16, 4, stone);
            b(-9, 23, 18, 1, shade);
            for (let q = 0; q < 8; q++) b(-7 + q, 24 + q, 14 - 2 * q, 1, stone);
            b(-2, 25, 4, 3, shade);
            b(-1, 26, 2, 3, stone);
            b(0, 29, 1, 4, shade);
            for (let y of [2, 8, 14, 20]) for (let x = -12; x <= 10; x += 4) b(x, y, 2, 2, shade);
            b(-15, 1, 30, 1, shade);
            b(-5, 3, 10, 1, stone);
            b(-4, 9, 8, 1, shade);
            b(-3, 15, 6, 1, shade);
            break;
          }
          case "saipanCathedral": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              wall = css(e.sh([207, 204, 184])),
              trim = css(e.sh([238, 230, 207]));
            // Our Lady of Mount Carmel: broad pale frontage, raised rectangular center, upper arcade and three dark entry arches.
            b(-16, 1, 32, 15, wall);
            b(-17, 16, 34, 1, trim);
            b(-13, 17, 26, 1, trim);
            b(-8, 13, 16, 11, wall);
            b(-9, 24, 18, 1, trim);
            b(-7, 25, 14, 1, wall);
            for (let x = -5; x <= 4; x += 3) b(x, 20, 2, 4, trim);
            b(-3, 18, 6, 1, trim);
            b(-2, 19, 4, 1, wall);
            b(-1, 21, 2, 2, 8);
            for (let x of [-11, -1, 9]) {
              b(x, 1, 3, 7, trim);
              b(x + 1, 1, 1, 5, 8);
            }
            for (let x of [-12, -2, 8]) {
              b(x, 1, 4, 1, trim);
              b(x + 1, 2, 2, 3, 2);
            }
            break;
          }
          case "saipanBunker": {
            const b = (x, y, w, h, c = 0) => box(x, y + h, w, h, c),
              concrete = css(e.sh([111, 109, 99]));
            // Japanese command post on Saipan: low reinforced-concrete bunker face with narrow embrasures and an irregular buried roofline.
            b(-13, 1, 26, 9, concrete);
            b(-15, 10, 30, 2, concrete);
            b(-16, 12, 32, 1, 2);
            b(-10, 3, 4, 2, 2);
            b(6, 3, 4, 2, 2);
            b(-2, 2, 4, 3, 2);
            b(-8, 1, 2, 2, 13);
            b(6, 1, 2, 2, 13);
            b(-1, 1, 2, 1, 8);
            b(-13, 1, 3, 4, 8);
            b(10, 1, 3, 4, 8);
            break;
          }
          case "schoelcherLibrary": {
            const b = (x, y, w, h, c = 0) => box(x, y + h, w, h, c),
              cream = css(e.sh([213, 192, 145])),
              red = css(e.sh([146, 62, 51]));
            // Schœlcher Library: ornate historic pavilion, central domed rotunda, arched wings and bright striped roof band.
            b(-13, 1, 26, 13, cream);
            b(-15, 14, 30, 1, red);
            b(-12, 15, 24, 1, cream);
            for (let x = -12; x <= 10; x += 4) {
              b(x, 3, 3, 7, 2);
              b(x, 4, 1, 5, cream);
              b(x + 2, 4, 1, 5, cream);
            }
            b(-5, 2, 10, 14, cream);
            b(-6, 16, 12, 1, red);
            b(-4, 17, 8, 1, cream);
            b(-3, 10, 6, 5, red);
            b(-2, 11, 4, 4, cream);
            b(-1, 12, 2, 3, 2);
            dome(0, 18, 5, cream);
            b(-5, 22, 10, 1, red);
            b(-1, 23, 2, 2, 8);
            for (let x = -14; x <= 13; x += 4) b(x, 15, 1, 2, red);
            break;
          }
          case "fortFranceCathedral": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              wall = css(e.sh([198, 169, 126])),
              trim = css(e.sh([120, 82, 60]));
            // St Louis Cathedral: broad cream church and a tall continuous tapered spire rising directly from the tower crown.
            b(-15, 1, 30, 17, wall);
            b(-16, 18, 32, 1, trim);
            b(-12, 19, 24, 1, wall);
            for (let q = 0; q < 11; q++) b(-6 + q, 20 + q, 12 - 2 * q, 1, wall);
            b(-5, 1, 10, 26, wall);
            b(-6, 27, 12, 1, trim);
            b(-4, 28, 8, 1, wall);
            b(-3, 29, 6, 1, trim);
            b(-3, 30, 6, 10, trim);
            b(-2, 31, 4, 8, wall);
            b(-1, 35, 2, 2, 8);
            const widths = [7, 7, 7, 7, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1];
            widths.forEach((w, i) => b(-Math.floor(w / 2), 40 + i, w, 1, trim));
            b(0, 62, 1, 2, 8);
            for (let x of [-12, -7, 7, 12]) b(x, 3, 2, 9, trim);
            break;
          }
          case "soufriereHills": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              green = css(e.sh([83, 112, 70])),
              ash = css(e.sh([126, 124, 119]));
            // Soufrière Hills: low broad green flanks around a broken ash-gray summit, with no detached plume or peak marker.
            b(-18, 1, 36, 3, green);
            b(-16, 4, 32, 3, green);
            b(-13, 7, 26, 3, green);
            b(-10, 10, 20, 3, green);
            b(-7, 13, 14, 3, green);
            b(-5, 16, 10, 3, ash);
            b(-3, 19, 7, 2, ash);
            b(0, 21, 5, 2, ash);
            b(3, 23, 3, 2, ash);
            b(-17, 1, 5, 2, ash);
            b(-12, 1, 6, 2, green);
            b(8, 1, 7, 2, green);
            break;
          }
          case "plymouthMemorial": {
            const b = (x, y, w, h, c = 0) => box(x, y + h, w, h, c),
              stone = css(e.sh([155, 145, 124]));
            // Plymouth war memorial: restrained square public clock tower on plinth, with a simple pointed cap and clock face.
            b(-5, 1, 10, 3, stone);
            b(-4, 4, 8, 13, stone);
            b(-5, 17, 10, 1, 2);
            b(-3, 8, 6, 5, 2);
            b(-2, 9, 4, 3, 8);
            b(-1, 10, 2, 1, 2);
            b(-3, 18, 6, 1, stone);
            b(-2, 19, 4, 1, stone);
            for (let r = 0; r < 8; r++) b(-1, 20 + r, 1, 1, stone);
            b(-1, 28, 1, 1, 8);
            break;
          }
          case "vallettaCarmelite": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              stone = css(e.sh([192, 151, 98])),
              trim = css(e.sh([132, 94, 62]));
            // Carmelite Basilica: rounded monumental dome, short columned lantern drum and small cross.
            b(-13, 1, 26, 5, stone);
            b(-14, 6, 28, 1, trim);
            b(-12, 7, 24, 1, stone);
            dome(0, 8, 13, stone);
            b(-13, 8, 26, 1, trim);
            b(-5, 20, 10, 1, trim);
            b(-4, 21, 8, 5, stone);
            for (let x of [-3, -1, 1, 3]) b(x, 22, 1, 4, 2);
            b(-5, 26, 10, 1, trim);
            b(-3, 27, 6, 1, stone);
            b(-2, 28, 4, 3, stone);
            b(-3, 31, 6, 1, trim);
            b(-1, 32, 2, 2, stone);
            b(0, 34, 1, 2, trim);
            b(-1, 36, 3, 1, trim);
            b(0, 37, 1, 2, 8);
            break;
          }
          case "stJohnsValletta": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              stone = css(e.sh([202, 172, 120])),
              trim = css(e.sh([145, 103, 62]));
            // St John's Co-Cathedral: compact wide baroque front, integrated paired belfry towers and central pediment.
            b(-14, 1, 28, 12, stone);
            b(-15, 13, 30, 1, trim);
            b(-12, 14, 24, 1, stone);
            b(-13, 13, 8, 10, stone);
            b(5, 13, 8, 13, stone);
            b(-14, 23, 10, 1, trim);
            b(4, 26, 10, 1, trim);
            b(-12, 24, 6, 3, stone);
            b(6, 27, 6, 3, stone);
            b(-11, 25, 4, 1, 2);
            b(7, 28, 4, 1, 2);
            b(-13, 27, 8, 1, trim);
            b(5, 30, 8, 1, trim);
            b(-2, 14, 4, 4, trim);
            b(-1, 15, 2, 2, 2);
            b(-2, 18, 4, 1, trim);
            for (let q = 0; q < 5; q++) b(-5 + q, 19 + q, 10 - 2 * q, 1, stone);
            b(0, 24, 1, 2, 8);
            for (let x of [-10, -6, 6, 10]) b(x, 3, 2, 6, 2);
            break;
          }
          case "fortAdelaide": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              stone = css(e.sh([177, 151, 110])),
              shade = css(e.sh([115, 102, 82]));
            // Fort Adelaide: compact citadel on a high ridge, with angular corner bastions and crenellated parapets.
            b(-15, 1, 30, 7, stone);
            b(-18, 8, 9, 4, stone);
            b(9, 8, 9, 4, stone);
            b(-11, 8, 22, 3, stone);
            b(-17, 12, 8, 1, shade);
            b(9, 12, 8, 1, shade);
            b(-11, 11, 22, 1, shade);
            b(-5, 11, 10, 4, stone);
            b(-3, 15, 6, 1, shade);
            b(-2, 16, 4, 1, stone);
            for (let x = -15; x <= 13; x += 5) b(x, 8, 2, 2, shade);
            break;
          }
          case "jummahMosque": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              white = css(e.sh([232, 230, 215])),
              teal = css(e.sh([105, 163, 166])),
              ink = css(e.sh([66, 72, 69]));
            // Jummah Mosque: white ornate prayer hall with dark dome, roof finials, and long two-storey arcaded wings.
            b(-17, 1, 34, 8, white);
            b(-18, 9, 36, 1, teal);
            b(-14, 10, 28, 6, white);
            b(-6, 10, 12, 12, white);
            b(-7, 22, 14, 1, teal);
            dome(0, 23, 6, ink);
            b(-1, 29, 2, 1, teal);
            b(0, 30, 1, 3, ink);
            for (let x = -15; x <= 13; x += 4) {
              b(x, 3, 2, 4, ink);
              b(x + 1, 3, 1, 4, white);
              b(x, 8, 1, 1, teal);
            }
            for (let x of [-17, 13]) {
              b(x, 10, 2, 10, white);
              b(x, 20, 2, 1, teal);
              b(x, 21, 1, 4, white);
              b(x, 25, 1, 1, teal);
            }
            for (let x = -14; x <= 12; x += 4) {
              b(x, 11, 2, 3, teal);
              b(x, 4, 2, 3, teal);
            }
            break;
          }
          case "maleGrandMosque": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              white = css(e.sh([235, 231, 213])),
              gold = css(e.sh([210, 164, 57])),
              dark = css(e.sh([76, 72, 58]));
            // Malé Grand Friday Mosque: broad pale prayer hall, prominent gold dome and adjacent slender minaret.
            b(-15, 1, 28, 12, white);
            b(-16, 13, 30, 1, gold);
            b(-12, 14, 22, 5, white);
            b(-6, 19, 12, 1, gold);
            dome(0, 20, 6, gold);
            b(-1, 26, 2, 1, dark);
            b(0, 27, 1, 2, gold);
            b(16, 1, 3, 19, white);
            b(15, 20, 5, 1, gold);
            b(16, 21, 3, 1, dark);
            b(17, 22, 1, 2, gold);
            for (let x = -12; x <= 10; x += 5) {
              b(x, 4, 2, 6, dark);
              b(x, 5, 1, 4, white);
            }
            b(-14, 1, 3, 15, white);
            b(10, 1, 3, 15, white);
            b(-15, 16, 5, 1, gold);
            b(9, 16, 5, 1, gold);
            break;
          }
          case "sinamaleBridge": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              deck = css(e.sh([193, 191, 177])),
              shadow = css(e.sh([119, 126, 132]));
            // Sinamalé Bridge: gently bending road deck carried by broad tapered Y-shaped piers over open water.
            b(-19, 8, 13, 2, deck);
            b(-8, 9, 12, 2, deck);
            b(4, 8, 15, 2, deck);
            b(-19, 10, 38, 1, shadow);
            b(-14, 1, 3, 7, shadow);
            b(-15, 7, 2, 2, shadow);
            b(-12, 7, 2, 2, shadow);
            b(-1, 1, 3, 8, shadow);
            b(-3, 7, 2, 2, shadow);
            b(1, 7, 2, 2, shadow);
            b(11, 1, 3, 7, shadow);
            b(9, 7, 2, 2, shadow);
            b(14, 7, 2, 2, shadow);
            b(-19, 11, 2, 1, deck);
            b(17, 11, 2, 1, deck);
            break;
          }
          case "tjibaouCentre": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              wood = css(e.sh([151, 76, 44])),
              rib = css(e.sh([204, 125, 66])),
              inner = css(e.sh([93, 65, 50]));
            // Tjibaou Centre: three separated elliptical timber shells with bowed shoulders and broad, rounded crests.
            const shells = [
                { x: -8, h: 19 },
                { x: 0, h: 23 },
                { x: 8, h: 27 },
              ],
              profile = [3, 4, 5, 6, 7, 7, 7, 7, 6, 6, 5, 5, 4, 4, 3, 3];
            for (const sh of shells) {
              const x = sh.x,
                h = sh.h;
              for (let y = 1; y <= h; y++) {
                const w = profile[Math.min(profile.length - 1, Math.floor((y / h) * profile.length))];
                b(x - Math.floor(w / 2), y, w, 1, wood);
                if (y > 4 && y % 3 === 0) {
                  const edge = Math.floor(w / 2);
                  b(x - edge + 1, y, 1, 1, rib);
                  b(x + edge - 1, y, 1, 1, rib);
                }
              }
              b(x - 1, 2, 2, 4, inner);
            }
            b(-11, 1, 22, 1, wood);
            break;
          }
          case "noumeaCathedral": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              stone = css(e.sh([147, 138, 121])),
              plaster = css(e.sh([218, 216, 199])),
              roof = css(e.sh([91, 83, 72]));
            // Nouméa Cathedral: pale facade, unequal stone clock towers, louvred belfries, rose window and pointed entrance.
            b(-16, 1, 32, 17, plaster);
            b(-17, 18, 34, 1, stone);
            b(-14, 19, 28, 1, plaster);
            b(-15, 18, 9, 27, stone);
            b(-6, 18, 7, 20, stone);
            b(7, 18, 9, 34, stone);
            b(-16, 45, 11, 1, roof);
            b(6, 52, 11, 1, roof);
            b(-14, 46, 7, 5, stone);
            b(8, 53, 7, 5, stone);
            b(-13, 48, 5, 1, roof);
            b(9, 55, 5, 1, roof);
            b(-12, 3, 3, 9, 2);
            b(9, 3, 3, 11, 2);
            b(-13, 13, 7, 1, roof);
            b(8, 15, 7, 1, roof);
            b(-12, 14, 6, 3, plaster);
            b(8, 16, 6, 3, plaster);
            b(-11, 15, 4, 1, roof);
            b(9, 17, 4, 1, roof);
            b(-2, 3, 4, 8, stone);
            b(-3, 11, 6, 1, roof);
            b(-2, 12, 4, 1, plaster);
            b(-1, 13, 2, 2, stone);
            b(-1, 6, 2, 2, roof);
            b(0, 14, 1, 4, 8);
            break;
          }
          case "allSaintsNorfolk": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              wall = css(e.sh([223, 213, 181])),
              roof = css(e.sh([128, 64, 44]));
            // All Saints and former Commissariat Store: low island church-store with a shaded veranda and simple gabled outline.
            b(-14, 1, 28, 10, wall);
            b(-15, 11, 30, 1, roof);
            b(-12, 12, 24, 1, wall);
            for (let q = 0; q < 6; q++) b(-8 + q, 13 + q, 16 - 2 * q, 1, roof);
            b(-13, 2, 2, 8, roof);
            b(11, 2, 2, 8, roof);
            b(-12, 4, 3, 5, 2);
            b(9, 4, 3, 5, 2);
            b(-10, 1, 20, 1, roof);
            b(-3, 1, 6, 8, wall);
            b(-2, 1, 4, 6, 2);
            break;
          }
          case "norfolkBarracks": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              stone = css(e.sh([193, 181, 151])),
              trim = css(e.sh([126, 107, 80]));
            // Old Military Barracks: long low stone range with repeated square openings and two projecting end blocks.
            b(-16, 1, 32, 10, stone);
            b(-18, 11, 36, 1, trim);
            b(-14, 12, 28, 1, stone);
            b(-18, 1, 5, 14, stone);
            b(13, 1, 5, 14, stone);
            b(-19, 14, 7, 1, trim);
            b(12, 14, 7, 1, trim);
            for (let x = -12; x <= 10; x += 5) {
              b(x, 4, 2, 4, trim);
              b(x, 9, 2, 1, trim);
            }
            b(-18, 1, 3, 4, trim);
            b(15, 1, 3, 4, trim);
            break;
          }
          case "yarenParliament": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              wall = css(e.sh([211, 196, 154])),
              roof = css(e.sh([118, 105, 81]));
            // Nauru Parliament House: small shaded island legislature with broad eaves, a front colonnade, and central flagstaff.
            b(-13, 1, 26, 9, wall);
            b(-16, 10, 32, 1, roof);
            b(-12, 11, 24, 1, wall);
            for (let x = -11; x <= 9; x += 4) {
              b(x, 2, 1, 8, roof);
              b(x + 1, 2, 1, 8, wall);
            }
            b(-4, 2, 8, 5, roof);
            b(-3, 2, 6, 4, wall);
            b(-1, 11, 1, 7, 8);
            b(0, 16, 4, 2, 9);
            break;
          }
          case "nauruControlTower": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              concrete = css(e.sh([193, 184, 158])),
              glass = css(e.sh([91, 135, 143]));
            // Nauru airport control tower: slender pale shaft, projecting glazed observation cabin, and short antenna.
            b(-2, 1, 4, 12, concrete);
            b(-5, 13, 10, 1, concrete);
            b(-6, 14, 12, 4, glass);
            b(-7, 18, 14, 1, concrete);
            b(-5, 15, 2, 2, concrete);
            b(3, 15, 2, 2, concrete);
            b(-1, 19, 2, 1, concrete);
            b(0, 20, 1, 3, 8);
            b(-4, 1, 8, 1, concrete);
            break;
          }
          case "alofiChurch": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              wall = css(e.sh([228, 225, 207])),
              roof = css(e.sh([132, 70, 48]));
            // Ekalesia in Alofi: modest pale church with a clear stepped gable, red-brown roof edging, and centered ridge bell.
            b(-13, 1, 26, 11, wall);
            b(-14, 12, 28, 1, roof);
            b(-12, 13, 24, 1, wall);
            for (let q = 0; q < 8; q++) b(-8 + q, 14 + q, 16 - 2 * q, 1, roof);
            b(-11, 2, 3, 7, roof);
            b(8, 2, 3, 7, roof);
            b(-10, 3, 1, 5, wall);
            b(9, 3, 1, 5, wall);
            b(-2, 1, 4, 8, wall);
            b(-1, 9, 2, 1, roof);
            b(0, 10, 1, 3, 8);
            b(-1, 1, 3, 2, 2);
            break;
          }
          case "niueAssembly": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              wall = css(e.sh([213, 200, 165])),
              roof = css(e.sh([133, 91, 64]));
            // Niue Assembly: low veranda-fronted government hall with broad tropical eaves and a raised central entrance roof.
            b(-14, 1, 28, 9, wall);
            b(-17, 10, 34, 1, roof);
            b(-13, 11, 26, 1, wall);
            for (let x = -12; x <= 10; x += 4) {
              b(x, 1, 1, 9, roof);
              b(x + 1, 1, 1, 9, wall);
            }
            b(-5, 2, 10, 6, roof);
            b(-4, 2, 8, 5, wall);
            b(-2, 1, 4, 3, 2);
            b(-1, 1, 2, 2, roof);
            break;
          }
          case "papeeteCathedral": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              yellow = css(e.sh([211, 175, 63])),
              white = css(e.sh([236, 231, 208])),
              red = css(e.sh([146, 68, 49]));
            // Papeete Cathedral: yellow tower, continuous white louvred belfry and red taper, held within the church's narrow footprint.
            b(-12, 1, 24, 12, yellow);
            b(-12, 13, 24, 1, white);
            b(-10, 14, 20, 1, yellow);
            b(-4, 12, 8, 8, yellow);
            b(-5, 20, 10, 1, white);
            b(-4, 21, 8, 6, white);
            for (let x of [-3, -1, 1, 3]) b(x, 22, 1, 4, 2);
            b(-4, 27, 8, 1, red);
            b(-3, 28, 6, 1, red);
            b(-2, 29, 4, 1, red);
            b(-1, 30, 2, 1, red);
            b(0, 31, 1, 6, red);
            b(-1, 37, 3, 1, red);
            b(0, 38, 1, 2, 8);
            b(-11, 2, 2, 7, red);
            b(9, 2, 2, 7, red);
            b(-2, 1, 4, 9, white);
            b(-1, 10, 2, 1, red);
            break;
          }
          case "papeeteMarket": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              roof = css(e.sh([154, 93, 56])),
              iron = css(e.sh([77, 84, 75])),
              stall = css(e.sh([188, 80, 73]));
            // Marché de Papeete: low open-sided trussed market hall with broad metal roof, posts and busy stall rows.
            b(-18, 8, 36, 1, iron);
            b(-16, 9, 32, 1, roof);
            b(-14, 10, 28, 1, roof);
            b(-12, 11, 24, 1, iron);
            b(-17, 1, 2, 7, iron);
            b(15, 1, 2, 7, iron);
            b(-13, 1, 1, 7, iron);
            b(12, 1, 1, 7, iron);
            for (let x = -10; x <= 8; x += 5) {
              b(x, 1, 2, 6, iron);
              b(x + 1, 6, 1, 2, roof);
            }
            b(-15, 1, 30, 2, stall);
            b(-11, 3, 5, 2, stall);
            b(-4, 2, 5, 3, roof);
            b(3, 3, 6, 2, stall);
            b(10, 2, 4, 3, roof);
            break;
          }
          case "saintPierreCathedral": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              stone = css(e.sh([145, 130, 105])),
              plaster = css(e.sh([218, 214, 195])),
              roof = css(e.sh([158, 163, 155]));
            // Saint-Pierre Cathedral: broad pale nave and rough-stone tower with clock, louvred belfry and metal pyramidal cap.
            b(-15, 1, 30, 10, plaster);
            b(-16, 11, 32, 1, stone);
            b(-7, 11, 14, 13, stone);
            b(-8, 24, 16, 1, stone);
            b(-5, 25, 10, 7, stone);
            b(-6, 32, 12, 1, stone);
            b(-2, 14, 4, 1, roof);
            b(-1, 15, 2, 1, roof);
            b(-4, 27, 8, 1, 2);
            b(-3, 28, 6, 1, 2);
            b(-2, 29, 4, 1, 2);
            b(-1, 30, 2, 1, 2);
            b(-1, 31, 2, 1, roof);
            b(-2, 32, 4, 1, roof);
            b(-3, 33, 6, 1, roof);
            b(-4, 34, 8, 1, roof);
            b(-5, 35, 10, 1, roof);
            b(-1, 36, 2, 1, roof);
            b(0, 37, 1, 2, 8);
            for (let x of [-12, -6, 6, 12]) b(x, 2, 2, 6, stone);
            b(-1, 5, 2, 2, 9);
            b(-2, 1, 4, 3, stone);
            break;
          }
          case "pointeCanons": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              white = css(e.sh([232, 225, 204])),
              red = css(e.sh([171, 60, 49])),
              dark = css(e.sh([83, 83, 76]));
            // Pointe aux Canons: slender white lighthouse, red lantern and two distinct red bands on its tapering shaft.
            b(-2, 1, 4, 6, white);
            b(-3, 7, 6, 1, red);
            b(-2, 8, 4, 4, white);
            b(-3, 12, 6, 1, red);
            b(-2, 13, 4, 2, white);
            b(-3, 15, 6, 1, dark);
            b(-2, 16, 4, 2, red);
            b(-3, 18, 6, 1, dark);
            b(-1, 19, 2, 2, white);
            b(0, 19, 1, 2, dark);
            break;
          }
          case "adamstownChurch": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              wall = css(e.sh([218, 211, 188])),
              roof = css(e.sh([133, 62, 44]));
            // Adamstown church: raised white timber chapel, steep red-edged gable, paired pointed windows, and open porch.
            b(-13, 1, 26, 12, wall);
            b(-14, 13, 28, 1, roof);
            b(-15, 14, 30, 1, roof);
            for (let q = 0; q < 9; q++) b(-9 + q, 15 + q, 18 - 2 * q, 1, roof);
            b(-10, 2, 3, 8, roof);
            b(7, 2, 3, 8, roof);
            b(-9, 3, 1, 6, wall);
            b(8, 3, 1, 6, wall);
            b(-12, 1, 24, 1, roof);
            b(-2, 1, 4, 9, wall);
            b(-1, 10, 2, 1, roof);
            b(0, 11, 1, 3, 8);
            b(-14, 1, 4, 8, roof);
            b(-10, 1, 4, 7, wall);
            b(8, 1, 4, 7, wall);
            b(12, 1, 4, 8, roof);
            break;
          }
          case "adamstownCourt": {
            const b = (x, y, w, h, c) => box(x, y + h, w, h, c),
              wall = css(e.sh([206, 196, 169])),
              trim = css(e.sh([132, 85, 55]));
            // Pitcairn courthouse: modest one-storey island civic house with a raised porch roof, narrow windows, and flagstaff.
            b(-12, 1, 24, 9, wall);
            b(-14, 10, 28, 1, trim);
            b(-11, 11, 22, 1, wall);
            b(-6, 4, 12, 6, trim);
            b(-5, 4, 10, 5, wall);
            b(-1, 1, 2, 5, 2);
            b(0, 6, 1, 5, 8);
            for (let x = -10; x <= 8; x += 6) {
              b(x, 3, 2, 4, trim);
              b(x, 4, 1, 2, wall);
            }
            b(-13, 1, 26, 1, trim);
            b(-15, 1, 2, 8, trim);
            b(13, 1, 2, 8, trim);
            break;
          }
