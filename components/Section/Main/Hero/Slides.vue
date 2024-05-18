<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";

  // import required modules
  import { Autoplay, EffectFade, Pagination } from "swiper/modules";

  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/effect-fade";

  const modules = [Autoplay, EffectFade, Pagination];

  const autoplayConfig = {
    delay: 10000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  };

  const { data, error } = await useMyFetch(`/slides/`);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }
</script>

<template>
  <div
    class="absolute inset-0 main_hero_slides"
    :style="{
      '--length': data.results?.length,
    }"
  >
    <swiper
      :slides-per-view="1"
      :space-between="0"
      :modules="modules"
      :autoplay="autoplayConfig"
      :pagination="{
        clickable: true,
      }"
      class="size-full"
      :loop="true"
      :effect="'fade'"
    >
      <swiper-slide v-for="(item, index) in data.results" :key="index">
        <div class="size-full">
          <NuxtImg
            provider="ipx"
            format="webp"
            width="1920"
            height="1080"
            :placeholder="[20, 10, 5, 10]"
            :src="item?.image"
            alt="Hero image"
            class="size-full object-cover"
          />
        </div>
      </swiper-slide>

      <div
        class="absolute inset-0 z-[1]"
        :style="{
          background:
            'linear-gradient(270deg, rgba(0, 136, 179, 0.00) 8.23%, rgba(0, 57, 74, 0.50) 91.88%), linear-gradient(180deg, rgba(0, 57, 74, 0.50) 0.52%, rgba(0, 57, 74, 0.00) 72.06%)',
        }"
      />
    </swiper>
  </div>
</template>

<style lang="scss">
  .main_hero_slides {
    .swiper-pagination {
      z-index: 2 !important;
      width: calc(100% - 2rem) !important;
      max-width: 30.75rem !important;
      left: unset !important;
      right: 50% !important;
      transform: translateX(50%);
      bottom: 1.5rem !important;
      display: grid;
      gap: 0.25rem;
      grid-template-columns: repeat(var(--length), 1fr);
      height: 0.25rem !important;

      &-bullet {
        width: 100% !important;
        height: 100% !important;
        border-radius: unset !important;
        background-color: rgba(255, 255, 255, 0.5) !important;
        opacity: unset !important;

        &-active {
          background-color: white !important;
        }
      }

      @media screen and (min-width: 768px) {
        width: calc(100% - 4rem) !important;
        bottom: 2rem !important;
      }

      @media screen and (min-width: 1280px) {
        width: calc(100% - 8rem) !important;
        bottom: 2.5rem !important;
        right: 5rem !important;
        transform: unset;
      }
    }
  }
</style>
