/** @type {import('tailwindcss').Config} */
const primeui = require('tailwindcss-primeui');

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  plugins: [primeui],
  theme: {
    extend: {
      fontFamily: {
        'funnel-display': ['Funnel Display', 'sans-serif'],
      },
      backgroundImage: {
        profile: "url('/img/profile.png')",
        'team-hover': "url('/img/team-hover.png')",
        'home-header':
          "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/img/bg-home-header.jpg')",
        'home-bottom':
          "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/img/bg-home-bottom.png')",
      },
    },
  },
  darkMode: ['selector', '[class*="app-dark"]'],
};
