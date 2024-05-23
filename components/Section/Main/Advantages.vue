<script setup>
  const { data, error } = await useMyFetch(`/advantages`);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }
</script>

<template>
  <section>
    <div class="container space-y-16 md:space-y-12 lg:space-y-16">
      <UiTitle>
        Why you should book with
        <span>one of the best auto shipping companies</span>
      </UiTitle>

      <ul
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-y-16"
      >
        <li
          v-for="item in data.results"
          :key="item.id"
          class="flex flex-col max-lg:items-center max-lg:text-center space-y-2"
          data-aos="fade-up"
          :data-aos-delay="`${item.id * 100}`"
        >
          <div
            class="main_advantages_icon bg-gradient-to-r from-blue-main to-blue-600 size-16 md:size-20 rounded-full overflow-hidden flex-center"
          >
            <img
              width="32"
              height="32"
              :src="item?.icon"
              alt="Advantages icon"
              class="size-7 lg:size-8 object-contain"
            />
          </div>

          <h5
            class="text-[1.5rem] lg:text-[1.75rem] leading-[2.25rem] font-medium"
          >
            {{ item.title }}
          </h5>
          <p class="text-[0.875rem] leading-6 lg:text-base">
            {{ item.subtitle }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
  .main_advantages_icon {
    svg {
      @apply w-6 lg:w-8 h-auto;
    }
  }
</style>
