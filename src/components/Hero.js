import React from 'react';
import './Hero.css';
import iniyaImage from '../assets/iniya.jpg';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Iniya S
            </h1>
            <p className="hero-subtitle">
              Developer & Problem Solver
            </p>
            <p className="hero-description">
              A CSBS student passionate about building meaningful digital experiences. 
              I'm dedicated to crafting accessible, user-focused solutions through web development. 
              With a curious mind and a hands-on heart, I turn creativity into impact.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="cta-button">Explore My Work</a>
              <a href="#contact" className="cta-button secondary">Get In Touch</a>
            </div>
          </div>
          
          <div className="hero-image">
            <img src={iniyaImage} alt="Iniya" className="hero-portrait" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
