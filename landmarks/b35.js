          case "flameTowers": {
            // The Flame Towers (Baku): three glass towers shaped like tongues of fire, wide at the foot and
            // narrowing to a tip that curls to one side, each skinned in bands of blue glass (the lit left edge,
            // the shaded right edge) with a light stripe where the LED screens glow at night.
            const flame = (cx, h, hw, curl, col) => {
              const B = css(e.sh(col)),
                Lt = css(e.sh(mixc(col, [255, 248, 225], 0.4))),
                S = css(e.sh(mixc(col, [41, 40, 54], 0.35))),
                D = css(e.sh(mixc(col, [41, 40, 54], 0.18)));
              for (let j = 0; j < h; j++) {
                const f = j / h,
                  half = Math.max(0, Math.round(hw * (1 - Math.pow(f, 1.7)))),
                  mid = cx + Math.round(curl * f * f),
                  up = j + 2;
                box(mid - half, up, 2 * half + 1, 1, j % 3 === 1 ? D : B);
                box(mid - half, up, 1, 1, Lt);
                if (half > 1) box(mid + half, up, 1, 1, S);
                if (half > 3 && j % 6 === 3) box(mid - half + 1, up, 2 * half - 1, 1, 4); // the glowing stripe
              }
              box(cx + curl, h + 3, 1, 2, Lt);
            };
            flame(-8, 34, 4, -3, [92, 132, 182]);
            flame(8, 38, 4, -3, [84, 124, 176]);
            flame(0, 44, 5, -4, [104, 146, 190]);
            box(-12, 3, 25, 2, css(e.sh([86, 82, 92]))); // the podium
            break;
          }
          case "maidenTower": {
            // The Maiden Tower (Baku): a stout round tower of pale limestone, its wall thicker toward the
            // base, with a rib of masonry (the buttress) climbing the side, narrow slit windows, a stepped
            // rim and a small drum on the flat top.
            const st = [214, 190, 142],
              B = css(e.sh(st)),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.26))),
              D = css(e.sh(mixc(st, [41, 40, 54], 0.12)));
            box(-6, 3, 13, 3, S); // the stone base
            box(-5, 26, 11, 23, B);
            box(-5, 26, 3, 23, Lt);
            box(2, 26, 4, 23, S);
            for (let y = 6; y < 26; y += 3) {
              box(-4, y, 9, 1, D); // courses of stone
              box(-3 + (y % 2), y - 1, 1, 1, S);
            }
            box(5, 20, 3, 17, D); // the rib climbing the side
            box(5, 20, 1, 17, Lt);
            box(6, 22, 1, 2, S);
            for (const y of [13, 19, 23]) box(-1, y, 1, 2, 2); // slit windows
            box(-6, 28, 13, 2, S); // the stepped rim
            box(-5, 29, 11, 1, Lt);
            box(-3, 32, 7, 3, B);
            box(-3, 32, 2, 3, Lt);
            box(1, 32, 3, 3, S);
            box(-4, 33, 9, 1, D);
            box(-1, 2, 3, 4, 2); // the door
            break;
          }
          case "azJuma": {
            // An Azerbaijani Juma mosque (shared by the district towns of Azerbaijan): a pale arcaded prayer
            // hall under a cornice, a taller central portal with its arch, a drum and a metal dome (o.dc;
            // o.r 0 gives a flat roof with a pediment instead), domelets at the corners, and slender
            // minarets (o.m of 0, 1 or 2; with one, the other end gets a squat domed turret) with two
            // balconies and a pointed cap. o.broken shortens the right minaret (Aghdam's war damage).
            const w = o.w ?? 17,
              nh = o.nh ?? 8,
              r = o.r ?? 5,
              m = o.m ?? 1,
              mh = o.mh ?? 22,
              dcol = o.dc ?? 8,
              tr = o.t ?? 3,
              hw = Math.floor(w / 2),
              tone = (col, k, to = [41, 40, 54]) => css(e.sh(mixc(colors[col], to, k))),
              D = tone(c, 0.2),
              S = tone(c, 0.32),
              Lt = tone(c, 0.3, [255, 248, 225]);
            box(-hw - 1, 3, w + 2, 2, D); // the steps
            box(-hw, nh + 3, w, nh, c);
            box(-hw, nh + 3, 1, nh, Lt);
            box(hw, nh + 3, 1, nh, S);
            for (let p = -hw + 2; p <= hw - 3; p += 3) {
              if (Math.abs(p + 0.5) < 3) continue;
              box(p, nh, 2, nh - 3, 2); // the arcade windows
              box(p, nh, 2, 1, Lt);
            }
            box(-hw - 1, nh + 3, w + 2, 1, tr); // the cornice
            box(-hw - 1, nh + 4, w + 2, 1, S);
            box(-2, nh + 6, 5, nh + 3, Lt); // the portal
            box(-2, nh + 6, 1, nh + 3, c);
            box(2, nh + 6, 1, nh + 3, S);
            box(-1, nh - 1, 3, nh - 3, 2);
            box(0, nh + 4, 1, 1, 2);
            if (r > 0) {
              box(-r, nh + 8, 2 * r + 1, 3, c); // the drum
              box(-r, nh + 8, 1, 3, Lt);
              for (let p = -r + 1; p < r; p += 2) box(p, nh + 7, 1, 2, 2);
              dome(0, nh + 8, r, dcol);
              box(0, nh + 8 + r + 3, 1, 3, 3);
              orb(0, nh + 8 + r + 1, 1, 3);
              if (w >= 15) for (const s of [-1, 1]) dome(s * (hw - 1), nh + 3, 2, dcol);
            } else {
              for (let k = 0; k < 4; k++) box(-2 + k, nh + 9 + k, 5 - 2 * k, 1, Lt); // the pediment
            }
            const cx = hw;
            for (const s of [-1, 1]) {
              const x0 = s * cx;
              if ((s > 0 && m < 1) || (s < 0 && m < 2)) {
                box(x0 - 1, nh + 7, 3, nh + 3, c); // a squat turret
                box(x0 - 1, nh + 7, 1, nh + 3, Lt);
                dome(x0, nh + 7, 2, dcol);
                box(x0, nh + 11, 1, 2, 3);
                continue;
              }
              const top = s > 0 && o.broken ? mh - 7 : mh;
              box(x0 - 2, 8, 5, 5, c); // the base
              box(x0 - 1, top, 3, top - 3, c);
              box(x0 - 1, top, 1, top - 3, Lt);
              box(x0 + 1, top, 1, top - 3, S);
              box(x0 - 2, Math.round(top * 0.62), 5, 1, tr); // the lower balcony
              box(x0 - 2, top - 1, 5, 1, tr); // the upper one
              if (top === mh) {
                cone(x0, top, 1, 4, dcol);
                box(x0, top + 7, 1, 2, 3);
                box(x0, Math.round(top * 0.62) + 5, 1, 3, 2);
              } else box(x0 - 1, top + 1, 2, 1, S); // the broken top
            }
            break;
          }
          case "shekiPalace": {
            // The Palace of the Shaki Khans (Sheki): a two-storey pavilion of brick under deep terracotta
            // eaves, its tall central bay a lattice of shebeke (coloured glass in wooden grids) in blue, red,
            // gold and green, with an arched door, a painted frieze under the eaves and steps up from the garden.
            const brick = [196, 128, 92],
              roof = [168, 84, 62],
              B = css(e.sh(brick)),
              S = css(e.sh(mixc(brick, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(brick, [255, 248, 225], 0.25))),
              R = css(e.sh(roof)),
              RS = css(e.sh(mixc(roof, [41, 40, 54], 0.3))),
              glass = [
                [63, 108, 166],
                [204, 52, 50],
                [212, 160, 54],
                [86, 146, 92],
              ].map((col) => css(e.sh(col)));
            box(-12, 2, 25, 2, S); // the steps
            box(-11, 9, 23, 7, B);
            box(-11, 15, 23, 5, B);
            box(-11, 9, 1, 13, Lt);
            box(11, 9, 1, 13, S);
            box(-12, 10, 25, 2, R); // the eaves of the lower storey
            box(-12, 10, 25, 1, RS);
            box(-12, 18, 25, 3, R); // the roof
            box(-12, 15, 25, 1, RS);
            box(-4, 17, 9, 15, Lt); // the central bay
            box(-4, 17, 1, 15, B);
            box(4, 17, 1, 15, S);
            for (let i = 0; i < 3; i++)
              for (let j = 0; j < 2; j++) box(-3 + i * 3, 16 - j * 3, 2, 2, glass[(i + 2 * j) % 4]);
            box(-5, 19, 11, 2, R); // the bay's own roof
            box(-5, 17, 11, 1, RS);
            for (const s of [-1, 1]) {
              box(s * 8 - 1, 14, 2, 3, glass[s > 0 ? 3 : 0]); // upper windows
              box(s * 8 - 1, 8, 2, 3, glass[s > 0 ? 1 : 2]); // lower windows
            }
            box(-1, 7, 3, 5, 2); // the arched door
            box(0, 8, 1, 1, 3);
            for (let p = -10; p <= 9; p += 2) if (Math.abs(p) > 5) box(p, 9, 1, 1, 3); // the painted frieze
            break;
          }
          case "ghazanchetsots": {
            // Ghazanchetsots Cathedral (Shusha): a cathedral of pale cut limestone, a tall drum with a
            // conical roof over the crossing, two bell towers at the west front with their own cones, a
            // gabled nave between them with a tall arched door and narrow windows, and cross finials.
            const st = [226, 212, 186],
              B = css(e.sh(st)),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.26))),
              D = css(e.sh(mixc(st, [41, 40, 54], 0.12))),
              roof = css(e.sh([150, 138, 122]));
            box(-8, 3, 17, 2, S); // the steps
            box(-5, 16, 11, 13, B); // the nave front
            box(-5, 16, 1, 13, Lt);
            box(5, 16, 1, 13, S);
            for (let k = 0; k < 5; k++) box(-5 + k, 20 + k, 11 - 2 * k, 1, roof); // the gable
            for (const s of [-1, 1]) {
              const x0 = s * 6;
              box(x0 - 2, 24, 4, 21, s < 0 ? Lt : B); // a bell tower
              box(x0 - 2 + (s < 0 ? 3 : 0), 24, 1, 21, s < 0 ? B : S);
              box(x0 - 2, 19, 4, 1, D);
              box(x0 - 1, 23, 2, 3, 2); // the belfry arch
              box(x0 - 3, 25, 6, 1, S);
              cone(x0, 25, 2, 6, roof);
              box(x0, 33, 1, 3, 3);
            }
            box(-3, 22, 7, 8, B); // the central drum
            box(-3, 22, 2, 8, Lt);
            box(2, 22, 2, 8, S);
            for (const p of [-2, 0, 2]) box(p, 21, 1, 3, 2);
            cone(0, 23, 3, 10, roof);
            box(0, 36, 1, 4, 3);
            box(-1, 38, 3, 1, 3);
            box(-1, 12, 3, 8, 2); // the tall door
            box(0, 13, 1, 1, 3);
            for (const p of [-3, 3]) box(p, 15, 1, 5, 2);
            break;
          }
          case "mausoleumTower": {
            // A tower tomb (Momine Khatun in Nakhchivan, the Barda turbe): a tall round or many-sided shaft
            // of baked brick with ribs and a frieze of inscription in blue glazed tile (o.band 0 for none),
            // a stepped cornice and a conical roof. o.h is the shaft, o.w its width, o.cone the roof height.
            const w = o.w ?? 11,
              h = o.h ?? 20,
              ch = o.cone ?? 7,
              hw = Math.floor(w / 2),
              tone = (col, k, to = [41, 40, 54]) => css(e.sh(mixc(colors[col], to, k))),
              Lt = tone(c, 0.28, [255, 248, 225]),
              S = tone(c, 0.3),
              D = tone(c, 0.14);
            box(-hw - 1, 3, w + 2, 2, S); // the plinth
            box(-hw, h + 3, w, h, c);
            box(-hw, h + 3, Math.max(1, Math.floor(w / 4)), h, Lt);
            box(hw - Math.floor(w / 4) + 1, h + 3, Math.floor(w / 4), h, S);
            for (let p = -hw + 2; p < hw - 1; p += 3) box(p, h + 1, 1, h - 5, D); // the ribs
            box(-1, 8, 3, 5, 2); // the door
            box(0, 9, 1, 1, 3);
            if (o.band !== 0) {
              box(-hw, h + 3, w, 2, 7); // the blue glazed band
              for (let p = -hw + 1; p < hw; p += 2) box(p, h + 3, 1, 1, 6);
            }
            box(-hw - 1, h + 4, w + 2, 1, S); // the cornice
            box(-hw - 1, h + 5, w + 2, 1, Lt);
            cone(0, h + 5, hw + 1, ch, o.dc ?? 7);
            box(0, h + 5 + ch + 2, 1, 2, 3);
            break;
          }
