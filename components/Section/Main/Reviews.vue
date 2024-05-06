<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";

  // import required modules
  import { Autoplay } from "swiper/modules";

  import "swiper/css";
  import "swiper/css/pagination";

  const data = {
    overal: "5.00",
    total: "200",
    feedbacks: [
      {
        id: 1,
        content:
          "As a top-rated auto transport company, you can have confidence your vehicle will be transported safely. When shipping your vehicle, you’re allowing our team of experts to handle every step of the process, ensuring there are no speed bumps along the way.",
        user: {
          name: "Bastian Schweinsteiger",
          position: "CEO of Tesla",
          image:
            "https://s3-alpha-sig.figma.com/img/70e0/a363/f2e8a7963bcd71d49d6e8479fc8850bf?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yi5iul3QUQX1DD3pBP8lp3jcgkczgEe1j90IMddoVtud1PmnpFLphxIAK1b1PDPq~m1ltPM5butccilNPlj50AR1AMrfCktW1aC3LeaVwXnPG0tk2PpcDaw5~-w0WknsCsDNCpP7X-6fKRXjG1kE-xSli8~dUoRZ9O27QNGVHXuPmbEcXNYaAOb3Kko0OVWoM7JiWsg9R38PF6KfMJVuXit-nW-acnvFfJ8RfbR0wRVeXx9AqmnelKXL8pJBbDo7iPMvLau6~dxngBGiv0s2vcl9iVgtrWsOzmLUPH6yFgvgn35NSEUjq3bmG7MbU8vkuiae2x0frqrs~r42cTkrTA__",
        },
        rating: 5,
      },
      {
        id: 2,
        content:
          "As a top-rated auto transport company, you can have confidence your vehicle will be transported safely. When shipping your vehicle, ",
        user: {
          name: "CHI XAN SZU",
          position: "CEO of something",
          image:
            "https://s3-alpha-sig.figma.com/img/c6de/7445/64812a7f79946f13a5afc0dd1872510b?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jT9ZZU6dcx4ViVGjLKT2KIt6C-3cOaJNMYkzwWIcwtJy7zZISn8KPP5Rk7eoCcOoYtOYZG~RBocp4E5F6wAdyhcjI4n1qVsjZUFX-gH8PAU1sEBis63Z~HHy9wWT3wis8-pSebnSN8lG8J1-neYFZ6sfum~KTpUcrRt35H-MVatWHdI6t~mZnLSfH54in1LXqOK-rgaEBkLeRQK~dKWhgPQtqFlU~p2Lfy8pNbHX5yUqmQE0hUBG1vWLM8Y5AqiKMRVeLOee8uwwGZrWMp9nodQqbAhPGTs7Ez41KQnuQU9DWuH-rR8j~8fLah2-n-1PDV6sfAGg4OeeGcjgBMzGOQ__",
        },
        rating: 4,
      },
      {
        id: 3,
        content:
          "As a top-rated auto transport company, you can have confidence your vehicle will be transported safely. When shipping your vehicle, you’re allowing our team of experts to handle every step of the process, ensuring there are no speed bumps along the way.As a top-rated auto transport company, you can have confidence your vehicle will be transported safely. When shipping your vehicle, ",
        user: {
          name: "SAM kotler",
          position: "CEO of something",
          image:
            "https://s3-alpha-sig.figma.com/img/4ec8/5e72/83b2aa42b854c2f59328ca0514e0dbd4?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pEbGa68PgqUtZXnBEMO9xCjSQ7ik3RA2586R7wYHPsqninxsiMN6mGqSSOHIZj7NLMSwV5urtVpkQqjLHEyRIf10D7ISaAWJDGuVowcLq9b0g4Wqi1gdUieQDKtBrONo18ddXJhr49r8ImvzVrPn4Vc2YEvQ8CozYL1RTwIBWhpjjAKQ5rAcsXn~MqodOB1oMWmxUV66K2vRdn7iGohcBJmXBh4X8~-uFDkHsu8zS4eVte~UcREZDiGoCSReYmjUNASSbuG-PM9D2pTsI9oVOjUTXVtLpB402wsPK2n4BB4jdv4gJ~NQEzs~jm3-tqvUdshnaOeTtHij3V4ZaFpBlw__",
        },
        rating: 5,
      },
      {
        id: 4,
        content:
          "As a top-rated auto transport company, you can have confidence your vehicle will be transported safely. When shipping your vehicle, ",
        user: {
          name: "CHI XAN SZU",
          position: "CEO of something",
          image:
            "https://s3-alpha-sig.figma.com/img/c6de/7445/64812a7f79946f13a5afc0dd1872510b?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jT9ZZU6dcx4ViVGjLKT2KIt6C-3cOaJNMYkzwWIcwtJy7zZISn8KPP5Rk7eoCcOoYtOYZG~RBocp4E5F6wAdyhcjI4n1qVsjZUFX-gH8PAU1sEBis63Z~HHy9wWT3wis8-pSebnSN8lG8J1-neYFZ6sfum~KTpUcrRt35H-MVatWHdI6t~mZnLSfH54in1LXqOK-rgaEBkLeRQK~dKWhgPQtqFlU~p2Lfy8pNbHX5yUqmQE0hUBG1vWLM8Y5AqiKMRVeLOee8uwwGZrWMp9nodQqbAhPGTs7Ez41KQnuQU9DWuH-rR8j~8fLah2-n-1PDV6sfAGg4OeeGcjgBMzGOQ__",
        },
        rating: 4,
      },
    ],
  };

  const modules = [Autoplay];

  const autoplayConfig = {
    delay: 5000,
    disableOnInteraction: true,
    pauseOnMouseEnter: false,
  };

  const breakpoints = {
    100: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    450: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 1.7,
      spaceBetween: 16,
      centeredSlides: true,
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
              {{ data.overal }}
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
              {{ data.total }}+
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
        class="main_reviews_swiper"
      >
        <swiper-slide
          v-for="item in data.feedbacks"
          :key="item.id"
          class="flex flex-col gap-4 lg:gap-5 p-6 rounded-[1.5rem] md:rounded-[2rem] border border-dark-blue-000 h-full"
        >
          <div class="flex flex-col gap-2 lg:gap-5">
            <div class="flex items-center">
              <div v-for="(star, index) in 5" :key="index">
                <svg
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_113_2214)">
                    <path
                      d="M19.2401 13.3334L16.0001 2.66675L12.7601 13.3334H2.66675L10.9067 19.2134L7.77341 29.3334L16.0001 23.0801L24.2401 29.3334L21.1067 19.2134L29.3334 13.3334H19.2401Z"
                      :class="
                        index < item.rating
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

            <div>{{ item.content }}</div>
          </div>

          <div class="flex items-center gap-5">
            <div class="size-12 lg:size-20 rounded-full overflow-hidden">
              <NuxtImg
                provider="ipx"
                format="webp"
                width="80"
                height="80"
                :placeholder="[10, 10, 5, 10]"
                :src="item.user.image"
                :alt="`User - ${item.user.name}`"
                class="size-full object-cover"
              />
            </div>

            <div class="flex flex-col gap-2">
              <span
                class="text-[1.25rem] lg:text-[1.75rem] leading-none font-bold font-din"
              >
                {{ item.user.name }}
              </span>
              <span
                class="text-[0.875rem] leading-4 lg:text-[1.25rem] lg:leading-[1.75rem] font-medium"
              >
                {{ item.user.position }}
              </span>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .main_reviews_swiper {
  }
</style>
