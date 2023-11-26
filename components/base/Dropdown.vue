<template>
  <div class="dropdown" :class="[top, textRight ? 'text-right right-0' : 'left-0']" ref="dropdown">
    <slot />
  </div>
</template>

<script setup lang="ts">
const dropdown = ref<HTMLElement>()
withDefaults(
  defineProps<{
    top?: string
    textRight?: boolean
  }>(),
  {
    top: "top-10",
    textRight: false,
  },
)

const emit = defineEmits(["close"])

onClickOutside(dropdown, () => {
  emit("close")
})
</script>

<style scoped>
.dropdown {
  @apply bg-white shadow-lg py-5 px-10 rounded-lg absolute gap-3 whitespace-nowrap flex flex-col;
}
</style>
