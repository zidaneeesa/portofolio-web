import React from 'react';
import { ChevronDown, GraduationCap, Briefcase, User, Calendar, Mail, BookOpen } from 'lucide-react';
import { profileData, timelineData } from '../data';

export default function About({ scrollToSection }) {
  return (
    <section id="about" className="section about-section">
      <div className="about-container animate-fade-in">
        <h2 className="title-large">About</h2>
        <p className="subtitle-small">biodata & <span>riwayat</span></p>

        <div className="about-grid">
          {/* Left Column: Biodata Glass Card */}
          <div className="glass-card bio-card">
            <div className="bio-header">
              <div className="avatar-placeholder">
                <User size={40} className="avatar-icon" />
              </div>
              <div>
                <h3 className="bio-name">{profileData.name}</h3>
                <p className="bio-nim">NIM. {profileData.nim}</p>
              </div>
            </div>

            <div className="bio-content">
              <p className="bio-text">
                {profileData.aboutBio}
              </p>

              <div className="bio-details">
                <div className="detail-item">
                  <Mail size={16} />
                  <span>{profileData.email}</span>
                </div>
                <div className="detail-item">
                  <BookOpen size={16} />
                  <span>Politeknik Negeri Jember</span>
                </div>
              </div>

              <div className="bio-interests">
                <h4>Minat Bidang:</h4>
                <div className="interest-tags">
                  {profileData.interests.map((interest, index) => (
                    <span key={index} className="tag">{interest}</span>
                  ))}
                </div>
              </div>

              <div className="bio-readiness glass-card">
                <h5>Status Kesiapan:</h5>
                <p>Siap terlibat dalam proyek nyata (real project) berbasis tim maupun individu.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="timeline-container">
            <h3 className="timeline-title">Pendidikan & Pengalaman</h3>
            <div className="timeline-items">
              {timelineData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-badge">
                    {item.type === 'education' ? (
                      <GraduationCap size={18} />
                    ) : (
                      <Briefcase size={18} />
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
