<template>
  <section class="review-card">
    <div class="avatar">
      <div :class="backgroundColor.color">
        <Icon name="profile" class="w-8 h-8" />
      </div>
    </div>
    <div class="review">"{{ review.comment }}"</div>
    <div class="author">
      <h4 class="font-caros-bold" :class="backgroundColor.text">{{ review.reviewer }}</h4>
      <p class="text-xs text-slate-500">{{ review.jobTilte }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Review } from "~~/types/types"

defineProps<{
  review: Review
}>()

const backgroundColor = useRandom([
  { color: "bg-primary-yellow", text: "text-primary-yellow" },
  { color: "bg-primary-green", text: "text-primary-green" },
  { color: "bg-primary-red", text: "text-primary-red" },
])
</script>

<style scoped>
.review-card {
  @apply bg-white rounded-3xl w-96 md:w-[540px]  md:h-64 shadow-xl flex-shrink-0 p-8 relative;
}
.avatar {
  @apply absolute -top-6 -inset-0.5  w-full flex justify-center drop-shadow-lg;
}
.avatar > div {
  @apply w-16 h-16 rounded-full flex justify-center items-center;
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
