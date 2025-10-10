import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Settings,
  LayoutGrid as Layout,
  Repeat,
  Wrench,
  FileCode,
  Monitor,
  ArrowUp,
} from "lucide-react";
import productChainImg from "../assets/product-chain.png";
import softwareEngineerImg from "../assets/softwareengineer.png";
import teamLeaderImg from "../assets/team-leader.png";
import commitmentImg from "../assets/Commitment to Timelines.png";
import agileImg from "../assets/Agile Development.png";
import strategicImg from "../assets/Strategic Planning.png";
import businessAnalysisImg from "../assets/Business Analysis.png";
import Lottie from "lottie-react";
import webDevAnimation from "../assets/webdev.json";
import goLogo from "../assets/Techeminence/Go-Logo.png";
import reactLogo from "../assets/Techeminence/React.png";
import flutterLogo from "../assets/Techeminence/flutter.png";
import pythonLogo from "../assets/Techeminence/python-logo-master-v3-TM.png";
import djangoLogo from "../assets/Techeminence/django.png";
// import ObjectiveCImg from '../assets/Techeminence/Objective-c.png';
import dotNetLogo from "../assets/Techeminence/NET.png";
import swiftLogo from "../assets/Techeminence/Swift.png";
import nodejsLogo from "../assets/Techeminence/nodejsDark.png";
import kotlinLogo from "../assets/Techeminence/kotlin-logo.png";
import javaLogo from "../assets/Techeminence/Java.png";
import Footer from "./Footer";

