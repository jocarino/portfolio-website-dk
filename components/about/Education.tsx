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
    <section ref={ref} id="education" className="scroll-mt-10 sm:scroll-mt-28 mb-28 w-full space-y-9">
      <Wrapper>
        <Title>Education</Title>
        <Paragraph>Covenant University, 2019</Paragraph>
        <ImageDescription>Bachelor of Science, Architecture</ImageDescription>
        <Paragraph>Oxford Brookes University, 2023</Paragraph>
        <ImageDescription>Master of Architecture, Architecture</ImageDescription>
      </Wrapper>
    </section>
  );
}