<script setup lang="ts">
const { t } = useI18n()

// Логотипы партнеров (можно заменить на реальные SVG)
const partners = [
  'Forbes', 'Bloomberg', 'TechCrunch', 'Reuters', 'Business Insider'
]
</script>

<template>
  <section class="relative bg-white overflow-hidden pt-10 pb-16 lg:pt-20 lg:pb-24">

    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"/>

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div class="max-w-2xl">

          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-8 border border-blue-100">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"/>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-600"/>
            </span>
            {{ $t('hero.badge') }}
          </div>

          <h1 class="text-5xl lg:text-7xl font-extrabold text-[#001120] leading-[1.1] mb-6 tracking-tight">
            {{ $t('hero.titlePart1') }} <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {{ $t('hero.titlePart2') }}
            </span>
          </h1>

          <p class="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg">
            {{ $t('hero.description') }}
          </p>

          <div class="relative flex flex-col sm:flex-row gap-5 mb-16">

            <div class="absolute -top-12 left-32 hidden lg:block text-gray-300 transform rotate-12">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10,90 Q40,30 90,50" />
                <path d="M80,45 L90,50 L85,60" />
              </svg>
            </div>

            <NuxtLink to="/courses" class="flex group relative z-10 shadow-xl shadow-blue-200/50">
              <span class="bg-blue-600 text-white font-bold py-4 px-8 rounded-l-2xl flex items-center transition-all duration-300 group-hover:bg-blue-700 group-hover:pl-10">
                {{ $t('hero.ctaAcademy') }}
              </span>
              <span class="bg-blue-700 text-white p-4 rounded-r-2xl border-l border-blue-500 flex items-center justify-center transition-colors group-hover:bg-blue-800">
                <Icon name="i-lucide-graduation-cap" class="w-6 h-6" />
              </span>
            </NuxtLink>

            <NuxtLink to="/services" class="flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-gray-100 text-[#001120] font-bold hover:border-blue-600 hover:text-blue-600 transition-all bg-white">
              {{ $t('hero.ctaService') }}
            </NuxtLink>
          </div>

          <div>
            <p class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">
              {{ $t('hero.trustedBy') }}
            </p>
            <div class="flex flex-wrap gap-8 opacity-50 grayscale mix-blend-multiply">
               <span v-for="partner in partners" :key="partner" class="text-xl font-black text-gray-300 hover:text-gray-500 cursor-default transition-colors">
                 {{ partner }}
               </span>
            </div>
          </div>
        </div>

        <div class="relative lg:h-[700px] w-full flex items-center justify-center lg:justify-end">

          <div class="relative w-full max-w-md lg:max-w-lg h-[500px] lg:h-[650px] bg-gray-100 rounded-tl-[80px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[160px] overflow-hidden shadow-2xl">
            <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800&h=1000"
                alt="Professional Accountant"
                class="w-full h-full object-cover object-center"
            >

            <div class="absolute inset-0 bg-gradient-to-t from-[#001120]/60 via-transparent to-transparent"/>
          </div>

          <div class="absolute top-20 -left-6 lg:left-0 bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] animate-bounce-slow border border-gray-100 max-w-[200px]">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Icon name="i-lucide-trophy" size="20" />
              </div>
              <div>
                <p class="text-xs text-gray-500">Academy</p>
                <p class="font-bold text-[#001120] text-sm">Certified</p>
              </div>
            </div>
            <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-green-500 w-[90%] rounded-full"/>
            </div>
          </div>

          <div class="absolute bottom-20 -right-4 lg:right-10 bg-[#001120] text-white p-6 rounded-3xl rounded-tr-none shadow-2xl border border-gray-700">
            <div class="flex items-end gap-4">
              <div>
                <p class="text-4xl font-bold text-blue-500">{{ $t('hero.statValue') }}</p>
                <p class="text-sm text-gray-400">{{ $t('hero.statLabel') }}</p>
              </div>
              <div class="mb-1">
                <Icon name="i-lucide-trending-up" class="w-8 h-8 text-green-400" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}
</style>