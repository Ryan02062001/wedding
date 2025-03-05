"use client";
import Image from "next/image";
import React from "react";

const grids = [
  {
    // First grid with 12 rows
    gridClass: "grid grid-cols-12 grid-rows-12 w-full h-full gap-5",
    images: [
      {
        src: "/grid7.JPG",
        gridClasses: "col-start-1 col-span-6 row-start-1 row-span-3",
      },
      {
        src: "/grid2.JPG",
        gridClasses: "col-start-7 col-span-3 row-start-1 row-span-3",
      },
      {
        src: "/grid6.JPG",
        gridClasses: "col-start-10 col-span-full row-start-1 row-span-6",
      },
      {
        src: "/grid3.JPG",
        gridClasses: "col-start-1 col-span-3 row-start-4 row-span-3",
      },
      {
        src: "/grid10.JPG",
        gridClasses: "col-start-4 col-span-3 row-start-4 row-span-3",
      },
      {
        src: "/grid8.JPG",
        gridClasses: "col-start-7 col-span-3 row-start-4 row-span-3",
      },
      {
        src: "/grid4.JPG",
        gridClasses: "col-start-1 col-span-3 row-start-7 row-span-full",
      },
      {
        src: "/grid1.JPG",
        gridClasses: "col-start-7 col-span-full row-start-7 row-span-3",
      },
      {
        src: "/grid5.JPG",
        gridClasses: "col-start-4 col-span-3 row-start-7 row-span-3",
      },
      {
        src: "/grid11.JPG",
        gridClasses: "col-start-4 col-span-3 row-start-10 row-span-full",
      },
      {
        src: "/grid19.JPG",
        gridClasses: "col-start-7 col-span-3 row-start-10 row-span-full",
      },
      {
        src: "/grid17.JPG",
        gridClasses: "col-start-10 col-span-3 row-start-10 row-span-full",
      },
    ],
  },
  {
    // Second grid with 6 rows
    gridClass: "grid grid-cols-12 grid-rows-6 w-full h-full gap-5",
    images: [
      {
        src: "/grid18.JPG",
        gridClasses: "col-start-1 col-span-6 row-start-1 row-span-3",
      },
      {
        src: "/grid12.JPG",
        gridClasses: "col-start-7 col-span-3 row-start-1 row-span-3",
      },
      {
        src: "/grid20.JPG",
        gridClasses: "col-start-10 col-span-full row-start-1 row-span-6",
      },
      {
        src: "/grid14.JPG",
        gridClasses: "col-start-1 col-span-3 row-start-4 row-span-3",
      },
      {
        src: "/grid9.JPG",
        gridClasses: "col-start-4 col-span-3 row-start-4 row-span-3",
      },
      {
        src: "/grid16.JPG",
        gridClasses: "col-start-7 col-span-3 row-start-4 row-span-3",
      },
    ],
  },
];

export default function PhotoGrid() {
  const commonWrapperClasses =
    "overflow-hidden transition-transform duration-300 hover:scale-105";
  const commonImageClasses =
    "w-full h-full object-cover rounded-md border border-[#BF9D3E]";

  return (
    <div className="w-full p-10 space-y-5">
      {grids.map((grid, gridIndex) => (
        <div key={gridIndex} className={grid.gridClass}>
          {grid.images.map((img, imgIndex) => (
            <div
              key={imgIndex}
              className={`${img.gridClasses} ${commonWrapperClasses}`}
            >
              <Image
                src={img.src}
                alt="Background Image"
                width={3840}
                height={2160}
                className={commonImageClasses}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
