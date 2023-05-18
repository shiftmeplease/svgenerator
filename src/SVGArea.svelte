<script>
  import { yValInverted, xVal } from "./store/stores";
  import Slider from "./parts/Slider.svelte";
  import SvgCompiler from "./parts/SvgCompiler.svelte";
  import info from "./valueValidation";
</script>

<div class="box">
  <div class="svg-area">
    <div class="svg-area-left-radio">
      <div class="opacity-block" />
      <div class="slider-x-top">
        <Slider bind:values={$xVal} {...info.xVal} />
      </div>
      <div class="slider-y-left">
        <Slider
          bind:values={$yValInverted}
          {...info.yValInverted}
          vertical
          formatter={(v) => 100 - v}
        />
      </div>
      <div class="svg-code-area">
        <SvgCompiler />
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

  @media (max-width: 1250px) {
    .box {
      padding: 20px 20px;
    }
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
  @media (max-width: 600px) {
    .svg-code-area {
      min-width: 200px;
      min-height: 200px;
    }
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
