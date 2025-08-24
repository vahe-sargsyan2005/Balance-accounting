// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/icon'
  ]
})