// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@primevue/nuxt-module', '@nuxt/eslint'],
  css: ['@/assets/css/tailwind.css', '@/assets/css/base.css'],

  primevue: {
    components: {
      prefix: 'Prime',
    },
    options: {
      theme: 'none',
    },
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  eslint: {
    checker: true, // <---
  },
})
