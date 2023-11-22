<template>
  <li class="link">
    <slot />
  </li>
</template>

<style>
.link {
  @apply rounded-full px-6 duration-500;
}

.link:hover {
  @apply ring-4 ring-primary-green text-primary-green cursor-pointer;
}

.link > a {
  @apply font-caros-light  cursor-pointer uppercase  ring-8 ring-white lg:ring-primary-beige;
}
</style>
