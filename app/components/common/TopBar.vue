<script setup lang="ts">
const { global } = useAppConfig()

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const flags: Record<string, string> = {
  en: 'circle-flags:us',
  ru: 'circle-flags:ru',
  hy: 'circle-flags:am'
}

const currentLangLabel = computed(() => {
  const icon = flags[locale.value] || 'lucide:globe'
  const name = locale.value === 'ru' ? 'Русский' : locale.value === 'hy' ? 'Հայերեն' : 'English'
  return { icon, name }
})
</script>

<template>
  <div class="bg-gray-900 text-gray-300 text-xs py-3 border-b border-gray-800 hidden md:block relative z-[60]">
    <div class="container mx-auto px-4 md:px-8 flex justify-between items-center">

      <div class="flex items-center gap-6">
        <a :href="`mailto:${global.email}`" class="flex items-center gap-2 hover:text-white transition-colors">
          <Icon name="i-lucide-mail" size="14" class="text-blue-500" />
          <span>{{ global.email }}</span>
        </a>
        <div class="flex items-center gap-2">
          <Icon name="i-lucide-map-pin" size="14" class="text-blue-500" />
          <span>{{ global.address }}</span>
        </div>
      </div>

      <UiDropdown>
        <template #trigger="{ isOpen }">
          <button class="flex items-center gap-2 hover:text-white transition-colors focus:outline-none cursor-pointer">
            <Icon :name="currentLangLabel.icon" size="18"/>
            <span class="tracking-wide">{{ currentLangLabel.name }}</span>
            <Icon
                name="i-lucide-chevron-down"
                size="12"
                class="transition-transform duration-300"
                :class="{ 'rotate-180': isOpen }"
            />
          </button>
        </template>

        <template #content="{ close }">
          <div class="flex flex-col p-1">
            <NuxtLink
                v-for="loc in (locales as any[])"
                :key="loc.code"
                :to="switchLocalePath(loc.code)"
                @click="close"
                class="px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all text-left flex items-center justify-between group text-sm text-gray-700"
            >
              <div class="flex items-center gap-3">
                <Icon :name="flags[loc.code] || 'lucide:globe'" size="20"/>
                <span>{{ loc.displayName || loc.code.toUpperCase() }}</span>
              </div>

              <Icon
                  v-if="locale === loc.code"
                  name="i-lucide-check"
                  size="16"
                  class="text-blue-600"
              />
            </NuxtLink>
          </div>
        </template>
      </UiDropdown>

    </div>
  </div>
</template>