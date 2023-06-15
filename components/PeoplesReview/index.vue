<template>
  <CommonMainFrame center full-width color-secondary>
    <template #title>People Talk About Me</template>
    <template #description>I always wanted my work to be part of a bigger self to make people's daily lives and complex app simple to use</template>

    <section id="reviews-container">
      <div v-for="(review, index) in reviews" :key="index + 1" :id="index + 1 === currentCard ? 'current-review' : ''"><PeoplesReviewCard :review="review" /></div>
    </section>

    <!-- <div class="margin">
        <section class="scroll-buttons-container">
          <button @click="swipe(Direction.LEFT)" class="bg-white">
            <Icon name="chevron-left" class="icon" />
          </button>
          <button @click="swipe(Direction.RIGHT)" class="bg-primary-green">
            <Icon name="chevron-right" class="icon text-white" />
          </button>
        </section>
      </div> -->
  </CommonMainFrame>
</template>

<script lang="ts" setup>
import { Review } from "~~/types/types"

enum Direction {
  LEFT = "Left",
  RIGHT = "Right",
}

const currentCard = ref<number>(1)
const LastDirection = ref<Direction.LEFT | Direction.RIGHT>()

const reviews = <Review[]>[
  {
    id: 0,
    reviewer: "Ahmed Ramzi",
    jobTilte: "Customer Success",
    company: "Dataddo",
    comment: "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn't really say that it was satisfying",
  },
  {
    id: 1,
    reviewer: "Bela bela",
    jobTilte: "Customer Success",
    company: "Dataddo",
    comment: "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn't really say that it was satisfying",
  },
  {
    id: 2,
    reviewer: "Sam Sam",
    jobTilte: "Customer Success",
    company: "Dataddo",
    comment: "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn't really say that it was satisfying",
  },
  {
    id: 3,
    reviewer: "Mac Mac",
    jobTilte: "Customer Success",
    company: "Dataddo",
    comment: "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn't really say that it was satisfying",
  },
  {
    id: 4,
    reviewer: "Sean Sean",
    jobTilte: "Customer Success",
    company: "Dataddo",
    comment: "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn't really say that it was satisfying",
  },
]

function swipeAction(): void {
  const element = document.getElementById("current-review")!
  element.scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  })
}

function swipe(direction: "Left" | "Right"): void {
  // if (direction === Direction.RIGHT) {
  //   if (currentCard.value < reviews.length) {
  //     if (LastDirection.value === Direction.LEFT) currentCard.value = currentCard.value + 2
  //     else currentCard.value = currentCard.value + 1
  //   }
  //   setTimeout(() => {
  //     swipeAction()
  //   }, 100)
  //   // LastDirection.value = Direction.RIGHT
  // }
  // if (direction === Direction.LEFT) {
  //   if (currentCard.value > 1) {
  //     if (LastDirection.value === Direction.RIGHT) currentCard.value = currentCard.value - 2
  //     else currentCard.value = currentCard.value - 1
  //   }
  //   setTimeout(() => {
  //     swipeAction()
  //   }, 100)
  //   // LastDirection.value = Direction.LEFT
  // }
}
// watch(
//   () => currentCard.value,
//   (val) => console.log(val),
//   { immediate: true },
// )
</script>

<style scoped>
#reviews-container {
  @apply flex gap-10  w-full py-8 overflow-scroll px-10;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  /* px-[550px] duration-500 overflow-hidden; */
}
#reviews-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
/* #reviews-container > div:not(first-child):not(last-child)#current-review {
  @apply relative bottom-10;
} */
/* .current {
  @apply relative top-10 duration-150;
} */
.scroll-buttons-container {
  @apply flex  gap-10 justify-center;
}
button {
  @apply w-14 h-14 rounded-full shadow-md duration-300 flex justify-center items-center;
}

.icon {
  @apply w-10 h-10;
}

button:hover {
  @apply motion-safe:scale-105;
}
button:active {
  @apply opacity-40;
}
button > span {
  @apply border px-[4.5px] rounded-full;
}
* {
  @apply duration-700;
}
</style>
