import {
  Package,
  GitBranch,
} from "lucide-react";
import LogoLoop, { LogoItem } from "./logoloop"; // Import your LogoLoop
import { RiNextjsLine, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiTypescript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { FaHtml5, FaJs, FaPython } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";

const TechStack = () => {
  const technologies: LogoItem[] = [
    // Languages
    {
      node: <FaJs color="#F7DF1E" size={40} />,
      title: "JavaScript",
      href: "#",
    },
    { node: <FaHtml5 color="#E34F26" size={40} />, title: "HTML5", href: "#" },
    {
      node: <SiTypescript color="#3178C6" size={40} />,
      title: "TypeScript",
      href: "#",
    },
    {
      node: <IoLogoCss3 color="#1572B6" size={40} />,
      title: "CSS3",
      href: "#",
    },
    {
      node: <FaPython color="#009688" size={40} />,
      title: "Python",
      href: "#",
    },

    // Frameworks
    {
      node: <RiReactjsFill color="#61DAFB" size={40} />,
      title: "React.js",
      href: "#",
    },

    {
      node: <RiNextjsLine color="#FFF" size={40} />,
      title: "Next.js",
      href: "#",
    },
    {
      node: <DiNodejs color="#339933" size={40} />,
      title: "Node.js",
      href: "#",
    },
    {
      node: <RiReactjsFill color="#61DAFB" size={40} />,
      title: "React Native",
      href: "#",
    },
    // State management
    { node: <SiRedux color="#764ABC" size={40} />, title: "Redux", href: "#" },
    {
      node: <Package color="#000000" size={40} />,
      title: "Zustand",
      href: "#",
    }, // Placeholder icon

    // Tools
    { node: <GitBranch color="#F05032" size={40} />, title: "Git", href: "#" },

    // Styling
    {
      node: <RiTailwindCssFill color="#06B6D4" size={40} />,
      title: "Tailwind CSS",
      href: "#",
    },

    // Platforms
    {
      node: <IoLogoFirebase color="#FFCA28" size={40} />,
      title: "Firebase",
      href: "#",
    },
  ];

  return (
    <section
      id="about"
      className="font-ubuntu py-20 px-6 bg-black relative overflow-hidden"
    >
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

        {/* LogoLoop Carousel */}
        <div className="overflow-hidden py-2">
          <LogoLoop
            logos={technologies}
            speed={50}
            direction="left"
            logoHeight={78}
            gap={40}
            hoverSpeed={10}
            scaleOnHover
            fadeOut
            fadeOutColor="#000"
            ariaLabel="Technology partners"
          />
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
