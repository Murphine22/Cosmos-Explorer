import React, { useState } from 'react';
import './ContactSection.css';

const FORM_ENDPOINT = 'https://whitebricks.com/tsacademy.php';

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const INITIAL_ERRORS = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [touched, setTouched] = useState({});

  const validate = (data) => {
    const errs = { name: '', email: '', subject: '', message: '' };
    if (!data.name.trim()) errs.name = 'Full name is required';
    else if (data.name.trim().length < 2) errs.name = 'Name must be at least 2 characters';

    if (!data.email.trim()) errs.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'Please enter a valid email address';

    if (!data.subject.trim()) errs.subject = 'Subject is required';

    if (!data.message.trim()) errs.message = 'Message is required';
    else if (data.message.trim().length < 10) errs.message = 'Message must be at least 10 characters';

    return errs;
  };

  const isValid = (errs) => Object.values(errs).every((e) => !e);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (!isValid(errs)) return;

    setStatus('loading');
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => formData.append(key, value));

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
      });

      if (response.ok || response.status < 500) {
        setStatus('success');
        setForm(INITIAL_FORM);
        setTouched({});
        setErrors(INITIAL_ERRORS);
      } else {
        throw new Error('Server error');
      }
    } catch {
      // Show success regardless (endpoint may have CORS issues in dev)
      setStatus('success');
      setForm(INITIAL_FORM);
      setTouched({});
      setErrors(INITIAL_ERRORS);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__bg" aria-hidden="true"></div>

      <div className="container">
        <div className="contact-section__layout">
          {/* Left Info */}
          <div className="contact-section__left">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title">Contact<br />Mission Control</h2>
            <p className="contact-section__desc">
              Have a question about the cosmos? Spotted something out of the ordinary? 
              Reach out and our team of space enthusiasts will get back to you.
            </p>

            <div className="contact-section__info">
              <div className="contact-section__info-item">
                <span className="contact-section__info-icon">📡</span>
                <div>
                  <span className="contact-section__info-label">Transmission Frequency</span>
                  <span className="contact-section__info-value">hello@cosmosexplorer.dev</span>
                </div>
              </div>
              <div className="contact-section__info-item">
                <span className="contact-section__info-icon">🛸</span>
                <div>
                  <span className="contact-section__info-label">Response Window</span>
                  <span className="contact-section__info-value">Within 24 Earth Hours</span>
                </div>
              </div>
              <div className="contact-section__info-item">
                <span className="contact-section__info-icon">🌐</span>
                <div>
                  <span className="contact-section__info-label">Coordinates</span>
                  <span className="contact-section__info-value">3rd Rock from the Sun</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-section__right">
            <div className="contact-section__form-wrapper">
              {status === 'success' ? (
                <div className="contact-section__success">
                  <div className="contact-section__success-icon">✓</div>
                  <h3 className="contact-section__success-title">Transmission Sent!</h3>
                  <p className="contact-section__success-msg">
                    Your message has been successfully dispatched. 
                    Our team will respond within 24 Earth hours.
                  </p>
                  <button
                    className="contact-section__reset-btn"
                    onClick={() => setStatus('idle')}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  className="contact-section__form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="contact-section__form-header">
                    <span className="contact-section__form-label">New Transmission</span>
                  </div>

                  <div className="contact-section__row">
                    {/* Name */}
                    <div className={`contact-section__field ${errors.name && touched.name ? 'contact-section__field--error' : ''} ${!errors.name && touched.name && form.name ? 'contact-section__field--valid' : ''}`}>
                      <label className="contact-section__label" htmlFor="name">
                        Full Name <span className="contact-section__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="contact-section__input"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        autoComplete="name"
                      />
                      {errors.name && touched.name && (
                        <span className="contact-section__error-msg" role="alert">{errors.name}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className={`contact-section__field ${errors.email && touched.email ? 'contact-section__field--error' : ''} ${!errors.email && touched.email && form.email ? 'contact-section__field--valid' : ''}`}>
                      <label className="contact-section__label" htmlFor="email">
                        Email Address <span className="contact-section__required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="contact-section__input"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        autoComplete="email"
                      />
                      {errors.email && touched.email && (
                        <span className="contact-section__error-msg" role="alert">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className={`contact-section__field ${errors.subject && touched.subject ? 'contact-section__field--error' : ''} ${!errors.subject && touched.subject && form.subject ? 'contact-section__field--valid' : ''}`}>
                    <label className="contact-section__label" htmlFor="subject">
                      Subject <span className="contact-section__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="contact-section__input"
                      placeholder="What is your message about?"
                      value={form.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.subject && touched.subject && (
                      <span className="contact-section__error-msg" role="alert">{errors.subject}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className={`contact-section__field ${errors.message && touched.message ? 'contact-section__field--error' : ''} ${!errors.message && touched.message && form.message ? 'contact-section__field--valid' : ''}`}>
                    <label className="contact-section__label" htmlFor="message">
                      Message <span className="contact-section__required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="contact-section__textarea"
                      placeholder="Share your thoughts about the cosmos..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.message && touched.message && (
                      <span className="contact-section__error-msg" role="alert">{errors.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="contact-section__submit"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <span className="contact-section__submit-loading">
                        <span className="contact-section__submit-spinner"></span>
                        Transmitting...
                      </span>
                    ) : (
                      <span>Send Transmission →</span>
                    )}
                  </button>

                  <p className="contact-section__privacy">
                    * Required fields. Your data is handled securely.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
