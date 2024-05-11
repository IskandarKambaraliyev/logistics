<script setup>
  const image =
    "https://express-auto-carriers.vercel.app/blog.png";

  const data = [
    {
      id: 1,
      title:
        "Understanding Transportation Costs: A Used Car Dealer Podcast with Mike Trudeau 1",
      date_time: "2024-05-08T11:26:23",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title:
        "Understanding Transportation Costs: A Used Car Dealer Podcast with Mike Trudeau 2",
      date_time: "2024-05-08T11:26:23",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title:
        "Understanding Transportation Costs: A Used Car Dealer Podcast with Mike Trudeau 3",
      date_time: "2024-05-08T11:26:23",
      image:
        "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title:
        "Understanding Transportation Costs: A Used Car Dealer Podcast with Mike Trudeau 4",
      date_time: "2024-05-08T11:26:23",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title:
        "Understanding Transportation Costs: A Used Car Dealer Podcast with Mike Trudeau 5",
      date_time: "2024-05-08T11:26:23",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
</script>

<template>
  <BaseBanner
    :image="image"
    label="Blog"
    title="A collection of articles about logistics"
  />
  <SectionBlog :data="data" />
</template>

<style lang="scss" scoped></style>
