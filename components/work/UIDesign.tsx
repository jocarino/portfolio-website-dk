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
import Video from "../video";

export default function UIDesign() {
  const { ref } = useWorkSectionInView("UI Design", 0.1);


  return (
    <section ref={ref} id="ui-design" className="scroll-mt-10 sm:scroll-mt-28 mb-28 w-full space-y-9">
      <div id="verdeverse" className="scroll-mt-10 w-full flex flex-col items-center">

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
      <div id="damolakevwecom" className="scroll-mt-10 w-full flex flex-col items-center">

        <SectionHeading className="bg-dkDotCom bg-[center_bottom_-50px]" classNameColorOverlay="bg-[#FF76CE4D]">DamolaKevwe.com</SectionHeading>
        <Wrapper>
          <Paragraph>The Damola Kevwe website project emerged from the necessity to create a digital space that seamlessly showcases a diverse range of my creative endeavours—spanning UI design, graphic design, photography, architecture, cinematography, and video editing.</Paragraph>
          <Image src="/portfolio-mood-board.png" alt="Portfolio Mood Board" width={758} height={596} />
          <ImageDescription>Portfolio Mood-board & Inspiration </ImageDescription>
          <Paragraph>The primary challenge was to design a cohesive and visually compelling portfolio landing page that not only reflects my multifaceted skills but also captivates visitors with a user-friendly experience. The goal was to build a platform that not only showcases projects but embodies the essence of who I am.</Paragraph>
          <Video src="/site-design-ideas.mp4" width={758} height={494} />
          <ImageDescription>Site Design Ideas</ImageDescription>
          <Paragraph>In this website design project, I focused on understanding and meeting user needs through research and testing. I used clear design elements to guide users' attention and kept the design consistent with a cohesive colour scheme and typography. Accessibility was a priority, making sure the website is usable for everyone and the design is fully responsive, working well on all devices. An iterative design process, involving prototyping and testing, helped refine the design to meet and exceed user expectations. These efforts resulted in a visually appealing, easy-to-use website that effectively communicates the brand’s message.</Paragraph>

        </Wrapper>
      </div>
      <div id="displaceByHome" className="scroll-mt-10 w-full flex flex-col items-center">

        <SectionHeading className="bg-displaceByHome overflow-hidden bg-[length:300%_auto] sm:bg-[length:250%_auto] bg-[center_bottom_-50px]" classNameColorOverlay="bg-[#4C30424D]">Displace by HOM</SectionHeading>
        <Wrapper>

          <Paragraph>Humanity On the Move Association (HOM) is a Portuguese-registered non-profit association founded in April 2021 in response to the growing hostility towards refugees. HOM recognises the need to move towards a humanity beyond borders to support refugees in rebuilding their lives in our communities.</Paragraph>
          <div className="flex flex-row sm:space-x-[178px] space-x-2">
            <Title>Role
              <Paragraph><p className="text-base font-normal leading-[30px]">Visual Design</p></Paragraph>
              <Paragraph><p className="text-base font-normal leading-[30px]">UI Design</p></Paragraph>
            </Title>
            <Title>Tools
              <Paragraph><p className="text-base font-normal leading-[30px]">Illustrator</p></Paragraph>
              <Paragraph><p className="text-base font-normal leading-[30px]">Figma</p></Paragraph>
            </Title>
            <Title>Timeline
              <Paragraph><p className="text-base font-normal leading-[30px]">Since Dec 2022</p></Paragraph>
              <Paragraph><p className="text-base font-normal leading-[30px]">(Ongoing Project)</p></Paragraph>
            </Title>

          </div>
          <Image src="/hom-webpage.png" alt="HOM Webpage" width={758} height={410} />
          <ImageDescription>https://humanityonthemove.pt/</ImageDescription>

          <Title>Displace</Title>
          <Paragraph>Displace aims to raise public awareness of the forced migrants' cause through “artivism”, social activism through art. It arises from the need to increase the connection of the Portuguese community to forced migrants in Portugal through the universality of art.</Paragraph>
          <Paragraph>I have been contracted to design the logo for displace, its brand identity and the app (mobile & web) for this project.</Paragraph>
          <Video src="/displace-logo-ideas.mp4" width={758} height={426} />
          <ImageDescription>Initial Logo Ideas & Sketches</ImageDescription>
        </Wrapper>
      </div>
      <div id="tache" className="scroll-mt-10 w-full flex flex-col items-center">

        <SectionHeading className="bg-tache bg-[center_top_-20px]" classNameColorOverlay="bg-[#644B5B4D]">Tache</SectionHeading>
        <Wrapper>
          <Title>Overview</Title>
          <Paragraph>In the chaos of daily life, managing tasks efficiently can be a daunting challenge. Tache was born out of the need for a user-friendly, intuitive to-do list app that not only allows users to add and track tasks but also integrates seamlessly with their calendar. The design challenge was to create an app that simplifies task management, encourages productivity, and seamlessly incorporates into users' existing routines.</Paragraph>
          <div className="flex flex-row sm:space-x-[178px] space-x-2">
            <Title>Role
              <Paragraph><p className="text-base font-normal leading-[30px]">UI Design</p></Paragraph>
              <Paragraph><p className="text-base font-normal leading-[30px]">Prototyping</p></Paragraph>
            </Title>
            <Title>Tools
              <Paragraph><p className="text-base font-normal leading-[30px]">Adobe XD</p></Paragraph>
              <Paragraph><p className="text-base font-normal leading-[30px]">Illustrator</p></Paragraph>
            </Title>
            <Title>Timeline
              <Paragraph><p className="text-base font-normal leading-[30px]">2 weeks</p></Paragraph>
            </Title>
          </div>

          <Title>User Research Summary</Title>
          <Paragraph>Using the already provided user research from the research team, a mixed-methods research approach was adapted, combining qualitative and quantitative methods to gain a comprehensive understanding of user needs and behaviours.</Paragraph>
          <Subtitle>Surveys</Subtitle>
          <Paragraph>Surveys carried out were distributed to a broad user base to gather initial quantitative data on task management habits and challenges.</Paragraph>
          <Subtitle>Interviews</Subtitle>
          <Paragraph>In-depth conversations with a selected group of users to gain qualitative insights into their daily routines and pain points. Personas were then developed from these interviews.</Paragraph>
          <Subtitle>Pain Points</Subtitle>
          <ul>
            <li><Paragraph>Existing task management apps are often too complex, making them difficult to navigate.</Paragraph></li>
            <li><Paragraph>Poor integration with calendars leads to missed deadlines and appointments.</Paragraph></li>
            <li><Paragraph>Too many unnecessary features that clutter the user experience.</Paragraph></li>
          </ul>
          <Subtitle>Journey Map</Subtitle>
          <ol>
            <li><Paragraph>Awareness: Users recognise the need for a better task management solution. They search for to-do list apps and come across Tache.</Paragraph></li>
            <li><Paragraph>Consideration: Users read reviews and compare Tache with other apps. They are attracted by its promise of simplicity and calendar integration. Users download Tache.</Paragraph></li>
            <li><Paragraph>Daily Use: Users add tasks, set reminders, and sync their calendar. They use the app to stay organised and productive.</Paragraph></li>
            <li><Paragraph>Reflection: Users review their completed tasks and adjust their workflow as needed. They provide feedback on the app’s usability and features.</Paragraph></li>
            <li><Paragraph>Advocacy: Satisfied users recommend Tache to others, highlighting its ease of use and effective integration with their daily routines.</Paragraph></li>
          </ol>

          <Title>The Design</Title>

          <div className="flex flex-col items-center sm:flex-row sm:space-x-[178px] space-x-2">
            <div>
              <div>
                <Image className="w-56 sm:w-80" src="/add-new-wireframe.png" alt="Add new screen wireframe" width={384} height={690} />
              </div>
              <ImageDescription>Add new screen wireframe</ImageDescription>
            </div>

            <div>
              <Image className="w-56 sm:w-80" src="/calender-wireframe.png" alt="Calendar screen wireframe" width={384} height={690} />
              <ImageDescription>Calendar Screen Wireframe</ImageDescription>
            </div>
          </div>
          <div className="flex flex-col items-center sm:flex-row sm:space-x-[178px] space-x-2">
            <div>
              <div>
                <Image className="w-56 sm:w-80" src="/start-screen-tache.png" alt="Start Screen High Fidelity Mockup" width={384} height={690} />
              </div>
              <ImageDescription>Start Screen High Fidelity Mockup</ImageDescription>
            </div>

            <div>
              <Image className="w-56 sm:w-80" src="/home-screen-tache.png" alt="Home Screen High Fidelity Mockup" width={384} height={690} />
              <ImageDescription>Home Screen High Fidelity Mockup</ImageDescription>
            </div>
          </div>

          <Title>Conclusion</Title>
          <Paragraph>Tache emerges as a powerful yet user-friendly solution to the complexities of task management. By seamlessly integrating task tracking with calendar functionalities, Tache addresses the core needs of a diverse user base, from busy professionals and students to parents and freelancers. Our comprehensive user research has revealed that simplicity, effective integration, and robust functionality are paramount to enhancing productivity and reducing the chaos of daily life.</Paragraph>
          <Paragraph>The insights gained from our surveys, interviews, and usability tests have driven the design and development of Tache, ensuring it aligns with real user needs and preferences. By focusing on user pain points and creating tailored solutions, Tache simplifies task management, supports efficient scheduling, and ultimately fosters a more organised and productive lifestyle.</Paragraph>
        </Wrapper>
      </div>
    </section >
  );
}
