import React, { useEffect } from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import '../styles/Projects.css';

function FullProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="projects-section full-projects-page">
      <div className="full-projects-toolbar">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} aria-hidden />
          Back to Home
        </Link>
      </div>

      <h2 className="section-title">
        All <span className="highlight">Projects</span>
      </h2>      
      
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <div className="project-links">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View live site"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FullProjects;
