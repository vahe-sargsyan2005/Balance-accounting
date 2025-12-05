<script setup>
const { data: companies } = await useFetch('/api/companies')
</script>

<template>
  <h3 class="text-3xl font-semibold text-gray-900 pb-10 italic">{{ $t('aboutUs.trustedTitle') }}</h3>
  <div class="marquee-container overflow-hidden whitespace-nowrap mb-20" aria-hidden="true">
    <div class="marquee-content inline-block">

      <div class="logos-group inline-flex items-center gap-10 lg:gap-16">
        <template v-for="item in companies" :key="item.name">
          <img
              :src="item.logo"
              :alt="item.name"
              class="logo-item max-h-10 opacity-70 grayscale hover:grayscale-0 w-auto"
          >
        </template>
      </div>

      <div class="logos-group inline-flex items-center gap-10 lg:gap-16 ml-10 lg:ml-16">
        <template v-for="item in companies" :key="item.name + '-2'">
          <img
              :src="item.logo"
              :alt="item.name"
              class="logo-item max-h-10 opacity-70 grayscale hover:grayscale-0 w-auto"
          >
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee-content {
  animation: scroll-left 30s linear infinite;
}

.marquee-content:hover {
  animation-play-state: paused;
}
</style>
