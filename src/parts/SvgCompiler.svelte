<script>
  export let data = {};
  let x = 50;
  let y = 50;
  let string = "meow";
  let fillColour = "rgba(0, 0, 0, 1)";
  let wSpacing = 0;
  let lSpacing = 0;
  let size = 5;
  let bgColor, textColor;
  let selectedFont = "Arial";
  let fontSpacing = 0;
  let wordSpacing = 0;
  let rotate = 0;
  import { generateShadowStyle } from "../utils/shadowCSS";
  import { generateFontStyle } from "../utils/fontGeneration";
  import { generateShadowStyleAdjustable } from "../utils/shadowCSS";
  import { colord, extend } from "colord";
  import mixPlugin from "colord/plugins/mix";

  extend([mixPlugin]);

  // export let fontWeight;

  // export let fillColourBg = "rgba(255,255,255,1)";
  $: {
    x = data.x;
    y = data.y;
    size = data.fontSize;
    bgColor = data.bgColor;
    textColor = data.textColor;
    string = data.textValue;
    selectedFont = data.selectedFont;
    fontSpacing = data.fontSpacing;
    wordSpacing = data.wordSpacing;
    rotate = data.rotate;
  }

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
    <stop offset="5%" stop-color={colord(bgColor).darken(0.1).rotate(50).toHex()} />
    <stop offset="95%" stop-color={bgColor} />
  </linearGradient>
  <rect width="100%" height="100%" fill={"url(#gradient)"} />
  <text
    class={`${generateFontStyle(selectedFont)} ${generateShadowStyleAdjustable(
      colord(bgColor).mix(colord(bgColor).darken(0.1).rotate(30), 0.75),
      30,
      1.5,
      0.01,
    )}`}
    dx={fontSpacing / 2}
    {x}
    {y}
    word-spacing={wordSpacing}
    letter-spacing={fontSpacing}
    font-size={size}
    fill={textColor}
    transform={`rotate(${rotate},${x},${y})`}
    >{string}
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
