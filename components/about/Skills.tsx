"use client";
import React from "react";
import { useAboutSectionInView } from "@/lib/hooks";
import Wrapper from "../wrapper";
import Paragraph from "../paragraph";
import Title from "../title";

export default function Skills() {
  const { ref } = useAboutSectionInView("Skills", 0.1);
  const skillsCol1 = ["Visual Design", "User-centred Design", "Storytelling", "Prototyping", "Creative Direction",
    "Typography", "Collaboration",];
  const skillsCol2 = ["Graphic Design", "Product Design", "Web Design", "Interaction Design", "Branding & Identity", "Design Thinking",
    "Time Management",];
  const skillsCol3 = ["Motion Design", "User Research", "User Testing", "Illustration", "Colour & Composition", "Storyboarding",
    "Video Editing",];
  return (
    <section ref={ref} id="skills" className="scroll-mt-10 sm:scroll-mt-28 mb-28 w-full space-y-9">
      <Wrapper>
        <Title>Skills</Title>
        <div className="flex flex-col sm:flex-row sm:space-x-[178px]">
          <div>
            {skillsCol1.map((skill, index) => (
              <Paragraph key={index}><p className="text-base font-normal leading-[30px]">{skill}</p></Paragraph>
            ))}
          </div>
          <div>
            {skillsCol2.map((skill, index) => (
              <Paragraph key={index}><p className="text-base font-normal leading-[30px]">{skill}</p></Paragraph>
            ))}
          </div>
          <div>
            {skillsCol3.map((skill, index) => (
              <Paragraph key={index}><p className="text-base font-normal leading-[30px]">{skill}</p></Paragraph>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}