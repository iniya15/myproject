import React from 'react';
import './Projects.css';
import { FaCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "ESCT",
      subtitle: "Engineering Supply Chain Tool",
      description: "A web-based supply chain management platform that streamlines the purchase request and approval process for engineering teams. Allows employees to raise tool/material requests and enables managers to approve or reject them through a secure dashboard.",
      technologies: ["React.js", "Python Flask", "MySQL", "Firebase Authentication"]
    },
    {
      title: "FINWELL",
      subtitle: "AI Retirement Planning",
      description: "An AI-based retirement planning platform that helps retirees and pre-retirees plan a hassle-free retirement. Generates a personalised retirement plan and savings based on personal preferences.",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"]
    },
    {
      title: "MELLOWMIND",
      subtitle: "Mental Health Tracker",
      description: "A mental health and well-being tracker that helps users feel better emotionally and grow daily through mindfulness, journaling, and self-care. Provides mood tracking, anxiety check-ins, goal setting, and emotional journaling in a safe and supportive space.",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "FLOWSYNC",
      subtitle: "ADHD Time Management",
      description: "Platform that aids ADHD individuals with personalised time management where the given task is broken into accomplishable segments for better focus.",
      technologies: ["React.js"]
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A collection of projects that showcase my passion for creating meaningful digital experiences and solving real-world problems.
        </p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
