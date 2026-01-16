<script setup lang="ts">
import type { ICareer } from '~/types/career'

const route = useRoute()
const { locale } = useI18n()
const currentLang = computed(() => locale.value)

const { data: careers } = await useFetch<ICareer[]>('/api/careers', {
  query: { lang: currentLang },
  watch: [() => route.path],
  key: 'careers-list'
})
</script>

<template>
  <section id="careers" class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4 md:px-8">

      <div class="mb-12">
        <div class="flex items-center mb-5 text-gray-500 uppercase tracking-widest text-sm font-medium">
          <Icon name="i-lucide-briefcase" class="text-blue-600 mr-2" :size="20" />
          <p>{{ $t('careers.label') }}</p>
        </div>
        <h2 class="text-4xl md:text-6xl font-bold text-[#001120]">
          {{ $t('careers.titleMain') }} <span class="text-gray-400">{{ $t('careers.titleSub') }}</span>
        </h2>
      </div>

      <div class="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm">
        <div v-if="careers && careers.length" class="flex flex-col">

          <div
              v-for="(job, index) in careers"
              :key="job.id"
              class="group flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-gray-100 last:border-0 hover:pl-4 transition-all duration-300 cursor-pointer"
          >
            <div class="mb-4 md:mb-0">
              <h3 class="text-2xl font-bold text-[#001120] mb-2 group-hover:text-blue-600 transition-colors">
                {{ job.title }}
              </h3>
              <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                <span class="flex items-center">
                  <Icon name="i-lucide-calendar" class="w-4 h-4 mr-1.5 text-blue-400" />
                  {{ job.type }}
                </span>
                <span class="flex items-center">
                  <Icon name="i-lucide-map-pin" class="w-4 h-4 mr-1.5 text-blue-400" />
                  {{ job.location }}
                </span>
                <span class="px-2 py-0.5 bg-gray-100 rounded text-xs uppercase tracking-wide">
                  {{ job.department }}
                </span>
              </div>
            </div>

            <div class="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Icon name="i-lucide-arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

        <div v-else class="text-center py-10 text-gray-400">
          Загрузка вакансий...
        </div>

        <div class="mt-8 pt-8 border-t border-gray-100 text-center md:text-left">
          <button class="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-2">
            {{ $t('careers.applyButton') }} (All)
            <Icon name="i-lucide-arrow-right" size="16" />
          </button>
        </div>
      </div>

    </div>
  </section>
</template>