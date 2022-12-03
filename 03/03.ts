import { readFileSync } from "fs";

const file = readFileSync("./input", "utf-8");
const lines = file.split(/\r?\n/);

let items: Array<string> = [];
lines.map((line) => {
  const firstHalf = Array.from(line.slice(0, line.length / 2));
  const secondHalf = Array.from(line.slice(line.length / 2));

  for (let index = 0; index < firstHalf.length; index++) {
    const item = firstHalf[index];
    if (secondHalf.includes(item)) {
      items.push(item);
      break;
    }
  }
});

console.log(
  items
    .map((char) => {
      const posInAsciiTable = char.charCodeAt(0); // only one letter
      if (posInAsciiTable < 91) {
        // is a capital letter
        return posInAsciiTable - 38;
      } else {
        // is a small letter
        return posInAsciiTable - 96;
      }
    })
    .reduce((prev, current) => prev + current, 0)
);
