<script setup>
  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
    isLink: {
      type: Boolean,
      default: false,
    },
  });

  const canvas = ref(null);
  const ctx = ref(null);
  const width = ref(0);
  const gap = 8; // Define the desired gap between lines

  onMounted(() => {
    ctx.value = canvas.value.getContext("2d");
    width.value = canvas.value.clientWidth;

    // Calculate the number of lines based on the gap
    const numLines = Math.floor(width.value / (gap * 2));
    console.log(width.value, numLines * (gap * 2));

    for (let i = 0; i < numLines; i++) {
      const x = i * (gap * 2); // Adjust x-coordinate calculation
      drawLine({
        x: (x * 300) / width.value,
        y: 2,
        x1: ((x + gap) * 300) / width.value, // Adjust x1-coordinate for the gap
        y1: 2,
      });
    }
    drawLine({
      x:
        ((width.value - (width.value - numLines * (gap * 2))) * 300) /
        width.value,
      y: 2,
      x1: Math.min(((width.value - (width.value - numLines * (gap * 2))) + gap) * 300 / width.value, 300),
      y1: 2,
    });
  });

  const drawLine = (info) => {
    const { x, y, x1, y1 } = info;

    if (ctx.value) {
      ctx.value.beginPath();
      ctx.value.moveTo(x, y);
      ctx.value.lineTo(x1, y1);
      ctx.value.strokeStyle = "#8CBBE1";
      ctx.value.lineWidth = 100;
      ctx.lineCap = "round";
      ctx.value.stroke();
    } else {
      console.error("Canvas context not available.");
    }
  };
</script>

<template>
  <NuxtLink
    v-if="isLink"
    :to="`tel:${item.label}`"
    class="flex justify-between items-center select-text relative gap-4"
  >
    <span class="text-base lg:text-[1.25rem] lg:leading-[1.75rem] font-medium">
      {{ item.title }}
    </span>
    <canvas ref="canvas" class="flex-1 h-[3px]"></canvas>
    <span class="text-[1.5rem] lg:text-[2rem] leading-none font-bol font-din">
      {{ item.label }}
    </span>
  </NuxtLink>

  <div
    v-else
    class="flex justify-between items-center select-text relative gap-4"
  >
    <span class="text-base lg:text-[1.25rem] lg:leading-[1.75rem] font-medium">
      {{ item.title }}
    </span>
    <canvas ref="canvas" class="flex-1 h-[3px]"></canvas>
    <span class="text-[1.5rem] lg:text-[2rem] leading-none font-bol font-din">
      {{ item.label }}
    </span>
  </div>
</template>

<style lang="scss" scoped></style>
