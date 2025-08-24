<script setup lang="ts">
import type { FooterSection } from '~/types/footer'
defineProps<{ section: FooterSection }>()
</script>

<template>
  <div>
    <h6 class="font-bold text-lg mb-3">{{ section.title }}</h6>
    <ul class="text-neutral-400 space-y-1">
      <li v-for="link in section.links" :key="link.href">
        <UiVLink :href="link.href" size="sm">{{ link.label }}</UiVLink>
      </li>
    </ul>
  </div>
</template>

