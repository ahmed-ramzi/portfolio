<template>
  <main class="carousel">
    <div class="cards-container">
      <div ref="cardsRef" class="cards">
        <slot></slot>
      </div>
    </div>
    <div class="dots">
      <span v-for="(_, index) in cards" :key="index" :class="{ active: index === activeCard }" @click="changeCard(index)"></span>
    </div>
  </main>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"

const activeCard = ref(0)
const cards = ref<HTMLInputElement[]>([])
const cardsRef = ref<HTMLDivElement | null>(null)

const options: IntersectionObserverInit = {
  threshold: 0.5,
}

let observer: IntersectionObserver | null = null

if (typeof window !== "undefined" && "IntersectionObserver" in window) {
  observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        const index = cards.value.indexOf(entry.target as HTMLInputElement)
        activeCard.value = index
      }
    })
  }, options)
}

const changeCard = (index: number) => {
  activeCard.value = index
  cards.value[index].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start",
  })
}

onMounted(() => {
  cards.value = Array.from(cardsRef.value?.children || []) as HTMLInputElement[]
  if (observer) {
    cards.value.forEach((card) => {
      observer!.observe(card)
    })
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.cards-container {
  @apply flex overflow-scroll justify-center;
}

.cards {
  @apply flex  gap-10  overflow-auto;
}
.cards:last-child {
  @apply px-6 lg:px-10;
}

.dots {
  @apply flex justify-center items-center gap-2 w-full bottom-0 xl:hidden;
}

.dots span {
  @apply w-3 h-3 rounded-full bg-gray-300 cursor-pointer;
}

.dots span.active {
  @apply bg-primary-green;
}

.cards-container::-webkit-scrollbar {
  display: none;
  visibility: hidden;
}
.cards-container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  overscroll-behavior-x: none;
  scroll-snap-type: x mandatory;
}
</style>
