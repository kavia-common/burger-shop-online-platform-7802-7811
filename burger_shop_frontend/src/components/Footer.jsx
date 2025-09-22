import React from 'react';

// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer with shop info and contact details */
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4 className="footer-title">Ocean Burger</h4>
          <p className="footer-text">Modern burgers, crafted fresh daily. Blue seas, golden buns.</p>
        </div>
        <div>
          <h5 className="footer-subtitle">Contact</h5>
          <p className="footer-text">123 Shoreline Ave, Seaside City</p>
          <p className="footer-text">+1 (555) 012-3456</p>
          <p className="footer-text">hello@oceanburger.com</p>
        </div>
        <div>
          <h5 className="footer-subtitle">Hours</h5>
          <p className="footer-text">Mon–Fri: 11:00–21:00</p>
          <p className="footer-text">Sat–Sun: 12:00–22:00</p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Ocean Burger. All rights reserved.
      </div>
    </footer>
  );
}
