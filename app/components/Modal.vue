<template>
  <Teleport to="body">
    <ModalBlurLayer ref="blurContainer">
      <ModalPopup ref="modal">
        <slot />
      </ModalPopup>
    </ModalBlurLayer>
  </Teleport>
</template>

<script setup lang="ts">
const modal = ref<HTMLElement>()
const blurContainer = ref<HTMLElement>()
const body = ref<HTMLBodyElement>()

const emit = defineEmits(["close"])

const onClose = () => {
  body.value?.classList.remove("overflow-hidden")
  emit("close")
}

onMounted(() => {
  body.value = document.getElementsByTagName("body")[0]
  body.value.classList.add("overflow-hidden")

  useEventListener(document, "keyup", (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    }
  })
})

onClickOutside(modal, () => {
  onClose()
})
</script>
