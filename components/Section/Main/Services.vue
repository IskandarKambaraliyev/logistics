<script setup>
  const data = [
    {
      id: 1,
      title: "Door-to-door car shipping",
      description:
        "As a top-rated auto transport company, you can have confidence your vehicle will be transported safely. When shipping your vehicle, you’re allowing our team of experts to handle every step of the process, ensuring there are no speed bumps along the way.",
    },
    {
      id: 2,
      title: "Hawaii car shipping",
      description:
        "Looking to ship your car to or from Hawaii? Hawaii vehicle shipping is less complicated than you may think. The key is selecting an auto transport provider with experience arranging both door-to-port and port-to-port auto transport. Express Auto Carriers can safely get your vehicle to or from Hawaii.",
    },
    {
      id: 3,
      title: "Motorcycle shipping",
      description:
        "Express Auto Carriers provides our motorcycle transport customers with the best year-round pricing. We use experienced drivers who have the skills and equipment to properly load, secure and transport motorcycles, scooters, ATVs, UTVs and powersports. Call (888) 666-8929 for a custom motorcycle shipping quote.",
    },
    {
      id: 4,
      title: "Military PCS shipping",
      description:
        "Most PCS moves are long distance and require a lot of planning. To make your move easier, use Express Auto Carriers to transport your personal vehicles. We offer PSC vehicle shipping discounts for those in active duty, Reserves or National Guard along with military dependents and veterans. Thank you for your service.",
    },
  ];
</script>

<template>
  <section>
    <div class="container space-y-12 md:space-y-16">
      <UiTitle>Popular vehicle shipping services</UiTitle>

      <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <li v-for="item in data" :key="item.id">
          <UiCardsService :item="item" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
