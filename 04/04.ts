import { readFileSync } from "fs";

const file = readFileSync("./input", "utf-8");
const lines = file.split(/\r?\n/);

let containments = 0;
lines.forEach((pair) => {
  const [first, second] = pair.split(",");

  const [firstLower, firstUpper] = first.split("-");
  const [secondLower, secondUpper] = second.split("-");

  if (
    (+firstLower <= +secondLower && +firstUpper >= +secondUpper) ||
    (+secondLower <= +firstLower && +secondUpper >= +firstUpper)
  ) {
    containments++;
  }
});

console.log(containments);
