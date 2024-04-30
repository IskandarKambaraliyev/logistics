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
    class="fixed top-10 left-0 z-header w-full py-3 border-b border-white/20 transition"
    :class="sticky ? 'bg-white text-dark-blue-main' : 'bg-white/10'"
    style="backdrop-filter: blur(150px);"
  >
    <div class="container">
      <LayoutHeaderLogo :sticky="sticky" />
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
