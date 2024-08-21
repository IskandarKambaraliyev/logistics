<script setup>
  const props = defineProps({
    isSticky: {
      type: Boolean,
      default: false,
    },
  });

  const instant = useInstant();

  const openInstant = () => {
    instant.value = true;
  };

  const sticky = ref(true);
  const header = ref(null);
  const linksTop = ref(0);

  const handleScroll = () => {
    if (!props.isSticky) {
      if (window.scrollY > 0) {
        sticky.value = true;
      } else {
        sticky.value = false;
      }
    } else {
      sticky.value = true;
    }
  };

  onMounted(() => {
    if (!props.isSticky) {
      sticky.value = window.scrollY > 0;
    }

    window.addEventListener("scroll", handleScroll);

    if (header.value) {
      linksTop.value = header.value.offsetHeight - 20;
    }
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  const hovered = ref(null);
  const open = ref(false);

  const handleHover = (e) => {
    hovered.value = e;

    if (e !== null) {
      open.value = true;
    } else {
      open.value = false;
    }
  };

  const toggleOpen = (e) => {
    open.value = !open.value;
    hovered.value = e;
  };

  const { data, error } = await useMyFetch(`/menu`);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }

  // console.log(data.value);
</script>

<template>
  <header
    class="header max-lg:!hidden fixed top-8 left-0 z-header w-full py-3 border-b border-white/20 transition"
    :class="
      sticky
        ? 'bg-white text-dark-blue-main shadow-xl'
        : 'bg-white/10 text-white'
    "
    ref="header"
  >
    <div class="container flex items-center justify-between gap-12 min-h-14">
      <div class="flex items-center gap-4 xl:gap-12">
        <LayoutHeaderLogo :sticky="sticky" />

        <Transition name="fade-300">
          <div class="flex items-center xl:gap-4" v-if="data?.results">
            <div v-for="(item, index) in data.results.slice(0, 5)" :key="index">
              <LayoutHeaderDesktopContent
                v-model="hovered"
                @hover="handleHover"
                @toggle="toggleOpen"
                :item="item"
              />
            </div>
          </div>
        </Transition>
      </div>

      <div class="flex items-center gap-3">
        <UiButton
          variant="secondary"
          :color="sticky ? 'dark' : 'light'"
          to="tel:(205) 417-7888"
          class="max-xl:!hidden"
        >
          (205) 417-7888
        </UiButton>

        <UiButtonCircle
          to="tel:(205) 417-7888"
          :color="sticky ? 'dark' : 'light'"
          class="xl:!hidden"
        >
          <UIcon
            name="i-heroicons-phone-solid"
            class="transition"
            :class="
              sticky
                ? 'text-dark-blue-main group-hover:text-white'
                : 'text-white group-hover:text-dark-blue-main'
            "
          />
        </UiButtonCircle>

        <!-- <UiButton
          variant="primary"
          :color="sticky ? 'dark' : 'light'"
          @click="openInstant"
        >
          Get an instant quote
        </UiButton> -->

        <UiButton
          variant="primary"
          :color="sticky ? 'dark' : 'light'"
          to="https://apps.msgplane.com/quote/eac"
        >
          Get an instant quote
        </UiButton>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    .container {
      .link_btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 0.75rem;

        .link_btn-label {
          font-size: 0.875rem;
          line-height: 1.5rem;
          font-weight: 500;
        }

        .link_btn-icon {
          transition: transform 0.3s ease-in-out;

          svg {
            path {
              @apply stroke-white;

              &.sticky {
                @apply stroke-dark-blue-main;
              }
            }
          }
        }

        &.active {
          .link_btn-icon {
            transform: rotate(-180deg);
          }
        }
      }
    }
  }
</style>
