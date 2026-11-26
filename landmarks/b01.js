          // Chinese landmarks of group b01, drawn with a few shared parts defined at the top of this case: roof
          // (curved eaves with upturned tips and a ridge), hall (columns, dark bays, a painted bracket band),
          // rail (a balustrade), terrace (a stone platform with its stair), wall (grey brick with merlons and a
          // gate arch) and pagoda (a masonry or timber pagoda, storey by storey, from a small table).
          case "jadeBuddhaPalace":
          case "wenfengAnyang":
          case "dacige":
          case "zhiliYamen":
          case "famenPagoda":
          case "wudangLamasery":
          case "bayannurCenter":
          case "nankanGrottoes":
          case "datunManor":
          case "huaxilou":
          case "manchukuoCouncil":
          case "jilinTvTower":
          case "changdeWall":
          case "youngMao":
          case "fangta":
          case "shangdangGate":
          case "tianningPagoda":
          case "guangjiGate":
          case "wenshuPagoda":
          case "pandaTower":
          case "longquanPagoda":
          case "rafflesChongqing":
          case "hongyaCave":
          case "hangzhouBayBridge":
          case "xinghaiBridge":
          case "daqingTvTower":
          case "daqingDerrick":
          case "datongWall":
          case "longzhuaPagoda":
          case "humenBridge":
          case "yaoyueTower":
          case "jiukeshu":
          case "gaoershanPagoda":
          case "yonglingTombs":
          case "fuyangPagoda":
          case "whitePagodaFuzhou":
          case "blackPagodaFuzhou":
          case "wanshouPalace":
          case "bajingPavilion":
          case "cantonTower":
          case "zhenhaiTower":
          case "liuyangTemple":
          case "nanshanTemple":
          case "sunMoonPagodas":
          case "jiaxiuPavilion": {
            const sh = (rgb) => css(e.sh(rgb)),
              dk = (rgb, k = 0.3) => css(e.sh(mixc(rgb, [41, 40, 54], k))),
              lt = (rgb, k = 0.3) => css(e.sh(mixc(rgb, [255, 248, 225], k))),
              RED = [176, 54, 46],
              GREY = [96, 100, 110],
              GOLD = [226, 172, 52],
              GREEN = [72, 132, 98],
              TEAL = [70, 128, 140],
              BRICK = [150, 122, 104],
              WHITE = [234, 230, 220],
              STONE = [196, 190, 176],
              GLASS = [120, 158, 196],
              dark = 2;
            const seg = (x1, y1, x2, y2, col, w = 1) => {
              const n = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1), 1);
              for (let i = 0; i <= n; i++)
                box(Math.round(x1 + ((x2 - x1) * i) / n), Math.round(y1 + ((y2 - y1) * i) / n), w, 1, col);
            };
            // A curved Chinese roof whose eaves span cx +- hw on the row above b, h rows tall, narrowing to a
            // ridge of half-width top (0: a pyramid roof with a finial).
            const roof = (cx, b, hw, h, rgb, top = Math.round(hw / 2), fin = 2) => {
              box(cx - hw + 1, b, 2 * hw - 1, 1, dk(rgb, 0.6)); // the shadow under the eaves
              for (let j = 0; j < h; j++) {
                const k = Math.round(hw - (hw - top) * Math.sqrt(j / h)),
                  q = Math.max(1, Math.round(k / 4));
                box(cx - k, b + 1 + j, 2 * k + 1, 1, j === 0 ? lt(rgb, 0.2) : sh(rgb));
                if (k > 2) box(cx + k - q + 1, b + 1 + j, q, 1, dk(rgb, 0.28));
              }
              for (const s of [-1, 1]) box(cx + s * (hw + 1), b + 2, 1, 1, sh(rgb)); // the upturned tips
              if (top >= 2) {
                box(cx - top, b + h + 1, 2 * top + 1, 1, dk(rgb, 0.35)); // the ridge and its end ornaments
                for (const s of [-1, 1]) box(cx + s * top, b + h + 2, 1, 1, dk(rgb, 0.35));
              } else if (fin) box(cx, b + h + fin, 1, fin, 3);
              return b + h;
            };
            // The body of a hall: hw half-width, h rows on b, columns with dark bays, a painted bracket band.
            const hall = (cx, b, hw, h, wall = RED, bay = 3, band = TEAL) => {
              box(cx - hw, b + h, 2 * hw + 1, h, sh(wall));
              for (let p = cx - hw + 1; p + 1 < cx + hw; p += bay)
                box(p, b + h - 2, bay - 1, h - 3, dk(wall, 0.62));
              box(cx + hw, b + h, 1, h, dk(wall, 0.3));
              if (h >= 4) box(cx - hw, b + h, 2 * hw + 1, 1, sh(band));
              return b + h;
            };
            const rail = (cx, b, hw, rgb = WHITE) => {
              box(cx - hw, b + 1, 2 * hw + 1, 1, lt(rgb, 0.1));
              for (let p = cx - hw; p <= cx + hw; p += 2) box(p, b + 2, 1, 1, lt(rgb, 0.1));
            };
            const terrace = (cx, hw, h, rgb = WHITE, b = 0) => {
              box(cx - hw, b + h, 2 * hw + 1, h, sh(rgb));
              box(cx - hw, b + 1, 2 * hw + 1, 1, dk(rgb, 0.25));
              box(cx + hw, b + h, 1, h, dk(rgb, 0.2));
              for (let j = 0; j < h; j++)
                box(cx - 2 - j, b + h - j, 5 + 2 * j, 1, j % 2 ? sh(rgb) : lt(rgb, 0.25)); // the stair
              return b + h;
            };
            // A city wall from cx - hw to cx + hw, h tall on b, with merlons and an arched gate gw wide.
            const wall = (cx, b, hw, h, rgb = GREY, gw = 3) => {
              box(cx - hw, b + h, 2 * hw + 1, h, sh(rgb));
              for (let j = b + 3; j < b + h; j += 3) box(cx - hw, j, 2 * hw + 1, 1, dk(rgb, 0.12)); // the brick courses
              box(cx + hw, b + h, 1, h, dk(rgb, 0.3));
              for (let p = cx - hw; p <= cx + hw; p += 2) box(p, b + h + 1, 1, 1, sh(rgb));
              if (gw) {
                const g = Math.floor(gw / 2),
                  gh = Math.min(h - 2, gw + 2);
                box(cx - g - 1, b + gh + 1, 2 * g + 3, gh + 1, lt(rgb, 0.25));
                box(cx - g, b + gh, 2 * g + 1, gh, dark);
                dome(cx, b + gh, g, dark);
              }
              return b + h;
            };
            // A pagoda on b: n storeys from half-width w0 to w1, th rows each (eaves included), body and eave
            // colours, ov the eaves' overhang; timber pagodas get tiled roofs with upturned tips, masonry ones
            // corbelled brick eaves (eh rows). Returns [top row, top half-width].
            const pagoda = (cx, b, P) => {
              const n = P.n,
                th = P.th,
                eh = P.eh ?? 1,
                ov = P.ov ?? 1,
                body = P.body,
                eave = P.eave ?? body;
              let up = b,
                k = P.w0;
              for (let i = 0; i < n; i++) {
                k = Math.round(P.w0 + ((P.w1 - P.w0) * i) / Math.max(1, n - 1));
                const hB = (i === 0 && P.th0 ? P.th0 : th) - (P.timber ? 2 : eh),
                  q = Math.max(1, Math.round(k / 3));
                box(cx - k, up + hB, 2 * k + 1, hB, sh(body));
                if (k >= 2) box(cx + k - q + 1, up + hB, q, hB, dk(body, 0.25)); // the shaded face of the octagon
                if (k >= 3) box(cx - k, up + hB, 1, hB, lt(body, 0.2));
                if (P.rail && i > 0) box(cx - k, up + 1, 2 * k + 1, 1, sh(P.rail));
                const dh = hB >= 6 ? 3 : hB >= 3 ? 2 : 1,
                  dy = up + Math.ceil((hB + dh) / 2);
                if ((i + (P.alt ?? 0)) % 2 === 0 || P.doors) box(cx, dy, 1, dh, dark);
                if (k >= 4 && ((i + (P.alt ?? 0)) % 2 === 1 || P.doors)) {
                  box(cx - Math.round(k * 0.6), dy - (dh > 1 ? 1 : 0), 1, 1, dark);
                  box(cx + Math.round(k * 0.6), dy - (dh > 1 ? 1 : 0), 1, 1, dark);
                }
                up += hB;
                if (P.timber) {
                  roof(cx, up, k + ov, 2, P.eave, k + ov - 2);
                  up += 2;
                } else {
                  for (let j = 1; j < eh; j++) box(cx - k - j, up + j, 2 * (k + j) + 1, 1, dk(eave, 0.3)); // the corbels
                  box(cx - k - ov, up + eh, 2 * (k + ov) + 1, 1, sh(eave));
                  box(cx + k + ov - 1, up + eh, 2, 1, dk(eave, 0.3));
                  up += eh;
                }
              }
              return [up, k];
            };
            // A finial: an iron spire with rings over a lotus or a gourd.
            const spire = (cx, b, h, rgb = [70, 66, 72]) => {
              box(cx - 1, b + 1, 3, 1, sh(rgb));
              box(cx, b + h, 1, h, sh(rgb));
              for (let j = 3; j < h - 1; j += 2) box(cx - 1, b + j, 3, 1, sh(rgb));
            };
            const P = {
              famenPagoda: {
                n: 13,
                w0: 5,
                w1: 3,
                th: 3,
                body: [150, 128, 112],
                eave: [120, 104, 94],
                base: 4,
              },
              longquanPagoda: {
                n: 9,
                w0: 5,
                w1: 3,
                th: 4,
                body: [168, 140, 116],
                eave: [132, 112, 98],
                base: 3,
              },
              gaoershanPagoda: {
                n: 9,
                w0: 4,
                w1: 3,
                th: 3,
                th0: 7,
                body: [178, 162, 142],
                eave: [120, 112, 104],
                base: 4,
              },
              fuyangPagoda: {
                n: 7,
                w0: 5,
                w1: 3,
                th: 5,
                body: WHITE,
                eave: [110, 106, 110],
                base: 2,
                doors: 1,
              },
              longzhuaPagoda: { n: 9, w0: 5, w1: 2, th: 4, body: WHITE, eave: [130, 136, 140], base: 0 },
              whitePagodaFuzhou: {
                n: 7,
                w0: 6,
                w1: 4,
                th: 5,
                body: WHITE,
                eave: [122, 116, 112],
                base: 2,
                eh: 2,
              },
              blackPagodaFuzhou: {
                n: 7,
                w0: 5,
                w1: 3,
                th: 4,
                body: [104, 102, 100],
                eave: [74, 72, 74],
                base: 3,
                eh: 1,
              },
              fangta: {
                n: 9,
                w0: 5,
                w1: 3,
                th: 5,
                body: [150, 76, 62],
                eave: [66, 62, 68],
                timber: 1,
                rail: [214, 196, 168],
              },
              tianningPagoda: {
                n: 13,
                w0: 8,
                w1: 4,
                th: 4,
                th0: 6,
                body: [150, 60, 46],
                eave: [74, 84, 104],
                timber: 1,
                rail: GOLD,
              },
              wenshuPagoda: {
                n: 7,
                w0: 6,
                w1: 3,
                th: 4,
                body: [92, 86, 88],
                eave: [70, 66, 70],
                timber: 1,
                rail: GOLD,
              },
            }[kind];
            if (P) {
              // the masonry and timber pagodas of the table above, on a stepped Sumeru base
              let b = 0;
              const pb = P.base ?? 3;
              if (kind === "longzhuaPagoda" || kind === "gaoershanPagoda") {
                for (let i = -9; i <= 9; i++)
                  box(
                    i,
                    Math.round(4 - Math.abs(i) * 0.33),
                    1,
                    Math.round(4 - Math.abs(i) * 0.33),
                    sh(GREEN),
                  ); // its hill
                b = 4;
              }
              if (kind === "tianningPagoda") {
                b = terrace(0, 12, 3);
                rail(0, b, 11);
                b += 1;
              } else if (pb) {
                const bw = P.w0 + 2;
                box(-bw, b + pb, 2 * bw + 1, pb, dk(P.body, 0.1));
                box(-bw + 1, b + pb - 1, 2 * bw - 1, 1, dk(P.body, 0.35)); // the recessed waist
                box(-bw, b + pb, 2 * bw + 1, 1, lt(P.body, 0.2));
                b += pb;
              }
              const [top, k] = pagoda(0, b, P);
              if (P.timber) {
                const r = roof(0, top, k + 1, Math.max(3, k + 1), P.eave, 0, 0);
                spire(
                  0,
                  r,
                  kind === "tianningPagoda" ? 8 : 6,
                  kind === "tianningPagoda" ? GOLD : [70, 66, 72],
                );
              } else if (kind === "famenPagoda" || kind === "gaoershanPagoda") {
                cone(0, top, k, 2, dk(P.eave, 0.1));
                orb(0, top + 3, 1, sh(P.eave));
                spire(0, top + 3, 4);
              } else {
                cone(0, top, k, k + 1, sh(P.eave));
                orb(0, top + k + 2, 1, sh(GOLD));
                box(0, top + k + 6, 1, 3, sh(GOLD));
              }
              break;
            }
            if (kind === "wenfengAnyang") {
              // Wenfeng Pagoda (Tianning Temple, Anyang): an "upside-down" pagoda, its five storeys growing wider
              // upwards: a carved stone ground storey with an arched door, then red brick storeys under heavy
              // bracketed eaves with green tiles, and a pink Lamaist stupa with a bronze spire on the flat top.
              const red = [196, 82, 64],
                carv = [176, 140, 104],
                tile = [96, 120, 92];
              box(-7, 3, 15, 3, sh(carv));
              box(-7, 3, 15, 1, lt(carv, 0.2));
              box(-5, 10, 11, 7, sh(carv));
              box(4, 10, 2, 7, dk(carv, 0.25));
              for (const p of [-4, 3]) box(p, 9, 2, 4, dk(carv, 0.22)); // the carved panels
              box(-1, 7, 3, 4, dark);
              dome(0, 7, 1, dark);
              box(-2, 8, 5, 1, lt(carv, 0.25));
              let up = 10;
              for (let i = 0; i < 5; i++) {
                const k = 6 + i,
                  bh = i ? 2 : 0;
                if (bh) {
                  box(-k + 1, up + bh, 2 * k - 1, bh, sh(red));
                  box(k - 2, up + bh, 2, bh, dk(red, 0.25));
                  box(0, up + 1, 1, 1, dark);
                  up += bh;
                }
                box(-k, up + 1, 2 * k + 1, 1, dk(carv, 0.15)); // the bracket sets
                for (let p = -k + 1; p < k; p += 2) box(p, up + 1, 1, 1, dk(carv, 0.5));
                box(-k - 1, up + 2, 2 * k + 3, 1, sh(tile));
                box(-k, up + 3, 2 * k + 1, 1, dk(tile, 0.3));
                for (const s of [-1, 1]) box(s * (k + 2), up + 3, 1, 1, sh(tile));
                up += 3;
              }
              const pink = [222, 140, 112];
              box(-3, up + 1, 7, 1, sh(pink)); // the stupa's base
              box(-3, up + 3, 7, 2, sh(pink));
              dome(0, up + 3, 3, sh(pink));
              box(2, up + 3, 2, 2, dk(pink, 0.2));
              box(-1, up + 8, 3, 3, sh(pink));
              box(0, up + 11, 1, 3, sh([110, 100, 70]));
              box(0, up + 12, 1, 1, sh(GOLD));
              break;
            }
            if (kind === "jadeBuddhaPalace") {
              // Jade Buddha Palace (Anshan): a big palace hall under a double-eaved yellow hip roof on a white
              // marble terrace with balustrades, between two smaller yellow-roofed side halls.
              let b = terrace(0, 17, 4);
              rail(0, b, 16);
              for (const s of [-1, 1]) {
                const h2 = hall(s * 12, b, 4, 5);
                roof(s * 12, h2, 5, 3, GOLD, 2);
              }
              const h1 = hall(0, b, 8, 7);
              roof(0, h1, 10, 2, GOLD, 8);
              const h3 = hall(0, h1 + 2, 6, 3);
              roof(0, h3, 9, 5, GOLD, 4);
              box(-1, b + 4, 3, 4, sh(GOLD)); // the gilt name board
              break;
            }
            if (kind === "dacige") {
              // Dacige (Great Mercy Pavilion, Baoding): a tall red pavilion of two storeys and three grey-tiled
              // eaves, with a balcony round the upper floor, on a stone terrace.
              let b = terrace(0, 10, 3, STONE);
              b = hall(0, b, 7, 6);
              roof(0, b, 9, 2, GREY, 7);
              b += 2;
              rail(0, b, 6, RED);
              b = hall(0, b + 1, 6, 5);
              roof(0, b, 8, 2, GREY, 6);
              b = hall(0, b + 2, 5, 3);
              roof(0, b, 8, 5, GREY, 3);
              break;
            }
            if (kind === "zhiliYamen") {
              // Office of the Zhili Governor-General (Baoding): the yamen's main gate, a grey-tiled hall of three
              // bays with red doors and a gilt board, low wings at the sides, two stone lions and a tall flagpole.
              for (const s of [-1, 1]) {
                const hw = hall(s * 10, 0, 4, 6, [168, 70, 58], 3, GREY);
                roof(s * 10, hw, 5, 3, GREY, 3);
              }
              const h = hall(0, 0, 7, 9);
              box(-5, 8, 11, 7, sh([146, 48, 40]));
              for (const p of [-4, -1, 2]) box(p, 6, 2, 5, dark);
              box(-2, 9, 5, 1, sh(GOLD));
              roof(0, h, 10, 5, GREY, 5);
              for (const s of [-1, 1]) {
                box(s * 7 - 1, 3, 3, 2, sh(STONE)); // the lions
                box(s * 7 - (s > 0 ? 0 : 1), 4, 2, 1, sh(STONE));
              }
              box(15, 21, 1, 21, sh([80, 74, 76])); // the flagpole
              box(16, 21, 3, 2, sh(RED));
              break;
            }
            if (kind === "wudangLamasery") {
              // Wudang Lamasery (Badgar Monastery, Baotou): Tibetan-style white halls stacked up the hillside,
              // flat roofs edged with a dark red parapet, rows of black trapezoid windows, gilt roof ornaments.
              const hill = [150, 132, 100],
                rim = [120, 52, 46];
              for (let i = -20; i <= 20; i++) {
                const u = Math.max(1, Math.round(9 - (i + 20) * 0.06 - Math.abs(i) * 0.4));
                box(i, u, 1, u, sh(hill));
              }
              const block = (cx, b, hw, h, wins) => {
                box(cx - hw, b + h, 2 * hw + 1, h, sh(WHITE));
                box(cx + hw - 1, b + h, 2, h, dk(WHITE, 0.15));
                box(cx - hw, b + h, 2 * hw + 1, 2, sh(rim));
                box(cx - hw, b + h + 1, 2 * hw + 1, 1, lt(GOLD, 0.1));
                for (let r = b + 2; r < b + h - 1; r += 3)
                  for (let p = cx - hw + 2; p < cx + hw - 1; p += 3) box(p, r, wins, 1, dark);
                return b + h + 1;
              };
              block(-12, 0, 7, 6, 1);
              block(11, 0, 8, 7, 1);
              const b2 = block(1, 4, 8, 6, 2);
              const b3 = block(-1, b2, 5, 4, 2);
              box(-2, b3 + 1, 3, 1, sh(GOLD)); // the dharma wheel between deer
              orb(-1, b3 + 2, 1, sh(GOLD));
              for (const p of [-5, 3]) box(p, b3 + 2, 1, 2, sh(GOLD)); // the victory banners
              for (const p of [-8, 9]) box(p, b2 + 2, 1, 2, sh(GOLD));
              break;
            }
            if (kind === "bayannurCenter") {
              // Bayannur cultural centre (drawn from what such centres look like; no photo was found): a long
              // low hall with a glass front under a white sweeping roof, a taller stage block behind it.
              box(-8, 16, 17, 16, sh(WHITE));
              box(6, 16, 3, 16, dk(WHITE, 0.15));
              for (let j = 9; j < 16; j += 3) box(-8, j, 17, 1, dk(WHITE, 0.1));
              box(-16, 9, 33, 9, sh(GLASS));
              for (let p = -15; p < 16; p += 3) box(p, 8, 1, 7, dk(GLASS, 0.35));
              for (let i = -18; i <= 18; i++) box(i, 10 + Math.round(1.5 * Math.cos(i / 6)), 1, 2, sh(WHITE)); // the roof
              box(-2, 4, 5, 4, dark);
              break;
            }
            if (kind === "nankanGrottoes") {
              // Nankan Grottoes (Bazhong): a grey sandstone cliff honeycombed with carved Buddhist niches in rows,
              // each with its painted figures, and a tiled walkway shelter along the foot.
              const rock = [182, 170, 156];
              for (let i = -16; i <= 16; i++) {
                const a2 = Math.abs(i),
                  u = Math.round(a2 < 12 ? 19 + Math.sin(i * 0.9) : 19 - (a2 - 11) * 3);
                box(i, u, 1, u, sh(rock));
                if (i > 10) box(i, u, 1, u, dk(rock, 0.22));
                if (i % 3 === 0) box(i, u + 1, 2, 1, sh([96, 138, 84])); // the scrub on the clifftop
                if (i % 5 === 2) box(i, u - 2, 1, 4, dk(rock, 0.15)); // the weathering streaks
              }
              for (let r = 0; r < 3; r++)
                for (let c2 = 0; c2 < 7; c2++) {
                  const nw = (c2 + r) % 3 === 0 ? 4 : 3,
                    nx = -14 + c2 * 4 + (r % 2) * 2,
                    ny = 17 - r * 5;
                  if (nx + nw > 14) continue;
                  box(nx, ny, nw, 4, dk(rock, 0.55)); // a niche
                  box(nx, ny + 1, nw, 1, dk(rock, 0.3)); // its carved canopy
                  box(
                    nx + 1,
                    ny - 1,
                    nw - 2,
                    3,
                    sh(mixc(rock, (r + c2) % 2 ? [196, 110, 80] : [90, 150, 140], 0.55)),
                  ); // its figures
                  box(nx + 1, ny, nw - 2, 1, dk(rock, 0.55));
                }
              const r2 = hall(0, 0, 6, 3, [140, 60, 50], 3, [140, 60, 50]);
              roof(0, r2, 7, 2, GREY, 5);
              break;
            }
            if (kind === "datunManor") {
              // Datun Tusi Manor (Bijie): the Yi chieftains' stone-walled manor, three courts of grey-tiled halls
              // climbing the hillside, with a square stone gun tower at the corner (drawn without a photo).
              const st = [162, 150, 132];
              box(-13, 5, 29, 5, sh(st));
              box(-8, 10, 22, 5, sh(st));
              box(-3, 15, 16, 5, sh(st));
              for (const [cx, b, hw] of [
                [-6, 5, 5],
                [5, 10, 5],
                [6, 15, 4],
              ]) {
                const h = hall(cx, b, hw, 4, [170, 120, 90]);
                roof(cx, h, hw + 1, 3, GREY);
              }
              box(-17, 17, 5, 17, sh(st)); // the gun tower
              box(-13, 17, 1, 17, dk(st, 0.3));
              for (const r of [8, 13]) box(-15, r, 1, 2, dark);
              roof(-15, 17, 3, 3, GREY, 1);
              break;
            }
            if (kind === "huaxilou") {
              // Huaxi Lou (Bozhou): the theatre's gate, a grey brick facade carved like a paifang under green
              // glazed roofs with a tall central gable, three arched doors, and two iron flagpoles with their
              // stacked trays and coiling dragons.
              const br = [190, 180, 164],
                iron = [60, 58, 62];
              box(-12, 9, 25, 9, sh(br));
              box(12, 9, 1, 9, dk(br, 0.2));
              roof(0, 9, 12, 2, GREEN, 11);
              box(-6, 15, 13, 6, sh(br));
              roof(-3, 12, 4, 2, GREEN, 3);
              roof(3, 12, 4, 2, GREEN, 3);
              box(-3, 19, 7, 4, sh(br));
              roof(0, 19, 4, 3, GREEN, 2);
              for (const s2 of [-1, 1]) box(s2 * 2, 23, 1, 2, sh(GOLD)); // the little gilt figures on the ridge
              box(-1, 15, 3, 2, sh([90, 140, 110])); // the name board
              box(-2, 6, 5, 6, dark);
              dome(0, 6, 2, dark);
              for (const s of [-1, 1]) {
                box(s * 10 - 1, 4, 3, 4, dark);
                dome(s * 10, 4, 1, dark);
                box(s * 5 - 1, 7, 3, 2, dk(br, 0.25)); // carved panels
                const px = s * 7;
                box(px, 31, 1, 30, sh(iron)); // the iron flagpole
                for (const r of [15, 22, 27]) box(px - 1, r, 3, 1, sh(iron));
                for (const r of [12, 19, 25]) box(px + s, r, 1, 2, sh(iron));
                box(px - 1, 2, 3, 2, sh(STONE));
              }
              break;
            }
            if (kind === "manchukuoCouncil") {
              // Former Manchukuo State Council (Changchun): a tan stone block in the "imperial crown" style; a
              // portico of four tall columns, a stepped central tower with a colonnaded drum and a brown tiled
              // Chinese pyramid roof with a little finial; long wings with a brown tiled cornice.
              const st = [214, 196, 160],
                tile = [120, 74, 58];
              box(-20, 12, 41, 12, sh(st));
              box(-20, 13, 41, 1, sh(tile));
              for (let p = -18; p <= 18; p += 2)
                if (Math.abs(p) > 7) for (const r of [4, 9]) box(p, r, 1, 2, dark);
              box(-7, 16, 15, 16, sh(st));
              box(6, 16, 2, 16, dk(st, 0.2));
              box(-6, 11, 13, 9, dk(st, 0.55));
              for (const p of [-5, -2, 1, 4]) box(p, 11, 2, 9, sh(st)); // the portico's columns
              box(-7, 13, 15, 2, lt(st, 0.2));
              box(-5, 20, 11, 4, sh(st));
              box(-4, 26, 9, 6, sh(st));
              for (const p of [-3, -1, 1, 3]) box(p, 25, 1, 4, dk(st, 0.45));
              box(4, 26, 1, 6, dk(st, 0.2));
              const r = roof(0, 26, 6, 2, tile, 5);
              box(-4, r + 2, 9, 2, sh(st));
              roof(0, r + 2, 5, 4, tile, 0, 3);
              break;
            }
            if (kind === "jilinTvTower" || kind === "daqingTvTower" || kind === "pandaTower") {
              // TV towers: Jilin (Changchun) a tapering concrete shaft carrying a stack of round decks high up;
              // Daqing a pale gold steel lattice tapering from four splayed legs, a two-tier pod and a red-and-white
              // mast; the Tianfu Panda Tower (Chengdu) a slim shaft with a compact pod and a long tapering spire.
              const P2 = {
                jilinTvTower: { h: 40, pod: 30, pr: 4, ant: 12, ring: 2 },
                daqingTvTower: { h: 42, pod: 30, pr: 6, ant: 12, ring: 1 },
                pandaTower: { h: 44, pod: 32, pr: 4, ant: 14, ring: 3 },
              }[kind];
              const con = kind === "daqingTvTower" ? [222, 200, 150] : WHITE;
              if (kind === "daqingTvTower")
                for (let i = 1; i <= P2.h; i++) {
                  const k = Math.max(1, Math.round(6 * (1 - i / P2.h) ** 1.6 + 1));
                  box(-k, i, 1, 1, sh(con));
                  box(k, i, 1, 1, dk(con, 0.2));
                  if (i % 4 === 0) box(-k, i, 2 * k + 1, 1, sh(con));
                  else if (k > 1) box(i % 4 < 2 ? -k + (i % 4) : k - (i % 4) + 2, i, 1, 1, dk(con, 0.15)); // the bracing
                }
              else
                for (let i = 1; i <= P2.h; i++) {
                  const k = i < 8 ? Math.round(3 - i / 3) : 1;
                  box(-k, i, 2 * k + 1, 1, sh(con));
                  box(k, i, 1, 1, dk(con, 0.2));
                }
              for (let j = 0; j < P2.ring; j++) {
                const pb = P2.pod + j * 3;
                box(-P2.pr, pb + 2, 2 * P2.pr + 1, 2, sh(con));
                for (let p = -P2.pr + 1; p < P2.pr; p += 2) box(p, pb + 1, 1, 1, sh(GLASS));
                box(-P2.pr + 1, pb, 2 * P2.pr - 1, 1, dk(con, 0.3));
                box(P2.pr - 1, pb + 2, 2, 2, dk(con, 0.2));
              }
              if (kind === "daqingTvTower") {
                box(-4, 26, 9, 2, sh(con));
                box(-3, 24, 7, 1, dk(con, 0.3));
              }
              const at = P2.h + 1;
              for (let j = 0; j < P2.ant; j++)
                box(0, at + j, 1, 1, kind === "daqingTvTower" && j % 4 < 2 ? sh(RED) : sh(con));
              if (kind === "pandaTower") box(-1, at + 3, 3, 3, sh(con));
              break;
            }
            if (kind === "changdeWall") {
              // Changde Poetry Wall: the long flood wall on the Yuan River, its face carved with panels of poems
              // and reliefs, broken by a two-storey gate pavilion and smaller corner pavilions.
              wall(0, 0, 22, 8, [178, 172, 160], 0);
              for (let p = -20; p < 20; p += 4)
                if (Math.abs(p) > 4) box(p, 6, 3, 3, dk([178, 172, 160], 0.25));
              for (const s of [-1, 1]) {
                const h = hall(s * 19, 9, 2, 3, RED, 2);
                roof(s * 19, h, 3, 3, GREY, 0);
              }
              box(-5, 10, 11, 10, sh([178, 172, 160]));
              box(-1, 5, 3, 5, dark);
              let b = hall(0, 10, 4, 4);
              roof(0, b, 6, 2, GREY, 5);
              b = hall(0, b + 2, 3, 3);
              roof(0, b, 5, 3, GREY, 2);
              break;
            }
            if (kind === "youngMao") {
              // Young Mao Zedong statue (Orange Isle, Changsha): a 32 m granite head and shoulders with flowing
              // hair, rising straight out of a rough stone mass instead of a pedestal.
              const g2 = [176, 156, 134];
              for (let i = -14; i <= 14; i++) {
                const u = Math.max(1, Math.round(10 - Math.abs(i) ** 1.3 * 0.2 + Math.sin(i * 1.3) * 1.2));
                box(i, u, 1, u, sh(g2));
                if (i > 5) box(i, u, 1, u, dk(g2, 0.25));
                if (i % 3 === 0) box(i, u - 1, 1, 3, dk(g2, 0.35)); // the cracks in the rough stone
                if (i % 4 === 1) box(i, u, 1, 1, lt(g2, 0.3));
              }
              const art = STATUE_ART.mao;
              sprite(art, 7, 20, Math.round((20 * art[0].length) / art.length), sculpture(13));
              for (const p of [-13, -10, 10, 13]) orb(p, 2, 2, sh([70, 120, 70])); // the trees at its foot
              break;
            }
            if (kind === "shangdangGate") {
              // Shangdang Gate (Lu'an prefecture yamen, Changzhi): a two-storey gate tower on a high brick base
              // with a round-arched passage, flanked by the little drum and bell towers on their own bases.
              const br = [150, 120, 100];
              wall(0, 0, 9, 9, br, 3);
              let b = hall(0, 9, 6, 4);
              roof(0, b, 8, 2, GREY, 7);
              b = hall(0, b + 2, 5, 3);
              roof(0, b, 7, 4, GREY, 3);
              for (const s of [-1, 1]) {
                box(s * 12 - 3, 7, 7, 7, sh(br));
                box(s * 12 + 3, 7, 1, 7, dk(br, 0.25));
                const h = hall(s * 12, 7, 2, 3, RED, 2);
                roof(s * 12, h, 4, 4, GREY, 0);
              }
              break;
            }
            if (kind === "guangjiGate" || kind === "datongWall" || kind === "bajingPavilion") {
              // City gates: Guangji Gate (Chaozhou) a broad two-storey grey-roofed tower over the gate on the river wall;
              // Datong's Yonghe Gate a massive grey brick wall with a double-eaved red tower and corner turrets;
              // Bajing Pavilion (Ganzhou) a three-storey pavilion with green-tiled roofs on the old city wall.
              const G = {
                guangjiGate: { hw: 13, wh: 9, n: 2, hw2: 10, col: [176, 168, 156] },
                datongWall: { hw: 16, wh: 10, n: 2, hw2: 8, col: GREY },
                bajingPavilion: { hw: 10, wh: 7, n: 3, hw2: 5, col: [160, 132, 110] },
              }[kind];
              let b = wall(0, 0, G.hw, G.wh, G.col, 3);
              if (kind === "datongWall")
                for (const s of [-1, 1]) {
                  const h = hall(s * 14, b + 1, 2, 3, RED, 2);
                  roof(s * 14, h, 3, 2, GREY, 0);
                }
              b += 1;
              rail(0, b - 1, G.hw2 + 1, G.col);
              for (let i = 0; i < G.n; i++) {
                const hw = G.hw2 - i,
                  h = hall(0, b, hw, i ? 3 : 4, kind === "guangjiGate" ? [150, 60, 46] : RED);
                if (kind === "guangjiGate")
                  for (let p = -hw + 2; p < hw; p += 4) box(p, b + 1, 1, 1, sh(RED)); // the lanterns
                const last = i === G.n - 1;
                roof(
                  0,
                  h,
                  hw + 2,
                  last ? 4 : 2,
                  kind === "bajingPavilion" ? GREEN : GREY,
                  last ? Math.round(hw / 2) : hw + 1,
                );
                b = h + 2;
              }
              break;
            }
            if (kind === "rafflesChongqing") {
              // Raffles City Chongqing: six curved glass towers fanning out from the Chaotianmen headland like
              // sails, the four middle ones tied at the top by the long horizontal Crystal sky bridge.
              const tw = [
                [-15, 44, -1],
                [-9, 36, 0],
                [-3, 36, 0],
                [3, 36, 0],
                [9, 36, 0],
                [15, 44, 1],
              ];
              box(-18, 4, 37, 4, sh([170, 164, 156])); // the podium
              for (const [cx, h, lean2] of tw) {
                for (let i = 5; i <= h; i++) {
                  // the outer towers' tops are cut on a slant, like sails
                  const cut = lean2 && i > h - 4 ? h - i : 9,
                    l = cx - 2 + (lean2 > 0 ? 0 : 4 - Math.min(4, cut + 1));
                  box(l, i, Math.min(4, cut + 1), 1, i % 4 ? sh(GLASS) : lt(GLASS, 0.3));
                  box(cx + 1, i, 1, 1, dk(GLASS, 0.25));
                  if (i % 2) box(cx - 1, i, 1, 1, dk(GLASS, 0.12)); // the vertical fins
                }
              }
              box(-11, 39, 22, 3, sh([200, 210, 220])); // the Crystal
              box(-11, 37, 22, 1, dk(GLASS, 0.4));
              for (let p = -10; p < 11; p += 2) box(p, 38, 1, 1, sh(GLASS));
              break;
            }
            if (kind === "hongyaCave") {
              // Hongya Cave (Chongqing): eleven storeys of stilted houses clinging to the cliff by the Jialing
              // River, roof over roof with upturned eaves, the windows glowing golden.
              const wood = [110, 70, 52],
                glow = [252, 200, 110];
              box(-14, 3, 29, 3, sh([120, 116, 110]));
              for (let p = -13; p <= 13; p += 3) box(p, 6, 1, 3, sh(wood)); // the stilts
              let b = 6;
              for (let i = 0; i < 6; i++) {
                const hw = 14 - i * 2 + (i % 2),
                  h = hall(0, b, hw, 3, wood, 2, glow);
                for (let p = -hw + 1; p < hw; p += 2) box(p, b + 2, 1, 1, sh(glow));
                roof(0, h, hw + 1, 1, [70, 66, 70], hw - 1);
                b = h + 1;
              }
              roof(0, b, 4, 3, [70, 66, 70], 0, 2);
              break;
            }
            if (kind === "hangzhouBayBridge" || kind === "xinghaiBridge" || kind === "humenBridge") {
              const dh = 8;
              if (kind === "hangzhouBayBridge") {
                // Hangzhou Bay Bridge: a long low viaduct with green railings on a forest of piers; the navigation
                // span hangs from two diamond pylons by fans of stays.
                const pc = [200, 200, 196],
                  gr = [80, 150, 130];
                for (let p = -30; p <= 30; p += 5) box(p, dh - 1, 1, dh - 1, sh(pc));
                box(-32, dh + 1, 65, 2, sh(pc));
                box(-32, dh + 2, 65, 1, sh(gr));
                for (const s of [-1, 1]) {
                  const px = s * 11;
                  seg(px - 3, dh - 1, px, 30, sh(pc));
                  seg(px + 3, dh - 1, px, 30, sh(pc));
                  box(px - 2, 18, 5, 1, sh(pc));
                  for (let j = 0; j < 5; j++) {
                    stroke(px, 28 - j * 2, px - 4 - j * 2.2, dh + 2, 6);
                    stroke(px, 28 - j * 2, px + 4 + j * 2.2, dh + 2, 6);
                  }
                }
                break;
              }
              // Xinghai Bay Bridge (Dalian): a double-deck suspension bridge, a deep truss between its two decks,
              // H-shaped concrete towers with cross beams. Humen Bridge (Dongguan): long main span hung from
              // tall grey H towers, the cable sagging low to a slim deck.
              const H = kind === "humenBridge" ? 32 : 26,
                P0 = kind === "humenBridge" ? 14 : 12,
                E = 30,
                col = kind === "humenBridge" ? [128, 128, 134] : [226, 214, 190],
                cab = kind === "humenBridge" ? [84, 86, 96] : [150, 156, 166];
              const cy = (x) => {
                const a = Math.abs(x);
                if (a <= P0) return Math.round(dh + 3 + (H - dh - 4) * (a / P0) ** 2);
                return Math.round(H - 1 - (H - dh - 2) * ((a - P0) / (E - P0)));
              };
              for (let x = -E; x <= E; x++) box(x, cy(x), 1, 1, sh(cab));
              for (let x = -E + 2; x < E; x += 3)
                if (cy(x) > dh + 4) box(x, cy(x) - 1, 1, cy(x) - dh - 3, lt(cab, 0.45)); // the hangers
              box(-E - 2, dh + 2, 2 * E + 5, 2, sh(col));
              if (kind === "xinghaiBridge") {
                box(-E - 2, dh - 2, 2 * E + 5, 1, sh(col));
                for (let x = -E; x < E; x += 3) seg(x, dh - 2, x + 2, dh, dk(col, 0.2));
              }
              for (const s of [-1, 1]) {
                const px = s * P0;
                for (const d of [-2, 2]) box(px + d, H + 1, 1, H + 1, sh(col));
                for (const r of [H + 1, Math.round(H * 0.6), dh + 5]) box(px - 2, r, 5, 1, sh(col));
                box(px + 2, H + 1, 1, H + 1, dk(col, 0.25));
                box(s * E - 2, dh, 5, dh, dk(col, 0.15)); // the anchorages
              }
              break;
            }
            if (kind === "daqingDerrick") {
              // Daqing oil field: the "Iron Man" drilling derrick, a tapering red lattice mast with a crown block
              // and a work floor on a steel substructure, and a nodding pumpjack beside it.
              const st = [196, 64, 52],
                iron = [60, 60, 66];
              for (let i = 6; i <= 30; i++) {
                const k = Math.round(5 - (i - 6) * 0.15);
                box(-k, i, 1, 1, sh(st));
                box(k, i, 1, 1, sh(st));
                if (i % 5 === 1) box(-k, i, 2 * k + 1, 1, sh(st));
              }
              for (let i = 6; i < 28; i += 5) {
                const k = Math.round(5 - (i - 6) * 0.15),
                  k2 = Math.round(5 - (i - 1) * 0.15);
                stroke(-k, i, k2, i + 5, 10);
                stroke(k, i, -k2, i + 5, 10);
              }
              box(-2, 32, 5, 2, sh(st)); // the crown block
              box(0, 30, 1, 14, sh(iron)); // the drill line
              box(-5, 6, 11, 1, sh(GREY)); // the drill floor on its substructure
              box(-4, 5, 9, 5, sh([120, 110, 104]));
              for (let p = -3; p < 4; p += 3) stroke(p, 1, p + 2, 5, 8);
              const pj = 8; // the pumpjack
              stroke(pj, 1, pj + 1, 7, 8);
              stroke(pj + 3, 1, pj + 1, 7, 8);
              seg(pj - 2, 6, pj + 4, 9, sh(iron));
              box(pj + 4, 10, 2, 3, sh(iron)); // the horse head
              box(pj + 5, 7, 1, 6, sh(iron)); // the rod
              box(pj - 2, 5, 2, 2, sh(GOLD)); // the crank's counterweight
              box(pj - 2, 1, 8, 1, sh(GREY));
              break;
            }
            if (kind === "yaoyueTower") {
              // Yaoyue Tower (Keyuan Garden, Dongguan): the garden's four-storey tower of grey-blue brick with
              // small windows and a balcony, under a Lingnan hip-and-gable roof with a curled ridge.
              const br = [130, 136, 140];
              box(-5, 22, 11, 22, sh(br));
              box(4, 22, 2, 22, dk(br, 0.25));
              for (const r of [5, 11, 17]) {
                box(-5, r + 1, 11, 1, lt(br, 0.2));
                for (const p of [-3, 2]) box(p, r - 1, 2, 2, dark);
              }
              box(-1, 4, 3, 4, dark);
              rail(0, 18, 6, [110, 70, 50]);
              box(-6, 19, 13, 1, sh([110, 70, 50]));
              roof(0, 22, 7, 4, GREY, 3);
              for (const s of [-1, 1]) box(s * 3, 28, 1, 2, dk(GREY, 0.2));
              break;
            }
            if (kind === "jiukeshu") {
              // Jiukeshu Future Art Center (Shanghai Fengxian, drawn from memory; no photo was found): low white
              // pavilions among trees, their facades of thin vertical fins, with planted roof terraces.
              const tree = [86, 140, 80];
              for (const [cx, hw, h] of [
                [-10, 8, 9],
                [7, 9, 12],
                [0, 5, 15],
              ]) {
                box(cx - hw, h, 2 * hw + 1, h, sh(WHITE));
                for (let p = cx - hw + 1; p < cx + hw; p += 2) box(p, h - 1, 1, h - 3, dk(WHITE, 0.18));
                box(cx + hw, h, 1, h, dk(WHITE, 0.25));
                box(cx - hw, h + 1, 2 * hw + 1, 1, sh(tree));
                for (let p = cx - hw + 1; p < cx + hw; p += 3) box(p, h + 2, 2, 1, sh(tree));
              }
              for (const p of [-18, -16, 16, 18]) {
                box(p, 5, 1, 5, sh([100, 80, 60]));
                orb(p, 7, 2, sh(tree));
              }
              box(-2, 4, 5, 3, dark);
              break;
            }
            if (kind === "yonglingTombs") {
              // Qing Yongling Tombs (Fushun): the four stele pavilions standing side by side, square red halls
              // under yellow-tiled hip-and-gable roofs, on one stone terrace.
              let b = terrace(0, 17, 3, STONE);
              for (const cx of [-12, -4, 4, 12]) {
                box(cx - 3, b + 8, 7, 8, sh(RED));
                box(cx + 3, b + 8, 1, 8, dk(RED, 0.3));
                box(cx - 3, b + 8, 7, 1, sh(TEAL)); // the painted beams under the eaves
                const h = b + 8;
                box(cx - 1, b + 5, 3, 5, dark);
                dome(cx, b + 5, 1, dark);
                roof(cx, h, 4, 4, GOLD, 2);
              }
              break;
            }
            if (kind === "wanshouPalace") {
              // Yulong Wanshou Palace (Wenchangli, Fuzhou, Jiangxi; no photo found): a Taoist temple gate of
              // Gan style, a white wall with stepped horse-head gables, a carved gate with layered grey eaves.
              box(-14, 10, 29, 10, sh(WHITE));
              box(-14, 10, 29, 1, sh(GREY));
              for (const s of [-1, 1])
                for (let j = 0; j < 3; j++) {
                  const x0 = s * (14 - j * 3) - (s > 0 ? 3 : 0);
                  box(x0, 12 + j * 2, 4, 2 + j * 2, sh(WHITE)); // the horse-head gables
                  box(x0 - 1, 12 + j * 2 + 1, 6, 1, sh(GREY));
                }
              box(-7, 18, 15, 18, sh([196, 180, 160]));
              roof(0, 12, 9, 2, GREY, 8);
              roof(0, 18, 8, 3, GREY, 4);
              box(-2, 15, 5, 2, sh(GOLD));
              box(-2, 8, 5, 8, dark);
              for (const p of [-5, 4]) box(p, 6, 2, 5, dk([196, 180, 160], 0.3));
              break;
            }
            if (kind === "cantonTower") {
              // Canton Tower (Guangzhou): a white hyperboloid lattice that twists and pinches to a narrow waist,
              // its rings of steel crossing the diagonals, a glowing core, and a long antenna on the top deck.
              const h = 50;
              for (let i = 1; i <= h; i++) {
                const f = i / h,
                  k = Math.round(
                    f < 0.64 ? 3 + 6.5 * ((0.64 - f) / 0.64) ** 1.4 : 3 + 3 * ((f - 0.64) / 0.36) ** 1.3,
                  );
                box(-k, i, 1, 1, sh(WHITE));
                box(k, i, 1, 1, dk(WHITE, 0.2));
                if (i % 4 === 0) box(-k, i, 2 * k + 1, 1, sh(WHITE));
                const s = Math.round(k * Math.sin(i * 0.5));
                box(s, i, 1, 1, sh(WHITE));
                box(-s, i, 1, 1, dk(WHITE, 0.25));
                box(0, i, 1, 1, dk(GLASS, 0.15)); // the core
              }
              box(-6, h + 1, 13, 1, sh(WHITE));
              box(-1, h + 12, 3, 11, sh(WHITE));
              box(0, h + 20, 1, 8, sh(WHITE));
              for (let j = h + 14; j < h + 20; j += 3) box(0, j, 1, 1, sh(RED));
              break;
            }
            if (kind === "zhenhaiTower") {
              // Zhenhai Tower (Guangzhou): a five-storey watchtower, its two lower storeys of red sandstone, the
              // upper three red walls with rows of windows, each storey stepping back under a green-tiled eave,
              // and a green hip-and-gable roof.
              const st = [168, 84, 66];
              let b = 0;
              for (let i = 0; i < 5; i++) {
                const hw = 12 - i,
                  h = i < 2 ? 5 : 4;
                box(-hw, b + h, 2 * hw + 1, h, sh(i < 2 ? st : RED));
                box(hw - 1, b + h, 2, h, dk(st, 0.25));
                for (let p = -hw + 2; p < hw - 1; p += 3) box(p, b + h - 1, 1, 2, dark);
                if (i === 0) box(-1, 4, 3, 4, dark);
                b += h;
                box(-hw - 1, b + 1, 2 * hw + 3, 1, sh(GREEN));
                box(-hw, b, 2 * hw + 1, 1, dk(GREEN, 0.5));
                b += 1;
              }
              roof(0, b, 9, 4, GREEN, 4);
              break;
            }
            if (kind === "liuyangTemple") {
              // Liuyang Confucian Temple (Guankou): the Dacheng Hall, red columns under a double-eaved grey-green
              // hip-and-gable roof with steeply swept Hunan eaves, on a stone terrace with a carved stair.
              const b = terrace(0, 14, 3, STONE);
              rail(0, b, 13, STONE);
              const tile = [104, 112, 106],
                h = hall(0, b, 10, 6);
              roof(0, h, 13, 2, tile, 11);
              const h2 = hall(0, h + 2, 7, 3);
              roof(0, h2, 11, 5, tile, 5);
              for (const s of [-1, 1]) box(s * 12, h2 + 4, 1, 2, sh(tile)); // the Hunan eaves' high-swept tips
              box(-1, h2 - 1, 3, 2, sh(TEAL));
              break;
            }
            if (kind === "nanshanTemple") {
              // Nanshan Temple (Guigang): yellow-walled temple halls tucked into a green karst hill, a cave mouth
              // behind them and a little pavilion on the summit (no photo found).
              const hill = [96, 134, 88],
                rk = [160, 156, 146];
              for (let i = -15; i <= 15; i++) {
                const u = Math.max(
                  1,
                  Math.round(20 * Math.cos((i / 16) * (Math.PI / 2)) ** 0.7 + Math.sin(i * 1.4)),
                );
                box(i, u, 1, u, sh(i % 4 ? hill : rk));
                if (i > 6) box(i, u, 1, Math.round(u / 2), dk(hill, 0.25));
              }
              box(-3, 12, 7, 4, dark); // the cave
              const h = hall(-5, 0, 6, 5, [222, 190, 90]);
              roof(-5, h, 7, 3, GREY, 3);
              const h2 = hall(0, 18, 2, 2, RED, 2);
              roof(0, h2, 3, 3, GREY, 0);
              break;
            }
            if (kind === "sunMoonPagodas") {
              // Sun and Moon Pagodas (Guilin, Shan Lake): the nine-storey Sun Pagoda clad in gilded copper and,
              // beside it, the smaller seven-storey Moon Pagoda of glazed tiles, white with green eaves.
              const [t1, k1] = pagoda(-4, 0, {
                n: 9,
                w0: 4,
                w1: 3,
                th: 4,
                body: [226, 168, 60],
                eave: [240, 196, 80],
                timber: 1,
              });
              const r1 = roof(-4, t1, k1 + 1, 4, [240, 196, 80], 0, 0);
              spire(-4, r1, 6, GOLD);
              const [t2, k2] = pagoda(7, 0, {
                n: 7,
                w0: 2,
                w1: 2,
                th: 4,
                body: WHITE,
                eave: [80, 150, 120],
                timber: 1,
              });
              const r2 = roof(7, t2, k2 + 1, 3, [80, 150, 120], 0, 0);
              spire(7, r2, 4, GOLD);
              break;
            }
            // Jiaxiu Pavilion (Guiyang): a square three-storey pavilion with three tiers of upturned grey eaves,
            // red columns and white railings, on a stone islet in the Nanming River reached by the arched Fuyu
            // bridge.
            box(-8, 4, 17, 4, sh([150, 146, 138]));
            for (let i = 9; i <= 13; i++) box(i, 3, 1, 1, sh(STONE)); // the start of the Fuyu bridge
            box(9, 4, 5, 1, sh(STONE));
            box(11, 2, 1, 2, sh([150, 146, 138]));
            let jb = hall(0, 4, 5, 5);
            roof(0, jb, 8, 2, GREY, 7);
            rail(0, jb + 1, 5, WHITE);
            jb = hall(0, jb + 3, 4, 4);
            roof(0, jb, 7, 2, GREY, 6);
            jb = hall(0, jb + 2, 3, 3);
            roof(0, jb, 6, 4, GREY, 0, 3);
            break;
          }
