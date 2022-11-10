import { colord } from "colord";

import * as emotion from "@emotion/css";

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
  // let lighten = true;
  let lum = betterLum(colord(bgColor).rgba);

  const { mode, bgChange } = calcSteps(lum);

  const color = {
    colorObj: colord(bgColor).alpha(1)[mode.init](bgChange),
    step: function () {
      this.colorObj = this.colorObj[mode.shadow](valChange);

      this.colorObj = this.colorObj.alpha(this.colorObj.alpha() - valChange * 3.5);
      return this.colorObj.toHslString();
    },
  };
  const offsets = generateOffsets(steps);
  let cssString = `text-shadow: 1px -1px 0 ${color.step()},`;
  for (let offset of offsets) {
    cssString += `${offset[0]}px ${offset[1]}px ${shadowWidth}px ${color.step()},`;
  }
  cssString = cssString.replace(/,$/, ";");

  return css(cssString);
};

function calcSteps(lum) {
  let mode = { shadow: "darken", init: "darken" };

  let result = 0;
  if (lum >= 0 && lum <= 0.02) {
    result = Math.abs(0.3 - lum * 15);
    // mode.shadow = "darken";
    mode.init = "lighten";
  } else if (lum > 0.02 && lum <= 0.12) {
    // mode.shadow = "darken";
    mode.init = "lighten";
    result = Math.abs(0.25 * lum - 0.005);
  } else {
    result = 0.03;
  }

  return { mode, bgChange: result.toPrecision(4) };
}

function betterLum(rgba) {
  const sRed = linearizeRgbChannel(rgba.r);
  const sGreen = linearizeRgbChannel(rgba.g);
  const sBlue = linearizeRgbChannel(rgba.b);

  const lum = 0.2126 * sRed + 0.7152 * sGreen + 0.0722 * sBlue;
  return lum.toPrecision(4);
}

function linearizeRgbChannel(value) {
  const ratio = value / 255;
  return ratio < 0.04045 ? ratio / 12.92 : Math.pow((ratio + 0.055) / 1.055, 2.4);
}

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
