import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { Education } from "../components/sections/Education";
import { Contact } from "../components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-[#1a1a2e] text-white min-h-screen relative font-mono overflow-x-hidden">
      {/* Minecraft Sky/Stars background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#0d1117]/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        {/* Pixel stars generated via CSS box-shadow could go here, for now using a subtle pattern */}
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <main className="pb-24">
          <Hero />
          
          <div className="max-w-5xl mx-auto space-y-32">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
          </div>
        </main>
        
        <Contact />
      </div>
    </div>
  );
}
