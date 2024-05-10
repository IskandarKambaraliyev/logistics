<script setup>
  import { data } from "~/data/service.js";

  const route = useRoute();
  const id = route.params.serviceId;
</script>

<template>
  <BaseBanner :title="data.title" label="Service" :image="data.image" />
  <SectionServiceDetail :data="data" />
  <SectionServiceServices :data="data" />
  <BaseLatest />
</template>

<style lang="scss" scoped></style>
