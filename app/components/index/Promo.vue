<script setup lang="ts">
const achievements = [
  {
    year: '2005',
    text: 'Հիմնադրվել է փոքր բիզնեսների հարկային օպտիմալացման ուղղությամբ կենտրոնացած նպատակով։'
  },
  {
    year: '2015',
    text: 'Ընդլայնվել է՝ ստարտափերի համար ֆինանսական խորհրդատվական (CFO Advisory) ծառայություններ մատուցելով։'
  },
  {
    year: '2024',
    text: '«Forbes»-ի կողմից ճանաչվել է որպես Տարվա լավագույն 50 հաշվապահական ընկերություններից մեկը։'
  }
]
</script>

<template>
  <section id="promo" class="bg-mirage-950 text-white py-6 border-mirage-900">
    <div class="container mx-auto px-3">
      <div class="flex flex-col sm:flex-row gap-5 justify-between">
        <div
            v-for="(item, index) in achievements"
            :key="index"
            class="flex flex-col sm:flex-1 sm:items-center"
        >
          <span class="text-4xl font-semibold text-primary-200">{{ item.year }}</span>
          <p class="text-gray-300 mt-3 sm:max-w-xs text-center">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
