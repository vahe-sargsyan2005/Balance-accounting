<script setup lang="ts">
import gsap from "gsap";

interface Props {
  duration?: number;
}

const props = defineProps<Props>();
const marqueeRef = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;

const initAnimation = async () => {
  await nextTick();

  if (!marqueeRef.value) return;

  ctx?.revert();

  ctx = gsap.context(() => {
    gsap.to(marqueeRef.value, {
      xPercent: -50,
      duration: props.duration || 30,
      ease: "linear",
      repeat: -1,
    });
  });
};

onMounted(initAnimation);

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>

<template>
  <div class="overflow-hidden w-full">
    <div
        ref="marqueeRef"
        class="flex gap-10 whitespace-nowrap w-max"
    >
      <div v-for="i in 2" :key="i" class="flex gap-10">
        <slot>
          <span class="font-bold text-2xl">Default Item</span>
        </slot>
      </div>
    </div>
  </div>
</template>
