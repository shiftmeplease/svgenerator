<script>
  export let labelWrapper;
  export let hex;
  export let label;
  /* svelte-ignore unused-export-let */
  export let isOpen;
  import { colord } from "colord";

  // $: console.log(colord(hex).isReadable("#161c24")); //is readable to backgorund?
  let colorLum = colord(hex).luminance(); //"#161c24");
  let contrastTextColor = hex;
  let minLuminance = 0.4;
  let changeValueDark = 0.05;
  $: {
    let color = colord(hex);
    colorLum = color.luminance(); //"#161c24");

    if (colorLum <= minLuminance) {
      contrastTextColor = color.lighten(
        minLuminance - colorLum + (color.isDark() && changeValueDark),
      );
    } else {
      contrastTextColor = color;
    }
  }

  //222a34
  // let buttonColor = colord("rgba(101, 125, 154, 0)");
  let buttonColor;
  let hoverButtonColor = colord("#222a34");
  let defaultButtonColor = colord("#161c24"); // TOOD, it's hardcoded value...
  buttonColor = hoverButtonColor;
  let isButtonHovered = false;
  let hoverChangeValue = 0.01;

  $: {
    if (colorLum <= minLuminance / 6) {
      if (isButtonHovered) {
        buttonColor = hoverButtonColor.lighten(minLuminance / 6 - colorLum + hoverChangeValue);
      } else {
        buttonColor = defaultButtonColor.lighten(minLuminance / 6 - colorLum);
      }
    } else {
      if (isButtonHovered) {
        buttonColor = hoverButtonColor;
      } else {
        buttonColor = defaultButtonColor;
      }
    }
  }

  function handleMouseOver() {
    isButtonHovered = true;
  }
  function handleMouseOut() {
    isButtonHovered = false;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  bind:this={labelWrapper}
  class="colorButton"
  aria-haspopup="dialog"
  on:click|preventDefault={() => {}}
>
  <p class="label">{label}</p>
  <div
    style="color: {contrastTextColor.toRgbString()}; border: 1px solid {hex}; background-color: {buttonColor.toRgbString()}"
    class="color-palette-editor"
    on:mouseover={handleMouseOver}
    on:focus={handleMouseOver}
    on:mouseout={handleMouseOut}
    on:blur={handleMouseOut}
  >
    <p class="color-palette-text">{hex}</p>
    <div class="color-solid" style="background-color: {hex}" />
  </div>
</div>

<!-- <input type="hidden" value={color.hex} /> -->

<!-- <div class="palette-outer">
	<p class="label">{label}</p>
	<div
	  style="background-color: {color.hex}; border: 1px solid {color.hex}"
	  class="color-palette-editor"
	>
	  <p>{color.hex}</p>
	  <div class="color-solid" style="background-color: {color.hex}" />
	</div>
  </div> -->
<style>
  /* div {
    width: 40px;
    height: 20px;
    border-radius: 3px;
    pointer-events: none;
  }
  button {
    display: flex;
    align-items: center;
    gap: 10px;

    margin: 10px;
    padding: 10px 20px 10px 10px;
    background-color: white;
    border: none;
    border-radius: 3px 20px 20px 3px;
    box-shadow: 0 0 2px black;
    cursor: pointer;

    outline: 3px solid transparent;
    outline-offset: 3px;
    transition: all 0.2s ease-in-out;
  }
  button:hover {
    box-shadow: 0 0 5px black;
  }
  button:focus-visible {
    outline: 3px solid var(--focus-color, red);
  } */
  /* .colorButton {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  } */
  .color-palette-editor {
    display: flex;
    /* height: 29px; */
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 5.5px 8px;
    border-radius: 6px;
    width: fit-content;
    transition: 0.2s;
    width: 100%;
    justify-content: space-between;
  }

  .color-palette-editor:hover {
    box-shadow: rgb(255 255 255 / 4%) 0px 2px 16px 0px;
  }

  .color-solid {
    background-color: #ffffff;
    height: 15px;
    width: 30px;
    border-radius: 3px;
  }
  .color-palette-text {
    font-size: 1rem;
    line-height: 1.4375em;
  }

  .label {
    color: white;
    font-size: 0.8rem;
    margin-bottom: 0.4em;
    opacity: 0.7;
    text-align: left;
  }
</style>
