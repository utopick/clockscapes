          case "abujaMosque": {
            // Abuja National Mosque (1984): a white hall behind a pointed arcade, a great gold dome on a
            // windowed drum with four small gold domes at its corners, and four slender minarets with two
            // balconies each and gilt pointed caps.
            const sh = chShade(6, 0.22),
              lit = chLit(6, 0.5),
              gold = 12,
              goldLit = chLit(12, 0.45),
              goldSh = chShade(12, 0.3);
            const goldDome = (cx, b, r) => {
              dome(cx, b, r, gold);
              for (let dy = 1; dy < r; dy++) {
                const k = Math.round(Math.sqrt(r * r - dy * dy));
                if (dy >= r * 0.3) box(cx - k + 1, b + dy, 1, 1, goldLit);
                if (dy <= r * 0.6) box(cx + k, b + dy, 1, 1, goldSh);
              }
            };
            // the hall: plinth, arcade of pointed arches, frieze and parapet
            box(-13, 11, 27, 11, 6);
            box(13, 11, 1, 11, sh);
            box(-14, 1, 29, 1, 13);
            for (let p = -11; p <= 11; p += 3) {
              box(p, 5, 2, 4, 2);
              box(p, 6, 1, 1, 2);
            }
            box(-13, 8, 27, 1, lit);
            for (let p = -11; p <= 11; p += 3) box(p, 10, 1, 1, 2);
            box(-13, 12, 27, 1, gold);
            for (let p = -13; p <= 13; p += 2) box(p, 13, 1, 1, 6);
            // the drum and the great dome, with four small domes round it
            box(-7, 16, 15, 4, 6);
            box(7, 16, 1, 4, sh);
            for (let p = -5; p <= 5; p += 2) box(p, 15, 1, 2, 2);
            box(-7, 16, 15, 1, goldLit);
            goldDome(0, 16, 8);
            box(0, 25, 1, 2, 3);
            box(-1, 27, 3, 1, 3);
            box(-1, 28, 1, 1, 3);
            box(1, 28, 1, 1, 3);
            for (const s of [-1, 1]) {
              box(s * 10 - 1, 14, 3, 1, 6);
              goldDome(s * 10, 14, 2);
              box(s * 10, 17, 1, 1, 3);
            }
            // four minarets: the outer pair stands further back, a little shorter
            for (const [p, mh] of [
              [-18, 31],
              [18, 31],
              [-15, 35],
              [15, 35],
            ]) {
              box(p - 1, mh, 3, mh, 6);
              box(p + 1, mh, 1, mh, sh);
              box(p - 2, 3, 5, 3, 6);
              for (const b of [0.55, 0.82]) {
                const at = Math.round(mh * b);
                box(p - 2, at, 5, 1, lit);
                box(p - 1, at - 1, 3, 1, sh);
                box(p, at - 3, 1, 2, 2);
              }
              for (let i = 8; i < mh * 0.5; i += 5) box(p, i, 1, 2, 2);
              box(p - 1, mh + 1, 3, 1, gold);
              cone(p, mh + 1, 1, 4, gold);
              box(p, mh + 7, 1, 2, 3);
            }
            break;
          }
          case "nationalChristianCentre": {
            // National Christian Centre (Ecumenical Centre), Abuja: a tall grey concrete tower whose top is
            // cut into a cross, with a lantern and cross on top, standing before a long hall of white gothic
            // arches under a folded pink-copper roof that rises to a tall pointed gable with its arched window.
            const grey = css(e.sh([168, 160, 150])),
              greyLit = css(e.sh([196, 189, 178])),
              greySh = css(e.sh([128, 121, 114])),
              roof = css(e.sh([226, 150, 112])),
              roofSh = css(e.sh([190, 112, 84])),
              sh = chShade(6, 0.2);
            // the hall: white arches along the front, the folded roof above
            box(-12, 7, 26, 7, 6);
            for (let p = -11; p <= 12; p += 3) {
              box(p, 5, 2, 5, 2);
              box(p, 6, 1, 1, 6);
            }
            for (let i = 0; i < 6; i++) box(-12 + i, 8 + i, 18 - i, 1, i % 2 ? roofSh : roof);
            for (let p = -11; p <= 3; p += 3) box(p, 8, 1, 1, 6);
            // the great pointed gable on the right, with its tall arched window
            for (let j = 0; j < 18; j++) {
              const k = Math.round(6 * (1 - j / 18));
              box(9 - k, 1 + j, 2 * k + 1, 1, j < 16 ? roof : roofSh);
            }
            for (let j = 0; j < 12; j++) {
              const k = Math.max(0, Math.round(4 * (1 - j / 12)) - 0);
              box(9 - k, 1 + j, 2 * k + 1, 1, 6);
            }
            box(8, 9, 3, 8, 2);
            box(9, 10, 1, 1, 2);
            box(15, 12, 1, 12, roofSh);
            // the tower: the shaft with its slot window, the cross-shaped head, the lantern and cross
            box(-5, 44, 7, 44, grey);
            box(1, 44, 1, 44, greySh);
            box(-5, 44, 1, 44, greyLit);
            for (let i = 6; i < 34; i += 3) box(-2, i, 1, 2, greySh);
            box(-7, 39, 11, 3, grey); // the cross arms
            box(3, 39, 1, 3, greySh);
            box(-7, 39, 11, 1, greyLit);
            box(-3, 44, 3, 4, greySh);
            box(-4, 46, 5, 2, 2); // the lantern
            box(-5, 47, 7, 1, grey);
            box(-2, 51, 1, 4, 8); // the cross on top
            box(-3, 50, 3, 1, 8);
            box(-5, 4, 7, 3, 2);
            break;
          }
          case "lekkiBridge": {
            // Lekki-Ikoyi Link Bridge, Lagos (2013): a single white pylon of two legs that spread apart as
            // they rise from one footing, with fans of stay cables to both sides of the deck, over the lagoon.
            const sh = chShade(6, 0.25),
              lit = chLit(6, 0.4);
            box(-19, 6, 39, 1, 13); // the deck, its parapet and the shaded girder under it
            box(-19, 5, 39, 1, 6);
            box(-19, 4, 39, 1, sh);
            for (const p of [-16, -10, 10, 16]) box(p, 3, 1, 3, 13);
            for (let p = -18; p <= 18; p += 2) box(p, 7, 1, 1, 8);
            box(-2, 2, 5, 2, 13); // the footing
            for (let j = 3; j <= 27; j++) {
              const sp = Math.round((j - 3) / 9); // the legs part as they rise
              box(-1 - sp, j, 1, 1, lit);
              box(1 + sp, j, 1, 1, j > 6 ? sh : 6);
            }
            box(-1, 6, 3, 3, 6);
            // the stays: from the top of each leg to the deck, both ways
            for (let i = 0; i < 6; i++) {
              const top = 26 - i * 2,
                d = 5 + i * 2.4;
              stroke(-3, top, -3 - d, 7, 8);
              stroke(3, top, 3 + d, 7, 8);
            }
            break;
          }
          case "nationalTheatre": {
            // National Theatre, Iganmu, Lagos (1976): the round "military cap" building, a white drum with a
            // ribbed wall and a dark window band under a wide ringed roof that rises to a crown, its peak
            // jutting out over the entrance like the visor of a cap, on a broad stepped podium.
            const sh = chShade(6, 0.25),
              lit = chLit(6, 0.45),
              rib = chShade(6, 0.12),
              band = css(e.sh([96, 88, 92])),
              roof = chShade(13, 0.08),
              roofSh = chShade(13, 0.32);
            box(-17, 1, 35, 1, 13); // the podium
            box(-16, 2, 33, 1, chLit(13, 0.2));
            box(-14, 7, 29, 5, 6); // the drum
            for (let p = -13; p <= 13; p += 2) box(p, 6, 1, 3, rib);
            box(-14, 5, 29, 1, band);
            box(-3, 5, 7, 3, 2); // the entrance
            box(12, 7, 3, 5, sh);
            box(-15, 8, 31, 1, lit); // the eaves
            // the ringed roof, rising in steps to the crown
            const rows = [
              [15, roof],
              [13, roofSh],
              [12, roof],
              [10, roofSh],
              [8, roof],
              [6, roofSh],
            ];
            rows.forEach(([k, col], i) => box(-k, 9 + i, 2 * k + 1, 1, col));
            box(-4, 15, 9, 1, lit);
            // the visor: the cap's peak thrust out to the left above the eaves
            box(-17, 9, 5, 1, lit);
            box(-18, 10, 5, 1, 6);
            box(-18, 9, 2, 1, sh);
            break;
          }
          case "cocoaHouse": {
            // Cocoa House, Ibadan (1965): a 26-storey tower, its left end rounded and stacked with louvred
            // sunshades, the long front banded with strip windows and split by a vertical fin, and a mast on
            // the roof.
            const wall = css(e.sh([206, 194, 170])),
              wallSh = css(e.sh([164, 152, 132])),
              lit = css(e.sh([228, 220, 200])),
              glass = css(e.sh([110, 118, 126]));
            box(-6, 34, 13, 34, wall);
            // the rounded end: a lit edge, then louvres every other row
            box(-6, 33, 1, 32, lit);
            for (let i = 3; i < 33; i += 2) box(-5, i, 3, 1, wallSh);
            box(-2, 34, 1, 34, wallSh);
            // the front: strip windows on every floor, the vertical fin, the shaded right end
            for (let i = 4; i < 33; i += 2) box(-1, i, 7, 1, glass);
            box(2, 34, 1, 32, lit);
            box(6, 34, 1, 34, wallSh);
            box(-1, 3, 7, 2, 2); // the lobby
            box(-6, 35, 13, 1, lit); // the roof parapet and mast
            box(1, 38, 1, 3, 8);
            box(0, 37, 3, 1, 8);
            break;
          }
          case "ilorinMosque": {
            // Ilorin Central Mosque: a white hall with a row of pointed windows, a great gold onion-shaped dome
            // on a tall drum, four smaller gold domes round it, and four tall white minarets with balconies
            // and gold bulbs.
            const sh = chShade(6, 0.22),
              lit = chLit(6, 0.5),
              goldLit = chLit(12, 0.45),
              goldSh = chShade(12, 0.3);
            box(-14, 10, 29, 10, 6);
            box(14, 10, 1, 10, sh);
            box(-15, 1, 31, 1, 13);
            for (let p = -12; p <= 12; p += 3) {
              box(p, 6, 1, 4, 2);
              box(p, 7, 1, 1, 2);
            }
            box(-2, 7, 5, 7, 2); // the entrance
            box(-14, 10, 29, 1, 12);
            for (let p = -14; p <= 14; p += 2) box(p, 11, 1, 1, 6);
            // the drum and the onion dome
            box(-6, 16, 13, 6, 6);
            box(6, 16, 1, 6, sh);
            for (let p = -4; p <= 4; p += 2) box(p, 15, 1, 3, 2);
            box(-6, 16, 13, 1, lit);
            orb(0, 21, 7, 12);
            for (let dy = 0; dy < 6; dy++) {
              const k = Math.round(Math.sqrt(49 - dy * dy));
              box(-k + 1, 21 + dy, 1, 1, goldLit);
              box(k, 21 + dy, 1, 1, goldSh);
            }
            box(-6, 17, 13, 1, goldSh);
            cone(0, 27, 3, 4, 12);
            box(0, 33, 1, 2, 3);
            box(-1, 35, 1, 1, 3);
            box(1, 35, 1, 1, 3);
            // four small gold domes on the hall's corners
            for (const p of [-11, -8, 8, 11]) {
              dome(p, 11, 1, 12);
              box(p, 13, 1, 1, 3);
            }
            // the minarets: shafts with three balconies, an open lantern and a gold bulb
            for (const [p, mh] of [
              [-18, 32],
              [18, 32],
              [-15, 36],
              [15, 36],
            ]) {
              box(p - 1, mh, 3, mh, 6);
              box(p + 1, mh, 1, mh, sh);
              box(p - 2, 3, 5, 3, 6);
              for (const b of [0.45, 0.68, 0.9]) {
                const at = Math.round(mh * b);
                box(p - 2, at, 5, 1, lit);
                box(p - 1, at - 1, 3, 1, sh);
              }
              box(p, mh - 5, 1, 2, 2);
              box(p - 1, mh + 2, 3, 2, 6);
              box(p, mh + 2, 1, 2, 2);
              orb(p, mh + 4, 1, 12);
              box(p, mh + 6, 1, 2, 3);
            }
            break;
          }
          case "sultanBello": {
            // Sultan Bello Mosque, Sokoto: a long sand-coloured hall under a scalloped parapet of pale arches,
            // a low ochre dome behind, and thick round minarets with a moulded ring, an arcaded lantern and a
            // golden domed cap.
            const sand = css(e.sh([214, 168, 98])),
              sandLit = css(e.sh([236, 200, 136])),
              sandSh = css(e.sh([178, 132, 72])),
              cream = css(e.sh([240, 224, 188])),
              red = css(e.sh([170, 84, 60])),
              gold = css(e.sh([226, 182, 96]));
            box(-13, 8, 27, 8, sand);
            box(-13, 2, 27, 2, red); // the red plinth and doors
            for (let p = -11; p <= 11; p += 3) box(p, 6, 2, 4, 2);
            box(-13, 9, 27, 1, cream);
            for (let p = -13; p <= 12; p += 3) {
              box(p, 11, 3, 2, cream); // the scalloped parapet: little pointed arches
              box(p + 1, 12, 1, 1, cream);
              box(p + 1, 10, 1, 1, sandSh);
            }
            box(13, 8, 1, 8, sandSh);
            dome(0, 12, 6, sand);
            for (let dy = 1; dy < 6; dy++) {
              const k = Math.round(Math.sqrt(36 - dy * dy));
              if (dy >= 2) box(-k + 1, 12 + dy, 1, 1, sandLit);
              if (dy <= 3) box(k, 12 + dy, 1, 1, sandSh);
            }
            box(0, 19, 1, 2, 3);
            // the round minarets, the near pair taller
            for (const [p, mh] of [
              [-10, 22],
              [10, 22],
              [-16, 30],
              [16, 30],
            ]) {
              box(p - 2, mh, 5, mh, sand);
              box(p - 2, mh, 1, mh, sandLit);
              box(p + 2, mh, 1, mh, sandSh);
              const ring = Math.round(mh * 0.78);
              box(p - 3, ring, 7, 2, sand); // the moulded ring
              box(p - 3, ring, 7, 1, sandLit);
              for (const q of [-1, 1]) box(p + q, mh - 1, 1, 3, 2); // the arcaded lantern
              box(p - 2, mh, 5, 1, sandLit);
              dome(p, mh, 2, gold);
              box(p, mh + 3, 1, 2, 3);
            }
            break;
          }
          case "yolaMosque": {
            // Yola Central Mosque: a white front cut into bays by maroon pilasters, each bay a tall pointed arch,
            // a great maroon pointed portal in the middle, three green domes on the roof, and four slender white
            // minarets with balconies and green tops, the outer pair the tallest.
            const sh = chShade(6, 0.22),
              lit = chLit(6, 0.5),
              maroon = css(e.sh([150, 46, 64])),
              green = css(e.sh([128, 176, 140])),
              greenSh = css(e.sh([92, 140, 108]));
            box(-14, 12, 29, 12, 6);
            box(-15, 1, 31, 1, maroon); // the low maroon fence along the front
            for (let p = -14; p <= 14; p += 3) box(p, 12, 1, 12, maroon);
            for (let p = -13; p <= 12; p += 3) {
              if (p > -4 && p < 3) continue;
              box(p, 8, 2, 5, 2);
              box(p, 9, 2, 1, sh);
            }
            box(-14, 13, 29, 1, lit);
            // the portal
            for (let j = 0; j < 15; j++) {
              const k = j < 10 ? 3 : 3 - (j - 9) * 0.6;
              box(-Math.round(k), 1 + j, 2 * Math.round(k) + 1, 1, maroon);
            }
            for (let j = 0; j < 10; j++) {
              const k = j < 7 ? 2 : 2 - (j - 6) * 0.7;
              box(-Math.round(k), 1 + j, 2 * Math.round(k) + 1, 1, 2);
            }
            // the three green domes
            for (const [p, r] of [
              [-8, 3],
              [0, 4],
              [8, 3],
            ]) {
              box(p - r + 1, 15, 2 * r - 1, 1, 6);
              dome(p, 15, r, green);
              box(p + r - 1, 17, 1, 2, greenSh);
              box(p, 15 + r + 1, 1, 2, 3);
            }
            for (const [p, mh] of [
              [-18, 34],
              [18, 34],
              [-11, 24],
              [11, 24],
            ]) {
              box(p - 1, mh, 3, mh, 6);
              box(p + 1, mh, 1, mh, sh);
              for (let i = 6; i < mh - 8; i += 6) box(p, i, 1, 3, 2);
              for (const b of [0.62, 0.86]) {
                const at = Math.round(mh * b);
                box(p - 2, at, 5, 1, 12);
                box(p - 1, at - 1, 3, 1, sh);
              }
              box(p - 1, mh + 2, 3, 2, 6);
              box(p, mh + 2, 1, 2, 2);
              cone(p, mh + 2, 1, 3, green);
              box(p, mh + 7, 1, 2, 3);
            }
            break;
          }
          case "gidanRumfa": {
            // Emir's Palace (Gidan Rumfa), Kano: the red-earth Hausa gatehouse in the long palace wall, its
            // corners and parapet raised into horn-like pinnacles (zanko), the tall arched gateway framed in
            // white relief patterns, and little square windows and drain spouts along the walls.
            const earth = css(e.sh([196, 112, 72])),
              earthLit = css(e.sh([222, 146, 100])),
              earthSh = css(e.sh([152, 82, 56])),
              relief = css(e.sh([238, 226, 200]));
            // the palace wall to both sides, with rounded merlons
            box(-15, 9, 31, 9, earth);
            box(-15, 1, 31, 1, earthSh);
            for (let p = -15; p <= 15; p += 2) box(p, 10, 1, 1, earth);
            for (const p of [-12, -9, 9, 12]) box(p, 6, 1, 1, 2);
            for (const p of [-13, -10, 10, 13]) box(p, 8, 1, 1, earthSh); // spouts
            // the gatehouse
            box(-7, 14, 15, 14, earth);
            box(-7, 14, 1, 14, earthLit);
            box(7, 14, 1, 14, earthSh);
            // white relief: a frame round the gate, zigzags and knots above it
            box(-4, 11, 9, 11, relief);
            box(-3, 10, 7, 10, earth);
            box(-2, 9, 5, 9, 2); // the arched gateway
            box(-1, 10, 3, 1, 2);
            for (let p = -5; p <= 5; p += 2) box(p, 13, 1, 1, relief);
            for (let p = -6; p <= 6; p += 2) box(p, 12, 1, 1, relief);
            for (const p of [-6, 6]) {
              box(p, 9, 1, 2, 2);
              box(p - 1, 6, 3, 1, relief);
            }
            // the zanko: horn pinnacles on the corners and the middle of the parapet
            for (const p of [-7, 7]) {
              box(p - (p < 0 ? 0 : 1), 18, 2, 4, earth);
              box(p + (p < 0 ? -1 : 1), 19, 1, 2, earth);
            }
            for (const p of [-4, -1, 2]) box(p, 16, 2, 2, earth);
            box(0, 18, 1, 2, earth);
            box(-7, 15, 15, 1, earthLit);
            break;
          }
          case "gobarau": {
            // Gobarau Minaret, Katsina (15th c.): a mud tower in three tapering stages, a ledge of rounded
            // merlons round the first, a plain moulded ledge round the second, small square windows, palm-wood
            // beams (toron) poking out, and a little pyramid on top.
            const mudC = css(e.sh([202, 146, 104])),
              lit = css(e.sh([226, 176, 132])),
              sh = css(e.sh([164, 112, 80])),
              wood = css(e.sh([112, 84, 62])),
              patch = css(e.sh([216, 190, 160]));
            box(-5, 12, 11, 12, mudC); // the first stage
            box(-5, 12, 1, 12, lit);
            box(4, 12, 2, 12, sh);
            box(-3, 7, 5, 5, patch); // the paler replastered patch
            box(-6, 13, 13, 1, mudC); // the merlon ledge
            for (let p = -6; p <= 6; p += 2) box(p, 14, 1, 1, mudC);
            box(5, 13, 2, 1, sh);
            box(-4, 22, 9, 9, mudC); // the second stage
            box(-4, 22, 1, 9, lit);
            box(3, 22, 2, 9, sh);
            box(-3, 18, 1, 2, 2);
            box(1, 20, 1, 1, 2);
            box(2, 17, 1, 2, 2);
            box(-5, 23, 11, 1, mudC); // the moulded ledge
            box(4, 23, 2, 1, sh);
            box(-3, 30, 7, 7, mudC); // the top stage and its pyramid
            box(-3, 30, 1, 7, lit);
            box(2, 30, 2, 7, sh);
            box(-2, 28, 1, 2, 2);
            box(1, 28, 1, 2, 2);
            cone(0, 30, 2, 2, mudC);
            box(0, 33, 1, 1, sh);
            // toron beams
            box(-7, 12, 2, 1, wood);
            box(6, 12, 2, 1, wood);
            box(-6, 30, 2, 1, wood);
            box(4, 31, 2, 1, wood);
            break;
          }
          case "damaturuMosque": {
            // Damaturu Central Mosque: a long yellow-plastered hall over a grey stone ground floor of arches,
            // its bays split by pilasters under pointed arch panels, a white stepped parapet, a small white
            // dome behind, and one white minaret of tiered drums at the corner.
            const yellow = css(e.sh([226, 196, 120])),
              yellowSh = css(e.sh([190, 160, 92])),
              stone = css(e.sh([154, 144, 134])),
              sh = chShade(6, 0.22),
              lit = chLit(6, 0.5);
            box(-14, 5, 29, 5, stone);
            for (let p = -12; p <= 12; p += 4) box(p, 4, 2, 3, 2);
            box(-14, 12, 29, 7, yellow);
            for (let p = -14; p <= 14; p += 4) box(p, 12, 1, 7, lit);
            for (let p = -12; p <= 12; p += 4) {
              box(p, 10, 3, 3, yellowSh); // the arch panels, pointed at the top
              box(p + 1, 11, 1, 1, yellowSh);
              box(p, 8, 3, 1, 9);
            }
            box(14, 12, 1, 11, yellowSh);
            box(-14, 13, 29, 1, 6);
            for (let p = -14; p <= 14; p += 3) {
              box(p, 15, 2, 2, 6); // the stepped merlons
              box(p, 16, 1, 1, 6);
            }
            box(5, 14, 7, 1, 6);
            dome(8, 14, 4, 6);
            box(11, 16, 1, 2, sh);
            box(8, 19, 1, 2, 3);
            // the minaret: drums narrowing upwards, each with a balcony
            const mx = -11;
            box(mx - 2, 26, 5, 10, 6);
            box(mx + 2, 26, 1, 10, sh);
            box(mx - 3, 27, 7, 1, lit);
            box(mx - 1, 33, 3, 6, 6);
            box(mx + 1, 33, 1, 6, sh);
            box(mx, 31, 1, 2, 2);
            box(mx - 2, 34, 5, 1, lit);
            box(mx - 1, 36, 3, 2, 6);
            dome(mx, 36, 1, 6);
            box(mx, 38, 1, 2, 3);
            break;
          }
          case "shehuPalace": {
            // Shehu of Borno's Palace, Maiduguri (1907, from memory): a long white palace with green-framed
            // pointed arches on two floors, a crenellated parapet, and a taller gate block in the middle with
            // its great arched entrance and a green dome.
            const sh = chShade(6, 0.22),
              lit = chLit(6, 0.5),
              green = css(e.sh([86, 146, 92])),
              greenLit = css(e.sh([128, 184, 128]));
            box(-15, 12, 31, 12, 6);
            box(15, 12, 1, 12, sh);
            box(-15, 1, 31, 1, 13);
            for (const r of [4, 9])
              for (let p = -13; p <= 13; p += 3) {
                if (p > -5 && p < 5) continue;
                box(p - 1, r + 1, 3, 4, green);
                box(p, r, 1, 3, 2);
              }
            box(-15, 6, 31, 1, lit);
            box(-15, 12, 31, 1, green);
            for (let p = -15; p <= 15; p += 2) box(p, 13, 1, 1, 6);
            // the gate block
            box(-5, 17, 11, 17, 6);
            box(5, 17, 1, 17, sh);
            box(-3, 11, 7, 11, green);
            box(-2, 10, 5, 10, 2);
            box(-1, 11, 3, 1, 2);
            box(-5, 17, 11, 1, green);
            for (let p = -5; p <= 5; p += 2) box(p, 18, 1, 1, 6);
            box(-3, 15, 1, 2, 2);
            box(3, 15, 1, 2, 2);
            dome(0, 18, 4, green);
            box(-2, 21, 1, 1, greenLit);
            box(-3, 20, 1, 1, greenLit);
            box(0, 23, 1, 2, 3);
            break;
          }
          case "olumoRock": {
            // Olumo Rock, Abeokuta: a granite outcrop of great rounded boulders streaked dark by the rain, with
            // tufts of trees in its clefts, and the slim steel lift tower and footbridge built up its side.
            const gr = css(e.sh([150, 146, 140])),
              lit = css(e.sh([186, 182, 172])),
              sh = css(e.sh([104, 100, 98])),
              streak = css(e.sh([82, 78, 80])),
              leaf = css(e.sh([86, 126, 70])),
              steel = css(e.sh([92, 128, 150]));
            // a boulder: a half-ellipse hw wide and h tall on `base`, lit on the left and shaded on the right
            const boulder = (cx, base, hw, h) => {
              for (let j = 0; j < h; j++) {
                const k = Math.max(1, Math.round(hw * Math.sqrt(1 - (j / h) ** 2)));
                box(cx - k, base + j + 1, 2 * k + 1, 1, gr);
                box(cx - k, base + j + 1, 1, 1, lit);
                box(cx + k - 1, base + j + 1, 2, 1, sh);
              }
            };
            boulder(-6, 0, 11, 17);
            boulder(7, 0, 9, 13);
            boulder(-2, 14, 6, 10);
            boulder(6, 12, 4, 6);
            for (const [p, b, h] of [
              [-12, 3, 8],
              [-4, 2, 9],
              [2, 15, 6],
              [10, 2, 7],
            ])
              box(p, b + h, 1, h, streak);
            for (const [p, b] of [
              [-15, 7],
              [0, 13],
              [14, 9],
            ]) {
              orb(p, b, 2, leaf);
              box(p, b - 2, 1, 2, streak);
            }
            // the lift tower and the footbridge to the rock
            box(14, 24, 3, 24, steel);
            box(15, 22, 1, 20, 11);
            box(11, 24, 3, 1, steel);
            box(14, 25, 3, 1, 8);
            break;
          }
          case "shereHills": {
            // Shere Hills, Jos: granite boulders piled into a ridge, a tall split column of rock with a round
            // capstone balanced on top, dark weathering streaks and tufts of golden dry grass.
            const gr = css(e.sh([128, 124, 120])),
              lit = css(e.sh([168, 164, 156])),
              sh = css(e.sh([88, 86, 86])),
              grass = css(e.sh([206, 160, 76]));
            const boulder = (cx, base, hw, h) => {
              for (let j = 0; j < h; j++) {
                const k = Math.max(1, Math.round(hw * Math.sqrt(1 - (j / h) ** 2)));
                box(cx - k, base + j + 1, 2 * k + 1, 1, gr);
                box(cx - k, base + j + 1, 1, 1, lit);
                box(cx + k - 1, base + j + 1, 2, 1, sh);
              }
            };
            boulder(-10, 0, 7, 10);
            boulder(10, 0, 7, 13);
            boulder(-15, 0, 2, 4);
            // the tall column of rock, split down the middle, and its capstone
            box(-4, 16, 9, 16, gr);
            box(-4, 16, 1, 16, lit);
            box(3, 16, 2, 16, sh);
            box(0, 13, 1, 12, sh);
            boulder(0, 15, 4, 4);
            boulder(1, 19, 3, 5);
            for (const [p, b, w] of [
              [-12, 10, 4],
              [-4, 17, 3],
              [6, 13, 5],
              [12, 11, 3],
            ])
              box(p, b, w, 1, grass);
            box(-11, 11, 2, 1, grass);
            box(7, 14, 3, 1, grass);
            break;
          }
          case "dutseRock": {
            // Dutse Rock: a broad bare granite dome (an inselberg) rising behind the town, its smooth slopes
            // striped by dark rain streaks, a few loose boulders and scrub at its foot.
            const gr = css(e.sh([164, 150, 136])),
              lit = css(e.sh([196, 184, 168])),
              sh = css(e.sh([120, 108, 100])),
              streak = css(e.sh([96, 86, 84])),
              scrub = css(e.sh([96, 128, 74]));
            for (let j = 0; j < 21; j++) {
              const k = Math.round(17 * Math.sqrt(1 - (j / 21) ** 1.6));
              box(-k, j + 1, 2 * k + 1, 1, gr);
              box(-k, j + 1, 2, 1, lit);
              box(k - 2, j + 1, 3, 1, sh);
            }
            for (const [p, t, h] of [
              [-11, 15, 10],
              [-6, 19, 12],
              [-2, 20, 9],
              [3, 20, 14],
              [8, 17, 11],
              [12, 13, 8],
            ])
              box(p, t, 1, h, streak);
            for (const [p, r] of [
              [-15, 2],
              [14, 2],
            ])
              dome(p, 0, r, sh);
            for (const p of [-17, -12, 11, 17]) orb(p, 1, 1, scrub);
            break;
          }
          case "nigerBridge": {
            // Used by Asaba and Onitsha (the Niger Bridge, 1965) and Makurdi (o.camel: the Benue rail and road
            // bridge, 1932). A steel through-truss on round concrete piers, o.w cells each side of the centre,
            // in o.n spans: the Niger Bridge's chords deepen over the piers, the Benue's spans are camelbacks
            // (a polygonal top chord highest mid-span). Warren diagonals and the water-stained piers.
            const w = o.w ?? 20,
              n = o.n ?? 3,
              dh = o.dh ?? 4,
              th = o.h ?? 8,
              steel = c,
              sh = chShade(steel, 0.3),
              lit = chLit(steel, 0.35),
              pier = css(e.sh([176, 170, 160])),
              pierSh = css(e.sh([126, 120, 114])),
              span = (2 * w) / n;
            // the deck
            box(-w - 2, dh + 1, 2 * w + 5, 2, sh);
            box(-w - 2, dh + 1, 2 * w + 5, 1, steel);
            for (let i = 0; i <= n; i++) {
              const px = Math.round(-w + i * span);
              box(px - 1, dh - 1, 3, dh - 1, pier); // the piers with their dark waterline
              box(px + 1, dh - 1, 1, dh - 1, pierSh);
              box(px - 1, 1, 3, 1, pierSh);
            }
            // each span: the top chord's height above the deck at x
            const top = (x) => {
              const f = ((x + w) % span) / span; // 0..1 across the span
              const m = Math.min(f, 1 - f) * 2; // 0 at the piers, 1 mid-span
              return o.camel
                ? Math.round(th * (0.55 + 0.45 * Math.min(1, m * 1.6)))
                : Math.round(th * (1 - 0.3 * m));
            };
            for (let x = -w; x <= w; x++) {
              const h = top(x);
              box(x, dh + 1 + h, 1, 1, lit); // the top chord
              box(x, dh + h, 1, 1, steel);
              if ((x + w) % 2 === 0) box(x, dh + h, 1, h - 1, sh); // the verticals
            }
            // the diagonals, zig-zagging from panel to panel
            for (let x = -w; x < w; x += 2) {
              const up = ((x + w) / 2) % 2 === 0;
              stroke(x, dh + 2 + (up ? 0 : top(x) - 2), x + 2, dh + 2 + (up ? top(x + 2) - 2 : 0), c);
            }
            break;
          }
          case "colonialHouse": {
            // Used by Calabar (Old Residency), Lokoja (Lugard House), Kaduna (Lugard Hall) and Umuahia (War Museum):
            // a long white colonial building on a plinth, a row of slim verandah columns, a hipped roof with a
            // pedimented porch in the middle, and (o.dome) a small dome over the porch.
            const bx = (l, b, w, h, col) => box(l, b + h, w, h, col); // bottom-up
            const w = o.w ?? 25,
              hw = Math.floor(w / 2),
              nh = o.nh ?? 9,
              wall = css(e.sh(o.wall ?? [238, 232, 216])),
              shade = css(e.sh([176, 168, 150])),
              roof = css(e.sh(o.roof ?? [150, 76, 56])),
              roofSh = css(e.sh([108, 52, 42])),
              dark = css(e.sh([64, 58, 58]));
            bx(-hw - 1, 1, w + 2, 2, shade); // plinth
            bx(-hw, 3, w, nh - 2, wall);
            bx(-hw, 3, w, 1, shade);
            for (let x = -hw + 1; x < hw; x += 3) {
              bx(x, 4, 1, nh - 4, shade); // the verandah columns
              bx(x + 1, 5, 1, nh - 6, dark); // dark gap behind them
            }
            bx(-hw - 1, nh + 1, w + 2, 1, shade); // eaves
            const rh = Math.max(3, Math.round(w / 6));
            for (let j = 0; j < rh; j++) bx(-hw + j, nh + 2 + j, w - 2 * j, 1, j % 2 ? roofSh : roof);
            const pw = 5; // the porch pediment
            bx(-pw, nh - 4, 2 * pw + 1, 5, wall);
            bx(-pw + 1, nh - 3, 2 * pw - 1, 3, dark);
            for (let j = 0; j < 4; j++) bx(-pw - 1 + j, nh + 1 + j, 2 * pw + 3 - 2 * j, 1, wall);
            if (o.dome) {
              bx(-2, nh + 5, 5, 2, wall);
              dome(0, nh + 7, 3, css(e.sh([210, 214, 208])));
              bx(0, nh + 10, 1, 2, dark);
            }
            break;
          }
          case "afroPalace": {
            // Used by Benin City (Oba's Palace), Akure (Deji's Palace) and Ado-Ekiti (Ewi's Palace): a low earth-
            // coloured palace behind a crenellated wall, a tall gatehouse with a pitched corrugated roof and
            // pinnacles, and a carved verandah with a row of dark doorways.
            const bx = (l, b, w, h, col) => box(l, b + h, w, h, col); // bottom-up
            const w = o.w ?? 27,
              hw = Math.floor(w / 2),
              nh = o.nh ?? 9,
              mud = css(e.sh(o.mud ?? [186, 110, 78])),
              mudSh = css(e.sh([140, 80, 60])),
              roof = css(e.sh(o.roof ?? [140, 146, 150])),
              roofSh = css(e.sh([100, 106, 112])),
              dark = css(e.sh([58, 40, 36])),
              white = css(e.sh([236, 226, 206]));
            bx(-hw, 1, w, nh, mud);
            bx(-hw, 1, w, 1, mudSh);
            for (let x = -hw; x < hw; x += 2) bx(x, nh + 1, 1, 1, mud); // merlons
            for (let x = -hw + 2; x < hw - 1; x += 4) {
              bx(x, 2, 2, 4, dark); // doorways
              bx(x, 6, 2, 1, white);
              bx(x, 8, 2, 1, mudSh); // a lintel of carved relief
            }
            const gw = 5,
              gh = nh + 2; // the gatehouse
            bx(-gw, 1, 2 * gw + 1, gh, mud);
            bx(-gw, 1, 1, gh, mudSh);
            bx(-2, 1, 5, 7, dark);
            bx(-1, 8, 3, 1, dark);
            bx(-gw, 9, 2 * gw + 1, 1, white);
            for (let j = 0; j < 3; j++)
              bx(-gw - 1 + j, gh + 1 + j, 2 * gw + 3 - 2 * j, 1, j % 2 ? roofSh : roof);
            bx(0, gh + 4, 1, 2, dark); // the finial
            for (const p of [-gw, gw]) bx(p, gh + 1, 1, 3, mudSh); // pinnacles
            for (const p of [-hw + 1, hw - 1]) bx(p, nh + 2, 1, 2, mudSh);
            break;
          }
          case "nigerCathedral": {
            // Used by Abakaliki, Awka, Enugu and Owerri: a brick-and-cream cathedral with a pitched nave, a gabled
            // front with a round window and a tall arched door, and twin towers (o.tw wide, o.h tall) with louvred
            // bell openings, a short spire and a cross.
            const bx = (l, b, w, h, col) => box(l, b + h, w, h, col); // bottom-up
            const w = o.w ?? 19,
              hw = Math.floor(w / 2),
              nh = o.nh ?? 11,
              h = o.h ?? 26,
              tw = o.tw ?? 5,
              wall = css(e.sh(o.wall ?? [232, 222, 200])),
              brick = css(e.sh([176, 92, 66])),
              shade = css(e.sh([168, 156, 136])),
              roof = css(e.sh([120, 124, 132])),
              dark = css(e.sh([60, 52, 56])),
              glass = css(e.sh([96, 138, 176]));
            bx(-hw, 1, w, nh, wall);
            bx(-hw, 1, w, 1, shade);
            for (let j = 0; j < 5; j++) bx(-hw + 1 + j, nh + 1 + j, w - 2 - 2 * j, 1, j % 2 ? roof : brick);
            for (const s of [-1, 1]) {
              const l = s < 0 ? -hw : hw - tw + 1;
              bx(l, 1, tw, h, wall);
              bx(s < 0 ? l : l + tw - 1, 1, 1, h, shade);
              bx(l + 1, h - 6, tw - 2, 4, dark); // bell openings
              for (let y = h - 6; y < h - 2; y += 2) bx(l + 1, y, tw - 2, 1, shade);
              for (let j = 0; j < 4; j++) bx(l + j, h + 1 + j, tw - 2 * j, 1, j % 2 ? roof : brick);
              bx(l + (tw >> 1), h + 5, 1, 4, dark); // the cross
              bx(l + (tw >> 1) - 1, h + 7, 3, 1, dark);
              bx(l + 1, 5, 1, 3, glass); // narrow windows
              bx(l + tw - 2, 5, 1, 3, glass);
            }
            bx(-2, 1, 5, 7, dark); // the tall door
            bx(-1, 8, 3, 1, dark);
            orb(0, nh - 2, 2, glass); // round window
            break;
          }
