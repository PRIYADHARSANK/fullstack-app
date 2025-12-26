import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { companyInfo } from '../mock';
import { Mail, Phone, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);



  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyInfo.contact.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
  };

  const handleEmail = () => {
    window.location.href = `mailto:${companyInfo.contact.email}`;
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 bg-[#0f0f11] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700] rounded-full filter blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-[#D4AF37]">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's discuss your real estate requirements
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div ref={formRef}>
            {/* Contact info */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6 text-[#D4AF37]">Contact Information</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Reach out to us through any of the following channels. We're here to help you find your perfect property.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div
                  onClick={handleWhatsApp}
                  className="group flex items-start gap-4 p-6 bg-gradient-to-br from-[#1a1a1c] to-[#0f0f11] rounded-xl border border-[#2a2a2c] hover:border-[#D4AF37] transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                    <p className="text-lg font-semibold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                      {companyInfo.contact.whatsapp}
                    </p>
                  </div>
                </div>

                <div
                  onClick={handleEmail}
                  className="group flex items-start gap-4 p-6 bg-gradient-to-br from-[#1a1a1c] to-[#0f0f11] rounded-xl border border-[#2a2a2c] hover:border-[#D4AF37] transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-lg font-semibold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                      {companyInfo.contact.email}
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-6 bg-gradient-to-br from-[#1a1a1c] to-[#0f0f11] rounded-xl border border-[#2a2a2c] md:col-span-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Address</p>
                    <p className="text-lg font-semibold text-white">
                      {companyInfo.contact.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
