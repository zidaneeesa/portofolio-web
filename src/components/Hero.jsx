import React from 'react';
import { ChevronDown, Mail, Send } from 'lucide-react';
import { profileData } from '../data';

// Custom SVG Github Icon matching Lucide style
const GithubIcon = ({ size = 20 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Hero({ scrollToSection }) {
  return (
    <section id="hero" className="section hero-section">
      <div className="hero-content animate-fade-in">
        <div className="status-badge">
          <span className="status-dot"></span>
          Tersedia Untuk Magang / Proyek
        </div>
        <h3 className="hero-greeting">Halo, saya</h3>
        <h1 className="hero-name">{profileData.name}</h1>
        
        <h2 className="hero-subtitle">
          {profileData.title}
        </h2>

        <p className="hero-description">
          Mahasiswa Teknik Informatika yang antusias mengembangkan solusi digital berbasis web, mobile, computer vision, dan Internet of Things (IoT).
        </p>

        <div className="hero-cta-group">
          <button onClick={() => scrollToSection('contacts')} className="btn-primary">
            Hubungi Saya <Send size={18} />
          </button>
          <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href={`mailto:${profileData.email}`} className="btn-icon" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection('about')} 
        className="bounce-arrow"
        aria-label="Scroll to About"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
