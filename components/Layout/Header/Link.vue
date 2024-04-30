<script setup>
  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <NuxtLink :to="item.to" class="flex flex-col w-max max-w-full">
    <span class="font-bold text-base text-dark-blue-700">{{ item.title }}</span>
    <span class="font-bold text-base text-dark-blue-400">{{ item.description }}</span>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
