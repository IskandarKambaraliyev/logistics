<script setup>
  import { convert } from "html-to-text";

  const route = useRoute();
  const { slug } = route.params;

  const { data, error } = await useMyFetch(`/pages/${slug}`);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }

  useSeoMeta({
    title: data.value.title,
    ogTitle: data.value.title,
    description: convert(data.value?.content.slice(0, 200)),
    ogDescription: convert(data.value?.content.slice(0, 200)),
    ogImage: data.value.image,
  });
</script>

<template>
  <BaseBanner :title="data.title" label="Pages" :image="data.image" />
  <BaseDetail :data="data" class="mb" />
</template>

<style lang="scss" scoped></style>
