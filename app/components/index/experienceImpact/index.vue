<template>
  <section id="experience-impact" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto">
      <div class="relative pt-12 pb-10 px-4 md:px-10 lg:px-16 border rounded-3xl">
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div class="flex items-center bg-white border border-gray-200 py-2 px-10 rounded-full text-gray-600 uppercase tracking-wider">
            <Icon name="i-lucide-sparkles" :size="30" class="text-blue-600 mr-2" />
            <p>{{ $t('experience.sectionTitle') }}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:divide-x divide-gray-200 ">

          <IndexExperienceImpactStatCard
              :count="9500"
              prefix=""
              suffix="+"
              :description="$t('experience.projectsDesc')"
          />

          <IndexExperienceImpactStatCard
              :count="1500"
              prefix=""
              suffix="+"
              :description="$t('experience.teamDesc')"
          />

          <IndexExperienceImpactStatCard
              :count="700"
              prefix=""
              suffix="%"
              :description="$t('experience.partnersDesc')"
          />

        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>