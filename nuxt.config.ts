// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ignore: [
    process.env.NODE_ENV !== 'development' ? 'pages/design-system.vue' : '',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@nuxt/eslint',
    '@pinia/nuxt',
  ],
  css: ['@/assets/css/tailwind.css', '@/assets/css/base.css'],

  app: {
    head: {
      htmlAttrs: {
        class: 'app-dark',
      },
    },
  },

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
  typescript: {
    typeCheck: true,
  },
});
