import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import "../styles/Footer.css";   
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <span className="footer-logo">Logendiran K</span>
          <p className="footer-tagline">Full stack developer · IoT enthusiast</p>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          <a
            href="https://github.com/logendiranK"
            className="social-link"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/logendiran-k/"
            className="social-link"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
          <a href="mailto:logendiran2005@gmail.com" className="social-link" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copy">
          <p>
            © {currentYear} Made with <Heart className="heart-icon" /> by Logendiran
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
