          case "jpCastle": {
            // Japanese castles (Toyama, Tsu, Wakayama, Sunpu, Utsunomiya, Yamagata's gate), drawn from a table
            // per building (o.v): a sloped stone base (ishigaki) or a grassy earth bank, white keeps whose
            // storeys carry curled tiled eaves, triangular (chidori) and curved (kara) gables, a hipped top
            // roof with golden shachi on the ridge, low white walls with their own little roofs, and gates.
            // Parts: ["stone", l, r, h] | ["bank", l, r, h] | ["wall", l, r, base, h]
            // | ["keep", cx, base, [[w, h, gables], ...]] with gables 1 chidori, 2 kara, 3 two chidori
            // | ["gate", cx, w, h] a dark gateway with doors through the stone below a keep.
            const B = {
              toyama: [
                ["stone", 8, 14, 6],
                ["keep", -10, 0, [[9, 5, 0]]],
                [
                  "keep",
                  8,
                  0,
                  [
                    [11, 6, 1],
                    [7, 4, 0],
                  ],
                ],
                [
                  "keep",
                  -3,
                  0,
                  [
                    [13, 6, 1],
                    [11, 4, 2],
                    [7, 4, 0],
                  ],
                ],
              ],
              tsu: [
                ["stone", -12, 12, 6],
                ["wall", -12, -8, 6, 3],
                [
                  "keep",
                  1,
                  6,
                  [
                    [15, 4, 1],
                    [11, 4, 2],
                    [7, 3, 0],
                  ],
                ],
              ],
              wakayama: [
                ["stone", -11, 11, 7],
                [
                  "keep",
                  8,
                  7,
                  [
                    [9, 4, 0],
                    [5, 3, 0],
                  ],
                ],
                [
                  "keep",
                  -2,
                  7,
                  [
                    [13, 4, 1],
                    [11, 4, 2],
                    [7, 3, 0],
                  ],
                ],
              ],
              sunpu: [
                ["stone", -13, 4, 9],
                ["stone", 5, 13, 5],
                ["wall", 4, 13, 5, 2],
                ["keep", 9, 5, [[7, 4, 0]]],
                [
                  "keep",
                  -4,
                  9,
                  [
                    [17, 5, 1],
                    [13, 4, 3],
                  ],
                ],
              ],
              utsunomiya: [
                ["bank", -9, 9, 7],
                ["wall", -9, 9, 7, 3],
                [
                  "keep",
                  0,
                  7,
                  [
                    [11, 5, 0],
                    [7, 4, 0],
                  ],
                ],
              ],
              otemon: [
                ["stone", -13, -4, 7],
                ["stone", 4, 13, 7],
                ["keep", 0, 7, [[25, 5, 0]]],
                ["gate", 0, 7, 7],
              ],
            }[o.v ?? "tsu"];
            const roofRGB = o.v === "wakayama" ? [96, 140, 126] : [70, 72, 84],
              tile = css(e.sh(roofRGB)),
              tileDark = css(e.sh(mixc(roofRGB, [41, 40, 54], 0.4))),
              wall = css(e.sh([242, 238, 228])),
              wallSh = css(e.sh([206, 204, 200])),
              stone = css(e.sh([154, 150, 140])),
              joint = css(e.sh([118, 114, 108])),
              grass = css(e.sh([108, 142, 84])),
              grassDark = css(e.sh([84, 116, 68])),
              wood = css(e.sh([88, 66, 52]));
            const roof = (cx, b, hw, top) => {
              // the eave at row b with its flared tips, the shadow under it, and the slope above
              box(cx - hw, b - 1, 2 * hw + 1, 1, tileDark);
              box(cx - hw - 1, b, 2 * hw + 3, 1, tile);
              for (const s of [-1, 1]) box(cx + s * (hw + 2), b + 1, 1, 1, tile);
              box(cx - hw, b + 1, 2 * hw + 1, 1, tile);
              if (!top) return box(cx - hw + 1, b + 2, 2 * hw - 1, 1, tile);
              let k = hw - 1,
                r = b + 2;
              for (; k > 2; k -= 2, r++) box(cx - k, r, 2 * k + 1, 1, tile);
              box(cx - k - 1, r, 2 * k + 3, 1, tileDark); // the ridge
              for (const s of [-1, 1]) box(cx + s * (k + 1), r + 2, 1, 2, 3); // the shachi
              if (hw >= 4) {
                // the gable end of the hipped-and-gabled top: a white triangle under dark bargeboards
                box(cx - 2, b + 2, 5, 1, tileDark);
                box(cx - 1, b + 2, 3, 1, wall);
                box(cx - 1, b + 3, 3, 1, tileDark);
                box(cx, b + 3, 1, 1, wall);
              }
            };
            const gable = (cx, b, type) => {
              if (type === 2) {
                // kara-hafu: a curved, bell-shaped gable over the eave, white inside its arch
                box(cx - 4, b + 1, 9, 1, tile);
                for (const s of [-1, 1]) box(cx + s * 5, b + 1, 1, 1, tileDark); // the flared ends
                box(cx - 3, b + 2, 7, 1, tile);
                box(cx - 2, b + 3, 5, 1, tile);
                box(cx - 2, b + 1, 5, 1, wall);
                box(cx - 1, b + 2, 3, 1, wall);
                return;
              }
              for (const p of type === 3 ? [cx - 3, cx + 3] : [cx]) {
                // chidori-hafu: a triangular gable on the roof slope
                box(p - 3, b + 1, 7, 1, tile);
                box(p - 2, b + 2, 5, 1, tile);
                box(p - 1, b + 3, 3, 1, tile);
                box(p, b + 4, 1, 1, tile);
                box(p - 2, b + 1, 5, 1, wall);
                box(p - 1, b + 2, 3, 1, wall);
                box(p, b + 2, 1, 1, wallSh);
              }
            };
            for (const [t, a, bb, cc, dd] of B) {
              if (t === "stone") {
                // concave sloped stones, wider at the foot, with staggered joints
                for (let i = 1; i <= cc; i++) {
                  const k = Math.round(((cc - i) / cc) ** 2 * 2);
                  box(a - k, i, bb - a + 1 + 2 * k, 1, stone);
                  if (i % 2 === 0)
                    for (let p = a - k + 1 + (i % 4 ? 0 : 2); p < bb + k; p += 4) box(p, i, 1, 1, joint);
                }
                box(bb, cc, 1, cc, joint);
              } else if (t === "bank") {
                for (let i = 1; i <= cc; i++) {
                  const k = Math.round((cc - i) * 0.7);
                  box(a - k, i, bb - a + 1 + 2 * k, 1, i % 3 ? grass : grassDark);
                }
              } else if (t === "wall") {
                // a low white wall (dobei) under its tiled cap
                box(a, cc + dd, bb - a + 1, dd, wall);
                box(a, cc + 1, bb - a + 1, 1, wallSh);
                box(a - 1, cc + dd + 1, bb - a + 3, 1, tile);
              } else if (t === "gate") {
                const k = Math.floor(bb / 2);
                box(a - k, cc, bb, cc, wood);
                box(a - k + 1, cc - 1, bb - 2, cc - 1, 2);
                box(a, cc - 2, 1, cc - 2, wood); // the meeting of the two doors
                for (let i = 2; i < cc - 1; i += 2) box(a - k + 1, i, bb - 2, 1, wood); // their iron bands
              } else if (t === "keep") {
                const cx = a,
                  gables = [];
                let b = bb;
                cc.forEach(([w, h, gt], i) => {
                  const hw = Math.floor(w / 2);
                  box(cx - hw, b + h, w, h, wall);
                  box(cx + hw, b + h, 1, h, wallSh);
                  for (let p = cx - hw + 2; p < cx + hw - 1; p += 3) box(p, b + h - 1, 1, 2, 2); // the windows
                  if (h >= 6) box(cx - hw, b + 2, w, 1, wallSh); // the stone-dropping ledge
                  const top = i === cc.length - 1;
                  roof(cx, b + h + 1, hw + 1, top);
                  if (gt) gables.push([cx, b + h + 1, gt]);
                  b += h + 3;
                });
                for (const [gx, gb, gt] of gables) gable(gx, gb, gt);
              }
            }
            break;
          }
          case "sendaiKannon": {
            // Sendai Daikannon: a 100 m white Kannon standing on the hills, a slim robed woman with a jewelled
            // crown and long hair over her shoulders, a wish-granting jewel held at her chest in the right hand
            // and a water vase hanging in the left, on a low round base.
            const { B, S, H, T } = sculpture(6, 3);
            box(-6, 3, 13, 3, B); // the base hall
            box(3, 3, 4, 3, S);
            box(-5, 4, 11, 1, H);
            box(-5, 7, 11, 3, B); // the hem of the robe, spreading on the base
            box(-4, 25, 9, 18, B); // the robe
            box(2, 25, 3, 21, S);
            box(-4, 24, 1, 16, H);
            for (const p of [-2, 0]) box(p, 20, 1, 12, H); // the long folds
            box(1, 18, 1, 9, S);
            box(-5, 29, 11, 4, B); // the shoulders and the long sleeves
            box(-6, 26, 2, 11, B); // the right sleeve hanging
            box(5, 26, 2, 13, B); // the left sleeve
            box(6, 26, 1, 13, S);
            box(-6, 26, 1, 11, H);
            box(-3, 25, 4, 2, H); // the right forearm across the chest
            orb(-1, 27, 1, T); // the jewel
            box(6, 13, 2, 3, B); // the vase in the left hand
            box(6, 14, 1, 1, T);
            box(-3, 30, 7, 1, S); // the necklace's shadow
            box(-3, 35, 7, 5, B); // the hair falling over the shoulders
            box(-2, 36, 5, 6, B); // the head
            box(2, 36, 1, 6, S);
            box(-1, 33, 3, 2, H); // the face
            box(-2, 38, 5, 2, T); // the crown's band
            box(-1, 40, 3, 2, B); // the topknot with its little figure
            box(0, 42, 1, 2, H);
            break;
          }
          case "sengenShrine": {
            // Shizuoka Sengen Shrine: the vermilion two-storey Ōhaiden with its dark copper roofs, a curved
            // kara-hafu porch over the steps, a railed upper storey and a gabled top roof, on a stone terrace.
            const red = css(e.sh([206, 66, 50])),
              redDark = css(e.sh([150, 46, 40])),
              roof = css(e.sh([84, 92, 96])),
              roofDark = css(e.sh([54, 58, 66])),
              gold = 12;
            box(-11, 2, 23, 2, 13); // the terrace
            box(-10, 3, 21, 1, chLit(13, 0.3));
            box(-9, 8, 19, 6, red); // the hall
            box(8, 8, 2, 6, redDark);
            for (let p = -8; p <= 7; p += 3) box(p + 1, 7, 2, 4, 2); // latticed doors between the posts
            box(-9, 8, 19, 1, 6);
            box(-9, 4, 19, 1, redDark); // the railing at its foot
            box(-10, 9, 21, 1, roofDark); // the brackets' shadow
            box(-12, 10, 25, 1, roof); // the wide lower roof, its ends sweeping up
            for (const s of [-13, 13]) box(s, 11, 1, 1, roof);
            box(-11, 11, 23, 1, roof);
            box(-9, 12, 19, 1, roof);
            box(-4, 11, 9, 1, roof); // the kara-hafu porch
            box(-3, 12, 7, 1, roof);
            box(-2, 13, 5, 1, roof);
            box(-2, 11, 5, 1, gold);
            box(-1, 12, 3, 1, 6);
            box(-5, 16, 11, 3, red); // the upper storey
            box(4, 16, 2, 3, redDark);
            for (const p of [-3, 0, 3]) box(p, 15, 1, 2, 2);
            box(-6, 13, 13, 1, redDark); // its railed balcony
            for (let p = -6; p <= 6; p += 2) box(p, 14, 1, 1, red);
            box(-6, 17, 13, 1, roofDark);
            box(-8, 18, 17, 1, roof); // the upper roof
            for (const s of [-9, 9]) box(s, 19, 1, 1, roof);
            box(-7, 19, 15, 1, roof);
            box(-5, 20, 11, 1, roof);
            box(-1, 20, 3, 1, 6); // the gable's white face
            box(-3, 21, 7, 1, roof);
            box(-4, 22, 9, 1, roofDark); // the ridge with its gold end ornaments
            for (const s of [-4, 4]) box(s, 23, 1, 1, gold);
            break;
          }
          case "takamatsuSymbol": {
            // Takamatsu Symbol Tower (Sunport): a slim slab of gold-tinted glass with a cool blue glass strip
            // down one edge and a darker crown, beside the round glass hall with its open ribbed basket on top.
            const gold = css(e.sh([176, 150, 104])),
              goldLit = css(e.sh([214, 196, 150])),
              blue = css(e.sh([128, 150, 176])),
              blueDark = css(e.sh([92, 110, 136])),
              rib = css(e.sh([222, 226, 230])),
              glass = css(e.sh([150, 172, 186]));
            box(-4, 50, 6, 50, gold);
            box(-4, 50, 1, 50, goldLit);
            box(2, 51, 3, 51, blue); // the blue edge stands a little taller
            box(4, 51, 1, 51, blueDark);
            for (let i = 6; i < 48; i += 3) box(-3, i, 5, 1, chShade(0, 0.25)); // the floors
            box(-4, 12, 9, 12, blueDark); // the glass podium
            for (let p = -3; p <= 4; p += 2) box(p, 11, 1, 9, blue);
            box(-4, 50, 6, 2, chShade(0, 0.4)); // the crown
            box(0, 54, 1, 3, 8);
            // the round glass hall, its ribbed basket flaring out on top
            box(3, 13, 5, 13, glass);
            for (const p of [4, 6]) box(p, 13, 1, 12, rib);
            box(2, 15, 7, 1, rib);
            box(1, 17, 8, 1, rib);
            for (const p of [2, 5, 8]) box(p, 16, 1, 1, rib);
            break;
          }
          case "bizan": {
            // Mount Bizan (Tokushima): a broad forested hill shaped like an eyebrow, its summit crowned by TV
            // masts, the white Peace Memorial Pagoda and the upper station of the ropeway that climbs from town.
            const W = 22,
              green = css(e.sh([82, 136, 76])),
              dark = css(e.sh([58, 104, 60])),
              lit = css(e.sh([118, 166, 96]));
            const hgt = (x) =>
              Math.round(
                21 * Math.max(0, Math.cos(((x + 1) / (x < -1 ? 23 : 22)) * 1.56)) ** 0.8 +
                  (x > 6 && x < 14 ? 1 : 0),
              );
            for (let x = -W; x <= W; x++) {
              const h = Math.max(1, hgt(x));
              box(x, h, 1, h, green);
              box(x, h, 1, 1, x < -1 ? lit : green);
              for (let j = ((x * 5) & 3) + 2; j < h - 1; j += 4) box(x, h - j, 1, 1, dark); // the trees' shadows
            }
            const s = hgt(0);
            // the masts on the summit
            for (const [p, mh] of [
              [-3, 7],
              [2, 6],
              [5, 4],
            ]) {
              box(p, s + mh, 1, mh, 8);
              box(p, s + mh - 2, 1, 1, 10);
            }
            box(-1, s + 3, 3, 3, 6); // the pagoda
            box(0, s + 5, 1, 2, 6);
            box(-1, s + 3, 3, 1, 13);
            box(3, s + 1, 4, 2, 13); // the ropeway station
            stroke(5, s, 19, 3, 2); // the cable
            break;
          }
          case "jinpukaku": {
            // Jinpūkaku (Tottori, 1907): a white French Renaissance villa, both floors wrapped in verandas of
            // slim columns and arches under pale blue-grey trim, a grey hipped roof with dormers and red brick
            // chimneys, a railed lookout on the ridge and a projecting bay with a balcony at its right.
            const white = css(e.sh([240, 240, 234])),
              shade = css(e.sh([200, 204, 206])),
              trim = css(e.sh([150, 172, 186])),
              roof = css(e.sh([104, 110, 124])),
              brick = css(e.sh([150, 82, 70]));
            box(-14, 2, 29, 2, 13);
            box(-13, 15, 27, 13, white);
            box(12, 15, 2, 13, shade);
            for (const r of [4, 10]) {
              // each floor's veranda: dark openings between slim columns, the arches' trim above
              for (let p = -12; p <= 11; p += 3) box(p, r + 3, 2, 4, 2);
              box(-13, r + 4, 27, 1, trim);
            }
            box(-13, 9, 27, 1, trim); // the balcony rail between the floors
            for (let p = -13; p <= 13; p += 2) box(p, 8, 1, 1, white);
            box(5, 17, 7, 17, white); // the projecting bay on the right
            box(5, 17, 7, 1, trim);
            box(11, 17, 1, 15, shade);
            for (const r of [6, 12]) box(7, r + 1, 3, 3, 11);
            box(-14, 16, 29, 1, trim); // the cornice
            box(-12, 17, 25, 1, roof);
            box(-11, 18, 23, 1, roof);
            box(-9, 19, 19, 1, roof);
            for (const p of [-7, 0, 7]) box(p, 18, 1, 1, white); // dormers
            box(-3, 21, 7, 2, trim); // the railed lookout
            for (const p of [-3, -1, 1, 3]) box(p, 22, 1, 1, white);
            box(-6, 21, 2, 3, brick); // the chimneys
            box(5, 21, 2, 3, brick);
            box(-4, 4, 3, 4, 2); // the front door
            break;
          }
          case "futarayama": {
            // Futarayama Shrine (Utsunomiya): a great grey torii at the foot of the long stone stairway that
            // climbs the shrine's wooded hill to the vermilion gate and the hall under dark roofs at the top.
            const stone = css(e.sh([150, 148, 140])),
              stoneDark = css(e.sh([110, 108, 104])),
              tree = css(e.sh([70, 112, 70])),
              treeLit = css(e.sh([96, 140, 84])),
              red = css(e.sh([200, 64, 50])),
              roof = css(e.sh([64, 66, 78]));
            for (let i = 1; i <= 9; i++) {
              const k = 11 - Math.round(i * 0.5);
              box(-k, i, 2 * k + 1, 1, i % 2 ? tree : treeLit); // the wooded hill
            }
            for (let i = 1; i <= 9; i++) box(-2, i, 5, 1, i % 2 ? stone : stoneDark); // the stairs
            box(-5, 14, 11, 5, red); // the gate and hall at the top
            box(-4, 13, 9, 3, 2);
            box(-1, 12, 3, 3, red);
            box(-7, 15, 15, 1, roof);
            box(-6, 16, 13, 1, roof);
            box(-4, 17, 9, 1, roof);
            for (const s of [-8, 8]) box(s, 16, 1, 1, roof);
            // the torii in front
            for (const s of [-6, 6]) {
              box(s - 1, 14, 2, 14, stone);
              box(s, 14, 1, 14, stoneDark);
            }
            box(-8, 11, 17, 1, stone); // the tie beam
            box(-9, 15, 19, 2, stone); // the lintel, curving up at its ends
            box(-9, 14, 19, 1, stoneDark);
            for (const s of [-10, 10]) box(s, 16, 1, 1, stone);
            box(-1, 13, 3, 2, stoneDark); // the plaque
            break;
          }
          case "bunshokan": {
            // Bunshōkan (Yamagata, 1916): the old prefectural office in English Renaissance style, red brick
            // banded with white stone, tall white-framed windows, a grey slate roof with dormers, and the central
            // clock tower with its white clock stage and grey domed cap.
            const brick = css(e.sh([164, 84, 64])),
              brickDark = css(e.sh([128, 64, 54])),
              white = css(e.sh([232, 226, 214])),
              slate = css(e.sh([96, 104, 116]));
            box(-14, 14, 29, 14, brick);
            box(12, 14, 3, 14, brickDark);
            for (const r of [1, 6, 7, 13, 14]) box(-14, r, 29, 1, white);
            for (const r of [4, 11])
              for (let p = -12; p <= 12; p += 3) {
                box(p, r, 1, 3, 2);
                box(p, r + 1, 1, 1, white);
              }
            box(-4, 16, 9, 16, brick); // the central pavilion
            box(-4, 16, 9, 1, white);
            box(-1, 4, 3, 4, 2);
            box(-15, 15, 31, 1, slate);
            box(-13, 16, 27, 1, slate);
            box(-11, 17, 23, 1, slate);
            for (const p of [-9, -6, 6, 9]) box(p, 17, 1, 1, white); // dormers
            box(-2, 26, 5, 10, white); // the clock tower
            box(2, 26, 1, 10, chShade(6, 0.25));
            box(-2, 21, 5, 1, brick);
            orb(0, 23, 1.5, 2);
            orb(0, 23, 0.6, 6);
            box(-3, 27, 7, 1, slate);
            dome(0, 27, 3, slate);
            box(0, 33, 1, 3, 8);
            break;
          }
          case "rurikoPagoda": {
            // Rurikō-ji's five-storey pagoda (Yamaguchi, 1442): unpainted dark timber with white plaster between
            // the posts, five deep cypress-bark roofs of almost the same width, thin and gently curved, and a tall
            // bronze spire (sōrin) with nine rings on top.
            const wood = css(e.sh([112, 76, 56])),
              bark = css(e.sh([96, 66, 52])),
              barkLit = css(e.sh([140, 104, 80])),
              plaster = css(e.sh([226, 218, 200]));
            box(-6, 2, 13, 2, 13);
            for (let s = 0; s < 5; s++) {
              const b = 2 + s * 4,
                bw = 7 - (s > 2 ? 2 : 0),
                eh = 9 - Math.floor(s / 2);
              box(-(bw - 1) / 2, b + 3, bw, 3, wood);
              for (const p of bw > 5 ? [-2, 2] : [-1, 1]) box(p, b + 2, 1, 2, plaster);
              box(-eh + 1, b + 3, 2 * eh - 1, 1, chShade(2, 0.2)); // the brackets
              box(-eh, b + 4, 2 * eh + 1, 1, bark);
              box(-eh + 2, b + 5, 2 * eh - 3, 1, barkLit);
              for (const p of [-eh - 1, eh + 1]) box(p, b + 5, 1, 1, bark); // the lifted corners
            }
            box(0, 34, 1, 12, 12); // the sōrin
            for (let r = 26; r <= 33; r += 2) box(-1, r, 3, 1, 12);
            box(0, 36, 1, 2, 3);
            break;
          }
          case "landmarkTower": {
            // Yokohama Landmark Tower: a granite-grey tower tapering as it rises, its faces banded with window
            // strips, the upper floors split by tall dark glass recesses and a stepped, notched crown.
            const grey = css(e.sh([214, 212, 204])),
              shade = css(e.sh([170, 170, 168])),
              glass = css(e.sh([110, 126, 140]));
            for (let i = 1; i <= 46; i++) {
              const k = 5 - Math.floor(i / 14);
              box(-k, i, 2 * k + 1, 1, i % 2 ? grey : chShade(6, 0.18));
              box(k, i, 1, 1, shade);
            }
            box(-6, 5, 13, 5, grey); // the podium
            box(-6, 3, 13, 1, glass);
            for (const p of [-2, 1]) box(p, 44, 2, 9, glass); // the recesses up the crown
            box(-2, 49, 5, 3, grey); // the notched top
            box(-3, 47, 7, 1, grey);
            box(0, 52, 1, 3, shade);
            break;
          }
          case "cosmoClock": {
            // Cosmo Clock 21 (Yokohama): a giant Ferris wheel whose hub carries a digital clock, its rim
            // studded with lights, on two white trussed A-frames rising from the amusement-park station.
            const r = 15,
              hub = r + 3,
              white = css(e.sh([230, 232, 236])),
              grey = css(e.sh([170, 174, 182]));
            for (const p of [-1, 1]) {
              box(p * 8 - 1, 1, 3, 1, 8);
              stroke(p * 8, 0, 0, hub, 6);
              stroke(p * 9, 0, p, hub, 6);
              for (let j = 3; j < hub - 2; j += 4) {
                const a = Math.round(8 * (1 - j / hub)),
                  b = Math.round(8 * (1 - (j + 2) / hub));
                stroke(p * a, j, p * (b + 1), j + 2, 8); // the truss
              }
            }
            box(-6, 4, 13, 4, grey); // the station
            box(-5, 3, 11, 1, 2);
            g.fillStyle = white;
            ring(g, X(0), Y(hub), R(r));
            ring(g, X(0), Y(hub), R(r - 1));
            box(-2, hub + 1, 5, 3, 2); // the clock
            box(-1, hub, 3, 1, 4);
            e.wheels?.push({
              x: X(0),
              y: Y(hub),
              r: R(r - 1),
              cr: R(r),
              spokes: 12,
              caps: 24,
              spoke: grey,
              cap: ink[10],
            });
            break;
          }
