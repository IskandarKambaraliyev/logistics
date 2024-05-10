<script setup>
  const image =
    "https://s3-alpha-sig.figma.com/img/bfbe/28b1/445e00a8d3849c9337b5d2e83dbfcd1b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=poobsOiC1vZ7OjqXH5O2XbLYapi0qrXoqjCQWJ8xDCg4Bh42vHKVTTFowUSPvj7ivmUSrV1~aSGdHTZTGo4CTnQM29RJyfx~cM6DpLTcEcEJZU7H~bbP11RpUNw54kO~Y~EBPWeKCgXA2j6zeabV3IUYhXPu0LKKLzASvQi8PD8L1L5tz6Ru7ZP-JoK1jJWYpQxvmh6maHa7sxqtxsi9~U-1W83R2jPeVJvvUX99I3aGFdHN8kdrYuY8C4JD~pr7Ndfy7rVrGs2Wf6YBwD2GpDCgZvDON0-aCQXj4-~ckUtIHUp6cIJNLHlFontfA~0zPqP23UB7cMUowV2LkmBaTw__";
</script>

<template>
  <div
    class="relative min-h-[100svh] flex flex-col justify-center lg:justify-end py-40"
  >
    <div class="absolute inset-0 z-[-1]">
      <NuxtImg
        provider="ipx"
        format="webp"
        width="1920"
        height="1080"
        :placeholder="[20, 10, 5, 10]"
        :src="image"
        alt="Hero image"
        class="size-full object-cover"
      />
    </div>

    <div
      class="absolute inset-0"
      :style="{
        background:
          'linear-gradient(270deg, rgba(0, 136, 179, 0.00) 8.23%, rgba(0, 57, 74, 0.50) 91.88%), linear-gradient(180deg, rgba(0, 57, 74, 0.50) 0.52%, rgba(0, 57, 74, 0.00) 72.06%)',
      }"
    />

    <div class="relative">
      <div class="container space-y-8 md:space-y-10">
        <UiTitle class="text-white">
          A nationwide auto transport company that offers speedy and dependable
          service
        </UiTitle>

        <SectionMainHeroQuote />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
