'use client';

import React from 'react';

type SectionHeadingProps = {
  className: string;
  classNameColorOverlay: string;
  children: React.ReactNode;
};

export default function SectionHeading({ className: className, classNameColorOverlay, children }: SectionHeadingProps) {
  return (
    <div className={`w-full relative ${className} h-[139px] bg-cover bg-center bg-no-repeat`}>
      <div className={`absolute inset-0 ${classNameColorOverlay}`}></div>
      <h2 className="text-2xl leading-[130px] sm:text-5xl text-white sm:leading-[130px] pl-6 sm:pl-10 font-bold capitalize mb-2 text-left relative z-10">
        {children}
      </h2>

    </div >
  );
}
