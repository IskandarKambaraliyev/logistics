<script setup>
  const props = defineProps({
    open: {
      type: Boolean,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
    for: {
      type: String,
      required: true,
    },
  });

  const emit = defineEmits(["close"]);

  console.log(props.content);
</script>

<template>
  <div
    class="absolute top-5 bottom-0 left-0 w-full flex flex-col gap-6 px-4 md:px-8"
  >
    <div class="relative">
      <UiButtonCircle color="light" @click="emit('close')">
        <svg
          width="1rem"
          height="1rem"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.82676 8.35346L11.8932 13.4199L11.4203 13.8928L5.52724 7.99972L11.4148 2.10619L11.8922 2.5809L6.82676 7.64635L6.47321 7.9999L6.82676 8.35346Z"
            class="stroke-white group-hover:stroke-dark-blue-main transition"
          />
        </svg>
      </UiButtonCircle>
      <h5
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base font-euclid font-medium text-white"
      >
        {{
          props?.for === "work"
            ? "How it works"
            : props?.for === "individuals"
            ? "For indviduals"
            : props?.for === "business"
            ? "For business"
            : "Why choose us?"
        }}
      </h5>
    </div>
    <div class="relative grid grid-cols-1 md:grid-cols-2 gap-14 pb-16">
      <div
        v-for="(section, ind) in content"
        :key="ind"
        class="flex flex-col gap-4 md:gap-6"
        :class="{ 'col-span-1 md:col-span-2': section.links.length > 5 }"
      >
        <h6
          v-if="section.title"
          class="text-base font-manrope font-bold text-blue-main"
        >
          {{ section.title }}
        </h6>
        <div
          class="gap-4 md:gap-6"
          :class="
            section?.links.length > 5
              ? 'flex flex-col md:grid grid-cols-2'
              : 'flex flex-col'
          "
        >
          <NuxtLink
            v-for="(item, index) in section?.links"
            :key="index"
            :to="item.to"
            class="flex flex-col"
          >
            <span class="text-base font-bold font-manrope text-white">
              {{ item.title }}
            </span>
            <span class="text-base font-bold font-manrope text-dark-blue-400">
              {{ item.description }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
