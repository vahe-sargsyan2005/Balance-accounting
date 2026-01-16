<script setup lang="ts">
import type { ICourse } from '~/types/course'

const route = useRoute()
const { locale } = useI18n()
const currentLang = computed(() => locale.value)

const { data: courses } = await useFetch<ICourse[]>('/api/courses', {
  query: { lang: currentLang },
  watch: [() => route.path],
  key: 'courses-list'
})
</script>

<template>
  <section id="courses" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4 md:px-8">

      <div class="mb-16">
        <div class="flex items-center mb-5 text-gray-500 uppercase tracking-widest text-sm font-medium">
          <Icon name="i-lucide-graduation-cap" class="text-blue-600 mr-2" :size="20" />
          <p>{{ $t('courses.label') }}</p>
        </div>
        <h2 class="text-4xl md:text-6xl font-bold text-[#001120]">
          {{ $t('courses.titleMain') }} <span class="text-blue-600">{{ $t('courses.titleSub') }}</span>
        </h2>
      </div>

      <div v-if="courses" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
            v-for="course in courses"
            :key="course.id"
            class="group bg-gray-50 rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          <div class="h-56 overflow-hidden relative">
            <img
                :src="course.image"
                :alt="course.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-900 uppercase">
              {{ course.level }}
            </div>
          </div>

          <div class="p-8 flex-1 flex flex-col">
            <div class="mb-auto">
              <h3 class="text-2xl font-bold text-[#001120] mb-3 group-hover:text-blue-600 transition-colors">
                {{ course.title }}
              </h3>
              <p class="text-gray-500 mb-6 line-clamp-2">
                {{ course.description }}
              </p>
            </div>

            <div class="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
              <div>
                <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Duration</p>
                <p class="font-semibold text-[#001120]">{{ course.duration }}</p>
              </div>
              <div class="text-right">
                <p class="text-xl font-bold text-blue-600">{{ course.price }}</p>
              </div>
            </div>

            <button class="w-full mt-6 bg-white border border-gray-200 text-[#001120] py-3 rounded-xl font-bold group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
              {{ $t('courses.enrollButton') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>