"use client";

import { Button } from "@/components/ui/button";
import { Mountain, Scissors, Scroll } from "lucide-react";
import { ForwardRefExoticComponent, useState } from "react";

type GameResult = "WIN" | "LOSE" | "DRAW";

type CommandName = "Rock" | "Paper" | "Scissor";
type Command = {
  name: CommandName;
  icon: ForwardRefExoticComponent<any>;
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

function RockPaperScissors() {
  const [result, setResult] = useState<GameResult | null>(null);

  function commandClicked(command: Command) {
    const opponentCommand = getRandomCommand();

    if (command.beats.includes(opponentCommand.name)) {
      setResult("WIN");
    } else if (opponentCommand.beats.includes(command.name)) {
      setResult("LOSE");
    } else {
      setResult("DRAW");
    }
  }

  return (
    <>
      <p>Choose an option</p>
      <div className="flex gap-3">
        {commands.map((command) => (
          <Button
            key={command.name}
            onClick={() => commandClicked(command)}
            variant="outline"
            size="icon"
            className="p-1"
          >
            {<command.icon className="w-20 h-20" />}
          </Button>
        ))}
      </div>
      {result === "WIN" && <p>You won</p>}
      {result === "LOSE" && <p>You lost</p>}
      {result === "DRAW" && <p>Draw</p>}
    </>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <h1 className=" mb-12">Rock Paper Scrissors</h1>
      <RockPaperScissors />
    </main>
  );
}
