// App.js
import React from 'react';
import { portfolioConfig } from './config';

const App = () => {
  const { name, title, about, projects, theme } = portfolioConfig;
  
  return (
    <div style={{ '--primary': theme.primaryColor }}>
      <nav className="nav">
        <div className="nav-content">
          <h1>{name}</h1>
          <div>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="section" 
        style={{
          background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`
        }}>
        <h1 className="hero-title">{name}</h1>
        <p className="hero-subtitle">{title}</p>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p className="about-text">{about.description}</p>
        <div className="skills-grid">
          {about.skills.map((skill, index) => (
            <div key={index} className="skill-tag">{skill}</div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.link} className="btn">View Project</a>
                  <a href={project.github} className="btn btn-secondary">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <div className="contact-links">
          <a href={`mailto:${portfolioConfig.email}`} className="btn">
            Email Me
          </a>
          <a href={portfolioConfig.github} className="btn btn-secondary">
            GitHub
          </a>
          <a href={portfolioConfig.linkedin} className="btn btn-secondary">
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
