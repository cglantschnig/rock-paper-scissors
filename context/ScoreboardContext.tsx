import { ReactNode, createContext, useContext, useState } from "react";

type ScoreboardProviderProps = {
  children: ReactNode;
};

type ScoreItem = {
  name: string;
  score: number;
};

type ScoreboardContextType = {
  scores: ScoreItem[];
  addScore: (name: string) => void;
};

const ScoreboardContext = createContext<ScoreboardContextType | null>(null);

export function useScoreboardContext() {
  const value = useContext(ScoreboardContext);
  if (value == null) throw Error("Cannot use outside of ScoreboardProvider");

  return value;
}

export function ScoreboardProvider({ children }: ScoreboardProviderProps) {
  const [scoreMap, setScores] = useState<Record<string, number>>({});

  function addScore(name: string) {
    const oldScore = scoreMap[name] || 0;
    setScores({
      ...scoreMap,
      [name]: oldScore + 1,
    });
  }

  return (
    <ScoreboardContext.Provider
      value={{
        addScore,
        scores: Object.entries(scoreMap)
          .map(([key, value]) => ({
            name: key,
            score: value,
          }))
          .sort((a, b) => b.score - a.score),
      }}
    >
      {children}
    </ScoreboardContext.Provider>
  );
}
