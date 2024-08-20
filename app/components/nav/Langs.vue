<template>
  <BaseDropdown @close="$emit('close')">
    <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="hover:underline flex items-center gap-2">
      <icon :name="locale.code" />
      {{ locale.name }}</NuxtLink
    >
  </BaseDropdown>
</template>

<script setup lang="ts">
defineEmits(["close"])

const switchLocalePath = useSwitchLocalePath()
const { availableLocales } = useLangOptions()
</script>
