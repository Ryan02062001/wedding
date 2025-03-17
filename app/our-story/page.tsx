import type React from "react";
import Image from "next/image";
import { Heart, Calendar, MapPin, Camera, Music, Sparkles } from "lucide-react";

export default function OurStory() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="font-serif text-4xl font-bold text-rose-800 md:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <div className="mt-4 flex justify-center">
            <div className="h-0.5 w-24 bg-rose-300"></div>
          </div>
          <p className="mt-6 text-lg text-gray-700 md:text-xl">
            The journey that led us to forever
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-rose-200"></div>

          {/* Timeline items */}
          <div className="space-y-24">
            {/* First meeting */}
            <TimelineItem
              date="January 15, 2019"
              title="When We First Met"
              align="right"
              icon={<Heart className="h-6 w-6 text-rose-500" />}
            >
              <div className="space-y-4">
                <p className="text-gray-700">
                  We met at a coffee shop downtown. I was reading my favorite
                  book when they asked if they could share my table. Little did
                  I know that this chance encounter would change my life
                  forever.
                </p>
                <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Our first meeting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TimelineItem>

            {/* First date */}
            <TimelineItem
              date="February 14, 2019"
              title="Our First Date"
              align="left"
              icon={<Calendar className="h-6 w-6 text-rose-500" />}
            >
              <div className="space-y-4">
                <p className="text-gray-700">
                  Our first date was at the botanical gardens. We spent hours
                  walking through the exhibits, talking about everything and
                  nothing. It was the first time I felt that special connection.
                </p>
                <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Our first date"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TimelineItem>

            {/* First trip */}
            <TimelineItem
              date="July 10, 2019"
              title="Our First Trip Together"
              align="right"
              icon={<MapPin className="h-6 w-6 text-rose-500" />}
            >
              <div className="space-y-4">
                <p className="text-gray-700">
                  We took our first trip to the coast. We spent days exploring
                  beaches, trying local foods, and watching sunsets. It was
                  during this trip that we realized we never wanted to be apart.
                </p>
                <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Our first trip"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TimelineItem>

            {/* Moving in */}
            <TimelineItem
              date="March 5, 2020"
              title="Moving In Together"
              align="left"
              icon={<Camera className="h-6 w-6 text-rose-500" />}
            >
              <div className="space-y-4">
                <p className="text-gray-700">
                  Taking the next step in our relationship, we decided to move
                  in together. Combining our lives under one roof brought us
                  even closer, as we created our first home together.
                </p>
                <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Moving in together"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TimelineItem>

            {/* The proposal */}
            <TimelineItem
              date="December 24, 2022"
              title="The Proposal"
              align="right"
              icon={<Sparkles className="h-6 w-6 text-rose-500" />}
            >
              <div className="space-y-4">
                <p className="text-gray-700">
                  Under a sky full of stars, surrounded by twinkling lights, I
                  got down on one knee and asked the most important question of
                  my life. And they said yes! It was the perfect moment that
                  we&apos;ll cherish forever.
                </p>
                <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
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
              icon={<Music className="h-6 w-6 text-rose-500" />}
            >
              <div className="space-y-4">
                <p className="text-gray-700">
                  Now we&apos;re planning the day we&apos;ll officially begin
                  our forever. Every decision, from the flowers to the venue, is
                  a step closer to the moment we say &ldquo;I do.&rdquo; We
                  can&apos;t wait to celebrate with all of you!
                </p>
                <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
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
        <div className="mt-24 rounded-lg bg-rose-50 p-8 text-center shadow-md">
          <blockquote className="font-serif text-xl italic text-gray-700 md:text-2xl">
            &ldquo;And suddenly all the love songs were about you.&rdquo;
          </blockquote>
        </div>

        {/* Photo gallery teaser */}
        <div className="mt-24 text-center">
          <h2 className="font-serif text-3xl font-bold text-rose-800">
            Our Favorite Moments
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-0.5 w-16 bg-rose-300"></div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="group relative h-40 overflow-hidden rounded-lg md:h-52"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Memory ${i}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>

          <button className="mt-8 rounded-full bg-rose-500 px-6 py-3 text-white shadow-md transition-colors hover:bg-rose-600">
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
}

function TimelineItem({
  date,
  title,
  align,
  icon,
  children,
}: TimelineItemProps) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Content */}
      <div
        className={`w-full md:w-5/12 ${
          align === "left" ? "md:mr-auto md:text-right" : "md:ml-auto"
        }`}
      >
        <div className="rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
          <span className="inline-block rounded bg-rose-100 px-3 py-1 text-sm font-medium text-rose-800">
            {date}
          </span>
          <h3 className="mt-2 font-serif text-2xl font-bold text-gray-800">
            {title}
          </h3>
          <div className="mt-4">{children}</div>
        </div>
      </div>

      {/* Icon */}
      <div className="absolute left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full bg-white shadow-md">
        {icon}
      </div>
    </div>
  );
}
