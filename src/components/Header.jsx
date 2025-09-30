import React, { useState } from 'react';
import aptitpsLogo from '../assets/aptitps-logo.png';
import { Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={aptitpsLogo}
              alt="APTITPS Logo"
              className="h-12 w-auto object-contain"
              style={{ maxWidth: '160px' }}
            />
            <div className="text-sm">
              <div className="font-bold">APT IT</div>
              <div className="text-xs text-gray-300">Professional Services</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="hover:text-orange-400 transition-colors" onClick={e => { e.preventDefault(); setCurrentPage('home'); }}>Home</a>
            <a href="#about" className="hover:text-orange-400 transition-colors" onClick={e => { e.preventDefault(); setCurrentPage('about'); }}>About Us</a>
            <div className="relative group">
              <a href="#services" className="hover:text-orange-400 transition-colors flex items-center space-x-1" onClick={e => { e.preventDefault(); setCurrentPage('services'); }}>
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                <a href="#mobile" className="block px-4 py-2 hover:bg-gray-100">Mobile App Development</a>
                <a href="#web" className="block px-4 py-2 hover:bg-gray-100">Web Development</a>
                <a href="#staff" className="block px-4 py-2 hover:bg-gray-100">Staff Augmentation</a>
              </div>
            </div>
            <a href="#careers" className="hover:text-orange-400 transition-colors" onClick={e => { e.preventDefault(); setCurrentPage('careers'); }}>Careers</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors" onClick={e => { e.preventDefault(); setCurrentPage('contact'); }}>Contact Us</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-orange-400">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (718) 360-4995</span>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-sm flex items-center space-x-2 transition-colors">
              <Mail className="w-4 h-4" />
              <span>Mail Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-800 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-orange-400 transition-colors" onClick={e => { e.preventDefault(); setCurrentPage('home'); setIsMenuOpen(false); }}>Home</a>
              <a href="#about" className="hover:text-orange-400 transition-colors" onClick={e => { e.preventDefault(); setCurrentPage('about'); setIsMenuOpen(false); }}>About Us</a>
              <div className="relative">
                <a href="#services" className="hover:text-orange-400 transition-colors" onClick={e => { e.preventDefault(); setCurrentPage('services'); setIsMenuOpen(false); }}>Services</a>
                <div className="pl-4 flex flex-col">
                  <a href="#mobile" className="hover:text-orange-400 transition-colors">Mobile App Development</a>
                  <a href="#web" className="hover:text-orange-400 transition-colors">Web Development</a>
                  <a href="#staff" className="hover:text-orange-400 transition-colors">Staff Augmentation</a>
                </div>
              </div>
              <a href="#careers" className="hover:text-orange-400 transition-colors" onClick={e => { e.preventDefault(); setCurrentPage('careers'); setIsMenuOpen(false); }}>Careers</a>
              <a href="#contact" className="hover:text-orange-400 transition-colors" onClick={e => { e.preventDefault(); setCurrentPage('contact'); setIsMenuOpen(false); }}>Contact Us</a>
              <div className="flex items-center space-x-2 text-orange-400 pt-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (718) 360-4995</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;