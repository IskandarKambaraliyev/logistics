<script setup>
  const sticky = ref(true);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      sticky.value = true;
    } else {
      sticky.value = false;
    }
  };

  onMounted(() => {
    sticky.value = window.scrollY > 0;

    window.addEventListener("scroll", handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>

<template>
  <header
    class="header lg:!hidden fixed top-10 left-0 z-header w-full py-3 border-b border-white/20 transition"
    :class="sticky ? 'bg-white text-dark-blue-main' : 'bg-white/10 text-white'"
  >
    <div class="container flex items-center justify-between">
      <LayoutHeaderLogo :sticky="sticky" />
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
