<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  align: {
    type: String,
    default: 'left',
    validator: (value: string) => ['left', 'right'].includes(value)
  },
  widthClass: {
    type: String,
    default: 'w-64'
  }
})

const emit = defineEmits(['toggle', 'close'])

const containerRef = ref<HTMLElement | null>(null)

const handleClickOutside = (e: MouseEvent) => {
  if (props.isOpen && containerRef.value && !containerRef.value.contains(e.target as Node)) {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="containerRef" class="relative inline-block text-left">
    <div @click.stop="emit('toggle')">
      <slot name="trigger" />
    </div>

    <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 scale-95 translate-y-[-10px]"
        enter-to-class="transform opacity-100 scale-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="transform opacity-100 scale-100 translate-y-0"
        leave-to-class="transform opacity-0 scale-95 translate-y-[-10px]"
    >
      <div
          v-if="isOpen"
          class="absolute z-[100] mt-3 origin-top rounded-2xl bg-white shadow-xl ring-1 ring-black/5 focus:outline-none overflow-hidden"
          :class="[
           align === 'right' ? 'right-0' : 'left-0',
           widthClass
        ]"
      >
        <div class="py-1">
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>