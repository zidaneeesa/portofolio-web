import React from 'react';
import { ChevronDown, Zap } from 'lucide-react';
import { skillsData } from '../data';

export default function Skills({ scrollToSection }) {
  const categories = [
    {
      key: 'web',
      title: 'Web Development',
      skills: skillsData.web,
    },
    {
      key: 'mobile',
      title: 'Mobile Development',
      skills: skillsData.mobile,
    },
    {
      key: 'dbAndTools',
      title: 'Database & Tools',
      skills: skillsData.dbAndTools,
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="skills-container animate-fade-in">
        <h2 className="title-large">Skills</h2>
        <p className="subtitle-small">kemampuan <span>teknis & personal</span></p>

        <div className="glass-card skills-rows-container">
          {categories.map((cat) => (
            <div key={cat.key} className="skills-row-item">
              <div className="skills-row-category">
                <span className="skills-row-bullet">●</span>
                <h3>// {cat.title}</h3>
              </div>
              <div className="skills-row-tags">
                {cat.skills.map((skill, index) => (
                  <div key={index} className="skill-row-tag">
                    <span className="skill-row-tag-name">{skill.name}</span>
                    <span className="skill-row-tag-level">{skill.level}</span>
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
