<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  placeholder?: string
}>()

const emit = defineEmits({
  "update:modelValue": (value: string) => true
})

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <input
      type="email"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      class="px-3 py-2 placeholder-neutral-400"
      @input="onInput"
  >
</template>
