import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { properties } from '../mock';
import { MapPin, Home, Bath, Maximize } from 'lucide-react';

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
            Featured <span className="text-[#D4AF37]">Properties</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our handpicked collection of premium properties
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
                className={`property-card group relative overflow-hidden rounded-2xl ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : ''
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
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  {/* Featured badge */}
                  {property.featured && (
                    <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold rounded-full text-sm">
                      Featured
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm mb-4">
                        {property.type}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                      {property.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gray-300 mb-4">
                      <MapPin className="w-4 h-4 text-[#D4AF37]" />
                      <span>{property.location}</span>
                    </div>

                    <div className="flex items-center gap-6 mb-4 text-sm text-gray-300">
                      {property.bedrooms && (
                        <div className="flex items-center gap-2">
                          <Home className="w-4 h-4 text-[#D4AF37]" />
                          <span>{property.bedrooms} BR</span>
                        </div>
                      )}
                      {property.bathrooms && (
                        <div className="flex items-center gap-2">
                          <Bath className="w-4 h-4 text-[#D4AF37]" />
                          <span>{property.bathrooms} BA</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Maximize className="w-4 h-4 text-[#D4AF37]" />
                        <span>{property.area}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-[#D4AF37]">{property.price}</span>
                      <button className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300">
                        View Details
                      </button>
                    </div>
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
