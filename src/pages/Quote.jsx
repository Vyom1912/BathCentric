import { useState, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Icon from '../components/Icon';

export default function Quote() {
  const [searchParams] = useSearchParams();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    location: '',
    stage: 'New bathroom',
    enclosure: 'Not sure',
    dimensions: '',
    message: '',
    consent: true
  });

  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [dragOver, setDragOver] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState('');
  const [whatsAppLink, setWhatsAppLink] = useState('');

  // Handle URL prefill (e.g. /quote?type=fixed)
  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam) {
      const typeMap = {
        fixed: 'Fixed Walk-In',
        swing: 'Swing Frameless',
        sliding: 'Sliding System',
        'l-shaped': 'L-Shaped Corner'
      };
      if (typeMap[typeParam.toLowerCase()]) {
        setFormData(prev => ({ ...prev, enclosure: typeMap[typeParam.toLowerCase()] }));
      }
    }
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const processFiles = (files) => {
    if (!files || !files.length) return;

    Array.from(files).forEach(file => {
      if (!file.type.startsWith('image/')) {
        alert('Please upload image files only (JPG, PNG, WebP).');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert(`File ${file.name} exceeds 5MB limit.`);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedPhotos(prev => [
          ...prev,
          {
            name: file.name,
            size: (file.size / 1024).toFixed(1) + ' KB',
            dataUrl: e.target.result
          }
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    processFiles(e.dataTransfer.files);
  };

  const removePhoto = (index) => {
    setUploadedPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert('Please agree to allow BathCentric to contact you regarding your quotation.');
      return;
    }

    const leadId = 'BC-' + Date.now().toString().slice(-6);
    const newLead = {
      id: leadId,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      ...formData,
      photosCount: uploadedPhotos.length,
      photos: uploadedPhotos.map(p => ({ name: p.name, dataUrl: p.dataUrl }))
    };

    // Save to LocalStorage
    try {
      const existing = JSON.parse(localStorage.getItem('bathcentric_leads') || '[]');
      existing.unshift(newLead);
      localStorage.setItem('bathcentric_leads', JSON.stringify(existing));
    } catch (err) {
      // Fallback if images exceed LocalStorage quota
      newLead.photos = uploadedPhotos.map(p => ({ name: p.name, note: 'Photo attached in session' }));
      const existing = JSON.parse(localStorage.getItem('bathcentric_leads') || '[]');
      existing.unshift(newLead);
      localStorage.setItem('bathcentric_leads', JSON.stringify(existing));
    }

    // Prepare WhatsApp Link
    const whatsappMsg = encodeURIComponent(
      `Hi BathCentric, I just submitted a quote request (Ref: ${leadId}).\n` +
      `Name: ${formData.name}\n` +
      `Location: ${formData.location}\n` +
      `Enclosure: ${formData.enclosure}\n` +
      `Stage: ${formData.stage}\n` +
      `Please review my bathroom details!`
    );
    setWhatsAppLink(`https://wa.me/919876543210?text=${whatsappMsg}`);
    setSubmittedLeadId(leadId);
    setModalOpen(true);

    // Reset Form
    setFormData({
      name: '',
      mobile: '',
      email: '',
      location: '',
      stage: 'New bathroom',
      enclosure: 'Not sure',
      dimensions: '',
      message: '',
      consent: true
    });
    setUploadedPhotos([]);
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Get a Quote</span>
          </nav>
          <span className="eyebrow" style={{ color: '#C5A880' }}>Tailored Quotation</span>
          <h1>Send Your Bathroom Details</h1>
          <p>
            Upload photos and describe your bathroom. Our technical team will review plumbing clearances, recommend the optimal enclosure system, and provide an accurate quotation.
          </p>
        </div>
      </section>

      {/* Quotation Form Container */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          
          <div className="quote-card">
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
              <span className="eyebrow">Measurement & Proposal Request</span>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Quotation Request Form</h2>
              <p style={{ fontSize: '0.95rem' }}>Please provide your contact information and bathroom stage below.</p>
            </div>

            <form id="quote-form" onSubmit={handleSubmit}>
              
              {/* Contact Row */}
              <div className="grid-2" style={{ gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="q-name">Full Name *</label>
                  <input
                    type="text"
                    id="q-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="e.g. Vikram Singhania"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="q-mobile">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    id="q-mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="e.g. +91 98200 55443"
                    required
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="q-email">Email Address <span className="optional">(Optional)</span></label>
                  <input
                    type="email"
                    id="q-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="e.g. vikram@example.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="q-location">Location / City & Area *</label>
                  <input
                    type="text"
                    id="q-location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="e.g. Worli Sea Face, Mumbai"
                    required
                  />
                </div>
              </div>

              {/* Bathroom Stage */}
              <div className="form-group">
                <label className="form-label">Bathroom Stage *</label>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {['New bathroom', 'Renovation', 'Existing bathroom'].map((st) => (
                    <label key={st} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="stage"
                        value={st}
                        checked={formData.stage === st}
                        onChange={handleInputChange}
                        style={{ accentColor: 'var(--color-accent)' }}
                      />
                      <span>{st === 'New bathroom' ? 'New Bathroom Construction' : st === 'Renovation' ? 'Bathroom Renovation' : 'Existing Bathroom Upgrade'}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Preferred Enclosure */}
              <div className="form-group">
                <label className="form-label">Preferred Enclosure System *</label>
                <div className="option-cards-grid">
                  {[
                    { id: 'Fixed Walk-In', label: 'Fixed Walk-In' },
                    { id: 'Swing Frameless', label: 'Swing Frameless' },
                    { id: 'Sliding System', label: 'Sliding System' },
                    { id: 'L-Shaped Corner', label: 'L-Shaped Corner' },
                    { id: 'Not sure', label: 'Not Sure (Advise Me)' }
                  ].map((item) => (
                    <label key={item.id} className="radio-card">
                      <input
                        type="radio"
                        name="enclosure"
                        value={item.id}
                        checked={formData.enclosure === item.id}
                        onChange={handleInputChange}
                      />
                      <div className="radio-card-label">
                        <span>{item.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Approximate Dimensions */}
              <div className="form-group">
                <label className="form-label" htmlFor="q-dimensions">
                  Approximate Dimensions <span className="optional">(Optional: Width x Height in mm, inches, or feet)</span>
                </label>
                <input
                  type="text"
                  id="q-dimensions"
                  name="dimensions"
                  value={formData.dimensions}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="e.g. Width: 1200mm, Height: 2100mm, or 4ft x 7ft"
                />
              </div>

              {/* Upload Bathroom Photos */}
              <div className="form-group">
                <label className="form-label">
                  Upload Bathroom Photos <span className="optional">(Recommended for accurate layout advice)</span>
                </label>
                
                <div
                  className={`dropzone ${dragOver ? 'dragover' : ''}`}
                  onClick={() => fileInputRef.current?.click()}
                  onDragEnter={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={(e) => { e.preventDefault(); setDragOver(false); }}
                  onDrop={handleFileDrop}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    multiple
                    style={{ display: 'none' }}
                    onChange={(e) => processFiles(e.target.files)}
                  />
                  <div className="dropzone-icon"><Icon name="camera" size={40} strokeWidth={1.4} /></div>
                  <div className="dropzone-text">Click or drag & drop bathroom photos here</div>
                  <div className="dropzone-subtext">Supports JPG, PNG, WebP up to 5MB each. Multiple angles recommended.</div>
                </div>

                {/* Previews Grid */}
                {uploadedPhotos.length > 0 && (
                  <div className="preview-grid">
                    {uploadedPhotos.map((photo, index) => (
                      <div key={index} className="preview-thumb">
                        <img src={photo.dataUrl} alt={photo.name} />
                        <button
                          type="button"
                          className="preview-remove-btn"
                          title="Remove photo"
                          onClick={(e) => {
                            e.stopPropagation();
                            removePhoto(index);
                          }}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label" htmlFor="q-message">
                  Message / Specific Requirements <span className="optional">(Optional)</span>
                </label>
                <textarea
                  id="q-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Mention preferred glass type (e.g. fluted, clear, low-iron), hardware finish (e.g. brushed brass, matte black), or any special requests..."
                />
              </div>

              {/* Consent Checkbox */}
              <div className="form-group">
                <label className="checkbox-label" htmlFor="consent">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                  />
                  <span>I consent to BathCentric contacting me via Phone/WhatsApp/Email with quotation proposals and measurement scheduling.</span>
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-accent btn-lg" style={{ width: '100%', marginTop: '1rem' }}>
                Submit Quotation Request &rarr;
              </button>
            </form>

          </div>

        </div>
      </section>

      {/* Confirmation Modal */}
      {modalOpen && (
        <div className="modal-overlay open" role="dialog" aria-modal="true">
          <div className="modal-card">
            <button className="modal-close-btn" onClick={() => setModalOpen(false)} aria-label="Close">&times;</button>
            
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--color-success)', fontSize: '32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                ✓
              </div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Quotation Request Received</h2>
              <p style={{ fontSize: '0.95rem' }}>
                Thank you! Your reference number is <strong style={{ color: 'var(--color-accent-dark)', fontFamily: 'var(--font-heading)' }}>{submittedLeadId}</strong>.
              </p>
            </div>

            <div style={{ background: 'var(--color-bg-light)', borderRadius: 'var(--radius-md)', padding: '1.25rem', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>What happens next?</h4>
              <ol style={{ paddingLeft: '1.2rem', color: 'var(--color-text-muted)' }}>
                <li>Our design engineer will review your bathroom photos and layout.</li>
                <li>We will prepare an initial itemized estimate within 2 to 4 hours.</li>
                <li>We will coordinate with you to schedule the on-site digital laser survey.</li>
              </ol>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: '100%' }}>
                💬 Continue Discussion on WhatsApp
              </a>
              <Link to="/" className="btn btn-outline" style={{ width: '100%' }}>
                Return To Homepage
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
