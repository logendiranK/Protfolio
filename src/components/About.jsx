import React from "react";
import "../styles/About.css";
import { Laptop, Layout, Server, Zap, Brain, Users } from "lucide-react";

function About () {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">
        About <span>Me</span>
      </h2>
      <p className="about-subtitle">
        Final-year engineering student & aspiring full-stack developer (MERN).
        I love building clean, fast and user-friendly web apps.
      </p>

      <div className="about-content">

        <div className="about-text">
          <p>
            I'm a final-year undergraduate passionate about turning ideas into
            useful web applications. My focus is full-stack development with
            React, Node.js/Express, MongoDB, JavaScript, THREE JS, HTML and CSS.
          </p>
          <p>
            On campus, I've built end-to-end projects—from small tools to full
            products—practicing clean code, version control and deployment. I
            enjoy hackathons, collaborating with peers, and learning in public.
          </p>
          <p>
            I'm actively looking for internship/entry-level opportunities where
            I can contribute, learn from strong teams, and ship real features.
          </p>

          <div className="stats">
            <div className="stat-card">
              <h3>10+</h3>
              <p>Projects Built (academic & personal)</p>
            </div>
            <div className="stat-card">
              <h3>1</h3>
              <p>Internship/Training (full-stack focus)</p>
            </div>
            <div className="stat-card">
              <h3>3+</h3>
              <p>Hackathons/Workshops (participation & learning)</p>
            </div>
            <div className="stat-card">
              <h3>2026</h3>
              <p>Graduation Year (open to opportunities)</p>
            </div>
          </div>
        </div>


        <div className="skills-grid">
          <div className="skill-card">
            <Laptop className="icon" />
            <h4>Full-Stack (MERN)</h4>
            <p>React, Node.js, Express, MongoDB.</p>
          </div>
          <div className="skill-card">
            <Layout className="icon" />
            <h4>Frontend Engineering</h4>
            <p>Responsive UI, Accessibility, State Management.</p>
          </div>
          <div className="skill-card">
            <Server className="icon" />
            <h4>Backend & APIs</h4>
            <p>REST APIs, Auth, Validation, Database design.</p>
          </div>
          <div className="skill-card">
            <Zap className="icon" />
            <h4>User Experience</h4>
            <p>Fast, Responsive, and Intuitive.</p>
          </div>
          <div className="skill-card">
            <Brain className="icon" />
            <h4>Problem Solving</h4>
            <p>Data structures, Algorithms, Debugging.</p>
          </div>
          <div className="skill-card">
            <Users className="icon" />
            <h4>Collaboration & Deployment</h4>
            <p>Git/GitHub, Vercel, Render.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
