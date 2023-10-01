// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3000,
  },
  // components: true,
  pages: true,

  components: ["~/components", { path: "~/components/BlogComponents" }],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
  },

  vite: {
    optimizeDeps: {
      exclude: ["date-fns"],
    },
  },

  devtools: { enabled: true },
});
