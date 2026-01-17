<script setup lang="ts">
const isOpen = ref(false)
const containerRef = ref<HTMLElement | null>(null)

const closeDropdown = (e: MouseEvent) => {
  if (isOpen.value && containerRef.value && !containerRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

const close = () => {
  isOpen.value = false
}

const toggle = () => {
  isOpen.value = !isOpen.value
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<template>
  <div ref="containerRef" class="relative inline-block text-left">
    <div @click.stop="toggle">
      <slot name="trigger" :is-open="isOpen" />
    </div>

    <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
    >
      <div
          v-if="isOpen"
          class="absolute right-0 z-[100] mt-2 w-48 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-1"
      >
        <slot name="content" :close="close" />
      </div>
    </transition>
  </div>
</template>