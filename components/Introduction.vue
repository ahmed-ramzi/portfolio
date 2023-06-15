<template>
  <div class="bg-primary-beige">
    <main>
      <div class="root">
        <section class="welcome">
          <div>
            <h1>Hey There, <br />I'm Ramzi</h1>
          </div>
          <div>
            <h4 class="text-slate-500">I develope bueatiful things, <br />and I love what I do.</h4>
          </div>
        </section>

        <div class="hidden lg:block">
          <a href="mailto:ah.ramzi@outlook.com" class="text-orange-700 text-lg font-bold underline"> ah.ramzi@outlook.com </a>
        </div>

        <div class="exp-years">
          <div>
            <h1>3</h1>
          </div>
          <div class="uppercase">
            <h4>
              Years <br />
              Experience
            </h4>
          </div>
        </div>
      </div>
    </main>
    <div class="relative w-full flex justify-center max-lg:px-4 lg:scale-75 xl:scale-100 duration-500">
      <img src="~/assets/images/splash-profile.png" alt="Ahmed Ramzi" width="800" height="600" class="lg:absolute z-0 bottom-0" />
    </div>
  </div>
</template>

<style scoped>
main {
  @apply pt-16 pb-3 lg:py-24 md:px-10 xl:px-0 relative;
}
.root {
  @apply margin space-y-32;
}
.welcome {
  @apply flex flex-col md:flex-row md:justify-between md:items-center;
}
.exp-years {
  @apply hidden lg:flex gap-4 items-center;
}
</style>
