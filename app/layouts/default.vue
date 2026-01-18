<template>
  <div>
    <CommonTopBar />
   <CommonHeader />
        <main class="flex-1 w-full">
          <slot />
        </main>
    <CommonFooter />
  </div>
</template>