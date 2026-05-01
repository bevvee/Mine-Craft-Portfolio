import React from 'react';
import { motion } from 'framer-motion';
import { MinecraftPanel } from '../ui/MinecraftPanel';
import { Briefcase, Award } from 'lucide-react';

const experiences = [
  {
    title: "Software Developer",
    company: "Simacode",
    date: "Sep 2024 - Present",
    location: "Oujda, MA",
    description: "Web & mobile development, REST API design, backend, DB, mobile interfaces.",
    xp: "+500 XP"
  },
  {
    title: "IT Lead",
    company: "NASA Space Apps Challenge",
    date: "2024 - 2025",
    location: "Remote/Event",
    description: "Infrastructure coordination & technical support. Python, MongoDB, SQLite, PHP, Angular.",
    xp: "+350 XP"
  },
  {
    title: "Full-Stack Intern",
    company: "OFPPT",
    date: "Jan 2024 - Mar 2024",
    location: "Oujda, MA",
    description: "Web app for trainee management & discipline tracking. DB design, backend, frontend.",
    xp: "+200 XP"
  },
  {
    title: "Ambassador",
    company: "Human AI",
    date: "2023 - 2024",
    location: "Remote",
    description: "Monthly AI workshops with Python & Laravel demos. Grew community participation.",
    xp: "+150 XP"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
      <MinecraftPanel title="Quest Log" className="bg-[#1a1a2e]/90 border-blue-900/50">
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-[#374151]">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-none bg-[#1f2937] border-4 border-[#6b7280] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-4 h-4 text-yellow-400" />
              </div>
              
              {/* Content card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 bg-[#2a2a35] border-2 border-[#4b5563] shadow-[inset_-2px_-2px_0_rgba(0,0,0,0.3),inset_2px_2px_0_rgba(255,255,255,0.1)] relative">
                
                <div className="flex justify-between items-start mb-2 flex-col sm:flex-row sm:items-center gap-2">
                  <h3 className="font-bold text-white text-lg">{exp.title}</h3>
                  <div className="flex items-center gap-1 bg-black/40 px-2 py-1 border border-white/10">
                    <Award className="w-3 h-3 text-green-400" />
                    <span className="font-display text-[8px] text-green-400">{exp.xp}</span>
                  </div>
                </div>
                
                <div className="text-blue-300 font-bold mb-1 font-display text-[10px]">{exp.company}</div>
                <div className="text-gray-400 text-xs mb-3 font-mono">{exp.date} | {exp.location}</div>
                
                <p className="text-gray-300 text-sm font-mono leading-relaxed bg-black/20 p-2 border-l-2 border-blue-500/50">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </MinecraftPanel>
    </section>
  );
}
