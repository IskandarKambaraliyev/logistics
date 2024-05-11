<script setup>
  import { links as data } from "~/data/header.js";
  import { useWindowSize } from "@vueuse/core";

  const { width } = useWindowSize();

  const route = useRoute();

  const instant = useInstant();

  const openInstant = () => {
    instant.value = true;
  };

  const sticky = ref(true);
  const header = ref(null);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      sticky.value = true;
    } else {
      sticky.value = false;
    }
  };

  onMounted(() => {
    sticky.value = window.scrollY > 0;

    window.addEventListener("scroll", handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  const open = useMenu();

  const toggleMenu = () => {
    open.value = !open.value;
  };

  const contentOpen = ref(false);
  const currentContent = ref(null);
  const contentFor = ref(null);
  const content = ref(null);

  const clearContent = () => {
    contentOpen.value = false;
    currentContent.value = null;
    contentFor.value = null;
  };

  const toggleContent = (val) => {
    if (currentContent.value !== val) {
      contentOpen.value = true;
      currentContent.value = data[val];
      contentFor.value = val;
    } else {
      clearContent();
    }
  };

  watch(open, (val) => {
    if (val) {
      document.body.style.overflow = "hidden";
    } else {
      if (instant.value) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      clearContent();
    }
  });

  watch(width, (val) => {
    if (val > 1279) {
      open.value = false;
      clearContent();
    }
  });

  watch(
    () => route.fullPath,
    () => {
      open.value = false;
      clearContent();
    }
  );
</script>

<template>
  <header
    ref="header"
    class="header lg:!hidden fixed top-8 left-0 z-modal w-full py-3 border-b border-white/20 transition"
    :class="
      sticky && !open
        ? 'bg-white text-dark-blue-main'
        : 'bg-white/10 text-white'
    "
    style="backdrop-filter: blur(150px)"
  >
    <div class="px-4 md:px-8 flex items-center justify-between">
      <LayoutHeaderLogo :sticky="sticky && !open" />

      <UiButtonCircle
        :color="sticky && !open ? 'dark' : 'light'"
        @click="toggleMenu"
      >
        <svg
          v-if="!open"
          width="1rem"
          height="1rem"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.57373 8H13.5737"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            :class="
              sticky && !open
                ? 'stroke-dark-blue-main group-hover:stroke-white'
                : 'stroke-white group-hover:stroke-dark-blue-main'
            "
            class="transition"
          />
          <path
            d="M2.57373 4H13.5737"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            :class="
              sticky && !open
                ? 'stroke-dark-blue-main group-hover:stroke-white'
                : 'stroke-white group-hover:stroke-dark-blue-main'
            "
            class="transition"
          />
          <path
            d="M2.57373 12H13.5737"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            :class="
              sticky && !open
                ? 'stroke-dark-blue-main group-hover:stroke-white'
                : 'stroke-white group-hover:stroke-dark-blue-main'
            "
            class="transition"
          />
        </svg>
        <svg
          v-else
          width="1rem"
          height="1rem"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 3.5L3.5 12.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            :class="
              sticky && !open
                ? 'stroke-dark-blue-main group-hover:stroke-white'
                : 'stroke-white group-hover:stroke-dark-blue-main'
            "
            class="transition"
          />
          <path
            d="M12.5 12.5L3.5 3.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            :class="
              sticky && !open
                ? 'stroke-dark-blue-main group-hover:stroke-white'
                : 'stroke-white group-hover:stroke-dark-blue-main'
            "
            class="transition"
          />
        </svg>
      </UiButtonCircle>
    </div>
  </header>
  <Transition name="fade-300">
    <div
      class="menu lg:!hidden"
      :style="{
        paddingTop: header.offsetHeight + 'px',
      }"
      v-if="open"
    >
      <div class="wrapper">
        <Transition name="content-transform-150-left">
          <div class="content_menu" v-if="!contentOpen">
            <div class="main">
              <button class="menu_btn group" @click="toggleContent('work')">
                <span class="menu_btn-label font-euclid">How it works</span>
                <svg
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="menu_btn-icon"
                >
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                class="menu_btn group"
                @click="toggleContent('individuals')"
              >
                <span class="menu_btn-label font-euclid">For indviduals</span>
                <svg
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="menu_btn-icon"
                >
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button class="menu_btn group" @click="toggleContent('business')">
                <span class="menu_btn-label font-euclid">For business</span>
                <svg
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="menu_btn-icon"
                >
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button class="menu_btn group" @click="toggleContent('choose')">
                <span class="menu_btn-label font-euclid">Why choose us?</span>
                <svg
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="menu_btn-icon"
                >
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <NuxtLink to="/contact" class="menu_btn group">
                <span class="menu_btn-label font-euclid">Contact Us</span>
              </NuxtLink>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pb-24">
              <UiButton to="/order" variant="secondary" color="light">
                Check my order
              </UiButton>
              <UiButton variant="primary" color="light" @click="openInstant">
                Get an instant quote
              </UiButton>
            </div>
          </div>
        </Transition>

        <Transition name="content-transform-150-right">
          <LayoutHeaderContent
            v-if="contentOpen"
            :open="contentOpen"
            :content="currentContent"
            :for="contentFor"
            @close="clearContent"
          />
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
  .menu {
    @apply z-modal-1 transition-all bg-dark-blue-main text-white;
    position: fixed;
    top: 2.5rem;
    left: 0;
    height: calc(100lvh - 2.5rem);
    width: 100%;

    .wrapper {
      position: relative;
      padding-top: 2.5rem;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;

      .content_menu {
        @apply px-4 md:px-8;
        position: absolute;
        width: 100%;
        top: 2.5rem;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.75rem;

        .main {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 1;

          .menu_btn {
            @apply py-3 text-white hover:text-white/70 transition-all;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &-label {
              font-size: 1rem;
              line-height: 1.5rem;
              font-weight: 500;
            }

            &-icon {
              width: 1rem;
            }
          }
        }
      }
    }
  }
</style>
