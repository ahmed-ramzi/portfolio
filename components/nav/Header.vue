<template>
  <header>
    <nav>
      <section>
        <Icon name="dopis" class="cursor-pointer" />
      </section>
      <section>
        <ul>
          <li v-for="l in navLinks" :key="l.key">{{ l.value }}</li>
        </ul>
      </section>
      <section class="call-me">
        <p class="underline hover:text-primary-green cursor-pointer">+420 732 727 074</p>
        <div class="bg-white w-10 h-10 rounded-full shadow-"></div>
      </section>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const navLinks = useNavLinks()
</script>

<style scoped>
header {
  @apply bg-primary-beige sticky z-20;
}
nav {
  @apply flex items-center justify-between max-w-screen-xl mx-auto lg:px-4 py-4;
}
ul {
  @apply flex items-center gap-24;
}
li {
  @apply font-caros-light cursor-pointer uppercase hover:text-primary-green;
  cursor: pointer;
}

.call-me {
  @apply flex items-center gap-5;
}
</style>
