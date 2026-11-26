          case "placeDucale": {
            // Place Ducale (Charleville-Mézières, 1606-1624): a row of Louis XIII pavilions round the square,
            // an arcaded ground floor of ochre stone, two storeys of brick with stone quoins and window frames,
            // and a steep slate roof of its own on each pavilion with a dormer and chimneys; the middle one
            // higher, with a little lantern.
            const st = [204, 160, 104],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              br = css(e.sh([168, 96, 70])),
              sl = css(e.sh([70, 78, 98])),
              slL = css(e.sh([108, 118, 138]));
            box(-17, 5, 35, 5, S);
            box(-17, 1, 35, 1, Sd);
            for (let p = -16; p <= 16; p += 2) {
              box(p, 4, 1, 3, 2);
              box(p, 4, 1, 1, Sd);
            }
            box(-17, 11, 35, 6, br);
            box(-17, 6, 35, 1, Sl);
            box(-17, 12, 35, 1, Sl);
            for (let i = 0; i < 5; i++) {
              const px = -17 + 7 * i,
                mid = i === 2,
                rh = mid ? 10 : 8;
              box(px, 11, 1, 5, S);
              box(px + 6, 11, 1, 5, S);
              for (const d of [1, 3, 5]) {
                box(px + d, 10, 1, 3, Sl);
                box(px + d, 10, 1, 1, 2);
                box(px + d, 8, 1, 1, 2);
              }
              for (let j = 0; j < rh; j++) {
                const k = Math.min(3, Math.floor((j * 4) / rh));
                box(px + k, 13 + j, 7 - 2 * k, 1, sl);
              }
              box(px + 6, 13 + rh - 1, 1, rh - 1, css(e.sh([56, 62, 80])));
              box(px + 3, 15, 1, 2, slL); // the dormer
              box(px + 3, 15, 1, 1, Sl);
              if (i % 2 === 0) box(px + (i ? 1 : 5), 19, 1, 3, br); // chimneys
              box(px, 13, 7, 1, slL);
              if (mid) {
                box(px + 3, 25, 1, 3, slL);
                box(px + 3, 26, 1, 1, 3);
              }
            }
            break;
          }
          case "ndEsperance": {
            // Basilique Notre-Dame-d'Espérance (Charleville-Mézières): a tall neo-Gothic west tower of ochre
            // stone over the portal: the big arched window, a balustrade with corner pinnacles, a belfry
            // storey with twin louvred openings, another balustrade, then the slate spire with its open
            // lantern and pinnacled lucarnes; the low nave fronts with gables and pinnacles on each side.
            const st = [200, 164, 112],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              sl = css(e.sh([82, 88, 104])),
              slL = css(e.sh([150, 156, 168]));
            for (const s of [-1, 1]) {
              // the side fronts: a gable with a rose-tracery window and pinnacles
              const l = s < 0 ? -10 : 4;
              box(l, 12, 7, 12, S);
              cone(l + 3, 12, 3, 4, S);
              box(l + 2, 9, 3, 6, 2);
              box(l + 3, 13, 1, 1, Sd);
              box(s < 0 ? -10 : 10, 16, 1, 16, S);
              box(s < 0 ? -10 : 10, 17, 1, 1, Sl);
              box(s < 0 ? -4 : 4, 14, 1, 14, Sd);
            }
            box(9, 12, 1, 11, Sd);
            box(-3, 30, 7, 30, S);
            box(3, 30, 1, 30, Sd);
            for (const r of [5, 18, 31]) box(-4, r, 9, 1, Sl); // string courses and balustrades
            box(-2, 7, 5, 7, Sl); // the portal
            box(-1, 6, 3, 6, 2);
            box(-2, 16, 5, 8, Sl); // the great window
            box(-1, 15, 3, 6, 2);
            box(0, 15, 1, 6, Sd);
            for (const p of [-4, 4]) {
              box(p, 21, 1, 3, S);
              box(p, 22, 1, 1, Sl);
              box(p, 33, 1, 2, S);
              box(p, 34, 1, 1, Sl);
            }
            for (const p of [-2, 1]) box(p, 28, 2, 7, 2); // twin belfry openings
            for (const p of [-2, 1]) for (let r = 23; r < 28; r += 2) box(p, r, 2, 1, Sd);
            // the spire: an octagonal base with lucarnes, an open lantern, the needle
            box(-2, 35, 5, 4, sl);
            for (const p of [-3, 3]) cone(p, 32, 1, 4, sl);
            box(-1, 34, 1, 2, slL);
            box(1, 34, 1, 2, slL);
            box(-1, 38, 3, 3, slL);
            box(0, 37, 1, 2, 2);
            box(-1, 39, 3, 1, sl);
            cone(0, 39, 1, 12, sl);
            box(0, 53, 1, 2, 3);
            box(-1, 52, 3, 1, 3);
            break;
          }
          case "chartresCathedral": {
            // Chartres Cathedral, the west front: the Royal Portal's three doors, three tall lancets and the
            // great rose under the gallery of kings and the gable, the green copper roof behind; two unmatched
            // towers, the plain Romanesque octagonal spire on the right and Jean de Beauce's taller Flamboyant
            // spire on the left, with its openwork storeys and pinnacles.
            const st = [196, 190, 176],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              cu = css(e.sh([110, 170, 140]));
            box(-4, 29, 9, 5, cu); // the copper roof behind the gable
            cone(0, 29, 4, 3, cu);
            box(-4, 24, 9, 24, S);
            for (const p of [-3, 0, 3]) box(p - 1, 7, 3, 7, Sl); // the Royal Portal
            for (const p of [-3, 0, 3]) box(p, 6, 1, 5, 2);
            box(-4, 8, 9, 1, Sl);
            for (const p of [-2, 0, 2]) box(p, 15, 1, 6, 2); // the three lancets
            orb(0, 20, 3, Sl); // the rose
            orb(0, 20, 2, 2);
            box(0, 20, 1, 1, Sl);
            box(-4, 24, 9, 1, Sl); // the gallery of kings
            for (let p = -3; p <= 3; p += 2) box(p, 23, 1, 1, Sd);
            cone(0, 24, 3, 3, S);
            for (const s of [-1, 1]) {
              const l = s < 0 ? -11 : 5;
              box(l, 28, 7, 28, S);
              box(l + 6, 27, 1, 27, Sd);
              for (const r of [10, 19]) box(l, r, 7, 1, Sl);
              box(l + 3, 16, 1, 4, 2);
              box(l + 2, 25, 3, 4, 2);
              box(l + 3, 25, 1, 4, Sd);
            }
            // the old south spire: an octagonal pyramid with lucarnes and corner pinnacles at its foot
            cone(8, 28, 3, 20, Sd);
            cone(7.6, 28, 2.4, 19, S);
            for (const p of [5, 11]) cone(p, 28, 0.6, 4, S);
            box(8, 32, 1, 2, 2);
            box(8, 51, 1, 2, 3);
            // the new north spire: openwork storeys, pinnacles, the needle
            for (const b of [29, 36]) {
              box(-10, b + 6, 5, 6, S);
              box(-9, b + 5, 3, 4, 2);
              box(-8, b + 5, 1, 4, S);
              box(-6, b + 5, 1, 5, Sd);
              for (const p of [-11, -5]) {
                box(p, b + 5, 1, 5, S);
                box(p, b + 6, 1, 1, Sl);
              }
            }
            cone(-8, 42, 2, 13, Sd);
            cone(-8.4, 42, 1.6, 12, S);
            box(-8, 57, 1, 2, 3);
            break;
          }
          case "frTwinSpire": {
            // A 19th-century neo-Gothic twin-spire front (b11 cities: Saint-André of Châteauroux,
            // Clermont-Ferrand's lava-stone cathedral and others): three portals under gables, a rose window
            // between the towers under a gabled gallery, tall louvred belfry openings, and stone spires with
            // crockets and corner pinnacles. o.w width, o.th the towers' top, o.sh the spires' height, o.st
            // and o.sp the stone and spire colours ([r, g, b]), o.tw the towers' width.
            const w = o.w ?? 23,
              hw = Math.floor(w / 2),
              tw = o.tw ?? 7,
              th = o.th ?? 28,
              sh = o.sh ?? 18,
              st = o.st ?? [210, 206, 196],
              sp = o.sp ?? st,
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              P = css(e.sh(sp)),
              Pd = css(e.sh(mixc(sp, [41, 40, 54], 0.3))),
              mid = Math.round(th * 0.55),
              ci = hw - tw + 1; // the centre's half-width
            const rr = Math.max(2, Math.min(4, ci - 1)),
              pd = Math.min(3, Math.floor(ci / 2)),
              rc = Math.max(mid - rr, pd * 2 + 8 + rr),
              gt = rc + rr + 3; // the gallery's top row
            box(-ci, gt, 2 * ci + 1, gt, S);
            cone(0, gt, ci, Math.min(ci + 1, 6), S); // the gable over the gallery
            box(0, gt + Math.min(ci + 1, 6) + 2, 1, 2, Sl);
            box(-ci, gt, 2 * ci + 1, 1, Sl);
            for (let p = -ci + 1; p < ci; p += 2) box(p, gt - 1, 1, 1, Sd);
            orb(0, rc, rr, Sl); // the rose
            orb(0, rc, rr - 1, 2);
            box(0, rc, 1, 1, Sl);
            if (rr > 2) for (const d of [-1, 1]) box(d * (rr - 2), rc, 1, 1, Sl);
            box(-ci, pd * 2 + 7, 2 * ci + 1, 1, Sl);
            box(-pd - 1, pd * 2 + 6, 2 * pd + 3, pd * 2 + 6, Sl); // the central portal
            box(-pd, pd * 2 + 4, 2 * pd + 1, pd * 2 + 4, 2);
            box(0, pd * 2 + 4, 1, pd * 2 + 4, Sd);
            for (const s of [-1, 1]) {
              const l = s < 0 ? -hw : hw - tw + 1,
                c0 = l + Math.floor(tw / 2);
              box(l, th, tw, th, S);
              box(l + tw - 1, th - 1, 1, th - 1, Sd);
              for (const p of [l, l + tw - 1]) box(p, th - 2, 1, th - 4, s * (p - c0) < 0 ? S : Sd); // buttresses
              box(c0 - 1, 7, 3, 7, Sl); // the side portal
              box(c0, 6, 1, 5, 2);
              for (const r of [9, pd * 2 + 7, gt, th - 12]) if (r < th - 1) box(l, r, tw, 1, Sl);
              box(c0 - 1, rc + 2, 1, 5, 2); // twin lancets
              box(c0 + 1, rc + 2, 1, 5, 2);
              const ow = tw >= 7 ? 2 : 1; // the louvred belfry openings
              for (const d of tw >= 7 ? [-2, 1] : [0]) {
                box(c0 + d, th - 2, ow, 9, 2);
                for (let r = th - 4; r > th - 11; r -= 2) box(c0 + d, r, ow, 1, Sd);
              }
              box(l - 1, th, tw + 2, 1, Sl); // the balustrade
              for (let p = l; p < l + tw; p += 2) box(p, th + 1, 1, 1, Sl);
              const k = Math.floor(tw / 2) - 1;
              cone(c0, th + 1, k + 1, sh, Pd);
              cone(c0 - 0.4, th + 1, k + 0.6, sh - 1, P);
              for (let r = th + 4; r < th + sh - 2; r += 3) {
                const off = Math.round((k + 1) * (1 - (r - th - 1) / sh)) + 1;
                box(c0 - off, r, 1, 1, P); // crockets
                box(c0 + off, r, 1, 1, Pd);
              }
              box(c0, th + 4, 1, 2, 2); // a lucarne
              for (const p of [l, l + tw - 1]) {
                cone(p, th + 1, 0.6, 4, P);
                box(p, th + 6, 1, 1, Sl);
              }
              box(c0, th + sh + 3, 1, 2, 3);
              box(c0 - 1, th + sh + 3, 3, 1, 3);
            }
            break;
          }
          case "chateauRaoul": {
            // Château Raoul (Châteauroux): a tall white 15th-century keep-house over the Indre, its steep slate
            // hipped roof with gabled stone dormers and a pinnacle at the ridge, rows of cross windows, a
            // little turret on the corner and a lower wing beside it among the trees.
            const st = [232, 226, 210],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.4))),
              sl = css(e.sh([76, 82, 98])),
              slL = css(e.sh([112, 120, 138])),
              tr = css(e.sh([80, 126, 74])),
              trL = css(e.sh([112, 160, 96]));
            orb(-11, 9, 4, tr); // trees on the bank
            orb(-12, 15, 3, trL);
            box(-13, 6, 3, 6, tr);
            box(5, 10, 8, 10, S); // the lower wing
            box(12, 9, 1, 9, Sd);
            for (const p of [7, 10]) box(p, 7, 1, 2, 2);
            for (let j = 0; j < 4; j++) box(5 + j, 11 + j, 8 - 2 * j, 1, sl);
            box(-7, 19, 13, 19, S); // the main block
            box(5, 18, 1, 18, Sd);
            for (const r of [6, 11, 16])
              for (const p of [-5, -2, 1, 4]) {
                box(p, r, 1, 3, 2);
                box(p, r - 1, 1, 1, Sl);
              }
            box(-7, 19, 13, 1, Sl);
            for (let j = 0; j < 9; j++) {
              const k = Math.min(5, Math.floor((j * 6) / 9));
              box(-7 + k, 20 + j, 13 - 2 * k, 1, sl);
            }
            box(-1, 30, 1, 3, slL);
            box(-1, 32, 1, 1, 3);
            for (const p of [-4, 2]) {
              // the gabled dormers
              box(p - 1, 23, 3, 4, S);
              cone(p, 23, 1, 2, S);
              box(p, 22, 1, 2, 2);
            }
            box(-9, 17, 3, 12, S); // the corner turret
            box(-9, 17, 1, 12, Sl);
            cone(-8, 17, 2, 5, sl);
            box(-8, 23, 1, 2, slL);
            break;
          }
          case "chaumontViaduct": {
            // Viaduc de Chaumont (1857): a railway viaduct of pale limestone in three tiers, tall arches below,
            // a low gallery of little arches in the middle (a footway runs through it), tall arches again
            // above, on slender piers, under the parapet. o.n arches.
            const n = o.n ?? 7,
              st = [214, 200, 172],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.32))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              l = -Math.floor((n * 5 + 1) / 2);
            const W = n * 5 + 1;
            box(l, 23, W, 2, Sl); // the parapet and deck
            box(l, 21, W, 2, S);
            box(l, 21, W, 1, Sd);
            for (const r of [10, 14]) {
              box(l, r, W, 1, S);
              box(l, r, W, 1, Sl);
              box(l, r - 1, W, 1, Sd);
            }
            for (let i = 0; i <= n; i++) {
              const p = l + i * 5;
              box(p, 21, 1, 21, S); // the piers, thicker in the lower tier
              box(i < n ? p + 1 : p - 1, 9, 1, 9, Sd);
              if (i < n) {
                for (const r of [20, 9]) {
                  box(p + 1, r, 1, 1, Sd); // the arches' shoulders
                  box(p + 4, r, 1, 1, Sd);
                }
                box(p + 2, 13, 2, 3, S); // the gallery's little piers
                box(p + 3, 13, 1, 3, Sd);
              }
            }
            break;
          }
          case "chaumontBasilica": {
            // Basilique Saint-Jean-Baptiste (Chaumont): a grey limestone Gothic front between two square towers
            // of unequal height, each with a pointed belfry window and a steep slate spire flaring at the foot;
            // a pointed portal, a band of three lancets and a tracery window above, the slate nave roof
            // behind and buttresses down the corners.
            const st = [170, 166, 156],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              sl = css(e.sh([92, 98, 112])),
              slL = css(e.sh([140, 146, 158]));
            box(-4, 25, 9, 4, sl); // the nave roof
            box(-4, 21, 9, 21, S);
            box(-4, 21, 9, 1, Sl);
            box(-2, 8, 5, 8, Sl); // the portal
            box(-1, 7, 3, 7, 2);
            box(0, 8, 1, 1, Sl);
            for (const p of [-2, 0, 2]) box(p, 13, 1, 3, 2); // the lancets
            orb(0, 17, 2, Sl); // the tracery window
            box(-1, 17, 3, 2, 2);
            box(0, 17, 1, 2, Sl);
            box(-2, 16, 5, 1, 2);
            const tower = (l, h, sp) => {
              box(l, h, 7, h, S);
              box(l + 6, h - 1, 1, h - 1, Sd);
              for (const r of [9, 18, h - 10]) box(l - 1, r, 9, 1, Sl);
              box(l + 3, h - 2, 1, 5, 2); // the belfry window
              box(l + 2, h - 3, 3, 3, 2);
              box(l + 3, h - 12, 1, 3, 2);
              box(l - 1, h, 9, 1, Sl);
              box(l - 1, h + 1, 9, 1, sl); // the flared foot of the spire
              cone(l + 3, h + 1, 3, sp, sl);
              cone(l + 2.6, h + 1, 2, sp - 2, slL);
              box(l + 3, h + sp + 3, 1, 2, 3);
            };
            tower(-10, 30, 12);
            tower(4, 26, 12);
            break;
          }
          case "petiteVenise": {
            // Petite Venise (Colmar): a row of brightly painted half-timbered Alsatian houses on the Lauch,
            // their dark timber frames with posts and braces, overhanging upper storeys, steep gables with
            // tiled roof edges, window boxes of flowers, and the river at their feet.
            const tim = css(e.sh([92, 62, 44])),
              tile = css(e.sh([170, 76, 52])),
              flo = css(e.sh([214, 70, 70])),
              wat = css(e.sh([82, 128, 150])),
              watL = css(e.sh([140, 180, 196])),
              houses = [
                [8, 16, [236, 196, 92]],
                [7, 17, [214, 128, 120]],
                [9, 15, [120, 168, 196]],
                [7, 16, [236, 222, 184]],
                [8, 15, [130, 176, 120]],
                [8, 17, [226, 150, 84]],
              ];
            const W = houses.reduce((a, h) => a + h[0], 0) + houses.length - 1,
              L = -Math.floor(W / 2);
            box(L - 1, 2, W + 2, 2, wat);
            for (let p = L; p < L + W; p += 5) box(p, 2, 2, 1, watL);
            let x = L;
            for (const [w, h, rgb] of houses) {
              const C = css(e.sh(rgb)),
                Cd = css(e.sh(mixc(rgb, [41, 40, 54], 0.25))),
                mid = x + Math.floor(w / 2);
              box(x, h, w, h - 2, C);
              box(x, 6, w, 4, Cd); // the stone ground storey
              box(mid, 5, 1, 3, 2);
              for (const r of [7, 12, h]) box(x, r, w, 1, tim); // the beams of each storey
              for (const p of [x, x + w - 1]) box(p, h, 1, h - 6, tim);
              box(mid, 11, 1, 3, tim);
              box(mid - 1, 15, 1, 1, tim); // the braces
              box(mid + 1, 15, 1, 1, tim);
              box(mid, 14, 1, 1, tim);
              for (const p of [x + 1, x + w - 2]) {
                box(p, 10, 1, 2, 2);
                box(p, h - 1, 1, 2, 2);
              }
              for (const p of [x + 1, x + w - 2]) box(p, 8, 1, 1, flo); // the window boxes
              const g = Math.ceil(w / 2) + 2; // the gable
              for (let j = 0; j < g; j++) {
                const k = Math.round((j * (w / 2)) / g);
                box(x + k, h + 1 + j, w - 2 * k, 1, tile);
                if (w - 2 * k > 2) box(x + k + 1, h + 1 + j, w - 2 * k - 2, 1, C);
              }
              box(mid, h + 3, 1, 2, 2);
              x += w + 1;
            }
            break;
          }
          case "digneCathedral": {
            // Cathédrale Saint-Jérôme (Digne-les-Bains): a Gothic front banded in pale and grey stone, a deep
            // pointed portal, a rose window and a crenellated gable with pinnacles; beside it the square
            // brown bell tower with its clock under a corbelled parapet, crowned by a Provençal wrought-iron
            // bell cage.
            const st = [214, 200, 170],
              S = css(e.sh(st)),
              Sb = css(e.sh([160, 150, 134])),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              tw = [150, 120, 92],
              T = css(e.sh(tw)),
              Td = css(e.sh(mixc(tw, [41, 40, 54], 0.3))),
              Tl = css(e.sh(mixc(tw, [255, 248, 225], 0.3))),
              iron = css(e.sh([54, 50, 58]));
            box(-9, 20, 12, 20, S); // the front
            for (let r = 2; r < 20; r += 3) box(-9, r, 12, 1, Sb);
            box(-7, 9, 7, 9, Sl); // the portal
            box(-6, 8, 5, 8, Sd);
            box(-5, 7, 3, 7, 2);
            box(-4, 9, 1, 1, Sd);
            orb(-4, 15, 3, Sl); // the rose
            orb(-4, 15, 2, 2);
            box(-4, 15, 1, 1, Sl);
            box(-9, 21, 12, 1, Sl);
            for (let p = -9; p <= 2; p += 2) box(p, 22, 1, 1, Sl); // the crenellated gable
            box(-7, 24, 7, 2, S);
            box(-5, 26, 3, 2, S);
            for (const p of [-9, -1, 2]) box(p, 25, 1, 4, S);
            box(-4, 29, 1, 3, Sl);
            box(1, 20, 2, 20, Sd); // the buttress
            box(3, 26, 7, 26, T); // the bell tower
            box(9, 25, 1, 25, Td);
            for (const r of [8, 16]) box(3, r, 7, 1, Tl);
            box(6, 13, 1, 3, 2);
            box(6, 21, 1, 3, 2);
            box(2, 28, 9, 2, T); // the corbelled parapet
            for (let p = 3; p <= 9; p += 2) box(p, 26, 1, 1, Td);
            box(2, 28, 9, 1, Tl);
            orb(6, 24, 1.5, 6); // the clock
            box(6, 24, 1, 1, 2);
            // the wrought-iron bell cage
            for (const [dx, y] of [
              [3, 30],
              [3, 31],
              [3, 32],
              [3, 33],
              [2, 34],
              [2, 35],
              [1, 36],
            ])
              for (const s of [-1, 1]) box(6 + s * dx, y, 1, 1, iron);
            box(6, 39, 1, 3, iron);
            box(5, 38, 3, 1, iron);
            box(4, 34, 5, 1, iron);
            box(5, 33, 3, 2, 12);
            box(6, 31, 1, 1, iron);
            break;
          }
          case "dijonPalace": {
            // Palace of the Dukes of Burgundy (Dijon), from the Place de la Libération: the pale classical
            // front with its slate roof and dormers, end pavilions with giant columns under sculpted pediments,
            // and the 15th-century Tour Philippe le Bon rising behind, with its corner turret.
            const st = [226, 210, 172],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.4))),
              sl = css(e.sh([84, 92, 108])),
              slL = css(e.sh([126, 134, 150])),
              tw = [200, 184, 150],
              T = css(e.sh(tw)),
              Td = css(e.sh(mixc(tw, [41, 40, 54], 0.3)));
            box(-3, 28, 7, 17, T); // the tower behind
            box(3, 28, 1, 17, Td);
            for (const r of [19, 25]) {
              box(-1, r, 1, 2, 2);
              box(1, r, 1, 2, 2);
            }
            box(-4, 28, 9, 1, Sl);
            for (let p = -3; p <= 3; p += 2) box(p, 29, 1, 1, T);
            box(2, 32, 2, 4, T); // the turret
            box(2, 33, 2, 1, Sl);
            box(-11, 9, 23, 9, S); // the centre range
            box(-11, 1, 23, 1, Sd);
            box(-11, 5, 23, 1, Sl);
            for (let p = -10; p <= 10; p += 2) {
              box(p, 4, 1, 2, 2);
              box(p, 8, 1, 2, 2);
            }
            box(-11, 10, 23, 1, Sl);
            for (let j = 0; j < 4; j++) box(-11 + j, 11 + j, 23 - 2 * j, 1, sl); // the slate roof
            for (let p = -8; p <= 8; p += 4) {
              box(p, 13, 1, 2, slL); // dormers
              box(p, 13, 1, 1, Sl);
            }
            for (const s of [-1, 1]) {
              const l = s < 0 ? -16 : 11;
              box(l, 12, 6, 12, S); // the pavilion
              box(l, 1, 6, 1, Sd);
              box(l, 12, 6, 1, Sl);
              for (const p of [l, l + 2, l + 4]) box(p + 0.5, 11, 1, 9, Sl); // giant columns
              for (const p of [l + 1, l + 3]) {
                box(p + 0.5, 9, 1, 2, 2);
                box(p + 0.5, 5, 1, 3, 2);
              }
              box(l + (s < 0 ? 5 : 0), 11, 1, 10, Sd);
              cone(l + 2.5, 12, 3, 3, S); // the pediment and its statues
              box(l + 2, 14, 2, 1, Sd);
              box(l, 15, 1, 2, Sl);
              box(l + 5, 15, 1, 2, Sl);
              box(l + 2.5, 17, 1, 2, Sl);
              box(l + (s < 0 ? 6 : -1), 12, 1, 10, sl);
            }
            break;
          }
          case "epinalStMaurice": {
            // Basilique Saint-Maurice (Épinal): the massive Romanesque porch tower of pinkish-grey Vosges
            // sandstone, a deep round portal with a zigzag archivolt on little columns, one small window, a
            // storey of four twin arched bays, a narrower belfry with two arches, a gable with the clock and a
            // small slate spirelet; a conical stair turret and the aisle beside it.
            const st = [184, 160, 146],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              sl = css(e.sh([90, 96, 110])),
              ti = css(e.sh([170, 90, 70]));
            for (let j = 0; j < 4; j++) box(-10, 11 + j, 2 + (j > 1 ? 0 : 1) - (j > 2 ? 1 : 0), 1, ti); // the nave roof and the turret
            box(-10, 10, 2, 10, Sd);
            box(8, 22, 3, 22, Sd);
            cone(9, 22, 1, 5, sl);
            box(-8, 20, 17, 20, S); // the porch tower
            box(7, 19, 2, 19, Sd);
            box(-8, 2, 17, 2, Sd);
            box(-5, 12, 11, 10, Sl); // the portal
            box(-4, 13, 9, 1, Sl);
            for (let p = -4; p <= 4; p += 2) box(p, 13, 1, 1, Sd); // the zigzag
            box(-3, 11, 7, 1, Sd);
            box(-3, 9, 7, 7, 2);
            box(-2, 10, 5, 1, 2);
            box(-1, 11, 3, 1, 2);
            for (const p of [-5, 5]) box(p, 9, 1, 7, S); // the little columns
            box(0, 17, 1, 2, 2);
            box(-9, 21, 19, 1, Sl);
            box(-7, 26, 15, 5, S); // four twin bays
            box(6, 26, 2, 5, Sd);
            for (const p of [-6, -2, 2, 5]) {
              box(p, 25, 2, 3, 2);
              box(p, 25, 2, 1, Sl);
            }
            box(-8, 27, 17, 1, Sl);
            box(-5, 32, 11, 5, S); // the belfry
            box(4, 32, 2, 5, Sd);
            for (const p of [-4, 1]) {
              box(p, 31, 3, 3, 2);
              box(p + 1, 31, 1, 3, S);
            }
            box(-6, 33, 13, 1, Sl);
            cone(0, 33, 6, 5, S); // the gable with the clock
            box(5, 34, 1, 1, Sd);
            orb(0, 35, 1, Sl);
            box(-1, 40, 3, 2, sl); // the spirelet
            cone(0, 40, 1, 3, sl);
            box(0, 45, 1, 2, 3);
            break;
          }
          case "evreuxCathedral": {
            // Évreux Cathedral (Notre-Dame): the Flamboyant north transept front with its rose and pointed
            // gable between pinnacles, the Renaissance tower on the left with its balustrade, little dome and
            // lantern, and the slender lead spire over the crossing ("the silver steeple") behind on the right.
            const st = [222, 210, 186],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.4))),
              pb = css(e.sh([138, 146, 156])),
              pbD = css(e.sh([100, 106, 118]));
            box(5, 30, 5, 10, S); // the crossing tower and its spire
            box(9, 30, 1, 10, Sd);
            box(6, 28, 1, 5, 2);
            box(8, 28, 1, 5, 2);
            cone(7, 30, 2, 15, pb);
            box(8, 44, 1, 12, pbD);
            box(7, 47, 1, 2, 3);
            box(-4, 22, 10, 22, S); // the transept front
            box(5, 21, 1, 21, Sd);
            box(-3, 9, 7, 9, Sl); // the portal
            box(-2, 8, 5, 8, 2);
            box(0, 8, 1, 8, Sd);
            orb(0.5, 16, 3, Sl); // the rose
            orb(0.5, 16, 2, 2);
            box(0, 16, 1, 1, Sl);
            box(-4, 22, 10, 1, Sl);
            cone(0.5, 22, 4, 6, S); // the gable and pinnacles
            box(0, 25, 1, 2, Sd);
            for (const p of [-4, 5]) {
              box(p, 26, 1, 8, S);
              box(p, 27, 1, 1, Sl);
            }
            box(-11, 24, 7, 24, S); // the Renaissance tower
            box(-5, 23, 1, 23, Sd);
            for (const r of [8, 16]) box(-12, r, 9, 1, Sl);
            for (const r of [6, 13, 21]) {
              box(-9, r, 1, 3, 2);
              box(-7, r, 1, 3, 2);
            }
            box(-12, 25, 9, 1, Sl); // the balustrade
            for (let p = -11; p <= -5; p += 2) box(p, 26, 1, 1, Sl);
            box(-10, 30, 5, 5, S); // the drum, dome and lantern
            box(-6, 30, 1, 5, Sd);
            box(-9, 29, 1, 2, 2);
            box(-7, 29, 1, 2, 2);
            box(-11, 31, 7, 1, Sl);
            dome(-8, 31, 2.5, S);
            box(-9, 37, 3, 3, S);
            box(-8, 36, 1, 2, 2);
            dome(-8, 37, 1.2, S);
            box(-8, 40, 1, 2, 3);
            break;
          }
          case "evryCathedral": {
            // Évry Cathedral (Mario Botta, 1995): a red-brick cylinder cut off by a slanting roof, its rim
            // crowned by a ring of lime trees with the cross between them, the white band of the skylight
            // across the top, and the lower brick block in front with slit windows and the stepped entrance.
            const br = [190, 96, 72],
              B = css(e.sh(br)),
              Bd = css(e.sh(mixc(br, [41, 40, 54], 0.3))),
              Bl = css(e.sh(mixc(br, [255, 248, 225], 0.25))),
              tr = css(e.sh([92, 140, 70])),
              trL = css(e.sh([130, 170, 90])),
              trunk = css(e.sh([110, 86, 66]));
            box(-9, 19, 19, 19, B); // the cylinder, lit on the left and shaded round to the right
            box(-9, 19, 3, 19, Bl);
            box(6, 19, 4, 19, Bd);
            for (let p = -9; p <= 9; p++) {
              const top = 19 + Math.round((p + 9) / 6); // the slanting rim
              box(p, top, 1, top - 19, B);
            }
            box(-9, 19, 19, 1, css(e.sh([236, 232, 222]))); // the skylight band
            for (let r = 4; r < 18; r += 3) box(-9, r, 19, 1, Bd);
            for (let i = 0; i < 7; i++) {
              const p = -8 + i * 3,
                top = 20 + Math.round((p + 9) / 6);
              box(p, top + 1, 1, 1, trunk);
              orb(p, top + 2.5, 1.4, i % 2 ? trL : tr);
            }
            box(0, 27, 1, 4, Bd); // the cross
            box(-1, 26, 3, 1, Bd);
            box(-11, 11, 13, 11, B); // the front block
            box(-11, 11, 13, 1, Bl);
            for (let p = -10; p <= 0; p += 2) box(p, 9, 1, 3, 2);
            box(-9, 4, 2, 2, 2);
            box(-5, 4, 2, 2, 2);
            for (let j = 0; j < 4; j++) box(-2 + j, 8 - 2 * j, 4 - j, 1, Bd); // the stepped entrance
            box(-1, 3, 2, 3, 2);
            break;
          }
          case "gapCathedral": {
            // Gap Cathedral (Notre-Dame-et-Saint-Arnoux, 1866-1904): a neo-Gothic front banded in pale and grey
            // stone, the central porch tower with its gabled portal, rose window, clock, tall twin belfry
            // lancets and a stone spire between four pinnacles; lower aisle fronts with round windows on
            // each side.
            const st = [222, 220, 214],
              S = css(e.sh(st)),
              Sb = css(e.sh([170, 168, 166])),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.4)));
            for (const s of [-1, 1]) {
              const l = s < 0 ? -10 : 5;
              box(l, 16, 6, 16, S);
              for (let r = 2; r < 16; r += 2) box(l, r, 6, 1, Sb);
              cone(l + 2.5, 16, 3, 3, S);
              orb(l + 2.5, 13, 1, 2);
              box(l + 2, 8, 2, 5, 2);
            }
            box(-4, 40, 9, 40, S); // the tower
            for (let r = 2; r < 40; r += 2) box(-4, r, 9, 1, Sb);
            box(4, 39, 1, 39, Sd);
            for (const p of [-5, 5]) box(p, 25, 1, 25, S); // the corner buttresses
            box(-3, 11, 7, 11, Sl); // the gabled portal
            box(-2, 9, 5, 9, 2);
            box(0, 9, 1, 3, Sd);
            cone(0, 11, 4, 3, Sl);
            orb(0, 19, 3, Sl); // the rose
            orb(0, 19, 2, 2);
            box(0, 19, 1, 1, Sl);
            orb(0, 26, 1.5, Sl); // the clock
            box(0, 26, 1, 1, 2);
            for (const p of [-2, 1]) box(p, 38, 2, 8, 2); // the belfry lancets
            for (const p of [-2, 1]) for (let r = 37; r > 30; r -= 2) box(p, r, 2, 1, Sd);
            box(-5, 41, 11, 1, Sl);
            cone(0, 41, 2, 14, Sd); // the spire
            cone(-0.4, 41, 1.6, 13, S);
            for (const p of [-4, 4]) {
              cone(p, 41, 1, 6, S);
              box(p, 48, 1, 1, Sl);
            }
            box(0, 44, 1, 2, 2);
            box(0, 57, 1, 2, 3);
            box(-1, 56, 3, 1, 3);
            break;
          }
          case "bastilleGrenoble": {
            // The Bastille (Grenoble): the 19th-century fort's stepped stone walls and bastion on top of the
            // wooded rock above the Isère, and the cable car's round glass "bubbles" climbing to it on their
            // cable.
            const rock = [128, 126, 112],
              R = css(e.sh(rock)),
              Rd = css(e.sh(mixc(rock, [41, 40, 54], 0.3))),
              wood = css(e.sh([86, 128, 80])),
              woodL = css(e.sh([112, 150, 92])),
              st = [196, 186, 160],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              gl = css(e.sh([200, 220, 230])),
              cab = css(e.sh([60, 60, 70]));
            for (let p = -14; p <= 14; p++) {
              const h = Math.round(3 + 8 * Math.min(1, (p + 14) / 20)); // the wooded rock rising to the right
              box(p, h, 1, h, R);
              if (p % 4 === 0) box(p, h - 2, 1, h - 3, Rd);
              box(p, h, 1, Math.min(3, h - 1), (p * 7) % 5 < 2 ? woodL : wood);
            }
            box(-1, 14, 15, 3, S); // the fort: the walls in steps
            box(-1, 14, 15, 1, Sl);
            for (let p = 0; p <= 13; p += 3) box(p, 13, 1, 1, 2);
            box(4, 17, 10, 3, S);
            box(4, 17, 10, 1, Sl);
            for (let p = 5; p <= 13; p += 2) box(p, 18, 1, 1, S); // the parapet
            box(13, 16, 1, 5, Sd);
            box(8, 20, 4, 2, S); // the keep
            box(8, 20, 4, 1, Sl);
            box(9, 19, 1, 1, 2);
            // the cable and the bubbles
            for (let i = 0; i <= 13; i++) box(-14 + i, 5 + i, 1, 1, cab);
            for (const p of [-11, -6]) {
              const y = 5 + (p + 14);
              box(p, y - 1, 1, 1, cab);
              orb(p, y - 3, 1.5, gl);
              box(p - 1, y - 3, 3, 1, cab);
            }
            break;
          }
          case "tourPerret": {
            // Tour Perret (Grenoble, 1925): Auguste Perret's slender octagonal tower of bare concrete, its
            // shaft of ribbed panels pierced with little openings, a ring gallery near the top, and a narrower
            // open lantern above it.
            const cc = [176, 172, 160],
              C = css(e.sh(cc)),
              Cd = css(e.sh(mixc(cc, [41, 40, 54], 0.3))),
              Cl = css(e.sh(mixc(cc, [255, 248, 225], 0.3)));
            box(-3, 2, 7, 2, Cd); // the base
            box(-2, 33, 5, 33, C);
            box(-2, 33, 1, 33, Cl);
            box(2, 33, 1, 33, Cd);
            for (let r = 4; r < 32; r += 3) box(0, r, 1, 1, Cd); // the pierced panels
            for (let r = 6; r < 32; r += 6) box(-2, r, 5, 1, Cl);
            box(-3, 34, 7, 1, Cl); // the gallery
            for (const p of [-3, -1, 1, 3]) box(p, 37, 1, 3, C);
            box(-3, 38, 7, 1, Cl);
            box(-1, 44, 3, 6, C); // the lantern
            box(0, 43, 1, 3, Cd);
            box(-1, 45, 3, 1, Cl);
            box(0, 46, 1, 1, Cl);
            break;
          }
          case "gueretChurch": {
            // Église Saint-Pierre-et-Saint-Paul (Guéret): a granite church seen from the side, the nave with
            // pairs of tall pointed windows between buttresses under a grey slate roof, and the octagonal
            // belfry rising behind with its tall lancets, a little round stair turret and a steep stone
            // octagonal spire with the weathercock.
            const st = [178, 160, 128],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              sp = [120, 112, 100],
              P = css(e.sh(sp)),
              Pd = css(e.sh(mixc(sp, [41, 40, 54], 0.3))),
              sl = css(e.sh([92, 98, 112]));
            box(-3, 29, 7, 13, S); // the octagonal belfry
            box(-3, 29, 1, 13, Sl);
            box(3, 29, 1, 13, Sd);
            for (const p of [-2, 1]) box(p, 27, 2, 6, 2);
            box(-3, 21, 7, 1, Sl);
            box(-1, 20, 1, 2, 2);
            box(1, 20, 1, 2, 2);
            box(-5, 23, 2, 9, Sd); // the stair turret
            cone(-4.5, 23, 1, 3, P);
            box(-4, 30, 9, 1, Sl);
            cone(0, 30, 3, 14, Pd); // the stone spire
            cone(-0.4, 30, 2.4, 13, P);
            box(0, 33, 1, 2, 2);
            box(0, 46, 1, 3, 3);
            box(-1, 47, 3, 1, 3);
            for (let j = 0; j < 4; j++) box(-9 + j, 13 + j, 19 - 2 * j, 1, sl); // the nave roof
            box(-9, 13, 19, 1, css(e.sh([128, 134, 148])));
            box(-9, 12, 19, 12, S);
            box(-9, 12, 19, 1, Sl);
            box(-9, 2, 19, 2, Sd);
            for (const p of [-9, -3, 3, 9]) box(p, 11, 1, 9, Sd); // the buttresses
            for (const p of [-6, 0, 6]) {
              box(p - 1, 10, 1, 6, 2);
              box(p + 1, 10, 1, 6, 2);
              box(p - 1, 10, 3, 1, Sl);
            }
            break;
          }
          case "stLouisRocheYon": {
            // Église Saint-Louis (La Roche-sur-Yon, 1817-1830): Napoleon's new town church, a pale neoclassical
            // temple front of six giant columns under a pediment with a cross, the inscribed frieze, and two
            // square bell towers behind with round-arched belfry openings under small pediments and attics.
            const st = [226, 220, 200],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.45))),
              sl = css(e.sh([84, 92, 110]));
            for (const s of [-1, 1]) {
              const l = s < 0 ? -11 : 6;
              box(l, 26, 6, 13, S); // the bell towers
              box(l + 5, 26, 1, 13, Sd);
              box(l + 2, 24, 2, 5, 2);
              box(l + 2, 25, 2, 1, Sl);
              box(l - 1, 26, 8, 1, Sl);
              cone(l + 2.5, 26, 3, 2, S);
              box(l + 1, 29, 4, 1, S); // the attic
              box(l + 2, 17, 2, 2, 2);
            }
            box(-11, 13, 23, 13, S); // the church body
            box(-11, 13, 23, 1, Sl);
            box(-7, 2, 15, 2, Sd); // the steps
            box(-8, 1, 17, 1, Sd);
            box(-6, 11, 13, 9, Sd); // the shaded porch behind the columns
            box(-1, 7, 3, 5, 2);
            for (let i = 0; i < 6; i++) {
              const p = -6 + i * 2.4;
              box(p, 11, 1, 9, Sl); // the giant columns
              box(p - 0.4, 11, 2, 1, S);
            }
            box(-7, 13, 15, 2, S); // the frieze with its inscription
            for (let p = -5; p <= 5; p += 2) box(p, 12, 1, 1, Sd);
            box(-8, 14, 17, 1, Sl);
            for (let j = 0; j < 5; j++) box(-8 + 2 * j, 15 + j, 17 - 4 * j, 1, j ? S : Sl); // the pediment
            box(0, 18, 1, 3, Sd);
            box(-1, 17, 3, 1, Sd);
            box(-11, 15, 3, 2, sl);
            box(9, 15, 3, 2, sl);
            break;
          }
          case "lanterneRochelle": {
            // Tour de la Lanterne (La Rochelle, 15th century): a round stone tower with a corbelled parapet,
            // then the tall octagonal Gothic spire that once held the harbour light, ringed by a gallery
            // halfway up, with a gabled lucarne and a slender pinnacle turret at its foot.
            const st = [214, 204, 180],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.4)));
            box(-4, 17, 9, 17, S); // the round tower
            box(-4, 17, 2, 17, Sl);
            box(3, 17, 2, 17, Sd);
            box(1, 12, 1, 2, 2);
            box(-2, 6, 1, 2, 2);
            box(-5, 20, 11, 3, S); // the corbelled parapet
            box(-5, 20, 11, 1, Sl);
            for (let p = -4; p <= 4; p += 2) box(p, 18, 1, 1, Sd);
            box(4, 19, 1, 2, Sd);
            box(-3, 29, 7, 9, S); // the spire's lower stage
            box(-3, 29, 1, 9, Sl);
            box(2, 29, 2, 9, Sd);
            cone(0, 25, 1, 2, Sl); // the lucarne
            box(0, 24, 1, 2, 2);
            box(4, 28, 1, 8, S); // the pinnacle turret
            cone(4, 28, 0.6, 4, S);
            box(-3, 30, 7, 1, Sl); // the gallery
            cone(0, 30, 2.5, 15, Sd);
            cone(-0.3, 30, 2, 14, S);
            for (let r = 33; r < 44; r += 3) box(-1, r, 1, 1, Sl);
            box(0, 46, 1, 2, 2);
            break;
          }
          case "stNicolasRochelle": {
            // Tour Saint-Nicolas (La Rochelle, 14th century): the massive keep guarding the old harbour, a
            // squat stone tower with round turrets clasped to its corners, few small windows, a crown of
            // machicolations and merlons, and a taller turret rising over one side.
            const st = [206, 194, 168],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.4)));
            box(-5, 20, 11, 20, S); // the keep
            box(3, 19, 3, 19, Sd);
            for (const p of [-7, 5]) {
              box(p, 22, 3, 22, S); // the corner turrets
              box(p, 22, 1, 22, Sl);
              box(p + 2, 22, 1, 22, Sd);
              box(p, 24, 3, 2, S);
              box(p + 1, 25, 1, 1, S);
              for (let q = p; q < p + 3; q += 2) box(q, 25, 1, 1, S);
            }
            box(-1, 8, 1, 2, 2);
            box(1, 14, 1, 2, 2);
            box(-3, 17, 1, 1, 2);
            box(-5, 22, 11, 2, S); // the machicolations and merlons
            box(-5, 22, 11, 1, Sl);
            for (let p = -5; p <= 5; p += 2) box(p, 20, 1, 1, Sd);
            for (let p = -4; p <= 4; p += 2) box(p, 23, 1, 1, S);
            box(-3, 28, 4, 5, S); // the stair turret
            box(0, 28, 1, 5, Sd);
            for (const p of [-3, -1]) box(p, 29, 1, 1, S);
            box(-2, 26, 1, 2, 2);
            box(-7, 1, 15, 1, Sd); // the quay
            break;
          }
          case "laonCathedral": {
            // Laon Cathedral, the west front: three deep projecting porches under gables and pinnacles, the
            // great rose in its arch between two tall arched windows, a gallery of little arches, and the two
            // open towers: square lower storeys turning octagonal, with tall open bays and the open corner
            // turrets (where the stone oxen stand) all the way up, ending flat.
            const st = [212, 206, 190],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.4)));
            box(-12, 28, 25, 28, S);
            box(12, 27, 1, 27, Sd);
            for (const [cx, hw] of [
              [-8, 3],
              [0, 4],
              [8, 3],
            ]) {
              box(cx - hw, 11, 2 * hw + 1, 11, Sl); // the porches
              box(cx - hw + 1, 9, 2 * hw - 1, 9, Sd);
              box(cx - hw + 2, 7, 2 * hw - 3, 7, 2);
              cone(cx, 11, hw, hw + 1, Sl); // their gables
              cone(cx, 11, hw - 1, hw - 1, Sd);
              box(cx, 13, 1, 1, Sl);
            }
            for (const p of [-12, -4, 4, 12]) {
              box(p, 16, 1, 4, S); // pinnacles between the porches
              box(p, 17, 1, 1, Sl);
            }
            box(-12, 17, 25, 1, Sl);
            box(-5, 25, 11, 8, Sl); // the rose arch
            orb(0, 21, 4, S);
            orb(0, 21, 3, 2);
            for (const [dx, dy] of [
              [0, 0],
              [-2, 0],
              [2, 0],
              [0, -2],
              [0, 2],
            ])
              box(dx, 21 + dy, 1, 1, Sl);
            for (const p of [-9, 9]) {
              box(p - 2, 25, 5, 8, Sl); // the side windows in their arches
              box(p - 1, 24, 3, 6, Sd);
              box(p, 24, 1, 6, 2);
            }
            box(-12, 26, 25, 1, Sl); // the gallery
            for (let p = -11; p <= 11; p += 2) box(p, 28, 1, 2, Sd);
            box(-12, 29, 25, 1, Sl);
            box(-3, 31, 7, 2, S); // the balustrade between the towers and its statue
            for (let p = -3; p <= 3; p += 2) box(p, 31, 1, 1, Sl);
            box(0, 33, 1, 2, Sl);
            for (const cx of [-8, 8]) {
              box(cx - 4, 37, 9, 7, S); // the square storey with twin bays
              box(cx + 4, 37, 1, 7, Sd);
              box(cx - 2, 36, 2, 5, 2);
              box(cx + 1, 36, 2, 5, 2);
              box(cx - 2, 46, 5, 9, S); // the octagonal storey
              box(cx + 2, 46, 1, 9, Sd);
              box(cx - 1, 45, 3, 7, 2);
              box(cx, 45, 1, 1, S);
              box(cx - 3, 47, 7, 1, Sl);
              for (const s of [-1, 1]) {
                const tx = s < 0 ? cx - 4 : cx + 3;
                box(tx, 45, 2, 8, S); // the open corner turrets
                box(s < 0 ? tx : tx + 1, 42, 1, 2, 2);
                box(tx, 46, 2, 1, Sl);
              }
            }
            box(-13, 43, 1, 1, Sl); // stone oxen looking out of the turrets
            box(12, 43, 1, 1, Sl);
            break;
          }
          case "lavalCastle": {
            // Château de Laval, from the Mayenne: the round 13th-century keep with its timber hoarding (a
            // roofed wooden gallery overhanging the top) under a slate cone, the long grey castle range with
            // its steep slate roof, dormers and chimneys, and the river wall below with its arch.
            const st = [160, 154, 140],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              sl = css(e.sh([82, 86, 98])),
              slL = css(e.sh([118, 124, 138])),
              wood = css(e.sh([92, 80, 72])),
              q = [178, 172, 158],
              Q = css(e.sh(q)),
              Qd = css(e.sh(mixc(q, [41, 40, 54], 0.3)));
            box(-15, 7, 31, 7, Q); // the river wall
            box(-15, 7, 31, 1, css(e.sh(mixc(q, [255, 248, 225], 0.3))));
            for (let r = 2; r < 7; r += 2) box(-15, r, 31, 1, Qd);
            box(5, 4, 3, 3, 2);
            box(6, 5, 1, 1, 2);
            box(-7, 20, 22, 13, S); // the castle range
            box(14, 20, 1, 13, Sd);
            for (const r of [12, 17]) for (let p = -5; p <= 12; p += 3) box(p, r, 1, 2, 2);
            box(-7, 20, 22, 1, Sl);
            for (let j = 0; j < 6; j++) box(-7 + j, 21 + j, 22 - 2 * j, 1, sl); // the slate roof
            for (const p of [-2, 4, 10]) {
              box(p - 1, 24, 3, 3, slL); // the dormers
              box(p, 23, 1, 2, 2);
              cone(p, 24, 1, 1, slL);
            }
            for (const p of [-4, 12]) box(p, 29, 1, 4, S); // chimneys
            box(-14, 27, 7, 20, S); // the round keep
            box(-14, 27, 2, 20, Sl);
            box(-9, 27, 2, 20, Sd);
            box(-11, 18, 1, 2, 2);
            box(-12, 12, 1, 1, 2);
            box(-15, 31, 9, 4, wood); // the timber hoarding
            for (let p = -14; p <= -8; p += 2) box(p, 29, 1, 2, css(e.sh([64, 56, 52])));
            cone(-10.5, 31, 5, 6, sl); // the slate cone
            box(-11, 39, 1, 2, 3);
            break;
          }
          case "leMansCathedral": {
            // Le Mans Cathedral (Saint-Julien), from the south: the tall square transept tower with its
            // lancets, buttresses and corner turrets, the transept front with its gable, and the soaring
            // Gothic choir: a forest of pinnacled flying buttresses springing from the ring of chapels below
            // the high windows and the hipped slate roof of the apse.
            const st = [208, 196, 168],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              sl = css(e.sh([88, 96, 112]));
            for (let j = 0; j < 6; j++) box(2 + Math.floor(j / 2), 26 + j, 10 - j, 1, sl); // the choir roof
            box(2, 25, 10, 25, S); // the high choir
            box(11, 24, 1, 24, Sd);
            for (const p of [3, 6, 9]) box(p, 23, 1, 7, 2);
            box(2, 25, 10, 1, Sl);
            for (const p of [0, 4, 8, 12]) {
              box(p, 27, 1, 27, S); // the flying buttresses' piers and pinnacles
              box(p, 28, 1, 1, Sl);
              box(p, 29, 1, 1, Sl);
            }
            for (let i = 0; i < 3; i++)
              for (const p of [0, 4, 8, 12]) if (p < 12) box(p + 1 + i, 21 - i, 1, 1, Sd); // the flyers
            for (const p of [1, 5, 9]) {
              box(p, 11, 3, 11, S); // the chapels
              box(p + 1, 8, 1, 4, 2);
              cone(p + 1, 11, 1, 2, sl);
            }
            box(-6, 18, 7, 18, S); // the transept front
            box(0, 17, 1, 17, Sd);
            orb(-3, 12, 2, Sl);
            orb(-3, 12, 1, 2);
            box(-4, 6, 3, 5, 2);
            cone(-3, 18, 3, 4, S);
            for (let j = 0; j < 4; j++) box(-6 + j, 19 + j + 1, 1, 1, sl);
            box(-12, 36, 6, 36, S); // the tower
            box(-7, 35, 1, 35, Sd);
            for (const p of [-12, -7]) box(p, 34, 1, 32, p < -10 ? Sl : Sd);
            for (const r of [33, 24]) {
              box(-11, r, 1, 7, 2);
              box(-9, r, 1, 7, 2);
            }
            box(-13, 36, 8, 1, Sl);
            for (const p of [-13, -6]) {
              box(p, 39, 1, 3, S); // corner turrets
              box(p, 40, 1, 1, Sl);
            }
            break;
          }
          case "leMansWall": {
            // The Gallo-Roman wall of Le Mans along the Sarthe: courses of pale and grey stone and red brick
            // laid in diamond and herringbone patterns, round towers (one of them later given a pointed tiled roof),
            // and the old town's houses showing over the top.
            const st = [204, 146, 116],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              br = css(e.sh([164, 82, 64])),
              gr = css(e.sh([226, 212, 186])),
              sl = css(e.sh([84, 92, 108])),
              ho = css(e.sh([224, 214, 190])),
              ti = css(e.sh([170, 96, 76]));
            for (const [p, w, h] of [
              [-12, 5, 16],
              [-4, 4, 15],
              [3, 5, 17],
              [9, 4, 15],
            ]) {
              box(p, h, w, h - 10, ho); // the houses behind
              box(p, h + 2, w, 2, p % 2 ? ti : sl);
              box(p + 1, h - 2, 1, 1, 2);
            }
            box(-13, 11, 27, 11, S); // the wall and its patterns
            for (const r of [3, 7, 10]) box(-13, r, 27, 1, br);
            for (let p = -13; p <= 13; p++) {
              box(p, 5 + (Math.abs(p) % 2), 1, 1, gr); // herringbone
              if (p % 4 === 0) (box(p, 9, 1, 1, gr), box(p - 1, 8, 1, 1, gr), box(p + 1, 8, 1, 1, gr));
            }
            for (const [cx, top] of [
              [-9, "cone"],
              [7, "flat"],
            ]) {
              box(cx - 2, 14, 5, 14, S); // the round towers
              box(cx + 2, 14, 1, 14, Sd);
              box(cx - 2, 14, 1, 14, css(e.sh(mixc(st, [255, 248, 225], 0.3))));
              for (const r of [4, 8, 12]) box(cx - 2, r, 5, 1, br);
              box(cx, 11, 1, 2, 2);
              if (top === "cone") cone(cx, 14, 3, 5, ti);
              else for (let p = cx - 2; p <= cx + 2; p += 2) box(p, 15, 1, 1, S);
            }
            break;
          }
          case "ndFrancePuy": {
            // Notre-Dame de France (Le Puy-en-Velay, 1860): the giant statue of the Virgin cast from the iron
            // of Sevastopol's cannons and painted red, crowned with stars and holding the Child on her left
            // arm, on a small pedestal atop the dark volcanic Rocher Corneille.
            const rk = [96, 84, 80],
              R = css(e.sh(rk)),
              Rd = css(e.sh(mixc(rk, [41, 40, 54], 0.35))),
              Rl = css(e.sh(mixc(rk, [255, 248, 225], 0.2))),
              red = [192, 80, 72],
              M = css(e.sh(red)),
              Md = css(e.sh(mixc(red, [41, 40, 54], 0.35))),
              Ml = css(e.sh(mixc(red, [255, 248, 225], 0.3))),
              pd = css(e.sh([150, 140, 128]));
            for (const [l, w, top] of [
              [-5, 11, 4],
              [-4, 9, 8],
              [-3, 7, 11],
              [-2, 5, 13],
            ])
              box(l, top, w, 4, R); // the rock
            box(1, 12, 2, 9, Rd);
            box(-4, 7, 1, 3, Rl);
            box(-2, 12, 1, 2, Rl);
            box(-1, 15, 3, 2, pd); // the pedestal
            box(-2, 25, 5, 10, M); // the robe, wider at the hem
            box(-3, 18, 7, 3, M);
            box(2, 24, 1, 9, Md);
            box(3, 18, 1, 3, Md);
            box(-2, 25, 1, 9, Ml);
            box(-3, 24, 1, 4, M); // the Child on her left arm
            box(-4, 23, 1, 2, Ml);
            box(-1, 28, 3, 3, M); // the head and veil
            box(1, 28, 1, 3, Md);
            box(0, 27, 1, 1, Ml);
            box(-2, 25, 5, 1, Ml); // the shoulders
            for (const p of [-1, 1]) box(p, 30, 1, 1, 12); // the crown of stars
            box(0, 31, 1, 2, 12);
            break;
          }
          case "lilleBelfry": {
            // The belfry of Lille's town hall (1932, 104 m): an Art Deco tower of red brick between grey
            // concrete-and-stone corner piers, the clock low on the shaft, a column of little windows, an open
            // stage near the top, then stepped storeys narrowing to a lantern and a crown.
            const st = [170, 168, 160],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              br = [178, 92, 66],
              B = css(e.sh(br)),
              Bd = css(e.sh(mixc(br, [41, 40, 54], 0.3)));
            box(-5, 13, 11, 13, B); // the base of the town hall wing
            for (const p of [-5, 5]) box(p, 15, 1, 15, S);
            box(-5, 13, 11, 1, S);
            for (const p of [-3, 2]) {
              box(p, 10, 1, 2, 2);
              box(p, 6, 1, 2, 2);
            }
            box(-1, 4, 3, 3, 2);
            box(-3, 38, 7, 25, B); // the shaft
            box(-3, 38, 1, 25, Sl);
            box(3, 38, 1, 25, Sd);
            box(-2, 38, 1, 25, Bd);
            for (let r = 21; r < 37; r += 3) box(0, r, 1, 1, Sl);
            orb(0, 17, 1.5, Sl); // the clock
            box(0, 17, 1, 1, 2);
            box(-4, 39, 9, 1, Sl); // the open stage
            box(-3, 44, 7, 5, S);
            box(3, 44, 1, 5, Sd);
            for (const p of [-2, 0, 2]) box(p, 43, 1, 3, 2);
            box(-4, 45, 9, 1, Sl);
            box(-2, 49, 5, 4, S); // the stepped storeys
            box(2, 49, 1, 4, Sd);
            box(-1, 48, 1, 2, 2);
            box(1, 48, 1, 2, 2);
            box(-1, 52, 3, 3, B);
            box(-1, 52, 1, 3, Sl);
            box(0, 54, 1, 2, S); // the lantern
            box(0, 56, 1, 2, 3);
            break;
          }
          case "limogesStation": {
            // Limoges-Bénédictins station (1929): the pale stone clock tower with its big clock under a green
            // copper dome and lantern, the great flattened copper dome over the hall with its glazed ribs,
            // little domed corner pavilions, and the long arcaded front.
            const st = [234, 228, 212],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.5))),
              cu = [104, 176, 150],
              C = css(e.sh(cu)),
              Cd = css(e.sh(mixc(cu, [41, 40, 54], 0.3))),
              Cl = css(e.sh(mixc(cu, [255, 248, 225], 0.3)));
            dome(4, 13, 10, C); // the great dome and its ribs
            for (const p of [-2, 4, 10]) box(p, 13 + (p === 4 ? 9 : 7), 1, p === 4 ? 9 : 7, Cd);
            box(3, 24, 3, 2, C);
            box(4, 25, 1, 1, Cl);
            box(-6, 14, 20, 5, S); // its drum with windows
            for (let p = -5; p <= 13; p += 3) box(p, 13, 2, 3, 2);
            box(-16, 9, 33, 9, S); // the front
            box(-16, 9, 33, 1, Sl);
            box(-16, 1, 33, 1, Sd);
            for (let p = -15; p <= 15; p += 2) box(p, 6, 1, 4, 2);
            for (const p of [-2, 11]) {
              box(p - 2, 15, 5, 6, S); // the corner pavilions
              box(p + 2, 15, 1, 6, Sd);
              dome(p, 15, 2, Sd);
              box(p, 18, 1, 1, Sl);
            }
            box(-12, 31, 5, 31, S); // the clock tower
            box(-12, 31, 1, 31, Sl);
            box(-8, 31, 1, 31, Sd);
            for (let r = 14; r < 26; r += 3) box(-10, r, 1, 2, 2);
            box(-13, 27, 7, 1, Sl);
            orb(-10, 29, 2, Sl); // the clock
            orb(-10, 29, 1.2, 6);
            box(-10, 29, 1, 1, 2);
            box(-13, 31, 7, 1, Sl);
            dome(-10, 32, 3, C); // the copper dome and its lantern
            box(-9, 34, 1, 2, Cl);
            box(-11, 37, 3, 2, C);
            box(-10, 36, 1, 1, Cd);
            box(-10, 39, 1, 2, Cl);
            break;
          }
          case "cordeliersLons": {
            // Église des Cordeliers (Lons-le-Saunier): a classical front of weathered golden limestone in two
            // orders, paired pilasters on tall bases, the arched door under a carved tympanum, a big round-
            // arched window above, a heavy entablature, a pediment, and lower side wings swept up in curved
            // slopes with arched windows of their own.
            const st = [208, 188, 144],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              wood = css(e.sh([128, 82, 52]));
            for (const s of [-1, 1]) {
              const l = s < 0 ? -9 : 6;
              box(l, 15, 4, 15, S); // the side wings
              box(l + 1, 12, 2, 5, 2);
              for (let j = 0; j < 4; j++) box(s < 0 ? l + j : l + 3 - j, 16 + j, 1, 1, Sd); // the swept slopes
              box(s < 0 ? -9 : 6, 6, 2, 4, wood);
            }
            box(-5, 26, 11, 26, S); // the centre
            box(5, 25, 1, 25, Sd);
            for (const p of [-5, -3, 3, 5]) {
              box(p, 13, 1, 11, Sl); // pilasters, lower and upper order
              box(p, 25, 1, 10, Sl);
              box(p, 3, 1, 1, Sd);
            }
            box(-1, 10, 3, 9, wood); // the door and tympanum
            box(-1, 11, 3, 2, Sl);
            box(0, 12, 1, 1, Sl);
            box(-6, 15, 13, 2, Sl); // the entablature
            box(-6, 14, 13, 1, Sd);
            box(-1, 23, 3, 6, 2); // the arched window
            box(0, 24, 1, 1, 2);
            box(-1, 17, 3, 1, Sl);
            box(-6, 27, 13, 1, Sl);
            for (let j = 0; j < 4; j++) box(-6 + 2 * j, 28 + j, 13 - 4 * j, 1, j ? S : Sl); // the pediment
            box(0, 34, 1, 2, Sd);
            break;
          }
          case "fourviere": {
            // Basilica of Notre-Dame de Fourvière (Lyon), as seen from the city below: the white apse, round,
            // with tall arched windows under a balustrade and the bronze Saint Michael on top, between two of
            // the four octagonal towers with their crenellated tops and spirelets; on the left the old
            // chapel's bell tower with the gilded Virgin on its dome.
            const st = [238, 234, 224],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.5))),
              gold = css(e.sh([226, 180, 70])),
              cu = css(e.sh([110, 160, 140]));
            box(-12, 8, 25, 8, S); // the terrace buildings
            box(-12, 8, 25, 1, Sl);
            for (let p = -11; p <= 11; p += 3) box(p, 5, 1, 2, 2);
            box(-12, 21, 3, 13, S); // the chapel bell tower
            box(-10, 21, 1, 13, Sd);
            box(-11, 18, 1, 2, 2);
            dome(-10.5, 21, 2, S);
            box(-11, 25, 1, 3, gold);
            box(-1, 21, 9, 13, S); // the apse
            box(-1, 21, 2, 13, Sl);
            box(6, 21, 2, 13, Sd);
            for (const p of [1, 3, 5]) box(p, 19, 1, 6, 2);
            box(-1, 22, 9, 1, Sl); // the balustrade
            for (let p = -1; p <= 7; p += 2) box(p, 23, 1, 1, Sl);
            dome(3, 23, 3, Sd);
            box(3, 27, 1, 3, cu); // Saint Michael
            box(2, 28, 3, 1, cu);
            for (const [l, h] of [
              [-6, 28],
              [8, 26],
            ]) {
              box(l, h, 5, h - 8, S); // the octagonal towers
              box(l, h, 1, h - 8, Sl);
              box(l + 4, h, 1, h - 8, Sd);
              box(l + 2, h - 2, 1, 4, 2);
              box(l + 2, h - 9, 1, 3, 2);
              box(l - 1, h - 6, 7, 1, Sl);
              box(l - 1, h + 1, 7, 1, Sl);
              for (let p = l - 1; p <= l + 5; p += 2) box(p, h + 2, 1, 1, S);
              cone(l + 2, h + 1, 1, 4, S); // the spirelet
              box(l + 2, h + 7, 1, 2, Sd);
            }
            break;
          }
          case "partDieu": {
            // Tour Part-Dieu, "the pencil" (Lyon, 1977): a round tower of brick-red concrete, its facade a
            // close grid of deep-set windows, a lit band at the top, and the slate-grey pyramid roof.
            const cc = [150, 82, 66],
              C = css(e.sh(cc)),
              Cd = css(e.sh(mixc(cc, [41, 40, 54], 0.35))),
              Cl = css(e.sh(mixc(cc, [255, 248, 225], 0.2))),
              sl = css(e.sh([96, 100, 110]));
            box(-4, 34, 9, 34, C);
            box(-4, 34, 2, 34, Cl);
            box(3, 34, 2, 34, Cd);
            for (let r = 3; r < 33; r += 2) box(-4, r, 9, 1, Cd); // the window grid
            for (const p of [-1, 1]) box(p, 33, 1, 31, Cd);
            box(-4, 35, 9, 1, css(e.sh([226, 200, 120]))); // the lit band
            cone(0, 35, 4, 7, sl); // the pyramid
            cone(-1, 35, 2, 5, css(e.sh([128, 132, 142])));
            break;
          }
          case "laMajor": {
            // Marseille Cathedral (La Major, 1852-1893): a neo-Byzantine front striped in white Cassis stone and
            // green Florence stone, the great arched porch between two side doors, a gallery of statues, two
            // towers with twin-arched belfries under ribbed domes with lanterns, corner pinnacles and crosses,
            // and the big striped dome rising behind.
            const wh = [236, 230, 214],
              W = css(e.sh(wh)),
              G = css(e.sh([126, 138, 118])),
              Wd = css(e.sh(mixc(wh, [41, 40, 54], 0.25))),
              Wl = css(e.sh(mixc(wh, [255, 248, 225], 0.5)));
            box(-4, 29, 9, 5, W); // the main dome behind, on its drum, and its lantern
            box(-4, 27, 9, 1, G);
            for (const p of [-3, -1, 1, 3]) box(p, 28, 1, 2, 2);
            dome(0, 29, 5, W);
            box(-4, 31, 9, 1, G);
            box(-1, 36, 3, 3, W);
            box(0, 38, 1, 2, 3);
            const striped = (l, top, w, h) => {
              box(l, top, w, h, W);
              for (let r = top - h + 2; r <= top; r += 3) box(l, r, w, 1, G);
            };
            striped(-4, 24, 9, 24); // the centre
            box(4, 23, 1, 23, Wd);
            box(-3, 17, 7, 15, Wl); // the great porch
            box(-2, 16, 5, 14, Wd);
            box(-1, 15, 3, 13, 2);
            box(-2, 18, 5, 1, G);
            box(-4, 21, 9, 1, Wl); // the gallery of statues
            for (let p = -3; p <= 3; p += 2) box(p, 23, 1, 2, Wd);
            box(-4, 24, 9, 1, Wl);
            for (const s of [-1, 1]) {
              const l = s < 0 ? -11 : 5,
                cx = l + 3;
              striped(l, 30, 7, 30); // the towers
              box(l + 6, 29, 1, 29, Wd);
              box(cx - 1, 8, 3, 6, 2); // the side doors
              box(cx, 15, 1, 3, 2);
              box(cx - 2, 27, 2, 6, 2); // twin belfry arches
              box(cx + 1, 27, 2, 6, 2);
              box(l - 1, 30, 9, 1, Wl);
              box(l + 1, 32, 5, 2, W); // the drum and ribbed dome
              dome(cx, 32, 3, W);
              box(cx, 35, 1, 3, G);
              box(cx - 2, 33, 1, 1, G);
              box(cx + 2, 33, 1, 1, G);
              box(cx, 38, 1, 3, 3); // lantern and cross
              box(cx - 1, 39, 3, 1, 3);
              for (const p of [l, l + 6]) {
                box(p, 33, 1, 3, W); // the corner pinnacles
                box(p, 34, 1, 1, Wl);
              }
            }
            break;
          }
          case "vauxLeVicomte": {
            // Vaux-le-Vicomte (Maincy, near Melun, 1658-1661): Fouquet's château of golden stone on its
            // terrace and steps, the projecting centre with its arcade and pediment under the great slate
            // oval dome and lantern, and the end pavilions with tall slate roofs, round dormers and chimneys.
            const st = [222, 196, 150],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.4))),
              sl = [88, 94, 110],
              L = css(e.sh(sl)),
              Ld = css(e.sh(mixc(sl, [41, 40, 54], 0.3))),
              Ll = css(e.sh(mixc(sl, [255, 248, 225], 0.25)));
            box(-17, 3, 35, 3, Sd); // the terrace and its steps
            box(-17, 3, 35, 1, Sl);
            for (let j = 0; j < 3; j++) box(-3 - j, 3 - j, 7 + 2 * j, 1, Sl);
            dome(0, 17, 7, L); // the great dome and its lantern
            box(-4, 20, 1, 3, Ll);
            for (const p of [-5, -2, 2, 5]) box(p, 19, 1, 1, Ll);
            box(-1, 27, 3, 4, L);
            box(0, 26, 1, 2, 2);
            dome(0, 27, 1.5, L);
            box(0, 31, 1, 2, 12);
            box(-17, 15, 35, 12, S); // the main front
            box(-17, 15, 35, 1, Sl);
            for (const r of [8, 13])
              for (let p = -16; p <= 16; p += 2) if (Math.abs(p) > 4) box(p, r, 1, 3, 2);
            box(-17, 9, 35, 1, Sl);
            box(-4, 15, 9, 12, Sl); // the projecting centre with its arcade
            for (const p of [-3, -1, 1, 3]) {
              box(p, 8, 1, 4, 2);
              box(p, 13, 1, 3, 2);
            }
            box(4, 15, 1, 12, Sd);
            for (let j = 0; j < 3; j++) box(-4 + 2 * j, 16 + j, 9 - 4 * j, 1, j ? S : Sl); // the pediment
            for (const s of [-1, 1]) {
              const l = s < 0 ? -17 : 10;
              box(l, 15, 8, 1, Sl); // the pavilion
              box(s < 0 ? l + 7 : l, 14, 1, 13, Sd);
              for (let j = 0; j < 7; j++) box(l + Math.floor(j / 2), 16 + j, 8 - 2 * Math.floor(j / 2), 1, L);
              box(l + 7, 21, 1, 5, Ld);
              for (const p of [l + 2, l + 5]) {
                orb(p, 18, 1, Ll); // the round dormers
                box(p, 18, 1, 1, 2);
              }
              box(l + 1, 25, 1, 3, S); // chimneys
              box(l + 6, 25, 1, 3, S);
              for (let j = 0; j < 3; j++) box(s < 0 ? -9 + j : 5, 16 + j, 5 - j, 1, L); // the lower roofs
            }
            break;
          }
          case "metzCathedral": {
            // Metz Cathedral (Saint-Étienne), from the south: the golden Jaumont-stone nave, one of the tallest
            // in France, all glass between its pinnacled buttresses, under a green copper roof; the Chapter
            // tower with its clock on the left, the Mutte tower with its openwork belfry and pinnacled spire
            // in the middle, and a portal under a little green spire at its foot.
            const st = [222, 184, 112],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              cu = [104, 156, 132],
              C = css(e.sh(cu)),
              Cl = css(e.sh(mixc(cu, [255, 248, 225], 0.25)));
            for (let j = 0; j < 5; j++) box(-12 + j, 31 + j, 25 - 2 * j, 1, j % 2 ? Cl : C); // the copper roof
            box(-12, 30, 25, 30, S); // the nave
            box(-12, 30, 25, 1, Sl);
            for (const p of [-9, -3, 9]) box(p - 1, 27, 3, 14, 2); // the great windows
            for (const p of [-9, -3, 9]) box(p, 27, 1, 14, Sd);
            for (const p of [-12, -6, 0, 6, 12]) {
              box(p, 32, 1, 26, Sl); // the buttresses and pinnacles
              box(p, 34, 1, 2, S);
            }
            box(-12, 11, 25, 1, Sl);
            box(-7, 9, 5, 9, Sl); // the portal under its green spire
            box(-6, 8, 3, 8, 2);
            cone(-4.5, 9, 3, 5, C);
            box(-11, 38, 5, 38, S); // the Chapter tower
            box(-7, 37, 1, 37, Sd);
            orb(-9, 28, 1.5, Sl);
            box(-9, 28, 1, 1, 2);
            box(-10, 36, 1, 4, 2);
            box(-12, 38, 7, 1, Sl);
            for (const p of [-12, -10, -8, -6]) box(p, 41, 1, 3, S);
            box(-9, 43, 1, 2, Sl);
            box(1, 40, 7, 40, S); // the Mutte tower
            box(7, 39, 1, 39, Sd);
            box(3, 37, 3, 8, 2);
            box(4, 37, 1, 8, Sd);
            box(0, 40, 9, 1, Sl);
            box(2, 47, 5, 7, S); // the openwork belfry
            box(3, 46, 1, 5, 2);
            box(5, 46, 1, 5, 2);
            for (const p of [1, 7]) {
              box(p, 46, 1, 6, S);
              box(p, 47, 1, 1, Sl);
            }
            cone(4, 47, 2, 10, S); // the spire
            box(5, 55, 1, 8, Sd);
            box(4, 59, 1, 2, 3);
            break;
          }
          case "porteAllemands": {
            // Porte des Allemands (Metz): the castle-bridge over the Seille, two round towers with slate cones
            // on the old gate, the arcaded bridge, and the big 15th-century round tower beyond with its
            // machicolations and merlons, beside a crenellated curtain.
            const st = [212, 190, 140],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              sl = css(e.sh([82, 88, 104])),
              wat = css(e.sh([86, 112, 120]));
            box(-12, 2, 25, 2, wat);
            for (const [l, w, h, ch] of [
              [-12, 3, 15, 4],
              [-9, 5, 19, 7],
              [-4, 4, 17, 5],
            ]) {
              const cx = l + Math.floor(w / 2);
              box(l, h, w, h - 2, S); // the old gate's towers
              box(l, h, 1, h - 2, Sl);
              box(l + w - 1, h, 1, h - 2, Sd);
              box(cx, h - 4, 1, 2, 2);
              cone(cx, h, Math.ceil(w / 2), ch, sl);
              box(cx, h + ch + 2, 1, 1, 3);
            }
            box(-1, 12, 5, 4, S); // the arcaded bridge over its arch
            for (const p of [-1, 1, 3]) box(p, 11, 1, 2, 2);
            box(-1, 12, 5, 1, Sl);
            box(-1, 7, 5, 5, S);
            box(0, 6, 3, 4, 2);
            box(9, 18, 4, 16, S); // the curtain
            box(12, 17, 1, 15, Sd);
            for (let p = 9; p <= 12; p += 2) box(p, 19, 1, 1, S);
            box(10, 13, 1, 2, 2);
            box(3, 20, 7, 18, S); // the great round tower
            box(3, 20, 2, 18, Sl);
            box(8, 20, 2, 18, Sd);
            box(3, 13, 7, 1, Sl);
            box(6, 17, 1, 2, 2);
            box(5, 10, 1, 1, 2);
            box(2, 22, 9, 2, S); // machicolations and merlons
            for (let p = 2; p <= 10; p += 2) box(p, 20, 1, 1, Sd);
            for (let p = 2; p <= 10; p += 2) box(p, 23, 1, 1, S);
            box(2, 22, 9, 1, Sl);
            break;
          }
          case "lacataye": {
            // Donjon Lacataye (Mont-de-Marsan, 15th century): a broad square keep of golden shelly limestone
            // with a crown of merlons, scattered small windows and one twin Gothic window, on a terrace wall
            // climbed by an outside stair, with a little tiled house at its foot.
            const st = [204, 172, 116],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              ti = css(e.sh([176, 92, 66])),
              ho = css(e.sh([230, 200, 160]));
            box(-7, 6, 15, 6, Sd); // the terrace wall
            box(-7, 6, 15, 1, S);
            for (let j = 0; j < 5; j++) box(-5 + j, 2 + j, 2, 1, Sl); // the outside stair
            box(-6, 22, 13, 16, S); // the keep
            box(4, 22, 3, 16, Sd);
            for (const [p, r] of [
              [-3, 19],
              [-3, 15],
              [1, 15],
              [3, 15],
              [-3, 10],
              [1, 10],
              [3, 10],
            ])
              box(p, r, 1, 2, 2);
            box(1, 20, 1, 3, 2); // the twin Gothic window
            box(3, 20, 1, 3, 2);
            box(1, 21, 3, 1, Sl);
            box(-6, 23, 13, 1, Sl); // the merlons
            for (let p = -6; p <= 6; p += 2) box(p, 24, 1, 1, S);
            box(3, 5, 5, 4, ho); // the little house
            box(5, 4, 1, 3, ti);
            for (let j = 0; j < 2; j++) box(2 + j, 6 + j, 7 - 2 * j, 1, ti);
            break;
          }
          case "frOldBridge": {
            // An old French masonry bridge over a river (b11: Montauban's brick Pont Vieux, Mâcon's Pont
            // Saint-Laurent): o.n arches o.w cells wide on piers with pointed cutwaters, o.h the height to
            // the deck, o.pointed for pointed Gothic arches, o.oculi for the round openings that pierce
            // the piers above the cutwaters, o.st the colour ([r, g, b]), and the water under the arches.
            const n = o.n ?? 7,
              w = o.w ?? 5,
              h = o.h ?? 10,
              st = o.st ?? [200, 186, 160],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              wat = css(e.sh([86, 120, 136])),
              watL = css(e.sh([136, 170, 186])),
              pw = 2,
              span = n * w + (n + 1) * pw,
              x0 = -Math.floor(span / 2),
              ah = h - 3; // the arches' height
            box(x0 - 1, 1, span + 2, 1, wat);
            for (let p = x0; p < x0 + span; p += 4) box(p, 1, 2, 1, watL);
            box(x0, h, span, 3, S); // the deck and its parapet
            box(x0, h, span, 1, Sl);
            box(x0, h - 1, span, 1, Sd);
            for (let i = 0; i <= n; i++) {
              const px = x0 + i * (w + pw);
              box(px, h - 2, pw, h - 3, S); // the piers
              box(px + pw - 1, h - 3, 1, h - 4, Sd);
              if (i > 0 && i < n) {
                box(px - 1, 3, pw + 2, 2, S); // the cutwater
                box(px, 4, pw, 1, S);
                box(px + pw, 3, 1, 2, Sd);
                if (o.oculi) {
                  box(px - 1, ah - 1, pw + 2, 3, S);
                  orb(px + 0.5, ah - 2, 0.8, 2);
                }
              }
              if (i < n) {
                const l = px + pw,
                  r = l + w - 1;
                box(l, ah, 1, 1, S); // close the top of the arch
                box(r, ah, 1, 1, S);
                if (o.pointed) {
                  box(l + 1, ah, 1, 1, S);
                  box(r - 1, ah, 1, 1, S);
                  box(l, ah - 1, 1, 1, S);
                  box(r, ah - 1, 1, 1, S);
                }
                box(l, ah + 1, w, 1, S);
                box(l, ah, 1, 1, Sl);
              }
            }
            break;
          }
          case "stJacquesMontauban": {
            // Église Saint-Jacques (Montauban): the brick bell tower in the Toulouse style, a square base
            // between buttresses, then octagonal storeys each pierced with paired mitre-headed openings (the
            // pointed "bishop's mitre" arches of the Midi), little balustrades, and a short spire with a gilt ball.
            const br = [196, 110, 80],
              B = css(e.sh(br)),
              Bd = css(e.sh(mixc(br, [41, 40, 54], 0.3))),
              Bl = css(e.sh(mixc(br, [255, 248, 225], 0.3))),
              sp = css(e.sh([156, 90, 70]));
            box(-4, 16, 9, 16, B); // the square base
            box(3, 15, 2, 15, Bd);
            for (const p of [-4, 4]) box(p, 14, 1, 13, p < 0 ? Bl : Bd);
            box(-1, 5, 3, 4, 2); // the portal and the rose
            orb(-1, 10, 1.5, Bd);
            box(-1, 10, 1, 1, Bl);
            box(-4, 17, 9, 1, Bl);
            for (let p = -4; p <= 4; p += 2) box(p, 16, 1, 1, Bd); // machicolations
            let b = 17;
            for (const [w, h] of [
              [7, 7],
              [7, 7],
              [5, 6],
              [5, 6],
            ]) {
              const hw = Math.floor(w / 2);
              box(-hw, b + h, w, h, B); // an octagonal storey
              box(-hw, b + h, 1, h, Bl);
              box(hw, b + h, 1, h, Bd);
              for (const p of w > 5 ? [-2, 1] : [-1, 1]) {
                box(p, b + h - 2, w > 5 ? 2 : 1, h - 3, 2); // mitre-headed openings
                if (w > 5) box(p + (p < 0 ? 1 : 0), b + h - 1, 1, 1, 2);
              }
              box(-hw - 1, b + h + 1, w + 2, 1, Bl);
              b += h + 1;
            }
            cone(0, b, 2, 7, sp);
            orb(0, b + 9, 1, 12); // the gilt ball and cross
            box(0, b + 11, 1, 2, 3);
            break;
          }
          case "peyrouArch": {
            // Porte du Peyrou, Montpellier's triumphal arch (1691): a single tall arch in pale stone, its piers
            // banded with rustication and carrying round relief medallions, a Doric frieze of triglyphs,
            // and a plain attic with the inscription panel.
            const st = [226, 214, 186],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.45)));
            box(-9, 18, 19, 18, S);
            box(9, 17, 1, 17, Sd);
            for (let r = 3; r < 12; r += 2) {
              box(-9, r, 5, 1, Sd); // the rusticated piers
              box(5, r, 5, 1, Sd);
            }
            box(-3, 13, 7, 13, 2); // the tall opening
            box(-2, 14, 5, 1, 2);
            box(-1, 15, 3, 1, 2);
            box(-4, 14, 1, 2, Sl); // the archivolt and keystone
            box(4, 14, 1, 2, Sl);
            box(-3, 15, 1, 1, Sl);
            box(3, 15, 1, 1, Sl);
            box(-2, 16, 5, 1, Sl);
            box(0, 17, 1, 2, Sl);
            for (const p of [-7, 7]) {
              orb(p, 14, 1.5, Sl); // the medallions
              box(p, 14, 1, 1, Sd);
            }
            box(-10, 19, 21, 1, Sl); // the frieze with triglyphs
            for (let p = -8; p <= 8; p += 2) box(p, 18, 1, 1, Sd);
            box(-10, 20, 21, 1, Sl);
            box(-8, 24, 17, 4, S); // the attic
            box(8, 24, 1, 4, Sd);
            box(-5, 23, 11, 2, Sd);
            box(-8, 25, 17, 1, Sl);
            break;
          }
          case "melunNotreDame": {
            // Collégiale Notre-Dame (Melun): the pale gabled west front with its big rose, a carved portal and
            // an oculus in the gable, a lower aisle front with its own arched window on the left, and the two
            // slender Romanesque towers behind on the right, with twin arched belfry bays and steep slate spires.
            const st = [214, 204, 180],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.35))),
              sl = css(e.sh([78, 84, 100]));
            for (const [l, h, sp] of [
              [1, 25, 8],
              [6, 28, 9],
            ]) {
              box(l, h, 5, h - 10, S); // the towers
              box(l + 4, h, 1, h - 10, Sd);
              box(l + 1, h - 2, 1, 3, 2);
              box(l + 3, h - 2, 1, 3, 2);
              box(l + 1, h - 7, 1, 3, 2);
              box(l + 3, h - 7, 1, 3, 2);
              box(l, h - 5, 5, 1, Sl);
              box(l - 1, h + 1, 7, 1, sl);
              cone(l + 2, h + 1, 2, sp, sl);
              box(l + 2, h + sp + 3, 1, 2, 3);
            }
            box(-10, 13, 4, 13, S); // the aisle front
            box(-9, 9, 2, 4, 2);
            for (let j = 0; j < 3; j++) box(-10 + j, 14 + j, 4 - j, 1, S);
            box(-6, 17, 11, 17, S); // the main front
            box(4, 16, 1, 16, Sd);
            for (const p of [-6, 4]) box(p, 17, 1, 17, p < 0 ? Sl : Sd); // buttresses
            orb(-1, 11, 3, Sl); // the rose
            orb(-1, 11, 2, 2);
            for (const [dx, dy] of [
              [0, 0],
              [-1, 1],
              [1, 1],
              [-1, -1],
              [1, -1],
            ])
              box(-1 + dx, 11 + dy, 1, 1, Sl);
            box(-3, 6, 5, 6, Sl); // the portal
            box(-2, 5, 3, 5, 2);
            box(-6, 18, 11, 1, Sl);
            cone(-1, 18, 5, 7, S); // the gable and its oculus
            box(-1, 21, 1, 1, 2);
            box(-1, 27, 1, 2, 3);
            break;
          }
          case "vieuxStVincent": {
            // Vieux Saint-Vincent (Mâcon): what is left of the old cathedral, the weathered Romanesque narthex
            // with its great round arch (glazed today) and two unequal octagonal towers, the left one ending in
            // a plain corniced storey of arched bays, the right one taller, with a pinnacled lantern on top.
            const st = [196, 184, 160],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              gl = css(e.sh([120, 150, 186]));
            box(-10, 18, 21, 18, S); // the narthex
            box(-10, 18, 21, 1, Sl);
            box(-3, 11, 7, 10, Sl); // the great arch
            box(-2, 10, 5, 9, gl);
            box(-1, 11, 3, 1, gl);
            box(-2, 4, 5, 1, Sd);
            box(-1, 15, 1, 2, 2);
            box(7, 6, 1, 2, 2);
            box(-8, 8, 1, 2, 2);
            box(-1, 21, 3, 3, S); // the link between the towers
            box(0, 20, 1, 1, 2);
            for (const [l, h, lan] of [
              [-9, 31, 0],
              [3, 34, 1],
            ]) {
              box(l, h, 7, h - 17, S); // the octagonal towers
              box(l, h, 1, h - 17, Sl);
              box(l + 6, h, 1, h - 17, Sd);
              for (const r of [24, h - 7]) box(l, r, 7, 1, Sl);
              box(l + 3, 27, 1, 2, 2);
              for (const p of [l + 1, l + 3, l + 5]) box(p, h - 2, 1, 3, 2); // the arched bays
              box(l - 1, h + 1, 9, 1, Sl);
              if (lan) {
                box(l + 1, h + 6, 5, 5, S); // the lantern and its pinnacles
                box(l + 3, h + 5, 1, 3, 2);
                box(l + 5, h + 6, 1, 5, Sd);
                for (const p of [l, l + 6]) box(p, h + 5, 1, 4, S);
                box(l + 2, h + 7, 3, 1, Sl);
                box(l + 3, h + 9, 1, 2, Sd);
              }
            }
            break;
          }
          case "evreuxBelfry": {
            // Belfry of Évreux (Tour de l'Horloge, 1490s): a slender square Flamboyant tower of pale stone with
            // a clock, string courses and buttressed corners, a balustraded gallery, and a lead-covered
            // openwork lantern and spire with pinnacles at its foot.
            const st = [218, 208, 186],
              S = css(e.sh(st)),
              Sd = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              Sl = css(e.sh(mixc(st, [255, 248, 225], 0.4))),
              pb = [126, 134, 146],
              P = css(e.sh(pb)),
              Pd = css(e.sh(mixc(pb, [41, 40, 54], 0.3)));
            box(-3, 25, 7, 25, S);
            box(-3, 23, 1, 23, Sl);
            box(3, 23, 1, 23, Sd);
            for (const r of [8, 14]) box(-3, r, 7, 1, Sl);
            box(0, 5, 1, 3, 2);
            box(0, 12, 1, 2, 2);
            orb(0, 19, 2, Sl); // the clock
            orb(0, 19, 1.2, 6);
            box(0, 19, 1, 1, 2);
            box(-1, 24, 1, 2, 2);
            box(1, 24, 1, 2, 2);
            box(-4, 26, 9, 1, Sl); // the gallery
            for (let p = -3; p <= 3; p += 2) box(p, 27, 1, 1, Sl);
            box(-2, 32, 5, 5, P); // the lead lantern
            box(-1, 31, 1, 3, 2);
            box(1, 31, 1, 3, 2);
            box(2, 32, 1, 5, Pd);
            for (const p of [-3, 3]) {
              box(p, 31, 1, 4, P); // pinnacles
              box(p, 32, 1, 1, Sl);
            }
            cone(0, 32, 2, 10, Pd); // the spire
            cone(-0.4, 32, 1.6, 9, P);
            box(0, 44, 1, 2, 3);
            break;
          }
