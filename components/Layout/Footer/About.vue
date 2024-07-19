<script setup>
  const year = new Date().getFullYear();

  const links = [
    {
      title: "Terms & conditions",
      to: "/pages/terms-and-conditions",
    },
    {
      title: "Privacy policy",
      to: "/pages/privacy-policy",
    },
  ];
</script>

<template>
  <div class="w-full border-t border-dark-blue-000">
    <div
      class="container py-6 lg:py-8 flex max-md:flex-col max-md:text-center gap-4 items-center justify-between"
    >
      <p
        class="text-[1rem] lg:text-[1.25rem] leading-none font-bold text-dark-blue-700 font-din"
      >
        Copyright © 2006-{{ year }} by Express Auto Carriers
      </p>
      <!-- <div class="flex items-center gap-2.5">
        <span
          class="text-[1rem] lg:text-[1.25rem] leading-none font-bold text-dark-blue-700 font-din"
        >
          Designed with love
        </span>
        <LayoutFooterRedmedia />
      </div> -->

      <div class="flex items-center gap-4">
        <NuxtLink
          v-for="(item, index) in links"
          :key="index"
          :to="item.to"
          class="font-din text-[1rem] lg:text-[1.25rem] leading-none font-bold hover:text-blue-main transition"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
