import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import "../styles/Home.css";

function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg" aria-hidden>
        <div className="hero-orb hero-orb--blue" />
        <div className="hero-orb hero-orb--purple" />
        <div className="hero-orb hero-orb--teal" />
      </div>

      <div className="hero-layout">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I&apos;m <span className="hero-title-accent">Logendiran K</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer | IoT Enthusiast</p>
          <p className="hero-description">
            I build responsive web applications with the MERN stack and enjoy connecting hardware to the cloud—from dashboards and APIs to sensors and alerts. B.E. graduate focused on clean code, scalable solutions, and shipping reliable products you can trust.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Explore My Work
            </a>

            <a
              href="./LogendiranK_Resume.pdf"
              download="LogendiranK_Resume.pdf"
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>

          <div className="hero-social" aria-label="Social links">
            <a
              href="https://github.com/logendiranK"
              className="hero-social-link"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={22} strokeWidth={2} />
            </a>
            <a
              href="https://www.linkedin.com/in/logendiran-k/"
              className="hero-social-link"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={22} strokeWidth={2} />
            </a>
            <a
              href="mailto:logendiran2005@gmail.com"
              className="hero-social-link"
              aria-label="Email"
            >
              <Mail size={22} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to About">
        <span className="hero-scroll-text">Scroll</span>
        <span className="hero-scroll-line" aria-hidden />
      </a>
    </section>
  );
}

export default Home;
