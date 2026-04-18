import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Contact.css';

function Contact () {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);



  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        <div className={`contact-header ${isVisible ? 'fade-in' : ''}`}>
          <h2>Let's Create <span className="highlight">Together</span></h2>
          <p>
            Ready to bring your vision to life? Let's discuss your project and explore the possibilities.
          </p>
        </div>

        <div className="contact-grid">

          <div className={`contact-info ${isVisible ? 'slide-left' : ''}`}>
            <h3>Get In <span className="highlight">Touch</span></h3>
            <p>
              I specialize in building scalable web applications. Let's discuss how I can help achieve your goals.
            </p>

            <div className="info-card">
              <Mail size={20} />
              <div>
                <h4>Email</h4>
                <p>logendiran2005@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <Phone size={20} />
              <div>
                <h4>Phone</h4>
                <p>+91 8124072890</p>
              </div>
            </div>

            <div className="info-card">
              <MapPin size={20} />
              <div>
                <h4>Location</h4>
                <p>Arakonam , Ranipet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
