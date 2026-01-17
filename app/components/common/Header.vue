<script setup lang="ts">
import UiLogo from '~/components/ui/Logo.vue'
import UiButtonCta from '~/components/ui/ButtonCta.vue'
import UiDropdown from '~/components/ui/Dropdown.vue'
import type { IService } from '~/types/services'
import type { ICourse } from '~/types/course'

const { t, locale } = useI18n()
const appConfig = useAppConfig()

// --- API DATA FETCHING ---
const { data: services } = await useFetch<IService[]>('/api/services', {
  query: { lang: locale },
  watch: [locale],
  key: 'header-services-list'
})

const { data: courses } = await useFetch<ICourse[]>('/api/courses', {
  query: { lang: locale },
  watch: [locale],
  key: 'header-courses-list'
})

// --- DATA TRANSFORMATION ---
const serviceLinks = computed(() => {
  if (!services.value) return []
  return services.value.map(service => ({
    id: service.id,
    label: service.title,
    to: `/services#service-${service.id}`,
    icon: service.iconName || 'i-lucide-box'
  }))
})

const academyLinks = computed(() => {
  if (!courses.value) return []
  return courses.value.map(course => {
    // @ts-ignore
    const isBeginner = course.category === 'beginners' || course.level === 'Beginner'
    return {
      id: course.id,
      label: course.title,
      to: '/courses',
      icon: isBeginner ? 'i-lucide-sprout' : 'i-lucide-award'
    }
  })
})

// --- LOGIC: DROPDOWN MANAGER ---
// Храним ID активного дропдауна ('services', 'academy' или null)
const activeDropdown = ref<string | null>(null)

// Функция переключения
const toggleDropdown = (name: string) => {
  if (activeDropdown.value === name) {
    activeDropdown.value = null // Если уже открыт - закрываем
  } else {
    activeDropdown.value = name // Открываем новый (старый закроется сам)
  }
}

// Функция закрытия всего
const closeAll = () => {
  activeDropdown.value = null
}

// --- SCROLL LOGIC ---
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

      <nav class="hidden lg:flex items-center gap-8 xl:gap-10">

        <UiDropdown
            :is-open="activeDropdown === 'services'"
            width-class="w-80"
            align="left"
            @toggle="toggleDropdown('services')"
            @close="closeAll"
        >
          <template #trigger>
            <button
                class="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide transition-colors outline-none"
                :class="activeDropdown === 'services' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'"
            >
              {{ $t('header.services') }}
              <Icon
                  name="i-lucide-chevron-down"
                  size="14"
                  class="transition-transform duration-300"
                  :class="{ 'rotate-180': activeDropdown === 'services' }"
              />
            </button>
          </template>

          <template #content>
            <div class="p-2 max-h-[350px] overflow-y-auto custom-scrollbar">
              <template v-if="serviceLinks.length">
                <NuxtLink
                    v-for="item in serviceLinks"
                    :key="item.id"
                    :to="item.to"
                    @click="closeAll"
                    class="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-all group"
                >
                  <div class="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0 mt-0.5">
                    <Icon :name="item.icon" size="18" />
                  </div>
                  <span class="font-medium text-sm leading-snug pt-1">{{ item.label }}</span>
                </NuxtLink>
              </template>
              <div v-else class="p-4 text-center text-gray-400 text-xs">Loading...</div>
            </div>
          </template>
        </UiDropdown>

        <UiDropdown
            :is-open="activeDropdown === 'academy'"
            width-class="w-72"
            align="left"
            @toggle="toggleDropdown('academy')"
            @close="closeAll"
        >
          <template #trigger>
            <button
                class="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide transition-colors outline-none"
                :class="activeDropdown === 'academy' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'"
            >
              {{ $t('header.academy') }}
              <Icon
                  name="i-lucide-chevron-down"
                  size="14"
                  class="transition-transform duration-300"
                  :class="{ 'rotate-180': activeDropdown === 'academy' }"
              />
            </button>
          </template>

          <template #content>
            <div class="p-2">
              <template v-if="academyLinks.length">
                <NuxtLink
                    v-for="item in academyLinks"
                    :key="item.id"
                    :to="item.to"
                    @click="closeAll"
                    class="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 text-gray-700 hover:text-green-700 transition-all group"
                >
                  <div class="w-9 h-9 rounded-full bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors flex-shrink-0">
                    <Icon :name="item.icon" size="18" />
                  </div>
                  <span class="font-medium text-sm pt-0.5">{{ item.label }}</span>
                </NuxtLink>
              </template>
              <div v-else class="p-4 text-center text-gray-400 text-xs">Loading...</div>
            </div>
          </template>
        </UiDropdown>

        <NuxtLink to="/#about-us" class="text-sm font-bold text-gray-600 hover:text-blue-600 uppercase tracking-wide transition-colors">
          {{ $t('header.company') }}
        </NuxtLink>

      </nav>

      <div class="hidden lg:flex items-center gap-6 xl:gap-8">
        <a :href="`tel:${appConfig.global.phone}`" class="flex items-center gap-3 text-[#001120] font-bold hover:text-blue-600 transition-colors group">
          <div class="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
            <Icon name="i-lucide-phone" size="18" />
          </div>
          <span class="text-sm hidden xl:block">{{ appConfig.global.phone }}</span>
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
        <nav class="flex flex-col items-center gap-8">
        </nav>
      </div>

    </div>
  </header>
</template>

<style scoped>
/* Стильный тонкий скроллбар */
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>