// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@nuxt/image", "@nuxtjs/i18n"],
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

  i18n: {
    compilation: {
      strictMessage: false,
    },
    strategy: "prefix_except_default",
    defaultLocale: "en",
    lazy: true,
    langDir: "lang",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
      },
      {
        code: "de",
        iso: "de-De",
        name: "Deutsch (Germany)",
        file: "de.json",
      },
      {
        code: "cz",
        iso: "cz-CZ",
        name: "Česky",
        file: "cz.json",
      },
    ],
  },
})
