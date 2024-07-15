import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: SectionHeadingProps) {
  return (
    <div className="px-6 sm:px-12 pt-2 sm:pt-4 space-y-4 sm:space-y-4 font-montserrat tracking-wide">
      {children}
    </div>
  );
}
