import React from 'react';

// PUBLIC_INTERFACE
export default function Home({ onOrder }) {
  /** Hero homepage with gradient and CTA */
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1 className="title">
          Crafted Burgers,
          <span className="accent"> Ocean Fresh</span>
        </h1>
        <p className="subtitle">
          Savor modern flavors with premium ingredients. Golden buns, juicy patties,
          and signature sauces.
        </p>
        <div className="hero-actions">
          <a href="#menu" className="btn primary xl">Browse Menu</a>
          <button className="btn ghost xl" onClick={onOrder}>View Order</button>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="bubble b1" />
        <div className="bubble b2" />
        <div className="bubble b3" />
      </div>
    </section>
  );
}
