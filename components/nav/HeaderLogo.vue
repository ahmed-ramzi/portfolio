<template>
  <section>
    <nuxt-link to="/" @click="scrollToTarget('top')">
      <Icon name="dopis" class="cursor-pointer" />
    </nuxt-link>
  </section>
</template>

<script lang="ts" setup>
const { scrollToTarget } = useNavLinks()
</script>
