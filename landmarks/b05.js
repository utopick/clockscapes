          case "cnHallB05":
          case "brickPagoda":
          case "yellowCrane":
          case "wildGoose":
          case "haibao":
          case "erqiTower":
          case "bottleStupa":
          case "stupas108":
          case "lingshanBuddha":
          case "shimaoTowers":
          case "threeGorges":
          case "wuhanBridge":
          case "zunyiSite":
          case "liuziTemple":
          case "tongxinMosque": {
            // Chinese landmarks of batch b05, sharing a few helpers in one block. Colours given as an index
            // into the list above or as an [r, g, b] array; T(rgb, k) lightens (k > 0) or darkens (k < 0).
            const rgb = (v, d) => (Array.isArray(v) ? v : colors[v ?? d]),
              T = (a, k = 0) =>
                css(e.sh(k ? mixc(a, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)) : a)),
              brick = [150, 146, 140],
              gold = css(e.sh(colors[12])),
              // a line of 1-cell boxes with no gaps
              seg = (x1, y1, x2, y2, col) => {
                const m = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1), 1);
                for (let i = 0; i <= m; i++)
                  box(Math.round(x1 + ((x2 - x1) * i) / m), Math.round(y1 + ((y2 - y1) * i) / m), 1, 1, col);
              };
            // A Chinese tiled roof on cx: the eave row b, hw cells each side, its tips curling up `curl` cells,
            // a concave slope `rows` tall up to a ridge rh cells each side (rh 0: a pointed roof). The slope
            // shows its tile ribs, lit hip on the left and shaded on the right, and the ridge its end
            // ornaments; under the eave the deep shadow of the bracket sets.
            const roof = (cx, hw, b, rows, col, { rh = 0, curl = 1, ridge = true } = {}) => {
              const lit = T(col, 0.25),
                dark = T(col, -0.3),
                rib = T(col, -0.12);
              box(cx - hw, b, 2 * hw + 1, 1, T(col));
              box(cx - hw + 1, b - 1, 2 * hw - 1, 1, T(col, -0.55)); // the shadow under the eave
              for (const s of [-1, 1]) box(cx + s * (hw + 1), b + curl, 1, curl, T(col));
              for (let j = 1; j < rows; j++) {
                const f = rows > 1 ? (j / (rows - 1)) ** 1.6 : 1,
                  k = Math.max(rh, Math.round(hw - 1 - (hw - 1 - rh) * f));
                box(cx - k, b + j, 2 * k + 1, 1, T(col));
                for (let p = -k + 2; p < k - 1; p += 3) box(cx + p, b + j, 1, 1, rib);
                box(cx - k, b + j, 1, 1, lit);
                box(cx + k, b + j, 1, 1, dark);
              }
              if (ridge && rh > 0) {
                box(cx - rh, b + rows, 2 * rh + 1, 1, dark); // the main ridge and its two end ornaments
                for (const s of [-1, 1]) box(cx + s * rh, b + rows + 1, 1, 1, dark);
              }
            };
            // A storey of a timber hall: body rows b+1..b+h, hw cells each side, red columns every 3 cells
            // with dark lattice doors between them, a pale railing at its foot and the painted bracket band
            // (blue-green) under the eave.
            const storey = (cx, hw, b, h, col, wall, band = [64, 122, 120], rail = [226, 222, 210]) => {
              box(cx - hw, b + h, 2 * hw + 1, h, T(wall));
              for (let p = -hw; p <= hw; p += 3) box(cx + p, b + h, 1, h, T(col));
              box(cx + hw, b + h, 1, h, T(col, -0.3));
              if (h >= 3) box(cx - hw, b + h, 2 * hw + 1, 1, T(band));
              if (h >= 4) box(cx - hw - 1, b + 1, 2 * hw + 3, 1, T(rail));
            };
            // A brick or stone podium `h` tall whose top is hw cells each side, battered outwards at the foot;
            // optional gate tunnels (1 or 3), crenels on its edges, or a front stair.
            const podium = (hw, h, col, { gates = 0, cren = false, stair = false } = {}) => {
              for (let i = 1; i <= h; i++) {
                const k = hw + Math.round((h - i) / 3);
                box(-k, i, 2 * k + 1, 1, i === h ? T(col, 0.25) : i % 3 === 0 ? T(col, -0.1) : T(col));
                box(k, i, 1, 1, T(col, -0.3));
              }
              const tunnel = (cx, w, th) => {
                const k = Math.floor(w / 2);
                box(cx - k, th - 1, w, th - 1, 2);
                if (w >= 3) box(cx - k + 1, th, w - 2, 1, 2);
                box(cx - k - 1, th + 1, w + 2, 1, T(col, 0.3));
              };
              if (gates && h >= 4) {
                const th = Math.min(h - 2, Math.max(3, Math.round(h * 0.6)));
                tunnel(0, th >= 5 ? 5 : 3, th);
                if (gates >= 3 && hw >= 9)
                  for (const s of [-1, 1]) tunnel(s * Math.round(hw * 0.62), 3, th - 1);
              }
              if (cren)
                for (let p = -hw; p <= hw; p += 2) if (Math.abs(p) >= hw - 3) box(p, h + 1, 1, 1, T(col));
              if (stair) {
                box(-2, h, 5, h, T(col, 0.35));
                for (let i = 1; i < h; i += 2) box(-2, i, 5, 1, T(col, 0.1));
              }
            };
            // A Lamaist bottle stupa on cx, r its bulb's radius, its foot at `up`: a stepped square base, the
            // white bulb with its niche, a square neck, the cone of rings and a bronze canopy with a gilt tip.
            const bottle = (cx, up, r, col) => {
              const lit = T(col, 0.2),
                sh = T(col, -0.25),
                bw = r + 2;
              if (r >= 3) {
                box(cx - bw, up + 2, 2 * bw + 1, 2, T(col, -0.08));
                box(cx - bw + 1, up + 3, 2 * bw - 1, 1, lit);
                box(cx - bw + 1, up + 5, 2 * bw - 1, 2, T(col));
                box(cx + bw - 1, up + 5, 1, 2, sh);
                box(cx - r - 1, up + 6, 2 * r + 3, 1, lit);
              }
              const foot = r >= 3 ? up + 6 : up;
              orb(cx, foot + r, r, T(col));
              box(cx - r, foot + 1, 2 * r + 1, 1, T(col));
              if (r >= 2) {
                box(cx + Math.ceil(r / 2), foot + r + 1, Math.floor(r / 2), Math.max(1, r - 1), sh);
                box(cx - Math.round(r * 0.6), foot + r + 1, 1, 2, lit);
              }
              if (r >= 4) {
                box(cx - 1, foot + r + 1, 3, 3, 2); // the niche (yanmen)
                box(cx - 2, foot + r + 2, 5, 1, gold);
              }
              const nk = foot + 2 * r;
              box(cx - Math.max(1, r - 2), nk + 2, 2 * Math.max(1, r - 2) + 1, 2, T(col)); // the neck
              const ring = Math.max(3, Math.round(r * 2.2));
              for (let j = 1; j <= ring; j++) {
                const k = Math.max(0, Math.round(((r - 2) * (ring - j)) / ring));
                box(cx - k, nk + 2 + j, 2 * k + 1, 1, j % 2 ? T(col, -0.05) : lit);
              }
              const tp = nk + 2 + ring;
              if (r >= 3) {
                box(cx - 2, tp + 1, 5, 1, T([96, 104, 92])); // the bronze canopy
                box(cx - 1, tp + 2, 3, 1, T([96, 104, 92]));
              }
              box(cx, tp + (r >= 3 ? 4 : 1), 1, r >= 3 ? 2 : 1, gold);
            };
            if (kind === "cnHallB05") {
              // A Chinese timber hall, pavilion, drum or bell tower or gate tower (reused across batch b05):
              // an optional podium (base cells, colour bc, gates 0/1/3, cren, stair), o.n storeys o.w cells wide
              // narrowing by dw, each o.th tall (a number, or one per storey: a short upper storey makes a double
              // eave), red columns (c) round dark lattice walls (wall), a bracket band (band), curling roofs
              // (rc, curl) with rr rows on the lower eaves and rt on the top one; top "ridge" (a hip-and-gable
              // roof with its ridge) or "pyr" (a pointed roof with a gilt ball, or a gourd with fin "gourd").
              // o.wings: lower side halls with their own roofs.
              const W = o.w ?? 21,
                n = o.n ?? 1,
                dw = o.dw ?? 4,
                base = o.base ?? 0,
                top = o.top ?? "ridge",
                rc = rgb(o.rc, 9),
                col = rgb(o.c, 10),
                wall = o.wall ? rgb(o.wall) : [74, 54, 50],
                band = o.band ? rgb(o.band) : [64, 122, 120],
                curl = o.curl ?? 1,
                rr = o.rr ?? 2,
                ths = Array.isArray(o.th) ? o.th : Array(n).fill(o.th ?? 6);
              if (base)
                podium(Math.floor(W / 2) + 2, base, rgb(o.bc, null) ?? brick, {
                  gates: o.gate === true ? 1 : o.gate || 0,
                  cren: o.cren,
                  stair: o.stair,
                });
              if (o.wings) {
                const wx = Math.floor(W / 2) + 2,
                  ww = o.wings;
                for (const s of [-1, 1]) {
                  const cx = s * (wx + ww - 2);
                  storey(cx, ww - 1, base, 4, col, wall, band);
                  roof(cx, ww + 1, base + 5, 2, rc, { rh: ww - 2, curl });
                }
              }
              let b = base;
              for (let i = 0; i < n; i++) {
                const hw = Math.floor((W - i * dw) / 2),
                  h = ths[i] ?? 6,
                  last = i === n - 1;
                storey(0, hw, b, h, col, wall, band);
                const rows = last ? (o.rt ?? (top === "pyr" ? Math.max(3, Math.round(hw * 0.7)) : 4)) : rr,
                  rh = last ? (top === "pyr" ? 0 : Math.max(2, Math.round(hw * 0.55))) : hw;
                roof(0, hw + 2, b + h + 1, rows, rc, { rh, curl, ridge: last });
                if (!last) b += h + Math.max(1, rr - 1);
                else if (top === "pyr") {
                  const ap = b + h + 1 + rows;
                  if (o.fin === "gourd") {
                    orb(0, ap + 1, 1, gold);
                    box(0, ap + 4, 1, 2, gold);
                  } else {
                    box(0, ap + 1, 1, 1, gold);
                    orb(0, ap + 2, 1, gold);
                    box(0, ap + 4, 1, 1, gold);
                  }
                }
              }
            } else if (kind === "brickPagoda") {
              // A brick pagoda (reused across batch b05): o.n storeys from w cells wide at the foot, narrowing by dw
              // a storey (plus bulge: the slight swelling of Song and Liao towers), each th tall with an arched
              // window and corner pilasters. eave "brick" corbels out in two stepped courses; "wood" adds
              // a timber eave with curled tips in rc (Ming towers in the south); "dense" packs short
              // corbelled eaves with no openings (Tang dense-eave towers). base: a stone plinth; c the brick;
              // fin "gourd" (default), "ball" or "sorin" (a spire of rings).
              const n = o.n ?? 7,
                w = o.w ?? 13,
                dw = o.dw ?? 1,
                th = o.th ?? 4,
                base = o.base ?? 2,
                eave = o.eave ?? "brick",
                bc = rgb(o.c, 13),
                rc = rgb(o.rc, 2),
                bulge = o.bulge ?? 0;
              for (let i = 1; i <= base; i++) {
                const k = Math.floor(w / 2) + 1 + (base - i);
                box(-k, i, 2 * k + 1, 1, i === base ? T([200, 196, 186], 0.2) : T([180, 176, 166]));
              }
              let b = base,
                hw = 0;
              for (let i = 0; i < n; i++) {
                const sw = Math.round(bulge * Math.sin((Math.PI * i) / Math.max(1, n - 1)));
                hw = Math.max(1, Math.floor((w - i * dw) / 2) + sw - (i === 0 ? 0 : 0));
                const h = i === 0 ? th + 1 : th;
                box(-hw, b + h, 2 * hw + 1, h, T(bc));
                box(
                  hw - Math.max(0, Math.floor(hw / 3)),
                  b + h,
                  Math.max(1, Math.floor(hw / 3)) + 1,
                  h,
                  T(bc, -0.22),
                );
                box(-hw, b + h, 1, h, T(bc, 0.18));
                if (eave !== "dense" && h >= 3) {
                  box(0, b + h - 1, 1, Math.min(2, h - 2), 2); // the arched window
                  if (hw >= 5) for (const s of [-1, 1]) box(s * (hw - 1), b + h - 1, 1, h - 2, T(bc, -0.08)); // pilasters
                }
                b += h;
                if (eave === "wood") {
                  roof(0, hw + 2, b + 1, 2, rc, { ridge: false });
                  b += 1;
                } else {
                  box(-hw - 1, b + 1, 2 * hw + 3, 1, T(bc, 0.12)); // two corbelled courses
                  box(-hw - 1, b, 2 * hw + 3, 1, T(bc, -0.35));
                  if (eave === "brick")
                    (box(-hw - 2, b + 1, 1, 1, T(bc, 0.12)), box(hw + 2, b + 1, 1, 1, T(bc, -0.2)));
                  b += 1;
                }
              }
              // the top: a little pyramid roof and the finial
              cone(0, b, hw + 1, Math.max(2, hw), eave === "wood" ? T(rc) : T(bc, -0.15));
              const ap = b + Math.max(2, hw);
              if ((o.fin ?? "gourd") === "sorin") {
                box(0, ap + 6, 1, 6, gold);
                for (let j = 2; j < 6; j += 2) box(-1, ap + j, 3, 1, gold);
              } else if (o.fin === "ball") (orb(0, ap + 2, 1, gold), box(0, ap + 4, 1, 1, gold));
              else {
                orb(0, ap + 1, 1, gold);
                orb(0, ap + 3, 1, gold);
                box(0, ap + 5, 1, 1, gold);
              }
            } else if (kind === "yellowCrane") {
              // Yellow Crane Tower (Wuhan): five storeys of red columns and railings under golden glazed eaves,
              // each storey's eave broken by the projecting wings so the roofs read as rows of upturned horns,
              // on a white marble terrace, under a double pointed roof with a gilt gourd.
              const yel = [214, 164, 62],
                red = [186, 62, 48],
                marble = T([226, 222, 210]);
              box(-15, 2, 31, 2, marble);
              box(-14, 3, 29, 1, T([226, 222, 210], -0.15));
              for (let p = -14; p <= 14; p += 2) box(p, 4, 1, 1, marble);
              let b = 3;
              for (let i = 0; i < 5; i++) {
                const hw = 11 - i * 1.4,
                  k = Math.round(hw),
                  h = i === 0 ? 5 : 4;
                storey(0, k, b, h, red, [92, 50, 42], [76, 128, 116], [204, 92, 64]);
                // the main eave and the raised wing eaves either side of the middle bay
                roof(0, k + 3, b + h + 1, 2, yel, { ridge: false, curl: 2 });
                for (const s of [-1, 1]) {
                  box(s * (k - 3) - 2, b + h + 3, 5, 1, T(yel));
                  box(s * (k - 3) + s * 3, b + h + 4, 1, 1, T(yel));
                  box(s * (k - 3) - 1, b + h + 2, 3, 1, T(yel, -0.45));
                }
                b += h + 2;
              }
              roof(0, 6, b + 1, 3, yel, { curl: 2, ridge: false });
              roof(0, 4, b + 4, 3, yel, { curl: 1, ridge: false });
              orb(0, b + 8, 1, gold);
              box(0, b + 10, 1, 1, gold);
            } else if (kind === "wildGoose") {
              // Giant Wild Goose Pagoda (Xi'an): a square, plain Tang brick pagoda of seven storeys tapering
              // steadily, each storey divided by brick pilasters with one arched window in the middle and a
              // thin corbelled eave, on a wide square brick plinth; a small pyramid and finial on top.
              const bk = [196, 152, 104],
                sh = T(bk, -0.25),
                lit = T(bk, 0.15);
              box(-17, 4, 35, 4, T([172, 150, 120]));
              box(-17, 4, 35, 1, T([172, 150, 120], 0.2));
              box(-3, 3, 7, 3, T([172, 150, 120], 0.3)); // the stair
              let b = 4;
              for (let i = 0; i < 7; i++) {
                const hw = Math.round(11 - i * 1.15),
                  h = i === 0 ? 7 : 5;
                box(-hw, b + h, 2 * hw + 1, h, T(bk));
                box(hw - 2, b + h, 3, h, sh);
                box(-hw, b + h, 1, h, lit);
                for (let p = -hw + 3; p < hw - 1; p += 3)
                  if (Math.abs(p) > 1) box(p, b + h - 1, 1, h - 1, T(bk, -0.1));
                box(-1, b + h - 1, 3, h - 2, 2);
                box(0, b + h - 1, 1, 1, T(bk, -0.1));
                b += h;
                box(-hw - 1, b + 1, 2 * hw + 3, 1, lit);
                box(-hw, b, 2 * hw + 1, 1, sh);
                b += 1;
              }
              cone(0, b, 4, 3, T(bk, -0.1));
              box(0, b + 6, 1, 3, gold);
              orb(0, b + 4, 1, gold);
            } else if (kind === "haibao") {
              // Haibao Pagoda (Yinchuan): a tall square brick pagoda whose faces each step out in a middle bay,
              // so it is cross-shaped in plan, eleven storeys with little corbelled eaves and arched niches
              // on a high platform with a gate and stair; a green glazed peach-shaped top.
              const bk = [214, 198, 166],
                sh = T(bk, -0.3);
              podium(9, 8, [178, 170, 156], { gates: 1 });
              let b = 8;
              for (let i = 0; i < 11; i++) {
                const hw = 6 - Math.floor(i / 3),
                  h = i === 0 ? 5 : 3;
                box(-hw, b + h, 2 * hw + 1, h, T(bk, -0.12)); // the side bays, set back
                box(-hw + 2, b + h, 2 * hw - 3, h, T(bk)); // the middle bay, stepped out
                box(hw - 1, b + h, 2, h, sh);
                box(0, b + h - 1, 1, h - 2 || 1, 2);
                b += h;
                box(-hw - 1, b + 1, 2 * hw + 3, 1, T(bk, 0.15));
                box(-hw, b, 2 * hw + 1, 1, sh);
                b += 1;
              }
              box(-3, b + 2, 7, 2, T(bk));
              const grn = [76, 142, 96];
              orb(0, b + 5, 2, T(grn));
              cone(0, b + 5, 2, 3, T(grn));
              box(1, b + 6, 1, 2, T(grn, -0.25));
              box(0, b + 10, 1, 2, gold);
            } else if (kind === "erqiTower") {
              // Erqi Memorial Tower (Zhengzhou): two joined hexagonal towers, white with green glazed eaves on
              // every storey, one a storey taller than the other; a clock storey near the top, a small
              // pavilion roof and a red star on a mast.
              const grn = [70, 130, 86],
                wh = [232, 228, 216];
              box(-10, 3, 21, 3, T([200, 196, 186]));
              box(-10, 3, 21, 1, T([200, 196, 186], 0.2));
              const tower = (cx, n, hw) => {
                let b = 3;
                for (let i = 0; i < n; i++) {
                  const h = i === 0 ? 5 : 4,
                    k = i < 2 ? hw : hw - 1;
                  box(cx - k, b + h, 2 * k + 1, h, T(wh));
                  box(cx + k - 1, b + h, 2, h, T(wh, -0.2));
                  box(cx, b + h - 1, 1, h - 2, 2);
                  b += h;
                  roof(cx, k + 2, b + 1, 2, grn, { ridge: false });
                  b += 1;
                }
                return b;
              };
              const tl = tower(-4, 8, 4),
                tr = tower(4, 9, 4);
              for (const [cx, b] of [
                [-4, tl],
                [4, tr],
              ]) {
                box(cx - 3, b + 4, 7, 3, T(wh));
                orb(cx, b + 3, 1, T([60, 60, 70])); // the clock
                roof(cx, 4, b + 5, 3, grn, { ridge: false });
              }
              box(4, tr + 13, 1, 5, T([60, 60, 70]));
              box(3, tr + 13, 3, 1, 10);
              box(4, tr + 14, 1, 3, 10);
            } else if (kind === "bottleStupa" || kind === "stupas108") {
              if (kind === "bottleStupa") {
                // White Pagoda (Yangzhou, Beihai style): one big white Lamaist bottle stupa; o.r its bulb.
                bottle(0, 0, o.r ?? 6, rgb(o.c, 6));
              } else {
                // The 108 Stupas (Qingtongxia): small bottle stupas in rows climbing a hillside in a triangle,
                // 1, 3, 5... per terrace, a bigger one on top, on terraces of stone.
                const st = [208, 190, 150],
                  rows = o.rows ?? 6;
                for (let r = 0; r < rows; r++) {
                  const hw = Math.round((2 * (rows - 1 - r) + 1) * 1.5 + 1);
                  box(-hw, r * 3 + 1, 2 * hw + 1, r * 3 + 1, T([156, 138, 110], r % 2 ? -0.05 : 0.05));
                  box(-hw, r * 3 + 1, 2 * hw + 1, 1, T([156, 138, 110], 0.2));
                }
                for (let r = rows - 1; r >= 0; r--) {
                  const n = 2 * (rows - 1 - r) + 1;
                  for (let k = 0; k < n; k++)
                    bottle(Math.round((k - (n - 1) / 2) * 3), r * 3 + 1, r === rows - 1 ? 2 : 1, st);
                }
              }
            } else if (kind === "lingshanBuddha") {
              // Grand Buddha at Ling Shan (Wuxi): a standing bronze Buddha in a long draped robe, the right
              // hand raised palm out, the left lowered, the head with its curls and ushnisha, on a big lotus.
              const B = [168, 150, 120],
                lit = T(B, 0.3),
                bz = T(B),
                sh = T(B, -0.35);
              // the lotus throne on its pedestal
              box(-10, 3, 21, 3, T([200, 196, 186]));
              box(-10, 3, 21, 1, T([200, 196, 186], 0.2));
              for (let p = -8; p <= 8; p += 4) dome(p, 4, 2, T([186, 160, 120]));
              box(-8, 7, 17, 3, T([186, 160, 120], -0.15));
              box(-8, 7, 17, 1, T([186, 160, 120], 0.15));
              // the robe, falling straight to the feet, wider at the shoulders
              for (let i = 8; i <= 33; i++) {
                const k = i < 11 ? 5 : i < 24 ? 4 : i < 31 ? 5 : 6;
                box(-k, i, 2 * k + 1, 1, bz);
                box(k - 1, i, 2, 1, sh);
                box(-k, i, 1, 1, lit);
              }
              box(-5, 9, 11, 1, sh); // the hem over the feet
              for (let j = 0; j < 9; j++) box(-3 + j, 31 - j * 2, 1, 2, sh); // the drape across the body
              for (let j = 0; j < 5; j++) box(-4 + j, 21 - j * 2, 1, 1, sh);
              // the left arm down, the hand reaching out at the hip
              box(6, 31, 2, 12, bz);
              box(7, 31, 1, 12, sh);
              box(7, 19, 2, 2, lit);
              // the right arm raised, the palm turned out beside the shoulder
              box(-8, 32, 2, 6, bz);
              box(-9, 29, 3, 2, bz);
              box(-9, 36, 2, 7, lit);
              box(-10, 37, 1, 4, lit);
              // the neck, the head with its curls, and the ushnisha
              box(-1, 35, 3, 2, bz);
              orb(0, 38.5, 2.5, bz);
              box(1, 40, 2, 4, sh);
              box(-2, 41, 5, 1, T(B, -0.2));
              orb(0, 42, 1.3, T(B, -0.2));
            } else if (kind === "shimaoTowers") {
              // Shimao Straits Towers (Xiamen): two slim towers of bronze-tinted glass, the right one taller,
              // their faces curving in near the top to a pointed crown with a mast; vertical fins on the glass.
              const gl = [150, 132, 106],
                fin = T(gl, 0.25),
                sh = T(gl, -0.3);
              for (const [cx, h] of [
                [-6, 46],
                [5, 52],
              ]) {
                for (let i = 1; i <= h; i++) {
                  const f = Math.max(0, (i - (h - 12)) / 12),
                    k = Math.round(4 * Math.sqrt(1 - f * f));
                  box(cx - k, i, 2 * k + 1, 1, T(gl));
                  if (k > 1) box(cx + k - 1, i, 2, 1, sh);
                  if (k > 2) box(cx - 1, i, 1, 1, fin);
                  if (i % 6 === 0 && k > 1) box(cx - k, i, 2 * k + 1, 1, T(gl, -0.12));
                }
                box(cx, h + 5, 1, 5, T([200, 200, 200]));
              }
              box(-12, 3, 24, 3, T([160, 164, 170]));
            } else if (kind === "threeGorges") {
              // Three Gorges Dam (Yichang): the long straight concrete gravity dam; the spillway in the middle
              // with its sluice openings pouring white water, the crest road with its row of red gantry cranes,
              // and the low powerhouses at the foot on both sides.
              const con = [212, 214, 210],
                sh = T(con, -0.25),
                red = T([206, 60, 44]);
              box(-23, 15, 47, 15, T(con));
              for (let p = -22; p <= 22; p += 4) box(p, 15, 1, 14, T(con, -0.08));
              box(-23, 16, 47, 1, T(con, 0.25)); // the crest
              box(22, 15, 2, 15, sh);
              for (let p = -8; p <= 8; p += 3) {
                box(p, 10, 2, 3, 2); // the sluice openings, and their water
                box(p, 7, 2, 6, T([236, 244, 248]));
              }
              box(-10, 2, 21, 2, T([236, 244, 248], -0.05));
              for (const s of [-1, 1]) {
                box(s > 0 ? 11 : -22, 6, 12, 6, T(con, -0.1)); // the powerhouses
                for (let p = 1; p < 12; p += 2) box((s > 0 ? 11 : -22) + p, 5, 1, 2, 2);
              }
              for (const p of [-19, -12, -4, 4, 12, 19]) {
                box(p - 2, 19, 5, 1, red); // the gantry cranes
                box(p - 2, 18, 1, 2, red);
                box(p + 2, 18, 1, 2, red);
                box(p, 20, 2, 1, red);
              }
            } else if (kind === "wuhanBridge") {
              // Wuhan Yangtze River Bridge: the first bridge over the Yangtze, a long double-deck steel truss
              // (road on top, railway inside) on tall stone piers, with the bridgehead tower at the end: a tall
              // stone tower whose top carries a little double-eaved Chinese pavilion.
              const st = T([60, 78, 92]),
                stone = [196, 192, 180],
                dh = 6;
              for (let x = -20; x <= 28; x++) box(x, dh + 4, 1, 1, st);
              box(-20, dh + 5, 49, 1, T([120, 124, 128])); // the road deck
              box(-20, dh, 49, 1, st);
              for (let x = -20; x < 28; x += 4) {
                seg(x, dh, x + 2, dh + 4, st);
                seg(x + 2, dh + 4, x + 4, dh, st);
                box(x, dh + 4, 1, 5, st);
              }
              for (const p of [-13, -1, 11, 23]) {
                box(p - 1, dh - 1, 4, dh - 1, T(stone));
                box(p + 2, dh - 1, 1, dh - 1, T(stone, -0.25));
              }
              // the bridgehead tower
              box(-28, 14, 8, 14, T(stone));
              box(-22, 14, 2, 14, T(stone, -0.25));
              box(-27, 11, 2, 3, 2);
              box(-27, 6, 2, 3, 2);
              box(-29, 15, 10, 1, T(stone, 0.2));
              box(-27, 17, 6, 2, T([186, 62, 48]));
              roof(-24, 5, 16, 2, [80, 112, 96], { ridge: false });
              roof(-24, 4, 18, 3, [80, 112, 96], { ridge: false });
              box(-24, 21, 1, 1, gold);
            } else if (kind === "zunyiSite") {
              // Zunyi Conference Site: a two-storey 1930s house of grey brick, a deep veranda on both floors
              // with arches below and square columns with white bands above, red railings and lattice, under a
              // grey tiled hip roof with a small raised gable over the middle.
              const gr = [86, 90, 96],
                wh = T([232, 230, 222]);
              box(-15, 12, 31, 12, T([52, 46, 50]));
              for (let p = -15; p <= 15; p += 4) {
                box(p, 12, 2, 12, T(gr, 0.2));
                box(p, 7, 2, 1, wh);
                box(p, 12, 2, 1, wh);
              }
              for (let p = -13; p <= 13; p += 4) {
                dome(p + 0.5, 3, 1.5, T(gr)); // the ground-floor arches
                box(p, 10, 2, 2, T([176, 64, 50])); // the railings
              }
              box(-16, 7, 33, 1, wh);
              box(-16, 13, 33, 1, wh);
              roof(0, 17, 14, 3, [96, 98, 104], { rh: 10, ridge: false });
              box(-3, 17, 7, 2, wh);
              cone(0, 18, 3, 2, T([96, 98, 104]));
            } else if (kind === "liuziTemple") {
              // Liuzi Temple (Yongzhou): a Hunan temple front, a tall wall of grey stone and ochre plaster with
              // the dark stone gateway in the middle, stepped "horse-head" fire gables at both ends with curled
              // tips, and over the gate a short curved roof with upswept corners.
              const wl = [180, 160, 120],
                gr = [72, 74, 80];
              box(-12, 11, 25, 11, T(wl));
              box(-12, 4, 25, 4, T([196, 196, 190]));
              box(10, 11, 3, 11, T(wl, -0.2));
              box(-12, 11, 25, 1, T([226, 222, 210]));
              box(-3, 8, 7, 8, T(gr));
              box(-2, 6, 5, 6, 2);
              box(-1, 11, 3, 3, T(gr, 0.2));
              for (const s of [-1, 1]) {
                // the stepped gables
                box(s > 0 ? 10 : -14, 14, 5, 3, T([226, 222, 210]));
                box(s > 0 ? 10 : -14, 14, 5, 1, T(gr));
                box(s > 0 ? 11 : -13, 17, 3, 3, T([226, 222, 210]));
                box(s > 0 ? 11 : -13, 17, 3, 1, T(gr));
                box(s > 0 ? 14 : -14, 16, 1, 2, T(gr));
                box(s > 0 ? 13 : -13, 19, 1, 2, T(gr));
              }
              roof(0, 8, 13, 4, gr, { rh: 3, curl: 2 });
            } else if (kind === "tongxinMosque") {
              // Tongxin Great Mosque: a Chinese-style mosque of grey brick, the big prayer hall under grey tiled
              // hip-and-gable roofs on a high brick terrace with a gate, and beside it the minaret as a
              // two-storey pavilion with double eaves.
              const gr = [108, 108, 112],
                bk = [176, 160, 132];
              podium(10, 5, bk, { gates: 1 });
              storey(-3, 7, 5, 5, [150, 120, 96], [96, 86, 78], [120, 128, 120]);
              roof(-3, 9, 11, 4, gr, { rh: 5 });
              storey(7, 3, 5, 6, [150, 120, 96], [96, 86, 78], [120, 128, 120]);
              roof(7, 5, 12, 2, gr, { ridge: false });
              storey(7, 2, 12, 3, [150, 120, 96], [96, 86, 78], [120, 128, 120]);
              roof(7, 4, 16, 3, gr, { ridge: false });
              box(7, 20, 1, 2, gold);
            }
            break;
          }
