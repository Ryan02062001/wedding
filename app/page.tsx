import BackgroundImage from "@/components/background-image";
import HomepageHero from "@/components/homepage-hero";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background image as a full screen, absolutely positioned element */}
      <BackgroundImage />

      {/* Content placed above the background */}
      <div className="relative z-10 p-4 text-center">
        <HomepageHero />
      </div>
    </div>
  );
}
