<script setup lang="ts">
interface JobFeature {
  title: string;
  description: string;
  icon: string;
}


const features: JobFeature[] = [
  {
    title: "Կարիերայի Աճ",
    description: "Տարեկան $3,000 կրթական ֆոնդ՝ 12-18 ամիսը մեկ կարիերայի առաջընթացով։",
    icon: "/assets/img/icons/growth.svg",
  },
  {
    title: "Աշխատանքի և Կյանքի Հավասարակշռում",
    description: "Ճկուն գրաֆիկներ, հեռավար աշխատանքի տարբերակներ և անսահմանափակ PTO՝ 1 տարվա աշխատանքային փորձից հետո։",
    icon: "/assets/img/icons/balance.svg",
  },
  {
    title: "Համագործակցային Մշակույթ",
    description: "Շաբաթական գիտելիքների փոխանակում և մենթորական ծրագրեր ավագ թիմի անդամների հետ։",
    icon: "/assets/img/icons/culture.svg",
  },
  {
    title: "Արդյունավետ Աշխատանք",
    description: "Ուղղակի շփում հաճախորդների հետ, որոնք գնահատում են Ձեր փորձն ու առաջարկությունները։",
    icon: "/assets/img/icons/sun.svg",
  },
  {
    title: "Մրցունակ Հատուցում",
    description: "Աշխատավարձեր շուկայի լավագույն 25%-ում՝ կատարողականի բոնուսներով և շահույթի բաշխմամբ։",
    icon: "/assets/img/icons/gear-large-2.svg",
  },
  {
    title: "Համապարփակ Արտոնություններ",
    description: "100% ծածկված առողջության ապահովագրություն, 401(k) համընկնում և ուղևորափոխադրման արտոնություններ։",
    icon: "/assets/img/icons/heart-large-2.svg",
  },
];
</script>

<template>
  <div class="max-w-7xl mx-auto text-center mb-10">
    <p class="text-lg mb-3 text-slate-200">Ինչու՞ Միանալ Մեր Թիմին</p>
    <h2 class="text-4xl text-slate-300 mb-10 lg:mb-14">
      Մենք ներդրում ենք կատարում մեր աշխատակիցների մեջ՝ մասնագիտական զարգացման, մրցունակ արտոնությունների և աջակցող աշխատանքային միջավայրի միջոցով
    </h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-20 lg:pb-24">
    <div
        v-for="(feature, index) in features"
        :key="index"
        class="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300"
    >
      <img :src="feature.icon" :alt="feature.title" class="w-8 h-8 mb-4" >
      <h3 class="text-xl font-bold text-gray-800 mb-3">{{ feature.title }}</h3>
      <p class="text-base text-gray-600 mb-0">{{ feature.description }}</p>
    </div>
  </div>
</template>