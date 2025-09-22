import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import './styles.css';
import { applyCSSVars } from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OrderSidebar from './components/OrderSidebar';
import { useCart } from './hooks/useCart';

// PUBLIC_INTERFACE
export default function App() {
  /** App entry for Ocean Burger with navigation, menu, and order management */
  const [route, setRoute] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const cart = useCart();

  useEffect(() => {
    applyCSSVars();
  }, []);

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
      <Navbar onNavigate={onNavigate} />
      {content}
      {/* Helper anchor for hero CTA */}
      <div id="menu" />
      {route !== 'menu' && <Menu cartMap={cart.map} onAdd={cart.add} onRemove={cart.remove} />}
      <Footer />
      <button className="fab" onClick={() => setSidebarOpen(true)} aria-label="Open order">
        🛒 <span className="badge-pill">{cart.count}</span>
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
