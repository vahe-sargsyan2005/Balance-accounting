<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <a
      v-for="link in appConfig.social"
      :key="link.name"
      :href="link.href"
      target="_blank"
      rel="noopener"
  >
    <UiVButton variant="soft" color="apache" rounded="full" size="sm">
      <Icon :name="link.icon" class="size-4" />
    </UiVButton>
  </a>
</template>
