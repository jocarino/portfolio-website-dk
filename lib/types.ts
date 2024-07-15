import { aboutLinks, links, workLinks } from "./data";

export type SectionName = (typeof links)[number]["name"];
export type WorkSectionName = (typeof workLinks)[number]["name"];
export type AboutSectionName = (typeof aboutLinks)[number]["name"];
