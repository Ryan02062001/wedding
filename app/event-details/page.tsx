import React from "react";
import EventDetailsGrid from "./components/event-details-grid";
import EventHero from "./components/event-hero";
import Traveling from "./components/traveling";

export default function Page() {
  return (
    <div>
      <EventHero />
      <EventDetailsGrid />
      <Traveling />
    </div>
  );
}
