// import * as PIXI from 'pixi.js';
import FoxJson from './images/FoxFishing.json';
import { createFrames } from './createAnim';
import { Sprite, Container } from './PixiAlias';

export default class extends Container {
  constructor(res) {
    super();
    this.FishingRod = new Sprite(res.rod.texture);
    this.addChild(this.FishingRod);
    this.FishingRod.x = 560;
    this.FishingRod.y = 450;

    this.Fox = createFox(res);
    this.addChild(this.Fox);
    this.Fox.interactive = true;
    this.Fox.value = 0;
    this.Fox.x = 500;
    this.Fox.y = 455;
    this.Fox.play();
    this.Fox.mousedown = onTouchstart;
  }
}

const onTouchstart = event => {
  console.log(event.target.value)
}

const createFox = (res) => {
  let FoxAnim = createFrames(res.Fox.texture.baseTexture, FoxJson, 10);
  let Fox = new PIXI.extras.AnimatedSprite(FoxAnim);
  Fox.anchor.set(0.5);
  Fox.animationSpeed = 0.2;
  return Fox;
}
