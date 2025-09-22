import React from 'react';

// PUBLIC_INTERFACE
export default function MenuCard({ item, qty = 0, onAdd, onRemove }) {
  /** Single menu card displaying image, details, and add/remove controls */
  return (
    <div className="card">
      <div className="card-media">
        <img src={item.image} alt={item.name} loading="lazy" />
        {item.tags?.length ? (
          <div className="card-badges">
            {item.tags.map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
        ) : null}
      </div>
      <div className="card-body">
        <div className="card-title-row">
          <h3 className="card-title">{item.name}</h3>
          <div className="price">${item.price.toFixed(2)}</div>
        </div>
        <p className="card-desc">{item.description}</p>
        <div className="card-actions">
          <button className="btn ghost" onClick={() => onRemove(item)} disabled={qty === 0}>−</button>
          <div className="qty">{qty}</div>
          <button className="btn primary" onClick={() => onAdd(item)}>Add</button>
        </div>
      </div>
    </div>
  );
}
