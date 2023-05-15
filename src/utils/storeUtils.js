import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import { linearFunc, clamp } from "../utils/linear";

extend([mixPlugin]);

const _linearDarkenToLightenIn = linearFunc([40, 0.1], [35, 0]);
const _linearDarkenToLightenOut = linearFunc([35, 0], [30, 0.1]);

function rotateColor(color) {
  let lightness = colord(color).toHsl().l;
  let colorShift = "darken";
  let value = 0.1;

  if (lightness <= 40) {
    if (lightness <= 35) {
      value = _linearDarkenToLightenOut(lightness);
      colorShift = "lighten";
    } else {
      value = _linearDarkenToLightenIn(lightness);
    }

    value = +clamp(value, 0, 0.1).toPrecision(3);
  }

  return colord(color)
    [colorShift](value)
    .rotate(colord(color).toHsl().s > 0 ? 20 : 0)
    .saturate(colord(color).toHsl().s > 0 ? 10 : 0)
    .toHex();
}

export { rotateColor };
