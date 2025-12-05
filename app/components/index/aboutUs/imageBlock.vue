<template>
  <div class="relative w-full lg:h-full bg-gray-100 shadow-xl overflow-hidden about-us-image-clip-path">

    <NuxtImg
        src="images/about-us.png"
        format="webp"
        alt="Сотрудники Horqur Consulting обсуждают стратегию"
        class="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
    />

    <div class="absolute bottom-6 left-6 p-5 bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl border border-gray-200 text-gray-800">
      <div class="flex justify-between items-center mb-1 gap-5">
        <span class="text-sm">Current APY</span>
        <span class="text-lg font-bold text-green-600">4.75%</span>
      </div>
      <div class="flex justify-between items-center mb-3 gap-5">
        <span class="text-sm">Total Interest Earned</span>
        <span class="text-lg font-bold text-green-600">$532.87</span>
      </div>
      <div class="p-3 bg-blue-50 rounded-md">
        <p class="text-xs text-gray-500">Your Cash Reserve</p>
        <p class="text-2xl font-extrabold text-blue-700">$14,952.00</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-us-image-clip-path {
  clip-path: polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%);
}
</style>