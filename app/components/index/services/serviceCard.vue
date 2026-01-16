<script setup lang="ts">
defineProps({
  service: {
    type: Object,
    default: () => ({
      id: 0,
      iconName: 'i-lucide-infinity',
      title: 'Default Service',
      features: ['Feature 1', 'Feature 2'],
      image: '/images/service-placeholder.jpg'
    })
  }
});
</script>

<template>
  <div class=" rounded-tl-3xl rounded-br-3xl  ring-1 ring-gray-200 flex flex-col h-full overflow-hidden group hover:ring-blue-600 transition-all">

    <div class="p-6 flex-grow">

      <div class="mb-5 text-blue-600">
        <Icon :name="service.iconName || 'i-lucide-infinity'" class="w-10 h-10" />
      </div>

      <h3 class="text-gray-900 text-3xl font-semibold  pb-10 italic group-hover:text-blue-600 group-hover:underline transition-all">{{ service.title }}</h3>

      <ul class="space-y-5 text-gray-500">
        <li v-for="(feature, index) in service.features" :key="index" class="flex items-start">
          <Icon name="i-lucide-check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>

    <div class="h-40 bg-gray-100 overflow-hidden m-5 rounded-tl-3xl rounded-br-3xl shadow-sm">
      <img :src="service.image || '/images/service-placeholder.jpg'" :alt="service.title" class="w-full h-full object-cover group-hover:scale-110 transition-all">
    </div>

  </div>
</template>
