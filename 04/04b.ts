import { readFileSync } from "fs";

const file = readFileSync("./input", "utf-8");
const lines = file.split(/\r?\n/);

let containments = 0;
lines.forEach((pair) => {
  const [first, second] = pair.split(",");

  const [firstLower, firstUpper] = first.split("-");
  const [secondLower, secondUpper] = second.split("-");

  const firstArray = buildArray(+firstLower, +firstUpper);
  const secondArray = buildArray(+secondLower, +secondUpper);

  let hasOverlap = false;
  for (let index = 0; index < firstArray.length; index++) {
    const item = firstArray[index];
    if (secondArray.includes(item)) {
      hasOverlap = true;
      break;
    }
  }
  if (hasOverlap) {
    containments++;
  }
});

console.log(containments);

function buildArray(lower: number, upper: number) {
  let array: number[] = [];
  while (lower <= upper) {
    array.push(lower);
    lower++;
  }
  return array;
}
