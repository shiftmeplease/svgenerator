<script>
  import {
    textColor,
    bgColor,
    textValue,
    selectedFont,
    fontSize,
    fontSpacing,
    wordSpacing,
    reset,
  } from "./store/stores";
  import ColorPicker from "./parts/ColorPicker.svelte";
  import Harmonies from "./parts/Harmonies.svelte";
  import { fontValues } from "./utils/fontGeneration";
  import Input from "./parts/Input.svelte";
  import info from "./valueValidation";
  import { colord } from "colord";
  // import { CircleVariant } from "./parts/CustomPricker/index";

  // let rotate = info.rotate.default;
  // $: svgData.update("rotate", rotate);

  // setInterval(() => {
  //   bgColor = colord(bgColor).rotate(1).toHex();
  //   // textColor = colord(textColor).rotate(1).toHex();
  // }, 1);

  // $: $store.dx = $store.fontSpacing !== 0 ? $store.fontSpacing / 2 : 0;

  // function reset() {
  //   // svgData.reset();
  //   // svgData.update("fontSize", info.fontSize.default);
  // }
</script>

<div class="box option-area">
  <div>
    <p class="option-header">Setup:</p>
    <div class="row-outer row-1-1">
      <div>
        <ColorPicker bind:value={$textColor} label="Text Color:" />
      </div>
      <div>
        <ColorPicker bind:value={$bgColor} label="Background:" />
      </div>
    </div>
    <div class="row-outer row-2-1" style="gap:0px;">
      <div style="margin-right:4px;">
        <Input bind:value={$textValue} label="Text:" />
      </div>
      <div style="margin-left:6px;">
        <Input bind:value={$selectedFont} label="Font:" type="select" values={fontValues} />
      </div>
    </div>
    <div class="row-outer">
      <div>
        <Input bind:value={$fontSize} label="Font Size:" type="slider" {...info.fontSize} />
      </div>
      <div>
        <Input
          bind:value={$fontSpacing}
          label="Font Spacing:"
          type="slider"
          {...info.fontSpacing}
        />
      </div>
      <div>
        <Input
          bind:value={$wordSpacing}
          label="Word Spacing:"
          type="slider"
          {...info.wordSpacing}
        />
      </div>
    </div>
    <!-- <div class="row-outer row-1-1">
      <div>
        <Harmonies color={$bgColor} />
      </div>
       <div>
         min={-180} max={180}  
        <Input bind:value={rotate} label="Rotate:" type="slider" />
      </div>

      <div />
    </div> -->
    <!-- <div class="row-outer"> -->
    <div class="text-center" style="margin-top: 40px">
      <!-- svelte-ignore a11y-missing-attribute -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <a on:click={reset} class="button error large">Reset<i class="fa-solid fa-arrows-rotate" /></a
      >
    </div>
    <!-- <div class="text-center" style="margin-top: 40px">
        <a href="#" class="button info large">Mint/Update<i class="fa-solid fa-arrows-rotate" /></a>
      </div>
      <div class="text-center" style="margin-top: 40px">
        <a href="#" class="button primary large">Random<i class="fa-solid fa-arrows-rotate" /></a>
      </div> -->
    <!-- </div> -->
  </div>
</div>

<style>
  .box {
    box-shadow: rgb(0 0 0 / 40%) -10px 40px 80px;
    background-color: rgb(22, 28, 36);
    padding: 80px 40px;
    z-index: 1;
    border-radius: 16px;
    min-width: 375px;
    /* overflow: hidden; */
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  @media (max-width: 1250px) {
    .box {
      /* min-width: none; */
      padding: 20px 20px;
    }
  }
  .option-area {
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
  }

  .row-outer {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 20px;
  }

  .row-2-1 {
    grid-template-columns: 2fr 1fr;
  }
  .row-1-1 {
    grid-template-columns: 1fr 1fr;
  }

  .option-header {
    color: white;
    font-size: 26px;
    margin-bottom: 1em;
  }
</style>
