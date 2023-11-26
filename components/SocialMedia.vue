<template>
  <div>
    <ul class="flex items-center gap-4" :class="row ? 'flex-row' : 'flex-col'">
      <li
        v-for="media in socialMedia"
        class="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-black cursor-pointer hover:scale-110 duration-300 flex items-center justify-center hover:bg-opacity-30"
        :class="media.color"
      >
        <nuxt-link :to="media.link" target="_blank" rel="noopener">
          <icon :name="media.id" class="w-6 h-6 md:w-8 md:h-8" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { IconName } from "~/types/types"

withDefaults(
  defineProps<{
    row?: boolean
  }>(),
  {
    row: false,
  },
)

type Social = {
  id: IconName
  color: string
  link: string
}
const socialMedia: Social[] = [
  {
    id: "github",
    link: "https://github.com/ahmed-ramzi",
    color: "hover:bg-primary-yellow",
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/ahmedramzimuthana/",
    color: "hover:bg-primary-green",
  },
  { id: "instagram", link: "https://www.instagram.com/ramzistagram/", color: "hover:bg-primary-red" },
]
</script>
