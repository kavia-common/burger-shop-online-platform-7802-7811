/**
 * Deprecated Ocean theme module.
 * The app now uses the extracted Figma tokens from /assets/design-system.css.
 * This file remains to satisfy imports but does no runtime injection.
 */

// PUBLIC_INTERFACE
export const theme = {
  name: 'Figma Deep Green',
};

// PUBLIC_INTERFACE
export const applyCSSVars = () => {
  // No-op: All tokens are defined in assets/design-system.css
};
