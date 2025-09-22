//
// Ocean Professional Theme variables and helpers
//

// PUBLIC_INTERFACE
export const theme = {
  name: 'Ocean Professional',
  colors: {
    primary: '#2563EB',   // blue
    secondary: '#F59E0B', // amber
    success: '#F59E0B',
    error: '#EF4444',
    background: '#f9fafb',
    surface: '#ffffff',
    text: '#111827',
    mutedText: '#6B7280',
    border: '#E5E7EB',
    gradientFrom: 'rgba(59,130,246,0.08)',
    gradientTo: 'rgba(249,250,251,1)',
    shadow: 'rgba(17, 24, 39, 0.08)'
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    round: '9999px'
  },
  shadow: {
    sm: '0 1px 2px rgba(17, 24, 39, 0.05)',
    md: '0 8px 24px rgba(17, 24, 39, 0.08)',
    lg: '0 12px 40px rgba(17, 24, 39, 0.12)'
  },
  transition: 'all 180ms ease',
};

// PUBLIC_INTERFACE
export const applyCSSVars = () => {
  const root = document.documentElement;
  const { colors, radius, shadow } = theme;
  root.style.setProperty('--clr-primary', colors.primary);
  root.style.setProperty('--clr-secondary', colors.secondary);
  root.style.setProperty('--clr-success', colors.success);
  root.style.setProperty('--clr-error', colors.error);
  root.style.setProperty('--clr-bg', colors.background);
  root.style.setProperty('--clr-surface', colors.surface);
  root.style.setProperty('--clr-text', colors.text);
  root.style.setProperty('--clr-muted', colors.mutedText);
  root.style.setProperty('--clr-border', colors.border);
  root.style.setProperty('--grad-from', colors.gradientFrom);
  root.style.setProperty('--grad-to', colors.gradientTo);
  root.style.setProperty('--shadow-sm', shadow.sm);
  root.style.setProperty('--shadow-md', shadow.md);
  root.style.setProperty('--shadow-lg', shadow.lg);
  root.style.setProperty('--radius-sm', radius.sm);
  root.style.setProperty('--radius-md', radius.md);
  root.style.setProperty('--radius-lg', radius.lg);
  root.style.setProperty('--radius-round', radius.round);
  root.style.setProperty('--transition', theme.transition);
};
