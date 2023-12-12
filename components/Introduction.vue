<template>
  <div class="bg-primary-beige">
    <main>
      <div class="root">
        <section class="welcome">
          <div class="w-full">
            <h1 v-html="$t('introduction.title').replaceAll('[name]', 'Ramzi')"></h1>
            <h2 class="text-4xl font-caros-regular w-full">
              <SlideInText />
            </h2>
          </div>
          <div class="flex-shrink-0">
            <p class="text-slate-500 leading-6 md:text-end max-w-sm" v-html="$t('introduction.description')"></p>
          </div>
        </section>

        <!-- <div class="hidden lg:block">
          <a href="mailto:ramzi.dev@outlook.com" class="text-orange-700 text-lg font-bold underline"> ramzi.dev@outlook.com </a>
        </div> -->

        <div class="exp-years">
          <div>
            <h1>{{ new Date().getFullYear() - 2018 }}</h1>
          </div>
          <div class="uppercase">
            <h4 v-html="$t('introduction.experience')"></h4>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 w-full">
        <div class="relative w-full flex justify-center max-lg:px-4 lg:scale-75 xl:scale-100 duration-500 max-w-screen-xl mx-auto">
          <img src="~/assets/images/splash-profile.png" alt="Ahmed Ramzi" width="750" height="550" class="lg:absolute my-image z-0 bottom-0" />
          <SocialMedia class="social absolute right-4 md:right-8 -top-44 md:top-24 lg:-top-96" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const height = ref(0)
let observer: ResizeObserver | null = null
onBeforeMount(() => {
  observer = new ResizeObserver((entries) => {
    height.value = entries[0].contentRect.height
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
</script>

<style scoped>
main {
  @apply pt-4 xl:pt-16 pb-3 lg:py-24 relative lg:h-[700px];
}

@media (max-height: 640px) {
  .social {
    @apply hidden;
  }
}
@media (min-height: 650px) {
  .my-image {
    @apply max-sm:scale-150;
  }
}

@media (max-width: 1023px) {
  main {
    @apply overflow-hidden;
    height: calc(100vh - 120px);
  }
}
.root {
  @apply margin space-y-32 md:px-10 xl:px-0;
}
.welcome {
  @apply flex flex-col md:flex-row md:justify-between md:items-center w-full gap-4;
}
.exp-years {
  @apply hidden lg:flex gap-4 items-center;
}
</style>
