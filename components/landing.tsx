"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import Head from "next/head";

export default function Landing() {
  const { setActiveSection } = useActiveSectionContext();
  React.useEffect(() => {
    setActiveSection(null);
  }, [setActiveSection]);
  return (
    <>
      <Head>
        <link rel="preload" href="/dk.webp" as="image" />
      </Head>
      <section className="mb-28 max-w-[90rem] text-center lg:mb-0 scroll-mt-[100rem]">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:p-10">
          <div className="flex flex-col max-w-[60rem] space-y-3 lg:space-y-6">
            <h1 className="text-center lg:text-left mb-5 lg:mb-10 mt-4 px-4 text-4xl lg:text-5xl lg:leading-[4rem] space-y-3 lg:space-y-6">
              <p className="">Hi!👋🏾</p>
              <p className="text-left">
                I’m <span className="text-pink-400">Damola Kevwe</span>
              </p>
              <p className="text-left">
                I design & create engaging journeys that build meaningful
                experiences
              </p>
            </h1>
            <div className="flex flex-col lg:flex-row items-start justify-start gap-2 px-4 text-lg font-medium">
              <Link
                href="/work"
                className="group tracking-wide bg-pink-400 text-white font-bold text-2xl lg:text-3xl lg:leading-[3rem] px-6 py-4 flex items-center gap-2 rounded-2xl outline-none hover:scale-110 hover:bg-pink-900 transition"
                prefetch={true}
              >
                Check out my work
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center lg:ml-[-7rem] lg:min-w-[30rem]">
            <Image
              src="/dk.webp"
              alt="Damola's portrait"
              width="549"
              height="549"
              quality="85"
              priority={true}
              className="rounded-full w-36 lg:w-full object-cover shadow-none"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      </section>
    </>
  );
}
