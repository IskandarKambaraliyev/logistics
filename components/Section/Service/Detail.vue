<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <section v-if="data.content" class="flex-center">
    <div
      class="max-w-[72rem] w-full mx-4 md:mx-8 lg:mx-16 rounded-[2rem] px-4 py-6 md:p-10 bg-blue-000 text-dark-blue-main text-base font-euclid service_detail"
      v-html="data.content"
    ></div>
  </section>
</template>

<style lang="scss">
  .service_detail {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "DIN Pro", sans-serif;
      font-weight: 700;
      text-transform: uppercase;
    }

    h1 {
      @apply text-[2.25rem] md:text-[2.5rem] lg:text-[3rem] leading-none;
    }

    h2 {
      @apply text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] leading-none;
    }

    h3 {
      @apply text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] leading-none;
    }

    ul {
      list-style-type: disc;
      padding-left: 1.5rem;
    }

    ol {
      list-style-type: decimal;
      padding-left: 1.5rem;
    }
  }
</style>
