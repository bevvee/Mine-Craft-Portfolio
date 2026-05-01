import React from 'react';
import { motion } from 'framer-motion';
import { MinecraftPanel } from '../ui/MinecraftPanel';
import { Book } from 'lucide-react';

const education = [
  {
    school: "EHEI (École des Hautes Études d'Ingénierie)",
    degree: "Engineering in Computer Science",
    date: "2024 - Present (Expected 2027)",
    location: "Oujda, MA",
    level: "Level 50 Enchantment"
  },
  {
    school: "OFPPT",
    degree: "Full-Stack Digital Development",
    date: "2022 - 2024",
    location: "Oujda, MA",
    level: "Level 20 Enchantment"
  },
  {
    school: "Lycée Mohamed 6",
    degree: "Bac Electrical Engineering (IT & Networks)",
    date: "2021 - 2022",
    location: "Oujda, MA",
    level: "Level 10 Enchantment"
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 px-4 max-w-4xl mx-auto">
      <MinecraftPanel title="Enchanting Table" className="bg-[#1a1a2e]/90 border-purple-900/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#2a2a35] border-4 border-[#4b5563] p-4 flex flex-col group hover:border-purple-500/50 transition-colors"
              style={{
                borderTopColor: '#6b7280',
                borderLeftColor: '#6b7280',
              }}
            >
              <div className="flex justify-center mb-4">
                <motion.div 
                  whileHover={{ y: -5, rotate: [0, -5, 5, 0] }}
                  className="w-16 h-16 bg-[#1f2937] border-2 border-black flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)] relative"
                >
                  <Book className="w-8 h-8 text-purple-400 group-hover:text-purple-300" />
                  
                  {/* Floating magic particles */}
                  <div className="absolute -top-2 -right-2 text-[10px] text-purple-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity">ᔑ</div>
                  <div className="absolute -bottom-2 -left-2 text-[10px] text-purple-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity delay-75">リ</div>
                </motion.div>
              </div>
              
              <div className="text-center mb-4 border-b-2 border-purple-900/50 pb-2">
                <span className="font-display text-[8px] text-purple-400 block mb-1">
                  {edu.level}
                </span>
                <div className="text-gray-400 font-mono text-xs font-bold leading-tight" style={{ fontFamily: '"Minecraft Enchanting", monospace', letterSpacing: '2px' }}>
                  {/* Fake enchanting text generated dynamically */}
                  {Array.from({length: 8}).map(() => String.fromCharCode(0x1400 + Math.random() * 50)).join('')}
                </div>
              </div>
              
              <div className="flex-1 flex flex-col items-center text-center">
                <h3 className="font-bold text-white text-sm mb-1">{edu.degree}</h3>
                <div className="text-blue-300 font-display text-[8px] mb-2 leading-relaxed">{edu.school}</div>
                <div className="text-gray-500 font-mono text-xs mt-auto">{edu.date} | {edu.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </MinecraftPanel>
    </section>
  );
}
