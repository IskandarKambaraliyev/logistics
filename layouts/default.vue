<script setup></script>

<template>
  <LayoutText />
  <LazyLayoutHeaderDesktopHeader />
  <LazyLayoutHeaderMobileHeader />
  <LazyModalsInstant />
  <LazyModalsVideo />
  <main class="text-dark-blue-main">
    <slot />
  </main>
  <LazyLayoutFooter />
</template>

<style lang="scss" scoped></style>
