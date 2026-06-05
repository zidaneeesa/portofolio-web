import React from 'react';
import { ChevronDown, Code, Smartphone, Database, Zap, BookOpen, Settings } from 'lucide-react';
import { skillsData } from '../data';

export default function Skills({ scrollToSection }) {
  const categories = [
    {
      key: 'web',
      title: 'Web Development',
      icon: <Code size={24} className="category-icon" />,
      skills: skillsData.web,
    },
    {
      key: 'mobile',
      title: 'Mobile Development',
      icon: <Smartphone size={24} className="category-icon" />,
      skills: skillsData.mobile,
    },
    {
      key: 'dbAndTools',
      title: 'Database, Tools & Specialized',
      icon: <Database size={24} className="category-icon" />,
      skills: skillsData.dbAndTools,
    },
  ];

  const getPercentage = (level) => {
    switch (level) {
      case 'Expert': return 95;
      case 'Advanced': return 85;
      case 'Intermediate': return 70;
      default: return 60;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="skills-container animate-fade-in">
        <h2 className="title-large">Skills</h2>
        <p className="subtitle-small">kemampuan <span>teknis & personal</span></p>

        <div className="skills-grid">
          {categories.map((cat) => (
            <div key={cat.key} className="glass-card skill-category-card">
              <div className="category-header">
                {cat.icon}
                <h3>{cat.title}</h3>
              </div>
              <div className="skills-list">
                {cat.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                    <div className="progress-bar-track">
                      <div 
                        className="progress-bar-fill" 
                        style={{ width: `${getPercentage(skill.level)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Traits / Personal Strengths */}
        <div className="personal-traits glass-card">
          <div className="traits-header">
            <Zap size={20} className="traits-icon" />
            <h3>Kelebihan & Karakter Kerja</h3>
          </div>
          <div className="traits-grid">
            <div className="trait-item">
              <span className="trait-number">01</span>
              <h4>Fast Learner</h4>
              <p>Mampu mempelajari framework, bahasa baru, maupun integrasi hardware/sistem IoT dalam waktu singkat.</p>
            </div>
            <div className="trait-item">
              <span className="trait-number">02</span>
              <h4>Problem Solver</h4>
              <p>Senang menganalisis bug, mengoptimasi database, serta memecahkan logika algoritma yang kompleks.</p>
            </div>
            <div className="trait-item">
              <span className="trait-number">03</span>
              <h4>Team Player</h4>
              <p>Memiliki komunikasi yang baik untuk kolaborasi tim dalam siklus pengembangan Git/GitHub.</p>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection('projects')} 
        className="bounce-arrow"
        aria-label="Scroll to Projects"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
