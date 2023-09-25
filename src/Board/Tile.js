class Tile {
  #colorData
  constructor(colorData, pos) {
    this.#colorData = colorData
    this.prevPos = pos
    this.pos = pos
  }

  getColorData() {
    return this.#colorData
  }
}

export default Tile
