<script setup>
  const props = defineProps({
    active: {
      type: Boolean,
      required: true,
    },
  });
</script>

<template>
  <button
    class="rounded-full flex items-center gap-2.5 ring-1 ring-dark-blue-000 px-5 py-3 md:py-4 outline-none transition-all"
    type="button"
  >
    <div class="icon">
      <svg
        width="1rem"
        height="1rem"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.83301 7.99992C1.83301 4.59606 4.59582 1.83325 7.99967 1.83325C11.4035 1.83325 14.1663 4.59606 14.1663 7.99992C14.1663 11.4038 11.4035 14.1666 7.99967 14.1666C4.59582 14.1666 1.83301 11.4038 1.83301 7.99992ZM2.16634 7.99992C2.16634 11.2227 4.77687 13.8333 7.99967 13.8333C11.2225 13.8333 13.833 11.2227 13.833 7.99992C13.833 4.77711 11.2225 2.16659 7.99967 2.16659C4.77687 2.16659 2.16634 4.77711 2.16634 7.99992Z"
          :class="active ? 'stroke-blue-500' : 'stroke-dark-blue-main'"
        />
        <path
          d="M8.00033 11.3334C9.84127 11.3334 11.3337 9.84103 11.3337 8.00008C11.3337 6.15913 9.84127 4.66675 8.00033 4.66675C6.15938 4.66675 4.66699 6.15913 4.66699 8.00008C4.66699 9.84103 6.15938 11.3334 8.00033 11.3334Z"
          fill="#008FFF"
          :class="active ? 'fill-blue-500' : 'fill-dark-blue-main hidden'"
        />
      </svg>
    </div>

    <span class="text-[0.875rem] md:text-[1rem] leading-6 flex-1" :class="{'text-dark-blue-300': !active}">
      <slot />
    </span>
  </button>
</template>

<style lang="scss" scoped></style>
