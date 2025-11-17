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
          <span className="footer-logo">Portfolio</span>
          <p className="footer-tagline">
            Building the future, one line of code at a time
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          <a href="#" className="social-link" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="#" className="social-link" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="" className="social-link" aria-label="Email">
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
