          case "b04Pagoda": {
            // Chinese brick and stone pagodas (shared by the b04 cities: Quanzhou's Kaiyuan twins, Qujing, Rui'an,
            // Shaoxing's Dashan, Songjiang's square pagoda, Tiger Hill, Taiyuan's twins, Guoqing's Sui pagoda,
            // Urumqi's Hongshan): o.n storeys of o.th rows (the first o.first rows taller) on a plinth of o.base
            // rows, o.w cells wide at the foot, each storey o.taper cells per side narrower (o.curve > 1 keeps
            // the shaft straight longer, then pulls it in, like Tang pagodas). Lit left face, shaded right
            // faces, an arched doorway or two windows by turns. o.eave: "tile" dark tiled eaves with upturned
            // tips (o.ew overhang), "brick" corbelled brick bands (o.eh rows), "stone" thin slabs with a
            // balcony railing (Kaiyuan), "lost" a bare ledge (Tiger Hill). o.top: "gourd" (a little stupa),
            // "spire" (rings and the iron chains to the eave tips) or "flat" (broken off). c, rc, bc are
            // colour indices or [r, g, b].
            const C = (v, d) => (Array.isArray(v) ? v : colors[v ?? d]),
              tn = (rgb, k) => css(e.sh(mixc(rgb, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              n = o.n ?? 7,
              th = o.th ?? 5,
              w = o.w ?? 11,
              taper = o.taper ?? 0.5,
              curve = o.curve ?? 1,
              base = o.base ?? 2,
              eave = o.eave ?? "tile",
              ew = o.ew ?? 2,
              eh = eave === "lost" ? 1 : eave === "brick" ? (o.eh ?? 2) : 2,
              body = C(o.c, 13),
              er = C(o.rc, 2),
              pl = C(o.bc, 13);
            const B = tn(body, 0),
              Bl = tn(body, 0.3),
              Bs = tn(body, -0.22),
              Bd = tn(body, -0.45),
              E = tn(er, 0),
              Es = tn(er, -0.35),
              El = tn(er, 0.3),
              dark = ink[2],
              hw0 = Math.floor(w / 2),
              hwAt = (i) => Math.max(1, Math.round(hw0 - taper * n * (i / n) ** curve));
            for (let i = 1; i <= base; i++) {
              const k = hw0 + 1 + (base - i);
              box(-k, i, 2 * k + 1, 1, i === base ? tn(pl, 0.3) : tn(pl, -0.1));
            }
            let b = base,
              hw = hw0;
            for (let i = 0; i < n; i++) {
              hw = hwAt(i);
              const h = th + (i === 0 ? (o.first ?? 0) : 0),
                top = b + h,
                sw = o.square ? 1 : Math.max(1, Math.round(hw / 2));
              box(-hw, top, 2 * hw + 1, h, B);
              box(-hw, top, 1, h, Bl);
              box(hw - sw + 1, top, sw, h, Bs);
              if (o.frame) {
                // the painted posts and the balcony of wooden-eaved pagodas
                const F = tn(C(o.frame), 0);
                for (let p = -hw; p <= hw; p += Math.max(2, hw)) box(p, top, 1, h, F);
                if (i > 0) box(-hw - 1, b + 1, 2 * hw + 3, 1, tn(C(o.frame), -0.3));
              }
              const oh = Math.max(1, Math.min(h - 2, 3));
              if (i % 2 === 0 || hw < 3) {
                box(hw >= 3 ? -1 : 0, b + oh, hw >= 3 ? 3 : 1, oh, dark);
                if (hw >= 3 && oh >= 2) box(0, b + oh + 1, 1, 1, dark);
              } else for (const s of [-1, 1]) box(s * Math.ceil(hw / 2), b + oh, 1, oh, dark);
              if (eave === "tile") {
                box(-hw - 1, top + 1, 2 * hw + 3, 1, Es);
                box(-hw - ew, top + 2, 2 * hw + 2 * ew + 1, 1, E);
                box(-hw + 1, top + 2, 2 * hw - 1, 1, El);
                for (const s of [-1, 1]) box(s * (hw + ew + 1), top + 3, 1, 1, E);
              } else if (eave === "brick") {
                for (let j = 1; j <= eh; j++) box(-hw - j, top + j, 2 * (hw + j) + 1, 1, j === eh ? E : Es);
              } else if (eave === "stone") {
                box(-hw - 2, top + 1, 2 * hw + 5, 1, E);
                for (const s of [-1, 1]) box(s * (hw + 3), top + 2, 1, 1, E);
                box(-hw - 1, top + 2, 2 * hw + 3, 1, Bl); // the balcony's railing
                for (let p = -hw - 1; p <= hw + 1; p += 2) box(p, top + 2, 1, 1, Bs);
              } else box(-hw - 1, top + 1, 2 * hw + 3, 1, Bd);
              b = top + eh;
            }
            const top = o.top ?? "gourd";
            if (top === "flat") {
              box(-hw, b + 1, 2 * hw + 1, 1, Bs);
              for (let p = -hw; p <= hw; p += 3) box(p, b + 2, 2, 1, Bs); // the broken-off stumps
            } else {
              const k = Math.max(1, hw - (top === "spire" ? 1 : 0)),
                rh = Math.max(2, Math.round(k * 0.8));
              cone(0, b, k, rh, E);
              box(-k, b + 1, 2 * k + 1, 1, Es);
              const m = b + rh;
              if (top === "spire") {
                const fin = o.fin ?? 8;
                box(-1, m + 2, 3, 2, El);
                box(0, m + fin, 1, fin, ink[12]);
                for (let j = 4; j < fin - 1; j += 2) box(-1, m + j, 3, 1, ink[12]); // the rings
                orb(0, m + fin - 1, 1, 12);
                for (const s of [-1, 1]) stroke(0, m + fin - 2, s * (hw + ew + 1), b - eh + 2, 8); // the chains
              } else {
                box(-1, m + 1, 3, 1, El); // lotus
                orb(0, m + 3, 1, 12);
                box(0, m + 6, 1, 2, 3);
              }
            }
            break;
          }
          case "b04Hall": {
            // Chinese halls, towers and gatehouses (shared by the b04 cities: Mukden's Phoenix Tower, the Dai
            // Temple, Nanhua, Longxing, Fuxi, the Purple Heaven Palace, the Qing tombs' soul tower, Shangqiu's
            // and Taizhou's gates, Wanghai Tower, Zhongshan Pavilion). o.n storeys on a terrace of o.base rows
            // (colour bc, o.rail a white marble balustrade) or on a grey brick city wall o.wall rows tall and
            // o.ww wide, with o.gates arched gateways and battlements. The first storey is o.w wide and o.h
            // tall, each upper one o.dw narrower and o.uh tall (a short upper storey is a double eave). Red
            // columns (c) between dark lattice bays, a painted beam band, bracket shadow, curved eaves in roof
            // colour rc with an o.trim edge; the top roof o.roof "gable" (hip-and-gable), "hip" or "pyr"
            // (pavilion, with a gilt finial), o.rh rows tall. c, rc, bc, trim, wc: colour indices or [r, g, b].
            const C = (v, d) => (Array.isArray(v) ? v : colors[v ?? d]),
              tn = (rgb, k) => css(e.sh(mixc(rgb, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              n = o.n ?? 1,
              w = o.w ?? 21,
              h0 = o.h ?? 6,
              uh = o.uh ?? Math.max(3, h0 - 2),
              dw = o.dw ?? 6,
              roof = o.roof ?? "gable",
              col = C(o.c, 10),
              rf = C(o.rc, 12),
              tr = o.trim == null ? null : tn(C(o.trim), 0),
              R = tn(rf, 0),
              Rs = tn(rf, -0.3),
              Rd = tn(rf, -0.5),
              Rl = tn(rf, 0.3),
              W = tn(col, 0),
              Wd = tn(col, -0.45),
              Wl = tn(col, 0.3),
              beam = css(e.sh([72, 132, 138])),
              dark = ink[2];
            let b = 0;
            if (o.wall) {
              // the city wall: battered grey brick, arched gateways, a crenellated parapet
              const wh = o.wall,
                k = Math.floor((o.ww ?? w + 6) / 2),
                wc = C(o.wc, 8),
                G = tn(wc, 0),
                Gs = tn(wc, -0.25),
                Gl = tn(wc, 0.25);
              for (let r = 1; r <= wh; r++) {
                const q = k - Math.floor((r - 1) / 4) + Math.floor((wh - 1) / 4);
                box(-q, r, 2 * q + 1, 1, r % 3 === 0 ? Gs : G);
                box(q, r, 1, 1, Gs);
              }
              const gates = o.gates ?? 1,
                gh = Math.max(3, wh - 3);
              for (let i = 0; i < gates; i++) {
                const gx = gates === 1 ? 0 : Math.round(((i - (gates - 1) / 2) * 2 * k) / (gates + 1)),
                  gw = i === (gates - 1) / 2 || gates === 1 ? 1 : 0;
                box(gx - gw - 1, gh + 1, 2 * gw + 3, 1, Gl);
                box(gx - gw, gh, 2 * gw + 1, gh, dark);
                box(gx - gw - 1, gh - 1, 1, gh - 1, dark);
                box(gx + gw + 1, gh - 1, 1, gh - 1, dark);
              }
              box(-k - 1, wh + 1, 2 * k + 3, 1, Gl);
              for (let p = -k - 1; p <= k + 1; p += 2) box(p, wh + 2, 1, 1, G);
              b = wh + 1;
            } else if (o.base) {
              const bc = C(o.bc, 13);
              for (let r = 1; r <= o.base; r++) {
                const q = Math.floor(w / 2) + 3 + Math.floor((o.base - r) / 2);
                box(-q, r, 2 * q + 1, 1, r === o.base ? tn(bc, 0.3) : tn(bc, r % 2 ? -0.1 : 0));
              }
              for (let r = 1; r < o.base; r++) box(-2, r, 5, 1, tn(bc, r % 2 ? 0.35 : 0.1)); // the steps
              b = o.base;
              if (o.rail) {
                const q = Math.floor(w / 2) + 2;
                box(-q, b + 1, 2 * q + 1, 1, css(e.sh([236, 232, 222])));
                for (let p = -q; p <= q; p += 2) box(p, b + 2, 1, 1, css(e.sh([236, 232, 222])));
                box(-2, b + 1, 5, 1, tn(bc, 0.35));
              }
            }
            let hw = Math.floor(w / 2);
            for (let i = 0; i < n; i++) {
              hw = Math.floor(w / 2) - Math.round((i * dw) / 2);
              const h = i === 0 ? h0 : uh,
                last = i === n - 1,
                top = b + h;
              // walls: red columns between dark lattice bays, a painted beam and the brackets' shadow
              box(-hw, top, 2 * hw + 1, h, Wd);
              const bay = hw >= 9 ? 3 : 2;
              for (let p = -hw; p <= hw; p += bay) box(p, top - 1, 1, h - 1, W);
              box(-hw, top - 1, 1, h - 1, Wl);
              if (h >= 4)
                for (let p = -hw + 1; p < hw; p += bay)
                  if (p % bay !== 0 || bay === 2)
                    box(p, b + Math.ceil(h / 2), Math.min(bay - 1, hw - p), 1, Wd);
              if (o.door !== false && i === 0) box(-1, b + Math.min(h - 1, 4), 3, Math.min(h - 1, 4), dark);
              box(-hw, top, 2 * hw + 1, 1, beam);
              const over = Math.max(2, Math.round(hw / 5)),
                eh = last ? (o.rh ?? Math.max(4, Math.round(hw * 0.55))) : (o.sk ?? 3);
              // the eave line: a dark lip, tips curling up at both ends
              box(-hw - over, top + 1, 2 * (hw + over) + 1, 1, tr ?? Rs);
              for (const s of [-1, 1]) box(s * (hw + over + 1), top + 2, 1, 1, tr ?? R);
              box(-hw, top + 1, 2 * hw + 1, 1, Rd);
              const ridge = !last
                  ? hw - 1
                  : roof === "pyr"
                    ? 0
                    : roof === "hip"
                      ? Math.round(hw * 0.55)
                      : Math.round(hw * 0.7),
                K = hw + over;
              for (let j = 1; j < eh; j++) {
                const f = j / eh,
                  q =
                    roof === "gable" && last
                      ? Math.round(
                          f < 0.45
                            ? K - (K - hw * 0.8) * (f / 0.45)
                            : hw * 0.8 - (hw * 0.1 * (f - 0.45)) / 0.55,
                        )
                      : Math.round(ridge + (K - ridge) * (1 - f) ** 1.6);
                box(-q, top + 1 + j, 2 * q + 1, 1, j === 1 ? R : j % 2 ? Rs : R);
                box(q, top + 1 + j, 1, 1, Rd);
                if (roof === "gable" && last && f >= 0.45 && q > 1) box(-q, top + 1 + j, 1, 1, Rl);
              }
              for (let p = -hw + 1; p < hw; p += 3) box(p, top + Math.min(eh, 3), 1, Math.min(eh, 3) - 1, Rs); // tile rows
              b = top + eh - (last ? 0 : 1);
              if (last) {
                if (roof === "pyr") {
                  box(-1, b + 1, 3, 1, ink[12]);
                  orb(0, b + 2, 1, 12);
                  box(0, b + 5, 1, 2, 3);
                } else {
                  box(-ridge, b + 1, 2 * ridge + 1, 1, tr ?? Rd); // the ridge and its curled end beasts
                  for (const s of [-1, 1]) box(s * ridge, b + 3, 1, 2, tr ?? Rd);
                  if (o.pearl) orb(0, b + 2, 1, 12);
                }
              }
            }
            break;
          }
          case "huashan":
          case "sanqingshan":
          case "danxiashan":
          case "wudangshan":
          case "maijishan": {
            // Sacred mountains, from an outline of [x, height] points per mountain: Mount Hua's sheer granite
            // faces with the plank walkway and the summit pavilion; Sanqing's granite pillars over wooded
            // slopes; Danxia's red sandstone cliffs with green tops; Wudang's wooded peak ringed by the
            // stone wall of the Purple Forbidden City, the gilt Golden Hall on top; Maijishan's red haystack
            // cliff with its galleries, cave niches and the great Buddha triad.
            const M = {
                huashan: {
                  pts: [
                    [-16, 0],
                    [-15, 7],
                    [-13, 11],
                    [-12, 20],
                    [-10, 23],
                    [-8, 22],
                    [-7, 19],
                    [-6, 29],
                    [-4, 33],
                    [-1, 36],
                    [2, 37],
                    [4, 36],
                    [6, 31],
                    [8, 24],
                    [11, 14],
                    [14, 6],
                    [16, 0],
                  ],
                  rock: [214, 206, 188],
                  streak: 1,
                  pines: [
                    [-10, 23],
                    [-3, 34],
                    [1, 37],
                    [5, 35],
                  ],
                },
                sanqingshan: {
                  pts: [
                    [-17, 0],
                    [-15, 6],
                    [-11, 11],
                    [-6, 13],
                    [0, 15],
                    [6, 14],
                    [11, 12],
                    [15, 7],
                    [17, 0],
                  ],
                  rock: [70, 118, 72],
                  wooded: 1,
                  pillars: [
                    [-13, 3, 21],
                    [-7, 4, 26],
                    [-1, 3, 31],
                    [5, 4, 28],
                    [11, 3, 22],
                  ],
                },
                danxiashan: {
                  pts: [
                    [-16, 0],
                    [-16, 10],
                    [-15, 15],
                    [-9, 16],
                    [-8, 13],
                    [-6, 12],
                    [-5, 22],
                    [-4, 24],
                    [5, 24],
                    [6, 21],
                    [7, 16],
                    [10, 16],
                    [11, 18],
                    [15, 18],
                    [16, 12],
                    [16, 0],
                  ],
                  rock: [196, 96, 72],
                  strata: 1,
                  green: 3,
                  foot: 6,
                },
                wudangshan: {
                  pts: [
                    [-15, 0],
                    [-13, 5],
                    [-10, 8],
                    [-8, 13],
                    [-6, 12],
                    [-4, 17],
                    [-2, 22],
                    [0, 24],
                    [2, 23],
                    [3, 20],
                    [5, 17],
                    [7, 15],
                    [9, 10],
                    [12, 6],
                    [15, 0],
                  ],
                  rock: [74, 124, 78],
                  wooded: 1,
                },
                maijishan: {
                  pts: [
                    [-13, 0],
                    [-13, 5],
                    [-12, 14],
                    [-11, 19],
                    [-9, 23],
                    [-6, 25],
                    [-2, 26],
                    [3, 26],
                    [7, 25],
                    [10, 22],
                    [12, 17],
                    [13, 10],
                    [13, 0],
                  ],
                  rock: [164, 104, 82],
                  strata: 1,
                  green: 2,
                },
              }[kind],
              tn = (rgb, k) => css(e.sh(mixc(rgb, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              R = tn(M.rock, 0),
              Rl = tn(M.rock, 0.25),
              Rs = tn(M.rock, -0.25),
              Rd = tn(M.rock, -0.45),
              G = css(e.sh([66, 116, 70])),
              Gd = css(e.sh([44, 86, 56])),
              pts = M.pts,
              hAt = (x) => {
                for (let i = 1; i < pts.length; i++) {
                  const [xa, ya] = pts[i - 1],
                    [xb, yb] = pts[i];
                  if (x >= xa && x <= xb)
                    return xb === xa ? Math.max(ya, yb) : Math.round(ya + ((yb - ya) * (x - xa)) / (xb - xa));
                }
                return 0;
              };
            const x0 = pts[0][0],
              x1 = pts[pts.length - 1][0];
            for (let x = x0; x <= x1; x++) {
              const h = hAt(x),
                s = hAt(x + 1) - hAt(x - 1);
              if (h <= 0) continue;
              box(x, h, 1, h, s < -1 ? Rs : s > 1 ? Rl : R);
              if (M.wooded) {
                if ((x * 5) % 3 === 0) box(x, h, 1, 1, Gd); // the crowns of the trees
                if ((x * 7) % 4 === 1 && h > 5) box(x, h - 3, 1, 1, Gd);
              }
              if (M.streak && (x * 7 + 3) % 4 === 0 && h > 8) box(x, h - 2, 1, Math.round(h * 0.55), Rd);
              if (M.strata) for (let r = 4; r < h - 1; r += 4) box(x, r + ((x >> 2) & 1), 1, 1, Rs);
              if (M.green) {
                box(x, h + ((x * 5) % 3 === 0 ? 1 : 0), 1, M.green + ((x * 5) % 3 === 0 ? 1 : 0), G); // the forest on top
                box(x, h - M.green + 1, 1, 1, Gd);
              }
              if (M.foot && h > 2) {
                const f = Math.min(h, M.foot + ((x * 7) % 5 === 0 ? 1 : 0));
                box(x, f, 1, f, G);
                box(x, f, 1, 1, (x * 3) % 4 === 0 ? Gd : G);
              }
            }
            for (const [px, py] of M.pines || []) {
              box(px - 1, py + 1, 3, 1, Gd);
              box(px, py + 2, 1, 1, G);
            }
            if (kind === "huashan") {
              // the plank walkway pinned to the main face, and a pavilion on the summit
              box(4, 25, 4, 1, ink[1]);
              for (let p = 4; p < 8; p += 2) box(p, 24, 1, 1, ink[1]);
              box(1, 40, 3, 2, css(e.sh([150, 60, 52])));
              box(0, 41, 5, 1, ink[2]);
              box(2, 42, 1, 1, ink[2]);
            } else if (kind === "sanqingshan") {
              const S = css(e.sh([196, 186, 166])),
                Ss = css(e.sh([150, 142, 128])),
                Sd = css(e.sh([112, 106, 98]));
              for (const [px, pw, ph] of M.pillars) {
                const l = px - Math.floor(pw / 2);
                box(l, ph - 2, pw, ph - 2, S);
                box(l + 1, ph, Math.max(1, pw - 2), 2, S); // the rounded head
                box(l + pw - 1, ph - 2, 1, ph - 2, Ss);
                for (let r = 6; r < ph - 3; r += 5) box(l + 1, r, 1, 2, Sd); // the cracks
                box(l - 1, ph - 4, 2, 1, Gd); // a pine clinging to it
                box(l + pw - 1, ph + 1, 2, 1, G);
              }
              for (let x = x0 + 1; x < x1; x += 2) box(x, Math.min(hAt(x), 6), 1, 2, x % 4 ? G : Gd);
            } else if (kind === "wudangshan") {
              // the wall of the Purple Forbidden City around the summit, and the Golden Hall
              const S = css(e.sh([196, 190, 176])),
                gold = css(e.sh([222, 176, 70])),
                goldD = css(e.sh([168, 124, 44]));
              for (let x = -3; x <= 3; x++)
                box(x, hAt(x) - 1, 1, 4, x > 0 ? css(e.sh([138, 134, 124])) : css(e.sh([170, 164, 150]))); // bare summit rock
              for (let x = -7; x <= 6; x++) {
                const y = hAt(x) - 5;
                box(x, y, 1, 2, x % 2 ? S : css(e.sh([166, 160, 148])));
              }
              box(-6, 15, 13, 1, css(e.sh([166, 72, 58]))); // a red temple wall lower down
              box(-6, 14, 13, 1, css(e.sh([206, 92, 70])));
              box(-7, 16, 15, 1, css(e.sh([112, 118, 112])));
              box(-2, 25, 5, 3, gold);
              box(1, 25, 1, 3, goldD);
              box(-1, 24, 1, 2, ink[2]);
              box(-3, 26, 7, 1, goldD);
              box(-2, 27, 5, 1, gold);
              box(-1, 28, 3, 1, goldD);
              box(0, 29, 1, 1, gold);
            } else if (kind === "maijishan") {
              // galleries zigzagging up the face, the stairs between them, the great Buddha triad on the left
              const plank = css(e.sh([226, 206, 176]));
              for (const [l, r, y] of [
                [-4, 10, 6],
                [-2, 11, 10],
                [-5, 9, 14],
                [-1, 10, 18],
              ]) {
                box(l, y, r - l, 1, plank);
                for (let p = l + 1; p < r; p += 3) box(p, y + 2, 1, 2, ink[2]);
              }
              for (const [x, y] of [
                [7, 7],
                [1, 11],
                [-3, 15],
                [6, 15],
                [-2, 9],
                [4, 19],
              ]) {
                box(x, y, 1, 3, plank); // the stairs between the galleries
              }
              const pale = css(e.sh([220, 200, 170])),
                paleS = css(e.sh([176, 156, 132]));
              for (const [bx, bh] of [
                [-11, 7],
                [-8, 10],
                [-5, 7],
              ]) {
                box(bx - 1, bh + 6, 3, bh, pale);
                box(bx + 1, bh + 6, 1, bh, paleS);
                box(bx, bh + 8, 1, 2, pale);
              }
            }
            break;
          }
          case "b04ArchBridge": {
            // Old Chinese stone arch bridges (b04: Zhaozhou's Anji Bridge, Shaoxing's Guangning Bridge): o.w
            // cells each side, one arch o.span cells each side of the centre and o.rise tall (o.poly: the
            // many-sided arch of Shaoxing), the deck o.deck high at the crown and o.hump lower at the ends,
            // o.open spandrel arches [[x, r], ...] (mirrored), a balustrade with posts. c is the stone colour.
            const C = (v, d) => (Array.isArray(v) ? v : colors[v ?? d]),
              tn = (rgb, k) => css(e.sh(mixc(rgb, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              st = C(o.c, 13),
              S = tn(st, 0),
              Sl = tn(st, 0.3),
              Ss = tn(st, -0.2),
              Sd = tn(st, -0.45),
              w = o.w ?? 14,
              span = o.span ?? w - 3,
              rise = o.rise ?? 6,
              deck = o.deck ?? rise + 3,
              hump = o.hump ?? 2,
              open = o.open ?? [],
              archY = (x) =>
                Math.abs(x) >= span
                  ? 0
                  : o.poly
                    ? Math.min(rise, Math.round((span - Math.abs(x)) * 1.4))
                    : Math.round(rise * Math.sqrt(1 - (x / span) ** 2));
            for (let x = -w; x <= w; x++) {
              const top = Math.round(deck - hump * (x / w) ** 2),
                bot = archY(x);
              let lo = 0,
                hi = 0;
              for (const [cx, r] of open)
                for (const s of [-1, 1]) {
                  const d = Math.abs(x - s * cx);
                  if (d <= r) {
                    lo = archY(s * cx) + 2;
                    hi = Math.min(top - 2, lo + Math.round(r) + Math.round(Math.sqrt(r * r - d * d)));
                  }
                }
              const ink2 = (x * 3) % 7 === 0 ? Ss : S;
              if (hi > lo) {
                box(x, lo, 1, lo - bot, ink2);
                box(x, top, 1, top - hi, ink2);
                box(x, hi + 1, 1, 1, Sl); // the small arch's ring
              } else box(x, top, 1, top - bot, ink2);
              if (bot > 0) box(x, bot + 1, 1, 1, x & 1 ? Sl : Ss); // the voussoirs of the main arch
              box(x, top, 1, 1, Sl); // the deck's edge
              box(x, top + 1, 1, 1, x % 3 === 0 ? Sl : Ss); // the balustrade
              if (x % 3 === 0) box(x, top + 2, 1, 1, Sl);
            }
            box(-w, 1, 2 * w + 1, 1, Sd);
            break;
          }
          case "orientalPearl": {
            // Oriental Pearl Tower, Shanghai: three slanting legs and three columns carrying the big pink lower
            // sphere, five little spheres up the columns, the upper sphere, the small space module and the
            // ringed mast.
            const pink = css(e.sh([206, 78, 132])),
              pinkL = css(e.sh([238, 146, 182])),
              pinkD = css(e.sh([146, 48, 96])),
              col = css(e.sh([228, 222, 216])),
              colS = css(e.sh([170, 164, 166])),
              win = css(e.sh([90, 60, 90]));
            box(-8, 3, 17, 3, colS);
            box(-8, 3, 17, 1, col);
            box(-2, 2, 5, 2, win);
            for (let y = 1; y <= 10; y++) {
              const k = Math.round(8 - y * 0.5);
              box(-k, y, 1, 1, col);
              box(k, y, 1, 1, colS);
            }
            box(-3, 40, 1, 40, col);
            box(3, 40, 1, 40, colS);
            box(0, 44, 1, 44, col);
            const ball = (cy, r) => {
              orb(0, cy, r, pinkD);
              orb(-Math.max(1, r / 6), cy + Math.max(1, r / 6), r - 1, pink);
              if (r >= 3) orb(-Math.round(r / 2.5), cy + Math.round(r / 2.5), Math.max(1, r / 3), pinkL);
              if (r >= 4) box(-r + 1, cy, 2 * r - 1, 1, win); // the observation deck's windows
            };
            ball(16, 7);
            for (const [bx, by] of [
              [-3, 24],
              [3, 26],
              [-3, 28],
              [3, 30],
            ])
              ball(by, 1.2);
            ball(35, 5);
            box(-1, 45, 3, 4, col);
            box(1, 45, 1, 4, colS);
            ball(43, 2);
            box(0, 52, 1, 7, 3);
            for (const r of [47, 49]) box(-1, r, 3, 1, col);
            break;
          }
          case "nanshanGuanyin": {
            // Guanyin of Nanshan, Sanya: the 108 m white bodhisattva on its island, three figures back to back
            // (the side ones show as shoulders and heads in profile), a gilt lotus throne, the pointed gold
            // halo, hands holding the sutra, on a grey terrace above the sea.
            const wh = css(e.sh([240, 238, 232])),
              whS = css(e.sh([196, 196, 198])),
              whD = css(e.sh([158, 160, 168])),
              gold = css(e.sh([214, 166, 80])),
              goldD = css(e.sh([166, 112, 54])),
              grey = css(e.sh([168, 166, 160])),
              greyL = css(e.sh([206, 204, 198]));
            box(-7, 3, 15, 3, grey);
            box(-7, 3, 15, 1, greyL);
            box(-2, 2, 5, 2, ink[2]);
            box(-6, 6, 13, 3, grey);
            box(-6, 6, 13, 1, greyL);
            box(-5, 10, 11, 4, gold); // the lotus throne
            for (let p = -5; p <= 5; p += 2) box(p, 10, 1, 2, goldD);
            box(-6, 11, 13, 1, gold);
            for (let y = 11; y <= 34; y++) {
              const k = y > 31 ? 4 : y > 16 ? 3 : 4;
              box(-k, y, 2 * k + 1, 1, wh);
              box(k, y, 1, 1, whS);
              if (y > 13 && y < 33) for (const s of [-1, 1]) box(s * (k + 1), y, 1, 1, whD); // the figures behind
            }
            for (const p of [-2, 1]) box(p, 25, 1, 11, whS); // the folds of the robe
            box(-2, 28, 5, 3, whS); // the hands and the sutra
            box(-1, 29, 3, 1, gold);
            box(-3, 44, 7, 4, gold); // the pointed halo
            box(-2, 45, 5, 1, gold);
            box(0, 46, 1, 1, goldD);
            box(-3, 40, 1, 4, goldD);
            box(-1, 39, 3, 5, wh); // the head and its crown
            box(1, 39, 1, 5, whS);
            box(-1, 40, 3, 1, gold);
            for (const s of [-1, 1]) {
              box(s * 3 - (s < 0 ? 0 : 0), 37, 1, 3, whS); // the side heads in profile
            }
            break;
          }
          case "pingAn": {
            // Ping An Finance Center, Shenzhen: a tall stone-and-glass shaft that tapers gently, steel ribs up
            // its corners and centre, lighter bands at the mechanical floors, and a long pointed crown.
            const gl = [86, 106, 132],
              G = css(e.sh(gl)),
              Gs = css(e.sh(mixc(gl, [41, 40, 54], 0.3))),
              steel = css(e.sh([222, 226, 230])),
              steelS = css(e.sh([160, 166, 174]));
            box(-6, 4, 13, 4, Gs);
            box(-6, 4, 13, 1, steel);
            box(-1, 3, 3, 3, ink[2]);
            for (let y = 5; y <= 58; y++) {
              const k =
                y <= 48 ? Math.round(5.2 - y * 0.03) : Math.max(0, Math.round(3.6 * (1 - (y - 48) / 10)));
              box(-k, y, 2 * k + 1, 1, y % 10 === 0 && y < 48 ? steelS : G);
              if (k >= 2) box(1, y, k - 1, 1, y % 10 === 0 && y < 48 ? Gs : Gs);
              box(-k, y, 1, 1, steel);
              box(k, y, 1, 1, steelS);
              if (k >= 3) box(0, y, 1, 1, y > 48 ? steelS : steel);
            }
            break;
          }
          case "kk100": {
            // KK100 (Kingkey 100), Shenzhen: a slim blue glass slab with white mullions that swells near the
            // top into a rounded, ingot-like crown over the sky lobby.
            const gl = [74, 120, 172],
              G = css(e.sh(gl)),
              Gs = css(e.sh(mixc(gl, [41, 40, 54], 0.3))),
              mul = css(e.sh([214, 228, 238]));
            for (let y = 1; y <= 49; y++) {
              const k = y <= 34 ? 4 : y <= 44 ? 5 : [5, 4, 4, 3, 2][y - 45];
              box(-k, y, 2 * k + 1, 1, G);
              box(1, y, k, 1, Gs);
              for (let p = -k + 1; p < k; p += 2) if (y < 44) box(p, y, 1, 1, mul);
              box(-k, y, 1, 1, mul);
            }
            box(-3, 43, 7, 3, css(e.sh([40, 52, 74]))); // the sky lobby
            box(-4, 44, 9, 1, mul);
            box(-1, 3, 3, 3, ink[2]);
            break;
          }
          case "gateToEast": {
            // Gate to the East, Suzhou: two glass towers joined at the top over a tall arched opening; grey-blue
            // glass in floor bands, the inner edges lit, the right leg in shade, rounded top corners.
            const gl = [150, 176, 198],
              G = css(e.sh(gl)),
              Gs = css(e.sh(mixc(gl, [41, 40, 54], 0.28))),
              Gl = css(e.sh(mixc(gl, [255, 248, 225], 0.35))),
              band = css(e.sh(mixc(gl, [41, 40, 54], 0.12)));
            for (let x = -7; x <= 7; x++) {
              const a = Math.abs(x),
                top = a === 7 ? 43 : 44,
                lo = a <= 2 ? 30 + Math.round(6 * Math.sqrt(1 - (x / 3) ** 2)) : 0;
              box(x, top, 1, top - lo, x > 4 ? Gs : G);
              for (let y = Math.max(lo + 1, 3); y < top; y += 3) box(x, y, 1, 1, x > 4 ? Gs : band);
              if (a === 3 && x < 0) box(x, 32, 1, 32, Gl);
              if (lo) box(x, lo + 1, 1, 1, Gl);
            }
            box(-7, 44, 1, 43, Gl);
            break;
          }
          case "tianjinEye": {
            // Tianjin Eye: the big wheel standing on the Yongle Bridge over the Hai River, its A-frame legs on
            // the bridge's piers and the road passing under the rim. The capsules turn (drawWheels).
            const r = o.r ?? 13,
              dh = o.dh ?? 7,
              hub = dh + 3 + r,
              deckC = css(e.sh([226, 222, 212])),
              deckS = css(e.sh([160, 156, 150]));
            box(-17, dh + 2, 35, 2, deckC);
            box(-17, dh, 35, 1, deckS);
            for (let p = -17; p <= 17; p += 2) box(p, dh + 3, 1, 1, deckS);
            for (const p of [-15, -6, 6, 15]) {
              box(p - 1, dh - 1, 3, dh - 1, deckS);
              box(p - 1, dh - 1, 1, dh - 1, deckC);
            }
            for (const p of [-1, 1]) {
              stroke(p * Math.round(r * 0.5), dh + 2, 0, hub, t);
              stroke(p * Math.round(r * 0.5) + p, dh + 2, 0, hub - 1, t);
            }
            g.fillStyle = ink[c];
            ring(g, X(0), Y(hub), R(r));
            orb(0, hub, 1, t);
            e.wheels?.push({
              x: X(0),
              y: Y(hub),
              r: R(r),
              cr: R(r),
              spokes: 8,
              caps: 16,
              spoke: ink[c],
              cap: ink[t],
            });
            break;
          }
          case "suzhouMuseum": {
            // Suzhou Museum (I. M. Pei): white walls framed by dark grey stone, the central hall's stepped,
            // faceted glass-and-slate roof, and wings with sharp slate gables.
            const wh = css(e.sh([240, 238, 232])),
              whS = css(e.sh([206, 204, 200])),
              sl = css(e.sh([78, 84, 94])),
              slL = css(e.sh([122, 130, 142])),
              glass = css(e.sh([150, 176, 190]));
            for (const s of [-1, 1]) {
              const l = s < 0 ? -15 : 5;
              box(l, 8, 11, 8, s < 0 ? wh : whS);
              box(l, 8, 11, 1, sl);
              box(l, 1, 11, 1, sl);
              for (const p of [l, l + 10]) box(p, 8, 1, 8, sl);
              box(l + 2, 5, 3, 1, sl); // window slots
              box(l + 6, 5, 3, 1, sl);
              for (let j = 1; j <= 4; j++) box(l + j, 8 + j, 11 - 2 * j, 1, j === 4 ? slL : sl); // the gable roof
              box(l + 5, 9, 1, 1, glass);
            }
            box(-5, 13, 11, 13, wh);
            box(-5, 13, 11, 1, sl);
            for (const p of [-5, 5]) box(p, 13, 1, 13, sl);
            box(-2, 4, 5, 4, sl); // the entrance
            box(-1, 3, 3, 3, glass);
            for (let j = 1; j <= 3; j++) box(-5 + j, 13 + j, 11 - 2 * j, 1, j === 2 ? glass : sl);
            box(-2, 19, 5, 3, wh);
            box(-2, 19, 5, 1, sl);
            for (const p of [-2, 2]) box(p, 19, 1, 3, sl);
            box(-1, 20, 3, 1, sl);
            box(0, 21, 1, 1, glass);
            break;
          }
          case "bazaarMinaret": {
            // The tower of the International Grand Bazaar, Urumqi: a round tan brick minaret patterned with
            // diamond brickwork on a stepped stone pyramid, a corbelled (muqarnas) collar under the wider
            // observation drum with its arched windows, and a flaring crown on a flat top.
            const br = [204, 150, 104],
              B = css(e.sh(br)),
              Bs = css(e.sh(mixc(br, [41, 40, 54], 0.25))),
              Bl = css(e.sh(mixc(br, [255, 248, 225], 0.3))),
              pale = css(e.sh([232, 200, 160])),
              stone = [170, 160, 140];
            for (let r = 1; r <= 6; r++) {
              const k = 4 - Math.floor((r - 1) / 2);
              box(-k, r, 2 * k + 1, 1, css(e.sh(mixc(stone, r % 2 ? [41, 40, 54] : [255, 248, 225], 0.15))));
            }
            box(-2, 4, 5, 1, ink[12]); // the gilt name
            for (let y = 7; y <= 33; y++) {
              box(-2, y, 5, 1, B);
              box(-2, y, 1, 1, Bl);
              box(2, y, 1, 1, Bs);
              if (y > 9 && y % 2 === 0) box(y % 4 ? -1 : 1, y, 1, 1, Bs); // the diamond brickwork
            }
            box(-3, 35, 7, 2, pale); // the corbelled collar
            for (let p = -3; p <= 3; p += 2) box(p, 34, 1, 1, Bs);
            box(-3, 41, 7, 5, Bl); // the observation drum
            for (const p of [-2, 0, 2]) box(p, 40, 1, 2, ink[2]);
            box(3, 41, 1, 5, Bs);
            box(-4, 43, 9, 2, pale); // the flaring crown
            for (let p = -4; p <= 4; p += 2) box(p, 42, 1, 1, Bs);
            box(-4, 44, 9, 1, Bs);
            break;
          }
          case "tangshanMemorial": {
            // Tangshan Earthquake Memorial: two tall tapering granite pylons (the front pair of four) with a
            // narrow gap between, a notch near their tops, the gilt inscription panel bridging the gap, on a
            // wide base carved with reliefs and flanked by two sculpted blocks on legs.
            const st = [176, 168, 156],
              S = css(e.sh(st)),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.25))),
              Ss = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.45)));
            for (let y = 9; y <= 36; y++) {
              const f = (y - 9) / 27,
                ow = Math.round(4 - 2.6 * f) - (y > 32 ? 1 : 0); // each pylon's width, stepping in near the top
              for (const s of [-1, 1]) {
                const l = s < 0 ? -2 - ow : 2;
                box(l, y, ow + 1, 1, y % 3 === 0 ? Ss : S);
                box(l, y, 1, 1, Sl);
                box(l + ow, y, 1, 1, Sd);
              }
            }
            box(-4, 20, 9, 3, css(e.sh([150, 140, 126])));
            box(-3, 19, 7, 1, ink[12]); // the gilt inscription
            box(-6, 9, 13, 5, S); // the relief base
            box(-6, 9, 13, 1, Sl);
            for (let p = -5; p <= 5; p += 2) box(p, 7, 1, 2, Ss);
            box(-1, 4, 3, 4, ink[2]); // the passage under it
            for (const s of [-1, 1]) {
              box(s * 7 - 1, 10, 3, 5, S); // the flanking sculpted blocks
              box(s * 7, 8, 1, 2, Sd);
              box(s * 7 - 1, 5, 3, 5, Ss);
            }
            box(-8, 1, 17, 1, Sd);
            break;
          }
          case "tianjinTower": {
            // Tianjin Radio and TV Tower: a tall tapering concrete shaft on a round podium, the big pod of
            // stacked rings near the top, a slim upper stage and the mast.
            const cc = [206, 196, 176],
              Cc = css(e.sh(cc)),
              Cl = css(e.sh(mixc(cc, [255, 248, 225], 0.3))),
              Cs = css(e.sh(mixc(cc, [41, 40, 54], 0.25))),
              win = css(e.sh([86, 96, 112]));
            box(-6, 3, 13, 3, Cs);
            box(-6, 3, 13, 1, Cl);
            box(-5, 4, 11, 1, css(e.sh([206, 70, 64]))); // the billboard band
            for (let y = 4; y <= 40; y++) {
              const k = Math.round(2.6 - (1.6 * (y - 4)) / 36);
              box(-k, y, 2 * k + 1, 1, Cc);
              box(-k, y, 1, 1, Cl);
              if (k >= 1) box(k, y, 1, 1, Cs);
            }
            for (const [y, k, col] of [
              [41, 2, Cs],
              [42, 3, Cc],
              [43, 4, Cl],
              [44, 4, win],
              [45, 4, Cc],
              [46, 3, win],
              [47, 3, Cc],
              [48, 2, Cs],
            ])
              box(-k, y, 2 * k + 1, 1, col);
            box(-1, 51, 3, 3, Cc);
            box(1, 51, 1, 3, Cs);
            box(0, 56, 1, 5, 6);
            break;
          }
          case "kiteMuseum": {
            // World Kite Museum, Weifang: pale grey blocks under green glazed hip roofs with white fascias, a big
            // cream relief of kites (an eagle, a butterfly, a dragon) on the tall wing, and a red-pillared porch.
            const wall = [214, 210, 202],
              Wl = css(e.sh(wall)),
              Ws = css(e.sh(mixc(wall, [41, 40, 54], 0.2))),
              gr = css(e.sh([60, 132, 104])),
              grD = css(e.sh([40, 96, 78])),
              fas = css(e.sh([240, 238, 232])),
              cream = css(e.sh([236, 220, 180])),
              win = css(e.sh([70, 80, 96])),
              roof = (l, w, up) => {
                box(l - 1, up + 1, w + 2, 1, fas); // the white fascia
                box(l - 2, up + 2, w + 4, 1, gr);
                box(l - 1, up + 3, w + 2, 1, grD);
                box(l + 1, up + 4, w - 2, 1, gr);
              };
            box(-1, 11, 12, 11, Ws); // the middle range and its windows
            for (let p = 0; p < 10; p += 3) box(p, 8, 2, 3, win);
            roof(-1, 12, 11);
            box(10, 12, 6, 12, Wl);
            box(14, 12, 2, 12, Ws);
            roof(10, 6, 12);
            box(-15, 14, 13, 14, Wl); // the tall wing with the relief
            box(-4, 14, 2, 14, Ws);
            roof(-15, 13, 14);
            box(-13, 12, 8, 10, cream);
            box(-11, 11, 4, 1, css(e.sh([86, 150, 90]))); // a dragon
            box(-12, 9, 5, 1, css(e.sh([150, 96, 70]))); // the eagle's wings
            box(-10, 10, 1, 3, css(e.sh([196, 60, 54])));
            box(-9, 6, 3, 2, css(e.sh([196, 92, 140]))); // a butterfly
            box(-12, 5, 2, 2, css(e.sh([212, 166, 70])));
            box(4, 5, 10, 5, Ws); // the porch
            for (const p of [4, 8, 13]) box(p, 4, 1, 4, css(e.sh([170, 52, 46])));
            box(9, 3, 3, 3, win);
            roof(4, 10, 5);
            box(-15, 1, 31, 1, Ws);
            break;
          }
