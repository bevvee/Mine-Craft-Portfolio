import React from 'react';
import { MinecraftPanel } from '../ui/MinecraftPanel';
import { User } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <MinecraftPanel title="Inventory" className="bg-[#1a1a2e]/90">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Character Preview */}
          <div className="col-span-1 flex flex-col items-center">
            <div className="w-48 h-64 bg-black/40 border-4 border-[#374151] p-2 flex items-center justify-center relative mb-4">
              {/* Inner border */}
              <div className="absolute inset-1 border-2 border-white/10 pointer-events-none"></div>
              
              <div className="flex flex-col items-center">
                <User className="w-24 h-24 text-gray-400 mb-4" />
                <span className="font-display text-[10px] text-green-400">Level 21 Developer</span>
              </div>
            </div>
            
            {/* Armor Slots */}
            <div className="flex gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="mc-hotbar-slot w-10 h-10"></div>
              ))}
            </div>
          </div>
          
          {/* Stats & Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-black/30 p-3 border-2 border-[#374151]">
                <div className="text-gray-400 text-xs mb-1">Name</div>
                <div className="font-bold text-white">Mohammed Amine El Aazzouzi</div>
              </div>
              <div className="bg-black/30 p-3 border-2 border-[#374151]">
                <div className="text-gray-400 text-xs mb-1">Location</div>
                <div className="font-bold text-white">Oujda, Morocco</div>
              </div>
              <div className="bg-black/30 p-3 border-2 border-[#374151]">
                <div className="text-gray-400 text-xs mb-1">Current Role</div>
                <div className="font-bold text-green-400 text-sm">Dev @ Simacode</div>
              </div>
              <div className="bg-black/30 p-3 border-2 border-[#374151]">
                <div className="text-gray-400 text-xs mb-1">Languages</div>
                <div className="font-bold text-white text-sm">Arabic, English, French</div>
              </div>
            </div>
            
            <div className="bg-black/30 p-4 border-2 border-[#374151]">
              <div className="text-gray-400 text-xs mb-2">Lore</div>
              <p className="text-gray-300 font-mono leading-relaxed">
                Passionate software developer specializing in full-stack web and mobile development. 
                Equipped with strong problem-solving skills and a drive to craft elegant digital experiences.
                Always ready to tackle new quests and level up my technical stack.
              </p>
            </div>
          </div>
        </div>
      </MinecraftPanel>
    </section>
  );
}
