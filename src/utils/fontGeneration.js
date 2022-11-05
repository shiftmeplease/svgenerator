//web safe fonts with coverage of 75%+ for mac and win
import * as emotion from "@emotion/css";
const { css } = emotion;

const fontValues = {
  Arial: "Arial, Helvetica Neue, Helvetica, sans-serif",
  "Arial Black": "Arial Black, Arial Bold, Gadget, sans-serif",
  "Arial Narrow": "Arial Narrow, Arial, sans-serif",
  Tahoma: "Tahoma, Verdana, Segoe, sans-serif",
  "Trebuchet MS":
    "Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif",
  Verdana: "Verdana, Geneva, sans-serif",
  Georgia: "Georgia, Times, Times New Roman, serif",
  "Lucida Bright": "Lucida Bright, Georgia, serif",
  Palatino: "Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif",
  "Times New Roman": "TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif",
  "Courier New": "Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace",
};

const generateFontStyle = (fontName) => {
  let fontString = fontValues[fontName];
  return css`
    font-family: ${fontString};
  `;
};

export { fontValues };
export { generateFontStyle };

//taken from https://www.cssfontstack.com
// let allWebSafeFonts = [
//   {
//     name: "Arial",
//     winProc: "99.84%",
//     macProc: "98.74%",
//     fontString: " Arial, Helvetica Neue, Helvetica, sans-serif",
//   },
//   {
//     name: "Arial Black",
//     winProc: "98.08%",
//     macProc: "96.22%",
//     fontString: " Arial Black, Arial Bold, Gadget, sans-serif",
//   },
//   {
//     name: "Arial Narrow",
//     winProc: "88.39%",
//     macProc: "94.77%",
//     fontString: " Arial Narrow, Arial, sans-serif",
//   },
//   {
//     name: "Arial Rounded MT Bold",
//     winProc: "59.53%",
//     macProc: "95.14%",
//     fontString: " Arial Rounded MT Bold, Helvetica Rounded, Arial, sans-serif",
//   },
//   {
//     name: "Avant Garde",
//     winProc: "0%",
//     macProc: "1.08%",
//     fontString: " Avant Garde, Avantgarde, Century Gothic, CenturyGothic, AppleGothic, sans-serif",
//   },
//   {
//     name: "Calibri",
//     winProc: "83.41%",
//     macProc: "38.74%",
//     fontString: " Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif",
//   },
//   {
//     name: "Candara",
//     winProc: "83.08%",
//     macProc: "34.41%",
//     fontString: " Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif",
//   },
//   {
//     name: "Century Gothic",
//     winProc: "87.62%",
//     macProc: "53.15%",
//     fontString: " Century Gothic, CenturyGothic, AppleGothic, sans-serif",
//   },
//   {
//     name: "Franklin Gothic Medium",
//     winProc: "99.18%",
//     macProc: "2.1%",
//     fontString: " Franklin Gothic Medium, Franklin Gothic, ITC Franklin Gothic, Arial, sans-serif",
//   },
//   {
//     name: "Futura",
//     winProc: "1.26%",
//     macProc: "94.41%",
//     fontString: " Futura, Trebuchet MS, Arial, sans-serif",
//   },
//   {
//     name: "Geneva",
//     winProc: "2.08%",
//     macProc: "99.64%",
//     fontString: " Geneva, Tahoma, Verdana, sans-serif",
//   },
//   {
//     name: "Gill Sans",
//     winProc: "58.54%",
//     macProc: "95.5%",
//     fontString: " Gill Sans, Gill Sans MT, Calibri, sans-serif",
//   },
//   {
//     name: "Helvetica",
//     winProc: "7.34%",
//     macProc: "100%",
//     fontString: " Helvetica Neue, Helvetica, Arial, sans-serif",
//   },
//   {
//     name: "Impact",
//     winProc: "0%",
//     macProc: "95.14%",
//     fontString:
//       " Impact, Haettenschweiler, Franklin Gothic Bold, Charcoal, Helvetica Inserat, Bitstream Vera Sans Bold, Arial Black, sans serif",
//   },
//   {
//     name: "Lucida Grande",
//     winProc: "0%",
//     macProc: "100%",
//     fontString: " Lucida Grande, Lucida Sans Unicode, Lucida Sans, Geneva, Verdana, sans-serif",
//   },
//   {
//     name: "Optima",
//     winProc: "2.52%",
//     macProc: "93.69%",
//     fontString: " Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif",
//   },
//   {
//     name: "Segoe UI",
//     winProc: "75.36%",
//     macProc: "0%",
//     fontString:
//       " Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif",
//   },
//   {
//     name: "Tahoma",
//     winProc: "99.95%",
//     macProc: "91.71%",
//     fontString: " Tahoma, Verdana, Segoe, sans-serif",
//   },
//   {
//     name: "Trebuchet MS",
//     winProc: "99.67%",
//     macProc: "97.12%",
//     fontString:
//       " Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif",
//   },
//   {
//     name: "Verdana",
//     winProc: "99.84%",
//     macProc: "99.1%",
//     fontString: " Verdana, Geneva, sans-serif",
//   },
//   {
//     name: "Big Caslon",
//     winProc: "0%",
//     macProc: "92.61%",
//     fontString: " Big Caslon, Book Antiqua, Palatino Linotype, Georgia, serif",
//   },
//   {
//     name: "Bodoni MT",
//     winProc: "55.81%",
//     macProc: "0%",
//     fontString: " Bodoni MT, Didot, Didot LT STD, Hoefler Text, Garamond, Times New Roman, serif",
//   },
//   {
//     name: "Book Antiqua",
//     winProc: "86.09%",
//     macProc: "49.01%",
//     fontString: " Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif",
//   },
//   {
//     name: "Calisto MT",
//     winProc: "58.43%",
//     macProc: "46.31%",
//     fontString:
//       " Calisto MT, Bookman Old Style, Bookman, Goudy Old Style, Garamond, Hoefler Text, Bitstream Charter, Georgia, serif",
//   },
//   { name: "Cambria", winProc: "83.35%", macProc: "35.32%", fontString: " Cambria, Georgia, serif" },
//   {
//     name: "Didot",
//     winProc: "0%",
//     macProc: "93.51%",
//     fontString: " Didot, Didot LT STD, Hoefler Text, Garamond, Times New Roman, serif",
//   },
//   {
//     name: "Garamond",
//     winProc: "86.47%",
//     macProc: "49.91%",
//     fontString:
//       " Garamond, Baskerville, Baskerville Old Face, Hoefler Text, Times New Roman, serif",
//   },
//   {
//     name: "Georgia",
//     winProc: "99.4%",
//     macProc: "97.48%",
//     fontString: " Georgia, Times, Times New Roman, serif",
//   },
//   {
//     name: "Goudy Old Style",
//     winProc: "58.11%",
//     macProc: "47.57%",
//     fontString: " Goudy Old Style, Garamond, Big Caslon, Times New Roman, serif",
//   },
//   {
//     name: "Hoefler Text",
//     winProc: "0.99%",
//     macProc: "92.61%",
//     fontString: " Hoefler Text, Baskerville Old Face, Garamond, Times New Roman, serif",
//   },
//   {
//     name: "Lucida Bright",
//     winProc: "76.12%",
//     macProc: "99.64%",
//     fontString: " Lucida Bright, Georgia, serif",
//   },
//   {
//     name: "Palatino",
//     winProc: "99.29%",
//     macProc: "86.13%",
//     fontString: " Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif",
//   },
//   {
//     name: "Perpetua",
//     winProc: "66.54%",
//     macProc: "0%",
//     fontString:
//       " Perpetua, Baskerville, Big Caslon, Palatino Linotype, Palatino, URW Palladio L, Nimbus Roman No9 L, serif",
//   },
//   {
//     name: "Rockwell",
//     winProc: "65.94%",
//     macProc: "0%",
//     fontString: " Rockwell, Courier Bold, Courier, Georgia, Times, Times New Roman, serif",
//   },
//   {
//     name: "Rockwell Extra Bold",
//     winProc: "66.1%",
//     macProc: "0%",
//     fontString: " Rockwell Extra Bold, Rockwell Bold, monospace",
//   },
//   {
//     name: "Baskerville",
//     winProc: "60.35%",
//     macProc: "93.33%",
//     fontString:
//       " Baskerville, Baskerville Old Face, Hoefler Text, Garamond, Times New Roman, serif",
//   },
//   {
//     name: "Times New Roman",
//     winProc: "99.67%",
//     macProc: "97.48%",
//     fontString: " TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif",
//   },
//   {
//     name: "Consolas",
//     winProc: "82.97%",
//     macProc: "34.77%",
//     fontString: " Consolas, monaco, monospace",
//   },
//   {
//     name: "Courier New",
//     winProc: "99.73%",
//     macProc: "95.68%",
//     fontString: " Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace",
//   },
//   {
//     name: "Lucida Console",
//     winProc: "99.18%",
//     macProc: "0%",
//     fontString:
//       " Lucida Console, Lucida Sans Typewriter, monaco, Bitstream Vera Sans Mono, monospace",
//   },
//   {
//     name: "Lucida Sans Typewriter",
//     winProc: "74.81%",
//     macProc: "99.64%",
//     fontString:
//       " Lucida Sans Typewriter, Lucida Console, monaco, Bitstream Vera Sans Mono, monospace",
//   },
//   {
//     name: "Monaco",
//     winProc: "2.74%",
//     macProc: "99.82%",
//     fontString: " monaco, Consolas, Lucida Console, monospace",
//   },
//   {
//     name: "Andale Mono",
//     winProc: "4.16%",
//     macProc: "94.59%",
//     fontString: " Andale Mono, AndaleMono, monospace",
//   },
//   {
//     name: "Copperplate",
//     winProc: "66.87%",
//     macProc: "92.61%",
//     fontString: " Copperplate, Copperplate Gothic Light, fantasy",
//   },
//   { name: "Papyrus", winProc: "70.37%", macProc: "92.43%", fontString: " Papyrus, fantasy" },
//   {
//     name: "Brush Script MT",
//     winProc: "59.64%",
//     macProc: "90.99%",
//     fontString: " Brush Script MT, cursive",
//   },
// ];
