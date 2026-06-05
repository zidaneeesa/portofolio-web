import React from 'react';
import { Mail } from 'lucide-react';
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Side: Copyright */}
        <div className="footer-left">
          <span>&copy; zidanejulian 2024 - {currentYear}</span>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="footer-right">
          <a 
            href={profileData.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a 
            href={`mailto:${profileData.email}`} 
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
