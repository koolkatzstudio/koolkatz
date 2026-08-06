/**
 * Portfolio filter categories (BRIEF §9) — slug ↔ display label.
 * Slugs must match the `categories` enum in src/content.config.ts.
 * "All" is a UI filter, not a category.
 */
export const CATEGORY_LABELS: Record<string, string> = {
  'video-editing': 'Video Editing',
  'social-content': 'Social Content',
  'motion-graphics': 'Motion Graphics',
  branding: 'Branding',
  'web-digital': 'Web & Digital',
  'visual-design': 'Visual Design',
  mockups: 'Mockups',
  experimental: 'Experimental',
  audiovisual: 'Audiovisual',
  '3d': '3D',
  illustration: 'Illustration',
};

export const CATEGORY_SLUGS = Object.keys(CATEGORY_LABELS);
