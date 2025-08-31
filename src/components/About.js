import React from 'react';
import './About.css';
import { FaLaptopCode, FaBrain, FaMusic, FaUtensils, FaBook, FaStar, FaPen, FaMicrophone, FaFileAlt, FaPuzzlePiece, FaFileAlt as FaResume, FaExternalLinkAlt, FaUser } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">
          A passionate CSBS student with a love for creating meaningful digital experiences and solving complex problems through innovative web development.
        </p>
      </div>

      {/* Technical & Soft Skills */}
      <div className="skills-section">
        <div className="skill-group">
          <h3 className="skill-title">Technical Skills</h3>
          <div className="skill-tags">
            {['React.js', 'Python', 'MySQL', 'Firebase', 'HTML', 'CSS', 'JavaScript', 'Flask', 'Java', 'C'].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skill-group">
          <h3 className="skill-title">Soft Skills</h3>
          <div className="skill-tags">
            {['Communication', 'Leadership', 'Teamwork', 'Adaptability', 'Time Management', 'Problem Solving'].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Hobbies */}
      <div className="hobbies-section">
        <h3 className="section-subtitle">Interests & Hobbies</h3>
        <div className="hobbies-grid">
          <div className="hobby-item">
            <FaMusic className="hobby-icon" />
            <div className="hobby-content">
              <h4>Music</h4>
              <p>Vocalist who finds expression through melody and lyrics</p>
            </div>
          </div>
          <div className="hobby-item">
            <FaBook className="hobby-icon" />
            <div className="hobby-content">
              <h4>Reading</h4>
              <p>Exploring worlds through fiction, philosophy, and poetry</p>
            </div>
          </div>
          <div className="hobby-item">
            <FaUtensils className="hobby-icon" />
            <div className="hobby-content">
              <h4>Cooking</h4>
              <p>Experimenting with recipes and creating comfort food</p>
            </div>
          </div>
          <div className="hobby-item">
            <FaExternalLinkAlt className="hobby-icon" />
            <div className="hobby-content">
              <h4>Entertainment</h4>
              <p>Enjoying shows, movies & anime across various genres</p>
            </div>
          </div>
        </div>
      </div>

      {/* Extra-Curricular */}
      <div className="extracurricular-section">
        <h3 className="section-subtitle">Extra-Curricular Activities</h3>
        <div className="extracurricular-grid">
          <div className="extracurricular-card">
            <div className="card-header">
              <FaPen className="card-icon" />
              <h4>UiPhoria</h4>
            </div>
            <p className="card-role">Editorial Team</p>
            <p className="card-description">Contributed to technical writing, documentation, and creative content for the Automation Club's initiatives.</p>
          </div>

          <div className="extracurricular-card">
            <div className="card-header">
              <FaMicrophone className="card-icon" />
              <h4>Film Club</h4>
            </div>
            <p className="card-role">Music Lead</p>
            <p className="card-description">Started as Vocalist, now leading musical performances, team coordination, and stage management.</p>
          </div>

          <div className="extracurricular-card">
            <div className="card-header">
              <FaFileAlt className="card-icon" />
              <h4>Youth Red Cross</h4>
            </div>
            <p className="card-role">Content Team</p>
            <p className="card-description">Created posts and content for YRC events and social campaigns.</p>
          </div>

          <div className="extracurricular-card">
            <div className="card-header">
              <FaPuzzlePiece className="card-icon" />
              <h4>IEEE TEMS</h4>
            </div>
            <p className="card-role">Society Member</p>
            <p className="card-description">Participated in club initiatives focused on technology, entrepreneurship, and management.</p>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <a
          href="/Iniya_Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          <FaResume /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
