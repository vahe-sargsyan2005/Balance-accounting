<script setup lang="ts">
const email = ref('')

const subscribe = () => {
  if (!email.value) return alert('Մուտքագրեք ձեր էլ․ հասցեն։')
  alert(`Շնորհակալություն, դուք բաժանորդագրվեցիք: ${email.value}`)
  email.value = ''
}
</script>

<template>
  <div class="flex gap-2 items-center">
    <div class="flex bg-neutral-200 rounded-md overflow-hidden">
      <UiInput v-model="email" placeholder="Մուտքագրեք էլ․ հասցե" />
      <button @click="subscribe">Բաժանորդագրվել</button>
    </div>
  </div>
</template>
