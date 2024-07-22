import React from "react";

type ImageDescriptionProps = {
  children: React.ReactNode;
};

export default function ImageDescription({ children }: ImageDescriptionProps) {
  return (
    <p className="text-sm lg:text-base font-normal leading-[35px]">
      {children}
    </p>
  );
}
