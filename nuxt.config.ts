// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Portfolio | Ahmed Ramzi",
      meta: [{ name: "description", content: "This is Ahmed Ramzi's portfolio website" }],
    },
  },
})
