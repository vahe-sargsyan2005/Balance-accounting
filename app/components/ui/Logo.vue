<script setup lang="ts">
const { global } = useAppConfig()
    </script>

<template>
  <NuxtLinkLocale to="/" class="flex items-center gap-3 z-50 relative group">
    <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-blue-600/20">
      <Icon name="i-lucide-zap" size="24" class="fill-current" />
    </div>
    <span class="text-2xl font-extrabold text-[#001120] tracking-tight group-hover:text-blue-600 transition-colors">
      {{ global.name }}
    </span>
  </NuxtLinkLocale>
</template>