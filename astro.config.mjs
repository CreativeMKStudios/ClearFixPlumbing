import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update this when the live domain is chosen. Canonical tags, the sitemap,
// and robots.txt all use it.
export default defineConfig({
  site: 'https://clearfixplumber.co.uk',
  trailingSlash: 'never',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
