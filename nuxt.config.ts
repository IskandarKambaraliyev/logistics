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
    domains: [
      "unsplash.com",
      "images.unsplash.com",
      "cp.express-auto-carriers.com",
      "express-auto-carriers.com",
      "express-auto-carriers.vercel.app",
      "imgbb.com",
      "i.ibb.co",
    ],
    screens: {
      sm: 640,
      md: 768,
      lg: 1280,
      xl: 1600,
    },
  },
});
