
<script setup lang="ts">
import { type IReview } from '~/types/testimonials';

const { locale } = useI18n();


const { data: reviews } = await useFetch<IReview[]>('/api/testimonials', {
  query: { lang: locale.value },
  key: `testimonials-list-${locale.value}`,
});
</script>


<template>
  <section id="testimonials" class="py-16 md:py-24 bg-gray-900 text-white">
    <div class="container mx-auto">
      <div class="mb-12 md:mb-16">
        <div class="flex items-center mb-5 text-blue-400">
          <Icon name="i-lucide-chevron-right" :size="30"/>
          <p class="uppercase tracking-widest">{{ $t('testimonials.sectionTitle') }}</p>
        </div>
        <h2 class="text-6xl font-bold mb-10">
          {{ $t('testimonials.mainHeading') }}<br>
          <span class="text-gray-500">  {{ $t('testimonials.mainHeading2') }}</span>
        </h2>
      </div>
      <IndexTestimonialsCarousel
          v-if="reviews && reviews.length"
          :reviews="reviews"
      />
    </div>
  </section>
</template>
