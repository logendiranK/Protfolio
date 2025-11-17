import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
   {
      id: 1,
      title: "Rubiks Cubes",
      description: "An interactive 3D Rubik’s Cube built using Three.js with smooth animations and user-controlled rotations.",
      technologies: ["Three.js", "JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/logendiranK/threejs-rubiks-cube",
      liveUrl: "https://cubes-0805.netlify.app/",
      image: "https://github.com/logendiranK/threejs-rubiks-cube/blob/main/assets/rubiks-cube.png?raw=true"
    },
    {
      id: 2,
      title: "AVLearn",
      description: "A gamified learning platform that makes education interactive through quizzes, progress tracking, and engaging game-based features.",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/logendiranK/educative-game",
      liveUrl: "https://avlearns.vercel.app/",
      image: "https://via.placeholder.com/400x250?text=Project+2"
    },
    {
      id: 3,
      title: "Temperature Converter",
      description: "A simple and responsive temperature converter that instantly converts values between Celsius and Fahrenheit.”",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/logendiranK/intern-task-3-temperature-conveter",
      liveUrl: "https://playful-palmier-d61319.netlify.app/",
      image: "https://github.com/logendiranK/intern-task-3-temperature-conveter/blob/main/assets/temperature-converter.png?raw=true"
    },

    {
      id: 4,
      title: "Melody Keys",
      description: "A Website for a melody keyboard that allows you to play melodies by clicking on the keys.”",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/logendiranK/Melody-Keys",
      liveUrl: "https://melodykeys.netlify.app/",
      image: "https://github.com/logendiranK/Melody-Keys/blob/main/assets/melody-keys.png?raw=true"
    },
    {
      id: 5,
      title: "Gallery",
      description: "A Gallery website that allows you to view for images.”",
      technologies: ["React", "Node.js", "MongoDB","Cloudinary"],
      githubUrl: "https://github.com/logendiranK/Gallery-Frontend",
      liveUrl: "https://gallery-frontend-ytv4.vercel.app/",
      image: "https://github.com/logendiranK/Gallery-Frontend/blob/main/assets/gallery.png?raw=true"
    },
    {
      id: 6,
      title: "Grocery Mart",
      description: "A Grocery Mart website that allows you to view for products and add them to the cart.”",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/logendiranK/Grocery-Mart-frontend",
      liveUrl: "https://grocery-mart-frontend.vercel.app/",
      image: "https://github.com/logendiranK/Gallery-Frontend/blob/main/assets/gallery.png?raw=true"
    }
  ];


  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">
        My <span className="highlight">Projects</span>
      </h2>      
      
      <div className="projects-container">
        {projects.map((project) => (
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
export default Projects;