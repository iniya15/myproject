import React from 'react';
import './Achievements.css';
import { FaTrophy, FaLinkedin } from 'react-icons/fa';

const achievements = [
  {
    title: "HackHerVerse",
    platform: "Google Developer Groups REC",
    date: "2025",
    description: "Reached Top 50 teams in HackHerVerse, a women-focused hackathon conducted by Google Developer Groups REC."
  },
  {
    title: "Google Solution Challenges",
    platform: "Google Developer Groups REC",
    date: "2025",
    description: "Participated in Google Solution Challenges conducted by Google Developer Groups REC, working on innovative solutions."
  },
  {
    title: "Pitch Perfect",
    platform: "Intellexa Club of REC",
    date: "2025",
    description: "Secured 2nd Place in Pitch Perfect (Ideathon) competition organized by Intellexa Club of REC."
  },
  {
    title: "Smart India Hackathon 2024 - Software Edition",
    platform: "Top 100 teams",
    date: "2024",
    description: "Participated in the prestigious Smart India Hackathon, reaching the top 100 teams in the college levelin the software edition."
  }
];

const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <h2 className="section-title"><FaTrophy /> Participation & Achievements</h2>
      
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="card-icon">
              <FaTrophy />
            </div>
            <h3>{achievement.title}</h3>
            <p className="platform">{achievement.platform}</p>
            <p className="date">{achievement.date}</p>
            <p className="description">{achievement.description}</p>
          </div>
        ))}
      </div>

      <div className="linkedin-section">
        <a 
          href="https://www.linkedin.com/in/iniya-sureshbabu-1a2ba6289/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <FaLinkedin /> View More on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Achievements; 