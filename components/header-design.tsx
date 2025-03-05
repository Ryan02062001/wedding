"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function HeaderDesign() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // If user scrolled down and scrolled at least 50px, hide header
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full py-8 z-50 transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="container mx-auto flex justify-center">
        <ul className="flex gap-8 text-md font-bold text-[#fefefe]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/our-story">Our Story</Link>
          </li>
          <li>
            <Link href="/event-details">Event Details</Link>
          </li>
          <li>
            <Link href="/photos">Photos</Link>
          </li>
          <li>
            <Link href="/registry">Registry</Link>
          </li>
          <li>
            <Link href="/rsvp">RSVP</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
