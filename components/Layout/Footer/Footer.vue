<script setup>
  // const links = [
  //   [
  //     {
  //       title: "Affiliate program",
  //       to: "/pages/affiliate-program",
  //     },
  //     {
  //       title: "Terms & conditions",
  //       to: "/pages/terms-and-conditions",
  //     },
  //     {
  //       title: "Privacy policy",
  //       to: "/pages/privacy-policy",
  //     },
  //     {
  //       title: "Copyright",
  //       to: "/pages/copyright",
  //     },
  //     {
  //       title: "Terms of use",
  //       to: "/pages/terms-of-use",
  //     },
  //     {
  //       title: "Sitemap",
  //       to: "/pages/sitemap",
  //     },
  //     {
  //       title: "Cookie preferences",
  //       to: "/pages/cookie-preferences",
  //     },
  //   ],
  //   [
  //     {
  //       title: "Blog",
  //       to: "/blog",
  //     },
  //     {
  //       title: "Cross country shipping",
  //       to: "/pages/cross-country-shipping",
  //     },
  //     {
  //       title: "Door-to-door shipping",
  //       to: "/pages/door-to-door-shipping",
  //     },
  //     {
  //       title: "Enclosed auto transport",
  //       to: "/pages/enclosed-auto-transport",
  //     },
  //   ],
  //   [
  //     {
  //       title: "Expedited car shipping",
  //       to: "/pages/expedited-car-shipping",
  //     },
  //     {
  //       title: "Motorcycle shipping",
  //       to: "/pages/motorcycle-shipping",
  //     },
  //     {
  //       title: "Open auto transport",
  //       to: "/pages/open-auto-transport",
  //     },
  //   ],
  // ];

  const contact = {
    phone: "(210) 463-4436",
    email: "justin@express-auto-carriers.com",
    address: "9919 ARBOR MONTGOMERY LN BLDG 4, CINCINNATI OH 45249-8015",
  };

  const socials = {
    whatsapp: "https://wa.me/+998906031012",
    telegram: "https://t.me/Justin_D888",
    instagram: "https://www.instagram.com/express_auto_carriers_llc/",
    facebook: "#!",
    linkedin: "#!",
  };

  const map =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.8005251312934!2d-84.2997839!3d39.292774099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884056450103db57%3A0x3e0601acd5fea580!2s9919%20Arbor%20Montgomery%20Ln%2C%20Cincinnati%2C%20OH%2045249%2C%20USA!5e0!3m2!1sen!2s!4v1719206330154!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
</script>

<template>
  <div class="border-t border-dark-blue-700 relative">
    <div class="absolute inset-0 z-[-1]">
      <img
        src="/Earth.svg"
        class="size-full object-cover object-[12%_center]"
      />
    </div>
    <div
      class="container py-10 md:pt-12 lg:pt-16 lg:pb-14 flex flex-col gap-12"
    >
      <div class="flex max-lg:flex-col gap-12">
        <div
          class="flex max-md:flex-col lg:flex-col items-start lg:justify-between h-full gap-y-10 gap-x-20"
        >
          <LayoutFooterLogo />

          <LayoutFooterContacts :data="contact" class="lg:!hidden" />
        </div>

        <div class="flex-1 flex items-start">
          <LayoutFooterContacts :data="contact" class="max-lg:!hidden flex-1" />

          <LayoutFooterSocials :data="socials" />
        </div>
      </div>

      <LayoutFooterMap :data="map" class="w-full" />
    </div>

    <LayoutFooterAbout />
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
