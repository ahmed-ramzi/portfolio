<template>
  <a target="_blank" rel="noopener" :href="work.link">
    <section class="w-[400px] h-80 rounded-xl relative hover:shadow-lg flex-shrink-0 p-10 overflow-hidden duration-300" :class="work.color">
      <div class="space-y-2">
        <h4 class="font-caros-bold text-white">{{ work.title }}</h4>
        <p class="max-w-[60%] text-sm text-white">{{ work.description }}</p>
      </div>
      <img :src="`/screenshots/${work.img}.png`" :alt="work.title" class="absolute" :class="[work.imgPosition]" />
    </section>
  </a>
</template>

<script setup lang="ts">
import { LatestWork } from "~/types/types"

defineProps<{
  work: LatestWork
}>()
</script>

<style scoped>
* {
  @apply cursor-pointer;
}
</style>
