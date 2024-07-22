"use client";
import React from "react";
import { useAboutSectionInView } from "@/lib/hooks";
import Wrapper from "../wrapper";
import Paragraph from "../paragraph";
import Title from "../title";
import ImageDescription from "../imageDescription";

export default function Education() {
  const { ref } = useAboutSectionInView("Education", 0.1);

  return (
    <section ref={ref} id="education" className="scroll-mt-10 sm:scroll-mt-28 mb-9 w-full space-y-9">
      <Wrapper>
        <Title>Education</Title>
        <div className="sm:divide-y-0 divide-y divide-dashed divide-pink-400/[.5] space-y-6 sm:space-y-8 sm:divide-x-0">
          <div>
            <Paragraph>Covenant University, 2019</Paragraph>
            <ImageDescription>Bachelor of Science, Architecture</ImageDescription>
          </div>
          <div>
            <Paragraph>Oxford Brookes University, 2023</Paragraph>
            <ImageDescription>Master of Architecture, Architecture</ImageDescription>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}