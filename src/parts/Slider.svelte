<script>
  import RangeSlider from "svelte-range-slider-pips/src";
  import './slider.css';
  export let values = [50];
  export let vertical = false;

  // $: console.log(values[0]);
</script>

<RangeSlider float bind:values {vertical} {...$$restProps} />
