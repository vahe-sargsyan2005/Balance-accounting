<script setup lang="ts">
defineProps<{
  type?: "button" | "submit" | "reset"
}>()

const emit = defineEmits({
  click: null
})
</script>

<template>
  <button
      type="button"
      @click="emit('click')"
      class="px-4 py-2 bg-apache-500 hover:bg-apache-600 transition-colors rounded-md text-white"
  >
    <slot />
  </button>
</template>
