import React from 'react';
import { motion } from 'framer-motion';
import { MinecraftPanel } from '../ui/MinecraftPanel';

const skillCategories = [
  {
    name: "Languages",
    level: 90,
    skills: ["PHP", "Java", "C++", "JavaScript", "TypeScript", "Python", "C#"]
  },
  {
    name: "Web",
    level: 85,
    skills: ["Laravel", "React", "ExpressJS", "Spring Boot", "Symfony", "Angular", "JEE", "ASP.NET Core", "Zend"]
  },
  {
    name: "Mobile",
    level: 75,
    skills: ["React Native", "Cordova"]
  },
  {
    name: "Databases",
    level: 80,
    skills: ["MySQL", "SQLite", "MongoDB", "SQL Server"]
  },
  {
    name: "DevOps",
    level: 70,
    skills: ["Git", "Docker", "CI/CD", "AWS", "Azure"]
  },
  {
    name: "Testing",
    level: 65,
    skills: ["JUnit", "Jest", "PHPUnit"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-4xl mx-auto">
      <MinecraftPanel title="Skills & XP" className="bg-[#1a1a2e]/90 border-green-900/50">
        <div className="space-y-8">
          {skillCategories.map((category, i) => (
            <div key={i} className="bg-black/30 p-4 border-2 border-[#374151]">
              <div className="flex justify-between items-end mb-2">
                <h3 className="font-display text-sm text-green-400">{category.name}</h3>
                <span className="font-mono text-xs text-gray-400">Level {category.level}</span>
              </div>
              
              {/* XP Bar Background */}
              <div className="h-4 bg-[#1f2937] border-2 border-black w-full relative mb-3 overflow-hidden shadow-inner">
                {/* XP Bar Fill */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${category.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  className="h-full bg-green-500 border-t-2 border-green-300 border-b-2 border-green-700 relative"
                >
                  {/* Glint effect */}
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                </motion.div>
                
                {/* XP Bar Notches */}
                <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20">
                  {[...Array(10)].map((_, j) => (
                    <div key={j} className="h-full w-[2px] bg-black"></div>
                  ))}
                </div>
              </div>
              
              {/* Items/Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <div key={j} className="bg-[#4b5563] text-white text-xs px-2 py-1 font-mono border-b-2 border-r-2 border-[#1f2937] hover:bg-[#6b7280] transition-colors cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MinecraftPanel>
    </section>
  );
}
