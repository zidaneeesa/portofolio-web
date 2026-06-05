import React from 'react';
import { ChevronDown, GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { profileData, timelineData } from '../data';

export default function About({ scrollToSection }) {
  const details = [
    { label: 'Status', value: 'Mahasiswa Aktif' },
    { label: 'Fokus Area', value: 'Web & Mobile Dev' },
    { label: 'Universitas', value: 'Polije (TI)' },
    { label: 'Domisili', value: 'Jember, Indonesia' }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="about-container animate-fade-in">
        <h2 className="title-large">About</h2>
        <p className="subtitle-small">biodata & <span>riwayat</span></p>

        <div className="about-grid">
          {/* Left Column: Biodata & Stats */}
          <div className="about-left-col">
            <div className="glass-card bio-card">
              <h3 className="bio-title">// DETAIL SINGKAT</h3>
              <p className="bio-text">
                {profileData.aboutBio}
              </p>

              {/* Detail Grid */}
              <div className="details-grid">
                {details.map((detail, index) => (
                  <div key={index} className="details-item">
                    <span className="details-label">{detail.label}</span>
                    <span className="details-val">{detail.value}</span>
                  </div>
                ))}
              </div>

              {/* Stats Row */}
              <div className="stats-row">
                <div className="stat-card">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Proyek Selesai</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Bidang Minat</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="timeline-container">
            <h3 className="timeline-title">// PENDIDIKAN & PENGALAMAN</h3>
            <div className="timeline-items">
              {timelineData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-badge">
                    {item.type === 'education' ? (
                      <GraduationCap size={14} />
                    ) : (
                      <Briefcase size={14} />
                    )}
                  </div>
                  <div className="timeline-content glass-card">
                    <div className="timeline-header">
                      <span className="timeline-date">
                        <Calendar size={12} style={{ marginRight: '4px' }} />
                        {item.date}
                      </span>
                      <span className={`timeline-tag ${item.type}`}>
                        {item.type === 'education' ? 'Pendidikan' : 'Proyek'}
                      </span>
                    </div>
                    <h4 className="timeline-item-title">{item.title}</h4>
                    <h5 className="timeline-item-subtitle">{item.subtitle}</h5>
                    <p className="timeline-item-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection('skills')} 
        className="bounce-arrow"
        aria-label="Scroll to Skills"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
