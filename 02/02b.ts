import { readFileSync } from "fs";

const file = readFileSync("./input", "utf-8");
const lines = file.split(/\r?\n/);

const shapes = new Map([
  ["A", "rock"],
  ["B", "paper"],
  ["C", "scissors"],
]);

const playScores = new Map([
  ["rock", 1],
  ["paper", 2],
  ["scissors", 3],
]);

const gameScores = new Map([
  ["X", 0],
  ["Y", 3],
  ["Z", 6],
]);

const indicatedOutcome = new Map([
  ["X", "lose"],
  ["Y", "draw"],
  ["Z", "win"],
]);

const play = (opponent: string, outcome: string) => {
  const decryptedOutcome = indicatedOutcome.get(outcome);
  const opponentShape = shapes.get(opponent);

  if (decryptedOutcome === "win") {
    if (opponentShape === "rock") {
      return playScores.get("paper");
    }
    if (opponentShape === "scissors") {
      return playScores.get("rock");
    }
    return playScores.get("scissors");
  }
  if (decryptedOutcome === "draw") {
    return playScores.get(opponentShape!) || 0;
  }
  if (opponentShape === "rock") {
    return playScores.get("scissors");
  }
  if (opponentShape === "scissors") {
    return playScores.get("paper");
  }
  return playScores.get("rock");
};

console.log(
  lines.reduce((previousScore, currentLine) => {
    const [opponent, outcome] = currentLine.split(" ");

    const gameScore = gameScores.get(outcome) || 0;
    const playScore = play(opponent, outcome) || 0;

    const score = playScore + gameScore;

    return score + previousScore;
  }, 0)
);
