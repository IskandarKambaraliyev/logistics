<script setup>
  const data = {
    phone: [
      {
        id: 1,
        title: "Toll Free Phone",
        label: "(205) 417-7888",
      },
      // {
      //   id: 2,
      //   title: "Local Phone",
      //   label: "(610) 900-7777",
      // },
      // {
      //   id: 3,
      //   title: "Accounting",
      //   label: "(610) 200-7777",
      // },
      // {
      //   id: 4,
      //   title: "Business Dev.",
      //   label: "(610) 500-7777",
      // },
      // {
      //   id: 5,
      //   title: "Carrier Relations",
      //   label: "(610) 890-7777",
      // },
      // {
      //   id: 6,
      //   title: "Fax",
      //   label: "(610) 333-7777",
      // },
    ],
    days: [
      {
        id: 1,
        title: "Monday to Friday",
        label: "6:00 am - 10:00 pm",
      },
      {
        id: 2,
        title: "Saturday",
        label: "7:00 am - 9:00 pm",
      },
      {
        id: 3,
        title: "Sunday",
        label: "7:00 am - 9:00 pm",
      },
    ],
  };
</script>

<template>
  <div class="flex flex-col gap-16 main_contact_links">
    <div class="flex flex-col gap-6 lg:gap-12">
      <h4>Express auto carriers</h4>
      <ul>
        <li v-for="item in data.phone" :key="item.id">
          <SectionContactsList is-link :item="item" />
        </li>
      </ul>
    </div>
    <div class="flex flex-col gap-6 lg:gap-12">
      <h4>Business hours</h4>
      <ul>
        <li v-for="item in data.days" :key="item.id">
          <SectionContactsList :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .main_contact_links {
    h4 {
      @apply text-[2rem] lg:text-[3rem] leading-none font-bold;
      font-family: "DIN Pro";
    }

    ul {
      @apply flex flex-col gap-5 w-full;

      li > a,
      li > div {
        @apply flex justify-between items-center select-text relative;

        span:nth-child(1) {
          @apply text-base lg:text-[1.25rem] lg:leading-[1.75rem] font-medium;
        }

        span:nth-child(2) {
          @apply text-[1.5rem] lg:text-[2rem] leading-none font-bold;
          font-family: "DIN Pro";
        }

        canvas {
          @apply flex-1 bg-red-500 h-4;
        }
      }
    }
  }
</style>
