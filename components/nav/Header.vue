<template>
  <header>
    <nav>
      <section>
        <Icon name="dopis" class="cursor-pointer" />
      </section>
      <section>
        <ul>
          <li v-for="l in navLinks" :key="l.key">
            <span>{{ l.value }}</span>
          </li>
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
  @apply flex items-center gap-12;
}
li {
  @apply rounded-full px-6;
}

li:hover {
  @apply ring-4 ring-primary-green text-primary-green duration-300 cursor-pointer;
}

li > span {
  @apply font-caros-light  cursor-pointer uppercase bg-primary-beige ring-8 ring-primary-beige;
}

.call-me {
  @apply flex items-center gap-5;
}
</style>
