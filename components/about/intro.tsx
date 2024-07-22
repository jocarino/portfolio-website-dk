"use client";
import React from "react";
import { useAboutSectionInView } from "@/lib/hooks";
import Wrapper from "../wrapper";
import Paragraph from "../paragraph";
import Title from "../title";
import Image from "next/image";

export default function Intro() {
  const { ref } = useAboutSectionInView("Intro", 0.1);

  return (
    <section ref={ref} id="intro" className="scroll-mt-10 sm:scroll-mt-28 mb-9 w-full space-y-4">
      <Wrapper>
        <Title>Hey, I'm Damola Olaleye. I also go by Damola Kevwe.</Title>
        <Paragraph>🗣: "Dah—Morh—Lah"  "Keh-Weh"  "Awe—Lah—Leh—Yeh" </Paragraph>

        <div className="flex flex-col sm:flex-row items-start sm:items-stretch gap-8">
          <div className="flex flex-col max-w-[484px] justify-between space-y-4 flex-grow h-full sm:h-[415px]">
            <div className="space-y-4">
              <Title>I'm a designer and storyteller.</Title>
              <div className="flex flex-wrap items-center gap-2">
                <Paragraph>I'm Nigerian-born</Paragraph>
                <Image src="/ng.png" alt="Nigerian flag" width={20} height={20} className="inline-block" />
                <Paragraph>designer </Paragraph>
                <Paragraph>currently </Paragraph>
                <Paragraph>living in Oxford</Paragraph>
                <Image src="/gb.png" alt="United Kingdom flag" width={20} height={20} className="inline-block" />
                <Paragraph>.</Paragraph>
              </div>
            </div>
            <Paragraph>I consider myself a multidisciplinary designer with interests in UI/UX, graphic design, photography, filmmaking, content creation, art and a passion for visual storytelling.</Paragraph>
            <Paragraph>I enjoy working with Figma, Illustrator and Photoshop though I'm proficient in other design tools.</Paragraph>
          </div>
          <div className="flex-shrink-0">
            <Image src="/dk.gif" alt="Damola Kevwe Banner" width={415} height={415} className="w-full max-w-[415px] h-auto" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}