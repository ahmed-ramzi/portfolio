<template>
  <div class="white-circle lg:hidden">
    <Icon v-if="isActive" name="x" class="w-6 h-6 active:rotate-180 duration-300" />
    <Icon v-else name="hamburger" class="w-8 h-8 stroke-2 active:rotate-180 duration-300" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  isActive: boolean
}>()
</script>
