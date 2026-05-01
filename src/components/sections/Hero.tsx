import React from 'react';
import { motion } from 'framer-motion';
import { MinecraftButton } from '../ui/MinecraftButton';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center relative pt-20 pb-10 px-4">
      {/* Achievement Popup Animation */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 15, delay: 0.5 }}
        className="absolute top-24 left-1/2 -translate-x-1/2 bg-[#212121] border-2 border-white p-3 flex items-center gap-4 min-w-[300px] z-10"
      >
        <div className="w-8 h-8 bg-yellow-400 border-2 border-yellow-600 rounded-sm flex items-center justify-center">
          ⭐
        </div>
        <div>
          <div className="text-yellow-400 font-display text-[10px] mb-1">Achievement Get!</div>
          <div className="text-white font-display text-xs">You Spawned!</div>
        </div>
      </motion.div>

      <div className="text-center z-10 max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-display text-white mb-6 mc-text-shadow-gold leading-tight tracking-wider">
            MOHAMMED<br/>AMINE<br/>EL AAZZOUZI
          </h1>
          
          <div className="inline-block bg-black/60 px-6 py-3 border-2 border-white/20 mb-8">
            <h2 className="text-xl md:text-2xl text-green-400 font-mono font-bold mc-text-shadow">
              Full-Stack & Mobile Developer
            </h2>
          </div>
          
          <p className="text-gray-300 text-lg md:text-xl font-mono mb-12 max-w-2xl mx-auto bg-black/40 p-4 border border-white/10">
            Level 21 | Based in Oujda, Morocco
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MinecraftButton 
            primary 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Inventory
          </MinecraftButton>
          <MinecraftButton 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Multiplayer
          </MinecraftButton>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-white/50 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown className="w-8 h-8" />
        <span className="font-display text-[10px] mt-2 block">SCROLL</span>
      </motion.div>
    </section>
  );
}
