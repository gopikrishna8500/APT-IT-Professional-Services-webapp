import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Briefcase, Users, Mail, Phone, MapPin, Clock } from "lucide-react";
import aptitpsLogo from "../assets/aptitps-logo.png";
const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <div className="w-full">

      {/* ================= Contact Section ================= */}
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

        {/* ================= Stats/Action Box Section ================= */}
<section ref={ref} className="w-full bg-gray-100 py-12">
  <div className="flex flex-col lg:flex-row items-center justify-between w-full px-4 lg:px-16">
    {/* Left: Logo + Text */}
    <div className="flex items-center mb-8 lg:mb-0 lg:w-7/12">
      <div className="flex-shrink-0">
        <img
          src={aptitpsLogo}
          alt="APTITPS Logo"
          className="h-16 w-auto object-contain"
        />
      </div>
      <p className="text-gray-700 ml-4 mt-4 lg:mt-0">
        Create a free account to find thousands of Jobs, Employment & Career Opportunities around you!
      </p>
    </div>

    {/* Right: Counters */}
    <div className="flex space-x-8 lg:space-x-12 lg:w-5/12">
      {/* Jobs Posted */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-2">
          <Briefcase className="h-8 w-8 text-orange-500 mr-2" />
          <span className="text-3xl font-bold text-gray-800">
            {inView ? <CountUp start={0} end={1562} duration={3} separator="," /> : 0}
          </span>
        </div>
        <p className="text-gray-600">Jobs Posted</p>
      </div>

      {/* Companies */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-2">
          <Users className="h-8 w-8 text-orange-500 mr-2" />
          <span className="text-3xl font-bold text-gray-800">
            {inView ? <CountUp start={0} end={240} duration={3} separator="," /> : 0}
          </span>
        </div>
        <p className="text-gray-600 px-20">Companies</p>
      </div>
    </div>
  </div>
      </section>
            </div>
      </section>

    </div>
  );
};

export default ContactSection;
