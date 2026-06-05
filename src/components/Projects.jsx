import React, { useState } from 'react';
import { ChevronDown, ExternalLink, Code, Layers, Layout, ShieldAlert } from 'lucide-react';
import { projectsData } from '../data';

export default function Projects({ scrollToSection }) {
  const [activeTab, setActiveTab] = useState('Semua');

  const tabs = ['Semua', 'Web App', 'Mobile App', 'Desktop App', 'IoT & CV'];

  const filterProjects = (project) => {
    if (activeTab === 'Semua') return true;
    if (activeTab === 'Web App') return project.category.includes('Web');
    if (activeTab === 'Mobile App') return project.category.includes('Mobile');
    if (activeTab === 'Desktop App') return project.category.includes('Desktop');
    if (activeTab === 'IoT & CV') return project.category.includes('IoT') || project.category.includes('Vision');
    return false;
  };

  const filteredProjects = projectsData.filter(filterProjects);

  return (
    <section id="projects" className="section projects-section">
      <div className="projects-container animate-fade-in">
        <h2 className="title-large">Projects</h2>
        <p className="subtitle-small">portofolio & <span>eksperimen</span></p>

        {/* Tab Filters */}
        <div className="projects-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className="project-mockup">
                {project.id === 'si-pustaka' ? (
                  <div className="mockup-layered-desktop">
                    {/* Background Desktop Dashboard */}
                    <div className="mockup-desktop-main">
                      <div className="browser-header">
                        <span></span><span></span><span></span>
                      </div>
                      <div className="browser-body" style={{ padding: 0 }}>
                        <img 
                          src="/sipustaka_table.png" 
                          alt="SI-PUSTAKA Admin Dashboard" 
                          className="screenshot-img" 
                        />
                      </div>
                    </div>
                    
                    {/* Left Window: Katalog Buku */}
                    <div className="mockup-desktop-left">
                      <div className="browser-header">
                        <span></span><span></span><span></span>
                      </div>
                      <div className="browser-body" style={{ padding: 0 }}>
                        <img 
                          src="/sipustaka_left.png" 
                          alt="SI-PUSTAKA Katalog Buku" 
                          className="screenshot-img" 
                        />
                      </div>
                    </div>

                    {/* Right Window: Login Screen */}
                    <div className="mockup-desktop-right">
                      <div className="browser-header">
                        <span></span><span></span><span></span>
                      </div>
                      <div className="browser-body" style={{ padding: 0 }}>
                        <img 
                          src="/sipustaka_login.png" 
                          alt="SI-PUSTAKA Login Screen" 
                          className="screenshot-img" 
                        />
                      </div>
                    </div>
                  </div>
                ) : project.id === 'e-library-sman4' ? (
                  <div className="mockup-layered">
                    {/* Background Web Dashboard */}
                    <div className="mockup-web">
                      <div className="browser-header">
                        <span></span><span></span><span></span>
                      </div>
                      <div className="browser-body" style={{ padding: 0 }}>
                        <img 
                          src="/devora_admin.png" 
                          alt="E-Library SMAN 4 Jember Admin Dashboard" 
                          className="screenshot-img" 
                        />
                      </div>
                    </div>
                    
                    {/* Left Phone: Mobile Splash Screen */}
                    <div className="mockup-phone mockup-phone-left">
                      <div className="phone-screen" style={{ padding: 0 }}>
                        <img 
                          src="/devora_mobile_splash.png" 
                          alt="DEVORA Mobile Splash Screen" 
                          className="screenshot-img" 
                        />
                      </div>
                    </div>

                    {/* Right Phone: Mobile User Profile */}
                    <div className="mockup-phone mockup-phone-right">
                      <div className="phone-screen" style={{ padding: 0 }}>
                        <img 
                          src="/devora_mobile_profile.png" 
                          alt="DEVORA Mobile User Profile" 
                          className="screenshot-img" 
                        />
                      </div>
                    </div>
                  </div>
                ) : project.id === 'gerbang-otomatis' ? (
                  <div className="mockup-layered">
                    {/* Background Web Dashboard (Data Plat Terverifikasi) */}
                    <div className="mockup-web">
                      <div className="browser-header">
                        <span></span><span></span><span></span>
                      </div>
                      <div className="browser-body" style={{ padding: 0 }}>
                        <img 
                          src="/gerbang_web.png" 
                          alt="SI-GEBA Web Dashboard" 
                          className="screenshot-img" 
                        />
                      </div>
                    </div>
                    
                    {/* Foreground: Live Camera Detection Feed (IoT/Hardware Implementation) */}
                    <div className="mockup-camera-feed">
                      <div className="camera-header">
                        <span className="camera-dot"></span> LIVE FEED [CAM-01]
                      </div>
                      <div className="camera-screen" style={{ padding: 0 }}>
                        <img 
                          src="/gerbang_iot.png" 
                          alt="SI-GERBANG IoT & Camera Detection" 
                          className="screenshot-img"
                          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                        />
                        <div className="camera-status-indicator">
                          AKSES DIBUKA
                        </div>
                      </div>
                    </div>
                  </div>
                ) : project.id === 'tukang-pangkas-rambut' ? (
                  <div className="mockup-layered">
                    {/* Background Web Dashboard */}
                    <div className="mockup-web">
                      <div className="browser-header">
                        <span></span><span></span><span></span>
                      </div>
                      <div className="browser-body" style={{ padding: 0 }}>
                        <img 
                          src="/barbergo_admin.png" 
                          alt="BarberGo Web Admin Dashboard" 
                          className="screenshot-img" 
                        />
                      </div>
                    </div>
                    
                    {/* Left Phone: Customer App */}
                    <div className="mockup-phone mockup-phone-left">
                      <div className="phone-screen" style={{ padding: 0 }}>
                        <img 
                          src="/barbergo_customer.png" 
                          alt="BarberGo Customer App" 
                          className="screenshot-img" 
                        />
                      </div>
                    </div>

                    {/* Right Phone: Barber App */}
                    <div className="mockup-phone mockup-phone-right">
                      <div className="phone-screen" style={{ padding: 0 }}>
                        <img 
                          src="/barbergo_barber.png" 
                          alt="BarberGo Barber App" 
                          className="screenshot-img" 
                        />
                      </div>
                    </div>
                  </div>
                ) : project.id === 'pemesanan-tiket-wisata' ? (
                  <div className="mockup-layered">
                    {/* Background Web Dashboard */}
                    <div className="mockup-web">
                      <div className="browser-header">
                        <span></span><span></span><span></span>
                      </div>
                      <div className="browser-body" style={{ padding: 0 }}>
                        <img 
                          src="/jeli_web.png" 
                          alt="SI-JELI Web Page" 
                          className="screenshot-img" 
                        />
                      </div>
                    </div>
                    
                    {/* Left Phone: Mobile Travel App */}
                    <div className="mockup-phone mockup-phone-left">
                      <div className="phone-screen" style={{ padding: 0 }}>
                        <img 
                          src="/jeli_mobile_home.png" 
                          alt="JELI Mobile App Home Screen" 
                          className="screenshot-img" 
                        />
                      </div>
                    </div>

                    {/* Right Phone: Mobile QR E-Ticket */}
                    <div className="mockup-phone mockup-phone-right">
                      <div className="phone-screen" style={{ padding: 0 }}>
                        <img 
                          src="/jeli_mobile_qr.png" 
                          alt="JELI Mobile QR E-Ticket" 
                          className="screenshot-img" 
                        />
                      </div>
                    </div>
                  </div>
                ) : project.category.includes('Mobile') ? (
                  <div className="mockup-phone">
                    <div className="phone-screen">
                      <div className="screen-header"></div>
                      <div className="screen-body">
                        <div className="body-bar"></div>
                        <div className="body-circle"></div>
                        <div className="body-list">
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : project.category.includes('IoT') ? (
                  <div className="mockup-hardware">
                    <div className="board">
                      <div className="chip"></div>
                      <div className="pins"></div>
                      <div className="led-green"></div>
                      <div className="led-blue"></div>
                    </div>
                  </div>
                ) : (
                  <div className="mockup-web">
                    <div className="web-browser">
                      <div className="browser-header">
                        <span></span><span></span><span></span>
                      </div>
                      <div className="browser-body">
                        <div className="body-banner"></div>
                        <div className="body-grid">
                          <div></div><div></div><div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="project-details">
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <span className="project-cat">{project.category}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-desc">{project.description}</p>

                <div className="project-highlights">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="highlight-bullet">
                      <span>•</span> {h}
                    </div>
                  ))}
                </div>

                <div className="project-tech-stack">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={() => scrollToSection('contacts')} 
        className="bounce-arrow"
        aria-label="Scroll to Contacts"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
