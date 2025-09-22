import React, { useMemo, useState } from 'react';
import { placeOrder } from '../api/orders';

// PUBLIC_INTERFACE
export default function OrderSidebar({ open, itemsMap, onClose, onAdd, onRemove }) {
  /** Sidebar for order details, quantity control, and submit — Figma DS */
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
    <aside className={`sidebar-ds ${open ? 'open' : ''}`} aria-hidden={!open}>
      <div className="sidebar-header-ds">
        <h3 className="font-title-20">Your Order</h3>
        <button className="icon-btn" aria-label="Close" onClick={onClose}>✕</button>
      </div>
      <div className="sidebar-body-ds">
        {items.length === 0 ? (
          <p className="font-body-15" style={{ color: 'var(--clr-gray-700)' }}>
            No items yet. Add some tasty burgers!
          </p>
        ) : (
          <ul className="order-list-ds">
            {items.map((it) => (
              <li key={it.id} className="order-item-ds radius-20">
                <div>
                  <div className="font-title-20" style={{ fontSize: '18px' }}>{it.name}</div>
                  <div className="font-body-15" style={{ color: 'var(--clr-gray-700)' }}>
                    ${it.price.toFixed(2)} × {it.qty}
                  </div>
                </div>
                <div className="order-actions-ds">
                  <button className="btn-ds light radius-20" onClick={() => onRemove(it)}>−</button>
                  <span className="font-body-15">{it.qty}</span>
                  <button className="btn-ds black radius-20" onClick={() => onAdd(it)}>+</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="divider-ds" />

        <div className="field-ds">
          <label className="font-body-15">Order Notes</label>
          <textarea
            className="input-ds radius-20"
            placeholder="Any special requests?"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div className="grid-2-ds">
          <div className="field-ds">
            <label className="font-body-15">Name</label>
            <input
              className="input-ds radius-20"
              placeholder="Your name"
              value={contact.name}
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
            />
          </div>
          <div className="field-ds">
            <label className="font-body-15">Phone</label>
            <input
              className="input-ds radius-20"
              placeholder="(555) 012-3456"
              value={contact.phone}
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="total-row-ds">
          <span className="font-title-20" style={{ fontSize: '18px' }}>Total</span>
          <strong className="font-title-20" style={{ fontSize: '18px' }}>${total.toFixed(2)}</strong>
        </div>

        <button
          className="btn-ds black radius-20 wfull"
          disabled={items.length === 0 || submitting}
          onClick={submit}
        >
          {submitting ? 'Placing order…' : 'Place Order'}
        </button>

        {result && (
          <div className={`alert-ds ${result.error ? 'error' : 'success'} radius-20`}>
            {result.error ? (
              <span>❌ {result.message}</span>
            ) : (
              <div>
                <div>✅ {result.message || 'Order placed!'}</div>
                {result.id && (
                  <div className="font-body-15" style={{ color: 'var(--clr-gray-700)' }}>
                    Order ID: {result.id}
                  </div>
                )}
                {result.estimatedMinutes && (
                  <div className="font-body-15" style={{ color: 'var(--clr-gray-700)' }}>
                    ETA: {result.estimatedMinutes} min
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}
