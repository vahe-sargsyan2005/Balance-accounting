<script setup lang="ts">
const { t } = useI18n()

const industries = computed(() => ({
  auto: t('industriesList.auto'),
  defense: t('industriesList.defense'),
  energy: t('industriesList.energy'),
  health: t('industriesList.health'),
  invest: t('industriesList.invest'),
  telecom: t('industriesList.telecom'),
}))

const quickLinks = computed(() => ({
  philosophy: t('quickLinksList.philosophy'),
  insights: t('quickLinksList.insights'),
  cases: t('quickLinksList.cases'),
  careers: t('quickLinksList.careers'),
  team: t('quickLinksList.team'),
}))

const socialIcons = [
  'i-lucide-facebook',
  'i-lucide-youtube',
  'i-lucide-instagram',
  'i-lucide-linkedin'
]
</script>

<template>
  <footer class="bg-[#001120] text-white pt-20 pb-10 overflow-hidden">
    <div class="container mx-auto px-4 md:px-8">

      <div class="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
        <h2 class="text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line">
          {{ $t('footer.ctaTitle') }}
        </h2>

        <div class="flex flex-col gap-4 text-gray-400">
          <div class="flex items-center gap-3">
            <Icon name="i-lucide-mail" class="text-blue-500" size="20" />
            <a href="mailto:info@horqur.am" class="hover:text-white transition-colors">
              {{ $t('footer.contactEmail') }}
            </a>
          </div>
          <div class="flex items-center gap-3">
            <Icon name="i-lucide-map-pin" class="text-blue-500" size="20" />
            <p>{{ $t('footer.contactAddress') }}</p>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mb-16"/>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

        <div class="lg:col-span-5">
          <h3 class="text-xl font-bold mb-8">{{ $t('footer.subscribeTitle') }}</h3>

          <form class="space-y-6" @submit.prevent="">
            <div class="relative group">
              <input
                  type="email"
                  :placeholder="$t('footer.emailPlaceholder')"
                  class="w-full bg-transparent border-b border-gray-700 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              >
              <button class="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-white hover:text-blue-500 transition-colors uppercase text-sm font-bold tracking-wider">
                {{ $t('footer.subscribeButton') }}
                <Icon name="i-lucide-arrow-right" size="18" />
              </button>
            </div>

            <div class="flex items-start gap-3">
              <input
                  id="consent"
                  type="checkbox"
                  class="mt-1 w-4 h-4 rounded border-gray-700 bg-transparent text-blue-600 focus:ring-offset-gray-900"
              >
              <label for="consent" class="text-sm text-gray-500 cursor-pointer select-none leading-relaxed">
                {{ $t('footer.consentText') }}
              </label>
            </div>
          </form>
        </div>

        <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <h4 class="text-gray-500 uppercase tracking-widest text-xs mb-8">{{ $t('footer.col1Title') }}</h4>
            <ul class="space-y-4">
              <li v-for="(label, key) in industries" :key="key">
                <NuxtLink to="#" class="text-gray-300 hover:text-blue-500 hover:pl-2 transition-all duration-300 block">
                  {{ label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-gray-500 uppercase tracking-widest text-xs mb-8">{{ $t('footer.col2Title') }}</h4>
            <ul class="space-y-4">
              <li><NuxtLink to="#" class="text-gray-300 hover:text-blue-500 hover:pl-2 transition-all duration-300 block">Consulting</NuxtLink></li>
              <li><NuxtLink to="#" class="text-gray-300 hover:text-blue-500 hover:pl-2 transition-all duration-300 block">Audit & Assurance</NuxtLink></li>
              <li><NuxtLink to="#" class="text-gray-300 hover:text-blue-500 hover:pl-2 transition-all duration-300 block">Risk & Financial</NuxtLink></li>
              <li><NuxtLink to="#" class="text-gray-300 hover:text-blue-500 hover:pl-2 transition-all duration-300 block">AI & Analytics</NuxtLink></li>
              <li><NuxtLink to="#" class="text-gray-300 hover:text-blue-500 hover:pl-2 transition-all duration-300 block">Tax Advisory</NuxtLink></li>
            </ul>
          </div>

          <div>
            <h4 class="text-gray-500 uppercase tracking-widest text-xs mb-8">{{ $t('footer.col3Title') }}</h4>
            <ul class="space-y-4">
              <li v-for="(label, key) in quickLinks" :key="key">
                <NuxtLink to="#" class="text-gray-300 hover:text-blue-500 hover:pl-2 transition-all duration-300 block">
                  {{ label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div class="border-t border-gray-800 mb-10"/>

      <div class="flex flex-col lg:flex-row justify-between items-end gap-10">

        <div class="select-none leading-none -mb-6 md:-mb-10">
          <h1 class="text-[15vw] lg:text-[180px] font-bold tracking-tighter text-white">
            horqur
          </h1>
        </div>

        <div class="flex flex-col items-end gap-6 mb-4 w-full lg:w-auto">
          <div class="flex gap-4">
            <NuxtLink
                v-for="icon in socialIcons"
                :key="icon"
                to="#"
                class="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
            >
              <Icon :name="icon" size="18" />
            </NuxtLink>
          </div>

          <p class="text-gray-500 text-sm">
            {{ $t('footer.copyright', { year: currentYear }) }}
          </p>
        </div>

      </div>

    </div>
  </footer>
</template>