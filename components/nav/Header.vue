<template>
  <header>
    <nav>
      <section>
        <nuxt-link to="/" @click="scrollToTarget('top')">
          <Icon name="dopis" class="cursor-pointer" />
        </nuxt-link>
      </section>
      <section class="hidden lg:block">
        <ul>
          <li v-for="l in navLinks" :key="l.key">
            <nuxt-link :to="`#${l.key}`" @click="scrollToTarget(l.key)">{{ l.value }}</nuxt-link>
          </li>
        </ul>
      </section>

      <section class="call-me">
        <p class="hover:underline hover:text-primary-green cursor-pointer font-caros-regular font-medium text-gray-500">+420 732 727 074</p>
        <div class="white-circle">
          <Icon name="telephone" class="w-5 h-5 text-primary-green" />
        </div>
      </section>
      <section class="hamburger lg:hidden relative">
        <div class="white-circle" @click="toggleMenu">
          <Icon v-if="isMenuActive" name="x" class="w-6 h-6 active:rotate-180 duration-300" />
          <Icon v-else name="hamburger" class="w-8 h-8 stroke-2 active:rotate-180 duration-300" />
        </div>
        <section v-if="isMenuActive" class="sub-nav">
          <ul>
            <li v-for="l in navLinks" :key="l.key">
              <nuxt-link :to="`#${l.key}`" @click="scrollToTarget(l.key)">{{ l.value }}</nuxt-link>
            </li>
          </ul>
        </section>
      </section>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const isMenuActive = ref(false)
const { navLinks, scrollToTarget } = useNavLinks()

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value
}
</script>

<style scoped>
header {
  @apply bg-primary-beige sticky top-0  w-full z-20 max-xl:px-6 max-lg:border-b;
}
nav {
  @apply flex items-center justify-between max-w-screen-xl mx-auto lg:px-4 py-4;
}
ul {
  @apply flex flex-col lg:flex-row items-end lg:items-center gap-4 lg:gap-12;
}
li {
  @apply rounded-full px-6 duration-500;
}

li:hover {
  @apply ring-4 ring-primary-green text-primary-green cursor-pointer;
}

li > a {
  @apply font-caros-light  cursor-pointer uppercase  ring-8 ring-white lg:ring-primary-beige;
}

.sub-nav {
  @apply bg-white absolute top-12 right-0 p-5 rounded-2xl shadow-md;
  animation: fader 0.2s linear;
}

@keyframes fader {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.call-me {
  @apply hidden lg:flex items-center gap-5;
}
.white-circle {
  @apply bg-white w-10 h-10 rounded-full shadow-lg flex justify-center items-center cursor-pointer;
}
</style>
