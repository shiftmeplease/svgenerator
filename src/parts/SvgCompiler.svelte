<script>
  import {
    fontSize,
    wordSpacing,
    textValue,
    selectedFont,
    xVal,
    yVal,
    fontSpacing,
    textColor,
    dx,
    bgColor,
    rotatedColor,
  } from "../store/stores";

  // export let data = {};

  // let string = "meow";
  // let size = 5;
  // let bgColor, textColor, rotatedColor;
  // let selectedFont = "Arial";
  // let fontSpacing = 0;
  // let wordSpacing = 0;
  // let dx;
  let fontStyle;
  let shadowStyle;
  import { generateFontStyle } from "../utils/fontGeneration";
  import { generateShadowStyleAdjustable, generateShadowStyle } from "../utils/shadowCSS";
  import { colord, extend } from "colord";
  import mixPlugin from "colord/plugins/mix";

  extend([mixPlugin]);

  // export let fillColourBg = "rgba(255,255,255,1)";
  // $: {
  //   x = data.xVal;
  //   y = data.yVal;
  //   size = data.fontSize;
  //   bgColor = data.bgColor;
  //   textColor = data.textColor;
  //   string = data.textValue;
  //   selectedFont = data.selectedFont;
  //   fontSpacing = data.fontSpacing;
  //   wordSpacing = data.wordSpacing;
  //   dx = data.dx;
  //   rotatedColor = data.rotatedColor;
  // }

  $: fontStyle = generateFontStyle($selectedFont);

  $: shadowStyle =
    // generateShadowStyle(bgColor);
    generateShadowStyleAdjustable(
      colord($bgColor).mix($rotatedColor, 0.75).mix($textColor, 0.05),
      26,
      3,
      0.01,
      0,
      $fontSize,
    );

  // let generateTextCss = (fillColour, animated) => {
  //   let inlineStyle = "";
  //   if (fillColour && !animated) {
  //     inlineStyle += ` fill:${fillColour}`;
  //   } else {
  //     inlineStyle += `animation: stroke 5s infinite alternate;
  //     stroke-width: 3;
  //     text-transform: uppercase;
  //     stroke: ${fillColour};`;
  //   }

  //   return inlineStyle;
  // };
  // $: inlineStyle = generateTextCss(fillColour);
</script>

<!-- //size, fonts, 
    alignment, decoration, stroke
  //animations 
  rotate 
  -->
<!-- <link href=" http://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet" type="text/css" /> -->
<!-- font-variant: small-caps; / normal -->
<!-- font-style: normal; italic; oblique -->
<!-- font-weight: -->

<svg
  height={640}
  width={640}
  viewBox="0 0 256 256"
  preserveAspectRatio="none"
  id="_temp"
  xmlns="http://www.w3.org/2000/svg"
>
  <linearGradient id="gradient">
    <stop offset="5%" stop-color={$rotatedColor} />
    <stop offset="95%" stop-color={$bgColor} />
  </linearGradient>
  <rect width="100%" height="100%" fill={"url(#gradient)"} />
  <text
    class={`${fontStyle} ${shadowStyle}`}
    dx={$dx}
    x={`${$xVal}%`}
    y={`${$yVal}%`}
    word-spacing={$wordSpacing}
    letter-spacing={$fontSpacing}
    font-size={$fontSize}
    fill={$textColor}
    >{$textValue}
  </text>
</svg>

<style>
  svg {
    width: 100%;
    height: 100%;
  }
  svg {
    border: 1px solid black;
  }
  text {
    /* font-family: Arial, Helvetica, sans-serif; */
    text-anchor: middle;
    dominant-baseline: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /* filter: drop-shadow(0px 3px 0px rgba(0, 0, 0, 1)); */
  }
</style>
