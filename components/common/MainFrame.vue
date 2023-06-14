<template>
  <main>
    <div class="flex flex-col w-full spacing" :class="{ margin: !fullWidth }">
      <section class="flex" :class="[center ? 'justify-center' : 'justify-between']">
        <div class="flex flex-col space-y-6" :class="{ 'text-center items-center': center }">
          <h2 class="text-slate-900"><slot name="title" /></h2>
          <div v-if="slots.description" class="max-w-xl">
            <p class="text-slate-500"><slot name="description" /></p>
          </div>
        </div>
        <div v-if="slots.link">
          <slot name="link" />
        </div>
      </section>

      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    fullWidth?: boolean
    center?: boolean
  }>(),
  {
    center: false,
    fullWidth: false,
  },
)

const slots = useSlots()
</script>

<style scoped>
main {
  @apply bg-primary-beige;
}
</style>
