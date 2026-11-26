          case "cnHall":
          case "cnPagoda":
          case "hohhotMinaret": {
            // Chinese timber halls and masonry pagodas, shared by many cities of batch b02. Colour params take a
            // colour index or an [r, g, b] array.
            // cnHall: a hall, pavilion or gate tower of o.n storeys (w cells wide, sh high, each dw narrower) with
            // red columns and dark lattice between them, a band of blue-green brackets under each eave, skirt eaves
            // between storeys and a curved tiled roof (o.rc) with sweeping tips: "hip" with a ridge and its end
            // ornaments, or "pyr" pointed with a finial (o.fin). o.dbl adds a second eave under the top roof. It
            // stands on a white terrace (o.base rows, o.steps levels, a balustrade and middle stairs) or, with
            // o.wall, on a battered brick city wall (o.ww wide) with merlons and o.gate arched gates (1 or 3).
            // cnPagoda: a masonry pagoda of o.n storeys tapering from w to wt cells, its lit and shaded faces,
            // windows alternating between the middle and the side faces, and corbelled brick eaves (o.eave 1) or
            // wide timber eaves with upturned tips and white railings (o.eave 2 or more, rc their tiles). o.dense
            // makes a Liao dense-eave pagoda: a tall first storey (sh1) with a niche, then that many close eaves.
            // o.ped is the carved pedestal, o.terrace a white platform under it, o.fin the gold finial.
            // hohhotMinaret: the minaret of the Great Mosque of Hohhot, see below.
            const rgb = (v, d) => (Array.isArray(v) ? v : colors[v ?? d]),
              tn = (col, k) => css(e.sh(mixc(col, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              tile = [100, 108, 118];
            // A curved roof: bottom row `b` spans ±hw (its shaded lip), tips curl up at ±(hw + 1); concave rows
            // narrow to a ridge of half-width hw - span (span = hw for a pointed roof).
            const roof = (hw, b, rows, R, span, ridge = true) => {
              const dk = tn(R, -0.35),
                lit = tn(R, 0.2);
              box(-hw, b, 2 * hw + 1, 1, dk);
              for (const s of [-1, 1]) box(s * (hw + 1), b + 1, 1, 1, css(e.sh(R)));
              let ins = 0;
              for (let j = 1; j < rows; j++) {
                ins = Math.round(span * (1 - (1 - j / (rows - 1)) ** 2));
                const k = hw - ins;
                box(-k, b + j, 2 * k + 1, 1, css(e.sh(R)));
                if (k > 2)
                  box(k - Math.max(1, Math.round(k / 5)) + 1, b + j, Math.max(1, Math.round(k / 5)), 1, dk);
                if (j === rows - 1 && k > 1) box(-k, b + j, Math.round(k / 2), 1, lit);
              }
              const r = hw - ins;
              if (ridge && r >= 2) {
                box(-r, b + rows, 2 * r + 1, 1, dk);
                for (const s of [-1, 1]) box(s * r, b + rows + 1, 1, 1, dk); // the ridge's end ornaments
              }
              return b + rows - 1 + (ridge && r >= 2 ? 1 : 0);
            };
            // Painted bracket sets under an eave: a row of alternating blue and green on a dark band.
            const brackets = (k, row) => {
              box(-k, row, 2 * k + 1, 1, tn(colors[2], 0));
              for (let p = -k + 1; p < k; p += 2) box(p, row, 1, 1, p % 4 === 0 ? 7 : 9);
            };
            if (kind === "hohhotMinaret") {
              // Minaret of the Great Mosque of Hohhot: a square grey-brick shaft with green-framed arched panels,
              // a red-columned pavilion storey under a hexagonal green-tiled roof, a smaller pavilion with a
              // second roof, and the crescent on its gilt finial.
              const brick = [118, 120, 122],
                green = [70, 138, 110];
              box(-3, 2, 7, 2, tn(brick, -0.2));
              box(-2, 18, 5, 16, css(e.sh(brick)));
              box(2, 18, 1, 16, tn(brick, -0.3));
              box(-2, 18, 1, 16, tn(brick, 0.15));
              for (const yy of [8, 14]) {
                box(-1, yy, 3, 3, css(e.sh(green)));
                box(0, yy - 1, 1, 2, 2);
              }
              box(-3, 19, 7, 1, tn(brick, 0.25));
              box(-2, 23, 5, 4, 10); // the pavilion storey
              box(-1, 22, 1, 2, 2);
              box(1, 22, 1, 2, 2);
              brackets(2, 23);
              roof(4, 24, 3, green, 3, false);
              box(-1, 28, 3, 2, 10);
              box(0, 27, 1, 1, 2);
              roof(3, 29, 3, green, 3, false);
              box(0, 33, 1, 2, 12);
              box(-1, 34, 3, 1, 12); // the crescent
              box(-1, 35, 1, 1, 12);
              box(1, 35, 1, 1, 12);
              break;
            }
            if (kind === "cnPagoda") {
              const n = o.n ?? 7,
                w = o.w ?? 11,
                wt = o.wt ?? Math.max(3, w - 4),
                sh = o.sh ?? 4,
                ev = o.eave ?? 1,
                C = rgb(o.c, 13),
                R = o.rc != null ? rgb(o.rc) : ev > 1 ? tile : C,
                ped = o.ped ?? 2,
                dense = o.dense ?? 0;
              let y = 0;
              const hw0 = Math.floor(w / 2);
              if (o.terrace) {
                const k = hw0 + 4;
                box(-k, o.terrace, 2 * k + 1, o.terrace, 6);
                box(-k, o.terrace, 2 * k + 1, 1, tn(colors[6], 0.3));
                for (let p = -k + 1; p < k; p += 3) box(p, o.terrace - 2, 1, 1, 2);
                box(-1, o.terrace - 1, 3, o.terrace - 1, tn(colors[6], -0.25)); // the stairs
                y = o.terrace;
              }
              if (ped) {
                box(-hw0 - 1, y + ped, w + 2, ped, tn(C, -0.15));
                box(-hw0 - 1, y + ped, w + 2, 1, tn(C, 0.25));
                y += ped;
              }
              // One storey: k is its half-width, h its height; its faces, a window, then its eave.
              const storey = (k, h, i, wins = true) => {
                const f = Math.max(1, Math.round(k / 2));
                box(-k, y + h, 2 * k + 1, h, css(e.sh(C)));
                box(-k, y + h, f, h, tn(C, 0.18));
                box(k - f + 1, y + h, f, h, tn(C, -0.22));
                if (ev > 1 && i > 0) box(-k, y + 1, 2 * k + 1, 1, tn(colors[6], 0.1)); // the railing
                if (wins && h >= 3) {
                  const wy = y + Math.ceil(h / 2) + 1;
                  if (i % 2 === 0 || k < 3) box(0, wy, 1, Math.min(2, h - 2), 2);
                  else
                    for (const s of [-1, 1]) box(s * (k - Math.floor(f / 2)), wy, 1, Math.min(2, h - 2), 2);
                }
                y += h;
                if (ev > 1) {
                  roof(k + ev, y + 1, 2, R, ev - 1, false);
                  y += 2;
                } else {
                  box(-k, y, 2 * k + 1, 1, tn(C, -0.4)); // the corbels' shadow
                  box(-k - 1, y + 1, 2 * k + 3, 1, css(e.sh(R)));
                  y += 1;
                }
              };
              if (dense) {
                const k1 = hw0;
                storey(k1, o.sh1 ?? 8, 0, false);
                box(-1, y - 3, 3, 4, 2); // the niche with its Buddha
                box(0, y - 4, 1, 2, 12);
                for (let i = 0; i < dense; i++) {
                  const f = i / Math.max(1, dense - 1),
                    k = Math.max(1, Math.round(k1 - 0.5 - (hw0 - Math.floor(wt / 2)) * f ** 1.6));
                  box(-k, y + 1, 2 * k + 1, 1, tn(C, -0.1));
                  box(-k - 1, y + 2, 2 * k + 3, 1, css(e.sh(R)));
                  y += 2;
                }
              } else
                for (let i = 0; i < n; i++) {
                  const f = n > 1 ? i / (n - 1) : 0,
                    k = Math.round(hw0 - (hw0 - Math.floor(wt / 2)) * f ** 1.15);
                  storey(k, i === 0 ? (o.sh1 ?? sh + 1) : sh, i);
                }
              const kt = Math.max(1, Math.floor(wt / 2) - 1),
                fin = o.fin ?? 4;
              if (ev > 1) cone(0, y, kt, 2, css(e.sh(R)));
              else cone(0, y, kt, 2, tn(R, -0.1));
              y += 2;
              for (let j = 1; j <= fin; j++) box(0, y + j, 1, 1, j % 2 ? 12 : 3); // the finial's rings
              if (fin >= 3) orb(0, y + fin - 1, 0.8, 12);
              break;
            }
            // cnHall
            const n = o.n ?? 1,
              w = o.w ?? 15,
              sh = o.sh ?? 5,
              dw = o.dw ?? 4,
              base = o.base ?? 2,
              R = rgb(o.rc, null) ?? tile,
              col = rgb(o.c, 10),
              B = rgb(o.bc, o.wall ? null : 6) ?? [134, 128, 120];
            const ww = o.ww ?? w + 6,
              hb = Math.floor(ww / 2);
            if (o.wall && base) {
              for (let j = 1; j <= base; j++) {
                const k = hb + Math.round((base - j) / 3);
                box(-k, j, 2 * k + 1, 1, j % 3 === 0 ? tn(B, -0.12) : css(e.sh(B)));
                box(k, j, 1, 1, tn(B, -0.3));
              }
              box(-hb, base, ww, 1, tn(B, 0.25));
              for (let p = -hb; p <= hb; p += 2) box(p, base + 1, 1, 1, css(e.sh(B))); // the merlons
              const gh = Math.max(2, Math.round(base * 0.55)),
                gates = o.gate === 3 ? [-Math.round(hb / 2), 0, Math.round(hb / 2)] : o.gate ? [0] : [];
              for (const gx of gates) {
                const k = gx === 0 ? 1 : 0;
                box(gx - k - 1, gh + 1, 2 * k + 3, 1, tn(B, 0.3)); // the arch ring
                box(gx - k, gh, 2 * k + 1, gh, 2);
              }
            } else if (base) {
              const steps = o.steps ?? 1;
              for (let s = 0; s < steps; s++) {
                const top = Math.round((base * (s + 1)) / steps),
                  bot = Math.round((base * s) / steps),
                  k = hb - s * 2;
                box(-k, top, 2 * k + 1, top - bot, css(e.sh(B)));
                box(k, top, 1, top - bot, tn(B, -0.25));
                if (top - bot >= 2) for (let p = -k + 1; p < k; p += 2) box(p, top, 1, 1, tn(B, 0.3)); // balusters
                box(-k, top - 1, 2 * k + 1, 1, tn(B, -0.12));
              }
              if (o.stairs ?? true)
                for (let j = 1; j <= base; j++) box(-1, j, 3, 1, j % 2 ? tn(B, -0.2) : tn(B, 0.25));
            }
            let y = base,
              k = Math.floor(w / 2);
            for (let i = 0; i < n; i++) {
              k = Math.floor((w - i * dw) / 2);
              box(-k, y + sh, 2 * k + 1, sh, css(e.sh(col)));
              for (let p = -k + 1; p < k; p += 2) box(p, y + sh - 2, 1, sh - 2, tn(col, -0.5)); // lattice doors
              if (i > 0)
                box(-k - 1, y + 1, 2 * k + 3, 1, tn(colors[6], 0.1)); // the balcony railing
              else if (o.wall) box(-k, y + 1, 2 * k + 1, 1, tn(col, -0.3));
              brackets(k, y + sh);
              y += sh;
              if (i < n - 1 || o.dbl) {
                roof(k + 2, y + 1, 2, R, 1, false);
                y += 2;
              }
            }
            if (o.dbl) {
              k = Math.max(2, k - 2);
              box(-k, y + 2, 2 * k + 1, 2, css(e.sh(col)));
              brackets(k, y + 2);
              y += 2;
            }
            const rows = o.rr ?? Math.max(3, Math.round(k * 0.4) + 1);
            if (o.top === "pyr") {
              const top = roof(k + 2, y + 1, rows, R, k + 2, false),
                fin = o.fin ?? 3;
              box(0, top + fin, 1, fin, 12);
              orb(0, top + 1, 0.8, 12);
            } else roof(k + 2, y + 1, rows, R, Math.round((k + 2) * 0.55));
            break;
          }
          case "stSophiaHarbin": {
            // Saint Sophia Cathedral (Harbin): a red-brick Russian church with a big round-arched portal and
            // kokoshnik gables, the tall drum under the great green onion dome, the bell tower with its green
            // tent roof and small onion, a lower side turret, gold crosses.
            const brick = [150, 84, 64],
              B = css(e.sh(brick)),
              S = css(e.sh(mixc(brick, [41, 40, 54], 0.3))),
              Lt = css(e.sh(mixc(brick, [255, 248, 225], 0.3))),
              green = [64, 122, 92],
              G = css(e.sh(green));
            const onion = (cx, base, r) => {
              orb(cx, base + r, r, G);
              cone(cx, base + r, Math.max(1, r - 1), r + 1, G);
              if (r > 2)
                orb(cx - Math.round(r / 2), base + r + 1, 1, css(e.sh(mixc(green, [255, 248, 225], 0.3))));
              box(cx, base + 2 * r + 4, 1, 3, 12);
              box(cx - 1, base + 2 * r + 3, 3, 1, 12);
            };
            box(-10, 16, 21, 16, B); // the body
            box(9, 15, 2, 15, S);
            box(-10, 16, 21, 1, Lt);
            for (let p = -8; p <= 8; p += 4) {
              box(p - 1, 18, 3, 2, B); // kokoshnik gables
              box(p, 19, 1, 1, Lt);
            }
            box(-4, 12, 9, 1, Lt); // the portal's arch
            dome(0, 9, 4, Lt);
            dome(0, 9, 3, 2);
            box(-3, 9, 7, 9, Lt);
            box(-2, 9, 5, 9, 2);
            for (const p of [-8, -6, 6, 8]) {
              box(p, 11, 1, 3, 2);
              box(p, 6, 1, 1, Lt);
            }
            box(-6, 29, 9, 11, B); // the drum
            box(1, 29, 2, 11, S);
            for (let p = -5; p <= 1; p += 2) box(p, 26, 1, 4, 2);
            box(-6, 29, 9, 1, Lt);
            onion(-2, 29, 5);
            box(5, 28, 5, 12, B); // the bell tower
            box(9, 28, 1, 12, S);
            box(6, 26, 3, 3, 2);
            box(7, 24, 1, 1, 12);
            cone(7, 28, 3, 6, G);
            onion(7, 34, 1);
            box(-11, 20, 3, 4, B); // the side turret
            cone(-10, 20, 2, 4, G);
            onion(-10, 24, 1);
            break;
          }
          case "dragonTower": {
            // Dragon Tower (Heilongjiang TV tower, Harbin): a steel lattice tower on four splayed legs with
            // X-bracing, the round observation saucer, a ball above it and the tall needle mast.
            const steel = css(e.sh([140, 146, 156])),
              dk = css(e.sh([88, 94, 108])),
              h = o.h ?? 46,
              deck = Math.round(h * 0.6);
            for (let j = 1; j <= deck; j++) {
              const k = Math.max(1, Math.round(6 * (1 - j / (deck + 8)) ** 1.6));
              box(-k, j, 1, 1, steel);
              box(k, j, 1, 1, steel);
              if (j % 4 === 0 && k > 1)
                for (let p = -k + 1; p < k; p++) box(p, j - (Math.abs(p) % 2), 1, 1, dk);
            }
            box(0, deck, 1, deck, dk); // the core
            box(-6, deck + 3, 13, 2, steel); // the saucer
            box(-5, deck + 1, 11, 1, dk);
            box(-6, deck + 2, 13, 1, css(e.sh([104, 146, 190])));
            box(-4, deck + 4, 9, 1, steel);
            orb(0, deck + 7, 2, steel);
            box(0, h, 1, h - deck - 9, dk);
            box(0, h + (o.ant ?? 8), 1, o.ant ?? 8, steel); // the needle
            for (let j = h + 2; j < h + (o.ant ?? 8); j += 3) box(-1, j, 3, 1, dk);
            break;
          }
          case "zhouEnlaiHall": {
            // Zhou Enlai Memorial Hall (Huai'an): a square pale-granite hall on a broad stepped terrace, four
            // tall square columns on each face in front of a dark portico, and a four-sided pyramid roof of dark
            // tiles with a flat top.
            const st = [214, 208, 196],
              Sx = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              roofc = [74, 82, 96];
            for (let s = 0; s < 3; s++) box(-12 + s * 2, 1 + s, 25 - 4 * s, 1, s % 2 ? Sd : Sx);
            box(-8, 13, 17, 10, Sd); // the portico
            for (const p of [-7, -3, 3, 7]) {
              box(p, 13, 2, 10, Sx);
              box(p, 13, 1, 10, Sl);
            }
            box(-1, 7, 3, 4, 2);
            box(-9, 15, 19, 2, Sx);
            box(-9, 15, 19, 1, Sl);
            for (let j = 0; j < 6; j++) {
              const k = 10 - j * 1.5;
              box(
                -Math.round(k),
                16 + j,
                2 * Math.round(k) + 1,
                1,
                css(e.sh(mixc(roofc, [41, 40, 54], j % 2 ? 0.15 : 0))),
              );
            }
            box(-2, 22, 5, 1, Sl);
            break;
          }
          case "moonHotel": {
            // Sheraton Huzhou Hot Spring Resort, the "Moon Hotel": a horseshoe ring of glass floors rising out of
            // Lake Tai, with the sky through its big round hole and its reflection in the water below.
            const glass = [146, 176, 198],
              G = css(e.sh(glass)),
              Gd = css(e.sh(mixc(glass, [41, 40, 54], 0.3))),
              band = css(e.sh(mixc(glass, [255, 248, 225], 0.45))),
              R = 11,
              ri = 6,
              cy = 11;
            for (let j = 1; j <= cy + R; j++) {
              const dy = j - cy,
                ow = Math.round(Math.sqrt(Math.max(0, R * R - dy * dy)) * 0.92),
                iw = Math.abs(dy) < ri ? Math.round(Math.sqrt(ri * ri - dy * dy) * 0.92) : -1;
              const col = j % 3 === 0 ? band : G;
              if (iw < 0) box(-ow, j, 2 * ow + 1, 1, col);
              else {
                box(-ow, j, ow - iw, 1, col);
                box(iw + 1, j, ow - iw, 1, col);
              }
              if (ow > 1) box(ow, j, 1, 1, Gd);
            }
            box(-13, 2, 27, 2, css(e.sh([86, 132, 178]))); // the lake
            for (let p = -11; p <= 11; p += 4) box(p, 1, 2, 1, css(e.sh([170, 204, 228])));
            break;
          }
          case "diaolou": {
            // Kaiping diaolou (Jiangmen): a tall grey concrete watchtower with small barred windows in a grid; on
            // top a colonnaded balcony with corner bartizans and a domed pavilion. o.rich gives the Ruishi Lou
            // top: an extra arcaded storey, round corner turrets with domes and a Byzantine dome on a drum.
            const h = o.h ?? 30,
              w = o.w ?? 7,
              k = Math.floor(w / 2),
              C = Array.isArray(o.c) ? o.c : colors[o.c ?? 13],
              B = css(e.sh(C)),
              S = css(e.sh(mixc(C, [41, 40, 54], 0.28))),
              Lt = css(e.sh(mixc(C, [255, 248, 225], 0.3)));
            box(-k, h, w, h, B);
            box(k, h, 1, h, S);
            box(-k, h, 1, h, Lt);
            box(-1, 3, 3, 3, 2);
            for (let j = 7; j < h - 2; j += 4)
              for (let p = -k + 2; p <= k - 2; p += 2) box(p, j + 1, 1, 2, 2);
            let y = h;
            box(-k - 1, y + 1, w + 2, 1, Lt); // the balcony
            for (let p = -k; p <= k; p += 2) box(p, y + 4, 1, 3, B);
            box(-k, y + 4, w, 3, S);
            for (let p = -k; p <= k; p += 2) box(p, y + 4, 1, 3, Lt); // the colonnade
            box(-k - 1, y + 5, w + 2, 1, Lt);
            y += 5;
            if (o.rich) {
              for (const s of [-1, 1]) {
                box(s * (k + 1) - 1, y + 3, 3, 3, B); // the corner turrets
                dome(s * (k + 1), y + 3, 1.5, Lt);
              }
              box(-k + 1, y + 4, w - 2, 4, B);
              for (let p = -k + 2; p <= k - 2; p += 2) box(p, y + 3, 1, 2, 2);
              box(-k, y + 5, w, 1, Lt);
              y += 5;
            } else
              for (const s of [-1, 1]) {
                box(s * k - (s > 0 ? 1 : 0), y + 2, 2, 2, Lt); // the bartizans
              }
            const r = Math.max(2, k - 1);
            box(-r + 1, y + 2, 2 * r - 1, 2, B);
            dome(0, y + 2, r, Lt);
            box(0, y + r + 4, 1, 2, 12);
            break;
          }
          case "longxi": {
            // Longxi International Hotel (Huaxi, Jiangyin): a 74-storey tower on a wide podium, its glass shaft
            // ribbed by pale piers, a crown of stepped storeys with corner pinnacles, and the huge golden sphere.
            const glass = css(e.sh([92, 120, 150])),
              pier = css(e.sh([214, 206, 188])),
              pd = css(e.sh(mixc([214, 206, 188], [41, 40, 54], 0.3)));
            box(-7, 5, 15, 5, pier); // the podium
            box(-6, 3, 13, 1, glass);
            box(-5, 44, 11, 39, glass);
            for (const p of [-5, -2, 2, 5]) box(p, 44, 1, 39, p > 0 ? pd : pier);
            for (let j = 10; j < 44; j += 6) box(-5, j, 11, 1, pier);
            box(-6, 47, 13, 3, pier); // the crown
            box(-4, 51, 9, 4, glass);
            box(-4, 51, 1, 4, pier);
            box(4, 51, 1, 4, pd);
            for (const s of [-1, 1]) box(s * 5, 54, 1, 7, pier);
            orb(0, 56, 4, 12); // the golden sphere
            orb(-1, 57, 1.5, 3);
            box(0, 62, 1, 2, 12);
            break;
          }
          case "haikouBell": {
            // Haikou Bell Tower: a slender crimson tower with white corner piers and cornices on an arcaded grey
            // stone podium, tall narrow windows, a white clock face near the top and a small pyramid roof.
            const red = [176, 52, 48],
              Rd = css(e.sh(red)),
              Rs = css(e.sh(mixc(red, [41, 40, 54], 0.3))),
              W = css(e.sh(colors[6])),
              st = [150, 146, 138];
            box(-5, 6, 11, 6, css(e.sh(st))); // the podium
            box(-5, 6, 11, 1, css(e.sh(mixc(st, [255, 248, 225], 0.3))));
            for (const p of [-3, 0, 3]) {
              box(p, 4, 1, 3, 2);
            }
            box(-3, 25, 7, 19, Rd);
            box(3, 25, 1, 19, Rs);
            for (const p of [-3, 3]) box(p, 25, 1, 19, W);
            for (const j of [12, 19]) box(-3, j, 7, 1, W);
            for (const j of [10, 17]) box(0, j, 1, 3, 2);
            box(-4, 26, 9, 1, W);
            box(-2, 31, 5, 5, Rd); // the clock storey
            box(2, 31, 1, 5, Rs);
            orb(0, 29, 1.5, 6);
            box(0, 29, 1, 1, 2);
            box(-3, 32, 7, 1, W);
            cone(0, 32, 2, 3, Rd);
            box(0, 37, 1, 2, W);
            break;
          }
