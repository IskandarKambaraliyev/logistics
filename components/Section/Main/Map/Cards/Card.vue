<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    isLast: {
      type: Boolean,
      default: false,
    },
  });

  const map = useUSMap();

  const handleClick = () => {
    if (!props.isActive && props.data.value) {
      map.value.state = props.data.value;
    }
  };
</script>

<template>
  <div
    class="py-6 lg:py-8"
    :class="{
      'border-b border-[#d9d9d9]': !isLast,
      'cursor-pointer': !isActive,
    }"
    @click="handleClick"
  >
    <span
      class="w-full text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] leading-none font-bold font-din uppercase"
      :class="isActive ? '!hidden' : ''"
    >
      {{ data.title }}
    </span>
    <div class="w-full" :class="isActive ? '' : '!hidden'">
      <div class="w-full aspect-[2/1]">
        <NuxtImg
          provider="ipx"
          format="webp"
          width="500"
          height="250"
          :src="data.image"
          :placeholder="[20, 10, 5, 10]"
          alt="State image"
          class="size-full object-cover"
        />
      </div>

      <div class="mt-6 space-y-2">
        <div class="flex items-center space-x-3 lg:space-x-2">
          <div class="size-6 lg:size-8">
            <svg
              width="2rem"
              height="2rem"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-full h-auto"
            >
              <g clip-path="url(#clip0_491_1062)">
                <path
                  d="M15.986 2.66675C8.62602 2.66675 2.66602 8.64008 2.66602 16.0001C2.66602 23.3601 8.62602 29.3334 15.986 29.3334C23.3593 29.3334 29.3327 23.3601 29.3327 16.0001C29.3327 8.64008 23.3593 2.66675 15.986 2.66675ZM21.6393 24.0001L15.9993 20.6001L10.3593 24.0001L11.8527 17.5867L6.87935 13.2801L13.4393 12.7201L15.9993 6.66675L18.5593 12.7067L25.1193 13.2667L20.146 17.5734L21.6393 24.0001Z"
                  fill="#00D1FF"
                />
              </g>
            </svg>
          </div>

          <UiTitle>{{ data.title }}</UiTitle>
        </div>

        <div class="text-[0.875rem] leading-5 lg:!text-base line-clamp-6">
          {{ data.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
