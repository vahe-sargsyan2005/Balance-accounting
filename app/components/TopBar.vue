<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

// Состояние открытия дропдауна языков
const isLangMenuOpen = ref(false)
const langMenuRef = ref<HTMLElement | null>(null)

// --- ЛОГИКА ЗАКРЫТИЯ ПРИ КЛИКЕ СНАРУЖИ (Нативный JS вместо VueUse) ---
const closeDropdown = (e: MouseEvent) => {
  // Если меню открыто И клик произошел НЕ внутри нашего элемента
  if (isLangMenuOpen.value && langMenuRef.value && !langMenuRef.value.contains(e.target as Node)) {
    isLangMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
// --------------------------------------------------------------------

// Текущее название языка для отображения
const currentLangLabel = computed(() => {
  return locale.value === 'ru' ? 'Русский' : locale.value === 'hy' ? 'Հայերեն' : 'English'
})

const changeLanguage = (code: string) => {
  setLocale(code)
  isLangMenuOpen.value = false
}
</script>

<template>
  <div class="bg-[#001120] text-gray-300 text-xs py-3 border-b border-gray-800 hidden md:block">
    <div class="container mx-auto px-4 md:px-8 flex justify-between items-center">

      <div class="flex items-center gap-6">
        <a href="mailto:info@horqur.am" class="flex items-center gap-2 hover:text-white transition-colors">
          <Icon name="i-lucide-mail" size="14" class="text-blue-500" />
          <span>{{ $t('topBar.email') }}</span>
        </a>

        <div class="flex items-center gap-2">
          <Icon name="i-lucide-map-pin" size="14" class="text-blue-500" />
          <span>{{ $t('topBar.address') }}</span>
        </div>
      </div>

      <div class="relative z-50" ref="langMenuRef">
        <button
            @click="isLangMenuOpen = !isLangMenuOpen"
            class="flex items-center gap-2 hover:text-white transition-colors focus:outline-none"
        >
          <Icon name="i-lucide-globe" size="14" />
          <span>{{ currentLangLabel }}</span>
          <Icon
              name="i-lucide-chevron-down"
              size="12"
              class="transition-transform duration-300"
              :class="{ 'rotate-180': isLangMenuOpen }"
          />
        </button>

        <div
            v-if="isLangMenuOpen"
            class="absolute top-full right-0 mt-2 w-32 bg-white text-[#001120] rounded-lg shadow-xl py-2 flex flex-col border border-gray-100 transform origin-top-right transition-all"
        >
          <NuxtLink
              v-for="loc in (locales as any[])"
              :key="loc.code"
              :to="switchLocalePath(loc.code)"
              @click="isLangMenuOpen = false"
              class="px-4 py-2 hover:bg-gray-50 hover:text-blue-600 transition-colors text-left flex items-center justify-between group"
          >
            <span>{{ loc.name || loc.code.toUpperCase() }}</span>

            <Icon
                v-if="locale === loc.code"
                name="i-lucide-check"
                size="12"
                class="text-blue-600"
            />
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>