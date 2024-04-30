<script setup>
  import data from "~/data/header.js";
  import { useElementBounding, useWindowSize } from "@vueuse/core";

  const { width, height } = useWindowSize();

  const sticky = ref(true);

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

  const individuals = ref(null);
  const business = ref(null);
  const choose = ref(null);

  const individualsContent = ref(null);
  const businessContent = ref(null);
  const chooseContent = ref(null);

  watch(individualsContent, (val) => {
    if (val) {
      if (
        width.value -
          (individualsContent.value.offsetWidth +
            individuals.value.offsetLeft) <
        16
      ) {
        console.log(
          individuals.value.offsetLeft -
            (width.value - individualsContent.value.offsetWidth) / 2
        );
        individualsContent.value.style.left = `-${
          individuals.value.offsetLeft -
          (width.value - individualsContent.value.offsetWidth) / 2
        }px`;
      }
    }
  });

  watch(businessContent, (val) => {
    if (val) {
      if (
        width.value -
          (businessContent.value.offsetWidth + business.value.offsetLeft) <
        16
      ) {
        businessContent.value.style.left = `-${
          business.value.offsetLeft -
          (width.value - businessContent.value.offsetWidth) / 2
        }px`;
      }
    }
  });

  watch(chooseContent, (val) => {
    if (val) {
      if (
        width.value -
          (chooseContent.value.offsetWidth + choose.value.offsetLeft) <
        16
      ) {
        chooseContent.value.style.left = `-${
          choose.value.offsetLeft -
          (width.value - chooseContent.value.offsetWidth) / 2
        }px`;
      }
    }
  });
  /*  watch(chooseContent, (val) => {
    if (val) {
      if (
        width.value -
          (chooseContent.value.offsetWidth + choose.value.offsetLeft) <
        16
      ) {
        chooseContent.value.style.left = "unset";
        chooseContent.value.style.right = 0;
      }
    }
  }); */
</script>

