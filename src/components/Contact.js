import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Let's connect and discuss ideas, opportunities, or your next big project.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and innovation.
          </p>
          
          <div className="contact-links">
            <a href="mailto:iniyasureshbabu@gmail.com" className="contact-link">
              <FaEnvelope />
              <span>iniyasureshbabu@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/iniya-sureshbabu-1a2ba6289/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/iniya15" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href="https://www.instagram.com/ini.yuhhh/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaInstagram />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <form
            className="contact-form"
            action="https://formspree.io/f/mjkrpzvl"
            method="POST"
          >
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="cta-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
