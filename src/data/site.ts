/**
 * KOOLKATZ — Site-level configuration.
 * Copy that is still open lives here so it can be changed in one place.
 */

export const site = {
  name: 'KoolKatz Creative Studio',
  language: 'en',

  /**
   * HERO COPY — NOT FINAL (WEBSITE_BRIEF.md §6).
   * Candidates: "LET'S CREATE" / "LET'S GET CREATIVE".
   * Using the first as a temporary placeholder until the copy is closed.
   */
  heroCopy: "LET'S CREATE",

  services: [
    'Brand Identity',
    'Art Direction',
    'Video Editing',
    'Motion Graphics',
    'Web Design',
  ],

  nav: [
    { label: 'HOME', href: '/' },
    { label: 'TUNI', href: '/tuni' },
    { label: 'ANY', href: '/any' },
    { label: 'CONTACT', href: '/contact' },
  ],

  /**
   * Contact routing (BRIEF §12). Current version uses mailto: links built
   * from these addresses; the future serverless + Resend endpoint will
   * replace the transport without redesigning the page (it will read
   * addresses from env vars server-side).
   */
  contactEmails: {
    tuni: 'tuni@koolkatzstudio.com',
    any: 'any@koolkatzstudio.com',
  },
} as const;
