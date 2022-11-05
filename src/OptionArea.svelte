<script>
  import Slider from "./parts/Slider.svelte";
  import * as svgData from "./store/svgData";
  import ColorPicker from "svelte-awesome-color-picker";
  import InputOption from "./parts/CustomPicker/Input.svelte";
  import SelectorWrapper from "./parts/CustomPicker/Wrapper.svelte";
  import Harmonies from "./parts/Harmonies.svelte";
  import { fontValues } from "./utils/fontGeneration";
  // import { CircleVariant } from "./parts/CustomPricker/index";

  let textValue = "meow";
  let wordSpacingSlider = [0];
  let fontSpacingSlider = [0];
  let fontSizeSlider = [15];
  let rotateSlider = [0];
  let selectedFont = "Arial";
  let textColor = "#881122";
  let bgColor = "#000000";
  $: svgData.update("rotate", rotateSlider[0]);
  $: svgData.update("fontSize", fontSizeSlider[0]);
  $: svgData.update("fontSpacing", fontSpacingSlider[0]);
  $: svgData.update("wordSpacing", wordSpacingSlider[0]);
  $: svgData.update("textValue", textValue);
  $: svgData.update("textColor", textColor);
  $: svgData.update("bgColor", bgColor);
  $: svgData.update("selectedFont", selectedFont);
</script>

<div class="box option-area">
  <div>
    <p class="option-header">Setup:</p>
    <div class="row-outer">
      <!-- <div class="palette-outer">
        <p class="label">Задний фон:</p>
        <div
          style="color: white; border: 1px solid white"
          class="color-palette-editor color-#ffffff"
        >
          <p>#ffffff</p>
          <div class="color-solid" style="background-color: #ffffff" />
        </div>
      </div> -->
      <div>
        <ColorPicker
          bind:hex={bgColor}
          components={{ input: InputOption, wrapper: SelectorWrapper }}
          isAlpha={false}
          label="Background:"
        />
      </div>
      <!-- <div class="palette-outer">
        <p class="label">Цвет текста:</p>
        <div
          style="color: black; border: 1px solid black"
          class="color-palette-editor color-#000000"
        >
          <p>#000000</p>
          <div class="color-solid" style="background-color: #000000" />
        </div>
      </div> -->
      <div>
        <ColorPicker
          bind:hex={textColor}
          components={{ input: InputOption, wrapper: SelectorWrapper }}
          isAlpha={false}
          label="Text color:"
        />
      </div>
    </div>
    <div class="row-outer">
      <div style="flex: 2">
        <p class="label">Text:</p>
        <div class="input-outer">
          <input class="text-input" bind:value={textValue} />
        </div>
      </div>
      <div>
        <p class="label">Font:</p>
        <div class="input-outer">
          <!-- <input class="text-input" bind:value={fontSizeSlider[0]} /> -->
          <select class="text-input" bind:value={selectedFont}>
            <!-- style="padding-top: 6.5px; padding-bottom:6.5px;" -->
            {#each Object.entries(fontValues) as [fontName]}
              <option class="text-input" value={fontName}>
                {fontName}
              </option>
            {/each}
          </select>
        </div>
      </div>
    </div>
    <div class="row-outer">
      <div>
        <p class="label">Font Size:</p>
        <div class="input-outer-slider">
          <input class="text-input" bind:value={fontSizeSlider[0]} />
          <div class="slider-x-top">
            <Slider bind:values={fontSizeSlider} />
          </div>
        </div>
      </div>
      <div>
        <p class="label">Font Spacing:</p>
        <div class="input-outer-slider">
          <input class="text-input" bind:value={fontSpacingSlider[0]} />
          <div class="slider-x-top">
            <Slider bind:values={fontSpacingSlider} />
          </div>
        </div>
      </div>
      <div>
        <p class="label">Word Spacing:</p>
        <div class="input-outer-slider">
          <input class="text-input" bind:value={wordSpacingSlider[0]} />
          <div class="slider-x-top">
            <Slider bind:values={wordSpacingSlider} />
          </div>
        </div>
      </div>
    </div>
    <div class="row-outer">
      <div>
        <Harmonies color={bgColor} />
      </div>
      <div>
        <p class="label">Rotate:</p>
        <div class="input-outer-slider">
          <input type="number" class="text-input" bind:value={rotateSlider[0]} />
          <div class="slider-x-top">
            <Slider bind:values={rotateSlider} min={-180} max={180} />
          </div>
        </div>
      </div>

      <div />
    </div>
    <div class="text-center" style="margin-top: 40px">
      <a href="#" class="button info large">Meow<i class="fa-solid fa-arrows-rotate" /></a>
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
  .option-area {
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
  }

  .color-palette-editor {
    display: flex;
    height: 29px;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 5.5px 8px;
    border-radius: 6px;
    width: fit-content;
    transition: 0.2s;
    min-width: 100%;
    justify-content: space-between;
  }

  .color-palette-editor:hover {
    box-shadow: rgb(255 255 255 / 4%) 0px 2px 16px 0px;
  }

  .color-solid {
    background-color: #ffffff;
    height: 100%;
    width: 30px;
    border-radius: 3px;
  }

  .label {
    color: white;
    font-size: 0.8rem;
    margin-bottom: 0.4em;
    opacity: 0.7;
  }

  .row-outer {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  .row-outer > * {
    flex: 1;
  }

  .input-outer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* text-input */

  .text-input {
    /* line-height: 1.4375em; */
    font-size: 1rem;
    color: rgb(255, 255, 255);
    border: 1px solid white;
    box-sizing: border-box;
    cursor: text;
    display: inline-flex;
    align-items: center;
    width: 100%;
    position: relative;
    border-radius: 8px;
    background: #161c24;
    padding: 6.5px 8px;
    transition: 0.2s;
  }

  .text-input:hover {
    background-color: #222a34;
  }

  .input-outer-slider {
    display: flex;
    flex-direction: column;
  }

  .input-outer-slider .slider-x-top {
    margin-top: 10px;
  }

  .input-outer-slider .slider-x-top {
    width: 80%;
    margin: 12px auto;
  }

  .option-header {
    color: white;
    font-size: 26px;
    margin-bottom: 1em;
  }
</style>
