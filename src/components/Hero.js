import React from 'react';
import './Hero.css';
import iniyaImage from '../assets/iniya.jpg';

const Hero = () => {
  const stars = Array.from({ length: 100 }, (_, i) => (
    <span key={i} className="star"></span>
  ));

  return (
    <section className="hero-section" id="hero">
      <div className="stars">{stars}</div>

      <div className="hero-container">
        <div className="hero-left">
          <img src={iniyaImage} alt="Iniya" className="hero-img-half" />
        </div>

        <div className="hero-right">
          <h1 className="tagline">Iniya S | Developer. Problem Solver.</h1>
          <p className="hero-subtext">
            A CSBS student passionate about building meaningful digital experiences.  
            I’m dedicated to crafting accessible, user-focused solutions through web development.  
            With a curious mind and a hands-on heart, I turn creativity into impact.
          </p>
          <a href="#projects" className="cta-button">Explore My Work ↓</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
