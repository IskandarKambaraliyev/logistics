<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";

  // import required modules
  import { Autoplay } from "swiper/modules";

  import "swiper/css";
  import "swiper/css/pagination";

  const modules = [Autoplay];

  const autoplayConfig = {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  };

  const breakpoints = {
    100: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },
    450: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 1.7,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 2.2,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 2.8,
      spaceBetween: 16,
    },
    1550: {
      slidesPerView: 3.2,
      spaceBetween: 16,
    },
  };

  const { data, error } = await useMyFetch(`/reviews/`);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }
</script>

<template>
  <section>
    <div class="container">
      <UiTitle>Reviews</UiTitle>
      <div class="flex flex-wrap gap-y-8 gap-x-28 mt-12 lg:mt-16 mb-10 md:mb-8">
        <div class="flex items-center gap-4">
          <div class="size-10 lg:size-20">
            <svg
              width="5rem"
              height="5rem"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-full h-auto"
            >
              <path
                d="M49.72 32.0002L40 0.000244141L30.28 32.0002H-3.05176e-05L24.72 49.6402L15.32 80.0002L40 61.2402L64.72 80.0002L55.32 49.6402L80 32.0002H49.72Z"
                fill="white"
              />
              <path
                d="M49.72 32.0002L40 0.000244141L30.28 32.0002H-3.05176e-05L24.72 49.6402L15.32 80.0002L40 61.2402L64.72 80.0002L55.32 49.6402L80 32.0002H49.72Z"
                fill="#D3D6DB"
              />
            </svg>
          </div>

          <div class="flex items-end">
            <h6
              class="text-[4rem] md:text-[6rem] lg:text-[10rem] leading-none font-din font-bold"
            >
              <!-- {{ data.overal }} -->
              5
            </h6>
            <span
              class="text-[1rem] lg:text-[1.25rem] leading-normal font-medium mb-4"
            >
              most of them
            </span>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="size-10 lg:size-20">
            <svg
              width="6rem"
              height="6rem"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-full h-auto"
            >
              <g clip-path="url(#clip0_113_2180)">
                <path
                  d="M87.9999 24.0002H75.9999V60.0002H23.9999V72.0002H71.9999L87.9999 88.0002V24.0002ZM67.9999 52.0002V8.00024H7.99988V68.0002L23.9999 52.0002H67.9999Z"
                  fill="white"
                />
                <path
                  d="M87.9999 24.0002H75.9999V60.0002H23.9999V72.0002H71.9999L87.9999 88.0002V24.0002ZM67.9999 52.0002V8.00024H7.99988V68.0002L23.9999 52.0002H67.9999Z"
                  fill="#D3D6DB"
                />
              </g>
              <defs>
                <clipPath id="clip0_113_2180">
                  <rect width="96" height="96" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div class="flex items-end">
            <h6
              class="text-[4rem] md:text-[6rem] lg:text-[10rem] leading-none font-din font-bold"
            >
              {{ data.count }}+
            </h6>
            <span
              class="text-[1rem] lg:text-[1.25rem] leading-normal font-medium mb-4"
            >
              our client feedbacks
            </span>
          </div>
        </div>
      </div>

      <swiper
        :modules="modules"
        :breakpoints="breakpoints"
        :loop="true"
        :autoplay="autoplayConfig"
        class="main_reviews_swiper"
      >
        <swiper-slide v-for="item in data.results" :key="item.id">
          <div
            class="flex-1 flex flex-col gap-4 lg:gap-5 p-6 rounded-[1.5rem] md:rounded-[2rem] border border-dark-blue-000 h-full justify-between"
          >
            <div class="flex flex-col gap-2 lg:gap-2">
              <div class="flex items-center">
                <div
                  v-for="(star, index) in 5"
                  :key="index"
                  class="size-4 lg:size-6"
                >
                  <svg
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-full h-auto"
                  >
                    <g clip-path="url(#clip0_113_2214)">
                      <path
                        d="M19.2401 13.3334L16.0001 2.66675L12.7601 13.3334H2.66675L10.9067 19.2134L7.77341 29.3334L16.0001 23.0801L24.2401 29.3334L21.1067 19.2134L29.3334 13.3334H19.2401Z"
                        :class="
                          index < item.stars_count
                            ? 'fill-yellow-main'
                            : 'fill-dark-blue-100'
                        "
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_113_2214">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <div class="line-clamp-4 text-[0.875rem] leading-5">
                {{ item.review_text }}
              </div>
            </div>

            <div class="flex items-center gap-2 lg:gap-5">
              <div class="size-10 lg:size-14 rounded-full overflow-hidden">
                <NuxtImg
                  provider="ipx"
                  format="webp"
                  width="80"
                  height="80"
                  :placeholder="[10, 10, 5, 10]"
                  :src="item.author_photo"
                  :alt="`User - ${item.author_full_name}`"
                  class="size-full object-cover"
                />
              </div>

              <div class="flex flex-col">
                <span
                  class="text-[1.25rem] lg:text-[1.75rem] leading-none font-bold font-din capitalize"
                >
                  {{ item.author_full_name }}
                </span>
                <span
                  class="text-[0.875rem] leading-4 lg:text-[1rem] lg:leading-[1.5rem] font-medium"
                >
                  {{ item.author_job_title }}
                </span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .main_reviews_swiper {
    .swiper-slide {
      height: auto;
    }
  }
</style>
