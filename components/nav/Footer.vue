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
              Bořivojova, Prague 13000, <br />
              Czech Republic
            </address>
          </div>
          <nav>
            <ul>
              <li v-for="l in navLinks" :key="l.key">{{ l.value }}</li>
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
  @apply flex justify-between pt-36 pb-16 border-black border-b;
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
  @apply font-caros-light cursor-pointer uppercase;
}

li:hover {
  /* @apply text-primary-green bg-white rounded-full border border-primary-green; */
  @apply text-primary-green;
}

address {
  @apply not-italic;
}
.footer-bottom {
  @apply flex items-center gap-10 py-8;
}
</style>
