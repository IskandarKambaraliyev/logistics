<script setup>
  const route = useRoute();
  const { slug } = route.params;

  const { data, error } = await useMyFetch(`/pages/${slug}`);

  console.log(data.value);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }
</script>

<template>
  <BaseBanner :title="data.title" label="Pages" :image="data.image" />
  <BaseDetail :data="data" class="mb" />
</template>

<style lang="scss" scoped></style>
