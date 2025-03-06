"use client";
import React from "react";
import Image from "next/image";

export default function EventHero() {
  return (
    <div className="relative w-full h-[20rem] sm:h-[30rem]">
      {/* Background image */}
      <Image
        src="/eventhero.jpg"
        alt="Event Hero"
        fill
        priority
        className="object-cover object-[50%_30%]"
      />

      {/* Overlay for centered text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <div className="px-4">
          <h1 className="font-brush font-bold text-[#fefefe] text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-center">
            Event Details
          </h1>
        </div>
      </div>
    </div>
  );
}
