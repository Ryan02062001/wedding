"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // This will control the stagger effect for children
      staggerChildren: 0.2,
    },
  },
};

const nameVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function HomepageHero() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 w-full">
      {/* Gold Subheading */}

      <p className="text-sm sm:text-3xl tracking-wide font-bold text-[#fefefe]">
        We&apos;re Getting Married
      </p>

      {/* Container for the staggered entrance */}
      <motion.div
        className="flex flex-col items-center justify-center space-y-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Each name gets its own motion element */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold font-brush tracking-wide text-[#fefefe]"
          variants={nameVariants}
        >
          Ryan Cooper
        </motion.h1>
        <motion.h1
          className="text-7xl md:text-9xl font-extrabold font-brush tracking-wide text-[#fefefe]"
          variants={nameVariants}
        >
          &amp;
        </motion.h1>
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold font-brush tracking-wide text-[#fefefe]"
          variants={nameVariants}
        >
          Nicol Middleton
        </motion.h1>
      </motion.div>

      {/* Gold Date */}
      <p className="text-xl font-bold sm:text-3xl text-[#fefefe]">06.21.2025</p>
    </div>
  );
}
