<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";

onMounted(() => {
  const cursorInner = document.querySelector<HTMLElement>(".cursor-inner");
  const cursorOuter = document.querySelector<HTMLElement>(".cursor-outer");

  if (!cursorInner || !cursorOuter) return;

  const buttons = [
    "a",
    "button",
    ".active-progress",
    ".search-click",
    ".action-menu",
  ];

  const removeCursor = [
    ".about",
    "input"
  ];

  const onMouseMove = (e: MouseEvent) => {
    cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  };

  const onMouseEnter = () => {
    cursorInner.classList.add("cursor-hover");
    cursorOuter.classList.add("cursor-hover");
  };

  const onMouseLeave = () => {
    cursorInner.classList.remove("cursor-hover");
    cursorOuter.classList.remove("cursor-hover");
  };

  const onRemoveEnter = () => {
    cursorInner.classList.add("cursor-remove");
    cursorOuter.classList.add("cursor-remove");
  };

  const onRemoveLeave = () => {
    cursorInner.classList.remove("cursor-remove");
    cursorOuter.classList.remove("cursor-remove");
  };

  cursorInner.style.visibility = "visible";
  cursorOuter.style.visibility = "visible";

  window.addEventListener("mousemove", onMouseMove);

  buttons.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });
  });

  removeCursor.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener("mouseenter", onRemoveEnter);
      el.addEventListener("mouseleave", onRemoveLeave);
    });
  });

  onBeforeUnmount(() => {
    window.removeEventListener("mousemove", onMouseMove);

    buttons.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    });

    removeCursor.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.removeEventListener("mouseenter", onRemoveEnter);
        el.removeEventListener("mouseleave", onRemoveLeave);
      });
    });
  });
});
</script>
<template>
  <div
      class="rts-cursor cursor-outer fixed left-0 top-0 pointer-events-none transform-gpu invisible
           transition-transform ease-out duration-[80ms] z-[10000000]"
      data-default="yes"
      data-link="yes"
      data-slider="no"
  >
    <span class="fn-cursor absolute top-1/2 left-1/2 -mt-[20px] -ml-[20px] w-[40px] h-[40px] rounded-full border-2 border-primary-600 transition-all duration-300"></span>
  </div>

  <div
      class="rts-cursor cursor-inner fixed left-0 top-0 pointer-events-none transform-gpu invisible z-[10000001]"
      data-default="yes"
      data-link="yes"
      data-slider="no"
  >
    <span class="fn-cursor absolute top-1/2 left-1/2 -mt-[3px] -ml-[3px] w-[6px] h-[6px] rounded-full bg-primary-500 transition-all duration-300 ease-in-out">
      <span class="fn-left"></span>
      <span class="fn-right"></span>
    </span>
  </div>
</template>

<style>
.fn-left,
.fn-right {
  @apply opacity-0 invisible transition-all duration-300 ease-in-out;
}

.fn-left:after {
  content: "";
  @apply absolute w-[2px] h-[12px] bg-black;
  transform: rotate(50deg);
  left: -20px;
  top: 50%;
  margin-top: -10px;
}
.fn-left:before {
  content: "";
  @apply absolute w-[2px] h-[12px] bg-black;
  transform: rotate(130deg);
  left: -20px;
  top: 50%;
  margin-top: -2px;
}

.fn-right:after {
  content: "";
  @apply absolute w-[2px] h-[12px] bg-black;
  transform: rotate(50deg);
  right: -20px;
  top: 50%;
  margin-top: -2px;
}
.fn-right:before {
  content: "";
  @apply absolute w-[2px] h-[12px] bg-[var(--titleColor)];
  transform: rotate(130deg);
  right: -20px;
  top: 50%;
  margin-top: -10px;
}

.cursor-inner.cursor-hover span.fn-cursor {
  @apply hidden;
}

.cursor-outer.cursor-hover span.fn-cursor {
  @apply border-primary-500 opacity-25 border-4 bg-primary-500 w-[70px] h-[70px] -mt-[35px] -ml-[35px];
}

.cursor-inner.cursor-remove span.fn-cursor,
.cursor-outer.cursor-remove span.fn-cursor {
  @apply opacity-0 scale-[1.7] transition-all duration-300;
}
</style>
