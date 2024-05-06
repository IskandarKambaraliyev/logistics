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
      slidesPerView: 2,
      spaceBetween: 16,
    },
    450: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 8,
      spaceBetween: 44,
    },
    1550: {
      slidesPerView: 10,
      spaceBetween: 48,
    },
  };

  const data = [
    {
      id: 1,
      image: "/brands/brand-1.png",
    },
    {
      id: 2,
      image: "/brands/brand-2.png",
    },
    {
      id: 3,
      image: "/brands/brand-3.png",
    },
    {
      id: 4,
      image: "/brands/brand-4.png",
    },
    {
      id: 5,
      image: "/brands/brand-5.png",
    },
    {
      id: 6,
      image: "/brands/brand-6.png",
    },
    {
      id: 7,
      image: "/brands/brand-7.png",
    },
    {
      id: 8,
      image: "/brands/brand-8.png",
    },
  ];
</script>

<template>
  <div class="pt-[5.5rem] md:pt-[7.5rem] rounded-t-[2rem] -mt-8 bg-white">
    <div class="container space-y-8 md:space-y-14">
      <UiTitle>
        Trusted by
        <span>the world’s best</span>
      </UiTitle>

      <swiper :modules="modules" :breakpoints="breakpoints" :loop="true" :autoplay="autoplayConfig">
        <swiper-slide v-for="item in data" :key="item.id" class="">
          <NuxtImg
            provider="ipx"
            format="webp"
            :placeholder="[20, 10, 5, 10]"
            :src="item.image"
            :alt="`Brand - ${item.id}`"
            class="w-full h-auto"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss">

.swiper-wrapper {
  align-items: center;
}

</style>
