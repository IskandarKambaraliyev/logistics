<script setup>
  const image =
    "https://cp.express-auto-carriers.com/media/slides/blog_J6czO4f.png";

  const { data, error } = await useMyFetch(`/blog`);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }
</script>

<template>
  <BaseBanner
    :image="image"
    label="Blog"
    title="A collection of articles about logistics"
  />
  <SectionBlog :data="data" />
</template>

<style lang="scss" scoped></style>
