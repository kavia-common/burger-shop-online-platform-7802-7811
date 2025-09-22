//
// Simple REST API client with placeholders for backend integration
//

const DEFAULT_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.example.com';

// Utility to join URLs cleanly
const joinUrl = (base, path) => {
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${b}${p}`;
};

// PUBLIC_INTERFACE
export async function apiGet(path) {
  /** Fetch resource via GET from backend REST API (placeholder).
   * path: string - endpoint path (e.g. '/menu')
   * returns: JSON parsed result
   */
  const res = await fetch(joinUrl(DEFAULT_BASE_URL, path), {
    headers: { 'Content-Type': 'application/json' },
  });
  if (!res.ok) {
    throw new Error(`GET ${path} failed: ${res.status}`);
  }
  return res.json();
}

// PUBLIC_INTERFACE
export async function apiPost(path, body) {
  /** POST resource via REST API (placeholder).
   * path: string - endpoint path (e.g. '/orders')
   * body: object - request payload
   * returns: JSON parsed result
   */
  const res = await fetch(joinUrl(DEFAULT_BASE_URL, path), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body || {}),
  });
  if (!res.ok) {
    throw new Error(`POST ${path} failed: ${res.status}`);
  }
  return res.json();
}

// PUBLIC_INTERFACE
export function getBaseUrl() {
  /** Returns the configured API base URL (from REACT_APP_API_BASE_URL) */
  return DEFAULT_BASE_URL;
}
