import React, { useState, useRef } from 'react';
import './App.css';

import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);
  const certificatesRef = useRef(null);
  const contactRef = useRef(null);

  const handleIntroComplete = (sectionId) => {
    setShowMainContent(true);
    setSelectedSection(sectionId);
    
    // Scroll to the selected section after a brief delay
    setTimeout(() => {
      if (sectionId === 'about' && aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (sectionId === 'projects' && projectsRef.current) {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (sectionId === 'achievements' && achievementsRef.current) {
        achievementsRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (sectionId === 'certificates' && certificatesRef.current) {
        certificatesRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (sectionId === 'contact' && contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  return (
    <div className="App">
      {!showMainContent ? (
        <Intro onComplete={handleIntroComplete} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <div ref={aboutRef}>
              <About />
            </div>
            <div ref={certificatesRef}>
              <Certificates />
            </div>
            <div ref={achievementsRef}>
              <Achievements />
            </div>
            <div ref={projectsRef}>
              <Projects />
            </div>
            <div ref={contactRef}>
              <Contact />
            </div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
