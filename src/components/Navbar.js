import React, { useState } from 'react';
import './Navbar.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav
      className="navbar"
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div className="navbar-left">
        <a href="#hero" className="logo">Iniya</a>
      </div>

      <div className="navbar-center">
        <a href="#about">About</a>
        <a href="#certificates">Certifications</a>
        <a href="#achievements">Achievements</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        <div
          className="socials-dropdown"
          onMouseEnter={() => setShowDropdown(true)}
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
    </nav>
  );
};

export default Navbar;
