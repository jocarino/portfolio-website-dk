import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: SectionHeadingProps) {
  return (
    <div className="px-6 lg:px-12 pt-2 lg:pt-4 space-y-4 lg:space-y-4 font-montserrat tracking-wide max-w-full">
      {children}
    </div>
  );
}
