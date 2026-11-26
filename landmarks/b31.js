          case "merahPutihBridge":
          case "barelangBridge":
          case "kendariBayBridge":
          case "suramaduBridge":
          case "pasupatiBridge": {
            // Indonesia's cable-stayed bridges, seen a little askew so both legs of a pylon show (one case for
            // five bridges): Merah Putih (Ambon, H pylons with a red and white crown), Barelang (Batam, legs
            // meeting in one tall mast), Kendari Bay (white legs bowing out to a pointed top), Suramadu
            // (Surabaya, tall H pylons with four cross beams) and Pasupati (Bandung, one red mast off-centre on
            // a long viaduct). o.w half the deck, o.h the pylons' height, o.dh the deck's.
            const hw = (o.w ?? 18) + 2,
              H = o.h ?? 24,
              D = o.dh ?? 8,
              rgb = (v) => css(e.sh(v)),
              dark = (v, k = 0.3) => css(e.sh(mixc(v, [41, 40, 54], k))),
              cfg = {
                merahPutihBridge: { px: [-9, 9], shape: "H", pc: [226, 226, 222], cab: 6, beams: [0.55] },
                barelangBridge: { px: [-9, 9], shape: "A", pc: [150, 146, 144], cab: 13 },
                kendariBayBridge: { px: [-9, 9], shape: "V", pc: [238, 236, 230], cab: 6 },
                suramaduBridge: { px: [-8, 8], shape: "H", pc: [196, 190, 186], cab: 14, beams: [0.4, 0.7] },
                pasupatiBridge: { px: [-3], shape: "I", pc: [204, 52, 50], cab: 6 },
              }[kind],
              deck = [206, 202, 194];
            box(-hw - 1, 1, 2 * hw + 3, 1, rgb([86, 132, 178])); // the water
            for (let p = -hw + 1; p < hw; p += 5) box(p, 1, 2, 1, rgb([170, 204, 228]));
            // piers: the abutments, and the viaduct's columns on Pasupati
            const piers = kind === "pasupatiBridge" ? [-hw, -12, 6, 12, hw] : [-hw, hw];
            for (const p of piers) {
              box(p - 1, D - 2, 2, D - 2, rgb(deck));
              box(p, D - 2, 1, D - 2, dark(deck));
            }
            for (const px of cfg.px) {
              // the cables first, so the pylon stands in front of them
              const reach = (s) =>
                cfg.px.length > 1 && s * px < 0 ? Math.abs(px) - 1 : (s < 0 ? px + hw : hw - px) - 2;
              for (const s of [-1, 1])
                for (let i = 0; i < 4; i++) {
                  const a = H - 1 - i * 2,
                    d = Math.round(3 + ((4 - i) * (reach(s) - 3)) / 4); // the highest stay reaches furthest
                  stroke(px, a, px + s * d, D + 1, cfg.cab);
                }
              const pc = rgb(cfg.pc),
                ps = dark(cfg.pc);
              for (let j = 1; j <= H; j++) {
                // half-gap between the two legs at row j
                const f = (j - D) / (H - D);
                let k = 2;
                if (cfg.shape === "A") k = j <= D ? 1 : Math.max(0, Math.round(3 * (1 - f / 0.6)));
                else if (cfg.shape === "V")
                  k = j <= D ? 1 : Math.round(3 * Math.sqrt(Math.max(0, 1 - f * f)));
                else if (cfg.shape === "I") k = 0;
                if (k === 0)
                  box(
                    px,
                    j,
                    cfg.shape === "I" ? 2 : 1,
                    1,
                    cfg.shape === "I" && j > H - 4 ? rgb([238, 236, 230]) : pc,
                  );
                else if ((cfg.shape === "A" || cfg.shape === "V") && j <= D) box(px - 1, j, 3, 1, pc);
                else {
                  box(px - k, j, 1, 1, pc);
                  box(px + k, j, 1, 1, ps);
                }
              }
              if (cfg.shape === "I") box(px + 1, H - 4, 1, H - 4 - D, dark(cfg.pc));
              if (cfg.shape === "H") {
                for (const b of cfg.beams) box(px - 2, Math.round(D + (H - D) * b), 5, 1, pc);
                box(px - 2, D - 3, 5, 1, ps);
                box(px - 2, H, 5, 1, pc);
                if (kind === "merahPutihBridge")
                  for (let j = H - 5; j <= H; j++) {
                    box(px - 2, j, 1, 1, j % 2 ? 10 : 6);
                    box(px + 2, j, 1, 1, j % 2 ? 10 : 6);
                  }
                else box(px - 2, H - 3, 5, 1, pc);
              }
              if (cfg.shape === "V") box(px, H + 1, 1, 2, rgb(cfg.pc));
              if (cfg.shape === "A") box(px, H + 1, 1, 1, ps);
            }
            // the deck: lit railing, the road's edge and its shaded underside
            box(-hw - 2, D, 2 * hw + 5, 2, rgb(deck));
            box(
              -hw - 2,
              D + 1,
              2 * hw + 5,
              1,
              kind === "merahPutihBridge" ? 10 : rgb(mixc(deck, [255, 248, 225], 0.4)),
            );
            box(-hw - 2, D - 2, 2 * hw + 5, 1, dark(deck, 0.4));
            break;
          }
          case "gedungSate": {
            // Gedung Sate, Bandung (1920): the long white two-storey front with dark hipped roofs over the
            // wings, a taller centre with three arched doors, and the tower whose stacked Javanese roofs carry
            // the gold "sate" skewer that names it.
            const wall = css(e.sh([238, 234, 224])),
              wsh = css(e.sh([200, 194, 182])),
              roof = css(e.sh([74, 70, 78])),
              rlit = css(e.sh([118, 112, 118]));
            box(-18, 8, 37, 8, wall);
            box(-18, 1, 37, 1, wsh);
            box(-18, 5, 37, 1, wsh);
            box(-18, 9, 37, 1, wsh);
            for (let p = -17; p <= 17; p += 2)
              if (Math.abs(p) > 7) {
                box(p, 4, 1, 2, 2);
                box(p, 8, 1, 2, 2);
              }
            for (const l of [-19, 8]) {
              box(l, 10, 12, 1, rlit);
              box(l + 1, 11, 10, 1, roof);
              box(l + 3, 12, 6, 1, roof);
            }
            // the centre block, its arched doors and its own hipped roof
            box(-7, 12, 15, 12, wall);
            box(7, 12, 1, 11, wsh);
            box(-7, 5, 15, 1, wsh);
            for (const d of [-4, 0, 4]) {
              box(d - 1, 3, 3, 2, 2);
              box(d, 4, 1, 1, 2);
            }
            for (const d of [-5, -3, -1, 1, 3, 5]) box(d, 10, 1, 3, 2);
            box(-8, 13, 17, 1, rlit);
            box(-7, 14, 15, 1, roof);
            // the tower: a lit storey, three tiers of roof, the skewer
            box(-3, 18, 7, 4, wall);
            box(3, 18, 1, 4, wsh);
            for (const d of [-2, 0, 2]) box(d, 17, 1, 2, 2);
            box(-5, 19, 11, 1, rlit);
            box(-4, 20, 9, 1, roof);
            box(-3, 21, 7, 1, roof);
            box(-2, 22, 5, 1, wall);
            box(-3, 23, 7, 1, rlit);
            box(-2, 24, 5, 1, roof);
            box(-1, 25, 3, 1, wall);
            box(-2, 26, 5, 1, rlit);
            box(-1, 27, 3, 1, roof);
            box(0, 30, 1, 3, 12);
            box(-1, 29, 3, 1, 12);
            break;
          }
          case "sigerTower": {
            // Menara Siger, Bakauheni (2008): a white and gold tower under the siger, Lampung's golden bridal
            // crown, with nine peaks rising to the middle one and red jewels along its band.
            const wall = css(e.sh([236, 232, 222])),
              wsh = css(e.sh([200, 194, 182])),
              gold = css(e.sh([224, 178, 58])),
              glit = css(e.sh([248, 218, 118])),
              gsh = css(e.sh([172, 126, 40]));
            box(-8, 3, 17, 3, wall);
            box(-8, 1, 17, 1, wsh);
            box(-8, 3, 17, 1, glit);
            for (let s = 0; s < 4; s++) {
              const b = 6 + s * 3;
              box(-6, b, 13, 3, wall);
              box(-5, b - 1, 11, 1, 2);
              for (let p = -4; p <= 4; p += 2) box(p, b - 1, 1, 1, wall);
              box(-6, b, 13, 1, 10);
            }
            box(5, 15, 2, 12, wsh);
            box(-9, 17, 19, 2, gold);
            box(-9, 16, 19, 1, 10);
            for (let i = -4; i <= 4; i++) {
              const px = 2 * i,
                pk = [10, 9, 7, 5, 4][Math.abs(i)];
              cone(px, 17, 1, pk, i > 0 ? gsh : gold);
              box(px - 1, 18 + Math.round(pk / 3), 1, 1, glit);
              box(px, 18, 1, 1, 10);
            }
            box(0, 30, 1, 3, 3);
            break;
          }
          case "baiturrahman": {
            // Baiturrahman Grand Mosque, Banda Aceh (1881): a white hall with a pointed arcade, black onion
            // domes on white drums (the great one over the portal, smaller ones beside it) and two slim
            // white minarets with black caps.
            const wall = css(e.sh([242, 240, 234])),
              wsh = css(e.sh([206, 202, 196])),
              blk = css(e.sh([46, 44, 54])),
              blit = css(e.sh([98, 96, 110]));
            const onion = (cx, base, r) => {
              bulb(cx, base, r, blk);
              if (r > 2) box(cx - r + 1, base + r + 1, 1, Math.max(1, r - 1), blit);
            };
            box(-14, 9, 29, 9, wall);
            box(-14, 1, 29, 1, wsh);
            for (let p = -13; p <= 12; p += 3)
              if (Math.abs(p) > 4) {
                box(p, 6, 2, 4, 2);
                box(p, 7, 1, 1, 2);
              }
            box(-15, 10, 31, 1, wsh);
            for (let p = -14; p <= 14; p += 2) box(p, 11, 1, 1, wall);
            // the portal block and the great dome
            box(-4, 15, 9, 15, wall);
            box(4, 14, 1, 13, wsh);
            box(-2, 9, 5, 8, 2);
            box(-1, 10, 3, 1, 2);
            box(0, 11, 1, 1, 2);
            box(-5, 15, 11, 1, wsh);
            onion(0, 15, 4);
            for (const k of [-1, 1]) {
              box(k * 9 - 2, 14, 5, 3, wall);
              box(k * 9 - 2, 12, 5, 1, wsh);
              onion(k * 9, 14, 3);
              onion(k * 14, 11, 2);
              // a minaret behind each corner
              const m = k * 17;
              box(m - 1, 27, 3, 27, wall);
              box(m + 1, 27, 1, 26, wsh);
              for (const b of [12, 20]) box(m - 2, b, 5, 1, wsh);
              box(m, 24, 1, 2, 2);
              onion(m, 27, 1);
            }
            break;
          }
          case "istiqlal": {
            // Istiqlal Mosque, Jakarta (1978): a vast white hall on a grid of square piers, one great white
            // dome on a ring, and the single white minaret with its open steel spire.
            const wall = css(e.sh([240, 238, 232])),
              wsh = css(e.sh([200, 198, 194])),
              dsh = css(e.sh([214, 212, 206]));
            box(-13, 11, 21, 11, wall);
            box(-13, 1, 21, 1, wsh);
            for (const r of [4, 8]) for (let p = -12; p <= 6; p += 2) box(p, r, 1, 3, 2);
            box(-14, 12, 23, 1, wsh);
            box(-13, 6, 21, 1, wsh);
            box(-9, 14, 15, 2, wall);
            box(-9, 13, 15, 1, wsh);
            dome(-2, 14, 8, wall);
            for (let dy = 2; dy < 8; dy++) {
              const k = Math.round(Math.sqrt(64 - dy * dy));
              box(-2 + k, 14 + dy, 1, 1, dsh);
            }
            box(-2, 24, 1, 2, 8);
            box(-3, 25, 3, 1, 8);
            // the minaret
            box(10, 28, 3, 28, wall);
            box(12, 28, 1, 27, wsh);
            for (const b of [14, 22, 28]) box(9, b, 5, 1, wsh);
            box(11, 26, 1, 2, 2);
            box(10, 33, 3, 5, 8);
            for (const r of [30, 32]) box(11, r, 1, 1, wall);
            box(11, 40, 1, 7, 8);
            break;
          }
          case "masjidRayaMedan": {
            // Great Mosque of Medan (Al Mashun, 1909): cream walls with green-framed arched windows, an
            // entrance pavilion with a small black dome on each side, the great black dome on its octagonal
            // drum over the tall portal, and a slim minaret to the right.
            const wall = css(e.sh([240, 236, 222])),
              wsh = css(e.sh([204, 198, 184])),
              grn = css(e.sh([96, 140, 120])),
              blk = css(e.sh([62, 62, 74])),
              blit = css(e.sh([112, 112, 126]));
            box(-13, 8, 27, 8, wall);
            box(-13, 1, 27, 1, wsh);
            box(-14, 9, 29, 1, wsh);
            for (const p of [-12, -10, 10, 12]) {
              box(p, 6, 1, 4, grn);
              box(p, 5, 1, 2, 2);
            }
            for (const k of [-1, 1]) {
              const px = k * 7;
              box(px - 3, 12, 7, 12, wall);
              box(px - 3, 13, 7, 1, wsh);
              box(px - 1, 9, 3, 6, grn);
              box(px, 8, 1, 5, 2);
              box(px - 2, 14, 5, 1, wall);
              dome(px, 14, 3, blk);
              box(px - 2, 16, 1, 1, blit);
              box(px, 18, 1, 2, 3);
            }
            box(-4, 17, 9, 17, wall);
            box(4, 16, 1, 15, wsh);
            box(-2, 12, 5, 11, grn);
            box(-1, 11, 3, 10, 2);
            box(0, 12, 1, 1, 2);
            box(-5, 18, 11, 1, wsh);
            box(-4, 20, 9, 2, wall);
            for (const d of [-2, 0, 2]) box(d, 20, 1, 1, 2);
            dome(0, 20, 5, blk);
            for (let dy = 2; dy < 5; dy++) box(-Math.round(Math.sqrt(25 - dy * dy)) + 1, 20 + dy, 1, 1, blit);
            box(0, 27, 1, 2, 3);
            // the minaret
            box(15, 29, 3, 29, wall);
            box(17, 29, 1, 28, wsh);
            for (const b of [10, 18, 24]) box(14, b, 5, 1, grn);
            box(16, 27, 1, 2, 2);
            dome(16, 29, 2, blk);
            box(16, 33, 1, 2, 3);
            break;
          }
          case "maimunPalace": {
            // Maimun Palace, Medan (1888): a long yellow two-storey front with arched openings and white trim,
            // dark hipped roofs on the wings and a porch under the stepped Malay roof of the centre.
            const yel = css(e.sh([232, 198, 84])),
              ysh = css(e.sh([194, 158, 58])),
              wht = css(e.sh([242, 238, 226])),
              roof = css(e.sh([70, 82, 78])),
              rlit = css(e.sh([108, 122, 116]));
            box(-16, 8, 33, 8, yel);
            box(-16, 1, 33, 1, ysh);
            box(-16, 4, 33, 1, wht);
            box(-16, 8, 33, 1, wht);
            for (let p = -15; p <= 15; p += 2)
              if (Math.abs(p) > 5) {
                box(p, 3, 1, 2, 2);
                box(p, 7, 1, 2, 2);
              }
            for (const l of [-17, 6]) {
              box(l, 9, 12, 1, rlit);
              box(l + 1, 10, 10, 1, roof);
              box(l + 3, 11, 6, 1, roof);
            }
            // the centre: porch and stair, upper loggia, the stepped roof with a gold finial
            box(-5, 11, 11, 11, yel);
            box(5, 11, 1, 10, ysh);
            box(-3, 3, 7, 3, 2);
            box(-4, 1, 9, 1, wht);
            box(-5, 6, 11, 2, wht);
            box(-4, 7, 9, 1, rlit);
            for (const d of [-3, -1, 1, 3]) box(d, 10, 1, 3, 2);
            box(-6, 12, 13, 1, rlit);
            box(-5, 13, 11, 1, roof);
            box(-4, 14, 9, 1, roof);
            box(-2, 15, 5, 1, yel);
            box(-3, 16, 7, 1, rlit);
            box(-2, 17, 5, 1, roof);
            box(-1, 18, 3, 1, roof);
            box(0, 20, 1, 2, 12);
            break;
          }
          case "masjidRayaSumbar": {
            // Grand Mosque of West Sumatra, Padang (2014): no dome; the whole roof is a Minangkabau gonjong, a
            // white shell sweeping up to horn tips at both ends over a brown carved gable, on a white hall.
            const wall = css(e.sh([242, 240, 234])),
              wsh = css(e.sh([204, 200, 194])),
              brown = css(e.sh([150, 86, 58])),
              bdk = css(e.sh([108, 62, 46]));
            box(-14, 2, 29, 2, wsh);
            box(-12, 2, 25, 1, wall);
            box(-11, 9, 23, 7, wall);
            box(10, 9, 2, 7, wsh);
            for (let p = -9; p <= 9; p += 3) box(p, 8, 1, 4, 2);
            for (let x = -15; x <= 15; x++) {
              const a = Math.abs(x) / 15,
                top = 13 + Math.round(9 * Math.pow(a, 2.2));
              box(x, top, 1, 2, wall);
              if (Math.abs(x) <= 11) {
                box(x, top - 2, 1, top - 11, brown);
                if ((x + 15) % 2 === 0) box(x, 11, 1, 1, 12);
              } else box(x, top - 2, 1, 1, bdk);
            }
            box(-11, 10, 23, 1, bdk);
            box(-1, 12, 3, 1, 12);
            box(0, 13, 1, 1, 12);
            break;
          }
          case "lawangSewu": {
            // Lawang Sewu, Semarang (1907): the "thousand doors" railway offices, a long white two-storey front
            // full of arched windows under a red tile roof, and twin towers with red domes at the entrance.
            const wall = css(e.sh([240, 236, 226])),
              wsh = css(e.sh([202, 196, 184])),
              roof = css(e.sh([178, 82, 60])),
              rlit = css(e.sh([208, 114, 86]));
            box(-17, 9, 35, 9, wall);
            box(-17, 1, 35, 1, wsh);
            box(-17, 5, 35, 1, wsh);
            for (let p = -16; p <= 16; p += 2)
              if (Math.abs(p) > 6) {
                box(p, 4, 1, 2, 2);
                box(p, 8, 1, 2, 2);
              }
            box(-17, 10, 35, 1, rlit);
            box(-16, 11, 33, 1, roof);
            box(-15, 12, 31, 1, roof);
            // the entrance between the towers: a door, a tall stained-glass window and a stepped gable
            box(-3, 13, 7, 13, wall);
            box(-1, 4, 3, 3, 2);
            box(-1, 11, 3, 5, 11);
            box(0, 12, 1, 1, 11);
            cone(0, 13, 3, 3, wall);
            for (const k of [-1, 1]) {
              const px = k * 5;
              box(px - 2, 17, 5, 17, wall);
              box(px + 2, 17, 1, 16, wsh);
              for (const r of [4, 8, 13]) box(px, r, 1, 2, 2);
              box(px - 2, 15, 5, 1, wsh);
              box(px - 3, 18, 7, 1, wsh);
              dome(px, 18, 2, roof);
              box(px - 1, 20, 1, 1, rlit);
              box(px, 22, 1, 1, 8);
            }
            break;
          }
          case "bajraSandhi": {
            // Bajra Sandhi Monument, Denpasar (2003): a dark stone Balinese temple-monument on a terrace, red
            // brick panels on its body, stepped roofs and a bell (bajra) rising into a tall pointed spire.
            const st = css(e.sh([104, 98, 98])),
              slit = css(e.sh([142, 134, 130])),
              ssh = css(e.sh([76, 72, 74])),
              brick = css(e.sh([186, 110, 72]));
            box(-11, 3, 23, 3, st);
            box(-11, 3, 23, 1, slit);
            box(9, 2, 3, 2, ssh);
            box(-2, 3, 5, 3, slit);
            box(-2, 2, 5, 1, ssh);
            box(-8, 11, 17, 8, st);
            box(7, 10, 2, 7, ssh);
            for (const p of [-6, 4]) box(p, 9, 3, 5, brick);
            box(-1, 9, 3, 5, 2);
            box(0, 10, 1, 1, 2);
            for (const p of [-8, 8]) cone(p, 11, 1, 4, st);
            let b = 11;
            for (const w of [15, 13, 11]) {
              const l = -Math.floor(w / 2);
              box(l, b + 2, w, 2, st);
              box(l, b + 2, w, 1, slit);
              box(l + w - 2, b + 1, 2, 1, ssh);
              b += 2;
            }
            // the bell and its spire
            dome(0, b, 4, st);
            box(-3, b + 2, 1, 2, slit);
            box(-1, b + 6, 3, 2, st);
            cone(0, b + 6, 1, 9, st);
            box(0, b + 17, 1, 2, 12);
            break;
          }
          case "padmasana": {
            // A padmasana, the white stone lotus throne of a Balinese temple (Jagatnatha, Denpasar): a stepped
            // carved tower on a base and an empty seat with a tall back at the top, edged in gold.
            const wh = css(e.sh([238, 234, 222])),
              wsh = css(e.sh([196, 190, 176])),
              st = css(e.sh([120, 114, 110]));
            box(-6, 3, 13, 3, st);
            box(-6, 3, 13, 1, css(e.sh([150, 144, 138])));
            box(-1, 3, 3, 3, wsh);
            let b = 3;
            for (const [w, h] of [
              [11, 4],
              [9, 4],
              [7, 3],
            ]) {
              const l = -Math.floor(w / 2);
              box(l, b + h, w, h, wh);
              box(l + w - 1, b + h, 1, h, wsh);
              box(l, b + h, w, 1, 12);
              for (let p = l + 1; p < l + w - 1; p += 2) box(p, b + h - 2, 1, 1, wsh);
              b += h;
            }
            box(-3, b + 1, 7, 1, 12);
            box(-3, b + 2, 1, 1, wh);
            box(3, b + 2, 1, 1, wh);
            box(-2, b + 4, 5, 3, wh);
            box(-2, b + 4, 5, 1, 12);
            box(0, b + 5, 1, 1, 12);
            break;
          }
          case "fortMarlborough": {
            // Fort Marlborough, Bengkulu (1714): low weathered grey ramparts with angled bastions, and the gate
            // in the middle, a blue-grey portico with an arched passage, a name plaque and a pediment, reached
            // by a wooden bridge.
            const st = css(e.sh([196, 194, 186])),
              ssh = css(e.sh([150, 148, 142])),
              stain = css(e.sh([128, 130, 124])),
              gate = css(e.sh([152, 168, 180])),
              gsh = css(e.sh([118, 132, 146]));
            box(-12, 8, 25, 8, st);
            box(-12, 1, 25, 1, ssh);
            box(-13, 9, 27, 1, ssh);
            for (const [p, r] of [
              [-10, 5],
              [-7, 3],
              [6, 6],
              [9, 3],
              [-5, 7],
            ])
              box(p, r, 2, 2, stain);
            for (const k of [-1, 1]) {
              const l = k < 0 ? -18 : 12;
              box(l, 10, 7, 10, st);
              box(k < 0 ? -19 : 18, 4, 1, 4, st);
              box(l, 11, 7, 1, ssh);
              box(l + 2, 8, 1, 1, 2);
              box(l + 4, 8, 1, 1, 2);
              box(l + 1, 4, 2, 2, stain);
              if (k > 0) box(l + 5, 10, 2, 9, ssh);
            }
            box(-4, 11, 9, 11, gate);
            box(4, 11, 1, 10, gsh);
            box(-2, 7, 5, 7, 2);
            box(-1, 8, 3, 1, 2);
            box(-2, 10, 5, 1, 6);
            box(-5, 12, 11, 1, gsh);
            cone(0, 12, 5, 3, gate);
            box(-3, 2, 7, 1, css(e.sh([128, 94, 64])));
            break;
          }
          case "otanaha": {
            // Otanaha Fortress, Gorontalo (16th c.): three ruined round stone bastions of rough grey-brown stone
            // with rounded merlons, on a green hill with steps up the middle.
            const st = css(e.sh([128, 120, 108])),
              slit = css(e.sh([160, 150, 134])),
              ssh = css(e.sh([92, 86, 80])),
              grass = css(e.sh([94, 140, 80]));
            box(-13, 2, 27, 2, grass);
            box(-11, 3, 23, 1, grass);
            for (const [cx, w, h] of [
              [-8, 7, 9],
              [0, 7, 11],
              [8, 7, 9],
            ]) {
              const l = cx - 3;
              box(l, h, w, h - 3, st);
              box(l, h, 1, h - 3, slit);
              box(l + w - 1, h, 1, h - 3, ssh);
              for (const m of [l + 1, l + 4]) {
                box(m, h + 1, 2, 1, st);
                box(m, h + 2, 2, 1, slit);
              }
              box(l + 2, h - 3, 1, 1, ssh);
              box(l + 4, h - 5, 2, 1, ssh);
            }
            for (let s = 0; s < 3; s++) box(-1 - s, 4 + s, 3 + 2 * s, 1, slit);
            break;
          }
          case "fortRotterdam": {
            // Fort Rotterdam, Makassar (1673): inside its low stone walls, long whitewashed Dutch buildings
            // with steep red tile roofs, and a tall gabled house standing end-on at the right.
            const wh = css(e.sh([238, 234, 222])),
              wsh = css(e.sh([202, 196, 184])),
              roof = css(e.sh([156, 70, 52])),
              rlit = css(e.sh([188, 100, 76])),
              st = css(e.sh([176, 170, 158]));
            box(-16, 4, 33, 4, st);
            box(-16, 5, 33, 1, css(e.sh([150, 146, 136])));
            box(-1, 3, 3, 3, 2);
            box(-14, 10, 22, 6, wh);
            for (let p = -13; p <= 6; p += 2) box(p, 8, 1, 2, 2);
            for (let i = 0; i < 4; i++) box(-14 + i, 11 + i, 22 - 2 * i, 1, i ? roof : rlit);
            box(-1, 14, 1, 1, wsh);
            // the gable house
            box(9, 12, 7, 8, wh);
            box(15, 12, 1, 7, wsh);
            for (const p of [10, 12, 14]) box(p, 10, 1, 2, 2);
            box(12, 16, 1, 2, 2);
            cone(12, 12, 3, 5, wh);
            box(9, 13, 1, 1, rlit);
            box(15, 13, 1, 1, rlit);
            break;
          }
          case "bogorPalace": {
            // Bogor Palace (1856): a white Palladian house, long colonnaded wings ending in pedimented pavilions,
            // the centre with a six-column portico and pediment, and a small grey dome with a flag on top.
            const wh = css(e.sh([242, 240, 234])),
              wsh = css(e.sh([200, 198, 192])),
              roof = css(e.sh([150, 152, 160]));
            box(-17, 6, 35, 6, wh);
            box(-17, 1, 35, 1, wsh);
            for (let p = -15; p <= 15; p += 2) if (Math.abs(p) > 6 && Math.abs(p) < 14) box(p, 5, 1, 4, 2);
            box(-17, 7, 35, 1, wsh);
            for (let p = -17; p <= 17; p += 2) box(p, 8, 1, 1, wh);
            for (const k of [-1, 1]) {
              box(k * 16 - 2, 9, 5, 9, wh);
              box(k * 16, 6, 1, 3, 2);
              box(k * 16 - 2, 10, 5, 1, wsh);
              cone(k * 16, 10, 2, 2, wh);
            }
            box(-6, 12, 13, 12, wh);
            box(6, 12, 1, 11, wsh);
            box(-5, 9, 11, 7, 2);
            for (let p = -5; p <= 5; p += 2) box(p, 9, 1, 7, wh);
            box(-6, 2, 13, 1, wsh);
            box(-7, 13, 15, 1, wsh);
            cone(0, 13, 7, 3, wh);
            box(-1, 15, 3, 1, wsh);
            box(-3, 19, 7, 3, wh);
            box(2, 19, 1, 3, wsh);
            box(-4, 20, 9, 1, wsh);
            dome(0, 20, 3, roof);
            box(0, 25, 1, 2, wsh);
            box(1, 25, 2, 1, 10);
            box(1, 24, 2, 1, 6);
            break;
          }
          case "equatorMonument": {
            // Equator Monument, Pontianak: the replica outside the hall, a dark column carrying the ring of the
            // equator with its arrow, on a white stepped pavilion.
            const wh = css(e.sh([236, 236, 232])),
              wsh = css(e.sh([196, 196, 194])),
              dk = css(e.sh([60, 58, 70])),
              dlit = css(e.sh([104, 102, 116]));
            box(-7, 1, 15, 1, wsh);
            box(-7, 3, 15, 2, wh);
            box(-6, 5, 13, 2, wh);
            box(-5, 7, 11, 2, wh);
            box(4, 7, 1, 6, wsh);
            box(-1, 4, 3, 3, 2);
            box(-1, 17, 2, 10, dk);
            box(-1, 17, 1, 10, dlit);
            for (let i = 0; i < 20; i++) {
              const a = (i / 20) * Math.PI * 2;
              box(Math.round(3.4 * Math.cos(a)), 21 + Math.round(3.4 * Math.sin(a)), 1, 1, dk);
            }
            box(-1, 21, 2, 1, dk);
            box(-5, 21, 10, 1, dlit);
            box(4, 22, 1, 3, dk);
            box(0, 25, 1, 1, 10);
            break;
          }
          case "bantenMinaret": {
            // The minaret of the Great Mosque of Banten (1570s): a white octagonal tower tapering like a
            // lighthouse, with two balconies and a little dome on top.
            const wh = css(e.sh([242, 240, 234])),
              wsh = css(e.sh([200, 198, 190]));
            box(-4, 4, 9, 4, wh);
            box(-4, 1, 9, 1, wsh);
            box(3, 4, 2, 3, wsh);
            box(-1, 3, 3, 2, 2);
            for (let r = 5; r <= 20; r++) {
              const k = Math.round(3 - ((r - 5) * 1.4) / 15);
              box(-k, r, 2 * k + 1, 1, wh);
              box(k, r, 1, 1, wsh);
            }
            for (const r of [9, 15]) box(0, r, 1, 2, 2);
            box(-4, 21, 9, 1, wsh);
            box(-4, 22, 9, 1, wh);
            for (let p = -3; p <= 3; p += 2) box(p, 22, 1, 1, wsh);
            box(-1, 25, 3, 3, wh);
            box(0, 24, 1, 1, 2);
            box(-2, 26, 5, 1, wsh);
            dome(0, 26, 2, wh);
            box(0, 29, 1, 2, 3);
            break;
          }
          case "tuguJogja": {
            // Tugu Yogyakarta (1889): the white monument at the crossroads north of the kraton, a square pedestal
            // with plaques, a tapering fluted shaft with a gilded band, and a golden spiral tip.
            const wh = css(e.sh([242, 240, 234])),
              wsh = css(e.sh([196, 194, 188]));
            box(-5, 2, 11, 2, wsh);
            box(-4, 4, 9, 2, wh);
            box(-3, 10, 7, 6, wh);
            box(3, 10, 1, 6, wsh);
            box(-1, 8, 3, 3, wsh);
            box(-4, 11, 9, 1, wsh);
            for (const p of [-4, 4]) box(p, 12, 1, 1, wh);
            for (let r = 12; r <= 21; r++) {
              const k = r < 17 ? 2 : 1;
              box(-k, r, 2 * k + 1, 1, wh);
              box(k, r, 1, 1, wsh);
            }
            box(-2, 16, 5, 1, 12);
            box(-2, 22, 5, 1, wsh);
            cone(0, 22, 1, 3, 12);
            box(0, 27, 1, 2, 12);
            break;
          }
          case "amperaBridge": {
            // Ampera Bridge, Palembang (1965): two tall red towers with pointed caps over the Musi, joined at the
            // top by the truss of the old lift span, with stays from the tower tops down to the red deck.
            const red = css(e.sh([200, 50, 46])),
              rsh = css(e.sh([148, 34, 36])),
              rlit = css(e.sh([232, 98, 82]));
            box(-27, 1, 55, 1, css(e.sh([86, 132, 178])));
            for (let p = -25; p < 26; p += 5) box(p, 1, 2, 1, css(e.sh([170, 204, 228])));
            for (const p of [-24, -18, 18, 24]) {
              box(p - 1, 6, 2, 6, 13);
              box(p, 6, 1, 6, css(e.sh([160, 154, 142])));
            }
            for (const s of [-1, 1]) {
              stroke(s * 11, 26, s * 25, 9, 10);
              stroke(s * 11, 26, s * 3, 9, 10);
            }
            for (const t of [-11, 11]) {
              box(t - 2, 28, 5, 28, red);
              box(t + 2, 27, 1, 26, rsh);
              box(t - 2, 28, 1, 27, rlit);
              for (let r = 12; r < 26; r += 4) box(t, r, 1, 2, 2);
              box(t - 3, 21, 7, 1, rsh);
              cone(t, 28, 2, 3, red);
              box(t, 33, 1, 2, 3);
            }
            box(-9, 26, 19, 1, red);
            box(-9, 23, 19, 1, red);
            for (let p = -9; p <= 9; p += 2) box(p, 25, 1, 2, rsh);
            box(-27, 9, 55, 3, red);
            box(-27, 10, 55, 1, rlit);
            for (let p = -26; p <= 26; p += 2) box(p, 8, 1, 1, rsh);
            box(-27, 7, 55, 1, rsh);
            break;
          }
