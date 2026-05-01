import React from "react";
import { Link } from "wouter";
import { User, Briefcase, Code, BookOpen, Settings, Phone } from "lucide-react";

export function Navbar() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', icon: <User className="w-6 h-6" />, label: 'About' },
    { id: 'experience', icon: <Briefcase className="w-6 h-6" />, label: 'Exp' },
    { id: 'projects', icon: <Code className="w-6 h-6" />, label: 'Projects' },
    { id: 'skills', icon: <Settings className="w-6 h-6" />, label: 'Skills' },
    { id: 'education', icon: <BookOpen className="w-6 h-6" />, label: 'Edu' },
    { id: 'contact', icon: <Phone className="w-6 h-6" />, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
      <div className="max-w-3xl mx-auto flex justify-center pointer-events-auto">
        <div className="flex gap-1 md:gap-2 p-2 bg-[#8b8b8b]/90 border-4 border-[#374151] backdrop-blur-md" 
             style={{ 
               borderTopColor: '#1f2937', 
               borderLeftColor: '#1f2937',
               borderBottomColor: '#9ca3af',
               borderRightColor: '#9ca3af',
             }}>
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="mc-hotbar-slot hover:bg-white/20 transition-colors group relative"
              aria-label={item.label}
            >
              <div className="text-white group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              
              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                <div className="bg-black/90 text-white font-display text-[10px] px-2 py-1 border-2 border-white/20">
                  {item.label}
                </div>
              </div>
              
              {/* Slot number indicator */}
              <span className="absolute bottom-0.5 right-1 text-white font-display text-[8px] opacity-70">
                {i + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
