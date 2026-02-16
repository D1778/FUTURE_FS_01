import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

import profilePic from '../assets/my_aesthetic_picz.png';

export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">
          
          {/* === LEFT COLUMN: Text & Links === */}
          <div className="max-w-2xl">
            <p className="text-[#ff6b35] font-semibold tracking-wider mb-4 animate-fade-in">
              ASPIRING FULL STACK DEVELOPER
            </p>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Building Digital<br />
              <span className="gradient-text">Experiences</span>
            </h1>
            
            <p className="text-xl text-neutral-400 mb-10 leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              I'm a passionate and aspiring full-stack developer specializing in creating beautiful, functional web applications. 
              I turn ideas into elegant solutions using modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-7 py-3.5 bg-[#ff6b35] hover:bg-[#ff8555] text-white rounded-lg font-medium transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-[#ff6b35]/30 flex items-center gap-2"
              >
                View My Work <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-7 py-3.5 border border-neutral-800 hover:border-[#ff6b35] hover:text-[#ff6b35] rounded-lg font-medium transition-all"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {/* GitHub Link */}
              <a 
                href="https://github.com/D1778" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-500 hover:text-[#ff6b35] transition-colors"
              >
                <Github size={24} />
              </a>

              {/* LinkedIn Link */}
              <a 
                href="https://www.linkedin.com/in/dinu-devees-george" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-500 hover:text-[#ff6b35] transition-colors"
              >
                <Linkedin size={24} />
              </a>

              {/* Email Link */}
              <div className="relative group">
                <a 
                  href="mailto:dinudevees@gmail.com" 
                  className="text-neutral-500 hover:text-[#ff6b35] transition-colors"
                >
                  <Mail size={24} />
                </a>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-neutral-100 text-neutral-900 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  dinudevees@gmail.com
                </span>
              </div>
            </div>
          </div> 
          {/* ^^^ This closing div was missing in your previous code. It is fixed now. */}

          {/* === RIGHT COLUMN: Profile Image === */}
          <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] animate-float clip-profile bg-neutral-900 shadow-2xl shadow-[#ff6b35]/20 group overflow-hidden">
            <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] animate-float clip-profile bg-neutral-900 shadow-2xl shadow-[#ff6b35]/20 group">
              <img 
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none shimmer-effect z-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}