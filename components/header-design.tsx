"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function HeaderDesign() {
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide header when scrolling down (past 50px) and show it when scrolling up
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

  // Define your links with title and href
  const links = [
    { title: "Home", href: "/" },
    { title: "Our Story", href: "/our-story" },
    { title: "Event Details", href: "/event-details" },
    { title: "Photos", href: "/photos" },
    { title: "Registry", href: "/registry" },
    { title: "RSVP", href: "/rsvp" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full py-10 z-50 transition-transform duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-center relative px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <ul className="flex gap-8 text-md font-bold text-[#fefefe]">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Hamburger Button */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={toggleMenu}
              className="rounded-md p-2 hover:bg-muted text-[#fefefe]"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Sliding Menu for Mobile */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/70 transition-opacity z-40"
            onClick={toggleMenu}
            aria-hidden="true"
          />
          {/* Menu Panel */}
          <div
            className={`fixed inset-y-0 right-0 z-50 w-64 transform bg-[#a3b899] p-4 shadow-lg transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between text-[#fefefe]">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={toggleMenu}
                className="rounded-md p-2 hover:bg-muted"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-8">
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-md text-[#fefefe] px-4 py-2 text-lg hover:bg-[#62715b]"
                      onClick={toggleMenu}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
