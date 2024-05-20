<script setup>
  const props = defineProps({
    data: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <div v-html="data" class="footer_map"></div>
</template>

<style lang="scss">
  .footer_map {
    iframe {
      width: 100%;
      border-radius: 2rem;
    }
  }
</style>
