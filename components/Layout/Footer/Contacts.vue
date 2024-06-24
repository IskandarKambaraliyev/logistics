<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <div class="flex flex-col lg:justify-end gap-6 lg:gap-8">
    <NuxtLink :to="`tel:${data.phone}`" class="flex items-center gap-1 group">
      <div class="size-6 md:size-8 lg:size-10 overflow-hidden shrink-0">
        <img src="/phone.svg" alt="" class="size-full object-cover" />
      </div>
      <span
        class="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] leading-none font-bold font-din text-dark-blue-700 group-hover:text-blue-main transition"
      >
        {{ data.phone }}
      </span>
    </NuxtLink>

    <NuxtLink
      :to="`mailto:${data.email}`"
      class="flex items-center gap-1 group"
    >
      <div class="size-6 md:size-8 lg:size-10 overflow-hidden shrink-0">
        <img src="/mail.svg" alt="" class="size-full object-cover" />
      </div>
      <span
        class="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] leading-none font-bold font-din text-dark-blue-700 group-hover:text-blue-main transition"
      >
        {{ data.email }}
      </span>
    </NuxtLink>

    <NuxtLink
      :to="`mailto:${data.email}`"
      class="flex items-center gap-1 group"
    >
      <div class="size-6 md:size-8 lg:size-10 overflow-hidden shrink-0">
        <img src="/address.svg" alt="" class="size-full object-cover" />
      </div>
      <span
        class="text-[1.25rem] md:text-[1.75rem] lg:text-[2.125rem] leading-none font-bold font-din text-dark-blue-700 group-hover:text-blue-main transition"
      >
        {{ data.address }}
      </span>
    </NuxtLink>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
