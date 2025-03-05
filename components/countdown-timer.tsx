// components/CountdownTimer.jsx (or .tsx if using TypeScript)
"use client";
import React from "react";
import Countdown from "react-countdown";

export default function CountdownTimer() {
  // Define your wedding date/time
  const weddingDate = new Date("June 21, 2025 16:00:00");

  // Custom renderer for the countdown
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    // If the countdown is complete (the date has passed)
    if (completed) {
      return (
        <span className="text-2xl font-bold text-[#fefefe]">
          It&apos;s Wedding Time!
        </span>
      );
    } else {
      // Render our countdown
      return (
        <div className="flex flex-row items-center justify-center text-[#fefefe] space-x-5">
          <p className="text-lg  font-bold">
            {days} <span className="font-normal">Days</span>
          </p>
          <p className="text-lg font-bold">
            {hours} <span className="font-normal">Hours</span>
          </p>
          <p className="text-lg  font-bold">
            {minutes} <span className="font-normal">Minutes</span>
          </p>
          <p className="text-lg  font-bold">
            {seconds} <span className="font-normal">Seconds</span>
          </p>
        </div>
      );
    }
  };

  return <Countdown date={weddingDate} renderer={renderer} />;
}
