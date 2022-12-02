import { readFileSync } from "fs";

const file = readFileSync("./input", "utf-8");
const lines = file.split(/\r?\n/);

const shapes = new Map([
  ["A", "rock"],
  ["B", "paper"],
  ["C", "scissors"],
  ["X", "rock"],
  ["Y", "paper"],
  ["Z", "scissors"],
]);

const play = (opponent: string, own: string) => {
  const ownShape = shapes.get(own);
  const opponentShape = shapes.get(opponent);

  if (ownShape === opponentShape) {
    return 3;
  }
  if (
    (ownShape === "rock" && opponentShape === "scissors") ||
    (ownShape === "paper" && opponentShape === "rock") ||
    (ownShape === "scissors" && opponentShape === "paper")
  ) {
    return 6;
  }
  return 0;
};

const scores = new Map([
  ["X", 1],
  ["Y", 2],
  ["Z", 3],
]);

console.log(
  lines.reduce((previousScore, currentLine) => {
    const [opponent, own] = currentLine.split(" ");

    const playScore = scores.get(own) || 0;
    const gameScore = play(opponent, own);

    const score = playScore + gameScore;

    return score + previousScore;
  }, 0)
);
