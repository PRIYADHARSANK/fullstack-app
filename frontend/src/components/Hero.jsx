import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { companyInfo } from '../mock';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (logoLoaded) {
      const tl = gsap.timeline();
      
      // Logo intro animation
      tl.to(logoRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out'
      })
      .to(logoRef.current, {
        y: -100,
        scale: 0.4,
        duration: 0.8,
        ease: 'power2.inOut',
        delay: 0.5
      })
      .to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
      }, '-=0.4');
    }
  }, [logoLoaded]);

  const scrollToProperties = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={heroRef} className="relative min-h-screen bg-[#0a0a0b] text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1c] via-[#0a0a0b] to-[#000000]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#D4AF37] rounded-full filter blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFD700] rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Logo intro */}
      <div 
        ref={logoRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 scale-0"
      >
        <img 
          src={companyInfo.logo} 
          alt={companyInfo.name}
          className="w-48 h-48 object-contain drop-shadow-2xl"
          onLoad={() => setLogoLoaded(true)}
        />
      </div>

      {/* Hero content */}
      <div 
        ref={contentRef}
        className="relative z-10 container mx-auto px-6 pt-32 pb-20 opacity-0 translate-y-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
                Luxury Living
              </span>
              <br />
              <span className="text-white">Redefined</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover extraordinary properties that blend elegance with excellence. 
            Your dream home awaits with {companyInfo.name}.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={scrollToProperties}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Properties
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
            
            <a 
              href="#contact"
              className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-full transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-[#D4AF37] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
