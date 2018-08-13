// import * as PIXI from 'pixi.js';
import FoxJson from './images/FoxFishing.json';
import { createFrames } from './createAnim';
import { Sprite, Container } from './PixiAlias';

export const FoxContainer = new Container();

export const initFox = (res) => {
  let FishingRod = new Sprite(res.rod.texture);
  FishingRod.x = 560;
  FishingRod.y = 450;
  FoxContainer.addChild(FishingRod);

  let Fox = new FoxObj(res);
  FoxContainer.addChild(Fox);
  Fox.interactive = true;
  Fox.value = 0;
  Fox.mousedown = onTouchstart;
}

const onTouchstart = event => {
  console.log(event.target.value)
}

class FoxObj {
  constructor(res) {
    let FoxAnim = createFrames(res.Fox.texture.baseTexture, FoxJson, 10);
    this.Fox = new PIXI.extras.AnimatedSprite(FoxAnim);
    this.Fox.anchor.set(0.5);
    this.Fox.animationSpeed = 0.2;
    this.Fox.x = 500;
    this.Fox.vx = 0;
    this.Fox.y = 455;
    this.Fox.play();
    return this.Fox;
  }
}
