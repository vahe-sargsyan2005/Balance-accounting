import { getLocaleFiles } from './i18n/i18n.helpers'

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
    '@nuxt/fonts',
    'nuxt-swiper',
    '@nuxtjs/i18n'
  ],


  i18n: {
    locales: [
      { code: 'hy', iso: 'hy-AM',  displayName: 'Հայերեն', files: getLocaleFiles('hy') },
      { code: 'ru', iso: 'ru-RU', displayName: 'Русский', files: getLocaleFiles('ru') },
      { code: 'en', iso: 'en-US', displayName: 'English', files: getLocaleFiles('en') }
    ],
    defaultLocale: 'hy',
    strategy: 'prefix_except_default',
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