          case "hcmMausoleum": {
            // Ho Chi Minh Mausoleum, Hanoi: a grey granite block on two low terraces with wide steps, a front of
            // square pillars before a dark recess, a heavy entablature with the name in red and a stepped roof.
            const P = (a) => css(e.sh(a)),
              stone = P([150, 150, 148]),
              lit = P([190, 190, 186]),
              shade = P([112, 112, 114]),
              pillar = P([176, 174, 168]),
              dark = P([58, 56, 64]),
              terrace = P([118, 108, 108]);
            box(-12, 4, 25, 4, terrace);
            box(-12, 4, 25, 1, P([150, 138, 136]));
            for (let s = 1; s <= 3; s++) box(-4 + s, s, 9 - 2 * s, 1, lit); // the front steps
            box(-9, 6, 19, 2, stone);
            box(-9, 6, 19, 1, lit);
            box(9, 6, 1, 2, shade);
            box(-8, 12, 17, 6, dark); // the recess behind the pillars
            for (const p of [-8, -5, -2, 1, 4, 7]) {
              box(p, 12, 2, 6, pillar);
              box(p + 1, 12, 1, 6, stone);
            }
            box(-10, 15, 21, 3, stone); // the entablature
            box(-10, 15, 21, 1, lit);
            box(10, 15, 1, 3, shade);
            box(-3, 14, 7, 1, P([160, 60, 54])); // the name
            box(-7, 17, 15, 2, stone); // the stepped roof
            box(-7, 17, 15, 1, lit);
            box(-5, 18, 11, 1, stone);
            box(7, 17, 1, 2, shade);
            break;
          }
          case "onePillar": {
            // One Pillar Pagoda, Hanoi: a small square wooden shrine on a single stone pillar in a lotus pond,
            // held by struts, under a brown tiled roof with curled corners and dragons on the ridge; a stone
            // stair climbs to it from the front.
            const P = (a) => css(e.sh(a)),
              water = P([86, 132, 160]),
              stone = P([182, 176, 160]),
              stoneSh = P([136, 130, 118]),
              wood = P([128, 60, 44]),
              woodDk = P([84, 42, 36]),
              tile = P([132, 84, 64]),
              tileDk = P([92, 58, 48]);
            box(-8, 2, 17, 2, water);
            for (const p of [-6, 4]) box(p, 2, 2, 1, P([92, 150, 92])); // lotus leaves
            box(-1, 8, 3, 7, stone); // the pillar
            box(1, 8, 1, 7, stoneSh);
            for (let j = 0; j < 3; j++) (box(-2 - j, 7 + j, 1, 1, woodDk), box(2 + j, 7 + j, 1, 1, woodDk));
            box(-5, 10, 11, 1, woodDk); // the floor
            box(-5, 11, 11, 1, P([160, 120, 96])); // the railing
            box(-4, 13, 9, 2, wood);
            for (const p of [-3, -1, 1, 3]) box(p, 13, 1, 2, woodDk);
            box(-6, 14, 13, 1, tileDk);
            box(-7, 15, 15, 1, tile);
            box(-5, 16, 11, 1, tile);
            box(-4, 17, 9, 1, tile);
            for (const s of [-1, 1]) {
              box(s * 8, 16, 1, 1, tile); // the curled corners
              box(s * 4, 19, 1, 2, tile); // the dragons on the ridge
            }
            box(-3, 18, 7, 1, tileDk);
            box(0, 20, 1, 2, P([210, 178, 90]));
            for (let j = 0; j < 7; j++) box(-9 + j, 3 + j, 2, 1, stone); // the stair and its balustrade
            for (let j = 0; j < 7; j += 2) box(-9 + j, 4 + j, 1, 1, stoneSh);
            box(-9, 3, 2, 2, stone);
            break;
          }
          case "bitexco": {
            // Bitexco Financial Tower, Ho Chi Minh City: a lotus-bud tower of blue-grey glass that swells a little,
            // then tapers to a slanted tip, banded by floors, with the helipad jutting out at two thirds of its
            // height, on a low podium.
            const P = (a) => css(e.sh(a)),
              glass = P([118, 140, 164]),
              lit = P([168, 190, 208]),
              shade = P([84, 100, 124]),
              band = P([150, 170, 190]),
              h = 46;
            box(-6, 4, 13, 4, P([176, 172, 164]));
            box(-6, 4, 13, 1, P([206, 202, 194]));
            for (let p = -5; p <= 5; p += 2) box(p, 3, 1, 2, shade);
            // the left face curves in all the way up; the right one stays straight to the helipad, then closes
            const edge = (i) => {
              const f = (i - 5) / (h - 5);
              return [
                -4 + Math.round(4 * f ** 2),
                f < 0.62 ? 4 : 4 - Math.round(4 * ((f - 0.62) / 0.38) ** 0.8),
              ];
            };
            for (let i = 5; i <= h; i++) {
              const [l, r] = edge(i);
              if (r < l) continue;
              box(l, i, r - l + 1, 1, i % 4 === 0 ? band : glass);
              box(l, i, 1, 1, lit);
              if (r - l >= 3) box(r - 1, i, 2, 1, shade);
            }
            box(1, h + 2, 1, 2, glass); // the tip
            const hx = edge(33)[1];
            box(hx, 33, 4, 1, P([200, 200, 196])); // the helipad
            box(hx, 32, 3, 1, shade);
            box(hx + 3, 34, 1, 1, P([230, 120, 60]));
            break;
          }
          case "saigonNotreDame": {
            // Notre-Dame Cathedral, Saigon: red Marseille brick, two square towers with iron spires and
            // crosses, a gable with the rose window and a clock between them, white string courses, three
            // arched doors.
            const P = (a) => css(e.sh(a)),
              brick = P([174, 86, 64]),
              lit = P([204, 120, 92]),
              shade = P([132, 62, 50]),
              trim = P([226, 214, 196]),
              dark = P([66, 46, 50]),
              iron = P([112, 122, 136]),
              ironLt = P([150, 160, 172]);
            box(-6, 19, 13, 19, brick); // the centre front
            box(-6, 20, 13, 1, trim);
            cone(0, 20, 6, 4, brick);
            box(0, 26, 1, 2, trim);
            box(-1, 25, 3, 1, trim);
            orb(0, 15, 2.5, trim);
            orb(0, 15, 1.6, P([88, 96, 140])); // the rose window
            orb(0, 21, 1, trim); // the clock
            box(-6, 10, 13, 1, trim);
            box(-2, 7, 5, 6, dark); // the main door
            dome(0.5, 7, 2, dark);
            for (const s of [-1, 1]) {
              const cx = s * 9;
              box(cx - 3, 28, 7, 28, brick);
              box(cx - 3, 28, 1, 28, lit);
              box(cx + 3, 28, 1, 28, shade);
              for (const r of [10, 19, 28]) box(cx - 3, r, 7, 1, trim);
              box(cx - 1, 6, 3, 5, dark); // the side doors
              box(cx - 1, 16, 3, 4, dark);
              box(cx - 1, 25, 3, 4, dark); // the belfry
              box(cx, 24, 1, 2, P([212, 160, 54]));
              for (const q of [-3, 3]) box(cx + q, 30, 1, 2, iron); // corner pinnacles
              cone(cx, 28, 2, 10, iron);
              box(cx - 2, 29, 1, 1, ironLt);
              for (let j = 1; j < 10; j += 2) box(cx - Math.round(2 * (1 - j / 10)), 28 + j, 1, 1, ironLt);
              box(cx, 41, 1, 3, trim); // the cross
              box(cx - 1, 40, 3, 1, trim);
            }
            box(-6, 19, 13, 1, shade);
            break;
          }
          case "thienMu": {
            // Thiên Mụ Pagoda, Huế (Phước Duyên tower): an octagonal brick tower of seven storeys, each a little
            // narrower, with an arched niche in front framed by pale plaster panels and thin flared eaves, on a
            // stone plinth with a railing; a bronze gourd on top.
            const P = (a) => css(e.sh(a)),
              brick = P([176, 120, 102]),
              lit = P([206, 156, 132]),
              shade = P([128, 84, 74]),
              plaster = P([214, 206, 188]),
              dark = P([58, 44, 50]),
              eave = P([104, 96, 92]),
              stone = P([164, 160, 150]);
            box(-7, 3, 15, 3, stone);
            box(-7, 3, 15, 1, P([196, 192, 182]));
            for (let p = -6; p <= 6; p += 2) box(p, 4, 1, 1, stone); // the railing
            let b = 3;
            for (let i = 0; i < 7; i++) {
              const hw = 6 - Math.round(i / 2),
                sh = i === 0 ? 6 : 3,
                top = b + sh;
              box(-hw, top, 2 * hw + 1, sh, brick);
              box(-hw, top, 1, sh, lit);
              box(hw - 1, top, 2, sh, shade);
              for (const s of [-1, 1]) box(s * (hw - 2), top - 1, 1, sh - 1, plaster);
              const ow = i === 0 ? 3 : 1;
              box(-Math.floor(ow / 2), top - 1, ow, sh - 1, dark);
              if (i === 0) dome(0, top - 1, 1.5, dark);
              box(-hw - 1, top + 1, 2 * hw + 3, 1, eave);
              for (const s of [-1, 1]) box(s * (hw + 2), top + 2, 1, 1, eave); // the flared tips
              b = top + 1;
            }
            box(-1, b + 1, 3, 1, P([150, 120, 70]));
            orb(0, b + 2.5, 1, P([170, 136, 76]));
            box(0, b + 5, 1, 2, P([210, 178, 90]));
            break;
          }
          case "ngoMon": {
            // Ngọ Môn, the south gate of the Huế citadel: a massive grey-ochre masonry base pierced by three
            // arched gateways, carrying the Five Phoenix Pavilion: red wooden columns under yellow glazed
            // roofs, two-tiered in the middle and single over the wings, with curled ridge ends.
            const P = (a) => css(e.sh(a)),
              wall = P([158, 146, 126]),
              wallLt = P([190, 178, 156]),
              wallSh = P([118, 108, 96]),
              dark = P([56, 46, 50]),
              red = P([170, 52, 44]),
              redDk = P([110, 36, 36]),
              gold = P([226, 182, 64]),
              goldDk = P([170, 128, 44]),
              green = P([96, 140, 92]);
            box(-13, 9, 27, 9, wall);
            box(-13, 9, 27, 1, wallLt);
            box(12, 8, 2, 8, wallSh);
            for (const r of [3, 6]) box(-13, r, 27, 1, wallSh);
            for (const [cx, w, h] of [
              [0, 3, 6],
              [-6, 3, 4],
              [6, 3, 4],
            ]) {
              box(cx - 1, h, w, h, dark);
              box(cx - 2, h + 1, w + 2, 1, wallLt);
            }
            for (let p = -12; p <= 12; p += 2) box(p, 10, 1, 1, wallLt); // the parapet
            // the wings: red columns, single yellow roofs edged in green
            box(-12, 13, 25, 3, red);
            for (let p = -11; p <= 11; p += 2) box(p, 12, 1, 2, redDk);
            box(-13, 14, 27, 1, goldDk);
            box(-12, 15, 25, 1, gold);
            for (const s of [-1, 1]) box(s * 14, 15, 1, 1, gold);
            box(-12, 13, 25, 1, green);
            // the central pavilion, two-tiered
            box(-5, 18, 11, 3, red);
            for (let p = -4; p <= 4; p += 2) box(p, 17, 1, 2, redDk);
            box(-6, 19, 13, 1, goldDk);
            box(-5, 20, 11, 1, gold);
            box(-4, 21, 9, 1, gold);
            for (const s of [-1, 1]) {
              box(s * 7, 20, 1, 1, gold);
              box(s * 4, 23, 1, 2, gold);
            }
            box(-3, 22, 7, 1, goldDk);
            box(0, 23, 1, 2, P([240, 214, 120]));
            break;
          }
          case "dragonBridge": {
            // Dragon Bridge, Da Nang: a straight road deck on grey piers, and above it a yellow steel dragon
            // whose body rises and dips in waves, highest in the middle, with the head reared up at the east end
            // (jaws open) and the tail curled at the west end.
            const P = (a) => css(e.sh(a)),
              gold = P([232, 182, 40]),
              goldDk = P([176, 128, 30]),
              deckC = P([196, 194, 188]),
              deckSh = P([140, 138, 134]),
              pier = P([160, 158, 152]),
              water = P([86, 132, 178]),
              w = 16,
              dh = 5;
            box(-w - 3, 1, 2 * w + 7, 1, water);
            for (const p of [-w, -8, 0, 8, w]) {
              box(p - 1, dh - 1, 3, dh - 2, pier);
              box(p + 1, dh - 1, 1, dh - 2, deckSh);
            }
            box(-w - 2, dh + 1, 2 * w + 5, 2, deckC);
            box(-w - 2, dh, 2 * w + 5, 1, deckSh);
            // the body: humps between the anchor points, the middle one tallest
            const knots = [-w, -9, -4, 4, 9, w],
              amp = [4, 6, 9, 6, 4],
              body = (x) => {
                for (let k = 0; k < amp.length; k++)
                  if (x >= knots[k] && x <= knots[k + 1]) {
                    const f = (x - knots[k]) / (knots[k + 1] - knots[k]);
                    return dh + 2 + Math.round(amp[k] * Math.sin(Math.PI * f));
                  }
                return dh + 2;
              };
            for (let x = -w; x <= w; x++) {
              const a = body(x),
                b = body(Math.min(w, x + 1));
              box(x, Math.max(a, b) + 1, 1, Math.abs(a - b) + 2, gold);
              box(x, Math.min(a, b), 1, 1, goldDk);
            }
            // the tail curls up and back at the west end
            box(-w - 2, dh + 4, 1, 3, gold);
            box(-w - 1, dh + 5, 1, 1, gold);
            // the head rears up at the east end
            box(w, dh + 8, 2, 6, gold);
            box(w + 1, dh + 10, 4, 3, gold);
            box(w + 2, dh + 7, 3, 1, gold); // the lower jaw
            box(w + 1, dh + 11, 1, 1, P([200, 40, 30])); // the eye
            box(w - 1, dh + 11, 1, 2, goldDk); // the mane
            box(w, dh + 12, 1, 2, goldDk);
            break;
          }
          case "haiphongOpera": {
            // Haiphong Opera House: a pale yellow French theatre, a portico of six tall white columns over wide
            // steps, balconies between them, side wings with tall windows and corner pavilions under small
            // triangular pediments, a cornice and balustrade on top.
            const P = (a) => css(e.sh(a)),
              yel = P([234, 198, 96]),
              yelLt = P([246, 222, 150]),
              yelSh = P([196, 156, 70]),
              white = P([242, 236, 218]),
              dark = P([82, 64, 62]),
              step = P([200, 196, 186]);
            box(-14, 10, 29, 10, yel);
            box(-14, 10, 29, 1, yelLt);
            box(14, 10, 1, 10, yelSh);
            for (const s of [-1, 1]) {
              for (const p of [7, 9]) {
                box(s * p, 4, 1, 3, dark);
                box(s * p, 8, 1, 2, dark);
              }
              const cx = s * 12; // the corner pavilions
              box(cx - 2, 12, 5, 12, yel);
              box(cx - 2, 12, 5, 1, yelLt);
              box(cx, 4, 1, 3, dark);
              box(cx, 9, 1, 3, dark);
              cone(cx, 12, 3, 2, yelLt);
              if (s > 0) box(cx + 2, 12, 1, 12, yelSh);
            }
            box(-6, 13, 13, 13, yel); // the centre, with its portico
            box(-6, 10, 13, 8, dark);
            for (const p of [-5, -3, -1, 1, 3, 5]) {
              box(p, 10, 1, 8, white);
              box(p, 11, 1, 1, yelLt); // capitals
            }
            box(-5, 6, 11, 1, yelLt); // the balcony
            box(-7, 12, 15, 2, yelLt);
            box(-7, 12, 15, 1, white);
            box(-5, 14, 11, 1, yel); // the attic
            box(-3, 15, 7, 1, yelLt);
            for (let s = 0; s < 3; s++) box(-7 + s, 2 - s + 0, 15 - 2 * s, 1, step);
            box(-8, 2, 17, 1, step);
            break;
          }
          case "chamTower": {
            // Cham brick towers (Po Nagar, Po Klong Garai, Po Sah Inu; used by those three cities): a kalan of
            // red-brown brick, its body ribbed by pilasters, a porch with a pointed false-door arch, then three
            // shrinking storeys that repeat the body with little horns at the corners, and a stone capstone.
            // o.h the main tower, o.hw its half-width, o.left / o.right smaller towers beside it (heights),
            // o.saddle the right one is a long saddle-roofed fire tower (Po Klong Garai), o.hill the terrace.
            const P = (a) => css(e.sh(a)),
              brick = P([174, 94, 66]),
              lit = P([204, 130, 96]),
              shade = P([126, 66, 50]),
              dark = P([62, 40, 42]),
              hill = o.hill ?? 2,
              h = o.h ?? 28,
              hw0 = o.hw ?? 4;
            const kalan = (cx, hw, h, base) => {
              const bh = Math.round(h * 0.42);
              box(cx - hw, base + bh, 2 * hw + 1, bh, brick);
              box(cx - hw, base + bh, 1, bh, lit);
              box(cx + hw, base + bh, 1, bh, shade);
              if (hw >= 3) for (const s of [-1, 1]) box(cx + s * (hw - 1), base + bh - 1, 1, bh - 2, shade);
              const ph = Math.round(bh * 0.7); // the porch and its false door
              box(cx - 1, base + ph, 3, ph, lit);
              box(cx, base + ph - 1, 1, ph - 1, dark);
              cone(cx, base + ph, 1, 2, lit);
              box(cx - hw - 1, base + bh + 1, 2 * hw + 3, 1, lit);
              let b = base + bh + 1;
              for (let k = 1; k <= 3; k++) {
                const kw = Math.max(1, Math.round(hw * (1 - k * 0.2))),
                  th = Math.max(2, Math.round((h - bh - 3) / 3.4));
                box(cx - kw, b + th, 2 * kw + 1, th, brick);
                box(cx + kw, b + th, 1, th, shade);
                box(cx, b + th - 1, 1, th - 1, dark);
                box(cx - kw - 1, b + th + 1, 2 * kw + 3, 1, lit);
                for (const s of [-1, 1]) box(cx + s * (kw + 1), b + th + 2, 1, 1, lit); // the corner horns
                b += th + 1;
              }
              dome(cx, b, 1.2, P([190, 176, 150]));
              box(cx, b + 2, 1, 1, P([190, 176, 150]));
            };
            const L = o.left ?? 0,
              Rt = o.right ?? 0,
              lx = -hw0 - 3,
              rx = hw0 + 4;
            const x0 = L ? lx - 3 : -hw0 - 2,
              x1 = Rt ? rx + 4 : hw0 + 2;
            for (let i = 1; i <= hill; i++)
              box(x0 + hill - i, i, x1 - x0 + 1 - 2 * (hill - i), 1, P([150, 136, 104]));
            if (L) kalan(lx, 2, L, hill);
            if (Rt && o.saddle) {
              box(rx - 2, hill + Rt, 5, Rt, brick);
              box(rx + 2, hill + Rt, 1, Rt, shade);
              box(rx, hill + Rt - 2, 1, Rt - 3, dark);
              box(rx - 3, hill + Rt + 1, 7, 1, lit);
              box(rx - 2, hill + Rt + 3, 5, 2, brick); // the saddle roof, its ends curving up
              for (const s of [-1, 1]) box(rx + s * 3, hill + Rt + 5, 1, 3, brick);
              box(rx - 1, hill + Rt + 4, 3, 1, lit);
            } else if (Rt) kalan(rx, 2, Rt, hill);
            kalan(0, hw0, h, hill);
            break;
          }
          case "phoMinh": {
            // Phổ Minh Tower, Nam Định (1305): a square tower of fourteen storeys, the lowest of grey stone and
            // the rest of red-brown brick, each a little narrower, under projecting corbelled cornices, with a
            // small arched opening in front; a brick finial on top.
            const P = (a) => css(e.sh(a)),
              stone = P([160, 156, 146]),
              stoneSh = P([120, 116, 110]),
              brick = P([162, 88, 66]),
              lit = P([196, 122, 92]),
              shade = P([120, 64, 52]),
              dark = P([56, 40, 42]);
            box(-7, 2, 15, 2, stoneSh);
            box(-6, 6, 13, 4, stone);
            box(5, 6, 2, 4, stoneSh);
            box(-1, 5, 3, 3, dark);
            let b = 6;
            for (let i = 1; i < 14; i++) {
              const hw = 6 - Math.round((i * 3) / 13),
                top = b + 3;
              box(-hw - 1, b + 1, 2 * hw + 3, 1, i % 2 ? lit : brick); // the cornice
              box(-hw, top, 2 * hw + 1, 2, brick);
              box(hw, top, 1, 2, shade);
              if (i % 2 || i < 4) box(0, top, 1, 2, dark);
              b = top;
            }
            box(-3, b + 1, 7, 1, lit);
            box(-1, b + 3, 3, 2, brick);
            box(0, b + 5, 1, 2, brick);
            break;
          }
          case "hoaPhong": {
            // Hòa Phong Tower of Dâu Pagoda, Bắc Ninh: a square three-storey brick tower with tiled pent roofs and
            // a little hip roof with a gourd finial, rising behind the long low tiled roof of the front hall.
            const P = (a) => css(e.sh(a)),
              brick = P([146, 112, 92]),
              lit = P([180, 146, 120]),
              shade = P([108, 80, 68]),
              tile = P([122, 76, 60]),
              tileDk = P([88, 54, 46]),
              dark = P([54, 40, 42]),
              wood = P([74, 52, 46]);
            // the tower
            box(-3, 24, 7, 15, brick);
            box(-3, 24, 1, 15, lit);
            box(3, 24, 1, 15, shade);
            box(-1, 16, 3, 3, dark);
            box(-1, 21, 3, 2, dark);
            box(-1, 13, 3, 1, lit);
            box(-4, 18, 9, 1, tile);
            (box(-5, 19, 1, 1, tile), box(5, 19, 1, 1, tile));
            box(-4, 25, 9, 1, tile);
            box(-3, 26, 7, 1, tileDk);
            box(-2, 27, 5, 1, tile);
            box(-1, 28, 3, 1, tile);
            box(0, 30, 1, 2, P([200, 168, 90]));
            // the front hall
            box(-7, 3, 15, 3, wood);
            for (let p = -6; p <= 6; p += 3) box(p, 3, 1, 3, P([150, 120, 100]));
            box(-8, 5, 17, 2, tileDk);
            box(-8, 7, 17, 2, tile);
            box(-7, 8, 15, 1, tileDk);
            box(-6, 9, 13, 1, tile);
            for (const s of [-1, 1]) box(s * 8, 8, 1, 1, tile);
            break;
          }
          case "bmtVictory": {
            // Buôn Ma Thuột Victory Monument: a T-54 tank (no. 980) high on a pale concrete pedestal with sculpted
            // reliefs, in the middle of the city's main roundabout. Drawn from memory, no photo.
            const P = (a) => css(e.sh(a)),
              con = P([214, 208, 194]),
              conLt = P([236, 232, 220]),
              conSh = P([166, 160, 148]),
              olive = P([92, 104, 64]),
              oliveDk = P([62, 72, 46]),
              oliveLt = P([124, 136, 88]);
            box(-7, 3, 15, 3, conSh);
            box(-7, 3, 15, 1, con);
            box(-5, 21, 11, 18, con);
            box(-5, 21, 1, 18, conLt);
            box(4, 21, 2, 18, conSh);
            for (const r of [7, 11, 15]) box(-3, r, 6, 3, conSh); // the reliefs
            box(-6, 22, 13, 1, conLt);
            // the tank: tracks, hull, turret and gun
            box(-6, 24, 12, 2, oliveDk);
            for (let p = -5; p <= 4; p += 2) box(p, 23, 1, 1, P([40, 44, 34]));
            box(-5, 26, 11, 2, olive);
            box(-5, 26, 11, 1, oliveLt);
            box(-3, 28, 6, 2, olive);
            box(-2, 29, 4, 1, oliveLt);
            box(3, 28, 6, 1, oliveDk); // the gun
            box(-1, 31, 1, 2, P([200, 40, 36])); // the flag
            box(0, 31, 2, 1, P([210, 50, 40]));
            break;
          }
          case "longXuyenCathedral": {
            // Long Xuyên Cathedral (1973): a broad white modern church under a low-pitched roof, and its very tall
            // bell tower of two tapering concrete blades, like hands joined in prayer, holding a globe and a cross.
            // Drawn from memory, no photo.
            const P = (a) => css(e.sh(a)),
              white = P([236, 232, 222]),
              lit = P([250, 248, 240]),
              shade = P([180, 176, 168]),
              dark = P([70, 64, 76]),
              roof = P([150, 92, 74]);
            box(-9, 9, 19, 9, white);
            box(9, 9, 1, 9, shade);
            for (let p = -7; p <= 7; p += 3) box(p, 7, 1, 4, P([110, 140, 180])); // tall glass windows
            box(-1, 4, 3, 4, dark);
            cone(0, 9, 10, 4, roof);
            // the tower: two blades narrowing upwards, an open slot between them
            for (let i = 1; i <= 44; i++) {
              const hw = Math.max(1, Math.round(3 - (2 * i) / 44));
              box(-hw, i + 13, 2 * hw + 1, 1, white);
              box(hw, i + 13, 1, 1, shade);
              if (i < 39 && hw > 1) box(0, i + 13, 1, 1, i > 6 ? dark : white);
              box(-hw, i + 13, 1, 1, lit);
            }
            orb(0, 60, 1.5, P([110, 150, 196])); // the globe
            box(0, 64, 1, 3, lit); // the cross
            box(-1, 63, 3, 1, lit);
            break;
          }
          case "phanThietWaterTower": {
            // Phan Thiết Water Tower (1934): a tall cream shaft with pilasters, the water tank at the top under
            // three stacked pagoda roofs of red tile with upturned corners and a finial.
            const P = (a) => css(e.sh(a)),
              cream = P([232, 214, 170]),
              lit = P([248, 236, 200]),
              shade = P([188, 168, 126]),
              tile = P([186, 70, 52]),
              tileDk = P([130, 48, 40]),
              dark = P([70, 58, 60]);
            box(-6, 3, 13, 3, shade);
            box(-6, 3, 13, 1, cream);
            box(-4, 17, 9, 14, cream);
            box(-4, 17, 1, 14, lit);
            box(3, 17, 2, 14, shade);
            for (const r of [8, 13]) box(0, r, 1, 2, dark);
            box(-1, 6, 3, 3, dark);
            box(-5, 18, 11, 1, lit);
            box(-5, 22, 11, 4, cream); // the tank
            box(4, 22, 1, 4, shade);
            for (const p of [-3, 0, 3]) box(p, 21, 1, 2, dark);
            let b = 22;
            for (const [hw, th] of [
              [8, 2],
              [6, 3],
              [4, 3],
            ]) {
              box(-hw, b + 1, 2 * hw + 1, 1, tile);
              box(-hw + 1, b + 1, 2 * hw - 1, 1, tileDk);
              box(-hw + 1, b + 2, 2 * hw - 1, 1, tile);
              for (const s of [-1, 1]) box(s * (hw + 1), b + 2, 1, 1, tile);
              if (th > 2) box(-hw + 3, b + th, 2 * hw - 5, th - 2, cream);
              b += th;
            }
            cone(0, b, 2, 2, tile);
            box(0, b + 4, 1, 2, P([220, 180, 80]));
            break;
          }
