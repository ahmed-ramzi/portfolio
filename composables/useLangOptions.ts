export default function useLangOptions() {
  const { locale, locales } = useI18n()
  const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value)
  })

  return { availableLocales }
}
