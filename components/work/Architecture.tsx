"use client";

import React from "react";
import { useWorkSectionInView } from "@/lib/hooks";
import SectionHeading from "../section-heading";
import Wrapper from "../wrapper";
import Image from "next/image";
import ImageDescription from "../imageDescription";
import Title from "../title";
import Paragraph from "../paragraph";
import Video from "../video";

export default function Architecture() {
  const { ref } = useWorkSectionInView("Architecture", 0.1);


  return (
    <section ref={ref} id="architecture" className="scroll-mt-10 lg:scroll-mt-28 mb-28 w-full space-y-9">
      <div id="hand-drawn" className="scroll-mt-10 w-full flex flex-col items-start">
        <SectionHeading className="bg-handDrawn" classNameColorOverlay="bg-gray-700/85">Hand Drawn</SectionHeading>
        <Wrapper>
          <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0">
            <div>
              <Image src="/bed-1.png" alt="4 Bed Maisonette Ground Floor (Working Drawing)" width={454} height={409} />
              <ImageDescription>4 Bed Maisonette Ground Floor (Working Drawing)</ImageDescription>
            </div>
            <div >
              <Image src="/bed-2.png" alt="4 Bed Maisonette Upper Floor (Working Drawing)" width={478} height={409} />
              <ImageDescription>4 Bed Maisonette Upper Floor (Working Drawing)</ImageDescription>
            </div>
          </div>
          <Image src="/bed-3.png" alt="3-Bedroom Apartment (Presentation Drawing)" width={940} height={495} />
          <ImageDescription>3-Bedroom Apartment (Presentation Drawing)</ImageDescription>
          <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0">
            <div>
              <Image src="/bed-4.png" alt="2-Bedroom Apartment (Presentation Drawing)" width={454} height={284} />
              <ImageDescription>2-Bedroom Apartment (Presentation Drawing)</ImageDescription>
            </div>
            <div >
              <Image src="/bed-5.png" alt="1-Bedroom Apartment (Presentation Drawing)" width={478} height={284} />
              <ImageDescription>1-Bedroom Apartment (Presentation Drawing)</ImageDescription>
            </div>
          </div>
        </Wrapper>
      </div>
      <div id="cad" className="scroll-mt-10 w-full flex flex-col items-start">
        <SectionHeading className="bg-cad" classNameColorOverlay="bg-[#0000006B]">CAD</SectionHeading>
        <Wrapper>
          <Title>5-Bedroom Duplex</Title>
          <div className="flex flex-col  lg:space-x-0 space-y-2">
            <Image src="/cad-5-1.png" alt="5-Bedroom Duplex" width={940} height={594} />
            <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2  lg:space-y-0">
              <Image src="/cad-5-2.png" alt="5-Bedroom Duplex" width={454} height={289} />
              <Image src="/cad-5-3.png" alt="5-Bedroom Duplex" width={478} height={289} />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2  lg:space-y-0">
              <Image src="/cad-5-4.png" alt="5-Bedroom Duplex" width={454} height={387} />
              <Image src="/cad-5-5.png" alt="5-Bedroom Duplex" width={478} height={387} />
            </div>
            <Title>4-Bedroom Maisonette</Title>
            <Image src="/cad-4-1.png" alt="4-Bedroom Maisonette" width={940} height={703} />
            <Image src="/cad-4-3.png" alt="4-Bedroom Maisonette" width={940} height={460} />
          </div>
        </Wrapper>
      </div>
      <div id="urban-cultures" className="scroll-mt-10 w-full flex flex-col items-start">
        <SectionHeading className="bg-urbanCultures" classNameColorOverlay="bg-[#0000006B]">Urban Cultures</SectionHeading>
        <Wrapper>
          <Paragraph>During my Masters Degree in Architecture, we took part in workshops, lectures and discussions, which all formed the basis of this module to introduce us to a broad range of contemporary cultural themes. We also engaged with techniques focusing on perception, drawing, materiality, lighting and models. The aim was to help us to question your previous understandings of architecture and its relation to urban culture.</Paragraph>
          <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0">
            <Image src="/collage-1.png" alt="Collage" width={454} height={339} />
            <Image src="/collage-2.png" alt="Collage" width={478} height={338} />
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0">
            <Image src="/collage-3.png" alt="Collage" width={454} height={320} />
            <Image src="/collage-4.png" alt="Collage" width={478} height={320} />
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2  lg:space-y-0">
            <Image src="/collage-5.png" alt="Collage" width={454} height={320} />
            <Image src="/collage-6.png" alt="Collage" width={478} height={320} />
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2  lg:space-y-0">
            <Image src="/collage-7.png" alt="Collage" width={454} height={642} />
            <Image src="/collage-8.png" alt="Collage" width={478} height={642} />
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2  lg:space-y-0">
            <Image src="/collage-9.png" alt="Collage" width={454} height={321} />
            <Image src="/collage-10.png" alt="Collage" width={478} height={321} />
          </div>
        </Wrapper>
      </div>
      <div id="architecture-and-city" className="scroll-mt-10 w-full flex flex-col items-start">
        <SectionHeading className="bg-architectureAndCity" classNameColorOverlay="bg-[#0000006B]">Architecture and the City</SectionHeading>
        <Wrapper>
          <Paragraph>During my Masters Degree, we took part workshops and lectures to explore the meanings of time between architecture and the city. In the workshop, film and writing was utilised to explore strategies of time. The detail and range of time is explored through camera movement, lighting, sound, story writing and editing as it relates to cultural themes, to define the experience of architecture through the perception of artefact and space.</Paragraph>
          <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2  lg:space-y-0">
            <Image src="/ac-1.png" alt="Architecture and City" width={454} height={302} />
            <Image src="/ac-2.png" alt="Architecture and City" width={478} height={302} />
          </div>
          <Image src="/ac-3.png" alt="Architecture and City" width={940} height={627} />
          <Image src="/ac-4.png" alt="Architecture and City" width={940} height={627} />
          <Image src="/ac-5.png" alt="Architecture and City" width={940} height={627} />
        </Wrapper>
      </div>
      <div id="advanced-design" className="scroll-mt-10 w-full flex flex-col items-start">
        <SectionHeading className="bg-aad" classNameColorOverlay="bg-[#0000006B]">Advanced Architectural Design</SectionHeading>
        <Wrapper>
          <Title>Semester I</Title>
          <Paragraph>For this studio based design course, we were introduced to a range of techniques and methodologies to produce an expansive variety of work. The work we did was then developed into a set of design principles to be applied to a designed artefact.</Paragraph>
          <Title>Semester II</Title>
          <Paragraph>Our first semester work and investigations were brought together through developing a proposal and design of a personal project. This course placed an emphasis on the importance of developing an ability to demonstrate conceptual clarity, to locate our ideas in the spectrum of current and past architecture, maintaining a strong link between concept and production.</Paragraph>
          <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2  lg:space-y-0">
            <Image src="/aad-1.jpg" alt="Architecture and City" width={466} height={312} />
            <Image src="/aad-2.jpg" alt="Architecture and City" width={466} height={312} />
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2  lg:space-y-0">
            <Image src="/aad-3.jpg" alt="Architecture and City" width={466} height={352} />
            <Image src="/aad-4.jpg" alt="Architecture and City" width={466} height={352} />
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2  lg:space-y-0">
            <Image src="/aad-5.jpg" alt="Architecture and City" width={466} height={463} />
            <Image src="/aad-6.jpg" alt="Architecture and City" width={466} height={463} />
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2  lg:space-y-0">
            <Image src="/aad-7.png" alt="Architecture and City" width={466} height={464} />
            <Image src="/aad-8.png" alt="Architecture and City" width={466} height={464} />
          </div>
          <Video src="/aad-video.mp4" width={940} height={528} />
        </Wrapper>
      </div>

    </section >
  );
}
