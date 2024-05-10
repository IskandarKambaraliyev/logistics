<script setup>
  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: true,
    },
    for: {
      type: String,
      required: false,
    },
  });
</script>

<template>
  <div class="flex flex-col gap-8">
    <label v-if="label" class="text-base font-medium" :for="props?.for">
      {{ required ? "*" : "" }}{{ label }}
    </label>
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
