"use client";
import React from "react";
import { useAboutSectionInView } from "@/lib/hooks";
import Wrapper from "../wrapper";
import Paragraph from "../paragraph";
import Title from "../title";
import ImageDescription from "../imageDescription";

export default function FunFacts() {
  const { ref } = useAboutSectionInView("Fun Facts", 0.1);

  return (
    <section ref={ref} id="fun-facts" className="scroll-mt-10 sm:scroll-mt-28 mb-28 w-full space-y-9">
      <Wrapper>
        <Title>Fun Facts</Title>
        <Paragraph>I’ve lived in 4 countries 🌍 and visited over 15 in my short lifetime. I enjoy traveling.</Paragraph>
        <ImageDescription>I believe exposure to new environments, opinions and cultures is one of the most effective ways to decrease implicit bias while increasing knowledge, understanding & awareness of the world we live in and its varied occupants.</ImageDescription>
        <Paragraph>If you haven’t guessed by now, my favourite colour is <span className="text-pink-400">PINK</span>.</Paragraph>
      </Wrapper>
    </section>
  );
}