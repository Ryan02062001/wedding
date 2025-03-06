"use client";
import React from "react";

export default function GalleryHero() {
  return (
    <div className="relative w-full h-[20rem] sm:h-[35rem] overflow-hidden">
      {/* Background video */}
      {/* <video
        className="absolute w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/herovid.mp4" type="video/mp4" />
      </video> */}

      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <h1 className="font-brush text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-[#fefefe]">
          The Day Of
        </h1>
      </div>
    </div>
  );
}
