          case "thaiPrang":
          case "watArun":
          case "chaiwatthanaram":
          case "samYot":
          case "thaiChedi":
          case "siSanphet":
          case "pathommachedi":
          case "chediLuang":
          case "laoThat":
          case "thaiHall":
          case "grandPalace":
          case "whiteTemple":
          case "sanctuaryOfTruth":
          case "watSothon":
          case "kaenNakhon":
          case "chiangRaiClock":
          case "mukdahanTower":
          case "khanapNam": {
            // Thai temples (b23), one block so the kinds share their parts. Colours (c, t and the optional
            // ones) are palette indices or [r, g, b]. thaiPrang: a Khmer or Ayutthaya prang on its stepped
            // plinth (o.spike the gilt trident of the Ayutthaya ones, o.porch a gabled porch, as at Phanom
            // Rung). thaiChedi: a bell chedi (o.lanna the tall stepped Lanna base, o.umb gilt parasols at its
            // corners, o.tip the spire's colour, o.ruin a broken top, o.speck shell texture, o.porch little
            // porches, o.hall a wihan's roof beside it). laoThat: a square Lao that with its lotus-bud top
            // (Phra That Phanom, Si Song Rak). thaiHall: a temple hall seen from its gable end, its roof in
            // o.layers nested tiers with gilt bargeboards, chofa and naga tips (o.spire a prasat spire on top,
            // o.open an open sala on pillars). The rest are one-off buildings drawn from these parts.
            const rgb = (col) => (typeof col === "number" ? colors[col] : col),
              tn = (col, k = 0) =>
                css(
                  e.sh(
                    k > 0
                      ? mixc(rgb(col), [255, 248, 225], k)
                      : k < 0
                        ? mixc(rgb(col), [41, 40, 54], -k)
                        : rgb(col),
                  ),
                ),
              row = (x, j, k, col, lt = 0) => box(x - k, j, 2 * k + 1, 1, tn(col, lt)),
              // one row of a body, lit on its left edge and shaded on its right
              solid = (x, j, k, col, lt = 0) => {
                row(x, j, k, col, lt);
                if (k >= 2) {
                  box(x - k, j, 1, 1, tn(col, lt + 0.3));
                  box(x + k - (k >= 5 ? 1 : 0), j, k >= 5 ? 2 : 1, 1, tn(col, lt - 0.3));
                }
              };
            const prang = (x, w, h, C, T, op = {}) => {
              const hw = Math.floor(w / 2),
                K = Math.max(2, hw - 2),
                b = Math.max(2, Math.round(h * (op.base ?? 0.09))),
                bh = Math.max(4, Math.round(h * (op.body ?? 0.22))),
                s0 = b + bh + 1,
                top = h - (op.spike ? Math.max(4, Math.round(h * 0.13)) : 2),
                steps = op.steps ?? 2;
              for (let j = 1; j <= b; j++) {
                const st = Math.floor(((j - 1) * steps) / b),
                  k = hw - st * Math.max(1, Math.round((hw - K) / steps));
                solid(x, j, k, C);
                if (Math.floor((j * steps) / b) !== st || j === b) row(x, j, k, C, 0.25);
              }
              for (let j = b + 1; j <= b + bh; j++) solid(x, j, K, C);
              if (K >= 4) {
                box(x - K + 1, b + bh, 1, bh, tn(C, -0.18)); // the redented corners
                box(x + K - 2, b + bh, 1, bh, tn(C, 0.12));
              }
              const dw = K >= 5 ? 1 : 0;
              box(x - dw, b + bh - 2, 2 * dw + 1, bh - 3, 2);
              row(x, b + bh - 1, dw + 1, T, 0.15); // the lintel
              row(x, s0, K + 1, T, 0.2); // the cornice
              if (op.porch) {
                const pk = Math.max(2, Math.round(K * 0.6)),
                  ph = b + bh - 2;
                for (let j = b + 1; j <= ph; j++) solid(x, j, pk, C, 0.06);
                cone(x, ph, pk + 1, pk + 2, tn(C, 0.15));
                box(x, ph + pk + 3, 1, 1, tn(T, 0.2));
                box(x - dw, ph - 1, 2 * dw + 1, ph - b - 2, 2);
              }
              const tall = top - s0,
                tier = Math.max(3, Math.round(tall / (op.tiers ?? 6)));
              for (let j = 1; j <= tall; j++) {
                const f = j / tall,
                  k = Math.max(0, Math.round(K * Math.pow(1 - Math.pow(f, op.round ?? 2.2), 0.55))),
                  m = j % tier,
                  y = s0 + j;
                if (m === 0 && f < 0.9) {
                  row(x, y, k + 1, T, 0.15); // a tier's ledge
                  continue;
                }
                solid(x, y, k, C);
                if (m === 1 && k >= 2 && f < 0.85) {
                  box(x - k - 1, y, 1, 1, tn(C, 0.2)); // the antefixes at its corners
                  box(x + k + 1, y, 1, 1, tn(C, -0.2));
                }
                if (m === Math.ceil(tier / 2) && k >= 3 && f < 0.75) box(x, y, 1, 1, 2); // a niche
                if (op.dots && k >= 2)
                  for (let p = -k + 1 + ((j + x) % 2); p < k; p += 2)
                    if ((p + j) % 3 === 0) box(x + p, y, 1, 1, op.dots[(p + j + 99) % op.dots.length]);
              }
              if (op.spike) {
                row(x, top + 1, 1, T, 0.2); // the amalaka ring
                box(x, h, 1, h - top - 1, 3);
                box(x - 1, h - 2, 3, 1, 3); // the trident
              } else {
                row(x, top + 1, 1, C, 0.1); // the lotus bud on top
                box(x, top + 2, 1, 1, tn(C, 0.1));
              }
            };
            const chedi = (x, w, h, C, T, op = {}) => {
              const hw = Math.floor(w / 2),
                bH = Math.max(3, Math.round(h * (op.base ?? (op.lanna ? 0.3 : 0.14)))),
                steps = op.steps ?? (op.lanna ? 4 : 3),
                Kb = op.bell ?? Math.round(hw * (op.lanna ? 0.5 : 0.62)),
                tip = op.tip ?? C;
              for (let j = 1; j <= bH; j++) {
                const st = Math.floor(((j - 1) * steps) / bH),
                  k = hw - st * (op.lanna ? Math.max(1, Math.round((hw - Kb - 3) / (steps - 1))) : 1),
                  edge = Math.floor((j * steps) / bH) !== st || j === bH;
                solid(x, j, k, C);
                if (edge) row(x, j, k, C, 0.25);
                else if (op.lanna && (j + st) % 3 === 0) row(x, j, k - 1, C, -0.22); // the mouldings
                if (op.niches && st === 0 && j === 2)
                  for (const p of [-6, -3, 0, 3, 6]) box(x + p, j + 1, 1, 2, 2);
              }
              let y = bH;
              const rr = h >= 30 ? 2 : 1;
              for (let i = 0; i < 3; i++)
                for (let r = 0; r < rr; r++) solid(x, ++y, Kb + 3 - i, C, r === rr - 1 ? 0.22 : -0.05); // the rings
              const bellH = Math.max(3, Math.round(h * (op.bellH ?? 0.24))),
                cut = op.ruin ? Math.round(bellH * 0.8) : bellH;
              for (let j = 1; j <= cut; j++) {
                const f = (j - 0.5) / bellH,
                  k = Math.max(1, Math.round(Kb * Math.sqrt(1 - Math.pow(f, op.flat ?? 2.4))));
                solid(x, y + j, k, C);
                if (op.speck && k >= 2)
                  for (let p = -k + 1 + (j % 2); p < k; p += 3)
                    box(x + p, y + j, 1, 1, tn(C, (p + j) % 2 ? -0.3 : 0.3));
              }
              y += cut;
              if (op.ruin) {
                // the broken top, crumbling off to one side
                const k = Math.max(1, Math.round(Kb * 0.6));
                box(x - k, y + 1, k + 2, 1, tn(C, 0.1));
                box(x - k + 1, y + 2, k - 1, 1, tn(C, 0.1));
                return;
              }
              const hk = Math.max(1, Math.round(Kb * 0.3));
              row(x, y + 1, hk + 1, T, 0.2); // the harmika (balang)
              for (let j = 2; j <= (h >= 30 ? 3 : 2); j++) solid(x, y + j, hk, T);
              y += h >= 30 ? 4 : 3;
              row(x, y, hk + 1, T, 0.2);
              if (op.windows) for (const p of [-hk + 1, 0, hk - 1]) box(x + p, y - 1, 1, 1, 2);
              const sp = h - y;
              for (let j = 1; j <= sp; j++) {
                const f = j / sp,
                  k = Math.max(0, Math.round(hk * Math.pow(1 - f, 0.9)));
                row(x, y + j, k, tip, j % 2 && f < 0.75 ? -0.25 : 0.05); // the ringed spire
                if (k >= 1) box(x - k, y + j, 1, 1, tn(tip, 0.3));
              }
              box(x - 1, y + Math.round(sp * 0.8), 3, 1, 3); // the banana bud (pli)
              box(x, h + 3, 1, 3, 3);
              if (op.umb)
                for (const s of [-1, 1]) {
                  // the gilt parasols at the corners
                  const px = x + s * (hw - 1),
                    pt = bH + Math.round(h * 0.3);
                  box(px, pt, 1, pt - bH, 3);
                  for (const [d, k] of [
                    [6, 2],
                    [4, 1],
                    [2, 1],
                  ])
                    row(px, pt - d + 2, k, 12, 0.15);
                  box(px, pt + 2, 1, 2, 3);
                }
              if (op.porch)
                for (const s of op.porch === 4 ? [0] : [0]) {
                  const ph = bH + 3 * rr + Math.round(bellH * 0.3);
                  for (let j = bH + 1; j <= ph; j++) solid(x + s, j, 2, C, 0.08);
                  cone(x + s, ph, 3, 4, tn(C, 0.15));
                  box(x + s, ph - 1, 1, ph - bH - 2, 2);
                }
            };
            const that = (x, w, h, C, T, op = {}) => {
              const hw = Math.floor(w / 2),
                K = hw - 2,
                b = Math.max(2, Math.round(h * 0.1)),
                bb = Math.round(h * (op.body ?? 0.3)),
                bud = op.bud ?? C,
                sp = Math.max(4, Math.round(h * 0.16));
              for (let j = 1; j <= b; j++) {
                const k = hw - Math.floor(((j - 1) * 2) / b);
                solid(x, j, k, C);
                if (j === b || Math.floor((j * 2) / b) !== Math.floor(((j - 1) * 2) / b))
                  row(x, j, k, C, 0.25);
              }
              for (let j = b + 1; j <= b + bb; j++) solid(x, j, K, C);
              box(x - K + 2, b + bb - 1, 2 * K - 3, bb - 3, tn(C, -0.08)); // the recessed face
              for (const r of [b + 2, b + bb - 1]) row(x, r, K - 2, T, 0.1); // its gilt frieze
              box(x - 1, b + Math.round(bb * 0.75), 3, Math.round(bb * 0.45), tn(T)); // the gilt panel
              box(x, b + Math.round(bb * 0.7), 1, Math.round(bb * 0.3), tn(T, 0.3));
              let y = b + bb;
              row(x, ++y, K + 1, T, 0.15); // the cornice and the lotus petals over it
              for (let p = -K; p <= K; p += 2) box(x + p, y + 1, 1, 1, tn(T, 0.2));
              solid(x, ++y, K, C);
              const tall = h - sp - y;
              for (let j = 1; j <= tall; j++) {
                const f = j / tall,
                  k = Math.max(
                    0,
                    Math.round(
                      (K - 0.5) * Math.pow(1 - f, op.curve ?? 0.8) * (1 + 0.22 * Math.sin(f * Math.PI)),
                    ),
                  ),
                  col = f > (op.gild ?? 0.6) ? bud : C;
                solid(x, y + j, k, col);
                if (j % 4 === 0 && f < 0.85) row(x, y + j, k, T, 0.1); // gilt bands
              }
              y += tall;
              box(x, h, 1, h - y, 3); // the spire and its umbrellas
              for (const d of [3, 6]) if (h - d > y) row(x, h - d, 1, 12, 0.2);
              box(x, h + 2, 1, 2, 3);
            };
            const yot = (x, base, k, tall, C, T) => {
              // a prasat's spire: stacked little roofs, then a ringed spire and its needle
              let y = base;
              const tiers = Math.min(k, Math.max(2, Math.round(tall / 9)));
              for (let i = 0; i < tiers; i++) {
                const q = k - i;
                solid(x, y + 1, q, C);
                solid(x, y + 2, q, C);
                row(x, y + 3, q + 1, T, 0.15);
                box(x - q - 1, y + 4, 1, 1, tn(T, 0.15));
                box(x + q + 1, y + 4, 1, 1, tn(T));
                y += 3;
              }
              const rest = base + tall - y,
                q0 = Math.max(1, k - tiers + 1);
              for (let j = 1; j <= rest; j++) {
                const f = j / rest,
                  q = Math.max(0, Math.round(q0 * Math.pow(1 - f, 1.1)));
                row(x, y + j, q, j % 2 ? T : C, j % 2 ? 0.1 : 0);
              }
              box(x, base + tall + 3, 1, 3, 3);
            };
            const hall = (x, w, wallH, A, op = {}) => {
              // w: width at the eaves; wallH: the wall's top row; A: the ridge's apex row
              const hw = Math.floor(w / 2),
                L = op.layers ?? 3,
                wall = op.wall ?? 6,
                rc = op.rc ?? [196, 98, 52],
                rc2 = op.rc2 ?? [62, 124, 82],
                edge = op.edge ?? 12,
                gab = op.gable ?? 12,
                wk = hw - 2;
              if (!op.noWall) {
                row(x, 1, wk + 1, op.plinth ?? 13, -0.1);
                row(x, 2, wk + 1, op.plinth ?? 13, 0.2);
                for (let j = 3; j < wallH; j++) solid(x, j, wk, wall);
                for (let p = -wk + 1; p <= wk - 1; p += 3) {
                  if (op.open && p + 1 < wk) box(x + p + 1, wallH - 2, 2, wallH - 4, 2);
                  else if (p + 1 < wk && wallH >= 7) box(x + p + 1, wallH - 3, 1, 2, 2); // windows
                  box(x + p, wallH - 1, 1, wallH - 3, tn(op.pillar ?? wall, op.pillar ? 0 : 0.25));
                }
                if (!op.open) {
                  box(x - 1, wallH - 2, 3, wallH - 4, 2); // the doorway in its gilt frame
                  box(x - 2, wallH - 1, 5, 1, tn(edge, 0.1));
                }
              }
              const dk = op.dk ?? 2,
                dv = op.dv ?? 2;
              for (let i = 0; i < L; i++) {
                const k = hw - (L - 1 - i) * 0 - i * dk,
                  b = wallH - 1 + i * dv,
                  tall = A - b,
                  top = i === L - 1;
                box(x - k + 1, b, 2 * k - 1, 1, tn(rc, -0.45)); // the shadow under its eave
                for (let j = 1; j <= tall; j++) {
                  const q = Math.round(k * (1 - (j - 1) / tall));
                  box(x - q, b + j, q + 1, 1, tn(rc, top ? 0.05 : -0.08 * (L - 1 - i)));
                  box(x + 1, b + j, q, 1, tn(rc, top ? -0.12 : -0.08 * (L - i)));
                  if (q >= 3) {
                    box(x - q + 1, b + j, 1, 1, tn(rc2));
                    box(x + q - 1, b + j, 1, 1, tn(rc2, -0.2));
                  }
                  box(x - q, b + j, 1, 1, tn(edge, 0.2)); // the gilt bargeboards
                  box(x + q, b + j, 1, 1, tn(edge));
                  if (top && j % 2 === 0 && j < tall - 1) {
                    box(x - q - 1, b + j, 1, 1, tn(edge, 0.2)); // the bai raka teeth
                    box(x + q + 1, b + j, 1, 1, tn(edge));
                  }
                  if (top && q >= 3 && j > 1 && j < tall - 1) row(x, b + j, q - 2, gab, j % 3 ? 0 : 0.2); // the gable
                }
                box(x - k - 1, b + 2, 1, 2, tn(edge, 0.2)); // the hang hong, curling up
                box(x + k + 1, b + 2, 1, 2, tn(edge));
                if (op.spikes && !top)
                  for (const s of [-1, 1]) box(x + s * (k - 1), b + 4, 1, 3, tn(edge, 0.2));
              }
              const gm = Math.round((A + wallH + (L - 1) * dv) / 2);
              if (A - wallH - (L - 1) * dv >= 8) {
                box(x - 1, gm + 1, 3, 3, tn(gab, 0.35)); // the gable's figure
                box(x, gm + 2, 1, 1, tn(gab, -0.35));
              }
              box(x, A + 2, 1, 2, tn(edge, 0.3)); // the chofa
              box(x + 1, A + 2, 1, 1, tn(edge, 0.3));
              if (op.spire) yot(x, A - 1, op.spire[0], op.spire[1], op.spireC ?? edge, op.spireT ?? 3);
            };
            const c0 = o.c ?? 6,
              t0 = o.t ?? 12;
            if (kind === "thaiPrang") {
              const n = o.n ?? 1,
                w = o.w ?? 19,
                gap = o.gap ?? w - 2;
              for (const s of n === 3 ? [-1, 1, 0] : [0]) {
                const x = s * gap;
                if (s) {
                  // the side prangs of a row, joined to the middle one by a gallery
                  box(
                    Math.min(x, 0),
                    Math.round((o.h ?? 30) * 0.32),
                    Math.abs(x) + 1,
                    Math.round((o.h ?? 30) * 0.32),
                    tn(c0, -0.12),
                  );
                }
                prang(x, w, (o.h ?? 30) - (s ? 2 : 0), c0, t0, o);
              }
            } else if (kind === "watArun") {
              // Wat Arun (Bangkok): the tall central prang on its steep terraces and four slim satellite prangs,
              // all faced with broken porcelain (pale, flecked with blue, red and green), each with a trident.
              const por = [222, 216, 204],
                dots = [tn(7), tn(5, -0.1), tn(9), tn(12)];
              for (const s of [-1, 1])
                prang(s * 10, 7, 24, por, 13, { spike: 1, tiers: 5, round: 1.6, dots, steps: 2 });
              prang(0, 17, 46, por, 13, {
                spike: 1,
                base: 0.24,
                body: 0.14,
                steps: 3,
                tiers: 8,
                round: 1.8,
                dots,
              });
            } else if (kind === "chaiwatthanaram") {
              // Wat Chaiwatthanaram (Ayutthaya): the big brick prang on its terrace, two of its four corner prangs
              // beside it and the little meru towers of the gallery in front.
              const brick = [150, 94, 72];
              row(0, 1, 13, brick, -0.2);
              for (let j = 2; j <= 4; j++) row(0, j, 13, brick, j === 4 ? 0.2 : 0);
              for (const s of [-1, 1]) {
                prang(s * 10, 9, 21, brick, brick, { base: 0.25, body: 0.25, tiers: 4 });
                for (const p of [5, 14]) {
                  box(s * p - 1, 7, 3, 3, tn(brick, 0.05)); // a meru
                  cone(s * p, 7, 1, 3, tn(brick, 0.05));
                }
              }
              prang(0, 15, 38, brick, brick, { base: 0.18, body: 0.2, tiers: 7, round: 2 });
            } else if (kind === "samYot") {
              // Phra Prang Sam Yot (Lop Buri): three laterite prangs in a row, joined by galleries
              const lat = [140, 116, 98];
              row(0, 1, 15, lat, -0.2);
              row(0, 2, 15, lat, 0.2);
              for (const s of [-1, 1]) {
                for (let j = 3; j <= 10; j++) solid(s * 5, j, 4, lat, -0.08);
                prang(s * 10, 11, 25, lat, lat, { base: 0.12, body: 0.3, tiers: 5, round: 1.6 });
              }
              prang(0, 11, 27, lat, lat, { base: 0.12, body: 0.3, tiers: 5, round: 1.6 });
            } else if (kind === "thaiChedi") {
              const n = o.n ?? 1,
                w = o.w ?? 19,
                h = o.h ?? 32;
              if (o.hall)
                hall(o.hall * 7, 13, 6, 17, { rc: [176, 86, 44], rc2: [150, 70, 36], wall: 13, layers: 3 });
              for (let s = 0; s < n; s++)
                chedi(
                  Math.round((s - (n - 1) / 2) * (w - 1)) + (o.hall ? -o.hall * 5 : 0),
                  w,
                  h,
                  c0,
                  o.t ?? c0,
                  o,
                );
              if (o.fence)
                for (let p = -Math.floor(w / 2) - 1; p <= Math.floor(w / 2) + 1; p += 2)
                  box(p, 3, 1, 3, tn(12, 0.1)); // gilt railing
            } else if (kind === "siSanphet") {
              // Wat Phra Si Sanphet (Ayutthaya): three grey bell chedis in a row, each with porches on its sides
              const grey = [170, 162, 150];
              for (const s of [-1, 0, 1])
                chedi(s * 12, 13, 34, grey, grey, { porch: 1, base: 0.16, bellH: 0.22 });
            } else if (kind === "pathommachedi") {
              // Phra Pathommachedi (Nakhon Pathom): the huge bell of orange-gold tiles on its white ring, the
              // ringed spire with its little windows, and the white porch with the standing Buddha in front.
              const tile = [214, 134, 58];
              row(0, 1, 15, 6, -0.15);
              row(0, 2, 14, 6, 0.15);
              chedi(0, 29, 46, tile, 6, {
                base: 0.06,
                steps: 1,
                bell: 13,
                bellH: 0.3,
                flat: 2.8,
                windows: 1,
              });
              for (let j = 3; j <= 11; j++) solid(0, j, 4, 6, 0.05);
              cone(0, 11, 5, 6, tn(6, 0.2));
              box(-1, 15, 3, 3, tn(12, 0.1));
              box(-2, 10, 5, 7, 2);
              box(0, 9, 1, 5, tn(12, 0.2)); // the Buddha in the doorway
              box(0, 19, 1, 2, tn(12, 0.3));
            } else if (kind === "chediLuang") {
              // Wat Chedi Luang (Chiang Mai): the ruined brick chedi, its terraces, the elephants of the second
              // one, the naga stairway up the front, the arched niche and the top that fell in 1545.
              const br = [156, 132, 108];
              for (let j = 1; j <= 14; j++) {
                const k = j <= 5 ? 13 : j <= 10 ? 11 : 9;
                solid(0, j, k, br);
                if (j === 5 || j === 10 || j === 14) row(0, j, k, br, 0.25);
              }
              for (let p = -10; p <= 10; p += 4)
                if (Math.abs(p) > 3) {
                  box(p - 1, 9, 3, 3, tn([128, 122, 116], 0.1)); // an elephant
                  box(p, 6, 1, 2, tn([128, 122, 116], -0.1));
                }
              for (let j = 1; j <= 15; j++) box(-2, j, 5, 1, tn(br, j % 2 ? 0.15 : -0.05)); // the stairway
              for (const s of [-1, 1]) {
                stroke(s * 3, 15, s * 3, 2, 0);
                box(s * 3 - (s < 0 ? 2 : 0), 3, 3, 3, tn(6, -0.1)); // the nagas' heads
              }
              for (let j = 15; j <= 21; j++) solid(0, j, 7, br, j === 21 ? 0.2 : 0);
              cone(0, 18, 2, 3, tn(br, 0.25));
              box(-1, 19, 3, 4, 2);
              row(-1, 22, 5, br, 0.05);
              row(-2, 23, 3, br, 0.05);
              box(-3, 24, 3, 1, tn(br, 0.1));
            } else if (kind === "laoThat") {
              that(0, o.w ?? 19, o.h ?? 40, c0, t0, o);
            } else if (kind === "thaiHall") {
              const w = o.w ?? 21,
                wallH = o.wh ?? 8;
              hall(0, w, wallH, o.h ?? 22, {
                ...o,
                wall: o.wall ?? c0,
                rc: o.rc ?? [196, 98, 52],
                spire: o.spire,
              });
            } else if (kind === "grandPalace") {
              // The Grand Palace (Bangkok), Chakri Maha Prasat: the white European hall with its pedimented
              // windows, crowned by three Thai roofs of orange and green tiles and three gilt prasat spires.
              for (let j = 1; j <= 10; j++) solid(0, j, 16, 6, j === 1 ? -0.15 : 0);
              for (const r of [5, 10]) row(0, r, 16, 6, 0.25);
              for (let p = -15; p <= 15; p += 2) {
                if (Math.abs(p) < 5 || Math.abs(Math.abs(p) - 12) < 3) continue;
                box(p, 4, 1, 2, 2);
                box(p, 9, 1, 2, 2);
                box(p, 10, 1, 1, tn(6, -0.25));
              }
              for (const s of [-1, 1]) {
                for (let j = 11; j <= 13; j++) solid(s * 12, j, 3, 6);
                hall(s * 12, 9, 13, 18, { noWall: 1, layers: 2, spire: [2, 13] });
              }
              for (let j = 11; j <= 15; j++) solid(0, j, 5, 6);
              for (const p of [-4, -2, 2, 4]) box(p, 14, 1, 13, tn(6, 0.3)); // the columns
              box(-1, 6, 3, 6, 2);
              hall(0, 13, 15, 22, { noWall: 1, layers: 3, spire: [3, 18] });
            } else if (kind === "whiteTemple") {
              // Wat Rong Khun (Chiang Rai): the white ubosot, white plaster set with mirror glass, its roofs in
              // three nested tiers bristling with finials, and the white bridge's rail in front.
              const white = [238, 238, 240],
                glass = [176, 204, 232];
              hall(0, 25, 9, 30, {
                layers: 3,
                dk: 3,
                dv: 3,
                wall: white,
                rc: white,
                rc2: glass,
                edge: [226, 230, 238],
                gable: [210, 222, 236],
                plinth: white,
                spikes: 1,
              });
              for (let p = -9; p <= 9; p += 3) box(p, 13 + (Math.abs(p) % 2), 1, 1, tn(glass, 0.2));
              for (let p = -12; p <= 12; p += 2) box(p, 3, 1, 2, tn(white, -0.12)); // the bridge rail
            } else if (kind === "sanctuaryOfTruth") {
              // The Sanctuary of Truth (Pattaya): carved teak, gabled wings stepping up to the central
              // pavilion and its tall carved spire.
              const wood = [140, 86, 54],
                op = {
                  wall: [116, 70, 44],
                  rc: wood,
                  rc2: [112, 66, 42],
                  edge: [178, 120, 76],
                  gable: [100, 60, 38],
                  plinth: [96, 72, 56],
                  pillar: [176, 118, 74],
                };
              for (const s of [-1, 1]) hall(s * 9, 11, 6, 15, { ...op, layers: 2 });
              hall(0, 15, 8, 21, { ...op, layers: 3, spire: [3, 18], spireC: wood, spireT: [178, 120, 76] });
            } else if (kind === "watSothon") {
              // Wat Sothonwararam (Chachoengsao): the great white ubosot with its gilt trim and, over it, the
              // white prasat tower whose spire climbs high above the roofs.
              const op = {
                wall: [240, 236, 228],
                rc: [236, 228, 214],
                rc2: [212, 160, 54],
                edge: 12,
                gable: [236, 228, 214],
              };
              hall(0, 29, 9, 20, { ...op, layers: 3, dk: 3 });
              for (let j = 15; j <= 22; j++) solid(0, j, 4, [240, 236, 228]);
              hall(0, 11, 22, 28, {
                ...op,
                noWall: 1,
                layers: 2,
                spire: [2, 14],
                spireC: [240, 236, 228],
                spireT: 12,
              });
            } else if (kind === "kaenNakhon") {
              // Phra Mahathat Kaen Nakhon (Khon Kaen): a white hall with red windows and gilt eaves, eight
              // white storeys stepping in above it, each under a gilt eave, and a gilt spire.
              for (let j = 1; j <= 2; j++) row(0, j, 11, 6, j === 2 ? 0.2 : -0.1);
              for (let j = 3; j <= 8; j++) solid(0, j, 10, 6);
              for (let p = -9; p <= 9; p += 3) box(p, 7, 2, 3, tn(10, -0.1));
              row(0, 9, 11, 12, 0.15);
              let y = 9;
              for (let i = 0; i < 8; i++) {
                const k = 8 - i;
                solid(0, ++y, k, 6);
                if (k >= 3) for (let p = -k + 1; p < k; p += 2) box(p, y, 1, 1, tn(10, -0.2));
                row(0, ++y, k + 1, 12, 0.1);
              }
              for (let j = 1; j <= 8; j++) row(0, y + j, j < 3 ? 1 : 0, 12, j % 2 ? 0.2 : 0);
              box(0, y + 11, 1, 3, 3);
            } else if (kind === "chiangRaiClock") {
              // The Chiang Rai clock tower (Chalermchai Kositpipat): a gilt tower of flame-like kranok scrolls,
              // the clock in its middle stage and a tiered spire.
              const gold = [214, 166, 62];
              for (let j = 1; j <= 3; j++) row(0, j, 4, gold, j === 3 ? 0.2 : -0.1);
              for (let j = 4; j <= 15; j++) solid(0, j, 2, gold);
              for (const [j, k] of [
                [8, 3],
                [9, 4],
                [11, 3],
                [12, 4],
                [21, 4],
                [22, 4],
                [23, 3],
              ])
                for (const s of [-1, 1]) box(s * k, j, 1, 1, tn(gold, s < 0 ? 0.3 : -0.2)); // the flame scrolls
              for (let j = 16; j <= 23; j++) solid(0, j, 3, gold, j === 23 ? 0.2 : 0);
              orb(0, 19.5, 2, tn(6));
              box(0, 20, 1, 2, 2);
              box(0, 19, 1, 1, 2);
              yot(0, 23, 2, 13, gold, 3);
            } else if (kind === "mukdahanTower") {
              // Mukdahan Tower: a white shaft on its podium, the windowed observation deck, crowned by a gilt
              // that like Phra That Phanom's.
              const h = o.h ?? 46;
              for (let j = 1; j <= 4; j++)
                row(0, j, 6 - (j > 2 ? 1 : 0), 6, j === 2 || j === 4 ? 0.2 : -0.05);
              for (let j = 5; j < h - 14; j++) solid(0, j, 2, 6);
              for (let j = 8; j < h - 16; j += 4) box(0, j, 1, 2, 11);
              for (let j = h - 14; j <= h - 9; j++) solid(0, j, 4, 6, j === h - 9 ? 0.2 : 0);
              row(0, h - 11, 4, 11, -0.1);
              row(0, h - 12, 4, 11, 0.15);
              for (let j = 1; j <= 7; j++) solid(0, h - 9 + j, Math.round(3 * Math.pow(1 - j / 8, 0.8)), 12);
              box(0, h + 1, 1, 4, 3);
            } else if (kind === "khanapNam") {
              // Khao Khanap Nam (Krabi): the two limestone karsts facing each other across the river mouth,
              // sheer grey walls streaked dark, undercut at the foot, with jungle on their ledges and crowns.
              const rock = [156, 154, 142],
                green = [76, 132, 80];
              for (const [x, hw, h] of [
                [-9, 6, 32],
                [9, 5, 27],
              ]) {
                for (let j = 1; j <= h; j++) {
                  const f = j / h,
                    k = Math.max(
                      1,
                      Math.round(hw * Math.pow(1 - Math.pow(f, 3), 0.5) - (j <= 3 ? 3 - j : 0) * 0.5),
                    );
                  solid(x, j, k, rock);
                  if (j % 5 === 2 && k >= 3)
                    box(
                      x + ((j * 3) % (2 * k - 1)) - k + 1,
                      j,
                      1,
                      3,
                      css(e.sh(mixc(rock, [41, 40, 54], 0.35))),
                    );
                  if (j % 7 === 0 && k >= 2) box(x - k - 1, j + 1, 2, 2, css(e.sh(green)));
                }
                orb(x - 1, h - 1, Math.max(2, hw - 3), css(e.sh(green)));
                orb(x + 2, h - 2, Math.max(1, hw - 4), css(e.sh(mixc(green, [41, 40, 54], 0.2))));
              }
            }
            break;
          }
          case "kwaiBridge": {
            // The bridge on the River Kwai (Kanchanaburi): the Death Railway's steel spans on round concrete
            // piers, the old curved-top trusses at both ends and the straight-topped spans rebuilt in the middle.
            const steel = css(e.sh([72, 76, 86])),
              pier = css(e.sh([176, 172, 162])),
              pierSh = css(e.sh([132, 128, 122])),
              dh = 6,
              P = [-20, -10, 0, 10, 20];
            for (const p of P) {
              box(p - 1, dh, 3, dh, pier);
              box(p + 1, dh, 1, dh, pierSh);
            }
            box(-21, dh + 1, 43, 1, steel); // the deck
            box(-21, dh + 2, 43, 1, css(e.sh([110, 96, 84]))); // the sleepers
            for (let s = 0; s < 4; s++) {
              const x0 = P[s],
                curved = s === 0 || s === 3;
              const top = (x) =>
                curved
                  ? dh + 2 + Math.round(6 * Math.sin((Math.PI * (x - x0)) / 10))
                  : dh + 2 + Math.min(5, x - x0, x0 + 10 - x);
              for (let x = x0; x <= x0 + 10; x++) box(x, top(x), 1, 1, steel);
              for (let x = x0 + 2; x <= x0 + 8; x += 2) {
                box(x, top(x), 1, top(x) - dh - 2, steel); // the verticals
                if (x + 2 <= x0 + 8) stroke(x, top(x), x + 2, dh + 2, 2);
              }
            }
            break;
          }
          case "kruSe": {
            // Krue Se Mosque (Pattani): the unfinished brick mosque, its plaster gone, with three tall pointed
            // arches, an arched window high on the left, a jagged wall top and a low white fence before it.
            const brick = [170, 100, 72],
              lit = css(e.sh(mixc(brick, [255, 248, 225], 0.25))),
              dark = css(e.sh(mixc(brick, [41, 40, 54], 0.3)));
            box(-10, 9, 21, 9, css(e.sh(brick)));
            box(8, 9, 3, 9, dark);
            box(-10, 10, 8, 1, css(e.sh(brick)));
            box(3, 10, 5, 1, css(e.sh(brick)));
            for (const p of [-2, 2, 6]) {
              box(p - 1, 6, 3, 6, 2); // a pointed arch
              box(p, 7, 1, 1, 2);
              box(p - 2, 7, 1, 7, lit);
            }
            box(-8, 7, 2, 2, 2);
            box(-8, 8, 2, 1, lit);
            for (let p = -10; p <= 10; p += 3) box(p, 3, 1, 3, css(e.sh([236, 232, 222])));
            box(-10, 2, 21, 1, css(e.sh([236, 232, 222])));
            break;
          }
