import React from 'react';
import { Mail, Phone, MapPin, Clock, Users, Briefcase } from 'lucide-react';
import aptitpsLogo from '../assets/aptitps-logo.png';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Need Any Help Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Need Any Help?</h2>
          <p className="text-gray-600 text-lg">
            It really comes down to understanding the steps in the process and then executing on those steps.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email Us Card */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Email Us</h3>
            <p className="text-gray-600 mb-4">Email us if you have any question.</p>
            <div className="flex items-center text-orange-500">
              <Mail className="h-5 w-5 mr-2" />
              <a href="mailto:info@aptips.com" className="text-orange-500 hover:underline">
                info@aptips.com
              </a>
            </div>
          </div>

          {/* Call Us Card */}
          <div className="bg-orange-500 text-white p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Call us</h3>
            <p className="mb-4">Our support agent will work with you to meet your lending needs.</p>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <a href="tel:+17185324243" className="text-white hover:underline">
                +1 (718) 532-4243
              </a>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-slate-800 text-white p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <p>800 Third Avenue, FRNT A #1472, New York, NY 10022, United States.</p>
              </div>
              <div>
                <p className="font-semibold">Opening Time</p>
                <div className="flex items-center mt-1">
                  <Clock className="h-4 w-4 mr-2" />
                  <p className="text-sm">Mon- Fri: 9AM to 5PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center mr-4">
                <img src={aptitpsLogo} alt="APTITPS Logo" className="h-12 w-auto object-contain" style={{ maxWidth: '48px' }} />
              </div>
              <p className="text-gray-600 max-w-md">
                Create a free account to find thousands of Jobs, Employment & Career Opportunities around you!
              </p>
            </div>
            <div className="flex items-center space-x-12">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Briefcase className="h-8 w-8 text-orange-500 mr-2" />
                  <span className="text-3xl font-bold text-slate-800">1562</span>
                </div>
                <p className="text-gray-600">Jobs Posted</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-orange-500 mr-2" />
                  <span className="text-3xl font-bold text-slate-800">240</span>
                </div>
                <p className="text-gray-600">Companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;