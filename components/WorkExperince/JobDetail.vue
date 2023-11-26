<template>
  <div class="flex w-full">
    <section class="flex flex-col md:w-[90%] max-md:pl-4">
      <div class="relative">
        <div class="absolute border-2 border-style w-12 h-12 rounded-full -right-6 -top-1 flex items-center justify-center">
          <div class="rounded-full h-7 w-7" :class="[color]"></div>
        </div>
        <div class="hidden md:block">
          <p class="font-main">{{ $t(`my-experiences.experiences.${exp}.company`) }}, {{ $t(`my-experiences.experiences.${exp}.loaction`) }}</p>
        </div>
      </div>

      <div class="border-r-2 border-style md:pb-8 mt-11 md:mt-3 my-2 h-full flex flex-col">
        <p class="hidden md:block font-secondary">{{ $t(`my-experiences.experiences.${exp}.period`) }}</p>
      </div>
    </section>

    <section class="w-full pl-8 md:pl-16 pb-5 space-y-6">
      <div>
        <p class="font-main" v-html="$t(`my-experiences.experiences.${exp}.title`)"></p>
        <p class="font-secondary" v-html="$t(`my-experiences.experiences.${exp}.description`)"></p>
      </div>

      <div class="md:hidden">
        <p class="text-slate-800 font-caros-bold text-lg leading-3">
          ~ {{ $t(`my-experiences.experiences.${exp}.company`) }}, {{ $t(`my-experiences.experiences.${exp}.loaction`) }}
        </p>
        <p class="text-slate-500 font-caros-regular">{{ $t(`my-experiences.experiences.${exp}.period`) }}</p>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
export default {
  name: "Experience",
}
</script>
<script setup lang="ts">
const props = defineProps<{
  exp: number
}>()

const color = computed(() => {
  switch (props.exp) {
    case 1:
      return "bg-primary-yellow"
    case 2:
      return "bg-primary-green"
    case 3:
      return "bg-primary-red"
  }
})
</script>

<style scoped>
.font-main {
  @apply text-slate-800 font-caros-bold text-2xl;
}
.font-secondary {
  @apply text-slate-500 font-caros-regular;
}
.border-style {
  @apply border-slate-400 border-dashed;
}
</style>
