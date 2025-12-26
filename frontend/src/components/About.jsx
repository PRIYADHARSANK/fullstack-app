import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { companyInfo, features } from '../mock';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Building2,
  Users,
  Award,
  TrendingUp
};

const About = () => {
  const sectionRef = useRef(null);
  const founderRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Founder animation
      gsap.from(founderRef.current, {
        scrollTrigger: {
          trigger: founderRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power2.out'
      });

      // Features stagger animation
      gsap.fromTo('.feature-card',
        {
          opacity: 0,
          y: 40
        },
        {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out'
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-24 bg-[#0f0f11] text-white">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-[#D4AF37]">Peacock Promotors</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
        </div>

        {/* Founder section */}
        <div ref={founderRef} className="max-w-6xl mx-auto mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-[#1a1a1c] to-[#0f0f11] p-2 rounded-2xl">
                <div className="bg-[#1a1a1c] rounded-xl overflow-hidden">
                  <img
                    src={companyInfo.founder.photo}
                    alt={companyInfo.founder.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-4xl font-bold mb-2 text-[#D4AF37]">{companyInfo.founder.name}</h3>
                <p className="text-xl text-gray-400 mb-4">{companyInfo.founder.degrees}</p>
                <div className="w-16 h-1 bg-[#D4AF37]"></div>
              </div>

              <div>
                <p className="text-sm text-[#D4AF37] font-semibold uppercase tracking-wider">Founder & Managing Director</p>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                With decades of expertise in real estate, our founder has built Peacock Promotors
                into a trusted name synonymous with quality, integrity, and excellence.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Our commitment extends beyond transactions—we create lasting relationships and
                help families find spaces they can truly call home.
              </p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="feature-card group relative bg-gradient-to-br from-[#1a1a1c] to-[#0f0f11] p-8 rounded-2xl border border-[#2a2a2c] hover:border-[#D4AF37] transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
