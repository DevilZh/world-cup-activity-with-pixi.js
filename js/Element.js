import app from './App';

const { Container, Sprite, loader} = PIXI;
const resources = loader.resources;

export default class Element {
  constructor() {
    this.wrapConfig = {
      width: 100,
      height: 210,
      x: 100,
      y: 100
    }
    //元素容器
    this.container = {};
    this.createContainer(...arguments);
  }

  createContainer() {
    const { width, height , x, y} = this.wrapConfig;
    const container = new Container();
    this.container = container;
    container.width = width;
    container.height = height;
    container.position.set( x, y);
    app.container.stage.addChild(container);
    container.interactive = true;
    this.bindEvent();
  }
  bindEvent() {
    this.container
    .on('pointerdown', this.onDragStart)
    .on('pointermove', this.onDragMove)
    .on('pointerup', this.onDragEnd)
  }
  onDragStart(e) {
    this.data = e.data;
    this.dragging = true;
    this.alpha = 0.8;
    const {x, y} = this.data.getLocalPosition(this.parent);
    this.fixedPos = {
      x: x - this.x,
      y: y - this.y
    }
  }
  onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
  }
  onDragMove() {
    if (this.dragging) {
      const { x, y } = this.fixedPos;
      const newPosition = this.data.getLocalPosition(this.parent);
      this.x = newPosition.x - x;
      this.y = newPosition.y - y;
    }
  }
}