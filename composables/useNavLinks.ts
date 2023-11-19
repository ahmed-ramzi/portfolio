type Link = {
  key: string
  value: string
}

export default function useNavLinks() {
  const navLinks = [
    { key: "what-i-do", value: "Services" },
    { key: "experience", value: "Experience" },
    { key: "latest-work", value: "Works" },
    { key: "peoples-review", value: "Talks" },
  ]

  function scrollToTarget(key: string | "top"): void {
    if (key === "top") {
      window.scrollTo({ top: 0 })
    } else {
      const target = document.getElementById(key)
      if (target) {
        target.scrollIntoView()
      }
    }
  }

  return {
    navLinks,
    scrollToTarget,
  }
}
