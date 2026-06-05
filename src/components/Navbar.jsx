import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, scrollToSection }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navItems = [
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Contacts', target: 'contacts' },
  ];

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);
    scrollToSection(target);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }} className="navbar-logo">
          zidane<span>julian</span>
        </a>

        {/* Desktop Menu */}
        <nav className="navbar-desktop">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.target);
              }}
              className={`navbar-link ${activeSection === item.target ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
          <button onClick={toggleTheme} className="btn-icon" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="navbar-mobile-controls">
          <button onClick={toggleTheme} className="btn-icon mobile-theme-btn" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-icon mobile-menu-btn"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <nav className="navbar-mobile-drawer animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.target);
              }}
              className={`navbar-mobile-link ${activeSection === item.target ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
