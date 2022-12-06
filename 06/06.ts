import { readFileSync } from "fs";

const file = readFileSync("./input", "utf-8");

for (let index = 3; index < file.length; index++) {
  const lastFour = file.slice(index - 4, index);

  if (new Set(lastFour.split("")).size === 4) {
    console.log(index);
    break;
  }
}
