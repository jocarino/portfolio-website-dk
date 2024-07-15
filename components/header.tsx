"use client";

import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";

export default function Header() {
  const { activeSection, setActiveSection, } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <nav className="flex justify-between fixed h-14 sm:h-[5rem] top-0 w-full pl-3 sm:pl-[51px] pr-3 sm:pr-[75px] bg-white">
        <Link href="/" className="flex items-center" onClick={() => {
          setActiveSection(null);
        }}>
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={50}
            height={50}
            className="h-10 sm:h-auto"
          />
        </Link>
        <ul className="flex sm:w-[22rem] flex-wrap items-center justify-center gap-y-1 text-xl sm:text-[1.5rem] font-medium text-black ">
          {links.map((link) => (
            <li
              className="h-3/4 flex items-center justify-center relative"
              key={link.name}
            >
              <Link
                className={clsx(
                  `flex w-full items-center justify-center px-3 py-3 ${activeSection === link.name ? "" : "hover:text-pink-400 "} transition `,
                  {
                    "text-white":
                      activeSection === link.name,
                  }
                )}
                href={link.path}
                onClick={() => {
                  setActiveSection(link.name);
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <span
                    className="bg-pink-400 rounded-sm absolute inset-0 -z-10"
                  ></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header >
  );
}
