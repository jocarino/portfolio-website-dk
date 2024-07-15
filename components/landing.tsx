"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Landing() {
    const { activeSection, setActiveSection, } = useActiveSectionContext();
    setActiveSection(null);
    return (
        <section
            className="mb-28 max-w-[90rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            <div className="flex flex-col-reverse sm:flex-row items-center justify-center ">
                <div className="flex flex-col max-w-[50rem] space-y-3 sm:space-y-6">
                    <h1
                        className="text-center sm:text-left mb-5 sm:mb-10 mt-4 px-4 text-4xl sm:text-[64px] sm:leading-[80px] sm:text-4xl space-y-3 sm:space-y-6"
                    >
                        <p className="">Hi!👋🏾</p>
                        <p className="text-left">I’m{" "}<span className="text-pink-400">Damola Kevwe</span></p>
                        <p className="text-left">I design & create engaging journeys that build meaningful experiences</p>
                    </h1>
                    <div
                        className="flex flex-col sm:flex-row items-start justify-start gap-2 px-4 text-lg font-medium"
                    >
                        <Link
                            href="/work"
                            className="group bg-pink-400 text-white font-bold text-2xl sm:text-[40px] sm:leading-[50px] px-6 py-4 flex items-center gap-2 rounded-2xl outline-none hover:scale-110 hover:bg-pink-900 transition"
                            onClick={() => {
                            }}
                        >
                            Check out my work
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center sm:ml-[-8rem]">
                    <Image
                        src="/dk.png"
                        alt="Damola's portrait"
                        width="549"
                        height="549"
                        quality="95"
                        priority={true}
                        className="rounded-full w-48 sm:w-full object-cover shadow-none"
                    />
                </div>
            </div>

        </section >
    );
}
