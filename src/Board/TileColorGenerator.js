import tileColorData from '../Scripts/tileColorData.json'

class TileColorGenerator {
  #colorKeys
  #colorData

  constructor() {
    this.#colorData = tileColorData
    this.#colorKeys = Object.entries(this.#colorData).map(([key]) => key)
  }

  generateRandomColor = () => {
    const colorKeys = this.#colorKeys
    const randomIndex = Math.floor(Math.random() * colorKeys.length)
    const randomColor = colorKeys[randomIndex]
    return this.#colorData[randomColor]
  }
}

export default TileColorGenerator