const WebDesignPage = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // ensure top-of-page on mount
    window.scrollTo(0, 0);

    let mounted = true;
    import("../assets/webdev.json")
      .then((mod) => {
        if (mounted) setAnimationData(mod.default);
      })
      .catch(() => {
        // ignore load errors for now
      });

    return () => {
      mounted = false;
      setAnimationData(null);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  // ✅ Use useMemo to prevent re-creation on each render
  const coreWebData = useMemo(
    () => [
      {
        id: 1,
        title: "Web Application Development",
        content:
          "Transform your business vision into powerful, feature-rich web applications. We engineer secure, scalable, and responsive solutions tailored to your users and designed to fuel long-term growth.",
        icon: "🖥️",
      },
      {
        id: 2,
        title: "Website Redesign & Modernization",
        content:
          "Upgrade your digital presence with sleek UI, modern architecture, and enhanced functionality. We breathe new life into outdated platforms—keeping your business relevant and engaging in today’s fast-evolving landscape.",
        icon: "🔄",
      },
      {
        id: 3,
        title: "Website Development",
        content:
          "From dynamic websites to responsive landing pages, our team delivers clean, user-friendly, and mobile-optimized designs that perform seamlessly across devices and browsers.",
        icon: "💻",
      },
      {
        id: 4,
        title: "UI/UX Design Services",
        content:
          "Our UI/UX experts create elegant, user-friendly interfaces that reflect your brand identity. We focus on user behavior, conversion strategies, and accessibility to deliver a truly intuitive experience.",
        icon: "🎨",
      },
      {
        id: 5,
        title: "Web Portal Development",
        content:
          "We specialize in building robust, industry-specific web portals that function as centralized platforms for users to access, manage, and interact with real-time data and services.",
        icon: "🌐",
      },
      {
        id: 6,
        title: "System Integration Services",
        content:
          "Enhance operational efficiency with seamless integration of your web apps to third-party platforms, APIs, CRMs, ERPs, and internal tools. We ensure full interoperability and data synchronization across systems.",
        icon: "🔌",
      },
      {
        id: 7,
        title: "Maintenance & Support",
        content:
          "Already have a web app in production? Let us take over the technical upkeep. From bug fixes to performance tuning and feature updates, we provide proactive and reliable support services.",
        icon: "🛠️",
      },
      {
        id: 8,
        title: "Custom CMS Development",
        content:
          "Gain full control over your web content with a scalable, secure, and easy-to-use Content Management System. We build custom CMS solutions tailored to your industry, content structure, and editorial workflows.",
        icon: "📂",
      },
    ],
    []
  );

  const [selectedCore, setSelectedCore] = useState(coreWebData[0]);

  // ✅ Memoized animation config to prevent reloading JSON file repeatedly
  const lottieOptions = useMemo(
    () => ({
      animationData: webDevAnimation,
      loop: true,
      autoplay: true,
    }),
    []
  );

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      {/* Banner Section */}
       <div
        className="relative py-12 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
             "url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200')",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">Mobile App Development</h1>
          <div className="flex items-center justify-center space-x-2 text-white">
            <span className="hover:text-orange-400 transition-colors cursor-pointer">Home</span>
            <span className="text-orange-400">›</span>
            <span className="text-orange-500">Mobile App Development</span>
          </div>
        </div>
      </div>
      {/* Intro Section */}
      <div className="container px-4 py-16 lg:w-10/12 mx-auto">
        <section className="py-20 bg-white mb-10">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-4xl font-bold text-orange-500 mb-6">
                  Web Design & Development
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We craft visually stunning and highly functional websites that
                  deliver seamless user experiences and empower businesses to
                  thrive online.
                </p>
              </div>

              {/* Optimized Lottie Animation */}
              <div className="flex justify-center mt-4 md:mt-0">
                <div className="w-[400px] h-auto">
                  <Lottie {...lottieOptions} style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Web Offerings */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-4 lg:max-w-[85%]">
            <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
              Our Core Custom Web Development Offerings
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 items-stretch shadow-lg rounded-3xl overflow-hidden bg-white">
              {/* Left Panel */}
              <div className="bg-orange-500 text-white flex flex-col overflow-y-auto rounded-l-3xl max-h-[400px]">
                {coreWebData.map((item) => (
                  <div
                    key={item.id}
                    className={`cursor-pointer px-6 py-5 text-center text-lg font-medium transition-all border-b border-orange-400/50 ${selectedCore.id === item.id
                        ? "bg-orange-600 font-bold"
                        : "hover:bg-orange-600"
                      }`}
                    onClick={() => setSelectedCore(item)}
                  >
                    {item.title}
                  </div>
                ))}
              </div>

              {/* Right Panel */}
              <div className="p-10 flex flex-col justify-center items-center text-center bg-white transition-all duration-500 ease-in-out">
                <div className="mb-4 text-4xl">{selectedCore.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {selectedCore.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedCore.content}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lifecycle Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 text-center mb-12">
            Full Lifecycle Web Development
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: businessAnalysisImg, title: "Business Analysis", desc: "We begin with deep-dive discovery sessions, stakeholder interviews, and market research to define goals, identify challenges, and align the product vision with your business needs." },
              { img: strategicImg, title: "Strategic Planning", desc: "Our planning process includes scope definition, timeline estimation, resource allocation, and roadmap creation—setting the foundation for an efficient, result-oriented engagement." },
              { img: agileImg, title: "Agile Development", desc: "We use Agile methodologies to enable iterative delivery, continuous feedback, and flexible execution. This ensures reduced risk, improved product quality, and faster time to market." },
              { img: commitmentImg, title: "Commitment to Timelines", desc: "Guided by ISO-compliant standards and best practices, our team delivers on every milestone with punctuality, transparency & dedication making us a trusted long-term partner." },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Eminence */}
        <section className="py-16 bg-white">
          <h2 className="text-orange-500 text-center font-bold mb-10 text-[35px]">
            Our Tech Eminence
          </h2>
          <div className="overflow-hidden relative mb-6">
            <div className="marquee whitespace-nowrap animate-marquee">
              {[
                goLogo,
                reactLogo,
                flutterLogo,
                pythonLogo,
                djangoLogo,
                // ObjectiveCImg,
                dotNetLogo,
                swiftLogo,
                nodejsLogo,
                kotlinLogo,
                javaLogo,
              ].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Tech Logo"
                  className="inline-block mr-6 h-16"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 text-center mb-6">
            Our Engagement Models
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-3xl mx-auto">
            We offer flexible engagement models tailored to your product
            lifecycle, resource needs, and budget.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: productChainImg,
                title: "Product Development",
                desc: "Have a vision but not sure where to begin? Share your ideas and goals, and our team will handle everything right from ideation and design to full-scale development and deployment.",
              },
              {
                img: softwareEngineerImg,
                title: "Team Extension",
                desc: "Looking to scale your in-house team with top-tier talent? Augment your existing setup with our vetted developers, designers, and QA engineers who integrate seamlessly with your workflows.",
              },
              {
                img: teamLeaderImg,
                title: "Dedicated Development Team",
                desc: "Stay in control of your product’s direction with a handpicked team working exclusively for you - agile, transparent, and fully integrated into your vision.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl border border-gray-200 hover:bg-orange-500 hover:text-white group transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="text-orange-500 group-hover:text-white leading-relaxed transition-colors">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>


    </div>
  );
};

export default WebDesignPage;
