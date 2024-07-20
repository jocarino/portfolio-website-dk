"use client";

import React, { HTMLAttributes } from "react";
import { aboutLinks } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveAboutSectionContext } from "@/context/active-about-section-context";

interface SideNavBarAboutProps extends HTMLAttributes<HTMLDivElement> {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideNavBarAbout: React.FC<SideNavBarAboutProps> = ({ children, setIsOpen: setOpen, ...props }) => {
  const { activeAboutSection, setActiveAboutSection, setTimeOfLastClick } =
    useActiveAboutSectionContext();

  return (
    <nav className="flex flex-col fixed w-[20rem] sm:top-[5rem] left-0 h-full bg-gradient-to-r from-pink-200 to-white" >
      <ul className="flex flex-col w-full items-start justify-start pt-16 text-xl sm:text-2xl font-medium text-black flex-nowrap gap-5">
        {aboutLinks.map((link) => (
          <li
            className="w-full h-3/4 flex items-center justify-center relative"
            key={link.hash}
          >
            <Link
              className={clsx(
                `flex w-full items-center justify-start px-3 py-3 ${activeAboutSection === link.name ? "" : "hover:bg-white/50"} transition`,

                {
                  "text-black":
                    activeAboutSection === link.name,
                }
              )}
              href={link.hash}
              onClick={() => {
                { setOpen && setOpen(false) }
                setActiveAboutSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
            >
              {link.name}

              {link.name === activeAboutSection && (
                <span
                  className="bg-white w-full absolute inset-0 -z-10"
                ></span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav >
  );
}
export default SideNavBarAbout;
