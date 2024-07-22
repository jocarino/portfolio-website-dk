import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function Title({ children }: SectionHeadingProps) {
  return (
    <h3 className="text-2xl lg:text-3xl font-bold capitalize mb-2 text-left">
      {children}
    </h3>
  );
}
