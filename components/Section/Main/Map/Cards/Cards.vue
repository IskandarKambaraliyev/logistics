<script setup>
  const data = [
    {
      id: 1,
      title: "California",
      description:
        "Known as the Golden State, California boasts a diverse landscape from beaches to mountains. It's a hub for tech innovation in Silicon Valley, entertainment in Hollywood, and rich agricultural production in the Central Valley. California also offers iconic landmarks such as the Golden Gate Bridge, Yosemite National Park, and Disneyland.",
      value: "california",
      image: "https://cp.express-auto-carriers.com/media/slides/california.jpg",
    },
    {
      id: 2,
      title: "Florida",
      description:
        "The Sunshine State, Florida is famous for its beautiful beaches, warm climate, and attractions like Walt Disney World and Universal Studios. It's a major destination for retirees and tourists alike, featuring vibrant cities like Miami, known for its cultural diversity and nightlife, and natural wonders like the Everglades.",
      value: "florida",
      image: "https://cp.express-auto-carriers.com/media/slides/florida.jpg",
    },
    {
      id: 3,
      title: "Texas",
      description:
        "The Lone Star State, Texas, is renowned for its size and cultural diversity. From the bustling cities of Houston and Dallas to the live music scene in Austin, Texas offers a mix of cowboy heritage and modern innovation. It's also known for its oil industry, ranching, and delicious BBQ cuisine.",
      value: "texas",
      image: "https://cp.express-auto-carriers.com/media/slides/newyork.jpg",
    },
    {
      id: 4,
      title: "New Work",
      description:
        "New York, often called the Empire State, is synonymous with New York City, a global center for finance, culture, and entertainment. Beyond the city, the state features stunning natural landscapes like the Adirondacks and Niagara Falls. It's a place where history and modernity blend seamlessly.",
      value: "newyork",
      image: "https://cp.express-auto-carriers.com/media/slides/texas.jpg",
    },
  ];

  const map = useUSMap();
</script>

<template>
  <div class="w-full h-max" data-aos="fade-right">
    <SectionMainMapCardsCard
      v-for="(item, index) in data"
      :key="item.id"
      :data="item"
      :is-active="map.state === item.value"
      :is-last="data.length - 1 === index"
    />
  </div>
</template>

<style lang="scss" scoped></style>
