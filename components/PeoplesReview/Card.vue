<template>
  <nuxt-link :to="review.link" target="_blank" rel="noopener">
    <section class="review-card">
      <div class="avatar">
        <div :class="selectedColor.color">
          <NuxtImg :src="`/people/${review.id}.png`" class="rounded-full shadow-md" />
        </div>
      </div>
      <div class="review">"{{ $t(`people-reviews.reviews.${review.id}.comment`) }}"</div>
      <div class="author">
        <h4 class="font-caros-bold" :class="selectedColor.text">{{ $t(`people-reviews.reviews.${review.id}.name`) }}</h4>
        <p class="text-xs text-slate-500">{{ $t(`people-reviews.reviews.${review.id}.title`) }}, {{ $t(`people-reviews.reviews.${review.id}.company`) }}</p>
      </div>
    </section>
  </nuxt-link>
</template>

<script lang="ts" setup>
import type { Review } from "~~/types/types"
type Color = {
  key: string
  color: string
  text: string
}

const props = defineProps<{
  review: Review
}>()

const { getRandomItem } = useRandom()

const colors: Color[] = [
  { key: "yellow", color: "bg-primary-yellow", text: "text-primary-yellow" },
  { key: "green", color: "bg-primary-green", text: "text-primary-green" },
  { key: "red", color: "bg-primary-red", text: "text-primary-red" },
]

const selectedColor = computed(() => {
  return props.review.color ? colors.find((item) => item.key === props.review.color) : getRandomItem(colors)
})
</script>

<style scoped>
.review-card {
  @apply bg-white rounded-3xl w-96 md:w-[540px]  md:h-64 shadow-xl flex-shrink-0 p-8 relative my-10;
}
.avatar {
  @apply absolute -top-10 -inset-0.5  w-full flex justify-center drop-shadow-lg;
}
.avatar > div {
  @apply w-24 h-24 rounded-full flex justify-center items-center;
}
.review-card > div {
  @apply text-center;
}
.review {
  @apply border-b border-gray-300 pb-4 pt-8;
}
.author {
  @apply pt-4;
}
p {
  @apply leading-3;
}
</style>
