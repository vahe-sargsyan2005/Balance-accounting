<script setup lang="ts">

</script>

<template>
  <header
      class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl
           bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-7 py-5
           flex items-center justify-between shadow-lg">

    <h1 class="text-2xl md:text-3xl font-bold tracking-wide text-white">
      <span class="text-primary-400">B</span>ALANCE
    </h1>

    <nav class="hidden md:flex space-x-8 text-white/80 font-medium">
      <a href="цвцв" class="hover:text-primary-400 transition">Главная</a>
      <a href="цвцв" class="hover:text-primary-400 transition">Функции</a>
      <a href="#" class="hover:text-primary-400 transition">Цены</a>
      <a href="#" class="hover:text-primary-400 transition">Контакты</a>
    </nav>

    <div class="flex items-center space-x-4">
      <button class="hidden md:block px-4 py-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white transition">
        Войти
      </button>

      <button class="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition">
        ☰
      </button>
    </div>
  </header>
</template>

