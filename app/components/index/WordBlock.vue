<script setup lang="ts">
const { data } = await useFetch<string[]>("/api/primary-header/services");
</script>

<template>
  <section class="w-full bg-neutral-50 my-10 overflow-hidden">
    <UiVMarquee :duration="70">
      <template #default>
          <template v-for="(item, index) in data" :key="index">
           <div class="flex gap-10 items-center pointer-events-none select-none">
             <span class="text-neutral-300 text-[100px] font-bold">{{ item }}</span>
             <Icon name="lucide:asterisk" class="text-primary-400" size="100"/>
           </div>
          </template>
      </template>
    </UiVMarquee>
  </section>
</template>
