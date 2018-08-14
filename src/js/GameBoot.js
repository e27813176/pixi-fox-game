// import * as PIXI from 'pixi.js';
import { app } from '.';
import { initPlugin, charm } from './initPlugins';
import { GameLoading } from './GameLoading';

const Graphics = PIXI.Graphics;

export const GameBoot = () => {
  BootScene();
  initPlugin();
  GameLoading();
}

const BootScene = () => {
  let rectangle = new Graphics();
  rectangle.beginFill(0x66CC11);
  rectangle.drawRect(0, 0, 1600, 800);
  rectangle.endFill();
  rectangle.alpha = 0;
  app.stage.addChild(rectangle);
}
