<script setup lang="ts">
const { t } = useI18n()

// Состояние для отслеживания скролла (для тени)
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Меню навигации
const menuItems = computed(() => [
  { label: t('header.demos'), link: '/', hasDropdown: true },
  { label: t('header.digital'), link: '/digital', hasDropdown: false },
  { label: t('header.services'), link: '/services', hasDropdown: true },
  { label: t('header.insight'), link: '/insights', hasDropdown: true },
  { label: t('header.pages'), link: '/pages', hasDropdown: true },
  { label: t('header.contact'), link: '/contact', hasDropdown: false },
])
</script>

<template>
  <header
      class="sticky top-0 z-50 w-full transition-all duration-300 bg-white"
      :class="{ 'shadow-md py-2': isScrolled, 'py-4 md:py-6': !isScrolled }"
  >
    <div class="container mx-auto px-4 md:px-8 flex items-center justify-between">

      <NuxtLink to="/" class="flex items-center gap-2 z-50 relative">
        <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
          <Icon name="i-lucide-zap" size="20" class="fill-current" />
        </div>
        <span class="text-2xl font-bold text-[#001120] tracking-tight">Horqur</span>
      </NuxtLink>

      <nav class="hidden lg:flex items-center gap-8">
        <div
            v-for="(item, index) in menuItems"
            :key="index"
            class="group relative"
        >
          <NuxtLink
              :to="item.link"
              class="flex items-center text-sm font-bold text-gray-600 hover:text-blue-600 uppercase tracking-wide transition-colors py-2"
          >
            {{ item.label }}
            <Icon
                v-if="item.hasDropdown"
                name="i-lucide-chevron-down"
                class="ml-1 w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors"
            />
          </NuxtLink>

          <div v-if="item.hasDropdown" class="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-gray-100">
            <p class="text-gray-400 text-xs">Submenu for {{ item.label }}</p>
          </div>
        </div>
      </nav>

      <div class="hidden lg:flex items-center gap-8">
        <a href="tel:+1365012378" class="flex items-center gap-2 text-[#001120] font-bold hover:text-blue-600 transition-colors">
          <div class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500">
            <Icon name="i-lucide-phone" size="14" />
          </div>
          {{ $t('header.phone') }}
        </a>

        <NuxtLink to="/contact" class="flex group">
          <span class="bg-blue-600 text-white font-semibold py-3 px-6 rounded-l-2xl rounded-tr-none flex items-center transition-colors group-hover:bg-blue-700">
            {{ $t('header.letsChat') }}
          </span>
          <span class="bg-blue-600 text-white p-3 rounded-r-2xl rounded-bl-none border-l border-blue-500 flex items-center justify-center transition-colors group-hover:bg-blue-700">
            <Icon name="i-lucide-arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </NuxtLink>
      </div>

      <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="lg:hidden text-[#001120] p-2 z-50 relative"
      >
        <Icon :name="isMobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" size="28" />
      </button>

      <div
          class="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-300 lg:hidden"
          :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <nav class="flex flex-col items-center gap-6">
          <NuxtLink
              v-for="(item, index) in menuItems"
              :key="index"
              :to="item.link"
              @click="isMobileMenuOpen = false"
              class="text-2xl font-bold text-[#001120]"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
        <div class="mt-8">
          <NuxtLink
              to="/contact"
              @click="isMobileMenuOpen = false"
              class="bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-xl"
          >
            {{ $t('header.letsChat') }}
          </NuxtLink>
        </div>
      </div>

    </div>
  </header>
</template>

<style scoped>
/* Дополнительные стили, если нужны специфические тени или переходы */
</style>