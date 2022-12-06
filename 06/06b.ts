import { readFileSync } from "fs";

const file = readFileSync("./input", "utf-8");

for (let index = 13; index < file.length; index++) {
  const lastFour = file.slice(index - 14, index);

  if (new Set(lastFour.split("")).size === 14) {
    console.log(index);
    break;
  }
}
