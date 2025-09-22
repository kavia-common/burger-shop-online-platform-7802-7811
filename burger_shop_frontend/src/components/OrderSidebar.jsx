import React, { useMemo, useState } from 'react';
import { placeOrder } from '../api/orders';

// PUBLIC_INTERFACE
export default function OrderSidebar({ open, itemsMap, onClose, onAdd, onRemove }) {
  /** Sidebar for order details, quantity control, and submit */
  const [notes, setNotes] = useState('');
  const [contact, setContact] = useState({ name: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const items = useMemo(() => Object.values(itemsMap || {}), [itemsMap]);
  const total = useMemo(() => items.reduce((s, it) => s + it.price * it.qty, 0), [items]);

  const submit = async () => {
    setSubmitting(true);
    setResult(null);
    try {
      const res = await placeOrder({
        items,
        notes,
        contact,
        submittedAt: new Date().toISOString(),
      });
      setResult(res);
    } catch (e) {
      setResult({ error: true, message: e.message || 'Failed to place order' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <aside className={`sidebar ${open ? 'open' : ''}`} aria-hidden={!open}>
      <div className="sidebar-header">
        <h3>Your Order</h3>
        <button className="icon-btn" aria-label="Close" onClick={onClose}>✕</button>
      </div>
      <div className="sidebar-body">
        {items.length === 0 ? (
          <p className="muted">No items yet. Add some tasty burgers!</p>
        ) : (
          <ul className="order-list">
            {items.map((it) => (
              <li key={it.id} className="order-item">
                <div>
                  <div className="order-name">{it.name}</div>
                  <div className="order-meta">${it.price.toFixed(2)} × {it.qty}</div>
                </div>
                <div className="order-actions">
                  <button className="btn ghost sm" onClick={() => onRemove(it)}>−</button>
                  <span className="qty">{it.qty}</span>
                  <button className="btn primary sm" onClick={() => onAdd(it)}>+</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="divider" />

        <div className="field">
          <label>Order Notes</label>
          <textarea
            placeholder="Any special requests?"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div className="grid-2">
          <div className="field">
            <label>Name</label>
            <input
              placeholder="Your name"
              value={contact.name}
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Phone</label>
            <input
              placeholder="(555) 012-3456"
              value={contact.phone}
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="total-row">
          <span>Total</span>
          <strong>${total.toFixed(2)}</strong>
        </div>

        <button className="btn primary xl wfull" disabled={items.length === 0 || submitting} onClick={submit}>
          {submitting ? 'Placing order…' : 'Place Order'}
        </button>

        {result && (
          <div className={`alert ${result.error ? 'error' : 'success'}`}>
            {result.error ? (
              <span>❌ {result.message}</span>
            ) : (
              <div>
                <div>✅ {result.message || 'Order placed!'}</div>
                {result.id && <div className="muted">Order ID: {result.id}</div>}
                {result.estimatedMinutes && (
                  <div className="muted">ETA: {result.estimatedMinutes} min</div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}
