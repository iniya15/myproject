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
    title: "Smart India Hackathon 2024",
    platform: "Software Edition - Top 100",
    date: "2024",
    description: "Participated in the prestigious Smart India Hackathon, reaching the top 100 teams in the college level in the software edition."
  }
];

const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-header">
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">
          Recognition and participation in various competitions and hackathons that showcase my problem-solving skills and innovative thinking.
        </p>
      </div>
      
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-header">
              <FaTrophy className="achievement-icon" />
              <div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-platform">{achievement.platform}</p>
              </div>
            </div>
            
            <p className="achievement-date">{achievement.date}</p>
            <p className="achievement-description">{achievement.description}</p>
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
          <FaLinkedin />
          <span>View More on LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default Achievements; 