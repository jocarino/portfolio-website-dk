import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function Subtitle({ children }: SectionHeadingProps) {
  return (
    <h3 className="text-[24px] italic font-semibold capitalize mb-2 text-left">
      {children}
    </h3>
  );
}
