<script setup lang="ts">
import gsap from 'gsap'

const showButton = ref(false)
const buttonRef = ref<HTMLElement | null>(null)

const scrollToTop = () => {
  gsap.to(window, { scrollTo: 0, duration: 1, ease: "power2.inOut" })
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    showButton.value = window.scrollY > 50
  })
})

watch(showButton, (val) => {
  if (!buttonRef.value) return
  if (val) {
    gsap.to(buttonRef.value, { opacity: 1, y: 0, duration: 0.3, pointerEvents: 'auto' })
  } else {
    gsap.to(buttonRef.value, { opacity: 0, y: 20, duration: 0.3, pointerEvents: 'none' })
  }
})
</script>

<template>
  <button
      id="scroll-to-top"
      ref="buttonRef"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 w-14 h-14 z-50 rounded-full bg-primary-400 text-white flex items-center justify-center shadow-lg cursor-pointer"
      style="opacity: 0; transform: translateY(20px); pointer-events: none;"
  >
    <Icon name="lucide:arrow-up" class="size-5"/>
  </button>
</template>
