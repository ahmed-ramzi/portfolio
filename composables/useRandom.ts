function getRandomItem(options: any[]): any {
  return options[Math.floor(Math.random() * options.length)]
}

export default getRandomItem
