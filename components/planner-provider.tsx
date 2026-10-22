"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

import type { SegmentId, SizeId } from "@/lib/planner";

type PlannerState = {
  segment: SegmentId;
  size: SizeId;
  setSegment: (segment: SegmentId) => void;
  setSize: (size: SizeId) => void;
};

const PlannerContext = createContext<PlannerState | null>(null);

/**
 * The hero tiles and the planner section pick the same segment, so the choice
 * lives above both of them.
 */
export function PlannerProvider({ children }: { children: ReactNode }) {
  const [segment, setSegment] = useState<SegmentId>("bedrift");
  const [size, setSize] = useState<SizeId>("m");

  const value = useMemo(
    () => ({ segment, size, setSegment, setSize }),
    [segment, size],
  );

  return <PlannerContext.Provider value={value}>{children}</PlannerContext.Provider>;
}

export function usePlanner(): PlannerState {
  const context = useContext(PlannerContext);

  if (!context) {
    throw new Error("usePlanner must be used inside a PlannerProvider");
  }

  return context;
}
