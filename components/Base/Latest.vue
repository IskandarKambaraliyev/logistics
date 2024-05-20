<script setup>
  const { data, error } = await useMyFetch(`/blog/?limit=4`);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }
</script>

<template>
  <section class="mb">
    <div class="container space-y-12 lg:space-y-16">
      <div class="flex items-center justify-between">
        <UiTitle>Latest stories for you</UiTitle>

        <UiButton
          color="dark"
          variant="secondary"
          to="/blog"
          class="max-lg:!hidden"
        >
          All stories
        </UiButton>
      </div>

      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <li v-for="item in data.results.slice(0, 4)" :key="item.id">
          <UiCardsBlog :item="item" />
        </li>
      </ul>

      <UiButton
        color="dark"
        variant="secondary"
        to="/blog"
        class="lg:!hidden w-max max-w-full mx-auto"
      >
        All stories
      </UiButton>
    </div>
  </section>
</template>

<!-- <style lang="scss" scoped></style> -->
