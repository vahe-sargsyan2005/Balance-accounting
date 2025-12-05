<script setup lang="ts">
import { gsap } from 'gsap'

const parallaxImg = ref<HTMLImageElement | null>(null)
const faqSection = ref<HTMLElement | null>(null)

interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: "Աշխատո՞ւմ եք միջազգային հաճախորդների հետ",
    answer:
        "Այո, մենք աշխատում ենք տարբեր երկրների ընկերությունների և անհատների հետ։ Մեր թիմը փորձ ունի միջազգային հաշվապահական կանոնակարգերի, սահմաններից դուրս վճարումների և բազմարժույթ հաշվառման հետ։ Մենք ապահովում ենք հարթ հաղորդակցություն՝ տարբեր ժամային գոտիներում։"
  },
  {
    question: "Որ հաշվապահական ծրագրերն եք աջակցում",
    answer:
        "Մենք աշխատում ենք բոլոր հայտնի հաշվապահական հարթակների հետ՝ QuickBooks, Xero, FreshBooks, Wave, Sage և այլք։ Բացի այդ, կարող ենք ինտեգրվել ձեր համակարգերի հետ՝ ապահովելով անվտանգ և կայուն համաժամացում։"
  },
  {
    question: "Ինչպե՞ս եք ձևավորում ձեր ծառայությունների գները",
    answer:
        "Մենք առաջարկում ենք ճկուն գնային մոդելներ՝ ժամային վճարում, ամսական սակագներ կամ նախագծային գներ։ Նախնական խորհրդատվության ընթացքում գնահատում ենք ձեր պահանջները և ներկայացնում թափանցիկ առաջարկ՝ առանց թաքնված վճարների։"
  },
  {
    question: "Իմ ֆինանսական տվյալները անվտանգ ե՞ն",
    answer:
        "Այո։ Մենք օգտագործում ենք բանկային մակարդակի կոդավորում, անվտանգ ամպային պահեստավորում և տվյալների պաշտպանության խիստ քաղաքականություններ։ Համակարգերը պարբերաբար աուդիտվում են և համապատասխանում են GDPR, SOC 2 ստանդարտներին։"
  },
  {
    question: "Կարո՞ղ եք օգնել միայն հարկերով կամ միայն աշխատավարձով",
    answer:
        "Այո։ Դուք կարող եք ընտրել միայն այն ծառայությունները, որոնք ձեզ անհրաժեշտ են՝ հարկային հաշվարկ, աշխատավարձերի մշակում, գիրք վարում կամ CFO-ի աջակցություն։"
  }
]


const handleScroll = () => {
  if (!faqSection.value || !parallaxImg.value) return

  const rect = faqSection.value.getBoundingClientRect()
  const sectionHeight = faqSection.value.offsetHeight
  const windowHeight = window.innerHeight

  const maxParallaxDistance = sectionHeight * 0.2

  if (rect.top < windowHeight && rect.bottom > 0) {

    const scrollProgress = (windowHeight - rect.top) / (windowHeight + sectionHeight)

    const newY = maxParallaxDistance * scrollProgress - (maxParallaxDistance / 2)

    gsap.to(parallaxImg.value, {
      y: newY,
      ease: 'power1.out',
      overwrite: 'auto',
      duration: 0.3
    })
  } else {

    // gsap.to(parallaxImg.value, { y: 0, duration: 0.3 })
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
  <section ref="faqSection" class="my-10 bg-mirage-950 relative">
    <div class="flex mx-auto container py-20 gap-10 px-2 justify-between items-end">
      <div class="relative z-10 w-full lg:w-1/2">
        <div class="mb-16">
          <h1 class="text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
            Հաճախ տրվող<br >
            հարցեր
          </h1>
          <p class="text-xl text-slate-400 mt-6">
            Ունեք հարցեր՞ Մեր թիմը պատրաստ է պատասխանել։
          </p>
        </div>

        <UiVAccordion :items="faqItems" :default-active="0" />
      </div>

      <div class="lg:w-1/2 z-10 flex items-end">
        <div class="bg-slate-800 p-5 rounded-2xl border-2 border-primary-200">
          <p class="text-slate-400 mb-2">Explore common queries about working<br> with Balance. Still unsure?</p>
          <div class="flex gap-2">
            <UiVLink color="primary" href="#">
              Կապվել մեզ հետ
            </UiVLink>
            <p class="text-slate-400">– we’re happy to help.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute top-0 right-0 bottom-0 w-full lg:w-1/2 h-full overflow-hidden">
      <img
          ref="parallaxImg"
          class="w-full h-full object-cover pointer-events-none select-none absolute top-0 left-0"
          src="/images/faq-bg.jpg"
          alt="FAQ Background"
      >
    </div>
  </section>
</template>
