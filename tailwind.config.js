/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}"],
  theme: {
    extend: {
      screens: {
        "max-2xl": { max: "1535px" },
        "max-xl": { max: "1279px" },
        "max-lg": { max: "1023px" },
        "max-md": { max: "767px" },
        "max-sm": { max: "639px" },
        "max-xs": { max: "450px" },
      },
      colors: {
        primary: {
          yellow: "#edbf48",
          green: "#286f6c",
          red: "#f26440",
          beige: "#f8f7f1",
        },
      },
      fontFamily: {
        "caros-regular": ["Caros Regular"],
        "caros-black": ["Caros Black"],
        "caros-bold": ["Caros Bold"],
        "caros-light": ["Caros Light"],
        "caros-thin": ["Caros Thin"],
      },
    },
  },
  plugins: [],
}
