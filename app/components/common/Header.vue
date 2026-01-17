<script setup lang="ts">
import UiLogo from '~/components/ui/Logo.vue'
import UiButtonCta from '~/components/ui/ButtonCta.vue'
import UiDropdown from '~/components/ui/Dropdown.vue'
// Импортируем типы, чтобы TS не ругался
import type { IService } from '~/types/services'
// Предполагаем, что тип ICourse у тебя есть (из прошлых шагов), если нет - замени на any
import type { ICourse } from '~/types/course'

const { t, locale } = useI18n()
const appConfig = useAppConfig()

// --- 1. FETCH DATA (Server Side) ---

// Получаем услуги
const { data: services } = await useFetch<IService[]>('/api/services', {
  query: { lang: locale }, // Передаем текущий язык
  watch: [locale],         // Перезапрос при смене языка
  key: 'header-services-list'
})

// Получаем курсы
const { data: courses } = await useFetch<ICourse[]>('/api/courses', {
  query: { lang: locale },
  watch: [locale],
  key: 'header-courses-list'
})

// --- 2. TRANSFORM DATA FOR UI ---

// Преобразуем услуги в ссылки для меню
const serviceLinks = computed(() => {
  if (!services.value) return []

  return services.value.map(service => ({
    id: service.id,
    label: service.title,         // Берем уже переведенный заголовок из API
    to: `/services#service-${service.id}`, // Ведем на якорь (нужно добавить id в секции Services)
    icon: service.iconName || 'i-lucide-box' // Иконка из API
  }))
})

// Преобразуем курсы в ссылки для меню
const academyLinks = computed(() => {
  if (!courses.value) return []

  return courses.value.map(course => {
    // Подбираем иконку в зависимости от уровня или категории (если есть в API)
    // @ts-ignore - если в типе нет category, используем заглушку
    const isBeginner = course.category === 'beginners' || course.level === 'Beginner' || course.level === 'Սկսնակ'

    return {
      id: course.id,
      label: course.title,
      to: '/courses', // Или на страницу конкретного курса `/courses/${course.id}`
      icon: isBeginner ? 'i-lucide-sprout' : 'i-lucide-award'
    }
  })
})

// --- 3. SCROLL LOGIC ---
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
      class="sticky top-0 z-50 w-full transition-all duration-300 bg-white border-b border-transparent"
      :class="{
        'shadow-lg shadow-gray-100/50 py-3 border-gray-100': isScrolled,
        'py-6 md:py-8': !isScrolled
      }"
  >
    <div class="container mx-auto px-4 md:px-8 flex items-center justify-between">

      <UiLogo />

      <nav class="hidden lg:flex items-center gap-10">

        <UiDropdown>
          <template #trigger="{ isOpen }">
            <button class="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide transition-colors outline-none"
                    :class="isOpen ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'"
            >
              {{ $t('header.services') }}
              <Icon name="i-lucide-chevron-down" size="14" class="transition-transform duration-300" :class="{ 'rotate-180': isOpen }" />
            </button>
          </template>

          <template #content="{ close }">
            <div class="p-2 w-72 max-h-[400px] overflow-y-auto custom-scrollbar">
              <template v-if="serviceLinks.length">
                <NuxtLink
                    v-for="item in serviceLinks"
                    :key="item.id"
                    :to="item.to"
                    @click="close"
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors group"
                >
                  <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                    <Icon :name="item.icon" size="16" />
                  </div>
                  <span class="font-medium text-sm leading-tight">{{ item.label }}</span>
                </NuxtLink>
              </template>
              <div v-else class="p-4 text-center text-gray-400 text-xs">
                Loading services...
              </div>
            </div>
          </template>
        </UiDropdown>

        <UiDropdown>
          <template #trigger="{ isOpen }">
            <button class="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide transition-colors outline-none"
                    :class="isOpen ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'"
            >
              {{ $t('header.academy') }}
              <Icon name="i-lucide-chevron-down" size="14" class="transition-transform duration-300" :class="{ 'rotate-180': isOpen }" />
            </button>
          </template>

          <template #content="{ close }">
            <div class="p-2 w-64">
              <template v-if="academyLinks.length">
                <NuxtLink
                    v-for="item in academyLinks"
                    :key="item.id"
                    :to="item.to"
                    @click="close"
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors group"
                >
                  <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors flex-shrink-0">
                    <Icon :name="item.icon" size="16" />
                  </div>
                  <span class="font-medium text-sm">{{ item.label }}</span>
                </NuxtLink>
              </template>
              <div v-else class="p-4 text-center text-gray-400 text-xs">
                Loading courses...
              </div>
            </div>
          </template>
        </UiDropdown>

        <NuxtLink to="/#about-us" class="text-sm font-bold text-gray-600 hover:text-blue-600 uppercase tracking-wide transition-colors">
          {{ $t('header.company') }}
        </NuxtLink>
      </nav>

      <div class="hidden lg:flex items-center gap-8">
        <a :href="`tel:${appConfig.global.phone}`" class="flex items-center gap-3 text-[#001120] font-bold hover:text-blue-600 transition-colors group">
          <div class="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
            <Icon name="i-lucide-phone" size="18" />
          </div>
          <span class="text-sm">{{ appConfig.global.phone }}</span>
        </a>

        <UiButtonCta :to="'#contact'" :text="$t('header.letsChat')" />
      </div>

      <button
          class="lg:hidden text-[#001120] p-2 z-50 relative focus:outline-none"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <Icon :name="isMobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" size="32" class="transition-all duration-300" />
      </button>

      <div
          class="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-500 lg:hidden"
          :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <nav class="flex flex-col items-center gap-6 w-full px-8">
          <NuxtLink to="#services" @click="isMobileMenuOpen = false" class="text-3xl font-extrabold text-[#001120] hover:text-blue-600">
            {{ $t('header.services') }}
          </NuxtLink>
          <NuxtLink to="/courses" @click="isMobileMenuOpen = false" class="text-3xl font-extrabold text-[#001120] hover:text-blue-600">
            {{ $t('header.academy') }}
          </NuxtLink>
          <NuxtLink to="#about-us" @click="isMobileMenuOpen = false" class="text-3xl font-extrabold text-[#001120] hover:text-blue-600">
            {{ $t('header.company') }}
          </NuxtLink>
        </nav>

        <div class="mt-8 flex flex-col gap-6 items-center">
          <a :href="`tel:${appConfig.global.phone}`" class="text-xl font-bold text-gray-500">{{ appConfig.global.phone }}</a>

          <NuxtLink
              to="#contact"
              class="bg-blue-600 text-white font-bold py-4 px-12 rounded-full text-xl shadow-xl shadow-blue-200"
              @click="isMobileMenuOpen = false"
          >
            {{ $t('header.letsChat') }}
          </NuxtLink>
        </div>
      </div>

    </div>
  </header>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>