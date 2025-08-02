import React, { useEffect, useState } from "react";
import Rakesh from "../asstes/rk.png";

const Hero = () => {
  const fullName = "RAKESH B";
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < fullName.length) {
      const timer = setTimeout(() => {
        setVisibleCount(visibleCount + 1);
      }, 100); // delay per letter (ms)
      return () => clearTimeout(timer);
    }
  }, [visibleCount, fullName.length]);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-[#000]"
    >
      {/* Radial background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[900px] h-[700px] rounded-full bg-[#ffe871] opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Avatar */}
        <div
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 20%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 70%, transparent 100%)",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            marginRight:50,
            height:300
          }}
          className="relative w-full max-w-xs mx-auto overflow-hidden"
        >
          <img
            src={Rakesh}
            alt="Rakesh"
            className="w-full h-full object-cover grayscale"
            
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#ffe871] to-[#ffe871] bg-clip-text text-transparent flex justify-center space-x-1">
          {fullName.split("").map((char, idx) => (
            <span
              key={idx}
              className={`inline-block transition-opacity duration-500 ${
                idx < visibleCount ? "opacity-100" : "opacity-0"
              }`}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl mb-8 text-[#f8fcff]/80 leading-relaxed">
          Software Developer
        </p>

        {/* Experience Tags */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <span className="px-4 py-2 bg-[#ffe871]/20 rounded-[10px] text-[#ffe871] font-medium">
            2+ Years in Development Experience
          </span>
          {/* <span className="px-4 py-2 bg-[#ffe871]/20 rounded-full text-[#ffe871] font-medium">
            React Native Expert
          </span>
          <span className="px-4 py-2 bg-[#ffe871]/20 rounded-full text-[#ffe871] font-medium">
            React.js Specialist
          </span> */}
        </div>

        {/* Summary */}
        {/* <p className="text-lg text-[#f8fcff]/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          Full-stack mobile and web developer with over 3 years of hands-on experience. 
          Specialized in building high-performance apps using React Native and React.js. 
          Committed to clean architecture, scalability, and seamless user experiences.
        </p> */}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-[#ffe871] text-[#202733] font-bold rounded-[5px] hover:bg-[#ffe871]/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Let's Connect
          </button>
          <button
            onClick={() =>
              document
                .getElementById("Project")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 border-2 border-[#ffe871] text-[#ffe871] font-bold rounded-[5px] hover:bg-[#ffe871] hover:text-[#202733] transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
