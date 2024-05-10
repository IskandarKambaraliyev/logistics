<script setup>
  const props = defineProps({
    as: {
      type: String,
      default: "h2",
    },
  });
</script>

<template>
  <h1
    v-if="as === 'h1'"
    class="ui_title text-[2rem] md:text-[3rem] lg:text-[4rem] leading-none text-dark-blue-main font-din font-bold max-w-[68rem] max-lg:text-center uppercase"
  >
    <slot />
  </h1>

  <h2
    v-else-if="as === 'h2'"
    class="ui_title text-[2rem] md:text-[3rem] lg:text-[4rem] leading-none text-dark-blue-main font-din font-bold max-w-[68rem] max-lg:text-center uppercase"
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
