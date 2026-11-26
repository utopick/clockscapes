          case "mxCathedral": {
            // A Mexican colonial cathedral or parish church, front view; most of the b33 (Mexico) cities use it.
            // Twin towers (or one: o.one = -1 left, 1 right) whose plain shafts rise past the facade to a
            // cornice with corner urns, then o.tiers belfry storeys (default 2), each narrower, with arched
            // openings, bells, pilasters and finials, under o.cap ("cupola" default, "spire", "bulb", "pyr",
            // "flat"; o.sp a spire's height). Between them the carved portada of columns in two storeys, the
            // arched door and choir window (o.rose a round one), crowned by a curved remate (o.clock a clock in
            // it). With o.r, a dome on a windowed drum behind (o.dc its colour, o.tile chequers it like Talavera
            // tiles in that colour). o.rgb is the stone ([r, g, b]; else palette c), o.pc the portada's stone,
            // o.tc the colour of the tower caps ([r, g, b]; else palette t).
            const stone = o.rgb ?? colors[c],
              pst = o.pc ?? mixc(stone, [255, 248, 225], 0.15),
              mix = (rgb, k) =>
                css(e.sh(k < 0 ? mixc(rgb, [41, 40, 54], -k) : mixc(rgb, [255, 248, 225], k))),
              B = css(e.sh(stone)),
              S = mix(stone, -0.3),
              D = mix(stone, -0.15),
              Lt = mix(stone, 0.35),
              P = css(e.sh(pst)),
              PL = mix(pst, 0.4),
              T = o.tc ? css(e.sh(o.tc)) : t,
              BB = o.bc ? css(e.sh(o.bc)) : B, // o.bc: the belfry storeys' own stone (Ocotlán's white stucco)
              BS = o.bc ? mix(o.bc, -0.3) : S,
              BL = o.bc ? mix(o.bc, 0.35) : Lt,
              col = (v) => (Array.isArray(v) ? css(e.sh(v)) : v);
            const w = o.w ?? 23,
              nh = o.nh ?? 13,
              tw = o.tw ?? 7,
              h = o.h ?? 30,
              tiers = o.tiers ?? 2,
              hw = Math.floor(w / 2),
              th = Math.floor(tw / 2),
              sh = o.sh ?? nh + 2,
              capStyle = o.cap ?? "cupola",
              ik = hw - tw,
              pk = Math.max(1, ik - 1),
              l1 = Math.round(nh * 0.5);
            const cross = (cx, b) => {
              box(cx, b + 3, 1, 3, D);
              box(cx - 1, b + 2, 3, 1, D);
            };
            if (o.r) {
              const r = o.r,
                dh = o.dh ?? nh + 5,
                DC = col(o.dc ?? t);
              box(-r + 1, dh, 2 * r - 1, dh - nh, D); // the drum, a shade darker so the remate stands out
              box(r - 1, dh - 1, 1, dh - nh - 1, S);
              for (let p = -r + 2 + (r % 2); p < r - 1; p += 2)
                box(p, dh - 2, 1, Math.max(1, dh - nh - 4), 2);
              dome(0, dh, r, DC);
              if (o.tile)
                for (let y = 1; y < r; y++)
                  for (let p = -r + 1; p < r; p++)
                    if ((p + y) % 2 === 0 && p * p + y * y < (r - 0.5) * (r - 0.5))
                      box(p, dh + y, 1, 1, col(o.tile));
                    else if (r >= 4)
                      for (const s of [-1, 1]) {
                        const p = s * Math.ceil(r / 2);
                        box(
                          p,
                          dh + Math.floor(Math.sqrt(r * r - p * p)) - 1,
                          1,
                          Math.floor(Math.sqrt(r * r - p * p)) - 1,
                          mix(stone, -0.4),
                        );
                      }
              box(-r, dh, 2 * r + 1, 1, Lt);
              box(-1, dh + r + 3, 3, 3, B);
              box(0, dh + r + 2, 1, 1, 2);
              dome(0, dh + r + 3, 1.5, DC);
              cross(0, dh + r + 4);
            }
            box(-hw, nh, w, nh, B);
            box(-hw, 1, w, 1, D);
            box(-ik, nh, 2 * ik + 1, 1, Lt);
            for (let p = -ik; p <= ik; p += 2) box(p, nh + 1, 1, 1, Lt); // the balustrade
            // the portada: two storeys of columns, the door and the choir window, and the curved remate
            if (o.arch) {
              // o.arch: the portada fills only the ground storey, under a great recessed arch (Mérida)
              const ab = nh - pk - 2;
              box(-pk - 1, ab, 2 * pk + 3, ab - l1, Lt);
              dome(0, ab, pk + 1, Lt);
              box(-pk, ab, 2 * pk + 1, ab - l1, D);
              dome(0, ab, pk, D);
              box(-pk, l1, 2 * pk + 1, l1, P);
              orb(0, ab - 1, 1, PL); // the carved shield in the arch
            } else box(-pk, nh, 2 * pk + 1, nh, P);
            box(-pk - 1, l1, 2 * pk + 3, 1, PL);
            box(-pk - 1, nh - 1, 2 * pk + 3, 1, PL);
            const colsAt = pk >= 3 ? [pk, pk - 2] : [pk];
            for (const s of [-1, 1])
              for (const p of colsAt) {
                box(s * p, l1 - 1, 1, l1 - 2, PL);
                if (!o.arch) box(s * p, nh - 2, 1, nh - l1 - 3, PL);
                if (pk >= 4) box(s * (pk - 1), l1 - 3, 1, 2, D);
              }
            const dw = pk >= 3 ? 3 : 1;
            box(-Math.floor(dw / 2), l1 - 2, dw, l1 - 3, 2);
            box(0, l1 - 1, 1, 1, 2);
            if (o.arch);
            else if (o.rose) {
              orb(0, Math.round((l1 + nh) / 2), 1, 2);
            } else {
              box(0, nh - 3, 1, Math.max(1, nh - l1 - 5), 2);
              if (pk >= 3) box(-1, nh - 4, 3, Math.max(1, nh - l1 - 7), 2);
            }
            // one tower: a plain shaft to sh (o.tclock a clock under its cornice, -1 on the left tower only),
            // corner urns, then `tiers`
            // belfry storeys and the cap, its top at about h
            const tower = (cx, tw, sh, h, tiers, from = 0, side = 0) => {
              const th = Math.floor(tw / 2);
              box(cx - th, sh, tw, sh - from, B);
              box(cx + th, sh - 1, 1, sh - from - 1, S);
              if (!from) {
                box(cx - th, l1, tw, 1, D);
                box(cx, l1 - 3, 1, 2, 2);
                box(cx, nh - 2, 1, 2, 2);
              }
              if (o.tclock && !from && (o.tclock > 0 || side === o.tclock)) {
                orb(cx, sh - th - 1, Math.max(1, th - 1), mix(stone, -0.45));
                orb(cx, sh - th - 1, Math.max(0.6, th - 2), 6);
                box(cx, sh - th - 1, 1, 1, 2);
              }
              box(cx - th - 1, sh + 1, tw + 2, 1, Lt);
              for (const p of [-th - 1, th + 1]) box(cx + p, sh + 3, 1, 2, Lt); // the corner urns
              let lastW = tw;
              for (let i = 0; i < tiers; i++) lastW = Math.max(3, tw - 2 * i);
              const lk = Math.floor(lastW / 2),
                sp = o.sp ?? lk * 4 + 3,
                reserve =
                  { cupola: lk + 5, spire: sp, bulb: Math.round(lk * 2.7) + 4, pyr: lk + 2 }[capStyle] ?? 1,
                tierH = Math.max(4, Math.floor((h - sh - 1 - reserve) / tiers));
              let base = sh + 1;
              for (let i = 0; i < tiers; i++) {
                const bw = Math.max(3, tw - 2 * i),
                  bk = Math.floor(bw / 2),
                  top = base + tierH,
                  ow = bw >= 5 ? bw - 4 : 1;
                box(cx - bk, top, bw, tierH, BB);
                if (bw > 3) box(cx + bk, top - 1, 1, tierH - 1, BS);
                if (bw >= 5) box(cx - bk, top - 1, 1, tierH - 1, BL);
                const oh = Math.min(tierH - 2, 2 * ow + 3);
                box(cx - Math.floor(ow / 2), top - 1, ow, oh, 2);
                if (ow >= 3) box(cx - Math.floor(ow / 2), top - 1, 1, 1, BB);
                if (ow >= 3) box(cx + Math.floor(ow / 2), top - 1, 1, 1, BS);
                if (tierH - oh > 3) box(cx - bk, top - oh - 1, bw, 1, BL); // the sill
                box(cx, top - 2, 1, 1, 12); // a bell
                box(cx - bk - 1, top + 1, bw + 2, 1, BL);
                for (const p of [-bk - 1, bk + 1]) box(cx + p, top + 2, 1, 1, BL);
                base = top + 1;
              }
              if (capStyle === "cupola") {
                dome(cx, base, lk, T);
                box(cx, base + lk + 2, 1, 2, Lt);
                cross(cx, base + lk + 2);
              } else if (capStyle === "spire") {
                // a tiled spire, its right side in shade, o.band ([r, g, b]) rings of tiles, pinnacles at its foot
                const k0 = Math.max(1, lk),
                  TS = o.tc ? mix(o.tc, -0.3) : chShade(t);
                cone(cx, base, k0, sp, T);
                for (let j = 0; j < sp; j++) {
                  const k = Math.round(k0 * (1 - j / sp));
                  if (k > 0) box(cx + 1, base + j + 1, k, 1, TS);
                  if (o.band && j % 5 === 3 && k > 0)
                    box(cx - k, base + j + 1, 2 * k + 1, 1, css(e.sh(o.band)));
                }
                for (const p of [-k0 - 1, k0 + 1]) box(cx + p, base + 3, 1, 3, Lt); // pinnacles
                cross(cx, base + sp);
              } else if (capStyle === "bulb") {
                bulb(cx, base, lk, T);
                cross(cx, base + Math.round(lk * 2.7) + 2);
              } else if (capStyle === "pyr") {
                cone(cx, base, lk, lk + 2, T);
                cross(cx, base + lk + 2);
              } else {
                box(cx - 1, base + 1, 3, 1, BB); // flat: a little plinth and the cross
                cross(cx, base);
              }
            };
            if (o.mid) {
              // o.mid: a central tower that tall over the portada (o.mw its width), instead of the remate
              const mw = o.mw ?? 5;
              tower(0, mw, nh + 3, o.mid, o.mt ?? tiers, nh);
            } else {
              const rh = o.rh ?? Math.max(o.clock ? 5 : 3, Math.round(pk * 1.1));
              for (let j = 1; j <= rh; j++) {
                const k = Math.round(
                  pk * (o.ped ? 1 - (j - 0.5) / rh : Math.sqrt(1 - ((j - 0.5) / rh) ** 2)),
                );
                box(-k, nh + j, 2 * k + 1, 1, P);
                box(-k, nh + j, 1, 1, PL);
              }
              if (o.clock) {
                const cr = Math.max(1, Math.floor(rh / 3));
                orb(0, nh + Math.ceil(rh / 2), cr, mix(stone, -0.45));
                orb(0, nh + Math.ceil(rh / 2), Math.max(0.6, cr - 1), 6);
                box(0, nh + Math.ceil(rh / 2), 1, 1, 2);
              } else box(0, nh + Math.ceil(rh / 2), 1, 2, D);
              cross(0, nh + rh);
            }
            for (const s of [-1, 1]) {
              const cx = s * (hw - th);
              if (o.one && s !== o.one) {
                box(cx - th, nh + 2, tw, 2, B); // a plain shoulder where the second tower would be
                box(cx - th - 1, nh + 3, tw + 2, 1, Lt);
                continue;
              }
              tower(cx, tw, sh, s > 0 ? (o.h2 ?? h) : h, tiers, 0, s);
            }
            break;
          }
          case "cerroCampana": {
            // Cerro de la Campana (Hermosillo): the bare rocky hill over the city (the rock kind, same params)
            // with its three red-and-white antenna masts on the summit, the middle one tallest.
            cityLandmark(g, e, "rock", x, unit, o);
            const h = o.h ?? 24;
            for (const [p, mh] of [
              [-4, 7],
              [0, 11],
              [4, 8],
            ]) {
              for (let j = 0; j < mh; j++) box(p, h - 3 + mh - j, 1, 1, Math.floor(j / 2) % 2 ? 6 : 10);
            }
            break;
          }
          case "cosmovitral": {
            // Cosmovitral (Toluca): the 1910s iron-and-glass market hall turned botanic garden, its walls and
            // the tall vaulted nave filled with Leopoldo Flores's stained glass: the round "Sun Man" window in
            // the nave's end, rings of red, orange and gold in blue, and tall coloured windows in the aisles.
            const w = o.w ?? 29,
              hw = Math.floor(w / 2),
              nh = o.nh ?? 12,
              wall = [226, 214, 186],
              W = css(e.sh(wall)),
              WS = css(e.sh(mixc(wall, [41, 40, 54], 0.3))),
              WL = css(e.sh(mixc(wall, [255, 248, 225], 0.4))),
              glass = [
                [52, 84, 160],
                [222, 66, 46],
                [242, 150, 40],
                [250, 214, 80],
              ].map((v) => css(e.sh(v)));
            const ah = nh - 4; // the aisles
            box(-hw, ah, w, ah, W);
            box(-hw, 1, w, 1, WS);
            box(-hw, ah + 1, w, 1, WL);
            for (let p = -hw + 2; p <= hw - 2; p += 3) {
              if (Math.abs(p) < 7) continue;
              box(p, ah - 2, 2, ah - 4, glass[(p + 30) % 4]);
              box(p, ah - 2, 2, 1, glass[0]);
            }
            box(-6, nh + 1, 13, nh + 1, W); // the nave
            box(6, nh, 1, nh, WS);
            dome(0, nh + 1, 6, WL); // its iron vault
            dome(0, nh + 1, 5, glass[0]);
            for (const [r, gi] of [
              [5, 1],
              [4, 2],
              [3, 1],
              [2, 3],
            ])
              orb(0, nh - 3, r, glass[gi]); // the Sun Man window
            box(0, nh - 1, 1, 4, glass[0]); // his figure
            box(-1, nh - 2, 3, 1, glass[0]);
            box(-6, nh - 8, 13, nh - 8, W);
            box(-6, nh - 8, 13, 1, WL);
            box(-2, nh - 9, 5, nh - 9, 2); // the entrance
            break;
          }
          case "campecheWalls": {
            // Campeche's walls: the Puerta de Tierra, a gate with a round arch under a parapet and a little bell
            // gable, between battered stretches of wall that end in bastions with domed sentry boxes (garitas)
            // at their corners; grey limestone weathered dark at the foot.
            const st = [196, 190, 172],
              G = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              D = css(e.sh(mixc(st, [41, 40, 54], 0.15))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.35)));
            const w = o.w ?? 31,
              hw = Math.floor(w / 2),
              wh = o.wh ?? 8;
            box(-hw, wh, w, wh, G);
            box(-hw, 2, w, 2, D);
            box(-hw, wh, w, 1, Lt);
            for (let p = -hw; p <= hw; p += 2) box(p, wh + 1, 1, 1, G); // the parapet's merlons
            for (const s of [-1, 1]) {
              const bx = s * (hw - 3); // a bastion with its garita
              box(bx - 3, wh + 1, 7, wh + 1, G);
              box(bx + 3, wh, 1, wh, S);
              box(bx - 3, wh + 1, 7, 1, Lt);
              const gx = bx + s * 3;
              box(gx - 1, wh + 4, 3, 3, G);
              box(gx, wh + 3, 1, 1, 2);
              dome(gx, wh + 4, 1.5, Lt);
              box(gx, wh + 6, 1, 1, Lt);
            }
            // the Puerta de Tierra
            box(-5, wh + 4, 11, wh + 4, G);
            box(5, wh + 3, 1, wh + 3, S);
            box(-5, wh + 4, 11, 1, Lt);
            for (let p = -5; p <= 5; p += 2) box(p, wh + 5, 1, 1, G);
            box(-2, 6, 5, 6, 2);
            dome(0, 6, 2.5, 2);
            box(-3, 9, 7, 1, Lt);
            box(-1, wh + 3, 3, 2, Lt); // the inscription panel
            box(-2, wh + 9, 5, 4, G); // the bell gable
            box(0, wh + 8, 1, 2, 2);
            box(0, wh + 7, 1, 1, 12);
            box(0, wh + 11, 1, 2, D);
            break;
          }
          case "hospicioCabanas": {
            // Hospicio Cabañas (Guadalajara): Tolsá's long, low neoclassical front of tan stone with a row of
            // barred windows, the portico of six Doric columns under a pediment in the middle, and behind it
            // the chapel's tall dome on a drum ringed with columns and windows, with its lantern.
            const st = [204, 188, 156],
              G = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.3))),
              D = css(e.sh(mixc(st, [41, 40, 54], 0.15))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.4))),
              dm = css(e.sh([190, 184, 172]));
            const w = o.w ?? 29,
              hw = Math.floor(w / 2),
              nh = o.nh ?? 9;
            // the chapel's drum, dome and lantern
            box(-4, nh + 9, 9, 6, G);
            box(4, nh + 8, 1, 5, S);
            for (let p = -3; p <= 3; p += 2) box(p, nh + 7, 1, 3, 2);
            for (let p = -4; p <= 4; p += 2) box(p, nh + 8, 1, 5, Lt);
            box(-5, nh + 9, 11, 1, Lt);
            dome(0, nh + 10, 5, dm);
            box(2, nh + 13, 1, 2, css(e.sh([150, 146, 140])));
            box(-1, nh + 18, 3, 3, G);
            box(0, nh + 17, 1, 1, 2);
            dome(0, nh + 18, 1.5, dm);
            box(0, nh + 21, 1, 2, D);
            // the long front
            box(-hw, nh, w, nh, G);
            box(-hw, 1, w, 1, D);
            box(-hw, nh, w, 1, Lt);
            for (let p = -hw; p <= hw; p += 2) box(p, nh + 1, 1, 1, D); // the parapet
            for (let p = -hw + 2; p <= hw - 2; p += 3) if (Math.abs(p) > 7) box(p, nh - 3, 1, 3, 2);
            // the portico
            box(-6, nh + 1, 13, nh + 1, Lt);
            box(-5, nh - 1, 11, nh - 2, 2);
            for (let p = -5; p <= 5; p += 2) box(p, nh - 1, 1, nh - 2, G);
            box(-6, nh + 1, 13, 2, G);
            for (let j = 1; j <= 4; j++) {
              const k = 7 - Math.round((j * 7) / 4.5);
              box(-k, nh + 1 + j, 2 * k + 1, 1, j === 1 ? Lt : G);
            }
            box(-7, 1, 15, 1, Lt); // the steps
            break;
          }
          case "olmecHead": {
            // An Olmec colossal head (Parque-Museo La Venta, Villahermosa): a squat basalt head in a close
            // helmet with a band over the brow and flaps over the ears, heavy-lidded eyes, a broad flat nose
            // and full lips, on a low plinth (o.ph high, o.pw wide).
            const bs = [132, 128, 116],
              B = css(e.sh(bs)),
              S = css(e.sh(mixc(bs, [41, 40, 54], 0.35))),
              D = css(e.sh(mixc(bs, [41, 40, 54], 0.6))),
              Lt = css(e.sh(mixc(bs, [255, 248, 225], 0.3))),
              ph = o.ph ?? 3,
              pk = Math.floor((o.pw ?? 8) / 2) + 2;
            box(-pk, ph, 2 * pk + 1, ph, css(e.sh([196, 190, 176])));
            box(-pk, ph, 2 * pk + 1, 1, css(e.sh([224, 218, 204])));
            const b = ph;
            box(-6, b + 11, 13, 11, B); // the face
            box(4, b + 11, 3, 11, S);
            dome(0, b + 11, 6.5, B); // the helmet
            box(-6, b + 13, 13, 2, Lt); // its brow band
            box(-1, b + 15, 3, 2, Lt); // the ornament on the band
            for (const s of [-1, 1]) box(s > 0 ? 6 : -7, b + 11, 2, 7, s > 0 ? S : B); // the ear flaps
            for (const s of [-1, 1]) {
              box(s * 3 - 1, b + 9, 3, 1, D); // heavy lids
              box(s * 3, b + 8, 1, 1, D);
            }
            box(-1, b + 8, 3, 3, Lt); // the nose
            box(-2, b + 5, 5, 1, S);
            box(-3, b + 4, 7, 1, D); // the lips
            box(-2, b + 3, 5, 1, S);
            box(-5, b + 2, 11, 2, S); // the chin's shadow
            break;
          }
          case "teatroJuarez": {
            // Teatro Juárez (Guanajuato): a portico of Doric columns in green cantera on a broad flight of steps,
            // a frieze and a balustrade crowned by bronze statues of the nine Muses, between ochre pavilions
            // topped by little bronze lamps.
            const gc = [120, 130, 104],
              G = css(e.sh(gc)),
              GS = css(e.sh(mixc(gc, [41, 40, 54], 0.35))),
              GL = css(e.sh(mixc(gc, [255, 248, 225], 0.3))),
              oc = [198, 150, 92],
              O = css(e.sh(oc)),
              OS = css(e.sh(mixc(oc, [41, 40, 54], 0.3))),
              OL = css(e.sh(mixc(oc, [255, 248, 225], 0.35))),
              br = css(e.sh([70, 74, 62]));
            const w = o.w ?? 25,
              hw = Math.floor(w / 2),
              nh = o.nh ?? 12;
            for (let i = 0; i < 4; i++) box(-hw + 3 - i, i + 1, w - 6 + 2 * i, 1, i % 2 ? GL : G); // the steps
            for (const s of [-1, 1]) {
              const px = s * (hw - 2); // a pavilion
              box(px - 2, nh + 2, 5, nh + 2, O);
              box(px + 2, nh + 1, 1, nh + 1, OS);
              box(px - 2, nh + 2, 5, 1, OL);
              box(px, nh - 2, 1, 3, 2);
              box(px, nh - 7, 1, 3, 2);
              box(px - 1, nh + 4, 3, 2, OL);
              box(px, nh + 6, 1, 2, br); // the lamp
            }
            box(-hw + 4, nh, w - 8, nh - 4, 2); // the dark loggia behind the columns
            for (let p = -hw + 4; p <= hw - 4; p += 2) box(p, nh - 1, 1, nh - 5, G);
            box(-hw + 4, nh - 1, 1, nh - 5, GL);
            box(-hw + 3, nh + 2, w - 6, 3, G); // the entablature and frieze
            box(-hw + 3, nh, w - 6, 1, GL);
            for (let p = -hw + 4; p <= hw - 4; p += 2) box(p, nh + 1, 1, 1, GS);
            box(-hw + 3, nh + 3, w - 6, 1, GL);
            for (let p = -hw + 4; p <= hw - 4; p += 1) box(p, nh + 4, 1, 1, p % 2 ? G : GL); // the balustrade
            for (let i = 0; i < 9; i++) {
              const p = Math.round(-hw + 4 + (i * (w - 8)) / 8); // the Muses
              box(p, nh + 7, 1, 3, br);
              box(p, nh + 8, 1, 1, css(e.sh([92, 98, 82])));
            }
            break;
          }
          case "faroComercio": {
            // Faro del Comercio (Monterrey): Barragán's tall, thin slab of orange-red concrete on the Macroplaza,
            // its top cut on a slant; the lit broad face and the shaded edge.
            const h = o.h ?? 40,
              rgb = [226, 92, 58],
              F = css(e.sh(rgb)),
              FS = css(e.sh(mixc(rgb, [41, 40, 54], 0.35))),
              FL = css(e.sh(mixc(rgb, [255, 248, 225], 0.2)));
            box(-2, h - 2, 3, h - 2, F);
            box(1, h - 3, 1, h - 3, FS);
            box(-2, h, 1, 2, F); // the slanted top
            box(-1, h - 1, 1, 1, F);
            box(-2, h, 1, h, FL);
            box(-3, 1, 5, 1, FS);
            break;
          }
          case "palacioCortes": {
            // Palacio de Cortés (Cuernavaca): a fortress-palace of dark rubble stone crowned with a row of
            // merlons, its left corner block taller and carrying a little orange-red round clock tower, and on
            // the right the two storeys of arcaded loggias (where Rivera's murals are).
            const st = [150, 136, 118],
              G = css(e.sh(st)),
              S = css(e.sh(mixc(st, [41, 40, 54], 0.35))),
              D = css(e.sh(mixc(st, [41, 40, 54], 0.18))),
              Lt = css(e.sh(mixc(st, [255, 248, 225], 0.3))),
              rd = [214, 96, 64],
              R1 = css(e.sh(rd)),
              RS = css(e.sh(mixc(rd, [41, 40, 54], 0.3)));
            const w = o.w ?? 29,
              hw = Math.floor(w / 2),
              wh = o.wh ?? 12;
            box(-hw, wh, w, wh, G);
            box(-hw, 1, w, 1, D);
            for (let i = 3; i < wh; i += 3) box(-hw, i, w, 1, D); // courses of rubble
            for (let p = -hw; p <= hw; p += 2) box(p, wh + 1, 1, 1, G); // merlons
            // the corner block and its clock tower
            box(-hw, wh + 3, 9, wh + 3, G);
            box(-hw + 8, wh + 2, 1, wh + 2, S);
            for (let p = -hw; p < -hw + 9; p += 2) box(p, wh + 4, 1, 1, G);
            box(-hw + 2, wh + 9, 5, 5, R1);
            box(-hw + 6, wh + 8, 1, 4, RS);
            box(-hw + 2, wh + 9, 5, 1, css(e.sh(mixc(rd, [255, 248, 225], 0.3))));
            orb(-hw + 4, wh + 6, 1, 6);
            box(-hw + 4, wh + 6, 1, 1, 2);
            for (const p of [-hw + 2, -hw + 4, -hw + 6]) box(p, wh + 10, 1, 1, R1);
            // windows and doors
            for (const p of [-hw + 3, -2, 3]) {
              box(p, 4, 2, 3, 2);
              box(p, 9, 1, 2, 2);
            }
            // the loggias
            box(hw - 9, wh - 1, 9, wh - 2, S);
            for (const b of [5, 10]) for (let p = hw - 8; p <= hw - 1; p += 2) box(p, b, 1, 3, 2);
            box(hw - 9, 6, 9, 1, Lt);
            box(hw - 9, wh - 1, 9, 1, Lt);
            break;
          }
