// import * as PIXI from 'pixi.js';
import { Sprite, Container } from '../PixiAlias';

export default class extends Container {
  constructor(res) {
    super();
    this.BG = new Sprite(res.BG.texture);
    this.addChild(this.BG);
    this.Front = new Sprite(res.Front.texture);
    this.addChild(this.Front);
    this.visible = false;
  }
}