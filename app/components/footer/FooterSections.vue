<script setup lang="ts">
import type { FooterApiResponse } from '~/types/footer'

const { data: footerData } = await useFetch<FooterApiResponse>('/api/footer/links')
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
    <FooterSection v-for="section in footerData?.sections" :key="section.title" :section="section" />
  </div>
</template>

