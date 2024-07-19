import React from "react";

type VideoProps = {
  src: string;
  width?: number;
  height?: number;
};

export default function Video({ src, width, height }: VideoProps) {
  return (
    <video width={width} height={height} controls preload="none">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
