<template>
  <main>
    <div id="what-i-do" class="anchor-offset"></div>
    <section class="skills-container">
      <div class="space-y-3 flex-shrink-0 md:w-72 lg:min-w-max">
        <WhatIDoCategory
          v-for="c in categories"
          :id="c.id"
          :key="c.id"
          @click="selected = c"
          :icon="c.icon.id"
          :design="c.icon.color"
          :skills="c.techStacks.length"
          :class="selected.id === c.id ? 'ring-1 ' + c.class + ' active' : null"
        />
      </div>
      <div class="w-full space-y-3">
        <h2>{{ $t(`what-i-do.title`) }}</h2>
        <p v-html="$t(`what-i-do.${selected.id}.description`)"></p>
        <div class="space-y-2">
          <h3>{{ $t(`what-i-do.stacks`) }}</h3>
          <div class="flex flex-wrap items-center gap-5">
            <div v-for="icon in selected.techStacks" :key="icon.id" class="relative">
              <Icon :name="icon.id" class="w-16 h-16 cursor-pointer hover:drop-shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { IconName } from "~/types/types"
import Category from "./Category.vue"

enum CategoryId {
  FRONTEND = "frontend",
  BACKEND = "backend",
  TESTING = "testing",
}

type Category = {
  id: CategoryId
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

const categories: Category[] = [
  {
    id: CategoryId.FRONTEND,
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
    id: CategoryId.BACKEND,
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
    id: CategoryId.TESTING,
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

const selected = ref<Category>(categories[0])
</script>

<style scoped>
main {
  @apply margin spacing;
}
section.skills-container {
  @apply flex flex-col-reverse  md:flex-row gap-24 max-xl:px-4;
}
</style>
