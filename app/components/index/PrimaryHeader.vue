<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { useFetch } from "#app";

const marqueeRef = ref<HTMLElement | null>(null);
const services = ref<string[]>([]);

onMounted(async () => {
  const { data } = await useFetch<string[]>("/api/primary-header/services");
  services.value = data.value || [];

  if (!marqueeRef.value || services.value.length === 0) return;

  const textWidth = marqueeRef.value.scrollWidth;

  gsap.to(marqueeRef.value, {
    x: -textWidth,
    duration: 30,
    ease: "linear",
    repeat: -1
  });
});
</script>

<template>
  <section class="w-full h-dvh overflow-hidden relative">
    <NuxtImg src="/images/bg/77269651420.61935.jpg" class="w-full h-full absolute -z-10 object-cover pointer-events-none select-none"/>
    <NuxtImg src="/images/bg/body-bg-grains.png" class="w-full h-full absolute -z-10 object-cover pointer-events-none select-none"/>

    <div class="absolute top-0 left-0 h-full w-full -z-10 bg-gradient-to-r from-black/70 to-transparent pointer-events-none"></div>

    <div class="mx-auto max-w-screen-2xl h-full flex items-center pb-20">
      <div class="text-white">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">
          <span class="text-primary-400">BALANCE</span> Հաշվապահական անկյուն<br>
        </h1>
        <h3 class="text-3xl">Բիզնես հաշվառում, ֆինանսական լուծումներ և խորհրդատվություն՝<br> արդյունավետ կառավարման համար</h3>
        <p class="max-w-4xl text-neutral-300 mt-2">Մենք առաջարկում ենք պրոֆեսիոնալ հաշվապահական ծառայություններ, ֆինանսական վերլուծություն և կառավարման խորհրդատվություն՝ ձեր բիզնեսի արդյունավետությունն ու կայունությունը բարձրացնելու համար:</p>
        <div class="mt-5 flex items-center gap-5">
            <UiVButton size="lg">
              <span>Կապ մեզ հետ</span>
              <Icon name="lucide:arrow-right" class="w-5 h-5 ml-2"/>
            </UiVButton>
          <div>
            users
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-20 w-full overflow-hidden py-10 pointer-events-none select-none">
      <div ref="marqueeRef" class="whitespace-nowrap text-white text-2xl font-bold flex gap-10">
        <template v-for="(service, index) in services" :key="index">
          <div class="flex items-center gap-10"><span>{{ service }}</span> <Icon name="lucide:sparkle" class="w-10 text-primary-400"/> </div>
        </template>
        <template v-for="(service, index) in services" :key="'repeat-'+index">
          <div class="flex items-center gap-10"><span>{{ service }}</span> <Icon name="lucide:sparkle" class="w-10 text-primary-400"/> </div>
        </template>
      </div>
    </div>
  </section>
</template>
