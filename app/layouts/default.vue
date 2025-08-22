<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col min-h-dvh">
    <AppHeader/>

    <main class="flex-1 w-full">
      <slot/>
    </main>

    <AppFooter/>
  </div>
</template>

<style scoped>

</style>