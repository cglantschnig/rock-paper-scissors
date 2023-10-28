"use client";

import { ScoreboardProvider } from "@/context/ScoreboardContext";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <ScoreboardProvider>{children}</ScoreboardProvider>;
}
