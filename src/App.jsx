import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Always use dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Handle Scroll Spy (Detect active section)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100">
      
      {/* Global Custom Styles */}
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #ff6b35 0%, #ff8555 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .clip-profile {
          clip-path: polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%);
        }
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(1deg); } }
        .animate-float { animation: float 4s ease-in-out infinite; }
        @keyframes shimmer { 0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); } 100% { transform: translateX(100%) translateY(100%) rotate(45deg); } }
        .shimmer-effect { animation: shimmer 3s infinite; }
      `}</style>

      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}