import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Popular Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-6">POPULAR LINKS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Staff Augmentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-6">ADDRESS</h3>
            <div className="text-gray-600">
              <p className="font-medium mb-2">APT IT PROFESSIONAL SERVICES, INC</p>
              <p>800 Third Avenue</p>
              <p>FRNT A #1472</p>
              <p>New York, NY 10022</p>
              <p>United States</p>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-6">GET IN TOUCH</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-3" />
                <a href="tel:+17183604995" className="hover:text-orange-500 transition-colors">
                  +1 (718) 360-4995
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-3" />
                <a href="mailto:info@aptips.com" className="hover:text-orange-500 transition-colors">
                  info@aptips.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-6">Find Us And Say HAI</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-3">FB</span>
                <a href="#" className="hover:text-orange-500 transition-colors">Facebook</a>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="bg-black text-white text-xs px-2 py-1 rounded mr-3">X</span>
                <a href="#" className="hover:text-orange-500 transition-colors">X</a>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded mr-3">IN</span>
                <a href="#" className="hover:text-orange-500 transition-colors">Instagram</a>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="bg-blue-700 text-white text-xs px-2 py-1 rounded mr-3">LI</span>
                <a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            ©Copyright 2025 <span className="text-orange-500 font-medium">APTTIPS</span> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;