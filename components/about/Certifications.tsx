"use client";
import React from "react";
import { useAboutSectionInView } from "@/lib/hooks";
import Wrapper from "../wrapper";
import Paragraph from "../paragraph";
import Title from "../title";
import ImageDescription from "../imageDescription";

export default function Certifications() {
  const { ref } = useAboutSectionInView("Certifications", 0.1);

  return (
    <section ref={ref} id="certifications" className="scroll-mt-10 sm:scroll-mt-28 mb-28 w-full space-y-9">
      <Wrapper>
        <Title>Certifications</Title>
        <Paragraph>Google UX Design Professional Certificate, Jun. 2024</Paragraph>
        <ImageDescription>Grow with Google</ImageDescription>
        <Paragraph>Web Design Bootcamp, Sep. 2019</Paragraph>
        <ImageDescription>Webflow</ImageDescription>
        <Paragraph>The Complete App Design Course: UX, Ul and Design Thinking, Aug. 2019</Paragraph>
        <ImageDescription>Udemy</ImageDescription>
        <Paragraph>Design Rules: Principle + Practices for Great Ul Design, Jul. 2019</Paragraph>
        <ImageDescription>Udemy</ImageDescription>
        <Paragraph>Learn Figma: UI/UX Design Essential Training, Jul. 2019</Paragraph>
        <ImageDescription>Udemy</ImageDescription>
        <Paragraph>Graphic Design Bootcamp, Jun. 2019</Paragraph>
        <ImageDescription>Udemy</ImageDescription>
        <Paragraph>Visual and Graphic Design, Jun. 2019</Paragraph>
        <ImageDescription>Alison</ImageDescription>
      </Wrapper>
    </section>
  );
}