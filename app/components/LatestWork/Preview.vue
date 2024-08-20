<template>
  <nuxt-link target="_blank" rel="noopener" :href="work.link">
    <section class="w-[400px] h-80 rounded-xl relative hover:shadow-lg flex-shrink-0 p-10 overflow-hidden duration-300 my-6" :class="work.color">
      <div class="space-y-2">
        <h4 class="font-caros-bold text-white">{{ $t(`latest-work.projects.${work.id}.title`) }}</h4>
        <p class="max-w-[60%] text-sm text-white">{{ $t(`latest-work.projects.${work.id}.description`) }}</p>
      </div>
      <img :src="`/screenshots/${work.id}.png`" :alt="$t(`latest-work.projects.${work.id}.title`)" class="absolute" :class="[work.imgPosition]" />
    </section>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { LatestWork } from "~/types/types"

defineProps<{
  work: LatestWork
}>()
</script>

<style scoped>
* {
  @apply cursor-pointer;
}
</style>
