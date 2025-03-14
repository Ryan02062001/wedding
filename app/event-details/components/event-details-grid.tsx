"use client";
import React from "react";
import Image from "next/image";

// Define an array of event details
const eventsData = [
  {
    title: "Ceremony",
    time: "4:00 PM",
    locationName: "Our Lady Of The Angels Chapel",
    addressLine1: "8715 Kuykendahl Road Spring,",
    addressLine2: "Texas 77382",
    imageSrc: "/St.-Anthony-Padua.jpg",
    alt: "Ceremony",
    reverse: false, // Image left, details right
  },
  {
    title: "Reception",
    time: "6:00 PM",
    locationName: "The Springs Event Venue",
    addressLine1: "14135 Laramie Trail Montgomery,",
    addressLine2: "Texas 77316",
    imageSrc: "/Blake-Thomas-Photography-Venue-Details-18-scaled.jpg",
    alt: "Reception",
    reverse: true, // Details left, image right
  },
];

export default function EventDetailsGrid() {
  return (
    <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 py-6 sm:py-12 space-y-12">
      {eventsData.map((event, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center"
        >
          {/* Image */}
          <div className={`${event.reverse ? "order-1 md:order-2" : ""}`}>
            <Image
              src={event.imageSrc}
              alt={event.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded"
            />
          </div>

          {/* Details */}
          <div
            className={`${
              event.reverse ? "order-2 md:order-1" : ""
            } flex flex-col items-center text-center`}
          >
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-2 font-brush tracking-wide text-[#fefefe]">
              {event.title}
            </h2>
            <p className="text-base sm:text-lg mb-1 font-bold">{event.time}</p>
            <p className="text-xl sm:text-2xl font-bold text-[#fefefe]">
              {event.locationName}
            </p>
            <p className="text-base sm:text-lg">{event.addressLine1}</p>
            <p className="text-base sm:text-lg mb-1">{event.addressLine2}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
