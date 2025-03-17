"use client";

import { useState, useEffect, useRef } from "react";
import type React from "react";
import Image from "next/image";
import { Heart, Calendar, MapPin, Camera, Music, Sparkles } from "lucide-react";

export default function OurStory() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineElement = timelineRef.current;
      const timelineTop = timelineElement.getBoundingClientRect().top;
      const timelineHeight = timelineElement.offsetHeight;
      const windowHeight = window.innerHeight;

      let progress = 0;

      if (timelineTop <= windowHeight * 0.8) {
        const scrolledDistance = windowHeight * 0.8 - timelineTop;
        const totalScrollDistance = timelineHeight + windowHeight * 0.8;
        progress = Math.min(scrolledDistance / totalScrollDistance, 1);
        progress = Math.max(progress, 0);
      }

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <div className="container mx-auto px-4 py-16 md:py-32">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="font-serif text-5xl font-bold text-[#BF9D3E] md:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <div className="mt-4 flex justify-center">
            <div className="h-0.5 w-24 bg-[#BF9D3E]"></div>
          </div>
          <p className="mt-6 text-lg text-[#A3B899] md:text-xl">
            The journey that led us to forever
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mx-auto max-w-5xl">
          {/* Static timeline line (background) */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-[#BF9D3E] opacity-10"></div>

          {/* Solid gold timeline progress bar */}
          <div
            className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 transform overflow-hidden"
            style={{
              height: `${scrollProgress * 100}%`,
              backgroundColor: "#BF9D3E",
              transition: "height 0.1s ease-out",
              opacity: 0.9,
            }}
          ></div>

          {/* Timeline items */}
          <div className="space-y-24">
            {/* First meeting */}
            <TimelineItem
              date="Not Exactly Sure"
              title="When We First Met"
              align="right"
              icon={<Heart className="h-6 w-6 text-[#d52929]" />}
              collageImages={[
                { src: "/firstmet.jpg", alt: "Our first meeting" },
                { src: "/firstmet2.jpg", alt: "Tennis courts" },
                { src: "/firstmet3.jpg", alt: "Early days" },
              ]}
            >
              <div className="space-y-4">
                <p className="text-[#A3B899]">
                  We first met playing tennis. Long story short, I was actually
                  one of her coaches and she was a student. The
                  earliest/clearest memory I have is her hitting me in the face
                  with a tennis ball. (I don&apos;t have any images of us on the
                  courts so enjoy a cool picture of us kissing.)
                </p>
                <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/kissing.jpg"
                    alt="Our first meeting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TimelineItem>

            {/* First date */}
            <TimelineItem
              date="March 5, 2022"
              title="Our First Date"
              align="left"
              icon={<Calendar className="h-6 w-6 text-[#4f4c42]" />}
              collageImages={[
                { src: "/date.jpg", alt: "Half marathon" },
                { src: "/date2.jpg", alt: "After the run" },
                { src: "/date3.jpg", alt: "First date memories" },
              ]}
            >
              <div className="space-y-4">
                <p className="text-[#A3B899]">
                  Our first date was actually a half marathon. One day on the
                  courts I had randomly mentioned that I was going to run a half
                  and half jokingly said she should join. Without thinking twice
                  she said yes and ran it with me that weekend. Well she
                  hadn&apos;t trained for it so we more or so walked 8 of the 13
                  miles and just talked for hours on end.
                </p>
                <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/firstdate.jpg"
                    alt="Our first date"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </TimelineItem>

            {/* First trip */}
            <TimelineItem
              date="January 10, 2024"
              title="Our First Trip Together"
              align="right"
              icon={<MapPin className="h-6 w-6 text-[#33aaef]" />}
              collageImages={[
                { src: "/trip.jpg", alt: "Hawaii views" },
                { src: "/trip2.jpg", alt: "Beach moments" },
                { src: "/trip3.jpg", alt: "Trip memories" },
              ]}
            >
              <div className="space-y-4">
                <p className="text-[#A3B899]">
                  We took a few small trips to Arkansas and Cancun but the trip
                  that we would genuinely consider our first together would be
                  the Hawaii trip we took with my family.
                </p>
                <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/firsttrip.jpg"
                    alt="Our first trip"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TimelineItem>

            {/* Dates */}
            <TimelineItem
              date="All The Time"
              title="Trying New Foods/Coffee"
              align="left"
              icon={<Camera className="h-6 w-6 text-[#4f4c42]" />}
              collageImages={[
                { src: "/food.jpg", alt: "Coffee shop visits" },
                { src: "/food2.jpg", alt: "Bakery moments" },
                { src: "/food3.jpg", alt: "Food adventures" },
              ]}
            >
              <div className="space-y-4">
                <p className="text-[#A3B899]">
                  One of our favorite things to do is try new places to eat or
                  drink coffee. We love finding little bakeries with increible
                  coffees and treats and have shared many incredible moments
                  during these dates.
                </p>
                <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/coffee.jpg"
                    alt="CoffeeDates"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TimelineItem>

            {/* The proposal */}
            <TimelineItem
              date="May 22, 2024"
              title="The Proposal"
              align="right"
              icon={<Sparkles className="h-6 w-6 text-[#BF9D3E]" />}
              collageImages={[
                { src: "/proposing.jpg", alt: "The moment" },
                { src: "/proposing2.jpg", alt: "Celebration" },
                { src: "/proposing3.jpg", alt: "After she said yes" },
              ]}
            >
              <div className="space-y-4">
                <p className="text-[#A3B899]">
                  The proposal was planned to perfection. It was disguised as a
                  family photo shoot that she had no idea would turn into a
                  proposal. Fun fact, she had cried to me the night before about
                  me not proposing yet!
                </p>
                <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/proposal.jpg"
                    alt="The proposal"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TimelineItem>

            {/* Wedding planning */}
            <TimelineItem
              date="Present Day"
              title="Planning Our Forever"
              align="left"
              icon={<Music className="h-6 w-6 text-[#4f4c42]" />}
              collageImages={[
                { src: "/planning1.jpg", alt: "Wedding planning" },
                { src: "/planning2.jpg", alt: "Venue visits" },
                { src: "/planning3.jpg", alt: "Future dreams" },
              ]}
            >
              <div className="space-y-4">
                <p className="text-[#A3B899]">
                  Now we&apos;re planning the day we&apos;ll officially begin
                  our forever. Every decision, from the flowers to the venue, is
                  a step closer to the moment we say &ldquo;I do.&rdquo; We
                  can&apos;t wait to celebrate with all of you!
                </p>
                <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/planning.jpg"
                    alt="Wedding planning"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TimelineItem>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-24 rounded-lg bg-[#FEFEFE] p-8 text-center shadow-md border border-[#A3B899]">
          <blockquote className="font-serif text-xl italic text-[#A3B899] md:text-2xl">
            &ldquo;Everything happens for a reason.&rdquo;
          </blockquote>
        </div>

        {/* Photo gallery teaser */}
        <div className="mt-24 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#BF9D3E]">
            Our Favorite Moments
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-0.5 w-16 bg-[#BF9D3E]"></div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { src: "/coffee.jpg", alt: "Coffee" },
              { src: "/proposal.jpg", alt: "Proposal" },
              { src: "/firstdate.jpg", alt: "First Date" },
              { src: "/firsttrip.jpg", alt: "First Trip" },
            ].map((image, i) => (
              <div
                key={i}
                className="group relative h-40 overflow-hidden rounded-lg md:h-52"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>

          <button className="mt-8 rounded-full bg-[#A3B899] px-6 py-3 text-white shadow-md transition-colors hover:bg-[#8fa67d]">
            View All Photos
          </button>
        </div>
      </div>
    </div>
  );
}

// Timeline item component
interface TimelineItemProps {
  date: string;
  title: string;
  align: "left" | "right";
  icon: React.ReactNode;
  children: React.ReactNode;
  collageImages?: { src: string; alt: string }[];
}

function CollageImage({
  image,
  position,
  rotation,
  zIndex,
}: {
  image: { src: string; alt: string };
  position: { top: string; left: string };
  rotation: number;
  zIndex: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="absolute shadow-lg rounded-lg overflow-hidden border-2 border-white cursor-pointer"
      style={{
        width: isHovered ? "65%" : "55%",
        height: isHovered ? "65%" : "55%",
        top: position.top,
        left: position.left,
        zIndex: isHovered ? 100 : zIndex,
        transform: isHovered ? "rotate(0deg)" : `rotate(${rotation}deg)`,
        transition: "all 0.4s ease-in-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        fill
        className="object-cover"
      />
    </div>
  );
}

function TimelineItem({
  date,
  title,
  align,
  icon,
  children,
  collageImages = [],
}: TimelineItemProps) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Content */}
      <div
        className={`w-full md:w-5/12  ${
          align === "left" ? "md:mr-auto md:text-right" : "md:ml-auto"
        }`}
      >
        <div className="rounded-lg bg-[#fefefe] border-[#BF9D3E] border-[.5px] p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
          <span className="inline-block rounded bg-[#A3B899] bg-opacity-10 px-3 py-1 text-sm font-medium text-[#BF9D3E]">
            {date}
          </span>
          <h3 className="mt-2 font-serif text-2xl font-bold text-[#BF9D3E]">
            {title}
          </h3>
          <div className="mt-4">{children}</div>
        </div>
      </div>

      {/* Photo Collage - only show if there are images */}
      {collageImages.length > 0 && (
        <div
          className={`hidden md:block absolute w-5/12 h-80 ${
            align === "left" ? "right-0" : "left-0"
          }`}
        >
          <div className="relative w-full h-full">
            {collageImages.map((image, index) => {
              const positions = [
                { top: "0%", left: align === "left" ? "20%" : "10%" },
                { top: "35%", left: align === "left" ? "5%" : "40%" },
                { top: "15%", left: align === "left" ? "50%" : "0%" },
                { top: "55%", left: align === "left" ? "35%" : "25%" },
              ];
              const pos = positions[index % positions.length];
              const rotation = index % 2 === 0 ? -4 + index * 2 : 4 - index * 2;

              return (
                <CollageImage
                  key={index}
                  image={image}
                  position={pos}
                  rotation={rotation}
                  zIndex={index + 1}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Icon */}
      <div className="absolute left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full bg-white shadow-md">
        {icon}
      </div>
    </div>
  );
}
