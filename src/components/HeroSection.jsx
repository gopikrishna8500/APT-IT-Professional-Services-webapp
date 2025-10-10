import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import backgroundVideo from "../assets/digital-marketing-bg.mp4";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffset(scrollY * 0.3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section
      id="home"
      // className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden -mt-16 lg:-mt-20"
    >
      {/* Video Background with parallax */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover brightness-110 transition-transform duration-300"
        style={{ transform: `translateY(${offset}px)` }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30"></div>

      {/* Particle Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-12 max-w-4xl mx-auto">
        <h1
          className={`text-white mb-4 text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight drop-shadow-2xl transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"
            }`}
        >
          Welcome to APT IT Professional Services
        </h1>

        <p
          className={`text-white text-base lg:text-lg xl:text-xl font-semibold mb-5 drop-shadow-lg transition-opacity duration-1500 delay-300 ${fadeIn ? "opacity-100" : "opacity-0"
            }`}
        >
          Architecting The Digital Change
        </p>

        <p
          className={`text-white text-sm lg:text-base xl:text-lg mb-6 leading-relaxed drop-shadow-lg transition-opacity duration-1500 delay-500 ${fadeIn ? "opacity-100" : "opacity-0"
            }`}
        >
          At APT IT Professional Services, we leverage the latest technology
          to propel your business forward to make it scalable, secure and
          future-ready. Powered by engineers with a problem-solving mindset,
          we deliver outcomes that go beyond expectations.
        </p>

        <button
          className={`bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-md text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg transition-opacity duration-1500 delay-700 ${fadeIn ? "opacity-100" : "opacity-0"
            }`}
        >
          <Link to="/about"> Read More</Link>
        </button>
      </div>

      {/* Particle animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0) translateX(0); opacity: 0.3; }
            50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
            100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          }
          .animate-float {
            animation-name: float;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;







