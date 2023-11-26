type Link = {
  key: string
  value: string
}

export default function useNavLinks() {
  const navLinks = [{ key: "what-i-do" }, { key: "experience" }, { key: "latest-work" }, { key: "peoples-review" }]

  return {
    navLinks,
  }
}
