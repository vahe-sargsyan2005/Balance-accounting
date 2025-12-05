<template>
  <div>
    <div class="flex items-center mb-5 opacity-50">
      <Icon name="i-lucide-chevron-right" :size="30"/>
      <p class="uppercase tracking-widest">{{ $t('aboutUs.sectionTitle') }}</p>
    </div>

    <h2 class="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-10">
      {{ $t('aboutUs.mainHeading1') }} <span class="text-gray-400">{{ $t('aboutUs.mainHeading2') }}</span>
    </h2>

    <p class="text-gray-600 mb-10">
      {{ $t('aboutUs.description') }}
    </p>

    <hr class="mb-10"/>

    <IndexAboutUsTrustedMarquee/>
  </div>
</template>