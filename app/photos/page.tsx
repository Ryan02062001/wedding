import React from "react";
import PhotoGrid from "./components/photo-grid";
import GalleryHero from "./components/gallery-hero";

export default function Page() {
  return (
    <div className="w-full">
      <GalleryHero />
      <PhotoGrid />
    </div>
  );
}
