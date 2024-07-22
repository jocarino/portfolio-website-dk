"use client";

import React, { HTMLAttributes } from "react";
import { workLinks } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveWorkSectionContext } from "@/context/active-work-section-context";

interface SideNavBarWorkProps extends HTMLAttributes<HTMLDivElement> {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNavBarWork: React.FC<SideNavBarWorkProps> = ({ children, setIsOpen: setOpen, ...props }) => {
  const { activeWorkSection, setActiveWorkSection, setTimeOfLastClick } =
    useActiveWorkSectionContext();

  return (
    <nav className="flex flex-col fixed w-[20rem] lg:top-[5rem] left-0 h-full bg-gradient-to-r from-pink-200 to-white">
      <ul className="flex flex-col w-full items-start justify-start pt-16 text-xl lg:text-2xl font-medium text-black flex-nowrap gap-2 lg:gap-5 overflow-scroll lg:overflow-hidden">
        {workLinks.map((link) => (
          <li
            className="w-full h-3/4 flex flex-col items-center justify-center relative"
            key={link.hash}
          >
            <Link
              className={clsx(
                `flex w-full items-center justify-start px-3 py-3 ${activeWorkSection === link.name ? "" : "hover:bg-white/50"} transition`,

                {
                  "text-black":
                    activeWorkSection === link.name,
                }
              )}
              href={link.hash}
              onClick={() => {
                { setOpen && setOpen(false) }
                setActiveWorkSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
            >
              {link.name}

              {link.name === activeWorkSection && (
                <span
                  className="bg-white w-full absolute inset-0 -z-10"
                ></span>
              )}
            </Link>
            {
              link.name === activeWorkSection && link?.subLinks.length > 0 && (
                <ul className="flex flex-col py-1 pl-[55px] w-full items-start justify-start bg-customGradient font-normal text-black flex-nowrap gap-2">
                  {link?.subLinks.map((subLink) => (
                    <li
                      className=" relative"
                      key={subLink.hash}
                    >
                      <Link
                        href={subLink.hash}
                        onClick={() => {
                          { setOpen && setOpen(false) }

                        }}
                      >
                        {subLink.name}</Link> </li>
                  ))}
                </ul>
              )
            }
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default SideNavBarWork;