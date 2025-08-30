<script setup lang="ts">
import gsap from "gsap";

onMounted(() => {
  const header = document.querySelector("header");
  if (!header) return;

  gsap.fromTo(header,
      { paddingTop: "1.25rem", paddingBottom: "1.25rem", borderTopColor: "rgba(255,255,255,0.1)" },
      {
        paddingTop: "0.7rem",
        paddingBottom: "1.25rem",
        top: "0rem",
        borderTopRightRadius: "0",
        borderTopLeftRadius: "0",
        borderTopColor: "transparent",
        backgroundColor: "rgba(0,0,0,0.3)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: header,
          start: "top top",
          end: "+=50",
          scrub: true,
        }
      }
  );
});
</script>

<template>
  <header
      class="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-screen-2xl
           bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-7 py-5
           flex items-center justify-between transition-all duration-300">

    <div class="flex justify-between flex-col">
      <h1 class="text-2xl md:text-3xl tracking-wide text-white">
        <span class="text-primary-400">B</span>ALANCE
      </h1>
      <span class="text-xs text-white"><span class="text-primary-400">Հաշվապահական</span> անկյուն</span>
    </div>

    <nav class="flex space-x-8 text-white/80 relative">
      <a href="#" class="hover:text-primary-400 transition">Գլխավոր</a>
      <a href="#" class="hover:text-primary-400 transition">Ծառայություններ</a>
      <a href="#" class="hover:text-primary-400 transition">Մեր մասին</a>
      <a href="#" class="hover:text-primary-400 transition">Կոնտակտներ</a>
    </nav>

    <div class="w-[150px]"></div>
  </header>
</template>
