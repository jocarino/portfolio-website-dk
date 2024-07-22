'use client';
import FloatingButton from "@/components/hoverButton";
import UIDesign from "@/components/work/UIDesign";
import { useActiveSectionContext } from "@/context/active-section-context";
import ActiveWorkSectionContextProvider from "@/context/active-work-section-context";
import { useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import PsychedelicAfrofuturism from "@/components/work/PsychedelicAfrofuturism";
import GraphicDesign from "@/components/work/GraphicDesign";
import Cinematography from "@/components/work/Cinematography";
import Photography from "@/components/work/Photography";
import Architecture from "@/components/work/Architecture";
import Footer from "@/components/footer";
import SideNavBarWork from "@/components/sideNavBarWork";

export default function Work() {
  const [open, setOpen] = useState(false);
  const { setActiveSection } = useActiveSectionContext();
  setActiveSection("Work");

  return (
    <main className="flex flex-col items-center w-full max-w-[100vw] overflow-x-hidden">
      <ActiveWorkSectionContextProvider>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,20rem)_1fr] w-full max-w-[100vw]">
            <div>
              <div className="hidden lg:block lg:w-80 w-0">
                <SideNavBarWork />
              </div>
            </div>

            <div className="w-full max-w-full flex flex-col items-center">
              <UIDesign />
              <PsychedelicAfrofuturism />
              <GraphicDesign />
              <Cinematography />
              <Photography />
              <Architecture />
            </div>
          </div>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 z-[998]" />
            <div className="w-full lg:hidden">
              <Dialog.Content className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white z-[999] overflow-auto">
                <SideNavBarWork setIsOpen={setOpen} />
                {(open) &&
                  <FloatingButton onClick={() => { setOpen(!open) }} />}
              </Dialog.Content>
            </div>
          </Dialog.Portal>

        </Dialog.Root>
        {(!open) && <div className="lg:hidden"><FloatingButton onClick={() => { setOpen(!open) }} /></div>}
      </ActiveWorkSectionContextProvider>
      <Footer />
    </main >
  );
}
