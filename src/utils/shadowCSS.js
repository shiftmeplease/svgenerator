import { colord, extend } from "colord";
import a11y from "colord/plugins/a11y";
import * as emotion from "@emotion/css";

extend([a11y]);

const { css } = emotion;

const generateShadowStyle = (bgColor) => {
  const color = {
    colorObj: colord(bgColor).alpha(1).darken(0.3),
    lighten: function () {
      this.colorObj = this.colorObj.lighten(0.01);
      this.colorObj = this.colorObj.alpha(this.colorObj.alpha() - 0.05);
      return this.colorObj.toHslString();
    },
  };
  return css`
    text-shadow: 1px -1px 0 ${color.lighten()}, -1px 2px 1px ${color.lighten()},
      -2px 4px 1px ${color.lighten()}, -3px 6px 1px ${color.lighten()},
      -4px 8px 1px ${color.lighten()}, -5px 10px 1px ${color.lighten()},
      -6px 12px 1px ${color.lighten()}, -7px 14px 1px ${color.lighten()},
      -8px 16px 1px ${color.lighten()}, -9px 18px 1px ${color.lighten()},
      -10px 20px 1px ${color.lighten()}, -11px 22px 1px ${color.lighten()},
      -12px 24px 1px ${color.lighten()}, -13px 26px 1px ${color.lighten()},
      -14px 28px 1px ${color.lighten()}, -15px 30px 1px ${color.lighten()},
      -16px 32px 1px ${color.lighten()}, -17px 34px 1px ${color.lighten()},
      -18px 36px 1px ${color.lighten()}, -19px 38px 1px ${color.lighten()},
      -20px 40px 1px ${color.lighten()}, -21px 42px 1px ${color.lighten()},
      -22px 44px 1px ${color.lighten()}, -23px 46px 1px ${color.lighten()},
      -24px 48px 1px ${color.lighten()}, -25px 50px 1px ${color.lighten()},
      -26px 52px 1px ${color.lighten()}, -27px 54px 1px ${color.lighten()},
      -28px 56px 1px ${color.lighten()};
  `;
};

const generateOffsets = (steps) => {
  const initY = 1;
  const initX = -1;

  const yTarget = 56;
  const xTarget = -28;

  let array = [];
  const yStep = (yTarget - initY) / steps;
  const xStep = (xTarget - initX) / steps;

  for (let i = 0; i <= steps; i++) {
    let x = initX + xStep * i;
    let y = initY + yStep * i;
    array.push([x, y]);
  }
  return array;
};

const generateShadowStyleAdjustable = (bgColor, steps = 26, shadowWidth = 1, valChange = 0.01) => {
  
  let lighten = true;
  let lum = colord(bgColor).luminance();
  console.log(lum);
  if (lum < 0.02) {
    lighten = false;
  }

  const color = {
    colorObj: colord(bgColor).alpha(1)[lighten ? "darken" : "lighten"](0.3),
    lighten: function () {
      if (lum >= 0.02 && lum <= 0.12) {
        this.colorObj = this.colorObj["darken"](valChange);
      } else {
        this.colorObj = this.colorObj[lighten ? "lighten" : "darken"](valChange);
      }
      this.colorObj = this.colorObj.alpha(this.colorObj.alpha() - valChange * 3.5);
      return this.colorObj.toHslString();
    },
  };
  const offsets = generateOffsets(steps);
  let cssString = `text-shadow: 1px -1px 0 ${color.lighten()},`;
  for (let offset of offsets) {
    cssString += `${offset[0]}px ${offset[1]}px ${shadowWidth}px ${color.lighten()},`;
  }
  cssString = cssString.replace(/,$/, ";");

  return css(cssString);
};

export { generateShadowStyle };
export { generateShadowStyleAdjustable };

// `
// 1px -1px 0 ${color.lighten()},
// 1px 2px 1px ${color.lighten()},
// -2px 4px 1px ${color.lighten()},
// -3px 6px 1px ${color.lighten()},
// -4px 8px 1px ${color.lighten()},
// -5px 10px 1px ${color.lighten()},
// -6px 12px 1px ${color.lighten()},
// -7px 14px 1px ${color.lighten()},
// -8px 16px 1px ${color.lighten()},
// -9px 18px 1px ${color.lighten()},
// -10px 20px 1px ${color.lighten()},
// -11px 22px 1px ${color.lighten()},
// -12px 24px 1px ${color.lighten()},
// -13px 26px 1px ${color.lighten()},
// -14px 28px 1px ${color.lighten()},
// -15px 30px 1px ${color.lighten()},
// -16px 32px 1px ${color.lighten()},
// -17px 34px 1px ${color.lighten()},
// -18px 36px 1px ${color.lighten()},
// -19px 38px 1px ${color.lighten()},
// -20px 40px 1px ${color.lighten()},
// -21px 42px 1px ${color.lighten()},
// -22px 44px 1px ${color.lighten()},
// -23px 46px 1px ${color.lighten()},
// -24px 48px 1px ${color.lighten()},
// -25px 50px 1px ${color.lighten()},
// -26px 52px 1px ${color.lighten()},
// -27px 54px 1px ${color.lighten()},
// -28px 56px 1px ${color.lighten()};`;

// let shadowOffsets = [
//   ["-2", "4"],
//   ["-3", "6"],
//   ["-4", "8"],
//   ["-5", "10"],
//   ["-6", "12"],
//   ["-7", "14"],
//   ["-8", "16"],
//   ["-9", "18"],
//   ["-10", "20"],
//   ["-11", "22"],
//   ["-12", "24"],
//   ["-13", "26"],
//   ["-14", "28"],
//   ["-15", "30"],
//   ["-16", "32"],
//   ["-17", "34"],
//   ["-18", "36"],
//   ["-19", "38"],
//   ["-20", "40"],
//   ["-21", "42"],
//   ["-22", "44"],
//   ["-23", "46"],
//   ["-24", "48"],
//   ["-25", "50"],
//   ["-26", "52"],
//   ["-27", "54"],
//   ["-28", "56"],
// ];
