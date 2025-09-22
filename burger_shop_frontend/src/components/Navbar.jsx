import React from 'react';

// PUBLIC_INTERFACE
export default function Navbar({ onNavigate }) {
  /** Top navigation bar with logo and links */
  return (
    <header className="nav">
      <div className="nav-inner container">
        <div className="brand" onClick={() => onNavigate('home')} role="button" tabIndex={0}>
          <div className="logo">🍔</div>
          <div className="brand-text">
            <span className="brand-name">Ocean Burger</span>
            <span className="brand-tag">Grill • Craft • Fresh</span>
          </div>
        </div>
        <nav className="links">
          <button className="link" onClick={() => onNavigate('menu')}>Menu</button>
          <button className="link" onClick={() => onNavigate('about')}>About</button>
          <button className="link" onClick={() => onNavigate('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
