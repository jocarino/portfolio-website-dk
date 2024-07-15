import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { AboutSectionName, WorkSectionName } from "./types";
import { useActiveWorkSectionContext } from "@/context/active-work-section-context";
import { useActiveAboutSectionContext } from "@/context/active-about-section-context";

export function useWorkSectionInView(
  sectionName: WorkSectionName,
  threshold = 0.75
) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveWorkSection, timeOfLastClick } =
    useActiveWorkSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveWorkSection(sectionName);
    }
  }, [inView, setActiveWorkSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
export function useAboutSectionInView(
  sectionName: AboutSectionName,
  threshold = 0.75
) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveAboutSection, timeOfLastClick } =
    useActiveAboutSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveAboutSection(sectionName);
    }
  }, [inView, setActiveAboutSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
