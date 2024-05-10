<script setup>
  const route = useRoute();
  const blogId = route.params.blogId;
</script>

<template>
  <div>
    {{ blogId }}
  </div>
</template>

<style lang="scss" scoped></style>
