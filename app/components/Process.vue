<script setup lang="ts">
// Иконки для каждого шага
const steps = [
  { icon: 'i-lucide-search', key: '1' },
  { icon: 'i-lucide-pen-tool', key: '2' },
  { icon: 'i-lucide-layers', key: '3' },
  { icon: 'i-lucide-rocket', key: '4' },
]
</script>

<template>
  <section id="process" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4 md:px-8">

      <div class="text-center mb-20 max-w-3xl mx-auto">
        <div class="flex items-center justify-center mb-5 text-gray-500 uppercase tracking-widest text-sm font-medium">
          <Icon name="i-lucide-git-commit" class="text-blue-600 mr-2" :size="20" />
          <p>{{ $t('process.label') }}</p>
        </div>
        <h2 class="text-4xl md:text-6xl font-bold text-[#001120]">
          {{ $t('process.titleMain') }} <span class="text-blue-600">{{ $t('process.titleSub') }}</span>
        </h2>
      </div>

      <div class="relative grid grid-cols-1 md:grid-cols-4 gap-8">

        <div class="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-gray-200 z-0"></div>

        <div
            v-for="(step, index) in steps"
            :key="index"
            class="relative z-10 flex flex-col items-center text-center group"
        >
          <div class="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:border-blue-600 group-hover:scale-110 transition-all duration-300">
            <div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              <Icon :name="step.icon" class="text-gray-400 group-hover:text-blue-600 w-8 h-8 transition-colors" />
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">
              {{ index + 1 }}
            </div>
          </div>

          <h3 class="text-xl font-bold text-[#001120] mb-3">
            {{ $t(`process.steps.${step.key}.title`) }}
          </h3>
          <p class="text-gray-500 text-sm leading-relaxed px-4">
            {{ $t(`process.steps.${step.key}.desc`) }}
          </p>
        </div>

      </div>
    </div>
  </section>
</template>