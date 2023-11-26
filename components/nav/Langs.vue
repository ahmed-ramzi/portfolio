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

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
</script>
