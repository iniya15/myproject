import React, { useState } from 'react';
import './Navbar.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setShowDropdown(false);
  };

  return (
    <nav
      className="navbar"
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div className="navbar-left">
        <a href="#hero" className="logo" onClick={closeMobileMenu}>Iniya</a>
      </div>

      <div className={`navbar-center ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={closeMobileMenu}>About</a>
        <a href="#certificates" onClick={closeMobileMenu}>Certifications</a>
        <a href="#achievements" onClick={closeMobileMenu}>Achievements</a>
        <a href="#projects" onClick={closeMobileMenu}>Projects</a>
        <a href="#contact" onClick={closeMobileMenu}>Contact</a>

        <div
          className="socials-dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className="dropdown-title">Socials ▾</span>
          {showDropdown && (
            <div className="dropdown-icons">
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
          )}
        </div>
      </div>

      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
