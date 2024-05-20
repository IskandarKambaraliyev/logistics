<script setup></script>

<template>
  <LayoutText />
  <LayoutHeaderDesktopHeader />
  <LayoutHeaderMobileHeader />
  <LazyModalsInstant />
  <main class="text-dark-blue-main">
    <slot />
  </main>
  <LazyLayoutFooter />
</template>

<style lang="scss" scoped></style>
