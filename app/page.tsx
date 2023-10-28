import { RockPaperScissors } from "@/components/RockPaperScissors";
import { Scoreboard } from "@/components/Scoreboard";

export default function Home() {
  return (
    <div className="min-h-screen">
      <h1 className="text-xl font-bold text-center my-3 uppercase">
        Rock Paper Scrissors
      </h1>
      <div className="grid grid-cols-12 gap-3">
        <main className="col-span-9">
          <RockPaperScissors />
        </main>
        <aside className="col-span-3 ">
          <Scoreboard />
        </aside>
      </div>
    </div>
  );
}
