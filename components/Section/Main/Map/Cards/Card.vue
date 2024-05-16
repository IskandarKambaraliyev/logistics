<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  });
</script>

<template>
  <div>Card</div>
</template>

<style lang="scss" scoped></style>
