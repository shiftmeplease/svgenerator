// const fontSize = { default: 60, ...minMax(10, 100) };
// const wordSpacing = { default: 0, ...minMax(-20, 75) };
// const textValue = { default: "meow", ...minMax(4, 20) };
// // const rotate = { min: -180, max: 180, default: 0 };
// const selectedFont = { default: "Arial" };
// const xVal = { default: [50], ...minMax(0, 100) };
// const yVal = { default: [50], ...minMax(0, 100) };

// fontSpacing

import { writable, derived } from "svelte/store";
import info from "../valueValidation";
import { rotateColor } from "../utils/storeUtils";

const skip = ["dx", "yVal", "rotatedColor"];

const extractValues = (info, skip = []) => {
  let obj = {};

  for (let prop in info) {
    if (skip.includes(prop)) {
      continue;
    }
    obj[prop] = writable(info[prop].default);
  }
  return obj;
};

export function reset() {
  for (let prop in stores) {
    stores[prop].set(info[prop].default);
  }
}

const stores = extractValues(info, skip);

//userInputs
export const {
  fontSize,
  wordSpacing,
  textValue,
  selectedFont,
  xVal,
  yValInverted,
  fontSpacing,
  textColor,
  bgColor,
} = stores;

export const dx = derived(fontSpacing, (value) => {
  // @ts-ignore
  return value !== 0 ? value / 2 : 0;
});

//Derived values
export const rotatedColor = derived(bgColor, (value) => rotateColor(value));
// @ts-ignore
export const yVal = derived(yValInverted, (value) => 100 - value);
