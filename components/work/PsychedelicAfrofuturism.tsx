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

export default function PsychedelicAfrofuturism() {
  const { ref } = useWorkSectionInView("Psychedelic Afrofuturism", 0.1);


  return (
    <section ref={ref} id="psychedelic-afrofuturism" className="scroll-mt-10 sm:scroll-mt-28 mb-28 w-full space-y-9">
      <SectionHeading className="bg-psychedelicAfrofuturism overflow-hidden bg-[length:250%_auto] bg-[center_bottom_-35rem] sm:bg-[length:100%] sm:bg-[center_bottom_-40rem]" classNameColorOverlay="bg-[#644B5B4D]">Psychedelic Afrofuturism</SectionHeading>
      <Wrapper>
        <Image src="/psychedelic-manhattan.png" alt="A Psychedelic Manhattan" width={749} height={760} />
        <ImageDescription>A Psychedelic Manhattan</ImageDescription>
        <Paragraph>This dissertation project in my Architecture Masters Degree, themed  ‘Psychedelic Afrofuturism’ is inspired by the proposal to create feelings of mind-altering consciousness without being under the influence of psychedelics.</Paragraph>
        <Paragraph>The aspect of Afrofuturism stems from the passion to share the story of Black History, African diaspora culture and its intersection with technology to evolve to Afrofuturism.</Paragraph>

        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2">
          <Image src="/effect-lights-left.png" alt="Effect of Psychedelic Lights on Manhattan Roads Purple" width={372} height={260} />
          <Image src="/effect-lights-right.png" alt="Effect of Psychedelic Lights on Manhattan Roads Blue" width={372} height={260} />
        </div>
        <ImageDescription>Effect of Psychedelic Lights on Manhattan Roads</ImageDescription>

        <Paragraph><span className="font-semibold italic">“I am pleased to tell you that you have passed the Dissertation with a distinction. Well done!</span></Paragraph>
        <ImageDescription>- Subject Co-ordinator, MArch</ImageDescription>

        <Paragraph>The dissertation was also followed by an exhibition of our projects at the Kendrew Quad Gallery in Oxford.</Paragraph>

        <Image src="/street-view-manhattan.png" alt="Street View of Psychedelic Manhattan" width={748} height={499} />
        <ImageDescription>Street View of Psychedelic Manhattan</ImageDescription>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2">
          <Image src="/dk-exhibition-left.png" alt="Images from the Exhibition right" width={371} height={370} />
          <Image src="/dk-exhibition-right.png" alt="Images from the Exhibition left" width={371} height={370} />
        </div>
        <ImageDescription>Images from the Exhibition</ImageDescription>
        <Paragraph>The dissertation was made up of edited stock photos using Photoshop to convey a psychedelic afrofuturistic Manhattan and edited videos using Premiere Pro. It also has a fold out map created with InDesign that explains the design and shows some landmarks.
          You can find the map <Link className="underline" href="https://drive.google.com/file/d/1PGVeh90IMVD1MDegFZcX-I94OncJGyYO/view">here</Link>.</Paragraph>
        <Video src="/video-exhibition.mp4" width={749} height={422} />
        <ImageDescription>Video of Psychedelic Afrofuturism</ImageDescription>

        <Image
          src="/lamp.png"
          alt="Collage “Bridge Burst Magical Lamp”"
          width={749}
          height={1050}
        />
        <ImageDescription>Collage “Bridge Burst Magical Lamp”</ImageDescription>
        <Image src="/stone-contrast.png" alt="Collage “Stone Contrast Psychedelic Bubble Insert”" width={749} height={534} />

        <ImageDescription>Collage “Stone Contrast Psychedelic Bubble Insert”</ImageDescription>
      </Wrapper>
    </section >
  );
}
