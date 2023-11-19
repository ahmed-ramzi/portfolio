<template>
  <main :class="{ 'bg-primary-beige': colorSecondary }">
    <div :id="name" class="anchor-offset"></div>
    <div class="flex flex-col w-full spacing relative" :class="{ margin: !fullWidth }">
      <section class="flex w-full" :class="[center ? 'justify-center' : ' flex-col md:flex-row justify-between', { margin: fullWidth }]">
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
    name: string
    fullWidth?: boolean
    center?: boolean
    colorSecondary?: boolean
  }>(),
  {
    center: false,
    fullWidth: false,
    colorSecondary: false,
  },
)

const slots = useSlots()
</script>
