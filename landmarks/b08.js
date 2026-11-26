          case "duomoMilano": {
            // Milan Cathedral from the piazza: the white marble front, its gable stepping up to the centre between
            // six buttresses that rise into pinnacles, five doors under tall windows, the forest of spires along the
            // roof behind and the tiburio with the great spire carrying the gilded Madonnina.
            const sh = chShade(c, 0.22),
              dk = chShade(c, 0.45),
              lit = chLit(c, 0.45);
            box(-17, 23, 35, 5, sh); // the roof behind the front, bristling with spires
            for (let p = -17; p <= 17; p += 2) {
              const hh = 27 + (Math.abs(p) % 4 === 1 ? 2 : 0);
              box(p, hh, 1, hh - 23, sh);
            }
            box(-3, 34, 7, 11, sh); // the tiburio
            for (const p of [-3, 3]) box(p, 37, 1, 3, sh);
            for (const p of [-1, 1]) box(p, 32, 1, 4, dk);
            cone(0, 34, 2, 11, sh);
            box(0, 47, 1, 2, 12); // the Madonnina
            box(-1, 46, 3, 1, 12);
            const top = (p) => 17 + Math.max(0, Math.round((13 - Math.abs(p)) * 0.8));
            for (let p = -20; p <= 20; p++) {
              box(p, top(p), 1, top(p), c);
              box(p, top(p), 1, 1, lit);
            }
            box(-20, 1, 41, 1, sh);
            box(-20, 9, 41, 1, lit); // the balcony line over the doors
            for (const [dx, w, h] of [
              [0, 5, 7],
              [-9, 3, 5],
              [9, 3, 5],
              [-16, 3, 5],
              [16, 3, 5],
            ]) {
              const k = Math.floor(w / 2);
              box(dx - k, h, w, h, 2);
              cone(dx, h, k + 1, 2, lit);
              // the tall gothic window over each door
              box(dx - (w > 3 ? 1 : 0), h + 12, w > 3 ? 3 : 1, w > 3 ? 8 : 5, dk);
              if (w > 3) box(dx, h + 12, 1, 8, lit);
            }
            for (const px of [-20, -13, -6, 5, 12, 19]) {
              const pt = top(px + 1) + 5;
              box(px, pt, 2, pt, c);
              box(px, pt, 1, pt - 1, lit);
              box(px + 1, pt, 1, pt, sh);
              box(px, pt + 4, 1, 4, c); // the pinnacle and its statue
              box(px, pt + 5, 1, 1, lit);
            }
            break;
          }
          case "unicredit": {
            // UniCredit Tower, Milan: the tall glass tower whose crown curls up on one side into the steel spire, and
            // a lower sister tower beside it on its podium.
            const gl = chLit(11, 0.15),
              gs = chShade(11, 0.3),
              band = chLit(11, 0.45);
            box(-8, 22, 5, 22, gs); // the lower tower behind
            for (let r = 3; r < 21; r += 3) box(-8, r, 4, 1, chShade(11, 0.1));
            box(-4, 32, 9, 32, gl);
            for (let r = 4; r < 32; r += 3) box(-4, r, 9, 1, band);
            box(2, 32, 3, 32, gs);
            // the crown: its left edge curves up to the spire on the right
            for (let j = 1; j <= 9; j++) {
              const l = -4 + Math.round(6 * Math.sqrt(j / 9));
              box(l, 32 + j, 4 - l + 1, 1, j % 3 === 0 ? band : gl);
              box(Math.max(l, 2), 32 + j, 4 - Math.max(l, 2) + 1, 1, gs);
            }
            box(3, 55, 1, 14, 6); // the spire
            box(-4, 2, 9, 2, 2); // the lobby
            break;
          }
          case "ghirlandina": {
            // The Ghirlandina, Modena: the white marble Romanesque tower in five storeys marked by arched cornices,
            // its windows widening from slits to triple arches, the octagonal belfry between two balustrades
            // ("garlands") with corner pinnacles, and the tall octagonal spire.
            const sh = chShade(c, 0.25),
              dk = chShade(c, 0.5),
              lit = chLit(c, 0.45);
            box(-4, 37, 9, 37, c);
            box(-4, 37, 1, 37, lit);
            box(3, 37, 2, 37, sh);
            for (const r of [8, 15, 22, 29, 37]) {
              box(-5, r, 11, 1, lit);
              for (let p = -3; p <= 3; p += 2) box(p, r - 1, 1, 1, sh); // the little hanging arches
            }
            box(0, 12, 1, 2, 2);
            for (const p of [-1, 1]) box(p, 20, 1, 3, 2);
            for (const p of [-2, 0, 2]) box(p, 27, 1, 3, 2);
            for (const p of [-2, 0, 2]) box(p, 35, 1, 4, 2);
            box(-3, 44, 7, 6, c); // the octagonal belfry
            box(2, 44, 2, 6, sh);
            for (const p of [-2, 0, 2]) box(p, 43, 1, 3, 2);
            for (const r of [39, 45]) box(-4, r, 9, 1, lit);
            for (const p of [-4, 4]) {
              box(p, 47, 1, 8, p < 0 ? lit : sh);
              box(p, 48, 1, 1, lit);
            }
            cone(0, 45, 3, 14, c);
            for (let j = 0; j < 14; j++) {
              const k = Math.round(3 * (1 - j / 14));
              if (k > 0) box(1, 46 + j, k, 1, sh);
            }
            box(0, 61, 1, 2, 12);
            box(-1, 1, 1, 1, dk);
            break;
          }
          case "duomoModena": {
            // Modena Cathedral (Romanesque, white stone): the tall central gable between two strong pilasters, the
            // gallery of little triple arches running across the front, the rose window, the porch on its lions
            // and the lower side doors.
            const sh = chShade(c, 0.25),
              dk = chShade(c, 0.5),
              lit = chLit(c, 0.45),
              rc = chShade(1, 0.1);
            const top = (p) =>
              Math.abs(p) <= 5
                ? 25 - Math.round(Math.abs(p) * 0.9)
                : 16 - Math.round((Math.abs(p) - 5) * 0.4);
            for (let p = -12; p <= 12; p++) {
              box(p, top(p), 1, top(p), c);
              box(p, top(p), 1, 1, lit);
            }
            box(9, 13, 4, 13, sh);
            for (const p of [-6, 5]) box(p, top(p) - 1, 2, top(p) - 1, p < 0 ? lit : sh); // pilasters
            box(-12, 13, 25, 1, lit); // the gallery of triple arches
            for (let p = -11; p <= 11; p += 2) if (Math.abs(p) > 1 || true) box(p, 12, 1, 2, dk);
            orb(0, 18, 2.5, lit); // the rose window
            orb(0, 18, 1.5, 2);
            box(0, 18, 1, 1, lit);
            for (const p of [-3, 3]) box(p, 7, 1, 7, lit); // the porch, its columns on lions
            box(-4, 9, 9, 2, c);
            cone(0, 9, 4, 3, rc);
            box(-1, 6, 3, 6, 2);
            for (const p of [-9, 8]) box(p, 5, 2, 5, 2);
            for (const p of [-12, 12]) box(p, top(p) + 3, 1, 3, p < 0 ? lit : sh); // corner turrets
            box(-12, 1, 25, 1, sh);
            break;
          }
          case "castelNuovo": {
            // Castel Nuovo (Maschio Angioino), Naples: dark tuff walls and four great round towers on battered
            // bases with machicolated crenels; between the two middle towers the white marble Aragonese triumphal
            // arch, two arches stacked with a relief frieze between, crowned by its lunette and Saint Michael.
            const tuf = [126, 112, 104],
              st = css(e.sh(tuf)),
              sh = css(e.sh(mixc(tuf, [41, 40, 54], 0.3))),
              lit = css(e.sh(mixc(tuf, [255, 248, 225], 0.25))),
              mb = 6;
            box(-18, 15, 37, 15, st);
            for (let p = -18; p <= 18; p += 2) box(p, 16, 1, 1, st);
            box(-18, 14, 37, 1, sh);
            for (const tx of [-14, -6, 6, 14]) {
              box(tx - 4, 5, 9, 5, st); // battered base
              box(tx - 4, 5, 9, 1, lit);
              box(tx - 3, 22, 7, 22, st);
              box(tx - 3, 21, 1, 16, lit);
              box(tx + 2, 21, 2, 20, sh);
              box(tx - 4, 22, 9, 2, st); // machicolations
              for (let p = tx - 3; p <= tx + 3; p += 2) box(p, 20, 1, 1, sh);
              for (let p = tx - 4; p <= tx + 4; p += 2) box(p, 23, 1, 1, st);
              box(tx, 15, 1, 2, 2);
            }
            // the triumphal arch
            box(-3, 23, 7, 23, mb);
            box(2, 22, 1, 22, chShade(mb, 0.2));
            box(-1, 8, 3, 7, 2);
            dome(0, 8, 1.5, 2);
            for (const p of [-3, 3]) box(p, 9, 1, 9, chShade(mb, 0.15));
            for (let p = -3; p <= 3; p++) box(p, 12, 1, 2, p % 2 ? chShade(mb, 0.3) : chLit(mb, 0.3)); // frieze
            box(-1, 18, 3, 4, 2);
            dome(0, 18, 1.5, 2);
            box(-3, 20, 7, 1, chLit(mb, 0.3));
            dome(0, 23, 3, mb);
            for (const p of [-2, 2]) box(p, 25, 1, 2, chLit(mb, 0.2));
            box(0, 27, 1, 2, chLit(mb, 0.2));
            box(-18, 1, 37, 1, sh);
            break;
          }
          case "galleriaUmberto": {
            // Galleria Umberto I, Naples: the cream facade on Via San Carlo with its great entrance arch, paired
            // pilasters in two orders, a statue-lined attic, and the iron-ribbed glass dome with its lantern behind.
            const wall = [226, 204, 176],
              wl = css(e.sh(wall)),
              sh = css(e.sh(mixc(wall, [41, 40, 54], 0.25))),
              lit = css(e.sh(mixc(wall, [255, 248, 225], 0.4))),
              glass = css(e.sh([176, 204, 210])),
              rib = css(e.sh([92, 98, 108]));
            const R = 8,
              rim = (p) => Math.round(Math.sqrt(R * R - p * p));
            dome(0, 15, R, glass); // the glass dome
            for (const dy of [3, 6]) box(-rim(dy), 15 + dy, 2 * rim(dy) + 1, 1, rib);
            for (const p of [-6, -3, 0, 3, 6]) box(p, 15 + rim(p), 1, rim(p), rib);
            box(-1, 25, 3, 2, glass); // the lantern
            box(0, 27, 1, 2, rib);
            box(-14, 14, 29, 14, wl);
            box(-14, 1, 29, 1, sh);
            box(-14, 6, 29, 1, lit);
            box(-15, 14, 31, 1, lit); // cornice
            for (let p = -13; p <= 13; p += 3) box(p, 16, 1, 2, lit); // attic statues
            for (const s of [-1, 1]) {
              for (const d of [5, 7, 11, 13]) box(s * d, 13, 1, 13, d % 2 ? lit : sh); // paired pilasters
              for (const d of [9]) {
                box(s * d, 4, 1, 3, 2);
                box(s * d, 11, 1, 3, 2);
              }
            }
            box(-4, 13, 9, 13, lit); // the entrance arch
            dome(0, 9, 4, lit);
            box(-3, 9, 7, 9, glass);
            dome(0, 9, 3, glass);
            for (const p of [-2, 0, 2]) box(p, 11, 1, 11, rib);
            box(13, 13, 2, 12, sh);
            break;
          }
          case "sanGaudenzio": {
            // San Gaudenzio, Novara: Antonelli's soaring cupola over the brick basilica, two colonnaded drums, the
            // ribbed dome, a lantern of stacked colonnades and the needle with the statue of the Saviour on top.
            const pale = [214, 204, 184],
              st = css(e.sh(pale)),
              sh = css(e.sh(mixc(pale, [41, 40, 54], 0.3))),
              dk = css(e.sh(mixc(pale, [41, 40, 54], 0.55))),
              lit = css(e.sh(mixc(pale, [255, 248, 225], 0.4))),
              br = chShade(1, 0.05);
            box(-7, 12, 15, 12, br); // the basilica
            cone(0, 12, 7, 3, chShade(1, 0.3));
            box(-1, 5, 3, 5, 2);
            for (const p of [-5, 4]) box(p, 9, 1, 3, 2);
            const tier = (hw, b, h) => {
              box(-hw, b + h, 2 * hw + 1, h, st);
              for (let p = -hw + 1; p < hw; p += 2) box(p, b + h - 1, 1, h - 2, dk);
              box(hw - 1, b + h, 2, h, sh);
              box(-hw - 1, b + h, 2 * hw + 3, 1, lit);
            };
            tier(6, 12, 8);
            tier(5, 20, 7);
            cone(0, 27, 5, 9, st); // the dome
            for (let j = 0; j < 9; j++) {
              const k = Math.round(5 * (1 - j / 9));
              if (k > 0) box(1, 28 + j, k, 1, sh);
              if (k > 2) box(-Math.round(k / 2), 28 + j, 1, 1, dk);
            }
            tier(3, 36, 6);
            tier(2, 42, 5);
            tier(1, 47, 4);
            cone(0, 51, 1, 7, st);
            box(0, 61, 1, 3, 12); // the Saviour
            box(-1, 60, 3, 1, 12);
            break;
          }
          case "ilSanto": {
            // Basilica of Saint Anthony, Padua: the brick gabled front with its four great blind arches and
            // loggia, the lead domes behind it in Byzantine fashion with their little lanterns, the conical
            // central dome, and the two slender minaret-like bell towers.
            const sh = chShade(c, 0.3),
              lit = chLit(c, 0.35),
              lead = [150, 156, 164],
              ld = css(e.sh(lead)),
              lds = css(e.sh(mixc(lead, [41, 40, 54], 0.3)));
            for (const p of [-15, 15]) {
              box(p - 1, 34, 3, 34, c); // the bell towers
              box(p + 1, 33, 1, 33, sh);
              for (let r = 6; r < 32; r += 6) box(p, r, 1, 2, 2);
              box(p - 1, 39, 3, 5, ld);
              box(p, 38, 1, 3, 2);
              cone(p, 39, 1, 8, ld);
              box(p, 49, 1, 2, 3);
            }
            for (const [dx, b, r] of [
              [-6, 24, 4],
              [6, 24, 4],
              [-9, 20, 4],
              [9, 20, 4],
            ]) {
              dome(dx, b, r, ld);
              box(dx + 1, b + r - 1, r - 1, 1, lds);
              box(dx, b + r + 2, 1, 2, ld); // the little lantern
              box(dx, b + r + 3, 1, 1, 3);
            }
            box(-3, 29, 7, 5, c); // the conical central dome on its drum
            cone(0, 29, 3, 10, ld);
            box(0, 41, 1, 2, 3);
            const top = (p) => 17 + Math.max(0, 11 - Math.abs(p));
            for (let p = -11; p <= 11; p++) {
              box(p, top(p), 1, top(p), c);
              box(p, top(p), 1, 1, lit);
            }
            box(8, 18, 4, 18, sh);
            for (const p of [-9, -3, 3, 9]) {
              box(p - 2, 11, 5, 1, lit); // the four great blind arches
              box(p - 2, 10, 1, 9, lit);
              box(p + 2, 10, 1, 9, lit);
            }
            box(-1, 7, 3, 7, 2);
            box(-11, 15, 23, 1, lit); // the loggia
            for (let p = -10; p <= 10; p += 2) box(p, 14, 1, 2, 2);
            orb(0, 21, 2, 2);
            for (const p of [-11, 0, 11]) box(p, top(p) + 3, 1, 3, lit);
            break;
          }
          case "palermoCathedral": {
            // Palermo Cathedral from the south: the long golden-stone flank with its Arab-Norman fringe of merlons,
            // the Catalan Gothic porch, the ribbed neoclassical dome among small cupolas, slender corner turrets,
            // and the west bell tower with its clock, joined to the church by arches over the street.
            const sh = chShade(c, 0.3),
              dk = chShade(c, 0.55),
              lit = chLit(c, 0.35),
              dm = [124, 150, 140],
              dmc = css(e.sh(dm)),
              dms = css(e.sh(mixc(dm, [41, 40, 54], 0.3)));
            box(-16, 14, 29, 14, c);
            box(-16, 1, 29, 1, sh);
            for (let p = -16; p <= 12; p += 2) box(p, 16, 1, 2, c); // the merlons
            for (let p = -15; p <= 11; p += 2) box(p, 12, 1, 3, p % 4 === 1 ? dk : sh);
            box(-4, 21, 9, 6, c); // the drum and dome
            for (const p of [-3, -1, 1, 3]) box(p, 19, 1, 2, dk);
            dome(0, 21, 4.5, dmc);
            for (const p of [-2, 2]) box(p, 25, 1, 4, dms);
            box(-1, 27, 3, 2, c);
            box(0, 29, 1, 2, 3);
            for (const dx of [-9, 8]) {
              dome(dx, 16, 2, dmc);
              box(dx, 19, 1, 1, 3);
            }
            for (const tx of [-17, 12]) {
              box(tx, 24, 3, 24, c); // the corner turrets
              box(tx + 2, 23, 1, 22, sh);
              box(tx + 1, 20, 1, 2, dk);
              cone(tx + 1, 24, 1, 4, c);
            }
            box(-6, 10, 13, 10, lit); // the porch with three pointed arches
            for (const p of [-4, 0, 4]) {
              box(p - 1, 7, 3, 7, 2);
              box(p, 8, 1, 1, 2);
            }
            cone(0, 10, 6, 3, c);
            for (const p of [-6, 6]) box(p, 14, 1, 4, lit);
            box(15, 31, 5, 31, c); // the bell tower
            box(19, 30, 1, 29, sh);
            for (let r = 8; r < 24; r += 6) box(17, r, 1, 2, dk);
            orb(17, 26, 1.5, 6);
            box(17, 26, 1, 1, 2);
            box(16, 36, 3, 5, c);
            for (const p of [15, 19]) {
              box(p, 34, 1, 3, lit);
              box(p, 35, 1, 1, 3);
            }
            cone(17, 36, 1, 4, c);
            box(13, 17, 2, 5, c); // the arches over the street
            box(13, 13, 2, 1, sh);
            break;
          }
          case "teatroMassimo": {
            // Teatro Massimo, Palermo: the great flight of steps, the Corinthian portico of six columns under its
            // pediment, the wings with arched windows, and the low ribbed dome on its drum behind.
            const sh = chShade(c, 0.28),
              lit = chLit(c, 0.4),
              dm = [150, 146, 140],
              dmc = css(e.sh(dm)),
              dms = css(e.sh(mixc(dm, [41, 40, 54], 0.3)));
            box(-9, 23, 19, 6, c); // the drum
            for (let p = -8; p <= 8; p += 2) box(p, 21, 1, 3, sh);
            dome(0, 23, 8, dmc);
            for (const p of [-5, -2, 2, 5]) {
              const k = Math.round(Math.sqrt(64 - p * p));
              box(p, 23 + k, 1, k, dms);
            }
            box(-1, 33, 3, 2, c);
            box(0, 35, 1, 2, 3);
            box(-16, 16, 33, 13, c); // the wings
            box(-16, 16, 33, 1, lit);
            box(-17, 17, 35, 1, lit);
            for (const s of [-1, 1])
              for (const d of [10, 13]) {
                box(s * d, 13, 1, 4, 2);
                box(s * d, 8, 1, 3, 2);
              }
            box(13, 16, 3, 13, sh);
            box(-7, 15, 15, 12, sh); // the portico
            for (let p = -6; p <= 6; p += 2.4) box(Math.round(p), 15, 1, 11, lit);
            box(-7, 16, 15, 1, lit);
            cone(0, 16, 8, 4, c);
            box(-2, 18, 5, 1, sh);
            stack(
              0,
              [
                [27, 1],
                [21, 1],
                [17, 1],
              ],
              c,
            );
            for (const p of [-9, 9]) box(p, 5, 2, 2, chShade(1, 0.4)); // the bronze lions
            box(-1, 10, 3, 6, 2);
            break;
          }
          case "nuoroCathedral": {
            // Santa Maria della Neve, Nuoro: the pale neoclassical front with four pilasters under a pediment,
            // between two bell towers capped by little domed lanterns.
            const sh = chShade(c, 0.28),
              dk = chShade(c, 0.55),
              lit = chLit(c, 0.4);
            box(-7, 17, 15, 17, c);
            box(-8, 17, 17, 1, lit);
            cone(0, 17, 8, 5, c);
            box(-1, 20, 3, 1, sh);
            for (const p of [-5, -2, 2, 5]) box(p, 16, 1, 15, lit);
            box(-1, 6, 3, 6, 2);
            dome(0, 6, 1.5, 2);
            box(-1, 12, 3, 3, dk);
            for (const p of [-4, 4]) box(p, 11, 1, 3, dk);
            for (const tx of [-10, 10]) {
              box(tx - 2, 24, 5, 24, c);
              box(tx + 2, 23, 1, 23, sh);
              box(tx - 3, 24, 7, 1, lit);
              for (const r of [9, 16]) box(tx, r, 1, 2, dk);
              box(tx - 1, 22, 3, 3, 2); // the belfry arch
              box(tx, 21, 1, 1, 12);
              box(tx - 1, 27, 3, 3, c);
              dome(tx, 27, 2, sh);
              box(tx, 30, 1, 2, 3);
            }
            box(-12, 1, 25, 1, sh);
            break;
          }
          case "torreMariano": {
            // Torre di Mariano II, Oristano: the square sandstone gate tower with its tall arch at the foot, a few
            // slits, crenels, and the little open bell cage on top.
            const st = [184, 168, 146],
              s = css(e.sh(st)),
              sh = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.3)));
            box(-5, 25, 11, 25, s);
            box(-5, 25, 1, 25, lit);
            box(3, 25, 3, 25, sh);
            for (let r = 4; r < 24; r += 4) box(-5, r, 11, 1, sh);
            box(-2, 8, 5, 8, lit);
            box(-1, 7, 3, 7, 2);
            dome(0, 7, 1.5, 2);
            for (const r of [13, 19]) box(0, r, 1, 2, 2);
            for (let p = -5; p <= 5; p += 2) box(p, 27, 1, 2, s);
            box(-2, 32, 5, 6, s); // the bell cage
            box(2, 32, 1, 6, sh);
            box(-1, 31, 3, 4, 2);
            box(0, 29, 1, 2, 12);
            box(-3, 33, 7, 1, lit);
            break;
          }
          case "oristanoBells": {
            // The bell tower of Oristano Cathedral: a square stone base, an octagonal shaft with arched windows,
            // and the onion dome covered in green and yellow majolica tiles.
            const st = [196, 180, 150],
              s = css(e.sh(st)),
              sh = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              tile = css(e.sh([92, 150, 118])),
              gold = css(e.sh([226, 190, 80]));
            box(-4, 18, 9, 18, s);
            box(2, 18, 3, 18, sh);
            box(-5, 18, 11, 1, lit);
            box(0, 9, 1, 3, 2);
            box(-3, 34, 7, 16, s);
            box(-3, 34, 1, 16, lit);
            box(2, 34, 2, 16, sh);
            for (const r of [25, 32]) {
              box(-1, r, 3, 3, 2);
              box(-4, r + 2, 9, 1, lit);
            }
            box(-3, 36, 7, 2, s);
            bulb(0, 36, 3, tile);
            for (const r of [39, 42]) box(-2, r, 5, 1, gold);
            break;
          }
          case "duomoParma": {
            // Parma Cathedral with its campanile: the Romanesque sandstone front, two galleries of little arches
            // and a third climbing the gable, the porch on two lions, the octagonal dome behind, and the Gothic
            // brick bell tower with its spire and gilded angel.
            const sh = chShade(c, 0.28),
              dk = chShade(c, 0.55),
              lit = chLit(c, 0.4),
              br = 1;
            box(-9, 26, 8, 10, sh); // the octagonal dome on its drum
            for (const p of [-8, -6, -4]) box(p, 25, 1, 2, dk);
            dome(-5, 26, 4, chShade(c, 0.35));
            box(-5, 31, 1, 2, lit);
            const top = (p) => 14 + Math.round((10 - Math.abs(p)) * 0.8);
            for (let p = -10; p <= 10; p++) {
              box(p, top(p), 1, top(p), c);
              box(p, top(p), 1, 1, lit);
              if (Math.abs(p) < 9 && p % 2 === 0) box(p, top(p) - 1, 1, 2, dk); // the climbing gallery
            }
            for (const r of [9, 14]) {
              box(-10, r, 21, 1, lit);
              for (let p = -9; p <= 9; p += 2) box(p, r - 1, 1, 2, dk);
            }
            for (const p of [-7, 7]) box(p, 13, 1, 12, lit);
            box(8, 13, 3, 13, sh);
            for (const p of [-2, 2]) box(p, 6, 1, 6, lit);
            cone(0, 6, 3, 2, c);
            box(-1, 5, 3, 5, 2);
            for (const p of [-5, 5]) box(p, 4, 1, 4, 2);
            box(-10, 1, 21, 1, sh);
            box(12, 34, 5, 34, br); // the campanile
            box(16, 33, 1, 33, chShade(br, 0.3));
            box(12, 34, 1, 33, chLit(br, 0.2));
            for (const r of [10, 17, 24]) box(12, r, 5, 1, chLit(br, 0.25));
            for (const p of [13, 15]) box(p, 31, 1, 4, 2);
            box(11, 35, 7, 1, chLit(br, 0.3));
            cone(14, 35, 2, 12, br);
            box(14, 49, 1, 2, 12);
            break;
          }
          case "battisteroParma": {
            // The Baptistery of Parma: an octagon of pink Verona marble, arched portals at the foot, four tiers of
            // little galleries on slender columns above, a blind arcade under the roof and a pinnacle at each angle.
            const m = [226, 180, 164],
              s = css(e.sh(m)),
              sh = css(e.sh(mixc(m, [41, 40, 54], 0.28))),
              dk = css(e.sh(mixc(m, [41, 40, 54], 0.55))),
              lit = css(e.sh(mixc(m, [255, 248, 225], 0.4)));
            box(-6, 26, 13, 26, s);
            box(-6, 26, 3, 26, lit);
            box(4, 26, 3, 26, sh);
            box(-1, 7, 3, 7, 2); // the portal
            dome(0, 7, 1.5, 2);
            for (const p of [-5, 5]) box(p, 6, 1, 4, dk);
            for (const b of [10, 14, 18, 22]) {
              box(-7, b, 15, 1, lit);
              for (let p = -6; p <= 6; p += 2) box(p, b + 2, 1, 2, p < -3 || p > 3 ? sh : dk);
            }
            box(-7, 26, 15, 1, lit);
            for (let p = -5; p <= 5; p += 2) box(p, 25, 1, 1, sh);
            for (const p of [-6, -3, 3, 6]) {
              box(p, 30, 1, 4, s);
              box(p, 31, 1, 1, lit);
            }
            box(-2, 28, 5, 2, sh); // the low roof and lantern
            box(0, 30, 1, 2, lit);
            box(-6, 1, 13, 1, sh);
            break;
          }
          case "duomoPavia": {
            // Pavia Cathedral: the brick front with its gabled centre and lower side parts, marble door frames, and
            // the great octagonal dome on a drum ringed by a gallery, with its lantern.
            const sh = chShade(c, 0.28),
              dk = chShade(c, 0.55),
              lit = chLit(c, 0.3),
              mb = 6;
            box(-9, 32, 19, 12, c); // the drum
            box(-10, 32, 21, 1, lit);
            for (let p = -8; p <= 8; p += 2) box(p, 30, 1, 3, dk);
            box(-9, 24, 19, 1, lit);
            box(5, 31, 5, 11, sh);
            for (let j = 0; j < 9; j++) {
              const k = Math.round(9 * Math.sqrt(1 - (j / 9) ** 2));
              box(-k, 33 + j, 2 * k + 1, 1, c);
              if (k > 1) box(Math.round(k / 2), 33 + j, Math.ceil(k / 2) + 1, 1, sh);
              if (k > 3) for (const r of [-Math.round(k / 2), 0]) box(r, 33 + j, 1, 1, lit);
            }
            box(-1, 44, 3, 3, c); // the lantern
            box(1, 44, 1, 3, sh);
            dome(0, 44, 1.5, c);
            box(0, 47, 1, 2, 3);
            const top = (p) => (Math.abs(p) <= 7 ? 21 + Math.round((7 - Math.abs(p)) * 0.7) : 17);
            for (let p = -12; p <= 12; p++) {
              box(p, top(p), 1, top(p), c);
              box(p, top(p), 1, 1, lit);
            }
            for (const p of [-7, 7]) box(p, 20, 1, 20, p < 0 ? lit : sh);
            box(8, 16, 5, 16, sh);
            box(-12, 7, 25, 7, chLit(mb, 0.1)); // the marble base storey
            box(-12, 1, 25, 1, chShade(mb, 0.25));
            for (const [p, w] of [
              [0, 3],
              [-10, 1],
              [-4, 1],
              [4, 1],
              [10, 1],
            ]) {
              box(p - (w > 1 ? 1 : 0), 5, w, 4, 2);
            }
            orb(0, 15, 2, dk);
            for (const p of [-4, 4]) box(p, 14, 1, 3, dk);
            break;
          }
          case "ponteCoperto": {
            // Ponte Coperto, Pavia: five brick arches on the Ticino carrying a covered gallery under a red tiled
            // roof, open between its pillars, with the little chapel at the middle.
            const sh = chShade(c, 0.3),
              lit = chLit(c, 0.25),
              tile = css(e.sh([176, 84, 64])),
              tileS = css(e.sh([140, 66, 54]));
            for (let p = -21; p <= 21; p++) {
              const q = ((p + 21) % 9) - 4; // offset from the nearest arch centre
              const a = Math.abs(q) >= 4 ? 0 : Math.round(5 * Math.sqrt(1 - (q / 4.2) ** 2));
              box(p, 7, 1, 7 - a, c);
              if (a > 0) box(p, a + 1, 1, 1, lit);
            }
            box(-21, 7, 43, 1, lit);
            box(-21, 10, 43, 3, sh); // the gallery
            for (let p = -21; p <= 21; p += 3) box(p, 10, 1, 3, c);
            box(-21, 12, 43, 2, tile);
            box(-20, 12, 41, 1, tileS);
            box(-2, 15, 5, 7, c); // the chapel
            box(-1, 12, 3, 3, 2);
            cone(0, 15, 3, 2, tile);
            box(0, 18, 1, 1, 3);
            break;
          }
          case "palazzoPriori": {
            // Palazzo dei Priori, Perugia: the pale stone Gothic palace with square Guelph crenels, two rows of
            // triple-arched windows, the portal at the top of its fan of steps, and the bell tower at the corner.
            const sh = chShade(c, 0.28),
              dk = chShade(c, 0.6),
              lit = chLit(c, 0.35);
            box(-15, 23, 4, 23, c); // the tower
            box(-12, 22, 1, 22, sh);
            box(-14, 21, 2, 3, 2);
            box(-13, 20, 1, 1, 12);
            for (const p of [-15, -13, -12]) box(p, 25, 1, 2, c);
            box(-15, 16, 31, 16, c);
            box(13, 16, 3, 16, sh);
            box(-15, 1, 31, 1, sh);
            for (let p = -15; p <= 15; p += 2) box(p, 18, 1, 2, c);
            box(-16, 16, 33, 1, lit);
            for (const r of [9, 14]) box(-15, r - 3, 31, 1, lit);
            for (let p = -12; p <= 12; p += 4)
              for (const r of [9, 14]) for (const d of [-1, 0, 1]) box(p + d, r, 1, d ? 2 : 3, dk);
            box(-3, 5, 5, 5, lit); // the portal and the fan of steps
            box(-2, 4, 3, 4, 2);
            stack(
              0,
              [
                [13, 1],
                [9, 1],
              ],
              chShade(c, 0.15),
            );
            break;
          }
          case "arcoEtrusco": {
            // The Etruscan Arch, Perugia: the great travertine gate between two massive tapering towers, its arch of
            // radiating blocks, a frieze of shields and a blind arch above, and the Renaissance loggia on the left
            // tower.
            const st = [184, 168, 142],
              s = css(e.sh(st)),
              sh = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              dk = css(e.sh(mixc(st, [41, 40, 54], 0.55))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.3)));
            for (const k of [-1, 1])
              for (let r = 1; r <= 24; r++) {
                const w = r < 12 ? 7 : 6;
                box(k < 0 ? -11 + (7 - w) : 5, r, w, 1, k > 0 ? sh : s);
                if (r % 3 === 0) box(k < 0 ? -11 + (7 - w) : 5, r, w, 1, k > 0 ? dk : sh);
              }
            box(-4, 19, 9, 19, s);
            box(-3, 11, 7, 1, lit);
            dome(0, 11, 4, lit); // the voussoirs
            dome(0, 10, 3, 2);
            box(-2, 10, 5, 10, 2);
            for (let p = -4; p <= 4; p++) box(p, 14, 1, 2, p % 2 ? sh : lit); // the shields
            box(-2, 18, 5, 2, dk);
            dome(0, 18, 2, dk);
            box(-4, 19, 9, 1, lit);
            box(-11, 29, 7, 5, s); // the loggia
            for (const p of [-10, -8, -6]) box(p, 28, 1, 3, 2);
            box(-12, 30, 9, 1, chShade(1, 0.2));
            break;
          }
          case "sferaGrande": {
            // Sfera Grande, Pesaro: Arnaldo Pomodoro's polished bronze sphere, torn open along a jagged gash that
            // shows the gear-like works inside, standing in its shallow pool by the sea.
            const bz = [184, 140, 84],
              s = css(e.sh(bz)),
              sh = css(e.sh(mixc(bz, [41, 40, 54], 0.35))),
              dk = css(e.sh(mixc(bz, [41, 40, 54], 0.65))),
              lit = css(e.sh(mixc(bz, [255, 248, 225], 0.5)));
            box(-9, 1, 19, 1, css(e.sh([96, 132, 160]))); // the pool
            orb(0, 8, 6.5, s);
            orb(1, 7, 5.5, sh);
            orb(-1, 9, 5, s);
            orb(-3, 11, 1.5, lit);
            for (let j = -5; j <= 4; j++) {
              const x0 = Math.round(j * 0.6) - 1;
              box(x0, 8 + j, 3, 1, dk); // the gash
              if (j % 2 === 0) box(x0 + 1, 8 + j, 1, 1, 12);
            }
            break;
          }
          case "ponteDelMare": {
            // Ponte del Mare, Pescara: the white cycle and foot bridge across the river mouth, its gently curved
            // deck hung by fans of cables from a single tall slanted pylon.
            const wt = 6;
            const deck = (p) => 3 + Math.round(3 * (1 - (p / 22) ** 2));
            for (let p = -22; p <= 22; p++) {
              box(p, deck(p), 1, 1, wt);
              box(p, deck(p) - 1, 1, 1, chShade(wt, 0.3));
            }
            for (const p of [-18, -10, 10, 18]) box(p, deck(p) - 2, 1, deck(p) - 2, chShade(wt, 0.2));
            for (const p of [-20, -16, -12, -8, -5]) stroke(-1, 22, p, deck(p), 8);
            for (const p of [4, 8, 12, 16, 20]) stroke(1, 22, p, deck(p), 8);
            for (let r = 1; r <= 24; r++) box(Math.round(-2 + r * 0.08), r, r < 20 ? 2 : 1, 1, wt); // the pylon
            break;
          }
          case "palazzoGotico": {
            // Palazzo Gotico (Palazzo Comunale), Piacenza: a marble ground floor of five wide pointed arches, the
            // brick upper floor with great arched windows, swallowtail merlons, corner turrets and the little tower.
            const sh = chShade(c, 0.3),
              lit = chLit(c, 0.3),
              mb = 13,
              mbs = chShade(mb, 0.25);
            box(-1, 19, 3, 3, c); // the little tower
            box(1, 19, 1, 3, sh);
            box(0, 21, 1, 2, c);
            box(-15, 8, 31, 8, mb);
            box(-15, 1, 31, 1, mbs);
            for (let i = -2; i <= 2; i++) {
              const cx = i * 6;
              box(cx - 2, 6, 5, 5, 2);
              box(cx - 1, 7, 3, 1, 2);
              box(cx, 8, 1, 1, 2);
            }
            box(-15, 16, 31, 8, c);
            box(13, 16, 3, 8, sh);
            box(-15, 9, 31, 1, lit);
            for (let p = -12; p <= 12; p += 5) {
              box(p - 1, 14, 3, 4, lit);
              box(p, 13, 1, 3, 2);
            }
            for (let p = -15; p <= 15; p += 2) {
              box(p, 18, 1, 2, c);
              box(p, 18, 1, 1, c);
            }
            for (const p of [-15, 14]) box(p, 19, 2, 3, c);
            break;
          }
          case "duomoPiacenza": {
            // Piacenza Cathedral: the Romanesque sandstone front with its rose window and three porches on lions,
            // a gallery under the gable, and the tall brick campanile beside it with its spire and gilded angel.
            const sh = chShade(c, 0.28),
              dk = chShade(c, 0.55),
              lit = chLit(c, 0.35),
              br = 1;
            box(-13, 34, 5, 34, br); // the campanile
            box(-9, 33, 1, 33, chShade(br, 0.3));
            for (const r of [10, 18, 26]) box(-13, r, 5, 1, chLit(br, 0.25));
            for (const p of [-12, -10]) box(p, 31, 1, 3, 2);
            box(-14, 35, 7, 1, chLit(br, 0.3));
            cone(-11, 35, 2, 12, br);
            box(-11, 49, 1, 2, 12);
            const top = (p) => 15 + Math.round((9 - Math.abs(p)) * 0.8);
            for (let p = -8; p <= 10; p++) {
              const q = p - 1;
              box(p, top(q), 1, top(q), c);
              box(p, top(q), 1, 1, lit);
            }
            box(8, 15, 3, 14, sh);
            box(-8, 14, 19, 1, lit);
            for (let p = -7; p <= 9; p += 2) box(p, 13, 1, 2, dk);
            orb(1, 18, 2.5, lit);
            orb(1, 18, 1.5, dk);
            for (const [p, w, h] of [
              [1, 3, 7],
              [-5, 1, 5],
              [7, 1, 5],
            ]) {
              box(p - Math.floor(w / 2) - 1, h + 1, w + 2, 1, lit);
              cone(p, h + 1, Math.floor(w / 2) + 1, 2, c);
              box(p - Math.floor(w / 2), h, w, h, 2);
            }
            box(-8, 1, 19, 1, sh);
            break;
          }
          case "duomoPisa": {
            // Pisa Cathedral: the white marble front with its blind arcade and three bronze doors, then four tiers of
            // open galleries on slender columns, the lower one full width, the side roofs sloping away, the top ones
            // narrowing into the gable, with statues on the corners and the Madonna on top.
            const sh = chShade(c, 0.25),
              dk = chShade(c, 0.6),
              lit = chLit(c, 0.4),
              band = chShade(c, 0.12);
            for (let p = -12; p <= 12; p++) {
              const h = Math.abs(p) <= 6 ? 23 : 15 + Math.round((12 - Math.abs(p)) * 0.6);
              box(p, h, 1, h, c);
              if (Math.abs(p) > 6) box(p, h, 1, 1, lit);
            }
            for (let r = 3; r < 10; r += 3) box(-12, r, 25, 1, band);
            for (let p = -11; p <= 11; p += 3) box(p, 9, 1, 1, lit); // the blind arcade
            box(-1, 7, 3, 7, 2);
            for (const p of [-6, 6]) box(p, 6, 1, 6, 2);
            for (const [l, w, b] of [
              [-12, 25, 10],
              [-6, 13, 15],
              [-6, 13, 19],
            ]) {
              box(l, b + 1, w, 1, lit);
              for (let p = l + 1; p < l + w - 1; p += 2) box(p, b + 3, 1, 2, dk);
              box(l, b + 4, w, 1, lit);
            }
            cone(0, 23, 6, 5, c); // the gable gallery
            for (let p = -3; p <= 3; p += 2) box(p, 26, 1, 2, dk);
            box(10, 14, 3, 14, sh);
            box(5, 23, 2, 8, sh);
            for (const [p, r] of [
              [-12, 17],
              [12, 17],
              [-6, 25],
              [6, 25],
              [0, 30],
            ])
              box(p, r, 1, 2, lit);
            break;
          }
          case "duomoPistoia": {
            // Pistoia Cathedral: the campanile, plain stone below, then three tiers of green and white marble
            // galleries and a brick belfry with its little spire; beside it the Pisan Romanesque front with its
            // arched porch and galleries of green and white marble.
            const st = 13,
              lit = chLit(6, 0.2),
              green = css(e.sh([72, 112, 92])),
              dk = chShade(6, 0.6),
              br = 1;
            box(-13, 27, 6, 27, st); // the campanile
            box(-8, 27, 1, 27, chShade(st, 0.3));
            for (const r of [9, 17, 24]) box(-11, r, 1, 2, 2);
            for (const b of [27, 31, 35]) {
              box(-13, b + 4, 6, 4, 6);
              for (let p = -12; p <= -9; p += 2) box(p, b + 3, 1, 2, dk);
              box(-13, b + 4, 6, 1, green);
            }
            box(-13, 44, 6, 5, br);
            box(-12, 43, 3, 3, 2);
            for (const p of [-13, -8]) box(p, 46, 1, 2, br);
            cone(-10, 44, 2, 5, green);
            box(-10, 51, 1, 2, 3);
            const top = (p) =>
              Math.abs(p - 2) <= 4
                ? 21 - Math.round(Math.abs(p - 2) * 0.5)
                : 18 - Math.round((Math.abs(p - 2) - 4) * 0.6);
            for (let p = -6; p <= 10; p++) {
              box(p, top(p), 1, top(p), 6);
              box(p, top(p), 1, 1, green);
            }
            box(-6, 8, 17, 8, lit); // the porch
            for (let p = -5; p <= 9; p += 2) box(p, 6, 1, 5, p === 1 ? 2 : chShade(6, 0.4));
            box(1, 6, 1, 5, 2);
            box(-6, 9, 17, 1, green);
            for (const b of [10, 14]) {
              for (let p = -5; p <= 9; p += 2) box(p, b + 3, 1, 2, dk);
              box(-6, b + 4, 17, 1, green);
            }
            box(9, 18, 2, 17, chShade(6, 0.25));
            break;
          }
          case "campanilePordenone": {
            // The campanile of San Marco, Pordenone: a tall red brick shaft with corner strips and arched friezes,
            // a belfry of paired arches, the octagonal lantern and the tall needle spire.
            const sh = chShade(c, 0.3),
              lit = chLit(c, 0.25),
              dk = chShade(c, 0.6);
            box(-3, 44, 7, 44, c);
            box(-3, 44, 1, 44, lit);
            box(2, 44, 2, 44, sh);
            for (const r of [12, 22, 32, 42]) {
              box(-3, r, 7, 1, lit);
              for (let p = -2; p <= 2; p += 2) box(p, r - 1, 1, 1, dk);
            }
            for (const r of [17, 27, 37]) box(0, r, 1, 2, 2);
            box(-3, 50, 7, 6, c);
            for (const p of [-2, 1]) box(p, 49, 2, 4, 2);
            box(0, 47, 1, 1, 12);
            box(-4, 51, 9, 1, lit);
            box(-2, 56, 5, 5, c);
            box(1, 56, 1, 5, sh);
            box(0, 55, 1, 3, 2);
            cone(0, 56, 2, 10, c);
            box(0, 68, 1, 2, 3);
            break;
          }
          case "municipioPordenone": {
            // Palazzo Comunale, Pordenone: the Gothic brick hall over three pointed arches, and its Renaissance stone
            // front with the clock and bell in a little aedicule between two pinnacled turrets.
            const sh = chShade(c, 0.3),
              lit = chLit(c, 0.25),
              st = 13;
            box(-10, 16, 21, 16, c);
            box(8, 16, 3, 16, sh);
            for (const p of [-6, 0, 6]) {
              box(p - 2, 7, 5, 6, 2);
              box(p - 1, 8, 3, 1, 2);
            }
            box(-10, 9, 21, 1, lit);
            for (const p of [-6, 6]) box(p, 14, 1, 3, 2);
            box(-1, 15, 3, 4, chLit(st, 0.2));
            box(-5, 25, 11, 9, st); // the stone front
            box(4, 25, 2, 9, chShade(st, 0.25));
            orb(0, 21, 2, 6);
            box(0, 22, 1, 2, 2);
            box(-2, 28, 5, 3, st);
            box(-1, 28, 3, 2, 2);
            box(0, 27, 1, 1, 12);
            cone(0, 28, 2, 2, st);
            for (const p of [-9, 9]) {
              box(p - 1, 21, 3, 5, st);
              cone(p, 21, 1, 5, st);
              box(p, 27, 1, 1, 3);
            }
            break;
          }
          case "torreGuevara": {
            // Torre Guevara, Potenza: the last round tower of the old castle, a stone drum on a battered foot with a
            // ring of corbels and crenels.
            const st = [188, 176, 156],
              s = css(e.sh(st)),
              sh = css(e.sh(mixc(st, [41, 40, 54], 0.32))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.3)));
            box(-5, 5, 11, 5, s);
            box(-5, 5, 11, 1, lit);
            box(-4, 20, 9, 20, s);
            box(-4, 19, 1, 14, lit);
            box(2, 19, 3, 18, sh);
            box(-5, 21, 11, 2, s);
            for (let p = -4; p <= 4; p += 2) box(p, 19, 1, 1, sh);
            for (let p = -5; p <= 5; p += 2) box(p, 22, 1, 1, s);
            for (const r of [9, 15]) box(0, r, 1, 2, 2);
            box(-1, 3, 2, 3, 2);
            break;
          }
          case "duomoPotenza": {
            // Potenza Cathedral (San Gerardo): the pale neoclassical front with paired pilasters under a pediment
            // and an arched door, and its square bell tower beside it.
            const sh = chShade(c, 0.28),
              dk = chShade(c, 0.6),
              lit = chLit(c, 0.4);
            box(5, 26, 5, 26, c); // the bell tower
            box(9, 25, 1, 25, sh);
            box(4, 27, 7, 1, lit);
            box(6, 24, 3, 4, 2);
            box(7, 22, 1, 1, 12);
            for (const r of [9, 15]) box(7, r, 1, 2, dk);
            cone(7, 27, 2, 2, c);
            box(7, 30, 1, 2, 3);
            box(-8, 15, 13, 15, c);
            box(-9, 15, 15, 1, lit);
            cone(-2, 15, 7, 5, c);
            box(-3, 18, 3, 1, sh);
            for (const p of [-7, -5, 1, 3]) box(p, 14, 1, 13, lit);
            box(-3, 7, 3, 7, 2);
            dome(-2, 7, 1.5, 2);
            box(-3, 12, 3, 2, dk);
            stack(0, [[17, 1]], chShade(c, 0.15));
            break;
          }
          case "sanGiorgioRagusa": {
            // San Giorgio, Ragusa Ibla: Gagliardi's honey-coloured Baroque facade-tower in three tiers of clustered
            // columns, the convex lower storey with its door, the belfry on top under a little onion and spire, and
            // the neoclassical dome on its drum behind.
            const st = [224, 188, 134],
              s = css(e.sh(st)),
              sh = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              dk = css(e.sh(mixc(st, [41, 40, 54], 0.6))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.4))),
              dm = css(e.sh([128, 150, 160]));
            box(-13, 26, 9, 10, s); // the drum and dome
            for (let p = -12; p <= -6; p += 2) box(p, 24, 1, 3, dk);
            dome(-9, 26, 4.5, dm);
            box(-10, 33, 3, 3, s);
            box(-9, 36, 1, 2, 3);
            box(-8, 16, 17, 16, s);
            box(-9, 17, 19, 1, lit);
            for (const p of [-7, -5, -3, 3, 5, 7]) box(p, 15, 1, 14, lit);
            box(6, 15, 3, 15, sh);
            box(-1, 8, 3, 8, 2);
            dome(0, 8, 1.5, 2);
            box(-1, 12, 3, 2, dk);
            box(-5, 29, 11, 12, s);
            for (const k of [-1, 1]) cone(k * 6, 17, 1, 3, s); // volutes
            for (const p of [-4, -2, 2, 4]) box(p, 28, 1, 10, lit);
            box(4, 28, 2, 11, sh);
            box(-1, 25, 3, 5, dk);
            box(-6, 30, 13, 1, lit);
            box(-3, 38, 7, 8, s); // the belfry
            box(-1, 36, 3, 5, 2);
            box(0, 34, 1, 1, 12);
            for (const p of [-3, 3]) box(p, 37, 1, 7, lit);
            box(-4, 39, 9, 1, lit);
            dome(0, 39, 3, s);
            bulb(0, 42, 1, s);
            box(0, 50, 1, 4, 2);
            box(-1, 52, 3, 1, 2);
            break;
          }
          case "torreRavenna": {
            // The round bell tower of Sant'Apollinare Nuovo, Ravenna: a brick cylinder whose windows grow from single
            // to double to triple arches as it rises, ringed by string courses, under a low conical roof.
            const sh = chShade(c, 0.32),
              mid = chShade(c, 0.15),
              lit = chLit(c, 0.25);
            box(-3, 32, 7, 32, c);
            box(-3, 32, 1, 32, lit);
            box(1, 32, 1, 32, mid);
            box(2, 32, 2, 32, sh);
            for (const r of [8, 14, 20, 26]) box(-3, r, 7, 1, lit);
            box(0, 11, 1, 2, 2);
            for (const p of [-1, 1]) box(p, 18, 1, 3, 2);
            for (const p of [-2, 0, 2]) box(p, 24, 1, 3, 2);
            for (const p of [-2, 0, 2]) box(p, 30, 1, 3, 2);
            cone(0, 32, 4, 4, chShade(c, 0.2));
            box(0, 38, 1, 2, 3);
            break;
          }
          case "duomoReggioCalabria": {
            // Reggio Calabria Cathedral: the white neo-Romanesque front, a tall central gable with its rose window
            // and great portal between pinnacle turrets, lower gabled sides, and a broad flight of steps.
            const sh = chShade(c, 0.25),
              dk = chShade(c, 0.55),
              lit = chLit(c, 0.4);
            const top = (p) =>
              Math.abs(p) <= 5
                ? 22 + Math.round((5 - Math.abs(p)) * 0.8)
                : 15 + Math.round((Math.abs(p) > 9 ? 13 - Math.abs(p) : Math.abs(p) - 5) * 0.6);
            for (let p = -13; p <= 13; p++) {
              box(p, top(p), 1, top(p), c);
              box(p, top(p), 1, 1, lit);
            }
            box(11, 16, 3, 15, sh);
            orb(0, 17, 2.5, lit);
            orb(0, 17, 1.5, dk);
            box(-2, 10, 5, 8, lit);
            box(-1, 9, 3, 7, 2);
            box(0, 10, 1, 1, 2);
            for (const p of [-9, 9]) {
              box(p - 1, 8, 3, 6, lit);
              box(p, 7, 1, 5, 2);
              box(p, 14, 1, 3, dk);
            }
            for (let p = -4; p <= 4; p += 2) box(p, 13, 1, 1, dk);
            for (const p of [-13, -6, 6, 13]) {
              const h = Math.abs(p) === 6 ? 27 : 19;
              box(p - (p > 0 ? 1 : 0), h, 2, h, c);
              cone(p - (p > 0 ? 1 : 0) + (p > 0 ? 1 : 0), h, 1, 3, c);
            }
            box(0, 28, 1, 3, lit);
            box(-1, 30, 3, 1, lit);
            stack(
              0,
              [
                [29, 1],
                [23, 1],
              ],
              chShade(c, 0.12),
            );
            break;
          }
          case "castelloReggio": {
            // The Aragonese Castle, Reggio Calabria: two massive round towers with crenels on corbels, joined by a
            // stretch of wall with the gate.
            const st = [194, 176, 146],
              s = css(e.sh(st)),
              sh = css(e.sh(mixc(st, [41, 40, 54], 0.32))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.3)));
            box(-6, 10, 13, 10, s);
            for (let p = -6; p <= 6; p += 2) box(p, 11, 1, 1, s);
            box(-1, 4, 3, 4, 2);
            for (const tx of [-8, 8]) {
              box(tx - 5, 4, 11, 4, s);
              box(tx - 5, 4, 11, 1, lit);
              box(tx - 4, 15, 9, 15, s);
              box(tx - 4, 14, 1, 10, lit);
              box(tx + 2, 14, 3, 13, sh);
              box(tx - 5, 16, 11, 2, s);
              for (let p = tx - 4; p <= tx + 4; p += 2) box(p, 14, 1, 1, sh);
              for (let p = tx - 5; p <= tx + 5; p += 2) box(p, 17, 1, 1, s);
              box(tx, 10, 1, 2, 2);
            }
            break;
          }
          case "pontiCalatrava": {
            // Calatrava's bridges, Reggio Emilia: the central bridge's great white arch over the motorway with its
            // fan of hangers, and on either side the smaller bridges' white steel "sails" of curved ribs.
            const wt = 6;
            box(-26, 4, 53, 1, wt);
            box(-26, 3, 53, 1, chShade(wt, 0.3));
            for (let p = -14; p <= 14; p++) {
              const h = 4 + Math.round(16 * Math.sqrt(1 - (p / 14.5) ** 2));
              box(p, h, 1, 2, wt);
            }
            for (let p = -12; p <= 12; p += 2)
              stroke(p, 4 + Math.round(16 * Math.sqrt(1 - (p / 14.5) ** 2)) - 1, p * 0.6, 5, 8);
            for (const k of [-1, 1])
              for (let i = 0; i < 5; i++) {
                const bx = k * (18 + i * 2);
                stroke(bx, 5, k * 25, 6 + i * 2, wt);
              }
            for (const p of [-22, -15, 15, 22]) box(p, 2, 1, 2, chShade(wt, 0.2));
            break;
          }
          case "teatroValli": {
            // Teatro Municipale Romolo Valli, Reggio Emilia: the long neoclassical front, a ground-floor portico of
            // Ionic columns all along it, the pink upper floor with pilasters and windows, and statues on the
            // balustrade.
            const wall = [226, 192, 172],
              w = css(e.sh(wall)),
              sh = css(e.sh(mixc(wall, [41, 40, 54], 0.3))),
              lit = css(e.sh(mixc(wall, [255, 248, 225], 0.45))),
              st = 13;
            box(-15, 7, 31, 7, chShade(st, 0.45)); // the shadowed portico
            for (let p = -15; p <= 15; p += 2) box(p, 7, 1, 7, chLit(st, 0.2));
            box(-15, 8, 31, 1, chLit(st, 0.3));
            box(-15, 15, 31, 7, w);
            box(13, 15, 3, 7, sh);
            for (let p = -14; p <= 14; p += 2) box(p, 14, 1, 6, p % 4 === 0 ? lit : sh);
            for (let p = -13; p <= 13; p += 4) box(p, 13, 1, 3, 2);
            box(-16, 16, 33, 1, lit);
            box(-15, 17, 31, 1, chLit(st, 0.2));
            for (let p = -14; p <= 14; p += 4) box(p, 19, 1, 2, chLit(st, 0.3));
            break;
          }
          case "duomoRieti": {
            // Rieti Cathedral: the tall stone campanile with its paired windows and squat pyramid roof, and beside it
            // the end of the Romanesque porch of arches before the church front.
            const sh = chShade(c, 0.3),
              dk = chShade(c, 0.6),
              lit = chLit(c, 0.35);
            box(-6, 30, 6, 30, c);
            box(-1, 29, 1, 29, sh);
            box(-6, 29, 1, 28, lit);
            for (const r of [12, 19, 26]) {
              box(-6, r, 6, 1, lit);
              for (const p of [-5, -3]) box(p, r + 3, 1, 2, dk);
            }
            box(-7, 31, 8, 1, lit);
            cone(-3, 31, 3, 3, chShade(1, 0.15));
            box(0, 14, 6, 14, c); // the church front and its porch
            box(4, 14, 2, 13, sh);
            orb(2, 11, 1, dk);
            box(0, 7, 6, 7, lit);
            for (const p of [1, 3]) box(p, 5, 1, 4, 2);
            box(0, 8, 6, 1, chShade(1, 0.15));
            break;
          }
          case "palazzoPapale": {
            // Palazzo Papale, Rieti: the stone palace on its great arches, with the Gothic loggia of slender columns
            // and pointed arches along the upper floor.
            const sh = chShade(c, 0.3),
              dk = chShade(c, 0.6),
              lit = chLit(c, 0.35);
            box(-14, 13, 29, 13, c);
            box(12, 13, 3, 13, sh);
            for (const p of [-9, 0, 9]) {
              box(p - 3, 6, 7, 6, dk); // the great arches below
              box(p - 2, 7, 5, 1, dk);
            }
            box(-14, 8, 29, 1, lit);
            for (let p = -12; p <= 12; p += 3) {
              box(p, 12, 2, 3, 2); // the loggia
              box(p, 13, 1, 1, 2);
            }
            box(-15, 14, 31, 1, lit);
            box(-14, 15, 29, 1, chShade(1, 0.15));
            break;
          }
          case "arcoAugusto": {
            // The Arch of Augustus, Rimini: the single wide opening in the Roman gate, two Corinthian columns on each
            // side carrying a small pediment, round medallions in the spandrels, and the medieval merlons on top.
            const st = [216, 202, 176],
              s = css(e.sh(st)),
              sh = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.4))),
              br = chShade(1, 0.1);
            box(-10, 18, 21, 18, s);
            box(8, 18, 3, 18, sh);
            for (let r = 3; r < 18; r += 3) box(-10, r, 21, 1, sh);
            box(-5, 12, 11, 12, lit);
            box(-4, 10, 9, 10, 2);
            dome(0, 10, 4.5, 2);
            for (const p of [-8, -6, 6, 8]) box(p, 16, 1, 15, lit); // columns
            for (const p of [-3, 3]) orb(p * 2.2, 14, 1, sh);
            box(-10, 17, 21, 1, lit);
            cone(0, 18, 7, 3, s);
            box(-11, 19, 23, 1, br); // the brick crown and merlons
            box(-11, 20, 23, 1, br);
            for (let p = -11; p <= 11; p += 3) {
              box(p, 22, 2, 2, br);
              box(p, 23, 1, 1, br);
            }
            break;
          }
          case "torriDona": {
            // Torri Donà, Rovigo: the two brick towers of the old castle, the tall Torre Donà, crenellated and
            // slightly leaning, and the stump of the Torre Mozza beside it.
            const sh = chShade(c, 0.3),
              lit = chLit(c, 0.25);
            box(3, 18, 6, 18, c); // Torre Mozza
            box(8, 17, 1, 17, sh);
            for (let p = 3; p <= 8; p += 2) box(p, 20, 1, 2, c);
            box(5, 12, 1, 2, 2);
            for (let r = 1; r <= 39; r++) {
              const dx = Math.round(r * 0.03);
              box(-3 + dx, r, 6, 1, c);
              box(-3 + dx, r, 1, 1, lit);
              box(2 + dx, r, 1, 1, sh);
            }
            for (const r of [10, 20, 30]) box(0, r, 1, 2, 2);
            box(-4 + 1, 40, 8, 2, c);
            for (let p = -4; p <= 3; p += 2) box(p + 1, 42, 1, 2, c);
            break;
          }
          case "rotondaRovigo": {
            // La Rotonda (Tempio della Beata Vergine del Soccorso), Rovigo: the octagonal church ringed by its
            // arcaded portico, with a low lantern roof, and Longhena's tall white bell tower beside it.
            const sh = chShade(c, 0.28),
              lit = chLit(c, 0.4),
              br = 1;
            box(7, 30, 5, 30, c); // the bell tower
            box(11, 29, 1, 29, sh);
            for (const r of [10, 18]) box(9, r, 1, 2, 2);
            box(6, 25, 7, 1, lit);
            box(8, 29, 3, 4, 2);
            box(9, 27, 1, 1, 12);
            box(6, 31, 7, 1, lit);
            dome(9, 31, 2, c);
            box(9, 34, 1, 2, 3);
            box(-8, 16, 15, 16, br); // the octagon
            box(-8, 16, 3, 16, chLit(br, 0.15));
            box(3, 16, 4, 16, chShade(br, 0.3));
            for (const p of [-4, 0]) box(p, 13, 1, 3, 2);
            box(-9, 7, 17, 7, c); // the portico
            for (let p = -8; p <= 6; p += 2) box(p, 5, 1, 4, chShade(c, 0.45));
            box(-9, 8, 17, 1, lit);
            cone(-1, 16, 8, 3, chShade(br, 0.1));
            box(-2, 21, 3, 3, br);
            box(-1, 22, 1, 2, 3);
            break;
          }
          case "duomoSalerno": {
            // Salerno Cathedral: the arcaded atrium before the plain front with its pediment and round window, and
            // the Arab-Norman bell tower with its round crowning stage of little arches.
            const sh = chShade(c, 0.28),
              dk = chShade(c, 0.6),
              lit = chLit(c, 0.35),
              br = 1;
            box(-10, 17, 17, 17, c);
            box(-11, 17, 19, 1, lit);
            cone(-2, 17, 8, 4, c);
            orb(-2, 19, 1, dk);
            for (const p of [-6, -2, 2]) box(p, 14, 1, 3, dk);
            box(-10, 8, 17, 8, lit); // the atrium arches
            for (let p = -8; p <= 4; p += 3) {
              box(p, 6, 2, 5, chShade(c, 0.5));
              box(p, 7, 2, 1, chShade(c, 0.5));
            }
            box(-10, 9, 17, 1, c);
            box(9, 26, 6, 26, br); // the bell tower
            box(14, 25, 1, 25, chShade(br, 0.3));
            for (const r of [9, 16, 23]) {
              box(9, r, 6, 1, chLit(br, 0.25));
              box(11, r + 3, 2, 2, 2);
            }
            box(10, 31, 4, 5, c);
            for (const p of [10, 12]) box(p, 30, 1, 2, dk);
            dome(12, 31, 2, c);
            box(12, 34, 1, 2, 3);
            break;
          }
          case "castelloArechi": {
            // Castello di Arechi, Salerno: the long Lombard castle on its green hilltop, a curtain of crenellated
            // walls between square towers, the keep at the top.
            const hill = [118, 132, 86],
              hl = css(e.sh(hill)),
              st = [196, 180, 152],
              s = css(e.sh(st)),
              sh = css(e.sh(mixc(st, [41, 40, 54], 0.3)));
            const ground = (p) => Math.round(6 * Math.sqrt(Math.max(0, 1 - (p / 16) ** 2)));
            for (let p = -15; p <= 15; p++) {
              const gh = ground(p);
              if (gh > 0) box(p, gh, 1, gh, hl);
              const wh = gh + 4;
              box(p, wh, 1, 4, s);
              if (p % 2 === 0) box(p, wh + 1, 1, 1, s);
            }
            for (const [tx, th] of [
              [-12, 6],
              [-4, 8],
              [5, 7],
              [12, 5],
            ]) {
              const b = ground(tx) + th + 4;
              box(tx - 1, b, 3, th + 4, s);
              box(tx + 1, b, 1, th + 4, sh);
              box(tx - 1, b + 1, 1, 1, s);
              box(tx + 1, b + 1, 1, 1, s);
              box(tx, b - 2, 1, 1, 2);
            }
            break;
          }
          case "duomoSassari": {
            // San Nicola, Sassari: the exuberant Baroque front, the porch of three arches, a storey of niches with
            // statues, the great carved crown with Saint Nicholas, and the bell tower with its little dome behind.
            const st = [222, 196, 148],
              s = css(e.sh(st)),
              sh = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              dk = css(e.sh(mixc(st, [41, 40, 54], 0.6))),
              lit = css(e.sh(mixc(st, [255, 248, 225], 0.4)));
            box(5, 28, 5, 12, sh); // the bell tower behind
            box(6, 26, 3, 3, dk);
            dome(7, 28, 2.5, sh);
            box(7, 32, 1, 2, 3);
            box(-8, 18, 17, 18, s);
            box(7, 18, 2, 18, sh);
            for (const p of [-5, 0, 5]) {
              box(p - 1, 6, 3, 6, 2); // the porch
              dome(p, 6, 1.5, 2);
            }
            box(-8, 9, 17, 1, lit);
            for (const p of [-6, -2, 2, 6]) {
              box(p, 14, 1, 3, dk); // niches
              box(p, 13, 1, 1, lit);
            }
            for (const p of [-8, -4, 0, 4, 8]) box(p, 17, 1, 7, lit);
            box(-9, 19, 19, 1, lit);
            cone(0, 19, 6, 5, s); // the crown
            for (const k of [-1, 1]) box(k * 7, 21, 1, 2, lit);
            orb(0, 22, 1.2, dk);
            box(0, 27, 1, 3, lit);
            break;
          }
          case "fontanaRosello": {
            // Fontana di Rosello, Sassari: the Renaissance fountain, a two-storey cube of white and green marble with a
            // statue of a season at each corner, lion masks spouting water, and the crossed open arches on top
            // carrying Saint Gavino.
            const wt = 6,
              green = css(e.sh([82, 120, 96])),
              wl = chShade(wt, 0.3);
            box(-8, 1, 17, 1, css(e.sh([96, 132, 160]))); // the basin
            box(-6, 11, 13, 10, wt);
            for (let p = -5; p <= 5; p += 2) box(p, 10, 1, 9, green);
            box(-7, 6, 15, 1, chLit(wt, 0.3));
            box(-7, 11, 15, 1, chLit(wt, 0.3));
            box(4, 10, 3, 9, wl);
            for (const p of [-6, 6]) {
              box(p, 14, 1, 3, chShade(wt, 0.15)); // the seasons
              box(p, 9, 1, 2, chShade(wt, 0.15));
            }
            for (const p of [-3, 0, 3]) box(p, 4, 1, 1, 8);
            for (const k of [-1, 1]) {
              // the crossed arches
              box(k * 4 - (k > 0 ? 0 : 0), 16, 1, 5, wt);
              box(k * 3, 17, 1, 1, wt);
            }
            box(-2, 18, 5, 1, wt);
            box(0, 21, 1, 3, chShade(wt, 0.15));
            break;
          }
