<script setup lang="ts">
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollSmoother)

onMounted(async () => {
  await nextTick()

  const wrapper = document.querySelector('#smooth-wrapper')
  const content = document.querySelector('#smooth-content')

  if (!wrapper || !content) return

  ScrollSmoother.create({
    wrapper,
    content,
    smooth: 1.2,
    effects: true
  })
})
</script>

<template>
  <div>
    <AppHeader/>

    <div id="smooth-wrapper" class="relative">
      <div id="smooth-content" class="flex flex-col min-h-screen">


        <main class="flex-1 w-full">
          <slot />
        </main>

        <AppFooter/>
      </div>
    </div>
  </div>
</template>
