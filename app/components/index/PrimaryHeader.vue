<script setup lang="ts">
const { data } = await useFetch<string[]>("/api/primary-header/services");
</script>

<template>
  <section class="w-full h-dvh overflow-hidden relative">
    <NuxtImg src="/images/bg/77269651420.61935.jpg"
             class="w-full h-full absolute -z-10 object-cover pointer-events-none select-none"/>
    <NuxtImg src="/images/bg/body-bg-grains.png"
             class="w-full h-full absolute -z-10 object-cover pointer-events-none select-none"/>

    <div class="absolute top-0 left-0 h-full w-full -z-10 bg-gradient-to-r from-black/70 to-transparent pointer-events-none"></div>

    <div class="mx-auto max-w-screen-2xl h-full flex items-center pb-20">
      <div class="text-white">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">
          <span class="text-primary-400">BALANCE</span> Հաշվապահական անկյուն<br>
        </h1>
        <h3 class="text-3xl">
          Բիզնես հաշվառում, ֆինանսական լուծումներ և խորհրդատվություն՝<br>
          արդյունավետ կառավարման համար
        </h3>
        <p class="max-w-4xl text-neutral-300 mt-2">
          Մենք առաջարկում ենք պրոֆեսիոնալ հաշվապահական ծառայություններ, ֆինանսական վերլուծություն և կառավարման խորհրդատվություն՝ ձեր բիզնեսի արդյունավետությունն ու կայունությունը բարձրացնելու համար:
        </p>
        <div class="mt-5 flex items-center gap-5">
          <UiVButton size="lg">
            <span>Կապ մեզ հետ</span>
            <Icon name="lucide:arrow-right" class="w-5 h-5 ml-2"/>
          </UiVButton>
        </div>
      </div>
    </div>

    <div class="absolute bottom-10 w-full pointer-events-none select-none">
      <div v-if="data?.length" class="absolute bottom-20 w-full pointer-events-none select-none">
        <UiVMarquee :duration="30">
          <template v-for="(service, i) in data" :key="i">
              <div class="flex items-center gap-10">
                <span class="text-2xl font-semibold text-white">{{ service }}</span>
                <Icon name="lucide:sparkle" class="text-primary-400" size="35"/>
              </div>
          </template>
        </UiVMarquee>
      </div>

    </div>
  </section>
</template>
