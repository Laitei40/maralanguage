import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Astro configuration for static site deployment on Cloudflare Pages
export default defineConfig({
  site: 'https://maralearning.pages.dev',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
