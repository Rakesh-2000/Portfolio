import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      setMenuOpen(false); // close menu on mobile after clicking
    }
  };

  return (
    <header
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-[#47442463] backdrop-blur-md shadow-lg'
          : 'bg-transparent'}
        border border-[#ffe871]/40 rounded-[50px] mt-4 w-full max-w-7xl px-4`}
    >
      <div className="w-full px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-ubuntu text-4xl md:text-5xl font-bold text-[#ffe871] cursor-pointer" onClick={() => scrollToSection('home')}>
          RK
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex font-ubuntu space-x-8">
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

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#ffe871] text-3xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden  backdrop-blur-md border-t border-[#ffe871]/40 rounded-b-[30px] px-6 py-4 flex flex-col space-y-4 font-ubuntu">
          {['Home', 'About', 'Connect'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-[#f8fcff] hover:text-[#ffe871] text-lg font-medium transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}; 

export default Header;
