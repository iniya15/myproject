import React, { useState, useEffect } from 'react';
import './Certificates.css';
import { FaCertificate, FaLinkedin, FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';

const certificates = [
  {
    title: "Oracle Database 19c: Basic SQL",
    platform: "LinkedIn Learning",
    credential: "https://www.linkedin.com/learning/certificates/012a416aabc4fdfb2e076cc8f900e559a77c75f43bc87fd81f0d863c01155fb0?u=281045610",
  },
  {
    title: "Introduction to Internet of Things",
    platform: "NPTEL – IIT Kharagpur",
    credential: "https://drive.google.com/file/d/1mXGZbWiK4nS4VLoHXlYo5QMcMt_4fXRS/view?usp=sharing",
  },
  {
    title: "UiPath Automation Explorer for Students",
    platform: "UiPath",
    credential: "https://drive.google.com/file/d/1cVsS0p_cRoyDAZvWvTQ11hZLC8sKhrlb/view",
  },
  {
    title: "Programming Using Java",
    platform: "Infosys Springboard",
    credential: "https://drive.google.com/file/d/1e-jEu2S5psF_xLMOqTTdZOvrQS-XHIU2/view?usp=drive_link",
  },
];

const achievements = [
  {
    title: "Completed Advanced Web Development Course",
    platform: "LinkedIn Learning",
    date: "2024",
    description: "Mastered modern web development techniques and best practices"
  },
  {
    title: "Participated in Hackathon 2024",
    platform: "College Event",
    date: "2024",
    description: "Led team to develop innovative solution for social impact"
  },
  {
    title: "Published Technical Article",
    platform: "Medium",
    date: "2024",
    description: "Shared insights on modern web development practices"
  }
];

const Certificates = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section className="certificates-section" id="certificates">
      <h2 className="section-title"><FaCertificate /> Certifications</h2>
      
      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-card">
            <h3>{cert.title}</h3>
            <p className="platform">{cert.platform}</p>
            {cert.completionDate && (
              <p className="completion-date">Completed: {cert.completionDate}</p>
            )}
            {cert.duration && (
              <p className="duration">Duration: {cert.duration}</p>
            )}
            {cert.credential && (
              <a 
                href={cert.credential} 
                target="_blank" 
                rel="noopener noreferrer"
                className="credential-link"
              >
                <FaExternalLinkAlt /> View Credential
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
