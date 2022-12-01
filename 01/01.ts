import { readFileSync } from "fs";

const file = readFileSync("./input", "utf-8");
const lines = file.split(/\r?\n/);

const elves: number[][] = [];
const elvesSums: number[] = [];
let currentElf: number[] = [];

lines.forEach((line) => {
  if (line !== "") {
    currentElf.push(+line);
  } else {
    elves.push([...currentElf]);
    currentElf = [];
  }
});

elves.forEach((elf) => {
  elvesSums.push(elf.reduce((prev, current) => prev + current, 0));
});

console.log(Math.max(...elvesSums));

const sortedElves = elvesSums.sort((a, b) => b - a);

console.log(sortedElves.slice(0, 3).reduce((a, b) => a + b, 0));
