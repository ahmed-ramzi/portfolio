// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@nuxt/image"],
  app: {
    head: {
      title: "Portfolio | Ahmed Ramzi",
      meta: [{ name: "description", content: "This is Ahmed Ramzi's portfolio website" }],
    },
  },
  components: true,
  devtools: {
    enabled: true,
  },
})
