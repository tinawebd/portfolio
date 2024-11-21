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
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
        'funnel-display': ['Funnel Display', 'sans-serif'],
      },
      backgroundImage: {
        profile: "url('/img/profile.jpg')",
        'team-hover': "url('/img/team-hover.png')",
      },
    },
  },
};
