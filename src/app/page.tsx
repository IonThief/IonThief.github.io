import Navbar from "@/components/layout/Navbar";
import ScrollButtons from "@/components/common/ScrollButtons";
import Hero from "@/components/sections/Hero";
import LatestPosts from "@/components/sections/LatestPosts";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Publications from "@/components/sections/Publications";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <ScrollButtons />

      {/* Static Hero Section */}
      <Hero />

      {/* Sections */}
      <LatestPosts />
      <div id="projects"><Projects /></div>
      <div id="publications"><Publications /></div>

      <footer className="py-12 text-center text-secondary text-sm font-mono border-t border-slate-800 mt-12 bg-surface/20">
        <p className="opacity-50 mt-2">© {new Date().getFullYear()} IonThief</p>
      </footer>
    </div>
  );
}
