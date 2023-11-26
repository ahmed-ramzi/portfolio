<template>
  <CommonMainFrame name="experience" center color-secondary>
    <template #title>{{ $t("my-experiences.title") }}</template>
    <div>
      <WorkExperinceJobDetail v-for="id in 3" :key="id" :exp="id" />
    </div>
    <section class="absolute bottom-8 right-5">
      <nuxt-link link href="https://www.linkedin.com/in/ahmedramzimuthana/" target="_blank" rel="noopener" class="inline-flex items-center">
        <span> {{ $t("my-experiences.more") }} </span>
        <span><Icon name="chevron-right" class="w-4 h-4" /></span
      ></nuxt-link>
    </section>
  </CommonMainFrame>
</template>
