<script setup>
  const data = [
    {
      id: 1,
      title: "Trust the experts to handle it.",
      description:
        "As a top-rated auto transport company, you can have confidence your vehicle will be transported safely. When shipping your vehicle, you’re allowing our team of experts to handle every step of the process, ensuring there are no speed bumps along the way.",
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_113_1245)"><path d="M5.33332 7.99996H2.66666V29.3333H24V26.6666H5.33332V7.99996ZM29.3333 2.66663H7.99999V24H29.3333V2.66663ZM25.3333 14.6666H12V12H25.3333V14.6666ZM20 20H12V17.3333H20V20ZM25.3333 9.33329H12V6.66663H25.3333V9.33329Z" fill="white"/></g><defs><clipPath id="clip0_113_1245"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>',
    },
    {
      id: 2,
      title: "Tailored service tailored to your needs",
      description:
        "Opt for us as your car transporter to experience seamless shipping and a straightforward process, free of hassle and inconvenience.",
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_113_1251)"><path d="M16 16C18.9466 16 21.3333 13.6134 21.3333 10.6667C21.3333 7.72004 18.9466 5.33337 16 5.33337C13.0533 5.33337 10.6666 7.72004 10.6666 10.6667C10.6666 13.6134 13.0533 16 16 16ZM16 18.6667C12.44 18.6667 5.33331 20.4534 5.33331 24V26.6667H26.6666V24C26.6666 20.4534 19.56 18.6667 16 18.6667Z" fill="white"/></g><defs><clipPath id="clip0_113_1251"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>',
    },
    {
      id: 3,
      title: "Committed consultants",
      description:
        "Our dedicated advisors are available 24/7 to guarantee you receive the finest auto transport service possible.",
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_113_1257)"><path d="M16 7.99996C17.4728 7.99996 18.6667 6.80605 18.6667 5.33329C18.6667 3.86053 17.4728 2.66663 16 2.66663C14.5273 2.66663 13.3334 3.86053 13.3334 5.33329C13.3334 6.80605 14.5273 7.99996 16 7.99996Z" fill="white"/><path d="M21.1867 10.8133C20.6667 10.2933 19.7734 9.33329 18.04 9.33329C17.76 9.33329 16.1467 9.33329 14.6534 9.33329C10.9867 9.31996 8.00004 6.33329 8.00004 2.66663H5.33337C5.33337 6.87996 8.14671 10.4533 12 11.6133V29.3333H14.6667V21.3333H17.3334V29.3333H20V13.4L25.2667 18.6666L27.1467 16.7866L21.1867 10.8133Z" fill="white"/></g><defs><clipPath id="clip0_113_1257"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>',
    },
    {
      id: 4,
      title: "The premier choice.",
      description:
        "What makes customers rave about Express Auto Carriers as the top choice for shipping a car? Explore our online reviews to discover why we're consistently recognized as one of the leading car moving and hauling companies in the industry.",
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_113_1263)"><path d="M16 23.0266L24.24 28L22.0533 18.6266L29.3333 12.32L19.7466 11.5066L16 2.66663L12.2533 11.5066L2.66663 12.32L9.94663 18.6266L7.75996 28L16 23.0266Z" fill="white"/></g><defs><clipPath id="clip0_113_1263"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>',
    },
    {
      id: 5,
      title: "No payment required upfront.",
      description:
        "Yes, you heard correctly—no upfront payment necessary! The top auto transport companies only charge you once the carrier has been dispatched for your order. This means you can book with us now and rest assured knowing that you won't have to worry about car shipping costs until later.",
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_113_1270)"><path d="M30.6667 9.33337V26.6667H5.33334V24H28V9.33337H30.6667ZM25.3333 21.3334H1.33334V5.33337H25.3333V21.3334ZM17.3333 13.3334C17.3333 11.12 15.5467 9.33337 13.3333 9.33337C11.12 9.33337 9.33334 11.12 9.33334 13.3334C9.33334 15.5467 11.12 17.3334 13.3333 17.3334C15.5467 17.3334 17.3333 15.5467 17.3333 13.3334Z" fill="white"/></g><defs><clipPath id="clip0_113_1270"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>',
    },
    {
      id: 6,
      title: "Insurance coverage",
      description:
        "Why choose our auto transport company? Montway Auto Transport works with you through every step of your car or truck’s move. Experience hassle-free shipping when you choose us as your car transporter and enjoy an easy and painless shipment process.",
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_113_1276)"><path d="M18.8933 1.33337L9.33331 10.9067V28H25.7466L30.6666 16.5334V10.6667H19.5866L21.08 3.49337L18.8933 1.33337ZM1.33331 12H6.66665V28H1.33331V12Z" fill="white"/></g><defs><clipPath id="clip0_113_1276"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>',
    },
    {
      id: 7,
      title: "30K+ auto carriers",
      description:
        "Our auto transporter company has a huge network of haulers who are personally vetted auto shipping experts, ensuring your vehicle is transported by trusted members of the industry. These vehicle transport companies will treat your car like their own.",
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_113_1282)"><path d="M20 6.80003L12 4.00003L4 6.69336V28.2934L12 25.1867L20 27.9867L28 25.2934V3.69336L20 6.80003ZM20 25.1867L12 22.3734V6.81336L20 9.62669V25.1867Z" fill="white"/></g><defs><clipPath id="clip0_113_1282"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>',
    },
    {
      id: 8,
      title: "Extended hours",
      description:
        "Our award-winning auto transportadvisors work 365 days a year to guarantee we’re available to address your vehicle transportation needs.",
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_113_1288)"><path d="M24 29.3333L23.9867 21.3333L18.6667 16L23.9867 10.6533L24 2.66663H8V10.6666L13.3333 16L8 21.32V29.3333H24ZM10.6667 9.99996V5.33329H21.3333V9.99996L16 15.3333L10.6667 9.99996Z" fill="white"/></g><defs><clipPath id="clip0_113_1288"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>',
    },
  ];
</script>

<template>
  <section>
    <div class="container space-y-16 md:space-y-12 lg:space-y-16">
      <UiTitle>
        Why you should book with
        <span>one of the best auto shipping companies</span>
      </UiTitle>

      <ul
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-y-16"
      >
        <li
          v-for="item in data"
          :key="item.id"
          class="flex flex-col max-lg:items-center max-lg:text-center space-y-2"
        >
          <div
            class="main_advantages_icon bg-gradient-to-r from-blue-main to-blue-600 size-16 md:size-20 rounded-full overflow-hidden flex-center"
            v-html="item?.icon"
          ></div>

          <h5
            class="text-[1.5rem] lg:text-[1.75rem] leading-[2.25rem] font-medium"
          >
            {{ item.title }}
          </h5>
          <p class="text-[0.875rem] leading-6 lg:text-base">
            {{ item.description }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
  .main_advantages_icon {
    svg {
      @apply w-6 lg:w-8 h-auto;
    }
  }
</style>
