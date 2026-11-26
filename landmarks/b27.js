          case "jpKeep": {
            // A Japanese castle keep (tenshu), reused by the b27 castles (Osaka, Nagoya, Kumamoto, Matsue...):
            // a curved stone base (ishigaki, o.base rows; o.hill puts it on a wooded hill), o.n storeys o.w wide
            // narrowing by o.dw, each o.th tall with white plaster or, for the lower o.bk storeys, black boards
            // under a white band; tiled eaves with upturned tips; gables per roof from the bottom in o.gab
            // ("c" a chidori gable, "d" two, "k" a curved karahafu, "." none); a hip-and-gable top roof with
            // gold shachihoko (o.gold 2 also gilds the eave tips); o.rf the roof: "tile", "copper", "lead",
            // "stone"; o.ww / o.wn a smaller attached keep on the right.
            const n = o.n ?? 4,
              w = o.w ?? 17,
              dw = o.dw ?? 4,
              th = o.th ?? 5,
              base = o.base ?? 7,
              bk = o.bk ?? 0,
              gold = o.gold ?? 1,
              RF = {
                tile: [70, 76, 92],
                copper: [96, 160, 140],
                lead: [150, 158, 166],
                stone: [112, 108, 104],
              }[o.rf ?? "tile"],
              roof = css(e.sh(RF)),
              roofLit = css(e.sh(mixc(RF, [255, 248, 225], 0.3))),
              roofDk = css(e.sh(mixc(RF, [30, 28, 40], 0.4))),
              plaster = css(e.sh([240, 236, 226])),
              plasterSh = css(e.sh([206, 202, 196])),
              board = css(e.sh([48, 46, 54])),
              win = css(e.sh([118, 112, 118])),
              gilt = css(e.sh([226, 180, 64])),
              stone = css(e.sh([158, 152, 140])),
              stoneSh = css(e.sh([118, 112, 106])),
              stoneDk = css(e.sh([96, 92, 88]));
            const hwOf = (ww, i) => Math.floor((ww - i * dw) / 2);
            // the stone base, steep at the top and flaring at the foot; or a wooded hill
            const ishigaki = (cx, hw, bh) => {
              for (let i = 1; i <= bh; i++) {
                const k = hw + 1 + Math.round((o.hill ? 1.2 : 0.7) * bh * ((bh - i) / bh) ** 2);
                if (o.hill) {
                  box(cx - k, i, 2 * k + 1, 1, i % 3 ? 9 : css(e.sh([64, 116, 70])));
                  box(cx + k - 2, i, 3, 1, css(e.sh([58, 100, 62])));
                  if (i > bh - 2) box(cx - hw, i, 2 * hw + 1, 1, stone);
                } else {
                  box(cx - k, i, 2 * k + 1, 1, stone);
                  box(cx + k - 1, i, 2, 1, stoneSh);
                  if (i % 2 === 0)
                    for (let p = -k + 2 + (i % 4); p < k - 2; p += 4) box(cx + p, i, 2, 1, stoneDk);
                }
              }
            };
            const gable = (cx, up, g, face) => {
              // a triangular chidori gable: roof outline, plaster (or board) face, gold pendant
              for (let j = 0; j <= g; j++)
                box(cx - (g - j), up + j, 2 * (g - j) + 1, 1, j === g ? roofDk : roof);
              for (let j = 1; j < g; j++) box(cx - (g - j - 1), up + j, 2 * (g - j - 1) + 1, 1, face);
              if (g >= 3) box(cx, up + g - 1, 1, 1, gold ? gilt : roofDk);
            };
            const kara = (cx, up, face) => {
              // the karahafu: the eave bows up into a bell-shaped gable
              box(cx - 4, up, 9, 1, roof);
              box(cx - 3, up + 1, 7, 1, roof);
              box(cx - 2, up + 2, 5, 1, roofLit);
              box(cx - 1, up + 1, 3, 1, gold ? gilt : face);
              box(cx - 5, up + 1, 1, 1, roof);
              box(cx + 5, up + 1, 1, 1, roof);
            };
            const keep = (cx, bh, nn, ww, gab, bkk) => {
              for (let i = 0; i < nn; i++) {
                const hw = hwOf(ww, i),
                  b = bh + i * th,
                  black = i < bkk,
                  face = black ? board : plaster;
                // the wall: plaster, or black boards under a white band; the right side in shade
                box(cx - hw, b + th - 2, 2 * hw + 1, th - 2, black ? board : plaster);
                if (black) box(cx - hw, b + th - 2, 2 * hw + 1, 1, plaster);
                else box(cx + hw, b + th - 2, 1, th - 2, plasterSh);
                for (let p = -hw + 2; p <= hw - 2; p += 3)
                  box(cx + p, b + 2, 1, Math.max(1, th - 4), black ? win : 2);
                // the eave: a dark lip, the tiled slope above it and the upturned tips
                box(cx - hw - 2, b + th - 1, 2 * hw + 5, 1, roofDk);
                box(cx - hw - 1, b + th, 2 * hw + 3, 1, roof);
                box(cx - hw - 1, b + th, hw + 1, 1, roofLit);
                for (const s of [-1, 1]) box(cx + s * (hw + 3), b + th, 1, 1, gold > 1 ? gilt : roof);
              }
              // the gables go on last, over the storey above
              for (let i = 0; i < nn - 1; i++) {
                const gc = gab[i] ?? ".",
                  up = hwOf(ww, i + 1),
                  b = bh + i * th,
                  face = i + 1 < bkk ? board : plaster;
                if (gc === "c") gable(cx, b + th, Math.min(3, up), face);
                else if (gc === "d")
                  for (const s of [-1, 1]) gable(cx + s * Math.ceil(up / 2), b + th, 2, face);
                else if (gc === "k") kara(cx, b + th, face);
              }
              // the top roof: hip-and-gable, its gable facing us, the ridge and the shachihoko
              const hw = hwOf(ww, nn - 1),
                t = bh + nn * th,
                rh = Math.max(3, Math.min(4, hw));
              for (let j = 1; j <= rh; j++) {
                const k = hw + 1 - j;
                box(cx - k, t + j, 2 * k + 1, 1, roof);
                box(cx - k, t + j, k, 1, roofLit);
              }
              gable(cx, t + 1, rh - 1, plaster);
              box(cx - hw + 1, t + rh + 1, 2 * hw - 1, 1, roofDk);
              if (gold) for (const s of [-1, 1]) box(cx + s * (hw - 1), t + rh + 3, 1, 2, gilt);
            };
            const kx = o.kx ?? 0;
            if (o.wall) {
              // a long stone terrace with a plastered nagaya or wall (o.wh tall) along it
              const wl = o.wall,
                wh = o.wh ?? 3;
              ishigaki(0, wl, base);
              box(-wl, base + wh, 2 * wl + 1, wh, plaster);
              box(wl, base + wh, 1, wh, plasterSh);
              if (wh >= 3) for (let p = -wl + 2; p < wl - 1; p += 3) box(p, base + wh - 1, 1, 1, 2);
              box(-wl - 1, base + wh + 1, 2 * wl + 3, 1, roofDk);
              box(-wl, base + wh + 2, 2 * wl + 1, 1, roof);
            }
            if (o.ww) {
              const wx = o.wx ?? hwOf(w, 0) + Math.floor(o.ww / 2) + 3,
                wb = Math.max(2, base - 2);
              ishigaki(wx, Math.floor(o.ww / 2), wb);
              keep(wx, wb, o.wn ?? 2, o.ww, o.wg ?? "c", o.wn && bk ? o.wn : 0);
            }
            if (!o.wall) ishigaki(kx, hwOf(w, 0), base);
            keep(kx, base, n, w, o.gab ?? "ckcd", bk);
            break;
          }
          case "jpHall": {
            // A Japanese wooden hall, reused by the b27 temples, shrines and palaces (Tōdai-ji, Zenkō-ji, Saga,
            // Takeda Shrine, Shuri): a stone podium (o.base), a wall o.w wide and o.wh tall of posts with
            // plaster or lattice between, o.n 2 adds a lower skirt roof (mokoshi) below the great hip-and-gable
            // roof (o.rh rows tall, steep at the ridge and sweeping out to upturned eaves), o.kara a curved
            // karahafu gable over the door, o.shibi gold horns on the ridge, o.win the Daibutsuden's window.
            // o.st picks the colours: "temple", "shrine", "palace" or "shuri".
            const ST = {
              temple: { wall: [226, 214, 190], post: [104, 66, 52], roof: [76, 78, 88] },
              shrine: { wall: [196, 72, 48], post: [150, 44, 36], roof: [96, 150, 132] },
              palace: { wall: [236, 230, 216], post: [92, 74, 64], roof: [84, 86, 96] },
              shuri: { wall: [200, 48, 40], post: [160, 34, 32], roof: [186, 70, 54] },
            }[o.st ?? "temple"];
            const w = o.w ?? 29,
              wh = o.wh ?? 7,
              base = o.base ?? 2,
              rh = o.rh ?? 9,
              hw = Math.floor(w / 2),
              wall = css(e.sh(ST.wall)),
              post = css(e.sh(ST.post)),
              postDk = css(e.sh(mixc(ST.post, [30, 28, 40], 0.4))),
              roof = css(e.sh(ST.roof)),
              roofLit = css(e.sh(mixc(ST.roof, [255, 248, 225], 0.25))),
              roofDk = css(e.sh(mixc(ST.roof, [30, 28, 40], 0.45))),
              gilt = css(e.sh([226, 180, 64])),
              plaster = css(e.sh([236, 230, 216]));
            box(-hw - 2, base, 2 * hw + 5, base, 13);
            box(-hw - 2, base, 2 * hw + 5, 1, css(e.sh([226, 220, 204])));
            box(-2, base, 5, base, css(e.sh([182, 176, 162]))); // the steps
            let b = base;
            const walls = (bw, up, hh) => {
              box(-bw, up + hh, 2 * bw + 1, hh, wall);
              for (let p = -bw; p <= bw; p += 3) box(p, up + hh, 1, hh, post);
              box(-bw, up + hh, 2 * bw + 1, 1, postDk); // the bracket shadow under the eave
              if (o.st !== "shuri") box(-bw, up + 2, 2 * bw + 1, 1, post);
            };
            // a sweeping roof from half-width k0 at row `up`, inset by d over hh rows
            const sweep = (k0, up, hh, d) => {
              box(-k0 - 1, up, 2 * k0 + 3, 1, roofDk);
              for (const s of [-1, 1]) box(s * (k0 + 2), up + 1, 1, 1, roof);
              for (let j = 1; j <= hh; j++) {
                const k = k0 - Math.round(d * (1 - (1 - j / hh) ** 2));
                box(-k, up + j, 2 * k + 1, 1, roof);
                box(-k, up + j, k, 1, roofLit);
              }
              return k0 - d;
            };
            const bw = hw - 1;
            if ((o.n ?? 1) > 1) {
              const lh = Math.max(3, wh - 3);
              walls(bw, b, lh);
              b += lh;
              sweep(hw + 1, b + 1, 2, 2);
              b += 3;
              walls(bw - 3, b, wh - lh + 1);
              b += wh - lh + 1;
            } else {
              walls(bw, b, wh);
              b += wh;
            }
            const doorW = Math.max(3, Math.round(w / 6)) | 1;
            box(-(doorW >> 1), base + Math.min(wh, 5) - 1, doorW, Math.min(wh, 5) - 1, postDk);
            if (o.win) {
              // the Daibutsuden's great window, opened to show the Buddha's face
              box(-3, b - 1, 7, 3, plaster);
              box(-2, b - 1, 5, 2, 2);
              box(0, b - 1, 1, 1, gilt);
            }
            const top = sweep(hw + 2, b + 1, rh, Math.round(hw * 0.55));
            // the gable of the upper roof, facing us, and the ridge
            const g = Math.max(2, Math.min(top - 1, Math.round(rh * 0.45)));
            for (let j = 0; j < g; j++)
              box(-(g - j - 1), b + 1 + rh - g + j + 1, 2 * (g - j - 1) + 1, 1, j ? plaster : roofDk);
            box(-top, b + rh + 2, 2 * top + 1, 1, roofDk);
            if (o.shibi)
              for (const s of [-1, 1]) {
                box(s * top, b + rh + 4, 1, 2, gilt);
                box(s * (top + 1), b + rh + 5, 1, 2, gilt);
              }
            if (o.kara) {
              // a karahafu bowing up out of the lower eave over the steps (o.kara 2: out of the great roof's
              // eave, over the window), o.kw wide
              const up = o.kara === 2 ? b + 2 : base + wh + ((o.n ?? 1) > 1 ? 0 : 1),
                k = (o.kw ?? 9) >> 1;
              box(-k, up, 2 * k + 1, 1, roofDk);
              box(-k + 1, up + 1, 2 * k - 1, 1, roof);
              box(-k + 1, up + 1, k - 1, 1, roofLit);
              box(-k + 2, up + 2, 2 * k - 3, 1, roof);
              box(-k + 3, up + 3, 2 * k - 5, 1, roofLit);
              box(-k + 2, up - 1, 2 * k - 3, 1, o.st === "shuri" ? gilt : postDk);
              for (const s of [-1, 1]) box(s * (k + 1), up + 1, 1, 1, roof);
              if (o.kara !== 2) for (const s of [-k + 1, k - 1]) box(s, up - 1, 1, up - 1 - base, post);
            }
            break;
          }
          case "selion": {
            // Akita Port Tower Selion: a slim square shaft of blue-green glass in a white frame, with the
            // glass observation room turned 45 degrees at the top (a diamond seen from the side) and a mast.
            const glass = css(e.sh([96, 158, 170])),
              glassSh = css(e.sh([70, 120, 140])),
              frame = css(e.sh([232, 234, 236]));
            box(-4, 5, 9, 5, frame); // the hall at its foot
            box(-3, 4, 7, 3, glass);
            box(-2, 30, 5, 25, glass);
            box(1, 30, 2, 25, glassSh);
            for (const p of [-2, 2]) box(p, 30, 1, 25, frame);
            for (let r = 8; r < 30; r += 4) box(-2, r, 5, 1, frame);
            for (let j = 0; j < 9; j++) {
              const k = Math.min(4, j < 4 ? j + 1 : 9 - j);
              box(-k, 31 + j, 2 * k + 1, 1, j === 4 ? frame : glass);
              box(1, 31 + j, Math.max(0, k), 1, j === 4 ? frame : glassSh);
            }
            box(0, 44, 1, 4, frame);
            box(0, 45, 1, 1, 10);
            break;
          }
          case "chibaPortTower": {
            // Chiba Port Tower: a tall rhombus-plan prism clad in half-mirror glass, the sky caught on its lit
            // face, thin mullions, a sloped cut at the top and a low hall at its foot.
            const lit = css(e.sh([150, 182, 210])),
              mid = css(e.sh([92, 120, 152])),
              dark = css(e.sh([52, 66, 92]));
            box(-4, 2, 9, 2, 13);
            for (let r = 3; r <= 38; r++) {
              const k = r > 34 ? 3 - Math.floor((r - 34) / 2) : 3;
              box(-k, r, 2 * k + 1, 1, r % 3 ? mid : dark);
              box(-k, r, Math.max(1, k - 1), 1, r % 3 ? lit : mid);
              if (k > 1) box(k - 1, r, 2, 1, dark);
            }
            box(0, 40, 1, 2, 6);
            break;
          }
          case "fukuokaTower": {
            // Fukuoka Tower: a slim triangular tower wrapped in 8,000 half-mirror panes (silver-blue, lit edge
            // and shaded face), the dark observation band near the top and an open frame tapering to a mast.
            const glass = css(e.sh([164, 186, 206])),
              glassSh = css(e.sh([112, 132, 156])),
              band = css(e.sh([58, 64, 82]));
            box(-4, 3, 9, 3, 13);
            box(-2, 34, 5, 31, glass);
            box(1, 34, 2, 31, glassSh);
            for (let r = 6; r < 31; r += 3) box(-2, r, 5, 1, glassSh);
            box(-3, 31, 7, 3, band); // the observation decks
            box(-3, 29, 7, 1, glass);
            for (let r = 35; r < 44; r++) {
              const k = r < 40 ? 2 : 1;
              box(-k, r, 1, 1, glass);
              box(k, r, 1, 1, glassSh);
              if (r % 2) box(-k, r, 2 * k + 1, 1, glassSh);
            }
            box(0, 50, 1, 7, 6);
            break;
          }
          case "jpVolcano": {
            // A Japanese volcano: o.w wide, o.h tall, steep near the top and spreading at the foot, lit on
            // the left; o.crater a flat rim that wide (Azuma-kofuji's crater), o.snow rows of snow on the top
            // with streaks running down (Mount Iwate); o.tint "brown" (bare ash) or "blue" (far forest).
            const w = o.w ?? 44,
              h = o.h ?? 22,
              hw = Math.floor(w / 2),
              cr = o.crater ?? 0,
              RGB = o.tint === "brown" ? [150, 116, 92] : [92, 112, 140],
              lit = css(e.sh(mixc(RGB, [255, 248, 225], 0.18))),
              body = css(e.sh(RGB)),
              sh = css(e.sh(mixc(RGB, [30, 28, 40], 0.3))),
              snow = css(e.sh([240, 244, 248])),
              snowSh = css(e.sh([196, 206, 222]));
            for (let r = 1; r <= h; r++) {
              const f = (h - r) / h,
                k = Math.max(cr >> 1, Math.round((cr >> 1) + (hw - (cr >> 1)) * f ** 1.6)),
                sn = o.snow && r > h - o.snow;
              box(-k, r, 2 * k + 1, 1, sn ? snow : body);
              box(-k, r, Math.ceil(k * 0.45), 1, sn ? snow : lit);
              box(Math.floor(k * 0.4), r, k - Math.floor(k * 0.4) + 1, 1, sn ? snowSh : sh);
              if (o.snow && !sn && r > h - o.snow * 2.2)
                for (let p = -k + 2 + (r % 3); p < k - 1; p += 4) box(p, r, 1, 1, snow); // snow in the gullies
            }
            if (cr) box(-(cr >> 1) + 1, h, cr - 2, 1, sh); // the crater's far rim in shade
            break;
          }
          case "kobePortTower": {
            // Kobe Port Tower: a red steel lattice tube pinched in the middle like a hand drum (tsuzumi), the
            // crossing members as a diamond mesh, white observation floors on top and a short mast.
            const red = css(e.sh([206, 40, 44])),
              redDk = css(e.sh([150, 28, 36])),
              white = css(e.sh([240, 238, 232]));
            box(-6, 2, 13, 2, 13);
            for (let r = 3; r <= 38; r++) {
              const f = (r - 22) / 17,
                k = Math.round(2.4 + 3.6 * f * f);
              box(-k, r, 1, 1, red);
              box(k, r, 1, 1, redDk);
              for (let p = -k + 1 + (r % 2); p < k; p += 2) box(p, r, 1, 1, p > 0 ? redDk : red);
            }
            for (const r of [33, 36]) box(-5, r, 11, 1, white); // the observation floors' rings
            box(-4, 40, 9, 2, white);
            box(-2, 42, 5, 2, red);
            box(0, 44, 1, 4, white);
            break;
          }
          case "kinkakuji": {
            // Kinkaku-ji (Kyoto): the Golden Pavilion over its pond, a ground floor of dark wood and white
            // shutters, two gold-leaf upper floors with bell-shaped windows on top, thin shingle roofs with
            // upturned corners and the golden phoenix on the ridge.
            const gold = css(e.sh([222, 176, 62])),
              goldSh = css(e.sh([176, 132, 40])),
              wood = css(e.sh([108, 80, 62])),
              shutter = css(e.sh([232, 224, 206])),
              roof = css(e.sh([74, 66, 64])),
              water = css(e.sh([78, 120, 120]));
            box(-11, 1, 23, 1, water);
            box(-9, 2, 19, 1, 13);
            box(-9, 6, 19, 4, wood); // the ground floor
            for (let p = -8; p <= 8; p += 2) box(p, 5, 1, 3, shutter);
            box(-11, 7, 23, 1, roof);
            box(-10, 8, 21, 1, roof);
            for (const s of [-12, 12]) box(s, 8, 1, 1, roof);
            box(-8, 13, 17, 5, gold); // the second floor
            box(5, 13, 4, 5, goldSh);
            box(-8, 12, 17, 1, goldSh); // the balcony rail
            for (let p = -6; p <= 6; p += 3) box(p, 11, 1, 2, wood);
            box(-10, 14, 21, 1, roof);
            box(-9, 15, 19, 1, roof);
            for (const s of [-11, 11]) box(s, 15, 1, 1, roof);
            box(-5, 19, 11, 4, gold); // the top floor
            box(3, 19, 3, 4, goldSh);
            for (const p of [-3, 2]) {
              box(p, 18, 2, 2, 2); // the bell-shaped windows
              box(p, 19, 2, 1, goldSh);
            }
            box(-7, 20, 15, 1, roof);
            cone(0, 20, 6, 3, roof);
            for (const s of [-8, 8]) box(s, 21, 1, 1, roof);
            box(0, 25, 1, 2, gold); // the phoenix
            box(-1, 26, 3, 1, gold);
            break;
          }
          case "gunmaPref": {
            // Gunma Prefectural Government Building (Maebashi): a 33-storey tower in brown stone with a deep
            // dark slot of glass down its middle, blue glass on its flanks and an open frame at the top.
            const stone = css(e.sh([170, 132, 108])),
              stoneSh = css(e.sh([132, 100, 84])),
              slot = css(e.sh([44, 52, 70])),
              blue = css(e.sh([96, 136, 186]));
            box(-7, 5, 15, 5, 13); // the podium
            for (let p = -6; p <= 6; p += 2) box(p, 3, 1, 2, 2);
            box(-5, 42, 11, 37, stone);
            box(3, 42, 3, 37, stoneSh);
            for (let r = 7; r < 42; r += 2) box(-5, r, 4, 1, stoneSh);
            box(-1, 42, 3, 37, slot);
            box(-6, 30, 1, 25, blue);
            box(6, 30, 1, 25, blue);
            box(-5, 44, 11, 2, stone); // the crown
            for (const p of [-4, 0, 4]) box(p, 43, 1, 1, slot);
            break;
          }
          case "artTowerMito": {
            // Art Tower Mito: a 100 m helix of stacked silver titanium tetrahedra; every module shows a lit
            // triangle and a shaded one, the edges zigzagging alternately left and right.
            const lit = css(e.sh([226, 230, 236])),
              mid = css(e.sh([172, 178, 188])),
              dark = css(e.sh([112, 118, 132]));
            for (let m = 0; m < 9; m++)
              for (let j = 0; j < 5; j++) {
                const r = 1 + m * 5 + j,
                  s = m % 2 ? 1 : -1,
                  k = 2 + (j === 2 ? 1 : 0);
                box(-k, r, 2 * k + 1, 1, mid);
                const split = s * (j - 2);
                box(-k, r, k + split + 1, 1, m % 2 ? lit : mid);
                box(split + 1, r, k - split, 1, m % 2 ? mid : dark);
                if (j === 2) box(s * k, r, 1, 1, dark);
              }
            box(0, 47, 1, 1, mid);
            break;
          }
          case "heiwadai": {
            // Heiwadai Tower (Miyazaki): a 37 m tower of pale stone on a stepped platform, shaped like a
            // haniwa-style shield narrowing up to its crown, with the four guardian statues standing at its
            // corners halfway up and the dark plaque on its front.
            const stone = css(e.sh([214, 204, 180])),
              stoneSh = css(e.sh([170, 160, 140])),
              bronze = css(e.sh([92, 84, 76]));
            box(-5, 2, 11, 2, 13);
            box(-4, 4, 9, 2, 13);
            for (let r = 5; r <= 26; r++) {
              const k = r < 20 ? 3 : 3 - Math.floor((r - 19) / 3);
              box(-k, r, 2 * k + 1, 1, stone);
              box(k, r, 1, 1, stoneSh);
            }
            box(-1, 26, 3, 4, stone);
            box(-2, 29, 5, 2, stone);
            box(0, 31, 1, 2, stoneSh);
            box(-1, 12, 3, 4, bronze); // the plaque
            for (const s of [-1, 1]) {
              box(s * 5, 18, 1, 5, bronze); // the guardians
              box(s * 5, 19, 1, 1, stone);
              box(s * 5 - (s < 0 ? 0 : 0), 14, 1, 1, bronze);
              box(s * 4, 13, 3, 1, stoneSh);
            }
            break;
          }
          case "iwateBank": {
            // Iwate Bank Red Brick Building (Morioka, Tatsuno Kingo, 1911): red brick banded with white
            // granite, tall arched windows on two floors, the green copper dome and lantern on the corner and
            // small dormers along the roof.
            const brick = css(e.sh([170, 78, 60])),
              brickSh = css(e.sh([128, 58, 48])),
              white = css(e.sh([236, 232, 220])),
              copper = css(e.sh([110, 170, 150])),
              roof = css(e.sh([84, 92, 100]));
            box(-12, 14, 25, 14, brick);
            box(10, 14, 3, 14, brickSh);
            for (const r of [1, 7, 14]) box(-12, r, 25, 1, white);
            for (let r = 3; r < 14; r += 3) box(-12, r, 25, 1, chLit(1, 0.3));
            for (let p = -10; p <= 10; p += 3) {
              box(p, 5, 1, 3, 2);
              box(p, 12, 1, 3, 2);
              box(p, 13, 1, 1, white);
            }
            box(-12, 15, 25, 1, roof);
            box(-11, 16, 23, 1, roof);
            for (const p of [-9, 9]) box(p - 1, 18, 3, 2, brick); // the dormers
            box(-4, 22, 9, 22, brick); // the corner tower
            box(3, 22, 2, 22, brickSh);
            for (const r of [7, 14, 18]) box(-4, r, 9, 1, white);
            for (const p of [-2, 2]) box(p, 21, 1, 2, 2);
            dome(0, 22, 4, copper);
            box(-1, 27, 3, 2, copper);
            box(0, 29, 1, 2, 3);
            break;
          }
          case "tokiMesse": {
            // Toki Messe's Bandaijima Building (Niigata): a slender glass tower, its long sides bowed so the top
            // ends in a thin blade, silver fins down its edges, the convention halls low at its foot.
            const glass = css(e.sh([118, 160, 196])),
              glassSh = css(e.sh([80, 112, 150])),
              fin = css(e.sh([222, 228, 232]));
            box(-5, 4, 11, 4, 13);
            box(-5, 4, 11, 1, glassSh);
            for (let r = 5; r <= 44; r++) {
              const k = r > 38 ? Math.max(0, 3 - Math.floor((r - 38) / 2)) : 3;
              box(-k, r, 2 * k + 1, 1, r % 4 ? glass : glassSh);
              box(1, r, k, 1, glassSh);
              box(-k - 1, r, 1, 1, fin);
            }
            box(0, 47, 1, 3, fin);
            break;
          }
          case "tsutenkaku": {
            // Tsūtenkaku (Osaka): a steel tower straddling the street on four splayed legs, the octagonal
            // shaft with its lit sign band, the box of the observation deck under the round lantern roof
            // and a short mast.
            const steel = css(e.sh([150, 156, 160])),
              steelSh = css(e.sh([108, 114, 122])),
              white = css(e.sh([238, 238, 232])),
              neon = css(e.sh([232, 118, 54]));
            for (let r = 1; r <= 8; r++) {
              const k = 8 - Math.floor(r / 2);
              box(-k, r, 2, 1, steel);
              box(k - 1, r, 2, 1, steelSh);
            }
            box(-5, 9, 11, 2, white); // the base platform over the street
            for (let r = 10; r <= 26; r++) {
              const k = r < 18 ? 3 : 2;
              box(-k, r, 2 * k + 1, 1, steel);
              box(k, r, 1, 1, steelSh);
              if (r % 2) box(-k + 1 + (r % 4 === 1 ? 0 : 1), r, 1, 1, steelSh); // the lattice
            }
            box(-3, 20, 7, 3, neon); // the sign
            box(-4, 30, 9, 4, white); // the observation floors
            box(-4, 28, 9, 1, steelSh);
            box(-3, 29, 7, 1, 11);
            box(-5, 31, 11, 1, steel);
            dome(0, 31, 3, steel); // the round roof
            box(0, 38, 1, 4, white);
            break;
          }
          case "saitamaArena": {
            // Saitama Super Arena: a big glass-walled hall in a white frame, the long white roof trusses
            // jutting up and out at a slant over its front, and the round arena drum behind.
            const glass = css(e.sh([120, 162, 190])),
              glassSh = css(e.sh([86, 120, 150])),
              white = css(e.sh([232, 232, 228])),
              grey = css(e.sh([186, 188, 190]));
            box(-14, 13, 24, 13, grey); // the arena drum behind
            box(-12, 14, 20, 1, grey);
            box(-16, 9, 33, 9, glass);
            box(10, 9, 7, 9, glassSh);
            for (let p = -15; p <= 15; p += 3) box(p, 9, 1, 9, white);
            box(-16, 10, 33, 1, white);
            box(-16, 5, 33, 1, white);
            for (let i = 0; i < 5; i++)
              for (let j = 0; j < 6; j++) box(-12 + i * 6 + Math.round(j * 0.7), 11 + j, 2, 1, white); // the trusses
            box(-11, 16, 30, 1, white);
            break;
          }
          case "sapporoClock": {
            // Sapporo Clock Tower: the white clapboard drill hall of 1878, two floors of tall sash windows
            // under a red tin roof, the front gable with its porch, and the clock tower with the American clock
            // and a small belfry roof on the ridge.
            const wall = css(e.sh([232, 230, 218])),
              wallSh = css(e.sh([196, 196, 186])),
              red = css(e.sh([190, 58, 52])),
              green = css(e.sh([92, 120, 96]));
            box(-6, 10, 13, 10, wall);
            box(5, 10, 2, 10, wallSh);
            for (let r = 2; r < 10; r += 2) box(-6, r, 13, 1, wallSh); // the clapboards
            for (const p of [-5, -3, 3, 5]) {
              box(p, 4, 1, 2, green);
              box(p, 8, 1, 2, green);
            }
            box(-2, 4, 5, 3, red); // the porch
            box(-1, 3, 3, 2, 2);
            for (let j = 0; j < 4; j++) box(-7 + j * 2, 11 + j, 15 - j * 4, 1, red); // the roof
            for (let j = 0; j < 4; j++) box(-3 + j, 11 + j, 7 - 2 * j, 1, wall); // the front gable
            box(-2, 21, 5, 7, wall); // the clock tower
            box(2, 21, 1, 7, wallSh);
            orb(0, 18, 1.6, 6);
            box(0, 18, 1, 1, 2);
            box(-3, 22, 7, 1, red);
            box(-1, 24, 3, 2, wall);
            box(-2, 25, 5, 1, red);
            box(0, 26, 1, 1, red);
            break;
          }
