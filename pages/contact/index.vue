<script setup>
  import { convert } from "html-to-text";

  const image = "https://cp.express-auto-carriers.com/media/slides/contact.png";

  useSeoMeta({
    title: "Contact Us | Express Auto Carriers",
    ogTitle: "Contact Us | Express Auto Carriers",
    description:
      "Contact us for any questions or concerns. We are here to help you with your auto transport needs. Call us at (205) 417-7888 or email us at justin@express-auto-carriers.com",
    ogDescription:
      "Contact us for any questions or concerns. We are here to help you with your auto transport needs. Call us at (205) 417-7888 or email us at justin@express-auto-carriers.com",
    ogImage: image,
  });
</script>

<template>
  <BaseBanner :image="image" label="Contact" title="any time, any where" />
  <SectionContactsWrapper />
</template>

<style lang="scss" scoped></style>
