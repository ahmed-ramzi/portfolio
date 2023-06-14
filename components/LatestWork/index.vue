<template>
  <CommonMainFrame full-width>
    <template #title>My Latest Works</template>
    <template #description>Perfect solution for digital experience</template>
    <template #link>
      <a class="bg" link target="_blank" rel="noopener" href="https://github.com/ahmed-ramzi/"> Explore More Works</a>
    </template>
    <section class="overflow-scroll">
      <div class="flex items-center w-full p-2 pb-4 gap-4 over">
        <LatestWorkPreview v-for="work in ltsWorks" :key="work.title" :work="work" />
      </div>
    </section>
  </CommonMainFrame>
</template>

<script setup lang="ts">
import { LatestWork } from "~/types/types"

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
    description: "Customized Multi-platform App",
    color: "bg-primary-green",
    img: "notehut",
    imgPosition: "-rotate-6 scale-110 left-3 -bottom-7",
    link: "https://notehut.app/",
  },
  {
    title: "Adscientists",
    description: "Marketing Consultant Client Website",
    color: "bg-primary-cyan",
    img: "img",
    imgPosition: "class",
    link: "",
  },
  {
    title: "Mainmed",
    description: "Personal Medical Website",
    color: "bg-primary-red",
    img: "img",
    imgPosition: "class",
    link: "",
  },
  {
    title: "Some Website",
    description: "Some web of something",
    color: "bg-stone-700",
    img: "img",
    imgPosition: "class",
    link: "",
  },
]
</script>
