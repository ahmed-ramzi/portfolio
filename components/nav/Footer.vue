<template>
  <footer class="">
    <main>
      <div class="footer-top">
        <section class="call-to-action">
          <div class="max-w-[50rem]">
            <h1>Let's make something amazing together</h1>
          </div>
          <h2 class="text-5xl font-caros-bold">Start by <a href="mailto:ah.ramzi@outlook.com" class="text-orange-700 underline">saying hi</a></h2>
        </section>
        <section class="information">
          <div class="space-y-3">
            <h3 class="font-caros-bold">Information</h3>
            <address>
              Lehrter Str, 10557 <br />
              Berlin
            </address>
          </div>
          <nav>
            <ul>
              <li v-for="l in navLinks" :key="l.key">
                <span>{{ l.value }}</span>
              </li>
            </ul>
          </nav>
        </section>
      </div>
      <div class="footer-bottom">
        <section>
          <Icon name="dopis" class="cursor-pointer" />
        </section>
        <p class="pl-10 border-l border-black">2023. All Rights Reserved</p>
      </div>
    </main>
  </footer>
</template>

<script lang="ts" setup>
const navLinks = useNavLinks()
</script>

<style scoped>
main {
  @apply margin;
}
.footer-top {
  @apply flex flex-col md:flex-row justify-between py-16 md:pt-36 md:pb-16 border-black border-b;
}
.call-to-action {
  @apply space-y-24;
}
.information {
  @apply space-y-12;
}
ul {
  @apply space-y-10;
}
li {
  @apply rounded-full px-6 max-w-min;
}

li:hover {
  @apply ring-4 ring-primary-green text-primary-green duration-300 cursor-pointer;
}

li > span {
  @apply font-caros-light  cursor-pointer uppercase ring-8 ring-white;
}

address {
  @apply not-italic;
}
.footer-bottom {
  @apply flex items-center gap-10 py-8;
}
</style>
