<script setup lang="ts">
interface Props {
  to?: string
  href?: string
  target?: '_blank' | '_self'
  type?: 'button' | 'submit' | 'reset'

  label?: string
  icon?: string

  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'danger'
  mode?: 'solid' | 'split' | 'icon-only'
  shape?: 'default' | 'pill' | 'square'
  size?: 'sm' | 'md' | 'lg' | 'xl'

  iconPosition?: 'left' | 'right'

  loading?: boolean
  disabled?: boolean
  block?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  mode: 'solid',
  shape: 'default',
  size: 'md',
  iconPosition: 'right',
  type: 'button'
})

const componentTag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const wrapperClasses = computed(() => {
  return [
    'relative inline-flex items-center justify-center transition-all duration-300 font-bold focus:outline-none select-none group',
    props.disabled || props.loading ? 'opacity-60 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
    props.block ? 'w-full flex' : '',
    props.mode === 'split' ? 'p-0 bg-transparent shadow-none' : 'gap-2',
    props.mode !== 'split' ? getShapeClass(props.shape) : ''
  ]
})

const solidClasses = computed(() => {
  if (props.mode === 'split') return ''

  let sizeClass = ''
  if (props.mode === 'icon-only') {
    switch (props.size) {
      case 'sm': sizeClass = 'w-8 h-8 text-xs'; break
      case 'lg': sizeClass = 'w-14 h-14 text-lg'; break
      case 'xl': sizeClass = 'w-16 h-16 text-xl'; break
      default: sizeClass = 'w-11 h-11 text-base'; break
    }
  } else {
    switch (props.size) {
      case 'sm': sizeClass = 'px-4 py-2 text-xs'; break
      case 'lg': sizeClass = 'px-8 py-4 text-lg'; break
      case 'xl': sizeClass = 'px-10 py-5 text-xl'; break
      default: sizeClass = 'px-6 py-3.5 text-sm'; break
    }
  }

  let colorClass = ''
  switch (props.variant) {
    case 'primary': colorClass = 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 border border-transparent'; break
    case 'secondary': colorClass = 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-transparent'; break
    case 'outline': colorClass = 'bg-transparent text-gray-600 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600'; break
    case 'ghost': colorClass = 'bg-transparent text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-transparent'; break
    case 'white': colorClass = 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-100 shadow-sm'; break
    case 'danger': colorClass = 'bg-red-50 text-red-600 hover:bg-red-100 border border-transparent'; break
  }

  return [sizeClass, colorClass]
})

function getShapeClass(shape: string) {
  if (shape === 'pill') return 'rounded-full'
  if (shape === 'square') return 'rounded-none'
  return 'rounded-2xl'
}

const splitPartBase = 'flex items-center justify-center transition-all duration-300 h-full relative z-10'

const splitColorClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-blue-600 text-white group-hover:bg-blue-700 border-transparent'
    case 'secondary':
      return 'bg-gray-100 text-gray-900 group-hover:bg-gray-200 border-transparent'
    case 'outline':
      return 'bg-white text-gray-700 border-2 border-gray-200 group-hover:border-blue-600 group-hover:text-blue-600'
    case 'ghost':
      return 'bg-transparent text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 border-transparent'
    case 'danger':
      return 'bg-red-600 text-white group-hover:bg-red-700 border-transparent'
    default: return 'bg-blue-600 text-white'
  }
})

const splitSeparatorClass = computed(() => {
  if (props.variant === 'outline') return 'border-gray-200 group-hover:border-blue-600'
  if (props.variant === 'secondary') return 'border-gray-300'
  return 'border-white/20'
})

const splitMainShape = computed(() => {
  if (props.shape === 'pill') {
    return props.iconPosition === 'left' ? 'rounded-r-full' : 'rounded-l-full'
  }
  if (props.iconPosition === 'right') {
    return 'rounded-bl-3xl rounded-tr-3xl rounded-br-none'
  }
  return 'rounded-r-2xl rounded-tl-3xl rounded-br-3xl rounded-bl-none'
})

const splitIconShape = computed(() => {
  if (props.shape === 'pill') {
    return props.iconPosition === 'left' ? 'rounded-l-full' : 'rounded-r-full'
  }
  if (props.iconPosition === 'right') {
    return 'rounded-br-3xl rounded-tl-3xl rounded-bl-none'
  }
  return 'rounded-l-3xl rounded-tr-3xl rounded-br-none'
})

const splitMainSize = computed(() => props.size === 'lg' ? 'py-4 px-10 text-lg' : props.size === 'sm' ? 'py-2 px-5 text-xs' : 'py-3.5 px-4 text-sm')
const splitIconSize = computed(() => props.size === 'lg' ? 'p-4' : props.size === 'sm' ? 'p-2' : 'p-3.5')

</script>

<template>
  <component
      :is="componentTag"
      :to="to"
      :href="href"
      :target="target"
      :type="!to && !href ? type : undefined"
      :class="[wrapperClasses, solidClasses]"
  >

    <template v-if="mode === 'split'">
      <div class="flex w-full h-full" :class="iconPosition === 'left' ? 'flex-row-reverse' : 'flex-row'">

        <span
            :class="[splitPartBase, splitColorClasses, splitMainShape, splitMainSize, 'flex-grow']"
        >
          <Icon v-if="loading" name="i-lucide-loader" class="animate-spin mr-2" />
          <slot>{{ label }}</slot>
        </span>

        <span
            :class="[
            splitPartBase,
            splitColorClasses,
            splitIconShape,
            splitIconSize,
            splitSeparatorClass,
            'border-l transition-colors duration-300 aspect-square ml-2'
          ]"
                    :style="{
            borderLeftWidth: iconPosition === 'right' ? '1px' : '0',
            borderRightWidth: iconPosition === 'left' ? '1px' : '0'
          }"
                >
          <Icon
              :name="icon || 'i-lucide-arrow-right'"
              class="transition-transform duration-300"
              :class="[
              size === 'lg' ? 'w-6 h-6' : 'w-5 h-5',
              iconPosition === 'right' ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'
            ]"
          />
        </span>

      </div>
    </template>


    <template v-else-if="mode === 'icon-only'">
      <Icon v-if="loading" name="i-lucide-loader" class="animate-spin" />
      <Icon v-else :name="icon || 'i-lucide-arrow-right'" :class="size === 'lg' ? 'w-7 h-7' : 'w-5 h-5'" />
    </template>


    <template v-else>
      <Icon v-if="loading" name="i-lucide-loader" class="animate-spin absolute" />

      <span class="flex items-center gap-2"
            :class="[loading ? 'opacity-0' : '', iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse']">

        <slot name="suffix">
           <Icon v-if="icon && iconPosition === 'right'" :name="icon" class="w-5 h-5" />
        </slot>

        <slot>{{ label }}</slot>

        <slot name="prefix">
           <Icon v-if="icon && iconPosition === 'left'" :name="icon" class="w-5 h-5" />
        </slot>
      </span>
    </template>

  </component>
</template>