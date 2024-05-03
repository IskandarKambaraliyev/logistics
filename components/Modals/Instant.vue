<script setup>
  const instant = useInstant();
  const menu = useMenu();

  watch(instant, (val) => {
    if (val) {
      document.body.style.overflow = "hidden";
    } else {
      if (menu.value) {
        document.body.style.overflow = "hidden";
      } else document.body.style.overflow = "";
    }
  });

  const wrapper = ref(null);

  onClickOutside(wrapper, () => {
    instant.value = false;
  });
</script>

<template>
  <Transition name="fade-300">
    <div v-if="instant" class="fixed inset-0 z-modal+1 backdrop-blur-lg">
      <div class="h-full overflow-y-auto px-4 md:px-8 py-16 lg:py-32 relative">
        <div
          class="relative bg-white max-w-[50rem] w-full mx-auto rounded-[2rem] p-6 md:p-8"
          ref="wrapper"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
          repellat officia voluptatibus ipsa illo error repellendus cum sint,
          eveniet veritatis id sed, nam numquam. Sed sit praesentium inventore
          quod ipsam consectetur autem odio eius eum enim reprehenderit quis,
          officiis, voluptate molestiae soluta quas facilis nulla, magni
          sapiente natus provident exercitationem est? Sequi, ex. Officiis,
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped></style>
