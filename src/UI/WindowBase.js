class WindowBase {
  /**
   * @param {{number,x:number,y:number}} UIdata
   * @param {CanvasRenderingContext2D} ctx
   */
  static btnEventFocusList = []
  constructor(UIdata, ctx) {
    this.ctx = ctx
    this.posX = UIdata.x
    this.posY = UIdata.y
  }

  draw() {}
}

export default WindowBase
