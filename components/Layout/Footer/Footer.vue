<script setup>
  const links = [
    [
      {
        title: "Affiliate program",
        to: "/pages/affiliate-program",
      },
      {
        title: "Terms & conditions",
        to: "/pages/terms-conditions",
      },
      {
        title: "Privacy policy",
        to: "/pages/privacy-policy",
      },
      {
        title: "Copyright",
        to: "/pages/copyright",
      },
      {
        title: "Terms of use",
        to: "/pages/terms-of-use",
      },
      {
        title: "Sitemap",
        to: "/pages/sitemap",
      },
      {
        title: "Cookie preferences",
        to: "/pages/cookie-preferences",
      },
    ],
    [
      {
        title: "Montway blog",
        to: "/pages/montway-blog",
      },
      {
        title: "Cross country shipping",
        to: "/pages/cross-country-shipping",
      },
      {
        title: "Door-to-door shipping",
        to: "/pages/door-to-door-shipping",
      },
      {
        title: "Enclosed auto transport",
        to: "/pages/enclosed-auto-transport",
      },
    ],
    [
      {
        title: "Expedited car shipping",
        to: "/pages/expedited-car-shipping",
      },
      {
        title: "Motorcycle shipping",
        to: "/pages/motorcycle-shipping",
      },
      {
        title: "Open auto transport",
        to: "/pages/open-auto-transport",
      },
    ],
  ];

  const contact = {
    phone: "(610) 871-7777",
    email: "admin@express-auto-carriers.com",
  };

  const socials = {
    whatsapp: "#!",
    facebook: "#!",
    telegram: "#!",
    linkedin: "#!",
    instagram: "#!",
  };

  const map =
    '<iframe src="https://yandex.com/map-widget/v1/?ll=-75.032014%2C40.094124&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MDY4NjU3MzE1EltVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EsIFBlbm5zeWx2YW5pYSwgUGhpbGFkZWxwaGlhIENvdW50eSwgUGhpbGFkZWxwaGlhLCBCdXN0bGV0b24gQXZlbnVlIgoN_w-WwhXgXyBC&z=9" width="560" height="300" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>';
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
      <div class="flex max-lg:flex-col lg:grid grid-cols-3 gap-12">
        <div
          class="flex max-md:flex-col lg:flex-col items-start lg:justify-between h-full gap-y-10 gap-x-20"
        >
          <LayoutFooterLogo />

          <LayoutFooterContacts :data="contact" class="lg:!hidden" />
        </div>

        <div class="max-lg:!hidden col-span-2 flex flex-1 justify-between">
          <LayoutFooterLinks :data="links[0]" />
          <LayoutFooterLinks :data="links[1]" />
          <LayoutFooterLinks :data="links[2]" />
          <LayoutFooterSocials :data="socials" />
        </div>

        <div class="lg:!hidden flex gap-12 md:gap-20 max-md:flex-col">
          <LayoutFooterLinks :data="links[0]" />

          <div class="flex-1 flex flex-wrap gap-12 md:gap-x-20 gap-y-8">
            <LayoutFooterLinks :data="links[1]" />
            <LayoutFooterLinks :data="links[2]" />
            <LayoutFooterSocials :data="socials" />
          </div>
        </div>
      </div>

      <div class="flex lg:grid grid-cols-3 gap-12">
        <LayoutFooterContacts :data="contact" class="max-lg:!hidden" />
        <LayoutFooterMap :data="map" class="flex-1 lg:col-span-2" />
      </div>
    </div>

    <LayoutFooterAbout />
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
