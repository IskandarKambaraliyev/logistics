<script setup>
  const props = defineProps({
    variant: {
      type: String,
      default: "primary",
      required: false,
    },
    color: {
      type: String,
      default: "dark",
      required: false,
    },
    to: {
      type: String,
      required: false,
    },
    labelClass: {
      type: String,
      required: false,
    },
  });
</script>

<template>
  <button
    v-if="!to"
    class="ui_button disabled:!bg-gray-400"
    :class="`${variant === 'primary' ? 'primary' : 'secondary'} ${
      color === 'dark' ? 'dark' : 'light'
    }`"
  >
    <span class="label font-euclid text-center" :class="`${labelClass}`">
      <slot />
    </span>
  </button>

  <NuxtLink
    v-else
    :to="to"
    class="ui_button"
    :class="`${variant === 'primary' ? 'primary' : 'secondary'} ${
      color === 'dark' ? 'dark' : 'light'
    }`"
  >
    <span class="label font-euclid text-center" :class="`${labelClass}`">
      <slot />
    </span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
  .ui_button {
    @apply py-5 px-10 rounded-full transition-all;
    display: flex;
    align-items: center;
    justify-content: center;

    .label {
      font-size: 0.875rem;
      line-height: 1rem;
      font-weight: 600;
    }

    &.primary {
      &.light {
        @apply bg-white text-dark-blue-main;

        @media screen and (hover: hover) {
          &:hover {
            background-color: #fefefe;
          }
        }
      }

      &.dark {
        @apply bg-dark-blue-main text-white;

        @media screen and (hover: hover) {
          &:hover {
            @apply bg-blue-dark;
          }
        }
      }
    }

    &.secondary {
      &.light {
        @apply border border-white text-white bg-transparent;

        @media screen and (hover: hover) {
          &:hover {
            @apply bg-blue-000 text-dark-blue-main;
          }
        }
      }

      &.dark {
        @apply border border-dark-blue-main text-dark-blue-main  bg-transparent;

        @media screen and (hover: hover) {
          &:hover {
            @apply bg-blue-000 text-dark-blue-main;
          }
        }
      }
    }

    &.light {
      @media screen and (hover: hover) {
        &:hover {
          box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.25);
        }

        &:disabled {
          box-shadow: unset !important;
        }
      }
    }

    &.dark {
      @media screen and (hover: hover) {
        &:hover {
          box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.15);
        }

        &:disabled {
          box-shadow: unset !important;
        }
      }
    }

    &:disabled {
      @apply cursor-not-allowed;
    }
  }
</style>
