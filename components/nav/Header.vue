<template>
  <header>
    <nav>
      <NavHeaderLogo />
      <section v-if="isMenuActive" class="dropdown">
        <ul>
          <NavHeaderLink v-for="l in navLinks" :key="l.key">
            <nuxt-link :to="`#${l.key}`" @click="onClick">{{ $t(`nav.${l.key}`) }}</nuxt-link>
          </NavHeaderLink>
          <template v-if="!isLargeScreen">
            <div class="px-6">--------</div>
            <NavHeaderLink v-for="locale in availableLocales" :key="locale.code">
              <NuxtLink :to="switchLocalePath(locale.code)" class="hover:underline flex items-center gap-2">
                <icon :name="locale.code" />
                {{ locale.name }}</NuxtLink
              >
            </NavHeaderLink>
          </template>
        </ul>
      </section>
      <div class="flex items-center gap-4">
        <div v-if="isLargeScreen" class="flex items-center gap-4">
          <div class="cursor-pointer relative">
            <div class="hover:underline flex items-center gap-2" @click="toggleLangMenu">
              <Icon name="globe" class="w-5 h-5 text-gray-500" />
              <p class="text-gray-500 uppercase">{{ locale }}</p>
            </div>
            <NavLangs v-if="isLangMenuActice" @close="isLangMenuActice = false" />
          </div>
          <div>|</div>
        </div>
        <NavCallMe />
        <NavHamburger @click="toggleMenu" :is-active="isMenuActive" />
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const isMenuActive = ref(false)
const { navLinks } = useNavLinks()

const isLangMenuActice = ref(false)

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
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})

const isLargeScreen = computed((): boolean => {
  return width.value > 1024 ? true : false
})
watch(
  () => width.value,
  () => {
    if (isLargeScreen.value) {
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

const toggleLangMenu = () => {
  console.log("Here")
  console.log(isLangMenuActice.value)

  isLangMenuActice.value = !isLangMenuActice.value
}
const onClick = () => {
  if (!isLargeScreen.value) isMenuActive.value = false
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
  @apply flex flex-col lg:flex-row items-end lg:items-center gap-4 xl:gap-10;
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
