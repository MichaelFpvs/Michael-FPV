// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ─────────────────────────────────────────────────────────────
// CONFIGURED FOR CLOUDFLARE PAGES
//
// Cloudflare serves the site from the root of the address, so
// base is '/'. Nothing here needs changing to deploy.
//
// When you add your own domain later, change `site` to it, e.g.
//   site: 'https://michaelfpv.com',
// and leave base as '/'.
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://michael-fpv.pages.dev',
  base: '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
