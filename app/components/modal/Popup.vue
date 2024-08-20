<template>
  <div class="modal-container">
    <slot />
  </div>
</template>

<style scoped>
.modal-container {
  @apply p-6 bg-white centered rounded-lg cursor-default;
}
</style>
