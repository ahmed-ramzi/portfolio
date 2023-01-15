<template>
  <component :is="iconComponent" />
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string
}>()

const iconComponent = computed(() => {
  return defineAsyncComponent(() => import(`./icons/${props.name}.vue`))
})
</script>
