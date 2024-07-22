"use client";
import React from "react";
import { useAboutSectionInView } from "@/lib/hooks";
import Wrapper from "../wrapper";
import Paragraph from "../paragraph";
import Title from "../title";

export default function Skills() {
  const { ref } = useAboutSectionInView("Skills", 0.1);
  const skills = [
    "Visual Design", "User-centred Design", "Storytelling", "Prototyping", "Creative Direction", "Typography", "Collaboration",
    "Graphic Design", "Product Design", "Web Design", "Interaction Design", "Branding & Identity", "Design Thinking", "Time Management",
    "Motion Design", "User Research", "User Testing", "Illustration", "Colour & Composition", "Storyboarding", "Video Editing",
  ];

  return (
    <section ref={ref} id="skills" className="scroll-mt-10 lg:scroll-mt-28 mb-9 w-full space-y-9">
      <Wrapper>
        <Title>Skills</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-[178px] gap-y-0">
          {skills.map((skill, index) => (
            <Paragraph key={index}>
              <p className="text-base font-normal leading-[30px]">{skill}</p>
            </Paragraph>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
