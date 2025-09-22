import React from 'react';

// PUBLIC_INTERFACE
export default function Home({ onOrder }) {
  /** Hero homepage styled to Figma DS */
  return (
    <section className="hero-ds bg-primary">
      <div className="container hero-grid-ds">
        <div className="hero-copy">
          <h1 className="font-h1-white" style={{ margin: 0 }}>
            Gourmet Burgers, Crafted Fresh
          </h1>
          <p className="font-sansita-45-cream" style={{ marginTop: 'var(--space-20)' }}>
            Golden buns • Juicy patties • Signature sauces
          </p>
          <div className="hero-actions-ds">
            <a href="#menu" className="btn-ds black radius-20">Browse Menu</a>
            <button className="btn-ds outline-inverse" onClick={onOrder}>View Order</button>
          </div>
        </div>
        <div className="hero-art-ds" aria-hidden="true">
          <div className="hero-badge radius-25 bg-cream font-title-20" style={{ color: 'var(--clr-black)' }}>
            Fresh Daily
          </div>
        </div>
      </div>
    </section>
  );
}
