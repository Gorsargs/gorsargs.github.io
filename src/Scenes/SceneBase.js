class SceneBase {
  constructor(canvas, ctx) {
    /**
     * @type {CanvasRenderingContext2D}
     */
    this.ctx = ctx
    /**
     * @type {HTMLCanvasElement}
     */
    this.canvas = canvas
  }

  update() {}
}

export default SceneBase
