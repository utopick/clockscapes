          // Castles on their hills, and town walls on flat ground, drawn from a table per building: the hill's
          // outline ([x, height] points), wall runs [from, to, height above the hill] with merlons, and towers
          // [x, width, height above the hill, roof]. Roofs: "crenel" merlons, "flat" a plain parapet, "round" a
          // drum tower (Ávila's cubos), "oct" an octagonal tower with a lantern stage (Badajoz's Espantaperros),
          // "bell" a little bell gable, "pyr" a tiled pyramid roof; blocks [x, width, height, colour] are buildings
          // inside the walls with tiled hip roofs. Used by Alicante, Almería, Jaén, Cartagena, Badajoz, Ávila,
          // Granada (the Alhambra) and Lleida (La Seu Vella).
          case "alhambra":
          case "seuVella":
          case "santaBarbara":
          case "alcazabaAlmeria":
          case "santaCatalina":
          case "concepcion":
          case "alcazabaBadajoz":
          case "avilaWalls": {
            const S = {
              // Granada: the Alhambra seen from the Albaicín, its red walls over the wooded hill: the Alcazaba
              // and the Torre de la Vela on the left, the square Palace of Charles V and the tower of Santa María,
              // the tall Comares Tower over the Nasrid palaces, and the white Generalife on the right
              alhambra: {
                hill: [
                  [-27, 0],
                  [-24, 5],
                  [-18, 8],
                  [-8, 9],
                  [6, 9],
                  [16, 9],
                  [22, 8],
                  [26, 5],
                  [28, 0],
                ],
                rock: [74, 112, 64],
                stone: [198, 118, 84],
                walls: [[-24, 20, 5]],
                blocks: [
                  [-11, 8, 8, 0],
                  [10, 7, 6, 0],
                  [21, 6, 6, 1],
                ],
                towers: [
                  [-22, 5, 12, "crenel"],
                  [-16, 5, 10, "crenel"],
                  [-12, 3, 7, "crenel"],
                  [-1, 3, 13, "pyr"],
                  [6, 7, 15, "crenel"],
                  [13, 3, 8, "crenel"],
                  [18, 3, 7, "crenel"],
                ],
                wood: 1,
              },
              // Lleida: La Seu Vella on its hill over the city, inside the walls: the long Romanesque church
              // with its octagonal lantern, and the tall octagonal Gothic bell tower with its crown of pinnacles
              seuVella: {
                hill: [
                  [-17, 0],
                  [-14, 5],
                  [-9, 8],
                  [0, 9],
                  [9, 8],
                  [14, 5],
                  [17, 0],
                ],
                rock: [104, 132, 82],
                stone: [204, 180, 136],
                walls: [[-14, 14, 3]],
                blocks: [[-11, 17, 9, 2]],
                towers: [
                  [-3, 5, 13, "pyr"],
                  [9, 7, 24, "oct"],
                ],
                scrub: 1,
              },
              // Alicante: the castle along the top of Mount Benacantil, a bare rock with the Moor's Face
              santaBarbara: {
                hill: [
                  [-21, 0],
                  [-18, 4],
                  [-16, 9],
                  [-13, 12],
                  [-10, 14],
                  [-6, 13],
                  [-1, 12],
                  [5, 10],
                  [11, 7],
                  [16, 4],
                  [22, 0],
                ],
                rock: [166, 150, 124],
                stone: [228, 208, 162],
                walls: [[-13, 14, 3]],
                towers: [
                  [-9, 5, 6, "crenel"],
                  [-3, 3, 5, "crenel"],
                  [4, 3, 5, "crenel"],
                  [11, 3, 4, "crenel"],
                ],
                face: -17,
                scrub: 1,
              },
              // Almería: long walls and square towers climbing a bare ridge, gardens inside, the Christian
              // castle and its keep at the high end, the bell gable of the Torre de la Vela
              alcazabaAlmeria: {
                hill: [
                  [-25, 0],
                  [-22, 3],
                  [-17, 5],
                  [-10, 7],
                  [-2, 8],
                  [8, 9],
                  [15, 10],
                  [20, 9],
                  [23, 5],
                  [25, 0],
                ],
                rock: [170, 146, 110],
                stone: [204, 170, 116],
                walls: [[-21, 22, 4]],
                towers: [
                  [-20, 3, 6, "crenel"],
                  [-14, 3, 6, "crenel"],
                  [-8, 3, 7, "bell"],
                  [-2, 3, 6, "crenel"],
                  [5, 3, 6, "crenel"],
                  [11, 3, 7, "crenel"],
                  [17, 7, 11, "crenel"],
                  [22, 3, 7, "crenel"],
                ],
                trees: [-17, -11, -5, 1, 8],
                scrub: 1,
              },
              // Jaén: the castle on the pine-covered top of Santa Catalina hill, its tall keep at the east end
              // and the big white cross on the cliff at the west end
              santaCatalina: {
                hill: [
                  [-17, 0],
                  [-15, 4],
                  [-11, 8],
                  [-5, 10],
                  [4, 10],
                  [10, 10],
                  [14, 8],
                  [17, 0],
                ],
                rock: [86, 122, 74],
                stone: [222, 200, 150],
                walls: [[-10, 13, 3]],
                towers: [
                  [-9, 3, 6, "crenel"],
                  [-2, 3, 6, "crenel"],
                  [5, 3, 6, "crenel"],
                  [10, 5, 9, "crenel"],
                  [13, 3, 7, "crenel"],
                ],
                cross: -13,
                wood: 1,
              },
              // Cartagena: the great square keep of the Concepción castle on its park hill (Parque Torres)
              concepcion: {
                hill: [
                  [-18, 0],
                  [-14, 4],
                  [-8, 7],
                  [0, 8],
                  [8, 7],
                  [14, 4],
                  [18, 0],
                ],
                rock: [104, 140, 80],
                stone: [206, 182, 140],
                walls: [[-12, 12, 2]],
                towers: [
                  [0, 15, 11, "flat"],
                  [-11, 3, 4, "crenel"],
                  [11, 3, 4, "crenel"],
                ],
                wood: 1,
              },
              // Badajoz: the Alcazaba's walls on the hill over the Guadiana and the octagonal Espantaperros tower
              alcazabaBadajoz: {
                hill: [
                  [-19, 0],
                  [-15, 4],
                  [-8, 6],
                  [4, 6],
                  [12, 5],
                  [16, 3],
                  [19, 0],
                ],
                rock: [150, 150, 96],
                stone: [216, 190, 138],
                walls: [[-15, 16, 4]],
                towers: [
                  [-14, 3, 6, "crenel"],
                  [-7, 3, 6, "crenel"],
                  [3, 5, 12, "oct"],
                  [10, 3, 6, "crenel"],
                  [15, 3, 6, "crenel"],
                ],
                scrub: 1,
              },
              // Ávila: the granite walls on flat ground, drum towers (cubos) every few metres, merlons all along
              avilaWalls: {
                hill: [
                  [-24, 1],
                  [24, 1],
                ],
                rock: [132, 150, 92],
                stone: [168, 146, 120],
                walls: [[-23, 23, 9]],
                towers: [-22, -16, -10, -4, 4, 10, 16, 22].map((p) => [
                  p,
                  5,
                  Math.abs(p) === 4 ? 14 : 12,
                  "round",
                ]),
                gate: 0,
              },
            }[kind];
            const tone = (rgb, k, to = [41, 40, 54]) => css(e.sh(mixc(rgb, to, k))),
              stone = css(e.sh(S.stone)),
              sDim = tone(S.stone, 0.25),
              sLit = tone(S.stone, 0.3, [255, 248, 225]),
              rock = css(e.sh(S.rock)),
              rDim = tone(S.rock, 0.3),
              rDeep = tone(S.rock, 0.5),
              green = css(e.sh(S.wood ? [52, 96, 58] : [104, 140, 82])),
              pts = S.hill,
              H = (x) => {
                for (let i = 1; i < pts.length; i++)
                  if (x <= pts[i][0]) {
                    const [a, ha] = pts[i - 1],
                      [b, hb] = pts[i];
                    return x < a ? 0 : Math.round(ha + ((hb - ha) * (x - a)) / (b - a));
                  }
                return 0;
              },
              peak = pts.reduce((m, p) => (p[1] > m[1] ? p : m))[0];
            for (let x = pts[0][0]; x <= pts[pts.length - 1][0]; x++) {
              const h = H(x),
                right = x > peak;
              if (h < 1) continue;
              box(x, h, 1, h, right && !S.wood ? rDim : rock);
              if (S.wood) {
                for (let r = h - 1; r > 0; r -= 2) if ((x + (r >> 1)) % 3 === 0) box(x, r, 1, 1, green); // the pines
                if (x % 3 === 0) box(x, h + 1, 1, 1, green);
              } else {
                for (let r = 2 + ((x >> 2) & 1); r < h - 2; r += 4) box(x, r, 1, 1, right ? rDeep : rDim); // strata
                if (x % 4 === 0 && h > 5) box(x, Math.round(h * 0.6), 1, 2, rDeep); // a crack
                if (S.scrub && (x * 7) % 5 === 0 && h > 2) box(x, Math.max(1, h - 2 - (x & 3)), 1, 1, green);
              }
            }
            if (S.face != null) {
              // the Moor's Face: a brow, an eye and the nose in the cliff
              const f = S.face,
                fh = H(f);
              box(f + 1, fh - 2, 2, 1, rDeep);
              box(f + 2, fh - 3, 1, 1, rDeep);
              box(f, fh - 5, 2, 1, rDeep);
            }
            for (const [a, b, wh] of S.walls)
              for (let x = a; x <= b; x++) {
                const top = H(x) + wh;
                box(x, top, 1, wh + 1, stone);
                box(x, top, 1, 1, sLit); // the wall walk
                if ((x - a) % 2 === 0) box(x, top + 1, 1, 1, stone);
                if (wh > 6 && x % 6 === 3) box(x, top - 3, 1, 2, 2); // arrow slits
              }
            for (const x of S.trees ?? []) {
              box(x - 1, H(x) + 6, 3, 2, green); // garden trees inside the walls
              box(x, H(x) + 7, 1, 1, green);
            }
            for (const [x0, w, h, col] of S.blocks ?? []) {
              const base = Math.min(H(x0), H(x0 + w - 1)),
                top = H(x0 + (w >> 1)) + h,
                tile = css(e.sh([170, 88, 60])),
                wall = col === 1 ? css(e.sh([238, 232, 216])) : stone;
              box(x0, top, w, top - base + 1, wall);
              box(x0 + w - 1, top, 1, top - base + 1, sDim);
              for (let p = x0 + 1; p < x0 + w - 1; p += 2) {
                box(p, top - 2, 1, 2, 2);
                if (h > 7 && col !== 2) box(p, top - 5, 1, 2, 2);
              }
              box(x0, top + 1, w, 1, tile); // the tiled hip roof
              box(x0 + 1, top + 2, w - 2, 1, col === 2 ? tile : tone([170, 88, 60], 0.2));
              if (col === 2) box(x0 + 3, top + 3, w - 6, 1, tile);
            }
            for (const [x, w, h, roof] of S.towers) {
              const k = Math.floor(w / 2),
                base = Math.min(H(x - k), H(x + k), H(x)),
                top = H(x) + h,
                tall = top - base + 1;
              box(x - k, top, w, tall, stone);
              box(x + k, top, 1, tall, sDim); // the shaded side
              if (w > 3) box(x - k, top, 1, tall, sLit);
              if (roof === "round") {
                box(x + k - 1, top, 1, tall, tone(S.stone, 0.12)); // the curve of the drum
                for (let r = top - 2; r > base + 1; r -= 3) box(x - k + 1 + ((r >> 1) & 1), r, 1, 1, sDim); // the courses
              } else if (h > 5) box(x, top - 2, 1, 2, 2);
              if (roof === "flat") {
                box(x - k, top + 1, w, 1, css(e.sh([150, 74, 56]))); // the restored roof's rust-red edge
                for (let r = top - 2; r > base; r -= 2)
                  for (let p = x - k + 1 + (r & 2); p < x + k; p += 4) box(p, r, 1, 1, sDim); // ashlar
                box(x + 2, top - 3, 1, 3, 2); // the pointed window
                stroke(x + 3, top - 8, x + k - 1, top - 5, 2); // the outside stair
              } else if (roof === "oct") {
                box(x - k + 1, top, 1, tall, tone(S.stone, 0.1)); // the octagon's faces
                box(x + k - 1, top, 1, tall, tone(S.stone, 0.15));
                for (let p = x - k; p <= x + k; p += 2) box(p, top + 1, 1, 1, stone);
                box(x - 1, top + 5, 3, 5, stone); // the mudéjar lantern
                box(x + 1, top + 5, 1, 5, sDim);
                box(x, top + 4, 1, 2, 2);
                box(x - 1, top + 6, 3, 1, sLit);
                box(x, top + 7, 1, 1, stone);
              } else if (roof === "pyr") {
                box(x - k - 1 + (w > 3 ? 0 : 1), top + 1, w + (w > 3 ? 2 : 0), 1, sLit);
                box(x, top - 1, 1, 2, 2);
                cone(x, top + 1, k, k + 2, css(e.sh([170, 88, 60])));
              } else if (roof === "bell") {
                for (let p = x - k; p <= x + k; p += 2) box(p, top + 1, 1, 1, stone);
                box(x, top + 3, 1, 2, stone); // the bell gable
                box(x, top + 2, 1, 1, 12);
              } else for (let p = x - k; p <= x + k; p += 2) box(p, top + 1, 1, 1, stone);
            }
            if (S.gate != null) {
              const g0 = S.gate;
              box(g0 - 2, 6, 5, 6, sLit);
              dome(g0, 6, 2, sLit);
              box(g0 - 1, 5, 3, 4, 2);
              dome(g0, 5, 1, 2);
            }
            if (S.cross != null) {
              const ch = H(S.cross) + 1;
              box(S.cross, ch + 6, 1, 6, 6);
              box(S.cross - 1, ch + 4, 3, 1, 6);
            }
            break;
          }
          case "mezquitaTower": {
            // Córdoba: the bell tower of the Mezquita-Catedral, the old minaret cased in stone: a tall plain
            // shaft, a belfry with arched openings over a balcony, a clock stage, a small lantern and dome, and
            // the gilt statue of Saint Raphael on top.
            const st = [216, 172, 112],
              stone = css(e.sh(st)),
              dim = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.35)));
            box(-5, 3, 11, 3, dim); // the plinth
            box(-4, 23, 9, 20, stone); // the minaret shaft
            box(4, 23, 1, 20, dim);
            box(-4, 23, 1, 20, lit);
            for (const y of [9, 15]) {
              box(-2, y + 2, 1, 3, 2); // paired horseshoe windows
              box(2, y + 2, 1, 3, 2);
            }
            box(-5, 24, 11, 1, lit); // the balcony
            box(-5, 23, 11, 1, dim);
            box(-3, 30, 7, 6, stone); // the belfry
            box(3, 30, 1, 6, dim);
            box(-2, 29, 2, 4, 2);
            box(1, 29, 2, 4, 2);
            box(-1, 27, 1, 1, 12);
            box(2, 27, 1, 1, 12);
            box(-4, 31, 9, 1, lit);
            box(-2, 35, 5, 4, stone); // the clock stage
            box(2, 35, 1, 4, dim);
            orb(0, 33, 1, 6);
            box(-3, 36, 7, 1, lit);
            box(-1, 38, 3, 2, stone); // the lantern
            dome(0, 38, 2, 12);
            box(0, 42, 1, 2, 12); // Saint Raphael
            box(-1, 41, 3, 1, 12);
            break;
          }
          case "mezquita": {
            // Córdoba: the Mezquita-Catedral from outside, a long low wall of golden stone with buttresses and
            // stepped merlons, horseshoe doorways with red-and-white voussoirs, the ridges of the many parallel
            // tiled roofs behind, and the Renaissance cathedral rising in the middle with its crossing lantern.
            const st = [214, 172, 114],
              stone = css(e.sh(st)),
              dim = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              pale = css(e.sh([226, 204, 160])),
              paleDim = css(e.sh([190, 166, 126])),
              tile = css(e.sh([172, 92, 62])),
              red = css(e.sh([178, 62, 46])),
              white = css(e.sh([238, 228, 206])),
              wh = 8;
            // the cathedral: transept and nave over the middle, a tiled gable and a lantern on the crossing
            box(-7, 12, 15, 4, pale);
            box(7, 12, 1, 4, paleDim);
            for (let p = -5; p <= 5; p += 3) box(p, 11, 1, 2, 2);
            cone(0, 12, 7, 3, tile);
            dome(0, 14, 1, pale); // the crossing's lantern
            box(0, 16, 1, 1, 12);
            // the ridges of the parallel roofs behind the wall
            for (let p = -24; p <= 24; p++)
              if (Math.abs(p) > 8) box(p, wh + (p % 3 === 0 ? 3 : 2), 1, 2, tile);
            box(-25, wh, 51, wh, stone);
            box(-25, wh, 51, 1, lit);
            box(25, wh, 1, wh, dim);
            for (let p = -25; p <= 23; p += 4) {
              box(p, wh + 1, 3, 1, stone); // the stepped merlons
              box(p + 1, wh + 2, 1, 1, stone);
            }
            for (let p = -22; p <= 22; p += 6) {
              box(p, wh, 2, wh, lit); // the buttresses
              box(p + 1, wh, 1, wh, stone);
            }
            for (const d of [-16, -4, 8, 19]) {
              // a horseshoe door in a decorated panel, its arch of alternating red and white voussoirs
              box(d - 2, 7, 5, 1, dim);
              dome(d, 4, 2, white);
              for (const [dx, dy] of [
                [-2, 4],
                [0, 6],
                [2, 4],
                [-1, 6],
              ])
                box(d + dx, dy, 1, 1, red);
              box(d - 1, 4, 3, 4, 2);
              dome(d, 4, 1, 2);
            }
            break;
          }
          case "sagradaFamilia": {
            // Barcelona: the Sagrada Família from the Nativity side: the four spindle towers of the Nativity
            // facade with their mosaic finials and the green cypress over the portal, and behind them the tower
            // of the Virgin Mary with its star, the evangelists' towers and the tallest, Jesus Christ's, with its
            // four-armed cross (finished in 2026).
            const st = [184, 166, 132],
              stone = css(e.sh(st)),
              dim = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              holes = css(e.sh(mixc(st, [41, 40, 54], 0.55))),
              green = css(e.sh([86, 146, 92])),
              white = css(e.sh([240, 238, 230]));
            // A tapering tower: half-width k0 at the foot to 1 at the top, perforated in a spiral.
            const spindle = (cx, base, h, k0, tip) => {
              for (let j = 0; j < h; j++) {
                const k = Math.max(1, Math.round(k0 * Math.sqrt(1 - j / (h + 2)))),
                  y = base + j + 1;
                box(cx - k, y, 2 * k + 1, 1, stone);
                box(cx + k, y, 1, 1, dim);
                if (k > 1) box(cx - k, y, 1, 1, lit);
                if (j > 3 && j < h - 4 && k > 1 && j % 3 === 0)
                  box(cx - k + 1 + ((j / 3) % (2 * k - 1)), y, 1, 1, holes);
              }
              const t = base + h;
              if (tip === "cross") {
                box(cx - 1, t + 4, 3, 4, white);
                box(cx - 2, t + 6, 5, 1, white);
                box(cx, t + 7, 1, 1, white);
              } else if (tip === "star") {
                box(cx - 1, t + 3, 3, 1, white);
                box(cx, t + 4, 1, 3, white);
                box(cx, t + 3, 1, 1, 12);
              } else {
                box(cx - 1, t + 2, 3, 2, tip); // the mosaic finial
                box(cx, t + 3, 1, 1, 6);
                box(cx, t + 4, 1, 1, tip);
              }
            };
            spindle(0, 12, 46, 3, "cross"); // Jesus Christ
            spindle(-4, 12, 36, 2, "star"); // the Virgin Mary
            spindle(4, 12, 33, 2, 12); // the evangelists
            spindle(-8, 12, 30, 2, 12);
            spindle(8, 12, 30, 2, 12);
            box(-17, 13, 35, 13, stone); // the basilica
            box(17, 13, 1, 13, dim);
            for (let p = -15; p <= 15; p += 3) {
              box(p, 11, 1, 5, holes); // the tall windows
              box(p, 12, 1, 1, lit);
            }
            const front = [
              [-13, 29, 2, 10],
              [-8, 33, 2, 5],
              [8, 33, 2, 12],
              [13, 29, 2, 10],
            ];
            for (const [cx, h, k, f] of front) spindle(cx, 0, h, k, f); // the Nativity towers
            box(-5, 18, 11, 18, stone); // the Portal of Charity
            box(5, 18, 1, 18, dim);
            for (let i = 4; i < 16; i += 3) box(-4 + (i % 2), i, 1, 1, holes); // the carved grotto
            for (let i = 5; i < 16; i += 3) box(4 - (i % 2), i, 1, 1, holes);
            cone(0, 18, 3, 3, stone);
            box(-2, 11, 5, 11, holes); // the deep portal
            dome(0, 11, 2, holes);
            box(0, 8, 1, 8, lit); // the trumeau
            box(-1, 16, 3, 3, lit);
            cone(0, 19, 1, 6, green); // the cypress
            box(0, 22, 1, 1, white);
            break;
          }
          case "torreGlories": {
            // Barcelona: Torre Glòries, Jean Nouvel's bullet-shaped tower, its skin of glass louvres shading
            // from red and orange at the foot through blues to pale grey at the rounded top.
            const hw = 5,
              body = 30,
              top = 12,
              ramp = [
                [178, 58, 52],
                [206, 92, 64],
                [92, 118, 168],
                [70, 110, 176],
                [112, 150, 196],
                [190, 204, 218],
              ];
            for (let y = 1; y <= body + top; y++) {
              const f = Math.min(ramp.length - 1.001, ((y - 1) / (body + top)) * (ramp.length - 1)),
                i = Math.floor(f),
                rgb = mixc(ramp[i], ramp[i + 1], f - i),
                k = y <= body ? hw : Math.round(hw * Math.sqrt(1 - ((y - body) / (top + 1)) ** 2));
              box(-k, y, 2 * k + 1, 1, css(e.sh(rgb)));
              box(k, y, 1, 1, css(e.sh(mixc(rgb, [41, 40, 54], 0.3))));
              if (k > 1) box(-k, y, 1, 1, css(e.sh(mixc(rgb, [255, 248, 225], 0.3))));
              if (y % 2 === 0)
                for (let p = -k + 1 + ((y >> 1) & 1); p < k; p += 3)
                  box(p, y, 1, 1, css(e.sh(mixc(rgb, [255, 248, 225], 0.4)))); // the louvres
            }
            break;
          }
          case "burgosCathedral":
          case "leonCathedral": {
            // Burgos: the white Gothic west front, twin towers crowned by openwork spires, a gallery of statues
            // under a pierced balustrade, the rose window and three portals, and behind it the octagonal lantern
            // (cimborrio) with its pinnacles. León: the golden "Pulchra Leonina", two towers standing apart from
            // the front on flying arches, a great rose window of coloured glass in a pointed gable, and the deep
            // porch of three gabled portals.
            const leon = kind === "leonCathedral",
              st = leon ? [222, 192, 136] : [234, 226, 206],
              stone = css(e.sh(st)),
              dim = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              deep = css(e.sh(mixc(st, [41, 40, 54], 0.5))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              tx = leon ? 11 : 9, // the towers' centres
              th = leon ? 30 : 27, // the tower tops
              sp = leon ? 18 : 24; // the spires
            const pin = (x, y, n = 3) => {
              box(x, y + n, 1, n, stone);
              box(x, y + n + 1, 1, 1, lit);
            };
            if (!leon) {
              // the cimborrio behind the front
              box(-5, 36, 11, 8, stone);
              box(5, 36, 1, 8, dim);
              for (let p = -3; p <= 3; p += 2) box(p, 34, 1, 4, deep);
              for (const p of [-5, -2, 2, 5]) pin(p, 36, p === -5 || p === 5 ? 5 : 3);
            }
            for (const s of [-1, 1]) {
              const cx = s * tx;
              box(cx - 3, th, 7, th, stone);
              box(cx + 3, th, 1, th, dim);
              box(cx - 3, th, 1, th, lit);
              for (let i = 12; i < th - 2; i += 6) {
                box(cx - 1, i + 3, 1, 4, deep); // paired lancet windows
                box(cx + 1, i + 3, 1, 4, deep);
                box(cx - 3, i - 1, 7, 1, dim);
              }
              box(cx - 4, th + 1, 9, 1, lit); // the pierced parapet
              for (let p = cx - 4; p <= cx + 4; p += 2) box(p, th + 2, 1, 1, stone);
              // the openwork spire: a slim cone pierced by tracery, corner pinnacles at its foot
              for (let j = 0; j < sp; j++) {
                const k = Math.max(0, Math.round((leon ? 2.6 : 3.4) * (1 - j / sp)));
                box(cx - k, th + 2 + j, 2 * k + 1, 1, stone);
                if (k > 0) box(cx + k, th + 2 + j, 1, 1, dim);
                if (k > 1 && j % 3 === 1 && !leon)
                  (box(cx - 1, th + 2 + j, 1, 1, deep), box(cx + 1, th + 2 + j, 1, 1, deep));
                if (k > 0 && j % 4 === 2 && leon) box(cx, th + 2 + j, 1, 1, deep);
              }
              box(cx, th + sp + 3, 1, 2, stone);
              for (const p of [cx - 3, cx + 3]) pin(p, th, 4);
              if (leon) {
                stroke(cx - s * 4, 26, cx - s * 6, 22, stone); // the flying arch to the front
                box(cx - 1, 6, 3, 6, deep);
              } else {
                box(cx - 1, 6, 3, 6, deep); // a side portal
                dome(cx, 6, 1, deep);
              }
            }
            if (leon) {
              // the central front between the towers, set apart from them, under a pointed gable
              box(-6, 30, 13, 30, stone);
              box(6, 30, 1, 30, dim);
              cone(0, 30, 6, 7, stone);
              box(0, 39, 1, 2, lit);
              for (const p of [-6, 6]) pin(p, 30, 5);
              orb(0, 22, 4, deep); // the rose window
              orb(0, 22, 3, 7);
              for (const [dx, dy] of [
                [0, 2],
                [2, 0],
                [0, -2],
                [-2, 0],
              ])
                box(dx, 22 + dy, 1, 1, css(e.sh([196, 70, 60])));
              box(0, 22, 1, 1, 12);
              for (let p = -5; p <= 5; p += 2) box(p, 16, 1, 4, css(e.sh([86, 96, 160]))); // the stained glass
              box(-7, 11, 15, 2, lit); // the porch of three gabled portals
              for (const p of [-4, 0, 4]) {
                cone(p, 11, 2, 3, stone);
                box(p - 1, 9, 3, 9, deep);
                box(p, 10, 1, 1, deep);
              }
              box(-7, 9, 1, 9, stone);
              box(7, 9, 1, 9, dim);
            } else {
              box(-6, 28, 13, 28, stone); // the front between the towers
              box(-6, 28, 13, 1, lit);
              for (let p = -5; p <= 5; p += 2) box(p, 26, 1, 3, deep); // the gallery of the eight kings
              box(-6, 24, 13, 1, dim);
              orb(0, 18, 3, deep); // the rose window
              orb(0, 18, 2, 6);
              box(0, 18, 1, 1, deep);
              for (const p of [-2, 2]) box(p, 23, 1, 2, deep);
              box(-3, 30, 7, 2, stone); // the pierced balustrade with the Virgin
              for (let p = -2; p <= 2; p += 2) box(p, 31, 1, 1, deep);
              box(0, 32, 1, 2, lit);
              box(-2, 9, 5, 9, dim); // the main portal
              box(-1, 8, 3, 8, deep);
              cone(0, 9, 2, 3, dim);
            }
            box(-tx - 4, 1, 2 * tx + 9, 1, dim);
            break;
          }
          case "arcoSantaMaria": {
            // Burgos: the Arch of Santa María, the white stone gate into the old town: a tall front like a
            // castle's, the round arch below, an altarpiece of niches with Charles V and the city's heroes, and
            // four cylindrical turrets with merlons, the middle two rising higher round the Virgin on top.
            const st = [238, 232, 218],
              stone = css(e.sh(st)),
              dim = css(e.sh(mixc(st, [41, 40, 54], 0.22))),
              deep = css(e.sh(mixc(st, [41, 40, 54], 0.5))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.5)));
            box(-10, 21, 21, 21, stone);
            box(10, 21, 1, 21, dim);
            for (const [cx, top] of [
              [-10, 26],
              [10, 26],
              [-4, 29],
              [4, 29],
            ]) {
              box(cx - 1, top, 3, top - 8, stone); // the turrets
              box(cx + 1, top, 1, top - 8, dim);
              box(cx - 2, top + 1, 5, 1, lit);
              box(cx - 2, top + 2, 1, 1, stone);
              box(cx, top + 2, 1, 1, stone);
              box(cx + 2, top + 2, 1, 1, stone);
            }
            box(-3, 27, 7, 6, stone); // the top of the altarpiece
            box(-3, 28, 7, 1, lit);
            for (let p = -3; p <= 3; p += 2) box(p, 29, 1, 1, stone);
            box(0, 31, 1, 3, lit); // the Virgin
            box(-1, 25, 3, 3, deep); // the angel's niche
            for (let p = -8; p <= 8; p += 4) {
              box(p, 19, 1, 3, deep); // the niches with the statues
              box(p, 18, 1, 1, lit);
            }
            for (let p = -6; p <= 6; p += 4) box(p, 14, 1, 2, deep);
            box(-10, 16, 21, 1, dim);
            box(-10, 21, 21, 1, lit);
            box(-4, 11, 9, 11, lit); // the arch
            dome(0, 7, 4, lit);
            box(-3, 7, 7, 7, deep);
            dome(0, 7, 3, deep);
            break;
          }
          case "casasColgadas": {
            // Cuenca: the Hanging Houses on the edge of the limestone gorge of the Huécar, tall whitewashed
            // houses with rows of brown wooden balconies jutting out over the cliff, tiled roofs, scrub below.
            const rk = [190, 176, 150],
              rock = css(e.sh(rk)),
              rDim = css(e.sh(mixc(rk, [41, 40, 54], 0.3))),
              rDeep = css(e.sh(mixc(rk, [41, 40, 54], 0.5))),
              green = css(e.sh([92, 132, 80])),
              wall = css(e.sh([232, 222, 200])),
              wDim = css(e.sh([196, 184, 160])),
              ochre = css(e.sh([214, 170, 110])),
              wood = css(e.sh([112, 70, 44])),
              tile = css(e.sh([168, 92, 64]));
            const cliff = (x) =>
              Math.max(
                1,
                Math.round(
                  13 - Math.abs(x + 2) * 0.12 - (x > 14 ? (x - 14) * 1.5 : 0) - (x < -17 ? (-17 - x) * 2 : 0),
                ),
              );
            for (let x = -22; x <= 21; x++) {
              const h = cliff(x);
              box(x, h, 1, h, x > 0 ? rDim : rock);
              if (x % 3 === 0) box(x, h - 1, 1, h - 3, x > 0 ? rDeep : rDim); // the vertical fissures
              if (x % 2 === 0) box(x, 2 + (x & 2), 1, 2, green); // scrub at the foot
            }
            // the houses on the clifftop: [left, width, height, front colour]
            for (const [l, w, hh, col] of [
              [-19, 7, 9, wall],
              [-12, 9, 14, wall],
              [-3, 8, 12, ochre],
              [5, 9, 15, wall],
              [14, 6, 8, ochre],
            ]) {
              const b = cliff(l + (w >> 1)),
                top = b + hh;
              box(l, top, w, hh + 1, col);
              box(l + w - 1, top, 1, hh + 1, wDim);
              box(l - 1, top + 1, w + 2, 1, tile); // the eaves
              box(l, top + 2, w, 1, tile);
              for (let r = top - 2; r > b + 1; r -= 4) {
                box(l, r, w - 1, 1, wood); // a balcony's floor and rail
                box(l, r - 2, w - 1, 1, wood);
                for (let p = l + 1; p < l + w - 2; p += 2) box(p, r - 1, 1, 1, 2); // windows behind the rails
              }
            }
            break;
          }
          case "cuencaCathedral": {
            // Cuenca: the cathedral's neo-Gothic front, left unfinished: three deep pointed portals below and,
            // above, a screen of tall open arches with the sky showing through either side of the rose window,
            // pinnacles along the top.
            const st = [222, 204, 168],
              stone = css(e.sh(st)),
              dim = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              deep = css(e.sh(mixc(st, [41, 40, 54], 0.5))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.4)));
            box(-12, 12, 25, 12, stone);
            box(12, 12, 1, 12, dim);
            for (const p of [-7, 0, 7]) {
              const r = p ? 2 : 3;
              box(p - r - 1, 8, 2 * r + 3, 8, lit); // the archivolts
              cone(p, 8, r + 1, r + 2, lit);
              box(p - r, 7, 2 * r + 1, 7, deep);
              cone(p, 7, r, r + 1, deep);
              box(p, 6, 1, 6, dim); // the trumeau
            }
            // the upper screen: piers, a central part with the rose window, open pointed arches either side
            for (const p of [-12, -11, -4, -3, 3, 4, 11, 12])
              box(p, 24, 1, 12, Math.abs(p) === 4 || Math.abs(p) === 12 ? dim : stone);
            box(-3, 22, 7, 10, stone);
            orb(0, 17, 2, 2);
            box(0, 17, 1, 1, 3);
            cone(0, 22, 3, 3, stone);
            for (const s of [-1, 1]) {
              const l = s > 0 ? 5 : -10;
              for (let y = 18; y <= 24; y++) {
                const k = Math.max(0, Math.round(3 * (1 - (y - 18) / 5))); // the pointed head of the open arch
                if (k === 0) box(l, y, 6, 1, stone);
                else {
                  box(l, y, 3 - k, 1, stone);
                  box(l + 3 + k, y, 3 - k, 1, stone);
                }
              }
              box(s > 0 ? 5 : -10, 13, 6, 1, lit); // the gallery under it
              box(s > 0 ? 5 : -10, 24, 6, 1, stone);
            }
            for (const p of [-12, -4, 4, 12]) {
              box(p, 26, 1, 3, stone); // the pinnacles
              box(p, 27, 1, 1, lit);
            }
            break;
          }
          case "gironaCathedral": {
            // Girona: the cathedral at the top of its great flight of 86 steps, the tall baroque front like an
            // altarpiece with the rose window, and the bell tower on the right, finished by an octagonal stage,
            // a balustrade and a small dome with the angel.
            const st = [218, 206, 182],
              stone = css(e.sh(st)),
              dim = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              deep = css(e.sh(mixc(st, [41, 40, 54], 0.5))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.4))),
              stair = css(e.sh([196, 186, 164]));
            for (let i = 1; i <= 8; i++) {
              const k = 14 - Math.floor(i / 2);
              box(-k, i, 2 * k + 1, 1, i % 2 ? stair : dim); // the steps
            }
            box(-15, 4, 2, 4, dim); // the balustrades of the flights
            box(14, 4, 2, 4, dim);
            box(-12, 28, 17, 20, stone); // the nave's wide front
            box(4, 28, 1, 20, dim);
            box(-12, 29, 17, 1, lit);
            box(-8, 34, 9, 6, stone); // the top storey with its curved gable
            cone(-4, 34, 4, 2, stone);
            box(-4, 38, 1, 2, lit);
            box(-12, 31, 4, 2, stone); // its volutes
            box(1, 31, 4, 2, stone);
            orb(-4, 25, 2, 2); // the rose window
            orb(-4, 25, 1, 11);
            for (const p of [-10, -7, -1, 2]) box(p, 21, 1, 12, lit); // the columns of the altarpiece
            box(-12, 21, 17, 1, lit);
            box(-12, 15, 17, 1, lit);
            box(-5, 14, 3, 5, deep); // the portal
            dome(-4, 14, 1, deep);
            for (const p of [-9, 1]) box(p, 19, 1, 2, deep); // the niches
            box(6, 36, 5, 28, stone); // the bell tower
            box(10, 36, 1, 28, dim);
            for (let i = 14; i < 34; i += 6) box(8, i + 2, 1, 2, deep);
            box(5, 37, 7, 1, lit);
            box(7, 40, 3, 3, stone); // the octagonal stage
            box(8, 39, 1, 2, deep);
            box(6, 41, 5, 1, lit); // the balustrade
            dome(8, 41, 2, stone);
            box(8, 45, 1, 2, 12); // the angel
            break;
          }
          case "infantado": {
            // Guadalajara: the Palacio del Infantado, its golden stone front studded all over with diamond
            // points, a portal flanked by the wild men under the Mendoza arms, and along the top the gallery of
            // arches with its row of jutting little lookout boxes (garitones) on corbels.
            const st = [226, 204, 156],
              stone = css(e.sh(st)),
              dim = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              stud = css(e.sh(mixc(st, [41, 40, 54], 0.14))),
              deep = css(e.sh(mixc(st, [41, 40, 54], 0.55))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.45)));
            box(-16, 13, 33, 13, stone);
            box(16, 13, 1, 13, dim);
            for (let y = 2; y < 13; y += 2) for (let p = -15 + (y & 2); p < 16; p += 4) box(p, y, 1, 1, stud); // the diamond points
            for (const p of [-12, -7, 7, 12]) {
              box(p - 1, 9, 3, 1, lit); // the balconies
              box(p, 8, 1, 3, deep);
            }
            box(-3, 11, 7, 1, lit); // the coat of arms
            box(-1, 12, 3, 3, dim);
            box(-2, 7, 5, 7, lit); // the portal and its jambs (the wild men)
            box(-1, 6, 3, 6, deep);
            box(-3, 4, 1, 3, dim);
            box(3, 4, 1, 3, dim);
            box(-16, 13, 33, 1, lit);
            box(-17, 17, 35, 4, stone); // the gallery
            box(17, 17, 1, 4, dim);
            for (let p = -15; p <= 15; p += 2) box(p, 16, 1, 2, deep);
            box(-17, 18, 35, 1, lit);
            for (const p of [-14, -8, -2, 4, 10, 15]) {
              box(p - 1, 19, 3, 4, stone); // the garitones
              box(p + 1, 19, 1, 4, dim);
              box(p, 18, 1, 1, deep);
              box(p, 15, 1, 1, dim); // the corbel
            }
            break;
          }
          case "huescaCathedral": {
            // Huesca: the Gothic cathedral, its deep pointed portal sheltered by a wide wooden mudéjar eave,
            // the gable above with the rose window and pinnacles, and the tall plain square tower on the left
            // with its octagonal top.
            const st = [214, 186, 136],
              stone = css(e.sh(st)),
              dim = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              deep = css(e.sh(mixc(st, [41, 40, 54], 0.5))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.4))),
              wood = css(e.sh([120, 76, 48]));
            box(-14, 29, 9, 29, stone); // the tower
            box(-6, 29, 1, 29, dim);
            box(-14, 29, 1, 29, lit);
            for (const y of [14, 21, 27]) {
              box(-10, y, 1, 3, deep); // the arched windows
              box(-11, y - 1, 3, 2, deep);
            }
            box(-15, 30, 11, 1, lit);
            box(-13, 34, 7, 4, stone); // the octagonal top
            box(-7, 34, 1, 4, dim);
            box(-11, 33, 3, 2, deep);
            box(-12, 35, 5, 1, lit);
            box(-5, 21, 17, 21, stone); // the front
            box(11, 21, 1, 21, dim);
            cone(3, 21, 6, 5, stone); // the gable
            orb(3, 23, 1, 2);
            for (const p of [-5, -1, 7, 11]) {
              box(p, 25 + (Math.abs(p - 3) < 6 ? 3 : 0), 1, 6, stone); // the pinnacles
              box(p, 26 + (Math.abs(p - 3) < 6 ? 3 : 0), 1, 1, lit);
            }
            for (let p = -3; p <= 9; p += 2) box(p, 18, 1, 3, deep); // the gallery of tracery
            box(-6, 15, 19, 2, wood); // the wooden eave over the portal
            box(-5, 13, 17, 1, css(e.sh([86, 54, 38])));
            for (let r = 5; r >= 3; r--) cone(3, 12 - 2 * (5 - r), r, r + 1, r % 2 ? lit : dim); // the archivolts
            box(-2, 12, 11, 12, lit);
            box(-1, 10, 9, 10, dim);
            box(0, 9, 7, 9, deep);
            cone(3, 9, 3, 3, deep);
            box(3, 8, 1, 8, dim);
            break;
          }
          case "puertaToledoCR": {
            // Ciudad Real: the Puerta de Toledo, the last of the city's gates, a tall block of ashlar between two
            // slightly projecting towers, an outer pointed arch with an inner horseshoe arch behind it.
            const st = [212, 194, 156],
              stone = css(e.sh(st)),
              dim = css(e.sh(mixc(st, [41, 40, 54], 0.22))),
              deep = css(e.sh(mixc(st, [41, 40, 54], 0.55))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.4)));
            box(-10, 18, 21, 18, stone);
            for (const s of [-1, 1]) {
              box(s * 8 - 2, 20, 5, 20, stone); // the towers
              box(s * 8 + 2, 20, 1, 20, dim);
              box(s * 8 - 2, 20, 1, 20, lit);
            }
            for (let y = 3; y < 18; y += 3)
              for (let p = -5 + (y & 1) * 2; p < 6; p += 4) box(p, y, 2, 1, dim); // the ashlar
            box(-4, 15, 9, 15, dim); // the recess round the arches
            box(-3, 12, 7, 12, stone);
            cone(0, 12, 3, 4, stone);
            box(-2, 11, 5, 11, deep); // the outer pointed arch
            cone(0, 11, 2, 3, deep);
            box(-2, 8, 5, 2, lit); // the inner horseshoe arch
            dome(0, 7, 2, lit);
            box(-1, 7, 3, 7, css(e.sh([150, 186, 220]))); // the street beyond
            dome(0, 7, 1, css(e.sh([150, 186, 220])));
            break;
          }
          case "ceutaWalls": {
            // Ceuta: the Royal Walls, the great sloping Portuguese bastions on either side of the navigable
            // moat that cuts the isthmus, a flag on the tallest one, the sea water between them.
            const st = [200, 190, 166],
              stone = css(e.sh(st)),
              dim = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.4))),
              sea = css(e.sh([52, 120, 128])),
              foam = css(e.sh([150, 200, 196]));
            for (let y = 1; y <= 15; y++) {
              const k = Math.round((15 - y) * 0.25); // the sloping face of the left bastion
              box(-17, y, 13 - k, 1, stone);
              box(-5 - k, y, 1, 1, dim);
              if (y % 3 === 0) box(-15, y, 9 - k, 1, css(e.sh(mixc(st, [41, 40, 54], 0.12))));
            }
            box(-17, 16, 13, 1, lit);
            box(-12, 20, 1, 4, 2); // the flag
            box(-11, 20, 3, 2, 10);
            box(-11, 19, 3, 1, 3);
            for (let y = 1; y <= 11; y++) {
              const k = Math.round((11 - y) * 0.25);
              box(4 + k, y, 13 - k, 1, y % 3 === 0 ? css(e.sh(mixc(st, [41, 40, 54], 0.12))) : stone);
              box(4 + k, y, 1, 1, lit);
            }
            for (const p of [6, 10, 14]) box(p, 12, 1, 1, stone);
            box(4, 12, 13, 1, lit);
            box(-6, 3, 12, 3, sea); // the moat
            box(-3, 3, 4, 1, foam);
            box(-2, 4, 3, 1, 6); // a boat
            break;
          }
          case "bujaco": {
            // Cáceres: the Bujaco Tower in the Plaza Mayor, the square Almohad tower of the walls with its
            // merlons and a hanging lookout box, and beside it the little Hermitage of La Paz with its arched
            // porch and the steps up to the Arco de la Estrella.
            const st = [196, 170, 128],
              stone = css(e.sh(st)),
              dim = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              deep = css(e.sh(mixc(st, [41, 40, 54], 0.55))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              tile = css(e.sh([166, 92, 64]));
            box(-12, 22, 11, 22, stone); // the tower
            box(-2, 22, 1, 22, dim);
            box(-12, 22, 1, 22, lit);
            for (let y = 3; y < 20; y += 3) box(-11 + (y & 2), y, 1, 1, dim); // the rubble courses
            box(-8, 14, 1, 2, deep);
            box(-5, 8, 1, 2, deep);
            for (let p = -12; p <= -2; p += 2) box(p, 24, 1, 2, stone); // the merlons
            box(-12, 22, 11, 1, dim);
            box(-9, 21, 5, 3, stone); // the lookout box
            box(-5, 21, 1, 3, dim);
            for (const p of [-9, -7, -5]) box(p, 18, 1, 1, deep);
            box(-1, 10, 13, 10, stone); // the hermitage
            box(11, 10, 1, 10, dim);
            cone(5, 10, 7, 3, tile);
            box(4, 15, 3, 3, stone); // its bell gable
            box(5, 14, 1, 1, deep);
            for (const p of [1, 5, 9]) {
              box(p - 1, 6, 3, 6, deep); // the porch arches
              dome(p, 6, 1, deep);
            }
            box(-1, 8, 13, 1, lit);
            box(-1, 1, 13, 1, dim);
            break;
          }
          case "pasajeLodares": {
            // Albacete: the Pasaje de Lodares, an iron-and-glass gallery between two richly decorated modernist
            // fronts, seen from its entrance: arched shops, balconies on columns, and the glass gable roof.
            const st = [232, 214, 172],
              stone = css(e.sh(st)),
              dim = css(e.sh(mixc(st, [41, 40, 54], 0.22))),
              deep = css(e.sh(mixc(st, [41, 40, 54], 0.55))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.5))),
              glass = css(e.sh([150, 190, 206])),
              iron = css(e.sh([88, 96, 108]));
            for (let j = 0; j < 6; j++) {
              box(-5 + j, 20 + j, 11 - 2 * j, 1, glass); // the glass gable
              box(-5 + j, 20 + j, 1, 1, iron);
              box(5 - j, 20 + j, 1, 1, iron);
            }
            for (const p of [-2, 0, 2]) box(p, 22 - Math.abs(p) / 2, 1, 2, iron); // its ribs
            box(-4, 18, 9, 18, deep); // the gallery's long view
            box(-2, 14, 5, 12, dim);
            box(-1, 10, 3, 9, css(e.sh([180, 168, 140])));
            for (const s of [-1, 1]) {
              const l = s < 0 ? -13 : 5;
              box(l, 19, 9, 19, stone); // the fronts
              box(l + 8, 19, 1, 19, dim);
              box(l - (s < 0 ? 1 : 0), 20, 10, 1, lit); // the cornice
              for (let y = 15; y > 4; y -= 5)
                for (let p = l + 1; p < l + 8; p += 3) {
                  box(p, y, 2, 3, deep); // windows and balconies
                  box(p - 1 + (s > 0 ? 1 : 0), y - 3, 3, 1, iron);
                }
              for (let p = l + 1; p < l + 8; p += 3) {
                box(p, 3, 2, 3, deep); // the arched shop fronts
                dome(p + 0.5, 3, 1, deep);
              }
              box(s < 0 ? -5 : 4, 18, 1, 18, lit); // the columns at the entrance
            }
            box(0, 27, 1, 2, 12); // the crest
            break;
          }
          case "feDescubridora": {
            // Huelva: the Monument to the Faith of the Discoverers (Gertrude Whitney, 1929) at Punta del Sebo, a
            // blocky robed friar with a hood, his hands resting on a tau cross, on a tall stepped cubist pedestal.
            const st = [222, 214, 196],
              stone = css(e.sh(st)),
              dim = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              deep = css(e.sh(mixc(st, [41, 40, 54], 0.45))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.45)));
            box(-10, 2, 21, 2, dim); // the steps
            box(-9, 3, 19, 1, stone);
            box(-7, 13, 15, 10, stone); // the pedestal
            box(4, 13, 4, 10, dim);
            box(-7, 13, 15, 1, lit);
            box(-2, 10, 5, 3, deep); // the plaque
            box(-5, 16, 11, 3, stone); // the upper step
            box(4, 16, 2, 3, dim);
            for (let y = 17; y <= 30; y++) {
              const k = Math.round(4 - (y - 17) * 0.12); // the robe, narrowing upwards
              box(-k, y, 2 * k + 1, 1, stone);
              box(k - 1, y, 2, 1, dim);
              if (y < 26 && y % 4 === 1) box(-k + 1, y, 1, 1, lit); // the folds
            }
            box(-1, 28, 3, 1, lit); // the tau cross under the hands
            box(0, 27, 1, 6, lit);
            box(-2, 33, 5, 3, stone); // the hood
            box(2, 33, 1, 3, dim);
            box(-1, 31, 2, 1, deep); // the face in its shadow
            box(-1, 34, 3, 1, stone);
            break;
          }
          case "muelleTinto": {
            // Huelva: the Muelle del Tinto, the Rio Tinto Company's iron ore pier (1876), a long two-level deck on
            // slender iron legs with cross bracing, the lattice girders of the upper loading deck, on the river.
            const ir = [104, 78, 66],
              iron = css(e.sh(ir)),
              dim = css(e.sh(mixc(ir, [41, 40, 54], 0.35))),
              lit = css(e.sh(mixc(ir, [255, 248, 225], 0.25))),
              wood = css(e.sh([176, 160, 132])),
              water = css(e.sh([86, 132, 150])),
              shine = css(e.sh([150, 186, 196]));
            box(-25, 2, 51, 2, water);
            for (let p = -23; p <= 23; p += 6) box(p, 2, 3, 1, shine);
            for (let p = -24; p <= 24; p += 3) {
              box(p, 8, 1, 7, iron); // the legs
              if (p < 24) stroke(p, 3, p + 3, 6, dim); // the bracing
            }
            box(-25, 4, 51, 1, wood); // the lower deck
            box(-25, 5, 51, 1, iron);
            box(-25, 8, 51, 1, iron); // the upper deck
            box(-25, 9, 51, 1, lit);
            for (let p = -24; p < 24; p += 4) {
              stroke(p, 9, p + 2, 12, iron); // the lattice girders
              stroke(p + 2, 12, p + 4, 9, iron);
            }
            box(-25, 12, 51, 1, iron);
            for (const p of [-25, 24]) box(p, 14, 2, 6, dim); // the portal frames at the ends
            break;
          }
