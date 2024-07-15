import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function Paragraph({ children }: SectionHeadingProps) {
  return (
    <h3 className="text-lg sm:text-xl leading-9 not-italic normal-case font-normal tracking-wide font-montserrat text-left">
      {children}
    </h3>
  );
}
