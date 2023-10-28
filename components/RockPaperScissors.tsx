"use client";

import { Button } from "@/components/ui/button";
import { useScoreboardContext } from "@/context/ScoreboardContext";
import { Mountain, Scissors, Scroll } from "lucide-react";
import { ElementType, useState } from "react";

type GameResult = "WIN" | "LOSE" | "DRAW";

type CommandName = "Rock" | "Paper" | "Scissor";
type Command = {
  name: CommandName;
  icon: ElementType;
  beats: [CommandName];
};

const commands: Command[] = [
  {
    name: "Rock",
    icon: Mountain,
    beats: ["Scissor"],
  },
  {
    name: "Paper",
    icon: Scroll,
    beats: ["Rock"],
  },
  {
    name: "Scissor",
    icon: Scissors,
    beats: ["Paper"],
  },
];

function getRandomCommand() {
  const index = Math.floor(Math.random() * commands.length);
  return commands[index];
}

export function RockPaperScissors() {
  const [result, setResult] = useState<GameResult | null>(null);
  const [lastBattle, setLastBattle] = useState("");
  const { addScore } = useScoreboardContext();

  function commandClicked(command: Command) {
    const opponentCommand = getRandomCommand();

    setLastBattle(`${command.name} vs ${opponentCommand.name}`);
    if (command.beats.includes(opponentCommand.name)) {
      setResult("WIN");
      addScore("You");
    } else if (opponentCommand.beats.includes(command.name)) {
      setResult("LOSE");
      addScore("AI");
    } else {
      setResult("DRAW");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-[40vh]">
      <p className="mb-12">Choose an option</p>
      <div className="flex gap-3 my-12">
        {commands.map((command) => (
          <Button
            key={command.name}
            onClick={() => commandClicked(command)}
            variant="outline"
            size="icon"
            className="p-1"
          >
            {<command.icon className="w-64 h-64" />}
          </Button>
        ))}
      </div>
      {result === "WIN" && <p>You won</p>}
      {result === "LOSE" && <p>You lost</p>}
      {result === "DRAW" && <p>Draw</p>}
      <p>{lastBattle}</p>
    </div>
  );
}
