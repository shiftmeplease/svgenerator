<script>
  import * as svgData from "./store/svgData";
  import Slider from "./parts/Slider.svelte";
  import SvgCompiler from "./parts/SvgCompiler.svelte";

  let xVal = [256 / 2],
    yVal = [256 / 2];
  $: svgData.update("x", xVal[0]);
  $: svgData.update("y", 256 - yVal[0]);
  let storeValue = {};

  svgData.store.subscribe((val) => {
    storeValue = val;
  });
</script>

<div class="box">
  <div class="svg-area">
    <div class="svg-area-left-radio">
      <div class="opacity-block" />
      <div class="slider-x-top">
        <Slider bind:values={xVal} max={256} />
      </div>
      <div class="slider-y-left">
        <Slider bind:values={yVal} max={256} vertical formatter={(v) => 256 - v} />
      </div>
      <div class="svg-code-area">
        <SvgCompiler data={storeValue} />
      </div>
    </div>
  </div>
</div>

<style>
  .box {
    box-shadow: rgb(0 0 0 / 40%) -10px 40px 80px;
    background-color: rgb(22, 28, 36);
    padding: 80px 40px;
    z-index: 1;
    border-radius: 16px;
    /* overflow: hidden; */
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .svg-code-area {
    max-width: 640px;
    max-height: 640px;
    min-width: 320px;
    min-height: 320px;
    margin: 0 auto;
    border-radius: 1px;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 80%) 0 0 20px;
  }

  .svg-area-left-radio {
    display: grid;
    grid-template-columns: 10px 1fr;
    /* align-items: stretch; */
    gap: 10px;
    max-width: 650px;
    margin: 0 auto;
  }

  .slider-x-top {
    margin-bottom: 10px;
  }
</style>