<template>
  <header
    class="header max-lg:!hidden font-manrope fixed top-10 left-0 z-header w-full py-3 border-b border-white/20 transition"
    :class="sticky ? 'bg-white text-dark-blue-main' : 'bg-white/10 text-white'"
    style="backdrop-filter: blur(150px)"
  >
    <div class="container min-h-14 flex items-center justify-between gap-12">
      <div class="flex items-center gap-12">
        <LayoutHeaderLogo :sticky="sticky" />

        <nav class="nav flex items-center gap-4">
          <div
            class="nav_links"
            @mouseenter="handleHover('work')"
            @mouseleave="handleHover(null)"
          >
            <button
              class="nav_btn py-2 px-3 flex items-center gap-2"
              :class="{ active: hovered === 'work' && open }"
              @click="toggleOpen"
            >
              <span>How it works</span>
              <UIcon
                name="i-heroicons-chevron-down-20-solid"
                class="size-6 icon transition-transform duration-300"
              />
            </button>
            <Transition name="fade-300">
              <div v-if="hovered === 'work' && open" class="nav_link_wrapper">
                <div class="content">
                  <div class="content_section">
                    <ul class="section_list">
                      <li
                        v-for="(item, index) in data.work.default"
                        :key="index"
                      >
                        <LayoutHeaderLink :item="item" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <div
            class="nav_links"
            @mouseenter="handleHover('individuals')"
            @mouseleave="handleHover(null)"
            ref="individuals"
          >
            <button
              class="nav_btn py-2 px-3 flex items-center gap-2"
              :class="{ active: hovered === 'individuals' && open }"
              @click="toggleOpen"
            >
              <span>For indviduals</span>
              <UIcon
                name="i-heroicons-chevron-down-20-solid"
                class="size-6 icon transition-transform duration-300"
              />
            </button>
            <Transition name="fade-300">
              <div
                v-if="hovered === 'individuals' && open"
                class="nav_link_wrapper"
                ref="individualsContent"
              >
                <div class="content">
                  <div class="content_section">
                    <h5 class="section_title">We serve</h5>
                    <ul class="section_list">
                      <li
                        v-for="(item, index) in data.individuals.offers"
                        :key="index"
                      >
                        <LayoutHeaderLink :item="item" />
                      </li>
                    </ul>
                  </div>

                  <div class="content_section">
                    <h5 class="section_title">We offer</h5>
                    <ul class="section_list wide">
                      <li
                        v-for="(item, index) in data.individuals.serve"
                        :key="index"
                      >
                        <LayoutHeaderLink :item="item" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <div
            class="nav_links"
            @mouseenter="handleHover('business')"
            @mouseleave="handleHover(null)"
            ref="business"
          >
            <button
              class="nav_btn py-2 px-3 flex items-center gap-2"
              :class="{ active: hovered === 'business' && open }"
              @click="toggleOpen"
            >
              <span>For business</span>
              <UIcon
                name="i-heroicons-chevron-down-20-solid"
                class="size-6 icon transition-transform duration-300"
              />
            </button>
            <Transition name="fade-300">
              <div
                v-if="hovered === 'business' && open"
                class="nav_link_wrapper"
                ref="businessContent"
              >
                <div class="content">
                  <div class="content_section">
                    <h5 class="section_title">Industries we serve</h5>
                    <ul class="section_list">
                      <li
                        v-for="(item, index) in data.business.industries"
                        :key="index"
                      >
                        <LayoutHeaderLink :item="item" />
                      </li>
                    </ul>
                  </div>
                  <div class="content_section">
                    <h5 class="section_title">Solutions & advantages</h5>
                    <ul class="section_list">
                      <li
                        v-for="(item, index) in data.business.solutions"
                        :key="index"
                      >
                        <LayoutHeaderLink :item="item" />
                      </li>
                    </ul>
                  </div>
                  <div class="content_section">
                    <h5 class="section_title">Relocation services</h5>
                    <ul class="section_list">
                      <li
                        v-for="(item, index) in data.business.relocation"
                        :key="index"
                      >
                        <LayoutHeaderLink :item="item" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <div
            class="nav_links"
            @mouseenter="handleHover('choose')"
            @mouseleave="handleHover(null)"
            ref="choose"
          >
            <button
              class="nav_btn py-2 px-3 flex items-center gap-2"
              :class="{ active: hovered === 'choose' && open }"
              @click="toggleOpen"
            >
              <span>Why choose us?</span>
              <UIcon
                name="i-heroicons-chevron-down-20-solid"
                class="size-6 icon transition-transform duration-300"
              />
            </button>
            <Transition name="fade-300">
              <div
                v-if="hovered === 'choose' && open"
                class="nav_link_wrapper"
                ref="chooseContent"
              >
                <div class="content">
                  <div class="content_section">
                    <h5 class="section_title">Our brand</h5>
                    <ul class="section_list">
                      <li
                        v-for="(item, index) in data.choose.brand"
                        :key="index"
                      >
                        <LayoutHeaderLink :item="item" />
                      </li>
                    </ul>
                  </div>
                  <div class="content_section">
                    <h5 class="section_title">Leadership</h5>
                    <ul class="section_list">
                      <li
                        v-for="(item, index) in data.choose.leadership"
                        :key="index"
                      >
                        <LayoutHeaderLink :item="item" />
                      </li>
                    </ul>
                  </div>
                  <div class="content_section">
                    <h5 class="section_title">Learn more</h5>
                    <ul class="section_list">
                      <li
                        v-for="(item, index) in data.choose.learn_more"
                        :key="index"
                      >
                        <LayoutHeaderLink :item="item" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    .container {
      .nav {
        .nav_links {
          position: relative;

          .nav_btn {
            span {
              font-size: 0.875rem;
              line-height: 1.5rem;
              font-weight: 500;
            }

            &.active {
              .icon {
                transform: rotate(-180deg);
              }
            }
          }

          .nav_link_wrapper {
            @apply min-w-[15rem];
            position: absolute;
            top: 100%;
            left: 0;
            max-width: calc(100vw - 4rem);
            padding-top: 1.25rem;

            // @media screen and (max-width: 1500px) {
            // max-width: 55vw !important;
            // }

            .content {
              @apply text-dark-blue-700;
              background-color: white;
              border-radius: 1rem;
              padding: 1.5rem 0;
              box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.2);
              display: flex;
              gap: 1.5rem;
              max-height: 70vh;
              overflow-y: auto;

              .content_section {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                padding: 0 1.5rem;

                .section_title {
                  @apply text-base font-bold text-blue-700;
                }

                .section_list {
                  display: flex;
                  flex-direction: column;
                  gap: 1.5rem;

                  &.wide {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                  }
                }

                &:not(:nth-child(1)) {
                  @apply border-l border-dark-blue-000;
                }
              }

              .divide {
                @apply bg-black;
                width: 10px;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
</style>
