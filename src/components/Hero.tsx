import React, { useState, useEffect } from "react";
import LightRays from "./LightRays"; // <-- your manual component

const Hero = () => {
  const fullName = "RAKESH B";
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < fullName.length) {
      const timer = setTimeout(() => {
        setVisibleCount(visibleCount + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-[#000]"
    >
      {/* ⭐ Light Rays Effect (Behind Content) */}
      <div className="absolute inset-0 z-[1]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#f5e48c"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          fadeDistance={3}
          // className="custom-rays"
        />
      </div>

      {/* Background Glow */}
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-[0]">
        <div className="w-[900px] h-[500px] rounded-full bg-[#ffe871] opacity-10 blur-3xl"></div>
      </div> */}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative z-[5]">
        <h1 className="font-ubuntu text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#ffe871] to-[#ffe871] bg-clip-text text-transparent flex justify-center space-x-1">
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

        <p className="font-ubuntu text-xl md:text-2xl mb-8 text-[#f8fcff]/80">
          Software Developer
        </p>

        <div className="flex items-center justify-center space-x-4 mb-8">
          <span className="font-ubuntu px-4 py-2 bg-[#ffe871]/20 rounded-[10px] text-[#ffe871] font-medium">
            3+ Years in Development Experience
          </span>
        </div>

        <div className="font-ubuntu flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() =>
              document
                .getElementById("connect")
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
