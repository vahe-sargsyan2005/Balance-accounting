<script setup lang="ts">
import { gsap } from 'gsap'

const showStickyHeader = ref(false)

onMounted(() => {
  const header = document.querySelector('.main-header')
  const sticky = document.querySelector('.sticky-header')

  const headerHeight = header?.offsetHeight

  const handleScroll = () => {
    const scrollY = window.scrollY

    if (scrollY > headerHeight + 80) {
      if (!showStickyHeader.value) {
        showStickyHeader.value = true
        gsap.fromTo(
            sticky,
            { y: -60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
        )
      }
    } else if (showStickyHeader.value) {
      showStickyHeader.value = false
      gsap.to(sticky, { y: -60, opacity: 0, duration: 0.4, ease: 'power2.in' })
    }
  }

  window.addEventListener('scroll', handleScroll)
  onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<template>
  <div class="relative">
    <header class="main-header w-full z-50">
      <div class="container mx-auto px-3 py-8">
        <div class="text-xl font-semibold text-white flex items-center gap-1"><Icon name="lucide:scale" :size="40" class="text-primary-200"/> <span class="leading-none text-3xl">BALANCE</span></div>
      </div>
    </header>

    <header
        v-show="showStickyHeader"
        class="sticky-header fixed top-0 left-0 w-full bg-mirage-950 z-50"
    >
      <div class="container mx-auto px-3 py-4">
        <div class="text-xl font-semibold text-white flex items-center gap-1"><Icon name="lucide:scale" :size="40" class="text-primary-200"/> <span class="leading-none text-3xl">BALANCE</span></div>
      </div>
    </header>
  </div>
</template>

<style scoped>
.sticky-header {
  pointer-events: none;
  transform: translateY(-60px);
}
</style>
