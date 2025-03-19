"use client";

import { ClockIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

export default function Traveling() {
  const accommodations = [
    {
      name: "Hyatt Place The Woodlands",
      image: "/hyatt-place.jpg",
      cost: "$$",
      location: "1909 Research Forest Dr, The Woodlands, TX 77380",
      link: "https://www.hyatt.com/hyatt-place/en-US/houzw-hyatt-place-houston-the-woodlands?offercode=spc1",
      distance: (
        <div className="flex gap-1">
          <ClockIcon size={16} />
          <ClockIcon size={16} />
          <ClockIcon size={16} />
        </div>
      ),
    },
    {
      name: "Hilton Garden Inn Houston",
      image: "/hilton-garden.jpg",
      cost: "$$",
      location: "9301 Six Pines Drive The Woodlands, Texas 77380 USA",
      link: "https:/www.hilton.com/en/book/reservation/deeplink/?ctyhocn=HOUWDGI&corporateCode=0110175__;!!FOfmI8qiWcWBHqypJtzENF0!3Fmjh-9KV7n0BAH2NPq7B-AX0M0IhV6Ksl6gFgJp3oA3fVYqabym_wxUBGUxptp6l6wm7SuKKXmAQ1qD4XWPfxyp$",
      distance: (
        <div className="flex gap-1">
          <ClockIcon size={16} />
          <ClockIcon size={16} />
          <ClockIcon size={16} />
        </div>
      ),
    },
    // {
    //   name: "The Westin at The Woodlands",
    //   image: "/westin.jpg",
    //   cost: "$$$",
    //   location: "2 Waterway Square Pl, The Woodlands, TX 77380",
    //   link: "https://www.westinwoodlands.com",
    //   distance: (
    //     <div className="flex gap-1">
    //       <ClockIcon size={16} />
    //       <ClockIcon size={16} />
    //       <ClockIcon size={16} />
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 py-6 sm:py-12 space-y-10">
      {/* Title */}
      <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 font-brush text-center tracking-wide text-[#BF9D3E]">
        Traveling Accommodations
      </h2>

      {/* Grid of Hotel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 items-stretch md:w-8/12 justify-self-center">
        {accommodations.map((hotel, index) => (
          <Card
            key={index}
            className="rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 group flex flex-col h-full"
          >
            {/* Image Section */}
            <div className="relative h-48 sm:h-64 overflow-hidden">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-20" />
            </div>

            {/* Content Section */}
            <CardContent className="p-4 sm:p-6 flex-grow flex flex-col justify-evenly">
              <CardTitle className="text-xl sm:text-2xl font-semibold text-[#2d2d2d] mb-2">
                {hotel.name}
              </CardTitle>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-[#2d2d2d]">
                  <span className="font-bold">Cost:</span> {hotel.cost}
                </p>
                <div className="text-xs sm:text-sm text-[#2d2d2d] flex items-center gap-1">
                  <span className="font-bold">Distance:</span> {hotel.distance}
                </div>
                <p className="text-xs sm:text-sm text-[#2d2d2d]">
                  <span className="font-bold">Location:</span> {hotel.location}
                </p>
              </div>
            </CardContent>

            {/* Footer with Button */}
            <CardFooter className="p-4 sm:p-6 pt-0">
              <Link
                href={hotel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full hover:bg-[#afc6a5] font-bold hover:text-[#fefefe] text-[#fefefe] bg-[#a3b899]">
                  Visit Website
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
