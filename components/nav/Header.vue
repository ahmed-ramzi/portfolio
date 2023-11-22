<template>
  <header>
    <nav>
      <NavHeaderLogo />
      <section v-if="isMenuActive" class="dropdown">
        <ul>
          <NavHeaderLink v-for="l in navLinks" :key="l.key">
            <nuxt-link :to="`#${l.key}`" @click="onClick(l.key)">{{ l.value }}</nuxt-link>
          </NavHeaderLink>
        </ul>
      </section>
      <div class="flex items-center gap-4">
        <NavCallMe />
        <NavHamburger @click="toggleMenu" :is-active="isMenuActive" />
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const isMenuActive = ref(false)
const { navLinks, scrollToTarget } = useNavLinks()

const width = ref(0)
let observer: ResizeObserver | null = null

onBeforeMount(() => {
  observer = new ResizeObserver((entries) => {
    width.value = entries[0].contentRect.width
  })
})
onMounted(() => {
  const element: HTMLElement | null = document.getElementById("__nuxt")
  if (element && observer) observer.observe(element)
})
onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
watch(
  () => width.value,
  (val) => {
    if (val > 1024) {
      console.log("true")
      isMenuActive.value = true
    } else {
      isMenuActive.value = false
    }
  },
  { immediate: true },
)

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value
}
const onClick = (key: string) => {
  scrollToTarget(key)
  isMenuActive.value = false
}
</script>

<style scoped>
header {
  @apply bg-primary-beige sticky top-0  w-full z-10 max-xl:px-6 max-lg:border-b;
}

nav {
  @apply flex items-center justify-between max-w-screen-xl mx-auto lg:px-4 py-4 relative;
}

@media (max-width: 1024px) {
  .dropdown {
    @apply absolute top-20 right-4 bg-white py-5 pl-10 pr-5 rounded-lg shadow-lg;
  }
}

ul {
  @apply flex flex-col lg:flex-row items-end lg:items-center gap-4 lg:gap-12;
}

@keyframes fader {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
