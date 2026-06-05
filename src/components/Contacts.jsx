import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
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

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // KUNCI AKSES WEB3FORMS (Dapatkan gratis di https://web3forms.com/)
    // Masukkan kunci Anda di bawah agar formulir benar-benar mengirim email ke zidaneejulian@gmail.com
    const accessKey = "fbbf485e-da35-4095-94e8-a68c556c8210";

    if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE" || !accessKey) {
      // Jalankan Mode Simulasi jika Kunci Akses belum diset
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        // Auto close success alert after 4 seconds
        setTimeout(() => setSubmitSuccess(false), 4000);
      }, 1500);
    } else {
      // Jalankan Pengiriman Real menggunakan API Web3Forms
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            from_name: `${formData.name} - Portofolio`,
            subject: `Pesan Baru Portofolio dari ${formData.name}`
          })
        });

        const data = await response.json();
        if (data.success) {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setSubmitSuccess(false), 4000);
        } else {
          setIsSubmitting(false);
          alert("Gagal mengirim pesan: " + data.message);
        }
      } catch (error) {
        setIsSubmitting(false);
        alert("Terjadi kesalahan jaringan.");
      }
    }
  };

  return (
    <section id="contacts" className="section contacts-section">
      <div className="contacts-container animate-fade-in">
        <h2 className="title-large">Contacts</h2>
        <p className="subtitle-small">hubungi <span>saya</span></p>

        <div className="contacts-grid">
          {/* Left Side: Contact Information */}
          <div className="glass-card contact-info-card">
            <h3>Informasi Kontak</h3>

            <div className="contact-details-list">
              <div className="contact-info-item">
                <div className="icon-wrapper">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="label">Email</span>
                  <a href={`mailto:${profileData.email}`} className="value">{profileData.email}</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="icon-wrapper">
                  <GithubIcon size={18} />
                </div>
                <div>
                  <span className="label">GitHub</span>
                  <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="value">
                    {profileData.github.replace('https://', '')}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="icon-wrapper">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="label">Lokasi</span>
                  <span className="value">{profileData.location}</span>
                </div>
              </div>
            </div>

            <div className="social-links-area">
              <h4>Ikuti Saya</h4>
              <div className="social-links-row">
                <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
                  <GithubIcon size={18} />
                </a>
                <a href={`mailto:${profileData.email}`} className="btn-icon" aria-label="Email">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="glass-card contact-form-card">
            <h3>Kirim Pesan</h3>

            {submitSuccess && (
              <div className="success-toast glass-card animate-fade-in">
                <CheckCircle2 size={18} className="success-icon" />
                <span>Pesan Anda berhasil dikirim! Terima kasih.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama Anda"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Anda"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Pesan Anda"
                  className="form-input"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
