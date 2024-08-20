<template>
  <section class="call-me" @click="onClick">
    <p class="hover:underline hover:text-primary-green cursor-pointer font-caros-regular font-medium text-gray-500 max-sm:hidden">+420 732 727 074</p>
    <div class="white-circle">
      <Icon name="telephone" class="w-5 h-5 text-primary-green" />
    </div>
  </section>
</template>

<script setup lang="ts">
const onClick = () => {
  const number = "+420 732 727 074"
  window.location.href = `tel:${number}`
}
</script>

<style scoped>
.call-me {
  @apply flex items-center gap-5;
}
</style>
