<script setup lang="ts">

import FooterSections from "~/components/footer/FooterSections.vue";

</script>
<template>
  <footer class="w-full relative overflow-hidden bg-mirage-950">
    <div class="text-white flex flex-col justify-between py-5">
      <div class="my-10 flex justify-between gap-10 container mx-auto">
        <div class="w-1/2">
          <h5 class="text-4xl font-semibold mb-1"><span class="text-apache-400">B</span>ALANCE</h5>
          <p class="text-neutral-400 text-lg">
            Բիզնես հաշվառում, ֆինանսական լուծումներ և խորհրդատվություն՝ արդյունավետ կառավարման համար:
          </p>
        </div>
        <div class="text-sm w-full">
          <div class="pb-5 mb-5 border-b-2 border-neutral-600">
              <div class="text-sm flex gap-10 justify-between">
                <div class="font-semibold text-2xl">Բաժանորդագրվեք<br> մեր նորություններին!</div>
                <FooterSubscribeForm/>
              </div>
          </div>
          <FooterSections/>
        </div>
      </div>
      <div class="pt-5 border-t border-neutral-500">
        <div class="container mx-auto flex justify-between w-full ">
          <div class="text-neutral-400">
            <b class="text-primary-200">©</b> 2024-2025 <b class="text-primary-200">BALANCE Հաշվապահական անկյուն</b>։ Բոլոր իրավունքները պաշտպանված են։
          </div>
          <div class="text-sm  text-neutral-400">
            <p>
              Կայքը by <a href="https://vahe.anidzen.com" target="_blank" rel="noopener" class="underline text-primary-200 hover:text-primary-300 transition-colors">Vahe Sargsyan</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>