"use client";

import React from "react";
import { useWorkSectionInView } from "@/lib/hooks";
import SectionHeading from "../section-heading";
import Title from "../title";
import Paragraph from "../paragraph";
import Wrapper from "../wrapper";
import Image from "next/image";
import Subtitle from "../subtitle";
import ImageDescription from "../imageDescription";

export default function UIDesign() {
  const { ref } = useWorkSectionInView("UI Design", 0.25);


  return (
    <section ref={ref} id="ui-design" className="sm:scroll-mt-28 mb-28 w-full space-y-9">
      <div id="verdeverse" className="w-full flex flex-col items-center">

        <SectionHeading className="bg-verdeVerseBackground" classNameColorOverlay="bg-[#391C2E4D]">VerdeVerse</SectionHeading>
        <Wrapper>
          <Title>Overview
            <Paragraph>In our fast-paced lives, finding time to care for our plants can be a challenge. The absence of a user-friendly solution for plant care, especially with automated watering systems, inspired VerdeVerse. This app streamlines plant care, seamlessly integrating with automated watering, simplifying life for busy plant lovers.</Paragraph>
          </Title>
          <div className="flex flex-row sm:space-x-[178px] space-x-2">
            <Title>Role
              <Paragraph><p className="text-base font-normal leading-[30px]">User Research</p></Paragraph>
              <Paragraph><p className="text-base font-normal leading-[30px]">UI Design</p></Paragraph>
              <Paragraph><p className="text-base font-normal leading-[30px]">Protoyping</p></Paragraph>
            </Title>
            <Title>Tools
              <Paragraph><p className="text-base font-normal leading-[30px]">Figma</p></Paragraph>
              <Paragraph><p className="text-base font-normal leading-[30px]">Notion</p></Paragraph>
              <Paragraph><p className="text-base font-normal leading-[30px]">Illustrator</p></Paragraph>
            </Title>
            <Title>Timeline
              <Paragraph><p className="text-base font-normal leading-[30px]">8 weeks</p></Paragraph>
            </Title>

          </div>
          <Title>Design Process
            <Image src="/design-process.png" alt="Design Process" width={758} height={296} />
            <ImageDescription>Image description of the Design Process</ImageDescription>
            <Subtitle>Research
              <Paragraph>The journey began with comprehensive user research to understand the pain points of plant owners. Surveys, interviews, and competitor analysis helped uncover the specific needs and preferences of our target audience. It became evident that users desired a centralised platform to monitor, schedule, and automate plant care.</Paragraph>
              <Image src="/competitive-analysis.png" alt="Competitive Analysis" width={758} height={472} />
              <ImageDescription >Images gathered from Competitor Analysis</ImageDescription>
            </Subtitle>
            <Subtitle>Ideation
              <Paragraph>Armed with insights, the ideation phase focused on brainstorming features that would make VerdeVerse a comprehensive solution. Wireframes and prototypes were created to visualise the user interface and to map out the user flow.</Paragraph>
              <Image src="/ideation-sketch.png" alt="Userflow Sketch" width={758} height={472} />
              <ImageDescription>Userflow Sketch</ImageDescription>
              <Image src="/lofi-mockup.png" alt="Low Fidelity Mockups" width={758} height={427} />
              <ImageDescription>Low Fidelity Mockups</ImageDescription>
            </Subtitle>
            <Subtitle>Design & Development
              <Paragraph>The user interface prioritises simplicity, with an intuitive dashboard displaying a personalised overview of each plant's care status. Integration with automated watering systems was a pivotal feature, allowing users to set customised watering schedules.</Paragraph>
            </Subtitle>
            <Subtitle>Testing & Iteration
              <Paragraph>Beta testing involved a diverse group of users. Their feedback allowed for further refinement, addressing any usability issues and enhancing the overall user experience. The iterative process aimed to create a seamless, foolproof solution for plant care management.</Paragraph>
            </Subtitle>
          </Title>
          <Title>Conclusion & Key Takeaways
            <Paragraph>VerdeVerse bridges the gap between manual care and automated systems. The app successfully addresses the challenges of inconsistent care routines, providing users with a centralised hub for monitoring and managing their plants. Integration with automated watering systems ensures that plants receive the precise care they need, reducing the risk of overwatering or neglect.</Paragraph>
            <Image src="/vv-landing-page.png" alt="Landing Page" width={758} height={540} />
            <ImageDescription>Desktop Landing Page</ImageDescription>
            <Paragraph>The key takeaway from this project is that technology can enhance and simplify the nurturing of our green companions, making it accessible to a broader audience. In conclusion, VerdeVerse is not just an app; it's a companion on the journey of plant parenthood, fostering healthier connections between individuals and their leafy friends.</Paragraph>
          </Title>

        </Wrapper>
      </div>
      <div id="damolakevwecom">

        <SectionHeading className="bg-dkDotCom bg-[center_bottom_-50px]" classNameColorOverlay="bg-[#FF76CE4D]">DamolaKevwe.com</SectionHeading>
      </div>
    </section >
  );
}
