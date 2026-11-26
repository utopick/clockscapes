          case "ventanaAlMundo": {
            // Ventana al Mundo (Barranquilla's riverside Gran Malecon): a giant rectangular window frame,
            // thick pale uprights and lintel with a cross of mullions, standing on a stepped plinth.
            const fr = css(e.sh([236, 232, 222])),
              sd = css(e.sh([176, 168, 158])),
              dk = css(e.sh([120, 112, 108]));
            box(-9, 3, 19, 3, dk);
            box(-8, 6, 17, 3, sd);
            box(-6, 9, 13, 3, fr);
            box(-6, 42, 3, 33, fr);
            box(4, 42, 3, 33, fr);
            box(-6, 42, 13, 3, fr);
            box(4, 41, 3, 31, sd);
            box(0, 39, 1, 27, sd);
            box(-3, 25, 7, 1, sd);
            box(-6, 45, 13, 1, css(e.sh([250, 246, 238])));
            break;
          }
          case "torreColpatria": {
            // Torre Colpatria (Bogota): 196 m, narrowing slightly to a flat crown; vertical white concrete fins
            // between dark glass strips with a wider dark band down the middle, a dark lobby and a tall mast.
            const wh = css(e.sh([236, 232, 222])),
              sd = css(e.sh([190, 184, 176])),
              dk = css(e.sh([58, 64, 84]));
            box(-9, 4, 19, 2, dk);
            [
              [8, 4, 16],
              [7, 16, 28],
              [6, 28, 40],
              [5, 40, 50],
            ].forEach(([hw, y0, y1]) => {
              box(-hw, y1, 2 * hw + 1, y1 - y0, wh);
              box(hw, y1, 1, y1 - y0, sd);
              for (let p = -hw + 1; p < hw; p += 2) if (Math.abs(p) > 1) box(p, y1, 1, y1 - y0, dk);
              box(-1, y1, 3, y1 - y0, dk);
            });
            box(-6, 51, 13, 2, wh);
            box(-4, 53, 9, 1, dk);
            box(0, 62, 1, 9, wh);
            box(0, 57, 1, 1, 10);
            break;
          }
          case "capitolioNacional": {
            // Capitolio Nacional (Plaza de Bolivar, Bogota): a long low neoclassical building in cream stone,
            // wings with a colonnade over arched ground windows, a six-column portico under a pediment, a flag.
            const st = css(e.sh([226, 208, 168])),
              sd = css(e.sh([190, 170, 132])),
              lt = css(e.sh([244, 232, 200]));
            box(-21, 3, 43, 2, sd);
            box(-9, 4, 19, 2, lt);
            box(-20, 14, 41, 11, st);
            box(-20, 14, 41, 1, lt);
            for (let p = -19; p <= 19; p += 3) {
              if (Math.abs(p) < 10) continue;
              box(p, 8, 2, 4, 2);
              box(p, 13, 1, 4, lt);
              box(p + 1, 13, 1, 4, sd);
            }
            box(-10, 18, 21, 15, st);
            box(-8, 16, 17, 11, 2);
            for (const p of [-8, -5, -2, 2, 5, 8]) box(p, 16, 2, 12, lt);
            box(-11, 18, 23, 2, lt);
            cone(0, 18, 11, 5, sd);
            cone(0, 18, 9, 4, lt);
            box(0, 29, 1, 7, 2);
            box(1, 29, 4, 1, 12);
            box(1, 28, 4, 1, 7);
            break;
          }
          case "cristoRey": {
            // Cristo Rey (Cali): a white Christ with arms stretched wide, in a long robe, standing on a
            // rounded rock pedestal on a stepped platform on its hill.
            const wh = css(e.sh([240, 238, 232])),
              sd = css(e.sh([196, 192, 186])),
              rk = css(e.sh([150, 130, 110])),
              gr = css(e.sh([96, 140, 84]));
            box(-14, 3, 29, 3, gr);
            box(-8, 6, 17, 3, rk);
            box(-5, 10, 11, 4, rk);
            box(-5, 22, 11, 12, wh);
            box(3, 22, 2, 12, sd);
            box(-4, 33, 9, 11, wh);
            box(2, 33, 2, 11, sd);
            box(-11, 34, 23, 3, wh);
            box(-11, 31, 23, 1, sd);
            box(-1, 38, 3, 2, wh);
            orb(0, 41, 2, wh);
            break;
          }
          case "ermitaCali": {
            // La Ermita (Cali): a neo-Gothic church in white and pale blue-grey, a tall spired tower over the
            // pointed doorway, a window above it, pinnacled buttresses and a gabled nave behind.
            const wh = css(e.sh([238, 238, 232])),
              bl = css(e.sh([150, 186, 214])),
              sd = css(e.sh([190, 192, 196])),
              dk = css(e.sh([78, 63, 83]));
            box(-8, 14, 17, 12, wh);
            for (let j = 0; j < 6; j++) box(-8 + j, 15 + j, 17 - 2 * j, 1, j % 2 ? sd : bl);
            box(-8, 14, 17, 1, sd);
            box(-3, 29, 7, 15, wh);
            box(3, 29, 1, 15, sd);
            box(-3, 30, 7, 1, bl);
            for (let j = 0; j < 8; j++) box(-3 + j, 29 - 0, 1, 0, wh);
            for (const s of [-7, 7]) {
              box(s - 1, 20, 3, 8, wh);
              cone(s, 20, 1, 4, bl);
            }
            box(-1, 22, 3, 5, dk);
            box(0, 25, 1, 1, dk);
            box(0, 11, 1, 7, dk);
            box(-1, 9, 3, 3, dk);
            box(0, 12, 1, 1, bl);
            cone(0, 29, 3, 12, bl);
            cone(0, 29, 2, 10, wh);
            box(0, 42, 1, 3, sd);
            box(-4, 33, 1, 3, dk);
            box(4, 33, 1, 3, dk);
            break;
          }
          case "castilloSanFelipe": {
            // Castillo San Felipe de Barajas (Cartagena): a fortress heaped on the hill of San Lazaro; seen from the
            // front, a long low outer wall, a grass slope, then terraces of pale stone stepping up to a summit
            // of little turrets and a low building, with the Colombian flag at the left.
            const st = css(e.sh([190, 176, 146])),
              sd = css(e.sh([138, 126, 104])),
              lt = css(e.sh([220, 208, 178])),
              gr = css(e.sh([112, 140, 74])),
              rd = css(e.sh([150, 82, 64]));
            box(-17, 6, 35, 3, st);
            box(-17, 6, 35, 1, lt);
            for (let p = -16; p < 17; p += 6) box(p, 5, 1, 1, sd);
            box(-14, 10, 29, 4, gr);
            for (let j = 0; j < 12; j++) {
              const l = -13 + Math.round(j * 1.1),
                r = 14 - Math.round(j * 0.9);
              box(l, 11 + j, r - l, 1, j % 3 === 0 ? lt : j % 3 === 1 ? st : sd);
            }
            box(-3, 23, 13, 3, st);
            box(-3, 23, 13, 1, lt);
            box(0, 27, 5, 3, rd);
            for (const p of [-3, 4, 9]) {
              box(p, 28, 2, 3, lt);
              box(p, 30, 2, 1, sd);
            }
            box(-14, 20, 1, 12, sd);
            box(-13, 20, 4, 1, 12);
            box(-13, 19, 4, 1, 7);
            box(-13, 18, 4, 1, 10);
            break;
          }
          case "torreRelojCartagena": {
            // Torre del Reloj (Cartagena): the clock tower over the Puerta del Reloj gate, ochre with white trim,
            // a round-arched gateway between arcaded wings, a white clock face and an octagonal belfry under a dome.
            const oc = css(e.sh([232, 196, 112])),
              sd = css(e.sh([190, 150, 80])),
              wh = css(e.sh([246, 240, 226])),
              dk = css(e.sh([78, 63, 83]));
            box(-6, 10, 13, 8, oc);
            box(-6, 10, 13, 1, wh);
            for (const p of [-5, -3, 3, 5]) box(p, 7, 1, 4, dk);
            box(-3, 28, 7, 18, oc);
            box(3, 28, 1, 18, sd);
            box(-1, 9, 3, 7, dk);
            box(0, 10, 1, 1, oc);
            box(-4, 14, 9, 1, wh);
            box(-4, 22, 9, 1, wh);
            orb(0, 25, 2, wh);
            box(0, 25, 1, 2, dk);
            box(-2, 34, 5, 6, oc);
            box(-1, 33, 1, 3, dk);
            box(1, 33, 1, 3, dk);
            box(-3, 28, 7, 1, wh);
            dome(0, 34, 3, wh);
            box(0, 38, 1, 3, 12);
            break;
          }
          case "catedralManizales": {
            // Cathedral Basilica of Manizales: a grey neo-Gothic concrete cathedral whose very tall central
            // tower narrows in stages to a slim spire, flanked by two lower pinnacled towers, with a pointed
            // portal and a round rose window above it.
            const st = css(e.sh([182, 176, 168])),
              sd = css(e.sh([138, 134, 130])),
              lt = css(e.sh([212, 208, 200])),
              dk = css(e.sh([64, 62, 78])),
              rf = css(e.sh([86, 110, 116]));
            box(-9, 16, 19, 14, st);
            box(9, 16, 1, 14, sd);
            box(-9, 16, 19, 1, lt);
            for (const s of [-1, 1]) {
              box(s * 7 - 1, 34, 3, 18, st);
              box(s * 7 + 1, 34, 1, 18, sd);
              cone(s * 7, 34, 1, 7, rf);
              box(s * 7, 43, 1, 2, lt);
              box(s * 7, 30, 1, 3, dk);
            }
            box(-4, 40, 9, 26, st);
            box(4, 40, 1, 26, sd);
            box(-3, 40, 1, 24, lt);
            for (const y of [24, 31]) box(-4, y, 9, 1, lt);
            box(-1, 12, 3, 9, dk);
            box(0, 13, 1, 1, dk);
            orb(0, 25, 2, lt);
            orb(0, 25, 1, dk);
            for (const y of [34, 38]) box(0, y, 1, 2, dk);
            box(-3, 49, 7, 8, st);
            box(-1, 47, 1, 4, dk);
            box(1, 47, 1, 4, dk);
            box(-3, 49, 7, 1, lt);
            cone(0, 49, 3, 13, rf);
            box(0, 63, 1, 3, lt);
            box(-1, 62, 3, 1, lt);
            break;
          }
          case "coltejerMedellin": {
            // Coltejer Building (Medellin): a tall slim dark slab with fine vertical window ribs and a pale side
            // face, a flat parapet and the long needle spire on top, on a low pale podium.
            const dk = css(e.sh([70, 62, 66])),
              rib = css(e.sh([104, 98, 100])),
              pale = css(e.sh([210, 204, 194])),
              sp = css(e.sh([180, 180, 186]));
            box(-9, 6, 19, 3, pale);
            box(-5, 44, 9, 38, dk);
            for (let p = -4; p <= 2; p += 2) box(p, 44, 1, 38, rib);
            box(4, 44, 3, 38, pale);
            box(-5, 44, 12, 1, pale);
            box(-4, 46, 8, 1, pale);
            box(0, 62, 1, 16, sp);
            box(0, 52, 1, 6, sp);
            break;
          }
          case "palacioCulturaMedellin": {
            // Palacio de la Cultura Rafael Uribe Uribe (Medellin): a Gothic Revival palace banded in black and
            // white, a long front with pointed arched windows and a tall central tower with a spire.
            const wh = css(e.sh([238, 234, 224])),
              bk = css(e.sh([60, 58, 66])),
              dk = css(e.sh([78, 63, 83]));
            box(-16, 14, 33, 12, wh);
            for (let y = 4; y < 14; y += 2) box(-16, y, 33, 1, bk);
            for (let p = -14; p <= 14; p += 4) {
              if (Math.abs(p) < 6) continue;
              box(p, 11, 2, 5, dk);
              box(p, 12, 2, 1, wh);
              box(p + 1, 12, 1, 1, dk);
            }
            for (const s of [-1, 1]) {
              box(s * 13 - 1, 20, 3, 8, wh);
              cone(s * 13, 20, 1, 5, bk);
            }
            box(-4, 32, 9, 20, wh);
            for (let y = 10; y < 32; y += 2) box(-4, y, 9, 1, bk);
            box(-1, 10, 3, 6, dk);
            box(0, 11, 1, 1, dk);
            box(-3, 38, 7, 3, wh);
            box(-1, 37, 1, 2, dk);
            box(1, 37, 1, 2, dk);
            cone(0, 38, 3, 10, bk);
            box(0, 50, 1, 4, bk);
            break;
          }
          case "altarDePatria": {
            // Altar de la Patria, Quinta de San Pedro Alejandrino (Santa Marta), where Bolivar died: a white
            // neoclassical block with a flat cornice, a deep recess between two tall pilasters with a dark
            // door, a dark eagle on a pedestal at each front corner, shallow steps, and a low white arcade.
            const wh = css(e.sh([240, 238, 230])),
              sd = css(e.sh([196, 194, 188])),
              dk = css(e.sh([70, 62, 66])),
              st = css(e.sh([200, 190, 170]));
            box(-12, 4, 25, 2, st);
            box(-11, 6, 23, 1, sd);
            box(-9, 26, 19, 20, wh);
            box(10, 26, 1, 20, sd);
            box(-10, 28, 21, 2, wh);
            box(-10, 28, 21, 1, sd);
            box(-4, 24, 9, 17, sd);
            box(-5, 24, 1, 18, wh);
            box(5, 24, 1, 18, wh);
            box(-1, 15, 3, 9, dk);
            box(-3, 22, 7, 3, dk);
            for (const s of [-1, 1]) {
              box(s * 7 - 1, 19, 2, 13, wh);
              box(s * 7 - 1, 21, 2, 3, dk);
            }
            box(-26, 14, 14, 8, wh);
            box(-26, 14, 14, 1, sd);
            for (let p = -25; p <= -14; p += 3) box(p, 11, 2, 5, dk);
            break;
          }
