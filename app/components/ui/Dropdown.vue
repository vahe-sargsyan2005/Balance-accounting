<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  align: {
    type: String,
    default: 'left', // 'left' | 'right'
  },
  widthClass: {
    type: String,
    default: 'w-64'
  },
  maxHeight: {
    type: String,
    default: ''
  }
})

const { activeDropdown, toggleDropdown, closeAll } = useUi()
const containerRef = ref<HTMLElement | null>(null)

const isOpen = computed(() => activeDropdown.value === props.name)

const handleClickOutside = (e: MouseEvent) => {
  if (isOpen.value && containerRef.value && !containerRef.value.contains(e.target as Node)) {
    closeAll()
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

    <div @click.stop="toggleDropdown(props.name)">
      <slot name="trigger" :is-open="isOpen" />
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
          class="absolute z-[100] mt-2 origin-top rounded-xl bg-white shadow-xl ring-1 ring-black/5 focus:outline-none overflow-hidden"
          :class="[
           align === 'right' ? 'right-0' : 'left-0',
           widthClass
        ]"
      >
        <div
            class="py-1 overflow-y-auto custom-scrollbar"
            :class="maxHeight"
        >
          <slot name="content" :close="closeAll" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>