import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto pb-32">
      <div className="flex flex-col items-center justify-center">
        
        <motion.div 
          initial={{ rotateX: -90, opacity: 0 }}
          whileInView={{ rotateX: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 12 }}
          className="relative max-w-lg w-full perspective-1000"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Post/Pole */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-8 h-32 bg-[#5c3a21] border-l-4 border-r-4 border-black shadow-[inset_2px_0_0_rgba(255,255,255,0.1),inset_-2px_0_0_rgba(0,0,0,0.3)] z-0"></div>
          
          {/* Sign Board */}
          <div className="bg-[#8b5a2b] border-4 border-black p-6 relative z-10 shadow-[inset_4px_4px_0_rgba(255,255,255,0.1),inset_-4px_-4px_0_rgba(0,0,0,0.3),0_10px_20px_rgba(0,0,0,0.5)] flex flex-col items-center">
            
            {/* Wood grain lines (CSS generated) */}
            <div className="absolute inset-0 pointer-events-none opacity-20 border-4 border-transparent"
                 style={{
                   backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,0.2) 10px, rgba(0,0,0,0.2) 12px)',
                 }}>
            </div>
            
            <h2 className="font-display text-xl md:text-2xl text-black mb-6 text-center drop-shadow-[1px_1px_0_rgba(255,255,255,0.2)]">
              NOTICE BOARD
            </h2>
            
            <div className="w-full space-y-4">
              <a 
                href="mailto:mohammedamineelaazzouzi@gmail.com" 
                className="flex items-center gap-4 bg-[#7a4b24] p-3 border-2 border-black hover:bg-[#6e4320] transition-colors group"
              >
                <div className="w-10 h-10 bg-black/30 flex items-center justify-center shrink-0 border border-black">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-black font-bold font-mono text-sm group-hover:text-white transition-colors truncate">
                    mohammedamineelaazzouzi<br/>@gmail.com
                  </div>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/medelaazzouzi" 
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#7a4b24] p-3 border-2 border-black hover:bg-[#6e4320] transition-colors group"
              >
                <div className="w-10 h-10 bg-black/30 flex items-center justify-center shrink-0 border border-black">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-black font-bold font-mono text-sm group-hover:text-white transition-colors">
                    linkedin.com/in/medelaazzouzi
                  </div>
                </div>
              </a>
              
              <a 
                href="https://github.com/bevvee" 
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#7a4b24] p-3 border-2 border-black hover:bg-[#6e4320] transition-colors group"
              >
                <div className="w-10 h-10 bg-black/30 flex items-center justify-center shrink-0 border border-black">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-black font-bold font-mono text-sm group-hover:text-white transition-colors">
                    github.com/bevvee
                  </div>
                </div>
              </a>
            </div>
            
            <div className="mt-8 text-black/60 font-mono text-xs text-center border-t border-black/20 pt-4 w-full">
              Crafted with ⛏️ & ❤️
              <br/>
              © {new Date().getFullYear()} Mohammed Amine El Aazzouzi
            </div>
            
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
