import React from 'react';

/**
 * Header / Navbar styled per Figma DS
 * - Deep green background (#12372a)
 * - Brand name Sansita 25/30 700, cream text
 * - Tagline Lexend 11/13.75 700, sage text
 * - Links Lexend 15/18.75 with subtle hover on light chips
 */

// PUBLIC_INTERFACE
export default function Navbar({ onNavigate, cartCount = 0, onOpen }) {
  /** Top navigation with Figma DS tokens */
  return (
    <header className="nav-ds bg-primary">
      <div className="nav-ds-inner container">
        <div
          className="brand-ds"
          onClick={() => onNavigate('home')}
          role="button"
          tabIndex={0}
        >
          <div className="brand-mark radius-20">🍔</div>
          <div className="brand-copy">
            <span className="brand-name font-sansita-25" style={{ color: 'var(--clr-cream)', fontWeight: 700 }}>
              Burger House
            </span>
            <span className="brand-tag font-caption-8" style={{ color: 'var(--clr-sage)', fontWeight: 700 }}>
              Grill • Craft • Fresh
            </span>
          </div>
        </div>

        <nav className="nav-links">
          <button className="nav-link-chip" onClick={() => onNavigate('menu')}>Menu</button>
          <button className="nav-link-chip" onClick={() => onNavigate('about')}>About</button>
          <button className="nav-link-chip" onClick={() => onNavigate('contact')}>Contact</button>
          <button className="nav-cta black radius-20" onClick={onOpen} aria-label="Open cart">
            🛒 <span className="small-count">{cartCount}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
