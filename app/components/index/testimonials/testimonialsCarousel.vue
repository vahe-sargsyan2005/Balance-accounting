<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import type { IReview } from '~/types/testimonials';

defineProps({
  reviews: {
    type: Array as PropType<IReview[]>,
    required: true,
  },
});
</script>

<template>
  <Swiper
      :slides-per-view="2"
      :space-between="40"
      :loop="true"
      :autoplay="{ delay: 0, disableOnInteraction: false }"
      class="testimonial-swiper"
  >
    <SwiperSlide v-for="review in reviews" :key="review.id" class="flex">
      <IndexTestimonialsTestimonialCard :review="review" class="flex-1 h-full" />
    </SwiperSlide>
  </Swiper>
</template>