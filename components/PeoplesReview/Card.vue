<template>
  <section class="review-card">
    <div>"{{ review.comment }}"</div>
    <div>
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
</script>

<style scoped>
.review-card {
  @apply bg-white rounded-3xl w-[540px]  h-64 shadow-xl flex-shrink-0 p-8;
}
.review-card > div {
  @apply text-center;
}
.review-card > div:first-child {
  @apply border-b border-black pb-4 pt-8;
}
.review-card > div:last-child {
  @apply p-4  space-y-2;
}
p {
  @apply leading-3;
}
</style>
