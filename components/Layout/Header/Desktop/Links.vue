<script setup>
  const props = defineProps({
    data: {
      type: Array,
      required: true,
    },
    open: {
      type: Boolean,
      required: false,
    },
  });

  const allChildrenEmpty = computed(() => {
    return props.data.every(
      (item) => !item.children || item.children.length === 0
    );
  });
</script>

<template>
  <Transition name="fade-300">
    <div v-if="open" class="fixed pt-5 max-h-[70vh]">
      <div
        class="bg-white rounded-2xl max-w-full h-auto text-dark-blue-main overflow-hidden"
        :style="{
          boxShadow: '0px 4px 64px 0px rgba(0, 0, 0, 0.20)',
        }"
      >
        <div class="py-6 max-h-[70vh] h-auto overflow-auto custom-scrollbar">
          <div class="flex flex-row gap-4 divide-x divide-dark-blue-000" :class="{'flex-col': allChildrenEmpty}">
            <div
              v-for="(item, index) in data.slice(0, data.length)"
              :key="index"
              class="relative flex flex-col gap-6 px-6"
            >
              <NuxtLink :to="item?.link" class="link group">
                <span
                  class="title"
                  :class="{
                    'text-blue-dark': item.children,
                    active: item.link,
                  }"
                >
                  {{ item.title }}
                </span>
                <span class="subtitle" v-if="!item.children">
                  {{ item.subtitle }}
                </span>
              </NuxtLink>

              <div
                v-if="item.children"
                class="flex flex-col gap-6"
                :class="`${
                  data.length < 3 && item.children.length > 5
                    ? 'grid grid-cols-2 gap-6'
                    : ''
                }`"
              >
                <NuxtLink
                  v-for="(child, i) in item.children"
                  :key="i"
                  :to="child?.link"
                  class="link group"
                >
                  <span class="title active">
                    {{ child.title }}
                  </span>
                  <span class="subtitle">{{ child.subtitle }}</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
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

    &:hover {
      .title.active {
        @apply text-blue-main;
      }
    }
  }
</style>
