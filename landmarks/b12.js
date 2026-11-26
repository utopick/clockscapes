          // French landmarks of group b12 (Moulins to Vesoul), drawn with a few shared parts defined at the top
          // of this case: blk (a shaded block), spr (a spire shaded on its right), lan (a lancet window), roofT
          // (a hipped slate roof), dorm (a dormer), rtow (a round tower with machicolations and an optional
          // conical roof), cren (merlons) and rose (a rose window).
          case "moulinsCathedral":
          case "jacquemartMoulins":
          case "arcHere":
          case "chateauNantes":
          case "neversTower":
          case "palaisDucalNevers":
          case "negresco":
          case "stNicholasNice":
          case "arenesNimes":
          case "donjonNiort":
          case "orleansCathedral":
          case "chateauPau":
          case "saintFront":
          case "castillet":
          case "notreDameLaGrande":
          case "saintMaclou":
          case "quimperCathedral":
          case "parlementBretagne":
          case "rennesCathedral":
          case "rodezCathedral":
          case "rouenCathedral":
          case "saintBrieucCathedral":
          case "puitsCouriot":
          case "crassiersMichon":
          case "notreDameSaintLo":
          case "strasbourgCathedral":
          case "tourMassey":
          case "tarbesCathedral":
          case "tourRoyale":
          case "saintSernin":
          case "capitoleToulouse":
          case "toursCathedral":
          case "troyesCathedral":
          case "troyesHouses":
          case "tulleCathedral":
          case "valenceCathedral":
          case "rempartsVannes":
          case "saintGeorgesVesoul":
          case "laMotteVesoul": {
            const sh = (rgb) => css(e.sh(rgb)),
              dk = (rgb, k = 0.3) => css(e.sh(mixc(rgb, [41, 40, 54], k))),
              lt = (rgb, k = 0.3) => css(e.sh(mixc(rgb, [255, 248, 225], k))),
              D = 2,
              STONE = [205, 197, 178],
              GREY = [190, 186, 176],
              TUFA = [234, 228, 210],
              SLATE = [84, 92, 112],
              GOLD = [226, 180, 70],
              GREEN = [86, 140, 96];
            // A block from column l, w wide, top row `top`, h rows: lit on its left column, shaded on the right.
            const blk = (l, top, w, h, rgb, f = 1) => {
              box(l, top, w, h, sh(rgb));
              if (w > 2) box(l, top, 1, h, lt(rgb, 0.2));
              if (w > 3) box(l + w - f, top, f, h, dk(rgb, 0.28));
            };
            // A spire of half-width hw on the row above base, `tall` rows, its right half in shade.
            const spr = (cx, base, hw, tall, rgb, fin = 2) => {
              cone(cx, base, hw, tall, sh(rgb));
              for (let j = 0; j < tall; j++) {
                const k = Math.round(hw * (1 - j / tall));
                if (k >= 1) box(cx + 1, base + j + 1, k, 1, dk(rgb, 0.3));
              }
              if (fin) box(cx, base + tall + fin, 1, fin, 3);
            };
            // A lancet window w cells wide whose top row is `top`, h rows tall, with a pointed head.
            const lan = (cx, top, h, w = 1, col = D) => {
              const k = Math.floor(w / 2);
              box(cx - k, top - (w > 1 ? 1 : 0), w, h - (w > 1 ? 1 : 0), col);
              if (w > 1) box(cx, top, 1, 1, col);
            };
            // A hipped roof over l..l+w-1 on the row above b, h rows, stepping in s cells a row.
            const roofT = (l, b, w, h, rgb = SLATE, s = 0.5) => {
              for (let j = 0; j < h; j++) {
                const k = Math.floor(j * s);
                if (w - 2 * k < 1) break;
                box(l + k, b + 1 + j, w - 2 * k, 1, j === h - 1 ? lt(rgb, 0.15) : sh(rgb));
                if (w - 2 * k > 4) box(l + w - k - 2, b + 1 + j, 2, 1, dk(rgb, 0.25));
              }
            };
            // A stone dormer standing on row b: a window under a little gable.
            const dorm = (cx, b, rgb = TUFA) => {
              box(cx - 1, b + 3, 3, 3, sh(rgb));
              box(cx, b + 2, 1, 2, D);
              box(cx, b + 4, 1, 1, sh(rgb));
            };
            // A round tower of half-width hw, h rows: lit and shaded flanks, machicolations under a parapet,
            // then merlons (roof 0) or a conical roof `roof` rows tall.
            const rtow = (cx, hw, h, rgb, roof = 0, rrgb = SLATE, mach = true) => {
              const f = Math.max(1, Math.round(hw / 2));
              box(cx - hw, h, 2 * hw + 1, h, sh(rgb));
              box(cx - hw, h, 1, h, lt(rgb, 0.25));
              box(cx + hw - f + 1, h, f, h, dk(rgb, 0.28));
              if (mach) {
                box(cx - hw - 1, h + 2, 2 * hw + 3, 2, sh(rgb));
                box(cx + hw - f + 1, h + 2, f + 1, 2, dk(rgb, 0.28));
                for (let p = cx - hw; p <= cx + hw; p += 2) box(p, h + 1, 1, 1, dk(rgb, 0.5));
              }
              const top = h + (mach ? 2 : 0);
              if (roof) spr(cx, top, hw + (mach ? 1 : 0), roof, rrgb);
              else
                for (let p = cx - hw - (mach ? 1 : 0); p <= cx + hw + 1; p += 2)
                  box(p, top + 1, 1, 1, sh(rgb));
              return top;
            };
            const cren = (l, top, w, rgb) => {
              for (let p = l; p < l + w; p += 2) box(p, top + 1, 1, 1, rgb);
            };
            const rose = (cx, cy, r, ring = 6) => {
              orb(cx, cy, r, D);
              if (r >= 2) orb(cx, cy, r - 1, ring === 6 ? css(e.sh([120, 110, 150])) : ring);
              box(cx, cy, 1, 1, lt([200, 190, 220], 0.2));
            };
            if (kind === "moulinsCathedral") {
              // Moulins Cathedral: Lassus's Gothic Revival west front, two square towers with tall octagonal
              // stone spires ringed by pinnacles, a gabled central portal under a rose window.
              const S = STONE;
              for (const cx of [-7, 7]) {
                blk(cx - 3, 24, 7, 24, S);
                box(cx - 4, 24, 1, 22, lt(S, 0.1)); // the corner buttresses
                box(cx + 4, 24, 1, 22, dk(S, 0.2));
                lan(cx - 1, 22, 6);
                lan(cx + 1, 22, 6);
                lan(cx, 13, 4);
                box(cx - 4, 16, 9, 1, lt(S, 0.3));
                box(cx - 4, 25, 9, 1, lt(S, 0.35));
                spr(cx, 25, 3, 15, S);
                for (const p of [-3, 3]) {
                  box(cx + p, 28, 1, 3, sh(S)); // the pinnacles at the foot of the spire
                  box(cx + p, 29, 1, 1, 3);
                }
                box(cx, 30, 1, 2, D);
                lan(cx, 6, 5, 3);
              }
              blk(-3, 18, 7, 18, S);
              spr(0, 18, 4, 4, S, 0);
              box(0, 23, 1, 2, 3);
              rose(0, 13, 2.2);
              box(-4, 9, 9, 1, lt(S, 0.3));
              cone(0, 8, 2, 2, lt(S, 0.3)); // the gable over the portal
              lan(0, 7, 6, 3);
              break;
            }
            if (kind === "jacquemartMoulins") {
              // Jacquemart of Moulins: a square stone tower with its clock, a slate stage and pyramid, then the
              // open lantern where the four painted Jacquemart figures strike the bell.
              const S = STONE;
              blk(-3, 24, 7, 24, S);
              for (const r of [8, 14]) box(0, r, 1, 2, D);
              box(-3, 4, 7, 1, lt(S, 0.25));
              orb(0, 19, 2, D);
              orb(0, 19, 1.4, 6);
              box(0, 20, 1, 2, D);
              box(-4, 25, 9, 1, lt(S, 0.35)); // the cornice
              blk(-3, 29, 7, 4, SLATE);
              for (const p of [-2, 2]) box(p, 28, 1, 2, lt(S, 0.2));
              spr(0, 29, 4, 3, SLATE, 0);
              box(-2, 36, 1, 4, sh(SLATE)); // the lantern posts
              box(2, 36, 1, 4, sh(SLATE));
              orb(0, 34, 1.2, 12); // the bell
              box(-1, 33, 1, 2, css(e.sh([190, 60, 52]))); // Jacquemart and Jacquette
              box(1, 33, 1, 2, css(e.sh([64, 96, 160])));
              box(-3, 33, 7, 1, sh(SLATE));
              spr(0, 36, 3, 3, SLATE, 2);
              break;
            }
            if (kind === "arcHere") {
              // Arc Héré (Nancy): a cream stone triumphal arch, a tall central arch between two lower ones,
              // paired Corinthian columns, an entablature, an attic with its relief and statues, and the
              // gilded group of Fame on top.
              const C = [226, 214, 186];
              blk(-10, 16, 21, 16, C, 2);
              box(-3, 13, 7, 13, lt(C, 0.2));
              box(-2, 11, 5, 11, D);
              dome(0, 11, 2.5, D);
              for (const s of [-1, 1]) {
                const ax = s * 7;
                box(ax - 1, 8, 3, 8, lt(C, 0.15));
                box(ax - 1, 6, 3, 6, D);
                dome(ax, 6, 1.5, D);
                orb(ax, 11, 1.2, sh(GOLD));
                box(ax, 11, 1, 1, dk(C, 0.4));
                for (const p of [s * 4, s * 5, s * 10]) {
                  box(p, 14, 1, 13, lt(C, 0.35)); // the columns
                  box(p, 15, 1, 1, 3);
                }
              }
              box(-11, 17, 23, 1, lt(C, 0.4));
              box(-10, 16, 21, 1, dk(C, 0.15));
              blk(-8, 21, 17, 4, C);
              box(-4, 20, 9, 2, dk(C, 0.2)); // the relief panel
              for (const p of [-10, -5, 5, 10]) {
                box(p, 19, 1, 2, lt(C, 0.3)); // statues on the entablature
                box(p, 20, 1, 1, sh(C));
              }
              box(-9, 22, 19, 1, lt(C, 0.35));
              for (const p of [-7, 7]) box(p, 23, 1, 1, sh(GOLD));
              box(-1, 24, 3, 2, sh(GOLD)); // Fame and her trumpet
              box(0, 26, 1, 2, sh(GOLD));
              box(1, 26, 2, 1, lt(GOLD, 0.3));
              break;
            }
            if (kind === "chateauNantes") {
              // Château des ducs de Bretagne (Nantes): white tufa curtain walls and round towers with
              // machicolations over the grass moat, the gate between two towers, and behind them the Grand
              // Logis under its steep slate roof with tall carved dormers.
              const T = TUFA;
              box(-17, 1, 35, 1, dk(GREEN, 0.2));
              // the Grand Logis behind the wall
              blk(-12, 13, 10, 5, T);
              roofT(-13, 13, 12, 6, SLATE, 0.6);
              for (const p of [-10, -6]) dorm(p, 13);
              blk(3, 12, 10, 4, T);
              roofT(2, 12, 12, 6, SLATE, 0.6);
              for (const p of [5, 9]) dorm(p, 12);
              blk(-15, 9, 31, 8, T);
              box(-15, 2, 31, 1, dk(T, 0.2));
              for (const p of [-12, -7, 7, 12]) box(p, 6, 1, 2, D);
              box(-15, 10, 31, 1, sh(T));
              cren(-15, 10, 31, sh(T));
              rtow(-14, 3, 11, T);
              rtow(14, 3, 11, T);
              blk(-2, 11, 5, 11, T);
              for (const s of [-1, 1]) rtow(s * 4, 2, 12, T, 0, SLATE);
              box(-1, 7, 3, 6, D); // the gate and its bridge
              dome(0, 7, 1.5, D);
              box(-1, 10, 3, 1, dk(T, 0.5));
              box(-2, 2, 5, 1, sh([150, 120, 96]));
              break;
            }
            if (kind === "neversTower") {
              // Nevers Cathedral's tower (Saint-Cyr-et-Sainte-Julitte): a square Flamboyant tower, plain
              // below, its top storey rich with tall twin bays and statue niches between buttresses, a pierced
              // balustrade and corner pinnacles.
              const S = GREY;
              blk(-4, 34, 9, 34, S, 2);
              for (const p of [-5, 5]) box(p, 32, 1, 31, p < 0 ? lt(S, 0.15) : dk(S, 0.25)); // buttresses
              lan(0, 19, 6);
              box(0, 9, 1, 3, D);
              box(-5, 22, 11, 1, lt(S, 0.3));
              lan(-2, 32, 8);
              lan(2, 32, 8);
              for (let r = 24; r <= 31; r += 3) for (const p of [-4, 0, 4]) box(p, r, 1, 1, lt(S, 0.4)); // niches
              box(-5, 35, 11, 1, lt(S, 0.35));
              for (let p = -4; p <= 4; p += 2) box(p, 36, 1, 1, lt(S, 0.2));
              for (const p of [-5, 5]) {
                box(p, 39, 1, 4, sh(S));
                box(p, 40, 1, 1, 3);
              }
              for (const p of [-2, 2]) box(p, 37, 1, 1, sh(S));
              box(-3, 1, 7, 1, dk(S, 0.2));
              break;
            }
            if (kind === "palaisDucalNevers") {
              // Ducal Palace of Nevers: a Renaissance block under a steep slate roof with stone dormers, two
              // round corner turrets with pointed roofs, and the octagonal stair tower in the middle crowned
              // by a lantern.
              const S = [214, 200, 168];
              blk(-12, 13, 25, 12, S, 2);
              roofT(-13, 13, 27, 7, SLATE, 0.5);
              for (const p of [-9, -5, 5, 9]) {
                dorm(p, 13, S);
                for (const r of [5, 10]) {
                  box(p - 1, r, 2, 3, D);
                  box(p - 1, r - 1, 2, 1, lt(S, 0.3));
                }
              }
              box(-12, 7, 25, 1, lt(S, 0.3));
              for (const s of [-1, 1]) rtow(s * 13, 2, 16, S, 8, SLATE, false);
              blk(-3, 20, 7, 20, S);
              for (const r of [8, 13, 18]) box(0, r, 1, 2, D);
              box(-1, 4, 3, 3, D);
              box(-4, 21, 9, 1, lt(S, 0.3));
              spr(0, 21, 4, 6, SLATE, 0);
              blk(-1, 29, 3, 3, S);
              box(0, 28, 1, 1, D);
              spr(0, 29, 1, 3, SLATE, 1);
              box(-5, 1, 11, 1, lt(S, 0.2)); // the perron
              break;
            }
            if (kind === "negresco") {
              // Hotel Negresco (Nice): a white Belle Époque front of many floors with balconies and a mansard
              // roof, and at its corner the round pavilion under the famous pink dome and lantern.
              const W = [240, 236, 228],
                PINK = [224, 130, 120];
              blk(-5, 17, 19, 17, W, 2);
              for (let r = 3; r <= 15; r += 3)
                for (let p = -3; p <= 12; p += 2) box(p, r, 1, 2, r === 3 ? css(e.sh([60, 96, 130])) : D);
              for (const r of [6, 12]) box(-5, r - 2, 19, 1, lt(W, 0.3)); // balconies
              box(-6, 18, 21, 1, lt(W, 0.35));
              roofT(-5, 18, 19, 3, [150, 140, 150], 0.6);
              for (const p of [-2, 4, 10]) box(p, 20, 1, 1, sh(W));
              rtow(-10, 5, 18, W, 0, SLATE, false);
              for (let r = 3; r <= 15; r += 3) for (const p of [-13, -11, -9, -7]) box(p, r, 1, 2, D);
              for (const r of [6, 12]) box(-15, r - 2, 11, 1, lt(W, 0.3));
              box(-16, 19, 13, 1, lt(W, 0.35));
              dome(-10, 19, 6, sh(PINK));
              for (const p of [-13, -7]) box(p, 23, 1, 3, dk(PINK, 0.2)); // the dome's ribs
              box(-8, 24, 2, 4, dk(PINK, 0.25));
              box(-15, 20, 11, 1, lt(PINK, 0.3));
              box(-11, 27, 3, 2, sh([110, 170, 150])); // the green lantern
              dome(-10, 27, 1.5, sh([110, 170, 150]));
              box(-10, 31, 1, 2, sh(W));
              break;
            }
            if (kind === "stNicholasNice") {
              // St Nicholas Orthodox Cathedral (Nice): pink brick and pale stone walls with kokoshnik gables,
              // four small onion domes at the corners and the tall central one on its drum, green and gold,
              // each with a gilded cross.
              const B = [206, 128, 108],
                P = [222, 210, 190],
                G = [80, 150, 112];
              blk(-7, 14, 15, 14, B);
              for (const p of [-7, 7]) box(p, 14, 1, 14, sh(P));
              box(-7, 9, 15, 1, sh(P));
              box(-7, 10, 15, 1, css(e.sh([70, 110, 170])));
              for (const p of [-4, 0, 4]) {
                box(p, 7, 1, 3, D);
                dome(p, 14, 1.5, sh(P)); // the kokoshnik gables
                box(p, 13, 1, 1, sh(G));
              }
              box(-1, 4, 3, 4, D);
              const onion = (cx, b, r, tall) => {
                orb(cx, b + r, r, sh(G));
                box(cx + 1, b + r + 1, Math.max(1, r - 1), 2 * r - 1, dk(G, 0.25));
                cone(cx, b + 2 * r - 1, Math.max(1, r - 1), tall, sh(G));
                box(cx, b + 2 * r + tall, 1, 1, sh(GOLD));
                box(cx, b + 2 * r + tall + 3, 1, 3, sh(GOLD)); // the cross
                box(cx - 1, b + 2 * r + tall + 2, 3, 1, sh(GOLD));
              };
              for (const s of [-1, 1]) {
                blk(s * 5 - 1, 18, 3, 4, P);
                onion(s * 5, 18, 2, 2);
              }
              blk(-2, 21, 5, 7, P);
              box(0, 19, 1, 2, D);
              onion(0, 21, 3, 3);
              break;
            }
            if (kind === "arenesNimes") {
              // Arena of Nîmes: the Roman amphitheatre's two storeys of arches between pilasters, cornices
              // and the attic with its corbels; the curved ends turn into light and shade.
              const S = [218, 192, 140];
              box(-17, 13, 35, 13, sh(S));
              box(-17, 1, 35, 1, dk(S, 0.2));
              for (const r of [6, 11]) box(-17, r, 35, 1, lt(S, 0.35));
              for (let p = -15; p <= 14; p += 4) {
                const far = p > 9; // the far curve of the oval turns away into shade
                for (const b of [1, 6]) box(p, b + 4, 2, 4, dk(S, far ? 0.68 : 0.58));
                box(p - 1, 10, 1, 9, far ? dk(S, 0.25) : lt(S, 0.2)); // the pilasters
              }
              for (let p = -16; p <= 16; p += 2) box(p, 12, 1, 1, dk(S, 0.3)); // the attic's corbels
              box(-17, 13, 35, 1, lt(S, 0.2));
              box(-17, 13, 1, 13, lt(S, 0.3));
              box(16, 13, 2, 13, dk(S, 0.3));
              break;
            }
            if (kind === "donjonNiort") {
              // Donjon de Niort: two square Romanesque keeps joined by a later lodge, their corners clasped by
              // round turrets, all crowned with machicolations and merlons.
              const S = [206, 198, 180];
              blk(-4, 14, 9, 14, S);
              roofT(-5, 14, 11, 6, SLATE, 0.5);
              dorm(-1, 15, S);
              for (const p of [-2, 2]) for (const r of [5, 10]) box(p, r, 1, 2, D);
              box(0, 4, 1, 3, D);
              for (const [cx, h] of [
                [-8, 20],
                [8, 21],
              ]) {
                blk(cx - 3, h, 7, h, S, 2);
                box(cx - 3, h + 1, 7, 1, dk(S, 0.5));
                box(cx - 3, h + 2, 7, 1, sh(S));
                cren(cx - 3, h + 2, 7, sh(S));
                for (const p of [-4, 4]) rtow(cx + p, 1, h + 2, S, 0, SLATE, false);
                for (const r of [8, 14]) box(cx, r, 1, 2, D);
              }
              break;
            }
            if (kind === "orleansCathedral") {
              // Orléans Cathedral (Sainte-Croix): the golden Gothic west front, three portals under gables and
              // three rose windows, and two towers crowned by their openwork "wedding cake" storeys.
              const S = [214, 194, 156];
              for (const cx of [-7, 7]) {
                blk(cx - 3, 27, 7, 27, S, 2);
                lan(cx - 1, 25, 7);
                lan(cx + 1, 25, 7);
                rose(cx, 14, 1.2);
                for (const r of [10, 17]) box(cx - 3, r, 7, 1, lt(S, 0.3));
                box(cx - 4, 28, 9, 1, lt(S, 0.35));
                blk(cx - 3, 32, 7, 4, S); // the openwork crown
                for (const p of [-2, 0, 2]) box(cx + p, 31, 1, 3, D);
                for (const p of [-3, 3]) {
                  box(cx + p, 34, 1, 2, sh(S));
                  box(cx + p, 34, 1, 1, 3);
                }
                box(cx - 3, 32, 7, 1, lt(S, 0.3));
                blk(cx - 2, 35, 5, 3, S);
                for (const p of [-1, 1]) box(cx + p, 34, 1, 2, D);
                box(cx - 2, 35, 5, 1, lt(S, 0.35));
                box(cx, 36, 1, 1, lt(S, 0.4));
                lan(cx, 6, 5, 3);
                cone(cx, 6, 2, 2, lt(S, 0.3));
              }
              blk(-3, 21, 7, 21, S);
              rose(0, 15, 2.2);
              box(-3, 21, 7, 1, lt(S, 0.3));
              for (let p = -3; p <= 3; p += 2) box(p, 22, 1, 1, lt(S, 0.2));
              lan(0, 8, 7, 3);
              cone(0, 8, 2, 2, lt(S, 0.3));
              break;
            }
            if (kind === "chateauPau") {
              // Château de Pau: the white Renaissance pavilion under its tall slate roof, the long wing with its
              // row of carved dormers, and the brick keep of Gaston Fébus with its machicolations.
              const W = [228, 222, 208],
                BR = [168, 96, 72];
              blk(6, 21, 8, 21, BR, 2);
              box(5, 22, 10, 1, sh(BR));
              for (let p = 6; p <= 13; p += 2) box(p, 21, 1, 1, dk(BR, 0.5));
              cren(5, 22, 10, sh(BR));
              for (const r of [8, 14]) box(9, r, 2, 2, D);
              blk(-6, 12, 12, 12, W);
              roofT(-7, 12, 14, 5, SLATE, 0.4);
              for (const p of [-4, 0, 4]) {
                dorm(p, 12, W);
                for (const r of [4, 9]) box(p, r, 1, 2, D);
              }
              blk(-14, 17, 8, 17, W, 2);
              for (const r of [5, 10, 15]) for (const p of [-12, -9]) box(p, r, 1, 2, D);
              box(-14, 18, 8, 1, lt(W, 0.3));
              spr(-10, 18, 4, 7, SLATE, 1);
              dorm(-10, 18, W);
              box(-1, 3, 3, 3, D);
              break;
            }
            if (kind === "saintFront") {
              // Saint-Front Cathedral (Périgueux): pale Byzantine domes, each with its little pointed lantern,
              // over a Romanesque body with corner turrets, and the tall bell tower whose colonnade rotunda
              // carries a scaled conical roof.
              const S = [222, 212, 188];
              blk(-4, 9, 21, 9, S, 2);
              for (const p of [0, 6, 12]) lan(p, 7, 4, 1);
              box(-4, 9, 21, 1, lt(S, 0.3));
              blk(1, 12, 11, 3, S);
              const DG = [184, 178, 166];
              for (const [cx, b, r] of [
                [0, 9, 5],
                [12, 9, 5],
                [6, 12, 6],
              ]) {
                dome(cx, b, r, dk(DG, 0.25));
                dome(cx - 1, b, r - 1, sh(DG));
                box(cx - r + 1, b + 1, 2 * r - 1, 1, dk(DG, 0.3));
                box(cx - 1, b + r + 1, 1, 1, lt(DG, 0.3));
                box(cx, b + r + 2, 1, 2, sh(S)); // the lantern and its little cone
                box(cx, b + r + 3, 1, 1, dk(DG, 0.4));
              }
              for (const p of [-4, 16]) {
                box(p, 13, 1, 4, sh(S));
                box(p, 14, 1, 1, dk(S, 0.3));
              }
              blk(-12, 13, 8, 13, S, 2);
              for (const p of [-10, -7]) lan(p, 11, 4);
              box(-12, 14, 8, 1, lt(S, 0.3));
              blk(-11, 19, 6, 5, S);
              for (const p of [-10, -7]) lan(p, 18, 3);
              box(-11, 20, 6, 1, lt(S, 0.3));
              blk(-10, 23, 5, 3, S);
              box(-8, 22, 1, 2, D);
              box(-11, 24, 7, 1, lt(S, 0.3));
              for (let p = -10; p <= -6; p += 2) box(p, 26, 1, 2, sh(S)); // the colonnade
              for (const p of [-9, -7]) box(p, 26, 1, 2, D);
              spr(-8, 26, 2, 4, S, 0);
              box(-8, 28, 1, 1, dk(S, 0.3)); // the scales
              box(-8, 31, 1, 1, sh(S));
              break;
            }
            if (kind === "castillet") {
              // Le Castillet (Perpignan): the red brick gatehouse, the Petit Castillet and the main block with
              // heavy machicolations and merlons, the old town gate, and the tall tower above them with its
              // own machicolations, a little brick dome and the iron weathervane.
              const BR = [196, 100, 76];
              const top = (l, w, h) => {
                for (let p = l; p < l + w; p += 2) box(p, h + 1, 1, 1, dk(BR, 0.5)); // machicolations
                box(l - 1, h + 3, w + 2, 2, sh(BR));
                box(l + w - 1, h + 3, 2, 2, dk(BR, 0.25));
                cren(l - 1, h + 3, w + 2, sh(BR));
              };
              blk(-8, 17, 9, 17, BR);
              top(-8, 9, 17);
              blk(1, 19, 8, 19, BR, 2);
              top(1, 8, 19);
              for (const [p, r] of [
                [-5, 12],
                [-2, 12],
                [4, 14],
                [6, 9],
              ])
                box(p, r, 1, 2, D);
              box(-1, 6, 3, 5, D); // the gate
              dome(0, 6, 1.5, D);
              blk(2, 31, 6, 9, BR, 2); // the tower
              top(2, 6, 31);
              box(4, 28, 1, 2, D);
              dome(5, 35, 2.5, sh(BR));
              box(6, 37, 1, 2, dk(BR, 0.25));
              box(5, 40, 1, 3, sh([60, 56, 64])); // the weathervane
              box(6, 41, 2, 1, sh([60, 56, 64]));
              break;
            }
            if (kind === "notreDameLaGrande") {
              // Notre-Dame-la-Grande (Poitiers): the Romanesque west front, a carved gable with Christ in a
              // mandorla over two rows of arcades and the great portal, between two towers of clustered
              // columns topped by open lanterns and scaled pine-cone roofs.
              const S = [214, 204, 184];
              blk(-6, 16, 13, 16, S);
              cone(0, 16, 6, 6, sh(S));
              for (let j = 1; j <= 6; j++) box(Math.round(6 - j) + 1, 16 + j, 1, 1, dk(S, 0.25));
              orb(0, 19, 1.2, dk(S, 0.3)); // the mandorla
              for (const r of [8, 13]) {
                box(-6, r + 1, 13, 1, lt(S, 0.3));
                for (let p = -5; p <= 5; p += 2)
                  if (r === 13 || Math.abs(p) > 2) box(p, r - 1, 1, 2, dk(S, 0.45));
              }
              box(-2, 7, 5, 7, lt(S, 0.25)); // the portal's archivolts
              dome(0, 7, 2.5, lt(S, 0.25));
              box(-1, 6, 3, 6, D);
              dome(0, 6, 1.5, D);
              lan(0, 14, 3);
              for (const cx of [-8, 8]) {
                blk(cx - 2, 17, 5, 17, S);
                for (const p of [-1, 1]) box(cx + p, 16, 1, 15, lt(S, 0.15)); // the column bundles
                box(cx - 2, 18, 5, 1, lt(S, 0.3));
                blk(cx - 2, 22, 5, 4, S); // the open lantern
                for (const p of [-1, 1]) box(cx + p, 21, 1, 3, D);
                box(cx - 3, 22, 7, 1, lt(S, 0.3));
                spr(cx, 22, 3, 7, S, 1);
                for (const [p, r] of [
                  [-1, 24],
                  [1, 24],
                  [0, 26],
                  [-1, 28],
                ])
                  box(cx + p, r, 1, 1, dk(S, 0.35)); // the scales
              }
              break;
            }
            if (kind === "saintMaclou") {
              // Saint-Maclou Cathedral (Pontoise): the tall Flamboyant tower with paired lancets and buttresses,
              // its Renaissance top of balustrade, lantern and cupola, beside the gabled west front with its
              // rose window and portal.
              const S = [196, 186, 166];
              blk(-11, 12, 4, 12, S);
              roofT(-11, 12, 4, 3, SLATE, 1);
              blk(1, 19, 9, 19, S);
              rose(5, 13, 2);
              cone(5, 19, 4, 4, sh(S));
              box(5, 22, 1, 1, dk(S, 0.4));
              lan(5, 7, 6, 3);
              cone(5, 7, 2, 2, lt(S, 0.3));
              box(1, 9, 9, 1, lt(S, 0.3));
              blk(-7, 30, 8, 30, S, 2);
              box(-8, 28, 1, 26, lt(S, 0.15));
              box(1, 28, 1, 26, dk(S, 0.25));
              for (const p of [-5, -2]) {
                lan(p, 27, 8);
                lan(p, 16, 6);
              }
              lan(-4, 8, 6, 3);
              box(-8, 19, 10, 1, lt(S, 0.3));
              box(-8, 31, 10, 1, lt(S, 0.35));
              for (let p = -8; p <= 1; p += 3) box(p, 32, 1, 1, lt(S, 0.2));
              blk(-6, 34, 6, 3, S); // the Renaissance lantern
              box(-4, 33, 1, 2, D);
              dome(-3, 34, 2.5, sh(SLATE));
              box(-4, 38, 2, 2, sh(S));
              box(-3, 40, 1, 2, 3);
              break;
            }
            if (kind === "quimperCathedral") {
              // Quimper Cathedral (Saint-Corentin): the Gothic west front, its two towers carrying the tall
              // openwork spires added in 1856, pinnacles at their feet, the gabled portal and the little
              // horseman of King Gradlon between the towers.
              const S = [190, 186, 176];
              for (const cx of [-6, 6]) {
                blk(cx - 3, 28, 7, 28, S, 2);
                box(cx + (cx < 0 ? -4 : 4), 26, 1, 24, cx < 0 ? lt(S, 0.15) : dk(S, 0.25));
                lan(cx - 1, 26, 8);
                lan(cx + 1, 26, 8);
                lan(cx, 14, 5);
                box(cx - 3, 18, 7, 1, lt(S, 0.3));
                box(cx - 4, 29, 9, 1, lt(S, 0.35));
                for (let p = cx - 3; p <= cx + 3; p += 2) box(p, 30, 1, 1, lt(S, 0.2));
                spr(cx, 29, 3, 17, S);
                for (const p of [-3, 3]) {
                  box(cx + p, 33, 1, 4, sh(S));
                  box(cx + p, 34, 1, 1, 3);
                }
                for (const r of [34, 39]) box(cx, r, 1, 2, D);
              }
              blk(-2, 22, 5, 22, S);
              lan(0, 19, 7, 3);
              box(-2, 11, 5, 1, lt(S, 0.3));
              lan(0, 9, 7, 3);
              cone(0, 9, 2, 3, lt(S, 0.3));
              box(-2, 23, 5, 1, lt(S, 0.3));
              box(-1, 25, 3, 1, dk(S, 0.35)); // King Gradlon on his horse
              box(0, 27, 1, 2, dk(S, 0.35));
              break;
            }
            if (kind === "parlementBretagne") {
              // Parlement de Bretagne (Rennes): a granite ground floor, the pale limestone storey with its tall
              // windows and central frontispiece, under the huge slate roof whose end pavilions rise higher,
              // with gilded figures on their ridges.
              const GR = [150, 140, 128],
                L = [226, 220, 206];
              roofT(-17, 11, 8, 7, SLATE, 0.5);
              roofT(10, 11, 8, 7, SLATE, 0.5);
              roofT(-10, 11, 21, 5, SLATE, 0.35);
              for (const p of [-14, 14]) {
                box(p - 1, 18, 3, 1, sh(GOLD));
                box(p, 19, 1, 1, sh(GOLD));
              }
              for (const p of [-6, 0, 6]) dorm(p, 11, L);
              blk(-17, 5, 35, 5, GR);
              for (let p = -16; p <= 16; p += 2) box(p, 4, 1, 2, dk(GR, 0.4));
              blk(-17, 11, 35, 6, L, 2);
              for (let p = -15; p <= 15; p += 3) {
                box(p, 10, 1, 3, D);
                box(p, 11, 1, 1, sh(L));
              }
              blk(-4, 11, 9, 6, L); // the frontispiece
              for (const p of [-4, -2, 2, 4]) box(p, 10, 1, 5, lt(L, 0.4));
              box(-1, 10, 3, 3, D);
              box(-5, 12, 11, 1, lt(L, 0.4));
              box(-1, 3, 3, 3, D);
              break;
            }
            if (kind === "rennesCathedral") {
              // Rennes Cathedral (Saint-Pierre): a golden granite classical front, its two towers stacked with
              // pairs of columns, storey on storey, finished by balustrades and small top stages, the arched
              // window and portal between.
              const S = [192, 164, 116];
              for (const cx of [-7, 7]) {
                blk(cx - 4, 29, 9, 29, S, 2);
                for (const [b, top] of [
                  [1, 10],
                  [11, 19],
                  [20, 28],
                ]) {
                  for (const p of [-3, -2, 2, 3]) box(cx + p, top - 1, 1, top - b - 1, lt(S, 0.25)); // columns
                  box(cx - 4, top, 9, 1, lt(S, 0.35));
                  box(cx, top - 3, 1, 4, D);
                }
                box(cx - 3, 31, 7, 2, sh(S)); // balustrade and top stage
                for (const p of [-3, -1, 1, 3]) box(cx + p, 31, 1, 1, lt(S, 0.3));
                blk(cx - 1, 34, 3, 3, S);
                box(cx, 33, 1, 1, D);
                box(cx, 35, 1, 1, lt(S, 0.4));
              }
              blk(-3, 22, 7, 22, S);
              box(-1, 18, 3, 6, D);
              dome(0, 18, 1.5, D);
              box(-3, 11, 7, 1, lt(S, 0.35));
              box(-1, 7, 3, 6, D);
              dome(0, 7, 1.5, D);
              for (const p of [-2, 2]) box(p, 9, 1, 8, lt(S, 0.3));
              cone(0, 22, 3, 2, sh(S));
              break;
            }
            if (kind === "rodezCathedral") {
              // Rodez Cathedral: the red sandstone west front, plain and fortress-like with its rose window and
              // Flamboyant gable, beside the great bell tower: a plain shaft, a storey of tall bays, then the
              // octagon with pinnacles, the lantern and the Virgin on top.
              const R = [176, 98, 84];
              blk(-11, 29, 14, 29, R, 2);
              for (const p of [-11, 1]) box(p, 29, 2, 29, p < 0 ? lt(R, 0.12) : dk(R, 0.2)); // buttresses
              rose(-4, 19, 3);
              lan(-4, 9, 7, 3);
              box(-11, 12, 14, 1, lt(R, 0.25));
              cone(-4, 29, 5, 5, sh(R));
              for (const p of [-9, -7, -1, 1]) {
                box(p, 32, 1, 3, sh(R));
                box(p, 33, 1, 1, lt(R, 0.4));
              }
              box(-4, 36, 1, 2, sh(R));
              blk(3, 36, 9, 36, R, 2);
              for (const r of [12, 22, 30]) box(7, r, 1, 2, D);
              box(2, 37, 11, 1, lt(R, 0.3));
              blk(4, 45, 7, 8, R);
              for (const p of [6, 8]) lan(p, 44, 6);
              for (const p of [3, 11]) {
                box(p, 47, 1, 5, sh(R));
                box(p, 48, 1, 1, lt(R, 0.4));
              }
              blk(5, 51, 5, 6, R); // the octagon
              box(7, 50, 1, 4, D);
              for (const p of [4, 10]) {
                box(p, 53, 1, 4, sh(R));
                box(p, 54, 1, 1, lt(R, 0.4));
              }
              blk(6, 54, 3, 3, R);
              box(7, 57, 1, 3, sh([220, 214, 200])); // the Virgin
              break;
            }
            if (kind === "rouenCathedral") {
              // Rouen Cathedral: the lacy Gothic west front with its gables and pinnacles between the Saint-Romain
              // tower (slate pyramid roof) and the Butter Tower (octagonal Flamboyant crown), and behind them the
              // lantern tower carrying the tall cast-iron spire, dark green and pierced.
              const S = [198, 192, 180],
                IR = [62, 84, 80];
              blk(-2, 34, 5, 13, S); // the lantern tower
              for (const p of [-1, 1]) lan(p, 32, 7);
              for (const p of [-3, 3]) {
                box(p, 36, 1, 4, sh(S));
                box(p, 37, 1, 1, lt(S, 0.4));
              }
              box(-3, 35, 7, 1, lt(S, 0.3));
              spr(0, 35, 2, 27, IR);
              for (let r = 39; r < 58; r += 4) box(0, r, 1, 2, lt(IR, 0.35)); // the openwork
              for (const p of [-2, 2]) box(p, 38, 1, 3, sh(IR));
              blk(-12, 26, 6, 26, S);
              for (const r of [12, 20]) lan(-9, r, 5);
              box(-12, 27, 6, 1, lt(S, 0.3));
              spr(-9, 27, 3, 7, SLATE, 1);
              blk(6, 24, 7, 24, S, 2);
              lan(8, 20, 6);
              lan(10, 20, 6);
              lan(9, 11, 5);
              box(5, 25, 9, 1, lt(S, 0.35));
              blk(7, 30, 5, 5, S); // the Butter Tower's crown
              for (const p of [8, 10]) box(p, 29, 1, 3, D);
              for (const p of [6, 12]) {
                box(p, 29, 1, 4, sh(S));
                box(p, 29, 1, 1, lt(S, 0.4));
              }
              box(9, 32, 1, 2, sh(S));
              blk(-6, 22, 12, 22, S);
              rose(0, 15, 2.5);
              cone(0, 22, 4, 5, sh(S));
              box(0, 24, 1, 2, dk(S, 0.3));
              for (const p of [-6, -3, 3, 5]) {
                box(p, 27, 1, 6, sh(S)); // the pinnacles
                box(p, 27, 1, 1, lt(S, 0.4));
              }
              for (const [p, w] of [
                [-4, 1],
                [0, 3],
                [3, 1],
              ]) {
                lan(p, w > 1 ? 8 : 6, w > 1 ? 7 : 5, w);
                cone(p, w > 1 ? 8 : 6, w > 1 ? 2 : 1, 2, lt(S, 0.3));
              }
              break;
            }
            if (kind === "saintBrieucCathedral") {
              // Saint-Brieuc Cathedral: a granite fortress church, two massive towers with buttresses and
              // machicolations (the left one under a squat slate pyramid), a deep porch and a gable between.
              const S = [156, 154, 150];
              blk(-3, 15, 7, 15, S);
              cone(0, 15, 3, 3, sh(S));
              lan(0, 7, 6, 3);
              lan(0, 13, 3);
              for (const [cx, h, roof] of [
                [-8, 21, 1],
                [8, 19, 0],
              ]) {
                blk(cx - 4, h, 9, h, S, 2);
                for (const p of [-5, 5]) box(cx + p, h - 3, 1, h - 3, p < 0 ? lt(S, 0.1) : dk(S, 0.25)); // buttresses
                for (let p = cx - 4; p <= cx + 4; p += 2) box(p, h + 1, 1, 1, dk(S, 0.5));
                box(cx - 5, h + 3, 11, 2, sh(S));
                box(cx + 3, h + 3, 3, 2, dk(S, 0.25));
                for (const r of [9, 15]) box(cx, r, 1, 2, D);
                if (roof) spr(cx, h + 3, 5, 4, SLATE, 1);
                else cren(cx - 5, h + 3, 11, sh(S));
              }
              break;
            }
            if (kind === "puitsCouriot") {
              // Puits Couriot (Saint-Étienne): the steel headframe of the old coal mine, a lattice tower braced
              // by its slanting back legs, two winding wheels on top, over the brick winding house.
              const BR = [168, 98, 76],
                ST = [70, 66, 72],
                seg = (x1, y1, x2, y2) => {
                  const n = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1), 1);
                  for (let i = 0; i <= n; i++)
                    box(
                      Math.round(x1 + ((x2 - x1) * i) / n),
                      Math.round(y1 + ((y2 - y1) * i) / n),
                      1,
                      1,
                      sh(ST),
                    );
                };
              blk(-6, 7, 13, 7, BR, 2);
              for (const p of [-4, -1, 2]) box(p, 5, 1, 2, D);
              box(-7, 8, 15, 1, lt(BR, 0.25));
              for (const p of [-3, 0]) seg(p, 8, p, 22); // the tower's legs and braces
              for (let r = 10; r < 22; r += 3) {
                seg(-3, r, 0, r + 3);
                box(-3, r, 4, 1, sh(ST));
              }
              seg(6, 1, 0, 20); // the back legs
              seg(4, 1, -1, 19);
              box(-4, 22, 6, 1, sh(ST));
              for (const p of [-3, 1]) {
                orb(p, 24, 1.5, sh(ST));
                box(p, 24, 1, 1, lt(ST, 0.5));
              }
              break;
            }
            if (kind === "crassiersMichon") {
              // The twin crassiers of Michon (Saint-Étienne): two great cones of coal-mine spoil, dark slopes lit
              // on one side and greening at the foot.
              const K = [88, 84, 90],
                G = [96, 128, 84];
              for (const [cx, hw, h] of [
                [10, 9, 17],
                [-8, 11, 21],
              ]) {
                for (let j = 0; j < h; j++) {
                  const k = Math.round(hw * (1 - j / h));
                  box(cx - k, j + 1, k + 1, 1, lt(K, 0.12));
                  box(cx + 1, j + 1, k, 1, dk(K, 0.3));
                }
                for (let j = 0; j < 5; j++) {
                  const k = Math.round(hw * (1 - j / h));
                  for (let p = -k; p <= k; p += 3)
                    box(cx + p + (j % 3), j + 1, 1, 1, p < 0 ? sh(G) : dk(G, 0.3));
                }
              }
              break;
            }
            if (kind === "notreDameSaintLo") {
              // Notre-Dame de Saint-Lô: the Gothic west towers left as wartime ruins, the north tower still tall
              // with its pinnacles and the south one cut short, and between them the plain green schist wall
              // that closed the bombed front in the 1970s.
              const S = [192, 188, 176],
                SC = [124, 134, 120];
              blk(-3, 26, 7, 26, SC);
              for (let r = 4; r < 26; r += 4) box(-3, r, 7, 1, dk(SC, 0.15));
              box(-1, 5, 3, 5, D);
              blk(-11, 28, 8, 28, S, 2);
              for (const p of [-9, -6]) lan(p, 24, 7);
              lan(-7, 12, 6, 3);
              cone(-7, 12, 2, 2, lt(S, 0.3));
              box(-11, 15, 8, 1, lt(S, 0.3));
              for (const [p, h] of [
                [-11, 30],
                [-9, 29],
                [-5, 31],
                [-4, 29],
              ])
                box(p, h, 1, h - 28, sh(S)); // the broken top
              blk(4, 40, 8, 40, S, 2);
              box(3, 38, 1, 36, lt(S, 0.15));
              box(12, 38, 1, 36, dk(S, 0.25));
              for (const p of [6, 9]) {
                lan(p, 36, 9);
                lan(p, 22, 7);
              }
              lan(8, 10, 7, 3);
              cone(8, 10, 2, 2, lt(S, 0.3));
              for (const r of [13, 26]) box(3, r, 10, 1, lt(S, 0.3));
              box(3, 41, 10, 1, lt(S, 0.35));
              for (const p of [3, 6, 9, 12]) {
                box(p, 45, 1, 4, sh(S));
                box(p, 45, 1, 1, lt(S, 0.4));
              }
              break;
            }
            if (kind === "strasbourgCathedral") {
              // Strasbourg Cathedral: the pink sandstone west front laced with its "harp strings" of stone, three
              // gabled portals and the great rose, the south tower ending at the platform, and the single north
              // tower: an octagon flanked by four openwork stair turrets under the stepped spire.
              const P = [204, 128, 106];
              blk(-11, 31, 23, 31, P, 2);
              for (let p = -10; p <= 10; p += 2) box(p, 29, 1, 15, lt(P, 0.22)); // the harp strings
              rose(0, 21, 4);
              box(-11, 13, 23, 1, lt(P, 0.3));
              for (let p = -10; p <= 10; p += 2) box(p, 12, 1, 1, dk(P, 0.4)); // the gallery of apostles
              for (const [p, w] of [
                [-7, 3],
                [0, 3],
                [7, 3],
              ]) {
                lan(p, 8, 7, w);
                cone(p, 8, 2, 3, lt(P, 0.25));
              }
              box(-11, 32, 23, 1, lt(P, 0.35)); // the platform
              for (let p = -11; p <= 11; p += 2) box(p, 33, 1, 1, lt(P, 0.2));
              blk(-9, 47, 5, 15, P); // the octagon
              lan(-7, 45, 11);
              for (const p of [-11, -4]) {
                box(p, 46, 1, 13, sh(P)); // the stair turrets
                for (let r = 35; r < 46; r += 3) box(p, r, 1, 1, dk(P, 0.45));
                box(p, 47, 1, 1, lt(P, 0.35));
              }
              box(-10, 48, 7, 1, lt(P, 0.35));
              spr(-7, 48, 3, 16, P);
              for (let r = 51; r < 62; r += 3) box(-7 + (r % 2), r, 1, 1, dk(P, 0.45)); // the spire's openwork
              break;
            }
            if (kind === "tourMassey") {
              // Massey Tower (Tarbes): the slender brick and white-stone tower of the Palais Massey in its
              // garden, with stone quoins, a balcony, the arched belvedere and the little top turret, rising
              // from the palace and its slate roof.
              const BR = [204, 128, 104],
                W = [234, 228, 214];
              blk(-5, 10, 11, 10, BR, 2);
              for (const p of [-5, 5]) box(p, 10, 1, 10, sh(W));
              for (const p of [-4, 4]) for (const r of [4, 8]) box(p, r, 1, 2, D);
              box(-5, 6, 11, 1, sh(W));
              roofT(-6, 10, 13, 3, SLATE, 1);
              blk(-2, 31, 5, 21, BR);
              for (const p of [-2, 2]) for (let r = 12; r <= 31; r += 2) box(p, r, 1, 1, sh(W)); // the quoins
              for (const r of [16, 22, 28]) box(0, r, 1, 2, D);
              box(-3, 32, 7, 1, sh(W)); // the balcony
              blk(-2, 37, 5, 5, BR); // the belvedere
              for (const p of [-1, 1]) {
                box(p, 36, 1, 3, D);
                box(p, 37, 1, 1, sh(W));
              }
              box(-3, 38, 7, 1, sh(W));
              for (let p = -3; p <= 3; p += 2) box(p, 39, 1, 1, sh(W));
              blk(-1, 41, 3, 3, W);
              box(0, 40, 1, 1, D);
              box(0, 43, 1, 2, sh(SLATE));
              break;
            }
            if (kind === "tarbesCathedral") {
              // Tarbes Cathedral (Notre-Dame-de-la-Sède): the ochre classical front, pilasters, three tall
              // arched windows over the arched portal, under a slate roof, and the octagonal brick lantern
              // over the crossing.
              const O = [222, 176, 92],
                BR = [184, 122, 98];
              blk(-2, 25, 6, 7, BR, 2);
              for (const p of [-1, 1]) box(p, 23, 1, 3, D);
              box(-3, 26, 8, 1, lt(BR, 0.3));
              spr(1, 26, 3, 3, SLATE, 1);
              roofT(-8, 17, 17, 3, SLATE, 1);
              blk(-7, 17, 15, 17, O, 2);
              for (const p of [-7, -3, 3, 7]) box(p, 16, 1, 15, lt(O, 0.25)); // the pilasters
              box(-7, 9, 15, 1, lt(O, 0.35));
              box(-8, 18, 17, 1, lt(O, 0.4));
              for (const p of [-5, 0, 5]) {
                box(p, 14, 1, 4, D);
                box(p, 15, 1, 1, lt(O, 0.2));
              }
              box(-1, 6, 3, 5, D);
              dome(0, 6, 1.5, sh([100, 140, 120]));
              break;
            }
            if (kind === "tourRoyale") {
              // Tour Royale (Toulon): the squat round artillery tower at the harbour mouth, its battered foot in
              // the sea, a cordon below the rounded parapet, gun ports, and the little watch turret on top.
              const S = [214, 204, 180];
              box(-12, 1, 25, 1, sh([72, 116, 160]));
              for (let j = 0; j < 3; j++) box(-11 + j, 2 + j, 23 - 2 * j, 1, sh(S)); // the battered foot
              const band = [
                [-9, 0.3, 1],
                [-8, 0.15, 1],
                [-7, 0.05, 1],
                [4, 0.1, 0],
                [6, 0.22, 0],
                [8, 0.35, 0],
              ];
              box(-9, 10, 19, 7, sh(S));
              for (const [p, k, lit] of band) box(p, 10, 2, 7, lit ? lt(S, k) : dk(S, k));
              box(-10, 11, 21, 1, lt(S, 0.3)); // the cordon
              box(-9, 13, 19, 2, sh(S));
              box(6, 13, 4, 2, dk(S, 0.25));
              for (const p of [-5, -1, 3, 7]) box(p, 7, 1, 1, D); // gun ports
              blk(2, 16, 3, 3, S);
              box(3, 15, 1, 1, D);
              break;
            }
            if (kind === "saintSernin") {
              // Basilica of Saint-Sernin (Toulouse): the long Romanesque brick church with buttresses and its
              // west front's rose, and over the crossing the famous octagonal belfry, five storeys of arches
              // (round below, mitred above) narrowing to the spire.
              const BR = [196, 112, 86],
                W = [226, 214, 196];
              blk(-11, 15, 23, 15, BR);
              roofT(-12, 15, 25, 2, [170, 92, 70], 1);
              for (let p = -9; p <= 4; p += 3) {
                box(p, 11, 1, 4, D);
                box(p + 1, 14, 1, 13, dk(BR, 0.2)); // buttresses
              }
              blk(6, 20, 6, 20, BR, 2);
              cone(9, 20, 3, 2, sh(BR));
              rose(9, 15, 2);
              for (const p of [8, 10]) lan(p, 6, 5);
              box(6, 8, 6, 1, sh(W));
              blk(-4, 22, 9, 6, BR);
              let b = 22;
              for (const [w, h, n] of [
                [9, 5, 3],
                [9, 5, 3],
                [7, 5, 2],
                [7, 4, 2],
                [5, 4, 1],
              ]) {
                const k = Math.floor(w / 2);
                blk(-k, b + h, w, h, BR);
                box(-k - 1, b + 1, w + 2, 1, sh(W)); // the cornice under each storey
                const step = n === 3 ? 2 : 2;
                for (let i = 0; i < n; i++) {
                  const p = n === 1 ? 0 : -((n - 1) * step) / 2 + i * step;
                  box(p, b + h - 1, 1, h - 2, D);
                  box(p, b + h, 1, 1, h === 4 ? D : sh(W));
                }
                b += h;
              }
              box(-3, b + 1, 7, 1, sh(W));
              spr(0, b + 1, 2, 9, BR);
              break;
            }
            if (kind === "capitoleToulouse") {
              // Capitole de Toulouse: the long pink brick front trimmed in white stone, the central frontispiece
              // of eight pink marble columns under its pediment, the balustrade with urns, the end pavilions
              // and the flag.
              const BR = [214, 138, 108],
                W = [236, 226, 210],
                M = [222, 160, 150];
              blk(-18, 13, 37, 13, BR, 2);
              box(-18, 5, 37, 1, sh(W));
              for (let p = -16; p <= 16; p += 2)
                if (Math.abs(p) > 8) {
                  box(p, 4, 1, 2, D);
                  box(p, 10, 1, 3, D);
                  box(p, 11, 1, 1, sh(W));
                }
              for (const p of [-18, -13, 13, 18]) box(p, 13, 1, 13, sh(W)); // the pavilions' quoins
              blk(-8, 14, 17, 14, BR);
              box(-8, 6, 17, 1, sh(W));
              for (let p = -7; p <= 7; p += 2) {
                box(p, 13, 1, 7, sh(M)); // the marble columns
                box(p + 1, 12, 1, 3, D);
              }
              for (const p of [-6, -2, 2, 6]) box(p, 4, 1, 3, D);
              box(-1, 4, 3, 4, D);
              box(-19, 14, 39, 1, sh(W));
              for (let p = -18; p <= 18; p += 2) box(p, 15, 1, 1, sh(W)); // the balustrade
              cone(0, 14, 5, 3, sh(W));
              box(-3, 15, 7, 1, sh(BR));
              for (const p of [-13, -9, 9, 13]) box(p, 16, 1, 1, sh(W)); // urns
              box(0, 20, 1, 4, sh([60, 56, 64]));
              box(1, 20, 1, 2, css(e.sh([60, 90, 170])));
              box(2, 20, 1, 2, sh(W));
              box(3, 20, 1, 2, css(e.sh([200, 50, 50])));
              break;
            }
            if (kind === "toursCathedral") {
              // Tours Cathedral (Saint-Gatien): the Flamboyant west front, three gabled portals, the great rose
              // under a pierced gable with pinnacles, and the two towers topped by Renaissance lanterns with
              // little domes.
              const S = [196, 190, 176];
              for (const cx of [-7, 7]) {
                blk(cx - 3, 27, 7, 27, S, 2);
                lan(cx - 1, 25, 7);
                lan(cx + 1, 25, 7);
                lan(cx, 14, 4);
                for (const r of [10, 18]) box(cx - 3, r, 7, 1, lt(S, 0.3));
                box(cx - 4, 28, 9, 1, lt(S, 0.35));
                for (const p of [-3, 3]) {
                  box(cx + p, 30, 1, 2, sh(S));
                  box(cx + p, 30, 1, 1, lt(S, 0.4));
                }
                blk(cx - 2, 31, 5, 3, S); // the Renaissance lantern
                for (const p of [-1, 1]) box(cx + p, 30, 1, 2, D);
                dome(cx, 31, 2, sh(S));
                box(cx, 34, 1, 1, dk(S, 0.3));
                box(cx, 36, 1, 2, sh(S));
                lan(cx, 7, 6, 3);
                cone(cx, 7, 2, 2, lt(S, 0.3));
              }
              blk(-3, 21, 7, 21, S);
              rose(0, 14, 2.5);
              cone(0, 21, 3, 4, sh(S));
              box(0, 23, 1, 1, D);
              for (const p of [-3, 3]) {
                box(p, 24, 1, 3, sh(S));
                box(p, 24, 1, 1, lt(S, 0.4));
              }
              lan(0, 8, 7, 3);
              cone(0, 8, 2, 3, lt(S, 0.3));
              break;
            }
            if (kind === "troyesCathedral") {
              // Troyes Cathedral: the Flamboyant west front with three gabled portals and the rose under its
              // pierced gable, the single finished north tower with tall belfry bays and corner turrets, and
              // the stump of the south tower.
              const S = [200, 196, 186];
              blk(-10, 33, 8, 33, S, 2);
              for (const p of [-8, -5]) {
                lan(p, 30, 9);
                lan(p, 17, 6);
              }
              orb(-7, 21, 1, D);
              orb(-7, 21, 0.6, 6);
              for (const r of [10, 20]) box(-10, r, 8, 1, lt(S, 0.3));
              box(-11, 34, 10, 1, lt(S, 0.35));
              for (const p of [-11, -2]) {
                box(p, 36, 1, 4, sh(S));
                box(p, 36, 1, 1, lt(S, 0.4));
              }
              for (let p = -9; p <= -4; p += 2) box(p, 35, 1, 1, lt(S, 0.2));
              blk(-2, 22, 9, 22, S);
              rose(2, 15, 3);
              cone(2, 22, 4, 5, sh(S));
              box(2, 24, 1, 2, D);
              blk(7, 25, 4, 25, S);
              for (const p of [7, 10]) {
                box(p, 28, 1, 3, sh(S));
                box(p, 28, 1, 1, lt(S, 0.4));
              }
              lan(9, 20, 6);
              for (const [p, w] of [
                [-7, 3],
                [2, 3],
                [9, 1],
              ]) {
                lan(p, 7, 6, w);
                cone(p, 7, w > 1 ? 2 : 1, 3, lt(S, 0.3));
              }
              break;
            }
            if (kind === "troyesHouses") {
              // Half-timbered houses of old Troyes: a row of gabled houses in ochre, pink, blue and white
              // plaster crossed by dark timbers, each upper storey jutting out over the one below, under steep
              // tiled gables.
              const TB = [92, 64, 52],
                TILE = [150, 84, 66];
              const fills = [
                [232, 196, 120],
                [222, 150, 140],
                [240, 232, 214],
                [130, 160, 196],
                [226, 176, 96],
                [236, 220, 200],
              ];
              for (let i = 0; i < 6; i++) {
                const l = -26 + i * 9,
                  F = fills[i],
                  h = [15, 17, 14, 16, 15, 17][i];
                box(l + 1, 6, 7, 6, sh(F)); // the ground floor, set back
                box(l + 1, 6, 1, 6, sh(TB));
                box(l + 3, 4, 2, 4, D);
                box(l + 6, 5, 1, 2, D);
                box(l, h, 9, h - 6, sh(F)); // the jutting upper storeys
                for (const r of [7, h - 4]) box(l, r, 9, 1, sh(TB));
                for (let p = l; p <= l + 8; p += 2) box(p, h, 1, h - 7, sh(TB));
                for (let r = 8; r < h - 4; r += 3) box(l + 1 + (i % 2), r + 2, 1, 1, sh(TB)); // braces
                box(l + 3, h - 1, 1, 2, D);
                box(l + 5, h - 1, 1, 2, D);
                box(l + 8, h, 1, h - 6, dk(F, 0.25));
                cone(l + 4, h, 5, 6, sh(TILE)); // the gable
                for (let j = 1; j <= 6; j++)
                  box(l + 4 + Math.round(5 * (1 - j / 6)), h + j, 1, 1, dk(TILE, 0.3));
                box(l + 4, h + 3, 1, 1, sh(F));
              }
              break;
            }
            if (kind === "tulleCathedral") {
              // Tulle Cathedral (Notre-Dame): the square Romanesque tower over the porch, a Gothic octagon with
              // corner pinnacles, and the slender stone spire some 75 m high; the nave beside it.
              const S = [198, 192, 180];
              blk(4, 14, 7, 14, S);
              roofT(3, 14, 9, 3, SLATE, 1);
              for (const p of [6, 9]) lan(p, 11, 4);
              blk(-4, 30, 9, 30, S, 2);
              lan(0, 9, 7, 3);
              cone(0, 9, 2, 2, lt(S, 0.3));
              for (const r of [12, 22]) box(-4, r, 9, 1, lt(S, 0.3));
              for (const p of [-2, 2]) lan(p, 20, 6);
              for (const p of [-2, 0, 2]) lan(p, 28, 4);
              box(-5, 31, 11, 1, lt(S, 0.35));
              blk(-3, 38, 7, 7, S); // the octagon
              for (const p of [-1, 1]) lan(p, 37, 5);
              for (const p of [-4, 4]) {
                box(p, 36, 1, 5, sh(S));
                box(p, 36, 1, 1, lt(S, 0.4));
              }
              box(-4, 39, 9, 1, lt(S, 0.3));
              spr(0, 39, 3, 18, S);
              for (const r of [44, 50]) box(0, r, 1, 2, D);
              break;
            }
            if (kind === "valenceCathedral") {
              // Valence Cathedral (Saint-Apollinaire): the Romanesque nave in pale stone with its buttresses and
              // round-arched windows under low tiled roofs, and the square west belfry with paired arched bays
              // and a shallow tiled pyramid.
              const S = [210, 198, 170],
                TILE = [176, 104, 78];
              blk(-2, 14, 11, 14, S, 2);
              roofT(-3, 14, 13, 3, TILE, 1);
              for (const p of [0, 3, 6]) {
                box(p, 10, 1, 4, D);
                box(p, 11, 1, 1, lt(S, 0.3));
                box(p + 1, 13, 1, 12, dk(S, 0.2));
              }
              blk(-10, 27, 8, 27, S, 2);
              box(-7, 8, 2, 5, D);
              for (const r of [12, 20]) box(-10, r, 8, 1, lt(S, 0.3));
              for (const p of [-8, -5]) {
                box(p, 25, 1, 3, D);
                box(p, 26, 1, 1, lt(S, 0.3));
                box(p, 17, 1, 2, D);
              }
              box(-11, 28, 10, 1, lt(S, 0.35));
              spr(-6, 28, 5, 3, TILE, 0);
              box(-6, 32, 1, 2, sh([60, 56, 64]));
              break;
            }
            if (kind === "rempartsVannes") {
              // Ramparts of Vannes: the old walls with machicolations above their gardens, the gate and a round
              // tower, the Tour du Connétable under its tall pointed slate roof, and the slate-roofed
              // washhouses on the stream at their foot.
              const S = [172, 168, 156];
              box(-17, 1, 35, 1, dk(GREEN, 0.15));
              blk(-17, 10, 35, 9, S);
              for (let p = -16; p <= 16; p += 2) box(p, 10, 1, 1, dk(S, 0.45));
              box(-17, 12, 35, 2, sh(S));
              cren(-17, 12, 35, sh(S));
              rtow(-12, 3, 11, S);
              blk(-5, 15, 7, 15, S); // the gate tower
              box(-3, 6, 3, 5, D);
              dome(-2, 6, 1.5, D);
              spr(-2, 15, 4, 5, SLATE, 1);
              rtow(7, 3, 14, S, 9);
              box(7, 9, 1, 2, D);
              for (const l of [-16, -8, 10]) {
                box(l, 4, 6, 3, sh([214, 206, 188])); // the washhouses
                box(l, 3, 6, 1, D);
                roofT(l - 1, 4, 8, 2, SLATE, 1);
              }
              box(-17, 1, 35, 1, sh([96, 140, 170]));
              break;
            }
            if (kind === "saintGeorgesVesoul") {
              // Église Saint-Georges (Vesoul): the pale classical front of the 1740s, pilasters, an oculus, the
              // arched portal and windows under a great pediment, and beside it the bell tower under its
              // bulbous slate dome and lantern.
              const S = [222, 210, 184];
              blk(-10, 22, 6, 22, S, 2);
              for (const r of [12, 19]) box(-7, r, 1, 2, D);
              box(-11, 23, 8, 1, lt(S, 0.35));
              dome(-7, 23, 3, sh(SLATE));
              box(-6, 25, 2, 1, dk(SLATE, 0.25));
              box(-8, 27, 3, 2, sh(SLATE));
              box(-7, 29, 1, 2, sh(SLATE));
              box(-7, 31, 1, 1, 3);
              blk(-4, 19, 15, 19, S, 2);
              for (const p of [-4, -1, 7, 10]) box(p, 18, 1, 17, lt(S, 0.25)); // the pilasters
              box(-4, 10, 15, 1, lt(S, 0.35));
              box(-5, 20, 17, 1, lt(S, 0.4));
              cone(3, 20, 7, 6, sh(S));
              orb(3, 23, 1, D);
              orb(3, 15, 1.2, D);
              box(2, 7, 3, 6, D);
              dome(3, 7, 1.5, D);
              for (const p of [-2, 8]) box(p, 15, 1, 4, D);
              break;
            }
            if (kind === "laMotteVesoul") {
              // Notre-Dame de la Motte (Vesoul): the little white Gothic Revival chapel on the hilltop rock,
              // an open pointed arch under a gable and a steep stone spire, above the ochre cliff and its trees.
              const R = [186, 150, 104],
                S = [226, 222, 212];
              for (let j = 0; j < 9; j++) {
                const k = 8 - Math.floor(j / 2);
                box(-k, j + 1, 2 * k + 1, 1, sh(R));
                box(k - 2, j + 1, 3, 1, dk(R, 0.25));
              }
              for (const [p, r] of [
                [-7, 3],
                [-4, 7],
                [5, 6],
                [2, 9],
              ]) {
                orb(p, r, 1.3, sh(GREEN));
              }
              box(-1, 4, 3, 3, dk(R, 0.5)); // the cave
              blk(-3, 18, 7, 9, S);
              lan(0, 16, 6, 3);
              for (const p of [-3, 3]) {
                box(p, 21, 1, 3, sh(S));
                box(p, 21, 1, 1, lt(S, 0.3));
              }
              spr(0, 18, 3, 8, [128, 130, 140], 2);
              break;
            }
            break;
          }
