<template>
  <main>
    <section class="skills-container">
      <div class="space-y-3 flex-shrink-0 md:w-72 lg:min-w-max">
        <WhatIDoCategory
          v-for="(c, index) in categories"
          :key="c.id"
          @click="selected = index"
          :icon="c.icon.id"
          :design="c.icon.color"
          :label="c.label"
          :skills="c.techStacks.length"
          :class="selected === index ? 'ring-1 ' + c.class + ' active' : null"
        />
      </div>
      <div class="w-full space-y-3 px-2 md:px-8">
        <h2>What Do I Help?</h2>
        <p v-html="categories[selected].description"></p>
        <div class="space-y-2">
          <h3>Tech stacks</h3>
          <div class="flex flex-wrap items-center gap-5">
            <div v-for="icon in categories[selected].techStacks" :key="icon.id" class="relative">
              <Icon :name="icon.id" class="w-16 h-16 cursor-pointer hover:drop-shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { IconName } from "~/types/types"
import Category from "./Category.vue"

type Category = {
  id: string
  label: string
  description: string
  class: string
  icon: {
    id: IconName
    color: "green" | "red" | "yellow" | "beige"
  }
  techStacks: {
    id: IconName
    name: string
  }[]
}

const selected = ref(0)

const categories: Category[] = [
  {
    id: "frontend",
    label: "Frontend Frameworks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.<br /><br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    class: "ring-primary-green",
    icon: {
      id: "monitor",
      color: "green",
    },
    techStacks: [
      {
        id: "vue",
        name: "Vue.Js",
      },
      {
        id: "nuxt",
        name: "Nuxt.js",
      },
      {
        id: "vite",
        name: "Vite Dev",
      },
      {
        id: "pinia",
        name: "Pinia Store Manager",
      },
      {
        id: "tailwind",
        name: "Tailwind Css",
      },
      {
        id: "typescript",
        name: "Typescript",
      },
    ],
  },
  {
    id: "server",
    label: "Backend Projects",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.<br /><br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    class: "ring-primary-red",

    icon: {
      id: "server",
      color: "red",
    },
    techStacks: [
      {
        id: "typescript",
        name: "Typescript",
      },
      {
        id: "express",
        name: "Express JS",
      },
      {
        id: "firebase",
        name: "Firebase (Firestore)",
      },
      {
        id: "mongo",
        name: "Mongo DB",
      },
    ],
  },
  {
    id: "testing",
    label: "QA Expertise",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.<br /><br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    class: "ring-primary-yellow",
    icon: {
      id: "test",
      color: "yellow",
    },
    techStacks: [
      {
        id: "cypress",
        name: "Cypress e2e",
      },
      {
        id: "vitest",
        name: "Vitest",
      },
      {
        id: "postman",
        name: "Postman",
      },
    ],
  },
]
</script>

<style scoped>
main {
  @apply margin spacing;
}
section.skills-container {
  @apply flex flex-col-reverse  md:flex-row gap-24 max-xl:px-4;
}
</style>
