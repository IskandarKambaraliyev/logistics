<script setup>
  import { links as data } from "~/data/header.js";

  const sticky = ref(true);
  const header = ref(null);
  const linksTop = ref(0);

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

  const toggleOpen = () => {
    open.value = !open.value;
  };

  const workBtn = ref(null);
  const individualsBtn = ref(null);
  const businessBtn = ref(null);
  const chooseBtn = ref(null);
</script>

<template>
  <header
    class="header max-lg:!hidden fixed top-10 left-0 z-header w-full py-3 border-b border-white/20 transition"
    :class="sticky ? 'bg-white text-dark-blue-main' : 'bg-white/10 text-white'"
    style="backdrop-filter: blur(150px)"
    ref="header"
  >
    <div class="container min-h-14 flex items-center justify-between gap-12">
      <div class="flex items-center gap-12">
        <LayoutHeaderLogo :sticky="sticky" />

        <div class="flex items-center gap-4">
          <div
            @mouseenter="handleHover('work')"
            @mouseleave="handleHover(null)"
          >
            <button
              class="link_btn"
              :class="{ active: hovered === 'work' && open }"
              @click="toggleOpen"
              ref="workBtn"
            >
              <span class="link_btn-label">How it works</span>

              <div class="link_btn-icon size-4">
                <svg
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="w-full h-auto"
                >
                  <path
                    d="M13 6L8 11L3 6"
                    stroke="#002934"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    :class="{ sticky: sticky }"
                  />
                </svg>
              </div>
            </button>

            <LayoutHeaderContentDesktop
              :open="hovered === 'work' && open"
              :data="data.work"
              :top="linksTop"
              :left="workBtn ? workBtn.offsetLeft : 0"
            />
          </div>
          <div
            @mouseenter="handleHover('individuals')"
            @mouseleave="handleHover(null)"
          >
            <button
              class="link_btn"
              :class="{ active: hovered === 'individuals' && open }"
              @click="toggleOpen"
              ref="individualsBtn"
            >
              <span class="link_btn-label">For indviduals</span>

              <div class="link_btn-icon size-4">
                <svg
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="w-full h-auto"
                >
                  <path
                    d="M13 6L8 11L3 6"
                    stroke="#002934"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    :class="{ sticky: sticky }"
                  />
                </svg>
              </div>
            </button>

            <LayoutHeaderContentDesktop
              :open="hovered === 'individuals' && open"
              :data="data.individuals"
              :top="linksTop"
              :left="individualsBtn ? individualsBtn.offsetLeft : 0"
            />
          </div>
          <div
            @mouseenter="handleHover('business')"
            @mouseleave="handleHover(null)"
          >
            <button
              class="link_btn"
              :class="{ active: hovered === 'business' && open }"
              @click="toggleOpen"
              ref="businessBtn"
            >
              <span class="link_btn-label">For business</span>

              <div class="link_btn-icon size-4">
                <svg
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="w-full h-auto"
                >
                  <path
                    d="M13 6L8 11L3 6"
                    stroke="#002934"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    :class="{ sticky: sticky }"
                  />
                </svg>
              </div>
            </button>

            <LayoutHeaderContentDesktop
              :open="hovered === 'business' && open"
              :data="data.business"
              :top="linksTop"
              :left="businessBtn ? businessBtn.offsetLeft : 0"
            />
          </div>
          <div
            @mouseenter="handleHover('choose')"
            @mouseleave="handleHover(null)"
          >
            <button
              class="link_btn"
              :class="{ active: hovered === 'choose' && open }"
              @click="toggleOpen"
              ref="chooseBtn"
            >
              <span class="link_btn-label">Why choose us?</span>

              <div class="link_btn-icon size-4">
                <svg
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="w-full h-auto"
                >
                  <path
                    d="M13 6L8 11L3 6"
                    stroke="#002934"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    :class="{ sticky: sticky }"
                  />
                </svg>
              </div>
            </button>

            <LayoutHeaderContentDesktop
              :open="hovered === 'choose' && open"
              :data="data.choose"
              :top="linksTop"
              :left="chooseBtn ? chooseBtn.offsetLeft : 0"
            />
          </div>
          <NuxtLink to="/contact" class="link_btn">
            <span class="link_btn-label">Contact Us</span>
          </NuxtLink>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <UiButton
          variant="secondary"
          :color="sticky ? 'dark' : 'light'"
          to="/order"
        >
          Check my order
        </UiButton>
        <UiButton variant="primary" :color="sticky ? 'dark' : 'light'">
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
