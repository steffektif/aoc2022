import { readFileSync } from "fs";

const file = readFileSync("./input", "utf-8");
const lines = file.split(/\r?\n/);

type Instruction = {
  move: number;
  from: number;
  to: number;
};
const stacks: Array<Array<string>> = [[], [], [], [], [], [], [], [], []];
const instructions: Array<Instruction> = [];

// every part is 3 signs long 1 space in between
const lineParts: Array<string[]> = [];
lines.forEach((line) => {
  const lineArray: string[] = [];
  if (line.startsWith("[") && line.length != 0) {
    for (let index = 0; index < line.length; index = index + 4) {
      const linePart = line.slice(index, index + 3);
      lineArray.push(linePart);
    }
    lineParts.push(lineArray);
  }
  if (line.startsWith("move")) {
    //pff that was easy
    const split = line
      .replace("move", "")
      .replace("from", "")
      .replace("to", "")
      .trimStart()
      .trimEnd()
      .split(" ")
      .filter((num) => num.length > 0)
      .map((num) => +num);
    instructions.push({ move: split[0], from: split[1], to: split[2] });
  }
});

lineParts.forEach((part) => {
  for (let index = 0; index < part.length; index++) {
    const element = part[index];
    if (element.startsWith("[")) {
      const stack = stacks[index];
      stack.push(element[1]);
    }
  }
});

stacks.map((stack) => stack.reverse());

instructions.forEach((instruction) => {
  for (let index = 0; index < instruction.move; index++) {
    stacks[instruction.to - 1].push(stacks[instruction.from - 1].pop()!);
  }
});

console.log(stacks.map((stack) => stack[stack.length - 1]).join(""));
