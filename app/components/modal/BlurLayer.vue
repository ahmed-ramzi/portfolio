<template>
  <div class="blur-layer">
    <slot />
  </div>
</template>

s

<style scoped>
.blur-layer {
  @apply fixed top-0 left-0 bg-slate-500/40 w-screen h-screen  backdrop-blur-sm z-30 cursor-pointer;
}
</style>
