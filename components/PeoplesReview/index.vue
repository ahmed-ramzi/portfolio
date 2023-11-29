<template>
  <CommonMainFrame name="peoples-review" center full-width color-secondary>
    <template #title>{{ $t("people-reviews.title") }}</template>
    <template #description>{{ $t("people-reviews.description") }}</template>
    <Carousel>
      <PeoplesReviewCard v-for="review in reviews" :key="review.id" :review="review" />
    </Carousel>
  </CommonMainFrame>
</template>

<script lang="ts" setup>
import type { Review } from "~~/types/types"

const reviews = <Review[]>[
  {
    id: "sayaghi",
    link: "https://www.linkedin.com/in/ahmedramzimuthana/details/recommendations/",
    color: "green",
  },
  {
    id: "jack",
    link: "https://blog.dataddo.com/career-progression-at-dataddo",
    color: "yellow",
  },
]
</script>
