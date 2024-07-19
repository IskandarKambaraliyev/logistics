<script setup>
  const instant = useInstant();
  const video = useVideoModal();

  const image = "https://cp.express-auto-carriers.com/media/slides/howbook.png";

  const steps = [
    {
      title: "Step 1",
      description: "Quote and book your order",
      icon: '<svg width="2rem" height="2rem" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_113_2359)"><path d="M30.6667 2.66675H1.33337V24.0001H13.3334L10.6667 28.0001V29.3334H21.3334V28.0001L18.6667 24.0001H30.6667V2.66675ZM28 18.6667H4.00004V5.33341H28V18.6667Z" fill="white"/></g><defs><clipPath id="clip0_113_2359"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>',
    },
    {
      title: "Step 2",
      description: "We pick up your vehicle",
      icon: '<svg width="2rem" height="2rem" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_113_2366)"><path d="M24.7733 6.66675H7.24L4 16.0001V28.0001H8V25.3334H24V28.0001H28V16.0001L24.7733 6.66675ZM8.66667 21.3334C7.56 21.3334 6.66667 20.4401 6.66667 19.3334C6.66667 18.2267 7.56 17.3334 8.66667 17.3334C9.77333 17.3334 10.6667 18.2267 10.6667 19.3334C10.6667 20.4401 9.77333 21.3334 8.66667 21.3334ZM23.3333 21.3334C22.2267 21.3334 21.3333 20.4401 21.3333 19.3334C21.3333 18.2267 22.2267 17.3334 23.3333 17.3334C24.44 17.3334 25.3333 18.2267 25.3333 19.3334C25.3333 20.4401 24.44 21.3334 23.3333 21.3334ZM6.66667 14.6667L8.66667 8.66675H23.3333L25.3333 14.6667H6.66667Z" fill="white"/></g><defs><clipPath id="clip0_113_2366"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>',
    },
    {
      title: "Step 3",
      description: "Receive your vehicle",
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_113_2373)"><path d="M29.3333 2.66675H7.99996V24.0001H29.3333V2.66675ZM16.6266 18.6667L12 14.0001L13.8666 12.1201L16.6266 14.8934L23.4666 8.00008L25.3333 9.88008L16.6266 18.6667ZM5.33329 8.00008H2.66663V29.3334H24V26.6667H5.33329V8.00008Z" fill="white"/></g><defs><clipPath id="clip0_113_2373"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>',
    },
  ];

  const videoSrc = "/video.mp4";
</script>

<template>
  <section class="overflow-x-hidden">
    <div class="container">
      <UiTitle>
        <span>How can I book</span>
        with Express Auto Carriers?
      </UiTitle>
      <p
        class="max-lg:text-center text-[0.875rem] leading-5 font-medium md:text-[1.25rem] md:leading-7 mt-4 md:mt-6 mb-6 md:mb-12 lg:mb-14"
      >
        Express Auto Career’s company guide to quick, easy and safe auto
        shipping
      </p>

      <div class="flex max-lg:flex-col gap-2 md:gap-4">
        <div
          data-aos="fade-right"
          class="lg:flex-1 w-full aspect-[2/1] rounded-[1rem] md:rounded-[2rem] overflow-hidden relative"
        >
          <NuxtImg
            provider="ipx"
            format="webp"
            width="806"
            height="403"
            :placeholder="[20, 10, 5, 10]"
            :src="image"
            alt="How to book"
            class="size-full object-cover"
          />

          <button
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] size-[2.25rem] md:size-[4.125rem] rounded-full overflow-hidden flex-center"
            @click="
              () => {
                video.open = true;
                video.src = videoSrc;
                video.internal = true;
              }
            "
          >
            <svg
              width="4.125rem"
              height="4.125rem"
              viewBox="0 0 67 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-full h-auto"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.5 66C51.7254 66 66.5 51.2254 66.5 33C66.5 14.7746 51.7254 0 33.5 0C15.2746 0 0.5 14.7746 0.5 33C0.5 51.2254 15.2746 66 33.5 66ZM27.45 45.1931L46.425 34.2378L27.45 23.2826L27.45 45.1931Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <div
          data-aos="fade-left"
          class="w-full lg:max-w-[35rem] bg-blue-000 rounded-[2rem] p-6 lg:p-10 lg:pb-12"
        >
          <h5
            class="text-[1.5rem] lg:text[1.75rem] leading-[2.25rem] font-semibold"
          >
            Our auto transporter steps:
          </h5>

          <ul
            class="flex-1 flex flex-col md:grid grid-cols-3 lg:flex gap-6 lg:gap-8 mt-8 mb-9 md:mb-12 step_list"
          >
            <li
              v-for="(item, index) in steps"
              :key="index"
              class="flex items-center gap-2 lg:gap-5"
            >
              <div
                class="steps_icon flex-center rounded-full size-10 lg:size-20 bg-blue-main"
                v-html="item.icon"
              ></div>
              <div class="flex-1 space-y-2">
                <h6
                  class="text-base lg:text-[1.25rem] lg:leading-[1.75rem] font-semibold"
                >
                  {{ item.title }}
                </h6>
                <p
                  class="text-base lg:text-[1.25rem] lg:leading-[1.75rem] font-semibold"
                >
                  {{ item.description }}
                </p>
              </div>
            </li>
          </ul>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:flex md:items-center gap-4"
          >
            <UiButton color="dark" variant="primary" @click="instant = true">
              Get an instant quote
            </UiButton>
            <UiButton color="dark" variant="secondary" to="/contact">
              Check my order
            </UiButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .steps_icon {
    svg {
      @apply w-4 lg:w-8 h-auto;
    }
  }
</style>
