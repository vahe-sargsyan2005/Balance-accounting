<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  type?: "button" | "submit" | "reset",
  variant?: "solid" | "soft",
  color?: "apache" | "green" | "blue",
  size?: "sm" | "md" | "lg",
  rounded?: "sm" | "md" | "lg" | "full"
}>()

const emit = defineEmits({
  click: null
})

const btnSize = computed(() => {
  if (props.rounded === 'full') {
    switch (props.size) {
      case 'sm': return 'p-2 text-sm'
      case 'lg': return 'p-4 text-lg'
      default: return 'p-3 text-base'
    }
  } else {
    switch (props.size) {
      case 'sm': return 'px-3 py-1 text-sm'
      case 'lg': return 'px-6 py-3 text-lg'
      default: return 'px-4 py-2 text-base'
    }
  }
})

const btnRounded = computed(() => {
  switch (props.rounded) {
    case "sm": return "rounded-sm"
    case "lg": return "rounded-lg"
    case "full": return "rounded-full"
    default: return "rounded-md"
  }
})

const colors = {
  apache: { solid: 'bg-apache-500 text-white hover:bg-apache-600', soft: 'bg-apache-500/20 text-apache-500 hover:bg-apache-500/30' },
  green: { solid: 'bg-green-500 text-white hover:bg-green-600', soft: 'bg-green-500/20 text-green-500 hover:bg-green-500/30' },
  blue: { solid: 'bg-blue-500 text-white hover:bg-blue-600', soft: 'bg-blue-500/20 text-blue-500 hover:bg-blue-500/30' }
}

const btnColor = computed(() => colors[props.color || 'apache'][props.variant || 'solid'])
</script>

<template>
  <button
      :type="props.type || 'button'"
      :class="[btnSize, btnRounded, 'transition-colors flex items-center justify-center gap-2', btnColor]"
      @click="emit('click')"
  >
    <slot />
  </button>
</template>
