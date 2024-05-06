<script setup></script>

<template>
  <h2
    class="ui_title text-[2rem] md:text-[3rem] lg:text-[4rem] leading-none text-dark-blue-main font-din font-bold max-w-[62rem] max-lg:text-center"
  >
    <slot />
  </h2>
</template>

<style lang="scss">
  .ui_title {
    span {
      @apply text-blue-main;
    }
  }
</style>
