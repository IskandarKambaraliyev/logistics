<script setup>
  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <NuxtLink
    :to="`/blog/${item.id}`"
    v-if="item"
    class="block relative hover:border-transparent group"
  >
    <div class="relative flex flex-col rounded-[1.5rem] overflow-hidden">
      <div class="rounded-[1.5rem] overflow-hidden">
        <NuxtImg
          width="590"
          height="394"
          provider="ipx"
          format="webp"
          :placeholder="[15, 10, 5, 10]"
          :src="item.image"
          :alt="`Blog image for ${item.title}`"
          class="w-full aspect-[3/2] object-cover"
        />
      </div>

      <div
        class="flex-1 flex flex-col justify-between p-6 group-hover:text-white transition gap-4"
      >
        <h6
          class="text-base md:text-[1.25rem] md:leading-[1.75rem] font-medium"
        >
          {{ item.title }}
        </h6>

        <p v-if="item.date_time" class="text-base">
          Posted on: {{ dateFormatter(item.date_time) }}
        </p>
      </div>

      <div
        class="absolute inset-0 bg-blue-dark z-[-1] opacity-0 group-hover:opacity-100 transition"
      ></div>
    </div>
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] group-hover:w-0 group-hover:bg-transparent bg-blue-light transition-300"
    ></div>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
