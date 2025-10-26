<script setup lang="ts">
const { global, social } = useAppConfig()
</script>

<template>
  <section
      id="alt-bar"
      class="bg-secondary-900 text-sm text-zinc-200 sticky"
  >
    <div
        class="container mx-auto flex flex-wrap items-center justify-between gap-3 py-3 px-3"
    >
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4">
        <a
            :href="'tel:' + global.phone"
            class="text-primary-200 font-bold"
        >
          {{ global.phone }}
        </a>

        <a
            :href="'mailto:' + global.email"
            class="hidden md:block hover:text-primary-200 transition-colors"
        >
          {{ global.email }}
        </a>
      </div>

      <div class="flex items-center">
        <a
            v-for="link in social"
            :key="link.name"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group py-1 px-2 rounded-md transition-colors flex items-center"
        >
          <Icon
              :name="link.icon"
              class="size-4 group-hover:text-primary-200"
          />
        </a>
      </div>
    </div>
  </section>
</template>
