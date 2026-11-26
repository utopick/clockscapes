          case "dzMosque": {
            // A modern Algerian mosque (reused by many Algerian cities): a white prayer hall on a plinth with a
            // row of horseshoe arches, a green-tiled pent roof under stepped merlons, a dome on a windowed drum
            // and o.m square Maghreb minarets (o.mh tall, o.mw wide, o.side 1 right / -1 left when there is one)
            // with arched windows, a green tile band, a sebka lattice panel, a gallery of merlons and a lantern
            // (jamur) under a little dome and gilt balls. o.mt "pencil" crowns the minaret with an octagonal
            // storey and a pointed cap instead; o.sd puts small domes on the hall (o.sd of them each side);
            // o.plain drops the tiles (old stone mosques); c is the wall, t the tiles, dc the domes.
            const w = o.w ?? 19,
              hw = Math.floor(w / 2),
              nh = o.nh ?? 9,
              r = o.r ?? 6,
              dd = o.dd ?? 2,
              mh = o.mh ?? 26,
              mw = o.mw ?? 5,
              hm = Math.floor(mw / 2),
              dc = o.dc ?? 9,
              tile = o.plain ? c : t === 3 ? 9 : t,
              sh = chShade(c, 0.25),
              lit = chLit(c, 0.45),
              under = chShade(tile, 0.35);
            const horseshoe = (cx, top, a, col) => {
              // a horseshoe arch a cells either side of cx, its crown at `top`, its jambs down to row 2
              box(cx - a, top - 1, 2 * a + 1, top - 2, col);
              if (a > 1) box(cx - a + 1, top, 2 * a - 1, 1, col);
              box(cx, top + 1, 1, 1, col);
            };
            const domeAt = (cx, b, rr) => {
              dome(cx, b, rr, dc);
              if (rr >= 3) {
                for (let dy = 1; dy < rr; dy++) {
                  const k = Math.round(Math.sqrt(rr * rr - dy * dy));
                  if (dy >= rr * 0.3) box(cx - k + 1, b + dy, 1, 1, chLit(dc, 0.38));
                  if (dy <= rr * 0.6) box(cx + k, b + dy, 1, 1, chShade(dc, 0.28));
                }
              }
              box(cx, b + rr + 1, 1, 1, 3); // the finial and its crescent
              if (rr >= 3) {
                box(cx - 1, b + rr + 2, 3, 1, 3);
                box(cx - 1, b + rr + 3, 1, 1, 3);
                box(cx + 1, b + rr + 3, 1, 1, 3);
              }
            };
            // the hall
            box(-hw - 1, 1, w + 2, 1, chShade(c, 0.18));
            box(-hw, nh, w, nh - 1, c);
            box(hw, nh, 1, nh - 1, sh);
            const ah = Math.max(4, nh - 4),
              na = Math.max(1, Math.floor((w - 1) / 4));
            for (let i = 0; i < na; i++) {
              const px = Math.round((i - (na - 1) / 2) * 4);
              const big = na > 2 && i === (na - 1) / 2;
              horseshoe(px, big ? ah + 1 : ah, 1, big ? lit : chLit(c, 0.25)); // a pale frame
              horseshoe(px, big ? ah : ah - 1, big ? 1 : 0, 2);
            }
            box(-hw, ah + 2, w, 1, o.plain ? sh : tile); // a tiled frieze over the arches
            if (!o.plain) {
              box(-hw - 1, nh, w + 2, 1, tile); // the green-tiled pent roof
              box(-hw, nh - 1, w, 1, under);
            }
            for (let p = -hw; p <= hw; p += 2) box(p, nh + 1, 1, 1, c); // stepped merlons
            if (o.sd)
              for (const s of [-1, 1]) for (let i = 0; i < o.sd; i++) domeAt(s * (r + 2 + i * 4), nh, 2);
            if (r) {
              box(-r + 1, nh + dd, 2 * r - 1, dd, c);
              box(r - 1, nh + dd, 1, dd, sh);
              for (let p = -r + 2; p < r - 1; p += 2)
                box(p, nh + dd - (dd > 2 ? 1 : 0), 1, Math.min(2, dd), 2);
              domeAt(0, nh + dd, r);
            }
            const sides = (o.m ?? 1) >= 2 ? [-1, 1] : (o.m ?? 1) ? [o.side ?? 1] : [];
            for (const s of sides) {
              const mx = s * (hw + 1 + hm),
                top = mh - (o.mt === "pencil" ? 10 : 8);
              box(mx - hm, top, mw, top, c);
              box(mx + hm, top, 1, top, sh);
              box(mx - hm, 1, 1, top, lit);
              for (let y = 6; y < top - 9; y += 5) {
                box(mx, y + 2, 1, 2, 2); // little arched windows up the shaft
                box(mx, y + 3, 1, 1, chShade(c, 0.5));
              }
              if (mw >= 5) {
                // the sebka panel: a lozenge lattice in a tiled frame under the gallery
                box(mx - hm, top - 1, mw, 1, tile);
                box(mx - hm, top - 7, mw, 1, tile);
                for (let y = top - 6; y <= top - 2; y++)
                  for (let p = -hm + 1; p <= hm - 1; p++) if ((p + y) % 2 === 0) box(mx + p, y, 1, 1, sh);
              } else box(mx - hm, top - 2, mw, 2, tile);
              box(mx - hm - 1, top + 1, mw + 2, 1, under); // the gallery and its merlons
              for (let p = -hm - 1; p <= hm + 1; p += 2) box(mx + p, top + 2, 1, 1, c);
              if (o.mt === "pencil") {
                box(mx - 1, top + 5, 3, 4, c);
                box(mx, top + 4, 1, 2, 2);
                box(mx + 1, top + 5, 1, 4, sh);
                box(mx - 1, top + 6, 3, 1, tile);
                cone(mx, top + 6, 1, 4, dc);
                box(mx, top + 11, 1, 1, 3);
              } else {
                box(mx - 1, top + 5, 3, 3, c); // the lantern (jamur)
                box(mx, top + 4, 1, 2, 2);
                dome(mx, top + 5, 1.5, dc);
                box(mx, top + 7, 1, 1, 3);
                box(mx, top + 8, 1, 1, 12);
              }
            }
            break;
          }
          case "maqamEchahid": {
            // Maqam Echahid (Algiers): three concrete palm fronds leaning together, two of them flaring out at
            // the foot like a tent with the dark sanctuary of the eternal flame between them, joined higher up
            // into a ribbed shaft that carries the "turban" lantern; the frond tips rise on either side of it
            // and the slim lattice mast tops it all.
            const con = [214, 176, 128],
              B = css(e.sh(con)),
              Lt = css(e.sh(mixc(con, [255, 248, 225], 0.35))),
              S = css(e.sh(mixc(con, [41, 40, 54], 0.3))),
              D = css(e.sh(mixc(con, [41, 40, 54], 0.62))),
              join = 26;
            box(-6, 1, 13, 1, chShade(13, 0.2)); // the esplanade
            for (let y = 2; y <= join; y++) {
              const f = Math.pow((join - y) / (join - 2), 1.6),
                inner = Math.round(1 + 3 * f),
                out = inner + 2;
              box(-out, y, out - inner, 1, Lt); // the lit frond and the shaded one
              box(inner + 1, y, out - inner, 1, S);
              box(-inner, y, 2 * inner + 1, 1, D); // the sanctuary under them
              const back = Math.max(0, Math.round(1.6 * (1 - f)));
              if (y > 6) box(-back, y, 2 * back + 1, 1, B); // the third frond, behind, narrowing as it falls
            }
            box(-3, 42, 2, 16, Lt); // the front fronds rise on past the join
            box(2, 42, 2, 16, S);
            box(-3, 44, 1, 2, Lt); // and end in points
            box(3, 44, 1, 2, S);
            box(-1, 33, 3, 7, B); // the back frond between them
            box(-1, 39, 3, 6, chLit(0, 0.2)); // the turban: a drum ringed with little windows
            box(-1, 36, 3, 1, D);
            box(-1, 40, 3, 1, Lt);
            box(0, 48, 1, 8, chShade(8, 0.25)); // the lattice mast
            break;
          }
          case "djamaaElDjazair": {
            // Djamaa el Djazaïr (Algiers): the world's tallest minaret, a slim square tower of pale stone with
            // vertical grooves and five bands of mashrabiya windows up its faces, crowned by a glass lantern;
            // beside it the square prayer hall with its arcaded front of tall white arches on slim piers and the
            // great white dome on an octagonal drum of lattice windows.
            const st = [232, 224, 206],
              P = css(e.sh(st)),
              PS = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              PL = css(e.sh(mixc(st, [255, 248, 225], 0.4))),
              mash = css(e.sh([150, 128, 96])),
              glass = css(e.sh([86, 150, 156])),
              glassL = css(e.sh([150, 204, 204]));
            // the prayer hall
            box(-13, 1, 21, 1, chShade(13, 0.2));
            box(-12, 13, 19, 12, P);
            box(6, 13, 1, 12, PS);
            box(-12, 13, 19, 1, PL);
            for (let p = -11; p <= 5; p += 2) {
              box(p, 10, 1, 9, 2); // the tall arches on slim piers
              box(p, 11, 1, 1, PS);
            }
            box(-12, 2, 19, 1, PS);
            box(-9, 15, 13, 2, P); // the drum, its lattice windows
            for (let p = -8; p <= 3; p += 2) box(p, 15, 1, 1, mash);
            box(3, 15, 1, 2, PS);
            dome(-3, 15, 7, PL);
            for (let dy = 1; dy < 7; dy++) {
              const k = Math.round(Math.sqrt(49 - dy * dy));
              if (dy <= 4) box(-3 + k, 15 + dy, 1, 1, PS);
            }
            box(-3, 23, 1, 2, 3);
            // the minaret
            const mx = 10;
            box(mx - 2, 50, 5, 49, P);
            box(mx + 2, 50, 1, 49, PS);
            box(mx - 2, 50, 1, 49, PL);
            for (let y = 4; y < 49; y += 1) if (y % 9 > 2) box(mx, y, 1, 1, PS); // the groove
            for (let y = 8; y < 46; y += 9) {
              box(mx - 1, y + 2, 3, 3, mash); // a band of mashrabiya
              box(mx, y + 1, 1, 1, P);
            }
            box(mx - 2, 51, 5, 1, PL);
            box(mx - 2, 57, 5, 6, glass); // the glass lantern
            box(mx - 2, 57, 1, 6, glassL);
            box(mx - 2, 54, 5, 1, glassL);
            box(mx - 2, 58, 5, 1, P);
            box(mx, 59, 1, 1, 3);
            break;
          }
          case "annabaBasilica": {
            // Basilica of St Augustine (Annaba): cream stone, a facade with an arched porch, an arcaded gallery
            // and a rose window under its gable, two tall towers with paired arched windows and little domed
            // octagonal belfries topped by crosses, the great dome on its windowed drum behind, and lower wings.
            const cr = [232, 222, 202],
              P = css(e.sh(cr)),
              PS = css(e.sh(mixc(cr, [41, 40, 54], 0.25))),
              PL = css(e.sh(mixc(cr, [255, 248, 225], 0.45))),
              och = css(e.sh([206, 168, 116]));
            box(-11, 11, 23, 11, P); // the wings
            box(11, 11, 1, 11, PS);
            for (const s of [-1, 1]) for (const y of [5, 9]) box(s * 11 + (s > 0 ? -1 : 0), y, 1, 2, 2);
            box(-11, 11, 23, 1, PL);
            // the dome behind, on its drum, with a lantern and cross
            box(-3, 22, 7, 4, P);
            for (let p = -2; p <= 2; p += 2) box(p, 21, 1, 2, 2);
            box(3, 22, 1, 4, PS);
            dome(0, 22, 4, PL);
            for (let dy = 1; dy < 4; dy++) box(Math.round(Math.sqrt(16 - dy * dy)), 22 + dy, 1, 1, PS);
            box(0, 28, 1, 2, P);
            box(0, 31, 1, 3, 2);
            box(-1, 30, 3, 1, 2);
            // the facade
            box(-4, 17, 9, 17, P);
            cone(0, 17, 4, 3, P);
            box(-4, 17, 9, 1, och);
            box(-3, 8, 7, 7, och); // the porch
            box(-2, 7, 5, 6, 2);
            box(-1, 8, 3, 1, 2);
            for (let p = -3; p <= 3; p += 2) box(p, 11, 1, 2, 2); // the gallery
            orb(0, 14, 1.5, och); // the rose
            box(0, 14, 1, 1, 2);
            for (const s of [-1, 1]) {
              const tx = s * 7;
              box(tx - 2, 26, 5, 26, P);
              box(tx + 2, 26, 1, 26, PS);
              box(tx - 2, 26, 1, 26, PL);
              for (const y of [16, 23]) {
                box(tx - 1, y, 1, 3, 2); // paired arched windows
                box(tx + 1, y, 1, 3, 2);
              }
              box(tx, 10, 1, 3, 2);
              box(tx - 3, 27, 7, 1, och); // the balustrade
              box(tx - 1, 30, 3, 3, P); // the octagonal belfry, its dome and cross
              box(tx, 29, 1, 2, 2);
              dome(tx, 30, 2, PL);
              box(tx, 35, 1, 3, 2);
              box(tx - 1, 34, 3, 1, 2);
            }
            break;
          }
          case "timgadArch": {
            // Trajan's Arch (Timgad): sandstone, a tall central arch between two low side arches, Corinthian
            // columns on pedestals beside each side arch, little niches with pediments over the side arches,
            // an entablature over all, and a curved (segmental) pediment over each side bay.
            const sa = [214, 164, 106],
              P = css(e.sh(sa)),
              PS = css(e.sh(mixc(sa, [41, 40, 54], 0.3))),
              PL = css(e.sh(mixc(sa, [255, 248, 225], 0.35)));
            box(-11, 14, 23, 14, P);
            box(11, 14, 1, 14, PS);
            box(-2, 11, 5, 1, PL); // the central arch and its archivolt
            box(-3, 10, 7, 1, PL);
            box(-2, 10, 5, 10, 2);
            box(-1, 11, 3, 1, 2);
            for (const s of [-1, 1]) {
              const bx = s * 7;
              box(bx - 1, 6, 3, 6, 2); // a side arch
              box(bx, 7, 1, 1, 2);
              box(bx - 2, 7, 5, 1, PL);
              box(bx - 1, 12, 3, 3, PS); // the niche over it and its little pediment
              box(bx, 11, 1, 2, 2);
              box(bx - 2, 13, 5, 1, PL);
              for (const cx of [bx - 3, bx + 3]) {
                box(cx, 12, 1, 9, PL); // a column on its pedestal, with its capital
                box(cx - (cx * s > 0 ? 0 : 0), 3, 1, 3, P);
                box(cx, 3, 1, 1, PS);
                box(cx, 13, 1, 1, 3);
              }
              box(bx - 4, 3, 1, 3, PS);
              box(bx - 4, 16, 9, 1, P); // the segmental pediment over the bay
              box(bx - 3, 17, 7, 1, P);
              box(bx - 1, 18, 3, 1, PL);
              box(bx - 2, 17, 1, 1, PL);
            }
            box(-12, 15, 25, 1, PL); // the entablature
            box(-11, 14, 23, 1, PS);
            box(-4, 16, 9, 1, P); // the central attic block
            break;
          }
          case "sidiMcid": {
            // Sidi M'Cid Bridge (Constantine): a suspension bridge strung across the Rhumel gorge between two
            // sheer limestone cliffs, its deck 175 m above the river, hung from tall masonry pylons with an
            // arched portal on each cliff top, the cables anchored back into the rock.
            const rock = [176, 150, 118],
              R = css(e.sh(rock)),
              RS = css(e.sh(mixc(rock, [41, 40, 54], 0.32))),
              RL = css(e.sh(mixc(rock, [255, 248, 225], 0.25))),
              pyl = css(e.sh([206, 196, 178])),
              pylS = css(e.sh([158, 148, 132])),
              deck = 17;
            box(-16, 1, 33, 1, 11); // the river far below
            const top = [12, 13, 14, 15, 15, 16, 16, 16, 16]; // the cliffs, outer to inner columns
            for (let i = 0; i < 9; i++)
              for (const s of [-1, 1]) {
                const x = s * (24 - i),
                  h = top[i];
                box(x, h, 1, h, i === 8 ? (s < 0 ? RS : RL) : R);
                box(x, h - 3 - (i % 3), 1, 1, RS); // the strata
                box(x, h - 8 + (i % 2), 1, 1, RS);
                if (i % 2) box(x, h - 12, 1, 1, RL);
              }
            box(-19, deck, 39, 1, chShade(8, 0.2)); // the deck and its truss
            box(-19, deck - 1, 39, 1, chShade(8, 0.5));
            for (let x = -16; x <= 16; x++) {
              const cy = deck + 1 + Math.round(7 * (x / 17) * (x / 17));
              box(x, cy, 1, 1, chShade(8, 0.35)); // the cable and its hangers
              if (x % 2 === 0 && cy > deck + 1) box(x, cy - 1, 1, cy - deck - 1, 8);
            }
            for (const s of [-1, 1]) {
              const px = s * 18;
              box(px - 1, deck + 9, 3, 9, pyl); // the pylon, its portal and cap
              box(px + 1, deck + 9, 1, 9, pylS);
              box(px, deck + 4, 1, 3, 2);
              box(px - 1, deck + 10, 3, 1, pylS);
              stroke(px + s, deck + 8, s * 23, top[1] + 1, 2); // the backstay into the rock
            }
            break;
          }
          case "emirAbdelkaderMosque": {
            // Emir Abdelkader Mosque (Constantine): a pale facade of five tall arches filled with gilt lattice
            // under a blue tiled frieze and merlons, the great ribbed grey dome on a drum of windows, and two
            // twin minarets, square below, octagonal above with a blue-tiled balcony, under tall white needles.
            const st = [234, 228, 216],
              P = css(e.sh(st)),
              PS = css(e.sh(mixc(st, [41, 40, 54], 0.25))),
              PL = css(e.sh(mixc(st, [255, 248, 225], 0.45))),
              lat = css(e.sh([176, 140, 92])),
              grey = [190, 192, 196],
              G = css(e.sh(grey)),
              GS = css(e.sh(mixc(grey, [41, 40, 54], 0.3))),
              GL = css(e.sh(mixc(grey, [255, 248, 225], 0.4)));
            box(-10, 1, 21, 1, PS); // the steps
            box(-9, 14, 19, 13, P);
            box(9, 14, 1, 13, PS);
            for (let i = -2; i <= 2; i++) {
              const p = i * 4;
              box(p - 1, 10, 3, 8, lat); // a tall arch of gilt lattice, its door below
              box(p, 11, 1, 1, lat);
              box(p, 4, 1, 2, 2);
              box(p - 1, 11, 1, 1, PL);
              if (i < 2) box(p + 2, 12, 1, 11, PL); // the pier between arches
            }
            box(-9, 14, 19, 1, 7); // the blue frieze and its merlons
            for (let p = -9; p <= 9; p += 2) box(p, 15, 1, 1, P);
            box(-5, 17, 11, 3, P); // the drum with its windows
            for (let p = -4; p <= 4; p += 2) box(p, 16, 1, 2, 2);
            box(-5, 17, 11, 1, 7);
            dome(0, 17, 6, G);
            for (let dy = 1; dy < 6; dy++) {
              const k = Math.round(Math.sqrt(36 - dy * dy));
              box(-Math.round(k / 2), 17 + dy, 1, 1, GL); // the ribs
              box(Math.round(k / 2), 17 + dy, 1, 1, GS);
              if (dy < 4) box(k, 17 + dy, 1, 1, GS);
            }
            box(0, 25, 1, 2, 3);
            box(-1, 26, 3, 1, 3);
            for (const s of [-1, 1]) {
              const mx = s * 12;
              box(mx - 2, 28, 5, 28, P); // the square shaft
              box(mx + 2, 28, 1, 28, PS);
              box(mx - 2, 28, 1, 28, PL);
              for (const y of [10, 17, 24]) box(mx, y, 1, 3, 2);
              box(mx - 2, 29, 5, 1, PL);
              box(mx - 1, 35, 3, 6, P); // the octagonal storey and its tiled balcony
              box(mx + 1, 35, 1, 6, PS);
              box(mx, 34, 1, 3, 2);
              box(mx - 2, 36, 5, 1, 7);
              cone(mx, 36, 1, 8, P); // the needle
              box(mx, 39, 1, 1, 7);
              box(mx, 45, 1, 2, 3);
            }
            break;
          }
          case "ghardaiaMinaret": {
            // The Great Mosque's minaret (Ghardaïa): a tapering, almost pyramidal Mozabite tower of whitewashed
            // ochre plaster with a few small square holes, crowned by four horn-like pinnacles at its corners,
            // rising over the pastel cubic houses of the ksar.
            const pl = [220, 192, 146],
              P = css(e.sh(pl)),
              PS = css(e.sh(mixc(pl, [41, 40, 54], 0.3))),
              PL = css(e.sh(mixc(pl, [255, 248, 225], 0.4)));
            for (let y = 1; y <= 26; y++) {
              const k = 4 - Math.round((3 * (y - 1)) / 25);
              box(-k, y, 2 * k + 1, 1, P);
              box(-k, y, 1, 1, PL);
              box(k, y, 1, 1, PS);
            }
            for (const [p, y] of [
              [0, 6],
              [-1, 11],
              [1, 15],
              [0, 19],
              [0, 23],
            ])
              box(p, y, 1, 1, 2);
            for (const p of [-1, 1]) box(p, 29, 1, 3, p < 0 ? PL : PS); // the horns
            box(0, 27, 1, 1, P);
            const houses = [
              [-7, 5, 3, [214, 228, 236]],
              [-6, 8, 2, [236, 200, 150]],
              [4, 7, 2, [150, 190, 214]],
              [5, 4, 3, [240, 232, 214]],
            ];
            for (const [hx, hh, hw, rgb] of houses) {
              box(hx, hh, hw, hh, css(e.sh(rgb)));
              box(hx + hw - 1, hh, 1, hh, css(e.sh(mixc(rgb, [41, 40, 54], 0.25))));
              box(hx + (hw > 2 ? 1 : 0), hh - 1, 1, 1, 2);
            }
            break;
          }
          case "mansourah": {
            // The Mansourah minaret (Tlemcen): the ruined front of a Marinid minaret, ochre stone standing alone
            // with a ragged top, a great horseshoe portal at its foot in a lobed frame, a balcony with twin
            // windows above it, and sebka lattice panels in relief up the rest of its face.
            const st = [204, 150, 96],
              P = css(e.sh(st)),
              PS = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              PL = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              tops = [27, 31, 33, 34, 32, 33, 30, 28, 25];
            for (let i = 0; i < 9; i++) box(i - 4, tops[i], 1, tops[i], i === 8 ? PS : i === 0 ? PL : P);
            box(-3, 13, 7, 1, PL); // the portal's frame and its horseshoe arch
            box(-3, 12, 1, 11, PL);
            box(3, 12, 1, 11, PL);
            box(-2, 10, 5, 9, 2);
            box(-1, 11, 3, 1, 2);
            box(-2, 12, 1, 1, PS);
            box(2, 12, 1, 1, PS);
            box(-3, 17, 7, 1, PS); // the balcony and twin windows
            box(-2, 20, 5, 3, PS);
            box(-1, 20, 1, 2, 2);
            box(1, 20, 1, 2, 2);
            for (let y = 22; y <= 29; y++)
              for (let p = -3; p <= 3; p++)
                if (p && ((p + y) % 4 === 0 || (p - y + 40) % 4 === 0)) box(p, y, 1, 1, PS);
            box(0, 26, 1, 3, 2); // a window between the panels
            break;
          }
          case "mauretaniaMausoleum": {
            // The Royal Mausoleum of Mauretania (Tipasa): a great drum of sandstone ringed by engaged Ionic
            // columns, with a false door, under a stepped cone of weathered blocks rising to a flat top.
            const st = [200, 154, 110],
              P = css(e.sh(st)),
              PS = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              PD = css(e.sh(mixc(st, [41, 40, 54], 0.5))),
              PL = css(e.sh(mixc(st, [255, 248, 225], 0.3)));
            box(-20, 1, 41, 1, PS); // the platform
            box(-19, 6, 39, 5, P); // the drum
            for (let p = -18; p <= 18; p += 3) {
              box(p, 6, 1, 5, Math.abs(p) > 13 ? PS : PL); // the columns
              box(p + 1, 6, 1, 1, PS);
            }
            box(-1, 4, 3, 3, PD); // the false door
            box(-19, 7, 39, 1, PL); // the cornice
            const steps = [18, 17, 16, 14, 12, 9, 6];
            steps.forEach((k, i) => {
              const y = 8 + i;
              box(-k, y, 2 * k + 1, 1, i % 2 ? P : PL);
              box(Math.round(k * 0.5), y, k - Math.round(k * 0.5) + 1, 1, PS);
              for (let p = -k + 2 + (i % 3); p < k - 1; p += 5) box(p, y, 1, 1, i % 2 ? PS : P); // weathered blocks
            });
            break;
          }
          case "santaCruzOran": {
            // Santa Cruz (Oran): the Spanish fort on the summit of Mount Murdjadjo, its walls and bastions over
            // the scrubby rock, and lower down the chapel of Santa Cruz with its tower crowned by the white
            // statue of the Virgin.
            const rock = [170, 142, 110],
              R = css(e.sh(rock)),
              RS = css(e.sh(mixc(rock, [41, 40, 54], 0.3))),
              scrub = css(e.sh([112, 132, 84])),
              st = [214, 200, 172],
              F = css(e.sh(st)),
              FS = css(e.sh(mixc(st, [41, 40, 54], 0.28))),
              FL = css(e.sh(mixc(st, [255, 248, 225], 0.35)));
            const hill = (x) => Math.round(9 - Math.max(0, Math.abs(x + 4) - 3) * (x > -4 ? 0.42 : 0.5));
            for (let x = -15; x <= 15; x++) {
              const h = hill(x);
              box(x, h, 1, h, x > 2 ? RS : R);
              if ((x * 7) % 5 === 1) box(x, h - 2, 1, 1, scrub);
              if ((x * 3) % 4 === 2) box(x, h - 4, 1, 1, scrub);
            }
            box(-11, 14, 13, 5, F); // the fort's walls
            box(1, 14, 1, 5, FS);
            box(-11, 14, 13, 1, FL);
            for (let p = -11; p <= 1; p += 2) box(p, 15, 1, 1, F);
            for (const bx of [-12, -5, 1]) {
              box(bx, 16, 3, 7, F); // the bastions
              box(bx + 2, 16, 1, 7, FS);
              box(bx, 17, 1, 1, F);
              box(bx + 2, 17, 1, 1, F);
              box(bx + 1, 14, 1, 1, 2);
            }
            box(-7, 11, 1, 1, 2);
            box(-2, 11, 1, 1, 2);
            box(5, 9, 7, 3, F); // the chapel and its roof
            box(11, 9, 1, 3, FS);
            box(5, 10, 7, 1, css(e.sh([196, 110, 80])));
            box(7, 8, 1, 2, 2);
            box(9, 17, 3, 11, F); // the tower, its belfry, dome and the Virgin
            box(11, 17, 1, 11, FS);
            box(10, 15, 1, 2, 2);
            dome(10, 17, 1.5, FL);
            box(10, 20, 1, 1, 6);
            box(10, 22, 1, 2, 6);
            box(9, 21, 3, 1, 6);
            box(10, 23, 1, 1, 6);
            break;
          }
          case "caracallaArch": {
            // The Arch of Caracalla (Tébessa): a four-way arch, each face a single arch between pairs of columns
            // on pedestals, an entablature and attic, and the little shrine (aedicule) with its own columns and
            // pediment still standing on top.
            const sa = [218, 176, 116],
              P = css(e.sh(sa)),
              PS = css(e.sh(mixc(sa, [41, 40, 54], 0.3))),
              PL = css(e.sh(mixc(sa, [255, 248, 225], 0.35)));
            box(-8, 14, 17, 14, P);
            box(8, 14, 1, 14, PS);
            box(-3, 11, 7, 1, PL); // the arch and its archivolt
            box(-3, 10, 1, 9, PL);
            box(3, 10, 1, 9, PL);
            box(-2, 10, 5, 10, 2);
            box(-1, 11, 3, 1, 2);
            for (const cx of [-7, -5, 5, 7]) {
              box(cx, 3, 1, 3, PS); // the pedestals, columns and capitals
              box(cx, 13, 1, 10, PL);
              box(cx, 13, 1, 1, 3);
            }
            box(-9, 15, 19, 1, PL); // the entablature and attic
            box(-8, 14, 17, 1, PS);
            box(-8, 17, 17, 2, P);
            box(8, 17, 1, 2, PS);
            box(-3, 21, 7, 4, P); // the aedicule
            box(-2, 20, 1, 3, PL);
            box(2, 20, 1, 3, PL);
            box(-1, 20, 3, 3, PS);
            cone(0, 21, 4, 2, PL);
            break;
          }
          case "minervaTemple": {
            // The Temple of Minerva (Tébessa): a small Roman temple on a tall podium with a stair, four columns
            // across its porch, the cella wall behind them, and the frieze of carved panels under its cornice.
            const sa = [214, 178, 128],
              P = css(e.sh(sa)),
              PS = css(e.sh(mixc(sa, [41, 40, 54], 0.3))),
              PL = css(e.sh(mixc(sa, [255, 248, 225], 0.35)));
            box(-9, 6, 19, 6, P); // the podium and its stair
            box(9, 6, 1, 6, PS);
            box(-9, 6, 19, 1, PL);
            for (let i = 0; i < 5; i++) box(-3 - i, 5 - i, 7 + 2 * i, 1, i % 2 ? PS : P);
            box(-7, 13, 15, 7, PS); // the cella wall in the shade of the porch
            box(-1, 11, 3, 5, 2);
            for (const cx of [-7, -3, 3, 7]) {
              box(cx - 1, 7, 3, 1, PL); // the columns, their bases and capitals
              box(cx, 13, 1, 6, PL);
              box(cx - 1, 13, 3, 1, 3);
            }
            box(-8, 16, 17, 3, P); // the frieze of carved panels
            for (let p = -7; p <= 7; p += 2) box(p, 15, 1, 1, PS);
            box(-9, 17, 19, 1, PL); // the cornice
            box(8, 16, 1, 3, PS);
            break;
          }
          case "kenadsaHeadframe": {
            // The Kenadsa coal-mine headframe (Béchar): a riveted steel A-frame with X-bracing between its legs,
            // the big spoked sheave wheel on top, the raking back strut, and the brick winding house beside it.
            const steel = [74, 70, 78],
              S = css(e.sh(steel)),
              SL = css(e.sh(mixc(steel, [255, 248, 225], 0.3))),
              brick = [168, 104, 82],
              K = css(e.sh(brick)),
              KS = css(e.sh(mixc(brick, [41, 40, 54], 0.3)));
            for (let y = 1; y <= 19; y++) {
              const k = 4 - Math.round((3 * (y - 1)) / 18);
              box(-k, y, 1, 1, S);
              box(k, y, 1, 1, S);
              if (y % 4 === 0)
                box(-k, y, 2 * k + 1, 1, S); // the cross beams
              else if (k > 1) {
                const m = Math.round(((y % 4) / 4) * (2 * k)) - k; // the X-bracing
                box(m, y, 1, 1, SL);
                box(-m, y, 1, 1, SL);
              }
            }
            box(-2, 20, 5, 1, S); // the sheave platform
            orb(0, 23, 2.5, S); // the sheave wheel and its spokes
            orb(0, 23, 1.5, SL);
            box(0, 23, 1, 1, S);
            box(-2, 23, 5, 1, S);
            box(0, 25, 1, 5, S);
            stroke(1, 19, 7, 1, 2); // the back strut
            stroke(2, 19, 7, 2, 2);
            box(-7, 6, 4, 6, K); // the winding house
            box(-4, 6, 1, 6, KS);
            box(-7, 7, 4, 1, KS);
            box(-6, 4, 1, 2, 2);
            stroke(-3, 6, 0, 22, 2); // the hoisting rope
            break;
          }
          case "capCarbon": {
            // Cap Carbon lighthouse (Béjaïa): high on a sheer rocky cape over the sea, the white keeper's house
            // and its square tower with a gallery, the bright lamp room and a dark dome.
            const rock = [150, 128, 110],
              R = css(e.sh(rock)),
              RS = css(e.sh(mixc(rock, [41, 40, 54], 0.32))),
              RL = css(e.sh(mixc(rock, [255, 248, 225], 0.2))),
              scrub = css(e.sh([102, 128, 82])),
              ws = chShade(6, 0.25);
            const tops = [6, 9, 12, 13, 14, 14, 14, 14, 14, 13, 11, 8, 5];
            tops.forEach((h, i) => {
              const x = i - 6;
              box(x, h, 1, h, x > 2 ? RS : x < -3 ? RL : R);
              box(x, h - 4 - (i % 3), 1, 1, RS);
              if (i % 4 === 1) box(x, h - 1, 1, 1, scrub);
            });
            box(-4, 18, 8, 4, 6); // the keeper's house
            box(3, 18, 1, 4, ws);
            box(-4, 19, 8, 1, 13);
            for (const p of [-3, 2]) box(p, 17, 1, 2, 2);
            box(-1, 27, 3, 9, 6); // the square tower
            box(1, 27, 1, 9, ws);
            box(0, 23, 1, 1, 2);
            box(-2, 28, 5, 1, 13); // the gallery
            box(-1, 30, 3, 2, 3); // the lamp room
            box(0, 30, 1, 2, 12);
            dome(0, 30, 1.5, 2);
            box(0, 32, 1, 1, 2);
            break;
          }
          case "elMeniaKsar": {
            // The ksar of El Menia (El Goléa): the ruined mud-brick fortified village on its rocky butte above the
            // oasis, its walls and towers following the rock's flat top, with date palms at the foot.
            const rock = [196, 150, 104],
              R = css(e.sh(rock)),
              RS = css(e.sh(mixc(rock, [41, 40, 54], 0.3))),
              RL = css(e.sh(mixc(rock, [255, 248, 225], 0.25))),
              mud = [178, 120, 84],
              M = css(e.sh(mud)),
              MS = css(e.sh(mixc(mud, [41, 40, 54], 0.3))),
              frond = css(e.sh([92, 130, 70])),
              trunk = css(e.sh([120, 90, 62]));
            for (let x = -10; x <= 10; x++) {
              const a = Math.abs(x),
                h = a <= 6 ? 9 : 9 - 2 * (a - 6);
              box(x, h, 1, h, x > 6 ? RS : x < -6 ? RL : R);
              if ((x + 20) % 3 === 0) box(x, h - 3, 1, 2, RS); // the eroded gullies
            }
            box(-6, 13, 13, 4, M); // the ksar's walls on the top
            box(6, 13, 1, 4, MS);
            for (let p = -6; p <= 6; p += 2) box(p, 14, 1, 1, M);
            for (const [tx, th] of [
              [-6, 16],
              [-1, 17],
              [4, 15],
            ]) {
              box(tx, th, 3, th - 9, M); // the towers
              box(tx + 2, th, 1, th - 9, MS);
              box(tx + 1, th - 2, 1, 1, 2);
            }
            for (const p of [-4, 1, 3]) box(p, 11, 1, 1, 2);
            for (const [px, ph] of [
              [-14, 8],
              [-12, 6],
              [12, 7],
              [14, 9],
            ]) {
              box(px, ph, 1, ph, trunk); // the palms
              box(px - 2, ph + 1, 5, 1, frond);
              box(px - 1, ph + 2, 3, 1, frond);
              box(px - 3, ph, 1, 1, frond);
              box(px + 3, ph, 1, 1, frond);
            }
            break;
          }
          case "guelmaTheatre": {
            // The Roman theatre of Guelma: the half-round cavea of stone seats rising in tiers, split by radial
            // stairs and crowned by an arcaded gallery, behind the low stage wall with its niches and the few
            // standing columns of the restored stage front.
            const st = [210, 196, 170],
              P = css(e.sh(st)),
              PS = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              PL = css(e.sh(mixc(st, [255, 248, 225], 0.35)));
            for (let i = 0; i < 9; i++) {
              const k = 9 + Math.round(i * 0.75);
              box(-k, i + 2, 2 * k + 1, 1, i % 2 ? P : PL); // the tiers of seats
              box(k - 1, i + 2, 2, 1, PS);
              for (const s of [-1, 1]) box(s * Math.round(k * 0.5), i + 2, 1, 1, PS); // the stairs
            }
            box(-15, 11, 31, 1, PS); // the gallery at the top, with its arches
            for (let p = -14; p <= 14; p += 2) box(p, 12, 1, 1, P);
            box(-10, 3, 21, 3, P); // the stage wall and its niches
            box(-10, 3, 21, 1, PL);
            for (let p = -8; p <= 8; p += 4) box(p, 2, 1, 1, 2);
            for (const p of [-6, -2, 2, 6]) {
              box(p, 9, 1, 6, PL); // the standing columns
              box(p, 9, 1, 1, 3);
            }
            box(-6, 10, 5, 1, P); // a stretch of entablature
            break;
          }
          case "oliveTree": {
            // Saint Augustine's olive tree (Souk Ahras, Thagaste): an ancient olive with a gnarled, split trunk
            // and a broad silvery-green crown, inside a low ring of stones.
            const bark = [112, 92, 76],
              B = css(e.sh(bark)),
              BS = css(e.sh(mixc(bark, [41, 40, 54], 0.35))),
              leaf = [120, 142, 102],
              L = css(e.sh(leaf)),
              LL = css(e.sh(mixc(leaf, [230, 236, 214], 0.35))),
              LS = css(e.sh(mixc(leaf, [41, 40, 54], 0.3)));
            box(-5, 2, 11, 2, chShade(13, 0.15)); // the ring of stones
            box(-5, 2, 11, 1, 13);
            box(-2, 7, 2, 5, B); // the split trunk
            box(1, 7, 2, 5, BS);
            box(0, 5, 1, 3, BS);
            box(-3, 9, 2, 2, B);
            box(2, 9, 2, 2, BS);
            orb(-3, 11, 3, L); // the crown
            orb(3, 11, 3, LS);
            orb(0, 13, 3.5, L);
            orb(-2, 14, 2, LL);
            orb(2, 12, 1.5, LS);
            box(-4, 12, 1, 1, LL);
            break;
          }
