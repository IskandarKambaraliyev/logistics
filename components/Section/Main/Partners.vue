<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";

  // import required modules
  import { Autoplay } from "swiper/modules";

  import "swiper/css";
  import "swiper/css/pagination";

  const modules = [Autoplay];

  const autoplayConfig = {
    delay: 5000,
    disableOnInteraction: true,
    pauseOnMouseEnter: false,
  };

  const breakpoints = {
    100: {
      slidesPerView: 2.3,
      spaceBetween: 16,
    },
    450: {
      slidesPerView: 3.3,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 4.3,
      spaceBetween: 30,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 5.3,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 6.5,
      spaceBetween: 48,
    },
    1550: {
      slidesPerView: 7.5,
      spaceBetween: 64,
    },
  };

  const { data, error } = await useMyFetch(`/partners/`);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }
</script>

<template>
  <div
    class="pt-[5.5rem] md:pt-[7.5rem] rounded-t-[2rem] -mt-8 bg-white space-y-8 md:space-y-14"
    v-if="data.results"
  >
    <div class="container space-y-14">
      <UiTitle>
        Trusted by
        <span>the world’s best</span>
      </UiTitle>
      <swiper
        :modules="modules"
        :breakpoints="breakpoints"
        :loop="true"
        :autoplay="autoplayConfig"
        class="main_partners_swiper"
      >
        <swiper-slide
          v-for="item in data?.results"
          :key="item.id"
          class="!flex justify-center"
        >
          <img
            :src="item.logo"
            :alt="`Brand - ${item.id}`"
            class="w-auto h-full"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss">
  .main_partners_swiper {
    .swiper-wrapper {
      align-items: center !important;
    }
  }
</style>
