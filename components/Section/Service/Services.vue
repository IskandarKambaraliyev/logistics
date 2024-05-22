<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <section v-if="data.additional_content">
    <div class="container space-y-20 lg:space-y-[7.5rem]">
      <div
        v-for="item in data.additional_content"
        :key="item.id"
        class="flex flex-col lg:odd:flex-row lg:even:flex-row-reverse gap-4"
      >
        <div class="flex-1 aspect-[2/1]">
          <NuxtImg
            provider="ipx"
            format="webp"
            width="568"
            height="284"
            :placeholder="[20, 10, 5, 10]"
            :src="item.image"
            alt="Service image"
            class="size-full object-cover"
          />
        </div>

        <div class="flex-1 flex flex-col gap-6">
          <h4 class="text-[2rem] md:text-[3rem] font-din font-bold uppercase">
            {{ item.title }}
          </h4>
          <div v-html="item.content"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
