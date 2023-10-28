"use client";
import { useScoreboardContext } from "@/context/ScoreboardContext";

type ScoreboardItemProps = {
  name: string;
  score: number;
};

function ScoreboardItem({ name, score }: ScoreboardItemProps) {
  return (
    <div className="flex justify-between gap-2 mx-3 my-2">
      <div>{name}</div>
      <div>{score}</div>
    </div>
  );
}

export function Scoreboard() {
  const { scores } = useScoreboardContext();
  return (
    <div>
      {scores.map((score) => (
        <ScoreboardItem key={score.name} {...score} />
      ))}
    </div>
  );
}
