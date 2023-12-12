<template>
  <div class="overflow-hidden">
    <span class="mask">
      <span data-show>{{ $t("introduction.movingTitle.fullstack") }}</span>
      <span>{{ $t("introduction.movingTitle.vue") }}</span>
      <span>{{ $t("introduction.movingTitle.node") }}</span>
      <span>{{ $t("introduction.movingTitle.cypress") }}</span>
      <span>{{ $t("introduction.movingTitle.engineer") }}</span>
    </span>
  </div>
</template>

<script lang="ts" setup>
const timer = ref()

const rotateText = () => {
  timer.value = setInterval(() => {
    const show = document.querySelector("span[data-show]")
    const next = show?.nextElementSibling || document.querySelector(".mask > span:first-child")
    const up = document.querySelector("span[data-up]")

    if (up) {
      up.removeAttribute("data-up")
    }

    show?.removeAttribute("data-show")
    show?.setAttribute("data-up", "")
    next?.setAttribute("data-show", "")
  }, 3000)
}
onMounted(() => {
  rotateText()
})
onBeforeUnmount(() => {
  if (timer.value) {
    clearTimeout(timer.value)
  }
})
</script>

<style scoped>
.mask {
  @apply inline-block w-full h-9 relative;
  /* margin-top: var(--offset); */
}
.mask span {
  @apply block absolute top-10 whitespace-nowrap min-w-max lg:pb-[1px];
  box-sizing: border-box;
  background-size: 100% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
}
.mask span[data-up] {
  transform: translateY(100%);
  transition: 0.5s transform ease-in-out;
}

.mask span[data-show] {
  transform: translateY(-100%);
  transition: 0.5s transform ease-in-out;
}

.mask span:nth-child(1) {
  background-image: linear-gradient(225deg, #ff3cac 0%, #611f9b 50%, #1b8bdb 100%);
}

.mask span:nth-child(2) {
  @apply bg-gradient-to-r from-[#43C6AC] to-[#074d09];
}

.mask span:nth-child(3) {
  background-image: linear-gradient(135deg, #c49e05 10%, #ff52e5 100%);
}
.mask span:nth-child(4) {
  background-image: linear-gradient(135deg, #3c8ce7 10%, #00eaff 100%);
}

.mask span:nth-child(5) {
  background-image: linear-gradient(135deg, #f97794 10%, #623aa2 100%);
}
</style>
