import React, { useState } from 'react';

// PUBLIC_INTERFACE
export default function Contact() {
  /** Contact section with DS-styled form */
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="container section-ds">
      <h2 className="font-title-20" style={{ marginBottom: 'var(--space-20)' }}>Contact</h2>
      <div className="grid-2-ds">
        <div>
          <p className="font-body-15" style={{ color: 'var(--clr-gray-700)' }}>
            Questions, feedback, or planning an event? Send us a message and our team
            will get back to you soon.
          </p>
          <ul className="font-body-15" style={{ color: 'var(--clr-gray-700)', paddingLeft: '18px' }}>
            <li>📍 123 Shoreline Ave, Seaside City</li>
            <li>📞 +1 (555) 012-3456</li>
            <li>✉️ hello@burgerhouse.com</li>
          </ul>
        </div>
        <form className="card-ds radius-20 form-ds" onSubmit={submit}>
          <div className="field-ds">
            <label className="font-body-15">Name</label>
            <input
              className="input-ds radius-20"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="field-ds">
            <label className="font-body-15">Email</label>
            <input
              className="input-ds radius-20"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="field-ds">
            <label className="font-body-15">Message</label>
            <textarea
              className="input-ds radius-20"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              required
            />
          </div>
          <button className="btn-ds black radius-20 wfull" type="submit">Send</button>
          {sent && <div className="alert-ds success radius-20" style={{ marginTop: 'var(--space-12)' }}>Thanks! We received your message.</div>}
        </form>
      </div>
    </section>
  );
}
