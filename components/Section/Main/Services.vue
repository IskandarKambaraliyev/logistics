<script setup>
  const { data, error } = await useMyFetch(`/services`);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }
</script>

<template>
  <section>
    <div class="container space-y-12 md:space-y-16">
      <UiTitle>Popular vehicle shipping services</UiTitle>

      <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <li v-for="item in data.results" :key="item.id">
          <UiCardsService :item="item" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
