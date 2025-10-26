<script setup lang="ts">
import gsap from 'gsap'

const progress = ref(0)
const buttonRef = ref<HTMLElement | null>(null)

const scrollToTop = () => {
  gsap.to(window, { scrollTo: 0, duration: 1, ease: 'power2.inOut' })
}

const updateProgress = () => {
  const scroll = window.scrollY
  const height = document.body.scrollHeight - window.innerHeight
  progress.value = scroll / height

  if (!buttonRef.value) return

  if (scroll > 50) {
    gsap.to(buttonRef.value, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' })
  } else if (scroll === 0) {
    gsap.to(buttonRef.value, { opacity: 0, y: 50, duration: 0.3, ease: 'power2.in' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress)
  updateProgress()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<template>
  <button
      ref="buttonRef"
      class="fixed bottom-8 right-8 w-14 h-14 rounded-full z-50 flex items-center justify-center p-0.5 group"
      :style="{
      border: '4px solid transparent',
      borderRadius: '50%',
      backgroundImage: `conic-gradient(#b9f8b1 ${progress*360}deg, rgba(255,255,255,0.1) ${progress*360}deg)`,
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      boxSizing: 'border-box',
      opacity: 0,
      transform: 'translateY(50px)'
    }"
      @click="scrollToTop"
  >
    <span class="flex items-center justify-center w-full h-full rounded-full bg-zinc-900">
      <Icon name="lucide:arrow-up" class="text-white  group-hover:text-primary-200 size-5"/>
    </span>
  </button>
</template>
