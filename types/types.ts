export type Review = {
  id: number
  reviewer: string
  jobTilte: string
  company: string
  comment: string
}

export type JobExperince = {
  title: string
  period: string
  company: "Dataddo" | "KidoCode" | "SEGi University"
  description: string
  loaction: string
  color: "green" | "red" | "yellow"
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
