import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "About",
    path: "/about",
  },
] as const;

export const workLinks = [
  {
    name: "UI Design",
    hash: "#ui-design",
    subLinks: [
      { name: "VerdeVerse", hash: "#verdeverse" },
      { name: "DamolaKevwe.com", hash: "#damolakevwecom" },
      { name: "DisplaceByHome", hash: "#displaceByHome" },
      { name: "Tache", hash: "#tache" },
    ],
  },
  {
    name: "Psychedelic Afrofuturism",
    hash: "#psychedelic-afrofuturism",
    subLinks: [],
  },
  {
    name: "Graphic Design",
    hash: "#graphic-design",
    subLinks: [
      { name: "Creative Adult", hash: "#creative-adult" },
      { name: "VerdeVerse", hash: "#verdeverse-graphic-design" },
      { name: "AI Storyboarding", hash: "#ai-storyboarding" },
      { name: "Latoja", hash: "#latoja" },
      { name: "Buganow", hash: "#buganow" },
      { name: "Others", hash: "#others" },
    ],
  },
  {
    name: "Cinematography",
    hash: "#cinematography",
    subLinks: [
      { name: "Waiting for You", hash: "#waiting-for-you" },
      { name: "The Cavemen Live", hash: "#the-cavemen-live" },
      { name: "Omo Atoke", hash: "#omo-atoke" },
      { name: "Others", hash: "#others-cinematography" },
    ],
  },
  { name: "Photography", hash: "#photography", subLinks: [] },
  {
    name: "Architecture",
    hash: "#architecture",
    subLinks: [
      { name: "Hand Drawn", hash: "#hand-drawn" },
      { name: "CAD", hash: "#cad" },
      { name: "Urban Cultures", hash: "#urban-cultures" },
      { name: "Architecture & City", hash: "#architecture-and-city" },
      { name: "Advanced Design", hash: "#advanced-design" },
    ],
  },
] as const;

export const aboutLinks = [
  {
    name: "Intro",
    hash: "#intro",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  { name: "Experience", hash: "#experience" },
  { name: "Certifications", hash: "#certifications" },
  { name: "Education", hash: "#education" },
  { name: "Fun Facts", hash: "#fun-facts" },
] as const;

export const experiencesData = [
  {
    title: "Member Service Advisor",
    location: "Bupa, England",
    description: "",
    icon: React.createElement(CgWorkAlt),
    date: "Feb. 2023 - Present",
  },
  {
    title: "Sales Advisor/Visual Merchandising Trainee",
    location: "H&M, England",
    description: "",
    icon: React.createElement(CgWorkAlt),
    date: "Dec. 2022 - Jan. 2023",
  },
  {
    title: "Hospitality Partner",
    location: "John Lewis & Partners, England",
    description: "",
    icon: React.createElement(CgWorkAlt),
    date: "Oct. 2021 - Sep. 2022",
  },
  {
    title: "Content Curator & Graphic Designer",
    location: "Of a Kind Creatives, USA",
    description: "",
    icon: React.createElement(CgWorkAlt),
    date: "Feb. 2021 - Mar. 2021",
  },
  {
    title: "Visual Designer",
    location: "Latoja Mart, Nigeria",
    description: "",
    icon: React.createElement(CgWorkAlt),
    date: "Dec. 2019 - Dec. 2020",
  },
  {
    title: "Graphic Designer",
    location: "Buganow, Nigeria",
    description: "",
    icon: React.createElement(CgWorkAlt),
    date: "Aug. 2019 - May. 2020",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
