import React, { useEffect, useState } from "react";
import agan from "../asstes/agan.png";
import tms from "../asstes/tms.png";
import wellchild from "../asstes/wellChild.png";
import kkc from "../asstes/kkc.jpeg";
// import kkcstaff from "../asstes/kkcstaff.jpeg";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentWebProject, setCurrentWebProject] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const projectInterval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000); // scroll every 5 seconds

    const webProjectInterval = setInterval(() => {
      setCurrentWebProject((prev) => (prev + 1) % webProjects.length);
    }, 5000); // scroll every 7 seconds

    return () => {
      clearInterval(projectInterval);
      clearInterval(webProjectInterval);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "AGAN",
      description:
        "Teleconsultation app with therapist booking, chatbot support, secure payments, and real-time API integration. Designed from Figma and built with Firebase & Redux.",
      tech: ["React Native", "Redux", "TypeScript", "Firebase"],
      image: agan,
      color: "#FF6B6B",
    },
    {
      id: 2,
      title: "TMS 3.0",
      description:
        "Asset tracking and workflow app supporting 3 user roles, QR-based complaints, and real-time status updates. Enhanced team efficiency by 30%.",
      tech: ["React Native", "Redux"],
      image: tms,
      color: "#4ECDC4",
    },
    {
      id: 3,
      title: "WellChild",
      description:
        "Child development tracking app with growth charts, vaccination tracking, and performance optimization across iOS and Android.",
      tech: ["React Native", "Redux"],
      image: wellchild,
      color: "#45B7D1",
    },
    {
      id: 4,
      title: "KKC Business",
      description:
        "Personal jewelry inventory app for managing gold purchases, monthly reporting, and seamless stock tracking. Built with Firebase backend.",
      tech: ["React Native", "Firebase", "TypeScript"],
      image: kkc,
      color: "#FEC260",
    },
  ];

  const webProjects = [
    {
      id: 1,
      title: "TMS Dashboard",
      description:
        "Inventory management and complaint tracking system with bulk uploads, optimized React state handling, and Node.js backend.",
      tech: ["React.js", "Node.js", "Tailwind", "MySQL"],
      image: tms,
      color: "#4ECDC4",
    },
  ];

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextWebProject = () => {
    setCurrentWebProject((prev) => (prev + 1) % webProjects.length);
  };

  const prevWebProject = () => {
    setCurrentWebProject(
      (prev) => (prev - 1 + webProjects.length) % webProjects.length
    );
  };

  return (
    <section className="py-20 px-6 bg-[#000]" id="Project">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f8fcff]">
            Mobile <span className="text-[#ffe871]">Apps</span>
          </h2>
          <p className="text-lg text-[#f8fcff]/70 max-w-2xl mx-auto">
            Cross-platform mobile applications built with React Native
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-8 z-20 w-12 h-12 bg-[#ffe871]/20 hover:bg-[#ffe871]/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextProject}
            className="absolute right-8 z-20 w-12 h-12 bg-[#ffe871]/20 hover:bg-[#ffe871]/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Project Carousel Container */}
          <div className="relative flex items-center justify-center w-full max-w-6xl">
            {/* Left Project (Half Visible) */}
            <div className="absolute left-40 z-5 transform -translate-x-1/4 opacity-50 scale-80 transition-all duration-500">
              <div className="w-64 h-96 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={
                    projects[
                      (currentProject - 1 + projects.length) % projects.length
                    ].image
                  }
                  alt="Previous project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            </div>

            {/* Right Project (Half Visible) */}
            <div className="absolute right-40 z-5 transform translate-x-1/4 opacity-50 scale-80 transition-all duration-500">
              <div className="w-64 h-96 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={projects[(currentProject + 1) % projects.length].image}
                  alt="Next project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            </div>

            {/* Main Mobile Phone Mockup (Center) */}
            <div className="relative z-10">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[2.5rem] p-2 relative overflow-hidden">
                  {/* Screen */}
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    <img
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Indicators */}
          {/* <div className="flex justify-center space-x-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject ? 'bg-[#ffe871]' : 'bg-[#ffe871]/30'
                }`}
              />
            ))}
          </div> */}
        </div>

        {/* Project Info */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-[#f8fcff] mb-4">
            {projects[currentProject].title}
          </h3>
          {/* <p className="text-[#f8fcff]/70 mb-6 text-lg">
            {projects[currentProject].description}
          </p> */}

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {projects[currentProject].tech.map((technology) => (
              <span
                key={technology}
                className="px-4 py-2 bg-[#ffe871]/20 text-[#ffe871] rounded-full text-sm font-medium"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="flex justify-center space-x-4">
            {/* <button className="px-6 py-3 bg-[#ffe871] text-[#202733] font-bold rounded-lg hover:bg-[#ffe871]/90 transition-all duration-300 transform hover:scale-105">
              View Live Demo
            </button> */}
            <button
              onClick={() => {
                setSelectedProject(projects[currentProject]);
                setIsModalOpen(true);
              }}
              className="px-6 py-3 border-2 border-[#ffe871] text-[#ffe871] font-bold rounded-lg hover:bg-[#ffe871] hover:text-[#202733] transition-all duration-300 transform hover:scale-105"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentProject ? "bg-[#ffe871]" : "bg-[#ffe871]/30"
            }`}
          />
        ))}
      </div>
      <div>
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 ">
            <div className="bg-[#000] border border-[#ffe871]/30 text-white rounded-xl max-w-xl w-full p-6 relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-[#ffe871] text-xl hover:text-white"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-2 text-[#ffe871] p-5">
                {selectedProject?.title}
              </h2>
              <p className="text-[#f8fcff]/80 mb-4 p-5">
                {selectedProject?.description}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Web Projects Section */}
      <div className="max-w-6xl mx-auto mt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f8fcff]">
            Web <span className="text-[#ffe871]">Applications</span>
          </h2>
          <p className="text-lg text-[#f8fcff]/70 max-w-2xl mx-auto">
            Responsive web applications built with modern React.js
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={prevWebProject}
            className="absolute left-8 z-20 w-12 h-12 bg-[#ffe871]/20 hover:bg-[#ffe871]/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextWebProject}
            className="absolute right-8 z-20 w-12 h-12 bg-[#ffe871]/20 hover:bg-[#ffe871]/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div>
            {isModalOpen && selectedProject && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 ">
                <div className="bg-[#000] border border-[#ffe871]/30 text-white rounded-xl max-w-xl w-full p-6 relative">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-3 right-3 text-[#ffe871] text-xl hover:text-white"
                  >
                    &times;
                  </button>
                  <h2 className="text-2xl font-bold mb-2 text-[#ffe871] p-5">
                    {selectedProject?.title}
                  </h2>
                  <p className="text-[#f8fcff]/80 mb-4 p-5">
                    {selectedProject?.description}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Web Project Carousel Container */}
          <div className="relative flex items-center justify-center w-full max-w-6xl">
            {/* Left Project (Half Visible) */}
            {/* <div className="absolute left-16 z-5 transform -translate-x-1/4 opacity-50 scale-80 transition-all duration-500">
              <div className="w-80 h-48 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={webProjects[(currentWebProject - 1 + webProjects.length) % webProjects.length].image}
                  alt="Previous web project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            </div> */}

            {/* Right Project (Half Visible) */}
            {/* <div className="absolute right-16 z-5 transform translate-x-1/4 opacity-50 scale-80 transition-all duration-500">
              <div className="w-80 h-48 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={webProjects[(currentWebProject + 1) % webProjects.length].image}
                  alt="Next web project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            </div> */}

            {/* Main Laptop Mockup (Center) */}
            <div className="relative z-10">
              {/* Laptop Frame */}
              <div className="relative">
                {/* Laptop Screen */}
                <div className="w-[500px] h-[320px] bg-gray-900 rounded-t-2xl p-4 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-xl overflow-hidden relative">
                    <img
                      src={webProjects[currentWebProject].image}
                      alt={webProjects[currentWebProject].title}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>

                {/* Laptop Base */}
                <div className="w-[500px] h-8 bg-gray-800 rounded-b-2xl -mt-1 relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Web Project Indicators */}
        </div>

        {/* Web Project Info */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-[#f8fcff] mb-4">
            {webProjects[currentWebProject].title}
          </h3>
          <p className="text-[#f8fcff]/70 mb-6 text-lg">
            {webProjects[currentWebProject].description}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {webProjects[currentWebProject].tech.map((technology) => (
              <span
                key={technology}
                className="px-4 py-2 bg-[#ffe871]/20 text-[#ffe871] rounded-full text-sm font-medium"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="flex justify-center space-x-4">
            {/* <button className="px-6 py-3 bg-[#ffe871] text-[#202733] font-bold rounded-lg hover:bg-[#ffe871]/90 transition-all duration-300 transform hover:scale-105">
              View Live Demo
            </button> */}
            <button
              onClick={() => {
                setSelectedProject(webProjects[currentWebProject]);
                setIsModalOpen(true);
              }}
              className="px-6 py-3 border-2 border-[#ffe871] text-[#ffe871] font-bold rounded-lg hover:bg-[#ffe871] hover:text-[#202733] transition-all duration-300 transform hover:scale-105"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-8">
        {webProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentWebProject(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentWebProject ? "bg-[#ffe871]" : "bg-[#ffe871]/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
