"use client";

import React from "react";
import { useWorkSectionInView } from "@/lib/hooks";
import SectionHeading from "../section-heading";
import Wrapper from "../wrapper";
import Image from "next/image";

export default function Photography() {
  const { ref } = useWorkSectionInView("Photography", 0.1);

  return (
    <section
      ref={ref}
      id="photography"
      className="scroll-mt-10 lg:scroll-mt-28 mb-28 w-full space-y-9"
    >
      <SectionHeading
        className="bg-photography"
        classNameColorOverlay="bg-blue-700/50"
      >
        Photography
      </SectionHeading>
      <Wrapper>
        <div className="grid grid-cols-[47fr_53fr] max-w-fit overflow-x-auto gap-1 items-start">
          <div className="flex flex-col space-y-1">
            <Image
              src="/photo-1.webp"
              alt="Photograph"
              width={466}
              height={351}
            />
            <Image
              src="/photo-3.webp"
              alt="Photograph"
              width={466}
              height={696}
            />
            <Image
              src="/photo-6.webp"
              alt="Photograph"
              width={466}
              height={311}
            />
            <Image
              src="/photo-8.webp"
              alt="Photograph"
              width={466}
              height={465}
            />
            <Image
              src="/photo-10.webp"
              alt="Photograph"
              width={466}
              height={556}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <Image
              src="/photo-2.webp"
              alt="Photograph"
              width={527}
              height={351}
            />
            <Image
              src="/photo-4.webp"
              alt="Photograph"
              width={527}
              height={212}
            />
            <Image
              src="/photo-5.webp"
              alt="Photograph"
              width={527}
              height={527}
            />
            <Image
              src="/photo-7.webp"
              alt="Photograph"
              width={527}
              height={351}
            />
            <Image
              src="/photo-9.webp"
              alt="Photograph"
              width={527}
              height={799}
            />
          </div>
        </div>
        <Image src="/photo-11.webp" alt="Photograph" width={999} height={768} />
      </Wrapper>
    </section>
  );
}
