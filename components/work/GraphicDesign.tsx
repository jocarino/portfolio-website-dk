"use client";

import React from "react";
import { useWorkSectionInView } from "@/lib/hooks";
import SectionHeading from "../section-heading";
import Paragraph from "../paragraph";
import Wrapper from "../wrapper";
import Image from "next/image";
import ImageDescription from "../imageDescription";
import Link from "next/link";
import Video from "../video";
import Title from "../title";

export default function GraphicDesign() {
  const { ref } = useWorkSectionInView("Graphic Design", 0.1);


  return (
    <section ref={ref} id="graphic-design" className="scroll-mt-10 sm:scroll-mt-28 mb-28 w-full space-y-9">
      <div id="creative-adult" className="scroll-mt-10 w-full flex flex-col items-center">
        <SectionHeading className="bg-creativeAdult" classNameColorOverlay="bg-[#C99100B2]">Creative Adult</SectionHeading>
        <Wrapper>
          <Paragraph>A podcast series interviewing experienced creatives across different ages about how they manage to stay creative when adulthood often demands sacrificing creativity for stability.</Paragraph>
          <Image src="/ca-site-mockup.png" alt="Site Mockup" width={760} height={427} />
          <div className="flex flex-col sm:flex-row">
            <Image src="/ca-colours.png" alt="Website Colours" width={380} height={213} />
            <Image src="/ca-site-mockup2.png" alt="Site Mockup" width={380} height={213} />
          </div>
          <div className="flex flex-col sm:flex-row">
            <Image src="/ca-site-mockup-merch.png" alt="Merch Mockup" width={380} height={176} />
            <Image src="/ca-site-mockup-merch2.png" alt="Merch Mockup" width={380} height={176} />
          </div>
          <Image src="/ca-site-mockup-display.png" alt="Website Mockup" width={760} height={675} />
          <div className="flex flex-col sm:flex-row">
            <Image src="/ca-illustrations.png" alt="Merch Mockup" width={350} height={340} />
            <Video src="/ca-gif.mov" width={380} height={340} />
          </div>
        </Wrapper>
      </div>
      <div id="verdeverse-graphic-design" className="scroll-mt-10 w-full flex flex-col items-center">
        <SectionHeading className="bg-verdeVerseBackground" classNameColorOverlay="bg-[#391C2E4D]">VerdeVerse</SectionHeading>
        <Wrapper>
          <Paragraph>Logo Design & Brand Identity for an app that streamlines plant care, seamlessly integrating with automated watering, simplifying life for busy plant lovers.</Paragraph>
          <Image src="/verderverse-gd.png" alt="VerdeVerse graphic design" width={760} height={1358} />
        </Wrapper>
      </div>
      <div id="ai-storyboarding" className="scroll-mt-10 w-full flex flex-col items-center">
        <SectionHeading className="bg-aiStoryBoarding" classNameColorOverlay="bg-[#0A0A0A91]">AI Storyboarding</SectionHeading>
        <Wrapper>
          <Paragraph>The use of AI to generate a visual representation of how a story will play out, scene by scene.</Paragraph>
          <Title>Story Synopsis</Title>
          <Paragraph>A young black woman navigates through everyday life with her friends, encountering microaggressions and stereotyping along the way, leading her to question the impact of well-intentioned yet dismissive statements like "I don't see colour" and wonder if her experiences are due to the colour of her skin.</Paragraph>
          <Image src="/cause-im-black.png" alt="Animation Styles Moodboard" width={760} height={1074} />
          <ImageDescription>Animation Styles Moodboard</ImageDescription>
          <Image src="/cause-im-black2.png" alt="Animation Styles Moodboard" width={760} height={537} />
        </Wrapper>
      </div>
      <div id="latoja" className="scroll-mt-10 w-full flex flex-col items-center">
        <SectionHeading className="bg-latoja" classNameColorOverlay="bg-[#9C0000BF]">Latoja</SectionHeading>
        <Wrapper>
          <Paragraph>Some of my designs while working for Latoja Mart as Visual Designer where I crafted impactful and compelling designs across both print and digital media, designed engaging social media graphics and imagery, leveraging design expertise to create persuasive flyers and advertisements for effective marketing and promotion. These efforts were instrumental in expanding the client base and driving business growth.</Paragraph>
          <Image src="/latoja-app.png" alt="Latoja App Design" width={760} height={1074} />
        </Wrapper>
      </div>
      <div id="buganow" className="scroll-mt-10 w-full flex flex-col items-center">
        <SectionHeading className="bg-bunganow" classNameColorOverlay="bg-[#001CB0B0]">Buganow</SectionHeading>
        <Wrapper>
          <Paragraph>Some of my designs at Buganow, an e-commerce company, where I mastered the unique visual language of house brands, ensuring seamless integration across all social media platforms and content. I innovatively crafted promotional materials and demonstrated precision in image retouching and manipulation, contributing to the creation of visually compelling and cohesive brand narratives.</Paragraph>
          <Image src="/buganow.gif" alt="Buganow" width={760} height={428} />
        </Wrapper>
      </div>
      <div id="others" className="scroll-mt-10 w-full flex flex-col items-center">
        <SectionHeading className="bg-others" classNameColorOverlay="bg-[#FF45BD94]">Others</SectionHeading>
        <Wrapper>
          <Paragraph>Here are some of the works I’ve also done while working as a freelance designer. Some contract jobs, personal projects & other design.</Paragraph>
          <Image src="/others-gif.gif" alt="Other works" width={760} height={428} />
        </Wrapper>
      </div>
    </section >
  );
}
