          case "brasiliaCathedral": {
            // Cathedral of Brasília (Niemeyer): sixteen white concrete ribs that rise from a wide ring, pinch at a
            // waist and flare into a crown, glass between them, a cross on top; the slim bell tower stands to the left.
            const glass = css(e.sh([120, 178, 196])),
              glassDark = css(e.sh([86, 132, 156])),
              back = chShade(6, 0.25),
              R0 = 14,
              waist = 17,
              rw = 3,
              top = 25,
              rt = 8;
            const rad = (h) =>
              h <= waist
                ? rw + (R0 - rw) * ((waist - h) / waist) ** 1.8
                : rw + (rt - rw) * ((h - waist) / (top - waist)) ** 1.3;
            box(-R0 - 2, 1, 2 * R0 + 5, 1, chShade(11, 0.2)); // the reflecting pool
            for (let h = 1; h <= top; h++) {
              const r = Math.round(rad(h));
              if (h <= top - 2) {
                box(-r, h, 2 * r + 1, 1, h < 4 ? glassDark : glass);
                if (h > waist) box(-r + 1, h, 2 * r - 1, 1, glassDark);
              }
              for (let k = 0; k <= 8; k++) {
                const a = (k * Math.PI) / 8,
                  px = Math.round(r * Math.cos(a)),
                  front = k >= 2 && k <= 6;
                box(px, h, 1, 1, front ? 6 : back);
              }
            }
            box(-R0, 2, 2 * R0 + 1, 1, 6); // the ring the ribs stand on
            box(0, top + 4, 1, 5, 6); // the cross
            box(-1, top + 3, 3, 1, 6);
            // the bell tower: two thin posts, a top bar and the bells hanging between
            const bx = -R0 - 6;
            for (const p of [-2, 2]) box(bx + p, 22, 1, 22, 6);
            box(bx - 2, 23, 5, 1, 6);
            box(bx - 1, 19, 3, 2, 12);
            box(bx, 15, 1, 2, 12);
            box(bx - 1, 11, 3, 2, 12);
            box(bx - 3, 1, 7, 1, 13);
            break;
          }
          case "congressoNacional": {
            // National Congress of Brasília: the twin office towers joined by a bridge, on a long low plinth that
            // carries the Senate's dome (left) and the Chamber's upturned bowl (right), a ramp up its middle.
            const sh = chShade(6, 0.22),
              lit = chLit(6, 0.2),
              hw = 13,
              ph = 5;
            // the plinth, its glazed lower storey and the roof slab
            box(-hw, ph, 2 * hw + 1, ph, 6);
            box(-hw + 1, ph - 1, 2 * hw - 1, ph - 2, chShade(11, 0.35));
            for (let p = -hw + 2; p < hw; p += 3) box(p, ph - 1, 1, ph - 2, sh);
            box(-hw, ph, 2 * hw + 1, 1, lit);
            // the ramp from the lawn to the roof
            for (let j = 0; j < ph; j++)
              box(-1 - Math.floor(j / 2), j + 1, 3 + Math.floor(j / 2) * 2, 1, j === ph - 1 ? lit : 6);
            // Senate dome
            dome(-8, ph, 4, 6);
            dome(-8, ph, 3, lit);
            dome(-9, ph + 1, 1, 6);
            // Chamber bowl: widening rows, a dark rim shadow under the brim
            for (let j = 1; j <= 4; j++) {
              const k = 1 + j;
              box(8 - k, ph + j, 2 * k + 1, 1, j === 4 ? lit : j === 1 ? sh : 6);
            }
            // the twin towers with the bridge between them
            const th = 32;
            for (const p of [-3, 1]) {
              box(p, th, 3, th - ph, 6);
              box(p + 2, th, 1, th - ph, sh);
              for (let i = ph + 3; i < th - 1; i += 3) box(p, i, 2, 1, lit);
            }
            box(-1, th - 1, 3, th - ph - 1, chShade(11, 0.5)); // the slot between the towers
            for (const b of [Math.round(th * 0.55), Math.round(th * 0.55) + 2]) box(-1, b, 3, 1, 6);
            break;
          }
          case "igrejaColonial": {
            // A Brazilian church front (shared by several b32 cities): a whitewashed facade framed by stone
            // pilasters (o.t), doors and choir windows with lit frames, a curled baroque gable (o.gable "volute"),
            // a straight pediment ("tri") or a pointed one ("gothic"), and o.n towers: 1 rises over the gable (or o.tx
            // cells aside), 2 stand at the corners; top caps them (cap styles), o.rc their colour, o.clock a clock face.
            const w = o.w ?? 19,
              nh = o.nh ?? 12,
              h = o.h ?? 26,
              tw = o.tw ?? 5,
              n = o.n ?? 2,
              hw = Math.floor(w / 2),
              th = Math.floor(tw / 2),
              gable = o.gable ?? "volute",
              top = o.top ?? "pyr",
              rc = o.rc ?? t,
              trim = chLit(t, 0.1),
              sh = chShade(c, 0.22);
            // towers
            const towers = n === 2 ? [-hw + th, hw - th] : [o.tx ?? 0];
            for (const p of towers) {
              chTower(p, tw, h, c, { clock: o.clock });
              box(p - th, h, 1, h - nh, trim);
              box(p + th, h, 1, h - nh, chShade(t, 0.1));
              cap(p, h, th, top, rc, o.sp);
              chPinnacles(p, th, h, top, c);
            }
            box(-hw, nh, w, nh, c);
            box(hw, nh - 1, 1, nh - 1, sh);
            box(-hw, 1, w, 1, chShade(c, 0.12));
            // pilasters, the cornice and a string course
            const cols =
              n === 2
                ? [-hw, -hw + tw - 1, hw - tw + 1, hw]
                : [-hw, -Math.round(hw / 2), Math.round(hw / 2), hw];
            for (const p of cols) box(p, nh, 1, nh - 1, trim);
            box(-hw - 1, nh, w + 2, 1, trim);
            box(-hw, Math.round(nh * 0.55), w, 1, trim);
            // the gable over the central bay
            const gw = n === 2 ? hw - tw : hw - 1,
              gh =
                gable === "tri"
                  ? Math.round(gw * 0.6)
                  : gable === "gothic"
                    ? gw + 2
                    : Math.round(gw * 0.9) + 1;
            for (let j = 1; j <= gh; j++) {
              const f = j / gh,
                k = Math.round(gable === "volute" ? gw * (1 - f ** 0.7) * (j < 3 ? 1 : 0.85) : gw * (1 - f));
              box(-k, nh + j, 2 * k + 1, 1, j === gh || gable !== "volute" ? c : c);
              box(-k, nh + j, 1, 1, trim);
              box(k, nh + j, 1, 1, trim);
            }
            if (gable === "volute")
              for (const s of [-1, 1]) {
                orb(s * (gw - 1), nh + 2, 1, trim);
                box(s * (gw + 1), nh + 1, 1, 1, trim);
              }
            if (gh > 4) {
              orb(0, nh + Math.round(gh * 0.4), 1, 2); // the oculus
              box(0, nh + Math.round(gh * 0.4), 1, 1, chLit(11, 0.2));
            }
            if (!(n === 1 && !o.tx)) {
              box(0, nh + gh + 3, 1, 3, trim); // the cross
              box(-1, nh + gh + 2, 3, 1, trim);
            }
            // doors below, choir windows above
            const bays =
              n === 2 ? [-hw + th, 0, hw - th] : [-Math.round(hw * 0.75), 0, Math.round(hw * 0.75)];
            for (const p of bays) {
              if (p) {
                box(p, Math.round(nh * 0.55) - 1, 1, 3, 2);
                box(p, nh - 2, 1, 2, 2);
                box(p - 1, nh - 1, 3, 1, trim);
              } else {
                chDoor(0, 3, Math.min(6, Math.round(nh * 0.45)), c);
                for (const d of [-1, 1]) box(d * 2 - (d > 0 ? 0 : 0), nh - 2, 1, 2, 2);
                box(0, nh - 2, 1, 2, 2);
                box(-2, nh - 1, 5, 1, trim);
              }
            }
            break;
          }
          case "theatroDaPaz": {
            // Theatro da Paz, Belém: a pink neoclassical front with five arched doors under a balustraded balcony,
            // a colonnade with round medallions over its windows, a pediment, and end pavilions crowned by statues.
            const wall = css(e.sh([214, 158, 140])),
              wallSh = css(e.sh([180, 126, 112])),
              trim = chLit(6, 0.1),
              dark = 2;
            box(-15, 13, 31, 13, wall);
            box(15, 12, 1, 12, wallSh);
            box(-15, 1, 31, 1, wallSh);
            // ground floor: arched doors with stone frames
            for (let i = -2; i <= 2; i++) {
              const p = i * 5;
              box(p - 1, 5, 3, 5, trim);
              box(p, 4, 1, 4, dark);
              dome(p, 4, 1, dark);
            }
            for (const s of [-1, 1]) {
              box(s * 13, 4, 1, 3, dark);
              dome(s * 13, 4, 1, dark);
            }
            // the balcony
            box(-15, 7, 31, 1, trim);
            for (let p = -11; p <= 11; p += 2) box(p, 8, 1, 1, trim);
            box(-11, 9, 23, 1, trim);
            // the colonnade: columns, windows and medallions between them
            for (let i = -3; i <= 3; i++) box(i * 3 + (i < 0 ? 0 : 0), 15, 1, 6, trim);
            for (let i = -3; i < 3; i++) {
              const p = i * 3 + 1;
              box(p, 12, 2, 2, dark);
              orb(p + 0.5, 14, 0.6, trim);
            }
            box(-11, 16, 23, 1, trim); // the entablature
            box(-10, 17, 21, 1, wall);
            // the pediment with its tympanum
            for (let j = 1; j <= 4; j++) {
              const k = 11 - j * 2;
              box(-k, 17 + j, 2 * k + 1, 1, j === 1 ? trim : wall);
              box(-k, 17 + j, 1, 1, trim);
              box(k, 17 + j, 1, 1, trim);
            }
            box(-2, 19, 5, 1, trim);
            // end pavilions: a tall window, pilasters, a parapet and a statue group
            for (const s of [-1, 1]) {
              const px = s * 13;
              box(px - 2, 16, 5, 3, wall);
              for (const d of [-2, 2]) box(px + d, 16, 1, 15, trim);
              box(px - 1, 13, 3, 4, dark);
              box(px - 1, 14, 3, 1, trim);
              box(px - 2, 17, 5, 1, trim);
              box(px - 1, 19, 3, 2, chShade(13, 0.1));
              box(px, 20, 1, 1, chLit(13, 0.2));
            }
            box(-15, 16, 31, 1, trim);
            break;
          }
          case "pampulhaChurch": {
            // São Francisco de Assis, Pampulha (Niemeyer): a tall parabolic concrete vault over the nave, four small
            // vaults stepping down behind it clad in Portinari's blue-and-white tiles, and the free-standing bell
            // tower that widens upwards, with its cross.
            const lit = chLit(6, 0.2),
              sh = chShade(6, 0.25),
              tile = css(e.sh([70, 110, 180])),
              vault = (cx, hw, ht, fill, edge) => {
                for (let j = 1; j <= ht; j++) {
                  const k = Math.round(hw * Math.sqrt(1 - (j - 1) / ht));
                  box(cx - k, j, 2 * k + 1, 1, fill);
                  box(cx - k, j, 1, 1, edge);
                  box(cx + k, j, 1, 1, edge);
                }
              };
            for (let i = 3; i >= 0; i--) {
              const cx = 3 + i * 3;
              vault(cx, 2, 6 - i, tile, 6);
              for (let j = 2; j < 6 - i; j += 2) box(cx - 1, j, 1, 1, 6);
            }
            vault(-4, 5, 12, 6, lit);
            // the front of the big vault: a dark glazed opening behind thin brise-soleil slats
            for (let j = 1; j <= 9; j++) {
              const k = Math.round(3 * Math.sqrt(1 - (j - 1) / 9));
              box(-4 - k, j, 2 * k + 1, 1, chShade(11, 0.45));
            }
            for (let p = -6; p <= -2; p += 2) box(p, 7, 1, 6, sh);
            box(-9, 1, 25, 1, sh); // the forecourt
            // the bell tower
            for (let j = 1; j <= 12; j++) {
              const k = Math.floor((j - 1) / 5);
              box(-12 - k, j, 1 + k, 1, 6);
              box(-12, j, 1, 1, j > 9 ? lit : 6);
            }
            box(-14, 13, 4, 1, sh);
            box(-12, 16, 1, 3, 6);
            box(-13, 15, 3, 1, 6);
            break;
          }
          case "mineirao": {
            // Mineirão, Belo Horizonte: the oval concrete bowl ringed by tall pillars that rise past the roof line,
            // ramp openings between them, and the white membrane roof on top.
            const hw = Math.floor((o.w ?? 31) / 2),
              h = o.h ?? 10,
              conc = chShade(13, 0.1),
              pil = chLit(13, 0.25),
              dark = chShade(13, 0.55);
            for (let i = 1; i <= h; i++) {
              const k = Math.round(hw * (0.86 + (0.14 * i) / h));
              box(-k, i, 2 * k + 1, 1, i % 3 === 1 ? conc : dark);
              box(Math.round(k * 0.5), i, k - Math.round(k * 0.5) + 1, 1, "rgba(24, 20, 48, 0.2)");
            }
            for (let p = -hw + 1; p <= hw - 1; p += 2) {
              const k = Math.abs(p) / hw;
              box(p, h + 2, 1, h + 2 - Math.round(k * 2), Math.abs(p) > hw * 0.5 && p > 0 ? conc : pil); // the pillars
            }
            box(-hw - 1, h + 1, 2 * hw + 3, 2, 6); // the roof
            box(-hw + 2, h + 1, 2 * hw - 3, 1, chShade(6, 0.15));
            box(-hw - 1, h + 2, 2 * hw + 3, 1, chLit(6, 0.3));
            for (let p = -hw + 1; p <= hw - 1; p += 2) box(p, h + 3, 1, 1, pil);
            break;
          }
          case "torreCastelo": {
            // Torre do Castelo, Campinas: a round water tower dressed as a castle keep, its shaft rounded with light
            // and shade, slit windows climbing it, a wider crenellated lookout drum on corbels and a slim turret.
            const h = o.h ?? 22,
              lit = chLit(c, 0.3),
              sh = chShade(c, 0.25);
            box(-3, 1, 7, 1, chShade(c, 0.35));
            box(-2, h, 5, h, c);
            box(-2, h, 1, h, lit);
            box(2, h, 1, h, sh);
            for (let i = 4; i < h - 2; i += 4) box(0, i + 1, 1, 2, 2);
            box(-1, 3, 3, 3, 2);
            for (let j = 0; j < 2; j++) box(-3 - j, h + 1 + j, 7 + 2 * j, 1, j ? c : sh); // the corbels
            box(-4, h + 5, 9, 3, c);
            box(-4, h + 5, 1, 3, lit);
            box(4, h + 5, 1, 3, sh);
            for (let p = -3; p <= 3; p += 2) box(p, h + 4, 1, 1, 2);
            for (let p = -4; p <= 4; p += 2) box(p, h + 6, 1, 1, c);
            box(1, h + 9, 3, 3, c); // the turret
            box(3, h + 9, 1, 3, sh);
            box(1, h + 10, 1, 1, c);
            box(3, h + 10, 1, 1, c);
            break;
          }
          case "arenaPantanal": {
            // Arena Pantanal, Cuiabá: a low bowl wrapped in a bronze mesh skin, four separate white roofed stands
            // standing over it on grey columns, with open gaps at the corners.
            const hw = Math.floor((o.w ?? 33) / 2),
              skin = css(e.sh([150, 100, 70])),
              skinDark = css(e.sh([118, 78, 58])),
              col = chShade(8, 0.1);
            for (let i = 1; i <= 6; i++) {
              const k = hw - 2 + Math.round(i / 3);
              box(-k, i, 2 * k + 1, 1, i % 2 ? skin : skinDark);
            }
            for (let p = -hw + 1; p < hw; p += 2) box(p, 5, 1, 4, skinDark); // the mesh ribs
            box(-hw + 2, 1, 2 * hw - 3, 1, chShade(8, 0.4));
            // the stands' white roofs on their columns: one long side stand flanked by the end stands
            for (const [l, r] of [
              [-hw, -hw + 7],
              [-hw + 9, hw - 9],
              [hw - 7, hw],
            ]) {
              box(l, 10, r - l + 1, 2, 6);
              box(l, 9, r - l + 1, 1, chShade(6, 0.25));
              box(l, 10, r - l + 1, 1, chLit(6, 0.3));
              for (let p = l + 1; p < r; p += 3) box(p, 8, 1, 2, col);
            }
            box(-hw + 9, 11, 2 * hw - 17, 1, 6); // the main stand's raised roof
            break;
          }
          case "estufaCuritiba": {
            // The Botanical Garden greenhouse, Curitiba: an Art Nouveau glasshouse of white iron frames, a tall
            // central pavilion with a rounded, bell-shaped roof and lantern, and two lower wings with curved roofs.
            const glass = css(e.sh([150, 200, 210])),
              glassSh = css(e.sh([112, 160, 178])),
              frame = 6,
              pane = (l, r, from, to, f) => {
                box(l, to, r - l + 1, to - from + 1, f);
                for (let p = l; p <= r; p += 2) box(p, to, 1, to - from + 1, frame);
                for (let j = from; j <= to; j += 3) box(l, j, r - l + 1, 1, frame);
              };
            box(-12, 1, 25, 1, chShade(13, 0.2)); // the plinth
            // the wings: glass walls under a quarter-round roof falling outwards
            for (const s of [-1, 1]) {
              const l = s < 0 ? -12 : 5,
                r = s < 0 ? -5 : 12;
              pane(l, r, 2, 6, s > 0 ? glassSh : glass);
              for (let j = 1; j <= 3; j++) {
                const k = Math.round(7 * Math.sqrt(1 - (j / 4) ** 2));
                const a = s < 0 ? -5 - k : 5,
                  b = s < 0 ? -5 : 5 + k;
                box(a, 6 + j, b - a + 1, 1, j === 3 ? frame : s > 0 ? glassSh : glass);
                box(s < 0 ? a : b, 6 + j, 1, 1, frame);
              }
            }
            // the central pavilion: straight glass walls, then the bell roof narrowing to a lantern
            pane(-4, 4, 2, 10, glass);
            for (let j = 1; j <= 7; j++) {
              const k = Math.max(1, Math.round(5 * Math.cos((j / 8) * (Math.PI / 2)) ** 0.7));
              box(-k, 10 + j, 2 * k + 1, 1, glass);
              box(-k, 10 + j, 1, 1, frame);
              box(k, 10 + j, 1, 1, frame);
              if (j % 2) box(0, 10 + j, 1, 1, frame);
            }
            box(-1, 19, 3, 2, frame); // the lantern
            box(0, 21, 1, 2, frame);
            box(-1, 4, 3, 3, 2); // the door
            break;
          }
          case "hercilioLuz": {
            // Hercílio Luz Bridge, Florianópolis: an eyebar-chain suspension bridge whose chains form the top of a
            // stiffening truss, so they dip to meet the deck at mid-span; tall lattice towers with X bracing, the
            // backstays running down to the anchorages and truss approach spans on piers.
            const dh = 8,
              th = 25,
              tx = 11,
              ends = 22,
              sh = chShade(8, 0.3),
              pier = 13;
            const chain = (x) => Math.round(dh + 1 + (th - dh - 1) * (Math.abs(x) / tx) ** 2.2);
            for (const p of [-ends, -17, 17, ends]) box(p - 1, dh - 1, 2, dh - 1, pier); // the piers
            for (const p of [-tx, tx]) box(p - 2, dh - 1, 5, dh - 1, pier);
            box(-ends - 1, dh, 2 * ends + 3, 1, 8); // the deck
            box(-ends - 1, dh - 1, 2 * ends + 3, 1, sh);
            // the main span's chain and its truss
            for (let x = -tx + 1; x < tx; x++) box(x, chain(x), 1, 1, 8);
            for (let x = -tx + 2; x <= tx - 2; x += 2) {
              const up = chain(x);
              if (up > dh + 2) box(x, up - 1, 1, up - dh - 2, sh);
              if (x < 0 && up > dh + 3) stroke(x, up, x + 2, dh + 1, 8);
              if (x > 0 && up > dh + 3) stroke(x, up, x - 2, dh + 1, 8);
            }
            // the backstays with their short truss, down to the anchorages
            for (const s of [-1, 1])
              for (let i = 0; i <= ends - tx; i++) {
                const x = s * (tx + i),
                  up = Math.round(th - ((th - dh - 1) * i) / (ends - tx));
                box(x, up, 1, 1, 8);
                if (i % 2 === 0 && up > dh + 1) box(x, up - 1, 1, up - dh - 1, sh);
              }
            // the lattice towers
            for (const p of [-tx, tx]) {
              box(p - 1, th + 1, 1, th + 1 - dh, 8);
              box(p + 1, th + 1, 1, th + 1 - dh, 8);
              box(p - 1, th + 2, 3, 1, 8);
              for (let j = dh + 1; j < th - 1; j += 4) {
                stroke(p - 1, j, p + 1, j + 4, 8);
                stroke(p + 1, j, p - 1, j + 4, 8);
              }
              box(p - 1, dh + 3, 3, 1, 8);
            }
            break;
          }
          case "artDecoStation": {
            // An Art Deco block with a central clock tower (Goiânia's railway station): long wings
            // with horizontal bands and window strips, a taller entrance bay with vertical fins, and a stepped
            // tower with its clock and flagpole. o.w wide, o.nh wings, o.th tower top; colours c and t.
            const hw = Math.floor((o.w ?? 27) / 2),
              nh = o.nh ?? 9,
              th = o.th ?? 20,
              lit = chLit(c, 0.3),
              sh = chShade(c, 0.25);
            box(-hw, nh, 2 * hw + 1, nh, c);
            box(hw, nh - 1, 1, nh - 1, sh);
            box(-hw - 1, nh + 1, 2 * hw + 3, 1, lit); // the coping
            for (const r of [3, 6]) box(-hw + 1, r, 2 * hw - 1, 1, 2); // the window strips
            for (let p = -hw + 2; p < hw; p += 3) box(p, 6, 1, 4, c);
            box(-hw, 4, 2 * hw + 1, 1, t);
            // the entrance bay
            box(-5, nh + 3, 11, nh + 3, c);
            box(5, nh + 2, 1, nh + 2, sh);
            for (const p of [-4, -2, 0, 2, 4]) box(p, nh + 2, 1, nh - 1, lit);
            box(-3, 4, 7, 3, 2);
            box(-6, nh + 4, 13, 1, t);
            // the stepped tower
            box(-2, th, 5, th - nh - 3, c);
            box(2, th - 1, 1, th - nh - 4, sh);
            orb(0, th - 4, 1.5, 6);
            box(0, th - 4, 1, 2, 2);
            box(-3, th + 1, 7, 1, t);
            box(-1, th + 3, 3, 2, c);
            box(0, th + 6, 1, 3, 8);
            break;
          }
          case "faroCaboBranco": {
            // Cabo Branco Lighthouse, João Pessoa: a tapering triangular tower, black below and white above, rising
            // out of the three wide arms of a sisal-leaf star that spread out low over its little base house.
            const h = o.h ?? 21,
              lit = chLit(6, 0.2),
              sh = chShade(6, 0.25),
              black = css(e.sh([40, 44, 52]));
            box(-3, 4, 7, 4, 6); // the base house
            box(3, 3, 1, 3, sh);
            box(-1, 3, 1, 1, 2);
            for (let i = 5; i <= h; i++) {
              const k = i < 15 ? 2 : 1,
                low = i < 14;
              box(-k, i, 2 * k + 1, 1, low ? black : 6);
              box(k, i, 1, 1, low ? black : sh);
              if (!low) box(-k, i, 1, 1, lit);
            }
            // the star's arms: thin wedges, thicker at the middle
            for (const s of [-1, 1])
              for (let i = 1; i <= 6; i++) {
                const x = s * (2 + i);
                box(x, 6 + Math.round(i / 3), 1, i < 4 ? 2 : 1, i < 5 ? 6 : lit);
                box(x, 5 + Math.round(i / 3) - (i < 4 ? 1 : 0), 1, 1, sh);
              }
            box(-2, 6, 5, 2, 6);
            box(0, h + 2, 1, 2, 8); // the lamp
            box(-1, h + 1, 3, 1, 8);
            break;
          }
          case "fortBastion": {
            // A Portuguese colonial bastion fort (Macapá's São José, Natal's Reis Magos; shared in b32): low battered
            // walls with a rounded parapet, pointed bastions at the ends with domed sentry boxes on their tips, and
            // inside either a white gatehouse with a pediment and urn-topped gate pillars (o.gate "pediment", with
            // o.bridge the red footbridge to it) or a long tile-roofed barracks (o.gate "barracks"). o.w wide, o.wh high.
            const hw = Math.floor((o.w ?? 29) / 2),
              wh = o.wh ?? 7,
              rgb = o.rgb ?? colors[c], // o.rgb: the stone as [r, g, b] when no palette colour fits
              st = css(e.sh(rgb)),
              lit = css(e.sh(mixc(rgb, [255, 248, 225], 0.25))),
              sh = css(e.sh(mixc(rgb, [41, 40, 54], 0.3))),
              alt = css(e.sh(mixc(rgb, [41, 40, 54], 0.1))),
              wall = (l, r) => {
                for (let i = 1; i <= wh; i++) {
                  const b = Math.floor((wh - i) / 3); // the batter: wider at the foot
                  box(l - b, i, r - l + 1 + 2 * b, 1, i % 2 ? st : alt);
                }
                box(l, wh + 1, r - l + 1, 1, lit); // the rounded parapet
              };
            if (o.gate === "barracks") {
              box(-hw + 6, wh + 4, 2 * hw - 11, 3, 6);
              for (let j = 1; j <= 2; j++)
                box(-hw + 5 + j, wh + 4 + j, 2 * hw - 9 - 2 * j, 1, j === 1 ? 5 : chShade(5, 0.25));
              for (let p = -hw + 8; p < hw - 6; p += 3) box(p, wh + 3, 1, 2, 2);
            }
            wall(-hw + 4, hw - 4);
            // the bastions, their faces in light and shade
            for (const s of [-1, 1]) {
              for (let i = 1; i <= wh; i++) {
                const k = Math.round(4 * (1 - (i - 1) / (wh * 1.6)));
                box(s < 0 ? -hw : hw - k + 1, i, k, 1, s < 0 ? lit : sh);
              }
              const gx = s * (hw - 2); // the sentry box
              box(gx - 1, wh + 4, 3, 3, 6);
              box(gx, wh + 3, 1, 2, 2);
              dome(gx, wh + 4, 1, 6);
              box(gx, wh + 6, 1, 1, 6);
            }
            box(-hw, 1, 2 * hw + 1, 1, sh);
            for (let p = -hw + 6; p < hw - 5; p += 4) box(p, wh - 2, 1, 1, sh); // the drain spouts
            if (o.gate === "pediment") {
              // the gate pillars with urns, the white gatehouse with a red roof and blue door
              for (const p of [-8, -4]) {
                box(p, wh + 4, 2, wh + 4, 6);
                box(p + 1, wh + 3, 1, wh + 3, chShade(6, 0.2));
                box(p - 1, wh + 5, 4, 1, 6);
                box(p, wh + 7, 2, 2, 6);
              }
              box(3, wh + 5, 9, 9, 6);
              box(11, wh + 4, 1, 8, chShade(6, 0.2));
              for (let j = 1; j <= 3; j++)
                box(3 + j, wh + 5 + j, 9 - 2 * j, 1, j === 3 ? chShade(6, 0.15) : 6);
              box(8, wh + 6, 4, 1, 10);
              box(9, wh + 7, 3, 1, 10);
              box(6, 6, 3, 5, 7);
              box(6, 6, 3, 1, chShade(7, 0.3));
              if (o.bridge)
                for (let p = -8; p <= 1; p++) {
                  box(p, 3, 1, 1, 10);
                  if (p % 3 === 0) box(p, 2, 1, 2, 10);
                  box(p, 4, 1, 1, p % 2 ? 6 : 10);
                }
            } else {
              box(-1, 4, 3, 3, 2); // the gate
              box(-2, 5, 5, 1, lit);
            }
            break;
          }
          case "teatroAmazonas": {
            // Manaus' opera house: a rose-pink front with white pilasters, a portico of columns under a pediment,
            // arched windows, and the dome tiled in the green, yellow and blue of the Brazilian flag.
            const hw = 12,
              pink = css(e.sh([214, 141, 128])),
              pinkSh = css(e.sh([176, 108, 104])),
              tile = [9, 12, 7];
            box(-4, 18, 9, 8, 6); // the drum behind the pediment
            box(-hw, 9, 2 * hw + 1, 9, pink);
            box(hw, 9, 1, 9, pinkSh);
            box(-hw, 1, 2 * hw + 1, 1, pinkSh);
            box(-hw - 1, 10, 2 * hw + 3, 1, 6); // cornice
            for (let p = -hw; p <= hw; p += 2) box(p, 11, 1, 1, 6); // balustrade
            for (const p of [-10, -7, 7, 10]) {
              box(p, 7, 1, 4, 2); // arched windows
              box(p, 8, 1, 1, 6);
            }
            for (let p = -5; p <= 5; p += 2) box(p, 9, 1, 8, 6); // the portico columns
            box(-6, 9, 13, 1, 6);
            for (let j = 0; j < 4; j++) box(-6 + j, 13 + j, 13 - 2 * j, 1, j === 3 ? 13 : 6); // pediment
            box(-1, 15, 3, 1, 12);
            box(-1, 6, 3, 5, 2); // the door
            for (let i = -5; i <= 5; i++) {
              const hgt = Math.floor(Math.sqrt(36 - i * i));
              box(i, 17 + hgt, 1, hgt, tile[Math.abs(i) % 3]); // the tiled dome, in vertical bands
            }
            box(-1, 25, 3, 3, 6);
            box(0, 29, 1, 2, 12);
            break;
          }
          case "elevadorLacerda": {
            // Salvador's Art Deco lift tower: two slim shafts with window slits, a stepped machine room on top,
            // a mast, and the walkway out to the old city.
            const sh = chShade(6, 0.25);
            box(-2, 30, 5, 30, 6);
            box(2, 30, 1, 30, sh);
            for (let i = 4; i < 30; i += 2) box(-1, i, 1, 1, 2);
            for (let i = 4; i < 30; i += 2) box(1, i, 1, 1, 2);
            box(-4, 35, 9, 5, 13);
            box(4, 35, 1, 5, chShade(13, 0.25));
            for (const p of [-3, -1, 1, 3]) box(p, 34, 1, 3, 2);
            box(-3, 37, 7, 2, 6);
            box(-1, 38, 3, 1, 2);
            box(0, 42, 1, 4, 8);
            box(2, 22, 5, 2, 8); // the walkway
            box(6, 22, 1, 22, 13);
            break;
          }
          case "farolDaBarra": {
            // Salvador's Barra lighthouse: a white tower with red bands on the old ochre fort, a gallery and a lantern.
            const ochre = css(e.sh([205, 160, 98]));
            box(-4, 5, 9, 4, ochre);
            for (let p = -4; p <= 4; p += 2) box(p, 6, 1, 1, ochre);
            box(-1, 4, 3, 2, 2);
            box(-2, 18, 5, 13, 6);
            box(2, 18, 1, 13, chShade(6, 0.25));
            box(-2, 16, 5, 2, 10);
            box(-2, 11, 5, 2, 10);
            box(-3, 19, 7, 1, 8);
            box(-1, 22, 3, 3, 11);
            box(-2, 23, 5, 1, 2);
            cone(0, 22, 2, 3, 10);
            box(0, 27, 1, 2, 8);
            break;
          }
          case "bancoBanespa": {
            // São Paulo's Altino Arantes (Banespa) tower: a copy of the Empire State's stepped Art Deco shaft,
            // pale stone with rows of window slits and a lantern on the top.
            const tiers = [
              [11, 12],
              [9, 10],
              [7, 8],
              [5, 6],
            ];
            let top = 0;
            for (const [w, th] of tiers) {
              top += th;
              const l = -Math.floor(w / 2);
              box(l, top, w, th, 13);
              box(l + w - 1, top, 1, th, chShade(13, 0.25));
              for (let i = top - 2; i > top - th; i -= 2)
                for (let p = l + 1; p < l + w - 1; p += 2) box(p, i, 1, 1, 2);
              box(l - 1, top - th + 1, w + 2, 1, 6);
            }
            box(-1, top + 3, 3, 3, 6);
            box(-1, top + 4, 3, 1, 3);
            box(0, top + 10, 1, 7, 8);
            break;
          }
          case "ponteEstaiada": {
            // São Paulo's Octávio Frias de Oliveira bridge: one X-shaped mast, a curved deck, and two planes of
            // cables fanned to the two decks (the crossing of the X is above the road).
            const w = o.w ?? 16,
              dh = 7,
              water = css(e.sh([86, 132, 178]));
            box(-w - 1, 1, 2 * w + 3, 1, water);
            box(-w, dh + 1, 2 * w + 1, 2, 6);
            box(-w, dh - 1, 2 * w + 1, 1, 8);
            for (const s of [-1, 1]) box(s * w, dh, 2, dh, 13);
            stroke(-5, 1, 0, 17, 6);
            stroke(5, 1, 0, 17, 6);
            stroke(0, 17, -5, 29, 6);
            stroke(0, 17, 5, 29, 6);
            stroke(-4, 2, 1, 17, 6);
            stroke(4, 2, -1, 17, 6);
            for (let i = 3; i <= w - 1; i += 3)
              for (const s of [-1, 1]) {
                stroke(s * 5, 29, s * i + s, dh + 3, 8);
                if (i < w - 6) stroke(0, 22, s * (i + 4), dh + 3, 8);
              }
            break;
          }
          case "usinaGasometro": {
            // Porto Alegre's old power station on the Guaíba: a red-brick hall with arched windows and the
            // tall brick chimney (with a pale band at its top) behind it.
            const brick = css(e.sh([160, 84, 66])),
              brickSh = css(e.sh([124, 62, 56])),
              roof = css(e.sh([120, 90, 80]));
            box(-1, 38, 3, 37, brick);
            box(1, 38, 1, 37, brickSh);
            box(-2, 37, 5, 2, 6);
            box(-2, 39, 5, 1, brickSh);
            box(-4, 8, 8, 7, brick);
            box(3, 8, 1, 7, brickSh);
            for (const p of [-3, -1, 1]) {
              box(p, 6, 1, 3, 2);
              box(p, 7, 1, 1, 6);
            }
            for (let j = 0; j < 3; j++) box(-5 + j, 11 + j, 10 - 2 * j, 1, roof);
            box(-4, 1, 8, 1, brickSh);
            break;
          }
