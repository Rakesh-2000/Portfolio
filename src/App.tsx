import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WorkExperience from './components/Experience';

function App() {
  return (
    <div className="bg-[#000] text-[#f8fcff] min-h-screen">
      <Header />
      <main>
        <Hero />
        <TechStack />
        <WorkExperience/>
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;