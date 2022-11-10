import { writable } from "svelte/store";

const store = writable({});

// store.subscribe((value) => {
//   console.log(value);
// }); // logs '0'

function update(prop, value) {
  // console.log(`${prop}:${value}`);

  // if (!["textValue", "selectedFont"].includes(prop)) {
  //   console.log(prop);
  //   if (isNaN(value) || !Number.isInteger(value)) {
      
  //     value = 0;
  //   }
  // }

  store.update((prev) => {
    return { ...prev, [prop]: value };
  });
}

function reset() {
  store.set({});
}

// store.subscribe((val) => {
//   console.log(val);
// });

// svgData.update((n) => n); // logs '2'

export { update, reset, store };
