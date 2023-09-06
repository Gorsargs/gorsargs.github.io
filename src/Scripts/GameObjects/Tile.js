import TilePalette from './TilePalette'

class Tile {
  #colorData
  #pos

  constructor(colorKey, pos) {
    this.#colorData = TilePalette.getColorData(colorKey)
    this.#pos = pos
  }

  getPos() {
    return this.#pos
  }

  setPos(pos) {
    this.#pos = pos
  }

  getColorData() {
    return this.#colorData
  }
}

export default Tile
