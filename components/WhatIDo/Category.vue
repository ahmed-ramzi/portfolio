<template>
  <section>
    <div class="round-icon flex-shrink-0" :class="[color]">
      <Icon :name="icon" class="text-white w-6 h-6" />
    </div>
    <div class="category">
      <label class="font-caros-bold text-xl text-slate-600">{{ label }}</label>
      <p class="leading-3 text-gray-500">{{ skills }} skills</p>
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
  @apply w-full py-5 flex  px-9 items-center gap-3 border hover:shadow-lg rounded-md flex-shrink-0 hover:bg-primary-beige duration-300;
}
.round-icon {
  @apply rounded-full w-16 h-16 flex justify-center items-center;
}
.active {
  @apply shadow-lg;
}
* {
  @apply cursor-pointer;
}
</style>
