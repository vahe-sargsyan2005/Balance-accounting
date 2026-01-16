<script setup lang="ts">
import type { IFaqItem } from '~/types/faq'

const route = useRoute()
const { t, locale } = useI18n()

const activeIndex = ref<number | null>(0)

const { data: faqItems } = await useFetch<IFaqItem[]>('/api/faq', {
  query: { lang: locale.value },
  watch: [() => route.path],
  key: 'faq-list'
})

const toggleItem = (index: number) => {
  if (activeIndex.value === index) {
    activeIndex.value = null
  } else {
    activeIndex.value = index
  }
}
</script>

<template>
  <section id="faq" class="py-16 md:py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-4 md:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        <div>
          <div class="flex items-center mb-6 text-gray-500 uppercase tracking-widest text-sm font-medium">
            <Icon name="i-lucide-chevron-right" class="text-blue-600 mr-2" :size="20" />
            <p>{{ $t('faq.label') }}</p>
          </div>

          <h2 class="text-5xl md:text-6xl font-bold text-[#001120] mb-2 leading-tight">
            {{ $t('faq.titleMain') }}
          </h2>
          <h3 class="text-5xl md:text-6xl font-bold text-gray-300 mb-12">
            {{ $t('faq.titleSub') }}
          </h3>

          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <NuxtLink to="/faq" class="flex group">
              <span class="bg-blue-600 text-white font-semibold py-4 px-8 rounded-l-full flex items-center transition-colors group-hover:bg-blue-700">
                {{ $t('faq.viewAll') }}
              </span>
              <span class="bg-blue-600 text-white p-4 rounded-r-full border-l border-blue-500 flex items-center justify-center transition-colors group-hover:bg-blue-700">
                <Icon name="i-lucide-arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </NuxtLink>

            <div class="flex items-center gap-4">
              <div class="relative">
                <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100"
                    alt="Reviewer"
                    class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div class="absolute -bottom-1 -right-1 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white">
                  4.9
                </div>
              </div>

              <div>
                <div class="flex text-yellow-400 text-xs mb-1">
                  <Icon name="i-lucide-star" v-for="i in 5" :key="i" class="fill-current w-3 h-3" />
                </div>
                <p class="text-gray-500 text-sm font-medium leading-none">
                  {{ $t('faq.ratingText') }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="divide-y divide-gray-200">
          <template v-if="faqItems && faqItems.length">
            <div
                v-for="(item, index) in faqItems"
                :key="index"
                class="py-6 first:pt-0"
            >
              <button
                  @click="toggleItem(index)"
                  class="w-full flex justify-between items-center text-left focus:outline-none group"
              >
              <span
                  class="text-lg md:text-xl font-bold pr-8 transition-colors duration-300"
                  :class="activeIndex === index ? 'text-blue-600' : 'text-[#001120] group-hover:text-blue-600'"
              >
                {{ item.question }}
              </span>

                <span class="flex-shrink-0">
                <Icon
                    v-if="activeIndex === index"
                    name="i-lucide-minus"
                    class="text-blue-600 w-6 h-6"
                />
                <Icon
                    v-else
                    name="i-lucide-plus"
                    class="text-gray-400 group-hover:text-blue-600 w-6 h-6 transition-colors"
                />
              </span>
              </button>

              <div
                  v-show="activeIndex === index"
                  class="overflow-hidden transition-all duration-300 ease-in-out"
              >
                <p class="text-gray-500 mt-4 leading-relaxed pr-8">
                  {{ item.answer }}
                </p>
              </div>
            </div>
          </template>

          <div v-else class="py-10 text-center text-gray-400">
            Загрузка...
          </div>
        </div>

      </div>
    </div>
  </section>
</template>