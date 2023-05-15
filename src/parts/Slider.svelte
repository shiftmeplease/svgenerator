<script>
  import RangeSlider from "svelte-range-slider-pips/src";
  import "./slider.css";
  export let values = [50];
  export let vertical = false;

  // if (Array.isArray(value)) {
  //   throw new Error("MultiArrays for slider are unsupported");
  // }

  // let sliderValue = [value];

  // $: value = sliderValue[0];
</script>

<RangeSlider
  float
  bind:values
  {vertical}
  {...$$restProps}
  springValues={{ stiffness: 1, damping: 1 }}
/>
