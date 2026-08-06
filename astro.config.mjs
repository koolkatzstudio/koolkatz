// @ts-check
import { defineConfig } from 'astro/config';

// Deployment-agnostic static build.
// The contact endpoint (serverless + Resend) will require an adapter
// (netlify/vercel/cloudflare) chosen once hosting is decided — see README.
export default defineConfig({
  output: 'static',
  // site: 'https://TBD — set when domain is decided',
});
