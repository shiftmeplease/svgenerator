import { clamp } from "./utils/linear";

const fontSize = { default: 60, ...minMax(10, 100) };
const wordSpacing = { default: 0, ...minMax(-20, 75) };
const fontSpacing = { default: 0, ...minMax(-20, 75) };
const textValue = { default: "meow", ...minMax(4, 20) };
// const rotate = { min: -180, max: 180, default: 0 };
const selectedFont = { default: "Arial" };
const textColor = { default: "#c7c4ff" };
const bgColor = { default: "#b1f6ff" };
const xVal = { default: [50], ...minMax(0, 100) };
const yVal = { default: [50], ...minMax(0, 100) };
const rotatedColor = { default: "#002d51" };
const dx = { default: 0 };

function minMax(min, max) {
  return {
    min,
    max,
    validate: (val) => {
      return clamp(val, min, max);
    },
  };
}

const megaObject = {
  dx,
  fontSize,
  wordSpacing,
  fontSpacing,
  textValue,
  textColor,
  selectedFont,
  bgColor,
  xVal,
  yVal,
  yValInverted: yVal,
  rotatedColor,
};

export const getInfo = (prop) => {
  return megaObject[prop];
};

export default { ...megaObject };
