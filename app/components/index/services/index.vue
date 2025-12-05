<script setup lang="ts">
const { $getLocale} = useI18n()

const locale = $getLocale()

const { data: services } = await useFetch('/api/services', {
  query: { lang: locale },
  transform: (data) => data,
  key: `services-list-${locale}`,
})
</script>
<template>
  <section id="services" class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto">

      <div class="flex justify-between items-center mb-12 md:mb-16">
        <div>
          <div class="flex items-center mb-5 text-blue-600">
            <Icon name="i-lucide-chevron-right" :size="30"/>
            <p class="uppercase tracking-widest">{{ $t('services.sectionPretitle') }}</p>
          </div>

          <h2 class="text-6xl font-bold text-gray-900 mb-10">
            {{ $t('services.sectionTitle1') }}<br>
            <span class="text-gray-500">{{ $t('services.sectionTitle2') }}</span>
          </h2>
        </div>

        <NuxtLink
            to="/services"
            class="flex gap-1"
        >
          <button class="flex items-center rounded-bl-3xl  rounded-tr-3xl bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 transition-colors">
            {{ $t('services.viewAllButton') }}
          </button>
          <button class="flex items-center rounded-tl-3xl  rounded-br-3xl bg-blue-600 hover:bg-blue-700 text-white font-medium p-4 transition-colors">
            <Icon name="i-lucide-arrow-right" class="w-5 h-5" />
          </button>
        </NuxtLink>
      </div>

      <div v-if="services && services.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <IndexServicesServiceCard
            v-for="service in services"
            :key="service.id"
            :service="service"
        />
      </div>

      <div v-else class="text-center py-10 text-red-500">
        <Icon name="i-lucide-alert-triangle" class="w-8 h-8 mx-auto mb-2" />
        <p>{{ $t('common.errorLoading') }}</p>
      </div>

    </div>
  </section>
</template>
