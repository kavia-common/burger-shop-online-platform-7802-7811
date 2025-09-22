import React from 'react';

// PUBLIC_INTERFACE
export default function MenuCard({ item, qty = 0, onAdd, onRemove }) {
  /** Single menu card (Figma DS) */
  return (
    <div className="card-ds radius-20">
      <div className="card-media-ds">
        <img src={item.image} alt={item.name} loading="lazy" />
        {item.tags?.length ? (
          <div className="card-badges-ds">
            {item.tags.map((t) => (
              <span key={t} className="badge-ds radius-20">{t}</span>
            ))}
          </div>
        ) : null}
      </div>
      <div className="card-body-ds">
        <div className="card-title-row-ds">
          <h3 className="font-title-20">{item.name}</h3>
          <div className="font-title-20" style={{ color: 'var(--clr-black)' }}>${item.price.toFixed(2)}</div>
        </div>
        <p className="font-body-15" style={{ color: 'var(--clr-gray-700)', marginTop: 'var(--space-10)' }}>
          {item.description}
        </p>
        <div className="card-actions-ds">
          <button className="btn-ds light radius-20" onClick={() => onRemove(item)} disabled={qty === 0}>−</button>
          <div className="qty-ds font-body-15">{qty}</div>
          <button className="btn-ds black radius-20" onClick={() => onAdd(item)}>Add</button>
        </div>
      </div>
    </div>
  );
}
