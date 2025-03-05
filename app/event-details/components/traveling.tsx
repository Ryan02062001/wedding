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
      name: "Embassy Suites By Hilton",
      image: "/embassy.jpg",
      cost: "$$",
      location: "1855 Hughes Landing Blvd, The Woodlands, TX 77380",
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
    {
      name: "Homewood Suites by Hilton Houston-Woodlands",
      image: "/homewood.jpg",
      cost: "$$",
      location: "29813 Interstate 45 N, The Woodlands, TX 77381",
      distance: (
        <div className="flex gap-1">
          <ClockIcon size={16} />
          <ClockIcon size={16} />
          <ClockIcon size={16} />
        </div>
      ),
    },
    {
      name: "Hilton Garden Inn Houston/The Woodlands",
      image: "/hilton-garden.jpg",
      cost: "$$",
      location: "9301 Six Pines Dr, The Woodlands, TX 77380",
      distance: (
        <div className="flex gap-1">
          <ClockIcon size={16} />
          <ClockIcon size={16} />
          <ClockIcon size={16} />
        </div>
      ),
    },
    {
      name: "Candlewood Suites Houston (The Woodlands)",
      image: "/candlewood.jpg",
      cost: "$",
      location: "17525 St Lukes Way, The Woodlands, TX 77384",
      distance: (
        <div className="flex gap-1">
          <ClockIcon size={16} />
          <ClockIcon size={16} />
          <ClockIcon size={16} />
        </div>
      ),
    },
    {
      name: "SpringHill Suites Houston The Woodlands",
      image: "/springhill.jpg",
      cost: "$",
      location: "16520 I-45, The Woodlands, TX 77384",
      distance: (
        <div className="flex gap-1">
          <ClockIcon size={16} />
          <ClockIcon size={16} />
          <ClockIcon size={16} />
        </div>
      ),
    },
    {
      name: "Hyatt Centric The Woodlands",
      image: "/centric.jpg",
      cost: "$$$",
      location: "9595 Six Pines Dr #1100, The Woodlands, TX 77380",
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
    <div className="w-full mx-auto px-16 py-12 space-y-10">
      {/* Title */}
      <h2 className="text-8xl font-bold mb-4 font-brush text-center tracking-wide text-[#BF9D3E]">
        Traveling Accommodations
      </h2>
      {/* Grid of Hotel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {accommodations.map((hotel, index) => (
          <div
            key={index}
            className="bg-[#667b68] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 group"
          >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>

            {/* Details Section */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                {hotel.name}
              </h3>
              <div className="space-y-2">
                <p className="text-sm text-white">
                  <span className="font-bold">Cost:</span> {hotel.cost}
                </p>
                <div className="text-sm text-white flex items-center gap-2">
                  <span className="font-bold">Distance:</span> {hotel.distance}
                </div>
                <p className="text-sm text-white">
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
