import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { properties } from '../mock';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for property images
      gsap.utils.toArray('.property-image').forEach((img) => {
        gsap.to(img, {
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          },
          yPercent: -15,
          ease: 'none'
        });
      });

      // Property cards stagger
      gsap.from('.property-card', {
        scrollTrigger: {
          trigger: '.properties-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative py-24 bg-[#0a0a0b] text-white">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Projects <span className="text-[#D4AF37]">We've Done</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Plots we've successfully delivered for clients who trusted us with their perfect plot location
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6"></div>
        </div>

        {/* Bento grid layout */}
        <div className="properties-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {properties.map((property, index) => {
            const isLarge = index === 0 || index === 4;
            return (
              <div
                key={property.id}
                className={`property-card group relative overflow-hidden rounded-2xl ${isLarge ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
              >
                {/* Image container with parallax */}
                <div className="relative h-full min-h-[400px] overflow-hidden bg-[#1a1a1c]">
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="property-image w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-125"
                    />
                  </div>

                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
                      {property.title}
                    </h3>
                    {property.location && (
                      <p className="text-white/90 text-sm font-medium drop-shadow-md">
                        {property.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
