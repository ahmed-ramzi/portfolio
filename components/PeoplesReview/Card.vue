<template>
  <section class="review-card">
    <div class="avatar">
      <div :class="backgroundColor">
        <Icon name="profile" class="w-8 h-8" />
      </div>
    </div>
    <div class="review">"{{ review.comment }}"</div>
    <div class="author">
      <h4 class="font-caros-bold text-primary-green">{{ review.reviewer }}</h4>
      <p>{{ review.jobTilte }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Review } from "~~/types/types"

defineProps<{
  review: Review
}>()

const backgroundColor = useRandom(["bg-primary-yellow", "bg-primary-green", "bg-primary-red"])
</script>

<style scoped>
.review-card {
  @apply bg-white rounded-3xl w-[540px]  h-64 shadow-xl flex-shrink-0 p-8 relative;
}
.avatar {
  @apply absolute -top-6 -inset-0.5  w-full flex justify-center;
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
  @apply p-4  space-y-2;
}
p {
  @apply leading-3;
}
</style>
