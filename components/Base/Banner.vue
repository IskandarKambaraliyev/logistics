<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <div
    class="relative min-h-[60vh] w-full flex flex-col justify-center md:justify-end pb-8 pt-20 lg:pb-16"
  >
    <div
      class="absolute inset-0 before:absolute before:inset-0 before:bg-black/40"
      v-if="props.image"
    >
      <NuxtImg
        provider="ipx"
        format="webp"
        :placeholder="[30, 10, 5, 10]"
        width="1920"
        height="648"
        :src="props?.image"
        alt="Banner Image"
        class="size-full object-cover"
      />
    </div>

    <div class="relative">
      <div class="container">
        <h4
          class="text-[1.5rem] md:text-[2rem] leading-none uppercase text-[#C3D4E1] font-din font-bold"
        >
          {{ label }}
        </h4>
        <UiTitle as="h1" class="text-white">{{ title }}</UiTitle>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
