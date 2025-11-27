<script setup lang="ts">
import { gsap } from 'gsap'

const parallaxImg = ref<HTMLElement | null>(null)

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
  if (!parallaxImg.value) return

  const maxShift = 70
  const offset = Math.min(window.scrollY * 0.12, maxShift)

  gsap.to(parallaxImg.value, {
    y: offset,
    ease: 'power1.out',
    duration: 0.3,
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="my-10 bg-mirage-950 relative">
    <div class="flex mx-auto container justify-center items-center py-20 gap-10 px-2">
      <div class="relative z-10 w-full lg:w-1/2">
        <div class="mb-16">
          <h1 class="text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
            Հաճախ տրվող<br />
            հարցեր
          </h1>
          <p class="text-xl text-slate-400 mt-6">
            Ունեք հարցեր՞ Մեր թիմը պատրաստ է պատասխանել։
          </p>
        </div>

        <!-- ВОТ ЭТА СТРОКА — ключевой момент -->
        <UiVAccordion :items="faqItems" :defaultActive="0" />
      </div>

      <div class="lg:w-1/2">
        <p class="text-slate-400 mb-6">Մնացի՞ն հարցեր</p>
        <button class="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Կապվել մեզ հետ
        </button>
      </div>
    </div>

    <div class="absolute top-0 right-0 w-full lg:w-1/2 h-full overflow-hidden">
      <NuxtImg
          ref="parallaxImg"
          class="w-full h-full object-cover pointer-events-none select-none top-0 left-0 scale-[1.1] absolute z-10"
          src="/images/faq-bg.jpg"
          format="webp"
          alt="FAQ Background"
      />
    </div>
  </section>
</template>
