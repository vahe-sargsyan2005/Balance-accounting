<script setup lang="ts">
import { computed } from 'vue'
import { useAttrs } from 'vue'

const props = defineProps<{
  href: string
  icon?: string
  label?: string
  variant?: "solid" | "soft"
  color?: "primary" | "green" | "blue"
  size?: "sm" | "md" | "lg"
}>();

const attrs = useAttrs();

const linkSize = computed(() => {
    switch (props.size) {
      case 'sm': return 'text-sm'
      case 'lg': return 'text-lg'
      default: return 'text-base'
    }
});

const colors = {
  primary: { solid: 'text-apache-600 underline hover:text-apache-300', soft: 'text-apache-500/20 text-apache-500 hover:text-apache-500/30' },
  green: { solid: 'bg-green-500 text-white hover:bg-green-600', soft: 'bg-green-500/20 text-green-500 hover:bg-green-500/30' },
  blue: { solid: 'bg-blue-500 text-white hover:bg-blue-600', soft: 'bg-blue-500/20 text-blue-500 hover:bg-blue-500/30' }
}

const linkColor = computed(() => colors[props.color || 'primary'][props.variant || 'solid'])
</script>

<template>
  <a
      :href="props.href"
      v-bind="attrs"
      class="inline-flex items-center justify-center gap-2 transition-colors"
      :class="[linkSize, linkColor]"
  >
    <Icon v-if="props.icon" :name="props.icon" class="size-4" />
    <p class="text-inherit"><slot /></p>
  </a>
</template>
