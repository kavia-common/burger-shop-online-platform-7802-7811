import React, { useEffect, useState } from 'react';
import { fetchMenu } from '../api/orders';
import MenuCard from '../components/MenuCard';

// PUBLIC_INTERFACE
export default function Menu({ cartMap, onAdd, onRemove }) {
  /** Menu grid section that loads items and supports add/remove */
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchMenu().then((data) => {
      if (isMounted) {
        setItems(data || []);
        setLoading(false);
      }
    }).catch(() => setLoading(false));
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <section id="menu" className="container section">
        <h2 className="section-title">Menu</h2>
        <p className="muted">Loading menu…</p>
      </section>
    );
  }

  return (
    <section id="menu" className="container section">
      <h2 className="section-title">Menu</h2>
      <div className="grid">
        {items.map((it) => (
          <MenuCard
            key={it.id}
            item={it}
            qty={cartMap[it.id]?.qty || 0}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
    </section>
  );
}
