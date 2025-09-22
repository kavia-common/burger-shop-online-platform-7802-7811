import { apiGet, apiPost } from './client';

// Mock data fallback for local demo if backend isn't available
const mockMenu = [
  {
    id: 'classic-burger',
    name: 'Classic Burger',
    price: 8.99,
    description: 'Juicy beef patty, cheddar, lettuce, tomato, house sauce.',
    image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=1200&auto=format&fit=crop',
    tags: ['Beef', 'Best Seller'],
  },
  {
    id: 'smoky-bbq',
    name: 'Smoky BBQ',
    price: 10.49,
    description: 'Smoked bacon, cheddar, crispy onions, BBQ glaze.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
    tags: ['Beef', 'BBQ'],
  },
  {
    id: 'spicy-chicken',
    name: 'Spicy Chicken',
    price: 9.79,
    description: 'Crispy chicken, jalapeños, pepper jack, spicy aioli.',
    image: 'https://images.unsplash.com/photo-1550547660-1971f8e3b5dc?q=80&w=1200&auto=format&fit=crop',
    tags: ['Chicken', 'Spicy'],
  },
  {
    id: 'veggie-delight',
    name: 'Veggie Delight',
    price: 8.49,
    description: 'Grilled veggie patty, avocado, sprouts, vegan mayo.',
    image: 'https://images.unsplash.com/photo-1550547660-37e5a7b2d3f1?q=80&w=1200&auto=format&fit=crop',
    tags: ['Veggie'],
  },
];

// PUBLIC_INTERFACE
export async function fetchMenu() {
  /** Get the burger menu from backend. Falls back to local mock if failing. */
  try {
    return await apiGet('/menu');
  } catch (e) {
    // Fallback for demo
    return mockMenu;
  }
}

// PUBLIC_INTERFACE
export async function placeOrder(order) {
  /** Place an order via backend. Simulates success if backend unavailable.
   * order: { items: [{id, name, price, qty}], notes?, contact? }
   */
  try {
    const res = await apiPost('/orders', order);
    return res;
  } catch (e) {
    // Simulated order response
    return {
      id: `ORD-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
      status: 'received',
      estimatedMinutes: 20,
      items: order.items || [],
      total: (order.items || []).reduce((s, it) => s + it.price * it.qty, 0),
      message: 'Simulated order accepted (no backend connected).',
    };
  }
}
