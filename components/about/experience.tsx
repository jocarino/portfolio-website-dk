"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useAboutSectionInView, } from "@/lib/hooks";
import Title from "../title";
import Wrapper from "../wrapper";
import Link from "next/link";

export default function Experience() {
  const { ref } = useAboutSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-10 lg:scroll-mt-28 mb-9 w-full max-w-100vw space-y-9">
      <Wrapper>
        <Title>My experience</Title>
        <VerticalTimeline lineColor="#fde9f4" >
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background: "#fde9f4",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    "0.4rem solid #fde9f4"
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    "white",
                  fontSize: "1.5rem",
                }}

              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
        <div className="pt-4">
          <Link href="/Damola Olaleye.pdf" download="Damola Olaleye.pdf" className="underline">Click here to view my full resume</Link>
        </div>
      </Wrapper>
    </section>
  );
}
