import React from 'react';
import './About.css';
import { FaLaptopCode, FaBrain, FaMusic, FaUtensils, FaBook, FaStar, FaPen, FaMicrophone, FaFileAlt, FaPuzzlePiece, FaFileAlt as FaResume, FaExternalLinkAlt, FaUser } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title"><FaUser /> About Me</h2>

      {/* Technical & Soft Skills */}
      <div className="skills-blocks">
        <div className="skill-column">
          <h3 className="about-subtitle"><FaLaptopCode /> Technical Skills</h3>
          <div className="skill-buttons">
            {['React.js', 'Python', 'MySQL', 'Firebase Authentication', 'HTML', 'CSS', 'JavaScript', 'Python Flask', 'Java', 'C'].map((skill) => (
              <button key={skill} className="skill-btn">{skill}</button>
            ))}
          </div>
        </div>
        <div className="skill-column">
          <h3 className="about-subtitle"><FaBrain /> Soft Skills</h3>
          <div className="skill-buttons">
            {['Communication', 'Leadership', 'Teamwork', 'Adaptability', 'Time Management', 'Conflict Handling', 'Multitasking'].map((skill) => (
              <button key={skill} className="skill-btn">{skill}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Hobbies - Compact Design with Descriptions */}
      <div className="hobbies-section">
        <h3 className="about-subtitle"><FaMusic /> Hobbies</h3>
        <div className="hobbies-grid">
          <div className="hobby-item">
            <FaMusic className="hobby-icon" />
            <span>Music</span>
            <p className="hobby-desc">I'm a vocalist and love expressing through melody and lyrics.</p>
          </div>
          <div className="hobby-item">
            <FaBook className="hobby-icon" />
            <span>Reading</span>
            <p className="hobby-desc">Books help me escape and explore — fiction, philosophy, and poetry.</p>
          </div>
          <div className="hobby-item">
            <FaUtensils className="hobby-icon" />
            <span>Cooking</span>
            <p className="hobby-desc">I enjoy experimenting with recipes and making comfort food.</p>
          </div>
          <div className="hobby-item">
            <FaExternalLinkAlt className="hobby-icon" />
            <span>Binge-Watching</span>
            <p className="hobby-desc">I unwind with good shows, movies & anime— from thrillers to heartfelt dramas and clever comedies.</p>
          </div>
        </div>
      </div>

      {/* Extra-Curricular - Card Design */}
      <div className="extracurricular-section">
        <h3 className="about-subtitle"><FaStar /> Extra-Curricular</h3>
        <div className="extracurricular-grid">
          <div className="extracurricular-card">
            <div className="card-icon">
              <FaPen />
            </div>
            <h4>UiPhoria</h4>
            <p className="card-subtitle">Automation Club</p>
            <p className="card-description">Editorial Team – contributed to technical writing, documentation, and creative content for the Automation Club's initiatives.</p>
          </div>

          <div className="extracurricular-card">
            <div className="card-icon">
              <FaMicrophone />
            </div>
            <h4>Film Club</h4>
            <p className="card-subtitle">Music Lead</p>
            <p className="card-description">Started as Vocalist, now Music Lead – lead musical performances, team coordination, and stage management.</p>
          </div>

          <div className="extracurricular-card">
            <div className="card-icon">
              <FaFileAlt />
            </div>
            <h4>Youth Red Cross</h4>
            <p className="card-subtitle">Content Team</p>
            <p className="card-description">Created posts and content for YRC events and social campaigns.</p>
          </div>

          <div className="extracurricular-card">
            <div className="card-icon">
              <FaPuzzlePiece />
            </div>
            <h4>IEEE TEMS</h4>
            <p className="card-subtitle">Society Member</p>
            <p className="card-description">Participated in club initiatives focused on technology, entrepreneurship, and management.</p>
          </div>
        </div>
      </div>

      <a
        href="/Iniya_Resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        <FaResume /> Download Resume
      </a>
    </section>
  );
};

export default About;
