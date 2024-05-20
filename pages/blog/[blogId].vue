<script setup>
  const route = useRoute();
  const { blogId } = route.params;

  const { data, error } = await useMyFetch(`/blog/id/${blogId}`);

  console.log(data.value);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }
</script>

<template>
  <BaseBanner :title="data.title" label="Blog" :image="data.image" />
  <BaseDetail :data="data" class="mb" />
</template>

<style lang="scss" scoped></style>
