function linearFunc(p1, p2) {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const b = (y2 - y1) / (x2 - x1);
  const k = y1 - b * x1;
  return (x) => {
    return b * x + k;
  };
}
function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

export default linearFunc;
export { linearFunc, clamp };
