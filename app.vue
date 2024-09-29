<script setup>
  const colorMode = useColorMode();

  const config = useRuntimeConfig();

  onMounted(() => {
    colorMode.value = "light";
    localStorage.setItem("nuxt-color-mode", "light");
  });

  useSeoMeta({
    title: "Top-Rated Car Shipping & Auto Transportation Company",
    ogTitle: "Top-Rated Car Shipping & Auto Transportation Company",
    description: "Best Car Transport Service",
    ogDescription: "Best Car Transport Service",
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
