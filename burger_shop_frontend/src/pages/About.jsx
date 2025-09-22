import React from 'react';

// PUBLIC_INTERFACE
export default function About() {
  /** About section styled to Figma DS */
  return (
    <section className="container section-ds">
      <h2 className="font-title-20" style={{ marginBottom: 'var(--space-20)' }}>About Us</h2>
      <p className="font-body-15" style={{ color: 'var(--clr-gray-700)' }}>
        At Burger House, we blend modern craft with fresh ingredients. Our chefs grill
        every patty to perfection and layer vibrant toppings for a memorable bite.
      </p>
      <div className="info-cards-ds">
        <div className="info-ds radius-20">
          <div className="info-icon-ds bg-cream">🌿</div>
          <div>
            <h4 className="font-title-20" style={{ fontSize: '18px' }}>Fresh Ingredients</h4>
            <p className="font-body-15" style={{ color: 'var(--clr-gray-700)' }}>
              Sourced daily for peak flavor and quality.
            </p>
          </div>
        </div>
        <div className="info-ds radius-20">
          <div className="info-icon-ds bg-cream">⭐</div>
          <div>
            <h4 className="font-title-20" style={{ fontSize: '18px' }}>Made to Order</h4>
            <p className="font-body-15" style={{ color: 'var(--clr-gray-700)' }}>
              Your burger, crafted exactly how you like it.
            </p>
          </div>
        </div>
        <div className="info-ds radius-20">
          <div className="info-icon-ds bg-cream">⚡</div>
          <div>
            <h4 className="font-title-20" style={{ fontSize: '18px' }}>Fast & Friendly</h4>
            <p className="font-body-15" style={{ color: 'var(--clr-gray-700)' }}>
              Quick service without compromising taste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
