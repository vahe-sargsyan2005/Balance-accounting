<script setup lang="ts">
import { gsap } from 'gsap'

const { global, social } = useAppConfig()
const img = useImage()

const parallaxImg = ref<HTMLImageElement | null>(null)
const backgroundImg = ref<HTMLImageElement | null>(null)

const handleScroll = () => {
  const scrollTop = window.scrollY

  if (parallaxImg.value) {
    gsap.to(parallaxImg.value, {
      y: scrollTop * -0.2,
      ease: 'power1.out',
      overwrite: 'auto',
      duration: 0.3
    })
  }

  if (backgroundImg.value) {
    gsap.to(backgroundImg.value, {
      y: scrollTop * 0.1,
      ease: 'power1.out',
      overwrite: 'auto',
      duration: 0.3
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section id="primary-header" class="w-full overflow-hidden bg-secondary-950 h-[900px] -mt-[104px]">
    <div class="relative h-full">
      <div class="flex h-full">
        <div class="w-[55%] relative">
          <img ref="parallaxImg"
               src="https://templates.envytheme.com/exrox/default/assets/img/hero/diagram-2.png"
               class="opacity-25 absolute bottom-0 pointer-events-none select-none w-full">
        </div>
        <div class="w-[45%] h-full relative overflow-hidden bg-secondary-900/20">
          <img ref="backgroundImg"
               class="w-full h-full object-cover pointer-events-none select-none  top-0 left-0 scale-[1.1] absolute z-10"
               src="https://templates.envytheme.com/exrox/default/assets/img/hero/hero-bg-5.jpg"
               format="webp"
               alt="primary bg-image" :placeholder="img('https://templates.envytheme.com/exrox/default/assets/img/hero/hero-bg-5.jpg', createPlaceholder(50, 50))"/>
          <div class="w-full h-full flex items-center justify-center">
            <Icon name="lucide:file-image" class="w-60 h-60 text-secondary-900/20"/>

          </div>
        </div>
      </div>

      <div class="absolute top-0 w-full h-full mt-52 z-20">
        <div class="container relative mx-auto px-2 flex gap-5">
          <div class="w-[60%]">
            <div>
                <div>
                  <h1 class="text-6xl text-white font-bold leading-snug">
                    <span class="text-primary-200">BALANCE</span> Հաշվապահական <br> անկյուն
                     <span class="text-primary-200">Բիզնես հաշվառում</span><br>և <span class="text-primary-200">խորհրդատվություն</span>
                  </h1>
                </div>
            </div>
            <div class="pt-10 flex flex-col gap-5">
              <div>
                <div>
                  <p class="text-lg text-neutral-400 mt-2 max-w-2xl">
                    Մենք առաջարկում ենք պրոֆեսիոնալ հաշվապահական ծառայություններ, ֆինանսական վերլուծություն և կառավարման խորհրդատվություն՝ ձեր բիզնեսի արդյունավետությունն ու կայունությունը բարձրացնելու համար:
                  </p>
                </div>
              </div>
              <div>
                <UiButton size="lg" variant="solid" color="primary" type="button" rounded="full"><Icon name="lucide:phone"/>Կապ մեզ հետ</UiButton>
              </div>
            </div>
          </div>
          <div class="w-[40%] flex justify-between items-end">
            <div class="flex flex-col gap-2">
              <span class="text-primary-200 text-2xl font-bold">
                {{ global.phone }}
              </span>
              <span class="text-white text-lg font-bold">
              {{ global.email }}
              </span>
            </div>
            <div class="flex flex-col gap-2">
              <a
                  v-for="link in social"
                  :key="link.name"
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group py-1 px-2 text-white rounded-md transition-colors flex items-center"
              >
                <Icon
                    :name="link.icon"
                    class="size-5 group-hover:text-primary-200 mr-2 transition-colors"
                />
                <span class="text-neutral-400 group-hover:text-primary-200 transition-colors">{{ link.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-secondary-950 to-transparent z-10"/>
    </div>
  </section>
</template>
