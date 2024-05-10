<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <section class="mb">
    <div class="container space-y-12 lg:space-y-16">
      <UiTitle>Latest stories for you</UiTitle>

      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <li v-for="item in data" :key="item.id">
          <UiCardsBlog :item="item" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
