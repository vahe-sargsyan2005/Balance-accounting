<script setup lang="ts">
import type { IService } from '~/types/services'
import type { ICourse } from '~/types/course'

const { locale } = useI18n()
const appConfig = useAppConfig()

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

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const handleScroll = () => { isScrolled.value = window.scrollY > 50 }

watch(isMobileMenuOpen, (val) => {
  if (import.meta.client) {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
      class="sticky top-0 z-50 w-full transition-all duration-300 bg-white border-b border-transparent"
      :class="{
        'shadow-lg shadow-gray-100/50 py-3 border-gray-100': isScrolled,
        'py-4 md:py-6 lg:py-8': !isScrolled
      }"
  >
    <div class="container mx-auto px-4 md:px-8 flex items-center justify-between">

      <UiLogo class="relative z-50" />

      <nav class="hidden xl:flex items-center gap-6 2xl:gap-10">

        <UiDropdown
            name="header-services"
            width-class="w-80"
            align="left"
            max-height="max-h-[350px]"
        >
          <template #trigger="{ isOpen }">
            <button
                class="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide transition-colors outline-none"
                :class="isOpen ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'"
            >
              {{ $t('header.services') }}
              <Icon name="i-lucide-chevron-down" size="14" class="transition-transform duration-300" :class="{ 'rotate-180': isOpen }" />
            </button>
          </template>

          <template #content="{ close }">
            <template v-if="serviceLinks.length">
              <NuxtLink
                  v-for="item in serviceLinks"
                  :key="item.id"
                  :to="item.to"
                  @click="close"
                  class="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-all group"
              >
                <div class="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0 mt-0.5">
                  <Icon :name="item.icon" size="18" />
                </div>
                <span class="font-medium text-sm leading-snug pt-1">{{ item.label }}</span>
              </NuxtLink>
            </template>
            <div v-else class="p-4 text-center text-gray-400 text-xs">Loading...</div>
          </template>
        </UiDropdown>

        <UiDropdown
            name="header-academy"
            width-class="w-72"
            align="left"
        >
          <template #trigger="{ isOpen }">
            <button
                class="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide transition-colors outline-none"
                :class="isOpen ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'"
            >
              {{ $t('header.academy') }}
              <Icon name="i-lucide-chevron-down" size="14" class="transition-transform duration-300" :class="{ 'rotate-180': isOpen }" />
            </button>
          </template>

          <template #content="{ close }">
            <template v-if="academyLinks.length">
              <NuxtLink
                  v-for="item in academyLinks"
                  :key="item.id"
                  :to="item.to"
                  @click="close"
                  class="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 text-gray-700 hover:text-green-700 transition-all group"
              >
                <div class="w-9 h-9 rounded-full bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors flex-shrink-0">
                  <Icon :name="item.icon" size="18" />
                </div>
                <span class="font-medium text-sm pt-0.5">{{ item.label }}</span>
              </NuxtLink>
            </template>
            <div v-else class="p-4 text-center text-gray-400 text-xs">Loading...</div>
          </template>
        </UiDropdown>

        <NuxtLink to="/#about-us" class="text-sm font-bold text-gray-600 hover:text-blue-600 uppercase tracking-wide transition-colors">
          {{ $t('header.company') }}
        </NuxtLink>
        <NuxtLink to="/#faq" class="text-sm font-bold text-gray-600 hover:text-blue-600 uppercase tracking-wide transition-colors">
          {{ $t('header.faq') }}
        </NuxtLink>
      </nav>

      <div class="hidden xl:flex items-center gap-6">
        <a :href="`tel:${appConfig.global.phone}`" class="hidden 2xl:flex items-center gap-3 text-[#001120] font-bold hover:text-blue-600 transition-colors group">
          <UiButton icon="i-lucide-phone" mode="icon-only" variant="outline" shape="pill" size="sm"/>
          <span class="text-sm">{{ appConfig.global.phone }}</span>
        </a>
        <UiButton
            to="#contact"
            mode="split"
            :label="$t('header.lets_chat')"
        />
      </div>

      <button
          class="xl:hidden text-[#001120] p-2 z-50 relative focus:outline-none w-10 h-10 flex items-center justify-center"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="Toggle Menu"
      >
        <div class="w-6 flex flex-col items-end gap-[5px] transition-all duration-300">
          <span
              class="h-[2px] bg-current rounded-full transition-all duration-300 w-full"
              :class="{ 'rotate-45 translate-y-[7px]': isMobileMenuOpen }"
          ></span>
          <span
              class="h-[2px] bg-current rounded-full transition-all duration-300 w-2/3"
              :class="{ 'opacity-0': isMobileMenuOpen }"
          ></span>
          <span
              class="h-[2px] bg-current rounded-full transition-all duration-300 w-full"
              :class="{ '-rotate-45 -translate-y-[7px]': isMobileMenuOpen }"
          ></span>
        </div>
      </button>

      <div
          class="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col transition-all duration-500 xl:hidden"
          :class="isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'"
      >
        <div class="flex flex-col h-full pt-28 pb-10 px-6 overflow-y-auto">

          <nav class="flex flex-col items-start gap-6 w-full mb-auto">
            <NuxtLink to="#services" @click="isMobileMenuOpen = false" class="group w-full border-b border-gray-100 pb-5">
              <div class="flex items-center justify-between w-full text-xl sm:text-3xl  text-[#001120] hover:text-blue-600 transition-colors">
                {{ $t('header.services') }}
                <Icon name="i-lucide-arrow-right" class="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-600" size="24"/>
              </div>
            </NuxtLink>

            <NuxtLink to="/courses" @click="isMobileMenuOpen = false" class="group w-full border-b border-gray-100 pb-5">
              <div class="flex items-center justify-between w-full text-xl sm:text-3xl  text-[#001120] hover:text-blue-600 transition-colors">
                {{ $t('header.academy') }}
                <Icon name="i-lucide-arrow-right" class="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-600" size="24"/>
              </div>
            </NuxtLink>

            <NuxtLink to="#about-us" @click="isMobileMenuOpen = false" class="group w-full border-b border-gray-100 pb-5">
              <div class="text-xl sm:text-3xl  text-[#001120] hover:text-blue-600 transition-colors">
                {{ $t('header.company') }}
              </div>
            </NuxtLink>

            <NuxtLink to="#faq" @click="isMobileMenuOpen = false" class="group w-full border-b border-gray-100 pb-5">
              <div class="text-xl sm:text-3xl text-[#001120] hover:text-blue-600 transition-colors">
                {{ $t('header.faq') }}
              </div>
            </NuxtLink>
          </nav>

          <div class="mt-8 flex flex-col gap-3">
            <a :href="`tel:${appConfig.global.phone}`" class="text-xl font-bold text-gray-500 hover:text-blue-600 transition-colors">
              {{ appConfig.global.phone }}
            </a>

            <UiButton
                to="#contact"
                block
                :label="$t('header.lets_chat')"
                icon="i-lucide-message-circle"
                @click="isMobileMenuOpen = false"
            />
          </div>

        </div>
      </div>

    </div>
  </header>
</template>