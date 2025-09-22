import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar brand', () => {
  render(<App />);
  const brand = screen.getByText(/Burger House/i);
  expect(brand).toBeInTheDocument();
});

test('renders menu section title', async () => {
  render(<App />);
  const menu = await screen.findAllByText(/Menu/i);
  expect(menu.length).toBeGreaterThan(0);
});
