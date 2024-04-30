// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "@vueuse/nuxt"],
  colorMode: {
    preference: "light",
  },
  css: ["~/assets/css/main.scss"],
  image: {
    format: ["webp"],
    provider: "ipx",
    domains: ["unsplash.com", "imgbb.com", "cp.oiltech.uz", "i.ibb.co"],
    dir: "~/assets/images",
    screens: {
      sm: 640,
      md: 768,
      lg: 1280,
      xl: 1600,
    },
  },
});
