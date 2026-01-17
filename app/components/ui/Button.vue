<script setup lang="ts">
import { computed, useAttrs } from 'vue'

interface Props {
  to?: string
  href?: string
  target?: '_blank' | '_self'
  type?: 'button' | 'submit' | 'reset'

  label?: string
  icon?: string

  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white'
  mode?: 'solid' | 'split' | 'icon-only'
  shape?: 'default' | 'pill' | 'square' | 'circle'
  size?: 'sm' | 'md' | 'lg' | 'xl'

  loading?: boolean
  disabled?: boolean
  block?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  mode: 'solid',
  shape: 'default',
  size: 'md',
  type: 'button'
})

const componentTag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const baseClasses = computed(() => {
  return [
    'relative inline-flex items-center justify-center transition-all duration-300 font-bold focus:outline-none select-none',
    props.disabled || props.loading ? 'opacity-60 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
    props.block ? 'w-full flex' : '',
    props.mode === 'split' ? 'gap-1.5 group' : 'gap-2'
  ]
})

const sizeClasses = computed(() => {
  if (props.mode === 'split') return ''

  if (props.mode === 'icon-only') {
    switch (props.size) {
      case 'sm': return 'w-8 h-8 text-xs'
      case 'lg': return 'w-14 h-14 text-lg'
      case 'xl': return 'w-16 h-16 text-xl'
      default: return 'w-11 h-11 text-base' // md
    }
  }

  switch (props.size) {
    case 'sm': return 'px-4 py-2 text-xs'
    case 'lg': return 'px-8 py-4 text-lg'
    case 'xl': return 'px-10 py-5 text-xl'
    default: return 'px-6 py-3.5 text-sm'
  }
})

const shapeClasses = computed(() => {
  if (props.mode === 'split') return ''
  switch (props.shape) {
    case 'pill': return 'rounded-full'
    case 'circle': return 'rounded-full'
    case 'square': return 'rounded-none'
    default: return 'rounded-2xl'
  }
})

const colorClasses = computed(() => {
  if (props.mode === 'split') return ''

  switch (props.variant) {
    case 'primary':
      return 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 border border-transparent'
    case 'secondary':
      return 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-transparent'
    case 'outline':
      return 'bg-transparent text-gray-600 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600'
    case 'ghost':
      return 'bg-transparent text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-transparent'
    case 'white':
      return 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-100 shadow-sm'
    default: return ''
  }
})

const splitLeftClasses = computed(() => {
  const base = 'flex items-center justify-center transition-all duration-300 h-full'

  const shape = props.shape === 'pill'
      ? 'rounded-l-full'
      : 'rounded-bl-3xl rounded-tr-3xl rounded-tl-lg rounded-br-lg'

  const size = props.size === 'lg' ? 'py-4 px-8' : props.size === 'sm' ? 'py-2 px-4' : 'py-3.5 px-6'

  const color = props.variant === 'outline'
      ? 'border-2 border-gray-200 text-gray-700 bg-white group-hover:border-blue-600 group-hover:text-blue-600'
      : 'bg-blue-600 text-white group-hover:bg-blue-700'

  return [base, shape, size, color]
})

const splitRightClasses = computed(() => {
  const base = 'flex items-center justify-center transition-all duration-300 h-full'

  const shape = props.shape === 'pill'
      ? 'rounded-r-full aspect-square'
      : 'rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg aspect-square'

  const size = props.size === 'lg' ? 'p-4' : props.size === 'sm' ? 'p-2' : 'p-3.5'

  const color = props.variant === 'outline'
      ? 'border-2 border-gray-200 text-gray-700 bg-white group-hover:border-blue-600 group-hover:text-blue-600'
      : 'bg-blue-600 text-white group-hover:bg-blue-700'

  return [base, shape, size, color]
})

</script>

<template>
  <component
      :is="componentTag"
      :to="to"
      :href="href"
      :target="target"
      :type="!to && !href ? type : undefined"
      :class="[baseClasses, sizeClasses, shapeClasses, colorClasses]"
  >

    <template v-if="mode === 'split'">
      <span :class="splitLeftClasses">
        <Icon v-if="loading" name="i-lucide-loader" class="animate-spin mr-2" />
        <slot>{{ label }}</slot>
      </span>

      <span :class="splitRightClasses">
        <Icon :name="icon || 'i-lucide-arrow-right'" class="transition-transform group-hover:translate-x-1" :class="size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'" />
      </span>
    </template>


    <template v-else-if="mode === 'icon-only'">
      <Icon v-if="loading" name="i-lucide-loader" class="animate-spin" />
      <Icon v-else :name="icon || 'i-lucide-arrow-right'" :class="size === 'lg' ? 'w-7 h-7' : 'w-5 h-5'" />
    </template>


    <template v-else>
      <Icon v-if="loading" name="i-lucide-loader" class="animate-spin absolute" />

      <span class="flex items-center gap-2" :class="{ 'opacity-0': loading }">
        <slot name="prefix">
           <Icon v-if="icon" :name="icon" class="w-5 h-5" />
        </slot>

        <slot>{{ label }}</slot>

        <slot name="suffix" />
      </span>
    </template>

  </component>
</template>