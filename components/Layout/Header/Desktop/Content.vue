<script setup>
  const props = defineProps({
    item: {
      type: Object,
      required: false,
    },
    modelValue: {
      type: String,
      required: false,
    },
    open: {
      type: Boolean,
      required: false,
    },
  });

  const emit = defineEmits(["update:modelValue", "hover", "toggle"]);
</script>

<template>
  <div
    class="relative"
    @mouseenter="emit('hover', item.title)"
    @mouseleave="emit('hover', null)"
  >
    <NuxtLink
      :to="item?.link"
      class="py-2 px-3 flex items-center gap-3 max-w-[12rem] w-max"
      @click="
        () => {
          if (!item.link) {
            emit('toggle', item.title);
          }
        }
      "
    >
      <span
        class="flex-1 truncate text-[0.875rem] leading-6 font-medium font-euclid"
      >
        {{ item.title }}
      </span>
      <UIcon
        v-if="item.children"
        name="i-heroicons-chevron-down-20-solid"
        class="size-6"
        dynamic
      />
    </NuxtLink>

    <LayoutHeaderDesktopLinks
      :open="modelValue === item.title && item.children"
      :data="item.children"
    />
  </div>
</template>

<style lang="scss" scoped></style>
