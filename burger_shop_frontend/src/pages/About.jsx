import React from 'react';

// PUBLIC_INTERFACE
export default function About() {
  /** About section with brief brand story */
  return (
    <section className="container section">
      <h2 className="section-title">About Us</h2>
      <p className="body">
        At Ocean Burger, we blend coastal vibes with gourmet craft. Our chefs grill
        every patty to perfection and layer fresh toppings for a vibrant, modern bite.
        From smoky BBQ to spicy chicken and veggie delights, our menu is designed for
        every craving.
      </p>
      <div className="info-cards">
        <div className="info">
          <div className="info-icon">🌊</div>
          <div>
            <h4>Fresh Ingredients</h4>
            <p className="muted">Sourced daily for peak flavor and quality.</p>
          </div>
        </div>
        <div className="info">
          <div className="info-icon">⭐</div>
          <div>
            <h4>Made to Order</h4>
            <p className="muted">Your burger, crafted exactly how you like it.</p>
          </div>
        </div>
        <div className="info">
          <div className="info-icon">⚡</div>
          <div>
            <h4>Fast & Friendly</h4>
            <p className="muted">Quick service without compromising taste.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
