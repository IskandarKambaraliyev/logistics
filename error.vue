<script setup>
  const props = defineProps({
    error: {
      type: Object,
      required: true,
    },
  });

  const handleError = () => clearError({ redirect: "http://localhost:3000" });
</script>

<template>
  <NuxtLayout name="error-layout">
    <div class="flex-1 flex-center flex-col py-20 mt-16">
      <h2 class="text-3xl font-bold" data-aos="fade-up" :data-aos-delay="500">
        404
      </h2>

      <h3 class="mb-8" data-aos="fade-up" :data-aos-delay="600">
        Page not found
      </h3>

      <!-- <UiButton @click="handleError" data-aos="fade-up" :data-aos-delay="700">
        Go back to home
      </UiButton> -->

      <UiButton to="/">Go back to home</UiButton>
    </div>
  </NuxtLayout>
</template>
