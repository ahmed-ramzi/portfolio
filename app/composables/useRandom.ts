export default function useRandom() {
  function getRandomItem(options: any[]): any {
    return options[Math.floor(Math.random() * options.length)]
  }
  return {
    getRandomItem,
  }
}
