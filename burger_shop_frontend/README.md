# Ocean Burger - React Frontend

A modern, minimalist burger shop frontend built with React, following the "Ocean Professional" design theme (blue and amber accents, rounded corners, subtle shadows, and soft gradients).

## Project Structure

- src/
  - api/
    - client.js — REST API placeholders (GET/POST) using REACT_APP_API_BASE_URL
    - orders.js — Menu retrieval and order placement (with mock fallback)
  - components/
    - Navbar.jsx — Top navigation with logo and links
    - Footer.jsx — Footer with contact and hours
    - MenuCard.jsx — Menu item card with add/remove
    - OrderSidebar.jsx — Slide-in order details and submit
    - Modal.jsx — Generic modal (optional)
  - hooks/
    - useCart.js — Cart state + session persistence
  - pages/
    - Home.jsx — Hero landing section
    - Menu.jsx — Menu grid, loads items via API
    - About.jsx — Brand story and features
    - Contact.jsx — Contact information + simple form
  - theme.js — Theme variables and CSS variable injector
  - styles.css — Ocean Professional base styles
  - App.js — App shell wiring navigation and cart
  - index.js — React entry point

## Scripts

- `npm start` — Start dev server
- `npm run build` — Production build
- `npm test` — Tests (from CRA template)

## Environment

Create `.env` (or set env vars in your environment):

```
REACT_APP_API_BASE_URL=https://your-backend.example.com
```

If not set, the app will use `https://api.example.com` and will gracefully fallback to mocked menu/order responses for demo purposes.

## Design Guidelines

- Modern, minimalist layout
- Blue (primary) and amber (secondary) accents
- Rounded corners, subtle shadows
- Soft gradients, clean spacing, smooth transitions

## Integration Notes

- Replace API placeholders in `src/api/*` with your backend endpoints.
- The UI uses accessible HTML controls and is fully responsive.

Enjoy your burgers! 🍔
