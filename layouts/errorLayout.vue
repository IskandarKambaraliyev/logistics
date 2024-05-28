<script setup></script>

<template>
  <div class="min-h-[80svh] w-full flex flex-col">
    <LayoutText />
    <LayoutHeaderDesktopHeader :is-sticky="true" />
    <LayoutHeaderMobileHeader :is-sticky="true" />
    <slot />
  </div>

  <LayoutFooter />
</template>

<style lang="scss" scoped></style>
