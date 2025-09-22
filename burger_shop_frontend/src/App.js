import React, { useMemo, useState } from 'react';
import './index.css'; // loads Figma DS and fonts
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OrderSidebar from './components/OrderSidebar';
import { useCart } from './hooks/useCart';

// Layout utilities for containers and common components (Figma DS compliant)
const layout = {
  container: 'container maxw',
  section: 'section',
};

// PUBLIC_INTERFACE
export default function App() {
  /** App entry for Burger House with navigation, menu, and order management (Figma DS) */
  const [route, setRoute] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const cart = useCart();

  const onNavigate = (to) => setRoute(to);

  const content = useMemo(() => {
    switch (route) {
      case 'menu':
        return <Menu cartMap={cart.map} onAdd={cart.add} onRemove={cart.remove} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <Home onOrder={() => setSidebarOpen(true)} />;
    }
  }, [route, cart.map]);

  return (
    <div className="app-shell">
      <Navbar onNavigate={onNavigate} cartCount={cart.count} onOpen={() => setSidebarOpen(true)} />
      {content}
      <div id="menu" />
      {route !== 'menu' && <Menu cartMap={cart.map} onAdd={cart.add} onRemove={cart.remove} />}
      <Footer />

      {/* Floating action aligned with DS: black button with radius-20 on light background */}
      <button
        className="fab-new"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open order"
      >
        <span className="fab-icon">🛒</span>
        <span className="fab-text">Cart</span>
        <span className="badge-dot">{cart.count}</span>
      </button>

      <OrderSidebar
        open={sidebarOpen}
        itemsMap={cart.map}
        onClose={() => setSidebarOpen(false)}
        onAdd={cart.add}
        onRemove={cart.remove}
      />
    </div>
  );
}
