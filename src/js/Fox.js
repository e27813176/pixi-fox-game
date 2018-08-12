import * as PIXI from 'pixi.js';
import FoxJson from './images/FoxFishing.json';
import { createFrames } from './createAnim';

export default class {
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