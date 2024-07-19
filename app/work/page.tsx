'use client';
import FloatingButton from "@/components/hoverButton";
import SideNavBarWork from "@/components/sideNavBarWork";
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

export default function Work() {
  const [open, setOpen] = useState(false);
  const { setActiveSection } = useActiveSectionContext();
  setActiveSection("Work");

  return (
    <main className="flex flex-col items-center w-full">
      <ActiveWorkSectionContextProvider>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <div className="grid grid-cols-1 sm:grid-cols-[20rem_1fr] w-full">
            <div>
              <div className="hidden sm:block sm:w-80">
                <SideNavBarWork />
              </div>
            </div>

            <div className="w-full max-w-screen-xl flex flex-col items-center">
              <UIDesign />
              <PsychedelicAfrofuturism />
              <GraphicDesign />
              <Cinematography />
              <Photography />
              <Architecture />
            </div>
          </div>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
            <div className="w-full sm:hidden">
              {(open) &&
                <Dialog.Content className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white z-50 overflow-auto">
                  <SideNavBarWork setIsOpen={setOpen} />
                  <FloatingButton onClick={() => { setOpen(!open) }} />
                </Dialog.Content>}
            </div>
          </Dialog.Portal>

        </Dialog.Root>
        {(!open) && <div className="sm:hidden"><FloatingButton onClick={() => { setOpen(!open) }} /></div>}
      </ActiveWorkSectionContextProvider>
    </main >
  );
}
