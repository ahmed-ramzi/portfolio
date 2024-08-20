<template>
  <section>
    <nuxt-link :to="localePath('index')">
      <Icon name="dopis" class="cursor-pointer" />
    </nuxt-link>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
