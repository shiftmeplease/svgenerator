import { writable } from "svelte/store";
import info from "../valueValidation";

const extractValues = (info) => {
  let obj = {};

  for (let prop in info) {
    obj[prop] = info[prop].default;
  }
  return obj;
};

const store = writable(extractValues(info));

function update(prop, value) {
  // if (!["textValue", "selectedFont"].includes(prop)) {
  //   console.log(prop);
  //   if (isNaN(value) || !Number.isInteger(value)) {

  //     value = 0;
  //   }
  // }

  // if (info[prop].validate) {
  //   value = info[prop].validate(value);
  // }

  // if (prop == "fontSpacing") {
  //   appendObj["dx"] = value !== 0 ? value / 2 : 0;
  // }

  // if (prop == "yVal") {
  //   value = 100 - value[0];
  // } else if (prop == "xVal") {
  //   value = value[0];
  // }

  store.update((prev) => {
    return { ...prev, [prop]: value };
  });
}

function reset() {
  store.set(extractValues(info));
}

// svgData.update((n) => n); // logs '2'

export default store;
export { update, reset };
