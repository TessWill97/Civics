"use client";

import Image from "next/image";
import { useState } from "react";

// Simple clickable overlay definitions
const hotspots = [
  {
    id: 1,
    label: "Hotspot One",
    x: "20%",
    y: "30%",
    text: "This is the text shown when Hotspot One is clicked."
  },
  {
    id: 2,
    label: "Hotspot Two",
    x: "55%",
    y: "45%",
    text: "Here is some information related to Hotspot Two."
  },
  {
    id: 3,
    label: "Hotspot Three",
    x: "70%",
    y: "65%",
    text: "Additional details appear for Hotspot Three."
  }
];

export default function Page() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const activeData = hotspots.find(h => h.id === activeHotspot);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image src="/background.jpg" fill alt="Background" />


      {/* Clickable Overlay Images */}
      {hotspots.map(hotspot => (
        <button
          key={hotspot.id}
          onClick={() => setActiveHotspot(hotspot.id)}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: hotspot.x, top: hotspot.y }}
        >
          <Image
            src="/icon.png" // overlay icon image
            alt={hotspot.label}
            width={48}
            height={48}
          />
        </button>
      ))}

      {/* Text Display Panel */}
      {activeData && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-xl bg-white/90 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            {activeData.label}
          </h2>
          <p className="text-base mb-4">
            {activeData.text}
          </p>
          <button
            onClick={() => setActiveHotspot(null)}
            className="text-sm underline"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
