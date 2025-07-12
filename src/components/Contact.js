import React from 'react';
import './Contact.css';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="form-container">
        <h2 className="section-title"><FaEnvelope /> Transmit a Signal</h2>
        <p className="contact-subtext">
          Let's talk ideas, or your next big thing.
        </p>
        <form
          className="contact-form"
          action="https://formspree.io/f/mjkrpzvl"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
