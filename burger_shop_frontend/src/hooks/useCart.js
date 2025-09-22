import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'ocean-burger-cart';

// PUBLIC_INTERFACE
export function useCart() {
  /** Cart state with add/remove and session persistence */
  const [map, setMap] = useState({});

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) setMap(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    } catch (e) {
      // ignore
    }
  }, [map]);

  const add = (item) => {
    setMap((prev) => {
      const existing = prev[item.id];
      const qty = (existing?.qty || 0) + 1;
      return { ...prev, [item.id]: { ...item, qty } };
    });
  };

  const remove = (item) => {
    setMap((prev) => {
      const existing = prev[item.id];
      if (!existing) return prev;
      const qty = existing.qty - 1;
      if (qty <= 0) {
        const copy = { ...prev };
        delete copy[item.id];
        return copy;
      }
      return { ...prev, [item.id]: { ...item, qty } };
    });
  };

  const clear = () => setMap({});

  const count = useMemo(() => Object.values(map).reduce((s, it) => s + it.qty, 0), [map]);

  const total = useMemo(() => Object.values(map).reduce((s, it) => s + it.qty * it.price, 0), [map]);

  return { map, add, remove, clear, count, total };
}
