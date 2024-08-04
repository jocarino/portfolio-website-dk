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
    <section
      ref={ref}
      id="certifications"
      className="scroll-mt-10 lg:scroll-mt-28 mb-9 w-full space-y-9"
    >
      <Wrapper>
        <Title variant="about">Certifications</Title>
        <div className="lg:divide-y-0 divide-y divide-dashed divide-pink-400/[.5] space-y-6 lg:space-y-8 lg:divide-x-0">
          <div>
            <Paragraph>
              Google UX Design Professional Certificate, Jun. 2024
            </Paragraph>
            <ImageDescription>Grow with Google</ImageDescription>
          </div>
          <div>
            <Paragraph>Web Design Bootcamp, Sep. 2019</Paragraph>
            <ImageDescription>Webflow</ImageDescription>
          </div>
          <div>
            <Paragraph>
              The Complete App Design Course: UX, Ul and Design Thinking, Aug.
              2019
            </Paragraph>
            <ImageDescription>Udemy</ImageDescription>
          </div>
          <div>
            <Paragraph>
              Design Rules: Principle + Practices for Great Ul Design, Jul. 2019
            </Paragraph>
            <ImageDescription>Udemy</ImageDescription>
          </div>
          <div>
            <Paragraph>
              Learn Figma: UI/UX Design Essential Training, Jul. 2019
            </Paragraph>
            <ImageDescription>Udemy</ImageDescription>
          </div>
          <div>
            <Paragraph>Graphic Design Bootcamp, Jun. 2019</Paragraph>
            <ImageDescription>Udemy</ImageDescription>
          </div>
          <div>
            <Paragraph>Visual and Graphic Design, Jun. 2019</Paragraph>
            <ImageDescription>Alison</ImageDescription>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
