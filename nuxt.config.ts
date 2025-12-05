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
    '@nuxt/icon',
    'nuxt-i18n-micro',
    '@nuxt/fonts'
  ],

  i18n: {
    locales: [
      { code: 'hy', iso: 'hy-AM', dir: 'ltr', displayName: 'Հայերեն' },
      { code: 'ru', iso: 'ru-RU', dir: 'ltr', displayName: 'Русский' },
      { code: 'en', iso: 'en-US', dir: 'ltr', displayName: 'English' },
      // { code: 'fr', iso: 'fr-FR', dir: 'ltr', displayName: 'Français' },
      // { code: 'de', iso: 'de-DE', dir: 'ltr', displayName: 'Deutsch' },
      // { code: 'es', iso: 'es-ES', dir: 'ltr', displayName: 'Español' }
    ],
    defaultLocale: 'en',
    translationDir: 'locales',
    meta: true,
  },

  fonts: {
    provider: 'google',
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext']
    },
    families: [
      { name: 'DM Sans', provider: 'google', global: true },
    ]
  }
})
