<template>
  <div>
    <AltBar/>
    <AppHeader/>
        <main class="flex-1 w-full">
          <slot />
        </main>
    <AppFooter/>
  </div>
</template>
