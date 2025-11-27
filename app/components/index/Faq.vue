
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import VAccordion from "~/components/ui/VAccordion.vue";

const parallaxImg = ref(null)

const faqItems = [
  {
    question: "Do you work with international clients?",
    answer: "Yes, we work with clients globally. Our team is experienced in handling international financial regulations, cross-border transactions, and multi-currency accounting. We provide support across different time zones to ensure seamless communication."
  },
  {
    question: "What accounting software do you support?",
    answer: "We support all major accounting platforms including QuickBooks, Xero, FreshBooks, Wave, and Sage. Our team is also proficient in custom solutions and can integrate with your existing systems to ensure smooth workflow and data synchronization."
  },
  {
    question: "How do you price your services?",
    answer: "We offer flexible pricing models tailored to your needs - from hourly rates to monthly retainers and project-based pricing. During our initial consultation, we'll assess your requirements and provide a transparent quote with no hidden fees."
  },
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. We use bank-level encryption, secure cloud storage, and follow strict data protection protocols. Our systems are regularly audited, and we comply with GDPR, SOC 2, and other industry security standards to keep your information safe."
  },
  {
    question: "Can you help with just taxes or payroll only?",
    answer: "Yes! We offer modular services so you can choose exactly what you need. Whether it's tax preparation, payroll processing, bookkeeping, or comprehensive CFO services, we can tailor our offerings to match your specific requirements."
  }
]

const handleScroll = () => {
  const maxShift = 80
  const offset = Math.min(window.scrollY * 0.2, maxShift)

  gsap.to(parallaxImg.value, {
    y: offset,
    ease: "power1.out",
    duration: 0.3,
    overwrite: "auto",
  })
}


onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.bg-mirage-950 {
  background-color: #0f172a;
}
</style>

<template>
  <section class="my-10 bg-mirage-950 relative">
    <div class="flex mx-auto container justify-center items-center py-20 gap-10 px-2">
      <div class="relative z-10 w-full lg:w-1/2">
        <div class="mb-16">
          <h1 class="text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
            Frequently Asked <br />
            Questions
          </h1>
          <p class="text-xl text-slate-400 mt-6">
            Got questions? We've got answers.
          </p>
        </div>

        <VAccordion :items="faqItems" />
      </div>
      <div class="lg:w-1/2">
        <div class="">
          <p class="text-slate-400 mb-6">Still have questions?</p>
          <button class="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
    <div class="absolute top-0 right-0 w-full lg:w-1/2 h-full overflow-hidden">
        <NuxtImg
            ref="parallaxImg"
            class="w-full h-full object-cover pointer-events-none select-none  top-0 left-0 scale-[1.1] absolute z-10"
            src="/images/faq-bg.jpg"
            format="webp"
            alt="FAQ Background"
        />
    </div>
  </section>
</template>
