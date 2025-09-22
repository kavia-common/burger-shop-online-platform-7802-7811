import React from 'react';

// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer with shop info and contact details (Figma DS) */
  return (
    <footer className="footer-ds bg-primary">
      <div className="container footer-grid-ds">
        <div>
          <h4 className="font-title-20" style={{ color: 'var(--clr-cream)', margin: 0 }}>Burger House</h4>
          <p className="font-body-15" style={{ color: 'var(--clr-sage)', marginTop: 'var(--space-10)' }}>
            Crafted burgers with premium ingredients. Deep green vibes, light and fresh.
          </p>
        </div>
        <div>
          <h5 className="font-title-20" style={{ color: 'var(--clr-cream)', margin: 0 }}>Contact</h5>
          <p className="font-body-15" style={{ color: 'var(--clr-white)', marginTop: 'var(--space-10)' }}>
            123 Shoreline Ave, Seaside City
          </p>
          <p className="font-body-15" style={{ color: 'var(--clr-white)' }}>+1 (555) 012-3456</p>
          <p className="font-body-15" style={{ color: 'var(--clr-white)' }}>hello@burgerhouse.com</p>
        </div>
        <div>
          <h5 className="font-title-20" style={{ color: 'var(--clr-cream)', margin: 0 }}>Hours</h5>
          <p className="font-body-15" style={{ color: 'var(--clr-white)', marginTop: 'var(--space-10)' }}>
            Mon–Fri: 11:00–21:00
          </p>
          <p className="font-body-15" style={{ color: 'var(--clr-white)' }}>
            Sat–Sun: 12:00–22:00
          </p>
        </div>
      </div>
      <div className="footer-bottom-ds font-body-15" style={{ color: 'var(--clr-sage)' }}>
        © {new Date().getFullYear()} Burger House. All rights reserved.
      </div>
    </footer>
  );
}
