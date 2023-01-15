<template>
  <header>
    <nav>
      <section>
        <Icon name="dopis" />
      </section>
      <section class="links">
        <ul v-for="l in navLinks" :key="l.key">
          <li class="uppercase">{{ l.value }}</li>
        </ul>
      </section>
      <section class="call-me">
        <p>+420 732 727 074</p>
        <div class="bg-white w-10 h-10 rounded-full shadow-lg"></div>
      </section>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const navLinks = useNavLinks()
</script>

<style scoped>
header {
  @apply bg-primary-beige;
}
nav {
  @apply flex items-center justify-between max-w-screen-xl mx-auto lg:px-4 py-4;
}
.links {
  @apply flex items-center gap-24;
}
li {
  @apply font-caros-light cursor-pointer;
}

li:hover {
  @apply text-primary-green;
}
.call-me {
  @apply flex items-center gap-5;
}
</style>
