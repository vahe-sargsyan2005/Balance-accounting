<script setup lang="ts">
import type { FooterApiResponse } from '~/types/footer'

const appConfig = useAppConfig()
const email = ref('')

const subscribe = () => {
  if (!email.value) return alert('Մուտքագրեք ձեր էլ․ հասցեն։')
  alert(`Շնորհակալություն, դուք բաժանորդագրվեցիք: ${email.value}`)
  email.value = ''
}

const { data: footerData } = await useFetch<FooterApiResponse>('/api/footer/links')
console.log(footerData)
</script>
<template>
  <footer class="w-full rounded-t-[70px] relative overflow-hidden border-t-2 border-neutral-300">
    <NuxtImg src="/images/bg/abstract_bg_3-gold.png" class="w-full absolute h-full object-cover pointer-events-none select-none -z-10"/>
    <div class="max-w-screen-xl mx-auto text-white flex flex-col justify-between py-5">
      <div class="my-10 flex justify-between gap-10">
        <div class="w-1/2">
          <h5 class="text-4xl font-semibold mb-1"><span class="text-apache-400">B</span>ALANCE</h5>
          <p class="text-neutral-400">
            Բիզնես հաշվառում, ֆինանսական լուծումներ և խորհրդատվություն՝ արդյունավետ կառավարման համար:
          </p>
          <div class="mt-5">
             <h6 class="font-bold text-lg mb-3">Հետևեք մեզ</h6>
            <div class="flex gap-2">
              <a
                  v-for="link in appConfig.social"
                  :key="link.name"
                  :href="link.href"
                  target="_blank"
                  rel="noopener"
              >
                <UiVButton variant="soft" color="apache" rounded="full" size="sm">
                  <Icon :name="link.icon" class="size-4" />
                </UiVButton>
              </a>
            </div>
          </div>
        </div>
        <div class="text-sm w-full">
          <div class="pb-5 mb-5 border-b-2 border-neutral-600">
              <div class="text-sm flex gap-10 justify-between">
                <div class="font-semibold text-2xl">Բաժանորդագրվեք<br/> մեր նորություններին!</div>
                <div class="flex gap-2 items-center">
                 <div class="flex bg-neutral-200 rounded-md overflow-hidden">
                   <UiVInput v-model="email" placeholder="Մուտքագրեք էլ․ հասցե" />
                   <UiVButton @click="subscribe">Բաժանորդագրվել</UiVButton>
                 </div>
                </div>
              </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div v-for="section in footerData?.sections" :key="section.title">
              <h6 class="font-bold text-lg mb-3">{{ section.title }}</h6>
              <ul class="text-neutral-400 space-y-1">
                <li v-for="link in section.links" :key="link.href">
                  <UiVLink :href="link.href" size="sm">{{ link.label }}</UiVLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between w-full pt-5 border-t-2 border-neutral-600">
        <div>
          © 2024-2025 <b>Բալանս</b>։ Բոլոր իրավունքները պաշտպանված են։
        </div>
        <div>
            Կայքը by <a href="https://vahe.anidzen.com" target="_blank" rel="noopener" class="underline hover:text-apache-500 transition-colors">Vahe Sargsyan</a> ⚡
        </div>
      </div>
    </div>
  </footer>
</template>