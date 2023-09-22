class TileAnimator {
  /**
   *
   * @param {{x:number,y:number}} currPos
   * @param {{x:number,y:number}} nextPos
   */
  constructor(color, currPos) {
    this.currPos = currPos
    this.nextPos = currPos
    this.color = color
    this.xDirection = 0
    this.yDirection = 0
  }

  getCurrPos = () => {
    return this.currPos
  }
  /**
   * @param {{x:number,y:number}} pos
   */
  setCurrPos(pos) {
    this.currPos = pos
  }
  /**
   * @param {{x:number,y:number}} pos
   */
  setNextPos(pos) {
    this.nextPos = pos
  }

  getNextPos() {
    return this.nextPos
  }

  update() {
    this.xDirection = this.currPos.x > this.nextPos.x ? -1 : 1
    this.yDirection = this.currPos.y > this.nextPos.y ? -1 : 1

    if (Math.abs(this.currPos.x - this.nextPos.x) < 0.2) {
      this.currPos.x = this.nextPos.x
    } else if (this.currPos.x != this.nextPos.x) {
      this.currPos.x += 0.1 * this.xDirection
    }
    if (Math.abs(this.currPos.y - this.nextPos.y) < 0.2) {
      this.currPos.y = this.nextPos.y
    } else if (this.currPos.y != this.nextPos.y) {
      this.currPos.y += 0.1 * this.yDirection
    }
  }

  moveTo(pos) {
    this.nextPos = pos
    this.update()
  }
}

export default TileAnimator
