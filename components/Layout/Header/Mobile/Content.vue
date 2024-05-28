<script setup>
  const props = defineProps({
    open: {
      type: Boolean,
      required: false,
    },
    content: {
      type: Array,
      required: false,
    },
    for: {
      type: String,
      required: false,
    },
  });

  const emit = defineEmits(["close"]);

  const allChildrenEmpty = computed(() => {
    return props.content.children.every(
      (item) => !item.children || item.children?.length === 0
    );
  });
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
      <NuxtLink
        :to="content?.link"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base font-euclid font-medium text-white"
        :class="{ 'hover:text-blue-main transition': content.link }"
      >
        {{ content.title }}
      </NuxtLink>
    </div>
    <div
      class="relative grid grid-cols-1 md:grid-cols-2 gap-14 pb-16"
      :class="{ 'gap-y-6': allChildrenEmpty }"
    >
      <div
        v-for="(item, index) in content.children"
        :key="index"
        class="flex flex-col gap-4 md:gap-6"
        :class="{
          'col-span-1 md:col-span-2':
            item.children?.length > 5 || allChildrenEmpty,
        }"
      >
        <NuxtLink :to="item.link" class="link">
          <span
            class="title"
            :class="{ 'text-blue-700': item.children, active: item.link }"
          >
            {{ item.title }}
          </span>
          <span class="subtitle" v-if="!item.children">
            {{ item.subtitle }}
          </span>
        </NuxtLink>

        <div
          class="flex flex-col gap-4 md:gap-6"
          :class="{
            'md:grid grid-cols-2 md:gap-y-6 md:gap-x-16':
              item.children?.length > 5,
          }"
        >
          <NuxtLink
            v-for="(child, i) in item?.children"
            :key="i"
            :to="child.link"
            class="link"
          >
            <span class="title" :class="{ active: child.link }">
              {{ child.title }}
            </span>
            <span class="subtitle">
              {{ child.subtitle }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .link {
    @apply flex flex-col;

    span {
      @apply text-base font-bold transition;
      font-family: "Manrope";

      &.subtitle {
        @apply text-dark-blue-400;
      }
    }

    @media screen and (hover: hover) {
      &:hover {
        .title.active {
          @apply text-blue-main;
        }
      }
    }
  }
</style>
