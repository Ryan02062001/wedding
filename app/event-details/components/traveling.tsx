"use client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Traveling() {
  const accommodations = [
    {
      name: "The Westin at The Woodlands",
      image: "/westin.jpg",
      cost: "$$$",
      location: "2 Waterway Square Pl, The Woodlands, TX 77380",
      distance: (
        <div className="flex gap-1">
          <ClockIcon size={16} />
          <ClockIcon size={16} />
          <ClockIcon size={16} />
        </div>
      ),
    },
    {
      name: "Hyatt Place Houston/The Woodlands",
      image: "/hyatt-place.jpg",
      cost: "$$",
      location: "1909 Research Forest Dr, The Woodlands, TX 77380",
      distance: (
        <div className="flex gap-1">
          <ClockIcon size={16} />
          <ClockIcon size={16} />
          <ClockIcon size={16} />
        </div>
      ),
    },
    {
      name: "Hyatt House The Woodlands / Shenandoah",
      image: "/hyatt-house.jpg",
      cost: "$$",
      location: "18645 Residence Dr, Shenandoah, TX 77385",
      distance: (
        <div className="flex gap-1">
          <ClockIcon size={16} />
          <ClockIcon size={16} />
          <ClockIcon size={16} />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 py-6 sm:py-12 space-y-10">
      {/* Title */}
      <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 font-brush text-center tracking-wide text-[#fefefe]">
        Traveling Accommodations
      </h2>
      {/* Grid of Hotel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {accommodations.map((hotel, index) => (
          <div
            key={index}
            className="bg-[#667b68] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 group"
          >
            {/* Image Section */}
            <div className="relative h-48 sm:h-64 overflow-hidden">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>

            {/* Details Section */}
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                {hotel.name}
              </h3>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-white">
                  <span className="font-bold">Cost:</span> {hotel.cost}
                </p>
                <div className="text-xs sm:text-sm text-white flex items-center gap-1">
                  <span className="font-bold">Distance:</span> {hotel.distance}
                </div>
                <p className="text-xs sm:text-sm text-white">
                  <span className="font-bold">Location:</span> {hotel.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
