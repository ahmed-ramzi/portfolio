<template>
  <div class="bg-primary-beige">
    <main>
      <div class="root">
        <section class="welcome">
          <div>
            <h1 v-html="$t('introduction.title').replaceAll('[name]', 'Ramzi')"></h1>
          </div>
          <div>
            <h4 class="text-slate-500 md:text-end max-w-sm" v-html="$t('introduction.description')"></h4>
          </div>
        </section>

        <div class="hidden lg:block">
          <a href="mailto:ramzi.dev@outlook.com" class="text-orange-700 text-lg font-bold underline"> ramzi.dev@outlook.com </a>
        </div>

        <div class="exp-years">
          <div>
            <h1>{{ new Date().getFullYear() - 2020 }}</h1>
          </div>
          <div class="uppercase">
            <h4 v-html="$t('introduction.experience')"></h4>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 w-full">
        <div class="relative w-full flex justify-center max-lg:px-4 lg:scale-75 xl:scale-100 duration-500 max-w-screen-xl mx-auto">
          <img src="~/assets/images/splash-profile.png" alt="Ahmed Ramzi" width="800" height="600" class="lg:absolute z-0 bottom-0" />
          <SocialMedia class="absolute max-sm:hidden right-8 md:top-24 lg:-top-96" />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
main {
  @apply pt-16 pb-3 lg:py-24 relative;
}

@media (max-width: 1023px) {
  main {
    height: calc(100vh - 83px);
  }
}
.root {
  @apply margin space-y-32 md:px-10 xl:px-0;
}
.welcome {
  @apply flex flex-col md:flex-row md:justify-between md:items-center;
}
.exp-years {
  @apply hidden lg:flex gap-4 items-center;
}
</style>
