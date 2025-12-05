<template>
  <div class="text-white p-10 flex flex-col justify-between border border-gray-700 rounded-tr-3xl rounded-bl-3xl h-full">
    <div class="mb-10">
      <Icon name="i-lucide-quote" class="w-12 h-12 text-blue-400 mb-5" />
      <div class="h-[100px]">
        <p class="text-2xl italic line-clamp-3">{{ review.text }}</p>
      </div>
    </div>

    <div class="flex items-center pt-10 border-t border-gray-700 mt-auto">
      <div class="w-20 h-20 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-gray-800">
        <img :src="review.avatar" :alt="review.author" class="w-full h-full object-cover" />
      </div>
      <div>
        <p class="text-3xl font-semibold italic">{{ review.author }}</p>
        <p class="text-gray-500">{{ review.title }}</p>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { type IReview } from '~/types/testimonials';

defineProps({
  review: {
    type: Object as PropType<IReview>,
    required: true,
  },
});
</script>