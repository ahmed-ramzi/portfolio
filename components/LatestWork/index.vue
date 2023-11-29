<template>
  <CommonMainFrame name="latest-work" full-width>
    <template #title>{{ $t(`latest-work.title`) }}</template>
    <template #description>{{ $t(`latest-work.description`) }}</template>
    <template #link>
      <a class="bg" link target="_blank" rel="noopener" href="https://github.com/ahmed-ramzi/">{{ $t(`latest-work.explore`) }}</a>
    </template>
    <Carousel>
      <LatestWorkPreview v-for="work in ltsWorks" :key="work.id" :work="work" />
    </Carousel>
  </CommonMainFrame>
</template>

<script setup lang="ts">
import type { LatestWork } from "~/types/types"

defineOptions({
  name: "LatestWork",
})

const ltsWorks: LatestWork[] = [
  {
    id: "wagon",
    color: "bg-primary-yellow",
    imgPosition: "-rotate-12 scale-125 left-5 -bottom-5",
    link: "https://wagon-ahmed-ramzi.vercel.app/",
  },
  {
    id: "notehut",
    color: "bg-primary-green",
    imgPosition: "-rotate-6 scale-110 left-3 -bottom-9",
    link: "https://notehut.app/",
  },
  {
    id: "dataddo",
    color: "bg-primary-cyan",
    imgPosition: "-rotate-6 scale-110 left-3 -bottom-7",
    link: "https://app.dataddo.com",
  },
  {
    id: "dataddo-web",
    color: "bg-primary-red",
    imgPosition: "-rotate-6 scale-110 left-3 -bottom-7",
    link: "https://dataddo.com",
  },
  // {
  //   id: "kody",
  //   color: "bg-primary-red",
  //   imgPosition: "class",
  //   link: "https://dataddo.com",
  // },
]
</script>
