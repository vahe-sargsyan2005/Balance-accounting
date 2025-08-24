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
      @input="onInput"
      class="px-3 py-2 bg-neutral-200 text-black rounded-l-md focus:outline-none w-full"
  />
</template>
