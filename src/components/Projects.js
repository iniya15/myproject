import React from 'react';
import './Projects.css';
import { FaCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "ESCT (Engineering Supply Chain Tool)",
      description: "A web-based supply chain management platform that streamlines the purchase request and approval process for engineering teams. Allows employees to raise tool/material requests and enables managers to approve or reject them through a secure dashboard.",
      technologies: ["React.js", "Python Flask", "MySQL", "Firebase Authentication"]
    },
    {
      title: "FINWELL",
      description: "An AI-based retirement planning platform that helps retirees and pre-retirees plan a hassle-free retirement. Generates a personalised retirement plan and savings based on personal preferences.",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"]
    },
    {
      title: "MELLOWMIND",
      description: "A mental health and well-being tracker that helps users feel better emotionally and grow daily through mindfulness, journaling, and self-care. Provides mood tracking, anxiety check-ins, goal setting, and emotional journaling in a safe and supportive space.",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "FLOWSYNC",
      description: "Platform that aids ADHD individuals with personalised time management where the given task is broken into accomplishable segments for better focus.",
      technologies: ["React.js"]
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title"><FaCode /> My Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <div className="project-placeholder">
                <FaCode />
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
