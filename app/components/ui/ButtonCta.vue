<script setup lang="ts">
defineProps<{
  to: string
  text: string
}>()
</script>

<template>
  <NuxtLinkLocale :to="to" class="flex group">
    <span class="bg-blue-600 text-white font-bold py-3.5 px-8 rounded-l-2xl rounded-tr-none flex items-center transition-all duration-300 group-hover:bg-blue-700 group-hover:pl-10">
      {{ text }}
    </span>
    <span class="bg-blue-600 text-white p-3.5 rounded-r-2xl rounded-bl-none border-l border-blue-500/50 flex items-center justify-center transition-colors group-hover:bg-blue-700">
      <Icon name="i-lucide-arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </span>
  </NuxtLinkLocale>
</template>