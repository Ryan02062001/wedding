"use client";
import React from "react";
import RSVPForm from "./components/RSVPForm";

export default function RSVPPage() {
  return (
    <div className="h-full flex items-center justify-center px-4 py-36">
      <div className="rounded-lg shadow-lg p-8 max-w-md w-full bg-[#FEFEFE] border border-[#BF9D3E]">
        <h1 className="text-2xl font-bold mb-4 text-center text-[#BF9D3E]">
          Wedding RSVP
        </h1>
        <p className="text-center text-[#A3B899] mb-6">
          Kindly fill out the form below to let us know if you&apos;ll be
          joining us!
        </p>
        <RSVPForm />
      </div>
    </div>
  );
}
