import { colord } from "colord";
import * as emotion from "@emotion/css";
import linearFunc from "./linear";

// let points = [
//   [0, 0.3],
//   [0.02, 0],
//   [0.12, 0.3],
//   [0.14, 0],
//   [0.16, 0.3],
//   [0.18, 0.3],
//   [0.19, 0.3],
//   [0.5, 0.3],
// ];

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

const offsetPoints = [
  [20, 25],
  [56, 56],
];
const offsetLinear = linearFunc(offsetPoints[0], offsetPoints[1]);

const generateOffsets = (steps, size) => {
  const initY = 1;
  const initX = -1;

  // const yTarget = 56;
  // const xTarget = -28;

  const yTarget = offsetLinear(size);
  const xTarget = -yTarget / 2;

  let array = [];
  const yStep = (yTarget - initY) / steps;
  const xStep = (xTarget - initX) / steps;

  for (let i = 0; i <= steps; i++) {
    let x = initX + xStep * i;
    let y = initY + yStep * i;
    array.push([x.toPrecision(2), y.toPrecision(2)]);
  }
  return array;
};

const generateShadowStyleAdjustable = (
  bgColor,
  steps = 26,
  shadowWidth = 1,
  valChange = 0.01,
  skipSteps = 0,
  fontSize,
) => {
  // let lighten = true;
  let lum = betterLum(colord(bgColor).rgba);

  const { mode, bgChange } = calcSteps(lum);

  const color = {
    colorObj: colord(bgColor).alpha(1)[mode.init](bgChange),
    step: function () {
      if (this.stepId++ > skipSteps) {
        this.colorObj = this.colorObj[mode.shadow](valChange);
      }
      //v1 
      this.colorObj = this.colorObj.alpha(this.colorObj.alpha() - 0.05);
      //v2
      // this.colorObj = this.colorObj.alpha(this.colorObj.alpha() - valChange * 3.5);
      return this.colorObj.toRgbString();
    },
    stepId: 0,
  };
  const offsets = generateOffsets(steps, fontSize);
  let cssString = `text-shadow: 1px -1px 0 ${color.step()},`;
  for (let offset of offsets) {
    cssString += `${offset[0]}px ${offset[1]}px ${shadowWidth}px ${color.step()},`;
  }
  cssString = cssString.replace(/,$/, ";");

  return css(cssString);
};

function __calcSteps(lum) {
  let mode = { shadow: "darken", init: "darken" };

  let result = 0;
  if (lum >= 0 && lum <= 0.02) {
    result = Math.abs(0.3 - lum * 15);
    // mode.shadow = "darken";
    mode.init = "lighten";
  } else if (lum > 0.02 && lum <= 0.12) {
    // mode.shadow = "darken";
    mode.init = "lighten";
    //v1
    // result = Math.abs(0.3 * lum - 0.006);
    //v2
    result = Math.abs(0.25 * lum - 0.005);
  } else {
    result = 0.3;
  }

  return { mode, bgChange: result.toPrecision(4) };
}
function _calcSteps(lum) {
  let mode = { shadow: "darken", init: "darken" };

  let result = 0;
  if (lum >= 0 && lum < 0.02) {
    result = -15 * lum + 0.3;
    mode.init = "lighten";
  } else if (lum >= 0.02 && lum < 0.12) {
    mode.init = "darken";
    result = 3 * lum - 0.06;
    // } else if (lum >= 0.12 && lum < 0.16) {
    //   mode.init = "darken";
    //   result = -7.5 * lum + 1.2;
    // } else if (lum >= 0.16 && lum < 0.2) {
    //   result = 7.5 * lum - 1.2;
  } else {
    result = 0.3;
  }

  console.log(result);

  return { mode, bgChange: result.toPrecision(4) };
}

// const maxInitDarken = 0.3;
// const maxInitLighten = 0.4;
// const points = [
//   [0, maxInitLighten],
//   [0.02, 0],
//   [0.12, maxInitDarken],
// ];

const maxInitDarken = 0.25;
const maxInitLighten = 0.3;
const points = [
  [0, maxInitLighten],
  [0.05, 0],
  [0.3, maxInitDarken],
];
const _linearDarkentoLightenIn = linearFunc(points[0], points[1]);
const _linearDarkentoLightenOut = linearFunc(points[1], points[2]);

function calcSteps(lum) {
  let mode = { shadow: "lighten", init: "darken" };

  let result = maxInitDarken;
  if (lum >= points[0][0] && lum < points[1][0]) {
    result = _linearDarkentoLightenIn(lum);
    mode.init = "lighten";
    mode.shadow = "lighten";
  } else if (lum >= points[1][0] && lum < points[2][0]) {
    result = _linearDarkentoLightenOut(lum);
    mode.init = "darken";
  }

  result = +result.toPrecision(6);
  return { mode, bgChange: result.toPrecision(6) };
}

function betterLum(rgba) {
  const sRed = linearizeRgbChannel(rgba.r);
  const sGreen = linearizeRgbChannel(rgba.g);
  const sBlue = linearizeRgbChannel(rgba.b);

  const lum = 0.2126 * sRed + 0.7152 * sGreen + 0.0722 * sBlue;
  return lum.toPrecision(3);
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
