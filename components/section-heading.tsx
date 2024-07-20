'use client';

import React from 'react';

type SectionHeadingProps = {
  className: string;
  classNameColorOverlay: string;
  children: React.ReactNode;
};

export default function SectionHeading({ className = "", classNameColorOverlay = "", children }: SectionHeadingProps) {
  return (
    <div className={`w-full relative ${className} bg-cover bg-center bg-no-repeat min-h-[139px] flex items-center`}>
      <div className={`absolute inset-0 ${classNameColorOverlay}`}></div>
      <h2 className="text-white font-bold capitalize px-6 sm:px-10 py-8 relative z-10 w-full text-left break-words">
        <span className="text-4xl sm:text-5xl font-bold">
          {children}
        </span>
      </h2>
    </div>
  );
}