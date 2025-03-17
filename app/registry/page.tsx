"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full overflow-auto flex flex-col items-center justify-center text-center p-4 pt-32 space-y-8 bg-[#fefefe]">
      {/* Title */}
      <h1 className="font-brush text-5xl sm:text-7xl md:text-9xl font-bold text-[#BF9D3E] tracking-wide">
        The Registry
      </h1>

      {/* Description */}
      <p className="w-full sm:w-10/12 md:w-7/12 text-base sm:text-lg text-[#1a1a1a]">
        We sincerely appreciate your presence on our special day, which is truly
        the greatest gift. However, if you’d like to help us begin this next
        chapter, we’ve put together a few registry options below. Whether you
        choose to contribute to our home essentials or support our honeymoon
        adventures, know that your generosity means the world to us.
      </p>

      {/* Logo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl items-center justify-center">
        {/* Williams Sonoma */}
        <div
          className="flex items-center justify-center w-full max-w-[150px] sm:max-w-md h-auto cursor-pointer justify-self-center
"
        >
          <Link
            href="https://www.williams-sonoma.com/registry/gc7gjzrm86/registry-list.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/william-sonoma.svg"
              alt="William Sonoma"
              width={3840}
              height={2160}
              className="w-full h-full object-contain"
            />
          </Link>
        </div>

        {/* Target */}
        <div
          className="flex items-center justify-center w-full max-w-[100px] sm:max-w-xs h-auto cursor-pointer justify-self-center
"
        >
          <Link
            href="https://www.target.com/gift-registry/gift/ryanandnicolsregistry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/target.svg"
              alt="Target"
              width={3840}
              height={2160}
              className="w-full h-full object-contain"
            />
          </Link>
        </div>

        {/* Amazon */}
        <div
          className="flex items-center justify-center w-full max-w-[120px] sm:max-w-sm h-auto cursor-pointer justify-self-center
"
        >
          <Link
            href="https://www.amazon.com/wedding/registry/3FX9KI0PYQFKY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/amazon.svg"
              alt="Amazon"
              width={3840}
              height={2160}
              className="w-full h-full object-contain"
            />
          </Link>
        </div>

        {/* Sur La Table */}
        <div className="flex items-center justify-center w-full max-w-[150px] sm:max-w-md h-auto cursor-pointer md:col-span-1 md:col-start-2 justify-self-center">
          <Link
            href="https://www.surlatable.com/giftregistry-customershow?ID=9447acbcd4694f40a301494b3f"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/sur-la-table.svg"
              alt="Sur La Table"
              width={3840}
              height={2160}
              className="w-full h-full object-contain"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
