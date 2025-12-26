import React from 'react';
import { companyInfo } from '../mock';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0b] text-white border-t border-[#2a2a2c]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={companyInfo.logo}
                alt={companyInfo.name}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-[#D4AF37]">{companyInfo.name}</h3>
                <p className="text-sm text-gray-400">Trusted Real Estate Partner</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted partner in premium real estate. We specialize in luxury properties
              that blend elegance with excellence.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                  Properties
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D4AF37]">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href={`tel:${companyInfo.contact.whatsapp}`} className="hover:text-[#D4AF37] transition-colors duration-300">
                  {companyInfo.contact.whatsapp}
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-[#D4AF37] transition-colors duration-300">
                  {companyInfo.contact.email}
                </a>
              </li>
              <li className="text-sm leading-relaxed">
                {companyInfo.contact.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2a2a2c] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
