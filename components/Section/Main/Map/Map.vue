<script setup>
  const wrapper = ref(null);
  const content = ref(null);

  onMounted(() => {
    if (wrapper.value && content.value) {
      wrapper.value.style.minHeight = `${content.value.clientHeight}px`;
    }
  });
</script>

<template>
  <!-- :style="{
    minHeight: `${wrapperHeight}px`,
  }" -->
  <section
    class="relative flex items-center justify-end overflow-hidden"
    ref="wrapper"
  >
    <div
      class="max-w-[90%] lg:max-w-[70%] ml-auto max-lg:-mr-[25%] max-md:!hidden"
    >
      <SectionMainMapImage />
    </div>

    <div
      class="relative w-full md:absolute md:top-1/2 md:left-0 md:max-w-[37rem] md:w-1/2 md:-translate-y-1/2 z-[1]"
      ref="content"
    >
      <div class="container space-y-8">
        <UiTitle class="w-max max-w-full lg:max-w-[68rem]">
          Car transport anywhere in the U.S.
        </UiTitle>
        <SectionMainMapCards />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
