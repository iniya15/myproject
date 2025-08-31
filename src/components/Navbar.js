import React, { useState } from 'react';
import './Navbar.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="#hero" className="logo" onClick={closeMobileMenu}>
            Iniya S
          </a>
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={closeMobileMenu}>About</a>
          <a href="#certificates" onClick={closeMobileMenu}>Certifications</a>
          <a href="#achievements" onClick={closeMobileMenu}>Achievements</a>
          <a href="#projects" onClick={closeMobileMenu}>Projects</a>
          <a href="#contact" onClick={closeMobileMenu}>Contact</a>
        </div>

        <div className="navbar-socials">
          <a href="mailto:iniyasureshbabu@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/iniya-sureshbabu-1a2ba6289/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/iniya15" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/ini.yuhhh/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
