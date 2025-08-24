<script setup lang="ts">
const email = ref('')

const subscribe = () => {
  if (!email.value) return alert('Մուտքագրեք ձեր էլ․ հասցեն։')

  alert(`Շնորհակալություն, դուք բաժանորդագրվեցիք: ${email.value}`)
  email.value = ''
}
</script>

<template>
  <footer class="w-full rounded-t-[70px] relative overflow-hidden border-t-2 border-neutral-300">
    <NuxtImg src="/images/bg/abstract_bg_3-gold.png" class="w-full absolute h-full object-cover pointer-events-none select-none -z-10"/>
    <div class="max-w-screen-xl mx-auto text-white flex flex-col justify-between py-5">
      <div class="my-10 flex justify-between gap-10">
        <div class="w-1/2">
          <h5 class="text-4xl font-semibold"><span class="text-apache-400">B</span>ALANCE</h5>
          <p class="text-neutral-400">Բիզնես հաշվառում, ֆինանսական լուծումներ, խորհրդատվություն</p>
        </div>
        <div class="text-sm w-full">
          <div class="pb-5 mb-5 border-b-2 border-neutral-600">
              <div class="text-sm flex gap-10 justify-between">
                <div class="mb-2 font-semibold text-2xl">Բաժանորդագրվեք<br/> մեր նորություններին!</div>
                <div class="flex gap-2 items-center">
                 <div class="flex bg-neutral-200 rounded-md overflow-hidden">
                   <UiVInput v-model="email" placeholder="Մուտքագրեք էլ․ հասցե" />
                   <UiVButton @click="subscribe">Բաժանորդագրվել</UiVButton>
                 </div>
                </div>
              </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <h6 class="font-bold text-lg mb-3">Փաստաթղթեր</h6>
              <ul class="text-neutral-400 space-y-1">
                <li>Տնտեսական հաշվետվություններ</li>
                <li>Աուդիտներ</li>
                <li>Հարկային փաստաթղթեր</li>
              </ul>
            </div>
            <div>
              <h6 class="font-bold text-lg mb-3">Ծառայություններ</h6>
              <ul class="text-neutral-400 space-y-1">
                <li>Հաշվապահություն</li>
                <li>Ֆինանսական վերլուծություն</li>
                <li>Տնտեսական ծրագրեր</li>
                <li>Տնտեսական հաշվետվություններ</li>
                <li>Աուդիտներ</li>
                <li>Հարկային փաստաթղթեր</li>
              </ul>
            </div>
            <div>
              <h6 class="font-bold text-lg mb-3">Մեր մասին</h6>
              <ul class="text-neutral-400 space-y-1">
                <li>Մեր թիմը</li>
                <li>Հետադարձ կապ</li>
                <li>Բիզնես խորհրդատվություն</li>
                <li>
                  <a href="/privacy-policy" class="hover:underline hover:text-apache-500 transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-and-conditions" class="hover:underline hover:text-apache-500 transition-colors">Terms & Conditions</a>
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