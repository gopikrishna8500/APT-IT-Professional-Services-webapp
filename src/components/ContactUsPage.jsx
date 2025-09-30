import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-orange-500 mb-4">Contact Us</h1>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <span>Home</span>
              <span>›</span>
              <span className="text-orange-500">Contact us</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-0 justify-items-center items-center">
            {/* Phone Card */}
            <div className="text-center transition-colors duration-200 hover:bg-orange-500 hover:text-white rounded-lg cursor-pointer flex flex-col justify-center items-center" style={{width: '250px', height: '250px', margin: '0 auto'}}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Number</h3>
              <p className="text-gray-600">+1 (718) 360-4995</p>
            </div>

            {/* Email Card */}
            <div className="text-center transition-colors duration-200 hover:bg-orange-500 hover:text-white rounded-lg cursor-pointer flex flex-col justify-center items-center" style={{width: '250px', height: '250px', margin: '0 auto'}}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@aptitps.com</p>
            </div>

            {/* Business Hours Card */}
            <div className="text-center transition-colors duration-200 hover:bg-orange-500 hover:text-white rounded-lg cursor-pointer flex flex-col justify-center items-center" style={{width: '250px', height: '250px', margin: '0 auto'}}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mon- Fri</h3>
              <p className="text-gray-600">9AM to 5PM EST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Branches Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">Our Branches</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* New York Branch */}
            <div className="text-center transition-colors duration-200 hover:bg-orange-500 hover:text-white rounded-lg cursor-pointer flex flex-col justify-center items-center" style={{width: '250px', height: '250px', margin: '0 auto'}}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Address</h3>
              <div className="text-gray-600 space-y-1">
                <p>800 Third Avenue</p>
                <p>FRNT A #1472 New York, NY,</p>
                <p>United States 10022</p>
              </div>
            </div>

            {/* Wyoming Branch */}
            <div className="text-center transition-colors duration-200 hover:bg-orange-500 hover:text-white rounded-lg cursor-pointer flex flex-col justify-center items-center" style={{width: '250px', height: '250px', margin: '0 auto'}}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Address</h3>
              <div className="text-gray-600 space-y-1">
                <p>TalentSync Solutions, LLC</p>
                <p>30 N Gould St, Ste N Sheridan,</p>
                <p>WY 82801</p>
              </div>
            </div>

            {/* Hyderabad Branch */}
            <div className="text-center transition-colors duration-200 hover:bg-orange-500 hover:text-white rounded-lg cursor-pointer flex flex-col justify-center items-center" style={{width: '250px', height: '250px', margin: '0 auto'}}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Address</h3>
              <div className="text-gray-600 space-y-1">
                <p>Oval Building</p>
                <p>Durgam Cheruvu Rd,</p>
                <p>HITEC City, Hyderabad,</p>
                <p>Telangana 500081</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Get In Touch!</h2>
              <p className="text-gray-600">We have completed over a 1000+ projects for five hundred clients. Give us your next project.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition-colors"
                >
                  Send your message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Information Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Popular Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">POPULAR LINKS</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Mobile App Development</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Staff Augmentation</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">ADDRESS</h3>
              <div className="text-gray-600 space-y-1">
                <p className="font-semibold">APT IT PROFESSIONAL</p>
                <p className="font-semibold">SERVICES, INC</p>
                <p>800 Third Avenue</p>
                <p>FRNT A #1472</p>
                <p>New York, NY 10022</p>
                <p>United States</p>
              </div>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">GET IN TOUCH</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>+1 (718) 360-4995</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>info@aptitps.com</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Build Your Future Here</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-600">Facebook</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 bg-black rounded text-white text-xs flex items-center justify-center">X</span>
                  <span className="text-gray-600">X</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span className="text-gray-600">Instagram</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Linkedin className="w-4 h-4 text-blue-700" />
                  <span className="text-gray-600">LinkedIn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <footer className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">About Us</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a>
            </div>
            <div className="text-sm">
              <span>©Copyright 2025 </span>
              <span className="text-orange-400">APTITPS</span>
              <span> All Rights Reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUsPage;