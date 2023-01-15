<template>
  <main>
    <div class="margin">
      <section class="text-center space-y-6 max-w-xl">
        <h2>People Talk About Me</h2>
        <p>I always wanted my work to be part of a bigger self to make people's daily lives and complex app simple to use</p>
      </section>

      <section class="reviews-container">
        <PeoplesReviewCard v-for="review in reviews" :key="review.id" :review="review" />
      </section>

      <section class="scroll-buttons-container">
        <button class="bg-white"></button>
        <button class="bg-primary-green"></button>
      </section>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { Review } from "~~/types/types"

const reviews = <Review[]>[
  {
    id: 1,
    reviewer: "John Allendane",
    jobTilte: "Customer Success",
    company: "Dataddo",
    comment: "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn't really say that it was satisfying",
  },
  {
    id: 2,
    reviewer: "John Allendane",
    jobTilte: "Customer Success",
    company: "Dataddo",
    comment: "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn't really say that it was satisfying",
  },
  {
    id: 3,
    reviewer: "John Allendane",
    jobTilte: "Customer Success",
    company: "Dataddo",
    comment: "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn't really say that it was satisfying",
  },
  {
    id: 4,
    reviewer: "John Allendane",
    jobTilte: "Customer Success",
    company: "Dataddo",
    comment: "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn't really say that it was satisfying",
  },
]
</script>

<style scoped>
main {
  @apply bg-primary-beige  border border-black;
}
main > div {
  @apply py-16 flex flex-col items-center justify-center;
}
.reviews-container {
  @apply flex gap-4 overflow-scroll w-full  pt-12 pb-16 px-16;
}
.scroll-buttons-container {
  @apply flex  gap-10 justify-center;
}
button {
  @apply w-14 h-14 rounded-full shadow-2xl duration-300;
}
button:hover {
  @apply motion-safe:scale-105;
}

button:active {
  @apply opacity-40;
}
</style>
