<script setup>
  import { useElementBounding, useWindowSize } from "@vueuse/core";

  const { width, height } = useWindowSize();

  const props = defineProps({
    data: {
      type: Array,
      required: true,
    },
    top: {
      type: Number,
      required: true,
    },
    left: {
      type: Number,
      required: true,
    },
    open: {
      type: Boolean,
      required: true,
    },
  });

  const content = ref(null);

  // watch(content, (val) => {
  //   if (val) {
  //     console.log(val.clientWidth);
  //   }
  // });
</script>

<template>
  <Transition name="fade-300">
    <div
      v-if="open && data.length > 0"
      class="fixed z-header+1 left-0 pt-[21px] font-manrope"
      :style="{
        top: `${top - 1}px`,
        left: `${left}px`,
        maxWidth: 'calc(100vw - 4rem)',
        maxHeight: '70vh',
      }"
      ref="content"
    >
      <div
        class="py-6 bg-white rounded-2xl max-w-full max-h-full overflow-auto"
        :style="{
          boxShadow: '0px 4px 64px 0px rgba(0, 0, 0, 0.20)',
        }"
      >
        <div class="px-6 flex flex-row gap-6">
          <div
            v-for="(section, ind) in data"
            :key="ind"
            class="flex flex-col gap-6"
          >
            <h6 v-if="section.title" class="text-blue-700 text">
              {{ section.title }}
            </h6>
            <div
              class="gap-6"
              :class="
                section.links.length > 5 && data.length < 3
                  ? 'grid grid-cols-2'
                  : 'flex flex-col'
              "
            >
              <NuxtLink
                v-for="(item, index) in section.links"
                :to="item.to"
                class="flex flex-col"
              >
                <span class="text-dark-blue-700 text">{{ item.title }}</span>
                <span class="text-dark-blue-400 text">
                  {{ item.description }}
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
  .text {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 700;
  }
</style>
