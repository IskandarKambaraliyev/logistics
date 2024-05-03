<script setup>
  const props = defineProps({
    color: {
      type: String,
      default: "light",
      required: false,
    },
    to: {
      type: String,
      required: false,
    },
  });
</script>

<template>
  <button
    v-if="!to"
    class="ui_button_circle border transition-all size-12 md:size-14 overflow-hidden rounded-full flex-center group"
    :class="
      color === 'dark'
        ? 'border-dark-blue-main text-dark-blue-main hover:bg-dark-blue-main hover:text-white'
        : 'border-white text-white hover:bg-white hover:to-dark-blue-main'
    "
  >
    <slot />
  </button>
  <NuxtLink
    v-else
    :to="to"
    class="ui_button_circle border transition-all size-12 md:size-14 overflow-hidden rounded-full flex-center group"
    :class="
      color === 'dark'
        ? 'border-dark-blue-main text-dark-blue-main hover:bg-dark-blue-main hover:text-white'
        : 'border-white text-white hover:bg-white hover:to-dark-blue-main'
    "
  >
    <slot />
  </NuxtLink>
</template>

<style lang="scss" scoped>
  .ui_button_circle {
  }
</style>
