          case "potala": {
            // Potala Palace, Lhasa: on the rocky Marpo Ri, the White Palace's battered walls climb in steps with
            // rows of small dark windows and white zigzag stairs; the dark-red Red Palace rises in the middle under
            // its brown penbe frieze, crowned by little gilded roofs.
            const white = css(e.sh([238, 232, 216])),
              whiteSh = css(e.sh([198, 190, 174])),
              red = css(e.sh([150, 50, 42])),
              redSh = css(e.sh([112, 36, 34])),
              frieze = css(e.sh([98, 46, 38])),
              rock = css(e.sh([132, 118, 96])),
              rockSh = css(e.sh([104, 94, 80])),
              gold = css(e.sh([226, 178, 64])),
              win = 2;
            for (let i = 1; i <= 7; i++) {
              const k = 16 - Math.round(i * 0.4);
              box(-k, i, 2 * k + 1, 1, rock);
              box(Math.round(k * 0.5), i, k - Math.round(k * 0.5) + 1, 1, rockSh);
            }
            for (let j = 0; j < 5; j++) {
              // the zigzag stairs up the hill face
              box(-14 + j, 2 + j, 2, 1, white);
              box(9 + j, 2 + j, 2, 1, white);
            }
            // the White Palace, in two battered steps
            box(-15, 14, 31, 7, white);
            box(12, 14, 4, 7, whiteSh);
            box(-12, 20, 25, 6, white);
            box(10, 20, 3, 6, whiteSh);
            box(-15, 14, 31, 1, frieze);
            box(-12, 20, 25, 1, frieze);
            for (let p = -14; p <= 14; p += 2) {
              box(p, 10, 1, 2, win);
              if (Math.abs(p) > 7) box(p, 13, 1, 1, win);
            }
            for (let p = -11; p <= 11; p += 2)
              if (Math.abs(p) > 7) for (const r of [16, 19]) box(p, r, 1, 1, win);
            // the Red Palace, with its hanging white stripe of windows down the middle
            box(-7, 26, 15, 14, red);
            box(5, 26, 3, 14, redSh);
            box(-7, 26, 15, 2, frieze);
            for (let p = -5; p <= 5; p += 2) for (const r of [15, 18, 21]) box(p, r, 1, 2, win);
            for (let p = -5; p <= 5; p += 3) box(p, 25, 1, 1, gold); // the gilt mirrors on the frieze
            box(-1, 23, 3, 11, white);
            for (const r of [15, 18, 21]) box(0, r, 1, 2, win);
            // the gilded roofs over the chapels
            for (const p of [-5, 0, 5]) {
              const k = p === 0 ? 2 : 1;
              box(p - k, 28, 2 * k + 1, 2, gold);
              box(p - k - 1, 27, 1, 1, gold);
              box(p + k + 1, 27, 1, 1, gold);
              box(p, 29, 1, 1, 3);
            }
            break;
          }
          case "jokhang": {
            // Jokhang Temple, Lhasa, from Barkhor Square: whitewashed two-storey wings with black-framed windows
            // under a dark-red frieze, a recessed dark portico in the middle with its red upper storey, the golden
            // Dharma wheel between two deer on top and gilded roofs and banners (gyaltsen) behind.
            const white = css(e.sh([236, 232, 222])),
              whiteSh = css(e.sh([200, 194, 182])),
              red = css(e.sh([154, 44, 40])),
              frieze = css(e.sh([108, 40, 36])),
              gold = css(e.sh([226, 178, 64])),
              portico = css(e.sh([64, 52, 58]));
            // gilded roofs behind
            for (const p of [-6, 6]) {
              box(p - 2, 15, 5, 2, gold);
              box(p - 3, 14, 1, 1, gold);
              box(p + 3, 14, 1, 1, gold);
              box(p, 16, 1, 1, 3);
            }
            box(-12, 11, 25, 11, white);
            box(9, 11, 4, 11, whiteSh);
            box(-12, 11, 25, 1, frieze);
            box(-12, 12, 25, 1, red);
            for (const s of [-1, 1])
              for (const d of [8, 11]) {
                const p = s * d;
                for (const r of [4, 8]) {
                  box(p - 1, r + 1, 3, 3, 2); // the black trapezoid frame
                  box(p, r, 1, 1, white);
                }
              }
            box(-5, 13, 11, 13, red);
            box(-5, 7, 11, 7, portico);
            for (let p = -4; p <= 4; p += 2) box(p, 6, 1, 5, red); // the portico's columns
            box(-5, 13, 11, 2, frieze);
            for (const p of [-3, 3]) {
              orb(p, 9, 1, gold); // the gilt roundels
            }
            box(-6, 14, 13, 1, red);
            // the Dharma wheel and the deer
            orb(0, 17, 2, gold);
            orb(0, 17, 0.6, frieze);
            for (const s of [-1, 1]) {
              box(s * 3 - (s < 0 ? 1 : 0), 16, 2, 2, gold);
              box(s * 4, 17, 1, 1, gold);
            }
            for (const p of [-12, 12]) {
              box(p, 15, 1, 4, gold); // gyaltsen victory banners on the corners
              box(p - 1, 14, 3, 1, frieze);
            }
            break;
          }
          case "sunYatsenMausoleum": {
            // Sun Yat-sen Mausoleum, Nanjing: the sacrificial hall in white granite at the top of the great stair,
            // square corner bastions, three arched doors, and two hip-and-gable roofs of deep blue glazed tile.
            const stone = css(e.sh([232, 230, 220])),
              stoneSh = css(e.sh([190, 188, 178])),
              step = css(e.sh([196, 194, 184])),
              blue = css(e.sh([44, 74, 140])),
              blueDk = css(e.sh([30, 50, 98])),
              lit = css(e.sh([248, 246, 238]));
            for (let i = 1; i <= 4; i++) {
              const k = 14 - i;
              box(-k, i, 2 * k + 1, 1, i % 2 ? step : stoneSh); // the stair
            }
            box(-10, 14, 21, 10, stone);
            for (const s of [-1, 1]) {
              box(s * 9 - 2, 16, 5, 12, stone); // the bastions
              box(s * 9 - 2, 16, 5, 1, lit);
              box(s * 9 - 2, 15, 5, 1, stoneSh);
            }
            box(9, 16, 3, 12, stoneSh);
            for (const p of [-4, 0, 4]) {
              box(p - 1, 8, 3, 4, 2);
              box(p, 9, 1, 1, 2);
            }
            box(-6, 11, 13, 1, stoneSh);
            // the lower blue eave across the front
            box(-7, 13, 15, 1, blueDk);
            box(-8, 14, 17, 1, blue);
            box(-9, 15, 1, 1, blue);
            box(9, 15, 1, 1, blue);
            // the upper hall and its roof
            box(-6, 18, 13, 3, stone);
            for (let p = -5; p <= 5; p += 2) box(p, 17, 1, 1, blueDk);
            box(-6, 16, 13, 1, stoneSh);
            box(-9, 19, 19, 1, blueDk);
            box(-10, 20, 21, 1, blue);
            box(-11, 21, 1, 1, blue);
            box(11, 21, 1, 1, blue);
            box(-8, 22, 17, 2, blue);
            box(-6, 23, 13, 1, blueDk);
            box(-6, 24, 13, 1, blue);
            for (const s of [-1, 1]) box(s * 6, 25, 1, 1, blue); // the ridge ends
            break;
          }
          case "zifeng": {
            // Zifeng Tower, Nanjing: a slender dark blue-grey glass shaft on a lower block, with pale bands at the
            // sky lobbies, stepped setbacks near the top on one side and a tall needle spire.
            const glass = css(e.sh([92, 112, 138])),
              glassSh = css(e.sh([64, 80, 104])),
              band = css(e.sh([182, 192, 202])),
              steel = css(e.sh([150, 156, 166]));
            box(-6, 10, 13, 10, glass); // the podium block
            box(3, 10, 4, 10, glassSh);
            for (let i = 3; i <= 9; i += 2) box(-6, i, 13, 1, band);
            for (let i = 11; i <= 44; i++) {
              const hw = i < 36 ? 4 : 3,
                left = i < 40 ? -hw : -1;
              box(left, i, hw - left + 1, 1, i % 11 === 0 ? band : glass);
              box(Math.max(left, 2), i, hw - Math.max(left, 2) + 1, 1, glassSh);
              if (i % 2 && i % 11) for (let p = left + 1; p < Math.min(hw, 2); p += 2) box(p, i, 1, 1, band);
            }
            box(-3, 48, 5, 4, glass); // the crown
            box(-1, 50, 3, 2, steel);
            box(0, 58, 1, 8, steel); // the spire
            break;
          }
          case "tengwang": {
            // Pavilion of Prince Teng (Tengwang Ge), Nanchang: on a tall grey stone platform with stairs, a red
            // timber hall with many eaves of dark green glazed tile, a gabled porch projecting at the front, white
            // railings on every floor, and a big hip-and-gable roof.
            const stone = css(e.sh([168, 170, 168])),
              stoneSh = css(e.sh([132, 134, 134])),
              red = css(e.sh([170, 52, 42])),
              redSh = css(e.sh([120, 38, 34])),
              tile = css(e.sh([62, 88, 80])),
              tileDk = css(e.sh([40, 58, 54])),
              rail = css(e.sh([232, 228, 214])),
              gold = 12;
            for (let i = 1; i <= 7; i++) {
              const k = 14 - Math.floor(i / 3);
              box(-k, i, 2 * k + 1, 1, i === 7 ? stoneSh : stone);
            }
            for (let j = 0; j < 6; j++) box(-12 + j, 1 + j, 2, 1, stoneSh); // the stair up the left
            box(5, 5, 3, 4, 2); // the gate in the platform
            // three storeys under eaves that sweep up at the corners
            const eave = (hw, at) => {
              box(-hw, at - 1, 2 * hw + 1, 1, tileDk);
              box(-hw - 1, at, 2 * hw + 3, 1, tile);
              box(-hw - 2, at + 1, 1, 1, tile);
              box(hw + 2, at + 1, 1, 1, tile);
            };
            const floors = [
              [11, 7],
              [9, 6],
              [8, 6],
            ];
            let b = 7;
            floors.forEach(([hw, h], i) => {
              box(-hw, b + h, 2 * hw + 1, h, red);
              box(hw - 2, b + h, 3, h, redSh);
              box(-hw, b + 1, 2 * hw + 1, 1, rail);
              for (let p = -hw + 2; p < hw - 1; p += 3) box(p, b + h - 2, 1, h - 4, 2);
              box(-hw, b + h - 1, 2 * hw + 1, 1, gold); // the painted brackets
              eave(hw + 1, b + h + 1);
              b += h + 1;
            });
            // the front porch's gable on the first eave
            cone(0, 14, 4, 4, tile);
            box(-2, 17, 5, 2, red);
            box(0, 16, 1, 1, gold);
            // the top roof
            box(-8, b + 2, 17, 2, tile);
            box(-6, b + 3, 13, 1, tileDk);
            box(-6, b + 4, 13, 1, tile);
            for (const s of [-1, 1]) box(s * 7, b + 5, 1, 2, tile);
            break;
          }
          case "genghisMausoleum": {
            // Mausoleum of Genghis Khan, Ordos: three yurt-shaped halls joined by a long white base hall with red
            // windows; each hall has double eaves of blue glazed tile and an orange-gold dome with a blue cloud
            // pattern, the middle one the tallest.
            const white = css(e.sh([238, 234, 226])),
              whiteSh = css(e.sh([200, 196, 188])),
              red = css(e.sh([178, 44, 40])),
              blue = css(e.sh([40, 62, 132])),
              blueDk = css(e.sh([28, 42, 92])),
              gold = css(e.sh([226, 150, 56])),
              goldSh = css(e.sh([186, 112, 40]));
            box(-16, 7, 33, 7, white);
            box(13, 7, 4, 7, whiteSh);
            box(-16, 8, 33, 1, whiteSh);
            for (let p = -14; p <= 14; p += 3) if (Math.abs(p) > 2) box(p, 5, 2, 3, red);
            box(-1, 5, 3, 5, red); // the doorway
            const yurt = (cx, k, d) => {
              box(cx - k, 9 + 2, 2 * k + 1, 2, white);
              box(cx - k - 1, 12, 2 * k + 3, 1, blueDk);
              box(cx - k - 2, 13, 2 * k + 5, 1, blue);
              box(cx - k - 3, 14, 1, 1, blue);
              box(cx + k + 3, 14, 1, 1, blue);
              box(cx - k + 1, 16, 2 * k - 1, 2, white);
              box(cx - k + 1, 16, 2 * k - 1, 1, red);
              box(cx - k, 17, 2 * k + 1, 1, blueDk);
              box(cx - k - 1, 18, 2 * k + 3, 1, blue);
              box(cx - k - 2, 19, 1, 1, blue);
              box(cx + k + 2, 19, 1, 1, blue);
              dome(cx, 18, d, gold);
              box(cx + Math.round(d * 0.4), 18 + d - 1, Math.max(1, d - Math.round(d * 0.4)), d - 1, goldSh);
              box(cx - Math.round(d / 2), 18 + Math.round(d / 2), 2 * Math.round(d / 2) + 1, 1, blue); // the cloud band
              box(cx, 18 + d + 2, 1, 2, gold); // the finial
            };
            yurt(-11, 3, 4);
            yurt(11, 3, 4);
            yurt(0, 5, 7);
            break;
          }
          case "stMichaelQingdao": {
            // St. Michael's Cathedral, Qingdao (1934): a pale granite Romanesque front with two square towers
            // under steep red tiled spires with crosses, a gable with a rose window between them and a round-arched
            // portal under it.
            const stone = css(e.sh([222, 210, 186])),
              stoneSh = css(e.sh([182, 170, 148])),
              base = css(e.sh([150, 142, 130])),
              roof = css(e.sh([182, 62, 44])),
              roofSh = css(e.sh([140, 44, 34]));
            box(-5, 18, 11, 18, stone); // the nave front
            cone(0, 18, 5, 4, stone);
            orb(0, 14, 2, 2);
            orb(0, 14, 0.8, 3);
            box(-2, 7, 5, 6, 2);
            dome(0, 7, 2, 2);
            box(-3, 9, 7, 1, stoneSh);
            box(-10, 2, 21, 2, base);
            for (const s of [-1, 1]) {
              const cx = s * 7;
              box(cx - 3, 26, 7, 26, stone);
              box(cx + 2, 26, 1, 26, stoneSh);
              for (const r of [10, 17]) box(cx, r, 1, 3, 2);
              box(cx - 1, 23, 3, 3, 2); // the belfry openings
              box(cx, 24, 1, 1, 2);
              box(cx - 3, 20, 7, 1, stoneSh);
              box(cx - 4, 27, 9, 1, stoneSh);
              cone(cx, 27, 3, 9, roof);
              box(cx + 1, 31, 2, 4, roofSh);
              box(cx, 38, 1, 3, 3); // the cross
              box(cx - 1, 37, 3, 1, 3);
            }
            box(-10, 2, 21, 2, base);
            break;
          }
          case "huilanPavilion": {
            // Huilan Pavilion at the end of Zhanqiao Pier, Qingdao: a long stone pier on low arches running out to
            // a round stone breakwater, and on it an octagonal two-storey pavilion with red columns and golden
            // yellow glazed roofs.
            const stone = css(e.sh([196, 190, 176])),
              stoneSh = css(e.sh([156, 150, 138])),
              water = css(e.sh([86, 132, 178])),
              red = css(e.sh([172, 52, 42])),
              gold = css(e.sh([224, 176, 66])),
              goldDk = css(e.sh([176, 128, 44]));
            box(-15, 1, 29, 1, water);
            box(-15, 4, 17, 1, stone); // the pier deck and its railing
            box(-15, 5, 17, 1, stoneSh);
            for (let p = -14; p < 2; p += 3) box(p, 3, 1, 2, stoneSh);
            box(1, 5, 13, 5, stone); // the breakwater
            box(10, 5, 4, 5, stoneSh);
            const cx = 7;
            box(cx - 4, 10, 9, 5, red);
            for (const p of [-3, -1, 1, 3]) box(cx + p, 9, 1, 3, 2);
            box(cx - 5, 11, 11, 1, goldDk);
            box(cx - 6, 12, 13, 1, gold);
            box(cx - 7, 13, 1, 1, gold);
            box(cx + 7, 13, 1, 1, gold);
            box(cx - 3, 15, 7, 3, red);
            for (const p of [-2, 0, 2]) box(cx + p, 14, 1, 2, 2);
            box(cx - 4, 16, 9, 1, goldDk);
            box(cx - 5, 17, 11, 1, gold);
            box(cx - 6, 18, 1, 1, gold);
            box(cx + 6, 18, 1, 1, gold);
            cone(cx, 17, 4, 3, gold);
            box(cx, 22, 1, 2, 3);
            break;
          }
          case "longmenBuddha": {
            // Vairocana Buddha of Fengxian Temple, Longmen Grottoes (Luoyang): the great seated Buddha carved in a
            // grey limestone cliff, with a pointed flame halo behind the head, flanked by a disciple and a
            // bodhisattva on each side; small cave niches pit the cliff around it.
            const rock = css(e.sh([170, 162, 146])),
              rockSh = css(e.sh([136, 128, 116])),
              niche = css(e.sh([92, 86, 82])),
              body = css(e.sh([218, 208, 186])),
              bodySh = css(e.sh([170, 160, 142])),
              halo = css(e.sh([128, 120, 112]));
            for (let i = 1; i <= 31; i++) {
              const k = 13 + (i % 7 < 3 ? 1 : 0) - (i > 26 ? i - 26 : 0);
              box(-k, i, 2 * k + 1, 1, rock);
            }
            box(-11, 27, 23, 25, niche); // the open-air cave
            for (const [p, r] of [
              [-13, 9],
              [-12, 20],
              [12, 14],
              [12, 24],
              [-12, 28],
            ])
              box(p, r, 1, 2, 2);
            // the halo
            orb(0, 22, 6, halo);
            cone(0, 26, 3, 4, halo);
            // the seated Buddha
            box(-7, 4, 15, 3, rockSh); // the lotus throne
            box(-7, 8, 15, 4, body); // the crossed legs
            box(-6, 8, 13, 1, bodySh);
            box(-5, 17, 11, 9, body);
            box(2, 17, 4, 9, bodySh); // the robe's shaded side
            box(-2, 13, 5, 3, bodySh); // the hands
            box(-2, 23, 5, 6, body); // the head
            box(1, 23, 2, 6, bodySh);
            box(-1, 25, 3, 2, body); // the ushnisha
            box(-3, 20, 1, 3, body); // the long ears
            box(3, 20, 1, 3, bodySh);
            // a bodhisattva standing on each side
            for (const s of [-1, 1]) {
              const cx = s * 9;
              box(cx - 2, 3, 5, 3, rockSh);
              orb(cx, 18, 2, halo);
              box(cx - 1, 15, 3, 12, body);
              box(cx + 1, 15, 1, 12, bodySh);
              box(cx - 1, 18, 3, 3, body);
            }
            break;
          }
          case "brickPagodaB03": {
            // A solid brick or stone pagoda (Song, Ming and Qing towers all over China): o.n storeys, the base o.w
            // wide narrowing by o.dw per storey, each o.th high with an arched niche and a corbelled eave whose
            // tips turn up; on top a small roof and a gourd finial with rings (o.fin tall). o.dense: a Tang
            // "dense-eave" tower, a tall plain first storey then o.n eaves packed close on a curved outline.
            // o.base a plinth in o.bc, o.twin two pagodas side by side (o.gap apart), o.birds gilt birds on the
            // top eave's corners (Kunming). Used by: Kunming, Lanzhou, Lu'an, Luliang, Luoyang, Maoming, Nanning,
            // Nantong, Neijiang, Ningbo.
            const n = o.n ?? 7,
              w = o.w ?? 13,
              dw = o.dw ?? 1,
              th = o.th ?? 4,
              base = o.base ?? 1,
              rc = o.rc ?? 2,
              bc = o.bc ?? 13,
              fin = o.fin ?? 4,
              tone = (col, k) =>
                css(e.sh(mixc(colors[col], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              wall = ink[c],
              wallSh = tone(c, -0.22),
              eave = ink[rc],
              eaveDk = tone(rc, -0.35),
              plinth = tone(bc, -0.1);
            const one = (cx) => {
              for (let i = 1; i <= base; i++) {
                const k = Math.floor(w / 2) + 1;
                box(cx - k, i, 2 * k + 1, 1, i === base ? tone(bc, 0.25) : plinth);
              }
              let b = base,
                hw = 0;
              const storeys = o.dense ? n + 1 : n;
              for (let i = 0; i < storeys; i++) {
                const f = o.dense ? (i === 0 ? 0 : (i - 1) / n) : i / Math.max(1, n - 1),
                  half = o.dense
                    ? Math.max(1, Math.round((w / 2) * (1.04 - 0.62 * f ** 1.7)))
                    : Math.max(1, Math.round((w - i * dw) / 2)),
                  h = o.dense ? (i === 0 ? th * 3 : 2) : th;
                hw = half;
                box(cx - hw + 1, b + h - 1, 2 * hw - 1, h - 1, wall);
                if (hw >= 3) box(cx + hw - 2, b + h - 1, 2, h - 1, wallSh);
                if (h >= 3) {
                  // the arched niche (a doorway on the first storey)
                  const nh = Math.min(h - 2, i === 0 ? 4 : 2);
                  box(cx, b + nh, 1, nh, 2);
                  if (hw >= 5 && i === 0) box(cx - 1, b + nh - 1, 3, nh - 1, 2);
                  if (hw >= 5 && h >= 4 && i > 0)
                    for (const s of [-1, 1]) box(cx + s * (hw - 2), b + 2, 1, 1, 2);
                } else if (o.dense && i % 2 && hw >= 3) box(cx, b + 1, 1, 1, 2);
                if (h >= 3) box(cx - hw, b + h - 1, 2 * hw + 1, 1, eaveDk); // the corbelling's shadow
                box(cx - hw - 1, b + h, 2 * hw + 3, 1, eave);
                box(cx - hw - 2, b + h + (h > 2 ? 1 : 0), 1, 1, eave); // upturned tips
                box(cx + hw + 2, b + h + (h > 2 ? 1 : 0), 1, 1, eave);
                b += h;
              }
              const k = Math.max(1, hw - 1);
              cone(cx, b, k, Math.max(2, k), eave);
              const top = b + Math.max(2, k);
              if (o.birds) for (const s of [-1, 1]) box(cx + s * (hw + 2), b + 2, 1, 2, 12);
              box(cx, top + fin, 1, fin, 3);
              if (fin >= 4) {
                box(cx - 1, top + 2, 3, 1, 12);
                orb(cx, top + fin - 1, 1, 12);
              }
            };
            if (o.twin) for (const s of [-1, 1]) one(s * Math.round((o.gap ?? w + 4) / 2));
            else one(0);
            break;
          }
          case "cnTower": {
            // Chinese timber halls, gate towers and pavilions, on an optional brick platform (o.ph high, o.w + 6
            // wide, colour o.bc) with merlons and an arched gate tunnel (o.gate). o.n storeys, the first o.w wide
            // and each next narrower by o.dw, o.th high: a white railing, red columns (o.c) with dark lattice
            // panels between them, a band of painted brackets, then an eave of glazed tile (o.rc) whose corners
            // sweep up. The top is a hip-and-gable roof with a ridge and upturned end ornaments, or o.top "pyr" a
            // pyramid with a gilt finial. o.wings: low side halls. Used by: Liaocheng, Liuzhou, Linyi, Meishan,
            // Mianyang, Nanchong, Nanyang, Puning, Puyang, Qingyuan.
            const n = o.n ?? 2,
              w = o.w ?? 17,
              dw = o.dw ?? 4,
              th = o.th ?? 6,
              ph = o.ph ?? 0,
              bc = o.bc ?? 13,
              rc = o.rc ?? 2,
              tone = (col, k) =>
                css(e.sh(mixc(colors[col], k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)))),
              roof = ink[rc],
              roofDk = tone(rc, -0.35),
              roofLt = tone(rc, 0.2),
              col = ink[c],
              panel = tone(c, -0.5),
              rail = css(e.sh([232, 228, 214])),
              teal = css(e.sh([70, 134, 128])),
              brick = ink[bc],
              brickDk = tone(bc, -0.2);
            const eave = (hw, at) => {
              box(-hw, at - 1, 2 * hw + 1, 1, roofDk);
              box(-hw - 1, at, 2 * hw + 3, 1, roof);
              box(-hw - 2, at + 1, 1, 1, roof);
              box(hw + 2, at + 1, 1, 1, roof);
            };
            if (ph) {
              const k = Math.floor(w / 2) + 3;
              for (let i = 1; i <= ph; i++) {
                const q = k + Math.round((ph - i) / 3);
                box(-q, i, 2 * q + 1, 1, i % 3 === 0 ? brickDk : brick);
              }
              box(k - 2, ph, 3, ph, brickDk);
              for (let p = -k; p <= k; p += 2) box(p, ph + 1, 1, 1, brick); // the merlons
              if (o.gate) {
                const gh = Math.min(ph - 2, 5);
                box(-2, gh, 5, gh - 1, 2);
                box(-1, gh + 1, 3, 2, 2);
                box(-3, gh + 2, 7, 1, tone(bc, 0.25));
              }
            }
            if (o.wings) {
              const k = Math.floor(w / 2);
              for (const s of [-1, 1]) {
                const cx = s * (k + 5);
                box(cx - 4, ph + 5, 9, 4, col);
                for (let p = -3; p <= 3; p += 2) box(cx + p, ph + 4, 1, 3, panel);
                box(cx - 5, ph + 6, 11, 1, roof);
                box(cx - 4, ph + 7, 9, 1, roofLt);
                box(cx + s * 5, ph + 7, 1, 1, roof);
              }
            }
            let b = ph,
              hw = 0;
            for (let i = 0; i < n; i++) {
              hw = Math.floor((w - i * dw) / 2);
              const h = i === 0 ? th : th - 1;
              box(-hw, b + h - 2, 2 * hw + 1, h - 2, col);
              for (let p = -hw + 1; p < hw; p += 3) box(p, b + h - 3, 2, Math.max(1, h - 5), panel);
              box(-hw, b + 1, 2 * hw + 1, 1, rail);
              if (i === 0 && !ph) box(-1, b + 4, 3, 3, panel); // the doorway
              for (let p = -hw; p <= hw; p += 2) box(p, b + h - 2, 1, 1, teal); // the painted brackets
              eave(hw + 1, b + h);
              b += h;
            }
            const k = hw - 1;
            if (o.top === "pyr") {
              cone(0, b, k + 1, k + 1, roof);
              for (let j = 1; j <= k; j++) box(Math.round((k + 1) * (1 - j / (k + 1))), b + j, 1, 1, roofDk);
              box(0, b + k + 4, 1, 3, 12);
              orb(0, b + k + 3, 1, 12);
            } else {
              const r = Math.max(2, Math.round(k / 3));
              for (let j = 1; j <= r; j++)
                box(-k + j - 1, b + j, 2 * (k - j) + 3, 1, j === r ? roofLt : roof);
              box(-Math.round(k / 3), b + r, 2 * Math.round(k / 3) + 1, r - 1, roofDk); // the gable
              box(-k + r - 1, b + r + 1, 2 * (k - r) + 3, 1, roof); // the ridge
              for (const s of [-1, 1]) box(s * (k - r + 1), b + r + 3, 1, 2, roof);
              if (o.fin) box(0, b + r + 1 + o.fin, 1, o.fin, 12);
            }
            break;
          }
          case "zhongshanBridge": {
            // Zhongshan Bridge, Lanzhou (1909), the first iron bridge on the Yellow River: a low deck on stone piers
            // under five arched steel trusses in a row, painted silver-grey, over the brown water.
            const steel = css(e.sh([170, 176, 184])),
              steelDk = css(e.sh([118, 124, 134])),
              water = css(e.sh([168, 140, 96])),
              stone = 13;
            box(-26, 1, 53, 1, water);
            for (let s = -25; s <= 25; s += 10) box(s - 1, 5, 3, 4, stone);
            box(-25, 6, 51, 2, steelDk); // the deck
            for (let a = -2; a <= 2; a++) {
              const cx = a * 10;
              for (let x = -5; x <= 5; x++) {
                const top = 7 + Math.round(5 * (1 - (x / 5) ** 2));
                box(cx + x, top, 1, 1, steel);
                if (x % 2 === 0 && top > 8) box(cx + x, top - 1, 1, top - 7, steel);
                else if (top > 9) box(cx + x, top - 2, 1, 1, steelDk); // the diagonals
              }
            }
            break;
          }
          case "dugeBridge": {
            // Duge (Beipanjiang) Bridge, Liupanshui: the world's highest bridge, a red steel deck strung across a
            // deep green gorge between two slender white pylons with fans of stays.
            const slope = css(e.sh([86, 124, 72])),
              slopeDk = css(e.sh([62, 94, 58])),
              red = css(e.sh([196, 52, 44])),
              white = css(e.sh([236, 236, 232])),
              cable = css(e.sh([214, 214, 210])),
              river = css(e.sh([150, 182, 196]));
            for (let x = -24; x <= 24; x++) {
              const a = Math.abs(x),
                h = a < 3 ? 1 : Math.min(17, Math.round((a - 2) * 1.05));
              box(x, h, 1, h, x < 0 ? slope : slopeDk);
            }
            box(-2, 1, 5, 1, river);
            box(-25, 20, 51, 2, red); // the deck
            for (const s of [-1, 1]) {
              const px = s * 13;
              box(px, 36, 1, 36 - Math.min(17, Math.round((13 - 2) * 1.05)), white);
              for (let j = 0; j < 4; j++) {
                stroke(px, 34 - j * 3, px + s * (3 + j * 3), 21, 6);
                stroke(px, 34 - j * 3, px - s * (3 + j * 3), 21, 6);
              }
              box(px - 1, 22, 3, 2, white);
            }
            for (const px of [-20, 20]) box(px, 19, 1, 3, white); // the approach piers
            box(-25, 21, 51, 1, cable);
            break;
          }
          case "zhouzhuangBridges": {
            // The Twin Bridges of Zhouzhuang (Kunshan): Shide Bridge, a high round stone arch, beside Yong'an
            // Bridge, a flat slab on square piers, over the canal, with whitewashed houses and dark tiled roofs
            // behind.
            const stone = css(e.sh([176, 172, 162])),
              stoneSh = css(e.sh([136, 132, 124])),
              wall = css(e.sh([236, 234, 226])),
              tile = css(e.sh([70, 72, 80])),
              water = css(e.sh([96, 130, 132]));
            for (const [cx, hw, h] of [
              [-10, 5, 12],
              [9, 6, 10],
            ]) {
              box(cx - hw, h, 2 * hw + 1, h, wall);
              box(cx - hw - 1, h + 1, 2 * hw + 3, 1, tile);
              cone(cx, h + 1, hw, 3, tile);
              box(cx - 2, h - 3, 1, 2, 2);
              box(cx + 2, h - 3, 1, 2, 2);
            }
            box(-17, 1, 35, 1, water);
            // Shide Bridge: the round arch, its deck climbing in steps
            for (let x = -9; x <= 3; x++) {
              const top = 3 + Math.round(6 * (1 - ((x + 3) / 7) ** 2));
              box(x, top, 1, top - 1, stone);
              if (x % 2) box(x, top, 1, 1, stoneSh);
            }
            box(-6, 3, 7, 2, water);
            dome(-3, 3, 3, water);
            box(-7, 4, 1, 2, stoneSh);
            // Yong'an Bridge: the flat slab on square piers
            box(4, 6, 12, 2, stone);
            box(4, 5, 12, 1, stoneSh);
            box(4, 4, 2, 3, stoneSh);
            box(14, 4, 2, 3, stoneSh);
            box(6, 4, 8, 3, water);
            break;
          }
          case "fangshengBridge": {
            // Fangsheng Bridge, Zhujiajiao (Qingpu): Shanghai's largest stone arch bridge, five round arches of
            // grey granite, the middle one the biggest, the deck rising in steps to a hump over it.
            const stone = css(e.sh([186, 184, 176])),
              stoneSh = css(e.sh([144, 142, 136])),
              lit = css(e.sh([212, 210, 202])),
              water = css(e.sh([96, 130, 132]));
            box(-20, 1, 41, 1, water);
            for (let x = -19; x <= 19; x++) {
              const top = 4 + Math.round(8 * (1 - (x / 20) ** 2));
              box(x, top, 1, top - 1, stone);
              box(x, top + 1, 1, 1, x % 2 ? lit : stone); // the stepped deck and its railing posts
            }
            for (const [cx, r] of [
              [0, 5],
              [-9, 3],
              [9, 3],
              [-15, 2],
              [15, 2],
            ]) {
              box(cx - r, 2, 2 * r + 1, 1, water);
              dome(cx, 2, r, stoneSh);
              dome(cx, 2, r - 1, water);
              box(cx - r + 1, 3, 2 * r - 1, 2, water);
            }
            break;
          }
          case "xiaoshangBridge": {
            // Xiaoshang Bridge (Luohe), a Sui-style open-spandrel stone arch like the Zhaozhou Bridge: one flat
            // segmental arch with two small arches over each haunch and a low railing along a nearly flat deck.
            const stone = css(e.sh([198, 192, 176])),
              stoneSh = css(e.sh([156, 150, 138])),
              water = css(e.sh([96, 130, 160]));
            box(-14, 1, 29, 1, water);
            for (let x = -13; x <= 13; x++) {
              const arch = 2 + Math.round(5 * (1 - (x / 11) ** 2));
              box(x, 9, 1, 9 - Math.max(1, arch), stone);
            }
            for (let x = -10; x <= 10; x++) {
              const arch = 2 + Math.round(5 * (1 - (x / 11) ** 2));
              box(x, arch - 1, 1, arch - 2, water);
              box(x, arch, 1, 1, stoneSh); // the arch ring
            }
            for (const s of [-1, 1])
              for (const d of [7, 11]) {
                dome(s * d, 6, 1, water);
                box(s * d - 1, 6, 3, 1, water);
              }
            for (let p = -13; p <= 13; p += 2) box(p, 10, 1, 1, stoneSh); // the railing
            box(-13, 10, 27, 1, stoneSh);
            for (let p = -12; p <= 12; p += 2) box(p, 10, 1, 1, stone);
            break;
          }
          case "oilDerrick": {
            // Liaohe Oilfield (Panjin): a tapering red-and-white lattice drilling derrick with its crown block and
            // the drill floor, and a nodding-donkey pump jack beside it.
            const red = css(e.sh([198, 58, 48])),
              white = css(e.sh([232, 230, 224])),
              steel = css(e.sh([92, 96, 108])),
              h = o.h ?? 28;
            box(-6, 4, 13, 4, steel); // the drill floor
            const kAt = (i) => Math.round(5 - (3.5 * (i - 5)) / (h - 5));
            for (let i = 5; i <= h; i++) {
              const k = kAt(i);
              box(-k, i, 1, 1, red);
              box(k, i, 1, 1, red);
            }
            for (let i = 5; i + 4 <= h; i += 4) {
              box(-kAt(i + 4), i + 4, 2 * kAt(i + 4) + 1, 1, white); // the girts
              stroke(-kAt(i), i, kAt(i + 4), i + 4, 10); // the X-bracing
              stroke(kAt(i), i, -kAt(i + 4), i + 4, 10);
            }
            box(-2, h + 2, 5, 2, red); // the crown block
            // the pump jack
            box(9, 2, 9, 2, steel);
            box(12, 8, 1, 6, steel);
            box(11, 8, 3, 1, steel);
            box(7, 10, 11, 2, 10);
            box(6, 11, 2, 4, 10); // the horse head
            box(6, 7, 1, 5, steel);
            box(16, 7, 2, 3, steel); // the counterweight
            break;
          }
          case "yongdingTulou": {
            // Fujian tulou (Yongding, Longyan): big round rammed-earth houses of the Hakka, tawny walls with a
            // band of small windows only on the upper floors, a single stone gate, and a wide overhanging ring of
            // dark grey tile whose inner edge shows as a dark slot; a smaller one stands behind to the left.
            const earth = css(e.sh([196, 150, 98])),
              earthDk = css(e.sh([160, 118, 78])),
              tile = css(e.sh([84, 82, 88])),
              tileLt = css(e.sh([118, 116, 120])),
              slot = css(e.sh([48, 44, 52])),
              stone = 13;
            const drum = (cx, hw, h) => {
              box(cx - hw, h, 2 * hw + 1, h, earth);
              box(cx - hw, h, 2, h, earthDk); // the curve of the drum
              box(cx + hw - 3, h, 4, h, earthDk);
              for (let r = h - 2; r > h / 2; r -= 2)
                for (let i = -hw + 3 + (r % 2); i < hw - 2; i += 3) box(cx + i, r, 1, 1, 2);
              box(cx - hw - 2, h + 1, 2 * hw + 5, 1, tile); // the roof ring
              box(cx - hw - 1, h + 2, 2 * hw + 3, 1, tileLt);
              box(cx - hw, h + 3, 2 * hw + 1, 1, tile);
              box(cx - hw + 4, h + 3, 2 * hw - 7, 1, slot); // the open courtyard inside the ring
              box(cx - hw + 2, h + 4, 2 * hw - 3, 1, tile);
            };
            drum(-8, 9, 15);
            drum(4, 14, 12);
            box(2, 5, 5, 5, stone); // the gate
            box(3, 4, 3, 4, 2);
            box(-11, 2, 30, 1, earthDk); // the stone footing
            break;
          }
