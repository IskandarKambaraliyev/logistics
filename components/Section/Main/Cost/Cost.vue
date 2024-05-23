<script setup>
  const data = [
    {
      id: 1,
      title: "Size and weight of vehicle",
      description:
        "Larger, taller, or heavier-than-average vehicles require special accommodations by car transport companies, which can increase the price.",
      icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_113_1295)"><path d="M6 34H42V30H6V34ZM6 40H42V38H6V40ZM6 26H42V20H6V26ZM6 8V16H42V8H6Z" fill="white"/></g><defs><clipPath id="clip0_113_1295"><rect width="48" height="48" fill="white"/></clipPath></defs></svg>',
    },
    {
      id: 2,
      title: "The car condition",
      description:
        "The condition of your car, including any modifications, can affect the shipping cost. Non-running vehicles or those needing special handling may incur higher fees.",
      icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_113_1300)"><path d="M37.16 10H10.86L6 24V42H12V38H36V42H42V24L37.16 10ZM13 32C11.34 32 10 30.66 10 29C10 27.34 11.34 26 13 26C14.66 26 16 27.34 16 29C16 30.66 14.66 32 13 32ZM35 32C33.34 32 32 30.66 32 29C32 27.34 33.34 26 35 26C36.66 26 38 27.34 38 29C38 30.66 36.66 32 35 32ZM10 22L13 13H35L38 22H10Z" fill="white"/></g><defs><clipPath id="clip0_113_1300"><rect width="48" height="48" fill="white"/></clipPath></defs></svg>',
    },
    {
      id: 3,
      title: "The transport type",
      description:
        "The type of transport you choose, such as open or enclosed trailer, impacts the cost. Enclosed transport offers more protection but is typically more expensive than open transport.",
      icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_113_1305)"><path d="M42 22.36V18L32 6H2V30H6.36C7.2 32.32 9.4 34 12 34C14.6 34 16.8 32.32 17.64 30H34.38C35.34 32.68 38.1 34.5 41.22 33.88C43.54 33.42 45.44 31.54 45.88 29.22C46.5 26.1 44.68 23.32 42 22.36ZM36.8 18H32V12.24L36.8 18ZM6 10H14V18H6V10ZM12 30C10.9 30 10 29.1 10 28C10 26.9 10.9 26 12 26C13.1 26 14 26.9 14 28C14 29.1 13.1 30 12 30ZM18 26V22H24V18H18V10H28V26H18ZM40 30C38.9 30 38 29.1 38 28C38 26.9 38.9 26 40 26C41.1 26 42 26.9 42 28C42 29.1 41.1 30 40 30Z" fill="white"/><path d="M14 40H22V36L34 42H26V46L14 40Z" fill="white"/></g><defs><clipPath id="clip0_113_1305"><rect width="48" height="48" fill="white"/></clipPath></defs></svg>',
    },
    {
      id: 4,
      title: "The shipping distance",
      description:
        "Longer distances generally result in higher shipping costs. However, some companies offer discounts for long-distance transport.",
      icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z" fill="white" stroke="#004F8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.29749 34.3864L11.4302 33.0989C11.6587 32.961 11.8399 32.7569 11.9498 32.5136C12.0598 32.2704 12.0932 31.9995 12.0457 31.7369L10.8345 25.036C10.7813 24.7417 10.8298 24.4381 10.9721 24.1751L12.9756 20.4705C13.0586 20.3169 13.1714 20.1813 13.3073 20.0717L16.3741 17.5985C16.5775 17.4345 16.8251 17.3346 17.0854 17.3117C17.3457 17.2888 17.6069 17.3438 17.8358 17.4697L19.1847 18.2116C19.4633 18.3648 19.6771 18.6137 19.7866 18.9123L20.0442 19.6148C20.1307 19.8507 20.2828 20.0569 20.4827 20.2092C20.6825 20.3614 20.9217 20.4533 21.1721 20.4741C21.4224 20.4949 21.6735 20.4436 21.8957 20.3264C22.1179 20.2091 22.3019 20.0308 22.4261 19.8124L23.3114 18.2552C23.4 18.0994 23.5194 17.9633 23.6624 17.8553C23.8054 17.7472 23.9689 17.6695 24.1429 17.6268C24.317 17.5842 24.4979 17.5775 24.6746 17.6071C24.8514 17.6368 25.0202 17.7022 25.1707 17.7994L27.8735 19.5434C28.0967 19.6875 28.3584 19.7606 28.624 19.7533C28.8897 19.746 29.1469 19.6585 29.3619 19.5023C29.5768 19.3461 29.7396 19.1285 29.8287 18.8782C29.9178 18.6278 29.929 18.3564 29.861 18.0995V18.0995C29.7825 17.8027 29.8101 17.4879 29.939 17.2093C30.0679 16.9307 30.29 16.7058 30.5671 16.5736L34.2917 14.7959C34.5532 14.6712 34.7662 14.4637 34.8978 14.2056C35.0294 13.9475 35.0723 13.6532 35.0198 13.3683L34.2522 9.20453" stroke="#004F8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M35.893 37.5101L33.1614 34.7731C33.039 34.6505 32.8937 34.5532 32.7337 34.4869C32.5737 34.4205 32.4022 34.3864 32.229 34.3864H30.0849C29.8957 34.3864 29.7088 34.3456 29.5367 34.2669C29.3647 34.1881 29.2116 34.0732 29.088 33.93C28.9643 33.7868 28.873 33.6187 28.8201 33.437C28.7673 33.2553 28.7542 33.0644 28.7818 32.8772L29.2281 29.8456C29.2585 29.6397 29.3372 29.4438 29.4578 29.2742C29.5784 29.1046 29.7375 28.9659 29.922 28.8696L34.3963 26.5352C34.6334 26.4115 34.9025 26.3629 35.1678 26.3958C35.4332 26.4287 35.6822 26.5416 35.8819 26.7195L40.6143 30.9357" stroke="#004F8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    },
  ];
