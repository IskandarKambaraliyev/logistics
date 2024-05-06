<script setup>
  const props = defineProps({
    data: {
      type: Array,
      required: true,
    },
  });
</script>

<template>
  <ul class="flex flex-col gap-4">
    <li v-for="(item, index) in data" :key="index">
      <NuxtLink
        :to="item.to"
        class="text-[1.25rem] leading-none font-bold font-din text-dark-blue-700 hover:text-blue-main transition"
      >
        {{ item.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
