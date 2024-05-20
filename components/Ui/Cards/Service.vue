<script setup>
  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <NuxtLink
    :to="`/services/${item.id}`"
    class="bg-blue-000 rounded-[2rem] p-8 lg:p-10 flex flex-col gap-4 hover:bg-gradient-to-r from-blue-main to-blue-600 transition group"
  >
    <h5
      class="text-[1.5rem] lg:text-[2rem] leading-[2.25rem] font-medium text-dark-blue-main group-hover:text-white"
    >
      {{ item.title }}
    </h5>
    <p
      class="text-[0.875rem] leading-[1.25rem] lg:text-base text-dark-blue-main group-hover:text-white"
    >
      {{ item.subtitle }}
    </p>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
