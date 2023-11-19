<template>
  <CommonMainFrame name="latest-work" full-width>
    <template #title>My Latest Works</template>
    <template #description>Perfect solution for digital experience</template>
    <template #link>
      <a class="bg" link target="_blank" rel="noopener" href="https://github.com/ahmed-ramzi/"> Explore More Works</a>
    </template>
    <Carousel>
      <LatestWorkPreview v-for="work in ltsWorks" :key="work.title" :work="work" />
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
    title: "Wagon",
    description: "BVG Transporation Tracker",
    color: "bg-primary-yellow",
    img: "wagon",
    imgPosition: "-rotate-12 scale-125 left-5 -bottom-5",
    link: "https://wagon-ahmed-ramzi.vercel.app/",
  },
  {
    title: "Notehut",
    description: "Customized Multi-platform Note-Taking App",
    color: "bg-primary-green",
    img: "notehut",
    imgPosition: "-rotate-6 scale-110 left-3 -bottom-7",
    link: "https://notehut.app/",
  },
  {
    title: "Dataddo",
    description: "Data Integration Tool App & Website",
    color: "bg-primary-cyan",
    img: "img",
    imgPosition: "class",
    link: "https://app.dataddo.com",
  },
  {
    title: "Kody",
    description: "A lost and found app tracker",
    color: "bg-primary-red",
    img: "img",
    imgPosition: "class",
    link: "https://dataddo.com",
  },
]
</script>
