"use client";

import type { AboutSectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

type ActiveAboutSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeAboutSection: AboutSectionName;
  setActiveAboutSection: React.Dispatch<React.SetStateAction<AboutSectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveAboutSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveAboutSectionContextProvider({
  children,
}: ActiveAboutSectionContextProviderProps) {
  const [activeAboutSection, setActiveAboutSection] = useState<AboutSectionName>("Intro");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActiveAboutSectionContext.Provider
      value={{
        activeAboutSection: activeAboutSection,
        setActiveAboutSection: setActiveAboutSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveAboutSectionContext.Provider>
  );
}

export function useActiveAboutSectionContext() {
  const context = useContext(ActiveAboutSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveAboutSectionContext must be used within an ActiveAboutSectionContextProvider"
    );
  }

  return context;
}
