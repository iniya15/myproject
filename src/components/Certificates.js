import React from 'react';
import './Certificates.css';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

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

const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-header">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Professional certifications and courses that demonstrate my commitment to continuous learning and skill development.
        </p>
      </div>
      
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <div className="certificate-header">
              <FaCertificate className="certificate-icon" />
              <div>
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-platform">{cert.platform}</p>
              </div>
            </div>
            
            {cert.credential && (
              <a 
                href={cert.credential} 
                target="_blank" 
                rel="noopener noreferrer"
                className="certificate-link"
              >
                <FaExternalLinkAlt />
                <span>View Credential</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
