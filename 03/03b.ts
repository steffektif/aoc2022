import { readFileSync } from "fs";
import { findPriority } from "./utils";

const file = readFileSync("./input", "utf-8");
const lines = file.split(/\r?\n/);

let items: Array<string> = [];
const chunkSize = 3;
for (let i = 0; i < lines.length; i += chunkSize) {
  const [first, second, third] = lines.slice(i, i + chunkSize);

  for (let index = 0; index < first.length; index++) {
    const item = first[index];

    if (second.includes(item) && third.includes(item)) {
      items.push(item);
      break;
    }
  }
}

console.log(
  items
    .map((char) => findPriority(char))
    .reduce((prev, current) => prev + current)
);
