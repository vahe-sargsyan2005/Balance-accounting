<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const active = ref(null)

const toggle = (i) => {
  active.value = active.value === i ? null : i
}
</script>

<style scoped>
@keyframes accordion {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-accordion {
  animation: accordion 0.25s ease-out;
}
</style>


<template>
  <div class="space-y-4">
    <div v-for="(item, i) in items" :key="i"
         class="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden transition-all">

      <button
          @click="toggle(i)"
          class="w-full flex items-center justify-between px-6 py-4 text-left text-white font-medium hover:bg-slate-750 transition-colors"
      >
        <span>{{ item.question }}</span>

        <svg
            :class="['w-5 h-5 transition-transform duration-300', active === i ? 'rotate-180' : 'rotate-0']"
            fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
          v-show="active === i"
          class="px-6 pb-4 text-slate-300 text-base leading-relaxed animate-accordion"
      >
        {{ item.answer }}
      </div>
    </div>
  </div>
</template>