"use client";

import type { SectionName, WorkSectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

type ActiveWorkSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeWorkSection: WorkSectionName;
  setActiveWorkSection: React.Dispatch<React.SetStateAction<WorkSectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveWorkSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveWorkSectionContextProvider({
  children,
}: ActiveWorkSectionContextProviderProps) {
  const [activeWorkSection, setActiveWorkSection] = useState<WorkSectionName>("UI Design");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActiveWorkSectionContext.Provider
      value={{
        activeWorkSection: activeWorkSection,
        setActiveWorkSection: setActiveWorkSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveWorkSectionContext.Provider>
  );
}

export function useActiveWorkSectionContext() {
  const context = useContext(ActiveWorkSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveWorkSectionContext must be used within an ActiveWorkSectionContextProvider"
    );
  }

  return context;
}
