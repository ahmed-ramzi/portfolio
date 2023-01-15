type Links = {
  key: string
  value: string
}

const links = (): Links[] => {
  return [
    { key: "services", value: "Services" },
    { key: "works", value: "Works" },
    { key: "notes", value: "Notes" },
    { key: "experience", value: "Experience" },
  ]
}

export default links
