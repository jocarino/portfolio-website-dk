"use client";
import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-white">
      <nav className="flex justify-between h-14 lg:h-20 px-4 lg:px-8">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setActiveSection(null)}
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={50}
            height={50}
            className="h-8 w-auto lg:h-12"
          />
        </Link>
        <ul className="flex items-center justify-end space-x-2 lg:space-x-4 text-xl lg:text-2xl font-medium text-black">
          {links.map((link) => (
            <li
              className="h-full flex items-center justify-center relative"
              key={link.name}
            >
              <Link
                className={clsx(
                  "flex items-center justify-center px-2 py-1 lg:px-3 lg:py-2 transition",
                  {
                    "text-white": activeSection === link.name,
                    "hover:text-pink-400": activeSection !== link.name,
                  }
                )}
                href={link.path}
                onClick={() => setActiveSection(link.name)}
              >
                {link.name}
                {link.name === activeSection && (
                  <span className="bg-pink-400 rounded-sm absolute inset-0 -z-10"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}