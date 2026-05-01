import React from 'react';
import { motion } from 'framer-motion';
import { MinecraftPanel } from '../ui/MinecraftPanel';

const projects = [
  {
    title: "Pharmaceutical Management System (PFE)",
    date: "2024-2025",
    description: "Stock, sales, returns, prescriptions, supplier management.",
    tech: ["Java (MVP)", "C++/Qt", "PHP", "HTML/CSS/JS", "AJAX", "MySQL"],
    icon: "🧪"
  },
  {
    title: "Legends Pass",
    date: "2025",
    description: "Mobile app + back-office + API for local business subscriptions & promotions.",
    tech: ["Laravel", "Tailwind", "React Native", "MySQL", "REST API"],
    icon: "🎫"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-4xl mx-auto">
      <MinecraftPanel title="Crafting Table" className="bg-[#1a1a2e]/90 border-orange-900/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#374151] border-4 border-[#1f2937] p-4 relative"
              style={{
                borderTopColor: '#9ca3af',
                borderLeftColor: '#9ca3af',
              }}
            >
              {/* Grid pattern background to look like crafting grid */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                   style={{
                     backgroundImage: 'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)',
                     backgroundSize: '32px 32px'
                   }}>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-black/40 border-2 border-[#1f2937] flex items-center justify-center text-2xl shadow-inner">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white leading-tight">{project.title}</h3>
                    <div className="text-gray-400 font-mono text-xs">{project.date}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 font-mono text-sm mb-4 bg-black/20 p-2">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <div className="text-[10px] font-display text-gray-400">Ingredients (Tech):</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-xs font-mono bg-[#1f2937] text-gray-300 px-2 py-1 border border-[#4b5563]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </MinecraftPanel>
    </section>
  );
}
