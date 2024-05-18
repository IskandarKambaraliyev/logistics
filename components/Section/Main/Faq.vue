<script setup>
  const { data, error } = await useMyFetch(`/faq/`);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }
</script>

<template>
  <section>
    <div
      class="container grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-[15rem]"
      v-if="data?.results"
    >
      <div class="lg:col-span-1 flex flex-col gap-4">
        <UiTitle>FAQ</UiTitle>

        <div class="max-w-[70%] w-full max-lg:!hidden">
          <svg
            width="18rem"
            height="11.9375rem"
            viewBox="0 0 288 191"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-full h-auto"
          >
            <path
              d="M287.736 174.336L274.68 190.208L259.832 177.664C252.92 182.784 243.704 186.368 231.416 186.368C214.52 186.368 203.768 179.712 196.088 170.752C183.8 156.416 182.776 136.448 182.776 93.184C182.776 49.92 183.8 29.952 196.088 15.616C203.768 6.65601 214.52 0 231.416 0C248.312 0 259.32 6.65601 266.744 15.616C279.032 29.952 280.056 49.92 280.056 93.184C280.056 133.888 278.776 149.248 272.632 161.792L287.736 174.336ZM251.384 93.184C251.384 59.648 250.872 41.472 245.24 32.768C242.68 28.672 238.328 25.856 231.416 25.856C224.504 25.856 220.408 28.672 217.848 32.768C212.216 41.472 211.448 59.648 211.448 93.184C211.448 126.72 212.216 144.896 217.848 153.6C220.408 157.696 224.504 160.512 231.416 160.512C233.976 160.512 235.768 160.256 237.56 159.232L228.088 151.296L241.4 135.424L248.824 141.568C251.128 131.584 251.384 117.76 251.384 93.184Z"
              fill="#F0F3F7"
            />
            <path
              d="M180.982 184.32H151.03L143.606 148.224H101.366L94.1982 184.32H63.9902L108.79 2.04785H136.694L180.982 184.32ZM138.23 122.368L122.614 46.0798L106.998 122.368H138.23Z"
              fill="#F0F3F7"
            />
            <path
              d="M76.544 27.9039H28.672V79.6159H69.888V105.472H28.672V184.32H0V2.04785H76.544V27.9039Z"
              fill="#F0F3F7"
            />
          </svg>
        </div>
      </div>

      <UAccordion
        color="white"
        variant="soft"
        size="md"
        :items="data.results"
        class="lg:col-span-2 gap-3 main_faq_list"
        :ui="{
          item: {
            padding: 'pt-0 pb-0',
          },
        }"
        :multiple="false"
      >
        <template #default="{ item, index, open }">
          <button
            class="p-5 bg-blue-000 transition flex items-center justify-between text-left"
            :class="`${open ? 'bg-blue-dark text-white' : ''}`"
          >
            <span
              class="text-[0.875rem] leading-4 md:text-[1.125rem] md:leading-loose font-medium"
            >
              {{ item.question }}
            </span>

            <div
              class="size-4 md:size-8 transition"
              :class="{ '-rotate-90': open }"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-auto"
              >
                <path
                  d="M8.65332 26.84L11.0133 29.2L24.2133 16L11.0133 2.79999L8.65332 5.15999L19.4933 16L8.65332 26.84Z"
                  :class="open ? 'fill-white' : 'fill-dark-blue-main'"
                />
              </svg>
            </div>
          </button>
        </template>
        <template #item="{ item, index, open }">
          <div
            class="text-dark-blue-main transition p-5 pt-1 text-[0.875rem] leading-4 md:text-base"
            :class="{ 'bg-blue-dark text-white': open }"
          >
            {{ item.answer }}
          </div>
        </template>
      </UAccordion>
    </div>
  </section>
</template>

<style lang="scss">
  .main_faq_list > div {
    @apply rounded-[1rem] md:rounded-[1.5rem] overflow-hidden;
  }
</style>
