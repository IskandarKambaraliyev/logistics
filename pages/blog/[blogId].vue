<script setup>
  const route = useRoute();
  const blogId = route.value.blogId;
</script>

<template>
  <div>
    {{ blogId }}
  </div>
</template>

<style lang="scss" scoped></style>
