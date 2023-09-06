import tileColorData from '../tileColorData.json'

class TilePalette {
  static #colorKeys
  static #colorData

  static {
    this.#colorData = tileColorData
    this.#colorKeys = Object.entries(this.#colorData).map(([key]) => key)
  }

  static getColorData = colorKey => {
    if (!this.#colorKeys.includes(colorKey))
      throw new Error(
        `${colorKey} color doesn't exist in the colors data\n current valid color data is ${JSON.stringify(
          this.#colorKeys,
        )}`,
      )
    return this.#colorData[colorKey]
  }

  static getColorKeys() {
    return this.#colorKeys
  }
}

export default TilePalette
