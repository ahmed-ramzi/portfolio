<template>
  <section>
    <div class="round-icon flex-shrink-0" :class="[color]">
      <Icon :name="icon" class="text-white w-6 h-6" />
    </div>
    <div class="category">
      <label class="font-caros-bold">{{ label }}</label>
      <p class="leading-3 text-gray-500 text-xs">{{ skills }} skills</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IconName } from "~/types/types"

const props = withDefaults(
  defineProps<{
    design: "yellow" | "green" | "red" | "beige"
    icon: IconName
    label: string
    skills: number
  }>(),
  {
    design: "yellow",
  },
)

const color = computed(() => {
  switch (props.design) {
    case "yellow":
      return "bg-primary-yellow"
    case "green":
      return "bg-primary-green"
    case "red":
      return "bg-primary-red"
    case "beige":
      return "bg-primary-beige"
  }
})
</script>

<style scoped>
section {
  @apply w-full py-5 flex  px-9 items-center gap-3 border shadow-xl rounded-md flex-shrink-0 cursor-pointer hover:bg-primary-beige;
}
.round-icon {
  @apply rounded-full w-12 h-12 flex justify-center items-center;
}
</style>
