import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#234e3f] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">KeenKeeper</h2>

        <p className="max-w-2xl text-gray-200 text-sm md:text-base mb-10 leading-relaxed font-light">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

        <div className="mb-16">
          <h4 className="text-lg font-semibold mb-4">Social Links</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white flex items-center justify-center rounded-full text-[#234e3f] hover:bg-gray-200 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white flex items-center justify-center rounded-full text-[#234e3f] hover:bg-gray-200 transition-colors">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white flex items-center justify-center rounded-full text-[#234e3f] hover:bg-gray-200 transition-colors">
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

        <div className="w-full border-t border-white/20 mb-8"></div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-300">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;