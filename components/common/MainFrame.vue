<template>
  <main>
    <div>
      <div class="margin w-full spacing">
        <section class="flex justify-center">
          <div class="text-center space-y-6 max-w-xl">
            <h2 class="text-slate-900"><slot name="title" /></h2>
            <p><slot name="description" /></p>
          </div>
        </section>

        <slot />
      </div>

      <slot name="no-margin" />
    </div>
  </main>
</template>

<style scoped>
main {
  @apply bg-primary-beige;
}
</style>
