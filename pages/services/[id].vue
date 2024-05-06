<script setup>
  const route = useRoute();
  const id = route.params.id;
</script>

<template>
  <div>Service - {{ id }}</div>
</template>

<style lang="scss" scoped></style>
