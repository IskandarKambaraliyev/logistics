<script setup>
  const colorMode = useColorMode();

  const config = useRuntimeConfig();

  onMounted(() => {
    colorMode.value = "light";
    localStorage.setItem("nuxt-color-mode", "light");
  });

  useSeoMeta({
    title: "Express Auto Carriers",
    ogTitle: "Express Auto Carriers",
    description:
      "Express Auto Carriers is a leading auto transport company in the USA. We offer a wide range of services to meet your auto shipping needs.",
    ogDescription:
      "Express Auto Carriers is a leading auto transport company in the USA. We offer a wide range of services to meet your auto shipping needs.",
    ogImage: "/og-image.png",
  });

  useHead({
    link: [
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
    script: [
      {
        children: `
          window.replainSettings = { id: '${config.public.replainId}' };
          (function(u){var s=document.createElement('script');s.async=true;s.src=u;
          var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
          })('https://widget.replain.cc/dist/client.js');
        `,
      },
    ],
    htmlAttrs: {
      lang: "en-US",
    },
  });
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
