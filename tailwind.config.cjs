/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    './src/content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular']
      },
      colors: {
        brand: {
          primary: '#0f766e',
          strong: '#0ea5e9',
          accent: '#f59e0b',
          dark: '#0b1c2c',
          light: '#ecfeff'
        }
      },
      boxShadow: {
        card: '0 10px 35px rgba(12, 18, 31, 0.15)'
      }
    }
  },
  plugins: []
};
