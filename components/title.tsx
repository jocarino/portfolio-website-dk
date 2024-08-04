import React from "react";

type SectionHeadingProps = {
  variant?: "about" | "work";
  children: React.ReactNode;
};

export default function Title({
  variant = "work",
  children,
}: SectionHeadingProps) {
  return (
    <h3
      className={`text-2xl lg:text-3xl font-bold capitalize mb-2 text-left ${
        variant === "about"
          ? "bg-pink-200/70 rounded-lg p-2 lg:bg-transparent lg:rounded-none lg:p-0"
          : ""
      }`}
    >
      {children}
    </h3>
  );
}
