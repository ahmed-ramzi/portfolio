<template>
  <CommonMainFrame name="peoples-review" center full-width color-secondary>
    <template #title>People Talk About Me</template>
    <template #description>I always wanted my work to be part of a bigger self to make people's daily lives and complex app simple to use</template>
    <Carousel>
      <PeoplesReviewCard v-for="review in reviews" :key="review.id" :review="review" />
    </Carousel>
  </CommonMainFrame>
</template>

<script lang="ts" setup>
import type { Review } from "~~/types/types"

const reviews = <Review[]>[
  {
    id: 0,
    reviewer: "Bela bela",
    jobTilte: "Customer Success",
    company: "Dataddo",
    comment: "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn't really say that it was satisfying",
    link: "",
    color: "red",
  },
  {
    id: 1,
    reviewer: "Jack Zagorski",
    jobTilte: "Media Coordinator ",
    company: "Dataddo",
    comment: "Ramzi saw opportunities to help the company in other ways and, in his early days, ended up being a kind of jack of all trades",
    link: "https://blog.dataddo.com/career-progression-at-dataddo",
    color: "yellow",
  },
  {
    id: 2,
    reviewer: "Sam Sam",
    jobTilte: "Customer Success",
    company: "Dataddo",
    comment: "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn't really say that it was satisfying",
    link: "",
    color: "green",
  },
  {
    id: 3,
    reviewer: "Mac Mac",
    jobTilte: "Customer Success",
    company: "Dataddo",
    comment: "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn't really say that it was satisfying",
    link: "",
    color: "yellow",
  },
  {
    id: 4,
    reviewer: "Sean Sean",
    jobTilte: "Customer Success",
    company: "Dataddo",
    comment: "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn't really say that it was satisfying",
    link: "",
    color: "red",
  },
]
</script>
