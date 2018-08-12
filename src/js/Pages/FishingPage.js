import * as PIXI from 'pixi.js';

const FishingScene = new PIXI.Container();
const Sprite = PIXI.Sprite;

const init = (res) => {
  let BG = new Sprite(res.BG.texture);
  FishingScene.addChild(BG);
}

export const FishingPage = res => {
  init(res);
  return FishingScene
}
