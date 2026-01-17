<script setup lang="ts">
import type { ITeamMember } from '~/types/team'

defineProps<{
  member: ITeamMember
}>()
</script>

<template>
  <div class="bg-white rounded-[2rem] p-6 transition-all duration-300 hover:shadow-xl group h-full flex flex-col">
    <div class="mb-8 flex justify-center">
      <div class="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-50 group-hover:border-blue-50 transition-colors duration-300">
        <img
            :src="member.image"
            :alt="member.name"
            class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
        >
      </div>
    </div>

    <div class="mt-auto flex justify-between items-end">
      <div>
        <h3 class="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
          {{ member.name }}
        </h3>
        <p class="text-xs text-gray-500 uppercase tracking-wider font-medium">
          {{ member.position }}
        </p>
      </div>

      <a
          :href="member.facebookUrl"
          target="_blank"
          class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 rotate-0 group-hover:-rotate-45"
      >
        <Icon name="i-lucide-arrow-right" size="18" />
      </a>
    </div>
  </div>
</template>