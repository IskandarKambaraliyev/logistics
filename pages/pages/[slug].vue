<script setup>
  const route = useRoute();
  const { slug } = route.params;
</script>

<template>
  <div>
    {{ slug }}
  </div>
</template>

<style lang="scss" scoped></style>
