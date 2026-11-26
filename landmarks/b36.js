          case "whiteBridge":
          case "soltaniyehDome":
          case "makkiMosque":
          case "dowlatAbadBadgir":
          case "amirChakhmaq":
          case "azadiTower":
          case "miladTower":
          case "argTabriz":
          case "tabrizMunicipality":
          case "shahCheragh":
          case "argKarimKhan":
          case "semnanArgGate":
          case "imamzadehYahyaSari":
          case "sariClockTower":
          case "darolEhsan":
          case "rashtMunicipality":
          case "fatimaMasumeh":
          case "qazvinJameh":
          case "urmiaJameh":
          case "sehGonbad":
          case "goharshad":
          case "imamReza":
          case "falakOlAflak":
          case "taqBostan":
          case "ganjaliKhan":
          case "kermanJameh":
          case "karajCaravanserai":
          case "amirKabirDam":
          case "sheikhLotfollah":
          case "shahMosque":
          case "valiCastle":
          case "alavianDome":
          case "avicennaMausoleum":
          case "gonbadQabus":
          case "bushehrNPP":
          case "mofakhamMirrorHouse":
          case "birjandCastle":
          case "bandarHinduTemple":
          case "sheikhSafi":
          case "arakBazaar":
          case "aghaZiaMosque": {
            // Iranian landmarks (b36). They share the small drawing helpers below; each inner case draws one
            // real building from its own photo or description.
            const ink3 = (rgb, k = 0) =>
              css(e.sh(k ? mixc(rgb, k > 0 ? [255, 248, 225] : [41, 40, 54], Math.abs(k)) : rgb));
            const ln = (x1, y1, x2, y2, col) => {
              g.fillStyle = col;
              line(g, X(x1), Y(y1), X(x2), Y(y2));
            };
            // A pointed (Persian) arch: jambs from `bottom`, then rows narrowing to a 1-cell point at `top`.
            const parch = (cx, bottom, a, top, col) => {
              if (top - a >= bottom) box(cx - a, top - a, 2 * a + 1, top - a - bottom + 1, col);
              for (let j = 1; j <= a; j++) box(cx - a + j, top - a + j, 2 * (a - j) + 1, 1, col);
            };
            // A dome on `base`, r cells half-wide, `tall` rows high. k 2 is round, k 1 pointed (Seljuk), and
            // s swells it into the Safavid bulb; lit left edge, shaded right side, optional tile dots.
            const pdome = (cx, base, r, tall, col, { s = 0, k = 2, dots, fin = 12 } = {}) => {
              const lit = ink3(col, 0.3),
                dim = ink3(col, -0.28),
                body = ink3(col);
              for (let j = 0; j < tall; j++) {
                const f = (j + 0.5) / tall,
                  hw = Math.round(r * (1 + s * Math.sin(Math.PI * f)) * Math.sqrt(1 - Math.pow(f, k)));
                box(cx - hw, base + j + 1, 2 * hw + 1, 1, body);
                if (hw >= 2) {
                  const d = Math.ceil(hw * 0.45);
                  box(cx + d, base + j + 1, hw - d + 1, 1, dim);
                  box(cx - hw + 1, base + j + 1, 1, 1, lit);
                }
                if (dots && hw >= 3 && j % 2 === 1)
                  for (let p = -hw + 1; p < hw; p++)
                    if ((p + j + 64) % 4 === 0) box(cx + p, base + j + 1, 1, 1, dots);
              }
              if (fin != null) {
                box(cx, base + tall + 2, 1, 2, fin);
                box(cx - 1, base + tall + 3, 3, 1, fin);
              }
            };
            // A minaret on cx, w cells wide: the shaft up to the balcony at b, tile bands every `band` rows,
            // a corbelled balcony, a little lantern and a pointed cap `capH` rows tall.
            const minaret = (cx, b, w, col, { band, bandCol, cap = 4, capCol, lantern = 3 } = {}) => {
              const hw = Math.floor(w / 2),
                rgb = Array.isArray(col) ? col : colors[col];
              col = ink3(rgb);
              capCol = Array.isArray(capCol) ? ink3(capCol) : (capCol ?? col);
              box(cx - hw, b, w, b, col);
              if (w >= 3) box(cx + hw, b - 1, 1, b - 1, ink3(rgb, -0.3));
              if (band) for (let j = band; j < b - 2; j += band) box(cx - hw, j, w, 1, bandCol);
              box(cx - hw, b - 1, w, 1, ink3([41, 40, 54]));
              box(cx - hw - 1, b + 1, w + 2, 2, bandCol ?? col);
              box(cx - hw, b + 1 + lantern, w, lantern, col);
              if (lantern >= 2 && w >= 3) box(cx, b + lantern, 1, lantern - 1, 2);
              cone(cx, b + 1 + lantern, hw, cap, capCol);
              box(cx, b + lantern + cap + 3, 1, 2, 12);
            };
            // A pishtaq: the tall framed portal of a Persian building, its pointed arch recessed and tiled.
            const pishtaq = (cx, hw, h, col, frame, inner, { door = 2, muq } = {}) => {
              box(cx - hw, h, 2 * hw + 1, h, col);
              box(cx - hw, h, 2 * hw + 1, 1, frame);
              box(cx - hw, h - 1, 1, h - 1, frame);
              box(cx + hw, h - 1, 1, h - 1, frame);
              parch(cx, 1, hw - 2, h - 2, inner);
              // the muqarnas hood: a honeycomb of light cells in the head of the arch
              if (muq)
                for (let j = h - hw - 1; j < h - 2; j++)
                  for (let p = -hw + 3; p <= hw - 3; p++)
                    if ((p + j + 64) % 2 === 0) box(cx + p, j, 1, 1, muq);
              box(cx - Math.floor(door / 2), Math.min(4, h - hw - 2), door, Math.min(4, h - hw - 2), 2);
            };
            switch (kind) {
              case "whiteBridge": {
                // Pol-e Sefid, Ahvaz: a white steel through-arch over the Karun, the deck hung across the
                // middle of a tall latticed arch, and a lower second arch springing beside it, on concrete piers.
                const wh = ink3([238, 238, 232]),
                  sh = ink3([238, 238, 232], -0.3),
                  pier = ink3(colors[13], -0.15),
                  dk = 6;
                const truss = (cx, a, top, depth) => {
                  let po, pi;
                  for (let x = -a; x <= a; x++) {
                    const f = x / a,
                      yo = Math.round(top * (1 - f * f)),
                      yi = Math.max(
                        0,
                        Math.round((top - depth) * (1 - f * f)) - (Math.abs(x) > a - 2 ? 1 : 0),
                      );
                    const lo = Math.min(yo, po ?? yo),
                      hi = Math.max(yo, po ?? yo);
                    box(cx + x, hi + 1, 1, hi - lo + 1, wh);
                    if (yi > 0) {
                      const l2 = Math.min(yi, pi ?? yi),
                        h2 = Math.max(yi, pi ?? yi);
                      box(cx + x, h2 + 1, 1, h2 - l2 + 1, sh);
                      if (x % 2 === 0)
                        box(cx + x, yo, 1, yo - yi, wh); // the lattice posts
                      else box(cx + x, Math.round((yo + yi) / 2) + 1, 1, 1, wh);
                      if (x % 2 === 0 && yi > dk + 1) box(cx + x, yi - 1, 1, yi - dk - 1, sh); // hangers
                    }
                    po = yo;
                    pi = yi;
                  }
                };
                truss(0, 13, 18, 3);
                box(-19, dk + 1, 39, 2, wh); // the deck and its rail
                box(-19, dk - 1, 39, 1, sh);
                for (let p = -18; p <= 19; p += 2) box(p, dk + 2, 1, 1, sh);
                for (const p of [-18, -16, 16, 18]) box(p, dk - 2, 1, dk - 2, pier); // the approach piers
                for (const p of [-14, 14]) box(p - 1, 1, 3, 1, pier); // the arch footings
                break;
              }
              case "arakBazaar": {
                // Arak's Qajar bazaar: a long brick front of pointed shop arches under a roof of little domes,
                // each with its skylight, the taller chaharsu dome where the two lanes cross, and the tiled
                // portal of the main lane.
                const br = [184, 132, 92],
                  B = ink3(br),
                  D = ink3(br, -0.3),
                  Lt = ink3(br, 0.3),
                  tile = ink3([52, 120, 170]);
                box(-19, 8, 39, 8, B);
                box(-19, 1, 39, 1, D);
                box(-19, 8, 39, 1, Lt);
                for (let p = -18; p <= 18; p += 3) if (Math.abs(p) > 4) parch(p, 1, 1, 6, D);
                for (let p = -17; p <= 17; p += 4) {
                  if (Math.abs(p) < 7) continue;
                  pdome(p, 8, 2, 2, br, { fin: null });
                  box(p, 11, 1, 1, Lt); // the skylight
                }
                box(-4, 11, 9, 3, B); // the chaharsu: drum and dome
                for (const p of [-3, -1, 1, 3]) box(p, 10, 1, 1, D);
                pdome(0, 11, 4, 4, br, { fin: null });
                box(0, 16, 1, 1, Lt);
                pishtaq(0, 4, 10, B, tile, D, { door: 3 });
                break;
              }
              case "aghaZiaMosque": {
                // Agha Zia ol Din (Sepahdari) Mosque, Arak: a Qajar brick mosque, its tiled entrance iwan between
                // two slim minarets with tile bands and turquoise caps, and a blue tiled dome with yellow
                // patterns on a windowed drum behind.
                const br = [196, 146, 102],
                  B = ink3(br),
                  D = ink3(br, -0.3),
                  blue = [44, 98, 170],
                  tq = ink3([80, 180, 190]);
                box(-10, 9, 21, 9, B);
                box(-10, 1, 21, 1, D);
                box(-10, 9, 21, 1, tq);
                for (const p of [-8, -5, 5, 8]) parch(p, 2, 1, 6, D);
                box(-6, 15, 13, 6, B); // the drum
                for (let p = -5; p <= 5; p += 2) box(p, 14, 1, 2, 2);
                pdome(0, 15, 7, 9, blue, { s: 0.12, k: 1.6, dots: ink3([236, 200, 90]) });
                pishtaq(0, 4, 13, ink3(blue), tq, ink3(blue, -0.35), { muq: tq });
                for (const s of [-1, 1])
                  minaret(s * 7, 19, 3, br, { band: 4, bandCol: tq, cap: 3, capCol: tq });
                break;
              }
              case "sheikhSafi": {
                // Sheikh Safi al-Din shrine, Ardabil: the tall drum of the Allah-Allah tower, wrapped in blue
                // tiles whose turquoise lozenges spell "Allah", under a low dome; beside it the squat
                // sand-coloured dome of the Chini-khaneh on its drum, over a brick front of pointed arches.
                const br = [196, 158, 112],
                  B = ink3(br),
                  D = ink3(br, -0.3),
                  Lt = ink3(br, 0.3),
                  blue = ink3([42, 92, 160]),
                  bsh = ink3([42, 92, 160], -0.3),
                  tq = ink3([86, 184, 196]);
                box(-2, 8, 11, 8, B); // the brick front
                box(-2, 8, 11, 1, Lt);
                for (const p of [3, 6]) parch(p, 1, 1, 6, D);
                box(1, 14, 9, 6, B); // the Chini-khaneh drum, its blind arches, and its ribbed dome
                box(1, 14, 9, 1, Lt);
                for (const p of [2, 4, 6, 8]) box(p, 12, 1, 3, D);
                pdome(5, 14, 4, 5, br, { s: 0.08, k: 1.7, dots: D });
                box(-6, 25, 7, 24, blue); // the Allah-Allah drum
                box(-1, 24, 1, 23, bsh);
                box(-6, 25, 7, 1, tq);
                box(-6, 8, 7, 1, tq);
                for (let j = 10; j < 24; j++)
                  // the lattice of turquoise lozenges
                  for (let p = -5; p <= -1; p++)
                    if ((p + j + 64) % 4 === 0 || (p - j + 64) % 4 === 0) box(p, j, 1, 1, tq);
                parch(-3, 1, 1, 6, ink3([42, 92, 160], -0.45)); // the tiled entrance
                pdome(-3, 25, 3, 3, [42, 92, 160], { fin: 12 });
                break;
              }
              case "bandarHinduTemple": {
                // The Hindu Temple of Bandar Abbas (1892): a plastered square hall with pointed Persian windows
                // and a parapet, small domed kiosks on its corners, and in the middle the tall shikhara-like
                // dome, a ribbed, ringed cone that rises in steps to a pointed finial.
                const wl = [226, 214, 190],
                  W = ink3(wl),
                  D = ink3(wl, -0.3),
                  Lt = ink3(wl, 0.35);
                box(-8, 9, 17, 9, W);
                box(-8, 1, 17, 1, D);
                box(8, 8, 1, 7, D);
                box(-8, 9, 17, 1, Lt);
                for (let p = -8; p <= 8; p += 2) box(p, 10, 1, 1, W); // the parapet
                for (const p of [-5, 5]) parch(p, 3, 1, 7, 2);
                parch(0, 1, 2, 7, 2);
                box(-2, 8, 5, 1, Lt);
                for (const s of [-1, 1]) {
                  // the corner kiosks
                  box(s * 7 - 1, 13, 3, 3, W);
                  box(s * 7, 12, 1, 2, 2);
                  box(s * 7 - 2, 14, 5, 1, Lt);
                  pdome(s * 7, 14, 2, 3, wl, { k: 1.3, fin: null });
                  box(s * 7, 18, 1, 1, D);
                }
                box(-4, 12, 9, 2, W); // the drum
                for (let j = 0; j < 13; j++) {
                  // the ringed, ribbed shikhara
                  const hw = Math.max(0, Math.round(4.5 * (1 - j / 13) ** 0.8));
                  box(-hw, 13 + j, 2 * hw + 1, 1, j % 3 === 2 ? Lt : W);
                  if (hw >= 2) box(Math.ceil(hw / 2), 13 + j, hw - Math.ceil(hw / 2) + 1, 1, D);
                  if (hw >= 2 && j % 3 !== 2) for (const p of [-hw + 1, 0]) box(p, 13 + j, 1, 1, D);
                }
                box(0, 27, 1, 2, 12);
                box(-1, 28, 3, 1, 12);
                break;
              }
              case "birjandCastle": {
                // Birjand Castle: a plain mud-brick enclosure on its rise above the old town, smooth walls
                // with a thin parapet, tall round towers at the corners and one in the middle, and the flat
                // adobe houses stepping down the slope below.
                const mud = [200, 164, 122],
                  M = ink3(mud),
                  D = ink3(mud, -0.3),
                  Dk = ink3(mud, -0.45),
                  Lt = ink3(mud, 0.3);
                const round = (cx, w, h) => {
                  // a round tower: lit left, shaded right, a darker band at its parapet
                  const hw = Math.floor(w / 2);
                  box(cx - hw, h, w, h - 8, M);
                  box(cx - hw, h, 1, h - 8, Lt);
                  box(cx + hw - 1, h, 2, h - 8, D);
                  box(cx - hw, h - 1, w, 1, D);
                  box(cx - hw, h, w, 1, Lt);
                };
                box(-14, 8, 29, 5, ink3(mud, -0.15)); // the rise the castle stands on
                // the houses on the slope
                for (const [l, w, h] of [
                  [-15, 6, 4],
                  [-10, 5, 6],
                  [-5, 7, 5],
                  [2, 6, 6],
                  [8, 5, 4],
                  [12, 4, 5],
                ]) {
                  box(l, h, w, h, M);
                  box(l + w - 1, h, 1, h, D);
                  box(l, h, w, 1, Lt);
                  box(l + 1, 2, 1, 2, Dk);
                }
                box(-12, 13, 24, 5, M); // the curtain wall and its parapet
                box(-12, 13, 24, 1, Lt);
                box(-12, 9, 24, 1, D);
                for (const p of [-6, 6]) box(p, 11, 1, 1, Dk);
                round(-10, 5, 18);
                round(1, 5, 16);
                round(10, 5, 17);
                box(-14, 12, 3, 4, M); // the low bastion on the left
                box(-14, 12, 3, 1, Lt);
                break;
              }
              case "mofakhamMirrorHouse": {
                // Mofakham's Mirror House, Bojnurd: a small Qajar pavilion whose whole front is clad in
                // painted tiles (blue, yellow and white panels of soldiers and courtiers) around a tall central
                // arch glittering with mirror work, under a stepped crest; plain brick sides.
                const br = [190, 150, 110],
                  B = ink3(br),
                  D = ink3(br, -0.3),
                  Lt = ink3(br, 0.3),
                  tb = ink3([50, 104, 168]),
                  ty = ink3([228, 192, 92]),
                  tw = ink3([236, 232, 220]),
                  mir = ink3([200, 214, 226], 0.2);
                box(-11, 11, 23, 11, B);
                box(-11, 1, 23, 1, D);
                box(11, 10, 1, 9, D);
                box(-7, 12, 15, 12, tb); // the tiled front
                // four framed tile panels, each with a painted figure (white face, yellow coat)
                for (const l of [-6, 4])
                  for (const top of [6, 11]) {
                    box(l, top, 3, 4, ink3([92, 150, 200]));
                    box(l + 1, top - 1, 1, 1, tw);
                    box(l + 1, top - 2, 1, 2, ty);
                  }
                box(-7, 7, 15, 1, ty);
                box(-7, 12, 15, 1, ty);
                parch(0, 1, 2, 11, tw); // the mirrored arch
                parch(0, 1, 1, 10, mir);
                for (let j = 3; j < 9; j += 2) box(0, j, 1, 1, tw);
                box(-1, 3, 3, 2, 2);
                cone(0, 12, 4, 3, tb); // the stepped crest
                box(-2, 14, 5, 1, ty);
                box(0, 16, 1, 1, ty);
                for (const s of [-1, 1]) {
                  // the plain brick sides and their windows
                  for (const j of [4, 9]) box(s * 9 - (s < 0 ? 1 : 0), j, 2, 2, 2);
                  box(s * 9 - (s < 0 ? 1 : 0), 10, 2, 1, Lt);
                }
                box(-11, 11, 23, 1, Lt);
                break;
              }
              case "bushehrNPP": {
                // Bushehr nuclear plant: the white reactor containment, a squat cylinder under a broad dome,
                // a rust-brown turbine block with a strip of windows in front of it, and the slim red-and-white
                // ventilation stack with its service platforms.
                const wh = [236, 234, 226],
                  rust = ink3([150, 84, 60]),
                  rsh = ink3([150, 84, 60], -0.3);
                box(-9, 11, 13, 11, ink3(wh)); // the containment
                box(-9, 11, 2, 11, ink3(wh, 0.2));
                box(1, 11, 3, 11, ink3(wh, -0.22));
                pdome(-3, 11, 6, 6, wh, { k: 2.4, fin: null });
                box(-3, 18, 1, 1, ink3(wh, -0.3));
                box(-11, 6, 17, 6, rust); // the turbine block
                box(4, 6, 2, 6, rsh);
                box(-11, 6, 17, 1, ink3([150, 84, 60], 0.3));
                for (let p = -10; p <= 4; p += 2) box(p, 4, 1, 1, ink3(wh));
                box(-6, 2, 2, 2, 2);
                box(6, 4, 4, 4, ink3(colors[13])); // a low annex
                box(9, 4, 1, 4, ink3(colors[13], -0.3));
                for (let j = 0; j < 24; j += 3) box(11, 25 - j, 2, 3, j % 6 ? ink3(wh) : ink3(colors[10])); // the stack
                for (const j of [12, 20]) box(10, j, 4, 1, ink3(colors[8]));
                box(11, 26, 2, 1, ink3([60, 60, 66]));
                break;
              }
              case "gonbadQabus": {
                // Gonbad-e Qabus (1006), near Gorgan: the tallest brick tomb tower, a slightly tapering cylinder
                // whose ten pointed flanges show as vertical ribs of light and shade, two bands of Kufic
                // inscription (under the cornice and near the foot), a corbelled cornice and a plain pointed
                // brick cone, standing on its grassy mound.
                const br = [164, 112, 82],
                  B = ink3(br),
                  D = ink3(br, -0.32),
                  Lt = ink3(br, 0.22),
                  grass = ink3(colors[9]);
                box(-8, 2, 17, 2, grass); // the mound
                box(-6, 3, 13, 1, grass);
                box(-5, 5, 11, 2, ink3(br, -0.15)); // the plinth
                for (let j = 0; j < 26; j++) {
                  const hw = j < 3 ? 5 : 4,
                    up = 6 + j;
                  box(-hw, up, 2 * hw + 1, 1, B);
                  for (let p = -hw; p <= hw; p += 2) box(p, up, 1, 1, p > 1 ? D : p < -1 ? Lt : B); // the flanges
                  box(hw, up, 1, 1, D);
                }
                for (const j of [12, 29]) box(-4, j, 9, 1, ink3(br, 0.38)); // the inscription bands
                box(-1, 10, 2, 4, ink3([41, 40, 54])); // the doorway
                box(-5, 32, 11, 1, Lt); // the corbelled cornice
                box(-5, 33, 11, 1, B);
                for (let j = 0; j < 8; j++) {
                  const hw = Math.round(5 * (1 - j / 8));
                  box(-hw, 34 + j, 2 * hw + 1, 1, B);
                  if (hw >= 1) box(1, 34 + j, hw, 1, D);
                }
                break;
              }
              case "avicennaMausoleum": {
                // Avicenna's mausoleum, Hamadan (1952): twelve slender stone piers rising from a low stone hall,
                // open to the sky between them, tied by a ring at the top and capped by a pale pointed cone
                // modelled on Gonbad-e Qabus.
                const st = [170, 150, 128],
                  S = ink3(st),
                  D = ink3(st, -0.3),
                  Lt = ink3(st, 0.3),
                  pale = [222, 214, 196];
                box(-7, 6, 15, 6, S); // the hall
                box(-7, 6, 15, 1, Lt);
                box(6, 5, 2, 5, D);
                for (let p = -5; p <= 4; p += 3) box(p, 4, 1, 2, 2);
                box(-5, 9, 11, 3, ink3(st, -0.12)); // the plinth the piers stand on
                for (const p of [-1, 1]) box(p, 32, 1, 23, ink3(st, -0.45)); // the back piers, seen between
                for (const p of [-4, -2, 0, 2, 4]) box(p, 33, 1, 24, p < 0 ? Lt : p > 0 ? D : S); // the front piers
                box(-5, 34, 11, 2, S); // the ring
                box(-5, 34, 11, 1, Lt);
                for (let j = 0; j < 10; j++) {
                  const hw = Math.round(5 * (1 - j / 10));
                  box(-hw, 35 + j, 2 * hw + 1, 1, ink3(pale));
                  if (hw >= 1) box(1, 35 + j, hw, 1, ink3(pale, -0.25));
                }
                break;
              }
              case "alavianDome": {
                // Gonbad-e Alavian, Hamadan: a square Seljuk brick tomb whose dome is gone, its walls framed by
                // corner pilasters and blind arches, the famous deep stucco portal carved with vine scrolls
                // under a band of Kufic, and a low modern roof.
                const br = [176, 128, 90],
                  B = ink3(br),
                  D = ink3(br, -0.3),
                  Lt = ink3(br, 0.25),
                  stucco = ink3([222, 200, 160]);
                box(-8, 13, 17, 13, B);
                box(-8, 1, 17, 1, D);
                box(8, 12, 1, 11, D);
                for (const p of [-8, 7]) box(p, 13, 1, 13, Lt); // the corner pilasters
                box(-8, 13, 17, 1, Lt);
                box(-7, 15, 15, 2, ink3(br, -0.12)); // the roof left where the dome was
                cone(0, 14, 4, 2, ink3(br, -0.12));
                for (const p of [-6, 5]) parch(p, 4, 0, 10, D); // blind arches
                box(-4, 12, 9, 11, stucco); // the stucco portal
                box(-4, 12, 9, 1, ink3([222, 200, 160], 0.2)); // the Kufic band
                for (let p = -3; p <= 3; p += 2) box(p, 11, 1, 1, D);
                parch(0, 1, 2, 10, ink3([222, 200, 160], -0.25));
                for (let j = 5; j < 9; j++)
                  for (let p = -1; p <= 1; p++) if ((p + j) % 2) box(p, j, 1, 1, stucco); // vine scrolls
                box(-1, 3, 3, 2, 2);
                break;
              }
              case "valiCastle": {
                // Qal'eh Vali, Ilam (1908): the Qajar governor's residence on its hill, a two-storey block of
                // pale stone with brick trim, rows of pointed-arch windows, a raised centre with a tall arched
                // entrance and a balcony loggia above it, stepped parapets and squat corner turrets.
                const st = [214, 196, 160],
                  S = ink3(st),
                  D = ink3(st, -0.3),
                  Lt = ink3(st, 0.3),
                  br = ink3([164, 108, 76]),
                  hill = ink3([150, 140, 100]);
                box(-14, 2, 29, 2, hill); // the hill
                box(-12, 12, 25, 10, S);
                box(12, 11, 1, 9, D);
                box(-12, 7, 25, 1, br); // the string course between the storeys
                box(-12, 12, 25, 1, br);
                for (let p = -10; p <= 10; p += 3) {
                  if (Math.abs(p) < 4) continue;
                  box(p - 1, 6, 3, 1, Lt); // window heads
                  box(p, 5, 1, 3, 2);
                  box(p - 1, 11, 3, 1, Lt);
                  box(p, 10, 1, 2, 2);
                }
                box(-4, 16, 9, 14, S); // the raised centre
                box(4, 15, 1, 13, D);
                box(-4, 16, 9, 1, br);
                for (let p = -4; p <= 4; p += 2) box(p, 17, 1, 1, S); // stepped parapet
                parch(0, 3, 2, 10, br); // the entrance in its brick frame
                parch(0, 3, 1, 9, 2);
                for (const p of [-2, 0, 2]) parch(p, 12, 0, 15, 2); // the loggia
                box(-3, 12, 7, 1, br);
                for (const s of [-1, 1]) {
                  box(s * 12 - 1, 15, 3, 13, S); // the corner turrets
                  box(s * 12 - 1, 15, 3, 1, br);
                  box(s * 12 - 1, 16, 1, 1, S);
                  box(s * 12 + 1, 16, 1, 1, S);
                }
                break;
              }
              case "shahMosque": {
                // Shah (Imam) Mosque, Isfahan, from Naqsh-e Jahan Square: the great blue entrance portal with
                // its muqarnas hood between two tall minarets, set at an angle to the mosque, so the huge
                // turquoise bulb dome rises behind on its high drum (a white band of calligraphy), with the
                // second pair of minarets of the prayer-hall iwan beside it. Blue tiles with yellow patterns.
                const blue = [38, 88, 168],
                  Bl = ink3(blue),
                  Bd = ink3(blue, -0.35),
                  tq = [72, 172, 192],
                  ye = ink3([232, 200, 104]),
                  wt = ink3([238, 236, 226]);
                box(-14, 9, 31, 9, Bl); // the courtyard walls with their arcades
                box(-14, 9, 31, 1, ye);
                for (let p = -13; p <= 16; p += 3) parch(p, 2, 0, 6, Bd);
                box(3, 19, 13, 8, Bl); // the drum, its windows and its band of calligraphy
                box(3, 19, 13, 2, wt);
                for (let p = 4; p <= 14; p += 2) box(p, 16, 1, 3, Bd);
                pdome(9, 19, 7, 11, tq, { s: 0.14, k: 1.5, dots: ink3([30, 90, 150]) });
                minaret(16, 21, 3, blue, { band: 5, bandCol: ye, cap: 3, capCol: tq });
                pishtaq(-5, 5, 21, Bl, ye, Bd, { door: 3, muq: ink3(tq) });
                box(-10, 22, 11, 1, wt); // the calligraphy band across the portal's top
                for (const s of [-1, 1])
                  minaret(-5 + s * 7, 30, 3, blue, { band: 5, bandCol: ye, cap: 4, capCol: tq });
                break;
              }
              case "sheikhLotfollah": {
                // Sheikh Lotfollah Mosque, Isfahan: no minarets and no courtyard, just the blue tiled portal set
                // into the square's two-storey arcade, and beside it (turned toward Mecca) the low cream dome
                // patterned with turquoise and white arabesques on a blue drum with grilled windows.
                const sand = [214, 186, 144],
                  S = ink3(sand),
                  D = ink3(sand, -0.3),
                  Lt = ink3(sand, 0.4),
                  blue = [40, 96, 168],
                  Bl = ink3(blue),
                  tq = ink3([86, 184, 196]),
                  dm = [222, 196, 156];
                box(2, 15, 13, 4, Bl); // the drum and its window grilles
                for (let p = 3; p <= 13; p += 2) box(p, 14, 1, 2, ink3(blue, -0.4));
                box(2, 15, 13, 1, tq);
                pdome(8, 15, 6.4, 7, dm, { k: 2.2, dots: tq });
                box(-8, 11, 22, 11, S); // the square's arcade
                box(-8, 11, 22, 1, Lt);
                box(-8, 1, 22, 1, D);
                for (const p of [3, 6, 9, 12]) {
                  parch(p, 6, 1, 10, Lt); // the upper arches with their white plaster heads
                  parch(p, 6, 0, 9, 2);
                  box(p - 1, 4, 2, 3, 2); // the shops below, under white awnings
                  box(p - 1, 5, 3, 1, ink3([238, 236, 226]));
                }
                box(-8, 6, 22, 1, tq);
                pishtaq(-3, 4, 14, Bl, tq, ink3(blue, -0.35), { door: 2, muq: ink3([232, 200, 104]) });
                box(-7, 14, 9, 1, ink3([232, 200, 104]));
                break;
              }
              case "amirKabirDam": {
                // Amir Kabir (Karaj) Dam: a thin concrete arch dam wedged in a steep gorge of the Alborz, its
                // curved face shaded from the lit left abutment into the shadowed right, a road on the crest,
                // the chute of the spillway down the left flank and the power house at its foot.
                const rock = [150, 118, 90],
                  R1 = ink3(rock),
                  R2 = ink3(rock, -0.3),
                  R3 = ink3(rock, 0.2),
                  con = [206, 204, 196];
                for (let j = 0; j < 25; j++) {
                  // the gorge walls, ragged peaks, the left one lit and the right one in shade
                  const l = 10 + Math.round(j * 0.6),
                    r = 9 + Math.round(j * 0.45),
                    ol = 27 - Math.max(0, j - 17) + (j % 3),
                    or = 25 - Math.max(0, j - 18) + ((j + 1) % 2);
                  if (ol > l) box(-ol, j + 1, ol - l, 1, j % 5 === 4 ? R3 : R1);
                  if (or > r) box(r, j + 1, or - r, 1, j % 4 === 3 ? R1 : R2);
                }
                for (let j = 0; j < 17; j++) {
                  // the curved face: wider at the crest, banded light to dark across
                  const l = -10 - Math.round(j * 0.6),
                    r = 9 + Math.round(j * 0.45);
                  for (let p = l; p <= r; p += 1) {
                    const f = (p - l) / (r - l);
                    box(p, j + 1, 1, 1, ink3(con, f < 0.25 ? 0.25 : f < 0.6 ? 0 : f < 0.85 ? -0.18 : -0.32));
                  }
                }
                box(-21, 18, 38, 1, ink3(con, 0.3)); // the crest road
                box(-21, 19, 38, 1, ink3(con, -0.2));
                for (let p = -20; p <= 16; p += 3) box(p, 20, 1, 1, ink3(con, -0.2));
                for (let j = 1; j < 17; j++) box(-12 - Math.round(j * 0.6), j, 2, 1, ink3([200, 224, 230])); // the spillway
                box(-4, 4, 9, 4, ink3(colors[13])); // the power house
                for (let p = -3; p <= 3; p += 2) box(p, 2, 1, 1, 2);
                box(-21, 1, 4, 1, ink3([90, 150, 170]));
                break;
              }
              case "karajCaravanserai": {
                // Shah Abbasi Caravanserai, Karaj: a long Safavid brick front with a tall central portal
                // (a pointed arch in a framed pishtaq), rows of shallow arched bays on both sides, and squat
                // round towers at the corners.
                const br = [192, 140, 96],
                  B = ink3(br),
                  D = ink3(br, -0.32),
                  Lt = ink3(br, 0.28);
                box(-11, 9, 23, 9, B);
                box(-11, 1, 23, 1, D);
                box(-11, 9, 23, 1, Lt);
                for (const p of [-9, -7, -5, 5, 7, 9]) {
                  parch(p, 1, 0, 6, D); // the bays
                  box(p, 7, 1, 1, Lt);
                }
                for (const s of [-1, 1]) {
                  box(s * 11 - 1, 10, 3, 10, B); // the corner towers
                  box(s * 11 + 1, 10, 1, 10, D);
                  box(s * 11 - 1, 10, 3, 1, Lt);
                }
                pishtaq(0, 4, 16, B, Lt, D, { door: 3 });
                for (let p = -3; p <= 3; p += 2) box(p, 15, 1, 1, Lt); // the brick pattern of the frame
                box(-4, 17, 9, 1, Lt);
                break;
              }
              case "kermanJameh": {
                // Jameh Mosque of Kerman (1349): the tall square entrance portal, clad all over in blue
                // mosaic tiles, its deep pointed arch framed by a brick-coloured rope moulding with a muqarnas
                // hood and a small door, three stacked niches on each side, low tiled wings, and the little
                // Qajar clock kiosk perched on top.
                const blue = [44, 94, 170],
                  Bl = ink3(blue),
                  Bd = ink3(blue, -0.35),
                  Bp = ink3(blue, 0.3),
                  rope = ink3([196, 150, 104]),
                  tq = ink3([96, 186, 196]);
                for (const s of [-1, 1]) {
                  box(s > 0 ? 10 : -15, 11, 6, 11, Bl); // the wings and their arched panels
                  box(s > 0 ? 10 : -15, 11, 6, 1, Bp);
                  parch(s * 12.5 + (s > 0 ? 0 : 0), 2, 1, 8, Bd);
                }
                box(-10, 26, 21, 26, Bl); // the portal block
                box(-10, 26, 21, 1, Bp);
                box(10, 25, 1, 24, Bd);
                for (const s of [-1, 1])
                  for (const b of [3, 10, 17]) {
                    parch(s * 7.5 + (s > 0 ? 0 : 0), b, 1, b + 5, Bp); // the stacked niches
                    box(s * 7.5 - 0.5 + 0.5, b + 3, 1, 3, Bd);
                  }
                parch(0, 1, 5, 23, rope); // the rope moulding
                parch(0, 1, 4, 22, Bd); // the deep arch and its muqarnas hood
                for (let j = 14; j < 21; j++)
                  for (let p = -3; p <= 3; p++) if ((p + j + 64) % 2 === 0) box(p, j, 1, 1, Bp);
                box(-2, 9, 5, 8, Bl); // the inner panel and the door
                box(-1, 4, 3, 4, ink3([150, 100, 64]));
                box(-1, 5, 3, 1, ink3([150, 100, 64], 0.3));
                box(-2, 29, 5, 3, rope); // the clock kiosk
                orb(0, 28, 1, 6);
                box(0, 28, 1, 1, 2);
                box(-3, 30, 7, 1, tq);
                pdome(0, 30, 2, 2, [214, 166, 90], { fin: 12 });
                break;
              }
              case "ganjaliKhan": {
                // Ganjali Khan caravanserai, Kerman (Safavid, on Ganjali Khan Square): a two-storey brick front
                // of deep pointed arches, the upper ones open loggias, and in the middle a tall entrance portal
                // tiled in yellow ochre and blue, with painted spandrels and a band of white calligraphy.
                const br = [206, 160, 112],
                  B = ink3(br),
                  D = ink3(br, -0.32),
                  Lt = ink3(br, 0.3),
                  ochre = ink3([214, 170, 70]),
                  blue = ink3([46, 98, 168]),
                  wt = ink3([238, 234, 222]);
                box(-11, 12, 23, 12, B);
                box(-11, 1, 23, 1, D);
                box(-11, 12, 23, 1, Lt);
                box(-11, 6, 23, 1, Lt);
                for (const p of [-9, -6, 6, 9]) {
                  parch(p, 1, 1, 5, ink3(br, -0.5));
                  parch(p, 7, 1, 11, ink3(br, -0.5));
                  box(p - 1, 8, 3, 1, D); // the loggia balustrade
                }
                pishtaq(0, 4, 17, ochre, blue, ink3([46, 98, 168], -0.3), { door: 3, muq: ochre });
                for (const s of [-1, 1]) box(s * 3, 15, 1, 2, blue); // the painted spandrels
                box(-4, 16, 9, 1, wt);
                break;
              }
              case "taqBostan": {
                // Taq-e Bostan, Kermanshah: Sasanian grottoes cut into the foot of a great pale cliff, the big
                // vaulted iwan in its squared frame (winged victories in the spandrels, the reliefs inside) and
                // the smaller arch beside it, above the spring-fed pool that mirrors them.
                const rk = [196, 170, 136],
                  R = ink3(rk),
                  Rd = ink3(rk, -0.25),
                  Rl = ink3(rk, 0.22),
                  cut = ink3([222, 206, 180]),
                  deep = ink3([96, 80, 70]),
                  water = ink3([86, 140, 160]);
                for (let j = 0; j < 24; j++) {
                  // the cliff: a ragged ridge, higher on the left, with ledges and seams
                  const l = -16 + Math.round(Math.max(0, j - 10) * 0.7) + (j % 2),
                    r = 16 - Math.round(Math.max(0, j - 6) * 1.1) + ((j * 7) % 3);
                  if (r <= l) continue;
                  box(l, j + 1, r - l + 1, 1, j % 6 === 5 ? Rl : R);
                  box(r - 2, j + 1, 3, 1, Rd);
                }
                for (const [x, y] of [
                  [-12, 20],
                  [-6, 23],
                  [3, 17],
                  [9, 12],
                ])
                  box(x, y, 4, 1, Rd);
                box(-11, 12, 11, 10, cut); // the big iwan's frame
                box(-9, 8, 7, 6, deep); // its round vault, with the relief panel inside
                dome(-6, 8, 3, deep);
                box(-8, 6, 5, 3, Rd);
                box(-7, 5, 3, 1, cut);
                for (const p of [-10, -2]) box(p, 11, 1, 2, Rd); // the winged victories
                box(2, 9, 7, 7, cut); // the small iwan
                box(3, 6, 5, 4, deep);
                dome(5, 6, 2, deep);
                box(-16, 2, 33, 2, water); // the pool and its reflection
                box(-8, 2, 5, 1, ink3([86, 140, 160], -0.25));
                box(4, 2, 3, 1, ink3([86, 140, 160], -0.25));
                break;
              }
              case "falakOlAflak": {
                // Falak-ol-Aflak, Khorramabad: the Sasanian castle on its steep green hill, tall round towers
                // edged with rows of small merlons, the great central tower stepping out into a fat lower drum,
                // crenellated walls between, a lower windowed wing on the right and the long wall down the slope.
                const st = [192, 164, 124],
                  S = ink3(st),
                  D = ink3(st, -0.3),
                  Lt = ink3(st, 0.25),
                  green = ink3(colors[9]),
                  gd = ink3(colors[9], -0.3);
                for (let j = 0; j < 8; j++) {
                  // the hill
                  const hw = 17 - Math.round(j * 0.8);
                  box(-hw, j + 1, 2 * hw + 1, 1, (j + 3) % 4 ? green : gd);
                }
                for (let p = -15; p <= 14; p++) {
                  box(p, 3 + Math.round((p + 15) / 6), 1, 2, D); // the long wall down the slope
                  box(p, 3 + Math.round((p + 15) / 6), 1, 1, S);
                }
                const merlons = (l, w, top) => {
                  for (let p = l; p < l + w; p += 2) box(p, top + 1, 1, 1, S);
                };
                const round = (cx, hw, bottom, top) => {
                  box(cx - hw, top, 2 * hw + 1, top - bottom, S);
                  box(cx - hw, top, 1, top - bottom, Lt);
                  box(cx + hw - 1, top, 2, top - bottom, D);
                  box(cx - hw, top - 1, 2 * hw + 1, 1, D);
                  merlons(cx - hw, 2 * hw + 1, top);
                };
                box(-13, 18, 26, 10, S); // the walls between the towers
                box(-13, 18, 26, 1, Lt);
                merlons(-13, 26, 18);
                box(5, 17, 11, 9, S); // the lower wing and its windows
                merlons(5, 11, 17);
                for (const p of [9, 11]) box(p, 14, 1, 2, 2);
                box(14, 16, 2, 8, D);
                round(-13, 2, 8, 17); // the left tower
                round(-8, 3, 8, 22);
                round(0, 5, 8, 14); // the central tower: the fat lower drum, the tall upper tower
                round(0, 4, 14, 23);
                round(15, 2, 8, 18);
                break;
              }
              case "imamReza": {
                // Imam Reza shrine, Mashhad, from the Old Courtyard: the golden dome on its tall gold drum with a
                // blue inscription band, the gold minaret with its lantern balcony, the tall Golden Iwan (a pale
                // tiled frame around a gilded arch) and the little octagonal saqqakhaneh with its grey dome in
                // front, between two-storey tiled arcades.
                const gold = [226, 182, 72],
                  G = ink3(gold),
                  Gd = ink3(gold, -0.3),
                  Gl = ink3(gold, 0.35),
                  blue = [50, 100, 170],
                  Bl = ink3(blue),
                  pale = [226, 220, 204],
                  P = ink3(pale),
                  Pd = ink3(pale, -0.3);
                box(-16, 11, 33, 11, Bl); // the courtyard arcades
                box(-16, 11, 33, 1, P);
                box(-16, 6, 33, 1, P);
                for (const p of [-14, -11, 11, 14]) {
                  parch(p, 1, 1, 5, ink3(blue, -0.35));
                  parch(p, 7, 1, 10, ink3(blue, -0.35));
                }
                box(-14, 22, 9, 10, G); // the gold drum and its inscription band
                box(-14, 22, 9, 1, Gl);
                box(-14, 19, 9, 2, Bl);
                box(-6, 21, 1, 9, Gd);
                pdome(-10, 22, 5, 7, gold, { s: 0.12, k: 1.8 }); // the golden dome
                minaret(4, 28, 3, gold, { bandCol: Gl, cap: 5, lantern: 2 }); // the gold minaret
                box(-5, 22, 15, 22, P); // the Golden Iwan
                box(9, 21, 1, 21, Pd);
                box(-5, 22, 15, 1, Bl);
                for (const p of [-5, 9]) box(p, 21, 1, 20, Bl);
                parch(2, 1, 5, 19, Bl);
                parch(2, 1, 4, 18, G); // the gilded arch with its muqarnas
                for (let j = 12; j < 17; j++)
                  for (let p = -1; p <= 5; p++) if ((p + j + 64) % 2 === 0) box(p, j, 1, 1, Gl);
                box(-2, 7, 9, 6, Gd); // the saqqakhaneh
                for (const p of [-1, 2, 5]) parch(p, 1, 0, 4, ink3([60, 60, 70]));
                box(-2, 7, 9, 1, Gl);
                pdome(2, 7, 4, 3, [150, 160, 172], { k: 2.4 });
                break;
              }
              case "goharshad": {
                // Goharshad Mosque, Mashhad (1418): the colossal blue-tiled maqsura iwan, its deep pointed arch
                // edged in a cable moulding, flanked from the ground by two thick round minarets in a lattice
                // of brick and blue tile with corbelled balconies and little domed lanterns, the turquoise dome
                // just showing behind, and two-storey arcades running off to both sides.
                const blue = [46, 96, 168],
                  Bl = ink3(blue),
                  Bd = ink3(blue, -0.38),
                  Bp = ink3(blue, 0.3),
                  br = [196, 160, 120],
                  tq = [80, 186, 196];
                pdome(0, 22, 5, 4, tq, { k: 2.4 });
                box(-14, 10, 29, 10, Bl); // the arcades
                box(-14, 10, 29, 1, Bp);
                for (const p of [-13, -10, 10, 13]) {
                  parch(p, 1, 1, 5, Bd);
                  parch(p, 6, 1, 9, Bd);
                }
                pishtaq(0, 7, 23, Bl, Bp, Bd, { door: 4, muq: Bp });
                parch(0, 1, 5, 21, ink3(br)); // the cable moulding
                parch(0, 1, 4, 20, Bd);
                for (let j = 12; j < 19; j++)
                  for (let p = -3; p <= 3; p++) if ((p + j + 64) % 2 === 0) box(p, j, 1, 1, Bp);
                for (const s of [-1, 1]) {
                  const cx = s * 9;
                  minaret(cx, 26, 3, br, { cap: 2, capCol: tq, bandCol: ink3(br, 0.25) });
                  for (let j = 2; j < 25; j++)
                    for (let p = -1; p <= 1; p++) if ((p + j + 64) % 3 === 0) box(cx + p, j, 1, 1, Bl); // the tile lattice
                }
                break;
              }
              case "sehGonbad": {
                // Seh Gonbad, Urmia (1180): a small Seljuk tomb tower, a brick cylinder on a stone base with a
                // carved stucco portal framed in Kufic bands on its north face, a corbelled muqarnas cornice and a
                // low pointed brick cone.
                const br = [170, 112, 80],
                  B = ink3(br),
                  D = ink3(br, -0.32),
                  Lt = ink3(br, 0.22),
                  stuc = ink3([226, 204, 168]);
                box(-5, 2, 11, 2, ink3(colors[13], -0.1)); // the stone base
                box(-4, 15, 9, 13, B);
                box(-4, 15, 1, 13, Lt);
                box(3, 15, 2, 13, D);
                box(-2, 12, 5, 9, stuc); // the stucco portal
                parch(0, 3, 1, 10, ink3([226, 204, 168], -0.35));
                box(-1, 5, 3, 2, 2);
                for (let j = 4; j < 12; j += 2) box(-2, j, 1, 1, ink3([226, 204, 168], -0.2));
                box(-5, 16, 11, 1, Lt); // the muqarnas cornice
                for (let p = -4; p <= 4; p += 2) box(p, 15, 1, 1, D);
                for (let j = 0; j < 6; j++) {
                  const hw = Math.round(5 * (1 - j / 6));
                  box(-hw, 17 + j, 2 * hw + 1, 1, B);
                  if (hw) box(1, 17 + j, hw, 1, D);
                }
                break;
              }
              case "urmiaJameh": {
                // Jameh Mosque of Urmia (Seljuk, rebuilt by the Ilkhanids): a square brick hall with blind arched
                // bays and small windows, an octagonal stepped zone of transition, and a plain brick dome on a
                // short drum, behind a low wall.
                const br = [196, 146, 104],
                  B = ink3(br),
                  D = ink3(br, -0.3),
                  Lt = ink3(br, 0.25);
                box(-10, 11, 21, 11, B);
                box(10, 10, 1, 10, D);
                box(-10, 11, 21, 1, Lt);
                for (const p of [-7, -3, 3, 7]) {
                  parch(p, 3, 1, 9, D); // blind bays
                  box(p, 7, 1, 2, 2);
                }
                box(-8, 13, 17, 2, B); // the octagonal step
                box(-8, 13, 17, 1, Lt);
                box(-6, 15, 13, 2, B); // the drum
                for (const p of [-4, 0, 4]) box(p, 15, 1, 1, 2);
                pdome(0, 15, 6.5, 7, br, { k: 2 });
                box(-12, 3, 25, 3, ink3(br, -0.12)); // the low wall in front
                box(-12, 3, 25, 1, Lt);
                break;
              }
              case "qazvinJameh": {
                // Jameh Mosque of Qazvin: a great brick iwan, its frame edged with strips of blue tile and its
                // top corners carrying stub minarets, a deep pointed arch; behind on the left the ribbed
                // turquoise dome on a tiled drum with a small cylindrical lantern; two-storey courtyard
                // arcades of deep brick arches with tiled spandrels.
                const br = [170, 124, 88],
                  B = ink3(br),
                  D = ink3(br, -0.4),
                  Lt = ink3(br, 0.22),
                  blue = ink3([52, 104, 164]),
                  tq = [104, 186, 190];
                box(-12, 17, 11, 4, B); // the drum, with its tile band
                box(-12, 15, 11, 1, blue);
                pdome(-7, 17, 5.5, 7, tq, { k: 2, fin: null });
                for (let j = 18; j < 23; j++) for (const p of [-9, -7, -5]) box(p, j, 1, 1, ink3(tq, -0.25)); // the ribs
                box(-8, 27, 3, 3, ink3(tq, -0.1)); // the little lantern
                box(-15, 11, 31, 11, B); // the arcades
                box(-15, 11, 31, 1, Lt);
                for (const p of [-12, -7, 14]) {
                  parch(p, 1, 2, 9, blue); // tiled frames round the deep arches
                  parch(p, 1, 1, 8, D);
                }
                box(-2, 24, 13, 24, B); // the iwan
                box(10, 23, 1, 23, ink3(br, -0.25));
                for (const p of [-2, 9]) box(p, 23, 1, 22, blue);
                parch(4, 1, 4, 21, ink3(br, -0.15));
                parch(4, 1, 3, 20, D);
                box(3, 5, 3, 4, ink3(br, -0.15)); // the inner door frame
                for (const p of [-1, 8]) {
                  box(p, 27, 2, 3, B); // the stub minarets
                  box(p, 27, 2, 1, blue);
                }
                break;
              }
              case "fatimaMasumeh": {
                // Fatima Masumeh shrine, Qom: the golden bulb dome rising between very tall, slender tiled
                // minarets with two balconies each and pointed caps; beside it a grey-blue patterned onion dome
                // and a broad sand-coloured dome with tile medallions, all over a blue tiled arcaded court.
                const gold = [226, 180, 64],
                  blue = [48, 100, 160],
                  Bl = ink3(blue),
                  Bd = ink3(blue, -0.38),
                  tile = [110, 150, 160],
                  ye = ink3([232, 202, 110]);
                pdome(-11, 9, 6, 6, [214, 170, 120], { k: 2.2, dots: ink3([60, 120, 160]) }); // the sand dome
                box(-7, 12, 9, 3, Bl);
                pdome(-3, 12, 4.5, 9, [150, 164, 176], { s: 0.18, k: 1.4, dots: ink3([90, 110, 140]) }); // the grey onion
                box(2, 13, 9, 4, ink3(gold, -0.15)); // the gold drum and dome
                pdome(6, 13, 4.5, 10, gold, { s: 0.2, k: 1.3 });
                const tall = (cx, b) => {
                  minaret(cx, b, 3, tile, {
                    band: 4,
                    bandCol: Bl,
                    cap: 4,
                    capCol: ink3(tile, -0.2),
                    lantern: 3,
                  });
                  box(cx - 2, Math.round(b * 0.62), 5, 1, ye); // the lower balcony
                  box(cx - 1, Math.round(b * 0.62) - 1, 3, 1, Bd);
                };
                tall(1, 24);
                tall(11, 28);
                tall(16, 26);
                box(-17, 9, 35, 9, Bl); // the tiled court
                box(-17, 9, 35, 1, ye);
                for (let p = -15; p <= 16; p += 4) parch(p, 1, 1, 7, Bd);
                break;
              }
              case "rashtMunicipality": {
                // Rasht Municipality (1920s), on Shahrdari Square: a white two-storey European-style front with
                // tall arched windows between pilasters, a balustrade and a pedimented centre, and the central
                // clock tower ending in an open arched lantern under a small dome.
                const wt = [238, 234, 224],
                  W = ink3(wt),
                  D = ink3(wt, -0.22),
                  Dd = ink3(wt, -0.4),
                  red = ink3([170, 70, 56]);
                box(-12, 11, 25, 11, W);
                box(-12, 1, 25, 1, D);
                box(12, 10, 1, 9, D);
                box(-12, 6, 25, 1, D); // the string course
                box(-12, 11, 25, 1, D);
                for (let p = -12; p <= 12; p += 2) box(p, 12, 1, 1, W); // the balustrade
                for (let p = -10; p <= 10; p += 3) {
                  if (Math.abs(p) < 3) continue;
                  box(p, 4, 1, 3, Dd); // the arched windows of both storeys
                  box(p, 9, 1, 3, Dd);
                  box(p - 1, 5, 3, 1, D);
                }
                box(-3, 14, 7, 14, W); // the centre and its pediment
                box(3, 13, 1, 13, D);
                cone(0, 14, 4, 2, W);
                box(-1, 5, 3, 5, Dd);
                box(-2, 24, 5, 10, W); // the tower
                box(2, 23, 1, 9, D);
                orb(0, 21, 1.4, 2); // the clock
                orb(0, 21, 0.7, W);
                box(-2, 24, 5, 1, D);
                box(-2, 28, 5, 4, W); // the arched lantern
                for (const p of [-1, 1]) box(p, 27, 1, 2, Dd);
                pdome(0, 28, 2.5, 3, [216, 220, 214], { k: 2 });
                box(-12, 13, 3, 2, red); // red roofs over the end bays
                box(10, 13, 3, 2, red);
                break;
              }
              case "darolEhsan": {
                // Dar ol-Ehsan (Jameh) Mosque, Sanandaj (1813): a Qajar mosque whose prayer hall of 24 stone
                // columns carries a roof of many small domes; its entrance portal is tiled in the Qajar palette
                // (pink, yellow and blue flowers) and two slender minarets stand on the portal's top corners.
                const st = [214, 194, 160],
                  S = ink3(st),
                  D = ink3(st, -0.3),
                  Lt = ink3(st, 0.3),
                  blue = [56, 110, 176],
                  pink = ink3([214, 120, 130]),
                  ye = ink3([232, 200, 96]);
                box(-13, 9, 27, 9, S); // the prayer hall and its roof of little domes
                box(-13, 1, 27, 1, D);
                box(-13, 9, 27, 1, Lt);
                for (const p of [-11, -8, 8, 11]) {
                  parch(p, 2, 0, 7, D);
                  pdome(p, 9, 1.4, 2, blue, { fin: null });
                }
                for (const p of [-9.5, 9.5]) pdome(p, 11, 1.4, 2, [76, 140, 190], { fin: null });
                for (const s of [-1, 1])
                  minaret(s * 4, 26, 2, st, {
                    band: 20,
                    bandCol: ink3(blue),
                    cap: 3,
                    capCol: blue,
                    lantern: 2,
                  });
                pishtaq(0, 5, 17, ink3(blue), ye, ink3(blue, -0.35), { door: 3 });
                for (let j = 3; j <= 15; j += 3)
                  for (const p of [-4, 4]) {
                    box(p, j, 1, 1, pink); // the Qajar flowers
                    box(p, j + 1, 1, 1, ye);
                  }
                for (let j = 10; j <= 14; j += 2) for (let p = -2; p <= 2; p += 2) box(p, j, 1, 1, pink);
                break;
              }
              case "sariClockTower": {
                // Sari's clock tower (1930s), in the middle of the city's main square: a white Pahlavi-era shaft
                // on a stepped base, grooved with tall recessed panels, a clock stage with a cornice, and a
                // stepped crown with a small open lantern and pointed cap.
                const wt = [236, 232, 220],
                  W = ink3(wt),
                  D = ink3(wt, -0.22),
                  Dd = ink3(wt, -0.42);
                box(-5, 2, 11, 2, D); // the stepped base
                box(-4, 4, 9, 2, W);
                box(-3, 22, 7, 18, W); // the shaft and its grooves
                box(3, 21, 1, 17, D);
                for (const p of [-1, 1]) box(p, 19, 1, 13, D);
                box(-1, 7, 3, 2, Dd);
                box(-4, 23, 9, 1, D); // the clock stage
                box(-3, 28, 7, 5, W);
                box(3, 27, 1, 4, D);
                orb(0, 25.5, 1.6, Dd);
                orb(0, 25.5, 1, W);
                box(0, 26, 1, 1, Dd);
                box(-4, 29, 9, 1, D);
                box(-2, 31, 5, 2, W); // the stepped crown and lantern
                box(-1, 33, 3, 2, W);
                box(0, 33, 1, 1, Dd);
                cone(0, 33, 1, 3, ink3([96, 170, 180]));
                box(0, 38, 1, 1, 12);
                break;
              }
              case "imamzadehYahyaSari": {
                // Imamzadeh Yahya, Sari (15th century): a Mazandaran tomb tower, a tall octagonal brick body
                // with a recessed arched panel on each face and a carved wooden door, a brick cornice of
                // stepped corbels and a tall pointed conical roof.
                const br = [168, 116, 84],
                  B = ink3(br),
                  D = ink3(br, -0.32),
                  Lt = ink3(br, 0.2),
                  wood = ink3([120, 80, 52]);
                box(-5, 12, 11, 12, B);
                box(-5, 12, 2, 12, Lt); // the faces of the octagon, light to shade
                box(2, 12, 2, 12, ink3(br, -0.15));
                box(4, 12, 2, 12, D);
                for (const p of [-4, 0, 4]) parch(p, 6, 0, 10, D); // the arched panels
                box(-1, 5, 3, 4, wood);
                box(-6, 13, 13, 1, Lt); // the corbelled cornice
                for (let p = -5; p <= 5; p += 2) box(p, 14, 1, 1, B);
                for (let j = 0; j < 11; j++) {
                  const hw = Math.round(6 * (1 - j / 11));
                  box(-hw, 15 + j, 2 * hw + 1, 1, B);
                  if (hw) box(Math.ceil(hw / 3), 15 + j, hw - Math.ceil(hw / 3) + 1, 1, D);
                }
                box(0, 27, 1, 2, 12);
                break;
              }
              case "semnanArgGate": {
                // Arg Gate, Semnan (1884): a tall Qajar gatehouse clad all over in tiles, a deep pointed arch
                // through its middle, panels of figures from the Shahnameh (Rostam and the div) in yellow and
                // white on blue to each side, a crested parapet, and two slim round turrets with little domes
                // on its top corners.
                const blue = [50, 104, 172],
                  Bl = ink3(blue),
                  Bd = ink3(blue, -0.38),
                  ye = ink3([234, 204, 104]),
                  wt = ink3([238, 234, 222]),
                  br = ink3([196, 150, 106]);
                for (const s of [-1, 1]) {
                  box(s * 8 - 1, 24, 3, 6, br); // the corner turrets
                  box(s * 8 - 1, 22, 3, 1, ye);
                  pdome(s * 8, 24, 1.5, 3, [80, 170, 190], { k: 1.3 });
                }
                box(-9, 19, 19, 19, Bl);
                box(-9, 19, 19, 1, ye);
                box(9, 18, 1, 18, Bd);
                for (let p = -9; p <= 9; p += 2) box(p, 20, 1, 1, Bl); // the crested parapet
                for (const s of [-1, 1]) {
                  box(s * 6 - 2, 15, 5, 11, ink3(blue, 0.15)); // the Shahnameh panels
                  box(s * 6 - 2, 15, 5, 1, ye);
                  box(s * 6 - 2, 5, 5, 1, ye);
                  box(s * 6 - 1, 13, 1, 1, wt); // a hero and a div in each
                  box(s * 6 - 1, 12, 1, 3, ye);
                  box(s * 6 + 1, 11, 1, 1, wt);
                  box(s * 6 + 1, 10, 1, 3, ink3([214, 120, 110]));
                  box(s * 6 - 1, 9, 3, 1, ye);
                }
                parch(0, 1, 3, 17, ye); // the arch and its frame
                parch(0, 1, 2, 16, Bd);
                for (let j = 11; j < 15; j++)
                  for (let p = -1; p <= 1; p++) if ((p + j + 64) % 2 === 0) box(p, j, 1, 1, Bl);
                break;
              }
              case "argKarimKhan": {
                // Arg of Karim Khan, Shiraz (1766): a square brick citadel with tall plain walls under a
                // crenellated parapet with arrow slits, and fat round corner towers patterned all over with a
                // diamond lattice of glazed brick; the right-hand tower leans visibly.
                const br = [182, 128, 88],
                  B = ink3(br),
                  D = ink3(br, -0.3),
                  Lt = ink3(br, 0.22),
                  pat = ink3([214, 170, 120]);
                box(-11, 14, 23, 14, B); // the wall and its parapet
                box(-11, 14, 23, 1, Lt);
                for (let p = -10; p <= 10; p += 2) box(p, 15, 1, 1, B);
                for (let p = -8; p <= 8; p += 4) box(p, 12, 1, 2, D); // arrow slits
                box(-2, 6, 5, 6, D); // the gate
                box(-1, 5, 3, 5, ink3([70, 56, 50]));
                const tower = (cx, top, lean) => {
                  for (let j = 1; j <= top; j++) {
                    const dx = Math.round(lean * j);
                    box(cx - 3 + dx, j, 7, 1, B);
                    box(cx - 3 + dx, j, 1, 1, Lt);
                    box(cx + 2 + dx, j, 2, 1, D);
                    if (j > 2 && j < top - 2)
                      for (let p = -2; p <= 2; p++)
                        if ((p + j + 64) % 4 === 0 || (p - j + 64) % 4 === 0) box(cx + p + dx, j, 1, 1, pat);
                  }
                  const dx = Math.round(lean * top);
                  box(cx - 4 + dx, top + 1, 9, 1, Lt);
                  for (let p = -4; p <= 4; p += 2) box(cx + p + dx, top + 2, 1, 1, B);
                };
                tower(-11, 17, 0);
                tower(12, 17, 0.07);
                break;
              }
              case "shahCheragh": {
                // Shah Cheragh, Shiraz: a minaret tiled in blue with a gilded lantern balcony and cap, the long
                // wooden talar porch on slim timber columns under a deep carved eave, a turquoise onion dome
                // behind it, and blue tiled arcades in the court.
                const blue = [46, 100, 170],
                  Bl = ink3(blue),
                  Bd = ink3(blue, -0.35),
                  wood = [160, 96, 56],
                  Wd = ink3(wood),
                  Wl = ink3(wood, 0.3),
                  gold = [226, 186, 84],
                  tq = [86, 186, 196];
                pdome(4, 14, 4, 6, tq, { s: 0.15, k: 1.5, dots: ink3([50, 140, 160]) });
                box(-10, 11, 22, 11, Bl); // the court walls
                for (const p of [-8, -5]) parch(p, 2, 1, 8, Bd);
                box(-4, 9, 16, 8, ink3([226, 220, 206])); // the hall behind the porch
                box(-5, 13, 18, 2, Wd); // the deep eave of the talar
                box(-5, 13, 18, 1, Wl);
                cone(3.5, 14, 6, 1, Wd);
                for (let p = -4; p <= 12; p += 2) box(p, 11, 1, 10, Wd); // the timber columns
                for (let p = -4; p <= 12; p += 2) box(p, 11, 1, 1, Wl);
                box(-6, 1, 19, 1, ink3(colors[13]));
                box(-10, 27, 3, 26, ink3(blue, 0.12)); // the minaret
                for (let j = 3; j < 26; j += 2) box(-10 + ((j / 2) % 3), j, 1, 1, ink3([90, 190, 200]));
                box(-11, 28, 5, 1, ink3(gold));
                box(-10, 31, 3, 3, ink3(gold, -0.15));
                box(-9, 30, 1, 2, Bd);
                box(-11, 32, 5, 1, ink3(gold));
                cone(-9, 32, 2, 3, ink3(gold));
                box(-9, 37, 1, 2, 12);
                break;
              }
              case "tabrizMunicipality": {
                // Tabriz Municipality Palace (1935, the Sa'at tower): long two-storey wings of pale brick with
                // tall arched windows, and the square clock tower in the middle, ribbed with tall narrow
                // windows, clock faces under its cornice and four little pinnacle turrets around a crest.
                const st = [204, 180, 140],
                  S = ink3(st),
                  D = ink3(st, -0.3),
                  Lt = ink3(st, 0.25),
                  Dk = ink3([70, 60, 64]);
                box(-13, 11, 27, 11, S); // the wings
                box(-13, 1, 27, 1, D);
                box(-13, 11, 27, 1, Lt);
                box(-13, 6, 27, 1, Lt);
                for (let p = -12; p <= 12; p += 2) {
                  if (Math.abs(p) < 5) continue;
                  box(p, 4, 1, 3, Dk);
                  box(p, 9, 1, 3, Dk);
                }
                box(-4, 30, 9, 30, S); // the tower
                box(4, 29, 1, 29, D);
                box(-4, 30, 9, 1, Lt);
                for (const b of [10, 16]) for (const p of [-2, 0, 2]) box(p, b + 4, 1, 4, Dk); // its tall windows
                box(-1, 5, 3, 4, Dk);
                for (const b of [9, 15, 21]) box(-4, b, 9, 1, Lt);
                orb(0, 25.5, 2, D); // the clock
                orb(0, 25.5, 1.4, 6);
                box(0, 26, 1, 2, Dk);
                box(1, 25, 1, 1, Dk);
                box(-5, 31, 11, 1, Lt);
                box(-2, 33, 5, 2, S); // the crest and the corner turrets
                cone(0, 33, 2, 2, S);
                box(0, 37, 1, 2, ink3([120, 120, 128]));
                for (const s of [-1, 1]) {
                  box(s * 4, 34, 1, 3, S);
                  box(s * 4, 35, 1, 1, Lt);
                }
                break;
              }
              case "argTabriz": {
                // Arg of Tabriz (Ilkhanid, 14th century): what is left of the Alishah mosque, a sheer cliff of
                // bare brick with a massive half-round buttress standing out from its middle, a pointed arch
                // through the wall on each side of it, a stepped top and long cracks down the face.
                const br = [190, 120, 76],
                  B = ink3(br),
                  D = ink3(br, -0.3),
                  Lt = ink3(br, 0.2),
                  sky = ink3([74, 60, 56]);
                box(-11, 22, 23, 22, B);
                box(-11, 22, 23, 1, Lt);
                box(-9, 24, 19, 2, B); // the stepped top
                box(-9, 24, 19, 1, Lt);
                box(11, 21, 1, 21, D);
                for (const s of [-1, 1]) {
                  parch(s * 7, 1, 2, 9, D); // the arches through the wall
                  parch(s * 7, 1, 1, 8, sky);
                }
                box(-3, 23, 7, 23, B); // the half-round buttress
                box(-3, 23, 1, 23, Lt);
                box(2, 23, 2, 23, D);
                box(-3, 2, 7, 1, D);
                stroke(6, 21, 8, 12, 2); // the cracks
                stroke(8, 12, 7, 6, 2);
                for (let p = -10; p <= 10; p += 3) box(p, 20, 1, 1, D); // the joist holes
                break;
              }
              case "miladTower": {
                // Milad Tower, Tehran (2007): a grey concrete shaft rising from a broad lobby base, flaring
                // under a big many-decked pod (glass bands between concrete rings, the widest in the middle,
                // a small open sky deck above), and a long slim antenna mast on top.
                const con = [176, 178, 184],
                  C = ink3(con),
                  Cd = ink3(con, -0.3),
                  Cl = ink3(con, 0.25),
                  gl = ink3([86, 120, 150]),
                  gl2 = ink3([120, 160, 190]);
                box(-7, 3, 15, 3, C); // the lobby base
                box(-7, 3, 15, 1, Cl);
                box(-5, 5, 11, 2, C);
                box(-1, 34, 3, 29, C); // the shaft, lit on the left
                box(-1, 34, 1, 29, Cl);
                box(1, 34, 1, 29, Cd);
                for (let j = 0; j < 4; j++) box(-1 - j, 35 + j, 3 + 2 * j, 1, C); // the flare under the pod
                for (const [hw, up, col] of [
                  [5, 40, Cd],
                  [6, 41, gl],
                  [7, 42, C],
                  [7, 43, gl2],
                  [7, 44, gl],
                  [6, 45, C],
                  [5, 46, gl2],
                  [4, 47, C],
                ]) {
                  box(-hw, up, 2 * hw + 1, 1, col);
                  box(hw - 1, up, 2, 1, Cd);
                }
                box(-3, 49, 7, 2, C); // the sky deck
                box(-2, 49, 1, 1, gl);
                box(1, 49, 1, 1, gl);
                box(-1, 52, 3, 3, Cd); // the mast
                box(0, 64, 1, 12, C);
                box(-1, 58, 3, 1, Cd);
                box(0, 65, 1, 1, ink3(colors[10]));
                break;
              }
              case "azadiTower": {
                // Azadi Tower, Tehran (1971): white marble rising from a wide base on two concave-curved legs,
                // a tall pointed arch between them with a ribbed lattice in its head, a smaller arch above, and
                // the narrow block on top with its turquoise-tiled band of windows.
                const mar = [236, 234, 228],
                  M = ink3(mar),
                  Md = ink3(mar, -0.25),
                  Ml = ink3(mar, 0.2),
                  tq = ink3([80, 170, 186]),
                  dk = ink3([70, 70, 84]);
                for (let j = 0; j < 25; j++) {
                  // the legs: a concave curve from the wide base to the top block
                  const f = j / 25,
                    hw = Math.round(6 + 9 * Math.pow(1 - f, 2.4));
                  box(-hw, j + 1, 2 * hw + 1, 1, M);
                  box(Math.round(hw * 0.5), j + 1, hw - Math.round(hw * 0.5) + 1, 1, Md);
                  box(-hw, j + 1, 1, 1, Ml);
                }
                parch(0, 1, 5, 17, dk); // the great arch, the ribbed lattice in its head
                for (let j = 9; j < 17; j++)
                  for (let p = -4; p <= 4; p++)
                    if ((p + j + 64) % 3 === 0 || (p - j + 64) % 3 === 0) box(p, j, 1, 1, Md);
                parch(0, 19, 1, 22, dk); // the smaller arch above
                box(-6, 29, 13, 5, M); // the top block and its windows
                box(3, 29, 4, 5, Md);
                box(-5, 28, 11, 2, tq);
                for (const p of [-4, -2, 0, 2, 4]) box(p, 28, 1, 2, dk);
                box(-6, 29, 13, 1, Ml);
                break;
              }
              case "amirChakhmaq": {
                // Amir Chakhmaq complex, Yazd: the tall three-tiered tekyeh facade of sand-coloured brick, rows
                // of deep pointed niches on two storeys along the wings and three in the raised centre, the
                // entrance arch at the middle, and two slender minarets rising close together from its top.
                const br = [214, 178, 128],
                  B = ink3(br),
                  D = ink3(br, -0.34),
                  Lt = ink3(br, 0.28);
                box(-15, 12, 31, 12, B); // the wings
                box(-15, 12, 31, 1, Lt);
                box(-15, 6, 31, 1, Lt);
                for (const p of [-13, -9, 9, 13]) {
                  parch(p, 1, 1, 4, D); // two storeys of niches, a small window in each upper one
                  parch(p, 7, 1, 10, D);
                  box(p, 9, 1, 1, Lt);
                }
                for (const s of [-1, 1])
                  minaret(s * 3 + (s > 0 ? 1 : 0), 30, 2, br, { band: 26, bandCol: Lt, cap: 5, lantern: 2 });
                box(-6, 20, 13, 20, B); // the raised centre
                box(-6, 20, 13, 1, Lt);
                box(6, 19, 1, 19, D);
                for (const b of [1, 7, 13]) for (const p of [-4, 4]) parch(p, b, 1, b + 3, D);
                parch(0, 1, 1, 5, D); // the entrance and the niches above it
                parch(0, 8, 1, 11, D);
                parch(0, 14, 1, 17, D);
                box(0, 16, 1, 1, Lt);
                for (const b of [6, 12]) box(-6, b + 1, 13, 1, Lt);
                break;
              }
              case "dowlatAbadBadgir": {
                // The windcatcher of Dowlat Abad garden, Yazd: the tallest badgir in the world, a slim
                // octagonal brick tower over the pavilion, its upper third split into many vertical vents by
                // thin fins, with a plain crown.
                const br = [208, 170, 120],
                  B = ink3(br),
                  D = ink3(br, -0.3),
                  Lt = ink3(br, 0.25),
                  Dk = ink3([80, 62, 54]);
                box(-6, 8, 13, 8, B); // the pavilion
                box(-6, 8, 13, 1, Lt);
                for (const p of [-4, 0, 4]) parch(p, 1, 1, 6, D);
                box(-3, 30, 7, 22, B); // the tower
                box(-3, 30, 1, 22, Lt);
                box(2, 30, 2, 22, D);
                for (let p = -2; p <= 2; p++) if (p % 2 === 0) box(p, 28, 1, 9, Dk); // the vents
                for (const j of [20, 24]) box(-3, j, 7, 1, B);
                box(-4, 31, 9, 1, Lt); // the crown
                box(-3, 32, 7, 1, B);
                break;
              }
              case "makkiMosque": {
                // Makki Mosque, Zahedan, the largest Sunni mosque in Iran: an Ottoman-style cascade of cream
                // domes (a ribbed main dome on a ring of windows, half domes and many small domes stepping down)
                // and four very tall white pencil minarets with three balconies each and dark navy cone caps.
                const cr = [236, 228, 210],
                  C = ink3(cr),
                  Cd = ink3(cr, -0.25),
                  Cl = ink3(cr, 0.3),
                  navy = ink3([36, 50, 110]),
                  dk = ink3([90, 84, 90]);
                const pencil = (cx, h) => {
                  box(cx, h, 2, h, C);
                  box(cx + 1, h - 1, 1, h - 1, Cd);
                  for (const f of [0.55, 0.72, 0.88]) box(cx - 1, Math.round(h * f), 4, 1, Cl); // the balconies
                  box(cx, h + 3, 2, 3, navy); // the navy cone cap
                  box(cx, h + 6, 1, 3, navy);
                  box(cx, h + 8, 1, 2, 12);
                };
                pencil(-15, 36);
                pencil(13, 36);
                pencil(-8, 30);
                pencil(7, 30);
                box(-13, 9, 27, 9, C); // the hall and its rows of windows
                box(-13, 9, 27, 1, Cl);
                for (let p = -12; p <= 12; p += 2) box(p, 6, 1, 3, dk);
                for (const p of [-11, -7, 7, 11]) pdome(p, 9, 2, 2, cr, { fin: null }); // the small domes
                for (const s of [-1, 1]) {
                  box(s * 5 - 2, 13, 5, 4, C);
                  pdome(s * 5, 13, 3, 3, cr, { fin: null }); // the half domes
                }
                box(-4, 13, 9, 4, C);
                box(-5, 17, 11, 4, C); // the drum and its window ring
                for (let p = -4; p <= 4; p += 2) box(p, 16, 1, 2, dk);
                pdome(0, 17, 5.5, 6, cr, { k: 2.2, dots: Cd });
                break;
              }
              case "soltaniyehDome": {
                // Dome of Soltaniyeh, near Zanjan (1312): the huge octagonal brick mausoleum of Oljeitu, two storeys
                // of deep pointed galleries round its sides, a band of muqarnas under the roof, the tall egg-shaped
                // turquoise dome, and the stumps of its eight slender minarets standing round the dome's foot.
                const br = [196, 146, 104],
                  B = ink3(br),
                  D = ink3(br, -0.35),
                  Lt = ink3(br, 0.25),
                  tq = [92, 190, 206];
                box(-15, 9, 9, 9, B); // the low annex
                box(-15, 9, 9, 1, Lt);
                for (const p of [-13, -9]) parch(p, 1, 1, 7, D);
                box(-10, 17, 21, 17, B); // the octagon, its galleries and muqarnas band
                box(-10, 17, 3, 17, Lt);
                box(7, 17, 4, 17, ink3(br, -0.15));
                for (const p of [-6, -2, 2, 6]) {
                  parch(p, 2, 1, 7, D);
                  parch(p, 9, 1, 14, D);
                }
                box(-10, 17, 21, 1, Lt);
                for (let p = -9; p <= 9; p += 2) box(p, 16, 1, 1, D);
                for (const [p, h] of [
                  [-8, 26],
                  [8, 26],
                  [-4, 24],
                  [4, 24],
                ])
                  box(p, h, 2, h - 17, B); // the minaret stumps
                pdome(0, 19, 6.5, 11, tq, { k: 1.4, dots: ink3([140, 214, 222]) });
                box(-7, 19, 15, 2, ink3(tq, -0.2)); // the dome's tiled foot
                for (const p of [-8, 8]) box(p, 26, 2, 9, B);
                break;
              }
            }
            break;
          }
