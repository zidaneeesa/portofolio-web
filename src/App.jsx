import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when section is at least 50% visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ['hero', 'about', 'skills', 'projects', 'contacts'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <div className="portfolio-container" ref={containerRef}>
      {/* Glow frame wrap matching ferdiodwi.me */}
      <div className="frame-wrapper">
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
        
        <Hero scrollToSection={scrollToSection} />
        
        <About scrollToSection={scrollToSection} />
        
        <Skills scrollToSection={scrollToSection} />
        
        <Projects scrollToSection={scrollToSection} />
        
        <Contacts />
        
        <Footer />
      </div>
    </div>
  );
}
