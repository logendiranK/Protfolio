import React, { useEffect, useState } from 'react';
import {Github, Linkedin,Code, Zap } from 'lucide-react';
import '../styles/Home.css'; 

function Home() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Full Stack Developer','Programmer'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);


  return (
    <section id="home" className="hero-section">

      <div className="hero-bg">
        <div className="back-bg color1"></div>
        <div className="back-bg color2"></div>
        <div className="back-bg color3"></div>
      </div>

      <div className="hero-content">
        <div className="space-y-8">
          {/* Floating icons */}
          <div className="floating-icon left">
            <Code className="w-12 h-12 text-blue-400/30" />
          </div>
          <div className="floating-icon right">
            <Zap className="w-10 h-10 text-purple-400/30" />
          </div>

          {/* Main heading */}
          <div className="animate-fade-in-up">
            <h1 className="hero-heading">
              <span className="block">Hi, I'm </span>
              <span className="holographic animate-text-glow">
                 LOGENDIRAN K
              </span>
            </h1>
          </div>
          
          {/* Typewriter */}
          <div className="animate-fade-in-up animation-delay-500">
            <div className="typewriter">
              <span className="cursor">{text}</span>
            </div>
          </div>
          
          {/* Description */}
          <div className="animate-slide-in-left animation-delay-1000">
            <p className="hero-description">
              I craft extraordinary digital experiences that push the boundaries of creativity and technology.
              Transforming ideas into reality with cutting-edge solutions and innovative design.
            </p>
          </div>

          {/* Buttons */}
          <div className="hero-buttons animate-slide-in-right animation-delay-1500">
            <button className="btn-primary" >
              <span>Explore My Universe</span>
            </button>
            <a
              href="/resume.pdf"
              download="Logendiran_Resume.pdf"
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social icons */}
          <div className="hero-social animate-fade-in-up animation-delay-2000">
            {[
              { icon: Github, href:'https://github.com/logendiranK',color: 'hover:text-gray-300' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/logendiran-k/', color: 'hover:text-blue-400' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`social-icon ${social.color}`}
              >
                <div className="social-glow"></div>
                <social.icon size={32} className="relative z-10" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-bounce">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;