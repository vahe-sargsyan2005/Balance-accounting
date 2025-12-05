<script setup lang="ts">
interface JobOpening {
  title: string;
  location: string;
  salary: string;
  description: string;
  logo: string;
  detailsLink: string;
}

const openings: JobOpening[] = [
  {
    title: "Ավագ Հաշվապահ",
    location: "Չիկագո, ԻԼ (Հիբրիդ)",
    salary: "$85,000 - $105,000",
    description: "Ղեկավարել 25-30 հաճախորդների պորտֆելի ֆինանսական հաշվետվությունները և ամսվա վերջի փակման գործընթացները։ Թեկնածուները պետք է ունենան 4+ տարվա փորձ հանրային հաշվապահությունում և CPA որակավորում։",
    logo: "/assets/img/career/employer-logo-1.png",
    detailsLink: "career-details.html",
  },
  {
    title: "Հարկային Մենեջեր",
    location: "Հեռավար (ԱՄՆ)",
    salary: "$110,000 - $140,000",
    description: "Վերահսկել հարկային պլանավորումը և համապատասխանությունը բարձր զուտ արժեք ունեցող անհատների և ՓՄՁ-ների համար։ Պահանջվում է 6+ տարվա հարկային փորձ, CPA/EA որակավորում և flow-through մարմինների փորձագիտություն։",
    logo: "/assets/img/career/employer-logo-2.png",
    detailsLink: "career-details.html",
  },
  {
    title: "Հաշվապահական Ինտերն",
    location: "Չիկագո, ԻԼ (Հիբրիդ)",
    salary: "$25 - $30/ ժամ",
    description: "Ամառային 2024 պրակտիկա հաշվապահական ֆակուլտետի ուսանողների համար։ Ձեռք բերեք գործնական փորձ գրքապահության, ֆինանսական հաշվետվությունների և հաճախորդների հետ շփումների ոլորտում։ Նախընտրելի է կրտսեր/ավագ կուրսի ուսանողները։",
    logo: "/assets/img/career/employer-logo-3.png",
    detailsLink: "career-details.html",
  },
];
</script>

<template>
  <h2 class="text-4xl text-white text-center mb-8 lg:mb-10">
    Ընթացիկ Աշխատատեղեր
  </h2>

  <div class="space-y-6 pb-20">
    <div
        v-for="(job, index) in openings"
        :key="index"
        class="flex flex-col lg:flex-row items-start lg:items-center bg-white p-5 lg:p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300"
    >
      <div class="flex items-start flex-grow mb-4 lg:mb-0 lg:w-3/5">
        <div
            class="flex-shrink-0 w-16 h-16 mr-5 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200"
        >
          <img :src="job.logo" :alt="`${job.title} Լոգո`" class="max-w-full max-h-full rounded-full" >
        </div>
        <div class="flex-grow">
          <h3 class="text-xl font-bold leading-tight mb-1">
            <a :href="job.detailsLink" class="text-gray-900 hover:text-blue-600 transition">{{ job.title }}</a>
          </h3>
          <span class="block text-base text-gray-600 mb-0.5">{{ job.location }}</span>
          <span class="block text-base font-semibold text-blue-600">{{ job.salary }}</span>
        </div>
      </div>

      <p class="text-base text-gray-700 lg:w-1/3 lg:px-6 mb-4 lg:mb-0 lg:border-l lg:border-gray-200">
        {{ job.description }}
      </p>

      <a
          :href="job.detailsLink"
          class="ml-auto flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-600 hover:text-white transition duration-300 shadow-sm"
      >
        Դիմել Հիմա
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</template>