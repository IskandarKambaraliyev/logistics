<script setup>
  const video = useVideoModal();

  const content = ref(null);

  const handleClose = () => {
    video.value.open = false;
    video.value.src = null;
    video.value.internal = false;
    window.history.back();
  };

  const handlePopstate = () => {
    if (video.value.open) {
      video.value.open = false;
      video.value.src = null;
      video.value.internal = false;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape" && video.value.open) {
      handleClose();
    }
  };

  onClickOutside(content, () => {
    handleClose();
  });

  onMounted(() => {
    window.addEventListener("popstate", handlePopstate);
    window.addEventListener("keydown", handleKeyDown);
  });

  onUnmounted(() => {
    window.removeEventListener("popstate", handlePopstate);
    window.removeEventListener("keydown", handleKeyDown);
  });

  watch(
    () => video.value.open,
    (val) => {
      if (val) {
        document.body.style.overflow = "hidden";
        window.history.pushState({ open: true }, "", "");
      } else {
        document.body.style.overflow = "auto";
      }
    }
  );

  const isOpen = ref(false);

  watch(
    () => video.value.open,
    (val) => {
      isOpen.value = val;
    }
  );
</script>

<template>
  <Transition name="fade-300">
    <div
      class="fixed inset-0 z-50 bg-black/50 backdrop-blur-lg p-4 md:p-8 flex-center"
      v-if="video.open"
    >
      <div class="relative w-full lg:w-[70%]" ref="content">
        <button class="absolute -top-10 right-0" @click="handleClose">
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 7L7 25"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25 25L7 7"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <iframe
          :src="useYoutubeLink(video?.src)"
          v-if="!video.internal"
          frameborder="0"
          allowfullscreen
          allow="autoplay"
          class="w-full max-h-[90svh] aspect-[16/9]"
        ></iframe>

        <video
          v-else
          :src="video.src"
          autoplay
          controls
          class="w-full max-h-[90svh] aspect-[16/9]"
        />
      </div>
    </div>
  </Transition>

  <!-- <UModal
    v-model="isOpen"
    :overlay="false"
    :ui="{
      container: 'items-center',
      padding: 'p-0',
      width: 'sm:max-w-full',
      height: 'h-screen',
      margin: 'sm:my-0',
      background: 'bg-transparent',
      transition: {
        enterFrom: 'sm:scale-100',
        leaveTo: 'sm:scale-100',
      },
    }"
  >
    <Transition name="fade-300">
      <div
        class="bg-blue-500 backdrop-blur-lg p-4 md:p-8 flex-center w-full h-full text-white"
        v-if="isOpen"
      >
        <div class="relative w-full lg:w-[70%]" ref="content">
          <button class="absolute -top-10 right-0" @click="handleClose">
            <svg
              width="2rem"
              height="2rem"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 7L7 25"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25 25L7 7"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <iframe
            :src="useYoutubeLink(video?.src)"
            frameborder="0"
            allowfullscreen
            allow="autoplay"
            class="w-full max-h-[90svh] aspect-[16/9]"
          ></iframe>
        </div>
      </div>
    </Transition>
  </UModal> -->
</template>

<style lang="scss" scoped></style>
