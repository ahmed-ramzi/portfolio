export type Review = {
  id: string
  link: string
  color?: "green" | "red" | "yellow"
}

export type JobExperince = {
  title: string
  period: string
  company: "Dataddo" | "KidoCode" | "SEGi University"
  description: string
  loaction: string
  color: "green" | "red" | "yellow"
}

type ColorClass = "bg-primary-green" | "bg-primary-red" | "bg-primary-yellow" | "bg-stone-700" | "bg-primary-cyan"

export type LatestWork = {
  id: string
  color: ColorClass
  imgPosition: string
  link: string
}

export type IconName =
  | "dopis"
  | "monitor"
  | "server"
  | "test"
  | "profile"
  | "telephone"
  | "chevron-right"
  | "chevron-left"
  | "vue"
  | "tailwind"
  | "vite"
  | "pinia"
  | "express"
  | "typescript"
  | "cypress"
  | "vitest"
  | "postman"
  | "nuxt"
  | "firebase"
  | "mongo"
  | "hamburger"
  | "x"
  | "globe"
  | "instagram"
  | "github"
  | "linkedin"
  | "en"
  | "de"
  | "cz"
