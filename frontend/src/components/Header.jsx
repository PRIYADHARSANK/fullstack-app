import React, { useState, useEffect } from 'react';
import { companyInfo } from '../mock';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen
        ? 'bg-[#0a0a0b]/95 backdrop-blur-lg border-b border-[#2a2a2c]'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={companyInfo.logo}
              alt={companyInfo.name}
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-[#D4AF37]">{companyInfo.name}</h1>
              <p className="text-xs text-gray-400">Trusted Real Estate Partner</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 font-medium"
            >
              Properties
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-105"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#2a2a2c] py-6">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 font-medium py-2"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 font-medium py-2"
              >
                Properties
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] w-full"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
