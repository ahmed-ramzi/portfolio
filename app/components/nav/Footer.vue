<template>
  <footer>
    <main>
      <div class="footer-top">
        <section class="call-to-action">
          <div class="max-w-[50rem]">
            <h1>{{ $t("footer.title") }}</h1>
          </div>
          <h2
            class="text-5xl font-caros-bold"
            v-html="$t('footer.description').replaceAll('<a', `<a href='mailto:ramzi.dev@outlook.com' class='text-orange-700 hover:underline'`)"
          ></h2>
          <div>
            <p class="text-2xl font-medium">{{ $t(`footer.speakToMe`) }}</p>
            <div class="flex items-center gap-6">
              <NuxtLink v-for="locale in availableLocales" :to="switchLocalePath(locale.code)">
                <icon :name="locale.code" class="w-16 h-16 hover:drop-shadow-xl" />
              </NuxtLink>
            </div>
          </div>
        </section>
        <section class="information">
          <div class="space-y-3">
            <h3 class="font-caros-bold">{{ $t("footer.address.title") }}</h3>
            <address class="text-xl" v-html="$t('footer.address.location')" />
          </div>
          <nav>
            <ul>
              <li v-for="l in navLinks" :key="l.key">
                <nuxt-link :to="`#${l.key}`">{{ $t(`nav.${l.key}`) }}</nuxt-link>
              </li>
            </ul>
          </nav>
          <section class="follow-me">
            <p class="font-caros-bold">{{ $t("footer.follow") }}</p>
            <SocialMedia row />
          </section>
        </section>
      </div>
      <div class="footer-bottom">
        <section class="flex items-center gap-3">
          <Icon name="dopis" class="cursor-pointer" />
          <p class="pl-3 border-l border-black">{{ new Date().getFullYear() }}. {{ $t("footer.rights") }}</p>
        </section>
        <div class="flex gap-2 items-center hover:underline cursor-pointer">
          <icon name="github" class="w-8 h-8" />
          <nuxt-link target="_blank" rel="noopener" to="https://github.com/ahmed-ramzi/portfolio">{{ $t("footer.link") }}</nuxt-link>
        </div>
      </div>
    </main>
  </footer>
</template>

<script lang="ts" setup>
const { navLinks } = useNavLinks()
const { availableLocales } = useLangOptions()
const switchLocalePath = useSwitchLocalePath()
</script>

<style scoped>
main {
  @apply margin;
}
.footer-top {
  @apply flex flex-col md:flex-row justify-between py-16 md:pt-36 md:pb-16 border-black gap-12 border-b;
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

li > a {
  @apply font-caros-light  cursor-pointer uppercase ring-8 ring-white;
}

address {
  @apply not-italic;
}
.footer-bottom {
  @apply flex flex-col md:flex-row items-center justify-between  py-8;
}
</style>
