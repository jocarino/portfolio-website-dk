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

export default function Cinematography() {
  const { ref } = useWorkSectionInView("Cinematography", 0.1);


  return (
    <section ref={ref} id="cinematography" className="scroll-mt-10 sm:scroll-mt-28 mb-28 w-full space-y-9">
      <div id="waiting-for-you" className="scroll-mt-10 w-full flex flex-col">
        <SectionHeading className="bg-waitingForYou" classNameColorOverlay="bg-[#0000006B]">Waiting For You</SectionHeading>
        <Wrapper>
          <Paragraph>1st A.C for “Waiting For You” award winning short film</Paragraph>
          <Title>Movie Synopsis</Title>
          <Paragraph>The gifted and talented Juliet is awarded a full scholarship at a prestigious Music School but must convince her reluctant stubborn father to let her attend. In the process of coming to terms with his refusal of her request and with the help of her mother, she discovers some long-forgotten truths about him. She finally finds a way to win him over, even though the sacrifice he unwillingly makes will be more devastating than they both can bear.</Paragraph>
          <Paragraph>A podcast series interviewing experienced creatives across different ages about how they manage to stay creative when adulthood often demands sacrificing creativity for stability.</Paragraph>
          <Image src="/waiting-for-you-screenshot.png" alt="Waiting for You - play on YouTube" width={760} height={427} />
          <ImageDescription><Link href="https://www.youtube.com/watch?v=vRw6hD5x904&t=699s&ab_channel=EbonyLifeCreativeAcademy" className="underline">Watch on YouTube</Link></ImageDescription>
          <Title>Awards</Title>
          <Paragraph>Multiple Awards EbonyLife Creative Academy Awards: Best Cinematography, Best Picture and 7 others</Paragraph>
          <Paragraph>Official Selection: Lagos Fringe Festival 2021</Paragraph>
          <Paragraph>Official Selection: International Short Film Festival 2021</Paragraph>
          <Paragraph>Official Selection: The Paus Premieres Festival 2021</Paragraph>
        </Wrapper>
      </div>
      <div id="the-cavemen-live" className="scroll-mt-10 w-full flex flex-col">
        <SectionHeading className="bg-theCavemenLive" classNameColorOverlay="bg-[#0000006B]">The Cavemen Live</SectionHeading>
        <Wrapper>
          <Paragraph> Worked as one of the Cinematographers & Photographers for The Cavemen Live Concert, from backstage coverage, BTS and the main show to the end of the concert.</Paragraph>
          <Image src="/cavemen-poster.png" alt="The Cavemen Live - play on YouTube" width={760} height={791} />
          <Image src="/cavemen-post.png" alt="The Cavemen Live - tweet post" width={760} height={690} />
          <ImageDescription>Tweet regarding coverage</ImageDescription>
        </Wrapper>
      </div>
      <div id="omo-atoke" className="scroll-mt-10 w-full flex flex-col">
        <SectionHeading className="bg-omoAtoke" classNameColorOverlay="bg-[#0000006B]">Omo Atoke</SectionHeading>
        <Wrapper>
          <Paragraph>Camera Assistant for “Omo Atoke” short film</Paragraph>
          <Title>Movie Synopsis</Title>
          <Paragraph>When a young woman returns from abroad to spend time with her ailing mother, she discovers a dark secret which she has been carrying with her all her life. Her mother’s sudden passing, forces her to confront the people who destroyed her mother’s life and in a final act of defiance, she publicly exposes them for the despicable fraudsters they are.</Paragraph>
          <Image src="/omo-atoke-yt.png" alt="Omo Atoke - play on YouTube" width={760} height={430} />
          <ImageDescription><Link href="https://www.youtube.com/watch?v=2Y9rFU_4Svc&ab_channel=EbonyLifeCreativeAcademy">Omo Atoke - play on YouTube</Link></ImageDescription>
        </Wrapper>
      </div>
      <div id="others-cinematography" className="scroll-mt-10 w-full flex flex-col">
        <SectionHeading className="bg-othersCinematography" classNameColorOverlay="bg-[#000000A1]">Others</SectionHeading>
        <Wrapper>
          <Title>Small Talk</Title>
          <Paragraph>Director of Photography for “Small Talk" short film, one of the few short films that was shot in 24 hours and edited within a week.</Paragraph>
          <div className="flex flex-col sm:space-x-0 space-y-2">
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
              <Image src="/others-1.png" alt="Small Talk film" width={376} height={221} />
              <Image src="/others-2.png" alt="Small Talk film" width={376} height={221} />
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
              <Image src="/others-3.png" alt="Small Talk film" width={376} height={221} />
              <Image src="/others-4.png" alt="Small Talk film" width={376} height={221} />
            </div>
            <Title>Film Noir</Title>
            <Paragraph>Created a short film noir style scene as part of the lessons during my Cinematography and Lighting course at a EbonyLife Creative Academy.</Paragraph>
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
              <Image src="/noir-1.png" alt="Small Talk film" width={376} height={212} />
              <Image src="/noir-2.png" alt="Small Talk film" width={376} height={212} />
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
              <Image src="/noir-3.png" alt="Small Talk film" width={376} height={212} />
              <Image src="/noir-4.png" alt="Small Talk film" width={376} height={212} />
            </div>
          </div>
          <Title>YouTube</Title>
          <Paragraph>Multiple videos shot and edited for my YouTube channel, including content creation and branding for my personal brand.</Paragraph>
        </Wrapper>
      </div>
    </section >
  );
}
