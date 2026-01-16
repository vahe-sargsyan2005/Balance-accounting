<template>
  <div class="flex flex-col items-center text-center">

    <p class="text-6xl font-extrabold text-gray-900 mb-2">
      <span class="text-blue-600">{{ prefix }}</span>
      <span class="count-up">{{ animatedCount.toLocaleString() }}</span>
      <span class="text-blue-600">{{ suffix }}</span>
    </p>

    <p class="text-gray-500 max-w-xs">{{ description ?? '' }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
  prefix: {
    type: String,
    default: '',
  },
  suffix: {
    type: String,
    default: '',
  },
  description: {
    required: true,
  },
})

const animatedCount = ref(0);
const duration = 1000;

const animate = () => {
  const start = 0;
  const end = props.count;
  const startTime = performance.now();

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(1, elapsed / duration);

    const easedProgress = progress * progress;

    animatedCount.value = Math.floor(easedProgress * (end - start) + start);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      animatedCount.value = end;
    }
  };

  requestAnimationFrame(step);
};

onMounted(() => {
  animate();
});

watch(() => props.count, () => {
  animate();
});
</script>