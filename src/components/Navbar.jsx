import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setMobileMenuOpen(false);
  };

  const navLinks = ['home', 'about', 'projects', 'certificates', 'contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <div
            className="font-serif text-2xl font-bold cursor-pointer hover:text-[#ff6b35] transition-colors"
            onClick={() => scrollToSection('home')}
          >
            DINU DEVEES GEORGE
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(section => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`capitalize font-medium transition-colors ${activeSection === section ? 'text-[#ff6b35]' : 'text-neutral-400 hover:text-[#ff6b35]'
                  }`}
              >
                {section}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pt-4 mt-4 border-t border-neutral-800 flex flex-col gap-4">
            {navLinks.map(section => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`capitalize font-medium text-left ${activeSection === section ? 'text-[#ff6b35]' : 'text-neutral-400'
                  }`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}