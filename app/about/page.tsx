'use client';
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import SideNavBarAbout from "@/components/sideNavBarAbout";
import ActiveAboutSectionContextProvider from "@/context/active-about-section-context";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { setActiveSection } = useActiveSectionContext();
  setActiveSection("About");
  return (
    <main className="flex flex-col items-center">
      <ActiveAboutSectionContextProvider>
        <div className="flex flex-row">
          <SideNavBarAbout />
          <div className="ml-[20rem] flex flex-col items-center">
            <Intro />
            <Experience />
          </div>
        </div>
      </ActiveAboutSectionContextProvider>
    </main>
  );
}
