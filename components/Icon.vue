<template>
  <component :is="iconComponent" />
</template>

<script lang="ts" setup>
import { IconName } from "~/types/types"
const props = defineProps<{
  name: IconName
}>()

const iconComponent = computed(() => {
  return defineAsyncComponent(() => import(`./icons/${props.name}.vue`))
})
</script>
