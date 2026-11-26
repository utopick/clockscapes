
          case "stGoranMariehamn": {
            box(-10, 10, 21, 10, 1);
            cone(0, 10, 10, 8, 5);
            box(-3, 29, 6, 11, 1);
            box(-2, 26, 4, 6, 5);
            for (const xx of [-7, -3, 1, 5]) box(xx, 7, 2, 4, 2);
            box(-2, 30, 4, 1, 1);
            cone(0, 30, 3, 12, 1);
            box(0, 43, 1, 4, 3);
            box(-1, 44, 3, 1, 3);
            box(-1, 21, 2, 3, 2);
            break;
          }

          case "mariehamnHall": {
            box(-11, 10, 22, 10, 13);
            box(-12, 11, 24, 1, 1);
            box(-4, 18, 8, 8, 13);
            box(-5, 19, 10, 1, 1);
            box(-2, 22, 4, 3, 1);
            for (const xx of [-9, -5, -1, 3, 7]) {
              box(xx, 4, 2, 4, 2);
              box(xx, 4, 1, 1, 3);
            }
            box(-1, 14, 2, 5, 2);
            break;
          }

          case "bbParliament": {
            box(-14, 10, 28, 10, 13);
            box(-14, 10, 28, 1, 1);
            box(-12, 19, 24, 9, 13);
            for (const xx of [-11, -7, -3, 1, 5, 9]) {
              box(xx, 20, 2, 4, 2);
              box(xx, 24, 2, 1, 3);
              box(xx - 1, 26, 4, 1, 1);
            }
            box(-2, 19, 9, 15, 13);
            box(-1, 34, 7, 9, 13);
            box(0, 28, 5, 5, 2);
            box(1, 29, 3, 3, 3);
            box(0, 35, 5, 1, 3);
            box(1, 30, 3, 1, 3);
            cone(2, 34, 3, 4, 13);
            box(2, 39, 1, 3, 3);
            box(-8, 26, 5, 7, 13);
            box(-7, 26, 3, 1, 1);
            cone(-6, 26, 2, 5, 13);
            box(-6, 32, 1, 2, 3);
            box(-13, 4, 26, 3, 2);
            break;
          }
          case "bbCathedral": {
            box(-10, 13, 20, 13, 13);
            box(-9, 18, 18, 5, 13);
            box(-10, 13, 20, 1, 1);
            box(-3, 34, 6, 21, 13);
            box(-2, 25, 4, 7, 2);
            box(-1, 26, 2, 5, 11);
            box(-4, 35, 8, 1, 1);
            box(-2, 40, 4, 5, 13);
            cone(0, 40, 3, 7, 1);
            box(0, 48, 1, 2, 3);
            for (const xx of [-7, -3, 3, 7]) {
              box(xx, 12, 2, 5, 2);
              box(xx, 15, 2, 2, 11);
            }
            box(-1, 4, 2, 7, 2);
            break;
          }

          case "bhWtc": {
            for (const side of [-1, 1]) {
              for (let yy = 1; yy <= 50; yy++) {
                const half = Math.max(1, Math.round(7 * (1 - yy / 50)));
                const cx = side * (6 + Math.round((3 * yy) / 50));
                box(cx - half, yy, 2 * half + 1, 1, 11);
              }
            }
            stroke(-13, 1, -10, 50, 6);
            stroke(13, 1, 10, 50, 6);
            stroke(1, 1, -8, 50, 6);
            stroke(-1, 1, 8, 50, 6);
            stroke(-11, 5, -6, 42, 6);
            stroke(-6, 5, -11, 42, 6);
            stroke(11, 5, 6, 42, 6);
            stroke(6, 5, 11, 42, 6);
            for (const yy of [13, 27, 41]) {
              box(-4, yy, 8, 1, 8);
              stroke(-4, yy + 2, 4, yy + 2, 6);
              box(-1, yy + 1, 2, 3, 8);
            }
            break;
          }
          case "bhBab": {
            box(-15, 20, 30, 20, 13);
            box(-16, 21, 32, 1, 6);
            box(-7, 25, 14, 4, 13);
            box(-8, 26, 16, 1, 6);
            box(-2, 28, 4, 3, 13);
            box(-1, 31, 2, 3, 3);
            box(-5, 12, 10, 12, 2);
            dome(0, 12, 5, 2);
            for (const xx of [-13, -9, 9, 13]) {
              box(xx, 11, 2, 6, 2);
              box(xx, 15, 2, 2, 11);
            }
            box(-1, 4, 2, 8, 2);
            break;
          }

          case "gustaviaBell": {
            box(-4, 28, 8, 28, 13);
            box(-5, 30, 10, 1, 1);
            box(-4, 36, 8, 8, 13);
            for (const xx of [-3, 0, 3]) box(xx, 35, 1, 4, 2);
            box(-5, 37, 10, 1, 1);
            cone(0, 36, 5, 6, 10);
            box(0, 44, 1, 3, 2);
            box(-1, 45, 3, 1, 2);
            box(-1, 22, 2, 4, 2);
            break;
          }
          case "gustaviaLight": {
            box(-5, 3, 10, 3, 2);
            box(-3, 31, 6, 31, 13);
            box(-2, 30, 4, 29, 6);
            box(-4, 33, 8, 2, 2);
            box(-3, 37, 6, 4, 2);
            box(-4, 42, 8, 1, 10);
            box(-3, 40, 6, 3, 10);
            box(-4, 41, 1, 4, 2);
            box(3, 41, 1, 4, 2);
            box(-4, 41, 8, 1, 2);
            box(-1, 43, 2, 2, 3);
            orb(0, 38, 1, 3);
            break;
          }

          case "bermudaCathedral": {
            box(-12, 15, 24, 15, 13);
            box(-9, 20, 18, 3, 13);
            for (const xx of [-9, -5, 5, 9]) {
              box(xx, 13, 2, 7, 2);
              cone(xx + 1, 20, 1, 3, 13);
            }
            box(-4, 47, 8, 32, 13);
            box(-5, 48, 10, 1, 1);
            for (const xx of [-4, -1, 2]) box(xx, 35, 1, 3, 2);
            box(-5, 49, 10, 1, 1);
            for (const xx of [-5, -2, 1, 4]) box(xx, 50, 2, 3, 13);
            box(-3, 18, 6, 6, 2);
            box(-2, 19, 4, 4, 11);
            cone(0, 50, 4, 8, 13);
            box(-1, 56, 2, 2, 3);
            box(-1, 8, 2, 4, 2);
            break;
          }
          case "bermudaSessions": {
            box(-14, 15, 28, 15, 14);
            box(-15, 16, 30, 1, 6);
            box(-13, 17, 26, 1, 6);
            box(-5, 23, 10, 7, 14);
            cone(0, 23, 5, 4, 6);
            box(-1, 28, 2, 3, 3);
            for (const xx of [-11, -7, -3, 3, 7, 11]) {
              box(xx, 7, 2, 4, 2);
              box(xx, 10, 2, 2, 11);
              box(xx - 1, 14, 4, 1, 6);
            }
            box(-1, 4, 2, 6, 2);
            box(-14, 4, 28, 3, 13);
            break;
          }

          case "oceaniaHouse": {
            box(-13, 14, 26, 14, 6);
            box(-12, 27, 24, 13, 6);
            box(7, 22, 7, 8, 6);
            box(-15, 15, 30, 1, 8);
            for (const xx of [-12, -8, -4, 0, 4, 8, 12]) box(xx, 14, 1, 12, 2);
            for (const xx of [-9, -3, 4, 10]) {
              box(xx, 6, 2, 5, 2);
              box(xx, 9, 2, 2, 11);
              box(xx, 20, 2, 5, 2);
              box(xx, 23, 2, 2, 11);
            }
            box(-15, 28, 30, 1, 8);
            box(-13, 29, 26, 1, 8);
            box(-10, 30, 20, 1, 8);
            break;
          }

          case "cookChurch": {
            box(-13, 13, 26, 13, 6);
            cone(0, 13, 14, 8, 9);
            box(4, 30, 8, 17, 6);
            box(3, 30, 10, 1, 6);
            box(4, 31, 8, 2, 9);
            box(3, 32, 10, 1, 9);
            cone(8, 32, 5, 3, 9);
            for (const xx of [-10, -6, -2, 2, 6]) {
              box(xx, 8, 2, 6, 2);
              box(xx, 7, 1, 4, 11);
              cone(xx + 1, 8, 1, 2, 2);
            }
            box(6, 26, 2, 5, 2);
            box(7, 27, 1, 3, 11);
            box(-12, 2, 24, 2, 2);
            break;
          }

          case "cwHandelskade": {
            const blocks = [
              [-13, 12, 14],
              [-7, 14, 16],
              [-1, 11, 13],
              [5, 15, 17],
              [11, 13, 15],
            ];
            const shades = [14, 3, 11, 9, 5];
            blocks.forEach(([xx, hh, roof], i) => {
              box(xx - 3, hh, 6, hh, shades[i]);
              box(xx - 3, hh + 1, 6, 1, 13);
              box(xx - 2, hh + 2, 4, roof - hh - 2, shades[i]);
              for (const wx of [xx - 2, xx + 1]) {
                box(wx, 4, 1, 3, 2);
                box(wx, 9, 1, 3, 2);
              }
              box(xx - 1, 2, 2, 5, 2);
              box(xx - 2, roof, 4, 1, 13);
              box(xx - 1, roof + 1, 2, 1, 13);
            });
            box(-17, 1, 34, 1, 11);
            box(-17, 2, 34, 1, 8);
            break;
          }

          case "taiJinHouseCx": {
            box(-12, 4, 24, 4, 8);
            box(-11, 28, 22, 14, 6);
            box(-13, 16, 26, 2, 13);
            for (const xx of [-10, -5, 0, 5, 10]) box(xx, 14, 1, 10, 13);
            for (const xx of [-8, -2, 5]) {
              box(xx, 19, 3, 4, 2);
              box(xx, 22, 1, 2, 11);
            }
            box(-13, 23, 26, 1, 8);
            cone(0, 23, 13, 5, 8);
            box(-13, 15, 26, 1, 13);
            box(-13, 11, 26, 1, 13);
            box(-13, 13, 1, 3, 13);
            box(12, 13, 1, 3, 13);
            box(-15, 2, 30, 2, 8);
            break;
          }

          case "roseauCathedral": {
            box(-12, 14, 24, 14, 13);
            box(-4, 34, 8, 20, 13);
            box(-5, 35, 10, 1, 1);
            for (const xx of [-3, 0, 3]) {
              box(xx, 31, 1, 7, 2);
              box(xx, 30, 1, 1, 3);
            }
            for (const xx of [-8, -4, 4, 8]) {
              box(xx, 12, 2, 8, 2);
              box(xx, 16, 2, 3, 11);
              cone(xx + 1, 20, 1, 3, 13);
            }
            box(-2, 9, 4, 7, 2);
            box(-1, 10, 2, 5, 11);
            cone(0, 35, 5, 12, 1);
            box(0, 48, 1, 4, 3);
            box(-1, 49, 3, 1, 3);
            box(-11, 3, 22, 2, 2);
            break;
          }

          case "stanleyWhalebone": {
            for (let j = 0; j < 4; j++) {
              box(-8 + j, 5 + j * 4, 3, 5, 13);
              box(5 - j, 5 + j * 4, 3, 5, 13);
            }
            box(-5, 20, 4, 3, 13);
            box(1, 20, 4, 3, 13);
            box(-2, 21, 4, 2, 6);
            for (const yy of [7, 13, 19]) {
              box(-5, yy, 10, 1, 13);
              box(-4, yy + 1, 8, 1, 6);
            }
            box(-8, 2, 16, 1, 2);
            break;
          }

          case "palikirSokehs": {
            const widths = [
              14, 14, 13, 13, 12, 12, 11, 11, 10, 10, 9, 9, 8, 8, 8, 7, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 3, 1,
            ];
            widths.forEach((hw, i) => {
              const yy = i + 1;
              box(-hw, yy, 2 * hw + 1, 1, i % 4 === 0 ? 2 : 8);
              if (i % 3 === 0 && hw > 4) box(-hw, yy, 2, 1, 9);
              if (i % 4 === 2 && hw > 5) box(hw - 1, yy, 2, 1, 9);
            });
            for (const [xx, yy, ww, hh] of [
              [-10, 4, 4, 4],
              [7, 7, 3, 3],
              [-7, 12, 3, 4],
              [3, 17, 3, 3],
              [-3, 21, 2, 3],
            ]) {
              box(xx, yy, ww, hh, 9);
            }
            box(-15, 2, 30, 1, 2);
            break;
          }

          case "tinganesFo": {
            const houses = [
              [-13, 11],
              [-7, 15],
              [-1, 12],
              [5, 16],
              [11, 12],
            ];
            box(-17, 2, 34, 2, 8);
            for (const [xx, hh] of houses) {
              box(xx - 2, hh, 5, hh, 10);
              box(xx - 3, hh + 1, 7, 1, 6);
              cone(xx, hh - 1, 4, 5, 9);
              for (const wx of [xx - 1, xx + 1]) {
                box(wx, 4, 1, 3, 2);
                box(wx, 9, 1, 3, 2);
              }
              box(xx, 2, 1, 4, 2);
            }
            box(-16, 1, 32, 1, 11);
            break;
          }
          case "torshavnCathedral": {
            box(-12, 14, 24, 14, 6);
            cone(0, 14, 13, 8, 8);
            box(-4, 28, 8, 16, 6);
            box(-3, 36, 6, 8, 6);
            box(-4, 37, 8, 1, 13);
            orb(0, 32, 2, 2);
            orb(0, 32, 1, 3);
            box(-1, 31, 2, 1, 2);
            cone(0, 37, 3, 7, 8);
            box(0, 45, 1, 3, 3);
            box(-1, 46, 3, 1, 3);
            for (const xx of [-9, -5, 5, 9]) {
              box(xx, 11, 2, 7, 2);
              box(xx, 14, 2, 3, 11);
              cone(xx + 1, 18, 1, 3, 6);
            }
            box(-2, 8, 4, 8, 2);
            box(-1, 9, 2, 6, 11);
            break;
          }

          case "fortGeorgeGr": {
            box(-14, 14, 28, 14, 13);
            box(-15, 14, 30, 1, 1);
            box(-15, 23, 7, 10, 13);
            box(8, 23, 7, 10, 13);
            box(-15, 24, 7, 1, 1);
            box(8, 24, 7, 1, 1);
            box(-3, 27, 6, 13, 13);
            box(-4, 28, 8, 1, 1);
            for (const xx of [-2, 0, 2]) box(xx, 36, 1, 2, 2);
            for (const xx of [-11, -7, 7, 11]) box(xx, 7, 1, 3, 2);
            box(-3, 8, 6, 8, 2);
            dome(0, 8, 3, 2);
            box(-1, 3, 2, 5, 2);
            box(0, 32, 1, 6, 3);
            box(-1, 34, 3, 2, 5);
            box(-12, 4, 24, 1, 8);
            break;
          }

          case "cayenneFort": {
            box(-14, 6, 28, 6, 9);
            box(-13, 10, 26, 5, 8);
            for (const xx of [-12, -8, -4, 4, 8, 12]) box(xx, 11, 2, 2, 8);
            box(-2, 9, 4, 5, 2);
            box(5, 16, 6, 6, 1);
            box(4, 17, 8, 1, 1);
            cone(8, 16, 4, 4, 10);
            box(8, 22, 1, 2, 2);
            box(-7, 26, 1, 19, 8);
            for (const yy of [12, 17, 22]) {
              box(-9, yy, 5, 1, 8);
              box(-8, yy + 1, 3, 1, 6);
            }
            box(-10, 3, 20, 1, 2);
            break;
          }

          case "castleCornetGg": {
            box(-17, 2, 34, 1, 11);
            box(-14, 2, 28, 2, 8);
            box(-14, 9, 28, 7, 0);
            box(-14, 12, 6, 7, 0);
            box(8, 12, 6, 7, 0);
            for (const xx of [-13, -10, -7, 7, 10, 13]) box(xx, 14, 2, 2, 3);
            box(-4, 17, 8, 8, 0);
            box(-5, 18, 10, 1, 3);
            cone(0, 18, 4, 3, 10);
            for (const xx of [-3, 0, 3]) box(xx, 17, 1, 3, 2);
            box(-2, 8, 4, 6, 2);
            for (const xx of [-10, -6, 6, 10]) box(xx, 7, 1, 2, 2);
            break;
          }

          case "moorishCastleGi": {
            box(-16, 7, 32, 7, 9);
            box(-15, 17, 30, 10, 13);
            box(4, 52, 11, 35, 13);
            box(3, 53, 13, 1, 1);
            for (const xx of [-14, -10, -6, -2, 2, 6, 11, 15]) box(xx, 19, 2, 2, 13);
            for (const xx of [-12, -7, 0, 9, 14]) box(xx, 12, 1, 3, 2);
            for (const yy of [21, 26, 31, 36]) box(8, yy, 2, 3, 2);
            box(6, 12, 4, 8, 2);
            dome(8, 12, 2, 2);
            box(7, 5, 2, 8, 2);
            for (const xx of [4, 7, 10, 13]) box(xx, 56, 2, 2, 13);
            box(-17, 2, 34, 1, 2);
            break;
          }

          case "nuukCathedral": {
            box(-13, 15, 26, 15, 10);
            cone(0, 15, 14, 8, 10);
            box(-4, 37, 8, 22, 10);
            box(-5, 38, 10, 1, 6);
            box(-3, 34, 6, 4, 6);
            box(-2, 35, 4, 2, 2);
            orb(0, 36, 1, 3);
            cone(0, 38, 5, 17, 8);
            box(0, 56, 1, 3, 3);
            box(-1, 57, 3, 1, 3);
            box(-5, 11, 10, 9, 6);
            cone(0, 20, 6, 4, 6);
            box(-4, 8, 1, 8, 6);
            box(3, 8, 1, 8, 6);
            box(-2, 7, 4, 8, 2);
            box(-1, 8, 2, 6, 11);
            for (const xx of [-10, -6, 6, 10]) {
              box(xx, 11, 2, 6, 2);
              box(xx, 14, 2, 2, 11);
            }
            box(-13, 16, 26, 1, 6);
            break;
          }

          case "hansEgedeGl": {
            box(-6, 4, 12, 4, 8);
            box(-4, 5, 8, 1, 3);
            cone(0, 4, 5, 9, 12);
            box(-2, 15, 4, 8, 12);
            orb(0, 17, 2, 12);
            stroke(-2, 13, -6, 10, 12);
            stroke(2, 13, 8, 16, 12);
            orb(9, 17, 1, 12);
            break;
          }

          case "arch22Banjul": {
            box(-15, 3, 30, 3, 13);
            box(-13, 23, 5, 23, 13);
            box(8, 23, 5, 23, 13);
            for (const xx of [-12, -10, 10, 12]) box(xx, 5, 1, 16, 6);
            box(-15, 23, 30, 3, 13);
            box(-16, 24, 32, 1, 6);
            box(-11, 24, 22, 1, 6);
            cone(0, 23, 16, 16, 13);
            box(-10, 29, 2, 5, 2);
            box(8, 29, 2, 5, 2);
            box(-9, 30, 1, 3, 11);
            box(9, 30, 1, 3, 11);
            dome(0, 34, 4, 2);
            box(-4, 33, 8, 1, 6);
            box(-1, 37, 2, 3, 3);
            box(0, 39, 1, 2, 3);
            box(-17, 2, 34, 1, 2);
            break;
          }

          case "fortDelgresGp": {
            box(-17, 5, 34, 5, 9);
            box(-16, 13, 32, 8, 2);
            box(-16, 14, 32, 1, 8);
            box(-7, 22, 9, 9, 2);
            box(-8, 23, 11, 1, 8);
            for (const xx of [-14, -10, 7, 12]) box(xx, 15, 2, 2, 8);
            for (const xx of [-5, -2, 1]) box(xx, 18, 1, 3, 2);
            box(-3, 9, 6, 7, 2);
            box(-2, 9, 4, 1, 13);
            box(-17, 3, 34, 1, 2);
            break;
          }

          case "grytvikenChurch": {
            box(-10, 12, 20, 12, 6);
            box(-10, 2, 20, 2, 10);
            cone(0, 12, 11, 9, 6);
            box(-3, 31, 6, 19, 6);
            box(-4, 32, 8, 1, 6);
            box(-2, 19, 4, 8, 2);
            box(-1, 20, 2, 6, 11);
            orb(0, 28, 1, 12);
            cone(0, 31, 4, 15, 2);
            box(0, 47, 1, 3, 12);
            box(-1, 49, 3, 1, 12);
            for (const xx of [-7, 7]) {
              orb(xx, 8, 2, 2);
              orb(xx, 8, 1, 11);
            }
            box(-2, 9, 4, 9, 2);
            dome(0, 9, 2, 2);
            box(-1, 4, 2, 6, 2);
            box(-11, 3, 22, 1, 13);
            break;
          }

          case "hagatnaCathedral": {
            box(-11, 12, 22, 12, 13);
            box(-12, 13, 24, 1, 3);
            cone(0, 12, 11, 5, 10);
            for (const xx of [-8, -4, 4, 8]) box(xx, 8, 1, 3, 2);
            orb(0, 10, 2, 10);
            box(-2, 2, 4, 7, 2);
            box(-3, 9, 6, 1, 6);
            box(-9, 30, 6, 18, 13);
            box(-10, 31, 8, 1, 3);
            for (const yy of [15, 24]) box(-8, yy, 1, 3, 2);
            orb(-6, 21, 2, 2);
            orb(-6, 21, 1, 6);
            dome(-6, 30, 3, 10);
            box(-6, 37, 1, 5, 10);
            box(-7, 38, 3, 1, 3);
            break;
          }

          case "hagatnaPlaza": {
            box(-16, 2, 32, 2, 9);
            box(-15, 13, 22, 11, 13);
            box(-16, 14, 24, 1, 6);
            for (const xx of [-11, -5, 1]) {
              box(xx, 8, 4, 7, 2);
              dome(xx + 2, 8, 2, 2);
              box(xx + 1, 2, 2, 7, 2);
            }
            box(-13, 4, 18, 1, 6);
            box(8, 11, 7, 11, 6);
            for (const xx of [9, 13]) box(xx, 3, 1, 7, 13);
            box(7, 12, 9, 1, 13);
            cone(11.5, 12, 5, 5, 10);
            box(11, 18, 1, 4, 3);
            box(-14, 3, 4, 9, 2);
            box(-12, 4, 1, 6, 11);
            box(-5, 4, 4, 9, 2);
            box(-3, 4, 1, 6, 11);
            box(2, 4, 4, 9, 2);
            box(4, 4, 1, 6, 11);
            break;
          }

          case "bankChinaHk": {
            box(-13, 5, 26, 5, 8);
            for (let yy = 1; yy <= 45; yy++) {
              const hw = Math.max(1, Math.round(11 * (1 - yy / 48)));
              box(-hw, yy, 2 * hw + 1, 1, 11);
              if (yy % 6 === 0) box(-hw, yy, 2 * hw + 1, 1, 6);
            }
            stroke(-10, 5, 0, 42, 6);
            stroke(10, 5, 0, 42, 6);
            stroke(-5, 12, 2, 25, 6);
            stroke(5, 12, -2, 25, 6);
            stroke(-3, 28, 1, 41, 6);
            stroke(3, 28, -1, 41, 6);
            cone(0, 45, 2, 8, 6);
            box(0, 54, 1, 6, 6);
            break;
          }
          case "ifcHk": {
            box(-9, 5, 18, 5, 8);
            box(-7, 50, 14, 50, 11);
            for (const xx of [-7, -4, 0, 4, 6]) box(xx, 45, 1, 44, 6);
            for (let yy = 7; yy < 50; yy += 5) box(-7, yy, 14, 1, 6);
            box(-6, 55, 12, 5, 11);
            box(-5, 60, 10, 5, 11);
            box(-3, 65, 6, 4, 11);
            box(-1, 69, 2, 1, 6);
            box(0, 70, 1, 7, 6);
            box(-8, 6, 1, 44, 6);
            box(7, 6, 1, 44, 6);
            break;
          }

          case "towerRefugeIm": {
            box(-12, 2, 24, 2, 8);
            box(-11, 13, 22, 11, 0);
            box(-14, 15, 7, 13, 0);
            box(7, 15, 7, 13, 0);
            dome(-10.5, 15, 3, 0);
            dome(10.5, 15, 3, 0);
            box(-5, 30, 10, 17, 0);
            dome(0, 30, 5, 0);
            for (const xx of [-13, -10, 10, 13]) box(xx, 17, 2, 3, 3);
            for (const xx of [-7, -4, 4, 7]) box(xx, 15, 2, 3, 3);
            for (const xx of [-3, 0, 3]) box(xx, 33, 2, 3, 3);
            for (const xx of [-9, 9]) box(xx, 21, 1, 3, 2);
            box(-2, 10, 4, 10, 2);
            box(-3, 12, 6, 2, 0);
            box(0, 36, 1, 5, 3);
            box(-1, 38, 3, 2, 5);
            box(-13, 2, 26, 1, 2);
            break;
          }
          case "douglasLighthouse": {
            box(-10, 5, 20, 5, 9);
            box(-9, 9, 18, 6, 6);
            box(-10, 10, 20, 1, 13);
            box(-2, 17, 4, 8, 6);
            box(-1, 17, 2, 6, 6);
            box(-4, 19, 8, 2, 2);
            box(-3, 22, 6, 3, 2);
            box(-1, 21, 2, 2, 3);
            box(-2, 25, 1, 3, 2);
            box(1, 25, 1, 3, 2);
            dome(0, 25, 3, 8);
            box(0, 30, 1, 3, 3);
            for (const xx of [-9, -5, 5, 9]) box(xx, 14, 2, 3, 2);
            box(-9, 2, 18, 2, 8);
            box(-10, 10, 1, 4, 2);
            box(9, 10, 1, 4, 2);
            break;
          }
          case "diRadomeIo": {
            box(-13, 3, 26, 5, 8);
            box(-16, 8, 32, 6, 13);
            box(-10, 15, 20, 2, 6);
            box(-9, 17, 18, 2, 6);
            box(-5, 12, 10, 5, 6);
            box(-5, 14, 10, 2, 6);
            dome(0, 17, 10, 8);
            for (const xx of [-8, -4, 0, 4, 8]) stroke(xx, 18, 0, 26, 6);
            stroke(-9, 21, 9, 21, 6);
            stroke(-6, 25, 6, 25, 6);
            break;
          }

          case "diChapelIo": {
            box(-9, 5, 18, 4, 8);
            box(-7, 9, 14, 12, 13);
            cone(0, 4, 7, 5, 2);
            box(-1, 4, 2, 3, 2);
            for (const xx of [-5, 4]) box(xx, 8, 2, 4, 2);
            box(-2, 9, 4, 6, 2);
            box(-10, 4, 20, 1, 6);
            break;
          }
