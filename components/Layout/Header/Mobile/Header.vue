<script setup>
  import { useWindowSize } from "@vueuse/core";
  const props = defineProps({
    isSticky: {
      type: Boolean,
      default: false,
    },
  });

  const { data, error } = await useMyFetch(`/menu`);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }

  const { width } = useWindowSize();

  const route = useRoute();

  const instant = useInstant();

  const openInstant = () => {
    instant.value = true;
  };

  const sticky = ref(true);
  const header = ref(null);

  const handleScroll = () => {
    if (!props.isSticky) {
      if (window.scrollY > 0) {
        sticky.value = true;
      } else {
        sticky.value = false;
      }
    }
  };

  onMounted(() => {
    if (!props.isSticky) {
      sticky.value = window.scrollY > 0;
    }

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
    if (currentContent.value !== val && data.value?.results) {
      contentOpen.value = true;
      currentContent.value = data.value.results[val];
      contentFor.value = data.value.results[val]?.title;
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
  >
    <div class="px-4 md:px-8 flex items-center justify-between">
      <LayoutHeaderLogo :sticky="sticky && !open" />

      <div class="flex items-center gap-4">
        <UiButtonCircle
          to="tel:(210) 463-4436"
          :color="sticky && !open ? 'dark' : 'light'"
          class="xl:!hidden"
        >
          <UIcon
            name="i-heroicons-phone-solid"
            class="transition"
            :class="
              sticky && !open
                ? 'text-dark-blue-main group-hover:text-white'
                : 'text-white group-hover:text-dark-blue-main'
            "
          />
        </UiButtonCircle>

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
            <div class="main" v-if="data?.results">
              <NuxtLink
                v-for="(item, index) in data.results"
                :key="index"
                :to="!item.children && item.link"
                class="menu_btn group cursor-pointer"
                @click="
                  () => {
                    if (item.children) {
                      toggleContent(index);
                    }
                  }
                "
              >
                <span class="menu_btn-label font-euclid">{{ item.title }}</span>

                <UIcon
                  v-if="item.children"
                  name="i-heroicons-chevron-right-20-solid"
                  class="size-6"
                  dynamic
                />
              </NuxtLink>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pb-24">
              <UiButton to="/contact" variant="secondary" color="light">
                Check my order
              </UiButton>
              <UiButton variant="primary" color="light" @click="openInstant">
                Get an instant quote
              </UiButton>
            </div>
          </div>
        </Transition>

        <Transition name="content-transform-150-right">
          <LayoutHeaderMobileContent
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
    top: 2rem;
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
