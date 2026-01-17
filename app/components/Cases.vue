<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation'; // Если нужны стрелки
import { Navigation } from 'swiper/modules';
import type { ICaseStudy } from '~/types/case'

const route = useRoute()
const { locale } = useI18n()
const currentLang = computed(() => locale.value)

const { data: cases } = await useFetch<ICaseStudy[]>('/api/cases', {
  query: { lang: currentLang },
  watch: [() => route.path],
  key: 'cases-list'
})
</script>

<template>
  <section id="cases" class="py-16 md:py-24 bg-[#001120] text-white overflow-hidden">
    <div class="container mx-auto px-4 md:px-8">

      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <div class="flex items-center mb-5 text-blue-500 uppercase tracking-widest text-sm font-medium">
            <Icon name="i-lucide-folder-open" class="mr-2" :size="20" />
            <p>{{ $t('cases.label') }}</p>
          </div>
          <h2 class="text-4xl md:text-6xl font-bold text-white">
            {{ $t('cases.titleMain') }} <span class="text-gray-600">{{ $t('cases.titleSub') }}</span>
          </h2>
        </div>

      </div>

      <div v-if="cases">
        <Swiper
            :modules="[Navigation]"
            :space-between="30"
            :slides-per-view="1"
            :breakpoints="{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 2.5 }
          }"
            class="!overflow-visible"
        >
          <SwiperSlide v-for="item in cases" :key="item.id">
            <div class="group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer">
              <img
                  :src="item.image"
                  :alt="item.title"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"/>

              <div class="absolute bottom-0 left-0 p-8 w-full">
                <div class="flex justify-between items-end">
                  <div>
                    <span class="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-4">
                      {{ item.category }}
                    </span>
                    <h3 class="text-2xl font-bold mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                      {{ item.title }}
                    </h3>
                    <p class="text-gray-400 text-sm mb-4">{{ item.client }}</p>

                    <div class="inline-block border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                      <p class="text-green-400 font-bold">{{ item.result }}</p>
                    </div>
                  </div>

                  <div class="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Icon name="i-lucide-arrow-up-right" size="24" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  </section>
</template>