import React, { useState } from 'react';

// PUBLIC_INTERFACE
export default function Contact() {
  /** Contact section with simple form */
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="container section">
      <h2 className="section-title">Contact</h2>
      <div className="grid-2">
        <div>
          <p className="body">
            Questions, feedback, or planning an event? Send us a message and our team
            will get back to you soon.
          </p>
          <ul className="contact-list">
            <li>📍 123 Shoreline Ave, Seaside City</li>
            <li>📞 +1 (555) 012-3456</li>
            <li>✉️ hello@oceanburger.com</li>
          </ul>
        </div>
        <form className="card form" onSubmit={submit}>
          <div className="field">
            <label>Name</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div className="field">
            <label>Message</label>
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} required />
          </div>
          <button className="btn primary wfull" type="submit">Send</button>
          {sent && <div className="alert success">Thanks! We received your message.</div>}
        </form>
      </div>
    </section>
  );
}
