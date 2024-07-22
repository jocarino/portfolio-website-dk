'use client';
import Skills from "@/components/about/Skills";
import Intro from "@/components/about/intro";
import Experience from "@/components/about/experience";
import FloatingButton from "@/components/hoverButton";
import ActiveAboutSectionContextProvider from "@/context/active-about-section-context";
import { useActiveSectionContext } from "@/context/active-section-context";
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from "react";
import Certifications from "@/components/about/Certifications";
import Education from "@/components/about/Education";
import FunFacts from "@/components/about/FunFacts";
import Footer from "@/components/footer";
import SideNavBarAbout from "@/components/sideNavBarAbout";

export default function About() {
  const [open, setOpen] = useState(false);
  const { setActiveSection } = useActiveSectionContext();
  setActiveSection("About");
  return (
    <main className="flex flex-col items-center">
      <ActiveAboutSectionContextProvider>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <div className="grid grid-cols-1 lg:grid-cols-[20rem_1fr] w-full">
            <div>
              <div className="hidden lg:block lg:w-80">
                <SideNavBarAbout />
              </div>
            </div>

            <div className="w-full max-w-screen-xl flex flex-col items-center">
              <Intro />
              <Skills />
              <Experience />
              <Certifications />
              <Education />
              <FunFacts />
            </div>
          </div>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
            <div className="w-full lg:hidden">
              {(open) &&
                <Dialog.Content className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white z-50 overflow-auto">
                  <SideNavBarAbout setIsOpen={setOpen} />
                  <FloatingButton onClick={() => { setOpen(!open) }} />
                </Dialog.Content>}
            </div>
          </Dialog.Portal>

        </Dialog.Root>
        {(!open) && <div className="lg:hidden"><FloatingButton onClick={() => { setOpen(!open) }} /></div>}
      </ActiveAboutSectionContextProvider>
      <Footer />
    </main>
  );
}
