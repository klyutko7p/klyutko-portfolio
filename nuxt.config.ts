// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-icon"],
  css: ["~/assets/css/main.css"],
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
});
