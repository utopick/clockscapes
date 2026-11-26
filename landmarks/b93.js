          case "casaVallAndorra": {
            // Casa de la Vall: a compact stone manor, steep roof and square corner watchtower.
            const stone = css(e.sh([174, 164, 139])),
              lit = css(e.sh([205, 195, 168])),
              slate = css(e.sh([69, 76, 84])),
              dark = "rgba(31, 32, 34, 0.82)";
            box(-10, 1, 20, 16, stone);
            box(-9, 4, 18, 1, lit);
            for (let y = 17; y <= 23; y++) {
              const half = Math.floor((24 - y) * 1.4);
              box(-half, y, half * 2, 1, y % 2 ? slate : lit);
            }
            box(-9, 16, 18, 1, slate);
            box(-9, 18, 2, 2, dark);
            box(-3, 18, 2, 2, dark);
            box(4, 18, 2, 2, dark);
            box(-8, 8, 2, 3, dark);
            box(-2, 8, 2, 3, dark);
            box(5, 8, 2, 3, dark);
            box(-1, 1, 3, 5, dark);
            box(6, 1, 7, 22, lit);
            box(7, 5, 5, 15, stone);
            box(8, 13, 3, 3, dark);
            box(8, 19, 3, 3, dark);
            box(5, 23, 9, 1, slate);
            box(7, 24, 5, 3, stone);
            box(8, 25, 3, 1, slate);
            break;
          }
          case "santEsteveAndorra": {
            // Sant Esteve: a Romanesque stone nave with steep roof and a sturdy separate bell tower.
            const stone = css(e.sh([180, 170, 146])),
              sun = css(e.sh([210, 198, 168])),
              roof = css(e.sh([75, 80, 83])),
              dark = "rgba(31, 32, 34, 0.82)";
            box(-11, 1, 18, 11, stone);
            box(-10, 4, 16, 1, sun);
            for (let y = 12; y <= 18; y++) {
              const half = 10 - (y - 12);
              box(-half, y, half * 2, 1, y % 2 ? roof : stone);
            }
            box(-10, 8, 2, 3, dark);
            box(-4, 8, 2, 3, dark);
            box(2, 8, 2, 3, dark);
            box(-2, 1, 3, 6, dark);
            box(7, 1, 9, 18, stone);
            box(8, 3, 1, 14, sun);
            box(9, 13, 5, 1, sun);
            box(9, 14, 2, 3, dark);
            box(12, 14, 2, 3, dark);
            box(7, 19, 9, 1, roof);
            for (let x = 7; x <= 15; x += 2) box(x, 20, 1, 2, stone);
            box(10, 22, 3, 1, roof);
            box(11, 23, 1, 2, roof);
            break;
          }
          case "lusailStadium": {
            // Lusail Stadium: its broad golden bowl is wrapped in a dense, geometric lantern-like skin.
            const w = o.w ?? 35,
              h = o.h ?? 14,
              half = Math.floor(w / 2),
              gold = css(e.sh([207, 157, 62])),
              lit = css(e.sh([240, 199, 102])),
              shadow = css(e.sh([133, 94, 40])),
              dark = "rgba(24, 20, 48, 0.34)";
            // The shell flares from its compact foot into a wide, faceted upper bowl.
            for (let i = 1; i <= h; i++) {
              const hw = Math.round(half * (0.72 + (0.28 * i) / h));
              box(-hw, i, 2 * hw + 1, 1, i % 3 === 0 ? lit : gold);
              box(hw - 2, i, 3, 1, shadow);
              for (let p = -hw + 2; p < hw - 2; p += 4) {
                const facet = Math.floor((p + half) / 4 + i / 2) % 2;
                box(p, i, 1, 1, facet ? lit : shadow);
              }
            }
            // Deep base, three concentric roof courses, and the shaded inner opening.
            box(-half + 2, 3, w - 4, 2, shadow);
            box(-half - 1, h + 1, w + 2, 1, lit);
            box(-half - 2, h + 2, w + 4, 1, gold);
            box(-half + 3, h + 3, w - 6, 1, dark);
            box(-half + 5, h + 1, w - 10, 1, dark);
            // Vertical rhythm in the perforated shell, grouped as angular golden panels.
            for (let p = -half + 3; p < half - 2; p += 6) {
              box(p, 5, 1, h - 5, lit);
              box(p + 2, 4, 1, h - 4, shadow);
            }
            break;
          }
          case "alKhorWatchtower": {
            // Al Khor's old watchtower: a stout cylindrical stone drum with a crenellated crown.
            const h = o.h ?? 18,
              r = o.r ?? 6,
              stone = css(e.sh([177, 120, 65])),
              sun = css(e.sh([213, 159, 92])),
              shade = css(e.sh([111, 74, 47])),
              slit = "rgba(34, 28, 24, 0.8)";
            for (let i = 1; i <= h; i++) {
              const taper = i > h - 4 ? -1 : 0,
                half = r + taper;
              box(-half, i, half * 2 + 1, 1, stone);
              box(-half, i, 1, 1, sun);
              box(half, i, 1, 1, shade);
              if (i % 3 === 0) box(-half + 1, i, half * 2 - 1, 1, i % 2 ? sun : shade);
              if (i % 4 === 0) {
                box(-2, i, 1, 1, sun);
                box(3, i, 1, 1, shade);
              }
            }
            // Deep slit, projecting beam sockets, and the toothed parapet ring.
            box(-1, 13, 2, 5, slit);
            box(-r - 3, 10, 2, 1, shade);
            box(r + 1, 10, 2, 1, shade);
            box(-r - 1, h + 1, 2 * r + 3, 1, sun);
            for (let p = -r - 1; p <= r + 1; p += 2) box(p, h + 2, 1, 2, stone);
            break;
          }
          case "kuwaitTowersB93": {
            // Kuwait Towers: three white needles carry turquoise mosaic spheres of different sizes.
            const sphere = (cx, cy, r) => {
              orb(cx, cy, r, css(e.sh([73, 150, 168])));
              for (let dy = -r + 1; dy < r; dy += 2) {
                const half = Math.floor(Math.sqrt(r * r - dy * dy));
                for (let dx = -half + 1; dx < half; dx += 3)
                  box(
                    cx + dx,
                    cy + dy,
                    1,
                    1,
                    (dx + dy) % 2 ? css(e.sh([157, 210, 203])) : css(e.sh([39, 92, 128])),
                  );
              }
            };
            for (const [cx, h] of [
              [-11, 39],
              [-4, 45],
              [8, 58],
            ]) {
              box(cx - 1, 1, 3, 2, 8);
              for (let y = 3; y <= h; y++) box(cx, y, 1, 1, y % 6 === 0 ? 8 : 6);
              box(cx - 2, h, 5, 1, 6);
            }
            // The tallest right tower has two globes and a needle; the middle one has one, the left stays bare.
            box(1, 23, 15, 2, 8);
            box(2, 25, 13, 1, 6);
            sphere(8, 32, 7);
            sphere(8, 47, 4);
            box(6, 39, 5, 1, 8);
            box(-10, 27, 11, 2, 8);
            sphere(-4, 33, 6);
            box(8, 58, 1, 8, 6);
            box(-4, 45, 1, 7, 6);
            box(-11, 39, 1, 6, 6);
            break;
          }
          case "alHamraTowerB93": {
            // Al Hamra: a dark glazed shaft and the sweeping bronze shell that twists up its right side.
            const h = o.h ?? 46,
              core = o.core ?? 11,
              blue = css(e.sh([88, 104, 119])),
              glass = css(e.sh([126, 149, 163])),
              bronze = css(e.sh([174, 121, 57])),
              sun = css(e.sh([221, 173, 92])),
              deep = "rgba(28, 31, 44, 0.56)";
            for (let y = 1; y <= h; y++) {
              const taper = y > h - 8 ? Math.floor((y - (h - 8)) / 3) : 0;
              const half = Math.max(3, Math.floor(core / 2) - taper);
              box(-half, y, half + 1, 1, y % 4 ? blue : glass);
              box(1, y, half, 1, deep);
              if (y > 3 && y % 2 === 0)
                for (let x = -half + 1; x < half; x += 2) box(x, y, 1, 1, y % 4 ? 8 : 6);
              // The shell advances inward as it rises, leaving the glazed blade visible on its left.
              const edge = Math.round(half + 5 - (5 * y) / h);
              box(edge, y, 3, 1, y % 3 ? bronze : sun);
              box(edge + 3, y, 1, 1, deep);
            }
            // Flared foot, projecting crown, and the small angled gold fin at the roof.
            box(-7, 2, 15, 2, deep);
            box(-6, h + 1, core + 7, 1, bronze);
            box(3, h + 2, 2, 3, sun);
            box(4, h + 4, 2, 1, sun);
            break;
          }
          case "stMichaelBlantyre": {
            // St Michael and All Angels: its improvised brick Gothic nave and deliberately unmatched towers.
            const brick = css(e.sh([158, 58, 42])),
              lit = css(e.sh([205, 102, 69])),
              shade = css(e.sh([92, 40, 35])),
              roof = css(e.sh([75, 48, 40])),
              glass = css(e.sh([55, 105, 133]));
            // Long nave, high gable, and rhythm of deep vertical buttresses.
            box(-12, 17, 24, 17, brick);
            for (let p = -11; p <= 10; p += 5) {
              box(p, 17, 2, 8, lit);
              box(p + 1, 17, 1, 8, shade);
            }
            cone(0, 17, 13, 6, roof);
            box(-12, 17, 24, 1, lit);
            // Pointed window lights across the nave.
            for (let x = -8; x <= 8; x += 4) {
              box(x, 15, 2, 4, glass);
              cone(x, 15, 1, 2, glass);
              box(x + 1, 15, 1, 4, shade);
            }
            // Taller west tower with stepped shoulders and a narrow spire.
            box(-11, 25, 6, 25, brick);
            box(-11, 25, 1, 25, lit);
            box(-6, 25, 1, 25, shade);
            box(-10, 22, 4, 4, glass);
            cone(-8, 22, 3, 4, brick);
            box(-8, 26, 1, 1, lit);
            box(-8, 30, 1, 3, roof);
            // Shorter, broader eastern tower with an unmistakable shallow dome and finial.
            box(6, 20, 7, 20, brick);
            box(6, 20, 1, 20, lit);
            box(12, 20, 1, 20, shade);
            box(7, 17, 5, 4, glass);
            dome(9, 20, 4, brick);
            box(6, 21, 7, 1, lit);
            box(9, 24, 1, 2, roof);
            // Extend the nave walls to the street line and connect the roof cross to the gable.
            box(-12, 0, 24, 17, brick);
            box(-12, 17, 24, 1, lit);
            box(0, 17, 1, 7, lit);
            // Recessed central entrance and the cross on the gable.
            box(-1, 14, 3, 5, shade);
            box(0, 14, 1, 4, glass);
            box(0, 25, 1, 10, lit);
            box(-1, 25, 3, 1, lit);
            break;
          }
          case "binguStadium": {
            // Bingu National Stadium: broad two-tier bowl, sloping roof canopy and open ends.
            const w = o.w ?? 33,
              h = o.h ?? 14,
              half = Math.floor(w / 2),
              concrete = css(e.sh([195, 199, 192])),
              shade = css(e.sh([105, 117, 122])),
              roof = css(e.sh([139, 151, 151])),
              seats = css(e.sh([105, 141, 121]));
            // A compact base supports the stepped seating bowl and its two open end galleries.
            box(-half + 3, 3, w - 6, 2, shade);
            for (let y = 5; y <= h; y++) {
              const hw = Math.round((half - 4) * (0.76 + (0.24 * y) / h));
              box(-hw, y, 2 * hw + 1, 1, y % 3 === 0 ? concrete : seats);
              box(-hw, y, 2, 1, roof);
              box(hw - 1, y, 2, 1, shade);
              if (y % 3 === 0) box(-hw + 3, y - 1, 2 * hw - 6, 1, shade);
            }
            // Uneven canopy spans the two main stands, leaving the corners visibly open.
            box(-half + 2, h + 1, Math.floor(w * 0.46), 1, roof);
            box(-half + 4, h + 2, Math.floor(w * 0.4), 1, concrete);
            box(3, h + 1, Math.floor(w * 0.38), 1, roof);
            box(5, h + 2, Math.floor(w * 0.3), 1, concrete);
            // Tall pier rhythm and the separated entry bays around the lower concourse.
            for (let x = -half + 5; x < half - 4; x += 5) {
              box(x, 5, 1, 3, concrete);
              box(x + 1, 5, 1, 3, shade);
            }
            box(-half + 8, 2, w - 16, 1, css(e.sh([181, 70, 54])));
            break;
          }
          case "kamuzuMausoleum": {
            // Kamuzu Mausoleum: a stepped open pavilion and a white lantern over the memorial chamber.
            const white = css(e.sh([224, 222, 203])),
              shade = css(e.sh([117, 130, 131])),
              roof = css(e.sh([74, 87, 85])),
              red = css(e.sh([135, 58, 53]));
            box(-13, 2, 26, 2, shade);
            box(-12, 4, 24, 1, white);
            // Open colonnades frame the central commemorative panel.
            for (const x of [-10, -5, 5, 10]) {
              box(x, 11, 2, 7, white);
              box(x + 1, 11, 1, 7, shade);
              box(x, 10, 2, 1, white);
            }
            box(-4, 11, 8, 5, white);
            dome(0, 16, 4, white);
            box(-3, 11, 6, 3, red);
            box(-2, 10, 4, 1, shade);
            // Broad canopy, stepped dark roof and the small white dome above it.
            box(-14, 12, 28, 1, white);
            box(-12, 13, 24, 2, shade);
            box(-10, 15, 20, 2, roof);
            box(-7, 17, 14, 2, roof);
            box(-4, 19, 8, 2, white);
            dome(0, 19, 3, white);
            box(0, 24, 1, 2, shade);
            box(-1, 25, 3, 1, shade);
            box(-4, 17, 8, 2, white);
            // A centered stair run projects from the platform toward the forecourt.
            box(-5, 2, 10, 1, white);
            box(-3, 3, 6, 1, white);
            break;
          }
          case "dohaTowerB93": {
            // Doha Tower (Burj Qatar): a cylindrical glass shaft behind its mashrabiya-like metal screen.
            const h = o.h ?? 43,
              w = o.w ?? 13,
              half = Math.floor(w / 2),
              glass = css(e.sh([122, 153, 164])),
              metal = css(e.sh([193, 183, 150])),
              shade = css(e.sh([77, 89, 94]));
            for (let y = 1; y <= h; y++) {
              const hw = Math.round(half * (0.94 + (0.06 * y) / h));
              box(-hw, y, 2 * hw + 1, 1, y % 4 ? glass : metal);
              box(hw - 1, y, 2, 1, shade);
              for (let x = -hw + 1; x < hw; x += 2) if ((x + y) % 4 === 0) box(x, y, 1, 1, metal);
              for (let x = -hw + 2; x < hw; x += 4) if ((x - y) % 5 === 0) box(x, y, 1, 1, shade);
            }
            // Narrow foot, low dome cap and short antenna above the uninterrupted cylinder.
            box(-half - 2, 2, w + 4, 1, shade);
            dome(0, h, half - 1, metal);
            box(0, h + 2, 1, 4, shade);
            break;
          }
          case "aspireTowerB93": {
            // Aspire Tower: a tapered torch-like shaft passes through the open oval loop at its crown.
            const h = o.h ?? 43,
              w = o.w ?? 15,
              half = Math.floor(w / 2),
              steel = css(e.sh([145, 160, 164])),
              light = css(e.sh([216, 220, 210])),
              blue = css(e.sh([80, 139, 169])),
              dark = css(e.sh([62, 72, 77]));
            box(-half - 1, 2, 2 * half + 3, 2, dark);
            for (let y = 4; y <= h; y++) {
              const hw = Math.max(2, Math.round(half * (1 - (0.76 * y) / h)));
              box(-hw, y, 2 * hw + 1, 1, y % 5 === 0 ? light : steel);
              box(hw, y, 1, 1, dark);
              if (y % 3 === 0) box(-hw + 1, y, 2 * hw - 1, 1, blue);
            }
            // Separate loop rails create a hollow eye, with the core spire visible through it.
            for (let dy = -4; dy <= 4; dy++) {
              const f = Math.sqrt(Math.max(0, 1 - (dy * dy) / 25)),
                outer = Math.max(1, Math.round(7 * f)),
                inner = Math.max(1, Math.round(3 * f));
              box(-outer, h + 7 + dy, outer - inner + 1, 1, light);
              box(inner, h + 7 + dy, outer - inner + 1, 1, steel);
            }
            box(0, h + 3, 1, 10, dark);
            box(0, h + 13, 1, 6, light);
            break;
          }
          case "saintSavaBelgrade": {
            // Saint Sava: a pale Serbian-Byzantine basilica crowned by one huge green dome and four smaller ones.
            const stone = css(e.sh([226, 222, 208])),
              lit = css(e.sh([247, 239, 218])),
              shade = css(e.sh([132, 132, 122])),
              green = css(e.sh([91, 133, 111])),
              glass = css(e.sh([44, 54, 58]));
            // Broad lower body, raised central drum and receding sanctuary wings.
            box(-16, 17, 32, 17, stone);
            box(-13, 22, 26, 5, lit);
            box(-9, 24, 18, 2, stone);
            box(-9, 31, 18, 7, stone);
            box(-8, 30, 16, 1, shade);
            box(-9, 38, 18, 7, stone);
            box(-8, 39, 16, 1, shade);
            // Central dome and four smaller roof domes mark the cross-shaped plan.
            dome(0, 38, 9, green);
            box(-2, 47, 4, 1, shade);
            box(0, 48, 1, 3, lit);
            for (const [x, y, r] of [
              [-12, 24, 4],
              [12, 24, 4],
              [-7, 32, 3],
              [7, 32, 3],
            ]) {
              dome(x, y, r, green);
              box(x, y + r + 2, 1, 2, lit);
            }
            // Three arched portals, tall arched window lights, and bright facade framing.
            for (let x = -7; x <= 7; x += 7) {
              box(x - 2, 11, 4, 6, glass);
              dome(x, 17, 2, glass);
              box(x - 2, 11, 1, 6, lit);
            }
            for (let x = -12; x <= 12; x += 4) {
              box(x, 19, 2, 4, glass);
              dome(x + 1, 23, 1, glass);
              box(x, 19, 1, 4, shade);
            }
            for (const x of [-15, -10, 10, 15]) {
              box(x, 22, 1, 6, shade);
              box(x + 1, 22, 1, 6, lit);
            }
            box(-15, 9, 30, 2, shade);
            box(-14, 7, 28, 2, stone);
            break;
          }
          case "victorMonumentBelgrade": {
            // Pobednik: tiny bronze figure on a fluted Doric shaft and an oversized square plinth.
            const stone = css(e.sh([195, 194, 180])),
              light = css(e.sh([224, 219, 197])),
              bronze = css(e.sh([108, 111, 90])),
              dark = css(e.sh([57, 62, 53]));
            box(-7, 8, 14, 8, dark);
            box(-6, 8, 12, 8, stone);
            box(-4, 33, 8, 25, stone);
            box(-5, 34, 10, 2, light);
            box(-5, 9, 1, 23, light);
            box(3, 9, 1, 23, dark);
            for (let x = -2; x <= 2; x += 2) box(x, 10, 1, 22, dark);
            box(-6, 33, 12, 2, light);
            box(-5, 35, 10, 1, stone);
            box(-7, 36, 14, 2, dark);
            // Compact bronze victor, with a shoulder-wide torso, falcon and lowered sword.
            orb(0, 51, 2, bronze);
            box(-1, 50, 2, 3, bronze);
            box(-3, 47, 6, 3, bronze);
            box(-2, 47, 4, 6, bronze);
            box(-2, 41, 4, 7, bronze);
            box(-4, 45, 2, 4, bronze);
            box(3, 45, 2, 4, bronze);
            box(-5, 47, 3, 2, dark);
            box(-6, 48, 2, 2, bronze);
            box(4, 43, 1, 5, bronze);
            box(5, 39, 1, 5, dark);
            box(-2, 38, 2, 4, bronze);
            box(1, 38, 2, 4, bronze);
            break;
          }
          case "nameMaryNoviSad": {
            // Name of Mary Church: pale Gothic Revival facade beneath a vividly tiled central spire.
            const stone = css(e.sh([222, 210, 183])),
              trim = css(e.sh([243, 233, 210])),
              shade = css(e.sh([139, 118, 96])),
              glass = css(e.sh([43, 63, 76])),
              blue = css(e.sh([45, 102, 157])),
              red = css(e.sh([175, 67, 55]));
            // Broad nave frontage, side aisles, buttresses and its rose window.
            box(-15, 17, 30, 9, stone);
            box(-12, 24, 24, 6, trim);
            box(-10, 30, 20, 1, shade);
            orb(0, 20, 4, glass);
            orb(0, 20, 2, trim);
            for (let x = -13; x <= 12; x += 5) {
              box(x, 17, 2, 9, shade);
              box(x, 17, 1, 9, trim);
            }
            for (let x = -9; x <= 9; x += 6) {
              box(x, 22, 2, 4, glass);
              dome(x + 1, 26, 1, glass);
            }
            // Three deep pointed portals at the base.
            for (let x = -7; x <= 7; x += 7) {
              box(x - 2, 10, 4, 6, shade);
              box(x - 1, 10, 2, 5, glass);
              cone(x, 16, 2, 3, glass);
            }
            // Clock tower and the pair of slim pinnacles at its shoulders.
            box(-5, 43, 10, 13, stone);
            box(-5, 43, 1, 13, trim);
            box(4, 43, 1, 13, shade);
            orb(0, 36, 3, glass);
            orb(0, 36, 2, trim);
            box(-1, 38, 1, 3, shade);
            box(0, 36, 2, 1, shade);
            for (const x of [-7, 6]) {
              box(x, 30, 2, 12, stone);
              cone(x + 1, 42, 2, 6, shade);
              box(x + 1, 48, 1, 1, trim);
            }
            // High diamond-tiled roof, tapering in colored courses to the cross.
            for (let j = 0; j < 16; j++) {
              const hw = Math.max(0, Math.round(5 * (1 - j / 18)));
              box(-hw, 43 + j + 1, 2 * hw + 1, 1, j % 2 ? blue : red);
              if (hw > 2 && j % 3 === 0) box(-1, 43 + j + 1, 3, 1, trim);
            }
            box(0, 59, 1, 3, shade);
            box(-1, 60, 3, 1, trim);
            box(-15, 8, 30, 2, shade);
            break;
          }
          case "petrovaradinClockNoviSad": {
            // Petrovaradin fortress clock: solid stone tower, oversized reversed dial and green roof.
            const stone = css(e.sh([197, 184, 151])),
              trim = css(e.sh([228, 213, 179])),
              shade = css(e.sh([119, 107, 88])),
              green = css(e.sh([91, 126, 93])),
              dial = css(e.sh([47, 58, 61]));
            // The square masonry shaft runs from the ground to its clock stage without breaks.
            box(-5, 30, 10, 30, stone);
            box(-6, 30, 12, 2, trim);
            box(-5, 30, 1, 30, trim);
            box(4, 30, 1, 30, shade);
            // Reversed hands: the shorter hour hand points up while the longer minute hand drops.
            orb(0, 21, 4, trim);
            orb(0, 21, 3, dial);
            box(-1, 22, 1, 4, trim);
            box(0, 17, 1, 4, trim);
            for (const x of [-3, 2]) box(x, 18, 1, 1, trim);
            // Green onion roof and its small finial sit directly on the masonry parapet.
            box(-6, 32, 12, 1, shade);
            dome(0, 32, 5, green);
            box(-4, 37, 8, 1, trim);
            // Two squat corner turrets join the tower walls and frame the main roof.
            for (const x of [-5, 3]) {
              box(x, 36, 2, 6, stone);
              box(x, 36, 1, 6, trim);
              dome(x + 1, 36, 2, green);
            }
            box(0, 40, 1, 5, trim);
            box(-1, 45, 3, 1, shade);
            break;
          }
          case "somhloloStadium": {
            // Somhlolo National Stadium: a low open bowl, with a shield-shaped main stand in Swazi colors.
            const concrete = css(e.sh([190, 193, 179])),
              shade = css(e.sh([95, 107, 99])),
              blue = css(e.sh([51, 119, 166])),
              red = css(e.sh([169, 58, 58])),
              gold = css(e.sh([223, 181, 74]));
            // Wide lower concourse and two stepped tiers taper toward open ends.
            box(-15, 4, 30, 3, shade);
            box(-14, 8, 28, 4, concrete);
            for (let y = 9; y <= 12; y++) {
              const hw = 12 - Math.floor((y - 9) / 2);
              box(-hw, y, 2 * hw + 1, 1, y % 2 ? blue : concrete);
              if (y % 2 === 0) box(-hw + 2, y - 1, 2 * hw - 3, 1, shade);
            }
            // A broad central canopy rises to a shallow shield point; the end stands stay open.
            box(-13, 13, 26, 1, gold);
            box(-11, 14, 22, 1, blue);
            box(-8, 15, 16, 1, red);
            box(-5, 16, 10, 1, gold);
            box(-2, 17, 4, 1, blue);
            // Flag bands and the dark central entrance mark the principal stand.
            box(-12, 7, 24, 1, blue);
            box(-10, 6, 20, 1, red);
            box(-8, 5, 16, 1, gold);
            box(-2, 4, 4, 3, shade);
            box(-13, 3, 26, 1, concrete);
            break;
          }
          case "sobhuzaMemorial": {
            // King Sobhuza II Memorial: statue inside a roofed pavilion with a broad connected dome.
            const stone = css(e.sh([220, 217, 199])),
              trim = css(e.sh([241, 231, 208])),
              shade = css(e.sh([111, 107, 91])),
              roof = css(e.sh([74, 92, 80])),
              bronze = css(e.sh([123, 102, 68]));
            // Raised pavilion platform and four open stone columns reach the roof line.
            box(-12, 5, 24, 5, shade);
            for (const x of [-9, -5, 5, 9]) {
              box(x, 13, 2, 13, stone);
              box(x + 1, 13, 1, 13, trim);
            }
            // A solid entablature joins the columns; the bronze figure stands in its opening.
            box(-13, 21, 26, 8, stone);
            box(-1, 21, 3, 8, bronze);
            orb(0, 22, 2, bronze);
            box(-4, 18, 3, 1, bronze);
            box(2, 18, 3, 1, bronze);
            box(-5, 18, 2, 2, bronze);
            box(4, 14, 1, 5, shade);
            box(4, 19, 2, 1, bronze);
            // Broad roof bands meet the dome with no open sky seam.
            box(-13, 22, 26, 1, trim);
            box(-11, 23, 22, 1, roof);
            box(-10, 24, 20, 1, stone);
            dome(0, 24, 10, stone);
            box(-2, 34, 4, 1, trim);
            box(0, 36, 1, 3, roof);
            // The two symbolic lions flank the low entrance platform.
            for (const x of [-15, 14]) {
              box(x, 4, 2, 4, shade);
              box(x, 8, 4, 2, bronze);
              orb(x + 2, 10, 1, bronze);
              box(x + 1, 8, 1, 3, bronze);
              box(x + 3, 8, 1, 3, bronze);
            }
            box(-6, 5, 12, 2, trim);
            box(-4, 3, 8, 2, stone);
            break;
          }
          case "allSaintsMbabane": {
            // All Saints Cathedral: a modest natural-stone church kept deliberately restrained without a photo.
            const stone = css(e.sh([184, 177, 154])),
              lit = css(e.sh([220, 212, 190])),
              shade = css(e.sh([106, 102, 88])),
              roof = css(e.sh([68, 79, 70])),
              glass = css(e.sh([54, 73, 79]));
            box(-11, 22, 22, 22, stone);
            box(-10, 22, 1, 9, lit);
            box(9, 22, 2, 9, shade);
            // Low gabled roof and a small side bell turret, without claiming a detailed facade likeness.
            cone(0, 22, 12, 7, roof);
            box(-12, 22, 24, 1, lit);
            box(-8, 13, 16, 1, shade);
            box(-1, 17, 2, 5, glass);
            dome(0, 22, 1, glass);
            box(-2, 13, 4, 9, shade);
            box(-1, 13, 2, 8, glass);
            box(8, 37, 3, 16, stone);
            box(8, 37, 1, 16, lit);
            box(10, 37, 1, 16, shade);
            box(7, 37, 5, 1, lit);
            box(9, 29, 1, 5, glass);
            cone(9, 38, 3, 4, roof);
            box(9, 42, 1, 3, shade);
            box(8, 44, 3, 1, lit);
            box(-12, 4, 24, 1, shade);
            box(-11, 0, 22, 5, stone);
            break;
          }
          case "sibebeRock": {
            // Sibebe is a bare granite pluton: one immense smooth dome, not a round boulder or a built tower.
            const r = o.r ?? 17,
              h = o.h ?? 18,
              lit = css(e.sh([184, 187, 177])),
              stone = css(e.sh([148, 153, 150])),
              shade = css(e.sh([91, 99, 101])),
              foothill = css(e.sh([80, 123, 83]));
            box(-r - 2, 2, 2 * r + 4, 2, foothill);
            for (let y = 1; y <= h; y++) {
              const f = (y - 0.5) / h,
                half = Math.round(r * Math.sqrt(Math.max(0, 1 - f * f)));
              if (half < 1) continue;
              box(-half, y, 2 * half + 1, 1, y % 4 ? stone : lit);
              box(0, y, half + 1, 1, shade);
              if (y % 5 === 0 && half > 5) {
                box(-half + 2, y, half - 4, 1, lit);
                box(2, y, half - 1, 1, shade);
              }
            }
            // Green wooded shoulders peek from either edge of the massive exposed granite face.
            box(-r - 3, 4, 4, 2, foothill);
            box(r - 1, 4, 4, 2, foothill);
            break;
          }

          case "fortChristianB93": {
            // Fort Christian: red ramparts, pointed entrance and the taller clock tower at their center.
            const brick = css(e.sh([157, 57, 47])),
              lit = css(e.sh([207, 101, 78])),
              shade = css(e.sh([92, 42, 36])),
              stone = css(e.sh([219, 200, 167])),
              dial = css(e.sh([45, 52, 55]));
            box(-15, 17, 30, 10, brick);
            box(-15, 17, 1, 10, lit);
            box(14, 17, 1, 10, shade);
            for (let x = -14; x <= 13; x += 3) box(x, 18, 1, 1, lit);
            for (let x = -12; x <= 11; x += 6) {
              box(x, 14, 2, 3, shade);
              box(x, 13, 2, 1, stone);
            }
            // High square clock tower and a second clock on its front face.
            box(-5, 39, 10, 22, brick);
            box(-5, 39, 1, 22, lit);
            box(4, 39, 1, 22, shade);
            orb(0, 32, 3, stone);
            orb(0, 32, 2, dial);
            box(-1, 33, 1, 2, stone);
            box(0, 31, 2, 1, stone);
            for (let x = -6; x <= 5; x += 2) box(x, 39, 1, 1, stone);
            box(-6, 39, 12, 1, stone);
            box(-6, 16, 12, 1, shade);
            box(-2, 10, 4, 7, shade);
            box(-1, 10, 2, 5, dial);
            box(-15, 7, 30, 7, brick);
            cone(0, 39, 6, 3, brick);
            box(-6, 42, 12, 1, stone);
            box(0, 43, 1, 2, shade);
            break;
          }
          case "frederikLutheranB93": {
            // Frederik Lutheran Church: yellow ballast brick, Gothic Revival openings and its signature stairs.
            const gold = css(e.sh([207, 168, 78])),
              lit = css(e.sh([239, 209, 132])),
              shade = css(e.sh([133, 102, 51])),
              roof = css(e.sh([77, 89, 76])),
              glass = css(e.sh([53, 78, 85]));
            box(-10, 17, 20, 9, gold);
            box(-9, 17, 1, 9, lit);
            box(8, 17, 2, 9, shade);
            cone(0, 26, 11, 5, roof);
            box(-11, 26, 22, 1, lit);
            // Central clock tower and a Gothic arch under its simple roof.
            box(-4, 40, 8, 14, gold);
            box(-4, 40, 1, 14, lit);
            box(3, 40, 1, 14, shade);
            orb(0, 34, 2, glass);
            orb(0, 34, 1, lit);
            box(-1, 35, 1, 3, shade);
            box(-3, 28, 6, 1, lit);
            cone(0, 40, 5, 5, roof);
            box(0, 45, 1, 3, shade);
            box(-1, 47, 3, 1, lit);
            // Narrow pointed windows and the wide stair flights that open toward the street.
            for (let x = -7; x <= 7; x += 4) {
              box(x, 22, 2, 5, glass);
              cone(x, 22, 1, 2, glass);
            }
            for (let step = 0; step < 6; step++) {
              const width = 6 + step * 2;
              box(-Math.floor(width / 2), 12 - step, width, 1, step % 2 ? shade : lit);
            }
            box(-8, 12, 16, 1, shade);
            box(-10, 8, 20, 8, gold);
            box(-1, 13, 2, 4, glass);
            break;
          }

          case "fortChristiansvaernB93": {
            // Fort Christiansvaern: a low yellow harbor fort, with angled bastions and a simple parapet.
            const yellow = css(e.sh([210, 177, 97])),
              lit = css(e.sh([236, 211, 145])),
              shade = css(e.sh([137, 116, 68]));
            box(-12, 15, 24, 15, yellow);
            box(-16, 12, 8, 12, yellow);
            box(8, 12, 8, 12, yellow);
            box(-16, 12, 2, 11, lit);
            box(14, 12, 2, 11, shade);
            box(-14, 22, 28, 2, lit);
            box(-15, 23, 5, 1, shade);
            box(10, 23, 5, 1, shade);
            // Tall corner parapets and dark cannon ports break the sunlit wall mass.
            for (const x of [-12, -6, 0, 6, 12]) {
              box(x, 19, 2, 2, shade);
              box(x, 18, 1, 1, lit);
            }
            for (const x of [-13, -9, 9, 13]) box(x, 24, 1, 2, yellow);
            box(-2, 12, 4, 7, shade);
            box(-1, 12, 2, 5, lit);
            box(-17, 11, 34, 1, shade);
            break;
          }
          case "steepleBuildingStCroix": {
            // Christiansted's Steeple Building: long hipped church and four-stage tower with octagonal cupola.
            const wall = css(e.sh([220, 214, 190])),
              trim = css(e.sh([244, 234, 210])),
              shade = css(e.sh([117, 111, 96])),
              roof = css(e.sh([79, 91, 76])),
              dial = css(e.sh([48, 59, 61]));
            box(-15, 14, 30, 14, wall);
            box(-15, 14, 1, 14, trim);
            box(14, 14, 1, 14, shade);
            box(-16, 23, 32, 1, roof);
            box(-14, 24, 28, 1, shade);
            for (let x = -12; x <= 10; x += 4) {
              box(x, 21, 2, 5, dial);
              box(x, 21, 1, 5, trim);
            }
            // Four shrinking stages create the tall central tower; arched belfry openings sit under its cupola.
            box(-5, 38, 10, 28, wall);
            box(-5, 38, 1, 38, trim);
            box(4, 38, 1, 38, shade);
            box(-5, 52, 10, 14, wall);
            box(-4, 48, 8, 1, trim);
            box(-4, 52, 8, 14, wall);
            box(-3, 51, 6, 1, trim);
            box(-3, 57, 6, 5, wall);
            box(-3, 63, 6, 6, wall);
            for (const x of [-2, 1]) {
              box(x, 62, 1, 3, dial);
              dome(x, 63, 1, dial);
            }
            box(-2, 64, 4, 1, trim);
            dome(0, 64, 3, roof);
            box(0, 67, 1, 5, trim);
            box(-1, 72, 3, 1, shade);
            // Central clock and the front entry stairs.
            orb(0, 44, 3, trim);
            orb(0, 44, 2, dial);
            box(-1, 45, 1, 2, trim);
            box(0, 43, 2, 1, trim);
            for (let s = 0; s < 5; s++) box(-3 - s, 9 - s, 6 + s * 2, 1, s % 2 ? shade : trim);
            break;
          }

          case "dzaoudziResidence": {
            // Former Governor’s Residence: a restrained colonial house with a shallow portico and hipped roof.
            const wall = css(e.sh([220, 210, 183])),
              trim = css(e.sh([240, 230, 207])),
              roof = css(e.sh([95, 86, 70])),
              glass = css(e.sh([51, 70, 75]));
            box(-14, 27, 28, 27, wall);
            box(-15, 27, 30, 1, trim);
            box(-16, 28, 32, 1, roof);
            for (let x = -11; x <= 9; x += 5) {
              box(x, 19, 3, 5, glass);
              box(x - 1, 18, 5, 1, trim);
            }
            for (let x = -5; x <= 5; x += 5) box(x, 10, 1, 10, trim);
            box(-7, 9, 14, 1, roof);
            break;
          }

          case "koungouFriday": {
            // Koungou Friday Mosque: a compact prayer hall and a single slender minaret.
            const wall = css(e.sh([224, 220, 195])),
              trim = css(e.sh([246, 237, 211])),
              green = css(e.sh([91, 132, 91])),
              dark = css(e.sh([48, 64, 57]));
            box(-13, 24, 26, 24, wall);
            box(-14, 24, 28, 1, trim);
            box(-6, 26, 12, 2, trim);
            dome(0, 26, 6, green);
            box(9, 52, 3, 52, wall);
            box(9, 40, 3, 1, trim);
            box(8, 48, 5, 1, green);
            cone(10, 52, 3, 4, green);
            for (let x = -9; x <= 7; x += 8) {
              box(x, 17, 3, 5, dark);
              dome(x + 1, 22, 1, dark);
            }
            break;
          }

          case "mamoudzouMosque": {
            // Mtsapéré Mosque: pale prayer hall with a green-tipped minaret.
            const wall = css(e.sh([230, 225, 203])),
              green = css(e.sh([74, 126, 92])),
              shade = css(e.sh([89, 93, 80]));
            box(-13, 25, 26, 25, wall);
            box(-14, 25, 28, 1, shade);
            box(-6, 27, 12, 2, green);
            dome(0, 27, 6, green);
            box(9, 52, 3, 52, wall);
            box(9, 38, 3, 1, shade);
            box(8, 48, 5, 1, green);
            cone(10, 52, 3, 4, green);
            for (let x = -9; x <= 7; x += 8) {
              box(x, 17, 3, 5, shade);
              dome(x + 1, 22, 1, shade);
            }
            break;
          }
          case "fatimaMamoudzou": {
            // Notre-Dame de Fatima: a modest gabled church with a short front bell tower.
            const wall = css(e.sh([223, 211, 183])),
              roof = css(e.sh([137, 72, 52])),
              glass = css(e.sh([48, 67, 74]));
            box(-11, 25, 22, 25, wall);
            cone(0, 25, 13, 7, roof);
            box(-4, 25, 8, 1, roof);
            box(-3, 27, 6, 12, wall);
            box(-2, 31, 2, 3, glass);
            cone(0, 39, 4, 5, roof);
            for (let x = -7; x <= 5; x += 6) {
              box(x, 17, 2, 5, glass);
            }
            box(-2, 13, 4, 6, glass);
            break;
          }

          case "pinderLighthouse": {
            // Pinder’s Point Lighthouse: a banded tapered tower and lantern.
            const stone = css(e.sh([220, 205, 168])),
              red = css(e.sh([160, 76, 55])),
              dark = css(e.sh([49, 60, 62])),
              light = css(e.sh([235, 228, 194]));
            box(-8, 8, 16, 3, stone);
            box(-6, 36, 12, 36, stone);
            box(-5, 15, 10, 1, red);
            box(-4, 21, 8, 1, red);
            box(-3, 29, 6, 1, red);
            box(-8, 36, 16, 2, dark);
            box(-5, 38, 10, 5, light);
            box(-6, 43, 12, 1, dark);
            dome(0, 44, 5, dark);
            box(0, 49, 1, 3, dark);
            break;
          }

          case "atlantisPoseidonTemple": {
            // Fictional Atlantis temple: six classical columns shelter a central Poseidon figure beneath a stepped pediment.
            const stone = css(e.sh([179, 164, 132])),
              lit = css(e.sh([218, 204, 170])),
              shade = css(e.sh([117, 105, 86]));
            box(-12, 1, 24, 2, shade);
            box(-13, 3, 26, 1, lit);
            for (let x = -10; x <= 10; x += 4) {
              box(x, 4, 2, 12, stone);
              box(x, 5, 1, 10, lit);
              box(x - 1, 15, 4, 1, lit);
              box(x - 1, 3, 4, 1, stone);
            }
            for (let y = 0; y < 7; y++) {
              const half = 13 - y * 2;
              box(-half, 16 + y, half * 2, 1, y % 2 ? stone : lit);
              box(-half, 16 + y, 1, 1, shade);
            }
            box(-1, 6, 2, 7, shade);
            box(-2, 9, 4, 2, lit);
            box(2, 10, 1, 8, shade);
            box(1, 17, 3, 1, lit);
            break;
          }
          case "atlantisCaesarsTowers": {
            // Atlantis fantasy skyline: paired resort towers with stepped crowns and a short elevated link.
            const wall = css(e.sh([202, 192, 173])),
              red = css(e.sh([160, 67, 54])),
              dark = css(e.sh([78, 82, 85]));
            box(-9, 1, 18, 4, dark);
            for (const [x, h] of [
              [-8, 22],
              [2, 26],
            ]) {
              box(x, 5, 6, h, wall);
              for (let y = 8; y < h + 4; y += 4) {
                box(x + 1, y, 1, 2, dark);
                box(x + 4, y, 1, 2, dark);
              }
              box(x - 1, h + 5, 8, 1, red);
              box(x, h + 6, 6, 2, wall);
              box(x + 1, h + 8, 4, 1, red);
              box(x + 2, h + 9, 2, 1, wall);
            }
            box(-2, 15, 4, 2, red);
            box(-1, 17, 2, 1, wall);
            break;
          }
          case "atlantisPointFermin": {
            // A compact Point Fermin-inspired lighthouse: square pale shaft, dark gallery and lantern, capped by a tiny roof.
            const white = css(e.sh([220, 218, 199])),
              trim = css(e.sh([52, 62, 67])),
              red = css(e.sh([155, 70, 56]));
            box(-2, 1, 4, 3, red);
            box(-2, 4, 4, 20, white);
            box(-2, 24, 4, 2, trim);
            box(-2, 26, 4, 4, white);
            box(-2, 30, 4, 1, trim);
            box(-2, 31, 4, 1, white);
            box(-1, 32, 2, 2, trim);
            box(0, 34, 1, 2, red);
            for (let y = 7; y <= 21; y += 5) box(-1, y, 1, 2, trim);
            break;
          }

          case "nassauRoyalTowers": {
            // Atlantis Royal Towers: two tall pink hotel blocks, crowned in steps and joined by elevated bridges.
            const wall = css(e.sh([206, 175, 158])),
              shade = css(e.sh([145, 120, 112])),
              glass = css(e.sh([80, 112, 129]));
            box(-11, 1, 22, 4, shade);
            for (const [x, h] of [
              [-9, 27],
              [3, 31],
            ]) {
              box(x, 5, 7, h, wall);
              box(x, 7, 1, h - 2, shade);
              for (let y = 9; y < h; y += 4) {
                for (let wx = x + 2; wx < x + 7; wx += 3) box(wx, y, 1, 2, glass);
              }
              box(x - 1, h + 5, 9, 1, shade);
              box(x, h + 6, 7, 2, wall);
              box(x + 1, h + 8, 5, 1, shade);
              box(x + 2, h + 9, 3, 1, wall);
            }
            box(-2, 15, 5, 2, shade);
            box(-1, 17, 3, 1, wall);
            box(-2, 24, 5, 1, shade);
            break;
          }
          case "nassauParliamentSquare": {
            // Parliament Square: broad central lawn framed by the pastel colonial civic frontage around the open square.
            const pink = css(e.sh([205, 151, 137])),
              cream = css(e.sh([233, 209, 183])),
              grass = css(e.sh([88, 131, 77]));
            box(-15, 1, 30, 3, grass);
            box(-14, 4, 28, 1, cream);
            box(-13, 5, 26, 8, pink);
            for (let x = -11; x <= 9; x += 4) {
              box(x, 7, 2, 4, cream);
              box(x, 8, 1, 3, 8);
            }
            box(-4, 5, 8, 8, cream);
            box(-3, 6, 6, 5, pink);
            box(-2, 7, 4, 3, 8);
            box(-1, 11, 2, 2, cream);
            box(-2, 13, 4, 1, cream);
            box(0, 14, 1, 4, 8);
            box(-14, 5, 2, 3, cream);
            box(12, 5, 2, 3, cream);
            break;
          }
          case "dakhlaGrandMosque": {
            // Dakhla mosque, no confirmed facade photo: a compact desert prayer hall with one integrated dome and minaret.
            const wall = css(e.sh([218, 211, 186])),
              green = css(e.sh([72, 127, 91])),
              shade = css(e.sh([94, 94, 78]));
            box(-5, 1, 10, 8, wall);
            box(-6, 9, 12, 1, shade);
            for (let x = -3; x <= 3; x += 3) box(x, 3, 1, 3, shade);
            dome(-1, 10, 4, green);
            box(3, 8, 3, 17, wall);
            box(2, 12, 5, 1, shade);
            box(3, 25, 3, 2, green);
            box(3, 27, 3, 1, shade);
            box(4, 28, 1, 2, green);
            for (let y = 13; y < 23; y += 4) box(4, y, 1, 2, shade);
            break;
          }
          case "laayouneFrancisCathedral": {
            // No confirmed exterior photo: modest Saharan Catholic church with a broad pale nave and central gable cross.
            const wall = css(e.sh([224, 217, 192])),
              shade = css(e.sh([119, 110, 91])),
              roof = css(e.sh([146, 119, 85]));
            box(-10, 1, 20, 11, wall);
            box(-11, 12, 22, 1, roof);
            for (let y = 0; y < 8; y++) {
              const half = 11 - y;
              box(-half, 13 + y, half * 2, 1, y % 2 ? wall : roof);
            }
            box(-2, 2, 4, 6, shade);
            box(-1, 3, 2, 4, wall);
            for (let x = -8; x <= 7; x += 5) box(x, 4, 2, 4, shade);
            box(0, 21, 1, 3, shade);
            box(-1, 22, 3, 1, shade);
            break;
          }
          case "laayouneGrandMosque": {
            // No confirmed photo: a restrained light prayer hall with one green dome and a square minaret.
            const wall = css(e.sh([218, 212, 193])),
              shade = css(e.sh([112, 102, 83])),
              green = css(e.sh([69, 131, 91]));
            box(-10, 1, 20, 10, wall);
            box(-11, 11, 22, 1, shade);
            for (let x = -7; x <= 5; x += 6) box(x, 4, 2, 4, shade);
            dome(0, 12, 6, green);
            box(7, 1, 4, 22, wall);
            box(6, 11, 6, 1, shade);
            box(6, 23, 6, 1, green);
            box(7, 24, 4, 2, shade);
            box(8, 26, 2, 1, green);
            box(8, 27, 2, 1, shade);
            box(9, 28, 1, 2, green);
            for (let y = 14; y < 22; y += 4) box(8, y, 2, 2, shade);
            break;
          }
          case "dublinSpire": {
            // The Spire of Dublin: a severe, tapering stainless-steel needle on a short plinth, over 50 cells tall.
            const steel = css(e.sh([161, 171, 173])),
              glint = css(e.sh([214, 221, 218])),
              base = css(e.sh([89, 98, 101]));
            box(-2, 1, 4, 2, base);
            box(-1, 3, 2, 14, steel);
            box(0, 17, 1, 33, steel);
            box(0, 5, 1, 10, glint);
            box(0, 21, 1, 24, glint);
            box(0, 50, 1, 2, glint);
            break;
          }
          case "beckettBridge": {
            // Samuel Beckett Bridge: a swept harp-shaped mast fans fine stays down to a long shallow deck.
            const steel = css(e.sh([169, 177, 173])),
              shade = css(e.sh([92, 106, 105]));
            box(-11, 2, 22, 2, steel);
            box(-12, 1, 24, 1, shade);
            for (let x = -10; x <= 10; x += 5) box(x, 4, 1, 2, shade);
            stroke(-6, 4, -6, 9, 6);
            stroke(-6, 9, -5, 14, 6);
            stroke(-5, 14, -3, 18, 6);
            stroke(-3, 18, 0, 20, 6);
            stroke(-5, 14, -4, 18, 6);
            stroke(-7, 4, -6, 9, 8);
            for (let i = 0; i < 8; i++) {
              const deckX = -2 + i * 2;
              const topX = -3 + Math.round((i * 3) / 7);
              const topY = 17 + Math.round((i * 3) / 7);
              stroke(topX, topY, deckX, 4, 8);
            }
            box(-11, 3, 22, 1, steel);
            box(-12, 1, 24, 1, shade);
            break;
          }
          case "galwayCathedral": {
            // Galway Cathedral: massive dark-stone cruciform church, two small front towers and a dominant green copper dome.
            const stone = css(e.sh([112, 114, 109])),
              lit = css(e.sh([164, 164, 151])),
              green = css(e.sh([88, 141, 120])),
              dark = css(e.sh([53, 59, 57]));
            box(-13, 1, 26, 15, stone);
            box(-14, 16, 28, 1, lit);
            for (let x = -11; x <= 9; x += 5) {
              box(x, 4, 2, 7, dark);
              box(x, 5, 1, 5, lit);
            }
            box(-12, 1, 24, 1, lit);
            box(-1, 16, 14, 4, stone);
            box(-2, 20, 16, 1, lit);
            dome(6, 21, 8, green);
            box(6, 29, 1, 3, lit);
            for (const x of [-10, -3]) {
              box(x, 13, 4, 13, stone);
              box(x - 1, 26, 6, 1, lit);
              box(x, 27, 4, 2, stone);
              box(x + 1, 29, 2, 1, lit);
              box(x + 1, 30, 1, 2, stone);
              box(x + 1, 21, 2, 3, dark);
            }
            box(-1, 3, 4, 7, dark);
            box(0, 4, 2, 5, lit);
            break;
          }
          case "antiguaStJohnsCathedral": {
            // No facade photo available: a pale Antigua cathedral with twin square bell towers and a broad central nave.
            const wall = css(e.sh([220, 215, 196])),
              trim = css(e.sh([243, 236, 214])),
              dark = css(e.sh([71, 75, 71]));
            box(-11, 1, 22, 14, wall);
            box(-12, 15, 24, 1, trim);
            for (let y = 0; y < 8; y++) {
              const half = 12 - y;
              box(-half, 16 + y, half * 2, 1, trim);
            }
            for (const x of [-10, 5]) {
              box(x, 3, 5, 22, wall);
              box(x - 1, 25, 7, 1, trim);
              box(x, 26, 5, 5, wall);
              box(x + 1, 27, 3, 3, dark);
              box(x, 31, 5, 1, trim);
              box(x + 1, 32, 3, 1, wall);
              box(x + 2, 33, 1, 2, trim);
            }
            box(-2, 1, 4, 10, dark);
            box(-1, 2, 2, 8, trim);
            box(-1, 15, 2, 5, dark);
            box(0, 20, 1, 4, trim);
            break;
          }
          case "antiguaFortJames": {
            // Fort James is a low coastal battery, represented as irregular ramparts with corner bastions and sparse cannon ports.
            const stone = css(e.sh([154, 143, 119])),
              lit = css(e.sh([195, 182, 150])),
              dark = css(e.sh([71, 69, 61]));
            box(-14, 1, 28, 4, stone);
            box(-15, 5, 30, 2, stone);
            box(-16, 7, 32, 1, lit);
            box(-13, 8, 7, 2, stone);
            box(-5, 7, 10, 2, stone);
            box(6, 8, 7, 2, stone);
            box(-10, 2, 5, 4, lit);
            box(5, 2, 5, 4, lit);
            box(-2, 1, 4, 3, dark);
            for (const x of [-11, -6, 6, 11]) {
              box(x, 4, 2, 1, dark);
            }
            stroke(-13, 3, -8, 3, 8);
            stroke(8, 3, 13, 3, 8);
            break;
          }
          case "wallblakeHouse": {
            // Wallblake House: low island estate with a pink two-storey main house, stone outbuilding and picket fence.
            const pink = css(e.sh([199, 148, 137])),
              stone = css(e.sh([153, 145, 123])),
              roof = css(e.sh([71, 68, 61])),
              fence = css(e.sh([228, 221, 197]));
            box(-13, 1, 26, 1, fence);
            for (let x = -13; x <= 12; x += 3) box(x, 1, 1, 4, fence);
            box(-12, 5, 8, 5, stone);
            box(-13, 10, 10, 1, roof);
            for (let y = 0; y < 5; y++) {
              const half = 5 - y;
              box(-13 + y, 10 + y, 1, 1, roof);
              box(-4 - y, 10 + y, 1, 1, roof);
            }
            box(0, 3, 13, 9, pink);
            box(-1, 12, 15, 1, roof);
            for (let y = 0; y < 7; y++) {
              box(-1 + y, 13 + y, 1, 1, roof);
              box(13 - y, 13 + y, 1, 1, roof);
            }
            for (let x = 2; x <= 9; x += 4) {
              box(x, 5, 2, 3, roof);
              box(x, 9, 2, 2, roof);
            }
            box(5, 2, 3, 4, roof);
            break;
          }
          case "stGerardsAnguilla": {
            // No photo found: a modest pale island church with a simple gable, short square bell tower and cross.
            const wall = css(e.sh([224, 216, 190])),
              roof = css(e.sh([120, 87, 68])),
              dark = css(e.sh([57, 66, 65]));
            box(-10, 1, 20, 12, wall);
            box(-11, 13, 22, 1, roof);
            for (let y = 0; y < 8; y++) {
              const half = 11 - y;
              box(-half, 14 + y, half * 2, 1, roof);
            }
            box(-3, 1, 6, 18, wall);
            box(-4, 19, 8, 1, roof);
            box(-2, 12, 4, 4, dark);
            box(-1, 13, 2, 2, wall);
            box(-7, 4, 2, 5, dark);
            box(5, 4, 2, 5, dark);
            box(-1, 20, 2, 1, roof);
            box(0, 21, 1, 4, roof);
            break;
          }
          case "pagoPagoFono": {
            // The Fono reference was a seal, not its building; draw a restrained open Samoan fale with a broad thatched roof.
            const timber = css(e.sh([120, 81, 49])),
              thatch = css(e.sh([191, 145, 83])),
              light = css(e.sh([218, 180, 121]));
            box(-13, 1, 26, 2, timber);
            for (let x = -11; x <= 10; x += 5) box(x, 3, 1, 4, timber);
            box(-14, 7, 28, 1, thatch);
            for (let y = 0; y < 5; y++) {
              const half = 14 - y * 2;
              box(-half, 8 + y, half * 2, 1, y % 2 ? light : thatch);
            }
            box(-1, 4, 2, 1, light);
            break;
          }
          case "pagoPagoHighCourt": {
            // The second supplied picture was the same seal; a simple formal court block with central entrance and hipped roof.
            const wall = css(e.sh([220, 213, 188])),
              trim = css(e.sh([241, 230, 202])),
              roof = css(e.sh([102, 89, 68]));
            box(-12, 1, 24, 9, wall);
            box(-13, 10, 26, 1, trim);
            for (let y = 0; y < 5; y++) {
              const half = 13 - y * 2;
              box(-half, 11 + y, half * 2, 1, roof);
            }
            for (let x = -9; x <= 7; x += 4) {
              box(x, 3, 2, 5, trim);
              box(x, 4, 1, 3, 8);
            }
            box(-3, 1, 6, 7, trim);
            box(-2, 1, 4, 5, wall);
            box(-1, 1, 2, 4, 8);
            box(0, 16, 1, 5, 8);
            break;
          }
          case "fortZoutmanAruba": {
            // Fort Zoutman: low ochre stone battery with a compact crenellated parapet and a dark central entry.
            const stone = css(e.sh([174, 145, 81])),
              lit = css(e.sh([211, 177, 101])),
              dark = css(e.sh([59, 55, 45]));
            box(-13, 1, 26, 7, stone);
            box(-14, 8, 28, 1, lit);
            box(-12, 9, 24, 1, stone);
            for (let x = -12; x <= 10; x += 4) box(x, 10, 2, 2, stone);
            box(-3, 1, 6, 5, dark);
            box(-2, 1, 4, 4, lit);
            box(-1, 1, 2, 3, dark);
            for (let x = -10; x <= 8; x += 6) box(x, 5, 2, 1, dark);
            break;
          }
          case "willemIIITowerAruba": {
            // Willem III Tower: red-and-white clock shaft, pale blue lower base and arched louver openings.
            const white = css(e.sh([235, 231, 209])),
              red = css(e.sh([163, 59, 59])),
              blue = css(e.sh([112, 176, 192])),
              dark = css(e.sh([61, 67, 63]));
            box(-5, 1, 10, 6, blue);
            box(-4, 7, 8, 8, red);
            box(-4, 15, 8, 10, white);
            box(-5, 25, 10, 1, dark);
            box(-4, 26, 8, 1, red);
            box(-3, 27, 6, 1, red);
            box(-2, 28, 4, 1, dark);
            for (let y = 3; y <= 5; y += 2) box(-2, y, 4, 1, dark);
            for (let y = 9; y <= 13; y += 4) {
              box(-3, y, 2, 3, dark);
              box(1, y, 2, 3, dark);
              box(-2, y + 1, 1, 1, blue);
              box(2, y + 1, 1, 1, blue);
            }
            box(-3, 18, 6, 1, dark);
            box(-2, 19, 4, 4, dark);
            box(-1, 20, 2, 2, blue);
            box(0, 29, 1, 3, red);
            break;
          }
