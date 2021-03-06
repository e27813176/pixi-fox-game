import * as PIXI from 'pixi.js';
import { GameBoot } from './GameBoot';
import { Application } from './PixiAlias';

export const app = new Application({
  width: 1600,
  height: 800,
  autoResize: true
});

const initAppSize = () => {
  let w = window.innerWidth / 1600;
  let h = window.innerHeight / 800;
  let mul = w > h ? h : w
  app.renderer.resize(1600 * mul, 800 * mul)
  app.stage.scale.set(mul);
};

window.onresize = () => {
  let w = window.innerWidth / 1600;
  let h = window.innerHeight / 800;
  let mul = w > h ? h : w
  app.renderer.resize(1600 * mul, 800 * mul)
  app.stage.scale.set(mul);
}

document.body.appendChild(app.view);

GameBoot();
initAppSize();
