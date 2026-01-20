import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// Astro configuration targeting Cloudflare Pages
export default defineConfig({
  site: 'https://maralearning.pages.dev',
  output: 'static',
  adapter: cloudflare(),
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