</script>

<template>
  <section class="overflow-x-hidden">
    <div class="bg-blue-dark rounded-t-[2rem] py-20 md:py-[7.5rem] text-white">
      <div
        class="container grid grid-cols-1 lg:grid-cols-2 gap-y-20 gap-x-[7.5rem]"
      >
        <div
          class="flex flex-col max-lg:items-center gap-8 md:gap-12 lg:gap-14"
        >
          <div class="flex flex-col max-lg:items-center gap-6">
            <div
              class="max-w-[15rem] md:max-w-[20rem] lg:max-w-[37rem] w-full"
              data-aos="fade-up"
            >
              <SectionMainCostImage />
            </div>
            <UiTitle
              class="!text-white"
              data-aos="fade-up"
              :data-aos-delay="100"
            >
              How much do car transport companies charge?
            </UiTitle>

            <p
              class="max-lg:text-center text-[0.875rem] leading-5 md:text-base"
              data-aos="fade-up"
              :data-aos-delay="200"
            >
              Car shipping quotes are based on current market trends for
              nationwide auto transport. Your total cost from auto shipping
              companies will depend on the type of car you want to move, where
              it needs to go, its size, condition (including any modifications),
              total transport distance, transport type (open or enclosed trailer
              shipment), and the time of year when you book. Don’t forget to
              check for additional promotions and savings. Get a quote with our
              car shipping calculator, use our Live Chat, or call (888)
              666-8929.
            </p>
          </div>

          <UiButton
            variant="primary"
            color="light"
            class="w-max max-w-max"
            data-aos="fade-up"
            :data-aos-delay="300"
          >
            Car shipping cost information
          </UiButton>
        </div>

        <ul
          class="main_cost_list lg:border-l border-white/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 max-lg:gap-4 lg:pl-4"
        >
          <li
            v-for="item in data"
            :key="item.id"
            class="main_cost_item flex max-lg:flex-col max-lg:items-center gap-6"
            data-aos="fade-left"
            :data-aos-delay="`${item.id * 100 + 600}`"
          >
            <div class="main_cost_item-icon" v-html="item.icon"></div>
            <div
              class="flex-1 flex flex-col max-lg:items-center max-lg:text-center gap-2 lg:gap-4"
            >
              <h6
                class="text-[1.5rem] lg:text-[1.75rem] leading-[2.25rem] font-medium"
              >
                {{ item.title }}
              </h6>
              <p class="text-[0.875rem] leading-[1.25rem] lg:text-base">
                {{ item.description }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .main_cost_list {
    .main_cost_item {
      &-icon {
        overflow: hidden;
        width: 3rem;
        height: 3rem;

        svg {
          width: 100%;
          height: auto;
        }
      }

      @media screen and (min-width: 1280px) {
        &:not(:nth-child(1)) {
          @apply border-t border-white/20;
          padding-top: 2rem;
        }

        &:not(:nth-last-child(1)) {
          @apply pb-8;
        }
      }
    }
  }
</style>
