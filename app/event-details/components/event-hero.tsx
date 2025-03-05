"use client";
import React from "react";
import Image from "next/image";

export default function EventHero() {
  return (
    <div className="relative w-full h-[30rem]">
      {/* Background image */}
      <Image
        src="/eventhero.jpg"
        alt="Event Hero"
        fill
        priority
        className="object-cover object-[50%_30%]"
      />

      {/* Overlay for text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        {/* Wrap the heading in a container with padding */}
        <div className="px-4">
          <h1 className="font-brush text-9xl font-bold text-[#BF9D3E]">
            Event Details
          </h1>
        </div>
      </div>
    </div>
  );
}
