import React from "react";
import {
  Smartphone,
  Globe,
  Code,
  FileCode,
  Server,
  Flame,
  Navigation,
  Package,
  Palette,
  GitBranch,
  Zap,
  Terminal,
  Triangle,
} from "lucide-react";

const TechStack = () => {
  const technologies = [
    // Languages
    { name: "JavaScript", color: "#F7DF1E", icon: Code },
    { name: "TypeScript", color: "#3178C6", icon: FileCode },
    { name: "Python", color: "#009688", icon: Terminal },

    // Frameworks
    { name: "React.js", color: "#61DAFB", icon: Globe },
    { name: "React Native", color: "#61DAFB", icon: Smartphone },
    { name: "FastAPI", color: "#009688", icon: Zap },
    { name: "Node.js", color: "#339933", icon: Server },
    { name: "Next.js", color: "#FFF", icon: Triangle },

    // Libraries
    { name: "Redux", color: "#764ABC", icon: Package },
    { name: "React Navigation", color: "#61DAFB", icon: Navigation },

    // Tools
    { name: "Git", color: "#F05032", icon: GitBranch },

    // Styling
    { name: "Tailwind CSS", color: "#06B6D4", icon: Palette },

    // Platforms
    { name: "Firebase", color: "#FFCA28", icon: Flame },
  ];

  return (
    <section
      id="about"
      className="font-ubuntu py-20 px-6 bg-black relative overflow-hidden"
    >
      {/* Keyframes for desktop carousel */}
      <style>
        {`
    @keyframes scroll {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-scroll {
      animation: scroll linear infinite;
    }
  `}
      </style>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f8fcff]">
            Tech <span className="text-[#ffe871]">Stack</span>
          </h2>
          <p className="text-lg text-[#f8fcff]/70 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Tech Icons */}
        <div className="overflow-hidden py-2">
          {/* Mobile: Two rows */}
          <div className="grid grid-cols-2 gap-4 sm:hidden ">
            {[...technologies, ...technologies]
              .slice(0, 13)
              .map((tech, index) => (
                <div
                  key={`mobile-${tech.name}-${index}`}
                  className="flex items-center space-x-3 border border-[#ffe871]/30 rounded-xl p-3 bg-[#ffe871]/5"
                >
                  <tech.icon
                    className="w-5 h-5"
                    style={{ color: tech.color }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
          </div>

          {/* Desktop: One-line carousel */}
          {/* Desktop: One-line infinite carousel */}
          <div className="hidden sm:block overflow-hidden py-2">
            <div
              className="flex w-max animate-scroll whitespace-nowrap"
              style={{ animationDuration: "25s" }}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="min-w-[180px] flex-shrink-0 border border-[#ffe871]/30 rounded-[5px] p-4 text-center bg-[#ffe871]/5 hover:scale-105 transition-transform duration-300 mx-2"
                >
                  <tech.icon
                    className="w-6 h-6 mx-auto mb-2"
                    style={{ color: tech.color }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-2 sm:px-0">
        <div className="text-center p-6 bg-[#ffe871]/5 rounded-[10px] border border-[#ffe871]/20">
          <div className="w-12 h-12 bg-[#ffe871]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 text-[#ffe871]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#f8fcff] mb-2">
            Mobile Development
          </h3>
          <p className="text-[#f8fcff]/70">
            Cross-platform apps with React Native
          </p>
        </div>

        <div className="text-center p-6 bg-[#ffe871]/5 rounded-[10px] border border-[#ffe871]/20">
          <div className="w-12 h-12 bg-[#ffe871]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 text-[#ffe871]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#f8fcff] mb-2">
            Web Development
          </h3>
          <p className="text-[#f8fcff]/70">Modern web apps with React.js</p>
        </div>

        <div className="text-center p-6 bg-[#ffe871]/5 rounded-[10px] border border-[#ffe871]/20">
          <div className="w-12 h-12 bg-[#ffe871]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 text-[#ffe871]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#f8fcff] mb-2">
            Backend Integration
          </h3>
          <p className="text-[#f8fcff]/70">APIs and database management</p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
