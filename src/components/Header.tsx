import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#202733] bg-transparent' : 'bg-transparent'
      }`}
    >
      <div className=" max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-ubuntu text-5xl font-bold text-[#ffe871]">
            RAKESH
          </div>
          
          <nav className="font-ubuntu hidden md:flex space-x-8">
            {['Home', 'About', 'Connect'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#f8fcff] hover:text-[#ffe871] transition-colors duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffe871] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* <button className="md:hidden text-[#f8fcff] hover:text-[#ffe871] transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;