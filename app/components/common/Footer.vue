<script setup lang="ts">
import type { IService } from '~/types/services'
import type { ICourse } from '~/types/course'

const { t, locale } = useI18n()
const appConfig = useAppConfig()
const currentYear = new Date().getFullYear()

const { data: services } = await useFetch<IService[]>('/api/services', {
  query: { lang: locale },
  watch: [locale],
  key: 'footer-services-list',
  transform: (data) => data.slice(0, 5)
})

const { data: courses } = await useFetch<ICourse[]>('/api/courses', {
  query: { lang: locale },
  watch: [locale],
  key: 'footer-courses-list',
  transform: (data) => data.slice(0, 5)
})

const companyLinks = computed(() => [
  { label: t('header.company'), to: '/#about-us' },
  { label: t('header.contact'), to: '/#contact' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' }
])

const socialLinks = computed(() => appConfig.social || [])

</script>

<template>
  <footer class="bg-[#001120] text-white pt-20 pb-8 overflow-hidden border-t border-gray-800">
    <div class="container mx-auto px-4 md:px-8">

      <div class="flex flex-col lg:flex-row justify-between items-start mb-16 gap-10">
        <div class="max-w-2xl">
          <h2 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {{ $t('footer.ctaTitle') }}
          </h2>
          <p class="text-gray-400 text-lg">
            {{ $t('footer.ctaSubtitle') }}
          </p>
        </div>

        <div class="flex flex-col gap-5 text-gray-300">
          <a :href="`mailto:${appConfig.global.email}`" class="flex items-center gap-3 hover:text-blue-500 transition-colors group">
            <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Icon name="i-lucide-mail" size="18" />
            </div>
            <span class="text-lg">{{ appConfig.global.email }}</span>
          </a>
          <a :href="`tel:${appConfig.global.phone}`" class="flex items-center gap-3 hover:text-blue-500 transition-colors group">
            <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Icon name="i-lucide-phone" size="18" />
            </div>
            <span class="text-lg">{{ appConfig.global.phone }}</span>
          </a>
          <div class="flex items-center gap-3 text-gray-400">
            <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
              <Icon name="i-lucide-map-pin" size="18" />
            </div>
            <span class="text-lg">{{ appConfig.global.address }}</span>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mb-16"/>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">

        <div class="lg:col-span-5">
          <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
            <Icon name="i-lucide-zap" class="text-blue-500" />
            {{ $t('footer.subscribeTitle') }}
          </h3>

          <p class="text-gray-400 mb-8 leading-relaxed">
            {{ $t('footer.subscribeDesc') }}
          </p>

          <form class="space-y-6" @submit.prevent="">
            <div class="relative group">
              <input
                  type="email"
                  :placeholder="$t('footer.emailPlaceholder')"
                  class="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-4 px-5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-gray-800 transition-all"
              >
              <button class="absolute right-2 top-1/2 -translate-y-1/2">
                <UiButton icon="i-lucide-arrow-right" mode="icon-only"/>
              </button>

            </div>

            <p class="text-xs text-gray-500">
              {{ $t('footer.consentText') }}
            </p>
          </form>
        </div>

        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">

          <div>
            <h4 class="text-white font-bold uppercase tracking-wider text-sm mb-6 border-l-2 border-blue-500 pl-3">
              {{ $t('header.services') }}
            </h4>
            <ul class="space-y-3">
              <li v-for="service in services" :key="service.id">
                <NuxtLink
                    :to="`/services#service-${service.id}`"
                    class="text-gray-400 hover:text-blue-400 hover:pl-2 transition-all duration-300 block text-sm"
                >
                  {{ service.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-bold uppercase tracking-wider text-sm mb-6 border-l-2 border-green-500 pl-3">
              {{ $t('header.academy') }}
            </h4>
            <ul class="space-y-3">
              <li v-for="course in courses" :key="course.id">
                <NuxtLink
                    to="/courses"
                    class="text-gray-400 hover:text-green-400 hover:pl-2 transition-all duration-300 block text-sm"
                >
                  {{ course.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-bold uppercase tracking-wider text-sm mb-6 border-l-2 border-gray-500 pl-3">
              {{ $t('header.company') }}
            </h4>
            <ul class="space-y-3">
              <li v-for="(link, i) in companyLinks" :key="i">
                <NuxtLink
                    :to="link.to"
                    class="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 block text-sm"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div class="border-t border-gray-800 mb-10"/>

      <div class="flex flex-col lg:flex-row justify-between items-end gap-10">

        <div class="select-none leading-none -mb-4 md:-mb-8 order-2 lg:order-1">
          <h2 class="text-[18vw] lg:text-[160px] font-bold tracking-tighter text-gray-800/20 hover:text-gray-800/40 transition-colors duration-700 cursor-default">
            {{ appConfig.global.name.toLowerCase() }}
          </h2>
        </div>

        <div class="flex flex-col items-start lg:items-end gap-6 mb-4 w-full lg:w-auto order-1 lg:order-2">

          <div class="flex gap-3">
            <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                target="_blank"
                class="w-10 h-10 rounded-full border border-gray-700 bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                :aria-label="social.name"
            >
              <Icon :name="social.icon" size="18" />
            </a>
          </div>

          <div class="text-gray-500 text-sm flex flex-col items-start lg:items-end gap-1">
            <p>{{ $t('footer.copyright', { year: currentYear, name: appConfig.global.name }) }}</p>

            <p class="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
              Made with <Icon name="i-lucide-heart" class="text-red-500 fill-current" size="12" /> by
              <a
                  :href="`https://t.me/${appConfig.global.author.replace('@', '')}`"
                  target="_blank"
                  class="text-blue-400 hover:underline font-medium"
              >
                {{ appConfig.global.author }}
              </a>
              for {{ appConfig.global.name }}
            </p>
          </div>
        </div>

      </div>

    </div>
  </footer>
</template>