"use client";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollButtons() {
  // Ensure these IDs match exactly what is in your src/app/page.tsx
  const sections = [
    "hero",
    "latest-logs",
    "projects",
    "publications"
  ];

  const handleScroll = (direction: "up" | "down") => {
    // Get all valid section elements that exist on the page
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // Calculate current positions relative to the viewport
    // rect.top is the distance from the top of your screen to the top of the element
    const positions = elements.map((el) => ({
      id: el.id,
      rectTop: el.getBoundingClientRect().top,
      currentScroll: window.scrollY
    }));

    if (direction === "down") {
      // Find the first section that starts clearly below the top of the screen (buffer of 120px)
      const next = positions.find((p) => p.rectTop > 120);

      if (next) {
        window.scrollTo({ top: next.currentScroll + next.rectTop - 85, behavior: "smooth" });
      } else {
        // If no section is found (we are at the last one), scroll to very bottom
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      }
    } else {
      // Find the section "closest" above us
      // We look for elements where rectTop is negative (above viewport) or very close to top
      const prev = [...positions].reverse().find((p) => p.rectTop < -120);

      if (prev) {
        window.scrollTo({ top: prev.currentScroll + prev.rectTop - 85, behavior: "smooth" });
      } else {
        // If nothing found above, go to absolute top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40 hidden md:flex">
      <button
        onClick={() => handleScroll("up")}
        className="p-3 bg-surface border border-slate-700 rounded-full text-secondary hover:text-primary hover:border-primary transition-all shadow-xl active:scale-95 bg-opacity-80 backdrop-blur-sm"
        aria-label="Previous section"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
      <button
        onClick={() => handleScroll("down")}
        className="p-3 bg-surface border border-slate-700 rounded-full text-secondary hover:text-primary hover:border-primary transition-all shadow-xl active:scale-95 bg-opacity-80 backdrop-blur-sm"
        aria-label="Next section"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </div>
  );
}
