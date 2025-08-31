import React, { useState, useEffect } from 'react';
import './Intro.css';
import { FaSearch, FaUser, FaCode, FaTrophy, FaEnvelope, FaCertificate } from 'react-icons/fa';

const Intro = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    { id: 'about', title: 'About Me', icon: FaUser, description: 'Learn about my background and skills', position: { x: 20, y: 30 } },
    { id: 'projects', title: 'Projects', icon: FaCode, description: 'Explore my work and creations', position: { x: 60, y: 20 } },
    { id: 'achievements', title: 'Achievements', icon: FaTrophy, description: 'See my accomplishments and awards', position: { x: 80, y: 60 } },
    { id: 'certificates', title: 'Certificates', icon: FaCertificate, description: 'View my professional certifications', position: { x: 40, y: 70 } },
    { id: 'contact', title: 'Contact', icon: FaEnvelope, description: 'Get in touch with me', position: { x: 10, y: 80 } }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep(1);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleZoom = () => {
    setIsZoomed(true);
    setTimeout(() => {
      setCurrentStep(2);
    }, 1000);
  };

  const handleSectionSelect = (sectionId) => {
    setSelectedSection(sectionId);
    setTimeout(() => {
      onComplete(sectionId);
    }, 1500);
  };

  const handleExploreAll = () => {
    setSelectedSection('all');
    setTimeout(() => {
      onComplete('all');
    }, 1500);
  };

  if (currentStep === 0) {
    return (
      <div className="intro-container">
        <div className="intro-content">
          <h1 className="intro-title">Iniya S</h1>
          <p className="intro-subtitle">Developer & Problem Solver</p>
          <div className="intro-instruction">
            <FaSearch className="search-icon" />
            <p>Zoom in to explore</p>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 1) {
    return (
      <div className="intro-container">
        <div className="intro-content">
          <h1 className="intro-title">Iniya S</h1>
          <p className="intro-subtitle">Developer & Problem Solver</p>
          <button className="zoom-button" onClick={handleZoom}>
            <FaSearch className="search-icon" />
            <span>Zoom In</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`intro-container ${isZoomed ? 'zoomed' : ''}`}>
      <div className="intro-content">
        <h1 className="intro-title">Choose Your Path</h1>
        <p className="intro-subtitle">Zoom into any section to explore</p>
        
        <div className="clustered-sections">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`clustered-card ${selectedSection === section.id ? 'selected' : ''} ${hoveredSection === section.id ? 'hovered' : ''}`}
              style={{
                left: `${section.position.x}%`,
                top: `${section.position.y}%`,
                zIndex: hoveredSection === section.id ? 10 : 1
              }}
              onClick={() => handleSectionSelect(section.id)}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <section.icon className="section-icon" />
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </button>
          ))}
        </div>

        <button className="explore-all-button" onClick={handleExploreAll}>
          Explore Everything
        </button>
      </div>
    </div>
  );
};

export default Intro;
