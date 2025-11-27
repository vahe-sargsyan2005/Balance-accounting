<script setup lang="ts">
const email = ref('')

const subscribe = () => {
  if (!email.value) return alert('Մուտքագրեք ձեր էլ․ հասցեն։')
  alert(`Շնորհակալություն, դուք բաժանորդագրվեցիք: ${email.value}`)
  email.value = ''
}
</script>

<template>
  <div class="flex gap-2 items-center ring-2 rounded-full ring-primary-200 overflow-hidden bg-primary-300/20">
    <div class="flex h-full">
      <UiInput v-model="email" placeholder="Մուտքագրեք էլ․ հասցե" class="bg-transparent" />
      <UiButton @click="subscribe" type="submit" variant="solid" color="primary" class="rounded-l-full">Բաժանորդագրվել</UiButton>
    </div>
  </div>
</template>
