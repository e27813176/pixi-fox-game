// import * as PIXI from 'pixi.js';
import { Sprite, Container } from '../PixiAlias';
import Fox from '../Fox';

export default class extends Container {
  constructor(res) {
    super();
    this.BG = new Sprite(res.BG.texture);
    this.addChild(this.BG);
    this.FoxPlayer = new Fox(res);
    this.addChild(this.FoxPlayer);

    this.Front = new Sprite(res.Front.texture);
    this.addChild(this.Front);
    this.visible = false;
    this.waitToStart();
  }
  waitToStart() {
    let delayTime = Math.floor(Math.random() * 10) * 1000
    console.log(delayTime);
    setTimeout(() => {
      this.start();
    }, delayTime)
  }
  start() {
    console.log('Fishing');
  }
  update() {
    this.FoxPlayer.x++;
  }
}