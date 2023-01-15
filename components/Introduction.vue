<template>
  <main>
    <div class="absolute bottom-0 w-full flex justify-center">
      <img src="~/assets/images/splash-profile.png" alt="Ahmed Ramzi" width="800" />
    </div>
    <div class="root">
      <section class="welcome">
        <div>
          <h1>Hey There, <br />I'm Ramzi</h1>
        </div>
        <div>
          <h3>I develope bueatiful things, <br />And I love what I do.</h3>
        </div>
      </section>

      <div>
        <a href="mailto:ah.ramzi@outlook.com" class="text-orange-700 text-lg font-bold underline"> ah.ramzi@outlook.com </a>
      </div>

      <div class="exp-years">
        <div>
          <h1>3</h1>
        </div>
        <div class="uppercase">
          <h3>
            Years <br />
            Experience
          </h3>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  @apply bg-primary-beige py-24 px-10 xl:px-0 relative;
}
.root {
  @apply margin space-y-32;
}
.welcome {
  @apply flex justify-between items-center;
}
.exp-years {
  @apply flex gap-4 items-center;
}
</style>
