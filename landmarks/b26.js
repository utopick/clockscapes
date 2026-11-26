          case "minhThanh":
          case "thienAn":
          case "thapDoi":
          case "chamTowerB26":
          case "nguyenTrungTruc":
          case "khmerVihara":
          case "heroicMother":
          case "caoDai":
          case "citadelGate":
          case "vnAdminCenter":
          case "denHungGate":
          case "vanThanhMieu": {
            // Vietnamese landmarks (b26). They share two little helpers: tn (a lit or shaded tone of an rgb
            // colour) and roof (a curved tiled roof with its eave tips flicked up and a ridge with curled ends).
            const tn = (rgb, k = 0) =>
                css(e.sh(k ? mixc(rgb, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)) : rgb)),
              gold = [212, 160, 54],
              roof = (cx, b, hw, h, rgb, { ridge = true, sl = 1, pearl = false } = {}) => {
                const R = tn(rgb),
                  Rd = tn(rgb, -0.32),
                  Rl = tn(rgb, 0.3);
                for (let j = 0; j < h; j++) {
                  const k = hw - Math.round(j * sl);
                  box(cx - k, b + 1 + j, 2 * k + 1, 1, j === 0 ? Rd : R);
                  if (j > 0 && k > 1) box(cx + k, b + 1 + j, 1, 1, Rd); // the shaded right slope
                }
                for (const s of [-1, 1]) box(cx + s * (hw + 1), b + 2, 1, 1, R); // the upturned tips
                const kt = hw - Math.round((h - 1) * sl);
                if (ridge) {
                  box(cx - kt, b + h + 1, 2 * kt + 1, 1, Rl);
                  for (const s of [-1, 1]) box(cx + s * (kt + 1), b + h + 2, 1, 1, Rl); // curled ridge ends
                  if (pearl) box(cx, b + h + 2, 1, 1, tn(gold, 0.2));
                }
              };
            if (kind === "minhThanh") {
              // Minh Thành Pagoda (Pleiku): the seven-storey tower in the Japanese style of the rebuilt pagoda:
              // narrow white storeys framed in red-brown wood under broad, thin dark-grey roofs that flick up
              // at the tips, on a stone podium, crowned by a gilt sorin with its rings.
              const tile = [76, 82, 96],
                wall = [240, 234, 218],
                wood = [160, 70, 50],
                stone = [196, 190, 176];
              box(-7, 2, 15, 2, tn(stone));
              box(-7, 1, 15, 1, tn(stone, -0.25));
              for (let i = 0; i < 7; i++) {
                const b = 2 + i * 5,
                  bh = Math.max(1, 4 - Math.floor((i + 1) / 2)),
                  rh = 9 - Math.round((i * 4) / 6);
                box(-bh, b + 3, 2 * bh + 1, 3, tn(wall));
                box(bh, b + 3, 1, 3, tn(wall, -0.15));
                for (const p of [-bh, bh]) box(p, b + 3, 1, 3, tn(wood, p > 0 ? -0.2 : 0));
                box(-bh, b + 3, 2 * bh + 1, 1, tn(wood, -0.35)); // the bracket sets under the eave
                if (i > 0) box(-bh - 1, b + 1, 2 * bh + 3, 1, tn(wood, 0.1)); // the balcony rail
                box(0, b + (i ? 2 : 3), 1, i ? 1 : 2, 2); // the door, then a window on each storey
                roof(0, b + 3, rh, 2, tile, { ridge: false, sl: rh > 6 ? 3 : 2 });
              }
              const top = 2 + 7 * 5;
              box(-1, top + 1, 3, 1, tn(tile, 0.2));
              box(0, top + 8, 1, 7, tn(gold));
              for (const j of [3, 5, 7]) box(-1, top + j, 3, 1, tn(gold, -0.15)); // the sorin's rings
              box(0, top + 9, 1, 1, tn(gold, 0.4)); // the jewel
            } else if (kind === "thienAn") {
              // Thiên Ấn Pagoda (Quảng Ngãi): the flat-topped hill shaped like a seal (Thiên Ấn, the heavenly
              // seal) by the Trà Khúc river, wooded, with its stairway climbing up to the pagoda on the top:
              // the gate, the main hall under old two-tier tiled roofs and the founder's white stupa.
              const green = [82, 136, 72],
                dark = [52, 96, 56],
                tile = [150, 84, 66],
                wall = [232, 206, 140];
              for (let j = 1; j <= 14; j++) {
                const k = Math.round(9 + 6 * Math.sqrt(1 - Math.pow(j / 14.5, 4)));
                box(-k, j, 2 * k + 1, 1, tn(green));
                box(k - 1, j, 2, 1, tn(green, -0.25));
              }
              for (const [px, py, r] of [
                [-11, 5, 1.5],
                [-7, 9, 1.5],
                [-12, 11, 1],
                [9, 4, 1.5],
                [12, 9, 1],
                [6, 11, 1.5],
                [-3, 3, 1],
                [3, 7, 1],
              ])
                orb(px, py, r, tn(dark)); // the trees
              for (let j = 1; j < 14; j++)
                box(-6 + Math.round(j * 0.45) - (j % 4 < 2 ? 0 : 1), j, 1, 1, tn(wall, 0.35)); // the stairway
              box(-14, 15, 29, 1, tn(green, 0.15)); // the flat top
              box(-11, 17, 3, 2, tn(wall)); // the gate
              roof(-10, 17, 2, 1, tile, { ridge: false });
              box(-5, 18, 11, 3, tn(wall));
              for (const p of [-4, -1, 1, 4]) box(p, 18, 1, 3, tn([170, 60, 44]));
              box(-1, 17, 3, 2, 2);
              roof(0, 18, 7, 2, tile);
              box(-3, 22, 7, 1, tn(wall, -0.2));
              roof(0, 22, 4, 2, tile, { pearl: true });
              box(9, 21, 3, 6, tn([238, 234, 224])); // the white stupa
              box(8, 17, 5, 1, tn([238, 234, 224], -0.2));
              for (const y of [19, 21]) box(8, y, 5, 1, tn(tile));
              box(10, 23, 1, 2, tn(gold));
              orb(-13, 18, 1.5, tn(dark));
              orb(14, 17, 1.5, tn(dark));
            } else if (kind === "thapDoi" || kind === "chamTowerB26") {
              // Cham brick towers. thapDoi: the Twin Towers (Tháp Đôi, Quy Nhơn), two 12th-century towers of
              // the Khmer-influenced Bình Định style: a square body with pilasters and a false door under a
              // tall curved roof of stepped tiers with sculpted corners, their tops lost. chamTower: Nhạn Tower
              // (Tuy Hòa), the classic Cham tower: a tall body with pilasters and a jutting vestibule under a
              // pointed arch, three storeys repeating it smaller with corner turrets, and a pointed stone top.
              const brick = o.rgb ?? [176, 94, 66],
                B = tn(brick),
                S = tn(brick, -0.3),
                D = tn(brick, -0.5),
                Lt = tn(brick, 0.25);
              const body = (cx, hw, b, h) => {
                box(cx - hw, b + h, 2 * hw + 1, h, B);
                box(cx + hw - 1, b + h, 2, h, S);
                for (let p = -hw + 2; p < hw - 1; p += 2) box(cx + p, b + h - 1, 1, h - 2, p < 0 ? Lt : S); // pilasters
                box(cx - hw - 1, b + h + 1, 2 * hw + 3, 1, Lt); // the cornice
              };
              const door = (cx, b, hh) => {
                box(cx - 2, b + hh, 5, hh, B); // the vestibule's jutting frame
                box(cx - 2, b + hh, 1, hh, Lt);
                box(cx + 2, b + hh, 1, hh, S);
                box(cx - 1, b + hh - 2, 3, hh - 2, D);
                for (let j = 1; j <= 3; j++)
                  box(cx - Math.max(0, 2 - j), b + hh + j, 2 * Math.max(0, 2 - j) + 1, 1, j === 3 ? Lt : B); // the pointed arch
              };
              if (kind === "thapDoi") {
                const tower = (cx, hw, bodyH, tall) => {
                  box(cx - hw - 1, 3, 2 * hw + 3, 2, S); // the plinth
                  body(cx, hw, 3, bodyH);
                  door(cx, 3, bodyH - 3);
                  const b0 = 4 + bodyH;
                  for (let j = 1; j <= tall; j++) {
                    const f = j / tall,
                      k = Math.max(1, Math.round((hw + 0.5) * Math.pow(1 - f * 0.78, 0.8))),
                      ledge = j % 3 === 0;
                    box(cx - k, b0 + j, 2 * k + 1, 1, ledge ? Lt : B);
                    box(cx + k, b0 + j, 1, 1, ledge ? B : S);
                    if (ledge && k >= 2) for (const s of [-1, 1]) box(cx + s * (k + 1), b0 + j + 1, 1, 1, Lt); // corner carvings
                    if (!ledge && j % 3 === 1 && k >= 3) box(cx, b0 + j, 1, 1, D); // the niches
                  }
                  box(cx - 1, b0 + tall + 1, 3, 1, S); // the broken top
                };
                box(-11, 2, 22, 2, tn([200, 190, 170]));
                tower(-4, 5, 10, 11);
                tower(6, 4, 8, 9);
              } else {
                box(-7, 3, 15, 3, S); // the plinth on the hill
                box(-7, 3, 15, 1, Lt);
                body(0, 5, 3, 13);
                door(0, 3, 10);
                for (const [hw, b, h] of [
                  [4, 17, 5],
                  [3, 23, 4],
                  [2, 28, 3],
                ]) {
                  body(0, hw, b, h);
                  for (const s of [-1, 1]) box(s * (hw + 1), b + h + 3, 1, 2, B); // corner turrets
                  box(-1, b + h - 1, 3, 2, D);
                }
                cone(0, 32, 2, 4, B);
                box(0, 33, 1, 2, Lt);
                box(0, 37, 1, 1, Lt);
              }
            } else if (kind === "nguyenTrungTruc") {
              // Nguyễn Trung Trực Temple (Rạch Giá): the gate hall seen from the street: pink pillars with red
              // couplet panels round a red gate, a two-tier roof of orange tiles with dragons on its ridge and a
              // flag above, the ochre hall behind with its round window, and the low cream wall either side.
              const cream = [234, 218, 176],
                pink = [222, 160, 146],
                red = [200, 44, 40],
                ochre = [214, 168, 78],
                tile = [210, 112, 70],
                grey = [196, 196, 190];
              box(-11, 3, 23, 3, tn(cream));
              for (const p of [-11, -8, 8, 11]) box(p, 4, 1, 4, tn(pink));
              for (const p of [-10, -9, 9, 10]) box(p, 3, 1, 2, tn(ochre, -0.4)); // the railings
              box(-9, 9, 19, 6, tn(ochre)); // the hall behind
              orb(-6, 6, 1.4, tn(ochre, -0.35)); // its round window
              orb(-6, 6, 0.6, tn(grey));
              box(6, 6, 2, 4, tn(ochre, -0.45));
              roof(-7, 9, 3, 1, tile, { ridge: false });
              roof(7, 9, 3, 1, tile, { ridge: false });
              box(-4, 9, 9, 9, tn(cream));
              for (const p of [-4, 3]) {
                box(p, 9, 2, 9, tn(pink));
                box(p + (p < 0 ? 1 : 0), 8, 1, 6, tn(red)); // the couplet panels
              }
              box(-2, 8, 5, 3, 2);
              box(-2, 5, 5, 5, tn(red)); // the gate
              box(0, 5, 1, 5, tn(red, -0.3));
              roof(0, 9, 6, 2, tile);
              box(-3, 13, 7, 2, tn(grey));
              box(-1, 13, 3, 2, tn(red)); // the name board
              roof(0, 13, 5, 2, tile);
              for (const s of [-1, 1]) box(s * 2, 17, 1, 1, tn(grey, -0.2)); // the dragons on the ridge
              box(0, 17, 1, 1, tn(gold));
              box(0, 21, 1, 4, tn(grey, -0.3)); // the flag
              box(1, 21, 2, 2, tn(red));
            } else if (kind === "khmerVihara") {
              // A Khmer vihara of the Mekong delta (Bat Pagoda in Sóc Trăng, Âng Pagoda in Trà Vinh): the long
              // hall on a high platform, columns with gilt capitals between arched windows, and o.n steep roofs
              // stacked one over the next, each edged with a gilt naga, its ridge ending in curling chofa horns,
              // with a gilt spire (o.sp cells) in the middle. o.wc and o.rc: wall and roof rgb.
              const w = o.w ?? 23,
                hw = Math.floor(w / 2),
                n = o.n ?? 3,
                wall = o.wc ?? [236, 196, 92],
                tile = o.rc ?? [212, 92, 52],
                G = tn(gold),
                Gl = tn(gold, 0.35),
                wh = o.wh ?? 6,
                rh = o.rh ?? 4,
                sp = o.sp ?? 5;
              box(-hw, 4, w, 4, tn([226, 222, 210])); // the platform
              box(-hw, 1, w, 1, tn([226, 222, 210], -0.25));
              box(-hw, 4, w, 1, G);
              for (let j = 0; j < 3; j++) box(-2 - j, 3 - j, 5 + 2 * j, 1, tn([236, 232, 220], 0.2)); // the stairs
              const k0 = hw - 1;
              box(-k0, 4 + wh, 2 * k0 + 1, wh, tn(wall));
              box(k0 - 1, 4 + wh, 2, wh, tn(wall, -0.2));
              for (let p = -k0; p <= k0; p += 3) {
                box(p, 4 + wh, 1, wh, tn(wall, p > 0 ? -0.1 : 0.25)); // the columns
                box(p, 4 + wh, 1, 1, G); // their capitals
                if (p + 2 <= k0) {
                  box(p + 1, 4 + wh - 2, 2, wh - 3, 2); // the windows
                  box(p + 1, 4 + wh - 1, 2, 1, G);
                }
              }
              let b = 4 + wh,
                k = hw + 1;
              for (let i = 0; i < n; i++) {
                const last = i === n - 1,
                  h = last ? rh + 1 : rh;
                for (let j = 0; j < h; j++) {
                  const q = k - j;
                  box(-q, b + 1 + j, 2 * q + 1, 1, j === 0 ? tn(tile, -0.3) : tn(tile, j % 2 ? 0.08 : 0));
                  for (const s of [-1, 1]) box(s * q, b + 1 + j, 1, 1, G); // the naga's gilt edge
                }
                for (const s of [-1, 1]) box(s * (k + 1), b + 2, 1, 1, Gl); // naga heads at the eave ends
                b += h - 1;
                k -= h + 1;
                if (!last) {
                  box(-k - 1, b + 1, 2 * k + 3, 1, tn(wall, -0.1)); // the band between two roofs
                  b += 1;
                }
              }
              const top = b + 1,
                kt = k + 1;
              box(-kt, top, 2 * kt + 1, 1, G); // the ridge
              for (const s of [-1, 1]) {
                box(s * kt, top + 2, 1, 2, G); // the chofa horns
                box(s * (kt + 1), top + 3, 1, 1, Gl);
              }
              if (sp) {
                box(-1, top + 2, 3, 2, G);
                box(0, top + 2 + sp, 1, sp, G);
                for (let j = 4; j < sp; j += 2) box(-1, top + j + 1, 3, 1, Gl);
              }
            } else if (kind === "heroicMother") {
              // The Vietnamese Heroic Mother monument (Tam Kỳ): Mother Nguyễn Thị Thứ's face carved in granite
              // blocks, eyes lowered, wrapped in her headscarf, whose folds flow down on both sides into the
              // long sheltering wings of the monument, with relief panels in them, over a wide pale plaza.
              const st = [178, 174, 166],
                B = tn(st),
                S = tn(st, -0.3),
                D = tn(st, -0.5),
                Lt = tn(st, 0.3);
              box(-16, 1, 33, 1, tn([226, 220, 206]));
              for (let p = 6; p <= 16; p++) {
                const hgt = Math.round(3 + 19 * Math.pow(1 - (p - 6) / 11, 1.4));
                box(-p, hgt + 1, 1, hgt, B); // the wings: the scarf's folds sweeping to the ground
                box(p, hgt + 1, 1, hgt, S);
                if (p % 3 === 0) {
                  box(-p, hgt, 1, hgt - 2, Lt); // the folds
                  box(p, hgt, 1, hgt - 2, D);
                }
              }
              for (const s of [-1, 1]) box(s > 0 ? 9 : -12, 8, 4, 4, s > 0 ? D : S); // the relief panels
              for (let j = 2; j <= 29; j++) {
                const f = (j - 15.5) / 14,
                  k = Math.round(7.5 * Math.sqrt(Math.max(0, 1 - f * f)) + (j < 15 ? 1 : 0));
                box(-k, j, 2 * k + 1, 1, B); // the headscarf
                box(k - 1, j, 2, 1, S);
                box(-k, j, 1, 1, Lt);
              }
              for (let j = 7; j <= 24; j++) {
                const f = (j - 16) / 9,
                  k = Math.round(4.5 * Math.sqrt(Math.max(0, 1 - f * f)));
                box(-k, j, 2 * k + 1, 1, Lt); // the face
                if (k >= 2) box(k, j, 1, 1, B);
              }
              for (const p of [-3, 2]) box(p, 17, 2, 1, D); // the lowered eyes
              box(-3, 18, 2, 1, B);
              box(2, 18, 2, 1, S);
              box(1, 16, 1, 4, B); // the nose's shadow
              box(0, 12, 2, 1, S); // the mouth
              box(-4, 26, 9, 1, B); // the scarf's edge over the brow
            } else if (kind === "caoDai") {
              // The Cao Đài Holy See (Tây Ninh): the cream front between two five-storey towers, each storey
              // banded in pink and blue under little curved roofs and crowned by a lotus cap; in the middle the
              // porch, the Divine Eye in its round window and a pavilion on the gable, and the rear tower with
              // its globe rising behind.
              const cream = [242, 230, 196],
                pink = [226, 140, 150],
                blue = [78, 128, 196],
                yel = [236, 196, 84],
                tile = [188, 86, 62];
              box(-12, 2, 25, 2, tn([214, 206, 190]));
              box(-2, 37, 5, 12, tn(cream, -0.1)); // the rear tower behind
              for (const y of [28, 32]) roof(0, y, 3, 1, tile, { ridge: false });
              orb(0, 39, 2, tn(blue)); // the globe
              box(-1, 40, 1, 1, tn(blue, 0.4));
              box(-7, 18, 15, 16, tn(cream)); // the central front
              box(-7, 18, 15, 1, tn(yel));
              box(-2, 8, 5, 6, 2); // the porch
              dome(0, 8, 2.5, 2);
              box(-3, 9, 1, 7, tn(pink));
              box(3, 9, 1, 7, tn(pink));
              orb(0, 13, 2.5, tn(blue)); // the round window with the Divine Eye
              orb(0, 13, 1.5, tn([250, 248, 240]));
              box(0, 13, 1, 1, 2);
              roof(0, 18, 8, 1, tile, { ridge: false });
              box(-2, 22, 5, 3, tn(yel)); // the pavilion on the gable
              box(0, 21, 1, 2, 2);
              roof(0, 22, 3, 2, tile, { pearl: true });
              for (const s of [-1, 1]) {
                const cx = s * 9;
                for (let i = 0; i < 5; i++) {
                  const b = 2 + i * 5,
                    hw = i < 2 ? 3 : 2;
                  box(cx - hw, b + 5, 2 * hw + 1, 5, tn(cream));
                  box(cx + hw, b + 5, 1, 5, tn(cream, -0.18));
                  box(cx - hw, b + 1, 2 * hw + 1, 1, tn(i % 2 ? blue : pink)); // the storey's band
                  box(cx - (i ? 0 : 1), b + 3, i ? 1 : 3, 2, 2);
                  roof(cx, b + 5, hw + 1, 1, tile, { ridge: false });
                }
                box(cx - 1, 29, 3, 2, tn(yel)); // the lotus cap
                dome(cx, 29, 1.5, tn(pink));
                box(cx, 33, 1, 2, tn(gold));
              }
            } else if (kind === "citadelGate") {
              // A citadel gate of huge stone blocks with o.n arched passages (the Hồ Dynasty Citadel's south
              // gate, Thanh Hóa: limestone blocks, three vaults, grass on top); o.rgb its stone, o.w x o.h, the
              // openings ow wide and oh tall, o.ruin a broken, overgrown top (the Mạc citadel, Tuyên Quang).
              const w = o.w ?? 31,
                hw = Math.floor(w / 2),
                h = o.h ?? 14,
                n = o.n ?? 3,
                ow = o.ow ?? 5,
                oh = o.oh ?? 8,
                st = o.rgb ?? [170, 170, 150],
                B = tn(st),
                S = tn(st, -0.22),
                D = tn(st, -0.45),
                Lt = tn(st, 0.25),
                grass = [96, 140, 70];
              const ht = (p) => (o.ruin ? h - ((p * 7 + 3) % 5 === 0 ? 2 : (p * 3) % 7 === 0 ? 1 : 0) : h);
              for (let p = -hw; p <= hw; p++) box(p, ht(p), 1, ht(p), B);
              box(hw - 1, h, 2, h, S);
              for (let r = 2, c2 = 0; r < h - 1; r += 2, c2++) {
                box(-hw, r, w, 1, S); // the courses of blocks
                for (let p = -hw + (c2 % 2 ? 2 : 4); p < hw; p += 5) box(p, r + 1, 1, 1, S); // their joints
              }
              const gap = Math.max(ow + 4, Math.floor(w / n));
              for (let i = 0; i < n; i++) {
                const cx = Math.round((i - (n - 1) / 2) * gap),
                  big = n > 1 && i === (n - 1) / 2 ? 1 : 0,
                  r = Math.floor(ow / 2) + big,
                  sp = oh - r + big;
                dome(cx, sp, r + 1, Lt); // the voussoirs
                box(cx - r - 1, sp, 2 * r + 3, sp - 1, Lt);
                box(cx - r, sp, 2 * r + 1, sp, D);
                dome(cx, sp, r, D);
              }
              for (let p = -hw; p <= hw; p += 3) box(p, ht(p) + 1, p % 2 ? 2 : 1, 1, tn(grass)); // grass on top
              for (const [px, r] of o.ruin
                ? [
                    [-hw + 2, 1.5],
                    [hw - 3, 2],
                  ]
                : [
                    [-hw + 3, 1.5],
                    [hw - 4, 1.5],
                  ])
                orb(px, h + 1, r, tn(grass, -0.25));
              if (o.ruin)
                for (let p = -hw + 1; p < hw; p += 4) box(p, h - 2 - (p & 1), 1, 2, tn(grass, -0.1)); // creepers
            } else if (kind === "vnAdminCenter") {
              // A Vietnamese provincial administrative centre (Hậu Giang, Vị Thanh): long cream wings of
              // window rows either side of a taller central block with a portico of white columns, a pediment
              // with the round state emblem and the red flag with its yellow star on the roof.
              const cream = [240, 226, 186],
                white = [248, 246, 238],
                red = [204, 40, 36];
              box(-16, 1, 33, 1, tn([214, 206, 190]));
              for (const s of [-1, 1]) {
                const x0 = s < 0 ? -16 : 7;
                box(x0, 10, 10, 9, tn(cream, s > 0 ? -0.1 : 0));
                box(x0, 10, 10, 1, tn(cream, 0.3));
                for (let r = 3; r <= 8; r += 2)
                  for (let p = 1; p < 10; p += 2) box(x0 + p, r, 1, 1, tn([96, 130, 160])); // the windows
              }
              box(-6, 13, 13, 12, tn(cream));
              box(-7, 14, 15, 1, tn(cream, 0.3));
              cone(0, 14, 6, 3, tn(white)); // the pediment
              orb(0, 15, 1, tn([214, 170, 60])); // the emblem
              box(0, 15, 1, 1, tn(red));
              for (let p = -5; p <= 5; p += 2) box(p, 12, 1, 10, tn(white)); // the portico's columns
              box(-4, 2, 9, 1, tn(white, -0.15));
              box(-1, 5, 3, 3, 2);
              box(0, 20, 1, 4, tn([120, 120, 128])); // the flag
              box(1, 20, 3, 2, tn(red));
              box(2, 20, 1, 1, tn([250, 220, 60]));
            } else if (kind === "denHungGate") {
              // The Hùng Temples (Việt Trì): the main gate at the foot of Nghĩa Lĩnh mountain, of pale stone, its
              // tall arched passage under two tiers of curved dark tile roofs with dragons on the ridge and the
              // carved name board between them, flanked by lower wings and steps.
              const st = [214, 208, 190],
                tile = [96, 92, 90],
                B = tn(st),
                S = tn(st, -0.25),
                D = tn(st, -0.5);
              box(-12, 1, 25, 1, S); // the steps
              box(-9, 2, 19, 1, B);
              for (const s of [-1, 1]) {
                const x0 = s < 0 ? -11 : 6;
                box(x0, 8, 6, 6, s > 0 ? S : B);
                box(x0 + 2, 6, 2, 3, D); // the side doors
                roof(s * 8, 8, 3, 1, tile, { ridge: false });
              }
              box(-5, 13, 11, 11, B);
              box(4, 13, 2, 11, S);
              for (const p of [-5, -3, 3, 5]) box(p, 12, 1, 10, tn(st, 0.25)); // the pillars
              box(-2, 7, 5, 5, D);
              dome(0, 7, 2.5, D); // the arched passage
              roof(0, 13, 7, 2, tile);
              box(-4, 17, 9, 2, B);
              box(-2, 17, 5, 2, tn([150, 60, 44])); // the name board
              roof(0, 17, 5, 2, tile, { pearl: true });
            } else {
              // Văn Thánh Miếu (Vĩnh Long): the two-storey Khuê Văn pavilion of the Confucius temple, yellow
              // walls with three arched doors and round windows, under red tile roofs whose ridges carry
              // dragons and a pearl, with low side gates either side.
              const wall = [236, 198, 92],
                tile = [178, 74, 56],
                red = [170, 54, 40];
              box(-12, 2, 25, 2, tn([214, 206, 190]));
              for (const s of [-1, 1]) {
                const x0 = s < 0 ? -11 : 7;
                box(x0, 7, 5, 5, tn(wall, s > 0 ? -0.15 : 0));
                box(x0 + 2, 5, 1, 3, 2);
                roof(s * 9, 7, 3, 1, tile, { ridge: false });
              }
              box(-6, 11, 13, 9, tn(wall));
              box(5, 11, 2, 9, tn(wall, -0.2));
              for (const p of [-4, 0, 4]) {
                box(p - 1, 7, 3, 4, tn(red));
                dome(p, 7, 1.5, tn(red));
              }
              for (const p of [-6, 6]) box(p, 11, 1, 9, tn(wall, 0.25));
              roof(0, 11, 9, 2, tile);
              box(-4, 18, 9, 5, tn(wall));
              box(3, 18, 2, 5, tn(wall, -0.2));
              for (const p of [-2, 2]) {
                orb(p, 16, 1.2, tn(red, -0.3)); // the round windows
                orb(p, 16, 0.5, tn(wall, 0.3));
              }
              roof(0, 18, 6, 2, tile);
              box(-2, 22, 5, 1, tn(wall));
              roof(0, 22, 4, 2, tile, { pearl: true });
            }
            break;
          }
