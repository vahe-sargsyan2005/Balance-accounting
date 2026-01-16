<script setup lang="ts">
import type { ITeamMember } from '~/types/team'

const route = useRoute()
const { t, locale } = useI18n()

// Безопасное получение локали для запроса
const currentLang = computed(() => locale.value)

const { data: teamMembers } = await useFetch<ITeamMember[]>('/api/team', {
  query: { lang: currentLang },
  watch: [() => route.path], // Следим за сменой языка
  key: 'team-list'
})
</script>

<template>
  <section id="team" class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4 md:px-8">

      <div class="mb-16 text-center md:text-left">
        <div class="flex items-center justify-center md:justify-start mb-5 text-gray-500 uppercase tracking-widest text-sm font-medium">
          <Icon name="i-lucide-chevron-right" class="text-blue-600 mr-2" :size="20" />
          <p>{{ $t('team.label') }}</p>
        </div>

        <h2 class="text-4xl md:text-6xl font-bold text-gray-900">
          {{ $t('team.titleMain') }} <span class="text-gray-400">{{ $t('team.titleSub') }}</span>
        </h2>
      </div>

      <div v-if="teamMembers && teamMembers.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <teamMemberCard
            v-for="member in teamMembers"
            :key="member.id"
            :member="member"
        />
      </div>

      <div v-else class="text-center py-10 text-gray-400">
        Загрузка данных...
      </div>

    </div>
  </section>
</template>